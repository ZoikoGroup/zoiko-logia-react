"use client";

import Image from "next/image";
import { useState } from "react";

const INK = "#16233d";
const NAVY = "#0f1a30";
const AMBER = "#e8912a";


function ImageSlot({ src, alt, ratio = "aspect-[4/3]", rounded = "rounded-xl", className = "" }:
  { src: string; alt: string; ratio?: string; rounded?: string; className?: string }) {
  return (
    <div className={`relative w-full overflow-hidden bg-slate-200 dark:bg-gray-800 ${ratio} ${rounded} ${className}`}>
      <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
    </div>
  );
}

// ─── DATA ──────────────────────────────────────────────────────────────────────
const WHAT_CARDS = [
  { title: "The AI Advisor", body: "Kriton™ is the interface professionals actually talk to — the place questions get asked and answers get reviewed.", link: "Explore the Platform" },
  { title: "Built on ZoikoLogia™", body: "Every Kriton™ answer draws on the governed platform underneath — source authority, ontology, and risk classification.", link: "Explore Platform" },
  { title: "Professional Boundary", body: "Kriton™ supports judgment. It does not replace qualified review, audit opinions, or legal/tax advice.", link: "Explore Platform Limits" },
  { title: "Governed by Design", body: "Risk classification, escalation, and audit evidence are built into every interaction, not added after the fact.", link: "Explore Governance" },
];

type Mode = { key: string; title: string; blurb: string; bullets: string[] };
const MODES: Mode[] = [
  { key: "Learning Mode", title: "Learning Mode", blurb: "For students, trainees, and professionals developing accounting knowledge.", bullets: ["Topic explanations with prerequisite-aware learning paths", "Misconception warnings surfaced in context", "Guided practice with academic-integrity safeguards"] },
  { key: "Workflow Mode", title: "Workflow Mode", blurb: "For active engagement work that needs source-backed structure and review.", bullets: ["Source-backed drafting with citations attached", "Assumptions and limitations made explicit", "Reviewer handoff built into the flow"] },
  { key: "Review Mode", title: "Review Mode", blurb: "For reviewers checking work against source authority and standards.", bullets: ["Citation panel for fast source verification", "Flagged items routed into a review queue", "Evidence records aligned to workpaper standards"] },
  { key: "Admin Mode", title: "Admin Mode", blurb: "For governance leads configuring policy, access, and release controls.", bullets: ["Role-based access and policy configuration", "Source bundle and risk-policy management", "Audit-evidence and release oversight"] },
];

const STEPS = [
  { title: "Question Received", body: "Mode, jurisdiction, and tenant context identified." },
  { title: "Sources Retrieved", body: "Only approved, governed sources become candidates." },
  { title: "Risk Classified", body: "Low, Medium, High, or Restricted — before any answer." },
  { title: "Answer Drafted", body: "Kriton™ responds with citations and limitation language." },
  { title: "Evidence Recorded", body: "Source bundle, model run, and reviewer trail preserved." },
];

type Role = { title: string; body: string; img: string };
const ROLES: Role[] = [
  { title: "Accounting Firms", body: "Workflow and Review modes for engagement teams.", img: "/images/Accounting firm partner reviewing client-service materials.png" },
  { title: "Enterprise Finance", body: "Workflow and Admin modes across entities.", img: "/images/div.role-hero-photo.png" },
  { title: "Audit & Assurance", body: "Review Mode for evidence-ready traceability.", img: "/images/Audit and compliance leader reviewing evidence materials.png" },
  { title: "Education", body: "Learning Mode with integrity safeguards.", img: "/images/testpic.png" },
];

const FAQS = [
  { q: "What is Kriton™?", a: "Kriton™ is the AI advisor inside ZoikoLogia™. It helps users ask accounting questions, learn concepts, work through workflows, and review higher-risk matters within governed boundaries." },
  { q: "Is Kriton™ a chatbot?", a: "No. It's a governed advisor built on the ZoikoLogia™ platform — every answer is source-bound, risk-classified, and logged, rather than open-ended chat." },
  { q: "Does Kriton™ replace accountants or auditors?", a: "No. Kriton™ supports professional workflows and reviewer-led decisions; final judgment, audit opinions, and sign-off stay with your team." },
  { q: "How does Kriton™ reduce hallucination risk?", a: "Answers draw only from approved, versioned sources, pass through risk classification before drafting, and carry citations plus explicit limitation language." },
  { q: "What happens when a question is high-risk?", a: "High-risk or restricted questions are flagged, limited, or routed to human review before any answer reaches the user, with the reasoning captured as evidence." },
  { q: "Can Kriton™ be configured per organization?", a: "Yes. Modes, source scope, risk policy, access controls, and release governance are all configurable to your organization's standards." },
];

