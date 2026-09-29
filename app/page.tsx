"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, Check, ShieldCheck, FileText, Scale, Lock, GitBranch,
  BookOpen, Network, Database, ClipboardCheck, Gauge, Building2,
  Calculator, Users, GraduationCap, Plus, Minus, Search, MapPin, Eye,
  PenLine, Globe, Info, ArrowUpRight,
} from "lucide-react";

/* ── palette ── */
const AMBER  = "#e0a92e";
const NAVY   = "#0d1b2e";
const CREAM  = "#f5f1eb";
const TEAL   = "#2aabb3";
const GREEN  = "#22c55e";
const RED    = "#ef4444";

/* ── small helpers ── */

/** Left-aligned eyebrow with amber dash: — LABEL */
function Eyebrow({ children, center = false }: { children: React.ReactNode; center?: boolean }) {
  return (
    <p className={`mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] ${center ? "justify-center" : ""}`} style={{ color: AMBER }}>
      <span className="inline-block w-5 border-t-2" style={{ borderColor: AMBER }} />
      {children}
    </p>
  );
}

function AmberBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="inline-block rounded-md px-7 py-3.5 text-sm font-semibold text-[#0d1b2e] transition-opacity hover:opacity-90" style={{ backgroundColor: AMBER }}>
      {children}
    </Link>
  );
}
function GhostBtn({ href, children, dark = false }: { href: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <Link href={href} className={`inline-block rounded-md border px-7 py-3.5 text-sm font-semibold transition-colors ${dark ? "border-white/25 text-white hover:bg-white/10" : "border-gray-300 text-gray-800 hover:bg-white/60"}`}>
      {children}
    </Link>
  );
}

function ImageSlot({
  src, alt = "", className = "", label = "Image", onDark = false, circle = false,
}: {
  src?: string; alt?: string; className?: string; label?: string; onDark?: boolean; circle?: boolean;
}) {
  const shape = circle ? "rounded-full" : "rounded-2xl";
  if (src) {
    return (
      <div className={`relative overflow-hidden ${shape} ${className}`}>
        <Image src={src} alt={alt || label} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
      </div>
    );
  }
  return (
    <div className={`flex items-center justify-center border-2 border-dashed ${shape} ${onDark ? "border-white/20 bg-white/5" : "border-gray-300 bg-gray-50"} ${className}`}>
      {label ? <span className={`text-[10px] font-medium uppercase tracking-widest ${onDark ? "text-gray-500" : "text-gray-400"}`}>{label}</span> : null}
    </div>
  );
}

/* ── data ── */

const trustedLogos = ["Halden & Cole", "Ashworth Group", "Merrow Partners", "Colton Reeves", "Faircroft & Co."];

const advisorStatus = [
  { label: "Source-backed answer", color: GREEN },
  { label: "Risk: High", color: RED },
  { label: "Jurisdiction: US", color: GREEN },
  { label: "Evidence checklist", color: AMBER },
  { label: "Audit saved", color: GREEN },
  { label: "Escalation available", color: AMBER },
];

const journeySteps = [
  { icon: Search,      label: "Explore",     color: TEAL },
  { icon: MapPin,      label: "Understand",  color: AMBER },
  { icon: FileText,    label: "Prepare",     color: TEAL },
  { icon: Eye,         label: "Review",      color: AMBER },
  { icon: ShieldCheck, label: "Govern",      color: AMBER },
  { icon: PenLine,     label: "Sign",        color: NAVY },
];

const personas = [
  { name: "Student / Career Explorer", desc: "Learns the foundation.",                   accent: AMBER, img: "/images/div.rc-photo.png" },
  { name: "Junior Accountant",         desc: "Builds professional confidence.",           accent: AMBER, img: "/images/div.rc-photo (1).png" },
  { name: "Business Owner",            desc: "Reads the financials with confidence.",     accent: TEAL,  img: "/images/div.rc-photo (2).png" },
  { name: "Operations Leader",         desc: "Asks the right financial questions.",       accent: TEAL,  img: "/images/div.rc-photo (3).png" },
  { name: "Finance Manager",           desc: "Prepares the workpaper.",                  accent: AMBER, img: "/images/div.rc-photo (4).png" },
  { name: "Tax Director",              desc: "Validates jurisdictional treatment.",       accent: AMBER, img: "/images/div.rc-photo (5).png" },
  { name: "Audit Partner",             desc: "Reviews the evidence.",                    accent: TEAL,  img: "/images/div.rc-photo (6).png" },
  { name: "CFO",                       desc: "Signs the financials.",                    accent: TEAL,  img: "/images/div.rc-photo (7).png" },
];

