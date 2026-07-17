"use client";

import React, { useState } from "react";
import {
  Compass, BookOpen, ClipboardList, ShieldCheck, ListChecks, FileCheck2,
  Settings2, ChevronDown, ArrowRight, Users, LayoutDashboard, Banknote,
  MapPin, TriangleAlert,
} from "lucide-react";

// ── Brand tokens (shared with the Governance page) ───────────────────────────
const NAVY = "#16233f";
const DEEP_NAVY = "#0f1a30";
const AMBER = "#e8912a";
const TEAL = "#2f9e8f";

// ── Data ──────────────────────────────────────────────────────────────────────
const PILLARS = [
  { icon: Compass, title: "Jurisdiction-Aware", body: "Intelligent mapping across federal, state, and local regulatory frameworks." },
  { icon: BookOpen, title: "Source-Backed", body: "Every response is hard-linked to verifiable primary legal sources and statutes." },
  { icon: ClipboardList, title: "Workflow Documentation", body: "Automated audit trails capturing the logic behind every compliance inquiry." },
  { icon: ShieldCheck, title: "Professional Boundaries", body: "Strict guardrails ensuring AI never performs final tax or legal determinations." },
  { icon: ListChecks, title: "Review & Escalation", body: "Standardized queues for human-in-the-loop verification and complex review." },
  { icon: FileCheck2, title: "Evidence-Ready", body: "Generate ready-to-file artifacts for external auditors and legal departments." },
  { icon: Settings2, title: "Enterprise Controls", body: "Permission-based access and SOC2 compliant data handling protocols." },
];

const WORKFLOW = [
  { n: 1, label: "Question Intake" },
  { n: 2, label: "Context Mapping" },
  { n: 3, label: "Source Retrieval" },
  { n: 4, label: "Kriton™ Analysis" },
  { n: 5, label: "Human Review" },
  { n: 6, label: "Policy Output" },
  { n: 7, label: "Pilot Loop", highlight: true },
];

const USE_CASES = [
  {
    title: "Payroll Rule Research",
    body: "Instantly synthesize state-specific overtime laws, meal break requirements, and predictive scheduling rules across 50+ jurisdictions.",
    tags: ["FLSA Compliance", "Overtime Logic"],
  },
  {
    title: "Jurisdiction Comparison",
    body: "Compare reporting requirements and tax filing deadlines side-by-side for multi-state workforce expansion.",
    tags: ["Nexus Analysis", "Tax Reciprocity"],
  },
  {
    title: "Effective-Date Review",
    body: "Identify upcoming legislative changes and effective dates for new payroll deductions or labor law updates.",
    tags: ["Legislative Monitor", "Future-Proofing"],
  },
  {
    title: "Policy Documentation",
    body: "Draft internal standard operating procedures (SOPs) anchored to the latest compliance guidance.",
    tags: ["SOP Generation", "Audit Trail"],
  },
];

const INTERFACE_BADGES = [
  { eyebrow: "ACTIVE BADGE", title: "Jurisdiction Selector" },
  { eyebrow: "TEMPORAL CONTROL", title: "Effective-Date Prompt" },
  { eyebrow: "SAFETY BUFFER", title: "Source Limit Notice" },
  { eyebrow: "ACCOUNTABILITY", title: "Reviewer Signature" },
];

const STAKEHOLDERS = [
  { icon: Users, title: "Payroll Leaders", body: "Reduce research time by 80% and ensure consistency across large teams managing diverse payroll hubs." },
  { icon: LayoutDashboard, title: "Compliance Teams", body: "Automate the mapping of complex statutes and maintain a verifiable digital record of institutional logic." },
  { icon: Banknote, title: "Finance Leaders", body: "Mitigate regulatory risk and optimize workforce planning with data-backed cost-of-compliance modeling." },
];

