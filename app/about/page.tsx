"use client";

import Image from "next/image";
import { useState } from "react";

const INK = "#16233d";
const NAVY = "#0f1a30";
const AMBER = "#e8912a";

/*
  ZoikoLogia™ — About page body (app/.../page.tsx)
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
const WHO_WE_ARE: [string, string][] = [
  ["We are source governed", "Every answer traces to an approved, versioned source — never open-ended generation."],
  ["We are profession aware", "The system reflects how accounting, tax, audit, and finance work is actually done."],
  ["We are enterprise minded", "Tenant isolation, access control, and release governance are built in from the start."],
  ["We are built for responsible AI use", "Risk classification, escalation, and audit evidence are part of every interaction."],
];

const PRINCIPLES: [string, string][] = [
  ["Source authority", "Approved, versioned sources only."],
  ["Context first", "Framework, jurisdiction, and period resolved before meaning."],
  ["Risk classified", "Every response graded before it is drafted."],
  ["Evidence recorded", "Source bundle and reviewer trail preserved."],
  ["Human decision", "Qualified review remains the final call."],
];

const NEEDS: [string, string][] = [
  ["Source-backed guidance", "Answers grounded in approved sources, with citations attached."],
  ["Something you can interpret", "Assumptions and limitations are made explicit, not hidden."],
  ["Risk you can inspect", "Every response is classified before it is drafted."],
  ["Professional boundary respect", "It supports judgement; it never replaces qualified review."],
  ["Audit & compliance traceability", "Source bundle, model run, and reviewer trail are preserved."],
  ["Provider trust", "Governance is built into the product, not bolted on afterward."],
];

const HELPS: [string, string][] = [
  ["Source-backed accounting guidance", "Cited, in-scope guidance drawn from approved sources."],
  ["Accounting knowledge organization", "Concepts, relationships, and context kept structured."],
  ["Risk-aware interpretation", "Higher-risk matters flagged before an answer is drafted."],
  ["Audit-ready evidence", "A preserved record aligned to workpaper standards."],
];

const AUDIENCE: [string, string][] = [
  ["Accounting firms", "Workflow and review support for engagement teams."],
  ["Tax professionals", "Jurisdiction-scoped terminology and treatment structure."],
  ["Payroll & compliance teams", "Rule-change tracing bound to the correct period and basis."],
  ["Technology & governance teams", "Governed AI that fits your stack and control model."],
];

const GOVERNANCE_FIRST: [string, string][] = [
  ["Source authority before answer generation", "No answer is drafted until an approved source is in scope."],
  ["Context before interpretation", "Framework, jurisdiction, entity, and period are resolved first."],
  ["Risk classification before response", "Every question is graded — low to restricted — before drafting."],
  ["Evidence before acceptance", "The source bundle and reasoning are recorded for review."],
];

const BACKEND: [string, string][] = [
  ["Identity & tenancy", "Per-tenant isolation and role-based access."],
  ["Source registry", "Approved, versioned sources with attributed authority."],
  ["Ontology service", "Governed concepts and typed relationships."],
  ["Risk classifier", "Low / medium / high / restricted grading per question."],
  ["Evidence ledger", "Append-only record of bundles, runs, and reviews."],
  ["Escalation & review", "Human routing for flagged and restricted matters."],
  ["Release governance", "Controlled promotion of sources and policy."],
  ["Audit & observability", "Traceability across every interaction."],
];

const RECKLESS: string[] = [
  "We do not treat fluency as truth.",
  "We do not hide uncertainty.",
  "We do not bypass professional judgment.",
  "We do not answer without a source.",
  "We do not release without governance.",
];

const PRIVACY: [string, string][] = [
  ["Tenant isolation", "Each organization's data is separated at the platform boundary."],
  ["Encryption in transit and at rest", "Standard protection applied across the data path."],
  ["Role-based access controls", "Access follows role, policy, and configured conditions."],
  ["Auditable records", "Governed interactions are preserved for later review."],
];

const JUDGMENT: [string, string, string][] = [
  ["Source-backed explanation", "Assembles cited, in-scope guidance.", "Deciding how it applies."],
  ["Risk classification", "Flags higher-risk matters for review.", "Accepting or escalating the risk."],
  ["Drafting support", "Produces source-bound drafts.", "Final wording and sign-off."],
  ["Evidence trail", "Preserves the record for review.", "The professional conclusion or opinion."],
  ["Escalation", "Routes restricted questions to a person.", "The decision at the end of the route."],
];

const SOURCE_TAGS: string[] = [
  "Accounting standards", "Tax legislation", "Regulatory guidance", "Firm methodology",
  "Approved commentary", "Internal policy", "Framework mappings", "Versioned interpretations",
];

const FAQS: [string, string][] = [
  ["What is ZoikoLogia™?", "ZoikoLogia™ is a governed AI platform for accounting and professional work. It connects source authority, ontology, risk classification, evidence, and human review so answers can be trusted and traced."],
  ["How is ZoikoLogia™ different from a general AI tool?", "General tools generate open-ended text. ZoikoLogia™ answers only from approved, versioned sources, classifies risk before drafting, attaches citations, and preserves an evidence trail — governance is the product, not an add-on."],
  ["Is ZoikoLogia™ regulated or certified?", "ZoikoLogia™ supports qualified professionals; it does not issue binding determinations or certify compliance. Regulatory responsibility and sign-off remain with your team."],
  ["Who is Kriton™?", "Kriton™ is the AI advisor inside ZoikoLogia™ — the interface where questions are asked and answers are reviewed, built on the governed platform underneath."],
  ["Does ZoikoLogia™ store our data?", "Data is held under per-tenant isolation with encryption and role-based access. Governed interactions are recorded for auditability; configuration is set to your organization's standards."],
  ["How does ZoikoLogia™ handle high-risk questions?", "High-risk or restricted questions are flagged, limited, or routed to human review before any answer reaches the user, with the reasoning captured as evidence."],
];

// ─── inline SVG helpers ─────────────────────────────────────────────────────────
function Chevron({ open }: { open: boolean }) {
  return <svg viewBox="0 0 24 24" className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function Check({ className = "h-4 w-4" }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function XMark({ className = "h-4 w-4" }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

const eyebrowAmber = "flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#d9720f]";
const eyebrowLight = "flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#f0a54a]";
const serifH = "font-serif leading-tight";
const tealLink = "text-sm font-semibold text-[#0d9488] hover:underline";

// ─── PAGE ───────────────────────────────────────────────────────────────────────
export default function Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const amberBtn = "rounded-md px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90";

  return (
    <main className="bg-[#faf7f0] font-sans text-[#16233d] dark:bg-gray-900 dark:text-white">

      {/* ─── Hero (navy) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8 lg:py-20" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto max-w-4xl text-center text-white">
          <p className="mx-auto flex items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#f0a54a]">
            <span className="h-px w-6 bg-[#f0a54a]" /> About ZoikoLogia™
          </p>
          <h1 className={`mx-auto mt-5 max-w-3xl text-[clamp(2rem,4.5vw,2.9rem)] ${serifH}`}>We are building governed AI accounting intelligence for professional work.</h1>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-slate-300/85">
            ZoikoLogia™ is a governed intelligence platform for accounting. Its purpose: help professionals ask
            questions, structure workflows, and review source-backed guidance — not a generic chatbot, but a
            governed system built for understandable, accountable answers.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#" className={amberBtn} style={{ backgroundColor: AMBER }}>Book a Demo</a>
            <a href="#" className="rounded-md border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10">Explore the Platform</a>
            <a href="#" className="px-3 py-2.5 text-sm font-semibold text-[#f0a54a] hover:underline">View Governance Framework →</a>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-5xl">
          <ImageSlot src="/images/About hero — team building governed AI.png" alt="Team building governed AI accounting intelligence" ratio="aspect-[21/9]" />
        </div>
      </section>

      {/* ─── Who we are ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Who We Are</p>
            <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>ZoikoLogia™ exists to bring trust, structure, and governance to AI-powered accounting work.</h2>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">
              Accounting work relies on standards, judgement, and time. Generic AI erases that context. We built a
              platform where every answer is bound to a source, a framework, and a human decision.
            </p>
            <a href="#" className={`${tealLink} mt-5 inline-block`}>Learn how the platform works →</a>
          </div>
          <dl className="divide-y divide-black/10 border-y border-black/10 dark:divide-gray-700 dark:border-gray-700">
            {WHO_WE_ARE.map(([term, def]) => (
              <div key={term} className="py-4">
                <dt className="text-sm font-bold">{term}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-gray-300">{def}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ─── Principles quote (navy) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto max-w-6xl text-white">
          <blockquote className={`mx-auto max-w-3xl text-center text-[clamp(1.4rem,3vw,2rem)] ${serifH}`}>
            &ldquo;To make AI useful, trustworthy, and governed for accounting professionals.&rdquo;
          </blockquote>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {PRINCIPLES.map(([t, b]) => (
              <div key={t} className="rounded-lg bg-white/5 p-5 ring-1 ring-white/10">
                <span className="text-[#0d9488]"><Check className="h-5 w-5" /></span>
                <h3 className="mt-3 text-sm font-semibold">{t}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-slate-300/70">{b}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <ImageSlot src="/images/Governance team 1.png" alt="Governance team" ratio="aspect-[4/3]" />
            <ImageSlot src="/images/Governance team 2.png" alt="Governance team" ratio="aspect-[4/3]" />
            <ImageSlot src="/images/Governance team 3.png" alt="Governance team" ratio="aspect-[4/3]" />
            <ImageSlot src="/images/Governance team 4.png" alt="Governance team" ratio="aspect-[4/3]" />
          </div>
        </div>
      </section>

      {/* ─── Needs governance ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Why It Matters</p>
          <h2 className={`mt-4 max-w-2xl text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>The accounting profession needs AI that understands governance.</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {NEEDS.map(([t, b]) => (
              <div key={t} className="flex flex-col rounded-xl border border-black/10 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <span className="text-[#0d9488]"><Check className="h-5 w-5" /></span>
                <h3 className="mt-3 text-sm font-bold">{t}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-600 dark:text-gray-300">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Helps users work ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: "#f5efe0" }}>
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> What It Does</p>
            <h2 className={`mt-4 text-black text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>ZoikoLogia™ helps users work with accounting knowledge through a governed AI system.</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {HELPS.map(([t, b]) => (
                <div key={t} className="rounded-lg border border-black/10 bg-white p-4 dark:border-gray-700 dark:bg-gray-900">
                  <h3 className="text-sm font-bold text-black dark:text-white">{t}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-slate-600 dark:text-gray-300">{b}</p>
                </div>
              ))}
            </div>
            <a href="#" className={`${tealLink} mt-6 inline-block`}>Explore Core Capabilities →</a>
          </div>
          <ImageSlot src="/images/Team working with governed system.png" alt="Working with the governed system" ratio="aspect-[4/3]" className="self-center" />
        </div>
      </section>

      {/* ─── Kriton advisor band ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className={`${eyebrowAmber} justify-center`}><span className="h-px w-6 bg-[#d9720f]" /> Meet Kriton™</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Kriton™ is the AI advisor for governed accounting intelligence.</h2>
          <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">
            Kriton™ is the interface professionals talk to — questions in, source-backed and risk-classified answers
            out, with review built in.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-5xl">
          <ImageSlot src="/images/Kriton advisor in use.png" alt="Kriton advisor in use" ratio="aspect-[21/9]" />
        </div>
      </section>

      {/* ─── Built for people/orgs ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: "#f5efe0" }}>
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Who It Is For</p>
            <h2 className={`mt-4 text-black text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Built for the people and organizations that need trustworthy accounting intelligence.</h2>
            <div className="mt-8 space-y-4">
              {AUDIENCE.map(([t, b]) => (
                <div key={t} className="flex gap-3">
                  <span className="mt-1 text-[#0d9488]"><Check className="h-4 w-4" /></span>
                  <div>
                    <h3 className="text-sm font-bold text-black dark:text-white">{t}</h3>
                    <p className="mt-0.5 text-[13px] leading-relaxed text-slate-600 dark:text-gray-300">{b}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="#" className={`${tealLink} mt-6 inline-block`}>See all solutions →</a>
          </div>
          <ImageSlot src="/images/Practitioners collaborating.png" alt="Practitioners collaborating" ratio="aspect-[4/3]" className="self-center" />
        </div>
      </section>

      {/* ─── Governance first ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Governance First</p>
          <h2 className={`mt-4 max-w-2xl text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>ZoikoLogia™ is built around governance first.</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {GOVERNANCE_FIRST.map(([t, b], i) => (
              <div key={t} className="rounded-xl border border-black/10 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#0d9488] text-sm font-bold text-[#0d9488]">{i + 1}</div>
                <h3 className="mt-3 text-sm font-bold">{t}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-slate-600 dark:text-gray-300">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Back-end control architecture (navy) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto max-w-6xl text-white">
          <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#f0a54a]">
            <span className="h-px w-6 bg-[#f0a54a]" /> Control Architecture
          </p>
          <h2 className={`mt-4 max-w-2xl text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>ZoikoLogia™ is governed by a complete back-end control architecture.</h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-300/85">
            These are design specifications that reflect how every component of ZoikoLogia™ must behave before it
            reaches a professional.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {BACKEND.map(([t, b]) => (
              <div key={t} className="rounded-lg bg-white/5 p-5 ring-1 ring-white/10">
                <h3 className="text-sm font-semibold">{t}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-slate-300/70">{b}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <ImageSlot src="/images/Control room architecture.png" alt="Back-end control architecture" ratio="aspect-[21/9]" />
          </div>
        </div>
      </section>

      {/* ─── Useful without reckless ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Our Position</p>
            <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>We believe accounting AI must be useful without being reckless.</h2>
            <ul className="mt-8 space-y-3">
              {RECKLESS.map((r) => (
                <li key={r} className="flex gap-3 text-[15px] leading-relaxed text-slate-700 dark:text-gray-300">
                  <span className="mt-0.5 text-red-500"><XMark className="h-4 w-4" /></span>{r}
                </li>
              ))}
            </ul>
          </div>
          <ImageSlot src="/images/Reviewer at work.png" alt="Reviewer at work" ratio="aspect-[4/3]" />
        </div>
      </section>

      {/* ─── Privacy / security ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: "#f5efe0" }}>
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Trust & Controls</p>
          <h2 className={`mt-4 max-w-2xl text-black text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Privacy, security, and auditability are core product requirements.</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PRIVACY.map(([t, b]) => (
              <div key={t} className="rounded-xl border border-black/10 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <span className="text-[#0d9488]"><Check className="h-5 w-5" /></span>
                <h3 className="mt-3 text-sm font-bold">{t}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-slate-600 dark:text-gray-300">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Judgment table ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Professional Boundary</p>
          <h2 className={`mt-4 max-w-2xl text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Kriton™ supports professional judgment. It does not replace it.</h2>
          <div className="mt-8 overflow-x-auto rounded-xl border border-black/10 dark:border-gray-700">
            <table className="w-full min-w-[600px] border-collapse text-left text-sm">
              <thead>
                <tr className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-300" style={{ backgroundColor: NAVY }}>
                  <th className="px-4 py-3">Capability</th>
                  <th className="px-4 py-3 text-[#34d39e]">What Kriton™ does</th>
                  <th className="px-4 py-3">What stays with you</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/10 dark:divide-gray-700">
                {JUDGMENT.map(([cap, does, you]) => (
                  <tr key={cap} className="bg-white align-top dark:bg-gray-900">
                    <td className="px-4 py-4 font-semibold">{cap}</td>
                    <td className="px-4 py-4 text-slate-800 dark:text-gray-100">{does}</td>
                    <td className="px-4 py-4 text-slate-600 dark:text-gray-300">{you}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── Source basis (navy) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="text-white">
            <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#f0a54a]">
              <span className="h-px w-6 bg-[#f0a54a]" /> Source Basis
            </p>
            <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>The source basis matters.</h2>
            <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-slate-300/85">
              Every answer is only as trustworthy as what it draws on. These are the kinds of governed sources a
              Kriton™ answer can be built from — each attributed, scoped, and versioned.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {SOURCE_TAGS.map((tag) => (
                <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200 ring-1 ring-white/10">{tag}</span>
              ))}
            </div>
          </div>
          <ImageSlot src="/images/Professional considering a source.png" alt="Considering the source basis" ratio="aspect-[4/3]" />
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-3xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Direct Answers</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>About ZoikoLogia™ and Kriton™.</h2>
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

      {/* ─── Final CTA (navy) ─── */}
      <section className="px-4 pb-20 sm:px-6 md:px-8">
        <div className="mx-auto max-w-5xl rounded-2xl px-8 py-16 text-center" style={{ backgroundColor: NAVY }}>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0d9488]">Get Started</p>
          <h2 className={`mx-auto mt-3 max-w-2xl text-white text-[clamp(1.6rem,3vw,2.2rem)] ${serifH}`}>Use AI accounting intelligence with source authority, audit evidence, and professional judgment.</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#" className={amberBtn} style={{ backgroundColor: AMBER }}>Book a Demo</a>
            <a href="#" className="rounded-md border border-white/25 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10">Request Pilot</a>
            <a href="#" className="px-3 py-2.5 text-sm font-semibold text-[#f0a54a] hover:underline">Visit Trust Center →</a>
          </div>
        </div>
      </section>
    </main>
  );
}