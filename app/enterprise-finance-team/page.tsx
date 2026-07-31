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
      <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
    </div>
  );
}

// ─── DATA ──────────────────────────────────────────────────────────────────────
const MEANS_CARDS = [
  { title: "Definition", body: "A governed AI accounting intelligence platform that helps finance teams work with source-backed knowledge, structured assumptions, review pathways, and evidence-ready records.", link: "Explore Platform Overview" },
  { title: "Why It Matters", body: "Finance teams need consistency across policy, reporting, close documentation, and internal controls — generic AI tools lack source discipline and review controls.", link: "Source-Governed Intelligence" },
  { title: "Kriton™ Relationship", body: "Kriton™ is the AI advisor inside ZoikoLogia™ that helps finance users ask questions, structure workflow support, clarify assumptions, and escalate higher-risk matters.", link: "Meet Kriton™" },
  { title: "Enterprise Value", body: "Governed AI can support finance productivity while maintaining review, evidence, and control discipline CFOs and controllers expect.", link: "Request Enterprise Briefing" },
];

type RoleCard = { title: string; body: string; img: string };
const ROLE_CARDS: RoleCard[] = [
  { title: "CFO / Finance Executive", body: "Governance visibility, ROI use cases, and pilot status without wading into evidence records.", img: "/images/div.role-hero-photo.png" },
  { title: "Controller / CAO", body: "Accounting policy consistency, Workflow Mode, and review-ready documentation for close cycles.", img: "/images/c.png" },
  { title: "Group Reporting Manager", body: "Framework, jurisdiction, and effective-date support across reporting.", img: "/images/Container (1.png" },
  { title: "Finance Analyst", body: "Guided question support, workflow steps, and draft structures — no final approval authority implied.", img: "/images/Accounting firm partner reviewing client-service materials.png" },
];

type UseCase = { title: string; body: string; link: string; img: string };
const USE_CASES: UseCase[] = [
  { title: "Accounting Policy Questions", body: "Consistent explanations with sources, assumptions, effective dates, and context — with limitation language where sources fall short.", link: "Ask Accounting Questions", img: "/images/c.png" },
  { title: "Close Support & Task Documentation", body: "Structured steps, notes, and review-ready context during close cycles, with assumption tracking built in.", link: "Workflow Mode", img: "/images/Accounting firm partner reviewing client-service materials.png" },
  { title: "Reporting Memo Support", body: "First-draft structures and source references controllers can build on — without replacing professional review.", link: "Review Mode", img: "/images/div.role-hero-photo.png" },
  { title: "Internal Control Review Support", body: "Limitation notices, reviewer routing, and accountable evidence records for review-aware workflows.", link: "Audit Evidence Ledger", img: "/images/Audit and compliance leader reviewing evidence materials.png" },
  { title: "Cross-Jurisdiction Finance Questions", body: "Jurisdiction and effective-date awareness for group finance teams, where approved sources are available.", link: "Accounting Ontology", img: "/images/Container (1.png" },
  { title: "Finance Transformation Pilots", body: "Controlled adoption with measurable workflow value, defined users, and governance assurance.", link: "Request Pilot", img: "/images/AI governance team reviewing platform controls.png" },
];

const STEPS = [
  { n: 1, title: "Use-Case Discovery", body: "Identify where source-backed intelligence fits." },
  { n: 2, title: "Source & Policy Config", body: "Confirm sources, jurisdictions, roles, tenant policy." },
  { n: 3, title: "Kriton™ Workflow Support", body: "Users ask questions and structure tasks in approved modes." },
  { n: 4, title: "Review & Escalation", body: "Higher-risk matters route to review or limitation behavior." },
  { n: 5, title: "Evidence Capture", body: "Source bundles, actions, and reports preserved where configured." },
  { n: 6, title: "Pilot Validation", body: "Finance, IT, and governance teams evaluate fit and readiness." },
  { n: 7, title: "Enterprise Rollout", body: "Deployment expands by role, entity, and governance scope." },
];

