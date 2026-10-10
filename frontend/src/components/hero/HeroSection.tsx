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
        <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono uppercase tracking-widest text-[var(--color-signal)] border border-[#35434C]/60 bg-[#111A22]/35 backdrop-blur-xs rounded">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-signal)]" />
          <span>Academic Information Access · VTU Regulations</span>
        </div>
        <h2 className="text-xs font-mono text-[#94A3B8] tracking-wider uppercase block">
          A Conversational Interface for Structured Information Access in Institutional Systems
        </h2>
      </div>

      {/* Main Headline & Supporting Statement */}
      <div className="my-auto py-8 sm:py-12 max-w-3xl space-y-6">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] font-display text-white drop-shadow-xs">
          Make the rules <br />
          <span className="text-[var(--color-signal)]">make sense.</span>
        </h1>
        <p className="text-lg sm:text-xl text-[#CBD5E1] leading-relaxed max-w-[58ch] font-body">
          Ask your institutional question. Get a clear explanation, the official source
          behind it, and your practical next step.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="#query-section"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold rounded-lg bg-[var(--color-signal)] text-[var(--color-ink)] hover:bg-[var(--color-signal-hover)] active:bg-[var(--color-signal-pressed)] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-signal)] shadow-sm"
          >
            Start a resolution
            <ArrowUpRight className="w-5 h-5" />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 px-5 py-3.5 text-base font-medium rounded-lg text-white border border-[#35434C] hover:border-[#64748B] hover:bg-[#111A22]/40 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-signal)]"
          >
            How it works
          </a>
        </div>
      </div>

      {/* Narrative Architectural Pillars — Translucent & Non-obstructive */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="p-4 sm:p-5 bg-[#111A22]/30 border border-[#35434C]/50 rounded-xl space-y-2 hover:border-[#35434C]/80 transition-colors">
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-[var(--color-signal)]">
            <Layers className="w-4 h-4" />
            <span>Dispersed Ordinances</span>
          </div>
          <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
            Index unaligned university circulars, amendment notifications, and scheme guidelines.
          </p>
        </div>

        <div className="p-4 sm:p-5 bg-[#111A22]/30 border border-[#35434C]/50 rounded-xl space-y-2 hover:border-[#35434C]/80 transition-colors">
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-[var(--color-signal)]">
            <FileCheck className="w-4 h-4" />
            <span>Clause Attribution</span>
          </div>
          <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
            Isolate precise academic clauses across 2018, 2021, and 2022 CBCS regulations.
          </p>
        </div>

        <div className="p-4 sm:p-5 bg-[#111A22]/30 border border-[#35434C]/50 rounded-xl space-y-2 hover:border-[#35434C]/80 transition-colors">
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-[var(--color-signal)]">
            <Cpu className="w-4 h-4" />
            <span>Structured Resolution</span>
          </div>
          <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
            Synthesize clear answers, verifiable gazette citations, and executable student next steps.
          </p>
        </div>
      </div>

      {/* Bottom Information & Scroll Indicator */}
      <div className="border-t border-[#35434C]/50 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#94A3B8]">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[var(--color-signal)]" />
            Official VTU Regulations & Circulars
          </span>
          <span className="hidden md:inline-block text-[#475569]">|</span>
          <span className="hidden md:inline-block">Authoritative Registrar Attributions</span>
        </div>

        <div className="flex items-center gap-2 text-[#CBD5E1]">
          <span className="animate-bounce">
            <ArrowDown className="w-3.5 h-3.5 text-[var(--color-signal)]" />
          </span>
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}
