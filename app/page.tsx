"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight, Check, ShieldCheck, FileText, Scale, Lock, GitBranch,
  BookOpen, Network, Database, ClipboardCheck, Gauge, Building2,
  Calculator, Users, GraduationCap, Plus, Minus,
} from "lucide-react";

const AMBER = "#e0a92e";
const NAVY = "#0d1b2e";

// ── small helpers ──
function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return <p className="mb-3 text-center text-xs font-semibold uppercase tracking-widest" style={{ color: AMBER }}>{children}</p>;
}
function AmberBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link href={href} className="inline-block rounded-md px-6 py-3 text-sm font-semibold text-[#0d1b2e] transition-opacity hover:opacity-90" style={{ backgroundColor: AMBER }}>{children}</Link>;
}
function GhostBtn({ href, children, dark = false }: { href: string; children: React.ReactNode; dark?: boolean }) {
  return <Link href={href} className={`inline-block rounded-md border px-6 py-3 text-sm font-semibold transition-colors ${dark ? "border-white/25 text-white hover:bg-white/10" : "border-gray-300 text-gray-800 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-100 dark:hover:bg-gray-800"}`}>{children}</Link>;
}

// ── data ──
const personas = ["Student / Career Explorer", "Junior Accountant", "Business Owner", "Operations Leader", "Finance Manager", "Tax Director", "Audit Partner", "CFO"];

const engineNodes = [
  { icon: BookOpen, title: "Source Library", desc: "Authoritative, curated, and continuously updated sources into standards and rulings." },
  { icon: Scale, title: "Jurisdiction Engine", desc: "Rules by region, mapped so each response respects the correct jurisdiction." },
  { icon: Lock, title: "Privacy Controls", desc: "Data-minimising controls governing what leaves the platform." },
  { icon: GitBranch, title: "Risk Classification", desc: "Every request classified before retrieval and recommendation." },
  { icon: ClipboardCheck, title: "Evaluation Framework", desc: "Quality, accuracy, and safety scored with confidence and evidence." },
];

const platformLayer = ["Authoritative Source Library", "Accounting Knowledge Graph", "RAG Source Bundle Engine", "Risk Classification Service", "Audit Evidence Ledger", "Privacy & Security Controls", "Provider Due Diligence Register", "Evaluation & QA Framework", "Event Catalog"];
const kritonLayer = ["Professional Q&A", "Learning Content", "Workflow Support", "Review Assistance", "Source Citations", "Human Escalation", "Limitation Language", "Evidence Capture"];

const systems = [
  { tag: "SYS 01", icon: BookOpen, title: "Authoritative Source Library", desc: "Governed sourcing, versioned, and traceable to the standard behind every answer.", link: "Explore Source Governance" },
  { tag: "SYS 02", icon: Network, title: "Accounting Knowledge Graph", desc: "Concepts, relationships, frameworks, risk classifications, and jurisdictions linked.", link: "Map Knowledge Layer" },
  { tag: "SYS 03", icon: Database, title: "Retrieval Augmented Generation", desc: "Retrieves governed source evidence before generation and handles no source-state cleanly.", link: "Learn About RAG" },
  { tag: "SYS 04", icon: FileText, title: "Audit Logging & Evidence Ledger", desc: "Captures immutable, replay-ready evidence for decisions, model runs, and reviews.", link: "Review Audit Evidence" },
  { tag: "SYS 05", icon: Lock, title: "Privacy & Data Protection", desc: "Enforces tenant isolation, regional routing, redaction, and PII accessibility.", link: "Visit Trust Center" },
  { tag: "SYS 06", icon: Gauge, title: "LLM Evaluation & Benchmarking", desc: "Tests source grounding, hallucination resistance, refusal behaviour, and answer quality.", link: "See Evaluation Standards" },
  { tag: "SYS 07", icon: ShieldCheck, title: "Provider Due Diligence", desc: "Contract-aware model providers, regions, and retention policies approved for production use.", link: "Review Provider Controls" },
  { tag: "SYS 08", icon: ClipboardCheck, title: "Event Catalog", desc: "Structured record of source, safety, privacy, and workflow events with approval reviews.", link: "Explore Event Structure" },
  { tag: "SYS 09", icon: Scale, title: "Jurisdiction & QA Framework", desc: "Region-aware controls with quality assurance gates before any answer is released.", link: "See QA Gates" },
];

