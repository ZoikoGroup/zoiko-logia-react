"use client";

import Image from "next/image";
import { useState } from "react";

const NAVY = "#0f1a30";
const NAVY_DEEP = "#0b1426";
const AMBER = "#e8912a";
const CREAM = "#f2ece0";

function ImageSlot({ src, alt, ratio = "aspect-[4/3]", rounded = "rounded", className = "" }:
  { src: string; alt: string; ratio?: string; rounded?: string; className?: string }) {
  return (
    <div className={`relative w-full overflow-hidden bg-slate-200 dark:bg-gray-800 ${ratio} ${rounded} ${className}`}>
      <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
    </div>
  );
}

// ─── DATA ──────────────────────────────────────────────────────────────────────

/** Hero — research panel mock */
const HERO_NAV: string[] = [
  "Issue framing", "Jurisdiction", "Authority search", "Analysis", "Review", "Evidence",
];

const HERO_ROWS: [string, string, "ok" | "warn" | "block"][] = [
  ["Jurisdiction confirmed", "US federal · synthetic", "ok"],
  ["Tax type", "Corporate income", "ok"],
  ["Period", "TY Year 4 · synthetic", "ok"],
  ["Authority conflict", "Two sources disagree — unresolved", "warn"],
  ["Position conclusion", "Requires qualified human sign-off", "block"],
];

/** §01 — tax roles */
const ROLES: [string, string][] = [
  ["Head of Tax", "Governs scope, policy, risk appetite, review expectations and release accountability across the function."],
  ["Corporate Income Tax", "Prepares provisions, positions and returns with source-linked support and visible calculation traces."],
  ["Indirect & Employment Tax", "Handles jurisdiction-specific rules, registration thresholds, rates and filing obligations."],
  ["Transfer Pricing", "Structures documentation, comparables reasoning, method selection and defence files."],
];

/** §02 — twelve capability layers */
const CAPABILITIES: [string, string, string][] = [
  ["Ask Accounting Questions", "Jurisdiction-aware research over admitted tax authority, bound to taxpayer, period and tax type.",
    "Does not issue a tax opinion or conclude a position."],
  ["Workflow Mode", "Structures research, analysis, calculation, documentation and review through governed stages.",
    "Does not auto-advance a stage or file a return."],
  ["Review Mode", "Surfaces significant judgments, unresolved conflicts and changes for reviewer attention.",
    "Does not sign off or clear a review note."],
  ["Learning & Practice Mode", "Builds understanding through synthetic scenarios with source-linked feedback.",
    "Does not certify competence or authorize professional work."],
  ["Admin Mode", "Governs roles, source admission, retention, integrations and provider controls.",
    "Does not grant itself authority or bypass separation of duties."],
  ["Human Escalation", "Routes unresolved conflicts, thresholds and consultation triggers to a named person.",
    "Does not resolve the matter or substitute for consultation."],
  ["Source-Governed Intelligence", "Restricts reasoning to admitted authority with status, effect and applicability attached.",
    "Does not reason from unadmitted or unverified sources."],
  ["Accounting Ontology", "Governs concepts, relationships and jurisdiction mappings as typed, versioned objects.",
    "Does not infer a mapping that has not been approved."],
  ["RAG Source Bundles", "Assembles the eligible, versioned authority set a question may draw on.",
    "Does not widen the bundle implicitly at query time."],
  ["Audit Evidence Ledger", "Preserves sources, context, retrieval, output, review and action for each interaction.",
    "Does not assert that a position is correct or sustainable."],
  ["Evaluation & Benchmarks", "Gates release on defined quality, coverage and regression thresholds.",
    "Does not promote a capability that fails its gate."],
  ["Enterprise Integrations", "Connects approved tax, ERP, document and identity systems within an authorized scope.",
    "Does not treat connectivity as authority to write or file."],
];

/** §03 — ten context dimensions */
const DIMENSIONS: [string, string][] = [
  ["Jurisdiction", "Country, state, province or locality. Never inferred from browser locale or user address."],
  ["Tax type", "Corporate income, indirect, employment, withholding, excise, transfer pricing and others differ entirely."],
  ["Taxpayer", "Entity type, residency, group membership, elections and filing profile."],
  ["Period and date", "Tax year, effective date, transition rules and the date the answer is being relied upon."],
  ["Authority level", "Statute, regulation, ruling, procedure, guidance or commentary — each carries different weight."],
  ["Filing status", "Pre-filing, filed, under examination, under appeal or closed. Each changes what is appropriate."],
  ["Materiality", "Threshold basis and approval state, treated as a professional determination, not a calculation."],
  ["Confidentiality", "Classification, permitted use, residency and sharing constraints for taxpayer data."],
  ["Intended use", "Internal research, client advice, filing support or controversy defence."],
  ["Role and permission", "What the requesting person is authorized to see, prepare, review or approve."],
];

