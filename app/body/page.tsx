"use client";

import Image from "next/image";
import { useState } from "react";

const INK = "#16233d";
const NAVY = "#0f1a30";
const AMBER = "#e8912a";

/*
  ZoikoLogia™ — Accounting Ontology page body (app/.../page.tsx)
  Header/nav and footer omitted — provided by the shared layout.
  Swap the /images/*.png paths below for your real filenames.
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
const CAPABILITIES: { title: string; link: string }[] = [
  { title: "Defined concepts", link: "Concept model" },
  { title: "Governed relationships", link: "Relationship model" },
  { title: "Context before interpretation", link: "Context controls" },
  { title: "Versioned change", link: "Versioning" },
  { title: "Human decision rights", link: "Governance model" },
];

const GAP_ROWS: [string, string, string][] = [
  ["Meaning", "One definition attached to a term.", "Meaning bound to framework, jurisdiction, and time."],
  ["Relationships", "Flat or implied links between words.", "Typed, directional relationships between concepts."],
  ["Context", "Context is implicit or absent.", "Context — framework, entity, period — is explicit."],
  ["Synonyms", "Aliases treated as interchangeable.", "Synonyms scoped; equivalence is never assumed."],
  ["Authority", "A single definition, unattributed.", "Every concept carries an owner and source authority."],
  ["Change", "A term is edited in place.", "Change is versioned; prior meaning is preserved."],
];

const DOMAINS: [string, string][] = [
  ["Accounting & reporting", "Recognition, measurement, classification, disclosure, and presentation concepts."],
  ["Tax", "Tax bases, treatments, reliefs, and jurisdictional distinctions."],
  ["Audit & assurance", "Assertion, evidence, procedure, risk, and control relationships."],
  ["Finance & analysis", "Metrics, ratios, forecasts, and management-reporting concepts."],
  ["Entity & organization", "Legal-entity, business-unit, account, and reporting-boundary concepts."],
  ["Education & learning", "Concept prerequisites, worked examples, and practice relationships."],
];

const RELATIONSHIPS: [string, string][] = [
  ["Is a type of", "A concept inherits from a broader parent without becoming identical to it."],
  ["Applies under", "A concept holds only within a stated framework, jurisdiction, or period."],
  ["Evidenced by", "A concept is linked to the evidence or source that substantiates it."],
  ["Supersedes / superseded by", "A concept replaces, or is replaced by, another across a versioned change."],
];

const CONTEXT: [string, string][] = [
  ["Framework / basis", "IFRS, US GAAP, or a local basis changes which definition applies."],
  ["Jurisdiction", "The same term can carry a different meaning across territories."],
  ["Entity type", "Listed group, private company, or sole trader shifts applicability."],
  ["Industry / sector", "Sector-specific treatments narrow how a concept is read."],
  ["Reporting / period", "Effective dates decide which version of a concept is live."],
  ["Transaction / event", "The event being described selects the relevant concept."],
  ["Role & basis intent", "What the user is doing narrows interpretation."],
  ["Organization policy", "Firm-specific policy overlays the governed baseline."],
];

const DECISION: [string, string][] = [
  ["Domain steward", "Owns definitions, relationships, and scope within a domain."],
  ["Ontology steward", "Maintains structural integrity and consistency across domains."],
  ["Framework reviewer", "Keeps mappings to standards and applicability current."],
  ["Qualified and reviewed", "A qualified person confirms before a concept is relied on."],
];

const TASKS: { title: string; body: string; link: string }[] = [
  { title: "Transaction classification review", body: "Explore how a transaction maps to governed concepts, with the reasoning shown.", link: "route to Accounting Firms" },
  { title: "Tax terminology disambiguation", body: "Separate near-synonyms and scope each to its jurisdiction and basis.", link: "route to Tax Teams" },
  { title: "Audit evidence planning", body: "Relate assertions to the evidence and procedures that substantiate them.", link: "route to Assurance Teams" },
  { title: "Payroll rule change review", body: "Trace how a versioned change alters which concept applies, and when.", link: "route to Payroll & Compliance" },
  { title: "Management reporting metric", body: "Pin a metric to its definition, inputs, and reporting boundary.", link: "route to Finance Teams" },
  { title: "Learning pathway", body: "Follow prerequisite-aware concept paths; commentary supports, it does not decide.", link: "route to Learning & Practice" },
];

const AUDIENCE: [string, string][] = [
  ["Accounting & finance professionals", "Work from concepts that carry their framework, context, and authority."],
  ["Data / AI engineering leaders", "Ground models on a governed ontology with typed relationships."],
  ["Audit & assurance teams", "Trace concepts to evidence and standards that stand up to review."],
  ["Enterprise finance teams", "Align terminology across entities without losing local meaning."],
];

const FAQS: [string, string][] = [
  ["What is an accounting ontology?", "A governed model of accounting concepts — their definitions, typed relationships, context, and authority — rather than a flat list of terms. Meaning is bound to a framework, jurisdiction, and time."],
  ["How is an ontology different from a glossary?", "A glossary gives one definition per term. An ontology records how concepts relate, when each applies, who owns it, and how it changes — so a term can resolve differently by context without contradiction."],
  ["Does the ontology replace accounting standards or tax law?", "No. It maps to standards and law; it never overrides them. The authoritative source remains the standard or statute, and the ontology points to it."],
  ["How does Kriton™ use the ontology?", "Before answering, Kriton™ resolves the concepts in a question against the ontology — selecting the definition that applies to the framework, jurisdiction, and period in play, and carrying that authority into the response."],
  ["Can one concept mean different things in different jurisdictions?", "Yes. A concept can hold different definitions under different jurisdictions or frameworks; the ontology scopes each one rather than collapsing them into a single meaning."],
  ["What happens when a term is ambiguous?", "The ambiguity is surfaced. Kriton™ names the candidate concepts and the context that would select between them, rather than guessing one reading."],
  ["Can a company add its own terminology?", "Yes. Organization-specific policy and terminology can overlay the governed baseline, scoped to that tenant and kept distinct from the shared ontology."],
  ["How is the ontology kept current?", "Change is versioned. When a standard or definition changes, a new version is recorded and the prior meaning is preserved with its effective dates."],
  ["Does this govern current accounting answers?", "The ontology governs how concepts are interpreted, but human review remains the final decision. It supports qualified judgement; it does not issue determinations."],
  ["Is the full ontology publicly available?", "Access is governed by role and tenant. A controlled walkthrough is available on request; the full model is not published openly."],
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
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const amberBtn = "rounded-md px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90";

  return (
    <main className="bg-[#faf7f0] font-sans text-[#16233d] dark:bg-gray-900 dark:text-white">

      {/* ─── Hero (navy) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8 lg:py-20" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="text-white">
            <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#f0a54a]">
              <span className="h-px w-6 bg-[#f0a54a]" /> Platform Capability · Accounting Ontology
            </p>
            <h1 className={`mt-5 max-w-xl text-[clamp(2rem,4.5vw,2.9rem)] ${serifH}`}>Give accounting questions a governed semantic structure.</h1>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-slate-300/85">
              ZoikoLogia™ with Kriton™ is designed to connect accounting concepts, source authority, framework, and
              jurisdiction context, evidence, and human review — so professional work can be interpreted consistently
              without pretending one vocabulary fits every situation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#" className={amberBtn} style={{ backgroundColor: AMBER }}>Book a Demo</a>
              <a href="#" className="rounded-md border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10">Request Pilot</a>
            </div>
            <p className="mt-6 max-w-md text-xs leading-relaxed text-slate-400/70">
              Supports qualified professional judgement. Does not replace required review, filings, opinions,
              determinations, or statutory obligations.
            </p>
          </div>

          {/* Hero image with a floating "concept" card */}
          <div className="relative">
            <ImageSlot src="/images/Overlay+Border1.png" alt="Team working with the governed ontology" ratio="aspect-[4/3]" />
            
          </div>
        </div>
      </section>

      {/* ─── Capability strip ─── */}
      <section className="px-4 py-10 sm:px-6 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {CAPABILITIES.map((c) => (
            <div key={c.title}>
              <h3 className="text-sm font-bold">{c.title}</h3>
              <a href="#" className={`${tealLink} mt-3 inline-block text-xs`}>{c.link} →</a>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Twin image band ─── */}
      <section className="px-4 pb-6 sm:px-6 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
          <ImageSlot src="/images/image 30.png" alt="Professionals in agreement" ratio="aspect-[16/9]" />
          <ImageSlot src="/images/image 31.png" alt="Advisors discussing" ratio="aspect-[16/9]" />
        </div>
      </section>

      {/* ─── THE GAP (comparison table) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> The Gap</p>
          <h2 className={`mt-4 max-w-2xl text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Why a generic taxonomy or glossary is not enough</h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">
            A flat list of terms cannot represent accounting dependencies, exceptions, timing, frameworks, or
            cross-domain effects. Meaning needs structure, context, and stewardship.
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.7fr_1fr]">
            <div className="overflow-x-auto rounded-xl border border-black/10 dark:border-gray-700">
              <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                <thead>
                  <tr className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-300" style={{ backgroundColor: NAVY }}>
                    <th className="px-4 py-3">Dimension</th>
                    <th className="px-4 py-3">Taxonomy / glossary pattern</th>
                    <th className="px-4 py-3 text-[#34d39e]">Governed ontology requirement</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/10 dark:divide-gray-700">
                  {GAP_ROWS.map(([dim, pattern, requirement]) => (
                    <tr key={dim} className="bg-white align-top dark:bg-gray-900">
                      <td className="px-4 py-4 font-semibold">{dim}</td>
                      <td className="px-4 py-4 text-slate-600 dark:text-gray-300">{pattern}</td>
                      <td className="px-4 py-4 text-slate-800 dark:text-gray-100">{requirement}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ImageSlot src="/images/VerticalBorder.png" alt="Governed semantic structure" ratio="aspect-[3/4]" />
          </div>
        </div>
      </section>

      {/* ─── SCOPE: core concept domains + record anatomy ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: "#f5efe0" }}>
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Scope</p>
            <h2 className={`mt-4 text-black text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Core concept domains</h2>
            <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-slate-700">
              Illustrative domains, subject to approved scope. No domain is claimed complete across every framework,
              jurisdiction, or use case.
            </p>
            <dl className="mt-8 divide-y divide-black/10 border-y border-black/10">
              {DOMAINS.map(([term, def]) => (
                <div key={term} className="grid gap-1 py-4 sm:grid-cols-[210px_1fr] sm:gap-6">
                  <dt className="text-sm font-bold text-black">{term}</dt>
                  <dd className="text-sm leading-relaxed text-slate-700">{def}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <p className={eyebrowTeal}>Concept Record Anatomy</p>
            <h3 className={`mt-3 text-black text-xl ${serifH}`}>A governed concept, inspected</h3>
            <ImageSlot src="/images/Paragraph+Background+Border (1).png" alt="A governed concept record" ratio="aspect-[4/3]" className="mt-6" />
          </div>
        </div>
      </section>

      {/* ─── RELATIONSHIPS ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Relationships</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Typed relationships, not automatic equivalence</h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">
            Connections explain why concepts affect one another — and where they explicitly do not.
          </p>

          <div className="mt-10 grid items-center gap-6 lg:grid-cols-[1fr_0.9fr_1fr]">
            <div className="grid gap-5">
              {RELATIONSHIPS.slice(0, 2).map(([t, b]) => (
                <div key={t} className="rounded-xl border border-black/10 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                  <h3 className="text-sm font-bold">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-gray-300">{b}</p>
                </div>
              ))}
            </div>
            <ImageSlot src="/images/Paragraph+Background+Border (2).png" alt="Mapping concept relationships" ratio="aspect-[3/4]" className="self-center" />
            <div className="grid gap-5">
              {RELATIONSHIPS.slice(2).map(([t, b]) => (
                <div key={t} className="rounded-xl border border-black/10 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                  <h3 className="text-sm font-bold">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-gray-300">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTEXT (navy) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto max-w-6xl text-white">
          <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#f0a54a]">
            <span className="h-px w-6 bg-[#f0a54a]" /> Context Before Interpretation
          </p>
          <h2 className={`mt-4 max-w-2xl text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Framework, jurisdiction, entity, and time can change meaning</h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-300/85">
            Context is never inferred from IP address, browser locale, or organization name alone. Missing context
            narrows or pauses interpretation.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CONTEXT.map(([t, b]) => (
              <div key={t} className="rounded-lg bg-white/5 p-5 ring-1 ring-white/10">
                <h3 className="text-sm font-semibold">{t}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-slate-300/70">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DEMONSTRATION: concept trace ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: "#f5efe0" }}>
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Demonstration · Synthetic Data</p>
          <h2 className={`mt-4 text-black text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>How does Kriton™ use the ontology?</h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-700">
            A fictional trace from question to concepts to evidence for human review — no live data and no professional conclusion.
          </p>

          <div className="mt-8 grid items-stretch gap-6 lg:grid-cols-2">
            {/* concept & evidence trace panel */}
            <div className="overflow-hidden rounded-2xl border border-white/10 shadow-xl" style={{ backgroundColor: NAVY }}>
              <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="ml-3 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">Concept &amp; Evidence Trace</span>
              </div>
              <div className="space-y-4 p-6 text-white">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">Question</p>
                  <p className="mt-1 text-sm">How is this multi-element customer contract classified for revenue?</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">Framework: IFRS</span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">Jurisdiction: UK</span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">Period: FY24</span>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">Resolved Concepts</p>
                  <div className="mt-1 flex flex-wrap gap-2">
                    <span className="rounded bg-[#0d9488]/25 px-2 py-0.5 text-xs font-semibold text-[#34d39e]">Performance obligation</span>
                    <span className="rounded bg-[#0d9488]/25 px-2 py-0.5 text-xs font-semibold text-[#34d39e]">Variable consideration</span>
                    <span className="rounded bg-white/10 px-2 py-0.5 text-xs text-slate-300">Transaction price</span>
                  </div>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">Applies under · Evidenced by</p>
                  <p className="mt-1 text-xs text-slate-300">Concept scoped to IFRS · UK · effective FY24 · v4.2 — routed to a qualified reviewer before any conclusion.</p>
                </div>
                <div className="grid grid-cols-3 gap-3 border-t border-white/10 pt-3 text-xs">
                  <div><p className="text-slate-400">Concept ID</p><p className="text-slate-200">CN-4471</p></div>
                  <div><p className="text-slate-400">Version</p><p className="text-slate-200">v4.2</p></div>
                  <div><p className="text-slate-400">Review</p><p className="text-slate-200">Pending</p></div>
                </div>
              </div>
            </div>
            <ImageSlot src="/images/Background+Border (1).png" alt="Reviewers checking the trace" ratio="aspect-[4/3]" className="lg:aspect-auto" />
          </div>
        </div>
      </section>

   {/* ─── DECISION RIGHTS ─── */}
