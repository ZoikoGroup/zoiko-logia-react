"use client";

import Image from "next/image";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { Layers, Scale, ShieldCheck, ScrollText, Clock, Users } from "lucide-react";

const NAVY = "#0f1a30";
const AMBER = "#e8912a";

/*
  ZoikoLogia™ — RAG Source Bundles page body (app/.../page.tsx)
  Header/nav and footer omitted — provided by the shared layout.
  Swap the /images/*.png paths for your real filenames.
*/

function ImageSlot({ src, alt, ratio = "aspect-[4/3]", rounded = "rounded-xl", className = "" }:
  { src: string; alt: string; ratio?: string; rounded?: string; className?: string }) {
  return (
    <div className={`relative w-full overflow-hidden bg-slate-200 dark:bg-gray-800 ${ratio} ${rounded} ${className}`}>
      <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
    </div>
  );
}

// ─── DATA ──────────────────────────────────────────────────────────────────────
const CAPABILITIES: [string, string][] = [
  ["Source eligibility", "Eligibility model"],
  ["Context and permissions", "Context controls"],
  ["Versioned manifest", "Manifest model"],
  ["Conflict visibility", "Conflict handling"],
  ["Human review / escalation", "Escalation limits"],
];

const GENERIC_SHORTFALLS: string[] = [
  "Answers a query without professional context or authority.",
  "Retrieves text that merely matches, regardless of standing.",
  "Returns a citation after generation, without showing the decision.",
  "Treats aliases and synonyms as freely interchangeable.",
  "Leaves restricted content reachable outside its permitted scope.",
];

const MANIFEST: [string, string, string, string][] = [
  ["Recognition standard — synthetic", "Primary standard", "v4.2", "Admitted"],
  ["Interpretive guidance — synthetic", "Guidance", "v2.1", "Admitted"],
  ["Internal policy note — synthetic", "Firm policy", "v1.0", "Conditional"],
  ["Jurisdictional guidance — synthetic", "Regulatory", "v3.4", "Admitted"],
  ["Conflicting interpretation — synthetic", "Commentary", "v1.7", "Flagged"],
];

const SCOPE: [LucideIcon, string, string][] = [
  [Layers, "Accounting framework", "IFRS, US GAAP, or a local basis narrows which sources are even eligible."],
  [Scale, "Jurisdiction", "The territory in play selects which sources may answer."],
  [ShieldCheck, "Entity type & attributes", "Entity shape changes what applies before relevance is considered."],
  [Clock, "Reporting / tax period", "Effective dates decide which version of a source is live."],
  [Users, "User role", "Role governs what a given user is permitted to retrieve."],
  [ScrollText, "Tenant / workspace", "Tenant isolation bounds the source set to the organization."],
];

const CONFLICT_STATES: [string, string][] = [
  ["Conflicting sources", "Surfaced, not silently resolved — the qualified position is stated and the gap is named."],
  ["Missing evidence", "Named as missing; the answer is bounded rather than smoothed over with a guess."],
  ["Insufficient scope", "When scope is too narrow to answer safely, retrieval pauses instead of overreaching."],
];

const ARTIFACTS: [string, string][] = [
  ["Bundle", "The exact set of sources retrieved for a question."],
  ["Generated explanation", "The drafted response — always separable from its sources."],
  ["Human review", "The reviewer's confirmation, revision, or override."],
  ["Ledger record", "The append-only trail tying bundle, answer, and review together."],
];

const TASKS: { title: string; body: string; link: string }[] = [
  { title: "Accounting policy research", body: "Assemble governed sources for a treatment question, with the reasoning shown.", link: "route to Accounting Firms" },
  { title: "Audit evidence planning", body: "Relate assertions to the evidence and procedures that substantiate them.", link: "route to Assurance Teams" },
  { title: "Tax update review", body: "Trace a versioned change to what now applies, and from when.", link: "route to Tax Teams" },
  { title: "Management reporting", body: "Pin a metric to its definition, inputs, and reporting boundary.", link: "route to Finance Teams" },
  { title: "Learning mode", body: "Prerequisite-aware paths; commentary supports understanding, it does not decide.", link: "route to Learning & Practice" },
];

const CONSOLE_ADMIN: [string, string][] = [
  ["Approved source domains", "Curate which source families may enter a bundle at all."],
  ["Retrieval policy profiles", "Define scope and authority rules per team or task."],
  ["Contract requirements", "Set the evidence a bundle must carry before use."],
  ["Field-level rules", "Restrict retrieval down to specific fields and attributes."],
  ["Role-based access", "Bind what each role can retrieve to policy."],
];