/** §04 — six authority states */
type AuthState = "controlling" | "proposed" | "superseded" | "persuasive" | "withdrawn" | "internal";

const AUTHORITIES: { title: string; state: AuthState; rows: [string, string][] }[] = [
  {
    title: "Internal Rev. Code §4-021",
    state: "controlling",
    rows: [
      ["Authority level", "Statute — highest weight"],
      ["Status", "In force · synthetic reference"],
      ["Effective", "TY Year 1 onward"],
      ["Reliance", "Controlling. May be relied upon directly."],
    ],
  },
  {
    title: "Proposed Reg 22-42-1",
    state: "proposed",
    rows: [
      ["Authority level", "Regulation — proposed"],
      ["Status", "Not final · comment period open"],
      ["Effective", "Not yet effective"],
      ["Reliance", "Indicative only. Cannot support a filing position."],
    ],
  },
  {
    title: "Rev. Proc. 22-14",
    state: "persuasive",
    rows: [
      ["Authority level", "Administrative procedure"],
      ["Status", "Current · synthetic reference"],
      ["Effective", "TY Year 3 onward"],
      ["Reliance", "Persuasive within its stated scope only."],
    ],
  },
  {
    title: "Revenue Ruling 2021-14",
    state: "superseded",
    rows: [
      ["Authority level", "Ruling"],
      ["Status", "Superseded by Rev. Rul. Year 4-02"],
      ["Effective", "Historic periods only"],
      ["Reliance", "Comparison and history only. Not current."],
    ],
  },
  {
    title: "Former Reg 22-52-2",
    state: "withdrawn",
    rows: [
      ["Authority level", "Regulation — withdrawn"],
      ["Status", "Withdrawn · synthetic reference"],
      ["Effective", "No longer operative"],
      ["Reliance", "Cannot be relied upon in any period."],
    ],
  },
  {
    title: "Internal Tax Policy TP-08",
    state: "internal",
    rows: [
      ["Authority level", "Internal policy"],
      ["Status", "Rev 3 · approved"],
      ["Effective", "Tenant-specific · internal use"],
      ["Reliance", "Firm position only. Not external authority."],
    ],
  },
];

const AUTH_BADGE: Record<AuthState, { label: string; cls: string }> = {
  controlling: { label: "Controlling", cls: "bg-emerald-100 text-emerald-700 ring-emerald-300" },
  proposed: { label: "Proposed", cls: "bg-blue-100 text-blue-700 ring-blue-300" },
  persuasive: { label: "Persuasive", cls: "bg-slate-200 text-slate-700 ring-slate-300" },
  superseded: { label: "Superseded", cls: "bg-amber-100 text-amber-700 ring-amber-300" },
  withdrawn: { label: "Withdrawn", cls: "bg-rose-100 text-rose-700 ring-rose-300" },
  internal: { label: "Internal", cls: "bg-violet-100 text-violet-700 ring-violet-300" },
};

/** §05 — ten workbench stages */
const WORKBENCH: { n: string; title: string; body: string }[] = [
  { n: "01", title: "Frame the issue", body: "The question, taxpayer, period and intended use are stated before research opens." },
  { n: "02", title: "Confirm jurisdiction", body: "Requested explicitly. Locale is never treated as jurisdiction." },
  { n: "03", title: "Assemble authority", body: "Eligible sources gathered with level, status, effect and applicability attached." },
  { n: "04", title: "Resolve conflicts", body: "Where sources disagree, the conflict is surfaced rather than silently ranked." },
  { n: "05", title: "Analyse", body: "Reasoning shown against each source, held explicitly as a draft analysis." },
  { n: "06", title: "Calculate", body: "Inputs, formula, rates, currency, rounding and validation exposed with the result." },
  { n: "07", title: "Document", body: "Memorandum assembled with the full citation and calculation trace inline." },
  { n: "08", title: "Review", body: "Named reviewer, bounded outcome per item, attributable and dated." },
  { n: "09", title: "Approve", body: "A qualified professional signs. The system records the act; it never performs it." },
  { n: "10", title: "Retain", body: "Version, freshness and retention state recorded, with revalidation scheduled." },
];

const MEMO_ROWS: [string, string, "ok" | "warn" | "block"][] = [
  ["Issue", "Deductibility of a synthetic intercompany charge", "ok"],
  ["Jurisdiction", "US federal · confirmed by preparer", "ok"],
  ["Authority set", "1 statute, 1 procedure, 1 superseded ruling", "ok"],
  ["Conflict", "Procedure scope disputed — unresolved", "warn"],
  ["Conclusion", "Blocked pending qualified review", "block"],
];

/** §06 — integration action modes */
type ModeTone = "read" | "draft" | "prepare" | "ready" | "rehearse" | "execute" | "blocked" | "escalate";

