"use client";

import Image from "next/image";
import { useState } from "react";

const NAVY = "#0f1a30";
const NAVY_DEEP = "#0b1426";
const AMBER = "#e8912a";
const CREAM = "#f2ece0";
const TEAL = "#0d9488";

function ImageSlot({ src, alt, ratio = "aspect-[4/3]", rounded = "rounded", className = "" }:
  { src: string; alt: string; ratio?: string; rounded?: string; className?: string }) {
  return (
    <div className={`relative w-full overflow-hidden bg-slate-200 dark:bg-gray-800 ${ratio} ${rounded} ${className}`}>
      <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
    </div>
  );
}

// ─── DATA ──────────────────────────────────────────────────────────────────────

/** §01 — the three distinct modes */
const MODES: { dot: string; title: string; body: string; boundary: string }[] = [
  {
    dot: TEAL,
    title: "Learn",
    body: "Develop understanding through structured explanation, worked examples and concept maps backed by approved sources.",
    boundary: "No production materials, no certification, no curriculum.",
  },
  {
    dot: AMBER,
    title: "Practice",
    body: "Work through synthetic scenarios, multiple choice, error spotting, classification and sequencing activities with explainable feedback.",
    boundary: "Not client preparation. Not professional evidence.",
  },
  {
    dot: "#3b82f6",
    title: "Review",
    body: "Inspect your attempts, view criteria steps, identify what needs revision and compare approaches with source-linked rationale.",
    boundary: "A record of attempt evidence, not a performance assessment.",
  },
];

/** §01 — the three adjacent routes */
const ADJACENT: [string, string][] = [
  ["Ask Accounting Questions", "Relates a question to content and evidence — not a full learning sequence."],
  ["Workflow Mode", "Separate destination for governed production and reporting steps. Not covered here."],
  ["Professional Boundaries", "Persistent related route. Practice completion does not authorize professional work."],
];

/** §02 — the five-step goal builder */
const STEPS: { label: string; options: string[]; initial: number }[] = [
  { label: "Step 1 — Learning goal", options: ["Understand a concept", "Practice application", "Compare frameworks", "Spot an error", "Explore a source"], initial: 0 },
  { label: "Step 2 — Topic", options: ["Revenue recognition", "Inventory cost flow", "Audit evidence", "Payroll controls"], initial: 0 },
  { label: "Step 3 — Framework", options: ["IFRS", "US GAAP", "Both"], initial: 1 },
  { label: "Step 4 — Level", options: ["Foundational", "Developing", "Advanced"], initial: 1 },
  { label: "Step 5 — Activity format", options: ["Guided explanation", "Worked example", "Multiple choice", "Error spotting", "Classification", "Sequencing", "Mixed practice"], initial: 0 },
];

/** §03 — source cards */
type SourceStatus = "current" | "superseded" | "internal";

const SOURCES: { title: string; status: SourceStatus; rows: [string, string][] }[] = [
  {
    title: "ASC 606-10-25",
    status: "current",
    rows: [
      ["Authority", "FASB — Financial Accounting Standards Board"],
      ["Version / date", "Effective fiscal years beginning after Dec 15, Year 9-7"],
      ["Applicability", "US GAAP — all entities. Revenue from contracts with customers"],
      ["Locator", "ASC 606-10-25-1 through 25-9 (synthetic reference)"],
      ["Reason used", "Directly addresses performance obligation recognition timing"],
    ],
  },
  {
    title: "IAS 18 Revenue",
    status: "superseded",
    rows: [
      ["Authority", "IASB — International Accounting Standards Board"],
      ["Version / date", "Superseded by IFRS 15, effective Jan 1, Year 5-3"],
      ["Applicability", "Historical context only — IFRS entities pre-adoption"],
      ["Locator", "IAS 18.14 (synthetic reference)"],
      ["Reason used", "Used in comparison lesson to illustrate treatment differences before IFRS 15 adoption"],
    ],
  },
  {
    title: "Internal Policy CAP-012",
    status: "internal",
    rows: [
      ["Authority", "Finance Policy Center · Corporate Accounting"],
      ["Version / date", "Rev 4 · Approved Year 5"],
      ["Applicability", "Tenant-specific · synthetic entity only · internal use"],
      ["Locator", "Section 3.2 — Split-period contract recognition"],
      ["Reason used", "Enterprise workspace context. Shown only to authorized tenant users."],
    ],
  },
];

