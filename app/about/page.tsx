"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Plus, Minus } from "lucide-react";

const AMBER = "#e0a92e";
const NAVY  = "#0d1b2e";
const CREAM = "#f5f1eb";
const TEAL  = "#3a7d6e";

function Eyebrow({ children, center = false }: { children: React.ReactNode; center?: boolean }) {
  return (
    <p className={`mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] ${center ? "justify-center" : ""}`} style={{ color: AMBER }}>
      <span className="inline-block w-5 border-t-2" style={{ borderColor: AMBER }} />
      {children}
      {center && <span className="inline-block w-5 border-t-2" style={{ borderColor: AMBER }} />}
    </p>
  );
}
function EyebrowTeal({ children, center = false }: { children: React.ReactNode; center?: boolean }) {
  return (
    <p className={`mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] ${center ? "justify-center" : ""}`} style={{ color: TEAL }}>
      <span className="inline-block w-5 border-t-2" style={{ borderColor: TEAL }} />
      {children}
    </p>
  );
}
function AmberBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link href={href} className="inline-block rounded-md px-7 py-3.5 text-sm font-semibold text-[#0d1b2e] transition-opacity hover:opacity-90" style={{ backgroundColor: AMBER }}>{children}</Link>;
}
function GhostBtn({ href, children, dark = false }: { href: string; children: React.ReactNode; dark?: boolean }) {
  return <Link href={href} className={`inline-block rounded-md border px-7 py-3.5 text-sm font-semibold transition-colors ${dark ? "border-white/25 text-white hover:bg-white/10" : "border-gray-300 text-gray-800 hover:bg-white/60"}`}>{children}</Link>;
}

