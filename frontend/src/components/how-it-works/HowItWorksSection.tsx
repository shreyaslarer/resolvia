import React from "react";
import { MessageSquareText, Layers, FileCheck, ArrowUpRight } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      title: "Ask naturally in your own words",
      desc: "Describe your academic situation, doubt, or procedural requirement without knowing official university circular numbers or legal jargon.",
      icon: MessageSquareText,
      detail: "Handles ambiguous terminology, acronyms, and branch-specific questions.",
    },
    {
      num: "02",
      title: "Isolate what applies to your scheme",
      desc: "Resolvia identifies your exact degree scheme (2018, 2021, or 2022 CBCS regulations) and cross-checks the relevant notifications.",
      icon: Layers,
      detail: "Eliminates confusion between autonomous and non-autonomous guidelines.",
    },
    {
      num: "03",
      title: "Inspect the official source & execute",
      desc: "Get an understandable explanation alongside the exact clause reference, issuing registrar details, and an actionable step-by-step checklist.",
      icon: FileCheck,
      detail: "Direct attribution to official PDF circulars and administrative deadlines.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-24 sm:py-32 relative text-white border-t border-[#35434C]/30"
      aria-label="How Resolvia Works"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16 p-6 sm:p-7 rounded-2xl bg-[#111A22]/40 border border-[#35434C]/40 backdrop-blur-xs shadow-lg">
          <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-signal)] font-semibold block mb-2">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight font-display text-white leading-tight">
            From fragmented circulars to verified next steps.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#CBD5E1] font-body leading-relaxed">
            University websites publish hundreds of scanned PDFs each semester. Resolvia transforms
            this unstructured archive into an authoritative, conversational resolution engine.
          </p>
        </div>

        {/* Process Line Architecture — Translucent & Flowing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative flex flex-col justify-between pt-6 border-t-2 border-[var(--color-signal)]/70 bg-[#111A22]/35 border-x border-b border-[#35434C]/40 rounded-b-xl p-6 group hover:border-[var(--color-signal)]/40 transition-colors backdrop-blur-xs shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl sm:text-3xl font-mono font-bold text-[var(--color-signal)]">
                      {step.num}
                    </span>
                    <span className="p-2.5 rounded-lg bg-[#111A22]/50 border border-[#35434C]/60 text-[var(--color-signal)] group-hover:bg-[var(--color-signal)] group-hover:text-[var(--color-ink)] transition-colors">
                      <Icon className="w-5 h-5" />
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold font-display text-white mb-3 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-base text-[#CBD5E1] font-body leading-relaxed mb-6">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#35434C]/40 text-xs font-mono text-[#94A3B8]">
                  {step.detail}
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout Strip — Lightweight Translucent Surface */}
        <div className="mt-16 p-6 sm:p-8 bg-[#111A22]/30 text-white rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-6 border border-[#35434C]/50 backdrop-blur-xs shadow-lg">
          <div className="space-y-1">
            <h4 className="text-lg font-semibold font-display text-white">
              Ready to verify an academic ordinance?
            </h4>
            <p className="text-sm text-[#94A3B8] font-body">
              Explore how Resolvia indexes official notifications with zero hallucination.
            </p>
          </div>
          <a
            href="#query-section"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold rounded-lg bg-[var(--color-signal)] text-[var(--color-ink)] hover:bg-[var(--color-signal-hover)] transition-all shrink-0 focus-visible:outline-2 focus-visible:outline-[var(--color-signal)]"
          >
            Start a resolution
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
