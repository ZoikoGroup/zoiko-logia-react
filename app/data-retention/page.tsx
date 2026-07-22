"use client";

import Image from "next/image";
import { useState } from "react";

// ─── TOKENS ─────────────────────────────────────────────────────────────────────
const INK = "#16233d";
const NAVY = "#0f1a30";
const AMBER = "#e8912a";


function ImageSlot({ src, alt, ratio = "aspect-[4/3]", rounded = "rounded-xl", className = "" }:
  { src: string; alt: string; ratio?: string; rounded?: string; className?: string }) {
  return (
    <div className={`relative w-full overflow-hidden bg-slate-200 dark:bg-gray-800 ${ratio} ${rounded} ${className}`}>
      <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
    </div>
  );
}

// ─── DATA ──────────────────────────────────────────────────────────────────────
const SUMMARY = [
  { title: "Policy-Driven Retention", body: "Configured around approved tenant policies, workspace boundaries, and data categories — not a hidden default.", link: "Data Protection" },
  { title: "Deletion & Export Workflows", body: "Authorized users can request, track, and review deletion and export actions.", link: "Access Controls" },
  { title: "Legal Hold Handling", body: "Legal hold requires controlled review and permission checks before any deletion proceeds.", link: "Governance Overview" },
  { title: "Evidence-Ready Records", body: "Retention-related actions produce audit-friendly records for review and procurement.", link: "Audit Logs" },
  { title: "Kriton™ Boundary Awareness", body: "Kriton™ operates within configured retention boundaries — it does not override policy on its own.", link: "Responsible AI" },
];

const LIFECYCLE = [
  { n: 1, title: "Data Collection", body: "Prompts, files, sources, responses, review actions, and admin activity enter the workflow.", link: "Data Protection" },
  { n: 2, title: "Classification", body: "Source materials, workspace records, interactions, and artifacts are categorized.", link: "Privacy Briefing" },
  { n: 3, title: "Retention Schedule", body: "Tenant-approved schedules and enterprise configuration are set and reviewed.", link: "Trust Pack" },
  { n: 4, title: "Legal Hold & Review", body: "Investigation or hold workflows require authorized review and may pause deletion.", link: "Speak With Trust Team" },
  { n: 5, title: "Deletion / Export", body: "Authorized deletion, export, and evidence handoff.", link: "Enterprise Demo" },
  { n: 6, title: "Audit Record", body: "Retention actions are logged, and outcomes are preserved.", link: "Audit Logs" },
];

type MatrixRow = { category: string; consideration: string; controls: string; concern: string };
const MATRIX: MatrixRow[] = [
  { category: "Prompts & Kriton™ Interactions", consideration: "May require workspace-level retention, review, export, and deletion policy.", controls: "Role access, tenant policy, review status, audit logs.", concern: "\"Does the platform retain AI conversations indefinitely?\"" },
  { category: "Uploaded Documents & Sources", consideration: "Tied to workspace policy, source eligibility, and licensing.", controls: "Approved source controls, retention tags, delete/export workflows.", concern: "\"Can we control files and source packs?\"" },
  { category: "Generated Answers & Citations", consideration: "May be retained as evidence, review artifacts, or workspace records.", controls: "Evidence log, reviewer status, citation trail, retention label.", concern: "\"Can we prove what the AI produced?\"" },
  { category: "Audit Logs & Admin Actions", consideration: "Often require separate security and compliance retention treatment.", controls: "Tamper-evident logging design, role-scoped access.", concern: "\"Can admin and deletion actions be reviewed?\"" },
  { category: "Integration Metadata", consideration: "Includes system identifiers, workflow status, timestamps, connector events.", controls: "Integration controls, data minimization, access controls.", concern: "\"What happens when HRIS/ERP/DMS systems connect?\"" },
  { category: "Support & Procurement Records", consideration: "Governed by separate support or contract processes.", controls: "Support boundaries, trust pack, DPA-link, legal pack.", concern: "\"Will support data be mixed with workspace data?\"" },
];

const ADMIN_CARDS = [
  { title: "Retention Policy Summary", body: "Default retention posture, configurable enterprise areas, legal hold status, and last policy review date, all visible to admins." },
  { title: "Workspace Retention Settings", body: "Workspace and tenant-level policy can be reviewed by authorized admins — built for multi-client accounting firms." },
  { title: "Deletion Request Workflow", body: "Request, review, approve/deny, dependency check, hold check, execution, and audit record — every step tracked." },
  { title: "Export & Evidence Drawer", body: "An export package concept for permitted records, logs, and evidence references — supports audits and offboarding." },
  { title: "Legal Hold Banner", body: "A visible signal when deletion is paused due to authorized hold or investigation policy." },
  { title: "Kriton™ Context Boundary", body: "Kriton™ cannot bypass retention, access, source, or legal-hold boundaries — policy authority stays with the tenant." },
];

