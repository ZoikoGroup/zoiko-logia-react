"use client";

import Image from "next/image";
import { useState } from "react";

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

/** Why assurance is context-dependent — 6 numbered cards */
const CONTEXT_CARDS: [string, string, string, string][] = [
  ["01", "Same evidence. Different conclusions.", "Engagement context is not optional.",
    "Objective, criteria, period, scope, risk and intended use must remain visible throughout."],
  ["02", "Standards change. Versions matter.", "Source dates must travel with the answer.",
    "Source rarely stands alone — issuer, version, effective date, status and applicability limitations travel with it."],
  ["03", "Quantity is not sufficiency.", "Evidence state separates receipt from sufficiency.",
    "Received, acceptable, relevant, reliable, complete, tested and contradictory are distinct states."],
  ["04", "Materiality requires judgment.", "Arithmetic support is not professional selection.",
    "Calculation support is distinct from human-selected benchmarks, percentages, overlays and approvals."],
  ["05", "Risk assessment is iterative.", "New evidence can reopen risks.",
    "New facts, exceptions and changed circumstances can reopen risks, procedures and revised requirements."],
  ["06", "Independence cannot be inferred by AI.", "Non-bypassable gates replace checkbox compliance.",
    "Authorized checks, declarations, conflicts, restricted services, recusal and escalation stay explicit."],
];

/** Role entry cards */
const ROLE_CARDS: { eyebrow: string; title: string; body: string; link: string; img: string }[] = [
  {
    eyebrow: "Engagement leaders",
    title: "Govern scope, risk, significant judgments, review, evidence and release accountability.",
    body: "Planning-adjacent governance and non-bypassable independence gates.",
    link: "Engagement Leader Briefing",
    img: "/images/Image (Engagement Leaders).png",
  },
  {
    eyebrow: "Audit managers",
    title: "Coordinate plans, procedures, evidence, review status, specialists, deadlines and exceptions.",
    body: "Manages coordination workload without displacing professional responsibility.",
    link: "Ops Workflow",
    img: "/images/Image (Managers).png",
  },
  {
    eyebrow: "Preparers",
    title: "Work from clear procedures, linked evidence, calculation traces and attributable review feedback.",
    body: "Every workpaper carries its purpose, evidence index and reviewer trail.",
    link: "Preparer Workflow",
    img: "/images/Image (Preparers).png",
  },
  {
    eyebrow: "Quality reviewers",
    title: "Inspect significant judgments, changes, unresolved matters, reviewer independence and evidence continuity.",
    body: "Read-only inspection across the full engagement record.",
    link: "Quality Review Activity",
    img: "/images/Image (Quality Reviewers).png",
  },
];

/** Capability scope — supports / does not */
const CAPABILITIES: [string, string, string][] = [
  ["Ask Accounting Questions",
    "Source-backed answers to standards and treatment questions, bound to the engagement's framework and period.",
    "Does not conclude on an assertion or determine an audit response."],
  ["Workflow Mode",
    "Structures planning, procedures, evidence collection and workpaper preparation through governed stages.",
    "Does not auto-advance a stage or close a procedure."],
  ["Review Mode",
    "Surfaces significant judgments, unresolved matters and changes for reviewer attention.",
    "Does not sign off, clear a review note or accept a conclusion."],
  ["Audit Evidence Ledger",
    "Preserves which sources, context, retrieval, output, review and action shaped an outcome.",
    "Does not assert that a conclusion is correct or an opinion is sound."],
  ["Human Escalation",
    "Routes unresolved matters, conflicts and consultation triggers to the responsible person.",
    "Does not resolve the matter or substitute for consultation."],
  ["Enterprise Integrations",
    "Connects approved evidence systems, identity and document management within an authorized scope.",
    "Does not widen scope implicitly or retain data outside policy."],
];