const CONNECTED: string[] = [
  "Connect approved internal document and policy stores.",
  "Map external standards and regulatory sources to the ontology.",
  "Sync versions and effective dates on a governed schedule.",
  "Keep tenant isolation intact across every connected source.",
];

const EVAL_TAGS: string[] = [
  "Bundle eligibility proofs", "Context compliance", "Lineage integrity", "Conflict-detection recall",
  "Freshness enforcement", "Permission enforcement", "Bundle reproducibility",
];

const EVAL_TABLE: [string, string][] = [
  ["Bundle assembly evaluation summary", "End-to-end assembly correctness"],
  ["Source-selection regression report", "Selection stability over time"],
  ["Conflict-detection recall", "Conflicts surfaced, not missed"],
  ["Freshness & permission checks", "Restricted or stale sources excluded"],
];

const AUDIENCE: [string, string][] = [
  ["Accounting & finance professional", "See source-backed answers with the basis shown."],
  ["Audit and assurance reviewer", "Trace bundles to evidence that stands up to review."],
  ["Tax, payroll or compliance specialist", "Scope sources to the right jurisdiction and period."],
  ["CTO / technical leader", "Fit governed retrieval into your existing stack."],
  ["Data, AI or engineering leader", "Ground models on governed, reproducible bundles."],
  ["Legal / procurement reviewer", "Evaluate controls, rights, and evidence before buying."],
  ["Learner / educator", "Prerequisite-aware learning with integrity safeguards."],
];

const FAQS: [string, string][] = [
  ["What is a RAG Source Bundle?", "A governed, versioned set of sources assembled for a specific question — each one eligibility-checked, scoped to context, and recorded — rather than whatever text happened to match."],
  ["How is this different from a library RAG?", "Ordinary RAG retrieves on similarity and cites afterward. A bundle decides in advance which sources may answer, records authority and version, and keeps the evidence separable from the generated text."],
  ["Does a bundle guarantee the answer is correct?", "No. It guarantees the answer is built only from eligible, in-scope, recorded sources. Correctness and sign-off remain a qualified human decision."],
  ["Can the bundle use our internal accounting policies?", "Yes. Approved internal policy sources can be connected and scoped to your tenant, overlaying the governed baseline without leaking across organizations."],
  ["What happens when sources conflict?", "The conflict is surfaced as a first-class state. Kriton™ states the qualified position, names the gap, and routes the decision to a person rather than silently picking one."],
  ["How are source changes handled?", "Change is versioned. New versions are recorded with effective dates, and prior meaning is preserved so historical answers remain explainable."],
  ["Can unauthorized users see restricted sources?", "No. Retrieval is bound by role, tenant, and permission; restricted sources never enter a bundle for a user who isn't entitled to them."],
  ["Can auditors see what was used?", "Yes. Every answer opens onto the bundle behind it — sources, versions, and the review trail — preserved in an append-only ledger."],
  ["Does Kriton™ replace professional review?", "No. Human review remains the final decision. Bundles assemble governed evidence; a qualified person confirms, revises, or overrides before anything is relied on."],
];

