import React from "react";
import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#111A22] text-slate-400 border-t border-white/[0.08] py-16 relative z-20" aria-label="Site Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 pb-12 border-b border-white/[0.07]">
          <div className="space-y-3 max-w-md">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-signal)] shadow-[0_0_8px_rgba(214,243,106,0.4)]" />
              <span className="text-xl font-semibold tracking-tight font-display text-white">
                Resolvia
              </span>
            </div>
            <p className="text-sm font-body text-slate-300/80 leading-relaxed">
              A conversational interface for structured information access in institutional systems.
              Resolvia connects student questions directly to governing university ordinances and official sources.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm font-medium">
            <a
              href="#query-section"
              className="text-slate-300 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-signal)] rounded-sm"
            >
              Resolution Engine
            </a>
            <a
              href="#how-it-works"
              className="text-slate-300 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-signal)] rounded-sm"
            >
              Process & Methodology
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-white glass-pill px-3 py-1.5 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-signal)]"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[var(--color-signal)]" />
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {new Date().getFullYear()} Resolvia Academic Information System. All rights reserved.</p>
          <p className="max-w-xl text-slate-400/80 leading-relaxed">
            Disclaimer: Resolvia is an educational assistance interface. Official notifications issued by Visvesvaraya Technological University remain the binding authority.
          </p>
        </div>
      </div>
    </footer>
  );
}
