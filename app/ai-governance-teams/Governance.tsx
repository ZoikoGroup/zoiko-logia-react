"use client";

import Link from "next/link";
import { useState } from "react";

// ─── TOKENS (matched to the Buyer Briefs page) ─────────────────────────────────
// cream #faf7f0 · hero #f7f3ea · note #efe6d2 · ink #16233d
// amber-eyebrow #d9720f · amber-dot #f59a23 · teal #0d9488
const INK = "#16233d";
const AMBER = "#f59a23";

// ─── DATA ──────────────────────────────────────────────────────────────────────
const PILLARS = [
  { title: "Source Authority", body: "Validation of training datasets against GAAP and IFRS standards with immutable lineage tracking." },
  { title: "Risk Classification", body: "Dynamic tiering of AI-driven tasks from low-impact administrative to high-stakes disclosure review." },
  { title: "Human Review", body: "Embedded oversight protocols requiring CPA verification for model-generated assertions." },
  { title: "Evidence & Audit", body: "Comprehensive logs capturing model inputs, prompts, weights, and human adjustments for external audit." },
  { title: "Quality & Release", body: "Rigorous sandbox testing and regression analysis before any new model deployment." },
  { title: "Privacy & Oversight", body: "End-to-end encryption and defined data residency to keep client information contained and controlled." },
];

const FLOW = [
  { n: 1, title: "Discovery", body: "Identify AI use cases and potential risk domains." },
  { n: 2, title: "Policy Mapping", body: "Align use cases with regulatory and firm policies." },
  { n: 3, title: "Source Alignment", body: "Verify underlying data authority and permissions." },
  { n: 4, title: "Pilot Design", body: "Controlled environment testing for accuracy benchmarks." },
  { n: 5, title: "Quality Review", body: "Internal audit of pilot results and risk profiles." },
  { n: 6, title: "Evidence & Monitor", body: "Continuous observation and logging in production." },
  { n: 7, title: "Scale Review", body: "Strategic expansion based on performance and firm risk appetite.", highlight: true },
];

const RISK_ROWS = [
  { rule: "Model Parameters", level: "CRITICAL", review: "Governance Board Approval", evidence: "Immutable Log Cluster" },
  { rule: "Input Datasets", level: "HIGH", review: "Technical Lead Certification", evidence: "Hash-based Validation" },
  { rule: "Prompt Templates", level: "MEDIUM", review: "Peer Review", evidence: "Versioned Repository" },
  { rule: "User Interaction", level: "LOW", review: "Automated Guardrails", evidence: "Telemetry Stream" },
];

const RISK_STYLE: Record<string, string> = {
  CRITICAL: "bg-red-100 text-red-700",
  HIGH: "bg-orange-100 text-orange-700",
  MEDIUM: "bg-amber-100 text-amber-700",
  LOW: "bg-green-100 text-green-700",
};

const PHASES = [
  { phase: "Phase 1 · Legal", body: "Establishing contractual guardrails and liability frameworks for AI-generated accounting insights." },
  { phase: "Phase 2 · Risk", body: "Quantifying model bias and Hallucination Impact Probability (HIP) across financial reporting cycles." },
  { phase: "Phase 3 · Operations", body: "Training specialized 'Human-in-the-Loop' reviewers on verification techniques for LLM outputs." },
];

const STAKEHOLDERS = [
  { role: "Governance Board", points: ["Absolute visibility into AI risk posture across the enterprise.", "Centralized policy enforcement for all financial models."] },
  { role: "CTO / IT Lead", points: ["Streamlined integration pathways through secure APIs.", "Standardized evidence logging for infrastructure audits."] },
  { role: "Partner / CPA", points: ["Verified AI assistance that preserves professional judgment.", "Reduced liability through structured oversight trails."] },
];