const statCards = [
  { icon: ShieldCheck, label: "Governance\nControl Systems",    n: "5", color: AMBER },
  { icon: Network,     label: "Kriton\u2122\nAdvisor Modes",    n: "9", color: NAVY },
  { icon: Gauge,       label: "Risk\nClassification Levels",    n: "5", color: TEAL },
];

const trustBar = [
  { icon: ShieldCheck, text: "Source-backed\nand evidence-ready" },
  { icon: Lock,        text: "Enterprise security\n& permissions" },
  { icon: Building2,   text: "Governed by policy,\nnot prompts" },
  { icon: Globe,       text: "Built for global standards\nand jurisdictions" },
];

const engineNodes = [
  { tag: "01", icon: BookOpen,      title: "Source Library",          desc: "Authoritative, curated, and continuously updated sources with metadata and authority levels.", color: AMBER },
  { tag: "02", icon: Scale,         title: "Jurisdiction Engine",     desc: "Tax, legal, audit, and reporting rules mapped by jurisdiction, effective date, and language.", color: AMBER },
  { tag: "03", icon: GitBranch,     title: "Risk Classification",    desc: "Multi-level risk model classifies questions, answers, and recommendations.", color: AMBER },
  { tag: "04", icon: FileText,      title: "Audit Ledger",           desc: "Immutable audit ledger of inputs, sources, model runs, and outputs.", color: TEAL },
  { tag: "05", icon: Lock,          title: "Privacy Controls",       desc: "Role-based access, data minimization, encryption, and retention policies.", color: TEAL },
  { tag: "06", icon: ClipboardCheck, title: "Evaluation Framework",  desc: "Quality, accuracy, and safety testing with continuous monitoring and feedback.", color: GREEN },
];

const platformLayer = ["Authoritative Source Library", "Accounting Knowledge Graph", "RAG Source-Bundle Engine", "Risk Classification Service", "Audit Evidence Ledger", "Privacy & Security Controls", "Provider Due Diligence Register", "Evaluation & QA Framework", "Event Catalog"];
const kritonLayer   = ["Professional Q&A", "Learning Guidance", "Workflow Support", "Review Assistance", "Source Citations", "Risk Notices", "Human Escalation", "Limitation Language", "Evidence Capture"];

const systems = [
  { tag: "CTRL \u00b7 SOURCE",    title: "Authoritative Source Library",      desc: "Governs which accounting, tax, audit, payroll, and educational sources may be used, cited, summarized, or blocked.", link: "Explore Source Governance" },
  { tag: "CTRL \u00b7 ONTOLOGY",  title: "Accounting Knowledge Graph",       desc: "Maps concepts, standards, jurisdictions, frameworks, risk classifications, and workflow paths.", link: "View Ontology Layer" },
  { tag: "CTRL \u00b7 RETRIEVAL", title: "Retrieval-Augmented Generation",   desc: "Retrieves approved source versions before generation and handles no-source states explicitly.", link: "Learn About RAG" },
  { tag: "CTRL \u00b7 SAFETY",    title: "AI Safety & Risk Routing",         desc: "Classifies every request by mode, risk level, jurisdiction, and professional boundary before Kriton\u2122 answers.", link: "Review Safety Controls" },
  { tag: "CTRL \u00b7 AUDIT",     title: "Audit Logging & Evidence Ledger",  desc: "Captures immutable, replay-ready evidence for source decisions, model runs, and reviewer overrides.", link: "View Audit Framework" },
  { tag: "CTRL \u00b7 PRIVACY",   title: "Privacy & Data Protection",        desc: "Enforces tenant isolation, regional routing, DSR workflows, encryption, and WCAG 2.2 AA accessibility.", link: "Visit Trust Center" },
  { tag: "CTRL \u00b7 EVAL",      title: "LLM Evaluation & Benchmarking",    desc: "Tests source grounding, hallucination resistance, refusal behavior, and canary release readiness.", link: "See Evaluation Standards" },
  { tag: "CTRL \u00b7 PROVIDER",  title: "Provider Due Diligence",           desc: "Controls which model providers, regions, and retention policies are approved for production use.", link: "Review Provider Controls" },
  { tag: "CTRL \u00b7 EVENTS",    title: "Event Catalog",                    desc: "Standardizes every source, safety, privacy, and workflow event with payload versions and replay relevance.", link: "Explore Event Governance" },
];

