"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Colour tokens are Tailwind arbitrary values, NOT inline styles.
 *
 * The previous version set section backgrounds with style={{ backgroundColor }}.
 * Inline styles win over every CSS class, so `dark:` variants were silently
 * ignored and dark mode did nothing on this page. Everything below is class-based
 * so the dark variants actually apply.
 *
 *   navy section   →  bg-[#0f1a30]                    (already dark; no variant)
 *   deep navy band →  bg-[#0b1426]
 *   cream section  →  bg-[#f2ece0] dark:bg-[#101a2c]
 *   white card     →  bg-white     dark:bg-[#16233d]
 */

function ImageSlot({ src, alt, ratio = "aspect-[4/3]", rounded = "rounded", className = "" }:
  { src: string; alt: string; ratio?: string; rounded?: string; className?: string }) {
  return (
    <div className={`relative w-full overflow-hidden bg-slate-200 dark:bg-white/5 ${ratio} ${rounded} ${className}`}>
      <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
    </div>
  );
}

// ─── DATA ──────────────────────────────────────────────────────────────────────

const FAILURE_PATTERNS: [string, string][] = [
  ["Generic answer without entity or period context",
    "Confirm material facts and show what remains unknown."],
  ["Citation without applicability statement",
    "Show issuer, framework, jurisdiction, effective date, status, limitations."],
  ["Calculation without trace",
    "Expose inputs, formula, units, currency, rates, period, rounding, validation."],
  ["Close task shown complete while exceptions remain",
    "Show dependencies, open items, owner, materiality and blocked state."],
  ["Forecast presented as a prediction",
    "Show scenario, assumptions, ranges, sensitivity and decision ownership."],
  ["Draft narrative treated as approved reporting",
    "Label draft, reviewer, permitted use and approval state."],
  ["System connection treated as authority to write",
    "Separate connectivity, permission, action mode, review and rehearsal."],
  ["Locale treated as jurisdiction",
    "Require explicit jurisdiction and availability confirmation."],
];

const ROLES: { n: string; title: string; body: string; link: string }[] = [
  { n: "01", title: "CFO / Finance Leadership",
    body: "Govern scope, policy, control expectations and release accountability across the finance function.",
    link: "Finance Leadership Briefing" },
  { n: "02", title: "Controllers / CAOs",
    body: "Own the close, exceptions, materiality treatment, review outcomes and evidence retention.",
    link: "Controller Workflow" },
  { n: "03", title: "Corporate Accounting / Reporting",
    body: "Prepare positions, reconciliations, disclosures and supporting calculation traces.",
    link: "Reporting Workflow" },
  { n: "04", title: "FP&A / Business Finance",
    body: "Analyze variance, build scenarios, and keep assumptions and ranges explicit rather than implied.",
    link: "FP&A Workflow" },
  { n: "05", title: "Shared Services / Finance Ops",
    body: "Coordinate task ownership, dependencies, deadlines and hand-offs across the close calendar.",
    link: "Finance Ops Workflow" },
  { n: "06", title: "Controls / Audit Liaison",
    body: "Preserve evidence continuity, review attribution and unresolved-item state for assurance.",
    link: "Controls & Evidence" },
  { n: "07", title: "Finance Systems / Architecture",
    body: "Connect ledgers and source systems with separated connectivity, permission and action mode.",
    link: "Integration Patterns" },
  { n: "08", title: "Procurement / Transformation",
    body: "Evaluate scope, governance posture, evaluation evidence and pilot criteria.",
    link: "Evaluation Guide" },
];

const STAGES: { n: string; title: string; body: string }[] = [
  { n: "01", title: "Readiness", body: "Dependencies, cut-off and source availability confirmed before work opens." },
  { n: "02", title: "Update", body: "Source data refreshed with extraction time and mapping version recorded." },
  { n: "03", title: "Plan", body: "Task ownership, sequence and deadline set. Nothing left implicit." },
  { n: "04", title: "Prepare", body: "Positions and reconciliations built with visible inputs and formulas." },
  { n: "05", title: "Validate", body: "Checks run. Unresolved differences block completion rather than round away." },
  { n: "06", title: "Review", body: "Named reviewer, bounded outcome per item, attributable and dated." },
  { n: "07", title: "Authorize", body: "Approval is a human act. The system records it; it never performs it." },
  { n: "08", title: "Execute / Verify", body: "Action mode separated from connectivity. Post-execution verification required." },
  { n: "09", title: "Retain / Revalidate", body: "Retention state, version and revalidation interval recorded on close." },
];

type ReviewState = "blocked" | "approved" | "in-review";

const REVIEW_ROWS: [string, ReviewState, string][] = [
  ["Allowance calculation", "blocked", "Rate applied is unsupported by current policy"],
  ["Trade AR balance", "approved", "Tied to GL; source and mapping confirmed"],
  ["Unbilled revenue recognition", "in-review", "Requires technical accounting opinion"],
];

const TRACE_ITEMS: string[] = [
  "Rate basis and derivation",
  "Formula and assumptions",
  "Units, currency and rate source",
  "Sample and population basis",
  "Validation checks performed",
  "Reconciliation fan-out",
  "Advisory labelling",
];

const SCENARIOS: { n: string; tab: string; crumb: string; rows: [string, string][] }[] = [
  {
    n: "01",
    tab: "Period-End Reconciliation and Close Exception",
    crumb: "Controller · Stage 05 Validate",
    rows: [
      ["Context", "Entity, period, ledger, currency, account, owner and intended use confirmed. Missing group scope flagged."],
      ["Data", "Approved source balances, mapping version and extraction time. Lineage and permissions shown."],
      ["Reconciliation", "Opening, activity, closing, source balance, items and unresolved difference. Formula and currency visible."],
      ["Exception", "One-sided mapping and one unsupported item. Blocked status — no false completion."],
      ["Review", "Controller accepts one item, returns one and escalates one. Bounded outcome per item."],
    ],
  },
  {
    n: "02",
    tab: "Accounting Policy Research and Adoption Preparation",
    crumb: "Technical Accounting · Stage 04 Prepare",
    rows: [
      ["Context", "Framework, jurisdiction, entity, effective date and transition method declared."],
      ["Sources", "Issuer, version, effective date, status and applicability limitations travel with each citation."],
      ["Analysis", "Position drafted with the source basis exposed, held explicitly as a draft."],
      ["Gaps", "Where the framework is silent or the fact pattern is unresolved, this is stated — not filled in."],
      ["Review", "Technical accounting review required before the position may be relied upon."],
    ],
  },
  {
    n: "03",
    tab: "Management Reporting and Variance Narrative",
    crumb: "FP&A · Stage 06 Review",
    rows: [
      ["Context", "Entity, period, comparative basis, currency and intended audience confirmed."],
      ["Data", "Approved reporting set with extraction time and mapping version recorded."],
      ["Variance", "Movement decomposed with the calculation visible. Drivers proposed, not asserted."],
      ["Narrative", "Draft commentary labelled as draft, with permitted use and reviewer state attached."],
      ["Review", "FP&A lead confirms, revises or rejects each proposed driver."],
    ],
  },
  {
    n: "04",
    tab: "Audit Request and Evidence Pack",
    crumb: "Controls Liaison · Stage 09 Retain",
    rows: [
      ["Context", "Requesting party, scope, period, entity and confidentiality class recorded."],
      ["Assembly", "Requested items gathered with source, version, extraction time and preparer."],
      ["Completeness", "Missing or unavailable items are listed explicitly rather than omitted quietly."],
      ["Export", "Pack carries its integrity signature so the recipient can verify it is unaltered."],
      ["Review", "Controls liaison approves release. The system never releases a pack on its own."],
    ],
  },
];

const FAQS: [string, string][] = [
  ["What is ZoikoLogia™ with Kriton™ for enterprise finance teams?",
    "A governed layer over source-backed intelligence, close and reconciliation workflows, calculation traceability, review evidence and integration patterns. It supports finance work; it does not perform it."],
  ["Does Kriton™ replace finance professionals or controllers?",
    "No. It reduces coordination, retrieval and documentation overhead. Judgment, approval, certification and accountability remain with named people in your finance function."],
  ["Can it close the books automatically?",
    "No. No stage auto-advances. Every stage has a declared owner and control, and a stage with unresolved exceptions shows as blocked rather than complete."],
  ["Can it generate journal entries?",
    "It can prepare and expose a proposed entry with its full calculation trace. It does not post to a ledger. Posting authority is separated from connectivity by design."],
  ["Can it create forecasts?",
    "It supports scenario construction with explicit assumptions, ranges and sensitivity. Output is presented as a scenario, never as a prediction, and decision ownership stays visible."],
  ["Can it provide tax advice or an audit opinion?",
    "No. It does not provide tax advice, issue an audit opinion, or certify financial statements. Those remain the responsibility of qualified professionals."],
  ["How are calculations checked?",
    "Every material calculation exposes its inputs, formula, units, currency, rate source, period, rounding treatment and validation checks. A result without its trace is not presented as final."],
  ["How are sources selected?",
    "Sources are admitted with issuer, framework, jurisdiction, version, effective date and status. Applicability travels with the citation, and limitations are stated rather than implied."],
  ["Does it integrate with our finance systems?",
    "Yes, through governed integration patterns. Connectivity, permission, action mode and rehearsal are separated — a connection is never treated as authority to write."],
  ["How is sensitive finance data protected?",
    "Through tenant isolation, classification-driven retention, field-level access, purpose limitation and governed export. Retention state is disclosed rather than silently applied."],
  ["Can we run a controlled pilot?",
    "Yes. Pilots use fictional organizations and synthetic values within a defined scope and evaluation criteria. No real financial statements or customer data are involved."],
  ["How does human escalation work?",
    "Unresolved items route to the responsible owner with the reason attached. Escalation is recorded, bounded per item, and cannot be cleared by the system."],
];

const START_OPTIONS: [string, string][] = [
  ["Request Pilot", "Pilot readiness form. No confidential finance information."],
  ["Request Enterprise Briefing", "Data flows, integrations, governance boundaries and evaluation evidence."],
  ["View Governance Framework", "Source authority, evaluation, release gates and responsible-AI model."],
  ["Visit Privacy & Security", "Data classification, access, retention, tenant boundaries, provider controls."],
];

// ─── inline SVG helpers ─────────────────────────────────────────────────────────

function Chevron({ open }: { open: boolean }) {
  return <svg viewBox="0 0 24 24" className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function Arrow({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={`${className} shrink-0`} fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

const REVIEW_BADGE: Record<ReviewState, { label: string; cls: string }> = {
  blocked: { label: "Blocked", cls: "bg-rose-500/15 text-rose-300 ring-rose-500/30" },
  approved: { label: "Approved", cls: "bg-emerald-500/15 text-emerald-300 ring-emerald-500/30" },
  "in-review": { label: "In review", cls: "bg-amber-500/15 text-amber-300 ring-amber-500/30" },
};

// Shared class recipes — dark variants included everywhere.
const SECTION_CREAM = "px-4 py-16 sm:px-6 md:px-8 bg-[#f2ece0] dark:bg-[#101a2c]";
const SECTION_NAVY = "px-4 py-16 sm:px-6 md:px-8 bg-[#0f1a30]";
const SECTION_DEEP = "px-4 py-16 sm:px-6 md:px-8 bg-[#0b1426]";

const eyebrowAmber = "flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#d9720f] dark:text-[#f0a54a]";
const eyebrowLight = "flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#f0a54a]";
const serifH = "font-serif leading-tight";

const headingDark = "text-black dark:text-white";
const bodyDark = "text-slate-700 dark:text-gray-300";
const mutedDark = "text-slate-600 dark:text-gray-400";
const cardDark = "bg-white dark:bg-[#16233d] border-black/10 dark:border-white/10";

// ─── PAGE ───────────────────────────────────────────────────────────────────────

export default function Page() {
  const [role, setRole] = useState(0);
  const [stage, setStage] = useState(4); // 05 Validate active, as in the design
  const [scenario, setScenario] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-[#f2ece0] font-sans text-[#16233d] dark:bg-[#101a2c] dark:text-white">

      {/* ─── HERO ─── */}
      <section className={`${SECTION_NAVY} lg:py-20`}>
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="text-white">
            <p className={eyebrowLight}>
              <span className="h-px w-5 bg-[#f0a54a]" /> Solutions · Enterprise Finance Teams
            </p>
            <h1 className={`mt-5 max-w-lg text-[clamp(1.9rem,4.2vw,2.7rem)] ${serifH}`}>
              Governed AI for enterprise finance — sources, calculations, review and control intact.
            </h1>
            <p className="mt-5 max-w-md text-[13px] leading-relaxed text-slate-300/80">
              ZoikoLogia™ with Kriton™ helps corporate finance teams work with source-backed intelligence,
              controlled close workflows, transparent calculations, review-ready evidence and governed
              integration patterns.
            </p>

            <p className="mt-5 max-w-md border-l-2 border-[#f0a54a] pl-3 text-[11px] leading-relaxed text-slate-300/70">
              <span className="font-semibold text-[#f0a54a]">Reminder — </span>
              Kriton™ supports enterprise finance work. It does not prepare, approve or issue financial
              statements or accounting records.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a href="#" className="rounded bg-[#e8912a] px-6 py-2.5 text-[13px] font-semibold text-white transition-opacity hover:opacity-90">
                Book a Demo
              </a>
              <a href="#" className="rounded border border-white/25 px-6 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-white/10">
                Request Pilot
              </a>
            </div>
          </div>
          <ImageSlot src="/images/image 134 (1).png" alt="Corporate finance team in review" ratio="aspect-[4/3]" />
        </div>
      </section>

      {/* ─── §01 WHY ENTERPRISE FINANCE IS CONTEXT-RICH ─── */}
      <section className={SECTION_CREAM}>
        <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[0.85fr_1.4fr]">
          <div>
            <p className={eyebrowAmber}>
              <span className="h-px w-5 bg-[#d9720f] dark:bg-[#f0a54a]" /> §01 — Why Enterprise Finance Is Context-Rich
            </p>
            <h2 className={`mt-4 text-[clamp(1.5rem,3.2vw,2.1rem)] ${serifH} ${headingDark}`}>
              The same question can require a different responsible answer.
            </h2>
            <p className={`mt-4 text-[13px] leading-relaxed ${bodyDark}`}>
              When entity, group, ledger, framework, currency, period, policy, rate or intended use
              changes — so does the right next step.
            </p>
            <ImageSlot src="/images/image 135 (1).png" alt="Finance team discussing period-end" ratio="aspect-[16/10]" className="mt-7" />
          </div>

          <div className={`overflow-x-auto border ${cardDark}`}>
            <table className="w-full min-w-[500px] border-collapse text-left">
              <thead>
                <tr className="border-b border-black/10 bg-[#f7f3ea] dark:border-white/10 dark:bg-white/5">
                  <th className="px-4 py-2.5 text-[9px] font-bold uppercase tracking-[0.12em] text-slate-500 dark:text-gray-400">Failure pattern</th>
                  <th className="px-4 py-2.5 text-[9px] font-bold uppercase tracking-[0.12em] text-slate-500 dark:text-gray-400">Required response</th>
                </tr>
              </thead>
              <tbody>
                {FAILURE_PATTERNS.map(([fail, required], i) => (
                  <tr key={fail} className={`border-b border-black/10 last:border-0 dark:border-white/10 ${i % 2 === 1 ? "bg-[#faf8f3] dark:bg-white/[0.03]" : ""}`}>
                    <td className={`w-[45%] px-4 py-3.5 align-top text-[11px] leading-relaxed ${bodyDark}`}>{fail}</td>
                    <td className={`px-4 py-3.5 align-top text-[11px] leading-relaxed ${mutedDark}`}>{required}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── §02 ROLE-BASED ENTRY ─── */}
      <section className={SECTION_NAVY}>
        <div className="mx-auto max-w-6xl text-white">
          <p className={eyebrowLight}><span className="h-px w-5 bg-[#f0a54a]" /> §02 — Role-Based Entry</p>

          <div className="mt-10 grid items-start gap-10 lg:grid-cols-2">
            <div>
              <h2 className={`text-[clamp(1.5rem,3.2vw,2.1rem)] ${serifH}`}>Finance is not one job.</h2>
              <p className="mt-4 max-w-md text-[12px] leading-relaxed text-slate-300/75">
                CFOs govern. Controllers close. Accounting teams prepare. FP&amp;A analyzes. Operations
                coordinate. Controls teams preserve evidence. Systems teams connect. Procurement evaluates.
              </p>

              <ul className="mt-7 space-y-1">
                {ROLES.map((r, i) => {
                  const active = role === i;
                  return (
                    <li key={r.n}>
                      <button type="button" onClick={() => setRole(i)}
                        className={`w-full rounded-sm px-3 py-2 text-left text-[11px] transition-colors ${
                          active
                            ? "bg-[#e8912a]/12 text-[#f0a54a] ring-1 ring-inset ring-[#e8912a]/45"
                            : "text-slate-300/65 hover:bg-white/5"
                        }`}>
                        {r.n} — {r.title}
                      </button>
                      {active && (
                        <div className="px-3 pb-2 pt-1.5">
                          <p className="text-[11px] leading-relaxed text-slate-300/60">{r.body}</p>
                          <a href="#" className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#f0a54a] hover:underline">
                            {r.link} <Arrow className="h-3 w-3" />
                          </a>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            <ImageSlot src="/images/image 136 (1).png" alt="Finance roles collaborating" ratio="aspect-[4/3]" className="lg:sticky lg:top-8" />
          </div>
        </div>
      </section>

      {/* ─── §03 FINANCE CONTEXT MODEL ─── */}
      <section className={SECTION_DEEP}>
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="text-white">
            <p className={eyebrowLight}><span className="h-px w-5 bg-[#f0a54a]" /> §03 — Finance Context Model</p>
            <h2 className={`mt-4 text-[clamp(1.5rem,3.2vw,2.1rem)] ${serifH}`}>
              Fourteen context fields. None silently assumed.
            </h2>
            <p className="mt-4 max-w-sm text-[12px] leading-relaxed text-slate-300/75">
              Entity, group, ledger, framework, currency, period, policy, rate and intended use shape every
              retrieval, calculation and workflow step.
            </p>
            <p className="mt-5 max-w-sm border-l-2 border-[#f0a54a] pl-3 text-[10px] leading-relaxed text-slate-300/60">
              <span className="font-semibold text-[#f0a54a]">Note — </span>
              The system does not assume entity, ledger or period. It requests them explicitly and records
              what remains unknown.
            </p>
          </div>
          <ImageSlot src="/images/image 137 (1).png" alt="Analysts reviewing a financial model" ratio="aspect-[16/10]" />
        </div>
      </section>

      {/* ─── §04 CLOSE, REPORTING AND RECONCILIATION WORKFLOWS ─── */}
      <section className={SECTION_CREAM}>
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}>
            <span className="h-px w-5 bg-[#d9720f] dark:bg-[#f0a54a]" /> §04 — Close, Reporting and Reconciliation Workflows
          </p>

          <div className="mt-4 grid gap-8 lg:grid-cols-2">
            <h2 className={`text-[clamp(1.5rem,3.2vw,2.1rem)] ${serifH} ${headingDark}`}>
              Nine stages. Every stage owned. No stage auto-advances.
            </h2>
            <p className={`text-[13px] leading-relaxed lg:pt-2 ${bodyDark}`}>
              From readiness through retention and revalidation — each stage has a declared control, an owner
              and an evidence requirement.
            </p>
          </div>

          <div className="mt-10 grid items-start gap-8 lg:grid-cols-[230px_1fr]">
            <ul className="space-y-0.5">
              {STAGES.map((s, i) => {
                const active = stage === i;
                return (
                  <li key={s.n}>
                    <button type="button" onClick={() => setStage(i)}
                      className={`w-full px-3 py-2 text-left text-[11px] transition-colors ${
                        active
                          ? "bg-[#0f1a30] font-medium text-white dark:bg-white dark:text-[#0f1a30]"
                          : "text-slate-600 hover:bg-black/5 dark:text-gray-400 dark:hover:bg-white/5"
                      }`}>
                      {s.n} &nbsp; {s.title}
                    </button>
                    {active && (
                      <p className={`px-3 pb-2 pt-2 text-[11px] leading-relaxed ${mutedDark}`}>{s.body}</p>
                    )}
                  </li>
                );
              })}
            </ul>

            <ImageSlot src="/images/image 138 (1).png" alt="Close workflow review session" ratio="aspect-[16/10]" />
          </div>
        </div>
      </section>

      {/* ─── §05 REVIEW, CALCULATION AND EVIDENCE ─── */}
      <section className={SECTION_NAVY}>
        <div className="mx-auto max-w-6xl text-white">
          <p className={eyebrowLight}><span className="h-px w-5 bg-[#f0a54a]" /> §05 — Review, Calculation and Evidence</p>

          <div className="mt-4 grid gap-8 lg:grid-cols-2">
            <h2 className={`text-[clamp(1.5rem,3.2vw,2.1rem)] ${serifH}`}>Traceable and inspectable by design.</h2>
            <p className="text-[12px] leading-relaxed text-slate-300/75 lg:pt-2">
              Every material claim connects to source, data, calculation, assumption and an unresolved-issue
              list. Review Mode requires a named reviewer with a bounded outcome for each item.
            </p>
          </div>

          <div className="mt-10 grid items-start gap-6 lg:grid-cols-2">
            <ImageSlot src="/images/image 149.png" alt="Working through a reconciliation" ratio="aspect-[4/3]" />

            <div className="overflow-hidden rounded bg-white/[0.04] ring-1 ring-white/10">
              <p className="border-b border-white/10 px-5 py-2.5 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                Review Mode · synthetic entity · period FY-Q3
              </p>

              <ul className="divide-y divide-white/5">
                {REVIEW_ROWS.map(([item, state, note]) => (
                  <li key={item} className="flex items-start justify-between gap-4 px-5 py-3.5">
                    <div className="min-w-0">
                      <p className="text-[12px] font-medium">{item}</p>
                      <p className="mt-0.5 text-[10px] leading-relaxed text-slate-300/55">{note}</p>
                    </div>
                    <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-[9px] font-semibold ring-1 ${REVIEW_BADGE[state].cls}`}>
                      {REVIEW_BADGE[state].label}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-white/10 px-5 py-4">
                <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                  Trace required for each item
                </p>
                <ul className="mt-3 space-y-1.5">
                  {TRACE_ITEMS.map((t) => (
                    <li key={t} className="flex items-center gap-2 text-[10px] text-slate-300/65">
                      <span className="h-1 w-1 shrink-0 rounded-full bg-[#f0a54a]" />{t}
                    </li>
                  ))}
                </ul>
                <a href="#" className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#f0a54a] hover:underline">
                  Escalate to controller <Arrow className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── §06 SYNTHETIC SCENARIOS ─── */}
      <section className={SECTION_CREAM}>
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-5 bg-[#d9720f] dark:bg-[#f0a54a]" /> §06 — Synthetic Scenarios</p>

          <div className="mt-4 grid gap-8 lg:grid-cols-2">
            <h2 className={`text-[clamp(1.5rem,3.2vw,2.1rem)] ${serifH} ${headingDark}`}>
              Governed enterprise finance AI in practice.
            </h2>
            <p className={`text-[13px] leading-relaxed lg:pt-2 ${bodyDark}`}>
              All scenarios use fictional organizations, synthetic data and non-sensitive values. No real
              financial statements, employee data or customer data appear.
            </p>
          </div>

          <div className="mt-10 grid gap-px bg-black/10 dark:bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {SCENARIOS.map((s, i) => (
              <button key={s.n} type="button" onClick={() => setScenario(i)}
                className={`p-4 text-left transition-colors ${
                  scenario === i
                    ? "bg-[#0f1a30] text-white dark:bg-white dark:text-[#0f1a30]"
                    : "bg-white text-slate-600 hover:bg-[#faf8f3] dark:bg-[#16233d] dark:text-gray-400 dark:hover:bg-white/10"
                }`}>
                <span className={`text-[10px] font-semibold ${
                  scenario === i ? "text-[#f0a54a] dark:text-[#d9720f]" : "text-slate-400"
                }`}>{s.n}</span>
                <p className="mt-1.5 text-[11px] font-semibold leading-snug">{s.tab}</p>
              </button>
            ))}
          </div>

          <div className={`grid gap-6 border border-t-0 p-6 lg:grid-cols-[1.35fr_1fr] ${cardDark}`}>
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                {SCENARIOS[scenario].crumb}
              </p>
              <h3 className={`mt-2 text-[1.35rem] ${serifH} ${headingDark}`}>{SCENARIOS[scenario].tab}</h3>

              <dl className="mt-5 divide-y divide-black/10 border-y border-black/10 dark:divide-white/10 dark:border-white/10">
                {SCENARIOS[scenario].rows.map(([term, def]) => (
                  <div key={term} className="grid gap-1 py-3 sm:grid-cols-[120px_1fr] sm:gap-4">
                    <dt className={`text-[11px] font-bold ${headingDark}`}>{term}</dt>
                    <dd className={`text-[11px] leading-relaxed ${mutedDark}`}>{def}</dd>
                  </div>
                ))}
              </dl>

              <p className={`mt-4 border-l-2 border-[#e8912a] bg-[#faf8f3] py-2.5 pl-3 text-[11px] leading-relaxed dark:bg-white/5 ${mutedDark}`}>
                <span className="font-semibold">Summary — </span>
                No autonomous posting and no close certification. Every outcome above is recorded against a
                named human owner.
              </p>
            </div>
            <ImageSlot src="/images/image 139 (1).png" alt="Synthetic scenario visualization" ratio="aspect-[3/4]" />
          </div>
        </div>
      </section>

      {/* ─── §07 FAQ ─── */}
      <section className={SECTION_NAVY}>
        <div className="mx-auto max-w-6xl text-white">
          <p className={eyebrowLight}><span className="h-px w-5 bg-[#f0a54a]" /> §07 — Frequently Asked Questions</p>

          <div className="mt-6 grid items-start gap-10 lg:grid-cols-[0.75fr_1.6fr]">
            <div className="lg:sticky lg:top-8">
              <h2 className={`text-[clamp(1.5rem,3.2vw,2.1rem)] ${serifH}`}>Buyer and governance questions.</h2>
              <p className="mt-4 text-[12px] leading-relaxed text-slate-300/75">
                Scoped to public product information. Contracts, security architecture and detailed data flows
                belong to the enterprise briefing process.
              </p>
              <div className="mt-5 flex flex-col gap-2">
                {["Professional Boundaries", "Governance Framework", "Privacy & Security", "Enterprise Integrations"].map((l) => (
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

      {/* ─── START ─── */}
      <section className={SECTION_CREAM}>
        <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-2">
          <div>
            <p className={eyebrowAmber}><span className="h-px w-5 bg-[#d9720f] dark:bg-[#f0a54a]" /> Start</p>
            <h2 className={`mt-4 max-w-sm text-[clamp(1.5rem,3.2vw,2.1rem)] ${serifH} ${headingDark}`}>
              Start with a governed demonstration.
            </h2>
            <p className={`mt-4 max-w-md text-[13px] leading-relaxed ${bodyDark}`}>
              Demonstrations use synthetic organizations, entities, accounts, periods and values. No real
              financial statements or customer data appear.
            </p>
            <p className="mt-4 max-w-md text-[10px] leading-relaxed text-slate-500 dark:text-gray-500">
              Demo and pilot terms are defined at the point of request. Required onboarding communication is
              separate from optional marketing consent.
            </p>
            <ImageSlot src="/images/image 140 (1).png" alt="Governed demonstration session" ratio="aspect-[16/10]" className="mt-8" />
          </div>

          <div className="space-y-3">
            {/* Primary — navy in both themes */}
            <a href="#" className="group flex items-start justify-between gap-4 rounded bg-[#0f1a30] p-5 transition-opacity hover:opacity-95 dark:bg-[#0b1426] dark:ring-1 dark:ring-white/10">
              <span>
                <span className="block text-[14px] font-semibold text-white">Book a Demo</span>
                <span className="mt-1 block text-[11px] leading-relaxed text-slate-300/70">
                  Walk through governed enterprise finance workflows with synthetic data.
                </span>
              </span>
              <span className="mt-1 text-[#f0a54a] transition-transform group-hover:translate-x-0.5"><Arrow /></span>
            </a>

            {/* Secondary */}
            {START_OPTIONS.map(([title, desc]) => (
              <a key={title} href="#"
                className={`group flex items-start justify-between gap-4 rounded border p-5 transition-colors hover:border-black/25 dark:hover:border-white/25 ${cardDark}`}>
                <span>
                  <span className={`block text-[13px] font-semibold ${headingDark}`}>{title}</span>
                  <span className={`mt-1 block text-[11px] leading-relaxed ${mutedDark}`}>{desc}</span>
                </span>
                <span className="mt-1 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-[#d9720f] dark:group-hover:text-[#f0a54a]"><Arrow /></span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}