const SOURCE_BADGE: Record<SourceStatus, { label: string; cls: string }> = {
  current: { label: "Current", cls: "bg-emerald-100 text-emerald-700 ring-emerald-300" },
  superseded: { label: "Superseded", cls: "bg-amber-100 text-amber-700 ring-amber-300" },
  internal: { label: "Internal", cls: "bg-blue-100 text-blue-700 ring-blue-300" },
};

/** §04 — progress state meanings */
const PROGRESS_STATES: [string, string][] = [
  ["Completion", "You finished the activity. It records participation, nothing more."],
  ["Reviewed", "You inspected the feedback and the source rationale behind it."],
  ["Demonstrated", "You applied the approach on a synthetic scenario. Still not a competence claim."],
  ["Source changed", "An underlying source moved. A revalidation notice is raised against the attempt."],
];

/** §04 — saved session mock */
type SessionState = "reviewed" | "complete" | "incomplete" | "revalidate";

const SESSION_ROWS: [string, SessionState][] = [
  ["Accrual vs Cash Recognition", "reviewed"],
  ["Inventory Cost Flow Comparison", "complete"],
  ["Revenue Contract Analysis", "incomplete"],
  ["Audit Evidence Sufficiency", "complete"],
  ["Source Authority Comparison", "revalidate"],
];

const SESSION_BADGE: Record<SessionState, { label: string; cls: string }> = {
  reviewed: { label: "Reviewed", cls: "bg-emerald-500/15 text-emerald-300 ring-emerald-500/30" },
  complete: { label: "Complete", cls: "bg-white/10 text-slate-300 ring-white/20" },
  incomplete: { label: "Incomplete", cls: "bg-amber-500/15 text-amber-300 ring-amber-500/30" },
  revalidate: { label: "Source changed", cls: "bg-rose-500/15 text-rose-300 ring-rose-500/30" },
};

/** §05 — nine governed scenarios */
const SCENARIOS: { n: string; title: string; level: string; body: string }[] = [
  { n: "01", title: "Accrual vs Cash Recognition", level: "Foundational", body: "Compare timing of recognition under each basis using a synthetic service contract." },
  { n: "02", title: "Inventory Cost Flow Comparison", level: "Developing", body: "Work through FIFO and weighted-average outcomes on the same synthetic movement set." },
  { n: "03", title: "Audit Evidence Sufficiency", level: "Developing", body: "Classify evidence items by relevance, reliability and sufficiency, with rationale." },
  { n: "04", title: "Payroll Control Review", level: "Developing", body: "Identify control gaps in a synthetic payroll cycle. No real employee records appear." },
  { n: "05", title: "Tax Scenario Fact Gathering", level: "Foundational", body: "Determine which facts are required before a position can be researched at all." },
  { n: "06", title: "Revenue Contract Analysis", level: "Advanced", body: "Separate performance obligations in a multi-element synthetic arrangement." },
  { n: "07", title: "Financial Statement Error Spotting", level: "Developing", body: "Locate and explain misstatements in a synthetic statement set." },
  { n: "08", title: "Source Authority Comparison", level: "Advanced", body: "Weigh a current standard, a superseded standard and an internal policy against one fact pattern." },
  { n: "09", title: "Ethical and Professional Judgment", level: "Advanced", body: "Work through a synthetic conflict scenario where the answer is escalation, not resolution." },
];

