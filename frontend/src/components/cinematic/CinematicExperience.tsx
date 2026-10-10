"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeroCanvas, type HeroCanvasHandle } from "@/components/hero/HeroCanvas";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface CinematicExperienceProps {
  children: React.ReactNode;
}

export function CinematicExperience({ children }: CinematicExperienceProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HeroCanvasHandle | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener("change", handleMotionChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  useEffect(() => {
    if (!wrapperRef.current || prefersReducedMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const frameIndex = Math.min(149, Math.max(0, Math.floor(progress * 150)));
          canvasRef.current?.renderFrame(frameIndex);
        },
      });
    }, wrapperRef);

    return () => {
      ctx.revert();
    };
  }, [prefersReducedMotion]);

  return (
    <div ref={wrapperRef} className="relative w-full overflow-clip">
      {/* Shared Persistent Canvas Background */}
      <div
        className="sticky top-0 h-[100dvh] w-full overflow-hidden pointer-events-none z-0"
        aria-hidden="true"
      >
        <HeroCanvas
          ref={canvasRef}
          currentFrame={0}
          className="w-full h-full object-cover"
        />
        {/* Localized Atmospheric Scrims — Leaves the 3D cinematic scene crisp and vibrant */}
        <div className="absolute inset-0 bg-[#111A22]/10 pointer-events-none" />
        {/* Subtle top vignette for navigation and hero clarity */}
        <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-[#111A22]/70 via-[#111A22]/20 to-transparent pointer-events-none" />
        {/* Bottom feathering gradient into the solid footer ground */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#111A22] via-[#111A22]/40 to-transparent pointer-events-none" />
      </div>

      {/* Foreground Content Flowing Naturally Over the Background */}
      <div className="relative z-10 -mt-[100dvh]">
        {children}
      </div>
    </div>
  );
}