const ACTION_MODES: [string, ModeTone, string][] = [
  ["Read-only", "read", "Retrieves data. Cannot alter any record in a connected system."],
  ["Draft", "draft", "Composes a proposed artifact held inside the workspace, never pushed outward."],
  ["Prepare", "prepare", "Assembles a payload for a connected system without transmitting it."],
  ["Submit-ready", "ready", "Payload validated and staged. Awaits an explicit human release."],
  ["Rehearsal", "rehearse", "Executes against a sandbox to verify shape and permission. No live effect."],
  ["Execute", "execute", "Writes to a live system. Requires authorization separate from connectivity."],
  ["Blocked", "blocked", "A precondition failed. The action is refused and the reason is stated."],
  ["Escalate", "escalate", "Routes to a named authority. Cannot be cleared by the system."],
];

const MODE_TONE: Record<ModeTone, string> = {
  read: "bg-slate-200 text-slate-700 ring-slate-300",
  draft: "bg-blue-100 text-blue-700 ring-blue-300",
  prepare: "bg-cyan-100 text-cyan-700 ring-cyan-300",
  ready: "bg-teal-100 text-teal-700 ring-teal-300",
  rehearse: "bg-violet-100 text-violet-700 ring-violet-300",
  execute: "bg-emerald-100 text-emerald-700 ring-emerald-300",
  blocked: "bg-rose-100 text-rose-700 ring-rose-300",
  escalate: "bg-amber-100 text-amber-700 ring-amber-300",
};

/** §07 — eight stage gates */
const GATES: [string, string, string][] = [
  ["Readiness", "Taxpayer, jurisdiction, period, intended use and permission confirmed.", "Exit gate — context complete and recorded."],
  ["Source and Context Validation", "Authority level, status, effect and applicability verified for each source.", "Exit gate — no unverified source in the set."],
  ["Offline Evaluation", "Approach tested against synthetic fact patterns before live application.", "Exit gate — evaluation threshold met."],
  ["Prepare Workflow", "Analysis, calculation and documentation assembled with traces intact.", "Exit gate — every claim source-linked."],
  ["Control Test", "Conflicts, thresholds and confidentiality constraints checked.", "Exit gate — no unresolved conflict carried forward."],
  ["Review and Decision", "Named reviewer records a bounded outcome for each open item.", "Exit gate — human decision on record."],
  ["Phased Execution", "Action mode applied deliberately, separated from connectivity.", "Exit gate — authorized release, verified after."],
  ["Ongoing Assurance", "Retention, revalidation and source-change monitoring after close.", "Exit gate — revalidation interval set."],
];

/** §08 — five synthetic scenarios */
const SCENARIOS: { tab: string; rows: [string, string][] }[] = [
  {
    tab: "Corporate Tax Research Memorandum",
    rows: [
      ["Scenario", "A synthetic entity seeks support for the treatment of an intercompany charge in a single tax year."],
      ["Context", "Tax type, entity, residency, period, filing status and intended use confirmed before research opens."],
      ["Authority", "One statute, one procedure and one superseded ruling, each shown with level, status and effect."],
      ["Analysis", "Reasoning shown against each source. The superseded ruling is used for history only, and labelled."],
      ["Review", "Reviewer returns one point, accepts two, and escalates the unresolved scope conflict."],
      ["Evidence", "Sources, retrieval bundle, output, review and action preserved as one continuous record."],
    ],
  },
  {
    tab: "Indirect Tax Registration Threshold",
    rows: [
      ["Scenario", "A fictional group tests whether a registration obligation arises in a second jurisdiction."],
      ["Context", "Jurisdiction requested explicitly. Locale is never used as a substitute."],
      ["Authority", "Jurisdiction-specific threshold rules with effective dates and applicability limits attached."],
      ["Analysis", "Threshold arithmetic exposed with inputs, currency and rate source visible."],
      ["Review", "Preparer confirms the fact pattern; the obligation determination remains a human call."],
      ["Evidence", "Calculation trace retained alongside the authority set used."],
    ],
  },
  {
    tab: "Transfer Pricing Documentation Support",
    rows: [
      ["Scenario", "Synthetic related-party transactions require documentation support for a defence file."],
      ["Context", "Entities, functions, risks, assets and period declared. Group scope gaps flagged, not filled."],
      ["Authority", "Guidance set assembled with issuer, version and applicability recorded per item."],
      ["Analysis", "Method rationale drafted with comparability factors exposed as assumptions."],
      ["Review", "Specialist review required before any element enters the defence file."],
      ["Evidence", "Version history preserved; superseded drafts marked rather than replaced."],
    ],
  },
  {
    tab: "Employment Tax Classification Review",
    rows: [
      ["Scenario", "A fictional engagement is tested against worker classification factors."],
      ["Context", "Jurisdiction, period, engagement terms and intended use recorded."],
      ["Authority", "Factor-based guidance with weight and status attached to each element."],
      ["Analysis", "Each factor assessed separately. No single composite score is produced."],
      ["Review", "Classification conclusion withheld pending qualified human determination."],
      ["Evidence", "Factor-level reasoning retained for later inspection."],
    ],
  },
  {
    tab: "Controversy Response Preparation",
    rows: [
      ["Scenario", "A synthetic examination query requires an evidenced response package."],
      ["Context", "Filing status set to under examination, which changes what is appropriate to produce."],
      ["Authority", "Authority set limited to what was in force for the period under review."],
      ["Analysis", "Response drafted with each assertion tied to its supporting item."],
      ["Review", "Controversy lead approves release. The system never transmits a response."],
      ["Evidence", "Package carries its integrity signature for later verification."],
    ],
  },
];

