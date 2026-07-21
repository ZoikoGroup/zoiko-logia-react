"use client";

import { useState } from "react";

// ─── TOKENS ─────────────────────────────────────────────────────────────────────
const INK = "#16233d";
const NAVY = "#0f1a30";
const AMBER = "#e8912a";

const INTRO = [
  { h: "Data Protection", body: "The systematic technical and organizational framework designed to safeguard personal and financial data from unauthorized access, loss, or misuse." },
  { h: "Why It Matters", body: "Confidentiality is the bedrock of accounting. Without governed controls, the risk of data leakage and non-compliance threatens institutional integrity." },
  { h: "Kriton™ Relationship", body: "Kriton™ acts as a governed advisor, operating strictly within encrypted sandboxes where every prompt and output is subject to privacy-first routing." },
];

const PILLARS = [
  { title: "Privacy-by-Design", body: "Privacy embedded into the initial design and operation of all financial data ingestion systems." },
  { title: "Data Minimization", body: "Only processing the minimum amount of data required to achieve specific accounting objectives." },
  { title: "Tenant Isolation", body: "Strict logical silos ensuring your firm's data never mingles with other customers' environments." },
  { title: "Role-Based Access", body: "Granular RBAC controls to restrict sensitive financial data to authorized personnel only." },
  { title: "Source Governance", body: "Verified authority check on all ingested documents and ledger entries before AI analysis." },
  { title: "Prompt Controls", body: "Real-time filtering of AI interactions to prevent leakage of PII or proprietary trade secrets." },
  { title: "Retention Policy", body: "Automated deletion schedules and data purging in accordance with statutory requirements." },
  { title: "Audit-Ready Logging", body: "Comprehensive evidence trails for every data access event, ready for compliance reviews." },
];

type Badge = { label: string; tone: "red" | "amber" | "teal" | "green" | "slate" };
type Category = { category: string; examples: string; badges: Badge[] };
const BADGE_TONES: Record<Badge["tone"], string> = {
  red: "bg-red-100 text-red-700",
  amber: "bg-amber-100 text-amber-700",
  teal: "bg-teal-100 text-teal-700",
  green: "bg-green-100 text-green-700",
  slate: "bg-slate-200 text-slate-700",
};
const CATEGORIES: Category[] = [
  { category: "Tenant Data", examples: "Admin credentials, organizational settings, domain configurations.", badges: [{ label: "Encrypted at Rest", tone: "red" }, { label: "MFA Mandatory", tone: "red" }] },
  { category: "Accounting Data", examples: "General ledgers, balance sheets, payroll records, transaction logs.", badges: [{ label: "Tenant Isolated", tone: "amber" }, { label: "SOC2 Compliant", tone: "teal" }] },
  { category: "Source Files", examples: "Invoices, receipts, contract PDFs, bank statement exports.", badges: [{ label: "OCR Sandboxed", tone: "teal" }, { label: "Virus Scanned", tone: "green" }] },
  { category: "Kriton™ Prompts", examples: "Natural language queries, analysis requests, debugging logs.", badges: [{ label: "No Model Training", tone: "red" }, { label: "Auto-Purge 24h", tone: "amber" }] },
];

const LIFECYCLE = [
  { n: 1, title: "Classify", sub: "Sensitive label tagging" },
  { n: 2, title: "Purpose", sub: "Strict use validation" },
  { n: 3, title: "Minimize", sub: "Strip unnecessary PII" },
  { n: 4, title: "Access", sub: "Just-in-time RBAC" },
  { n: 5, title: "Route", sub: "Secure AI gateway" },
  { n: 6, title: "Preserve", sub: "Encrypted journaling" },
  { n: 7, title: "Govern", sub: "Compliance reporting", highlight: true },
];

const DSR_METHODS = [
  "Automated Request Validation",
  "Auditable Response Workflow",
  "Regulatory Compliance Mapping",
];
const DSR_RIGHTS = [
  { title: "Access", body: "Review all personal and accounting data stored within your firm's tenant." },
  { title: "Correction", body: "Update inaccurate source records or ledger metadata at the schema level." },
  { title: "Deletion", body: "Request cryptographic erasure of specific data sets, subject to retention laws." },
  { title: "Confidentiality", body: "Restrict processing of high-sensitivity transactional data for AI analysis." },
];

const FAQS = [
  { q: "Does Kriton™ train on my data?", a: "No. Kriton™ prompts are flagged No Model Training and auto-purged on a 24-hour cycle; your data is not used to train a shared model." },
  { q: "Who can see my prompts and outputs?", a: "Access is governed by role-based controls within your isolated tenant. Prompts and outputs stay inside your environment and are visible only to authorized roles." },
  { q: "How do I remove data from the platform?", a: "Through a Data Subject Request: cryptographic erasure of specific data sets is available, subject to statutory retention requirements and an auditable response workflow." },
  { q: "Is ZoikoLogia GDPR and CCPA compliant?", a: "ZoikoLogia is designed to support GDPR and CCPA obligations through data minimization, access controls, retention policies, and DSR handling. Compliance outcomes depend on your configuration and lawful use." },
];

