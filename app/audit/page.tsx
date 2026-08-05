"use client";

import Image from "next/image";
import { useState } from "react";

const NAVY = "#0f1a30";
const AMBER = "#e8912a";

/*
  ZoikoLogia™ — Audit Evidence Ledger page body (app/.../page.tsx)
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
const LIFECYCLE: [string, string, string][] = [
  ["01", "Source eligibility", "Only approved, in-scope sources may enter."],
  ["02", "Content resolution", "The relevant content is resolved and recorded."],
  ["03", "Retrieval bundle", "The exact bundle retrieved is captured."],
  ["04", "AI-supported output", "The generated response, kept separate from sources."],
  ["05", "Human review", "A qualified person confirms, revises, or overrides."],
  ["06", "Consequential action", "Any action taken on the reviewed outcome."],
  ["07", "Change & retention", "Versioning, freshness, and retention state."],
];

const LEDGER: [string, string][] = [
  ["Identity", "Actor, tenant, subject, and timestamp — who and what."],
  ["Source presence", "Which sources were present and eligible at the time."],
  ["Context", "Framework, jurisdiction, entity, and reporting period."],
  ["Retrieval", "The retrieved bundle and its manifest."],
  ["Output", "The generated response, held separate from its sources."],
  ["Review", "The reviewer's confirmation, revision, or override."],
  ["Action", "The consequential action taken, if any."],
  ["Lifecycle", "Version, freshness, and retention state over time."],
];

const DEMO_TABS: [string, string][] = [
  ["Overview", "A synthetic entry showing how one governed interaction is recorded end to end."],
  ["Sources", "The eligible sources present when the answer was assembled."],
  ["Context", "The framework, jurisdiction, entity, and period in force."],
  ["Retrieval", "The bundle manifest — each source, authority, and version."],
  ["Review", "The reviewer action, with reasoning captured."],
  ["Output", "The generated response, kept distinct from its sources."],
  ["Human", "Who confirmed, revised, or overrode, and when."],
  ["History", "The append-only version and freshness trail."],
];

const ROLES: [string, string][] = [
  ["Contributor", "Creates and edits entries; cannot alter finalized records."],
  ["Specialist", "Adds domain review within a defined scope."],
  ["Auditor / assurance reviewer", "Read-only access to the full evidence trail."],
  ["System service", "Automated writes under policy, with no silent override."],
  ["Reviewer", "Confirms, revises, or overrides before an outcome is used."],
  ["Administrator", "Configures roles, sources, and retention."],
  ["Observer", "Limited, time-boxed read access."],
];

const APPEND: [string, string, string][] = [
  ["Source update", "A source version changes upstream.", "The user is shown that a newer source version now applies."],
  ["Content revision", "An entry is revised after review.", "The prior version is preserved and marked superseded."],
  ["Version change", "A concept or standard is re-versioned.", "The user sees which version informed the answer."],
  ["Retention window", "An entry reaches its retention boundary.", "Retention state is disclosed, never silently purged."],
  ["Freshness check", "A source is re-checked for currency.", "Stale sources are flagged rather than used quietly."],
  ["Correction", "A recorded error is corrected.", "A correction is appended; history is never overwritten."],
];

const PRIVACY: [string, string][] = [
  ["Tenant isolation", "Each organization's evidence is separated at the boundary."],
  ["Redaction", "Sensitive fields can be redacted without breaking the trail."],
  ["Field-level access", "Access is bound per field, per role, per policy."],
];

const INTEGRITY: string[] = [
  "Entries are append-only; nothing is edited in place.",
  "Each record is chained so tampering is detectable.",
  "Exports carry their integrity signature with them.",
  "Redaction preserves the record's structure and lineage.",
  "Retention and deletion follow governed, disclosed policy.",
];

const LAYERS: [string, string][] = [
  ["Platform channels", "Where professionals interact with Kriton™."],
  ["Source-Governed Intelligence", "The reasoning layer over admitted sources."],
  ["Accounting Ontology", "Governed concepts and typed relationships."],
  ["RAG Source Bundles", "The eligible, versioned sources per question."],
  ["Audit Evidence Ledger", "The append-only record tying it all together."],
];

const TASKS: { title: string; body: string; link: string }[] = [
  { title: "Accounting policy review", body: "Record which governed sources informed a treatment question.", link: "route to Accounting Firms" },
  { title: "Audit evidence planning", body: "Tie assertions to the evidence that substantiates them.", link: "route to Assurance Teams" },
  { title: "Tax update review", body: "Trace a versioned change to what now applies, and when.", link: "route to Tax Teams" },
  { title: "Payroll compliance check", body: "Bind an answer to the correct jurisdiction and period.", link: "route to Payroll & Compliance" },
  { title: "Learning mode", body: "Prerequisite-aware practice; commentary supports, not decides.", link: "route to Learning & Practice" },
];

const ADMIN: [string, string][] = [
  ["Approved source domains", "Curate which source families may be recorded."],
  ["Roles & permissions", "Bind who can read, write, or export the ledger."],
  ["Retention policy", "Set retention windows and disclosure rules."],
  ["Source & context options", "Govern the context that must be captured."],
  ["Integrations", "Connect existing evidence and identity systems."],
  ["Notifications", "Alert on freshness, retention, and review events."],
  ["Analytics", "Report on evidence continuity and review coverage."],
];

const FAQS: [string, string][] = [
  ["What is an Audit Evidence Ledger?", "An append-only record of every governed AI-assisted interaction — the sources present, the context, the generated output, the human review, and any action — preserved so the basis of an outcome can always be reconstructed."],
  ["Is this the same as an audit trail?", "It goes further. A trail logs events; the ledger preserves the full evidence continuity — bundle, output, review, and lifecycle — kept distinguishable and tamper-evident, not just a list of actions."],
  ["Can users change an entry?", "No. Entries are append-only. A revision or correction is recorded as a new version; the prior version is preserved and marked superseded, so history is never overwritten."],
  ["Who can see ledger records?", "Access is bound by role, tenant, and field-level permission. Auditors get read-only access to the full trail; other roles see only what policy permits."],
  ["How long are records retained?", "Retention follows a governed, disclosed policy per tenant. Records aren't silently purged — retention state is visible, and boundaries are disclosed."],
  ["Can entries be omitted or redacted?", "Sensitive fields can be redacted without breaking the record's structure or lineage. Redaction is itself recorded; entries are never silently removed."],
  ["Does the ledger prove an accounting opinion is correct?", "No. It proves what informed an outcome and who reviewed it. Correctness and professional opinion remain a qualified human responsibility."],
  ["Can evidence be exported?", "Yes. Exports carry their integrity signature, so an auditor can verify the exported record hasn't been altered."],
  ["How does it relate to RAG Source Bundles?", "A bundle is what was retrieved for a question; the ledger records that bundle alongside the output, review, and action — the bundle is one artifact within the evidence continuity."],
];

// ─── inline SVG helpers ─────────────────────────────────────────────────────────
function Chevron({ open }: { open: boolean }) {
  return <svg viewBox="0 0 24 24" className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function Check({ className = "h-4 w-4" }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

const eyebrowAmber = "flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#d9720f]";
const serifH = "font-serif leading-tight";
const tealLink = "text-sm font-semibold text-[#0d9488] hover:underline";

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

// ─── PAGE ───────────────────────────────────────────────────────────────────────
export default function Page() {
  const [tab, setTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const amberBtn = "rounded-md px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90";

  return (
    <main className="bg-[#faf7f0] font-sans text-[#16233d] dark:bg-gray-900 dark:text-white">

      {/* ─── Hero (navy) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8 lg:py-20" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="text-white">
            <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#f0a54a]">
              <span className="h-px w-6 bg-[#f0a54a]" /> Platform · Audit Evidence Ledger
            </p>
            <h1 className={`mt-5 max-w-xl text-[clamp(2rem,4.5vw,2.9rem)] ${serifH}`}>Preserve the evidence behind every governed AI-assisted workflow.</h1>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-slate-300/85">
              See which sources, contexts, retrieval steps, limitations, reviews, and decisions shaped an
              AI-supported accounting outcome — with attributable records and professional controls.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#" className={amberBtn} style={{ backgroundColor: AMBER }}>Book a Demo</a>
              <a href="#" className="rounded-md border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10">Request Pilot</a>
            </div>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-[#f0a54a]">
              <a href="#" className="hover:underline">View Governance Framework →</a>
              <a href="#" className="hover:underline">Visit Privacy &amp; Security →</a>
            </div>
          </div>
          <ImageSlot src="/images/Audit hero — AI assistant.png" alt="Governed AI-assisted workflow" ratio="aspect-[4/3]" />
        </div>
      </section>

      {/* ─── EVIDENCE CONTINUITY (lifecycle) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Evidence Continuity</p>
          <h2 className={`mt-4 max-w-2xl text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>The end-to-end lifecycle, from source admission to reviewed outcome</h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">
            Continuity of evidence runs the whole way — every stage is recorded, so an AI-assisted outcome is never
            an unexplained jump.
          </p>
          <ol className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-black/10 dark:bg-gray-700 sm:grid-cols-4 lg:grid-cols-7">
            {LIFECYCLE.map(([n, title, desc]) => (
              <li key={n} className="bg-[#faf7f0] p-4 dark:bg-gray-900">
                <span className="font-serif text-lg text-[#e8912a]">{n}</span>
                <h3 className="mt-2 text-xs font-bold leading-snug">{title}</h3>
                <p className="mt-1 text-[11px] leading-snug text-slate-500 dark:text-gray-400">{desc}</p>
              </li>
            ))}
          </ol>
          <ImageSlot src="/images/Evidence lifecycle desk.png" alt="Reviewing evidence at a desk" ratio="aspect-[21/7]" className="mt-6" />
        </div>
      </section>

      {/* ─── LEDGER STRUCTURE ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: "#f5efe0" }}>
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Ledger Structure</p>
          <h2 className={`mt-4 text-black text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>What the ledger records — and what it does not claim</h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-700">
            Eight record families capture identity, presence, context, retrieval, output, review, action, and
            lifecycle change.
          </p>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
            <dl className="divide-y divide-black/10 border-y border-black/10">
              {LEDGER.map(([term, def]) => (
                <div key={term} className="grid gap-1 py-4 sm:grid-cols-[160px_1fr] sm:gap-6">
                  <dt className="text-sm font-bold text-black">{term}</dt>
                  <dd className="text-sm leading-relaxed text-slate-700">{def}</dd>
                </div>
              ))}
            </dl>
            <ImageSlot src="/images/Whiteboard session.png" alt="Team at a whiteboard" ratio="aspect-[3/4]" className="lg:sticky lg:top-8" />
          </div>
          <p className="mt-6 max-w-3xl rounded-lg bg-[#efe6d2] p-4 text-xs leading-relaxed text-slate-600">
            The ledger does not claim an answer is correct or an opinion is sound. It records what informed an outcome
            and who reviewed it — correctness remains a qualified human responsibility.
          </p>
        </div>
      </section>

      {/* ─── DEMONSTRATION (tabs) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Demonstration · Synthetic Entry</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Inspect a synthetic evidence entry</h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">
            No customer data. A fictional entry to show how an evidence record is structured.
          </p>
          <div className="mt-8 grid gap-6 rounded-xl border border-black/10 bg-white p-4 dark:border-gray-700 dark:bg-gray-900 md:grid-cols-[200px_1fr] md:p-6">
            <div className="flex gap-2 overflow-x-auto md:flex-col md:overflow-visible">
              {DEMO_TABS.map(([label], i) => (
                <button key={label} type="button" onClick={() => setTab(i)}
                  className={`shrink-0 rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors ${
                    tab === i ? "bg-[#0f1a30] text-white" : "text-slate-500 hover:bg-slate-100 dark:text-gray-400 dark:hover:bg-gray-800"
                  }`}>
                  {label}
                </button>
              ))}
            </div>
            <div>
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400 dark:text-gray-500">{DEMO_TABS[tab][0]}</p>
              <p className="mb-4 text-sm leading-relaxed text-slate-600 dark:text-gray-300">{DEMO_TABS[tab][1]}</p>
              <ImageSlot src="/images/Inspecting evidence entry.png" alt="Inspecting a synthetic evidence entry" ratio="aspect-[21/8]" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── DECISION RIGHTS (navy) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto max-w-6xl text-white">
          <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#f0a54a]">
            <span className="h-px w-6 bg-[#f0a54a]" /> Decision Rights
          </p>
          <h2 className={`mt-4 max-w-2xl text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Seven roles, explicit permissions</h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-300/85">
            Human review is the final decision. No role may silently rewrite historical evidence.
          </p>
          <div className="mt-10 grid items-start gap-10 lg:grid-cols-2">
            <ul className="divide-y divide-white/10 border-y border-white/10">
              {ROLES.map(([t, b]) => (
                <li key={t} className="py-3.5">
                  <p className="text-sm font-semibold">{t}</p>
                  <p className="mt-0.5 text-[13px] leading-relaxed text-slate-300/70">{b}</p>
                </li>
              ))}
            </ul>
            <ImageSlot src="/images/Presenting to team.png" alt="Reviewer presenting to a team" ratio="aspect-[4/3]" className="lg:sticky lg:top-8" />
          </div>
        </div>
      </section>

      {/* ─── APPEND, NEVER OVERWRITE (no images) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Append, Never Overwrite</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Change, version and freshness</h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">
            Corrections and revisions create a durable new event. Each change is disclosed to the user.
          </p>
          <div className="mt-8 divide-y divide-black/10 border-y border-black/10 dark:divide-gray-700 dark:border-gray-700">
            {APPEND.map(([label, desc, disclosure]) => (
              <div key={label} className="grid gap-3 py-5 md:grid-cols-2 md:gap-10">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400 dark:text-gray-500">{label}</p>
                  <p className="mt-1 text-sm text-slate-700 dark:text-gray-200">{desc}</p>
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#0d9488]">Disclosure to user</p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-gray-300">{disclosure}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRIVACY & ACCESS ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: "#f5efe0" }}>
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Privacy &amp; Access</p>
          <h2 className={`mt-4 text-black text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Evidence continuity coexists with field-level protection</h2>
          <div className="mt-8 grid items-center gap-6 lg:grid-cols-[1fr_1fr_1fr]">
            <div className="grid gap-4">
              {PRIVACY.slice(0, 2).map(([t, b]) => (
                <div key={t} className="rounded-xl bg-white p-5 shadow-sm dark:bg-gray-900">
                  <span className="text-[#0d9488]"><Check className="h-5 w-5" /></span>
                  <h3 className="mt-3 text-sm font-bold text-black dark:text-white">{t}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-slate-600 dark:text-gray-300">{b}</p>
                </div>
              ))}
            </div>
            <ImageSlot src="/images/Field-level security.png" alt="Field-level protection" ratio="aspect-[4/3]" />
            <div className="grid gap-4">
              <div className="rounded-xl bg-white p-5 shadow-sm dark:bg-gray-900">
                <span className="text-[#0d9488]"><Check className="h-5 w-5" /></span>
                <h3 className="mt-3 text-sm font-bold text-black dark:text-white">{PRIVACY[2][0]}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-slate-600 dark:text-gray-300">{PRIVACY[2][1]}</p>
              </div>
              <div className="rounded-xl bg-white p-5 shadow-sm dark:bg-gray-900">
                <span className="text-[#0d9488]"><Check className="h-5 w-5" /></span>
                <h3 className="mt-3 text-sm font-bold text-black dark:text-white">Purpose limitation</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-slate-600 dark:text-gray-300">Records are used only for the purpose they were governed for — never repurposed silently.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INTEGRITY ARCHITECTURE ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Integrity Architecture</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Integrity and export boundaries</h2>
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
            <ImageSlot src="/images/City silhouettes.png" alt="Integrity architecture" ratio="aspect-[4/3]" />
            <ol className="space-y-4">
              {INTEGRITY.map((t, i) => (
                <li key={t} className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0f1a30] text-xs font-bold text-white">{i + 1}</span>
                  <p className="text-[15px] leading-relaxed text-slate-700 dark:text-gray-200">{t}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ─── PLATFORM CONTINUITY (navy) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto max-w-6xl text-white">
          <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#f0a54a]">
            <span className="h-px w-6 bg-[#f0a54a]" /> Platform Continuity
          </p>
          <h2 className={`mt-4 max-w-2xl text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Connected platform layers</h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-300/85">
            The ledger sits under the whole platform chain, so every layer's evidence is captured.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {LAYERS.map(([t, b]) => (
              <div key={t} className="rounded-lg bg-white/5 p-4 ring-1 ring-white/10">
                <h3 className="text-sm font-semibold">{t}</h3>
                <p className="mt-1.5 text-[12px] leading-relaxed text-slate-300/70">{b}</p>
              </div>
            ))}
          </div>
          <ImageSlot src="/images/Connected teams.png" alt="Connected platform teams" ratio="aspect-[21/7]" className="mt-8" />
        </div>
      </section>

      {/* ─── SYNTHETIC · NON-ADVISORY ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: "#f5efe0" }}>
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Synthetic · Non-Advisory</p>
          <h2 className={`mt-4 text-black text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Evidence journeys across accounting, audit, tax and payroll</h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-700">
            Every scenario is fictional. None is a professional conclusion.
          </p>
          <div className="mt-10 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <TaskCard i={0} />
              <TaskCard i={1} />
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <TaskCard i={2} />
              <ImageSlot src="/images/Practitioner presenting.png" alt="Practitioner presenting" ratio="aspect-auto" className="h-full min-h-[180px]" />
              <TaskCard i={3} />
            </div>
            <TaskCard i={4} />
          </div>
        </div>
      </section>

      {/* ─── ENTERPRISE ADMINISTRATION ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Enterprise Administration</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Configuration, roles and operations</h2>
          <div className="mt-8 grid items-start gap-10 lg:grid-cols-[1fr_1.4fr]">
            <ImageSlot src="/images/Admin at work.png" alt="Administrator at work" ratio="aspect-[3/4]" className="lg:sticky lg:top-8" />
            <dl className="divide-y divide-black/10 border-y border-black/10 dark:divide-gray-700 dark:border-gray-700">
              {ADMIN.map(([term, def]) => (
                <div key={term} className="grid gap-1 py-4 sm:grid-cols-[220px_1fr] sm:gap-6">
                  <dt className="text-sm font-bold">{term}</dt>
                  <dd className="text-sm leading-relaxed text-slate-600 dark:text-gray-300">{def}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ─── FAQ (no image) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: "#f5efe0" }}>
        <div className="mx-auto max-w-3xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Direct Answers</p>
          <h2 className={`mt-4 text-black text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Frequently asked questions</h2>
          <div className="mt-8 divide-y divide-black/10 border-y border-black/10 dark:divide-gray-700 dark:border-gray-700">
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
        </div>
      </section>

      {/* ─── CTA (navy) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto max-w-3xl text-center text-white">
          <h2 className={`mx-auto max-w-xl text-[clamp(1.6rem,3vw,2.2rem)] ${serifH}`}>Review evidence continuity before you commit</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#" className={amberBtn} style={{ backgroundColor: AMBER }}>Book a Demo</a>
            <a href="#" className="rounded-md border border-white/25 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10">Request Pilot</a>
          </div>
          <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-semibold text-[#f0a54a]">
            <a href="#" className="hover:underline">View Governance Framework →</a>
            <a href="#" className="hover:underline">Visit Privacy &amp; Security →</a>
          </div>
        </div>
      </section>
    </main>
  );
}