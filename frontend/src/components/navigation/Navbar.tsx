"use client";

import React, { useState } from "react";
import { ArrowUpRight, Menu, X, ShieldCheck } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile drawer on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#111A22]/45 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_24px_-4px_rgba(0,0,0,0.35)] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between">
        {/* Wordmark */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="flex items-center gap-2.5 text-white hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-[var(--color-signal)] rounded-sm"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-signal)] shadow-[0_0_8px_rgba(214,243,106,0.5)]" aria-hidden="true" />
            <span className="text-xl sm:text-2xl font-semibold tracking-tight font-display text-white">
              Resolvia
            </span>
          </a>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[11px] font-mono text-slate-300 bg-white/[0.04] border border-white/[0.08] rounded-full">
            <ShieldCheck className="w-3 h-3 text-[var(--color-signal)]" />
            VTU Scheme 2022
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          <a
            href="#how-it-works"
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-signal)] rounded-sm"
          >
            How it works
          </a>
          <a
            href="#query-section"
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-signal)] rounded-sm"
          >
            Resolution Engine
          </a>
          <a
            href="#how-it-works"
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-signal)] rounded-sm"
          >
            Process
          </a>
        </nav>

        {/* Desktop Action */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#query-section"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-lg bg-[var(--color-signal)] text-[var(--color-ink)] hover:bg-[var(--color-signal-hover)] active:scale-[0.98] transition-all shadow-[0_2px_12px_rgba(214,243,106,0.18)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-signal)]"
          >
            Start a resolution
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white focus-visible:outline-2 focus-visible:outline-[var(--color-signal)] rounded-md"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-panel"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-nav-panel" className="md:hidden border-t border-white/[0.08] bg-[#111A22]/95 backdrop-blur-2xl px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-white py-1"
            >
              How it works
            </a>
            <a
              href="#query-section"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-white py-1"
            >
              Resolution Engine
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-white py-1"
            >
              Process
            </a>
          </nav>
          <div className="pt-2">
            <a
              href="#query-section"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-lg bg-[var(--color-signal)] text-[var(--color-ink)]"
            >
              Start a resolution
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