/** §09 — FAQ */
const FAQS: [string, string][] = [
  ["What is ZoikoLogia™ with Kriton™ for tax professionals?",
    "A governed layer over jurisdiction-aware research, controlled workflows, transparent calculation and confidential review evidence. It supports tax work; it does not perform it."],
  ["Does Kriton™ provide tax advice?",
    "No. It does not provide tax advice, issue an opinion, or conclude a position. Advice remains the responsibility of qualified professionals in your firm or department."],
  ["Can it file a return?",
    "No. Filing is outside the boundary entirely. Connectivity to a system is never treated as authority to submit anything on your behalf."],
  ["How is jurisdiction determined?",
    "It is requested explicitly and recorded. Browser locale, user address and prior sessions are never used to infer jurisdiction."],
  ["How are conflicting authorities handled?",
    "Conflicts are surfaced for human resolution. The system does not silently rank one source above another or pick a side."],
  ["What happens with superseded or withdrawn authority?",
    "Status travels with every citation. Superseded sources are usable for comparison and history only; withdrawn sources cannot support a position in any period."],
  ["Can it calculate tax?",
    "It provides calculation support with inputs, formula, rates, currency, rounding and validation exposed. A result without its trace is not presented as final."],
  ["How is materiality treated?",
    "As a professional determination. Arithmetic support is available; threshold selection and approval remain with a named person."],
  ["How is confidential taxpayer data protected?",
    "Through tenant isolation, classification-driven retention, field-level access, residency constraints, purpose limitation and governed export."],
  ["Does it integrate with our tax and ERP systems?",
    "Yes, through governed integration patterns with explicit action modes — read-only, draft, prepare, submit-ready, rehearsal and execute are separated deliberately."],
  ["Who can see what?",
    "Access is bound by role, tenant and field-level permission. Preparation authority and review authority are distinct, and neither implies the other."],
  ["How does human escalation work?",
    "Unresolved conflicts, thresholds and consultation triggers route to a named authority with the reason attached. Escalation cannot be cleared by the system."],
  ["Can we evaluate it on our own fact patterns?",
    "Pilots run on synthetic fact patterns by default. Where real data is in scope, that is defined contractually before any pilot begins."],
  ["Can we run a controlled pilot?",
    "Yes. Scope, participants, source admission, data handling and success criteria are agreed in advance."],
];

/** Get started */
const IN_SCOPE: string[] = [
  "Jurisdiction-aware research over admitted authority",
  "Authority level, status and effect on every citation",
  "Calculation traces with inputs and validation",
  "Named human review with bounded outcomes",
  "Evidence continuity across the whole interaction",
  "Explicit action modes for every integration",
];

const OUT_OF_SCOPE: string[] = [
  "No tax advice, opinion or position conclusion",
  "No filing, submission or transmission",
  "No real taxpayer data in any demonstration",
];

