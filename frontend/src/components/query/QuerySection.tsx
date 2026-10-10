"use client";

import React, { useState } from "react";
import {
  Search,
  FileText,
  CheckCircle2,
  ExternalLink,
  ShieldAlert,
  ArrowRight,
  BookmarkCheck,
} from "lucide-react";

interface SampleQuery {
  id: string;
  query: string;
  scheme: string;
  title: string;
  summary: string;
  officialSource: {
    title: string;
    refNo: string;
    issueDate: string;
    authority: string;
    clause: string;
  };
  steps: string[];
}

const SAMPLE_QUERIES: SampleQuery[] = [
  {
    id: "reval",
    query: "What documents and fees do I need for VTU revaluation?",
    scheme: "2022 Scheme & 2021 Scheme (All Branches)",
    title: "Answer: Revaluation & Photocopy Procedure",
    summary:
      "Under VTU examination guidelines, students may apply for Photocopy of answer scripts and Revaluation within 10 days of online result announcement. Applications are accepted exclusively via the VTU examination portal through college entry.",
    officialSource: {
      title: "Notification: Submission of Applications for Revaluation & Photocopy of Answer Scripts",
      refNo: "VTU/BGM/Reg(Eval)/Exam/2023-2024/1482",
      issueDate: "14th November 2023",
      authority: "Registrar (Evaluation), Visvesvaraya Technological University, Belagavi",
      clause: "Section 4.2 — Revaluation Eligibility & Fee Schedule (₹400/subject for photocopy, ₹500/subject for revaluation)",
    },
    steps: [
      "Access the student portal through your college exam coordinator or direct VTU portal link.",
      "Submit candidate USN, select specific course codes requiring revaluation.",
      "Pay the prescribed fee (₹500 per subject for Revaluation) online before the 10-day window closes.",
      "Retain the generated application acknowledgement slip with transaction reference for dispute resolution.",
    ],
  },
  {
    id: "credits",
    query: "How do carry-over and vertical progression credits work under the 2022 scheme?",
    scheme: "2022 CBCS Regulation (UG Engineering)",
    title: "Answer: Vertical Progression & Minimum Credit Requirements",
    summary:
      "Vertical progression from 1st/2nd year to higher semesters requires passing a specified threshold of earned credits. For progression to the 3rd year (5th semester), students must not have more than 4 backlogs from 1st and 2nd semesters combined.",
    officialSource: {
      title: "Regulations Governing the Degree of Bachelor of Engineering (B.E./B.Tech.) Under Choice Based Credit System (CBCS)",
      refNo: "VTU/Aca/OS-C/2022-23/3419",
      issueDate: "28th August 2022",
      authority: "Registrar, Academic Section, VTU Belagavi",
      clause: "Clause 22OB 7.1 — Vertical Progression Criteria for Non-Autonomous Affiliated Colleges",
    },
    steps: [
      "Calculate total earned credits across Semester 1 and Semester 2 against the required 40 minimum credits.",
      "Ensure backlogs in the 1st year do not exceed the permitted threshold of 4 non-cleared courses.",
      "Check with your department mentor if remedial/fast-track supplementary exams are scheduled prior to odd-semester registration.",
    ],
  },
  {
    id: "withdrawal",
    query: "What is the official procedure for temporary semester break or withdrawal?",
    scheme: "VTU Academic Ordinances 2021/2022",
    title: "Answer: Temporary Discontinuation & Resumption Rules",
    summary:
      "A student may be permitted to break study temporarily for medical grounds or legitimate emergencies for a maximum cumulative period of 2 semesters, subject to prior approval from the University Executive Council upon recommendation of the college Principal.",
    officialSource: {
      title: "Ordinance on Academic Continuity, Re-admission and Break of Study",
      refNo: "VTU/BGM/Academic/Reg/2021-22/894",
      issueDate: "19th January 2022",
      authority: "Executive Council / Office of the Registrar, VTU",
      clause: "Regulation Section 16 — Temporary Discontinuation of Studies (Maximum degree duration: N+2 years)",
    },
    steps: [
      "Submit a written application with authentic medical/supporting documents to the College Principal.",
      "Obtain College Academic Council endorsement before the commencement of the semester examination cycle.",
      "College forwards proposal to the VTU Registrar for formal approval and student status preservation.",
    ],
  },
];