const auditQueue = [
  { title: "Revenue recognition \u2014 multi-element contract",       meta: "SB-88231 \u00b7 IFRS 15 \u00b7 Bundle v4.2", status: "Needs review", time: "4m ago" },
  { title: "Payroll jurisdiction check \u2014 multi-state remote staff", meta: "SB-88190 \u00b7 ASC 606 \u00b7 Bundle v2.9", status: "Approved",     time: "22m ago" },
  { title: "Lease classification memo \u2014 sale-and-leaseback",     meta: "SB-88104 \u00b7 IFRS 16 \u00b7 Bundle v1.7", status: "Approved",     time: "1h ago" },
  { title: "Audit evidence request \u2014 Q3 reconciliations",       meta: "SB-88066 \u00b7 GAAS \u00b7 Bundle v3.0",    status: "Escalated",    time: "3h ago" },
];

const pipeline = [
  { title: "Query received",          desc: "The Query Orchestrator identifies mode, risk class, jurisdiction, tenant context, and product surface.",  gate: false },
  { title: "Concepts resolved",       desc: "The Ontology Service resolves concepts, framework, jurisdiction scope, and tenant-policy overlays.",      gate: false },
  { title: "Retrieval scope planned",  desc: "The RAG Planner sets retrieval scope and source minimums while embedding license, freshness, and provider-use controls as gates \u2014 before any candidate is admitted.", gate: true },
  { title: "Candidates retrieved",    desc: "Only source sets that already passed Source Library controls are retrieved. Blocked or ineligible sources never enter the candidate set.", gate: true },
  { title: "Source bundle assembled",  desc: "Citation anchors, confidence state, conflict state, and replay fields are attached to the governed bundle.", gate: false },
  { title: "Risk classified",         desc: "The Safety Service classifies risk, professional boundary, privacy class, and escalation requirement \u2014 before generation.", gate: true },
  { title: "Context packaged",        desc: "The Model Gateway packages only permitted context for the approved provider, deployment mode, and region.", gate: false },
  { title: "Answer drafted",          desc: "Kriton\u2122 drafts a controlled answer under the approved prompt profile and risk policy.",              gate: false },
  { title: "Answer validated",        desc: "The Validator checks claims, citations, assumptions, leakage, and professional-boundary language.",       gate: true },
  { title: "Evidence recorded",       desc: "The Audit Ledger records an immutable evidence trail with replay relevance.",                             gate: false },
  { title: "Human review routed",     desc: "Review routes activate automatically wherever the risk policy requires them.",                            gate: false },
];

const antiPatterns = [
  "Regulated answer from model memory alone \u2014 a governed source bundle or a controlled refusal path is always required.",
  "Source use without a permission state \u2014 filtering happens before retrieval, not as a post-hoc patch.",
  "Unversioned citation basis \u2014 every citation points to a source version and citation anchor.",
  "Provider call without due diligence status \u2014 region, DPA, retention, and training opt-out are verified first.",
];

const pillars = [
  { title: "Source Authority",    desc: "Approved sources, source versions, license states, citation anchors, and freshness controls.",                    accent: AMBER },
  { title: "Risk Governance",     desc: "LOW, MEDIUM, HIGH, RESTRICTED, and CLASSIFICATION_UNCERTAIN paths with deterministic routing.",                  accent: AMBER },
  { title: "Privacy & Security",  desc: "Tenant isolation, encryption, regional routing, DSR workflows, and WCAG 2.2 AA accessibility.",                  accent: TEAL },
  { title: "Audit Evidence",      desc: "Replay manifests with completeness status, chain hashes, and WORM-equivalent evidence storage.",                 accent: TEAL },
  { title: "Provider Control",    desc: "DPA status, training opt-out verification, region eligibility, and subprocessor review.",                         accent: TEAL },
  { title: "QA Release Gates",    desc: "Threshold-based release approval, regression detection, and canary rollback triggers.",                          accent: TEAL },
];

const teams = [
  { title: "Accounting Firms",          desc: "Support research, workpapers, client queries, technical review, and evidence-backed workflow guidance.", link: "Solutions for Firms",          img: "/images/ttsg.png" },
  { title: "Enterprise Finance Teams",  desc: "Improve consistency across accounting policy, reporting workflows, and internal controls.",              link: "Solutions for Finance Teams",  img: "/images/div.sol-avatar.png" },
  { title: "Tax Professionals",         desc: "Structure tax research, jurisdiction checks, deadline workflows, and source-backed explanations.",       link: "Solutions for Tax",            img: "/images/ndn.png" },
  { title: "Audit Teams",              desc: "Support audit planning, evidence requirements, assertions, and reviewer escalation.",                     link: "Solutions for Audit",          img: "/images/AS.png" },
  { title: "Payroll & Compliance",      desc: "Handle jurisdiction-aware payroll, filing, and documentation with controlled source grounding.",         link: "Solutions for Payroll",        img: "/images/DD.png" },
  { title: "Accounting Education",      desc: "Deliver governed learning support, topic maps, and academic integrity safeguards.",                      link: "Solutions for Learning",       img: "/images/PP.png" },
];