/* ── data ── */
const whoWeAre = [
  { n: "01", title: "We are source-governed", desc: "The platform is designed to use approved, versioned, permission-aware sources rather than relying on model memory alone." },
  { n: "02", title: "We are profession-aware", desc: "ZoikoLogia\u2122 recognizes that accounting work has professional consequences, regulatory boundaries, and judgment requirements." },
  { n: "03", title: "We are enterprise-oriented", desc: "The platform is designed with tenant isolation, privacy, audit evidence, provider due diligence, QA gates, and release governance." },
  { n: "04", title: "We are built for responsible AI use", desc: "Kriton\u2122 is designed to support human judgment, not replace qualified professionals." },
];
const missionPillars = [
  { title: "Improve access to accounting knowledge", desc: "Help users understand accounting concepts, standards, workflows, and professional requirements more clearly." },
  { title: "Strengthen professional decision support", desc: "Provide structured, source-backed guidance that supports professional judgment without pretending to replace it." },
  { title: "Reduce unsupported AI risk", desc: "Limit reliance on model memory, hallucinated citations, unverified sources, and uncontrolled prompt behavior." },
  { title: "Support enterprise governance", desc: "Make AI use traceable, permission-aware, privacy-safe, and auditable for organizations that require control." },
  { title: "Build confidence through evidence", desc: "Ensure material AI-supported outputs can be linked to sources, policies, risk decisions, model runs, reviewer actions, and audit records." },
];
const whyCreated = [
  { n: "01", title: "Source-backed accounting guidance", desc: "Authoritative source governance and RAG source bundles." },
  { n: "02", title: "Accounting concept structure", desc: "Accounting knowledge graph and ontology." },
  { n: "04", title: "Risk-sensitive answers", desc: "AI safety, risk classification, and escalation." },
  { n: "05", title: "Professional boundary control", desc: "Permitted behavior, limitation language, and human review routes." },
  { n: "07", title: "Audit and compliance traceability", desc: "Audit logging and evidence ledger." },
  { n: "08", title: "Provider trust", desc: "Provider due diligence controls." },
];
const whatDoes = [
  { title: "Source-backed accounting guidance", desc: "Designed to connect answers to approved source bundles, citation anchors, source versions, effective dates, and authority levels. This is the foundation of every regulated answer Kriton\u2122 produces.", dark: true },
  { title: "Accounting knowledge organization", desc: "Maps concepts, standards, jurisdictions, frameworks and workflow paths through a governed ontology.", dark: false },
  { title: "Risk-aware AI interaction", desc: "Classifies requests by mode, risk level, source state, privacy class, and professional boundary before generating regulated guidance.", dark: false },
  { title: "Audit-ready evidence", desc: "Preserves replay-ready evidence for source bundles, model runs, safety routes, and human review decisions.", dark: false },
];
const governanceDiff = [
  { n: "01", title: "Source authority before answer generation", desc: "The platform is designed to retrieve and validate eligible sources before regulated answer generation." },
  { n: "02", title: "Risk classification before response", desc: "Kriton\u2122 is designed to classify risk and professional boundaries before producing regulated guidance." },
  { n: "03", title: "Privacy before processing", desc: "Data use is controlled by purpose, data class, tenant scope, region, lawful or contractual basis, provider eligibility, and retention rule." },
  { n: "04", title: "Evaluation before promotion", desc: "Model, retrieval, and answer behavior are evaluated through thresholds, result packs, regression checks, benchmark integrity controls, and controlled release safeguards." },
];
const govFoundation = [
  { title: "Source Library Governance", desc: "Controls which sources may be used, at what authority level, under which license, in which jurisdiction, for what purpose." },
  { title: "Accounting Knowledge Graph", desc: "Structures accounting concepts, standards, frameworks, jurisdictions, learning objectives, misconceptions, and evidence requirements." },
  { title: "Retrieval and Source-Bundle Governance", desc: "Defines how approved sources are retrieved, ranked, filtered, and assembled into governed bundles." },
  { title: "AI Safety and Risk Classification", desc: "Controls risk levels, restricted content types, human review triggers, refusal patterns, and emergency controls." },
  { title: "Platform Architecture and Service Boundaries", desc: "Defines the runtime service structure, integration layers, model gateway, and operational behavior." },
  { title: "Data Governance and Schema Control", desc: "Defines the controlled data structures for sources, ontology, retrieval, safety, and tenant governance." },
];
const responsibleAI = [
  { title: "We do not treat fluency as truth", desc: "Clear language is not enough. Regulated answers require source grounding and validation." },
  { title: "We do not hide uncertainty", desc: "When source coverage is weak, context is missing, or conflicts exist, Kriton\u2122 must clarify, limit, refuse, or escalate." },
  { title: "We do not bypass professional judgment", desc: "Kriton\u2122 supports workflows and review. Final professional decisions remain with qualified users and organizations." },
  { title: "We do not ignore privacy", desc: "Sensitive data must be minimized, protected, region-aware, and processed only for authorized purposes." },
  { title: "We do not release without evidence", desc: "Evaluation, QA gates, audit events, and provider controls are part of the platform design before any production use." },
];
const privacyCards = [
  { title: "Tenant isolation", desc: "Tenant data, prompts, uploads, source bundles, audit records, caches, exports, and evaluation data are scoped and protected." },
  { title: "Prompt and source protection", desc: "Sensitive prompts, protected source content, tenant-private documents, minor data, and secrets are governed before model use." },
  { title: "Provider gating", desc: "Model providers and subprocessors require due diligence, agreement review, and regional eligibility." },
  { title: "Accessibility", desc: "User-facing surfaces are designed to meet WCAG 2.2 AA requirements." },
];
const boundaryTable = [
  { scenario: "General concept explanation", then: "Provide educational explanation; regulated concepts require source grounding even in learning contexts." },
  { scenario: "Workflow guidance with sufficient context", then: "Provide structured, source-backed guidance with explicit assumptions and limitations." },
  { scenario: "High-risk professional matter", then: "Require stronger source basis, limitation language, and human review where required." },
  { scenario: "Missing jurisdiction or facts", then: "Ask targeted clarifying questions to resolve the missing context." },
  { scenario: "Live exam or academic misconduct", then: "Refuse to complete the task and offer learning support alternatives." },
  { scenario: "Attempt to bypass controls", then: "Block the request, classify as a security incident route, and preserve forensic evidence." },
];
const sourcePills = [
  "Is the source approved?", "What authority level does it have?", "Which version applies?", "What jurisdiction does it cover?",
  "What effective date applies?", "Current, stale, superseded, withdrawn, or disputed?", "Licensed for ingestion, prompting, citation, display, export?",
  "Can it be used by a model provider?", "Can it be shown to the user?", "Can it appear in a workpaper or export?",
  "Can it be replayed later for audit purposes?",
];
const faqs = [
  { q: "What is ZoikoLogia\u2122?", a: "ZoikoLogia\u2122 is a governed AI accounting intelligence platform designed to support accounting, tax, audit, payroll, compliance, learning, and professional workflows through source-backed AI, accounting ontology, retrieval-augmented generation, risk classification, privacy controls, audit evidence, and evaluation standards." },
  { q: "What is Kriton\u2122?", a: "Kriton\u2122 is the AI advisor interface within ZoikoLogia\u2122. It operates under source governance, risk classification, and professional boundary controls." },
  { q: "Is ZoikoLogia\u2122 a generic AI chatbot?", a: "No. ZoikoLogia\u2122 is a governed intelligence platform built specifically for professional accounting work, not a general-purpose chatbot." },
  { q: "Does ZoikoLogia\u2122 replace accountants?", a: "No. ZoikoLogia\u2122 supports professional judgment. It does not replace qualified accountants, auditors, tax professionals, or required human review." },
  { q: "What makes ZoikoLogia\u2122 different from generic AI tools?", a: "Source governance, accounting ontology, risk classification, audit evidence, professional boundary controls, and enterprise-grade privacy \u2014 all built into the platform architecture." },
  { q: "How does ZoikoLogia\u2122 reduce hallucination risk?", a: "By gating retrieval through governed sources, returning controlled no-source states when coverage is insufficient, and requiring citations with every answer." },
];
const whoWeServe = [
  { n: "01", title: "Accounting Firms", desc: "Technical research, client-facing explanations, workpaper preparation, training, review workflows, and governance evidence." },
  { n: "02", title: "Tax Professionals", desc: "Research structuring, jurisdiction checks, deadline considerations, source-backed explanations, and escalation pathways." },
  { n: "03", title: "Payroll and Compliance Teams", desc: "Jurisdiction-aware payroll, filing, compliance, documentation, and controlled workflow support." },
  { n: "04", title: "Technology and AI Governance Teams", desc: "Controlled AI architecture for professional accounting use cases, including security, evaluation, audit, and operational governance." },
];

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div style={{ backgroundColor: CREAM }}>

      {/* ═══ HERO ═══ */}
      <section className="py-20" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Eyebrow center>About ZoikoLogia&trade;</Eyebrow>
          <h1 className="font-serif text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl">We Are Building Governed AI Accounting Intelligence for Professional Work.</h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-gray-600">ZoikoLogia&trade; is an AI accounting intelligence platform. Kriton&trade;, its AI advisor, helps professionals ask questions, structure workflows, and review source-backed guidance — not a generic chatbot, but a governed intelligence system built for professional-grade accounting work.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <AmberBtn href="/book-a-demo">Book a Demo</AmberBtn>
            <GhostBtn href="/platform">Explore the Platform</GhostBtn>
            <Link href="/governance" className="inline-flex items-center gap-1 px-6 py-3.5 text-sm font-semibold text-gray-800 hover:underline">View Governance Framework <ArrowRight className="h-3.5 w-3.5" /></Link>
          </div>
          {/* Hero image */}
          <img src="/images/image 1.png" alt="Professional at desk" className="mx-auto mt-12 h-80 w-full max-w-5xl rounded-2xl object-cover" />
        </div>
      </section>

      {/* ═══ WHO WE ARE ═══ */}
      <section className="py-20" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <Eyebrow>Who We Are</Eyebrow>
              <h2 className="font-serif text-3xl font-bold text-gray-900">ZoikoLogia&trade; Exists to Bring Trust, Structure, and Governance to AI-Powered Accounting Work.</h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-600">ZoikoLogia&trade; was created for a simple reason: accounting work cannot rely on unsupported AI confidence.</p>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">Accounting, audit, tax, payroll, compliance, and review workflows require controlled sources, jurisdictional awareness, professional boundaries, and clear escalation when a matter requires human review.</p>
              <Link href="/platform" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-gray-900 underline underline-offset-4">Learn How the Platform Works <ArrowRight className="h-3.5 w-3.5" /></Link>
            </div>
            <div className="divide-y divide-gray-200">
              {whoWeAre.map((w) => (
                <div key={w.n} className="flex gap-6 py-5">
                  <span className="text-lg font-light text-gray-300">{w.n}</span>
                  <div><h3 className="text-sm font-bold text-gray-900">{w.title}</h3><p className="mt-1 text-sm text-gray-600">{w.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MISSION (navy) ═══ */}
      <section className="py-20" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto max-w-7xl px-6">
          <EyebrowTeal center>Our Mission</EyebrowTeal>
          <h2 className="mx-auto max-w-3xl text-center font-serif text-3xl font-bold text-white">&ldquo;To make AI useful, trustworthy, and governed for accounting professionals.&rdquo;</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-gray-400">AI in accounting should not simply generate answers. It should retrieve approved sources, respect professional boundaries, identify risk, preserve evidence, and escalate when it should not answer definitively.</p>
          <div className="mt-14 grid gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {missionPillars.map((p) => (
              <div key={p.title} className="text-center">
                <div className="mx-auto mb-3 flex h-8 w-8 items-center justify-center rounded-full border border-teal-400/40"><span className="h-2 w-2 rounded-full" style={{ backgroundColor: TEAL }} /></div>
                <h3 className="mb-2 text-xs font-bold text-white">{p.title}</h3>
                <p className="text-xs leading-relaxed text-gray-400">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
            <img src="/images/image 2.png" alt="Mission 1" className="h-40 w-full rounded-xl object-cover" />
            <img src="/images/image 3.png" alt="Mission 2" className="h-40 w-full rounded-xl object-cover" />
            <img src="/images/image 4.png" alt="Mission 3" className="h-40 w-full rounded-xl object-cover" />
            <img src="/images/image 5.png" alt="Mission 4" className="h-40 w-full rounded-xl object-cover" />
            <img src="/images/image 6.png" alt="Mission 5" className="h-40 w-full rounded-xl object-cover" />
          </div>
        </div>
      </section>

      {/* ═══ WHY CREATED ═══ */}
      <section className="py-20" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto max-w-7xl px-6">
          <Eyebrow center>Why ZoikoLogia&trade; Was Created</Eyebrow>
          <h2 className="mx-auto max-w-3xl text-center font-serif text-3xl font-bold text-gray-900">The Accounting Profession Needs AI That Understands Governance.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-gray-600">Generic AI tools produce fluent explanations. Accounting work requires more.</p>
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div className="grid grid-cols-2 gap-x-8 gap-y-6">
              {whyCreated.map((w) => (
                <div key={w.n}><p className="mb-1 text-sm font-bold" style={{ color: AMBER }}>{w.n}</p><h3 className="mb-1 text-sm font-bold text-gray-900">{w.title}</h3><p className="text-xs text-gray-600">{w.desc}</p></div>
              ))}
            </div>
            <img src="/images/image 7.png" alt="Executive meeting" className="h-full min-h-[320px] w-full rounded-2xl object-cover" />
          </div>
        </div>
      </section>

      {/* ═══ WHAT ZOIKOLOGIA DOES ═══ */}
      <section className="py-20" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto max-w-7xl px-6">
          <Eyebrow center>What ZoikoLogia&trade; Does</Eyebrow>
          <h2 className="mx-auto max-w-3xl text-center font-serif text-3xl font-bold text-gray-900">ZoikoLogia&trade; Helps Users Work With Accounting Knowledge Through a Governed AI System.</h2>
          <div className="mt-12 grid gap-4 lg:grid-cols-[1.2fr_1fr]">
            <div className="rounded-2xl bg-[#0d1b2e] p-6 text-white"><h3 className="mb-2 text-sm font-bold">{whatDoes[0].title}</h3><p className="text-xs leading-relaxed text-gray-300">{whatDoes[0].desc}</p></div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6"><h3 className="mb-2 text-sm font-bold text-gray-900">{whatDoes[1].title}</h3><p className="text-xs leading-relaxed text-gray-600">{whatDoes[1].desc}</p></div>
          </div>
          <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_1.5fr]">
            <div className="space-y-4">
              {whatDoes.slice(2).map((w) => (
                <div key={w.title} className="rounded-2xl border border-gray-200 bg-white p-6"><h3 className="mb-2 text-sm font-bold text-gray-900">{w.title}</h3><p className="text-xs leading-relaxed text-gray-600">{w.desc}</p></div>
              ))}
            </div>
            <img src="/images/image 8.png" alt="Team discussion" className="h-full min-h-[280px] w-full rounded-2xl object-cover" />
          </div>
          <div className="mt-8 text-center"><Link href="/platform" className="text-sm font-semibold text-gray-900 underline underline-offset-4">Explore Core Capabilities <ArrowRight className="ml-1 inline h-3.5 w-3.5" /></Link></div>
        </div>
      </section>

      {/* ═══ KRITON ═══ */}
      <section className="py-20" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto max-w-7xl px-6">
          <Eyebrow center>What Kriton&trade; Does</Eyebrow>
          <h2 className="mx-auto max-w-3xl text-center font-serif text-3xl font-bold text-gray-900">Kriton&trade; Is the AI Advisor for Governed Accounting Intelligence.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-gray-600">Kriton&trade; does not operate as an unrestricted chatbot. It is governed by source authority, risk classification, and audit evidence.</p>
          <img src="/images/image 9.png" alt="Laptops in meeting" className="mx-auto mt-10 h-72 w-full max-w-5xl rounded-2xl object-cover" />
        </div>
      </section>

      {/* ═══ WHO WE SERVE ═══ */}
      <section className="py-20" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto max-w-7xl px-6">
          <EyebrowTeal center>Who We Serve</EyebrowTeal>
          <h2 className="mx-auto max-w-3xl text-center font-serif text-3xl font-bold text-gray-900">Built for the People and Organizations That Need Trustworthy Accounting Intelligence.</h2>
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div className="divide-y divide-gray-200">
              {whoWeServe.map((w) => (
                <div key={w.n} className="flex gap-6 py-5">
                  <span className="text-sm font-bold" style={{ color: AMBER }}>{w.n}</span>
                  <div><h3 className="text-sm font-bold text-gray-900">{w.title}</h3><p className="mt-1 text-xs text-gray-600">{w.desc}</p></div>
                </div>
              ))}
            </div>
            <img src="/images/image 10.png" alt="Finance team" className="h-full min-h-[300px] w-full rounded-2xl object-cover" />
          </div>
          <div className="mt-8 text-center"><Link href="/solutions" className="text-sm font-semibold text-gray-900 underline underline-offset-4">Find Your Solution <ArrowRight className="ml-1 inline h-3.5 w-3.5" /></Link></div>
        </div>
      </section>

      {/* ═══ HOW WE ARE DIFFERENT ═══ */}
      <section className="py-20" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto max-w-7xl px-6">
          <Eyebrow center>How We Are Different</Eyebrow>
          <h2 className="mx-auto max-w-3xl text-center font-serif text-3xl font-bold text-gray-900">ZoikoLogia&trade; Is Built Around Governance First.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-gray-600">Many AI products begin with model capability. ZoikoLogia&trade; begins with accounting governance.</p>
          <div className="relative mt-12 overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <div className="grid lg:grid-cols-[1fr_auto_1fr]">
              <div className="divide-y divide-gray-100 p-6">
                {governanceDiff.slice(0, 2).map((g) => (
                  <div key={g.n} className="py-5"><span className="mb-1 block text-sm text-gray-300">{g.n}</span><h3 className="mb-1 text-sm font-bold text-gray-900">{g.title}</h3><p className="text-xs text-gray-600">{g.desc}</p></div>
                ))}
              </div>
              <img src="/images/image 11.png" alt="Presenting" className="h-full min-h-[300px] w-48 object-cover lg:w-72" />
              <div className="divide-y divide-gray-100 p-6">
                {governanceDiff.slice(2).map((g) => (
                  <div key={g.n} className="py-5"><span className="mb-1 block text-sm text-gray-300">{g.n}</span><h3 className="mb-1 text-sm font-bold text-gray-900">{g.title}</h3><p className="text-xs text-gray-600">{g.desc}</p></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ GOVERNANCE FOUNDATION (navy) ═══ */}
      <section className="py-20" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto max-w-7xl px-6">
          <EyebrowTeal center>Governance Foundation</EyebrowTeal>
          <h2 className="mx-auto max-w-3xl text-center font-serif text-3xl font-bold text-white">ZoikoLogia&trade; Is Governed by a Complete Back-End Control Architecture.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-gray-400">These are design specifications that define how every component of ZoikoLogia&trade; must behave before it enters production.</p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {govFoundation.map((g) => (
              <div key={g.title} className="rounded-xl border border-white/10 bg-white/5 p-5"><h3 className="mb-2 text-sm font-semibold" style={{ color: TEAL }}>{g.title}</h3><p className="text-xs leading-relaxed text-gray-400">{g.desc}</p></div>
            ))}
          </div>
          <img src="/images/image 12.png" alt="Control room" className="mt-10 h-72 w-full rounded-2xl object-cover" />
          <div className="mt-6 text-center"><Link href="/governance" className="text-sm font-semibold" style={{ color: TEAL }}>View Governance Framework <ArrowRight className="ml-1 inline h-3.5 w-3.5" /></Link></div>
        </div>
      </section>

      {/* ═══ RESPONSIBLE AI ═══ */}
      <section className="py-20" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <Eyebrow>Responsible AI Position</Eyebrow>
              <h2 className="font-serif text-3xl font-bold text-gray-900">We Believe Accounting AI Must Be Useful Without Being Reckless.</h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-600">Kriton&trade; is not designed to impersonate a licensed professional, issue binding determinations, certify compliance, or replace human judgment where professional review is required.</p>
              <div className="mt-8 divide-y divide-gray-200">
                {responsibleAI.map((r) => (
                  <div key={r.title} className="flex gap-4 py-5">
                    <span className="mt-0.5 inline-block h-1 w-5 shrink-0 rounded-full" style={{ backgroundColor: AMBER }} />
                    <div><h3 className="text-sm font-bold text-gray-900">{r.title}</h3><p className="mt-1 text-xs text-gray-600">{r.desc}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <img src="/images/image 13.png" alt="AI concept" className="h-full min-h-[400px] w-full rounded-2xl object-cover" />
          </div>
        </div>
      </section>

      {/* ═══ PRIVACY & SECURITY ═══ */}
      <section className="py-20" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto max-w-7xl px-6">
          <Eyebrow center>Trust, Privacy, and Security</Eyebrow>
          <h2 className="mx-auto max-w-3xl text-center font-serif text-3xl font-bold text-gray-900">Privacy, Security, and Auditability Are Core Product Requirements.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-gray-600">Designed to support enterprise-grade requirements across identity, access, encryption, and regional routing.</p>
          <div className="mt-12 grid items-center gap-4 lg:grid-cols-[1fr_1.5fr_1fr]">
            <div className="space-y-4">
              {privacyCards.slice(0, 2).map((c) => (
                <div key={c.title} className="rounded-xl border border-gray-200 bg-white p-5"><h3 className="mb-1 text-sm font-bold text-gray-900">{c.title}</h3><p className="text-xs leading-relaxed text-gray-600">{c.desc}</p></div>
              ))}
            </div>
            <img src="/images/image 14.png" alt="Cyber security" className="h-72 w-full rounded-2xl object-cover" />
            <div className="space-y-4">
              {privacyCards.slice(2).map((c) => (
                <div key={c.title} className="rounded-xl border border-gray-200 bg-white p-5"><h3 className="mb-1 text-sm font-bold text-gray-900">{c.title}</h3><p className="text-xs leading-relaxed text-gray-600">{c.desc}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROFESSIONAL BOUNDARIES ═══ */}
      <section className="py-20" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto max-w-4xl px-6">
          <Eyebrow center>Our Approach to Professional Boundaries</Eyebrow>
          <h2 className="mx-auto max-w-3xl text-center font-serif text-3xl font-bold text-gray-900">Kriton&trade; Supports Professional Judgment. It Does Not Replace It.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-gray-600">Where the question requires facts, context, or qualified review that is not available, Kriton&trade; must clarify, limit, refuse, or escalate.</p>
          <div className="mt-12 divide-y divide-gray-200">
            {boundaryTable.map((b, i) => (
              <div key={b.scenario} className={`grid grid-cols-2 gap-6 py-5 ${i % 2 === 1 ? "rounded-lg" : ""}`} style={i % 2 === 1 ? { backgroundColor: "#f0ebe2" } : undefined}>
                <div className="pl-4"><span className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-gray-400">If</span><h3 className="text-sm font-bold text-gray-900">{b.scenario}</h3></div>
                <div className="pr-4"><span className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-gray-400">Then</span><p className="text-sm text-gray-600">{b.then}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SOURCE BASIS (navy) ═══ */}
      <section className="py-20" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <EyebrowTeal center>Our Approach to Sources</EyebrowTeal>
          <h2 className="font-serif text-3xl font-bold text-white">The Source Basis Matters.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-400">Not every source can be used the same way. The platform is designed to answer, for every source:</p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {sourcePills.map((p) => (<span key={p} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-gray-300">{p}</span>))}
          </div>
          <Link href="/source-governance" className="mt-8 inline-flex items-center gap-1 text-sm font-semibold" style={{ color: TEAL }}>Explore Source Governance <ArrowRight className="h-3.5 w-3.5" /></Link>
          <img src="/images/image 15.png" alt="Professionals" className="mx-auto mt-10 h-64 w-full max-w-4xl rounded-2xl object-cover" />
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-20" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto max-w-3xl px-6">
          <Eyebrow center>Frequently Asked Questions</Eyebrow>
          <h2 className="mb-10 text-center font-serif text-3xl font-bold text-gray-900">About ZoikoLogia&trade; and Kriton&trade;</h2>
          <div className="divide-y divide-gray-200">
            {faqs.map((f, i) => (
              <div key={f.q}>
                <button type="button" onClick={() => setOpenFaq(openFaq === i ? null : i)} className="flex w-full items-center justify-between py-5 text-left">
                  <span className="text-sm font-bold text-gray-900">{f.q}</span>
                  {openFaq === i ? <Minus className="h-4 w-4 shrink-0 text-gray-400" /> : <Plus className="h-4 w-4 shrink-0 text-gray-400" />}
                </button>
                {openFaq === i && <p className="pb-5 text-sm leading-relaxed text-gray-600">{f.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA (navy) ═══ */}
      <section className="py-20" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <EyebrowTeal center>Ready to Bring Governed AI into Accounting Work?</EyebrowTeal>
          <h2 className="font-serif text-3xl font-bold text-white">Use AI Accounting Intelligence With Source Authority, Audit Evidence, and Professional Controls.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-400">ZoikoLogia&trade; with Kriton&trade; helps accounting and finance teams explore source-backed accounting, tax, audit, payroll, compliance, reporting, and learning workflows with governance built into the platform design.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <AmberBtn href="/book-a-demo">Book a Demo</AmberBtn>
            <GhostBtn href="/request-pilot" dark>Request Pilot</GhostBtn>
            <Link href="/governance" className="px-6 py-3.5 text-sm text-gray-400 hover:text-white">View Governance Framework</Link>
            <Link href="/privacy" className="px-6 py-3.5 text-sm text-gray-400 hover:text-white">Visit Privacy &amp; Security</Link>
          </div>
        </div>
      </section>

    </div>
  );
}