const pipeline = ["Query received", "Concepts resolved", "Retrieval scope planned", "Candidates retrieved", "Source bundle assembled", "Risk classified", "Content packaged", "Answer drafted", "Evidence recorded", "Human review locked"];

const pillars = [
  { icon: BookOpen, title: "Source Authority", desc: "Approved sources, version control, traceable citations, and limitation controls." },
  { icon: GitBranch, title: "Risk Governance", desc: "Low, medium, high, and restricted classifications with policy enforcement before answers." },
  { icon: Lock, title: "Privacy & Security", desc: "Tenant isolation, encryption, regional routing, DPA workflows, and SOC-2 accessibility." },
  { icon: FileText, title: "Audit Evidence", desc: "Immutable, replay-ready records for status, model version, and evidence linkage." },
  { icon: ShieldCheck, title: "Provider Control", desc: "Contract-aware provider governance and approval before production routing." },
  { icon: ClipboardCheck, title: "QA Release Gates", desc: "Threshold-based release approval, regression detection, and every release logged." },
];

const teams = [
  { icon: Building2, title: "Accounting Firms", desc: "Support answers with citations, review queues, and evidence for client-facing work." },
  { icon: Users, title: "Enterprise Finance Teams", desc: "Improve consistency across an escalating policy, reporting workflows, and internal controls." },
  { icon: Calculator, title: "Tax Professionals", desc: "Structure tax research, jurisdiction checks, deadline workflows, and source citations." },
  { icon: ClipboardCheck, title: "Audit Teams", desc: "Support audit planning, evidence requirements, workpapers, and reviewer escalation." },
  { icon: FileText, title: "Payroll & Compliance", desc: "Track filing, documentation, and controlled record grounding with audit evidence." },
  { icon: GraduationCap, title: "Accounting Education", desc: "Deliver grounded learning support, topic maps, and academic integrity safeguards." },
];

const faqs = [
  { q: "Is ZoikoLogia a chatbot?", a: "No. ZoikoLogia is a governed accounting-intelligence system where Kriton™ operates as its judgment interface. The platform includes source governance, accounting knowledge, RAG, safety controls, audit logging, and provider due diligence underneath every response." },
  { q: "How does ZoikoLogia reduce hallucination risk?", a: "Retrieval is gated by governed sources. If no approved source supports an answer, the system returns a controlled no-source state rather than guessing, and every answer carries citations and confidence." },
  { q: "Does ZoikoLogia handle privacy?", a: "Yes — tenant isolation, encryption, regional routing, redaction, and DPA workflows are enforced by the platform, with a trust center documenting controls." },
  { q: "Can ZoikoLogia be used by enterprises?", a: "Yes. Provider due diligence, audit evidence ledgers, QA release gates, and jurisdiction controls are built for enterprise procurement and compliance review." },
];