/** Ten engagement-context dimensions */
const DIMENSIONS: [string, string, string][] = [
  ["Engagement type",
    "Financial statement audit, review, limited assurance, controls and other assurance work differ in objective and requirement.",
    "No determination. The engagement type is requested before work proceeds."],
  ["Entity and group structure",
    "Components, consolidation, equity accounting and shared service arrangements change the required response.",
    "Left explicit as a gap rather than assumed as a single entity."],
  ["Period and reporting date",
    "Standards, balances, comparatives, events after the reporting date and subsequent events all move with the date.",
    "Requested. Not inferred from file metadata or upload date."],
  ["Criteria / reporting framework",
    "Applicable financial reporting framework, jurisdiction, and policy overlay define what an answer can rely on.",
    "Withheld until the applicable framework is stated and recorded."],
  ["Assurance standards",
    "Standard set, jurisdiction, issuer, version, effective date and firm methodology overlay.",
    "The version in force is disclosed. Where unknown, this is stated."],
  ["Scope and components",
    "Accounts, assertions, processes, controls, locations, systems, populations and value points.",
    "Scope is requested and recorded before procedures are structured."],
  ["Risk context",
    "Risk category, rationale, assertion, fraud considerations, prior issues, changes and specialist matters.",
    "Never inferred. Risk assessment remains a professional determination."],
  ["Materiality status",
    "Benchmark, basis, calculation basis, performance materiality, published materiality and approval state.",
    "Arithmetic support only. Selection and approval remain human."],
  ["Independence and ethics",
    "Client, non-audit services, declarations, restricted services, conflicts, safeguards, recusal and escalation state.",
    "A non-bypassable gate. Never inferred, never assumed satisfied."],
  ["Data and confidentiality",
    "Classification, permitted use, retention, residency, sharing and export constraints.",
    "Constrained by policy. Where unconfirmed, the constraint applies."],
];

/** Twelve governed workflow stages */
const STAGES: [string, string][] = [
  ["Establish engagement context", "Type, entity, period, framework, scope and intended use are recorded."],
  ["Confirm independence & permissions", "Non-bypassable gate. Declarations and authority are confirmed."],
  ["Assess and record risk", "Risk categories, rationale and assertions captured as human determinations."],
  ["Set materiality inputs", "Benchmarks proposed with arithmetic support; selection stays human."],
  ["Design procedures", "Procedures linked to the risks and assertions they address."],
  ["Source and index evidence", "Evidence registered with state, authority basis and linkage."],
  ["Test and analyse", "Calculation traces preserved alongside the result."],
  ["Prepare workpapers", "Purpose, objective, evidence index, results and draft conclusion."],
  ["Review and challenge", "Reviewer notes are attributable and must be cleared by a person."],
  ["Escalate or consult", "Unresolved matters route to the responsible authority."],
  ["Conclude and sign off", "Conclusion and sign-off performed by an authorized professional."],
  ["Finalize and archive", "Version, freshness and retention state recorded on close."],
];

/** Workpaper canvas rows */
const WORKPAPER: [string, string, string][] = [
  ["Workpaper header", "Engagement, entity, period, preparer, reviewer, version and status.", "Auto-populated from recorded context, never invented."],
  ["Purpose and objective", "What this workpaper addresses and which assertion or risk it responds to.", "Must be stated before evidence may be indexed."],
  ["Evidence index", "Linked evidence items with authority basis, state, completeness and contradiction flags.", "Missing or contradictory evidence blocks a final state."],
  ["Results", "Observed facts, calculations, sample outcomes, exceptions and tolerances.", "Calculation traces are preserved beside the result."],
  ["Draft conclusion", "Preparer's proposed conclusion, held explicitly as a draft.", "Never presented as a professional conclusion."],
  ["Version comparison", "Highlights additions, deletions, calculation changes, evidence changes and reviewer resolutions.", "Prior versions are preserved, marked superseded."],
  ["Sign-off", "Role-based, attributable and date-stamped, by an authorized professional only.", "Cannot be applied by the system under any condition."],
];

/** Independence gate states */
const GATES: [string, string][] = [
  ["Not checked", "The default state. Work that depends on the gate does not proceed."],
  ["Check required", "A declaration or confirmation is outstanding and named."],
  ["Confirmed", "An authorized person has recorded the confirmation, with attribution."],
  ["Conflict identified", "A conflict is surfaced for resolution. It is never auto-cleared."],
  ["Safeguard required", "A defined safeguard must be applied and recorded before proceeding."],
  ["Recusal required", "The named individual is removed from the affected scope."],
  ["Escalation required", "The matter routes to the responsible authority for determination."],
];