export function QuerySection() {
  const [selectedQuery, setSelectedQuery] = useState<SampleQuery>(SAMPLE_QUERIES[0]);
  const [inputVal, setInputVal] = useState<string>(SAMPLE_QUERIES[0].query);
  const [isResolved, setIsResolved] = useState<boolean>(true);

  const handleSelectSample = (sample: SampleQuery) => {
    setSelectedQuery(sample);
    setInputVal(sample.query);
    setIsResolved(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const matched = SAMPLE_QUERIES.find((q) =>
      inputVal.toLowerCase().includes(q.id) ||
      q.query.toLowerCase().includes(inputVal.toLowerCase().slice(0, 10))
    );

    if (matched) {
      setSelectedQuery(matched);
    }
    setIsResolved(true);
  };

  return (
    <section
      id="query-section"
      className="py-24 sm:py-32 relative text-white border-t border-white/[0.06]"
      aria-label="Institutional Resolution Engine"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header — Unboxed & Spatially Integrated */}
        <div className="max-w-3xl mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 text-xs font-mono text-slate-200 glass-pill rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-signal)] shadow-[0_0_6px_rgba(214,243,106,0.6)]" />
            <span>Resolution Engine</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight font-display text-white leading-tight">
            What do you need help with?
          </h2>
          <p className="text-base sm:text-lg text-slate-300/90 font-body leading-relaxed max-w-[62ch]">
            Ask in your own words. Resolvia connects your inquiry directly to governing
            university notifications and delivers a verified next step.
          </p>
        </div>

        {/* Elevated Liquid Glass Composer */}
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="relative flex flex-col sm:flex-row items-stretch gap-2.5 p-2 rounded-2xl glass-elevated focus-within:border-[var(--color-signal)]/60 focus-within:ring-2 focus-within:ring-[var(--color-signal)]/20 transition-all">
            <div className="flex items-center pl-3.5 text-slate-400 flex-1">
              <Search className="w-5 h-5 mr-3 shrink-0 text-slate-400" />
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Ask about revaluation fees, attendance criteria, carry-over credits..."
                className="w-full py-3 text-base sm:text-lg text-white placeholder:text-slate-400 bg-transparent focus:outline-hidden font-body"
                aria-label="Ask your institutional question"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold rounded-xl bg-[var(--color-signal)] text-[var(--color-ink)] hover:bg-[var(--color-signal-hover)] active:scale-[0.98] transition-all cursor-pointer shadow-[0_2px_14px_rgba(214,243,106,0.2)] focus-visible:outline-2 focus-visible:outline-[var(--color-signal)]"
            >
              <span>Resolve inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>

        {/* Suggestion Prompts — Lightweight Spatial Pills */}
        <div className="mb-12 space-y-2.5">
          <span className="text-xs font-mono text-slate-400 block tracking-wider uppercase">
            Sample Inquiries (Click to inspect demonstration):
          </span>
          <div className="flex flex-wrap gap-2.5">
            {SAMPLE_QUERIES.map((sq) => (
              <button
                key={sq.id}
                type="button"
                onClick={() => handleSelectSample(sq)}
                className={`text-xs sm:text-sm px-4 py-2 rounded-xl transition-all cursor-pointer font-medium focus-visible:outline-2 focus-visible:outline-[var(--color-signal)] ${
                  selectedQuery.id === sq.id
                    ? "bg-[var(--color-signal)] text-[var(--color-ink)] font-semibold shadow-[0_2px_12px_rgba(214,243,106,0.22)]"
                    : "glass-pill text-slate-300 hover:text-white hover:bg-white/[0.08]"
                }`}
              >
                {sq.query}
              </button>
            ))}
          </div>
        </div>

        {/* Resolution Demonstration Canvas — Editorial Glass Panel */}
        {isResolved && (
          <div className="glass-panel rounded-3xl p-6 sm:p-9 shadow-[0_24px_64px_-16px_rgba(0,0,0,0.6)] space-y-8 animate-in fade-in duration-300">
            {/* Header / Scheme Badge */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono text-[var(--color-signal)] glass-pill rounded-full font-medium">
                  <BookmarkCheck className="w-3.5 h-3.5" />
                  {selectedQuery.scheme}
                </span>
                <h3 className="text-2xl sm:text-3xl font-semibold font-display text-white">
                  {selectedQuery.title}
                </h3>
              </div>
              <div className="text-xs font-mono text-slate-400 text-left sm:text-right">
                <span className="inline-block px-3 py-1.5 bg-white/[0.03] border border-white/[0.07] rounded-lg text-slate-300">
                  Illustrative Example · Official VTU Statute Attribution
                </span>
              </div>
            </div>

            {/* Plain-Language Explanation */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Synthesized Plain-Language Explanation
              </h4>
              <p className="text-base sm:text-lg text-slate-100 leading-relaxed font-body max-w-[75ch]">
                {selectedQuery.summary}
              </p>
            </div>

            {/* Two Column Layout: Actionable Steps vs Official Evidence Source */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-2">
              {/* Practical Next Steps */}
              <div className="space-y-4">
                <h4 className="text-sm font-semibold font-display text-white tracking-wide flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-signal)]" />
                  <span>Practical Next Action Steps (Illustrative Checklist)</span>
                </h4>
                <ol className="space-y-2.5 font-body text-sm text-slate-200">
                  {selectedQuery.steps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors">
                      <span className="shrink-0 w-6 h-6 rounded-full bg-white/[0.06] border border-white/[0.1] text-xs font-mono font-semibold flex items-center justify-center text-[var(--color-signal)]">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed text-slate-200">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Official Source Attributions Card */}
              <div className="glass-ambient rounded-2xl p-6 border border-white/[0.09] flex flex-col justify-between space-y-5">
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--color-signal)]">
                      <FileText className="w-4 h-4" />
                      Official Institutional Authority
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      VTU Belagavi
                    </span>
                  </div>

                  <h5 className="text-base font-semibold font-display text-white leading-snug">
                    {selectedQuery.officialSource.title}
                  </h5>

                  <div className="space-y-2 text-xs font-mono text-slate-300 pt-1">
                    <p>
                      <span className="text-slate-400">Ref No:</span>{" "}
                      {selectedQuery.officialSource.refNo}
                    </p>
                    <p>
                      <span className="text-slate-400">Issued Date:</span>{" "}
                      {selectedQuery.officialSource.issueDate}
                    </p>
                    <p>
                      <span className="text-slate-400">Issuing Office:</span>{" "}
                      {selectedQuery.officialSource.authority}
                    </p>
                    <div className="p-3 rounded-xl bg-[var(--color-signal)]/10 border border-[var(--color-signal)]/25 text-[var(--color-signal)]">
                      {selectedQuery.officialSource.clause}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Independent Source Verification</span>
                  <a
                    href="https://vtu.ac.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[var(--color-signal)] hover:underline focus-visible:outline-2 focus-visible:outline-[var(--color-signal)]"
                  >
                    <span>View University Gazette</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Disclaimer & Transparency Note */}
            <div className="pt-4 border-t border-white/[0.08] flex items-start gap-3 text-xs text-slate-400 font-mono leading-relaxed">
              <ShieldAlert className="w-4 h-4 text-[var(--color-signal)] shrink-0 mt-0.5" />
              <span>
                Demonstration Notice: Resolvia explains institutional information. The issuing
                university remains the sole governing authority. Verify all individual dates and fee
                submissions with your college examination cell.
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
