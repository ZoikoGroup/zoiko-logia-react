"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plus, Minus, ArrowRight } from "lucide-react";

/* ── palette ── */
const AMBER = "#e0a92e";
const NAVY  = "#0d1b2e";
const CREAM = "#f5f1eb";
const TEAL  = "#3a7d6e";

/* ── helpers ── */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em]" style={{ color: TEAL }}>{children}</p>;
}
function AmberBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link href={href} className="inline-block rounded-md px-7 py-3.5 text-sm font-semibold text-[#0d1b2e] transition-opacity hover:opacity-90" style={{ backgroundColor: AMBER }}>{children}</Link>;
}
function GhostBtn({ href, children, dark = false }: { href: string; children: React.ReactNode; dark?: boolean }) {
  return <Link href={href} className={`inline-block rounded-md border px-7 py-3.5 text-sm font-semibold transition-colors ${dark ? "border-white/25 text-white hover:bg-white/10" : "border-gray-300 text-gray-800 hover:bg-white/60"}`}>{children}</Link>;
}

/**
 * Image slot — drop your filename into the src prop to show the image.
 * Leave src="" to show the dashed placeholder box.
 *
 * Example: src="/images/hero-meeting.png"
 */
function Img({ src, alt = "", className = "", label = "Image" }: { src?: string; alt?: string; className?: string; label?: string }) {
  if (src && src.length > 0) {
    return (
      <img src={src} alt={alt || label} className={`object-cover ${className}`} />
    );
  }
  return (
    <div className={`flex items-center justify-center border-2 border-dashed border-gray-300 bg-gray-100 ${className}`}>
      <span className="text-[10px] font-medium uppercase tracking-widest text-gray-400">{label}</span>
    </div>
  );
}

/* ── data ── */

const capabilities = [
  { title: "Source admission",       desc: "Sources enter approved collections through defined ownership and review.",                          link: "Governance Framework" },
  { title: "Context control",        desc: "Jurisdiction, framework, effective date, entity, and task can affect source use.",                  link: "Accounting Ontology" },
  { title: "Evidence visibility",    desc: "Users can inspect references, source status, context, and reasons used.",                           link: "Audit Evidence Ledger" },
  { title: "Conflict handling",      desc: "The experience can surface disagreement, missing context, or the need to escalate.",                link: "Platform Limits & Escalation" },
  { title: "Human decision rights",  desc: "Qualified people review consequential work and remain responsible for decisions.",                  link: "Professional Boundaries" },
];

const stages = [
  { n: "01", title: "Discover / propose",       desc: "Candidate source, owner, coverage, sensitivity." },
  { n: "02", title: "Assess rights & scope",    desc: "Access basis, permitted use, retention." },
  { n: "03", title: "Classify context",         desc: "Jurisdiction, framework, topic, entity." },
  { n: "04", title: "Approve / restrict",       desc: "Approve, quarantine, reject, escalate." },
  { n: "05", title: "Package / index",          desc: "Approved bundle, lineage, version." },
  { n: "06", title: "Retrieve under controls",  desc: "Identity, task, context, policy limits." },
  { n: "07", title: "Show evidence",            desc: "Reference, status, reason, limitations." },
  { n: "08", title: "Review / decide",          desc: "Inspect, revise, reject, escalate." },
  { n: "09", title: "Monitor / retire",         desc: "Detect change, index, withdraw." },
];

const admissionFields = [
  { label: "Source owner",           value: "Named organizational owner accountable for use, review, and retirement." },
  { label: "Intended use",           value: "Permitted workflow, audience, task, or learning purpose." },
  { label: "Authority type",         value: "Described contextually, never as an absolute rank." },
  { label: "Applicability context",  value: "Jurisdiction, framework, topic, entity, effective period." },
  { label: "Access / rights",        value: "Who may retrieve, view, quote, export, or share." },
];

const contextCards = [
  { title: "Jurisdiction",   desc: "Filter or rank permitted sources by declared jurisdiction and cross-border rules." },
  { title: "Task intent",    desc: "Select appropriate source bundle, answer mode, and review requirement." },
  { title: "Entity type",    desc: "Apply approved entity and policy context without inventing facts." },
  { title: "Materiality",    desc: "Increase evidence, confirmation, or escalation requirements." },
];

