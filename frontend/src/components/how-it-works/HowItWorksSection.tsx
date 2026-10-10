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
      className="py-24 sm:py-32 relative text-white border-t border-white/[0.06]"
      aria-label="How Resolvia Works"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header — Unboxed & Spatially Connected */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 text-xs font-mono text-slate-200 glass-pill rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-signal)] shadow-[0_0_6px_rgba(214,243,106,0.6)]" />
            <span>Process & Verification</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight font-display text-white leading-tight">
            From fragmented circulars to verified next steps.
          </h2>
          <p className="text-base sm:text-lg text-slate-300/90 font-body leading-relaxed max-w-[62ch]">
            University websites publish hundreds of scanned PDFs each semester. Resolvia transforms
            this unstructured archive into an authoritative, conversational resolution engine.
          </p>
        </div>

        {/* Continuous Editorial Sequence */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative flex flex-col justify-between glass-panel rounded-2xl p-6 sm:p-7 group hover:border-white/[0.16] transition-all duration-200 space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl glass-elevated text-xs font-mono font-bold text-[var(--color-signal)] border border-white/[0.12]">
                      {step.num}
                    </span>
                    <span className="p-2.5 rounded-xl glass-pill text-slate-300 group-hover:text-[var(--color-signal)] transition-colors">
                      <Icon className="w-4 h-4" />
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold font-display text-white leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed font-body">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.08] text-xs font-mono text-slate-400">
                  {step.detail}
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout Strip — Lightweight Spatial Surface */}
        <div className="mt-16 p-6 sm:p-8 glass-panel rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-6 border border-white/[0.09] shadow-[0_16px_40px_-10px_rgba(0,0,0,0.5)]">
          <div className="space-y-1.5">
            <h4 className="text-lg sm:text-xl font-semibold font-display text-white">
              Ready to verify an academic ordinance?
            </h4>
            <p className="text-sm text-slate-300/90 font-body">
              Explore how Resolvia indexes official notifications with zero hallucination.
            </p>
          </div>
          <a
            href="#query-section"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl bg-[var(--color-signal)] text-[var(--color-ink)] hover:bg-[var(--color-signal-hover)] active:scale-[0.98] transition-all shrink-0 shadow-[0_2px_14px_rgba(214,243,106,0.2)] focus-visible:outline-2 focus-visible:outline-[var(--color-signal)]"
          >
            Start a resolution
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