const EVIDENCE_POINTS = [
  "Source bundle, model run, and reviewer trail preserved where configured",
  "Limitation notices attached wherever source coverage is weak",
  "Export-ready records for internal review and procurement",
  "Full audit replay for material finance workflow decisions",
];

type PermRow = { role: string; need: string; iface: string };
const PERMISSIONS: PermRow[] = [
  { role: "CFO / Finance Executive", need: "Governance, value, adoption, and risk visibility.", iface: "Executive briefing, ROI use cases, pilot status." },
  { role: "Controller / CAO", need: "Accounting policy consistency, close support.", iface: "Workflow Mode, Review Mode, Evidence Drawer." },
  { role: "Group Reporting Manager", need: "Framework, jurisdiction, effective-date support.", iface: "Accounting Ontology, source-grounded answers." },
  { role: "Finance Analyst", need: "Guided question support, workflow structure.", iface: "Ask Accounting Questions, Workflow Mode." },
  { role: "Internal Controls / Compliance", need: "Review, escalation, evidence, audit readiness.", iface: "Review queue, evidence records, export controls." },
  { role: "IT / Security Admin", need: "Identity, access, integration, configuration review.", iface: "Admin Mode, Enterprise Integrations, API Reference." },
  { role: "Procurement / Legal", need: "Vendor evidence, trust, terms, data protection.", iface: "Trust Center, Procurement Support, Legal." },
];

const BOUNDARIES = [
  "ZoikoLogia™ supports finance workflows; it does not assume management responsibility or sign off financial reporting.",
  "Outputs may support review-ready workflows; they do not replace audit procedures or guarantee audit acceptance.",
  "Enterprise deployment requires role permissions, tenant policy, access controls, and privacy/security review.",
  "Source display, citation, and export behavior are governed by licensing and eligibility controls.",
  "Connector availability and integration scope require Product, Engineering, security, and customer review.",
  "Enterprise buyers can request approved commercial, legal, security, and governance documentation directly.",
  "Platform behavior is designed to be evaluated, monitored, and controlled through release governance — not a static, unmonitored system.",
];

const FAQS = [
  { q: "How can ZoikoLogia™ support enterprise finance teams?", a: "Through source-backed accounting intelligence, workflow guidance, assumption clarification, review pathways, and evidence-ready context across approved accounting, reporting, close, and governance workflows." },
  { q: "What is Kriton™ for finance teams?", a: "Kriton™ is the AI advisor inside ZoikoLogia™ that helps finance users ask questions, structure workflow support, clarify assumptions, and escalate higher-risk matters — within governed boundaries." },
  { q: "Does ZoikoLogia™ replace finance professionals or controllers?", a: "No. It supports professional workflows and reviewer-led decisions; final judgment, sign-off, and management responsibility stay with your team." },
  { q: "Can ZoikoLogia™ help with the month-end close?", a: "Yes. Workflow Mode provides structured steps, notes, assumption tracking, and review-ready context to support close cycles — without replacing review." },
  { q: "Can Kriton™ help with accounting policy questions?", a: "Yes. It provides consistent, source-backed explanations with assumptions, effective dates, and limitation language where sources fall short." },
  { q: "Can this integrate with finance systems?", a: "Integration with ERP, HRIS, and DMS systems is possible; connector availability and scope require Product, Engineering, security, and customer review." },
  { q: "How does ZoikoLogia™ support finance governance?", a: "Through access controls, tenant policy, review and escalation pathways, evidence-ready records, and release governance designed for enterprise finance." },
  { q: "Can we pilot ZoikoLogia™ with a finance team before broader rollout?", a: "Yes. Finance transformation pilots offer controlled adoption with defined users, measurable workflow value, and governance assurance before enterprise rollout." },
];

// ─── inline SVG helpers ─────────────────────────────────────────────────────────
function Chevron({ open }: { open: boolean }) {
  return <svg viewBox="0 0 24 24" className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function Info({ className = "h-4 w-4" }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 8h.01M11 12h1v4h1" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function Dot() {
  return <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e8912a]" />;
}