const faqs = [
  { q: "Is ZoikoLogia\u2122 a chatbot?",                          a: "No. ZoikoLogia\u2122 is a governed accounting intelligence system. Kriton\u2122 provides an AI advisor experience, but the platform includes source governance, accounting ontology, RAG, safety controls, audit logging, and provider due diligence underneath it." },
  { q: "How does ZoikoLogia\u2122 reduce hallucination risk?",    a: "Retrieval is gated by governed sources. If no approved source supports an answer, the system returns a controlled no-source state rather than guessing, and every answer carries citations and confidence." },
  { q: "Does ZoikoLogia\u2122 replace accountants?",              a: "No. ZoikoLogia\u2122 with Kriton\u2122 supports professional judgment. It does not replace qualified accountants, auditors, tax professionals, compliance officers, statutory obligations, audit opinions, tax determinations, filings, or required human review." },
  { q: "How does ZoikoLogia\u2122 handle privacy?",               a: "Yes \u2014 tenant isolation, encryption, regional routing, redaction, and DPA workflows are enforced by the platform, with a trust center documenting controls." },
  { q: "Can ZoikoLogia\u2122 be used by enterprises?",            a: "Yes. Provider due diligence, audit evidence ledgers, QA release gates, and jurisdiction controls are built for enterprise procurement and compliance review." },
];