export default function Page() {
  const [tab, setTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const workflowTabs = ["Learning Mode", "Workflow Mode", "Review Mode", "Admin Mode"];

  return (
    <div className="bg-white dark:bg-gray-900">

      {/* ── Hero ── */}
      <section className="bg-[#0d1b2e]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">Governed · Source-backed · Auditable</p>
            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              An accounting intelligence,<br /><span style={{ color: AMBER }}>governed by design.</span>
            </h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-gray-300">
              Kriton™ helps accounting professionals work through tax, audit, payroll, and compliance questions —
              grounded in real sources, not model memory.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <AmberBtn href="/book-a-demo">Book a Demo</AmberBtn>
              <GhostBtn href="/kriton" dark>See Kriton™ in action <ArrowRight className="ml-1 inline h-4 w-4" /></GhostBtn>
            </div>
          </div>

          {/* Hero image + floating card */}
          <div className="relative">
            <div className="flex h-72 items-center justify-center rounded-2xl border-2 border-dashed border-white/20 bg-white/5">
              <span className="text-sm text-gray-500">Hero image</span>
            </div>
            <div className="absolute -bottom-6 right-4 w-64 rounded-xl border border-white/10 bg-[#0a1626] p-4 shadow-xl">
              <p className="mb-3 text-xs font-semibold text-white">Kriton™ AI Advisor</p>
              <ul className="space-y-2">
                {["Source-backed answers", "Confidence & citations", "Human escalation", "Audit evidence"].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-gray-300"><Check className="h-3.5 w-3.5" style={{ color: AMBER }} /> {f}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Personas ── */}
      <section className="bg-gray-50 py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <SectionEyebrow>Built for practitioners</SectionEyebrow>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Accounting intelligence for the people who ask, prepare, review, govern, and value.</h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                ZoikoLogia™ with Kriton™ is built for professionals who carry judgment: business leaders who need
                financial clarity, and teams who are building accounting knowledge — all governed by the same source-backed,
                evidence-heavy controls.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[["5", "Source-backed completions"], ["9", "Governed platform systems"], ["5", "Layers of review controls"]].map(([n, l]) => (
                  <div key={l} className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
                    <div className="text-2xl font-extrabold" style={{ color: AMBER }}>{n}</div>
                    <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {personas.map((p) => (
                <div key={p} className="rounded-xl border border-gray-200 bg-white p-4 text-center dark:border-gray-700 dark:bg-gray-800">
                  <div className="mx-auto mb-3 h-16 w-16 rounded-full border-2 border-dashed border-gray-200 dark:border-gray-700" />
                  <p className="text-xs font-semibold text-gray-800 dark:text-gray-100">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Engine ── */}
      <section className="bg-white py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6">
          <SectionEyebrow>Not guesswork</SectionEyebrow>
          <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 dark:text-white">Accounting AI cannot be built on guesswork.</h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-sm text-gray-600 dark:text-gray-300">
            Professional answers require more than fluent language. They require source authority, jurisdiction accuracy,
            professional boundaries, and clear escalation when a system shouldn't answer definitively.
          </p>
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
            <div className="space-y-4">
              {engineNodes.slice(0, 2).map((n) => <EngineCard key={n.title} {...n} />)}
            </div>
            <div className="mx-auto flex h-32 w-32 flex-col items-center justify-center rounded-full border-2 text-center" style={{ borderColor: AMBER }}>
              <span className="px-3 text-xs font-bold text-gray-900 dark:text-white">Governed Intelligence Engine</span>
            </div>
            <div className="space-y-4">
              {engineNodes.slice(2).map((n) => <EngineCard key={n.title} {...n} />)}
            </div>
          </div>
        </div>
      </section>

      {/* ── Two layers ── */}
      <section className="bg-[#0d1b2e] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-2 text-center text-3xl font-bold text-white">
            ZoikoLogia™ is the intelligence system. <span style={{ color: AMBER }}>Kriton™ is the judgment interface.</span>
          </h2>
          <p className="mb-12 text-center text-sm text-gray-400">A governed intelligence layer powers the advisor professionals rely on.</p>
          <div className="grid gap-6 lg:grid-cols-2">
            <LayerCard title="ZoikoLogia™ Platform Layer" items={platformLayer} />
            <LayerCard title="Kriton™ AI Advisor Layer" items={kritonLayer} />
          </div>
        </div>
      </section>

      {/* ── Nine systems ── */}
      <section className="bg-gray-50 py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-2 text-center text-3xl font-bold text-gray-900 dark:text-white">Nine systems. One governed intelligence layer.</h2>
          <p className="mb-12 text-center text-sm text-gray-600 dark:text-gray-300">Every capability below operates as a control point, not a feature checkbox — each one gates what Kriton™ is allowed to say, cite, or escalate.</p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {systems.map((s) => (
              <div key={s.tag} className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <div className="mb-3 flex items-center justify-between">
                  <s.icon className="h-6 w-6" style={{ color: AMBER }} />
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">{s.tag}</span>
                </div>
                <h3 className="mb-2 text-base font-bold text-gray-900 dark:text-white">{s.title}</h3>
                <p className="mb-4 flex-1 text-sm text-gray-600 dark:text-gray-300">{s.desc}</p>
                <Link href="/platform" className="inline-flex items-center gap-1 text-sm font-semibold" style={{ color: AMBER }}>{s.link} <ArrowRight className="h-4 w-4" /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Paper trail ── */}
      <section className="bg-white py-20 dark:bg-gray-900">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2">
          <div>
            <SectionEyebrow>Auditable by default</SectionEyebrow>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Every answer arrives with its own paper trail.</h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              Reviewers don't have to take Kriton™'s word for it. Every response opens into the source bundle, the risk
              classification, the jurisdiction context, and the human-review state behind it.
            </p>
            <ul className="mt-6 space-y-3">
              {["One click from any answer to its full audit trail", "Reviewer identity, decision, and timestamp on every row", "Replay-ready evidence for every logged item"].map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-200"><Check className="mt-0.5 h-4 w-4" style={{ color: AMBER }} /> {t}</li>
              ))}
            </ul>
            <div className="mt-8"><GhostBtn href="/architecture">View Audit Framework</GhostBtn></div>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-800">
            <p className="mb-4 text-sm font-semibold text-gray-800 dark:text-white">Audit &amp; Review Queue</p>
            <div className="space-y-3">
              {[["Revenue recognition — multi-element contract", "Needs review"], ["Payroll jurisdiction check — multi-state remote staff", "Approved"], ["Lease classification review — sale-and-leaseback", "Approved"], ["Audit evidence request — Q3 reconciliations", "Escalated"]].map(([t, st]) => (
                <div key={t} className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3 dark:border-gray-700 dark:bg-gray-900">
                  <span className="pr-3 text-xs text-gray-700 dark:text-gray-200">{t}</span>
                  <span className="shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold" style={{ backgroundColor: st === "Approved" ? "#dcfce7" : st === "Escalated" ? "#fee2e2" : "#fef9c3", color: st === "Approved" ? "#166534" : st === "Escalated" ? "#991b1b" : "#854d0e" }}>{st}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Workflow modes ── */}
      <section className="bg-gray-50 py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-2 text-center text-3xl font-bold text-gray-900 dark:text-white">An AI advisor for accounting workflows — not a generic chatbot.</h2>
          <p className="mb-10 text-center text-sm text-gray-600 dark:text-gray-300">Kriton™ helps users reason across questions, structure workpapers, and identify when human review is required — governed by source authority, risk classification, and audit evidence at every step.</p>
          <div className="mb-6 flex flex-wrap justify-center gap-2 border-b border-gray-200 dark:border-gray-700">
            {workflowTabs.map((t, i) => (
              <button key={t} type="button" onClick={() => setTab(i)} className={`-mb-px border-b-2 px-4 pb-2 text-sm font-semibold transition-colors ${tab === i ? "text-gray-900 dark:text-white" : "border-transparent text-gray-400 hover:text-gray-600"}`} style={tab === i ? { borderColor: AMBER } : undefined}>{t}</button>
            ))}
          </div>
          <div className="grid gap-6 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800 lg:grid-cols-2">
            <div>
              <h3 className="mb-3 text-lg font-bold text-gray-900 dark:text-white">{workflowTabs[tab]}</h3>
              <ul className="space-y-3">
                {["Topic explanations with contextualised source terms", "Misconception warnings surfaced in context", "Practice support with assessment-integrity safeguards"].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-200"><Check className="mt-0.5 h-4 w-4" style={{ color: AMBER }} /> {t}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-[#0d1b2e] p-5 text-sm text-gray-300">
              <p className="mb-2 font-semibold text-white">Example</p>
              <p>Lease classification · Variable lease payments · Sale-and-leaseback · Disclosure requirements — each grounded in the governed source bundle with citations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pipeline ── */}
      <section className="bg-[#0d1b2e] py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-2 text-center text-3xl font-bold text-white">Controls sit before retrieval — not after.</h2>
          <p className="mb-12 text-center text-sm text-gray-400">Nothing is retrieved, and nothing is generated, until controls resolve and every request is classified.</p>
          <ol className="space-y-3">
            {pipeline.map((step, i) => (
              <li key={step} className="flex items-center gap-4 rounded-lg border border-white/10 bg-[#0a1626] px-5 py-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-[#0d1b2e]" style={{ backgroundColor: AMBER }}>{i + 1}</span>
                <span className="text-sm font-medium text-gray-200">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Pillars ── */}
      <section className="bg-white py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6">
          <SectionEyebrow>Trust &amp; governance</SectionEyebrow>
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white">Six pillars enterprise buyers actually check.</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <p.icon className="mb-3 h-7 w-7" style={{ color: AMBER }} />
                <h3 className="mb-2 text-base font-bold text-gray-900 dark:text-white">{p.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Close banner ── */}
      <section className="bg-[#0d1b2e] py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-white">Kriton™ sits inside the close, not next to it.</h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-300">
              Controllers use Workflow Mode to draft the review. Reviewers use Review Mode to sign off. The difference is
              that in the same run — and nothing that isn't source-backed gets out.
            </p>
            <div className="mt-6"><AmberBtn href="/book-a-demo">Book a Demo</AmberBtn></div>
          </div>
          <div className="flex h-56 items-center justify-center rounded-2xl border-2 border-dashed border-white/20 bg-white/5">
            <span className="text-sm text-gray-500">Team image</span>
          </div>
        </div>
      </section>

      {/* ── Teams ── */}
      <section className="bg-gray-50 py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white">Built around how each team actually works.</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teams.map((t) => (
              <div key={t.title} className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <t.icon className="mb-3 h-7 w-7" style={{ color: AMBER }} />
                <h3 className="mb-2 text-base font-bold text-gray-900 dark:text-white">{t.title}</h3>
                <p className="mb-4 flex-1 text-sm text-gray-600 dark:text-gray-300">{t.desc}</p>
                <Link href="/solutions" className="inline-flex items-center gap-1 text-sm font-semibold" style={{ color: AMBER }}>Solutions for {t.title.split(" ")[0]} <ArrowRight className="h-4 w-4" /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-900 dark:text-white">Straight answers before you book a call.</h2>
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {faqs.map((f, i) => (
              <div key={f.q}>
                <button type="button" onClick={() => setOpenFaq(openFaq === i ? null : i)} className="flex w-full items-center justify-between py-4 text-left">
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">{f.q}</span>
                  {openFaq === i ? <Minus className="h-4 w-4 text-gray-400" /> : <Plus className="h-4 w-4 text-gray-400" />}
                </button>
                {openFaq === i && <p className="pb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{f.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-[#0a1626] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <SectionEyebrow>Bring governed intelligence in</SectionEyebrow>
          <h2 className="text-3xl font-bold text-white">Bring source-backed intelligence into professional accounting workflows.</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-gray-300">
            ZoikoLogia™ with Kriton™ gives accounting and finance teams a governed way to work — across tax, audit,
            payroll, and compliance — with source authority, privacy, and auditability built in.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <AmberBtn href="/book-a-demo">Book a Demo</AmberBtn>
            <GhostBtn href="/architecture" dark>View Platform Architecture</GhostBtn>
            <GhostBtn href="/governance-pack" dark>Request Governance Pack</GhostBtn>
          </div>
        </div>
      </section>

    </div>
  );
}

// ── sub-components ──
function EngineCard({ icon: Icon, title, desc }: { icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>; title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
      <Icon className="mb-2 h-5 w-5" style={{ color: AMBER }} />
      <h3 className="mb-1 text-sm font-bold text-gray-900 dark:text-white">{title}</h3>
      <p className="text-xs text-gray-600 dark:text-gray-300">{desc}</p>
    </div>
  );
}
function LayerCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0a1626] p-6">
      <h3 className="mb-4 text-lg font-bold text-white">{title}</h3>
      <ul className="space-y-2.5">
        {items.map((it) => (
          <li key={it} className="flex items-center gap-2 text-sm text-gray-300"><Check className="h-4 w-4 shrink-0" style={{ color: AMBER }} /> {it}</li>
        ))}
      </ul>
    </div>
  );
}