// Finance Governance Operating Loop — compact SVG for the hero image overlay.
function OperatingLoop() {
  const nodes = ["Accounting Policy", "Close & Reporting", "Controls & Review", "Audit & Compliance", "ERP / Finance Systems"];
  return (
    <svg viewBox="0 0 560 96" className="h-auto w-full" role="img" aria-label="Finance governance operating loop">
      <text x="18" y="18" fill="#f0a54a" fontSize="9" fontWeight="700" letterSpacing="1">FINANCE GOVERNANCE OPERATING LOOP</text>
      {nodes.map((n, i) => {
        const perRow = 3;
        const col = i % perRow, row = Math.floor(i / perRow);
        const x = 18 + col * 182, y = 34 + row * 30;
        return (
          <g key={n}>
            <rect x={x} y={y} width="172" height="22" rx="6" fill="#0f1a30" stroke="#0d9488" strokeWidth="1" />
            <text x={x + 86} y={y + 15} textAnchor="middle" fill="#cbd5e1" fontSize="9" fontWeight="600">{n}</text>
          </g>
        );
      })}
    </svg>
  );
}

const eyebrowAmber = "flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#d9720f]";
const serifH = "font-serif leading-tight";
const tealLink = "text-sm font-semibold text-[#0d9488] hover:underline";
const amberLink = "text-sm font-semibold text-[#d9720f] hover:underline";
const creamBand = "bg-[#f5efe0] dark:bg-gray-800/60";

