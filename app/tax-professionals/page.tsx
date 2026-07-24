"use client";

import Image from "next/image";
import { useState } from "react";

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

const MEANS_CARDS = [
  { title: "Definition", body: "A governed AI accounting intelligence platform that helps audit teams work with source-backed research, evidence-ready records, and preserve evidence with source authority and reviewer controls.", link: "Explore Platform Overview" },
  { title: "Why It Matters", body: "Audit work depends on traceable evidence and professional skepticism — generic AI tools offer neither by default.", link: "Source-Governed Intelligence" },
  { title: "Kriton™ Relationship", body: "Kriton™ is the AI advisor inside ZoikoLogia™ that helps audit teams ask questions, structure workpapers, and escalate higher-risk matters.", link: "Meet Kriton™" },
  { title: "Enterprise Value", body: "Governed AI can support audit productivity while preserving the evidence trail reviewers and regulators expect.", link: "Request Enterprise Briefing" },
];

const PILLARS = [
  { title: "Evidence-Ready Traceability", body: "Source context, response events, and reviewer actions preserved where configured, ready for reconstruction." },
  { title: "Workpaper Consistency", body: "Source-backed explanations of standards and guidance, consistent across engagement teams." },
  { title: "Sampling & Assertion Support", body: "Structured context for assertions, sampling rationale, and testing approach documentation." },
  { title: "Professional Skepticism Awareness", body: "Limitation language and escalation routing designed to prompt review, not replace it." },
  { title: "Reviewer & Escalation Controls", body: "Review Mode routes higher-risk or ambiguous matters to a human reviewer by design." },
  { title: "Enterprise Integration Readiness", body: "Controlled integration patterns across identity, workpaper, and document systems." },
  { title: "Quality & Release Governance", body: "Platform behavior is evaluated, monitored, and release-controlled — not a static, unmonitored system." },
  { title: "Admin & Governance Controls", body: "Configure tenant policy, source permissions, provider settings, roles, and audit visibility centrally." },
];

type RoleCard = { title: string; body: string; img: string };
const ROLE_CARDS: RoleCard[] = [
  { title: "Audit Partner", body: "Engagement oversight, risk visibility, and sign-off — without wading into every citation.", img: "/images/div.role-hero-photo.png" },
  { title: "Senior Auditor", body: "Source-backed research, workpaper structure, and review-ready documentation.", img: "/images/div.spotlight-photo.png" },
  { title: "Internal Controls Lead", body: "Control-awareness, escalation visibility, and consistent guidance across the team.", img: "/images/Container (1.png" },
  { title: "IT / Systems Auditor", body: "Access controls, audit logging, and integration visibility for systems-focused reviews.", img: "/images/testpic.png" },
];

type UseCase = { title: string; body: string; link: string; img: string };
const USE_CASES: UseCase[] = [
  { title: "Standard Interpretation Research", body: "Source-backed explanations of guidance, with citations, assumptions, and effective dates.", link: "Ask Accounting Questions", img: "/images/Audit, Tax & Compliance.png" },
  { title: "Workpaper Structuring", body: "Structured documentation and review-ready explanations for engagement files.", link: "Workflow Mode", img: "/images/c.png" },
  { title: "Risk Flag Review", body: "Reviewer queues surface flagged items with full context before sign-off.", link: "Review Mode", img: "/images/div.role-hero-photo.png" },
  { title: "Sampling Rationale Documentation", body: "Structured support for sampling approach and testing scope explanations.", link: "Audit Evidence Ledger", img: "/images/Accounting educator guiding a learner.png" },
  { title: "Cross-Jurisdiction Requirements", body: "Jurisdiction and effective-date awareness where approved sources are available.", link: "Accounting Ontology", img: "/images/Container (1.png" },
  { title: "Controlled Audit Pilots", body: "Defined scope, users, and success criteria before wider engagement rollout.", link: "Request Pilot", img: "/images/AI governance team reviewing platform controls.png" },
];

const EVIDENCE_POINTS = [
  "Source bundle, model run, and reviewer trail preserved where configured",
  "Limitation notices attached wherever source coverage is weak",
  "Export-ready records for internal quality review",
  "Full audit replay for material engagement decisions",
];

