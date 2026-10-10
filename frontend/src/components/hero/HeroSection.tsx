"use client";

import React from "react";
import { ArrowDown, ArrowUpRight, Cpu, FileCheck, Layers, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section
      className="relative w-full min-h-[100dvh] text-white flex flex-col justify-between pt-26 sm:pt-32 pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      aria-label="Resolvia Hero"
    >
      {/* Top Eyebrow Header */}
      <div className="space-y-2 max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 text-xs font-mono text-slate-200 glass-pill rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-signal)] shadow-[0_0_6px_rgba(214,243,106,0.6)]" />
          <span>Academic Information Access · VTU Regulations</span>
        </div>
      </div>

      {/* Main Headline & Supporting Statement */}
      <div className="my-auto py-8 sm:py-12 max-w-3xl space-y-6">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.04] font-display text-white">
          Make the rules <br />
          <span className="text-[var(--color-signal)]">make sense.</span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-200/90 leading-relaxed max-w-[54ch] font-body">
          Ask your institutional question. Get a clear explanation, the official source
          behind it, and your practical next step.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="#query-section"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold rounded-xl bg-[var(--color-signal)] text-[var(--color-ink)] hover:bg-[var(--color-signal-hover)] active:scale-[0.98] transition-all shadow-[0_4px_20px_rgba(214,243,106,0.22)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-signal)]"
          >
            Start a resolution
            <ArrowUpRight className="w-5 h-5" />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 px-5 py-3.5 text-base font-medium rounded-xl text-white glass-pill hover:bg-white/[0.08] active:scale-[0.98] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-signal)]"
          >
            How it works
          </a>
        </div>
      </div>

      {/* Architectural Capability Ribbon — Integrated Spatial Glass Surface */}
      <div className="my-6 glass-ambient rounded-2xl p-4 sm:p-5 border border-white/[0.08] shadow-[0_8px_32px_-8px_rgba(0,0,0,0.4)]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0 md:divide-x md:divide-white/[0.08]">
          <div className="md:px-5 first:pl-0 space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-semibold font-display tracking-wide text-white">
              <Layers className="w-4 h-4 text-[var(--color-signal)]" />
              <span>Dispersed Ordinances</span>
            </div>
            <p className="text-xs text-slate-300/85 leading-relaxed font-body">
              Indexes unaligned university circulars, amendment notifications, and scheme guidelines into one structured repository.
            </p>
          </div>

          <div className="md:px-5 space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-semibold font-display tracking-wide text-white">
              <FileCheck className="w-4 h-4 text-[var(--color-signal)]" />
              <span>Clause Attribution</span>
            </div>
            <p className="text-xs text-slate-300/85 leading-relaxed font-body">
              Isolates governing academic clauses across 2018, 2021, and 2022 CBCS regulations with pinpoint accuracy.
            </p>
          </div>

          <div className="md:px-5 last:pr-0 space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-semibold font-display tracking-wide text-white">
              <Cpu className="w-4 h-4 text-[var(--color-signal)]" />
              <span>Structured Resolution</span>
            </div>
            <p className="text-xs text-slate-300/85 leading-relaxed font-body">
              Synthesizes plain-language answers, verifiable gazette citations, and executable student next steps.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Information & Scroll Indicator */}
      <div className="border-t border-white/[0.08] pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-slate-400">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[var(--color-signal)]" />
            Official VTU Regulations & Circulars
          </span>
          <span className="hidden md:inline-block text-slate-600">|</span>
          <span className="hidden md:inline-block">Authoritative Registrar Attributions</span>
        </div>

        <div className="flex items-center gap-2 text-slate-300">
          <span className="animate-bounce">
            <ArrowDown className="w-3.5 h-3.5 text-[var(--color-signal)]" />
          </span>
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}
