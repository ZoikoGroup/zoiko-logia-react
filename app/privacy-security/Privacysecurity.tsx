"use client";

import { useState } from "react";

// ─── TOKENS ─────────────────────────────────────────────────────────────────────
const INK = "#16233d";
const NAVY = "#0f1a30";
const AMBER = "#e8912a";

// NOTE: renders inside your global layout (Header + Footer provided there) — omitted here.

// ─── DATA ──────────────────────────────────────────────────────────────────────
const HERO_CORE = [
  "Identity & Access", "Data Protection",
  "Source & Model Controls", "Audit & Procurement",
  "Privacy Operations",
];

const PLAIN = [
  { title: "Tenant Boundaries", body: "Customer environments and permissions are framed as logically separated and governed by customer role configuration.", link: "Reduce risk of unconstrained cross-customer exposure" },
  { title: "Role-Based Access", body: "Users only see or do what their authorized role permits.", link: "Supports enterprise deployment expectations" },
  { title: "Source Eligibility", body: "Kriton™ only uses approved, licensed, or tenant-authorized sources within defined boundaries.", link: "Connects to Source Authority & Responsible AI" },
  { title: "Audit-Ready Records", body: "Important actions, outputs, source references, and escalations support traceability where enabled.", link: "Supports legal, compliance, and audit confidence" },
  { title: "Retention Discipline", body: "Retention is configurable in contract-governed where applicable — never presented as one-size-fits-all.", link: "Prevents overclaiming for regulated buyers" },
];

const PILLARS = [
  { title: "Identity & Access", body: "SSO, MFA, role-based access controls, and least-privilege permission concepts.", link: "Explore Access Controls" },
  { title: "Data Protection", body: "Encryption posture, segmentation, secure handling, and controlled exports.", link: "Request Security Briefing" },
  { title: "Audit Logging", body: "Logging and evidence readiness for key actions, outputs, reviews, and escalations where enabled.", link: "Explore Audit Logs" },
  { title: "Source & Model Governance", body: "Source authority, restricted source handling, prompt safeguards, and response boundary controls.", link: "Explore Source Authority" },
  { title: "Review & Escalation", body: "Human review, high-risk routing, limitations, and professional boundary enforcement.", link: "Explore Escalation Controls" },
  { title: "Release & Testing Controls", body: "Quality testing, release gates, and controlled model or system changes.", link: "Explore Governance" },
];

const COMMITMENTS = [
  { h: "Data Minimization", body: "ZoikoLogia™ is designed to help customers use only the data needed for governed accounting workflows." },
  { h: "Purpose Limitation", body: "Customer data should be used only within authorized product, support, security, legal, and contract-defined purposes." },
  { h: "Customer Control", body: "Customers have administrative control over users, roles, access, workflows, and retention pathways where enabled." },
  { h: "Sensitive Data Handling", body: "We discourage unnecessary sensitive personal data entry and direct users to policy-based controls instead." },
  { h: "Deletion / Access Requests", body: "A review pathway for privacy requests is available, subject to legal, security, contractual, and operational constraints." },
  { h: "Training Boundary", body: "Customer data use is governed by contract and configuration. We do not make unconfirmed claims about training status either way." },
];

const KRITON_BOUNDARIES = [
  { title: "Tenant Boundary", body: "Kriton™ operates within your authorized workspace, role, and source boundaries — not open-ended." },
  { title: "Role Boundary", body: "User permissions shape what a person can access, ask, export, review, or approve." },
  { title: "Source Boundary", body: "Kriton™ draws from approved source bundles, tenant materials, and licensed sources where enabled." },
  { title: "Risk Boundary", body: "High-risk or unsupported requests trigger limitation notices, review routing, or escalation." },
  { title: "Evidence Boundary", body: "Important outputs preserve source, assumption, revision, and limitation context where enabled." },
  { title: "Integration Boundary", body: "Connected systems use scoped permissions, logging, and admin oversight." },
];

const ENTERPRISE_PATHS = [
  { title: "Security Review", body: "Structured enterprise review without publishing sensitive implementation details.", link: "Request Security Briefing" },
  { title: "Privacy Review", body: "Privacy documentation and DPO review pathway, subject to contract scope.", link: "Request Privacy Review" },
  { title: "Vendor Risk Pack", body: "Security overview, privacy overview, data handling summary, subprocessor review pathway, audit logging overview, and incident contact process.", link: "Request Enterprise Review Pack", highlight: true },
  { title: "Controlled Pilot Path", body: "Test with limited users, sources, data, roles, and workflows before broad rollout.", link: "Request Controlled Pilot" },
  { title: "Legal & Compliance Boundary", body: "All final terms, obligations, and data processing details are governed by signed agreements.", link: "Contact Legal/Compliance" },
];