const STEPS = [
  { n: 1, title: "Question or Task", body: "Auditor asks a question or starts a structured workflow task." },
  { n: 2, title: "Source Retrieval", body: "Only approved, governed sources become candidates for the answer." },
  { n: 3, title: "Risk Classification", body: "The matter is classified by risk before Kriton™ responds." },
  { n: 4, title: "Source-Backed Answer", body: "Citations, assumptions, and limitations attached to the response." },
  { n: 5, title: "Reviewer Escalation", body: "Higher-risk matters route to a human reviewer with full context." },
  { n: 6, title: "Evidence Capture", body: "Source bundle, run, and reviewer action preserved for the file." },
];

type PermRow = { role: string; need: string; iface: string };
const PERMISSIONS: PermRow[] = [
  { role: "Audit Partner", need: "Engagement oversight, risk visibility, sign-off authority.", iface: "Executive briefing, reviewer summary, escalation status." },
  { role: "Senior Auditor", need: "Source-backed research, workpaper structure.", iface: "Workflow Mode, citation panel, documentation support." },
  { role: "Staff Auditor", need: "Guided question support, task structure.", iface: "Ask Accounting Questions, Workflow Mode." },
  { role: "Internal Controls Auditor", need: "Review, escalation, evidence, audit readiness.", iface: "Review queue, evidence records, audit logs." },
  { role: "IT / Systems Auditor", need: "Identity, access, integration, configuration review.", iface: "Admin Mode, Enterprise Integrations, audit logs." },
  { role: "Procurement / Legal", need: "Vendor evidence, trust, terms, data protection.", iface: "Trust Center, Procurement Support, Legal." },
];

const BOUNDARIES = [
  "ZoikoLogia™ supports audit workflows; it does not perform audit procedures, form audit opinions, or replace professional judgment.",
  "Outputs may support review-ready workflows; they do not guarantee audit acceptance or regulatory approval.",
  "Enterprise deployment requires role permissions, tenant policy, access controls, and privacy/security review.",
  "Source display, citation, and export behavior are governed by licensing and eligibility controls.",
  "Connector availability and integration scope require Product, Engineering, security, and customer review.",
  "Enterprise buyers can request approved commercial, legal, security, and governance documentation directly.",
];

const FAQS = [
  { q: "How can ZoikoLogia™ support audit and assurance teams?", a: "Through source-backed research, workpaper structuring, reviewer workflows, escalation routing, and evidence-ready traceability across approved audit and assurance workflows." },
  { q: "What is Kriton™ for audit teams?", a: "Kriton™ is the AI advisor inside ZoikoLogia™ that helps audit users ask questions, structure workpapers, clarify assumptions, and escalate higher-risk matters within governed boundaries." },
  { q: "Does ZoikoLogia™ replace auditors or form audit opinions?", a: "No. It supports audit workflows and reviewer-led decisions; audit procedures, opinions, and sign-off remain with your professionals." },
  { q: "Can ZoikoLogia™ help document sampling rationale?", a: "Yes. It provides structured support for sampling approach and testing scope documentation, with citations and limitation language where sources fall short." },
  { q: "How does evidence traceability work?", a: "Material Kriton™ interactions preserve the source bundle, model run, and reviewer trail where configured, so teams can reconstruct what supported an AI-assisted answer." },
  { q: "Can this integrate with our workpaper systems?", a: "Integration with workpaper and document systems is possible; connector availability and scope require Product, Engineering, security, and customer review." },
  { q: "How does ZoikoLogia™ support audit governance?", a: "Through access controls, tenant policy, review and escalation pathways, evidence-ready records, and release governance designed for audit environments." },
  { q: "Can we pilot ZoikoLogia™ with one engagement team first?", a: "Yes. Controlled audit pilots offer defined scope, users, and success criteria with governance assurance before wider engagement rollout." },
];

function Chevron({ open }: { open: boolean }) {
  return <svg viewBox="0 0 24 24" className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function Info({ className = "h-4 w-4" }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 8h.01M11 12h1v4h1" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function Dot() {
  return <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e8912a]" />;
}