/** §06 — FAQ */
const FAQS: [string, string][] = [
  ["What is Kriton™ Learning & Practice Mode?",
    "A guided, source-backed environment for building accounting understanding through explanation, synthetic practice scenarios and reviewable feedback. It is a learning surface, not a production tool."],
  ["Is it an accounting course or curriculum?",
    "No. There is no fixed syllabus, no enrolment and no credential. Learners choose a goal, topic, framework, level and activity format, and can change any of them at any point."],
  ["Does it provide professional advice?",
    "No. Explanations are educational and use synthetic scenarios. Nothing produced here is advice, and nothing should be relied upon for a client engagement or a filing."],
  ["Can it certify accounting competence?",
    "No. Completion records participation, not capability. Progress evidences activity — it is not an assessment, a qualification or a basis for authorizing professional work."],
  ["What topics are supported?",
    "Recognition, measurement, presentation, audit evidence, controls, payroll and ethics topics, each bounded by the framework and jurisdiction the learner selects."],
  ["Which sources support lessons?",
    "Only admitted sources, each shown with title, authority, version, applicability, locator and limitations. Superseded sources are labelled as such and used only for comparison."],
  ["Can organizations assign practice?",
    "Enterprise tenants can make paths available and add internal policy sources. Assignment is visible to the learner, and educator controls are governed like any other administrative capability."],
  ["How is learner data used?",
    "To show your own progress. Personalization is optional, reversible and off by default. Attempt data is not used to rank, score, discipline or draw conclusions about individuals."],
  ["What happens when sources change?",
    "A revalidation notice is raised against affected attempts. Historical attempts are preserved as they were — the system does not silently rewrite what you previously saw."],
  ["Can I ask a real accounting question?",
    "Ask Accounting Questions is the destination for that. It relates a question to content and evidence, but it is a separate surface with its own boundaries."],
  ["Can we run a pilot?",
    "Yes. Pilots define scope, participants, content approval, data handling and success criteria in advance. All content remains synthetic throughout."],
];

/** Get started — scope checklist */
const IN_SCOPE: string[] = [
  "Synthetic scenarios, entities, dates and amounts",
  "Source-backed explanation with full citation detail",
  "Reviewable feedback with rationale",
  "Learner-controlled goal, level and format",
  "Progress as activity evidence, clearly labelled",
];

const OUT_OF_SCOPE: string[] = [
  "No certification, credential or competence claim",
  "No real client data, exam questions or credentials",
  "No professional advice or production output",
];

/** Get started — routes */
const START_OPTIONS: [string, string][] = [
  ["Explore Learning Paths", "Topic, level and source coverage. All paths use synthetic demonstrations."],
  ["Book a Demo", "Governance, privacy, administration and integration overview for enterprise evaluation."],
  ["Request Learning Briefing", "Learning boundaries, educator controls, content governance and reporting."],
  ["Request Pilot", "Scope, participants, content approval, data and success criteria for controlled evaluation."],
];

// ─── inline SVG helpers ─────────────────────────────────────────────────────────

