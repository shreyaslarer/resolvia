import React from "react";
import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#111A22] text-[#94A3B8] border-t border-[#35434C] py-14" aria-label="Site Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 pb-12 border-b border-[#35434C]/60">
          <div className="space-y-3 max-w-md">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-signal)]" />
              <span className="text-xl font-semibold tracking-tight font-display text-white">
                Resolvia
              </span>
            </div>
            <p className="text-sm font-body text-[#CBD5E1] leading-relaxed">
              A conversational interface for structured information access in institutional systems.
              Resolvia connects student questions directly to governing university ordinances and official sources.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-8 text-sm font-medium">
            <a
              href="#query-section"
              className="text-[#E2E8F0] hover:text-[var(--color-signal)] transition-colors"
            >
              Resolution Engine
            </a>
            <a
              href="#how-it-works"
              className="text-[#E2E8F0] hover:text-[var(--color-signal)] transition-colors"
            >
              How it works
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#94A3B8] hover:text-white"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[var(--color-signal)]" />
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#64748B]">
          <p>© {new Date().getFullYear()} Resolvia Academic Information System. All rights reserved.</p>
          <p className="max-w-xl">
            Disclaimer: Resolvia is an educational assistance interface. Official notifications issued by Visvesvaraya Technological University remain the binding authority.
          </p>
        </div>
      </div>
    </footer>
  );
}