// ─── inline SVG helpers ─────────────────────────────────────────────────────────
function Chevron({ open }: { open: boolean }) {
  return <svg viewBox="0 0 24 24" className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function Shield({ className = "h-5 w-5" }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

// Data Protection Control Plane diagram (SVG signature element)
function ControlPlaneDiagram() {
  const stages = ["Data\nClassification", "Purpose\nLimitation", "Protected\nData Zone", "Access\nGovernance", "Retention\nMonitoring"];
  const x0 = 24, w = 96, gap = 18, y = 96;
  return (
    <svg viewBox="0 0 610 260" className="h-auto w-full" role="img" aria-label="ZoikoLogia data protection control plane">
      <rect x="8" y="8" width="594" height="244" rx="10" fill="#faf7f0" stroke="#e3dccb" />
      <text x="305" y="42" textAnchor="middle" fill={INK} fontSize="15" fontWeight="700">ZoikoLogia Data Protection Control Plane</text>

      {stages.map((label, i) => {
        const x = x0 + i * (w + gap);
        const isCore = i === 2;
        return (
          <g key={i}>
            {i < stages.length - 1 && (
              <path d={`M${x + w + 2} ${y + 26} L${x + w + gap - 2} ${y + 26}`} stroke={AMBER} strokeWidth="2" markerEnd="url(#dpArrow)" />
            )}
            <rect x={x} y={y} width={w} height={52} rx={8} fill={isCore ? INK : "#ffffff"} stroke={isCore ? INK : "#0d9488"} strokeWidth="1.5" />
            {isCore && (
              <g transform={`translate(${x + w / 2}, ${y + 18})`}>
                <path d="M0 -8 L7 -5 v5 c0 4.5 -3 7 -7 9 c-4 -2 -7 -4.5 -7 -9 v-5 z" fill={AMBER} />
              </g>
            )}
            {label.split("\n").map((ln, k) => (
              <text key={k} x={x + w / 2} y={y + (isCore ? 38 : 24) + k * 12} textAnchor="middle"
                fill={isCore ? "#ffffff" : "#0d9488"} fontSize="9" fontWeight="700">{ln}</text>
            ))}
          </g>
        );
      })}

      <path d="M24 176 L586 176" stroke="#c9bfa6" strokeWidth="1" strokeDasharray="3 3" />
      <text x="305" y="196" textAnchor="middle" fill={INK} fontSize="10" fontWeight="600">Automated Policy Enforcement &amp; Compliance Oversight</text>
      <text x="24" y="230" fill="#a99f86" fontSize="8" fontWeight="700" letterSpacing="1">ZOIKOLOGIA · ENTERPRISE SECURITY SUITE</text>

      <defs>
        <marker id="dpArrow" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
          <path d="M0,0 L5,3 L0,6 Z" fill={AMBER} />
        </marker>
      </defs>
    </svg>
  );
}

const serifH = "font-serif leading-tight";
const tealLink = "text-sm font-semibold text-[#0d9488] hover:underline";

// ─── PAGE ───────────────────────────────────────────────────────────────────────
export default function Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const amberBtn = "rounded-md px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90";
  const ghostBtn = "rounded-md border border-black/15 px-5 py-2.5 text-sm font-semibold text-[#16233d] transition-colors hover:border-[#0d9488] hover:text-[#0d9488] dark:border-gray-600 dark:text-gray-100";

  return (
    <main className="bg-[#faf7f0] font-sans text-[#16233d] dark:bg-gray-900 dark:text-white">

      {/* ─── Hero (navy) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8 lg:py-20" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="text-white">
            <span className="inline-block rounded px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#0f1a30]" style={{ backgroundColor: AMBER }}>
              Privacy & Security for AI Accounting Intelligence
            </span>
            <h1 className={`mt-5 max-w-xl text-[clamp(2rem,4.5vw,2.9rem)] ${serifH}`}>Protect Sensitive Accounting Workflows With Governed Data Controls</h1>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-slate-300/85">
              ZoikoLogia provides institutional-grade protection through multi-tenant isolation, granular RBAC, and
              automated data minimization. Ensure your financial data remains confidential while leveraging Kriton™ AI.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#" className={amberBtn} style={{ backgroundColor: AMBER }}>Request Security Review</a>
              <a href="#" className="rounded-md border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10">Book a Demo</a>
            </div>
            <p className="mt-6 max-w-md text-xs leading-relaxed text-slate-400/70">
              * Data protection capabilities depend on configuration. ZoikoLogia does not provide legal advice.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#faf7f0] p-4 shadow-lg">
            <ControlPlaneDiagram />
          </div>
        </div>
      </section>

      {/* ─── Intro trio ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
          {INTRO.map((c) => (
            <div key={c.h}>
              <h2 className="text-lg font-bold">{c.h}</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Core protection pillars (grey band) ─── */}
      <section className="bg-[#f2f4f7] px-4 py-16 sm:px-6 md:px-8 dark:bg-gray-800/60">
        <div className="mx-auto max-w-6xl">
          <h2 className={`text-center text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Core Protection Pillars</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-slate-500 dark:text-gray-400">
            Institutional standards applied to every layer of the accounting ecosystem.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p) => (
              <div key={p.title} className="rounded-xl border border-black/10 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-md text-white" style={{ backgroundColor: INK }}>
                  <Shield className="h-4 w-4" />
                </div>
                <h3 className="text-base font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-gray-300">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Protected data categories (table) ─── */}
      <section className="bg-[#f2f4f7] px-4 pb-16 sm:px-6 md:px-8 dark:bg-gray-800/60">
        <div className="mx-auto max-w-6xl">
          <h2 className={`text-[clamp(1.4rem,3vw,1.8rem)] ${serifH}`}>Protected Data Categories</h2>
          <p className="mt-2 text-sm text-slate-500 dark:text-gray-400">Classification and protection requirements for accounting ecosystem data.</p>
          <div className="mt-6 overflow-x-auto rounded-xl border border-black/10 dark:border-gray-700">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead style={{ backgroundColor: INK }}>
                <tr className="text-[11px] uppercase tracking-wide text-white/80">
                  <th className="px-5 py-3 font-semibold">Category</th>
                  <th className="px-5 py-3 font-semibold">Examples</th>
                  <th className="px-5 py-3 font-semibold">Protection Requirements</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/10 dark:divide-gray-700">
                {CATEGORIES.map((r) => (
                  <tr key={r.category} className="bg-white dark:bg-gray-900">
                    <td className="px-5 py-4 font-semibold">{r.category}</td>
                    <td className="px-5 py-4 text-slate-600 dark:text-gray-300">{r.examples}</td>
                    <td className="px-5 py-4">
                      <div className="flex flex-wrap gap-2">
                        {r.badges.map((b) => (
                          <span key={b.label} className={`rounded px-2 py-0.5 text-[11px] font-bold ${BADGE_TONES[b.tone]}`}>{b.label}</span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── Governance lifecycle (7 steps) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className={`text-center text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Governance Lifecycle</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-slate-500 dark:text-gray-400">The 7-step process for secure data handling.</p>
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-7">
            {LIFECYCLE.map((s) => (
              <div key={s.n} className="text-center">
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-lg text-sm font-bold text-white" style={{ backgroundColor: s.highlight ? AMBER : INK }}>{s.n}</div>
                <h3 className="mt-3 text-sm font-bold">{s.title}</h3>
                <p className="mt-1 text-xs text-slate-500 dark:text-gray-400">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Subject rights & support (grey band) ─── */}
      <section className="bg-[#f2f4f7] px-4 py-16 sm:px-6 md:px-8 dark:bg-gray-800/60">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <div>
            <h2 className={`text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Subject Rights &amp; Support</h2>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">
              We provide a streamlined mechanism for handling Data Subject Requests (DSR) within the enterprise
              environment. All requests are processed with legal-safe boundaries.
            </p>
            <div className="mt-6 space-y-3">
              {DSR_METHODS.map((m) => (
                <div key={m} className="flex items-center gap-3 rounded-lg border border-black/10 bg-white px-4 py-3 text-sm font-semibold shadow-sm dark:border-gray-700 dark:bg-gray-900">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md text-white" style={{ backgroundColor: AMBER }}>
                    <Shield className="h-3.5 w-3.5" />
                  </span>
                  {m}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {DSR_RIGHTS.map((r) => (
              <div key={r.title} className="rounded-xl border border-black/10 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <h3 className="text-[15px] font-bold">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-gray-300">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className={`text-center text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Frequently Asked Questions</h2>
          <div className="mt-8 space-y-3">
            {FAQS.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q} className="overflow-hidden rounded-lg border border-black/10 bg-white dark:border-gray-700 dark:bg-gray-900">
                  <button type="button" onClick={() => setOpenFaq(open ? null : i)} aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-[15px] font-semibold">
                    {f.q}<Chevron open={open} />
                  </button>
                  {open && <p className="px-5 pb-5 text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">{f.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Final CTA (navy) ─── */}
      <section className="px-4 pb-20 sm:px-6 md:px-8">
        <div className="mx-auto max-w-5xl rounded-2xl px-8 py-16 text-center" style={{ backgroundColor: NAVY }}>
          <h2 className={`mx-auto max-w-2xl text-[clamp(1.6rem,3vw,2.2rem)] text-white ${serifH}`}>Review Data Protection Before Enterprise Deployment</h2>
          <p className="mx-auto mt-3 max-w-lg text-[15px] leading-relaxed text-slate-300/80">
            Partner with our security team to ensure your deployment meets your firm's specific compliance and privacy requirements.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#" className={amberBtn} style={{ backgroundColor: AMBER }}>Request Security Review</a>
            <a href="#" className="rounded-md border border-white/25 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10">Download Privacy Whitepaper</a>
          </div>
        </div>
      </section>
    </main>
  );
}