"use client";

import Image from "next/image";
import { useState } from "react";

// ─── TOKENS ─────────────────────────────────────────────────────────────────────
const INK = "#16233d";
const NAVY = "#0f1a30";
const AMBER = "#e8912a";


function ImageSlot({ src, alt, ratio = "aspect-[4/3]", rounded = "rounded-xl", className = "" }:
  { src: string; alt: string; ratio?: string; rounded?: string; className?: string }) {
  return (
    <div className={`relative w-full overflow-hidden bg-slate-200 dark:bg-gray-800 ${ratio} ${rounded} ${className}`}>
      <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
    </div>
  );
}

// ─── DATA ──────────────────────────────────────────────────────────────────────
const HERO_CHIPS = ["Accounting Firms", "Enterprise Finance", "Tax Professionals", "Audit & Assurance", "Payroll & Compliance", "Accounting Education", "AI Governance"];
const HERO_STATS = [
  { n: "7", label: "Governed Solutions" },
  { n: "4", label: "Kriton™ Modes" },
  { n: "1", label: "Shared Platform" },
];

type Solution = {
  title: string;
  img: string;
  intro: string;
  modes: string[];
  bullets: string[];
  starting: string;
  cta: string;
};

const SOLUTIONS: Solution[] = [
  {
    title: "Accounting Firms",
    img: "/images/Accounting firm partner reviewing a client engagement.png",
    intro: "Support research, workpapers, client explanations, and review workflows across engagement teams.",
    modes: ["Workflow Mode", "Review Mode"],
    bullets: [
      "Source-backed technical memos, reviewed before filing",
      "Consistent drafting across preparers and engagement types",
      "Professional-boundary controls for client-facing work",
      "Structured escalation when a matter needs partner sign-off",
    ],
    starting: "Typical starting point: a single engagement type, piloted with the reviewing partner group first.",
    cta: "Explore Firm Resources",
  },
  {
    title: "Enterprise Finance Teams",
    img: "/images/Enterprise finance leader reviewing reporting workflow.png",
    intro: "Bring consistency to accounting policy, internal reporting, and multi-entity close workflows.",
    modes: ["Workflow Mode", "Admin Mode"],
    bullets: [
      "Shared source basis for policy questions across teams",
      "Governance controls for enterprise-wide adoption",
      "Evidence-ready documentation for internal review",
      "Tenant policy configuration across regions and entities",
    ],
    starting: "Typical starting point: one finance function, scoped to a defined policy area before wider rollout.",
    cta: "Explore Finance Resources",
  },
  {
    title: "Tax Professionals",
    img: "/images/Tax professional researching jurisdictional guidance.png",
    intro: "Structure jurisdiction-aware research, source-backed explanations, and clear escalation paths.",
    modes: ["Ask Mode", "Workflow Mode"],
    bullets: [
      "Multi-jurisdiction research scoped before senior review",
      "Effective-date awareness across tax frameworks",
      "Escalation routes for higher-risk determinations",
      "Structured documentation for multi-state or multi-entity clients",
    ],
    starting: "Typical starting point: research framing and scoping, ahead of senior preparer review.",
    cta: "Request a Demo for Tax Teams",
  },
  {
    title: "Audit & Assurance Teams",
    img: "/images/Audit team reviewing evidence documentation.png",
    intro: "Strengthen evidence requirements, review notes, and professional-skepticism documentation.",
    modes: ["Review Mode", "Workflow Mode"],
    bullets: [
      "Evidence-ready traceability between guidance and conclusions",
      "Reviewer queues and escalation for flagged items",
      "Audit trail alignment with existing workpaper standards",
      "Source authority citations for assertions and sampling rationale",
    ],
    starting: "Typical starting point: one audit area, with reviewer sign-off built into the workflow from day one.",
    cta: "Explore Audit Resources",
  },
  {
    title: "Payroll & Compliance Teams",
    img: "/images/Payroll and compliance team member at work.png",
    intro: "Handle jurisdiction-aware payroll and filing questions with controlled, documented support.",
    modes: ["Ask Mode", "Workflow Mode"],
    bullets: [
      "Jurisdiction and effective-date context for payroll rules",
      "Documentation support for compliance workflows",
      "Controlled escalation for ambiguous cases",
      "Consistent handling across multi-state or multi-country payroll",
    ],
    starting: "Typical starting point: a single jurisdiction or filing type, before broader coverage.",
    cta: "Request a Demo for Payroll Teams",
  },
  {
    title: "Accounting Education",
    img: "/images/Accounting educator guiding a learner (1).png",
    intro: "Deliver governed learning support with topic pathways and academic integrity safeguards.",
    modes: ["Learning Mode"],
    bullets: [
      "Prerequisite-aware concept explanations",
      "Guided practice without shortcutting assessment",
      "Instructor-configured integrity controls",
      "Misconception warnings surfaced in context, not after the fact",
    ],
    starting: "Typical starting point: one course or module, with instructor-set boundaries from day one.",
    cta: "Explore Education Resources",
  },
  {
    title: "AI Governance Teams",
    img: "/images/AI governance team reviewing platform controls (1).png",
    intro: "Evaluate professional AI controls for security, risk, and compliance leaders assessing enterprise-wide deployment.",
    modes: ["Admin Mode", "All Modes (Review)"],
    bullets: [
      "Governance framework covering source authority, safety, and release controls",
      "Privacy, security, and provider due diligence documentation",
      "Evaluation and audit-evidence traceability for approval processes",
      "Role-based access review across every Kriton™ mode",
    ],
    starting: "Typical starting point: a documented control review, ahead of any production rollout decision.",
    cta: "Visit Trust Center",
  },
];