type RoleRow = { role: string; promise: string; module: string };
const ROLES: RoleRow[] = [
  { role: "DPO / Privacy Officer", promise: "Clear view of retention scope, deletion workflows, export controls, and policy boundaries.", module: "Retention Lifecycle + FAQ" },
  { role: "CISO / Security Lead", promise: "Retention linked to access control, encryption, logging, and admin review.", module: "Retention Control Summary" },
  { role: "Legal / Compliance", promise: "Legal hold, evidence preservation, and deletion explained with bounded language.", module: "Trust & Legal Boundaries" },
  { role: "Accounting Firm Partner", promise: "Client workspace retention, evidence records, and review boundaries support practice trust.", module: "Workspace Retention Settings" },
  { role: "Enterprise Finance Controller", promise: "Finance records and AI-assisted outputs governed within defined retention workflows.", module: "Data Category Matrix" },
  { role: "Procurement Lead", promise: "Trust Pack, privacy briefing, and legal pack make due diligence faster.", module: "Final CTA Panel" },
];

const BOUNDARIES = [
  "Retention and deletion workflows are designed to support customer policy, contract terms, applicable law, and authorized review — not a universal compliance guarantee.",
  "Authorized deletion is subject to retention policy, legal hold, backups, evidence requirements, and operational constraints — not an instant, unconditional action.",
  "Legal hold handling is designed to prevent deletion where authorized hold policies require preservation.",
  "Backup retention and purge behavior is addressed in enterprise documentation and contractual materials, not overspecified here.",
  "Retention events are logged in audit-ready records with role, timestamp, policy reference, and outcome — described as tamper-evident, not \"immutable,\" unless formally verified.",
  "Kriton™ respects configured platform controls and does not independently override retention or legal-hold policy.",
  "ZoikoLogia™ supports operational governance; legal determinations remain with the customer and their authorized advisors.",
];

const FAQS = [
  { q: "How does ZoikoLogia™ handle data retention?", a: "Through tenant-approved retention policy, data categorization, access controls, audit logs, and deletion/export workflows working together." },
  { q: "Does Kriton™ retain prompts forever?", a: "No. Prompts and interactions are governed by workspace-level retention policy, review status, and deletion controls — not kept indefinitely by default." },
  { q: "Can organizations delete AI-assisted records?", a: "Yes. Authorized users can request deletion through a tracked workflow, subject to retention policy, legal hold, and dependency checks." },
  { q: "Can retention be configured by workspace or client?", a: "Yes. Workspace and tenant-level retention can be reviewed and configured by authorized admins — built for multi-client accounting firms." },
  { q: "Are audit logs deleted along with workspace data?", a: "Audit logs often receive separate security and compliance retention treatment, so they may be retained independently of workspace content." },
  { q: "What happens during a legal hold?", a: "Deletion is paused for affected data. A visible legal hold banner signals the pause, and controlled review is required before any deletion resumes." },
  { q: "Can data be exported for audit or offboarding?", a: "Yes. An export/evidence package supports permitted records, logs, and evidence references for audits and offboarding." },
  { q: "Does ZoikoLogia™ guarantee compliance with every privacy law?", a: "No. The controls are designed to support your policy, contract terms, applicable law, and authorized review — not a universal compliance guarantee." },
  { q: "Does deletion remove data from backups immediately?", a: "Not necessarily. Backup retention and purge behavior follows enterprise documentation and contractual materials rather than instant, unconditional removal." },
  { q: "Who can change retention settings?", a: "Only authorized admins, within tenant-approved policy. Changes are access-controlled and captured in audit records." },
];