const sourceCards = [
  { title: "Approved standard / guidance", meta: "IFRS 15 \u00b7 effective period visible \u00b7 relevant section noted.", reason: "Reason used: Defines performance obligations for bundled goods and services.", badge: "Approved",     badgeColor: "#166534", badgeBg: "#dcfce7" },
  { title: "Organization accounting policy", meta: "Fictional policy version referenced for comparison.", reason: "Reason used: Shows how internal policy relates to external guidance.", badge: "Conditional",  badgeColor: "#92620a", badgeBg: "#fef9c3" },
  { title: "Approved learning commentary",  meta: "Clearly labeled as explanatory, not authority.", reason: "Reason used: Provides plain-language framing of the concept.", badge: "Explanatory", badgeColor: "#166534", badgeBg: "#dcfce7" },
];

const noSourceColumns = [
  { title: "Context summary",  desc: "Jurisdiction, framework, period, entity, task, and any missing fact are restated before comparison." },
  { title: "Why it matters",   desc: "Plain-language explanation of the incompatible assumptions or scopes\u2014never blended into one confident answer." },
  { title: "Safe actions",     desc: "Clarify context, compare sources, request more evidence, route to qualified review, or reject output." },
];

const decisionCards = [
  { title: "Context confirmation",   desc: "Confirm, correct, or withhold missing context." },
  { title: "Evidence inspection",    desc: "Evaluate relevance, authority, and completeness." },
  { title: "Draft revision",         desc: "Revise reasoning; never accept fluent output as final." },
  { title: "Approval for use",       desc: "Qualified person decides whether output may inform work." },
];

const realisticTasks = [
  { title: "Accounting policy exploration",  line1: "Fictional entity; named framework and period; learning mode.", line2: "Uses approved standards and fictional policy; shows scope, version, and conflict.", route: "No accounting conclusion \u2014 route to Accounting Firms." },
  { title: "Audit planning support",         line1: "Synthetic engagement type; no client records.", line2: "Separates planning support from audit evidence and opinion.", route: "No audit opinion \u2014 route to Audit & Assurance Teams." },
  { title: "Payroll / compliance inquiry",    line1: "Fictional workforce context and period; no employee data.", line2: "Shows jurisdiction, source status, and escalation for incomplete facts.", route: "No filing or legal determination \u2014 route to Payroll & Compliance." },
  { title: "Learning and practice",           line1: "Clearly labeled educational scenario.", line2: "Encourages evidence inspection, comparison, and independent reasoning.", route: "Not professional advice \u2014 route to Learning & Practice." },
];

const audienceCards = [
  { title: "Accounting firm partners",   desc: "Source-backed workflows, review consistency, and defensibility.", link: "Book a Demo" },
  { title: "CTO & architecture teams",   desc: "Retrieval boundaries, provenance, and integration APIs.",          link: "Enterprise Integrations" },
  { title: "AI governance & risk",        desc: "Admission gates, evaluation, and release governance.",              link: "Governance Framework" },
  { title: "Existing users & admins",     desc: "Status vocabulary, evidence actions, and support routes.",          link: "Help Center" },
];

const faqs = [
  "What is source-governed intelligence?",
  "Is source-governed intelligence the same as citations?",
  "Does ZoikoLogia\u2122 search the open web?",
  "How does ZoikoLogia\u2122 decide which source is authoritative?",
  "Can users see why a source was used?",
  "What happens when sources disagree?",
];