const JOURNEYS = [
  { role: "CISO", concern: "Security posture, access control, logging, incident response", path: "Here → Security Pillars → Procurement → FAQ", cta: "Request Security Briefing" },
  { role: "DPO / Privacy Officer", concern: "Data use, retention, lawful basis, request handling", path: "Here → Privacy Commitments → Kriton™ Boundaries → FAQ", cta: "Request Privacy Review" },
  { role: "Legal / Compliance", concern: "Professional boundaries, risk language, source licensing", path: "Here → Limitations → Responsible AI → Review Pack", cta: "Request Enterprise Review Pack" },
  { role: "Procurement", concern: "Vendor risk, documentation, review timeline", path: "Here → Procurement Module → Final CTA", cta: "Request Vendor Review Pack" },
  { role: "Accounting Firm Leader", concern: "Client confidentiality, reviewer controls, rollout risk", path: "Here → Kriton™ Boundaries → Pilot Path → Demo", cta: "Request Controlled Pilot" },
  { role: "Enterprise Finance Leader", concern: "Adoption safety, governance, permissions, auditability", path: "Here → Control Pillars → Demo", cta: "Book a Demo" },
];

const INTEGRATIONS = [
  { title: "Connection Approval", body: "Integrations require administrative authorization and appropriate scope selection.", link: "Explore Integrations" },
  { title: "Scoped Permissions", body: "Permissions are scoped to the workflow and system capability, not granted broadly.", link: "Request Security Briefing" },
  { title: "Event Logging", body: "Integration events, administrative actions, and critical workflow events support traceability where enabled.", link: "Explore Event Governance" },
  { title: "Export Controls", body: "Outputs and exports align with role permissions and tenant policies.", link: "Explore Access Controls" },
  { title: "Third-Party Review", body: "Third-party data flows, subprocessors, and vendor dependencies are reviewed through the formal review pack.", link: "Request Enterprise Review Pack" },
];

const LIMITATIONS = [
  "Compliance outcomes depend on deployment, configuration, jurisdiction, source eligibility, and your obligations — not a blanket guarantee.",
  "Kriton™ is designed to operate within governed access, source, tenant, review, and escalation boundaries — not an unconditional service guarantee.",
  "ZoikoLogia™ is designed with security controls and review pathways; no system can guarantee zero security risk.",
  "Customer security documentation and review pathways are available on request. Certification claims are used only where formally confirmed.",
  "Privacy requests are handled through appropriate review processes, subject to legal, security, contractual, and operational requirements.",
  "ZoikoLogia™ supports governed workflows; customers remain responsible for lawful use, data classification, user permissions, and professional obligations.",
];

const FAQS = [
  { q: "How does ZoikoLogia™ protect accounting data?", a: "Through layered controls: access management, tenant boundaries, source governance, audit logging, retention discipline, secure review pathways, and customer configuration." },
  { q: "Is Kriton™ secure?", a: "Kriton™ operates within tenant, role, source, risk, evidence, and integration boundaries, with review routing and escalation for high-risk or unsupported requests." },
  { q: "Does ZoikoLogia™ train on customer data?", a: "Customer data use is governed by contract and configuration. We do not make unconfirmed claims about training status in either direction." },
  { q: "Can our security team review ZoikoLogia™?", a: "Yes. A structured security review pathway is available, along with a vendor risk pack for procurement, privacy, and legal review." },
  { q: "Can we run a limited pilot?", a: "Yes. A controlled pilot path lets you test with limited users, sources, data, roles, and workflows before broad rollout." },
  { q: "Does ZoikoLogia™ guarantee compliance?", a: "No. Compliance outcomes depend on deployment, configuration, jurisdiction, and your obligations. ZoikoLogia™ provides governed controls, not a blanket compliance guarantee." },
  { q: "Can we control user access?", a: "Yes. Administrators control users, roles, permissions, source access, workflows, and retention pathways where enabled." },
  { q: "Where can buyers review trust materials?", a: "Through the Trust Center and the enterprise review pack — security overview, privacy overview, data handling, subprocessor review, and audit logging overview." },
];