const CAPABILITIES = [
  { eyebrow: "Reporting", title: "Model Bias Audit", body: "Annual institutional review of model fairness and accuracy drift." },
  { eyebrow: "Compliance", title: "GAAP Guardrails", body: "Real-time validation against the latest accounting standards." },
  { eyebrow: "Security", title: "Private Compute", body: "Client data never touches public LLM training pools." },
  { eyebrow: "Operations", title: "Reviewer Console", body: "Centralized interface for CPA oversight and feedback." },
];

const FAQS = [
  { q: "How does ZoikoLogia™ prevent AI hallucinations?", a: "Every model output is source-bound to validated datasets and passes through classification-tiered human review before it reaches a workflow. High-stakes assertions require CPA verification and are logged against an immutable evidence trail." },
  { q: "Who owns the fine-tuned data weights?", a: "You do. Fine-tuned weights derived from your data remain your institution's property, are stored in private compute, and never enter public LLM training pools." },
  { q: "Is this compatible with SOC2 compliance?", a: "Yes. The governance layer produces audit-ready evidence — access rules, review requirements, and telemetry — designed to map directly onto SOC2 and comparable control frameworks." },
];

const CHIPS = ["Pillars", "Operating Flow", "Control Framework", "Readiness", "Stakeholders", "Capabilities", "FAQ"];
const SLUG = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");

// ─── Signature: the Governance Layer hexagon (SVG) ─────────────────────────────
function GovernanceDiagram() {
  const nodes = [
    { x: 300, y: 62, l1: "Governance", l2: "Policy" },
    { x: 512, y: 176, l1: "Source", l2: "Authority" },
    { x: 512, y: 344, l1: "Risk", l2: "Classification" },
    { x: 300, y: 458, l1: "Reviewer", l2: "Oversight" },
    { x: 88, y: 344, l1: "Evidence &", l2: "Auditability" },
    { x: 88, y: 176, l1: "Quality &", l2: "Release" },
  ];
  const C = { x: 300, y: 260 };
  return (
    <svg viewBox="0 0 600 520" className="h-auto w-full" role="img" aria-label="ZoikoLogia governance layer diagram">
      <defs>
        <marker id="tealArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#0d9488" />
        </marker>
        <marker id="amberArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={AMBER} />
        </marker>
      </defs>
      {nodes.map((n, i) => {
        const m = nodes[(i + 1) % nodes.length];
        const dx = m.x - n.x, dy = m.y - n.y, len = Math.hypot(dx, dy), ux = dx / len, uy = dy / len;
        return <line key={`r${i}`} x1={n.x + ux * 62} y1={n.y + uy * 34} x2={m.x - ux * 70} y2={m.y - uy * 34} stroke="#0d9488" strokeWidth={2} markerEnd="url(#tealArrow)" />;
      })}
      {nodes.map((n, i) => {
        const dx = C.x - n.x, dy = C.y - n.y, len = Math.hypot(dx, dy), ux = dx / len, uy = dy / len;
        return <line key={`s${i}`} x1={n.x + ux * 60} y1={n.y + uy * 30} x2={C.x - ux * 66} y2={C.y - uy * 66} stroke={AMBER} strokeWidth={1.5} strokeDasharray="4 4" markerEnd="url(#amberArrow)" opacity={0.85} />;
      })}
      <circle cx={C.x} cy={C.y} r={62} fill={INK} />
      <text x={C.x} y={C.y - 6} textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="700">ZoikoLogia</text>
      <text x={C.x} y={C.y + 12} textAnchor="middle" fill={AMBER} fontSize="11" fontWeight="600">Governance</text>
      <text x={C.x} y={C.y + 27} textAnchor="middle" fill={AMBER} fontSize="11" fontWeight="600">Layer</text>
      {nodes.map((n, i) => (
        <g key={`n${i}`}>
          <rect x={n.x - 62} y={n.y - 26} width={124} height={52} rx={10} fill="#ffffff" stroke="#e3dccb" strokeWidth={1.5} />
          <text x={n.x} y={n.y - 3} textAnchor="middle" fill={INK} fontSize="12" fontWeight="700">{n.l1}</text>
          <text x={n.x} y={n.y + 14} textAnchor="middle" fill={INK} fontSize="12" fontWeight="700">{n.l2}</text>
        </g>
      ))}
    </svg>
  );
}