/* ═══════════════════════════════════════════════════ PAGE ═══════════════════════════════════════════════════ */
export default function SourceGovernedIntelligencePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ backgroundColor: CREAM }}>

      {/* ═══ HERO ═══ */}
      <section className="bg-[#0d1b2e]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 pb-10 pt-16 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em]" style={{ color: AMBER }}>
              Platform Capability &middot; Source-Governed Intelligence
            </p>
            <h1 className="font-serif text-4xl font-extrabold leading-[1.15] text-white sm:text-[2.8rem]">
              Know which sources informed the answer—and why they were allowed to.
            </h1>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-gray-300">
              ZoikoLogia&trade; governs source admission, context, retrieval, evidence, review,
              and change across accounting intelligence workflows. Kriton&trade; can show the
              sources and controls that shaped an answer while preserving uncertainty,
              professional boundaries, and human decision rights.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <AmberBtn href="/book-a-demo">Book a Demo</AmberBtn>
              <GhostBtn href="/request-pilot" dark>Request Pilot</GhostBtn>
            </div>
            <Link href="/governance" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-white underline underline-offset-4 hover:no-underline">
              View Governance Framework <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <div className="mt-8 border-t border-white/10 pt-5">
              <p className="text-sm leading-relaxed text-gray-400">
                Supports qualified professional judgment. Does not replace required review,
                filings, opinions, determinations, or statutory obligations.
              </p>
              <p className="mt-3 text-sm text-gray-500">
                Already using ZoikoLogia&trade;?{" "}
                <Link href="/login" className="text-gray-300 underline">Sign in</Link> or visit the{" "}
                <Link href="/help" className="text-gray-300 underline">Help Center</Link>.
              </p>
            </div>
          </div>
          {/* Hero image */}
          <Img src="/images/image 16.png" className="h-[420px] w-full rounded-2xl" label="Hero — professionals in meeting" />
        </div>
      </section>

      {/* ═══ 5 CAPABILITIES ═══ */}
      <section className="py-16" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {capabilities.map((c) => (
              <div key={c.title}>
                <div className="mb-4 h-[3px] w-8 rounded-full" style={{ backgroundColor: TEAL }} />
                <h3 className="mb-2 text-sm font-bold text-gray-900">{c.title}</h3>
                <p className="mb-3 text-sm leading-relaxed text-gray-600">{c.desc}</p>
                <Link href="/platform" className="text-sm font-semibold" style={{ color: TEAL }}>
                  {c.link} <span className="ml-0.5">&rarr;</span>
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <Img src="/images/image 17.png" className="h-64 w-full rounded-2xl" label="Image — students collaborating" />
            <Img src="/images/image 18 (1).png" className="h-64 w-full rounded-2xl" label="Image — team at table" />
          </div>
        </div>
      </section>

      {/* ═══ THE GAP ═══ */}
      <section className="border-t-4 py-16" style={{ backgroundColor: CREAM, borderColor: TEAL }}>
        <div className="mx-auto max-w-7xl px-6">
          <Eyebrow>The Gap</Eyebrow>
          <h2 className="max-w-2xl font-serif text-3xl font-bold text-gray-900">Why ordinary citations are not enough</h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-600">
            A link or document name can appear without explaining applicability, status, or why it was
            used. Source governance treats every stage—before, during, and after retrieval—as a
            controllable decision.
          </p>
          <Img src="/images/image 19.png" className="mt-10 h-72 w-full rounded-2xl" label="Image — meeting in modern office" />
          <p className="mt-6 text-xs leading-relaxed text-gray-500">
            Describes design and governance principles only. Does not name or rank competitors, claim superior accuracy, or publish
            performance percentages without approved evidence and Legal/Compliance review.
          </p>
        </div>
      </section>

      {/* ═══ NINE STAGES ═══ */}
      <section className="border-t-4 py-16" style={{ backgroundColor: CREAM, borderColor: TEAL }}>
        <div className="mx-auto max-w-7xl px-6">
          <Eyebrow>Operating Model</Eyebrow>
          <h2 className="max-w-2xl font-serif text-3xl font-bold text-gray-900">Nine stages, from candidate source to retirement</h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-600">
            A source begins as a governed candidate—not automatically usable content. Governance continues after deployment.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-3 sm:grid-cols-5 lg:grid-cols-9">
            {stages.map((s) => (
              <div key={s.n} className="rounded-lg border border-gray-200 p-3" style={{ backgroundColor: "#f0ebe2" }}>
                <p className="mb-1 text-lg font-bold" style={{ color: AMBER }}>{s.n}</p>
                <p className="mb-1 text-xs font-bold text-gray-900">{s.title}</p>
                <p className="text-[11px] leading-snug text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
            <Img src="/images/image 20.png" className="h-64 w-full rounded-2xl" label="Image — business meeting" />
            <Img src="/images/image 21 (1).png" className="h-64 w-full rounded-2xl" label="Image — team reviewing docs" />
          </div>
        </div>
      </section>

      {/* ═══ ADMISSION & OWNERSHIP ═══ */}
      <section className="border-t-4 py-16" style={{ backgroundColor: CREAM, borderColor: TEAL }}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <Eyebrow>Admission &amp; Ownership</Eyebrow>
              <h2 className="font-serif text-3xl font-bold text-gray-900">Who approves a source, and on what basis</h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                Every candidate source is assessed against ownership, rights, intended use,
                applicability context, and sensitivity before it may inform an answer.
              </p>
              <div className="mt-8 divide-y divide-gray-200">
                {admissionFields.map((f) => (
                  <div key={f.label} className="flex gap-6 py-4">
                    <span className="w-40 shrink-0 text-sm font-bold text-gray-900">{f.label}</span>
                    <span className="text-sm text-gray-600">{f.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <Img src="/images/image 22.png" className="h-full min-h-[320px] w-full rounded-2xl" label="Image — diverse team collaborating" />
          </div>
        </div>
      </section>

      {/* ═══ CONTEXT CONTROLS (navy) ═══ */}
      <section className="py-16" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto max-w-7xl px-6">
          <Eyebrow>Context Controls</Eyebrow>
          <h2 className="max-w-2xl font-serif text-3xl font-bold text-white">Jurisdiction, framework, date, and role change what applies</h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-400">
            Context helps prevent an otherwise relevant source from being used in the wrong situation.
            The platform never infers jurisdiction from location alone.
          </p>
          <div className="mt-10 grid items-center gap-4 lg:grid-cols-[1fr_1.5fr_1fr]">
            <div className="space-y-4">
              {contextCards.slice(0, 2).map((c) => (
                <div key={c.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <h3 className="mb-1 text-sm font-bold text-white">{c.title}</h3>
                  <p className="text-xs leading-relaxed text-gray-400">{c.desc}</p>
                </div>
              ))}
            </div>
            <Img src="/images/image 23.png" className="h-72 w-full rounded-2xl" label="Image — gavel / legal" />
            <div className="space-y-4">
              {contextCards.slice(2).map((c) => (
                <div key={c.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <h3 className="mb-1 text-sm font-bold text-white">{c.title}</h3>
                  <p className="text-xs leading-relaxed text-gray-400">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ EVIDENCE DEMONSTRATION ═══ */}
      <section className="py-16" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto max-w-7xl px-6">
          <Eyebrow>Evidence Demonstration &middot; Synthetic Data</Eyebrow>
          <h2 className="max-w-2xl font-serif text-3xl font-bold text-gray-900">Can I see why a source informed an answer?</h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-600">
            All identifiers, figures, and text below are fictional and used only to illustrate the evidence
            model—no client data appears on this page.
          </p>
          <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <div className="grid lg:grid-cols-2">
              <Img src="/images/image 24.png" className="h-full min-h-[300px] w-full" label="Image — team reviewing financials" />
              <div className="p-6">
                <p className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-400">Source Cards</p>
                <div className="space-y-4">
                  {sourceCards.map((s) => (
                    <div key={s.title} className="rounded-lg border border-gray-200 p-4">
                      <div className="mb-1 flex items-center justify-between">
                        <h3 className="text-sm font-bold text-gray-900">{s.title}</h3>
                        <span className="rounded-full px-2 py-0.5 text-[10px] font-semibold" style={{ backgroundColor: s.badgeBg, color: s.badgeColor }}>{s.badge}</span>
                      </div>
                      <p className="text-xs text-gray-500">{s.meta}</p>
                      <p className="mt-1 text-xs text-gray-600">{s.reason}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3">
                  <p className="text-xs text-gray-700">
                    <span className="font-semibold" style={{ color: AMBER }}>Limitation:</span> sources use different scopes; effective date requires confirmation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ NO SOURCE STATE ═══ */}
      <section className="py-16" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white p-8">
            <p className="mb-6 font-serif text-xl font-bold text-gray-900">
              &ldquo;The available sources do not support one unqualified answer.&rdquo;
            </p>
            <div className="grid gap-8 sm:grid-cols-3">
              {noSourceColumns.map((c) => (
                <div key={c.title}>
                  <h3 className="mb-2 text-sm font-bold" style={{ color: TEAL }}>{c.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ DECISION RIGHTS ═══ */}
      <section className="py-16" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto max-w-7xl px-6">
          <Eyebrow>Decision Rights</Eyebrow>
          <h2 className="max-w-2xl font-serif text-3xl font-bold text-gray-900">Human review remains the final decision</h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-600">
            ZoikoLogia&trade; with Kriton&trade; supports professional judgment through controlled source use
            and evidence visibility. It does not replace qualified accountants, auditors, tax professionals,
            compliance officers, legal counsel, statutory obligations, audit opinions, tax determinations,
            filings, or required human review.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {decisionCards.map((c) => (
              <div key={c.title} className="rounded-lg border border-gray-200 p-5" style={{ backgroundColor: "#f0ebe2" }}>
                <h3 className="mb-2 text-sm font-bold text-gray-900">{c.title}</h3>
                <p className="text-xs leading-relaxed text-gray-600">{c.desc}</p>
              </div>
            ))}
          </div>
          <Img src="/images/image 25.png" className="mt-10 h-72 w-full rounded-2xl" label="Image — professional presenting chart" />
        </div>
      </section>

      {/* ═══ REALISTIC TASKS ═══ */}
      <section className="border-t-4 py-16" style={{ backgroundColor: CREAM, borderColor: TEAL }}>
        <div className="mx-auto max-w-7xl px-6">
          <Eyebrow>Synthetic &middot; Non-Advisory</Eyebrow>
          <h2 className="max-w-2xl font-serif text-3xl font-bold text-gray-900">How it operates in realistic professional tasks</h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-600">
            Every scenario uses fictional entities, periods, and figures. None is a professional conclusion
            suitable for filing, opinion, or submission.
          </p>
          <div className="mt-10 grid items-center gap-4 lg:grid-cols-[1fr_1.3fr_1fr]">
            <div className="space-y-4">
              {realisticTasks.slice(0, 2).map((t) => (
                <div key={t.title} className="rounded-xl border border-gray-200 bg-white p-5">
                  <h3 className="mb-1 text-sm font-bold text-gray-900">{t.title}</h3>
                  <p className="text-xs text-gray-500">{t.line1}</p>
                  <p className="mt-1 text-xs text-gray-600">{t.line2}</p>
                  <div className="mt-3 border-t border-gray-100 pt-2">
                    <p className="text-xs font-semibold" style={{ color: AMBER }}>{t.route}</p>
                  </div>
                </div>
              ))}
            </div>
            <Img src="/images/image 26.png" className="h-80 w-full rounded-2xl" label="Image — professional presenting" />
            <div className="space-y-4">
              {realisticTasks.slice(2).map((t) => (
                <div key={t.title} className="rounded-xl border border-gray-200 bg-white p-5">
                  <h3 className="mb-1 text-sm font-bold text-gray-900">{t.title}</h3>
                  <p className="text-xs text-gray-500">{t.line1}</p>
                  <p className="mt-1 text-xs text-gray-600">{t.line2}</p>
                  <div className="mt-3 border-t border-gray-100 pt-2">
                    <p className="text-xs font-semibold" style={{ color: AMBER }}>{t.route}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ AUDIENCE PATHWAYS (navy) ═══ */}
      <section className="py-16" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto max-w-7xl px-6">
          <Eyebrow>Audience Pathways</Eyebrow>
          <h2 className="mb-10 font-serif text-3xl font-bold text-white">Choose the next step for your role</h2>
          <div className="grid items-center gap-4 lg:grid-cols-[1fr_1.5fr_1fr]">
            <div className="space-y-4">
              {audienceCards.slice(0, 2).map((c) => (
                <div key={c.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <h3 className="mb-1 text-sm font-bold text-white">{c.title}</h3>
                  <p className="mb-3 text-xs leading-relaxed text-gray-400">{c.desc}</p>
                  <Link href="/" className="text-xs font-semibold" style={{ color: AMBER }}>{c.link} &rarr;</Link>
                </div>
              ))}
            </div>
            <Img src="/images/image 27.png" className="h-80 w-full rounded-2xl" label="Image — two professionals talking" />
            <div className="space-y-4">
              {audienceCards.slice(2).map((c) => (
                <div key={c.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <h3 className="mb-1 text-sm font-bold text-white">{c.title}</h3>
                  <p className="mb-3 text-xs leading-relaxed text-gray-400">{c.desc}</p>
                  <Link href="/" className="text-xs font-semibold" style={{ color: AMBER }}>{c.link} &rarr;</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-16" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto max-w-3xl px-6">
          <Eyebrow>Direct Answers</Eyebrow>
          <h2 className="mb-10 font-serif text-3xl font-bold text-gray-900">Frequently asked questions</h2>
          <div className="divide-y divide-gray-200">
            {faqs.map((q, i) => (
              <div key={q}>
                <button type="button" onClick={() => setOpenFaq(openFaq === i ? null : i)} className="flex w-full items-center justify-between py-5 text-left">
                  <span className="text-sm font-bold text-gray-900">{q}</span>
                  {openFaq === i ? <Minus className="h-4 w-4 shrink-0" style={{ color: TEAL }} /> : <Plus className="h-4 w-4 shrink-0" style={{ color: TEAL }} />}
                </button>
                {openFaq === i && <p className="pb-5 text-sm leading-relaxed text-gray-600">[Answer placeholder — replace with approved copy.]</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}