// ─── inline SVG helpers ─────────────────────────────────────────────────────────
function Chevron({ open }: { open: boolean }) {
  return <svg viewBox="0 0 24 24" className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function Check({ className = "h-4 w-4" }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

const eyebrowAmber = "flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#d9720f]";
const eyebrowTeal = "text-[11px] font-bold uppercase tracking-[0.16em] text-[#0d9488] dark:text-[#34d39e]";
const serifH = "font-serif leading-tight";
const tealLink = "text-sm font-semibold text-[#0d9488] hover:underline";

// ─── PAGE ───────────────────────────────────────────────────────────────────────
export default function Page() {
  const [mode, setMode] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const active = MODES[mode];

  const amberBtn = "rounded-md px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90";

  return (
    <main className="bg-[#faf7f0] font-sans text-[#16233d] dark:bg-gray-900 dark:text-white">

      {/* ─── Hero (navy) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8 lg:py-20" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="text-white">
            <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#f0a54a]">
              <span className="h-px w-6 bg-[#f0a54a]" /> Meet Kriton™
            </p>
            <h1 className={`mt-5 max-w-xl text-[clamp(2rem,4.5vw,2.9rem)] ${serifH}`}>The AI advisor inside ZoikoLogia™.</h1>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-slate-300/85">
              Kriton™ helps accounting, finance, audit, tax, and education teams ask questions, work through workflows,
              learn concepts, and review higher-risk matters — all governed by source authority and risk classification.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#" className={amberBtn} style={{ backgroundColor: AMBER }}>Book a Demo</a>
              <a href="#" className="rounded-md border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10">See Kriton™ in Action</a>
            </div>
            <p className="mt-6 max-w-md text-xs leading-relaxed text-slate-400/70">
              Kriton™ is designed to support professional judgment, not replace it. It does not issue binding
              determinations, certify compliance, or substitute for qualified review.
            </p>
          </div>

          {/* Hero image with a floating "answer" card */}
          <div className="relative">
            <ImageSlot src="/images/Enterprise finance team reviewing reports.png" alt="Team working with Kriton AI advisor" ratio="aspect-[4/3]" />
            <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-[#0f1a30]/95 p-4 text-white shadow-xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#f0a54a]">Kriton™ AI Advisor</p>
              <ul className="mt-2 space-y-1 text-xs text-slate-200">
                <li className="flex items-center gap-2"><span className="text-[#0d9488]"><Check className="h-3 w-3" /></span> Source-backed answer</li>
                <li className="flex items-center gap-2"><span className="text-red-400">•</span> Risk: High</li>
                <li className="flex items-center gap-2"><span className="text-[#0d9488]">•</span> Escalation available</li>
              </ul>
              <button type="button" className="mt-3 w-full rounded-md bg-white py-2 text-xs font-semibold text-[#16233d]">View Full Answer</button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── What Kriton is ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> What Kriton™ Is</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Not a chatbot bolted onto accounting software.</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHAT_CARDS.map((c) => (
              <div key={c.title} className="flex flex-col rounded-xl border border-black/10 bg-white p-5 shadow-sm dark:border-gray-7
              00 dark:bg-gray-900">
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-md" style={{ backgroundColor: "#efe6d2" }}>
                  <span className="text-[#d9720f]"><Check className="h-4 w-4" /></span>
                </div>
                <h3 className="text-base font-bold">{c.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-gray-300">{c.body}</p>
                <a href="#" className={`${tealLink} mt-4 inline-block`}>{c.link} →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Four modes (tabs, cream) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: "#f5efe0" }}>
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> How Kriton™ Adapts</p>
          <h2 className={`mt-4 text-black text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Four modes, one governed advisor.</h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-600 dark:text-gray-800">
            The mode isn't just a label — it changes what evidence Kriton™ requires before it answers, and what
            limitation language gets attached.
          </p>

          <div className="mt-8 flex flex-wrap gap-6 border-b border-black/10 dark:border-gray-700">
            {MODES.map((m, i) => (
              <button key={m.key} type="button" onClick={() => setMode(i)}
                className={`-mb-px border-b-2 pb-3 text-sm font-semibold transition-colors ${mode === i ? "border-[#0d9488] text-[#0d9488]" : "border-transparent text-slate-800 hover:text-[#16233d] dark:text-gray-800"}`}>
                {m.title}
              </button>
            ))}
          </div>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h3 className={`text-xl text-black ${serifH}`}>{active.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-600 dark:text-gray-800">{active.blurb}</p>
              <ul className="mt-5 space-y-3">
                {active.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-[15px] leading-relaxed text-slate-600 dark:text-gray-800">
                    <span className="mt-0.5 text-[#0d9488]"><Check className="h-4 w-4" /></span>{b}
                  </li>
                ))}
              </ul>
            </div>
            <ImageSlot src="/images/kriton/mode.png" alt={`${active.title} illustration`} ratio="aspect-[4/3]" />
          </div>
        </div>
      </section>

      {/* ─── How Kriton works (5 steps) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> How Kriton™ Works</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Five governed steps between a question and an answer.</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {STEPS.map((s, i) => (
              <div key={s.title}>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#0d9488] text-sm font-bold text-[#0d9488]">{i + 1}</div>
                <h3 className="mt-3 text-sm font-bold">{s.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-gray-400">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── See Kriton in action (receipt mock, cream) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: "#f5efe0" }}>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#d9720f]">See Kriton™ in Action</p>
          <h2 className={`mt-3 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Every answer comes with its receipt attached.</h2>

          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 text-left shadow-xl" style={{ backgroundColor: NAVY }}>
            <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="ml-3 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">Kriton™ · Workflow Mode</span>
            </div>
            <div className="space-y-4 p-6 text-white">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">Question</p>
                <p className="mt-1 text-sm">How should revenue recognition be assessed for a multi-element customer contract?</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">Mode: Workflow</span>
                <span className="rounded-full bg-red-500/20 px-3 py-1 text-xs text-red-300">Risk: High</span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">Source: High Confidence</span>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">Reporting Framework</p>
                <div className="mt-1 flex gap-2">
                  <span className="rounded bg-[#0d9488]/25 px-2 py-0.5 text-xs font-semibold text-[#34d39e]">IFRS 15</span>
                  <span className="rounded bg-white/10 px-2 py-0.5 text-xs text-slate-300">ASC 606</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-slate-200/90">
                Under <span className="rounded bg-[#0d9488]/25 px-1 text-[#34d39e]">IFRS 15 · §22</span> Kriton™ identifies
                distinct performance obligations within the contract, flags the variable-consideration assumptions
                requiring review, and surfaces the applicable disclosure triggers before drafting workflow guidance.
              </p>
              <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">Citation Panel · Tier A Authority</p>
                <p className="mt-1 text-xs text-slate-300">IFRS 15 — Revenue from Contracts with Customers, §22 · Effective 2018-01-01 · v4.2</p>
              </div>
              <div className="grid grid-cols-3 gap-3 border-t border-white/10 pt-3 text-xs">
                <div><p className="text-slate-400">Bundle ID</p><p className="text-slate-200">SB-88231</p></div>
                <div><p className="text-slate-400">Risk Policy</p><p className="text-slate-200">RP-07</p></div>
                <div><p className="text-slate-400">Reply</p><p className="text-slate-200">Complete</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Who uses Kriton (role cards) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Who Uses Kriton™</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>The same advisor, adapted to your role.</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ROLES.map((r) => (
              <article key={r.title} className="flex flex-col overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <ImageSlot src={r.img} alt={r.title} ratio="aspect-[16/10]" rounded="rounded-none" />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-base font-bold">{r.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-gray-300">{r.body}</p>
                  <a href="#" className={`${tealLink} mt-4 inline-block`}>Explore →</a>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href="#" className={tealLink}>See all solutions →</a>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-3xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Frequently Asked</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>About Kriton™.</h2>
          <div className="mt-8 divide-y divide-black/10 border-y border-black/10 dark:divide-gray-700 dark:border-gray-700">
            {FAQS.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q}>
                  <button type="button" onClick={() => setOpenFaq(open ? null : i)} aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 py-4 text-left text-[15px] font-semibold">
                    {f.q}<Chevron open={open} />
                  </button>
                  {open && <p className="pb-4 text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">{f.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Final CTA (navy) ─── */}
      <section className="px-4 pb-20 sm:px-6 md:px-8">
        <div className="mx-auto max-w-5xl rounded-2xl px-8 py-16 text-center" style={{ backgroundColor: NAVY }}>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0d9488]">Start With Kriton™</p>
          <h2 className={`mx-auto mt-3 max-w-xl text-[clamp(1.6rem,3vw,2.2rem)] text-white ${serifH}`}>See Kriton™ work through your own questions.</h2>
          <p className="mx-auto mt-3 max-w-lg text-[15px] leading-relaxed text-slate-300/80">
            Book a demo and bring a real accounting, tax, audit, or workflow question — we'll show you exactly how Kriton™ handles it.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#" className={amberBtn} style={{ backgroundColor: AMBER }}>Book a Demo</a>
            <a href="#" className="rounded-md border border-white/25 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10">Explore the Platform</a>
            <a href="#" className="px-3 py-2.5 text-sm font-semibold text-[#f0a54a] hover:underline">Visit Trust Center →</a>
          </div>
        </div>
      </section>
    </main>
  );
}