// ─── inline SVG helpers ─────────────────────────────────────────────────────────
function Chevron({ open }: { open: boolean }) {
  return <svg viewBox="0 0 24 24" className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function Info({ className = "h-4 w-4" }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 8h.01M11 12h1v4h1" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

// Retention Lifecycle Control Map — compact SVG strip for the hero image overlay.
function ControlMap() {
  const steps = ["Collect", "Classify", "Schedule", "Hold/Review", "Delete/Export", "Evidence"];
  const x0 = 20, gap = (560 - 40) / (steps.length - 1);
  return (
    <svg viewBox="0 0 580 92" className="h-auto w-full" role="img" aria-label="Retention lifecycle control map">
      <text x="20" y="18" fill="#f0a54a" fontSize="9" fontWeight="700" letterSpacing="1">RETENTION LIFECYCLE CONTROL MAP</text>
      <line x1={x0} y1="52" x2={x0 + gap * (steps.length - 1)} y2="52" stroke="#0d9488" strokeWidth="1.5" strokeDasharray="2 3" />
      {steps.map((s, i) => {
        const x = x0 + i * gap;
        return (
          <g key={s}>
            <circle cx={x} cy="52" r="8" fill={i === steps.length - 1 ? AMBER : "#0f1a30"} stroke="#0d9488" strokeWidth="1.5" />
            <text x={x} y="55" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="700">{i + 1}</text>
            <text x={x} y="76" textAnchor="middle" fill="#cbd5e1" fontSize="7.5">{s}</text>
          </g>
        );
      })}
    </svg>
  );
}

const eyebrowAmber = "flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#d9720f]";
const serifH = "font-serif leading-tight";
const tealLink = "text-sm font-semibold text-[#0d9488] hover:underline";
const creamBand = "bg-[#f5efe0] dark:bg-gray-800/60";

// ─── PAGE ───────────────────────────────────────────────────────────────────────
export default function Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const amberBtn = "rounded-md px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90";

  return (
    <main className="bg-[#faf7f0] font-sans text-[#16233d] dark:bg-gray-900 dark:text-white">

      {/* ─── Hero (navy) + control-map image ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8 lg:py-20" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="text-white">
            <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#0d9488]">
              <span className="h-px w-6 bg-[#0d9488]" /> Privacy & Security for Governed Accounting Intelligence
            </p>
            <h1 className={`mt-5 max-w-xl text-[clamp(2rem,4.5vw,2.9rem)] ${serifH}`}>Control how accounting intelligence data is retained, reviewed, exported, and deleted.</h1>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-slate-300/85">
              ZoikoLogia™ helps organizations manage retention for AI-assisted accounting workflows with tenant-approved
              policies, access controls, audit logs, deletion controls, legal hold handling, and evidence-ready records.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#" className={amberBtn} style={{ backgroundColor: AMBER }}>Request Privacy & Security Review</a>
              <a href="#" className="rounded-md border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10">Book an Enterprise Demo</a>
            </div>
            <p className="mt-6 max-w-md text-xs leading-relaxed text-slate-400/70">
              Designed to support governed retention workflows. Retention configuration, deletion, export, and legal hold
              handling remain subject to customer policy, applicable law, and authorized review.
            </p>
          </div>

          <div className="relative">
            <ImageSlot src="/images/AI governance team reviewing platform controls.png" alt="Retention lifecycle control map" ratio="aspect-[4/3]" rounded="rounded-2xl" />
            <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-white/10 bg-[#0f1a30]/95 px-3 py-2 shadow-xl">
              <ControlMap />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Retention control summary (5 cards) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Retention Control Summary</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Five things procurement checks first.</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {SUMMARY.map((c) => (
              <div key={c.title} className="flex flex-col rounded-xl border border-black/10 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <h3 className="text-sm font-bold">{c.title}</h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-600 dark:text-gray-300">{c.body}</p>
                <a href="#" className={`${tealLink} mt-4 inline-block text-xs`}>{c.link} →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Retention lifecycle (6 steps, cream band) ─── */}
      <section className={`px-4 py-16 sm:px-6 md:px-8 ${creamBand}`}>
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Retention Lifecycle</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Six governed steps, not a static policy document.</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
            {LIFECYCLE.map((s) => (
              <div key={s.n}>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold text-white" style={{ backgroundColor: s.n === 6 ? AMBER : INK }}>{s.n}</div>
                <h3 className="mt-3 text-sm font-bold">{s.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-gray-300">{s.body}</p>
                <a href="#" className={`${tealLink} mt-2 inline-block text-xs`}>{s.link}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Data category matrix (table) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Data Category Matrix</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Not all data is treated identically.</h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-600 dark:text-gray-300">What buyers actually ask, mapped to the category and controls that answer it.</p>
          <div className="mt-6 overflow-x-auto rounded-xl border border-black/10 dark:border-gray-700">
            <table className="w-full min-w-[820px] text-left text-sm">
              <thead style={{ backgroundColor: INK }}>
                <tr className="text-[11px] uppercase tracking-wide text-white/80">
                  <th className="px-5 py-3 font-semibold">Data Category</th>
                  <th className="px-5 py-3 font-semibold">Retention Consideration</th>
                  <th className="px-5 py-3 font-semibold">Controls Shown</th>
                  <th className="px-5 py-3 font-semibold">Buyer Concern Resolved</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/10 dark:divide-gray-700">
                {MATRIX.map((r) => (
                  <tr key={r.category} className="bg-white align-top dark:bg-gray-900">
                    <td className="px-5 py-4 font-semibold">{r.category}</td>
                    <td className="px-5 py-4 text-slate-600 dark:text-gray-300">{r.consideration}</td>
                    <td className="px-5 py-4 text-slate-600 dark:text-gray-300">{r.controls}</td>
                    <td className="px-5 py-4 text-[13px] italic text-[#0d9488]">{r.concern}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── How you stay in control (6 admin cards, cream band) ─── */}
      <section className={`px-4 py-16 sm:px-6 md:px-8 ${creamBand}`}>
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> How You Stay in Control</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>The admin-facing side of retention.</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ADMIN_CARDS.map((c) => (
              <div key={c.title} className="rounded-xl border border-black/10 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <h3 className="text-base font-bold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-gray-300">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Role-based value (table) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Role-Based Value</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Wherever you sit in the review, there's a proof point.</h2>
          <div className="mt-6 overflow-x-auto rounded-xl border border-black/10 dark:border-gray-700">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead style={{ backgroundColor: INK }}>
                <tr className="text-[11px] uppercase tracking-wide text-white/80">
                  <th className="px-5 py-3 font-semibold">Role</th>
                  <th className="px-5 py-3 font-semibold">Value Promise</th>
                  <th className="px-5 py-3 font-semibold">Proof Module</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/10 dark:divide-gray-700">
                {ROLES.map((r) => (
                  <tr key={r.role} className="bg-white align-top dark:bg-gray-900">
                    <td className="px-5 py-4 font-semibold">{r.role}</td>
                    <td className="px-5 py-4 text-slate-600 dark:text-gray-300">{r.promise}</td>
                    <td className="px-5 py-4 text-slate-600 dark:text-gray-300">{r.module}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── Trust & legal boundaries (cream band) ─── */}
      <section className={`px-4 py-16 sm:px-6 md:px-8 ${creamBand}`}>
        <div className="mx-auto max-w-4xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Trust & Legal Boundaries</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>What we don't claim — stated plainly.</h2>
          <div className="mt-8 space-y-3">
            {BOUNDARIES.map((b, i) => (
              <div key={i} className="flex gap-3 rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <span className="mt-0.5 shrink-0 text-[#d9720f]"><Info className="h-4 w-4" /></span>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-gray-300">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-4xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Frequently Asked</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Retention and deletion questions, answered plainly.</h2>
          <div className="mt-8 divide-y divide-black/10 border-y border-black/10 dark:divide-gray-700 dark:border-gray-700">
            {FAQS.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q}>
                  <button type="button" onClick={() => setOpenFaq(open ? null : i)} aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 py-4 text-left text-[15px] font-semibold">
                    {f.q}<Chevron open={open} />
                  </button>
                  {open && <p className="pb-4 text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">{f.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Final CTA (navy) ─── */}
      <section className="px-4 pb-20 sm:px-6 md:px-8">
        <div className="mx-auto max-w-5xl rounded-2xl px-8 py-14 text-center" style={{ backgroundColor: NAVY }}>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0d9488]">Before You Deploy</p>
          <h2 className={`mx-auto mt-3 max-w-2xl text-[clamp(1.6rem,3vw,2.2rem)] text-white ${serifH}`}>Evaluate data retention controls for governed accounting intelligence.</h2>
          <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-slate-300/80">
            See how ZoikoLogia™ and Kriton™ can support tenant-controlled retention, deletion, export, legal hold, and
            evidence-ready audit workflows for AI-assisted accounting operations.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#" className={amberBtn} style={{ backgroundColor: AMBER }}>Request Privacy & Security Review</a>
            <a href="#" className="rounded-md border border-white/25 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10">Book an Enterprise Demo</a>
          </div>
          <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-semibold text-[#0d9488]">
            <a href="#" className="hover:underline">Explore Audit Logs</a>
            <a href="#" className="hover:underline">View Data Protection</a>
            <a href="#" className="hover:underline">Explore Responsible AI</a>
            <a href="#" className="hover:underline">Download Trust Pack</a>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-xs leading-relaxed text-slate-400/70">
            Retention, deletion, legal hold, backup, and export behavior remain subject to customer configuration,
            contract terms, applicable law, and authorized review.
          </p>
        </div>
      </section>
    </main>
  );
}