// small inline chevron (no icon lib)
function Chevron({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ─── PAGE ───────────────────────────────────────────────────────────────────────
export default function Governance() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const eyebrow = "text-[11px] font-bold uppercase tracking-[0.16em] text-[#0d9488] dark:text-[#34d39e]";
  const amberBtn = "rounded-md px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90";
  const ghostBtn = "rounded-md border border-black/15 px-5 py-2.5 text-sm font-semibold text-[#16233d] transition-colors hover:border-[#0d9488] hover:text-[#0d9488] dark:border-gray-600 dark:text-gray-100";

  return (
    <main className="bg-[#faf7f0] font-sans text-[#16233d] dark:bg-gray-900 dark:text-white">
      {/* ─── Hero ─── */}
      <section className="bg-[#f7f3ea] px-4 py-16 sm:px-6 md:px-8 lg:py-20 dark:bg-gray-800">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#d9720f]">
              <span className="h-px w-6 bg-[#d9720f]" /> AI Governance for Professional Accounting Intelligence
            </p>
            <h1 className="mt-5 max-w-2xl font-serif text-[clamp(2rem,5vw,3rem)] leading-tight">
              Govern accounting AI before it reaches the workflow.
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">
              ZoikoLogia™ provides the institutional framework required to deploy generative accounting models with
              precision, auditability, and regulatory compliance.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#" className={amberBtn} style={{ backgroundColor: "#d9720f" }}>Request Enterprise Briefing</a>
              <a href="#" className={ghostBtn}>Book a Demo</a>
            </div>

            {/* Jump chips */}
            <div className="mt-8 flex flex-wrap gap-3">
              {CHIPS.map((c) => (
                <Link
                  key={c}
                  href={`#${SLUG(c)}`}
                  className="rounded-full border border-black/15 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:border-[#0d9488] hover:text-[#0d9488] dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-[#34d39e] dark:hover:text-[#34d39e]"
                >
                  {c}
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
            <GovernanceDiagram />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 md:px-8">

        {/* ─── Pillars ─── */}
        <section id="pillars" className="scroll-mt-24 border-b border-black/10 py-14 dark:border-gray-700">
          <p className={eyebrow}>Framework · Core Pillars</p>
          <h2 className="mt-3 font-serif text-[clamp(1.4rem,3vw,1.9rem)] leading-tight">Core governance pillars</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">
            The foundational anchors of our institutional AI framework.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {PILLARS.map((p) => (
              <div key={p.title}>
                <h3 className="font-serif text-lg">{p.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Operating Flow ─── */}
        <section id="operating-flow" className="scroll-mt-24 border-b border-black/10 py-14 dark:border-gray-700">
          <p className={eyebrow}>Process · Operating Flow</p>
          <h2 className="mt-3 font-serif text-[clamp(1.4rem,3vw,1.9rem)] leading-tight">The governance operating flow</h2>
          <ol className="mt-6 space-y-5">
            {FLOW.map((s) => (
              <li key={s.n} className="flex gap-4">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ backgroundColor: s.highlight ? AMBER : INK }}
                >
                  {s.n}
                </span>
                <div>
                  <h3 className="text-[15px] font-bold">{s.title}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ─── Control Framework ─── */}
        <section id="control-framework" className="scroll-mt-24 border-b border-black/10 py-14 dark:border-gray-700">
          <p className={eyebrow}>Reference · Control Framework</p>
          <h2 className="mt-3 font-serif text-[clamp(1.4rem,3vw,1.9rem)] leading-tight">Governance control framework</h2>
          <div className="mt-6 overflow-x-auto rounded-lg border border-black/10 dark:border-gray-700">
            <table className="w-full text-left text-sm">
              <thead style={{ backgroundColor: INK }}>
                <tr className="text-[11px] uppercase tracking-wide text-white/80">
                  <th className="px-5 py-3 font-semibold">Access Rule</th>
                  <th className="px-5 py-3 font-semibold">Risk</th>
                  <th className="px-5 py-3 font-semibold">Review Requirement</th>
                  <th className="px-5 py-3 font-semibold">Evidence Standard</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/10 dark:divide-gray-700">
                {RISK_ROWS.map((r) => (
                  <tr key={r.rule} className="bg-white dark:bg-gray-900">
                    <td className="px-5 py-4 font-semibold">{r.rule}</td>
                    <td className="px-5 py-4"><span className={`rounded px-2 py-0.5 text-xs font-bold ${RISK_STYLE[r.level]}`}>{r.level}</span></td>
                    <td className="px-5 py-4 text-slate-600 dark:text-gray-300">{r.review}</td>
                    <td className="px-5 py-4 text-slate-600 dark:text-gray-300">{r.evidence}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ─── Readiness ─── */}
        <section id="readiness" className="scroll-mt-24 border-b border-black/10 py-14 dark:border-gray-700">
          <p className={eyebrow}>Adoption · Enterprise Readiness</p>
          <h2 className="mt-3 font-serif text-[clamp(1.4rem,3vw,1.9rem)] leading-tight">Enterprise readiness framework</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">
            Ensuring institutional alignment before AI integration.
          </p>
          <div className="mt-6 space-y-6">
            {PHASES.map((p) => (
              <div key={p.phase} className="border-l-2 pl-4" style={{ borderColor: AMBER }}>
                <h3 className="font-serif text-lg">{p.phase}</h3>
                <p className="mt-1 text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Stakeholders ─── */}
        <section id="stakeholders" className="scroll-mt-24 border-b border-black/10 py-14 dark:border-gray-700">
          <p className={eyebrow}>Value · Institutional Stakeholders</p>
          <h2 className="mt-3 font-serif text-[clamp(1.4rem,3vw,1.9rem)] leading-tight">Institutional stakeholder value</h2>
          <div className="mt-6 space-y-8">
            {STAKEHOLDERS.map((s) => (
              <div key={s.role}>
                <h3 className="font-serif text-lg">{s.role}</h3>
                <ul className="mt-3 space-y-3">
                  {s.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: AMBER }} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Capabilities ─── */}
        <section id="capabilities" className="scroll-mt-24 border-b border-black/10 py-14 dark:border-gray-700">
          <p className={eyebrow}>Platform · Institutional Capabilities</p>
          <h2 className="mt-3 font-serif text-[clamp(1.4rem,3vw,1.9rem)] leading-tight">Institutional capabilities</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {CAPABILITIES.map((c) => (
              <div key={c.title}>
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#d9720f]">{c.eyebrow}</p>
                <h3 className="mt-1 font-serif text-lg">{c.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">{c.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="scroll-mt-24 py-14">
          <p className={eyebrow}>Answers · Common Questions</p>
          <h2 className="mt-3 font-serif text-[clamp(1.4rem,3vw,1.9rem)] leading-tight">Frequently asked questions</h2>
          <div className="mt-6 space-y-3">
            {FAQS.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q} className="overflow-hidden rounded-lg border border-black/10 bg-white dark:border-gray-700 dark:bg-gray-900">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : i)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-[15px] font-semibold"
                  >
                    {f.q}
                    <Chevron open={open} />
                  </button>
                  {open && <p className="px-5 pb-5 text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">{f.a}</p>}
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* ─── Final CTA ─── */}
      <section className="px-4 pb-20 pt-4 text-center sm:px-6 md:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl bg-[#efe6d2] px-8 py-12 dark:bg-gray-800">
          <h2 className="font-serif text-[clamp(1.6rem,3vw,2.1rem)]">Secure your AI future.</h2>
          <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">
            Join the leading financial institutions already governing their intelligence with ZoikoLogia™.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <a href="#" className={amberBtn} style={{ backgroundColor: INK }}>Get Started</a>
            <a href="#" className={`${ghostBtn} bg-white/60`}>Talk to Sales</a>
          </div>
        </div>
      </section>
    </main>
  );
}

export { Governance };