/** Evidence scenario tabs */
const SCENARIO_TABS: string[] = [
  "Financial Statement Audit Planning",
  "Controls Design & Testing",
  "Substantive Analytics & Samples",
  "Review / Limited Assurance",
  "Internal Audit · Vendor Payment",
];

const SCENARIO_ROWS: [string, string][] = [
  ["Context established", "Engagement type, entity, period, criteria, standards, scope and intended use recorded."],
  ["Independence gate", "Declarations recorded and confirmed before planning support is produced."],
  ["Risk input", "Risks, rationale and assertions entered by the engagement team, not generated."],
  ["Planning draft", "Plan, procedures and linkages assembled as a draft for professional revision."],
  ["Reviewer notes", "Attributable, dated, and cleared only by an authorized reviewer."],
  ["Evidence continuity", "Sources, retrieval bundle, output, review and action preserved end to end."],
];

/** FAQ */
const FAQS: [string, string][] = [
  ["What audit and assurance work can ZoikoLogia™ with Kriton™ support?",
    "It supports the organization of engagement context, source-backed research, procedure structuring, evidence indexing, workpaper preparation, review routing and evidence continuity. Every professional determination remains with the engagement team."],
  ["Does Kriton™ perform an audit or issue an opinion?",
    "No. It does not perform an audit, form a conclusion on an assertion, issue an opinion or release a report. Those are the responsibility of authorized professionals and are outside the system's boundary."],
  ["Can Kriton™ determine materiality or risk?",
    "No. It provides arithmetic support for materiality calculation and structures the recording of risk. Benchmark selection, percentages, overlays, approval and risk assessment remain human determinations."],
  ["Can it select and evaluate samples?",
    "It can support sampling arithmetic and record the population, method, parameters and outcome. Whether a sample is appropriate, and what its results mean, is a professional judgment."],
  ["Can it detect fraud or illegal acts?",
    "No. It does not detect fraud, and no output should be read as assurance that fraud or non-compliance is absent. Fraud considerations remain a professional responsibility under the applicable standards."],
  ["How are auditing standards and firm methodology handled?",
    "Standards are admitted as governed sources with issuer, version, effective date and applicability recorded. Firm methodology can be overlaid as an additional governed source set within the tenant."],
  ["How does human review work?",
    "Review Mode surfaces significant judgments, changes and unresolved matters. Reviewer notes are attributable and dated, and can only be cleared by an authorized person. The system never clears its own notes."],
  ["How is independence handled?",
    "Through non-bypassable gates. The system never infers or determines independence. It records state — not checked, check required, confirmed, conflict, safeguard, recusal or escalation — and blocks dependent work until an authorized person resolves it."],
  ["How is client data protected?",
    "Through tenant isolation, classification-driven retention, field-level access, purpose limitation and governed export. Retention state is disclosed rather than silently applied."],
  ["Does it replace auditors or quality reviewers?",
    "No. It reduces coordination and documentation overhead. Judgment, challenge, conclusion, sign-off and report release remain with qualified people."],
  ["Can we run a pilot?",
    "Yes. Governed pilots use fictional entities and synthetic facts, with no real client workpapers or confidential filings involved at any point."],
];

/** Get-started options */
const START_OPTIONS: [string, string][] = [
  ["Book a Demo", "A walkthrough of the governed assurance workflow using synthetic engagement data."],
  ["Request Pilot", "A time-boxed, governed pilot within a defined scope and evaluation criteria."],
  ["Enterprise Briefing", "For procurement, risk, security and methodology stakeholders."],
  ["View Governance Framework", "How boundaries, gates and evidence continuity are defined."],
  ["Visit Privacy & Security", "Tenant isolation, retention, residency and access controls."],
];

// ─── inline SVG helpers ─────────────────────────────────────────────────────────