<section className="px-4 py-16 sm:px-6 md:px-8">
  <div className="mx-auto max-w-6xl">
    <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Decision Rights</p>
    <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Human review remains the final decision</h2>
    <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">
      ZoikoLogia™ with Kriton™ supports professional judgement by organizing accounting concepts, source
      authority, and evidence. It does not replace qualified accountants, auditors, tax professionals, compliance
      officers, legal counsel, statutory obligations, or required human review.
    </p>

    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {DECISION.map(([t, b]) => (
        <div key={t} className="rounded-xl border border-black/10 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
          <span className="text-[#0d9488]"><Check className="h-5 w-5" /></span>
          <h3 className="mt-3 text-sm font-bold">{t}</h3>
          <p className="mt-1.5 text-[13px] leading-relaxed text-slate-600 dark:text-gray-300">{b}</p>
        </div>
      ))}
    </div>

    <ImageSlot
      src="/images/Frame 23.png"
      alt="Team reviewing work together"
      ratio="aspect-[1281/376]"
      className="mt-6"
    />
  </div>
</section>

      {/* ─── SYNTHETIC · NON-ADVISORY tasks ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: "#f5efe0" }}>
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Synthetic · Non-Advisory</p>
          <h2 className={`mt-4 text-black text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>How the ontology supports real work without giving advice</h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-700">
            Every scenario uses fictional entities, periods, and figures. None is a professional conclusion suitable for
            filing, opinion, or submission.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TASKS.map((t) => (
              <div key={t.title} className="flex flex-col rounded-xl border border-black/10 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <h3 className="text-sm font-bold">{t.title}</h3>
                <p className="mt-2 flex-1 text-[13px] leading-relaxed text-slate-600 dark:text-gray-300">{t.body}</p>
                <a href="#" className={`${tealLink} mt-4 inline-block text-xs`}>{t.link} →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── AUDIENCE PATHWAYS (navy) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto max-w-6xl text-white">
          <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#f0a54a]">
            <span className="h-px w-6 bg-[#f0a54a]" /> Audience Pathways
          </p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Choose the next step for your role</h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {AUDIENCE.map(([t, b]) => (
              <div key={t} className="flex flex-col rounded-lg bg-white/5 p-6 ring-1 ring-white/10">
                <h3 className={`text-lg ${serifH}`}>{t}</h3>
                <p className="mt-2 flex-1 text-[13px] leading-relaxed text-slate-300/70">{b}</p>
                <a href="#" className="mt-4 inline-block text-xs font-semibold text-[#f0a54a] hover:underline">Explore path →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA walkthrough ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className={`text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>See governed semantic structure in a controlled walkthrough</h2>
          <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">
            Evaluate concept scope, context controls, and professional boundaries with your team before committing to a pilot.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#" className={amberBtn} style={{ backgroundColor: AMBER }}>Book a Demo</a>
            <a href="#" className="rounded-md border border-black/15 px-5 py-2.5 text-sm font-semibold text-[#16233d] hover:bg-black/5 dark:border-white/25 dark:text-white dark:hover:bg-white/10">Request Pilot</a>
            <a href="#" className="px-3 py-2.5 text-sm font-semibold text-[#0d9488] hover:underline">View Governance Framework →</a>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="px-4 pb-20 sm:px-6 md:px-8">
        <div className="mx-auto max-w-3xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Direct Answers</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Frequently asked questions</h2>
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
    </main>
  );
}