const COMPARISON = [
  { team: "Accounting Firms", modes: "Workflow, Review", benefit: "Consistent, source-backed drafting", scope: "One engagement type" },
  { team: "Enterprise Finance", modes: "Workflow, Admin", benefit: "Policy consistency across entities", scope: "One finance function" },
  { team: "Tax Professionals", modes: "Ask, Workflow", benefit: "Jurisdiction-aware research framing", scope: "One jurisdiction or client type" },
  { team: "Audit & Assurance", modes: "Review, Workflow", benefit: "Evidence-ready traceability", scope: "One audit area" },
  { team: "Payroll & Compliance", modes: "Ask, Workflow", benefit: "Jurisdiction-aware documentation", scope: "One jurisdiction or filing type" },
  { team: "Accounting Education", modes: "Learning", benefit: "Guided, integrity-safe practice", scope: "One course or module" },
  { team: "AI Governance", modes: "Admin, all modes (review)", benefit: "Documented control evaluation", scope: "Formal control review" },
];

const FOUNDATION = [
  { title: "Source-Governed", body: "Approved, versioned sources — not model memory alone." },
  { title: "Risk-Aware", body: "Kriton™ classifies risk before it answers, every time." },
  { title: "Evidence-Ready", body: "Traceable source bundles, model runs, and reviewer actions." },
];

const FAQS = [
  { q: "Is ZoikoLogia™ built differently for each team, or is it the same product?", a: "One governed platform, configured differently — source scope, risk policy, and workflow modes adapt to each team's needs, but the underlying governance is the same." },
  { q: "Can we start with just one team before rolling out further?", a: "Yes. Every solution has a suggested single-team starting point, so you can pilot with one group, prove the workflow, then expand." },
  { q: "Does ZoikoLogia™ replace our professionals?", a: "No. It supports professional workflows and reviewer-led decisions; final judgment stays with your team." },
  { q: "What if our team doesn't fit neatly into one category?", a: "The modes and controls are composable. We'll map your workflow to the closest solution and adjust source scope, modes, and review routing to fit." },
  { q: "Where do we start if we're evaluating for procurement or security review?", a: "Start with the AI Governance path and the Trust Center — documented controls, evidence traceability, and a structured review pack for procurement and security." },
];

// ─── inline SVG helpers ─────────────────────────────────────────────────────────
function Chevron({ open }: { open: boolean }) {
  return <svg viewBox="0 0 24 24" className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

const eyebrowAmber = "flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#d9720f]";
const serifH = "font-serif leading-tight";
const tealLink = "mt-4 inline-block text-sm font-semibold text-[#d9720f] hover:underline";

// ─── Solution card (image left, content right) ──────────────────────────────────
function SolutionCard({ s }: { s: Solution }) {
  return (
    <article className="grid overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm md:grid-cols-[minmax(0,240px)_1fr] dark:border-gray-700 dark:bg-gray-900">
      <ImageSlot src={s.img} alt={s.title} ratio="aspect-[4/3] md:aspect-auto md:h-full" rounded="rounded-none" />
      <div className="p-6">
        <h3 className={`text-xl ${serifH}`}>{s.title}</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">{s.intro}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {s.modes.map((m) => (
            <span key={m} className="rounded-full bg-[#0d9488]/10 px-3 py-1 text-xs font-medium text-[#0d9488]">{m}</span>
          ))}
        </div>

        <ul className="mt-4 space-y-2">
          {s.bullets.map((b) => (
            <li key={b} className="flex gap-3 text-sm leading-relaxed text-slate-600 dark:text-gray-300">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: AMBER }} /><span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 rounded-md bg-[#efe6d2] px-4 py-3 text-[13px] leading-relaxed text-slate-600 dark:bg-gray-800 dark:text-gray-300">
          {s.starting}
        </div>

        <a href="#" className={tealLink}>{s.cta} →</a>
      </div>
    </article>
  );
}