function ControlLoop() {
  const nodes = ["Evidence-Ready Traceability", "Reviewer Workflows", "Source Authority Citations"];
  return (
    <svg viewBox="0 0 560 70" className="h-auto w-full" role="img" aria-label="Audit assurance control loop">
      {nodes.map((n, i) => {
        const x = 18 + i * 182;
        return (
          <g key={n}>
            <rect x={x} y="14" width="172" height="40" rx="6" fill="#0f1a30" stroke="#0d9488" strokeWidth="1" />
            <text x={x + 86} y="32" textAnchor="middle" fill="#f0a54a" fontSize="8" fontWeight="700">{i === 0 ? "EVIDENCE" : i === 1 ? "REVIEWER" : "SOURCE AUTHORITY"}</text>
            <text x={x + 86} y="45" textAnchor="middle" fill="#cbd5e1" fontSize="8">{i === 0 ? "trail preserved where configured" : i === 1 ? "Review Mode, not bolted on" : "every claim traced to approved source"}</text>
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

export default function Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const amberBtn = "rounded-md px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90";

  return (
    <main className="bg-[#faf7f0] font-sans text-[#16233d] dark:bg-gray-900 dark:text-white">

      <section className="px-4 py-16 sm:px-6 md:px-8 lg:py-20" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto max-w-4xl text-center text-white">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0d9488]">Governed AI Accounting Intelligence for Audit & Assurance</p>
          <h1 className={`mx-auto mt-5 max-w-3xl text-[clamp(2rem,4.5vw,2.9rem)] ${serifH}`}>Strengthen evidence, review, and professional skepticism with source-backed AI.</h1>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-slate-300/85">
            ZoikoLogia™ with Kriton™ is designed to support audit and assurance teams with source-backed research,
            evidence-ready traceability, reviewer workflows, and escalation controls — without replacing professional judgment.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#" className={amberBtn} style={{ backgroundColor: AMBER }}>Book a Demo</a>
            <a href="#" className="rounded-md border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10">Request Enterprise Briefing</a>
          </div>
          <p className="mx-auto mt-6 max-w-xl text-xs leading-relaxed text-slate-400/70">
            Designed to support audit and assurance work — not to replace audit procedures, professional skepticism, or engagement sign-off.
          </p>
          <div className="mx-auto mt-10 max-w-3xl rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <ControlLoop />
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> What ZoikoLogia™ Means for Audit Teams</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Source-backed support, not a black-box shortcut through review.</h2>
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

      <section className={`px-4 py-16 sm:px-6 md:px-8 ${creamBand}`}>
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Value Pillars</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>What the platform actually delivers for an audit function.</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p) => (
              <div key={p.title} className="rounded-xl border border-black/10 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <h3 className="text-sm font-bold">{p.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-gray-300">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:px-8">
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

      <section className={`px-4 py-16 sm:px-6 md:px-8 ${creamBand}`}>
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Workflow Use Cases</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Where this actually shows up in an audit engagement.</h2>
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

      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <ImageSlot src="/images/testpic.png" alt="Evidence-ready governance" ratio="aspect-[4/3]" rounded="rounded-2xl" />
          <div>
            <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Evidence-Ready Governance</p>
            <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Something you can actually show your quality reviewers.</h2>
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

      <section className={`px-4 py-16 sm:px-6 md:px-8 ${creamBand}`}>
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> How the Audit Flow Works</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Six steps from research to reviewer sign-off.</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
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

      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid overflow-hidden rounded-2xl lg:grid-cols-2" style={{ backgroundColor: NAVY }}>
            <div className="p-8 text-white sm:p-10">
              <h2 className={`text-[clamp(1.4rem,3vw,1.9rem)] text-white ${serifH}`}>See how an engagement team actually uses this.</h2>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-slate-300/80">
                Bring a real standard-interpretation question or workpaper scenario to a live demo — we'll show you exactly how Kriton™ handles it.
              </p>
              <a href="#" className={`${amberBtn} mt-6 inline-block`} style={{ backgroundColor: AMBER }}>Book a Demo →</a>
            </div>
            <ImageSlot src="/images/Enterprise finance team reviewing governed accounting workflows.png" alt="Engagement team using the platform" ratio="aspect-[16/10]" rounded="rounded-none" />
          </div>
        </div>
      </section>

      <section className={`px-4 py-16 sm:px-6 md:px-8 ${creamBand}`}>
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> User Roles & Permissions</p>
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

      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-4xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Frequently Asked</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Audit and assurance questions, answered plainly.</h2>
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
    </main>
  );
}