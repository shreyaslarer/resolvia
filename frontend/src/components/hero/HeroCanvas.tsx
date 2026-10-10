"use client";

import React, {
  useEffect,
  useRef,
  useCallback,
  useImperativeHandle,
  forwardRef,
} from "react";

export interface HeroCanvasHandle {
  renderFrame: (index: number) => void;
}

interface HeroCanvasProps {
  currentFrame?: number;
  onInitialFrameLoaded?: () => void;
  onProgressUpdate?: (loadedCount: number, total: number) => void;
  className?: string;
}

const TOTAL_FRAMES = 150;

export const HeroCanvas = forwardRef<HeroCanvasHandle, HeroCanvasProps>(
  function HeroCanvas(
    {
      currentFrame = 0,
      onInitialFrameLoaded,
      onProgressUpdate,
      className = "",
    },
    ref
  ) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES).fill(null));
    const loadedStatusRef = useRef<boolean[]>(new Array(TOTAL_FRAMES).fill(false));
    const activeFrameRef = useRef<number>(currentFrame);
    const isMountedRef = useRef<boolean>(true);

    const getFrameUrl = useCallback((index: number) => {
      const num = String(index + 1).padStart(3, "0");
      return `/3dimages/frame_${num}.jpg`;
    }, []);

    // Draw a frame onto the canvas with cover crop & aspect ratio preservation
    const drawFrame = useCallback((index: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Find requested frame, or closest available loaded frame to prevent any blank canvas
      let img: HTMLImageElement | null = null;
      if (loadedStatusRef.current[index] && imagesRef.current[index]) {
        img = imagesRef.current[index];
      } else {
        for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
          const prev = index - offset;
          if (prev >= 0 && loadedStatusRef.current[prev] && imagesRef.current[prev]) {
            img = imagesRef.current[prev];
            break;
          }
          const next = index + offset;
          if (next < TOTAL_FRAMES && loadedStatusRef.current[next] && imagesRef.current[next]) {
            img = imagesRef.current[next];
            break;
          }
        }
      }

      if (!img || !img.complete || img.naturalWidth === 0) return;

      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      const imgWidth = img.naturalWidth || 1280;
      const imgHeight = img.naturalHeight || 720;

      // Aspect-ratio cover crop calculation
      const hRatio = canvasWidth / imgWidth;
      const vRatio = canvasHeight / imgHeight;
      const ratio = Math.max(hRatio, vRatio);

      const renderWidth = imgWidth * ratio;
      const renderHeight = imgHeight * ratio;
      const renderX = (canvasWidth - renderWidth) / 2;
      const renderY = (canvasHeight - renderHeight) / 2;

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.drawImage(img, 0, 0, imgWidth, imgHeight, renderX, renderY, renderWidth, renderHeight);
    }, []);

    // Handle high-DPI canvas resizing
    const handleResize = useCallback(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      const targetWidth = Math.floor(rect.width * dpr);
      const targetHeight = Math.floor(rect.height * dpr);

      if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
        canvas.width = targetWidth;
        canvas.height = targetHeight;
      }

      drawFrame(activeFrameRef.current);
    }, [drawFrame]);

    // Load a single frame asynchronously
    const loadSingleFrame = useCallback((index: number): Promise<HTMLImageElement | null> => {
      return new Promise((resolve) => {
        if (imagesRef.current[index] && loadedStatusRef.current[index]) {
          resolve(imagesRef.current[index]);
          return;
        }

        const img = new Image();
        img.src = getFrameUrl(index);

        img.onload = () => {
          if (!isMountedRef.current) return;
          imagesRef.current[index] = img;
          loadedStatusRef.current[index] = true;

          if (index === 0) {
            onInitialFrameLoaded?.();
            drawFrame(activeFrameRef.current);
          }

          resolve(img);
        };

        img.onerror = () => {
          if (!isMountedRef.current) return;
          loadedStatusRef.current[index] = false;
          resolve(null);
        };
      });
    }, [getFrameUrl, onInitialFrameLoaded, drawFrame]);

    // Expose imperative renderFrame handle for 60fps synchronous scrubbing
    useImperativeHandle(
      ref,
      () => ({
        renderFrame: (index: number) => {
          activeFrameRef.current = index;
          drawFrame(index);

          // Priority load if frame is not buffered yet
          if (!loadedStatusRef.current[index]) {
            loadSingleFrame(index).then(() => {
              if (activeFrameRef.current === index) {
                drawFrame(index);
              }
            });
          }

          // Also lookahead 2 frames
          for (let i = 1; i <= 2; i++) {
            if (index + i < TOTAL_FRAMES && !loadedStatusRef.current[index + i]) {
              loadSingleFrame(index + i);
            }
          }
        },
      }),
      [drawFrame, loadSingleFrame]
    );

    // Progressive image loading pipeline
    useEffect(() => {
      isMountedRef.current = true;
      let cancelled = false;

      // Resize canvas initially
      handleResize();
      window.addEventListener("resize", handleResize, { passive: true });

      // Step 1: Preload poster / frame 0 immediately
      loadSingleFrame(0).then(() => {
        if (cancelled) return;
        drawFrame(0);

        // Step 2: Preload initial buffer (frames 1 to 15) for instantaneous scrubbing
        const initialBatch = Array.from({ length: 15 }, (_, i) => i + 1);
        Promise.all(initialBatch.map((idx) => loadSingleFrame(idx))).then(() => {
          if (cancelled) return;

          // Step 3: Progressive background queue for remaining frames
          let nextIndex = 16;
          const loadNextChunk = () => {
            if (cancelled || nextIndex >= TOTAL_FRAMES) return;

            const chunkSize = 5;
            const chunk = Array.from(
              { length: Math.min(chunkSize, TOTAL_FRAMES - nextIndex) },
              (_, i) => nextIndex + i
            );
            nextIndex += chunkSize;

            Promise.all(chunk.map((idx) => loadSingleFrame(idx))).then(() => {
              if (cancelled) return;
              const loadedCount = loadedStatusRef.current.filter(Boolean).length;
              onProgressUpdate?.(loadedCount, TOTAL_FRAMES);

              if (nextIndex < TOTAL_FRAMES) {
                if ("requestIdleCallback" in window) {
                  (window as unknown as { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(loadNextChunk);
                } else {
                  setTimeout(loadNextChunk, 20);
                }
              }
            });
          };

          if ("requestIdleCallback" in window) {
            (window as unknown as { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(loadNextChunk);
          } else {
            setTimeout(loadNextChunk, 20);
          }
        });
      });

      return () => {
        cancelled = true;
        isMountedRef.current = false;
        window.removeEventListener("resize", handleResize);
      };
    }, [handleResize, loadSingleFrame, drawFrame, onProgressUpdate]);

    // Handle prop-based currentFrame changes (for static/reduced motion)
    useEffect(() => {
      activeFrameRef.current = currentFrame;
      drawFrame(currentFrame);
    }, [currentFrame, drawFrame]);

    return (
      <canvas
        ref={canvasRef}
        className={`block w-full h-full pointer-events-none ${className}`}
        aria-hidden="true"
      />
    );
  }
);