/* ── PAGE ── */
export default function Page() {
  const [tab, setTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const workflowTabs = ["Learning Mode", "Workflow Mode", "Review Mode", "Admin Mode"];

  return (
    <div style={{ backgroundColor: CREAM }}>

      {/* ══════════════════════════ HERO ══════════════════════════ */}
      <section className="bg-[#0d1b2e]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-2">
          <div>
            <Eyebrow>Governed AI for Accounting</Eyebrow>
            <h1 className="font-serif text-4xl font-extrabold leading-[1.15] text-white sm:text-5xl">
              AI accounting intelligence,<br />
              <span style={{ color: AMBER }}>governed by design.</span>
            </h1>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-gray-300">
              Kriton&trade; helps accounting professionals work through tax, audit,
              payroll, and compliance questions — grounded in real sources,
              not model memory.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <AmberBtn href="/book-a-demo">Book a Demo</AmberBtn>
              <GhostBtn href="/kriton" dark>See Kriton&trade; in action <ArrowRight className="ml-1 inline h-4 w-4" /></GhostBtn>
            </div>

            {/* Trusted bar */}
            <div className="mt-10 border-t border-white/10 pt-6">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500">
                Trusted by finance &amp; accounting leaders
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-2">
                {trustedLogos.map((l) => (
                  <span key={l} className="font-serif text-sm font-semibold text-gray-400">{l}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Hero image + floating Kriton card */}
          <div className="relative">
            <ImageSlot
              src="/images/Senior audit professional reviewing financial statements.png"
              alt="Accounting professional working with ZoikoLogia"
              className="h-80 w-full"
              label="Hero image"
              onDark
            />
            {/* Floating Kriton advisor card */}
            <div className="absolute -bottom-8 right-4 w-64 rounded-xl border border-white/10 bg-white/95 p-4 shadow-xl backdrop-blur">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-xs font-bold text-gray-900">Kriton&trade; AI Advisor</p>
                <div className="flex gap-1.5 text-gray-400">
                  <span className="text-[10px]">⛶</span>
                  <span className="text-[10px]">✕</span>
                </div>
              </div>
              <ul className="space-y-2">
                {advisorStatus.map((s) => (
                  <li key={s.label} className="flex items-center gap-2 text-xs text-gray-700">
                    <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: s.color }} />
                    {s.label}
                  </li>
                ))}
              </ul>
              <div className="mt-3 border-t border-gray-200 pt-3">
                <div className="mb-1 flex items-center justify-between text-[10px] text-gray-400">
                  <span>Confidence</span>
                  <span>92%</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-200">
                  <div className="h-full rounded-full" style={{ width: "92%", backgroundColor: TEAL }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════ PERSONAS ══════════════════════════ */}
      <section className="py-20" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr]">
            {/* Left column */}
            <div>
              <Eyebrow>Built for Professional Judgment</Eyebrow>
              <h2 className="font-serif text-3xl font-bold leading-snug text-gray-900 sm:text-[2.1rem]">
                Accounting intelligence for the people who ask, prepare, review, govern, and sign.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                ZoikoLogia&trade; with Kriton&trade; is built for professionals who carry
                judgment, business leaders who need financial clarity, and learners
                who are building accounting knowledge — all governed by the same
                source-backed, evidence-ready controls.
              </p>

              {/* Journey icons */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                {journeySteps.map((s, i) => (
                  <React.Fragment key={s.label}>
                    <div className="flex flex-col items-center gap-1">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border" style={{ borderColor: s.color }}>
                        <s.icon className="h-4 w-4" style={{ color: s.color }} />
                      </span>
                      <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-gray-500">{s.label}</span>
                    </div>
                    {i < journeySteps.length - 1 && <ArrowRight className="h-3.5 w-3.5 text-gray-300" />}
                  </React.Fragment>
                ))}
              </div>

              {/* Stat cards with icons */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                {statCards.map((s) => (
                  <div key={s.label} className="rounded-xl border border-gray-200 bg-white p-4">
                    <span className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg" style={{ backgroundColor: s.color + "18" }}>
                      <s.icon className="h-4 w-4" style={{ color: s.color }} />
                    </span>
                    <p className="mt-2 text-[10px] font-semibold uppercase leading-tight tracking-wide text-gray-500" style={{ whiteSpace: "pre-line" }}>{s.label}</p>
                    <p className="mt-1 text-2xl font-extrabold text-gray-900">{s.n}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column — persona grid */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {personas.map((p, i) => (
                <div key={p.name} className="rounded-xl border border-gray-200 bg-white p-3 text-left">
                  <div className="relative mb-3 aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-100">
                    <span className="absolute left-1.5 top-1.5 z-10 flex h-5 w-5 items-center justify-center rounded bg-white/90 text-[10px] font-bold text-gray-700 shadow-sm">{i + 1}</span>
                    <ImageSlot src={p.img} alt={p.name} className="h-full w-full" label="" />
                  </div>
                  <p className="text-xs font-bold text-gray-900">{p.name}</p>
                  <p className="mt-0.5 text-[11px] text-gray-500">{p.desc}</p>
                  <div className="mt-2 h-[3px] w-6 rounded-full" style={{ backgroundColor: p.accent }} />
                </div>
              ))}
            </div>
          </div>

          {/* Trust bar */}
          <div className="mt-14 grid gap-6 border-t border-gray-200 pt-8 sm:grid-cols-2 lg:grid-cols-4" style={{ backgroundColor: CREAM }}>
            {trustBar.map((f) => (
              <div key={f.text} className="flex items-start gap-3">
                <f.icon className="mt-0.5 h-5 w-5 shrink-0 text-gray-400" />
                <span className="text-xs leading-snug text-gray-600" style={{ whiteSpace: "pre-line" }}>{f.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════ ENGINE ══════════════════════════ */}
      <section className="py-20" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto max-w-7xl px-6">
          <Eyebrow center>Built on Governance, Not Guesswork</Eyebrow>
          <h2 className="mb-4 text-center font-serif text-3xl font-bold text-gray-900">
            Accounting AI cannot be built on guesswork.
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-sm text-gray-600">
            Professional answers require more than fluent language. They require source
            authority, jurisdictional accuracy, professional boundaries, and clear
            escalation when a system shouldn&apos;t answer definitively.
          </p>

          <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
            {/* Left 3 cards */}
            <div className="space-y-4">
              {engineNodes.slice(0, 3).map((n) => <EngineCard key={n.title} {...n} />)}
            </div>

            {/* Center circle — filled navy */}
            <div className="mx-auto flex h-36 w-36 flex-col items-center justify-center rounded-full border-2 border-dashed border-gray-300 bg-[#0d1b2e] text-center shadow-lg">
              <span className="px-4 text-xs font-bold leading-tight text-white">
                Governed<br />Intelligence Core
              </span>
            </div>

            {/* Right 3 cards */}
            <div className="space-y-4">
              {engineNodes.slice(3).map((n) => <EngineCard key={n.title} {...n} />)}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════ TWO LAYERS ══════════════════════════ */}
      <section className="bg-[#0d1b2e] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Eyebrow center>Two Layers. One Purpose.</Eyebrow>
          <h2 className="mb-2 text-center font-serif text-3xl font-bold text-white">
            ZoikoLogia&trade; is the intelligence system.<br />
            Kriton&trade; is the judgment interface.
          </h2>
          <p className="mb-12 text-center text-sm text-gray-400">
            A governed intelligence layer powers the advisor professionals rely on.
          </p>
          <div className="grid gap-6 lg:grid-cols-2">
            <LayerCard title="ZoikoLogia&trade; Platform Layer" items={platformLayer} bulletColor={AMBER} />
            <LayerCard title="Kriton&trade; Advisor Layer" items={kritonLayer} bulletColor={TEAL} />
          </div>
        </div>
      </section>

      {/* ══════════════════════════ NINE SYSTEMS ══════════════════════════ */}
      <section className="py-20" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto max-w-7xl px-6">
          <Eyebrow center>Core Capabilities</Eyebrow>
          <h2 className="mb-2 text-center font-serif text-3xl font-bold text-gray-900">
            Nine systems. One governed intelligence layer.
          </h2>
          <p className="mb-12 text-center text-sm text-gray-600">
            Every capability below operates as a control point, not a feature checkbox — each one
            gates what Kriton&trade; is allowed to say, cite, or escalate.
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {systems.map((s) => (
              <div key={s.tag} className="flex flex-col rounded-xl border border-gray-200 bg-white p-6">
                <span className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-gray-400">{s.tag}</span>
                <h3 className="mb-2 text-base font-bold text-gray-900">{s.title}</h3>
                <p className="mb-4 flex-1 text-sm text-gray-600">{s.desc}</p>
                <Link href="/platform" className="inline-flex items-center gap-1 text-sm font-semibold" style={{ color: AMBER }}>
                  {s.link} <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════ PAPER TRAIL ══════════════════════════ */}
      <section className="py-20" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <div>
            <Eyebrow>See It in Your Workflow</Eyebrow>
            <h2 className="font-serif text-3xl font-bold text-gray-900">
              Every answer arrives with its own paper trail.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              Reviewers don&apos;t have to take Kriton&trade;&apos;s word for it. Every
              response opens into the exact bundle, policy, and reviewer chain behind it.
            </p>
            <ul className="mt-6 space-y-3">
              {["One click from any answer to its full audit trail", "Reviewer identity, decision, and timestamp on every row", "Replay manifests flag gaps instead of hiding them"].map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm text-gray-700">
                  <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: AMBER }} /> {t}
                </li>
              ))}
            </ul>
            <div className="mt-8"><GhostBtn href="/architecture">View Audit Framework</GhostBtn></div>
          </div>

          {/* Browser mockup */}
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
            <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
              <span className="ml-2 flex-1 truncate rounded border border-gray-200 bg-white px-3 py-1 text-[11px] text-gray-400">
                app.zoikologia.ai/audit/replay
              </span>
            </div>
            <div className="p-5">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm font-bold text-gray-900">Audit &amp; Review Queue</p>
                <span className="text-xs font-semibold" style={{ color: AMBER }}>K&nbsp;&nbsp;Kriton</span>
              </div>
              <div className="mb-4 flex gap-5 border-b border-gray-200 text-xs font-semibold">
                <span className="-mb-px border-b-2 pb-2 text-gray-900" style={{ borderColor: NAVY }}>Review Mode</span>
                <span className="pb-2 text-gray-400">Source Bundles</span>
                <span className="pb-2 text-gray-400">Event Log</span>
              </div>
              <div className="space-y-3">
                {auditQueue.map((q) => (
                  <div key={q.title} className="flex items-center justify-between rounded-lg border border-gray-100 bg-white px-4 py-3">
                    <div className="flex items-center gap-3 pr-3">
                      <div className="h-8 w-8 shrink-0 rounded-full bg-gray-200" />
                      <div>
                        <p className="text-xs font-semibold text-gray-900">{q.title}</p>
                        <p className="mt-0.5 text-[10px] text-gray-400">{q.meta}</p>
                      </div>
                    </div>
                    <div className="flex shrink-0 items-center gap-2">
                      <span className="rounded-full px-2 py-0.5 text-[10px] font-semibold" style={{
                        backgroundColor: q.status === "Approved" ? "#dcfce7" : q.status === "Escalated" ? "#fee2e2" : "#fef9c3",
                        color: q.status === "Approved" ? "#166534" : q.status === "Escalated" ? "#991b1b" : "#854d0e",
                      }}>{q.status}</span>
                      <span className="text-[10px] text-gray-400">{q.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════ WORKFLOW MODES ══════════════════════════ */}
      <section className="py-20" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-2 text-center font-serif text-3xl font-bold text-gray-900">
            An AI advisor for accounting workflows— not a generic chatbot.
          </h2>
          <p className="mb-10 text-center text-sm text-gray-600">
            Kriton&trade; helps users explore accounting questions, structure workpapers, and identify when human review
            is required — governed by source authority, risk classification, and audit evidence at every step.
          </p>
          <div className="mb-6 flex flex-wrap gap-6 border-b border-gray-200">
            {workflowTabs.map((t, i) => (
              <button key={t} type="button" onClick={() => setTab(i)} className={`-mb-px border-b-2 pb-2 text-sm font-semibold transition-colors ${tab === i ? "text-gray-900" : "border-transparent text-gray-400 hover:text-gray-600"}`} style={tab === i ? { borderColor: AMBER } : undefined}>
                {t}
              </button>
            ))}
          </div>
          <div className="grid gap-6 rounded-2xl border border-gray-200 bg-white p-6 lg:grid-cols-2">
            <div>
              <h3 className="mb-2 text-lg font-bold text-gray-900">{workflowTabs[tab]}</h3>
              {tab === 0 && (
                <p className="mb-3 text-sm text-gray-600">For students, trainees, and professionals developing accounting knowledge.</p>
              )}
              <ul className="space-y-3">
                {["Topic explanations with prerequisite-aware learning paths", "Misconception warnings surfaced in context", "Practice support with assessment-integrity safeguards"].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: AMBER }} /> {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-[#0d1b2e] p-5 text-sm text-gray-300">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-gray-500">Learning Path</p>
              <p>
                Lease Classification <span className="text-gray-500">&rarr;</span>{" "}
                <span className="font-semibold" style={{ color: AMBER }}>Variable Lease Payments</span>{" "}
                <span className="text-gray-500">&rarr;</span> Sale-and-Leaseback{" "}
                <span className="text-gray-500">&rarr;</span> Disclosure Requirements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════ PIPELINE ══════════════════════════ */}
      <section className="py-20" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto max-w-5xl px-6">
          <Eyebrow center>Enterprise Governance</Eyebrow>
          <h2 className="mb-2 text-center font-serif text-3xl font-bold text-gray-900">
            Controls sit before retrieval — not after.
          </h2>
          <p className="mb-10 text-center text-sm text-gray-600">
            Source Library authority, license, freshness, and display controls gate which sources can ever enter the
            candidate set. Nothing ineligible is retrieved, so nothing ineligible needs to be filtered out later.
          </p>

          {/* Info callout */}
          <div className="mb-10 flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-5">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: "#fbe8c8" }}>
              <Info className="h-3.5 w-3.5" style={{ color: AMBER }} />
            </span>
            <p className="text-sm text-gray-600">
              <span className="font-bold text-gray-900">Why this matters:</span> a system that retrieves broadly and
              filters afterward can still leak restricted or unlicensed content into a draft answer. ZoikoLogia&trade;
              blocks ineligible sources at the planning stage, before a single candidate is retrieved.
            </p>
          </div>

          {/* Timeline */}
          <ol className="relative space-y-8 border-l-2 border-gray-200 pl-8">
            {pipeline.map((step, i) => (
              <li key={step.title} className="relative">
                <span className="absolute -left-[41px] top-0 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white" style={{ backgroundColor: NAVY }}>
                  {i + 1}
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-sm font-bold text-gray-900">{step.title}</h3>
                  {step.gate && (
                    <span className="rounded px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide" style={{ backgroundColor: "#fbe8c8", color: "#92620a" }}>
                      Hard Gate
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-gray-500">{step.desc}</p>
              </li>
            ))}
          </ol>

          {/* Anti-patterns */}
          <div className="mt-12 grid gap-px overflow-hidden rounded-xl sm:grid-cols-2" style={{ backgroundColor: "#0a1626" }}>
            {antiPatterns.map((t) => (
              <div key={t} className="p-6" style={{ backgroundColor: NAVY }}>
                <p className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: RED }}>No</p>
                <p className="text-sm leading-relaxed text-gray-300">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════ PILLARS ══════════════════════════ */}
      <section className="py-20" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto max-w-7xl px-6">
          <Eyebrow center>Trust &amp; Control</Eyebrow>
          <h2 className="mb-14 text-center font-serif text-3xl font-bold text-gray-900">
            Six pillars enterprise buyers actually check.
          </h2>
          <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title}>
                <div className="mb-4 h-[3px] w-8 rounded-full" style={{ backgroundColor: p.accent }} />
                <h3 className="mb-2 text-base font-bold text-gray-900">{p.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════ CLOSE BANNER (contained card) ══════════════════════════ */}
      <section className="pb-20" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-3xl bg-[#0d1b2e]">
            <div className="grid items-center lg:grid-cols-2">
              <div className="p-10 lg:p-14">
                <Eyebrow>Partner Spotlight</Eyebrow>
                <h2 className="font-serif text-3xl font-bold text-white">
                  Kriton&trade; sits inside the close, not next to it.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-gray-300">
                  Controllers use Workflow Mode to draft the memo. Reviewers use Review Mode to sign off.
                  The evidence trail is the same one an auditor sees six months later.
                </p>
                <div className="mt-6"><AmberBtn href="/book-a-demo">Book a Demo</AmberBtn></div>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <blockquote className="text-sm italic leading-relaxed text-gray-300">
                    &ldquo;The citation panel is the first thing our audit committee asks to see.
                    Now it&apos;s built into every answer, not bolted on after.&rdquo;
                  </blockquote>
                  <p className="mt-3 text-[10px] uppercase tracking-[0.15em] text-gray-500">
                    VP of Accounting Policy &middot; Enterprise Pilot Partner
                  </p>
                </div>
              </div>
              <div className="relative h-full min-h-[320px]">
                <ImageSlot
                  src="/images/Finance professionals reviewing governed source documentation.png"
                  alt="Team collaborating during close"
                  className="h-full w-full"
                  label="Team image"
                  onDark
                  rounded="rounded-none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════ TEAMS (single bordered container) ══════════════════════════ */}
      <section className="py-20" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto max-w-7xl px-6">
          <Eyebrow center>Solutions</Eyebrow>
          <h2 className="mb-12 text-center font-serif text-3xl font-bold text-gray-900">
            Built around how each team actually works.
          </h2>
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <div className="grid divide-x divide-gray-200 sm:grid-cols-3">
              {teams.slice(0, 3).map((t) => <TeamCell key={t.title} {...t} />)}
            </div>
            <div className="grid divide-x divide-gray-200 border-t border-gray-200 sm:grid-cols-3">
              {teams.slice(3).map((t) => <TeamCell key={t.title} {...t} />)}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════ FAQ ══════════════════════════ */}
      <section className="py-20" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto max-w-3xl px-6">
          <Eyebrow>Frequently Asked</Eyebrow>
          <h2 className="mb-10 font-serif text-3xl font-bold text-gray-900">
            Straight answers before you book a call.
          </h2>
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

      {/* ══════════════════════════ FINAL CTA (contained card) ══════════════════════════ */}
      <section className="pb-20" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-3xl bg-[#0a1626] px-6 py-20">
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow center>Start with Governed Accounting AI</Eyebrow>
              <h2 className="font-serif text-3xl font-bold text-white">
                Bring source-backed intelligence into professional accounting workflows.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-300">
                ZoikoLogia&trade; with Kriton&trade; gives accounting and finance teams a governed way to use AI
                across learning, research, workflow, review, and compliance — with source authority, privacy,
                and auditability built in.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <AmberBtn href="/book-a-demo">Book a Demo</AmberBtn>
                <GhostBtn href="/architecture" dark>View Platform Architecture</GhostBtn>
                <GhostBtn href="/governance-pack" dark>Request Governance Pack <ArrowRight className="ml-1 inline h-4 w-4" /></GhostBtn>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

/* ── SUB-COMPONENTS ── */

function EngineCard({ tag, icon: Icon, title, desc, color }: {
  tag: string; icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  title: string; desc: string; color: string;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      <div className="mb-2 flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg" style={{ backgroundColor: color + "18" }}>
          <Icon className="h-4 w-4" style={{ color }} />
        </span>
        <span className="text-[10px] font-semibold text-gray-400">{tag}</span>
      </div>
      <h3 className="mb-1 text-sm font-bold text-gray-900">{title}</h3>
      <p className="text-xs leading-relaxed text-gray-600">{desc}</p>
    </div>
  );
}

function LayerCard({ title, items, bulletColor }: { title: string; items: string[]; bulletColor: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0a1626] p-6">
      <h3 className="mb-4 text-lg font-bold" style={{ color: bulletColor === TEAL ? TEAL : AMBER }}>{title}</h3>
      <ul className="space-y-3">
        {items.map((it) => (
          <li key={it} className="flex items-center gap-3 border-b border-white/5 pb-3 text-sm text-gray-300">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: bulletColor }} />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TeamCell({ title, desc, link, img }: { title: string; desc: string; link: string; img: string }) {
  return (
    <div className="p-6">
      <ImageSlot src={img} alt={title} className="mb-4 h-10 w-10" label="" circle />
      <h3 className="mb-2 text-sm font-bold text-gray-900">{title}</h3>
      <p className="mb-4 text-sm leading-relaxed text-gray-600">{desc}</p>
      <Link href="/solutions" className="inline-flex items-center gap-1 text-sm font-semibold" style={{ color: AMBER }}>
        {link} <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}