const FAQS = [
  { q: "Does ZoikoLogia process our payroll?", a: "No. ZoikoLogia is a governance and research layer, not a payroll processor. It supports your existing payroll and HCM systems with source-governed compliance research, and never executes payments or final tax determinations." },
  { q: "How are legal sources verified?", a: "Every citation is hard-linked to a primary source — statutes, regulations, or agency guidance — and checked against an internal source ledger before it's surfaced. Nothing is generated from unverified or ungrounded model knowledge." },
  { q: "Can I integrate this with my existing HCM?", a: "Yes. ZoikoLogia is designed to sit alongside your current HCM or payroll platform via secure APIs, without requiring you to migrate data or change your system of record." },
];

// ── Governance hexagon diagram (payroll variant node order) ──────────────────
function GovernanceDiagram() {
  const nodes = [
    { x: 300, y: 62, l1: "Governance", l2: "Policy" },
    { x: 512, y: 176, l1: "Source", l2: "Authority" },
    { x: 512, y: 344, l1: "Quality and", l2: "Release Controls" },
    { x: 300, y: 458, l1: "Risk", l2: "Classification" },
    { x: 88, y: 344, l1: "Reviewer", l2: "Oversight" },
    { x: 88, y: 176, l1: "Evidence and", l2: "Auditability" },
  ];
  const C = { x: 300, y: 260 };

  return (
    <svg viewBox="0 0 600 520" className="h-auto w-full" role="img" aria-label="ZoikoLogia governance layer diagram">
      <defs>
        <marker id="tealArrow2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={TEAL} />
        </marker>
        <marker id="amberArrow2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={AMBER} />
        </marker>
      </defs>

      {nodes.map((n, i) => {
        const m = nodes[(i + 1) % nodes.length];
        const dx = m.x - n.x, dy = m.y - n.y;
        const len = Math.hypot(dx, dy);
        const ux = dx / len, uy = dy / len;
        const x1 = n.x + ux * 62, y1 = n.y + uy * 34;
        const x2 = m.x - ux * 70, y2 = m.y - uy * 34;
        return <line key={`r${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke={TEAL} strokeWidth={2} markerEnd="url(#tealArrow2)" />;
      })}

      {nodes.map((n, i) => {
        const dx = C.x - n.x, dy = C.y - n.y;
        const len = Math.hypot(dx, dy);
        const ux = dx / len, uy = dy / len;
        const x1 = n.x + ux * 60, y1 = n.y + uy * 30;
        const x2 = C.x - ux * 66, y2 = C.y - uy * 66;
        return <line key={`s${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke={AMBER} strokeWidth={1.5} strokeDasharray="4 4" markerEnd="url(#amberArrow2)" opacity={0.85} />;
      })}

      <circle cx={C.x} cy={C.y} r={62} fill={NAVY} />
      <text x={C.x} y={C.y - 6} textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="700">ZoikoLogia</text>
      <text x={C.x} y={C.y + 12} textAnchor="middle" fill={AMBER} fontSize="11" fontWeight="600">Governance</text>
      <text x={C.x} y={C.y + 27} textAnchor="middle" fill={AMBER} fontSize="11" fontWeight="600">Layer</text>

      {nodes.map((n, i) => (
        <g key={`n${i}`}>
          <rect x={n.x - 62} y={n.y - 26} width={124} height={52} rx={10} fill="#ffffff" stroke="#dbe2ea" strokeWidth={1.5} />
          <text x={n.x} y={n.y - 3} textAnchor="middle" fill={NAVY} fontSize="12" fontWeight="700">{n.l1}</text>
          <text x={n.x} y={n.y + 14} textAnchor="middle" fill={NAVY} fontSize="12" fontWeight="700">{n.l2}</text>
        </g>
      ))}
    </svg>
  );
}

export default function Payroll() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const solidBtn = "rounded-md px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90";
  const ghostBtn = "rounded-md border px-5 py-2.5 text-sm font-semibold transition-colors";

  return (
    <div className="min-h-screen bg-white font-sans text-slate-700 antialiased dark:bg-slate-950 dark:text-slate-300">

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="mb-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: AMBER }}>
            <ShieldCheck className="h-3.5 w-3.5" /> Institutional Governance Layer
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            Source-Backed AI Support for Payroll and Compliance Teams
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-600 dark:text-slate-400">
            Empower your institutional payroll operations with Kriton™ AI. Navigate jurisdictional complexity and
            regulatory shifts with evidence-based intelligence that anchors every decision to primary legal sources.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#" className={solidBtn} style={{ backgroundColor: NAVY }}>Book a Demo</a>
            <a href="#" className={`${ghostBtn} border-slate-300 text-slate-800 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-100`}>Request Pilot</a>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-100 bg-[#fbf6ec] p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <GovernanceDiagram />
        </div>
      </section>

      {/* Institutional Intelligence, Defined */}
      <section className="border-y border-slate-100 bg-slate-50 py-16 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">Institutional Intelligence, Defined</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            ZoikoLogia is not a payroll processor. We are a specialized governance layer that supports the
            intellectual labor of payroll and compliance teams by providing instant access to source-governed
            research and workflow documentation.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 text-sm font-semibold">
            <a href="#" className="inline-flex items-center gap-1.5 hover:opacity-80" style={{ color: NAVY }}>
              Explore Workflow Mode <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#" className="inline-flex items-center gap-1.5 hover:opacity-80" style={{ color: NAVY }}>
              Source-Governed Intelligence <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* The Seven Pillars of Compliance Governance */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">The Seven Pillars of Compliance Governance</h2>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Rigorous standards for enterprise-grade payroll research.</p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
              <Icon className="h-6 w-6" style={{ color: AMBER }} />
              <h3 className="mt-4 text-base font-bold text-slate-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{body}</p>
            </div>
          ))}

          {/* 8th cell: dark CTA card completing the grid */}
          <div className="flex flex-col justify-between rounded-xl p-6 text-white shadow-sm" style={{ backgroundColor: NAVY }}>
            <div>
              <h3 className="text-base font-bold">Built for Scale</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300/80">
                Request a deep-dive into our governance frameworks.
              </p>
            </div>
            <a href="#" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: AMBER }}>
              Contact Sales <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* The Source-Governed Workflow */}
      <section className="bg-slate-50 py-16 dark:bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">The Source-Governed Workflow</h2>

          <div className="mt-12 grid grid-cols-2 gap-y-8 sm:grid-cols-4 lg:grid-cols-7">
            {WORKFLOW.map((s) => (
              <div key={s.n} className="flex flex-col items-center text-center">
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ backgroundColor: s.highlight ? AMBER : NAVY }}
                >
                  {s.n}
                </span>
                <p className="mt-3 text-sm font-semibold text-slate-700 dark:text-slate-200">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Use Cases */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">Institutional Use Cases</h2>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Accelerating precision research for complex payroll operations.</p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {USE_CASES.map((u) => (
            <div key={u.title} className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h3 className="flex items-center gap-2 text-base font-bold text-slate-900 dark:text-white">
                <span className="h-4 w-1 rounded-full" style={{ backgroundColor: AMBER }} />
                {u.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{u.body}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {u.tags.map((t) => (
                  <span key={t} className="rounded border border-slate-200 px-2 py-0.5 text-xs font-medium text-slate-500 dark:border-slate-700 dark:text-slate-400">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 px-5 py-4 dark:border-slate-800 dark:bg-slate-900">
          <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" style={{ color: AMBER }} />
          <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
            <span className="font-bold uppercase tracking-wide text-slate-600 dark:text-slate-300">Strict Limitation Notice — </span>
            ZoikoLogia outputs are intended for research purposes. We do not provide final tax, legal, or financial
            advice. All AI-generated logic must be reviewed by qualified internal professionals prior to payroll
            execution.
          </p>
        </div>
      </section>

      {/* The Expert Interface */}
      <section className="py-16 text-white" style={{ backgroundColor: DEEP_NAVY }}>
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">The Expert Interface</h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-300/80">
              Designed for the technical user, our interface surfaces the critical metadata needed for high-stakes
              compliance work.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {INTERFACE_BADGES.map((b) => (
                <div key={b.title} className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em]" style={{ color: AMBER }}>{b.eyebrow}</p>
                  <p className="mt-1.5 text-sm font-semibold text-white">{b.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 text-slate-800 shadow-xl">
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold" style={{ color: NAVY }}>Kriton™ Analysis Engine</p>
              <span className="rounded px-2 py-0.5 text-[10px] font-bold text-white" style={{ backgroundColor: AMBER }}>
                SOURCE VERIFIED
              </span>
            </div>

            <div className="mt-4 flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 text-xs text-slate-500">
              <MapPin className="h-3.5 w-3.5" style={{ color: TEAL }} />
              <div className="h-2 flex-1 rounded-full bg-slate-100" />
              <span className="font-semibold text-slate-700">California (CA)</span>
            </div>

            <div className="mt-4 rounded-md border-l-4 bg-slate-50 p-4" style={{ borderColor: AMBER }}>
              <p className="text-[11px] font-bold uppercase tracking-wide text-slate-500">Statutory Citation:</p>
              <p className="mt-1.5 text-sm italic leading-relaxed text-slate-700">
                &ldquo;Cal. Lab. Code § 510 — Overtime hours; day&rsquo;s work; workweek.&rdquo;
              </p>
            </div>

            <div className="mt-4 space-y-2">
              <div className="h-2 w-full rounded-full bg-slate-100" />
              <div className="h-2 w-4/5 rounded-full bg-slate-100" />
            </div>
          </div>
        </div>
      </section>

      {/* Stakeholder Value Across the Office of Finance */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
          Stakeholder Value Across the Office of Finance
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {STAKEHOLDERS.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <span className="flex h-9 w-9 items-center justify-center rounded-md text-white" style={{ backgroundColor: NAVY }}>
                <Icon className="h-4.5 w-4.5" />
              </span>
              <h3 className="mt-4 font-bold text-slate-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Engineered for Trust */}
      <section className="border-y border-slate-100 dark:border-slate-800">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white">Engineered for Trust</h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Enterprise security, data sovereignty, and legal-first design.
            </p>
          </div>
          <div className="flex gap-3">
            <a href="#" className={`${ghostBtn} border-slate-300 bg-slate-50 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200`}>
              Visit Legal Portal
            </a>
            <a href="#" className={`${ghostBtn} border-slate-300 bg-slate-50 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200`}>
              Trust Center
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-16">
        <h2 className="mb-10 text-center text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {FAQS.map((f, i) => {
            const open = openFaq === i;
            return (
              <div key={f.q} className="overflow-hidden rounded-lg border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
                <button
                  type="button"
                  onClick={() => setOpenFaq(open ? null : i)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-slate-800 dark:text-slate-100"
                >
                  {f.q}
                  <ChevronDown className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
                </button>
                {open && <p className="px-5 pb-5 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{f.a}</p>}
              </div>
            );
          })}
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="px-4 py-20 text-center"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(22,35,63,0.08) 1px, transparent 0)",
          backgroundSize: "16px 16px",
        }}
      >
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
            Evaluate Source-Backed Payroll and Compliance Support
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-slate-500 dark:text-slate-400">
            Join the next generation of institutional payroll operations. Request a customized demonstration
            tailored to your jurisdictional requirements.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="#" className={solidBtn} style={{ backgroundColor: NAVY }}>Schedule Demo</a>
            <a href="#" className={`${ghostBtn} border-slate-300 bg-white text-slate-800 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100`}>
              Download Technical Spec
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}