function Chevron({ open }: { open: boolean }) {
  return <svg viewBox="0 0 24 24" className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function Arrow({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={`${className} shrink-0`} fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function Tick({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={`${className} shrink-0`} fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function Cross({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={`${className} shrink-0`} fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

const eyebrowAmber = "flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#d9720f]";
const eyebrowLight = "flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#f0a54a]";
const serifH = "font-serif leading-tight";

// ─── PAGE ───────────────────────────────────────────────────────────────────────

export default function Page() {
  const [picks, setPicks] = useState<number[]>(STEPS.map((s) => s.initial));
  const [scenario, setScenario] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const pick = (step: number, option: number) =>
    setPicks((prev) => prev.map((v, i) => (i === step ? option : v)));

  return (
    <main className="font-sans text-[#16233d] dark:text-white" style={{ backgroundColor: CREAM }}>

      {/* ─── HERO (navy) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8 lg:py-20" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="text-white">
            <p className={eyebrowLight}>
              <span className="h-px w-5 bg-[#f0a54a]" /> Kriton™ AI Advisor · Learning &amp; Practice Mode
            </p>
            <h1 className={`mt-5 max-w-md text-[clamp(1.9rem,4.2vw,2.7rem)] ${serifH}`}>
              Build accounting understanding through guided, source-backed practice.
            </h1>
            <p className="mt-5 max-w-md text-[13px] leading-relaxed text-slate-300/80">
              Explore concepts, work through synthetic scenarios, inspect supporting sources and learn from
              reviewable feedback — while keeping professional judgment and supervision visible.
            </p>

            <p className="mt-5 max-w-md border-l-2 border-[#f0a54a] pl-3 text-[11px] leading-relaxed text-slate-300/70">
              <span className="font-semibold text-[#f0a54a]">Reminder — </span>
              Kriton™ supports learning. Completion does not certify competence or authorize professional
              action.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a href="#" className="rounded px-6 py-2.5 text-[13px] font-semibold text-white transition-opacity hover:opacity-90" style={{ backgroundColor: AMBER }}>
                Try a Guided Practice
              </a>
              <a href="#" className="rounded border border-white/25 px-6 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-white/10">
                Explore Learning Paths
              </a>
            </div>

            <a href="#" className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#f0a54a] hover:underline">
              View Professional Boundaries <Arrow className="h-3 w-3" />
            </a>
          </div>
          <ImageSlot src="/images/image 142.png" alt="Working through a practice calculation" ratio="aspect-[4/3]" />
        </div>
      </section>

      {/* ─── §01 LEARNING MODE POSITIONING ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-5 bg-[#d9720f]" /> §01 — Learning Mode Positioning</p>

          <div className="mt-4 grid gap-8 lg:grid-cols-2">
            <h2 className={`text-black text-[clamp(1.5rem,3.2vw,2.1rem)] ${serifH}`}>
              Learning, practice, review and supervised application are distinct.
            </h2>
            <p className="text-[13px] leading-relaxed text-slate-700 lg:pt-2">
              Learning &amp; Practice Mode is not a tutoring chatbot, not a production tool and not an
              examination system. Each mode has a different purpose, evidence type and boundary.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-[2fr_1fr]">
            <div className="grid gap-4 sm:grid-cols-3">
              {MODES.map((m) => (
                <article key={m.title} className="flex flex-col border border-black/10 bg-white p-5">
                  <p className="flex items-center gap-2 text-[13px] font-bold text-black">
                    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: m.dot }} />
                    {m.title}
                  </p>
                  <p className="mt-3 flex-1 text-[11px] leading-relaxed text-slate-600">{m.body}</p>
                  <p className="mt-4 border-t border-black/10 pt-3 text-[10px] leading-relaxed text-slate-500">
                    <span className="font-semibold text-[#d9720f]">Boundary — </span>{m.boundary}
                  </p>
                </article>
              ))}
            </div>
            <ImageSlot src="/images/image 143.png" alt="Learner reviewing worked examples" ratio="aspect-[3/4]" />
          </div>

          <div className="mt-6 grid gap-px bg-black/10 sm:grid-cols-3">
            {ADJACENT.map(([title, body]) => (
              <a key={title} href="#" className="group bg-white p-5 transition-colors hover:bg-[#faf8f3]">
                <p className="flex items-center gap-1.5 text-[12px] font-semibold text-[#d9720f]">
                  {title} <Arrow className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                </p>
                <p className="mt-1.5 text-[11px] leading-relaxed text-slate-600">{body}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── §02 GOAL, LEVEL, SCOPE, OBJECTIVE (navy) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto max-w-6xl text-white">
          <p className={eyebrowLight}><span className="h-px w-5 bg-[#f0a54a]" /> §02 — Goal, Level, Scope, Objective</p>

          <div className="mt-6 grid items-start gap-8 lg:grid-cols-[0.8fr_1.4fr]">
            <div>
              <h2 className={`text-[clamp(1.5rem,3.2vw,2.1rem)] ${serifH}`}>Choose your goal before you begin.</h2>
              <p className="mt-4 text-[12px] leading-relaxed text-slate-300/75">
                Topic, framework, jurisdiction, level and activity type are visible and user-controlled.
                Adaptive recommendations state their basis and always include a &ldquo;choose another
                path&rdquo; control.
              </p>
              <p className="mt-5 border-l-2 border-[#f0a54a] pl-3 text-[10px] leading-relaxed text-slate-300/60">
                <span className="font-semibold text-[#f0a54a]">Privacy — </span>
                Attempt data is not used to rank, score or draw conclusions about individuals.
                Personalization is optional, reversible and off by default.
              </p>
              <ImageSlot src="/images/image 144.png" alt="Learner setting a practice goal" ratio="aspect-[16/10]" className="mt-7" />
            </div>

            {/* Goal builder mock */}
            <div className="rounded bg-white/[0.04] p-5 ring-1 ring-white/10">
              {STEPS.map((s, si) => (
                <div key={s.label} className={si > 0 ? "mt-5 border-t border-white/10 pt-5" : ""}>
                  <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">{s.label}</p>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {s.options.map((o, oi) => {
                      const active = picks[si] === oi;
                      const accent = si === 1 ? AMBER : TEAL;
                      return (
                        <button key={o} type="button" onClick={() => pick(si, oi)}
                          className="rounded px-3 py-1.5 text-[11px] font-medium transition-colors"
                          style={
                            active
                              ? { backgroundColor: `${accent}26`, color: accent, boxShadow: `inset 0 0 0 1px ${accent}66` }
                              : undefined
                          }>
                          <span className={active ? "" : "text-slate-300/60"}>{o}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}

              <p className="mt-5 border-t border-white/10 pt-4 text-[10px] leading-relaxed text-slate-300/55">
                Every selection is reversible mid-session. Changing a step re-scopes the activity rather than
                carrying forward an assumption from the previous choice.
              </p>

              <button type="button"
                className="mt-4 inline-flex items-center gap-2 rounded px-5 py-2.5 text-[12px] font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: AMBER }}>
                Begin Practice <Arrow className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── §03 SOURCE AUTHORITY AND EVIDENCE ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-5 bg-[#d9720f]" /> §03 — Source Authority and Evidence</p>

          <div className="mt-4 grid gap-8 lg:grid-cols-2">
            <h2 className={`text-black text-[clamp(1.5rem,3.2vw,2.1rem)] ${serifH}`}>
              Sources appear authoritative and readable — not decorative footnotes.
            </h2>
            <p className="text-[13px] leading-relaxed text-slate-700 lg:pt-2">
              Every explanation and feedback response cites source title, authority, version, applicability,
              locator and limitations. A source status change triggers a revalidation notice — not a silent
              rewrite.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {SOURCES.map((s) => (
              <article key={s.title} className="border border-black/10 bg-white">
                <div className="flex items-center justify-between gap-3 border-b border-black/10 px-4 py-3">
                  <p className="text-[12px] font-bold text-black">{s.title}</p>
                  <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-[9px] font-semibold ring-1 ${SOURCE_BADGE[s.status].cls}`}>
                    {SOURCE_BADGE[s.status].label}
                  </span>
                </div>
                <dl className="divide-y divide-black/[0.07]">
                  {s.rows.map(([term, def]) => (
                    <div key={term} className="px-4 py-2.5">
                      <dt className="text-[9px] font-bold uppercase tracking-[0.1em] text-slate-400">{term}</dt>
                      <dd className="mt-0.5 text-[11px] leading-relaxed text-slate-600">{def}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>

          <ImageSlot src="/images/image 145.png" alt="Reviewing source authority together" ratio="aspect-[21/7]" className="mt-6" />
        </div>
      </section>

      {/* ─── §04 PROGRESS, CUSTODY AND REVALIDATION (deep navy) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: NAVY_DEEP }}>
        <div className="mx-auto max-w-6xl text-white">
          <p className={eyebrowLight}><span className="h-px w-5 bg-[#f0a54a]" /> §04 — Progress, Custody and Revalidation</p>

          <div className="mt-6 grid items-start gap-8 lg:grid-cols-[0.85fr_1.3fr]">
            <div>
              <h2 className={`text-[clamp(1.5rem,3.2vw,2.1rem)] ${serifH}`}>
                Progress shows activity evidence, not professional competence.
              </h2>
              <p className="mt-4 text-[12px] leading-relaxed text-slate-300/75">
                Saved sessions carry content version, source bundle version, context and activity version.
                A source change triggers a revalidation notice — not a silent rewrite of historical attempts.
              </p>

              <dl className="mt-7 divide-y divide-white/10 border-y border-white/10">
                {PROGRESS_STATES.map(([term, def]) => (
                  <div key={term} className="py-3">
                    <dt className="text-[11px] font-semibold text-[#f0a54a]">{term}</dt>
                    <dd className="mt-0.5 text-[11px] leading-relaxed text-slate-300/65">{def}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              {/* Saved session mock */}
              <div className="overflow-hidden rounded bg-white/[0.04] ring-1 ring-white/10">
                <p className="border-b border-white/10 px-5 py-2.5 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                  Saved session progress — Foundation path · US GAAP · synthetic content
                </p>
                <ul className="divide-y divide-white/5">
                  {SESSION_ROWS.map(([title, state], i) => (
                    <li key={title} className="flex items-center justify-between gap-4 px-5 py-3">
                      <span className="flex min-w-0 items-center gap-3">
                        <span className="text-[10px] font-semibold text-slate-500">{i + 1}</span>
                        <span className="truncate text-[12px]">{title}</span>
                      </span>
                      <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-[9px] font-semibold ring-1 ${SESSION_BADGE[state].cls}`}>
                        {SESSION_BADGE[state].label}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="border-t border-white/10 px-5 py-3 text-[10px] leading-relaxed text-amber-300/80">
                  One source in this path has changed since your attempt. The original attempt is preserved;
                  revalidation is offered, never applied automatically.
                </p>
              </div>

              <ImageSlot src="/images/image 146.png" alt="Reviewing session progress" ratio="aspect-[21/9]" className="mt-5" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── §05 SYNTHETIC DEMONSTRATION SCENARIOS ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-5 bg-[#d9720f]" /> §05 — Synthetic Demonstration Scenarios</p>

          <div className="mt-4 grid gap-8 lg:grid-cols-2">
            <h2 className={`text-black text-[clamp(1.5rem,3.2vw,2.1rem)] ${serifH}`}>
              Nine governed learning scenarios.
            </h2>
            <p className="text-[13px] leading-relaxed text-slate-700 lg:pt-2">
              All scenarios use synthetic names, entities, dates and amounts labelled as illustrative. No
              hiring positions, audit opinions, payroll records or exam questions appear.
            </p>
          </div>

          <div className="mt-10 grid items-start gap-6 lg:grid-cols-2">
            <ul className="border border-black/10">
              {SCENARIOS.map((s, i) => {
                const active = scenario === i;
                return (
                  <li key={s.n} className="border-b border-black/10 last:border-0">
                    <button type="button" onClick={() => setScenario(i)}
                      className={`w-full px-4 py-3 text-left transition-colors ${
                        active ? "bg-[#0f1a30] text-white" : "bg-white text-slate-700 hover:bg-[#faf8f3]"
                      }`}>
                      <span className="flex items-baseline gap-3">
                        <span className={`text-[10px] font-semibold ${active ? "text-[#f0a54a]" : "text-slate-400"}`}>{s.n}</span>
                        <span className="text-[12px] font-semibold">{s.title}</span>
                      </span>
                      <span className={`mt-0.5 block pl-7 text-[10px] ${active ? "text-slate-300/70" : "text-slate-400"}`}>
                        {s.level}
                      </span>
                      {active && (
                        <span className="mt-2 block pl-7 text-[11px] leading-relaxed text-slate-300/70">
                          {s.body}
                        </span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
            <ImageSlot src="/images/image 147.png" alt="Two learners working through a scenario" ratio="aspect-[4/3]" className="lg:sticky lg:top-8" />
          </div>
        </div>
      </section>

      {/* ─── §06 FAQ (navy) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto max-w-6xl text-white">
          <p className={eyebrowLight}><span className="h-px w-5 bg-[#f0a54a]" /> §06 — FAQ</p>

          <div className="mt-6 grid items-start gap-10 lg:grid-cols-[0.75fr_1.6fr]">
            <div className="lg:sticky lg:top-8">
              <h2 className={`text-[clamp(1.5rem,3.2vw,2.1rem)] ${serifH}`}>Learning and governance questions.</h2>
              <p className="mt-4 text-[12px] leading-relaxed text-slate-300/75">
                Answers are scoped to public product information. Contracts, security architecture, data flows
                and curriculum design belong to the enterprise and education briefing process.
              </p>
              <div className="mt-5 flex flex-col gap-2">
                {["Ask Accounting Questions", "Professional Boundaries", "Governance Framework", "Privacy & Security"].map((l) => (
                  <a key={l} href="#" className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#f0a54a] hover:underline">
                    {l} <Arrow className="h-3 w-3" />
                  </a>
                ))}
              </div>
            </div>

            <div className="divide-y divide-white/10 border-y border-white/10">
              {FAQS.map(([q, a], i) => {
                const open = openFaq === i;
                return (
                  <div key={q}>
                    <button type="button" onClick={() => setOpenFaq(open ? null : i)} aria-expanded={open}
                      className="flex w-full items-center justify-between gap-4 py-3.5 text-left text-[12px] font-medium">
                      {q}<span className="text-[#f0a54a]"><Chevron open={open} /></span>
                    </button>
                    {open && <p className="pb-4 pr-8 text-[12px] leading-relaxed text-slate-300/70">{a}</p>}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── GET STARTED ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-2">
          <div>
            <p className={eyebrowAmber}><span className="h-px w-5 bg-[#d9720f]" /> Get Started</p>
            <h2 className={`mt-4 max-w-sm text-black text-[clamp(1.5rem,3.2vw,2.1rem)] ${serifH}`}>
              Start with a governed learning demonstration.
            </h2>
            <p className="mt-4 max-w-md text-[13px] leading-relaxed text-slate-700">
              The public preview uses synthetic names, entities, dates and amounts labelled as illustrative.
              No real client data, exam questions, credentials or confidential records.
            </p>
            <p className="mt-4 max-w-md text-[10px] leading-relaxed text-slate-500">
              Demo and pilot forms collect contact information only. Required processing consent is separate
              from optional marketing consent.
            </p>

            {/* Scope card */}
            <div className="mt-8 rounded p-5" style={{ backgroundColor: NAVY }}>
              <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#f0a54a]">
                Learning &amp; Practice Mode — what is in scope
              </p>
              <ul className="mt-4 space-y-2">
                {IN_SCOPE.map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-[11px] leading-relaxed text-slate-300/80">
                    <span className="mt-0.5 text-emerald-400"><Tick className="h-3.5 w-3.5" /></span>{t}
                  </li>
                ))}
              </ul>
              <ul className="mt-4 space-y-2 border-t border-white/10 pt-4">
                {OUT_OF_SCOPE.map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-[11px] leading-relaxed text-slate-300/60">
                    <span className="mt-0.5 text-rose-400"><Cross className="h-3.5 w-3.5" /></span>{t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-3">
            {/* Primary */}
            <a href="#" className="group flex items-start justify-between gap-4 rounded p-5 transition-opacity hover:opacity-95" style={{ backgroundColor: NAVY }}>
              <span>
                <span className="block text-[14px] font-semibold text-white">Try a Guided Practice</span>
                <span className="mt-1 block text-[11px] leading-relaxed text-slate-300/70">
                  A short synthetic activity with full source citation and reviewable feedback.
                </span>
              </span>
              <span className="mt-1 text-[#f0a54a] transition-transform group-hover:translate-x-0.5"><Arrow /></span>
            </a>

            {/* Secondary */}
            {START_OPTIONS.map(([title, desc]) => (
              <a key={title} href="#"
                className="group flex items-start justify-between gap-4 rounded border border-black/10 bg-white p-5 transition-colors hover:border-black/25">
                <span>
                  <span className="block text-[13px] font-semibold text-black">{title}</span>
                  <span className="mt-1 block text-[11px] leading-relaxed text-slate-600">{desc}</span>
                </span>
                <span className="mt-1 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-[#d9720f]"><Arrow /></span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}