// ─── PAGE ───────────────────────────────────────────────────────────────────────
export default function Solutions() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const amberBtn = "rounded-md px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90";

  return (
    <main className="bg-[#faf7f0] font-sans text-[#16233d] dark:bg-gray-900 dark:text-white">

      {/* ─── Hero (navy) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8 lg:py-20" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="text-white">
            <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#f0a54a]">
              <span className="h-px w-6 bg-[#f0a54a]" /> Solutions
            </p>
            <h1 className={`mt-5 max-w-xl text-[clamp(2rem,4.5vw,2.9rem)] ${serifH}`}>Governed AI accounting intelligence, built around your team.</h1>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-slate-300/85">
              ZoikoLogia™ with Kriton™ adapts to how accounting firms, finance teams, tax practices, audit functions,
              payroll teams, educators, and governance teams actually work — not a one-size-fits-all chatbot.
            </p>
            <div className="mt-8">
              <a href="#" className={amberBtn} style={{ backgroundColor: AMBER }}>Book a Demo</a>
            </div>
            <p className="mt-6 max-w-lg text-xs leading-relaxed text-slate-400/70">
              Every solution below is built on the same governed platform — source authority, risk classification, and
              audit evidence, applied to your specific workflow.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {HERO_CHIPS.map((c) => (
                <span key={c} className="rounded-full border border-white/20 px-3 py-1 text-xs font-medium text-slate-200">{c}</span>
              ))}
            </div>
          </div>

          <div className="relative">
            <ImageSlot src="/images/div.hero-photo-wrap.png" alt="Governed accounting team at work" ratio="aspect-[4/3]" />
            <div className="absolute bottom-0 left-0 right-0 grid grid-cols-3 gap-px overflow-hidden rounded-b-xl bg-white/10">
              {HERO_STATS.map((s) => (
                <div key={s.label} className="bg-[#0f1a30]/85 px-3 py-4 text-center text-white">
                  <p className="text-2xl font-bold" style={{ color: AMBER }}>{s.n}</p>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-300/80">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Solution cards ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          {SOLUTIONS.slice(0, 6).map((s) => <SolutionCard key={s.title} s={s} />)}
        </div>
        {/* AI Governance spans full width, like the mockup */}
        <div className="mx-auto mt-8 max-w-6xl">
          <SolutionCard s={SOLUTIONS[6]} />
        </div>
      </section>

      {/* ─── Solutions at a glance (comparison table, cream) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: "#f5efe0" }}>
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Solutions at a Glance</p>
          <h2 className={`mt-4  text-black text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Quick comparison across every team.</h2>
          <div className="mt-8 overflow-x-auto rounded-xl border border-black/10 dark:border-gray-700">
            <table className="w-full min-w-[680px] text-left text-sm">
              <thead style={{ backgroundColor: INK }}>
                <tr className="text-[11px] uppercase tracking-wide text-white/80">
                  <th className="px-5 py-3 font-semibold">Team</th>
                  <th className="px-5 py-3 font-semibold">Primary Modes</th>
                  <th className="px-5 py-3 font-semibold">Key Benefit</th>
                  <th className="px-5 py-3 font-semibold">Typical Pilot Scope</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/10 dark:divide-gray-700">
                {COMPARISON.map((r) => (
                  <tr key={r.team} className="bg-white dark:bg-gray-900">
                    <td className="px-5 py-4 font-semibold text-[#d9720f]">{r.team}</td>
                    <td className="px-5 py-4 text-slate-600 dark:text-gray-300">{r.modes}</td>
                    <td className="px-5 py-4 text-slate-600 dark:text-gray-300">{r.benefit}</td>
                    <td className="px-5 py-4 text-slate-600 dark:text-gray-300">{r.scope}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── Built on one governed platform ─── */}
      <section className="px-4 py-16 text-center sm:px-6 md:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#d9720f]">Built on One Governed Platform</p>
          <h2 className={`mt-3 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Every solution shares the same foundation.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {FOUNDATION.map((f) => (
              <div key={f.title} className="rounded-xl border border-black/10 bg-white p-6 text-left shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-md" style={{ backgroundColor: "#efe6d2" }}>
                  <span className="text-[#d9720f]">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                </div>
                <h3 className={`text-base ${serifH}`}>{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-gray-300">{f.body}</p>
              </div>
            ))}
          </div>
          <a href="#" className="mt-8 inline-block text-sm font-semibold text-[#0d9488] hover:underline">See how the platform works →</a>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-3xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Frequently Asked</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Solutions questions, answered plainly.</h2>
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
        <div className="mx-auto max-w-5xl rounded-2xl px-8 py-14 text-center" style={{ backgroundColor: NAVY }}>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#f0a54a]">Find Your Fit</p>
          <h2 className={`mx-auto mt-3 max-w-xl text-[clamp(1.6rem,3vw,2.2rem)] text-white ${serifH}`}>Talk to us about your team's specific workflow.</h2>
          <div className="mt-8 flex justify-center">
            <a href="#" className={amberBtn} style={{ backgroundColor: AMBER }}>Book a Demo</a>
          </div>
        </div>
      </section>
    </main>
  );
}