// ─── inline SVG helpers ─────────────────────────────────────────────────────────
function Check({ className = "h-4 w-4" }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function Chevron({ open }: { open: boolean }) {
  return <svg viewBox="0 0 24 24" className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function Shield({ className = "h-5 w-5" }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

const eyebrowAmber = "flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#d9720f]";
const eyebrowTeal = "text-[11px] font-bold uppercase tracking-[0.16em] text-[#0d9488] dark:text-[#34d39e]";
const serifH = "font-serif leading-tight";

// ─── PAGE ───────────────────────────────────────────────────────────────────────
export default function Privacysecurity() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const amberBtn = "rounded-md px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90";
  const tealLink = "mt-3 inline-block text-sm font-semibold text-[#0d9488] hover:underline";

  return (
    <main className="bg-[#faf7f0] font-sans text-[#16233d] dark:bg-gray-900 dark:text-white">

      {/* ─── Hero (navy) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8 lg:py-20" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="text-white">
            <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#f0a54a]">
              <span className="h-px w-6 bg-[#f0a54a]" /> Privacy & Security for Governed Accounting Intelligence
            </p>
            <h1 className={`mt-5 max-w-xl text-[clamp(2rem,4.5vw,2.9rem)] ${serifH}`}>Protect sensitive accounting workflows with governed AI controls.</h1>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-slate-300/85">
              ZoikoLogia™ with Kriton™ is designed to support secure, privacy-aware accounting intelligence through
              tenant governance, role-based access, source governance, audit-ready records, and enterprise review pathways.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#" className={amberBtn} style={{ backgroundColor: AMBER }}>Request Security Briefing</a>
              <a href="#" className="rounded-md border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10">Explore Trust Center</a>
            </div>
            <p className="mt-6 max-w-lg text-xs leading-relaxed text-slate-400/70">
              Designed to support secure and governed workflows. Security and privacy outcomes depend on deployment
              model, customer configuration, source permissions, contract terms, and lawful use.
            </p>
          </div>

          {/* Privacy & Security Core panel */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <p className="text-center text-sm font-semibold text-white">
              <span style={{ color: AMBER }}>ZoikoLogia™</span> Privacy & Security Core
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {HERO_CORE.slice(0, 4).map((c) => (
                <div key={c} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-3 text-sm text-slate-200">
                  <span className="text-[#0d9488]"><Check className="h-4 w-4" /></span>{c}
                </div>
              ))}
              <div className="col-span-2 flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-3 text-sm text-slate-200">
                <span className="text-[#0d9488]"><Check className="h-4 w-4" /></span>{HERO_CORE[4]}
              </div>
            </div>
            <p className="mt-5 text-xs leading-relaxed text-slate-400/70">
              Five control categories — identity and access, data protection, source and model controls, audit and
              procurement, and privacy operations — connect to a governed core where their operating characteristics are represented.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Plain-English explanation ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Plain-English Explanation</p>
          <h2 className={`mt-4 max-w-2xl text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>What privacy and security actually mean inside ZoikoLogia™.</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {PLAIN.map((c) => (
              <div key={c.title} className="flex flex-col rounded-xl border border-black/10 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <h3 className={`text-base ${serifH}`}>{c.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-gray-300">{c.body}</p>
                <p className="mt-3 text-xs font-semibold text-[#0d9488]">{c.link}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Security control pillars (cream) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: "#f5efe0" }}>
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Security Control Pillars</p>
          <h2 className={`mt-4 text-black text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Six pillars a security reviewer actually checks.</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((p) => (
              <div key={p.title} className="flex flex-col rounded-xl border border-black/10 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-md" style={{ backgroundColor: "#efe6d2" }}>
                  <span className="text-[#d9720f]"><Shield className="h-5 w-5" /></span>
                </div>
                <h3 className={`text-base ${serifH}`}>{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-gray-300">{p.body}</p>
                <a href="#" className={tealLink}>{p.link} →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Privacy by design (commitments) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-4xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Privacy by Design</p>
          <h2 className={`mt-4 max-w-xl text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Commitments stated the way we'd want them stated to us.</h2>
          <div className="mt-8 divide-y divide-black/10 border-y border-black/10 dark:divide-gray-700 dark:border-gray-700">
            {COMMITMENTS.map((c) => (
              <div key={c.h} className="grid gap-2 py-5 md:grid-cols-[220px_1fr]">
                <p className="text-[15px] font-bold">{c.h}</p>
                <p className="text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Kriton data handling boundaries (navy) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl rounded-2xl px-8 py-12" style={{ backgroundColor: NAVY }}>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#f0a54a]">Kriton™ Data Handling Boundaries</p>
          <h2 className={`mt-3 max-w-xl text-2xl text-white ${serifH}`}>What Kriton™ can see, and what governs it.</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-300/70">
            Buyers ask whether the AI advisor sees confidential accounting information, client files, financial records,
            or firm knowledge. Here's the boundary logic.
          </p>
          <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-3">
            {KRITON_BOUNDARIES.map((b) => (
              <div key={b.title}>
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#f0a54a]">{b.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-300/75">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Enterprise review & procurement ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Enterprise Review & Procurement</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>A structured path for security, privacy, and legal review.</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ENTERPRISE_PATHS.map((p) => (
              <div key={p.title} className={`flex flex-col rounded-xl border p-5 shadow-sm ${p.highlight ? "border-[#e8912a] bg-[#fdf5ea] dark:bg-gray-900" : "border-black/10 bg-white dark:border-gray-700 dark:bg-gray-900"}`}>
                {p.highlight && <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#d9720f]">Conversion Priority</p>}
                <h3 className={`text-base ${serifH}`}>{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-gray-300">{p.body}</p>
                <a href="#" className={tealLink}>{p.link} →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Role-based trust journeys (table, cream) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: "#f5efe0" }}>
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Role-Based Trust Journeys</p>
          <h2 className={`mt-4  text-black text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Wherever you sit in the review, there's a path.</h2>
          <div className="mt-8 overflow-x-auto rounded-xl border border-black/10 dark:border-gray-700">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead style={{ backgroundColor: INK }}>
                <tr className="text-[11px] uppercase tracking-wide text-white/80">
                  <th className="px-5 py-3 font-semibold">Role</th>
                  <th className="px-5 py-3 font-semibold">Primary Concern</th>
                  <th className="px-5 py-3 font-semibold">Recommended Path</th>
                  <th className="px-5 py-3 font-semibold">CTA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/10 dark:divide-gray-700">
                {JOURNEYS.map((j) => (
                  <tr key={j.role} className="bg-white dark:bg-gray-900">
                    <td className="px-5 py-4 font-semibold">{j.role}</td>
                    <td className="px-5 py-4 text-slate-600 dark:text-gray-300">{j.concern}</td>
                    <td className="px-5 py-4 text-slate-600 dark:text-gray-300">{j.path}</td>
                    <td className="px-5 py-4"><a href="#" className="font-semibold text-[#0d9488] hover:underline">{j.cta}</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── Integrations & data flow controls ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Integrations & Data Flow Controls</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Connected systems stay inside the same governance model.</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {INTEGRATIONS.map((c) => (
              <div key={c.title} className="flex flex-col rounded-xl border border-black/10 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <h3 className={`text-base ${serifH}`}>{c.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-gray-300">{c.body}</p>
                <a href="#" className={tealLink}>{c.link} →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Limitations & shared responsibility (cream) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: "#f5efe0" }}>
        <div className="mx-auto max-w-4xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Limitations & Shared Responsibility</p>
          <h2 className={`mt-4 text-black text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>What we don't claim — and what stays with you.</h2>
          <ul className="mt-8 space-y-3">
            {LIMITATIONS.map((t, i) => (
              <li key={i} className="flex gap-3 rounded-lg border border-black/10 bg-white px-4 py-3 text-sm leading-relaxed text-slate-600 shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white" style={{ backgroundColor: AMBER }}>
                  <span className="text-[11px] font-bold">i</span>
                </span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-3xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Frequently Asked</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Privacy and security questions, answered plainly.</h2>
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
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#f0a54a]">Before You Deploy</p>
          <h2 className={`mx-auto mt-3 max-w-2xl text-[clamp(1.6rem,3vw,2.2rem)] text-white ${serifH}`}>Review privacy and security controls before you deploy governed accounting AI.</h2>
          <p className="mx-auto mt-3 max-w-lg text-[15px] leading-relaxed text-slate-300/80">
            See how ZoikoLogia™ with Kriton™ is designed to support secure, privacy-aware accounting workflows through
            tenant governance, role-based access, source controls, audit-ready records, and enterprise review pathways.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#" className={amberBtn} style={{ backgroundColor: AMBER }}>Request Security Briefing</a>
            <a href="#" className="rounded-md border border-white/25 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10">Request Controlled Pilot</a>
            <a href="#" className="px-3 py-2.5 text-sm font-semibold text-[#f0a54a] hover:underline">Explore Trust Center →</a>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-xs text-slate-400">
            <a href="#" className="hover:text-white">Data Protection</a>
            <a href="#" className="hover:text-white">Access Controls</a>
            <a href="#" className="hover:text-white">Audit Logs</a>
            <a href="#" className="hover:text-white">Responsible AI</a>
            <a href="#" className="hover:text-white">Legal</a>
          </div>
        </div>
      </section>
    </main>
  );
}