// ─── inline SVG helpers ─────────────────────────────────────────────────────────
function Chevron({ open }: { open: boolean }) {
  return <svg viewBox="0 0 24 24" className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function Check({ className = "h-4 w-4" }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function Arrow({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function TaskCard({ i }: { i: number }) {
  const t = TASKS[i];
  return (
    <div className="flex flex-col rounded-xl border border-black/10 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
      <h3 className="text-sm font-bold">{t.title}</h3>
      <p className="mt-2 flex-1 text-[13px] leading-relaxed text-slate-600 dark:text-gray-300">{t.body}</p>
      <a href="#" className={`${tealLink} mt-4 inline-block text-xs`}>{t.link} →</a>
    </div>
  );
}

const eyebrowAmber = "flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#d9720f]";
const serifH = "font-serif leading-tight";
const tealLink = "text-sm font-semibold text-[#0d9488] hover:underline";

function statusClass(s: string) {
  if (s === "Admitted") return "bg-[#0d9488]";
  if (s === "Conditional") return "bg-[#e8912a]";
  return "bg-[#b91c1c]";
}

// ─── PAGE ───────────────────────────────────────────────────────────────────────
export default function Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const amberBtn = "rounded-md px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90";

  return (
    <main className="bg-[#faf7f0] font-sans text-[#16233d] dark:bg-gray-900 dark:text-white">

      {/* ─── Hero (navy) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8 lg:py-20" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="text-white">
            <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#f0a54a]">
              <span className="h-px w-6 bg-[#f0a54a]" /> Platform · RAG Source Bundles
            </p>
            <h1 className={`mt-5 max-w-xl text-[clamp(2rem,4.5vw,2.9rem)] ${serifH}`}>Build every answer on a governed source bundle.</h1>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-slate-300/85">
              ZoikoLogia™ assembles approved, context-specific source material for Kriton™ and governs retrieval —
              screening authority, applicability, permissions, versions, conflicts, and evidence continuity — so a
              source-backed answer preserves professional judgement.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#" className={amberBtn} style={{ backgroundColor: AMBER }}>Book a Demo</a>
              <a href="#" className="rounded-md border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10">Request Pilot</a>
              <a href="#" className="px-3 py-2.5 text-sm font-semibold text-[#f0a54a] hover:underline">View Governance Framework →</a>
            </div>
          </div>
          <ImageSlot src="/images/Team reviewing a source bundle.png" alt="Team reviewing a governed source bundle" ratio="aspect-[4/3]" />
        </div>

        {/* capability strip */}
        <div className="mx-auto mt-12 grid max-w-6xl gap-8 border-t border-white/10 pt-8 sm:grid-cols-2 lg:grid-cols-5">
          {CAPABILITIES.map(([title, link]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-white">{title}</h3>
              <a href="#" className="mt-2 inline-flex items-center gap-1 text-xs text-[#34d39e] hover:underline">{link} →</a>
            </div>
          ))}
        </div>
      </section>

      {/* ─── DESIGN PRINCIPLE ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Design Principle</p>
            <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Why generic RAG is not enough</h2>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">
              Do not mistake retrieval for intelligence by itself. Retrieval becomes useful only when source authority,
              accounting meaning, context, permissions, evidence continuity, and human judgement work together.
            </p>
            <ul className="mt-8 divide-y divide-black/10 border-y border-black/10 dark:divide-gray-700 dark:border-gray-700">
              {GENERIC_SHORTFALLS.map((s) => (
                <li key={s} className="flex items-start justify-between gap-4 py-4">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400 dark:text-gray-500">Generic retrieval</p>
                    <p className="mt-1 text-sm text-slate-700 dark:text-gray-200">{s}</p>
                  </div>
                  <span className="mt-1 text-slate-300 dark:text-gray-600"><Arrow /></span>
                </li>
              ))}
            </ul>
          </div>
          <ImageSlot src="/images/Advisors reviewing documents.png" alt="Advisors reviewing documents" ratio="aspect-[3/4]" className="lg:sticky lg:top-8" />
        </div>
      </section>

      {/* ─── BUNDLE MANIFEST (table) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: "#f5efe0" }}>
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Bundle Manifest</p>
          <h2 className={`mt-4 text-black text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>What is inside, and what is recorded</h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-700">
            Bundle ID, extract, assembly time, context summary, and selected sources — each recorded, versioned, and
            inspectable. Not one authoritative dump. All identifiers are fictional.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
            <div className="overflow-x-auto rounded-xl border border-black/10 dark:border-gray-700">
              <div className="flex items-center justify-between px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-300" style={{ backgroundColor: NAVY }}>
                <span>Bundle-MFT-4471</span><span className="text-[#34d39e]">Synthetic</span>
              </div>
              <table className="w-full min-w-[520px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-black/10 text-[11px] font-bold uppercase tracking-[0.1em] text-slate-500 dark:border-gray-700 dark:text-gray-400">
                    <th className="px-4 py-2.5">Source</th>
                    <th className="px-4 py-2.5">Authority</th>
                    <th className="px-4 py-2.5">Version</th>
                    <th className="px-4 py-2.5">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/10 dark:divide-gray-700">
                  {MANIFEST.map(([src, auth, ver, status]) => (
                    <tr key={src} className="bg-white align-top dark:bg-gray-900">
                      <td className="px-4 py-3 font-medium">{src}</td>
                      <td className="px-4 py-3 text-slate-600 dark:text-gray-300">{auth}</td>
                      <td className="px-4 py-3 text-slate-600 dark:text-gray-300">{ver}</td>
                      <td className="px-4 py-3">
                        <span className={`rounded-full ${statusClass(status)} px-2 py-0.5 text-[11px] font-semibold text-white`}>{status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ImageSlot src="/images/Reviewing the manifest.png" alt="Reviewing the bundle manifest" ratio="aspect-[3/4]" />
          </div>
        </div>
      </section>

      {/* ─── RETRIEVAL SCOPE CONTROLS ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Retrieval Scope Controls</p>
          <h2 className={`mt-4 max-w-2xl text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Authority precedes relevance</h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">
            Eligibility is decided before similarity is ever considered. Six controls bound what may enter a bundle.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.7fr_1fr]">
            <div className="grid gap-5 sm:grid-cols-2">
              {SCOPE.map(([Icon, title, body]) => (
                <div key={title} className="rounded-xl border border-black/10 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                  <Icon className="h-5 w-5 text-[#0d9488]" strokeWidth={1.5} />
                  <h3 className="mt-3 text-sm font-bold">{title}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-slate-600 dark:text-gray-300">{body}</p>
                </div>
              ))}
            </div>
            <ImageSlot src="/images/Scope controls meeting.png" alt="Team applying retrieval scope controls" ratio="aspect-auto" className="h-full min-h-[260px]" />
          </div>
        </div>
      </section>

      {/* ─── CONFLICT STATES ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: "#f5efe0" }}>
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Conflict, Uncertainty &amp; Missing Evidence</p>
          <h2 className={`mt-4 text-black text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>These states are first-class, not edge cases</h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-700">
            The table result may be uncertainty, refusal, or escalation — the system will not silently choose one, and
            issue is visibly built into a confident answer.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {CONFLICT_STATES.map(([t, b]) => (
              <div key={t} className="rounded-xl border border-black/10 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <h3 className="text-sm font-bold">{t}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-600 dark:text-gray-300">{b}</p>
              </div>
            ))}
          </div>
          <ImageSlot src="/images/Conflict states meeting.png" alt="Team working through conflicting sources" ratio="aspect-[21/7]" className="mt-6" />
        </div>
      </section>

      {/* ─── EVIDENCE CONTINUITY (navy) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto max-w-6xl text-white">
          <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#f0a54a]">
            <span className="h-px w-6 bg-[#f0a54a]" /> Evidence Continuity
          </p>
          <h2 className={`mt-4 max-w-2xl text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Four artifacts that must remain distinguishable</h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-300/85">
            The bundle, the generated explanation, the human review, and the ledger record are never collapsed into one.
            The human review record captures what a person decided.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ARTIFACTS.map(([t, b], i) => (
              <div key={t} className="rounded-lg bg-white/5 p-5 ring-1 ring-white/10">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#0d9488] text-sm font-bold text-[#34d39e]">{i + 1}</div>
                <h3 className="mt-3 text-sm font-semibold">{t}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-slate-300/70">{b}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <ImageSlot src="/images/Evidence review 1.png" alt="Evidence review" ratio="aspect-[16/9]" />
            <ImageSlot src="/images/Evidence review 2.png" alt="Evidence review" ratio="aspect-[16/9]" />
          </div>
        </div>
      </section>

      {/* ─── SYNTHETIC · NON-ADVISORY ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Synthetic · Non-Advisory</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>How this behaves in realistic work</h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">
            Every scenario uses fictional entities, periods, and figures. None is a professional conclusion suitable for
            filing, opinion, or submission.
          </p>
          <div className="mt-10 space-y-6">
            {/* row 1: two cards */}
            <div className="grid gap-6 md:grid-cols-2">
              <TaskCard i={0} />
              <TaskCard i={1} />
            </div>
            {/* row 2: card · image · card */}
            <div className="grid gap-6 md:grid-cols-3">
              <TaskCard i={2} />
              <ImageSlot src="/images/Practitioner at work.png" alt="Practitioner at work" ratio="aspect-auto" className="h-full min-h-[180px]" />
              <TaskCard i={3} />
            </div>
            {/* row 3: full-width card */}
            <TaskCard i={4} />
          </div>
        </div>
      </section>

      {/* ─── ENTERPRISE ADMINISTRATION ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: "#f5efe0" }}>
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Enterprise Administration</p>
          <h2 className={`mt-4 text-black text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>How an organization can govern or connect it</h2>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1fr_0.8fr]">
            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">Administered fully via console</p>
              <ul className="space-y-4">
                {CONSOLE_ADMIN.map(([t, b]) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-0.5 text-[#0d9488]"><Check className="h-4 w-4" /></span>
                    <div>
                      <h3 className="text-sm font-bold text-black">{t}</h3>
                      <p className="mt-0.5 text-[13px] leading-relaxed text-slate-600">{b}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">Connected to existing sources</p>
              <ol className="space-y-4">
                {CONNECTED.map((c, i) => (
                  <li key={c} className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0f1a30] text-xs font-bold text-white">{i + 1}</span>
                    <p className="text-[13px] leading-relaxed text-slate-700">{c}</p>
                  </li>
                ))}
              </ol>
            </div>
            <ImageSlot src="/images/Governance console in use.png" alt="Governance console" ratio="aspect-[3/4]" />
          </div>
        </div>
      </section>

      {/* ─── EVALUATION AND PROOFS ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Evaluation and Proofs</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>How bundle quality is assessed</h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">
            No unsupported accuracy coverage or raw-recall from a bare, un-permissioned index — quality is assessed with
            proofs and defined scope.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {EVAL_TAGS.map((t) => (
              <span key={t} className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-slate-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">{t}</span>
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
            <div className="overflow-x-auto rounded-xl border border-black/10 dark:border-gray-700">
              <table className="w-full min-w-[440px] border-collapse text-left text-sm">
                <thead>
                  <tr className="text-[11px] font-bold uppercase tracking-[0.1em] text-slate-300" style={{ backgroundColor: NAVY }}>
                    <th className="px-4 py-3">Proof artifact</th>
                    <th className="px-4 py-3 text-[#34d39e]">Signal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/10 dark:divide-gray-700">
                  {EVAL_TABLE.map(([a, s]) => (
                    <tr key={a} className="bg-white dark:bg-gray-900">
                      <td className="px-4 py-3.5 font-medium">{a}</td>
                      <td className="px-4 py-3.5 text-slate-600 dark:text-gray-300">{s}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ImageSlot src="/images/Assessing bundle quality.png" alt="Assessing bundle quality" ratio="aspect-[4/3]" />
          </div>
        </div>
      </section>

      {/* ─── AUDIENCE PATHWAYS ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: "#f5efe0" }}>
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Audience Pathways</p>
          <h2 className={`mt-4 text-black text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Choose the next step for your role</h2>
          <div className="mt-8 divide-y divide-black/10 border-y border-black/10">
            {AUDIENCE.map(([t, b]) => (
              <div key={t} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-sm font-bold text-black">{t}</h3>
                  <p className="text-[13px] text-slate-600">{b}</p>
                </div>
                <a href="#" className="shrink-0 text-xs font-semibold text-[#d9720f] hover:underline">Explore pathway →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA (navy) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto max-w-3xl text-center text-white">
          <h2 className={`mx-auto max-w-xl text-[clamp(1.6rem,3vw,2.2rem)] ${serifH}`}>See governed bundle assembly in a controlled walkthrough</h2>
          <p className="mx-auto mt-3 max-w-lg text-[15px] leading-relaxed text-slate-300/85">
            Evaluate source eligibility, context controls, and human review with your team before committing to a pilot.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#" className={amberBtn} style={{ backgroundColor: AMBER }}>Book a Demo</a>
            <a href="#" className="rounded-md border border-white/25 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10">Request Pilot</a>
            <a href="#" className="px-3 py-2.5 text-sm font-semibold text-[#f0a54a] hover:underline">Download Governance Pack →</a>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Direct Answers</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Frequently asked questions</h2>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
            <div className="divide-y divide-black/10 border-y border-black/10 dark:divide-gray-700 dark:border-gray-700">
              {FAQS.map(([q, a], i) => {
                const open = openFaq === i;
                return (
                  <div key={q}>
                    <button type="button" onClick={() => setOpenFaq(open ? null : i)} aria-expanded={open}
                      className="flex w-full items-center justify-between gap-4 py-4 text-left text-[15px] font-semibold">
                      {q}<Chevron open={open} />
                    </button>
                    {open && <p className="pb-4 text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">{a}</p>}
                  </div>
                );
              })}
            </div>
            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500 dark:text-gray-400">Related Routes</p>
              <ImageSlot src="/images/FAQ related routes.png" alt="Related routes" ratio="aspect-[3/4]" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}