const START_OPTIONS: [string, string][] = [
  ["Request Pilot", "Pilot readiness form. No confidential taxpayer information required."],
  ["Request Enterprise Briefing", "Data flows, integrations, governance boundaries and evaluation evidence."],
  ["View Governance Framework", "Source authority, evaluation, release gates and responsible-AI model."],
  ["Visit Privacy & Security", "Classification, access, retention, residency, tenant boundaries and provider controls."],
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

const STATE_DOT: Record<"ok" | "warn" | "block", string> = {
  ok: "bg-emerald-400",
  warn: "bg-amber-400",
  block: "bg-rose-400",
};

const eyebrowAmber = "flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#d9720f]";
const eyebrowLight = "flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#f0a54a]";
const serifH = "font-serif leading-tight";

// ─── PAGE ───────────────────────────────────────────────────────────────────────

export default function Page() {
  const [dimension, setDimension] = useState<number | null>(0);
  const [stage, setStage] = useState(0);
  const [scenario, setScenario] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="font-sans text-[#16233d] dark:text-white" style={{ backgroundColor: CREAM }}>

      {/* ─── HERO (navy) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8 lg:py-20" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="text-white">
            <p className={eyebrowLight}>
              <span className="h-px w-5 bg-[#f0a54a]" /> Solutions · Tax Professionals
            </p>
            <h1 className={`mt-5 max-w-md text-[clamp(1.9rem,4.2vw,2.7rem)] ${serifH}`}>
              Bring governed AI into tax work — with authority, context, review and evidence intact.
            </h1>
            <p className="mt-5 max-w-md text-[13px] leading-relaxed text-slate-300/80">
              ZoikoLogia™ with Kriton™ helps tax professionals structure jurisdiction-aware research,
              controlled workflows, transparent calculations and confidential review evidence — while
              qualified people retain responsibility for positions and advice.
            </p>

            <p className="mt-5 max-w-md border-l-2 border-[#f0a54a] pl-3 text-[11px] leading-relaxed text-slate-300/70">
              <span className="font-semibold text-[#f0a54a]">Reminder — </span>
              Kriton™ supports tax work. It does not provide tax advice, issue an opinion, conclude a
              position or file anything.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a href="#" className="rounded px-6 py-2.5 text-[13px] font-semibold text-white transition-opacity hover:opacity-90" style={{ backgroundColor: AMBER }}>
                Book a Demo
              </a>
              <a href="#" className="rounded border border-white/25 px-6 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-white/10">
                Request Pilot
              </a>
            </div>

            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
              {["Professional Boundaries", "Governance Framework", "Privacy & Security"].map((l) => (
                <a key={l} href="#" className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#f0a54a] hover:underline">
                  {l} <Arrow className="h-3 w-3" />
                </a>
              ))}
            </div>
          </div>

          {/* Research panel mock */}
          <div className="overflow-hidden rounded bg-white/[0.04] ring-1 ring-white/10">
            <p className="border-b border-white/10 px-5 py-2.5 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
              Tax research workspace · synthetic taxpayer · preview
            </p>
            <div className="grid sm:grid-cols-[150px_1fr]">
              <ul className="border-b border-white/10 p-3 sm:border-b-0 sm:border-r">
                {HERO_NAV.map((n, i) => (
                  <li key={n}>
                    <span className={`block rounded px-2.5 py-1.5 text-[11px] ${
                      i === 0 ? "bg-white/10 font-medium text-white" : "text-slate-300/55"
                    }`}>{n}</span>
                  </li>
                ))}
              </ul>
              <ul className="divide-y divide-white/5">
                {HERO_ROWS.map(([label, value, tone]) => (
                  <li key={label} className="flex items-start gap-3 px-4 py-3">
                    <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${STATE_DOT[tone]}`} />
                    <span className="min-w-0">
                      <span className="block text-[11px] font-medium text-white">{label}</span>
                      <span className="mt-0.5 block text-[10px] leading-relaxed text-slate-300/55">{value}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── §01 ROLE AND TAX ENVIRONMENT ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-5 bg-[#d9720f]" /> §01 — Role and Tax Environment</p>

          <div className="mt-4 grid gap-8 lg:grid-cols-2">
            <h2 className={`text-black text-[clamp(1.5rem,3.2vw,2.1rem)] ${serifH}`}>
              Tax roles. Each with distinct needs.
            </h2>
            <p className="text-[13px] leading-relaxed text-slate-700 lg:pt-2">
              Heads of tax govern. Corporate tax prepares. Indirect and employment tax specialists carry
              jurisdiction-specific obligations. Transfer pricing documents. Each has a different boundary.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-[1.15fr_1fr]">
            <div className="grid gap-4 sm:grid-cols-2">
              {ROLES.map(([title, body]) => (
                <article key={title} className="p-5 text-white" style={{ backgroundColor: NAVY }}>
                  <h3 className="text-[13px] font-semibold">{title}</h3>
                  <p className="mt-2 text-[11px] leading-relaxed text-slate-300/70">{body}</p>
                </article>
              ))}
            </div>
            <ImageSlot src="/images/image 148.png" alt="Tax professionals in discussion" ratio="aspect-[4/3]" />
          </div>
        </div>
      </section>

      {/* ─── §02 CAPABILITY SYSTEM ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-5 bg-[#d9720f]" /> §02 — Tax Professional Capability System</p>

          <div className="mt-4 grid gap-8 lg:grid-cols-2">
            <h2 className={`text-black text-[clamp(1.5rem,3.2vw,2.1rem)] ${serifH}`}>
              Twelve capability layers mapped to tax work.
            </h2>
            <p className="text-[13px] leading-relaxed text-slate-700 lg:pt-2">
              Every capability operates within a stated boundary. None issues a tax opinion, concludes a
              position, files a return or substitutes for professional judgment.
            </p>
          </div>

          <div className="mt-10 border border-black/10 bg-white">
            {CAPABILITIES.map(([title, body, stops], i) => (
              <div key={title} className={`grid gap-3 p-4 sm:grid-cols-[210px_1fr_240px] sm:gap-5 ${
                i > 0 ? "border-t border-black/10" : ""
              }`}>
                <p className="flex items-baseline gap-2.5 text-[12px] font-semibold text-black">
                  <span className="text-[10px] font-semibold text-[#d9720f]">{String(i + 1).padStart(2, "0")}</span>
                  {title}
                </p>
                <p className="text-[11px] leading-relaxed text-slate-600">{body}</p>
                <p className="border-l-2 border-[#e8912a] bg-[#faf8f3] py-2 pl-3 text-[10px] leading-relaxed text-slate-600">
                  {stops}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── §03 TAX CONTEXT MODEL (navy) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto max-w-6xl text-white">
          <p className={eyebrowLight}><span className="h-px w-5 bg-[#f0a54a]" /> §03 — Tax Context Model</p>

          <div className="mt-6 grid items-start gap-10 lg:grid-cols-2">
            <div>
              <h2 className={`text-[clamp(1.5rem,3.2vw,2.1rem)] ${serifH}`}>
                Ten context dimensions. None inferred silently.
              </h2>
              <p className="mt-4 text-[12px] leading-relaxed text-slate-300/75">
                Jurisdiction, tax type, taxpayer, period, authority level, filing status, materiality,
                confidentiality, intended use and permission — each requested, each recorded.
              </p>

              <ul className="mt-7 border-t border-white/10">
                {DIMENSIONS.map(([term, def], i) => {
                  const open = dimension === i;
                  return (
                    <li key={term} className="border-b border-white/10">
                      <button type="button" onClick={() => setDimension(open ? null : i)}
                        className="flex w-full items-center justify-between gap-4 py-2.5 text-left">
                        <span className={`text-[12px] ${open ? "font-semibold text-[#f0a54a]" : "text-slate-300/70"}`}>
                          {term}
                        </span>
                        <span className={open ? "text-[#f0a54a]" : "text-slate-500"}><Chevron open={open} /></span>
                      </button>
                      {open && <p className="pb-3 pr-8 text-[11px] leading-relaxed text-slate-300/60">{def}</p>}
                    </li>
                  );
                })}
              </ul>
            </div>
            <ImageSlot src="/images/image 149.png" alt="Advisors reviewing jurisdiction detail" ratio="aspect-[3/4]" className="lg:sticky lg:top-8" />
          </div>
        </div>
      </section>

      {/* ─── §04 AUTHORITY, STATUS AND RELIANCE ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-5 bg-[#d9720f]" /> §04 — Authority, Status and Reliance</p>

          <div className="mt-4 grid gap-8 lg:grid-cols-2">
            <h2 className={`text-black text-[clamp(1.5rem,3.2vw,2.1rem)] ${serifH}`}>
              Six authority states. Each with a different reliance treatment.
            </h2>
            <p className="text-[13px] leading-relaxed text-slate-700 lg:pt-2">
              A cited source is not automatically controlling. Source type, issuing body, authority level,
              status, effective history, applicability and conflicts are all visible without a lookup —
              because each changes how far a source can be relied upon.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {AUTHORITIES.map((a) => (
              <article key={a.title} className="border border-black/10 bg-white">
                <div className="flex items-center justify-between gap-3 border-b border-black/10 px-4 py-3">
                  <p className="text-[12px] font-bold text-black">{a.title}</p>
                  <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-[9px] font-semibold ring-1 ${AUTH_BADGE[a.state].cls}`}>
                    {AUTH_BADGE[a.state].label}
                  </span>
                </div>
                <dl className="divide-y divide-black/[0.07]">
                  {a.rows.map(([term, def]) => (
                    <div key={term} className="px-4 py-2.5">
                      <dt className="text-[9px] font-bold uppercase tracking-[0.1em] text-slate-400">{term}</dt>
                      <dd className="mt-0.5 text-[11px] leading-relaxed text-slate-600">{def}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>

          <ImageSlot src="/images/image 150.png" alt="Reviewing authority together" ratio="aspect-[21/7]" className="mt-6" />
        </div>
      </section>

      {/* ─── §05 RESEARCH, WORKFLOW AND CALCULATION WORKBENCH ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-5 bg-[#d9720f]" /> §05 — Research, Workflow and Calculation Workbench</p>

          <div className="mt-4 grid gap-8 lg:grid-cols-2">
            <h2 className={`text-black text-[clamp(1.5rem,3.2vw,2.1rem)] ${serifH}`}>
              Ten stages. Source-linked at every step.
            </h2>
            <p className="text-[13px] leading-relaxed text-slate-700 lg:pt-2">
              From issue framing through retention — each stage has a control, a review requirement and an
              evidence record. No stage produces a tax opinion or files automatically.
            </p>
          </div>

          {/* Stepper */}
          <div className="mt-10 grid gap-px overflow-x-auto bg-black/10 sm:grid-cols-5 lg:grid-cols-10">
            {WORKBENCH.map((s, i) => (
              <button key={s.n} type="button" onClick={() => setStage(i)}
                className={`p-3 text-left transition-colors ${
                  stage === i ? "bg-[#0f1a30] text-white" : "bg-white text-slate-600 hover:bg-[#faf8f3]"
                }`}>
                <span className={`block text-[10px] font-semibold ${stage === i ? "text-[#f0a54a]" : "text-slate-400"}`}>{s.n}</span>
                <span className="mt-1 block text-[10px] font-semibold leading-snug">{s.title}</span>
              </button>
            ))}
          </div>

          <div className="grid gap-6 border border-t-0 border-black/10 bg-white p-6 lg:grid-cols-2">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                Stage {WORKBENCH[stage].n}
              </p>
              <h3 className={`mt-2 text-black text-[1.35rem] ${serifH}`}>{WORKBENCH[stage].title}</h3>
              <p className="mt-3 text-[12px] leading-relaxed text-slate-600">{WORKBENCH[stage].body}</p>
              <ImageSlot src="/images/image 151.png" alt="Working through a tax memorandum" ratio="aspect-[16/10]" className="mt-6" />
            </div>

            {/* Memo mock */}
            <div className="self-start rounded p-5 text-white" style={{ backgroundColor: NAVY }}>
              <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                Tax research memorandum · synthetic taxpayer · preview
              </p>
              <ul className="mt-4 divide-y divide-white/10 border-y border-white/10">
                {MEMO_ROWS.map(([label, value, tone]) => (
                  <li key={label} className="flex items-start gap-3 py-2.5">
                    <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${STATE_DOT[tone]}`} />
                    <span className="min-w-0">
                      <span className="block text-[11px] font-medium">{label}</span>
                      <span className="mt-0.5 block text-[10px] leading-relaxed text-slate-300/60">{value}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[10px] leading-relaxed text-amber-300/80">
                Conclusion withheld. A tax position requires a qualified human determination before it may be
                relied upon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── §06 PRIVACY, SECURITY, CLIENT AND EVIDENCE RULES ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-5 bg-[#d9720f]" /> §06 — Privacy, Security, Client and Evidence Rules</p>

          <div className="mt-4 grid gap-8 lg:grid-cols-2">
            <h2 className={`text-black text-[clamp(1.5rem,3.2vw,2.1rem)] ${serifH}`}>
              Confidential tax data governed at every layer.
            </h2>
            <p className="text-[13px] leading-relaxed text-slate-700 lg:pt-2">
              Tax data is among the most sensitive personal and business information an organization holds.
              Tenant isolation, classification, retention and residency are not settings — they are
              requirements, applied at every layer.
            </p>
          </div>

          <div className="mt-10 grid items-start gap-6 lg:grid-cols-[1fr_1.3fr]">
            <ImageSlot src="/images/image 152.png" alt="Confidential review session" ratio="aspect-[4/3]" />

            <div className="border border-black/10 bg-white">
              <p className="border-b border-black/10 px-4 py-2.5 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-500">
                Integration action modes
              </p>
              <ul className="divide-y divide-black/[0.07]">
                {ACTION_MODES.map(([mode, tone, desc]) => (
                  <li key={mode} className="flex items-start gap-3 px-4 py-3">
                    <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-[9px] font-semibold ring-1 ${MODE_TONE[tone]}`}>
                      {mode}
                    </span>
                    <span className="text-[11px] leading-relaxed text-slate-600">{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── §07 TAX WORKFLOW STAGE GATES (deep navy) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: NAVY_DEEP }}>
        <div className="mx-auto max-w-6xl text-white">
          <p className={eyebrowLight}><span className="h-px w-5 bg-[#f0a54a]" /> §07 — Tax Workflow Stage Gates</p>

          <div className="mt-4 grid gap-8 lg:grid-cols-2">
            <h2 className={`text-[clamp(1.5rem,3.2vw,2.1rem)] ${serifH}`}>
              Eight stages. Every stage has an evidence-based exit gate.
            </h2>
            <p className="text-[12px] leading-relaxed text-slate-300/75 lg:pt-2">
              This gate model separates readiness, validation, evaluation, preparation, control testing,
              human approval and authorized execution — with a named decision at each gate.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {GATES.map(([title, body, gate], i) => (
              <article key={title} className="rounded bg-white/[0.04] p-5 ring-1 ring-white/10">
                <p className="flex items-baseline gap-2.5">
                  <span className="text-[10px] font-semibold text-[#f0a54a]">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[13px] font-semibold">{title}</span>
                </p>
                <p className="mt-2 text-[11px] leading-relaxed text-slate-300/70">{body}</p>
                <p className="mt-3 border-t border-white/10 pt-2.5 text-[10px] leading-relaxed text-emerald-300/80">
                  {gate}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── §08 SYNTHETIC SCENARIOS ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-5 bg-[#d9720f]" /> §08 — Synthetic Scenarios</p>

          <div className="mt-4 grid gap-8 lg:grid-cols-2">
            <h2 className={`text-black text-[clamp(1.5rem,3.2vw,2.1rem)] ${serifH}`}>
              Five governed tax scenarios. No real taxpayer data.
            </h2>
            <p className="text-[13px] leading-relaxed text-slate-700 lg:pt-2">
              All scenarios use fictional entities, synthetic amounts and hypothetical positions. No real tax
              file, return, taxpayer identity, personal data or client data appears.
            </p>
          </div>

          <div className="mt-10 grid gap-px bg-black/10 sm:grid-cols-2 lg:grid-cols-5">
            {SCENARIOS.map((s, i) => (
              <button key={s.tab} type="button" onClick={() => setScenario(i)}
                className={`p-4 text-left transition-colors ${
                  scenario === i ? "bg-[#0f1a30] text-white" : "bg-white text-slate-600 hover:bg-[#faf8f3]"
                }`}>
                <span className={`text-[10px] font-semibold ${scenario === i ? "text-[#f0a54a]" : "text-slate-400"}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-1.5 text-[11px] font-semibold leading-snug">{s.tab}</p>
              </button>
            ))}
          </div>

          <div className="border border-t-0 border-black/10 bg-white p-6">
            <h3 className={`text-black text-[1.35rem] ${serifH}`}>{SCENARIOS[scenario].tab}</h3>
            <dl className="mt-5 divide-y divide-black/10 border-y border-black/10">
              {SCENARIOS[scenario].rows.map(([term, def]) => (
                <div key={term} className="grid gap-1 py-3 sm:grid-cols-[120px_1fr] sm:gap-4">
                  <dt className="text-[11px] font-bold text-black">{term}</dt>
                  <dd className="text-[11px] leading-relaxed text-slate-600">{def}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 border-l-2 border-[#e8912a] bg-[#faf8f3] py-2.5 pl-3 text-[11px] leading-relaxed text-slate-600">
              <span className="font-semibold">Summary — </span>
              No tax opinion, no position conclusion and no filing. Every outcome is recorded against a named
              human owner.
            </p>
          </div>

          <ImageSlot src="/images/image 153.png" alt="Reviewing a synthetic scenario" ratio="aspect-[21/7]" className="mt-6" />
        </div>
      </section>

      {/* ─── §09 FAQ (navy) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto max-w-6xl text-white">
          <p className={eyebrowLight}><span className="h-px w-5 bg-[#f0a54a]" /> §09 — Frequently Asked Questions</p>

          <div className="mt-6 grid items-start gap-10 lg:grid-cols-[0.7fr_1.7fr]">
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
              <ImageSlot src="/images/image 154.png" alt="Advisors in consultation" ratio="aspect-[4/3]" className="mt-8" />
            </div>

            <div className="grid gap-x-8 md:grid-cols-2">
              {[0, 1].map((col) => (
                <div key={col} className="border-t border-white/10">
                  {FAQS.filter((_, i) => i % 2 === col).map(([q, a]) => {
                    const idx = FAQS.findIndex(([fq]) => fq === q);
                    const open = openFaq === idx;
                    return (
                      <div key={q} className="border-b border-white/10">
                        <button type="button" onClick={() => setOpenFaq(open ? null : idx)} aria-expanded={open}
                          className="flex w-full items-start justify-between gap-4 py-3.5 text-left text-[12px] font-medium">
                          {q}<span className="mt-0.5 text-[#f0a54a]"><Chevron open={open} /></span>
                        </button>
                        {open && <p className="pb-4 pr-6 text-[11px] leading-relaxed text-slate-300/70">{a}</p>}
                      </div>
                    );
                  })}
                </div>
              ))}
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
              Start with a governed demonstration.
            </h2>
            <p className="mt-4 max-w-md text-[13px] leading-relaxed text-slate-700">
              Demonstrations use fictional entities, synthetic amounts, hypothetical positions and illustrative
              dates. No real taxpayer data, return, identity or confidential record appears.
            </p>
            <p className="mt-4 max-w-md text-[10px] leading-relaxed text-slate-500">
              Demo and pilot forms collect contact information only. Required processing consent is separate
              from optional marketing consent.
            </p>

            <div className="mt-8 rounded p-5" style={{ backgroundColor: NAVY }}>
              <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#f0a54a]">
                Tax Professionals — what is in scope
              </p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
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
            <a href="#" className="group flex items-start justify-between gap-4 rounded p-5 transition-opacity hover:opacity-95" style={{ backgroundColor: NAVY }}>
              <span>
                <span className="block text-[14px] font-semibold text-white">Book a Demo</span>
                <span className="mt-1 block text-[11px] leading-relaxed text-slate-300/70">
                  Walk through governed tax research, workflow and review with synthetic data.
                </span>
              </span>
              <span className="mt-1 text-[#f0a54a] transition-transform group-hover:translate-x-0.5"><Arrow /></span>
            </a>

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