// ─── PAGE ───────────────────────────────────────────────────────────────────────
export default function Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const amberBtn = "rounded-md px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90";

  return (
    <main className="bg-[#faf7f0] font-sans text-[#16233d] dark:bg-gray-900 dark:text-white">

      {/* ─── Hero (navy) + operating-loop image ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8 lg:py-20" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="text-white">
            <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#0d9488]">
              <span className="h-px w-6 bg-[#0d9488]" /> Governed AI Accounting Intelligence for Finance Teams
            </p>
            <h1 className={`mt-5 max-w-xl text-[clamp(2rem,4.5vw,2.9rem)] ${serifH}`}>Bring source-backed AI accounting intelligence into enterprise finance workflows.</h1>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-slate-300/85">
              ZoikoLogia™ with Kriton™ is designed to help enterprise finance teams answer accounting questions,
              structure reporting workflows, support close documentation, review assumptions, and preserve evidence-ready
              context across finance operations.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#" className={amberBtn} style={{ backgroundColor: AMBER }}>Book a Demo</a>
              <a href="#" className="rounded-md border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10">Request Enterprise Briefing</a>
            </div>
            <p className="mt-6 max-w-md text-xs leading-relaxed text-slate-400/70">
              Designed to support professional finance teams — not replace management responsibility, statutory reporting
              controls, ERP systems, auditors, or professional judgment.
            </p>
          </div>

          <div className="relative">
            <ImageSlot src="/images/Enterprise finance team reviewing governed accounting workflows.png" alt="Finance governance operating loop" ratio="aspect-[4/3]" rounded="rounded-2xl" />
            <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-white/10 bg-[#0f1a30]/95 px-3 py-2 shadow-xl">
              <OperatingLoop />
            </div>
          </div>
        </div>
      </section>

      {/* ─── What it means (4 cards) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> What ZoikoLogia™ Means for Finance Teams</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Source-backed intelligence, not a generic AI layer bolted onto finance.</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {MEANS_CARDS.map((c) => (
              <div key={c.title} className="flex flex-col rounded-xl border border-black/10 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <h3 className="text-base font-bold">{c.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-gray-300">{c.body}</p>
                <a href="#" className={`${tealLink} mt-4 inline-block text-xs`}>{c.link} →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Who you're equipping (role image cards) ─── */}
      <section className="px-4 pb-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Who You're Equipping</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>The same platform, adapted to the role.</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ROLE_CARDS.map((r) => (
              <article key={r.title} className="flex flex-col overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <ImageSlot src={r.img} alt={r.title} ratio="aspect-[16/11]" rounded="rounded-none" />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-sm font-bold">{r.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-gray-300">{r.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Workflow use cases (6 image cards) ─── */}
      <section className="px-4 pb-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Workflow Use Cases</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Where this actually shows up in a finance team's week.</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {USE_CASES.map((u) => (
              <article key={u.title} className="flex flex-col overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <ImageSlot src={u.img} alt={u.title} ratio="aspect-[16/9]" rounded="rounded-none" />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-base font-bold">{u.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-gray-300">{u.body}</p>
                  <a href="#" className={`${amberLink} mt-4 inline-block`}>{u.link} →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Seven steps (cream band) ─── */}
      <section className={`px-4 py-16 sm:px-6 md:px-8 ${creamBand}`}>
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> How the Enterprise Finance Flow Works</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Seven steps from discovery to enterprise rollout.</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-7">
            {STEPS.map((s) => (
              <div key={s.n}>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#0d9488] text-sm font-bold text-[#0d9488]">{s.n}</div>
                <h3 className="mt-3 text-sm font-bold">{s.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-gray-300">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Evidence-ready governance (split) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <ImageSlot src="/images/Audit, Tax & Compliance.png" alt="Evidence-ready governance" ratio="aspect-[4/3]" rounded="rounded-2xl" />
          <div>
            <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Evidence-Ready Governance</p>
            <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Something you can actually show your auditors and reviewers.</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">
              Every material Kriton™ interaction is designed to preserve the context around it — not just the answer, but what supported it.
            </p>
            <ul className="mt-5 space-y-3">
              {EVIDENCE_POINTS.map((p) => (
                <li key={p} className="flex gap-3 text-[15px] leading-relaxed text-slate-600 dark:text-gray-300"><Dot />{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── User roles & finance permissions (table) ─── */}
      <section className="px-4 pb-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> User Roles & Finance Permissions</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Who uses this, and what they actually see.</h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-600 dark:text-gray-300">Public-facing intent, not final RBAC implementation — access boundaries are confirmed per tenant configuration.</p>
          <div className="mt-6 overflow-x-auto rounded-xl border border-black/10 dark:border-gray-700">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead style={{ backgroundColor: INK }}>
                <tr className="text-[11px] uppercase tracking-wide text-white/80">
                  <th className="px-5 py-3 font-semibold">Role</th>
                  <th className="px-5 py-3 font-semibold">Primary Need</th>
                  <th className="px-5 py-3 font-semibold">Interface Priority</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/10 dark:divide-gray-700">
                {PERMISSIONS.map((r) => (
                  <tr key={r.role} className="bg-white align-top dark:bg-gray-900">
                    <td className="px-5 py-4 font-semibold">{r.role}</td>
                    <td className="px-5 py-4 text-slate-600 dark:text-gray-300">{r.need}</td>
                    <td className="px-5 py-4 text-slate-600 dark:text-gray-300">{r.iface}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── Trust, legal & procurement boundaries (cream band) ─── */}
      <section className={`px-4 py-16 sm:px-6 md:px-8 ${creamBand}`}>
        <div className="mx-auto max-w-4xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Trust, Legal & Procurement</p>
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
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Enterprise finance questions, answered plainly.</h2>
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

      {/* ─── Final CTA (navy, on cream band) ─── */}
      <section className={`px-4 py-16 sm:px-6 md:px-8 ${creamBand}`}>
        <div className="mx-auto max-w-5xl rounded-2xl px-8 py-14 text-center" style={{ backgroundColor: NAVY }}>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0d9488]">Evaluate for Your Finance Function</p>
          <h2 className={`mx-auto mt-3 max-w-2xl text-[clamp(1.6rem,3vw,2.2rem)] text-white ${serifH}`}>Evaluate governed AI accounting intelligence for enterprise finance teams.</h2>
          <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-slate-300/80">
            See how ZoikoLogia™ with Kriton™ can support accounting policy consistency, reporting workflow discipline,
            close documentation, review pathways, and evidence-ready finance governance.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#" className={amberBtn} style={{ backgroundColor: AMBER }}>Book a Demo</a>
            <a href="#" className="rounded-md border border-white/25 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10">Request Pilot</a>
            <a href="#" className="rounded-md border border-white/25 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10">Request Enterprise Briefing</a>
          </div>
        </div>
      </section>
    </main>
  );
}