function Chevron({ open }: { open: boolean }) {
  return <svg viewBox="0 0 24 24" className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function Ban() {
  return <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2"><circle cx="12" cy="12" r="9" /><path d="M5.6 5.6l12.8 12.8" strokeLinecap="round" /></svg>;
}

const eyebrowAmber = "flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#d9720f]";
const eyebrowLight = "flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#f0a54a]";
const serifH = "font-serif leading-tight";
const tealLink = "text-sm font-semibold text-[#0d9488] hover:underline";

// ─── PAGE ───────────────────────────────────────────────────────────────────────

export default function Page() {
  const [scenario, setScenario] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const amberBtn = "rounded-md px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90";

  return (
    <main className="bg-[#faf7f0] font-sans text-[#16233d] dark:bg-gray-900 dark:text-white">

      {/* ─── Hero (navy) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8 lg:py-20" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="text-white">
            <p className={eyebrowLight}>
              <span className="h-px w-6 bg-[#f0a54a]" /> Solutions · Audit &amp; Assurance Teams
            </p>
            <h1 className={`mt-5 max-w-xl text-[clamp(2rem,4.5vw,2.9rem)] ${serifH}`}>
              Bring governed AI into assurance work — with standards, evidence, review and
              professional judgment intact.
            </h1>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-slate-300/85">
              ZoikoLogia™ with Kriton™ helps audit and assurance teams organize source-backed planning,
              procedures, evidence, workpapers, reviews and escalations — while authorized professionals
              retain responsibility for judgments, conclusions and reports.
            </p>

            <div className="mt-6 rounded-r-md border-l-2 border-[#f0a54a] bg-white/5 px-4 py-3">
              <p className="text-[13px] leading-relaxed text-slate-300/85">
                <span className="font-semibold text-[#f0a54a]">Reminder — </span>
                Kriton™ supports audit and assurance work. It does not perform an audit, issue an opinion,
                or replace qualified professional judgment.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#" className="rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-[#0f1a30] transition-opacity hover:opacity-90">Book a Demo</a>
              <a href="#" className={amberBtn} style={{ backgroundColor: AMBER }}>Request Pilot</a>
              <a href="#" className="text-sm font-semibold text-[#f0a54a] hover:underline">Explore Assurance Workflow →</a>
            </div>
          </div>
          <ImageSlot src="/images/image 126.png" alt="Assurance team reviewing engagement documentation" ratio="aspect-[4/3]" />
        </div>
      </section>

      {/* ─── WHY ASSURANCE IS CONTEXT-DEPENDENT ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: "#f5efe0" }}>
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Why Assurance Is Context-Dependent</p>
              <h2 className={`mt-4 text-black text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>
                Audit and assurance are not context-free.
              </h2>
            </div>
            <p className="text-[15px] leading-relaxed text-slate-700 lg:pt-10">
              Generic AI workflow tools are not built for the engagement-specific, source-governed,
              evidence-linked and review-accountable demands of professional assurance.
            </p>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden rounded-lg bg-black/10 md:grid-cols-2">
            {CONTEXT_CARDS.map(([n, title, lede, body]) => (
              <article key={n} className="bg-[#faf7f0] p-6">
                <span className="font-serif text-lg text-[#e8912a]">{n}</span>
                <h3 className="mt-2 text-[15px] font-bold text-black">{title}</h3>
                <p className="mt-2 text-[13px] font-semibold text-slate-700">{lede}</p>
                <p className="mt-1.5 text-[13px] leading-relaxed text-slate-600">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ROLE & ENGAGEMENT ENTRY ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Role &amp; Engagement Entry</p>
              <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Find your governance path.</h2>
            </div>
            <p className="text-[15px] leading-relaxed text-slate-600 dark:text-gray-300 lg:pt-10">
              Each role carries distinct evidence requirements, decision rights and review obligations.
              Partners govern, managers coordinate, preparers document, reviewers challenge.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ROLE_CARDS.map((r) => (
              <article key={r.eyebrow} className="flex flex-col overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <ImageSlot src={r.img} alt={r.eyebrow} ratio="aspect-[16/10]" rounded="rounded-none" />
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#d9720f]">{r.eyebrow}</p>
                  <h3 className="mt-2 text-[13px] font-bold leading-snug">{r.title}</h3>
                  <p className="mt-2 flex-1 text-[12px] leading-relaxed text-slate-600 dark:text-gray-300">{r.body}</p>
                  <a href="#" className={`${tealLink} mt-4 inline-block text-xs`}>{r.link} →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CAPABILITY SCOPE (navy) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto max-w-6xl text-white">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className={eyebrowLight}><span className="h-px w-6 bg-[#f0a54a]" /> Capability Scope</p>
              <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>
                What Kriton™ supports — and where it stops.
              </h2>
            </div>
            <p className="text-[15px] leading-relaxed text-slate-300/85 lg:pt-10">
              Every capability operates within a governed boundary. None permits autonomous audit conclusions,
              report release, independence determinations, or substitution for professional judgment.
            </p>
          </div>

          <div className="mt-10 grid items-start gap-8 lg:grid-cols-[1.5fr_1fr]">
            <div className="grid gap-4 sm:grid-cols-2">
              {CAPABILITIES.map(([title, supports, stops]) => (
                <article key={title} className="rounded-lg bg-white/5 p-5 ring-1 ring-white/10">
                  <h3 className="text-sm font-semibold">{title}</h3>
                  <p className="mt-2 text-[12px] leading-relaxed text-slate-300/75">{supports}</p>
                  <p className="mt-3 flex items-start gap-2 border-t border-white/10 pt-3 text-[12px] leading-relaxed text-[#f0a54a]/90">
                    <span className="mt-0.5"><Ban /></span>
                    <span>{stops}</span>
                  </p>
                </article>
              ))}
            </div>
            <ImageSlot src="/images/image 127.png" alt="Engagement leader reviewing scope" ratio="aspect-[3/4]" className="lg:sticky lg:top-8" />
          </div>
        </div>
      </section>

      {/* ─── ENGAGEMENT CONTEXT — ten dimensions ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: "#f5efe0" }}>
        <div className="mx-auto max-w-6xl">
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_2fr]">
            <div className="lg:sticky lg:top-8">
              <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Engagement Context</p>
              <h2 className={`mt-4 text-black text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Ten required dimensions.</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-700">
                No context field is silently assumed or inferred. Kriton™ shows what happens when each
                dimension is missing.
              </p>
              <a href="#" className={`${tealLink} mt-4 inline-block`}>Source-Governed Intelligence →</a>
              <ImageSlot src="/images/image 128.png" alt="Engagement context workshop" ratio="aspect-[4/3]" className="mt-8" />
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-black/15">
                    <th className="pb-3 pr-4 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500">Dimension</th>
                    <th className="pb-3 pr-4 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500">Why it matters</th>
                    <th className="pb-3 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500">Missing-state behaviour</th>
                  </tr>
                </thead>
                <tbody>
                  {DIMENSIONS.map(([dim, why, missing], i) => (
                    <tr key={dim} className={`border-b border-black/10 ${i % 2 === 1 ? "bg-[#efe6d2]/50" : ""}`}>
                      <td className="py-3.5 pr-4 align-top text-[13px] font-bold text-black">{dim}</td>
                      <td className="py-3.5 pr-4 align-top text-[12px] leading-relaxed text-slate-700">{why}</td>
                      <td className="py-3.5 align-top text-[12px] leading-relaxed text-[#0d9488]">{missing}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ─── GOVERNED ASSURANCE WORKFLOW — twelve stages ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Governed Assurance Workflow</p>
              <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Twelve stages. Every stage controlled.</h2>
            </div>
            <p className="text-[15px] leading-relaxed text-slate-600 dark:text-gray-300 lg:pt-10">
              From establishing engagement context through finalization — each stage has a defined control.
              No stage auto-advances without a human decision.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
            <ol className="grid gap-px overflow-hidden rounded-lg bg-black/10 dark:bg-gray-700 sm:grid-cols-2 lg:grid-cols-3">
              {STAGES.map(([title, desc], i) => (
                <li key={title} className="bg-[#faf7f0] p-4 dark:bg-gray-900">
                  <span className="font-serif text-base text-[#e8912a]">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-1.5 text-[12px] font-bold leading-snug">{title}</h3>
                  <p className="mt-1 text-[11px] leading-snug text-slate-500 dark:text-gray-400">{desc}</p>
                </li>
              ))}
            </ol>
            <ImageSlot src="/images/image 129.png" alt="Engagement team working through governed stages" ratio="aspect-[3/4]" className="lg:sticky lg:top-8" />
          </div>
        </div>
      </section>

      {/* ─── WORKPAPER LINKAGE ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: "#f5efe0" }}>
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Workpaper Linkage</p>
              <h2 className={`mt-4 text-black text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>
                Attributable, versioned and evidence-linked.
              </h2>
            </div>
            <p className="text-[15px] leading-relaxed text-slate-700 lg:pt-10">
              Seven workpaper sections — all requiring authorized humans. No final state while entries are
              missing, evidence is contradictory, or required consultations remain open.
            </p>
          </div>

          <div className="mt-10 grid items-start gap-10 lg:grid-cols-[1.6fr_1fr]">
            <div>
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">Workpaper canvas</p>
              <dl className="divide-y divide-black/10 border-y border-black/10">
                {WORKPAPER.map(([term, def, control]) => (
                  <div key={term} className="grid gap-2 py-4 md:grid-cols-[170px_1fr_1fr] md:gap-5">
                    <dt className="text-[13px] font-bold text-black">{term}</dt>
                    <dd className="text-[12px] leading-relaxed text-slate-700">{def}</dd>
                    <dd className="text-[12px] leading-relaxed text-[#0d9488]">{control}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 rounded-lg bg-[#efe6d2] p-4 text-[12px] leading-relaxed text-slate-600">
                A draft conclusion is never a professional conclusion. Sign-off is role-based, attributable
                and date-stamped, and cannot be applied by the system under any condition.
              </p>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                <a href="#" className={tealLink}>Explore Review Mode →</a>
                <a href="#" className={tealLink}>Professional Boundaries →</a>
              </div>
            </div>
            <ImageSlot src="/images/image 130.png" alt="Preparer and reviewer working on a workpaper" ratio="aspect-[3/4]" className="lg:sticky lg:top-8" />
          </div>
        </div>
      </section>

      {/* ─── INDEPENDENCE, ETHICS & RESTRICTIONS (navy) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto max-w-6xl text-white">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className={eyebrowLight}><span className="h-px w-6 bg-[#f0a54a]" /> Independence, Ethics &amp; Restrictions</p>
              <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>
                Non-bypassable gates. No AI determination.
              </h2>
            </div>
            <p className="text-[15px] leading-relaxed text-slate-300/85 lg:pt-10">
              Kriton™ records required declarations and unresolved states. It may not determine independence
              or ethical compliance. These gates are not configurable away.
            </p>
          </div>

          <div className="mt-10 grid items-start gap-8 lg:grid-cols-[1.5fr_1fr]">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {GATES.map(([state, desc]) => (
                <article key={state} className="rounded-lg bg-white/5 p-4 ring-1 ring-white/10">
                  <h3 className="text-[13px] font-semibold">{state}</h3>
                  <p className="mt-1.5 text-[12px] leading-relaxed text-slate-300/70">{desc}</p>
                </article>
              ))}
            </div>
            <ImageSlot src="/images/image 131.png" alt="Independence review discussion" ratio="aspect-[4/3]" className="lg:sticky lg:top-8" />
          </div>
        </div>
      </section>

      {/* ─── EVIDENCE SCENARIOS ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Evidence Scenarios</p>
              <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Governed assurance AI in practice.</h2>
            </div>
            <p className="text-[15px] leading-relaxed text-slate-600 dark:text-gray-300 lg:pt-10">
              All scenarios use fictional entities, synthetic facts and non-sensitive values. No real client
              workpapers or confidential filings appear in any demonstration.
            </p>
          </div>

          <div className="mt-10 rounded-xl border border-black/10 bg-white p-4 dark:border-gray-700 dark:bg-gray-900 sm:p-6">
            <div className="flex gap-2 overflow-x-auto border-b border-black/10 pb-3 dark:border-gray-700">
              {SCENARIO_TABS.map((label, i) => (
                <button key={label} type="button" onClick={() => setScenario(i)}
                  className={`shrink-0 rounded-md px-3.5 py-2 text-[12px] font-medium transition-colors ${
                    scenario === i
                      ? "bg-[#0f1a30] text-white"
                      : "text-slate-500 hover:bg-slate-100 dark:text-gray-400 dark:hover:bg-gray-800"
                  }`}>
                  {label}
                </button>
              ))}
            </div>

            <div className="mt-6 grid items-start gap-8 lg:grid-cols-2">
              <ImageSlot src="/images/image 132.png" alt="Team walking through a governed scenario" ratio="aspect-[4/3]" />
              <dl className="divide-y divide-black/10 border-y border-black/10 dark:divide-gray-700 dark:border-gray-700">
                {SCENARIO_ROWS.map(([term, def]) => (
                  <div key={term} className="grid gap-1 py-3.5 sm:grid-cols-[150px_1fr] sm:gap-4">
                    <dt className="text-[12px] font-bold">{term}</dt>
                    <dd className="text-[12px] leading-relaxed text-slate-600 dark:text-gray-300">{def}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <p className="mt-5 text-[11px] leading-relaxed text-slate-400 dark:text-gray-500">
              Synthetic demonstration — <span className="font-semibold">{SCENARIO_TABS[scenario]}</span>. Not a
              professional conclusion, and not derived from any client engagement.
            </p>
          </div>
        </div>
      </section>

      {/* ─── BUYER & GOVERNANCE QUESTIONS ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: "#f5efe0" }}>
        <div className="mx-auto max-w-6xl">
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_2fr]">
            <div className="lg:sticky lg:top-8">
              <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Direct Answers</p>
              <h2 className={`mt-4 text-black text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>
                Buyer and governance questions.
              </h2>
              <p className="mt-3 text-[14px] leading-relaxed text-slate-700">
                Scoped to public product information. Contractual, security, architectural and detailed data
                mapping belong to the appropriate procurement review.
              </p>
              <div className="mt-5 flex flex-col gap-2">
                <a href="#" className={tealLink}>Professional Boundaries →</a>
                <a href="#" className={tealLink}>Governance Framework →</a>
                <a href="#" className={tealLink}>Privacy &amp; Security →</a>
              </div>
            </div>

            <div className="divide-y divide-black/10 border-y border-black/10">
              {FAQS.map(([q, a], i) => {
                const open = openFaq === i;
                return (
                  <div key={q}>
                    <button type="button" onClick={() => setOpenFaq(open ? null : i)} aria-expanded={open}
                      className="flex w-full items-center justify-between gap-4 py-4 text-left text-[15px] font-semibold text-black">
                      {q}<span className="text-black"><Chevron open={open} /></span>
                    </button>
                    {open && <p className="pb-4 pr-8 text-[14px] leading-relaxed text-slate-600">{a}</p>}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── GET STARTED ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Get Started</p>
              <h2 className={`mt-4 max-w-md text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>
                Start with a governed demonstration.
              </h2>
              <ImageSlot src="/images/image 133.png" alt="Governed demonstration session" ratio="aspect-[4/3]" className="mt-8" />
            </div>

            <div className="overflow-hidden rounded-xl" style={{ backgroundColor: NAVY }}>
              <ul className="divide-y divide-white/10">
                {START_OPTIONS.map(([title, desc], i) => (
                  <li key={title}>
                    <a href="#" className="group flex items-start justify-between gap-4 p-5 transition-colors hover:bg-white/5">
                      <span>
                        <span className={`block text-sm font-semibold ${i === 0 ? "text-[#f0a54a]" : "text-white"}`}>{title}</span>
                        <span className="mt-1 block text-[12px] leading-relaxed text-slate-300/70">{desc}</span>
                      </span>
                      <span className="mt-0.5 text-[#f0a54a] transition-transform group-hover:translate-x-0.5">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}