"use client";

import Image from "next/image";
import { useState } from "react";

// ─── TOKENS ─────────────────────────────────────────────────────────────────────
const INK = "#16233d";
const NAVY = "#0f1a30";
const AMBER = "#e8912a";

// NOTE: renders inside your global layout (Header + Footer provided there) — omitted here.

// ─── IMAGE SLOTS — replace each `img` with your real asset path ─────────────────
// Personas:  /public/images/pricing/persona-*.png  (see PERSONAS[].img)
// Why band:  /public/images/pricing/why.png
function ImageSlot({ src, alt, ratio = "aspect-[4/3]", rounded = "rounded-xl", className = "" }:
  { src: string; alt: string; ratio?: string; rounded?: string; className?: string }) {
  return (
    <div className={`relative w-full overflow-hidden bg-slate-200 dark:bg-gray-800 ${ratio} ${rounded} ${className}`}>
      <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
    </div>
  );
}

// ─── DATA ──────────────────────────────────────────────────────────────────────
type Tier = {
  name: string;
  tagline: string;
  idealFor: string[];
  highlights: string[];
  cta: string;
  popular?: boolean;
};

const TIERS: Tier[] = [
  {
    name: "Starter Evaluation",
    tagline: "Validate fit before you commit.",
    idealFor: ["Small teams and early evaluators", "Founder-led accounting workflows", "Proof-of-concept before wider rollout"],
    highlights: ["Guided Kriton™ access (Ask, Learning)", "Approved starter source scope", "Basic review and export support"],
    cta: "Start Evaluation",
  },
  {
    name: "Professional Team",
    tagline: "Governed team adoption, ready to scale.",
    idealFor: ["Accounting firms and finance teams", "Multi-user departments", "Teams needing evidence-ready review"],
    highlights: ["Role-based Kriton™ access (+ Workflow, Review)", "Expanded source bundles where licensed", "Reviewer workflows and evidence records"],
    cta: "Compare Team Plan",
    popular: true,
  },
  {
    name: "Enterprise Governance",
    tagline: "Full control for regulated, multi-team use.",
    idealFor: ["Large or multi-entity organizations", "Regulated deployment requirements", "Dedicated governance and security teams"],
    highlights: ["Advanced role and policy controls (+ Admin)", "Custom source bundle strategy", "Dedicated security review"],
    cta: "Request Enterprise Quote",
  },
  {
    name: "Education / Institution",
    tagline: "Learning-safe deployment for institutions.",
    idealFor: ["Accounting programs and courses", "Professional training providers", "Institutions evaluating academic-safe AI"],
    highlights: ["Learning-safe, instructor-managed access", "Curriculum-aligned sources where approved", "Academic integrity controls"],
    cta: "Request Education Plan",
  },
];

const COMPARE_ROWS = [
  { label: "Best For", cells: ["Initial evaluation, small teams", "Firm and department-wide adoption", "Complex, regulated, multi-team use", "Courses and training programs"] },
  { label: "Kriton™ Access", cells: ["Guided, limited scope", "Role-based team access", "Advanced role and policy controls", "Learning-safe, instructor-managed"] },
  { label: "Source Coverage", cells: ["Starter scope", "Expanded bundles where licensed", "Custom bundle strategy", "Curriculum-aligned where approved"] },
  { label: "Review Controls", cells: ["Basic review and export", "Reviewer workflows, evidence records", "Custom escalation & compliance reporting", "Instructor review, integrity controls"] },
  { label: "Security", cells: ["Standard trust overview", "Team security summary", "Security review, compliance reports", "Institution review pack"] },
];

type Persona = { eyebrow: string; title: string; body: string; img: string };
const PERSONAS: Persona[] = [
  { eyebrow: "Starter Evaluation", title: "Small teams & founders", body: "Early evaluators validating fit before wider rollout.", img: "/images/testpic.png" },
  { eyebrow: "Professional Team", title: "Firms & finance departments", body: "Multi-user teams needing evidence-ready review.", img: "/images/Accounting educator guiding a learner.png" },
  { eyebrow: "Enterprise Governance", title: "Large & multi-entity orgs", body: "Regulated deployments with dedicated security review.", img: "/images/div.role-hero-photo.png" },
  { eyebrow: "Education / Institution", title: "Programs & training providers", body: "Learning-safe deployment with instructor controls.", img: "/images/photograph.png" },
];

const WHY_BULLETS = [
  "Source coverage and licensing vary by jurisdiction and standard",
  "Review and escalation workflows add reviewer-side controls",
  "Evidence-ready records support audit and compliance confidence",
  "Enterprise deployment brings security review and integration scope",
];

const FAQS = [
  { q: "How much does ZoikoLogia™ cost?", a: "Pricing depends on package, user count, source scope, governance controls, deployment model, integrations, and support requirements. Approved public prices are shown only once finalized." },
  { q: "Is Kriton™ included in pricing?", a: "Yes. Kriton™ is the AI advisor inside ZoikoLogia™; the modes available (Ask, Learning, Workflow, Review, Admin) depend on your tier." },
  { q: "Can we run a pilot first?", a: "Yes. A controlled pilot lets you test with limited users, sources, and workflows before committing to a wider rollout." },
  { q: "Does ZoikoLogia™ replace accountants or professional review?", a: "No. It supports professional workflows and reviewer-led decisions; final judgment stays with your team." },
  { q: "Can procurement request security documents?", a: "Yes. Procurement and security teams can request a review pack through the Trust Center, including security and governance documentation." },
];

// Calculator assumptions
const WEEKS_PER_MONTH = 4.33;
const RESEARCH_REDUCTION = 0.40; 
// ─── inline SVG helpers ─────────────────────────────────────────────────────────
function Chevron({ open }: { open: boolean }) {
  return <svg viewBox="0 0 24 24" className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

const eyebrowAmber = "flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#d9720f]";
const eyebrowTeal = "text-[11px] font-bold uppercase tracking-[0.16em] text-[#0d9488] dark:text-[#34d39e]";
const serifH = "font-serif leading-tight";
const tealLink = "text-sm font-semibold text-[#0d9488] hover:underline";

// ─── PAGE ───────────────────────────────────────────────────────────────────────
export default function Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Calculator state
  const [people, setPeople] = useState(8);
  const [hours, setHours] = useState(9);
  const [rate, setRate] = useState(65);

  const monthlyHours = people * hours * WEEKS_PER_MONTH;
  const savedRaw = monthlyHours * RESEARCH_REDUCTION;
  const savedHours = Math.round(savedRaw);
  const costImpact = Math.round(savedRaw * rate);

  const amberBtn = "rounded-md px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90";
  const outlineBtn = "w-full rounded-md border border-black/15 px-4 py-2.5 text-center text-sm font-semibold text-[#16233d] transition-colors hover:border-[#0d9488] hover:text-[#0d9488] dark:border-gray-600 dark:text-gray-100";
  const numInput = "mt-1.5 w-full rounded-md border border-black/15 px-3 py-2.5 text-sm text-[#16233d] focus:border-[#0d9488] focus:outline-none focus:ring-1 focus:ring-[#0d9488] dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100";

  return (
    <main className="bg-[#faf7f0] font-sans text-[#16233d] dark:bg-gray-900 dark:text-white">

      {/* ─── Hero + tier cards ─── */}
      <section className="px-4 pt-16 pb-8 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <h1 className={`text-center text-[clamp(1.7rem,3.5vw,2.4rem)] ${serifH}`}>Choose the ZoikoLogia™ path that fits your team.</h1>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {TIERS.map((t) => (
              <div
                key={t.name}
                className={`relative flex flex-col rounded-2xl border bg-white p-6 shadow-sm dark:bg-gray-900 ${t.popular ? "border-[#e8912a]" : "border-black/10 dark:border-gray-700"}`}
              >
                {t.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white" style={{ backgroundColor: AMBER }}>
                    Most Common Path
                  </span>
                )}
                <h3 className={`text-lg ${serifH}`}>{t.name}</h3>
                <p className="mt-1 text-sm font-semibold text-[#0d9488]">{t.tagline}</p>

                <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">Ideal For</p>
                <ul className="mt-2 space-y-2">
                  {t.idealFor.map((x) => (
                    <li key={x} className="flex gap-2 text-[13px] leading-relaxed text-slate-600 dark:text-gray-300">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: AMBER }} />{x}
                    </li>
                  ))}
                </ul>

                <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">Included Highlights</p>
                <ul className="mt-2 space-y-2">
                  {t.highlights.map((x) => (
                    <li key={x} className="flex gap-2 text-[13px] leading-relaxed text-slate-600 dark:text-gray-300">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: AMBER }} />{x}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex-1" />
                {t.popular
                  ? <a href="#" className={`${amberBtn} w-full text-center`} style={{ backgroundColor: AMBER }}>{t.cta}</a>
                  : <a href="#" className={outlineBtn}>{t.cta}</a>}
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-xs text-slate-400">
            Pricing depends on seats, source packages, and governance requirements. Public price points are shown only where finalized and approved.
          </p>
        </div>
      </section>

      {/* ─── Comparison table ─── */}
      <section className="px-4 py-10 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl overflow-x-auto rounded-xl border border-black/10 dark:border-gray-700">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead style={{ backgroundColor: INK }}>
              <tr className="text-[11px] uppercase tracking-wide text-white/80">
                <th className="px-5 py-3 font-semibold" />
                {TIERS.map((t) => <th key={t.name} className="px-5 py-3 font-semibold">{t.name}</th>)}
              </tr>
            </thead>
            <tbody className="divide-y divide-black/10 dark:divide-gray-700">
              {COMPARE_ROWS.map((r) => (
                <tr key={r.label} className="bg-white dark:bg-gray-900">
                  <td className="px-5 py-4 font-semibold">{r.label}</td>
                  {r.cells.map((c, i) => <td key={i} className="px-5 py-4 text-slate-600 dark:text-gray-300">{c}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── Personas ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Built for Teams Like Yours</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>See who typically starts at each level.</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PERSONAS.map((p) => (
              <article key={p.title} className="flex flex-col overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <ImageSlot src={p.img} alt={p.title} ratio="aspect-[4/3]" rounded="rounded-none" />
                <div className="flex flex-1 flex-col p-5">
                  <p className={eyebrowTeal}>{p.eyebrow}</p>
                  <h3 className="mt-2 text-base font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-gray-300">{p.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why pricing isn't just per seat (cream band) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: "#f5efe0" }}>
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <ImageSlot src="/images/Enterprise finance team reviewing reports.png" alt="Team evaluating governed accounting workflows" ratio="aspect-[4/3]" />
          <div>
            <p className={eyebrowTeal}>Why Pricing Isn't Just Per Seat</p>
            <h2 className={`mt-3 max-w-md text-black text-[clamp(1.4rem,3vw,1.9rem)] ${serifH}`}>Governance and evidence change what a plan needs to include.</h2>
            <p className="mt-4 max-w-md text-black text-[15px] leading-relaxed text-slate-600 ">
              Source bundles, review workflows, audit trails, and deployment scale all shape what a package actually
              costs to support — not just how many people log in.
            </p>
            <ul className="mt-5 space-y-3">
              {WHY_BULLETS.map((b) => (
                <li key={b} className="flex text-black gap-3 text-[15px] leading-relaxed text-slate-600">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: AMBER }} />{b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── Estimate your impact (calculator) ─── */}
      <section className="px-4 py-16 text-center sm:px-6 md:px-8">
        <div className="mx-auto max-w-xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0d9488]">Estimate Your Impact</p>
          <h2 className={`mt-3 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>A rough time and cost estimate for your team.</h2>

          <div className="mt-8 space-y-4 text-left">
            <div>
              <label htmlFor="people" className="text-sm font-semibold">Number of preparers / reviewers</label>
              <input id="people" type="number" min={1} value={people}
                onChange={(e) => setPeople(Math.max(0, Number(e.target.value) || 0))} className={numInput} />
            </div>
            <div>
              <label htmlFor="hours" className="text-sm font-semibold">Hours per week on research &amp; source-checking, per person</label>
              <input id="hours" type="number" min={0} value={hours}
                onChange={(e) => setHours(Math.max(0, Number(e.target.value) || 0))} className={numInput} />
            </div>
            <div>
              <label htmlFor="rate" className="text-sm font-semibold">Average fully-loaded hourly cost ($)</label>
              <input id="rate" type="number" min={0} value={rate}
                onChange={(e) => setRate(Math.max(0, Number(e.target.value) || 0))} className={numInput} />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-black/10 bg-black/5 text-left dark:border-gray-700 dark:bg-gray-700">
            <div className="bg-[#f5efe0] px-5 py-5 dark:bg-gray-900">
              <p className="text-2xl font-bold text-[#0d9488]">{savedHours.toLocaleString()}</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-gray-400">Estimated hours saved / month</p>
            </div>
            <div className="bg-[#f5efe0] px-5 py-5 dark:bg-gray-900">
              <p className="text-2xl font-bold text-[#0d9488]">${costImpact.toLocaleString()}</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-gray-400">Estimated cost impact / month</p>
            </div>
          </div>

          <div className="mt-3 rounded-md bg-[#efe6d2] px-4 py-3 text-xs leading-relaxed text-slate-500 dark:bg-gray-800 dark:text-gray-400">
            Illustrative only — assumes a 40% reduction in manual research time. Not a guaranteed outcome.
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-3xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Frequently Asked</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Pricing questions, answered plainly.</h2>
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
        <div className="mx-auto max-w-5xl rounded-2xl px-8 py-16 text-center" style={{ backgroundColor: NAVY }}>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0d9488]">Still Deciding?</p>
          <h2 className={`mx-auto mt-3 max-w-xl text-[clamp(1.6rem,3vw,2.2rem)] text-white ${serifH}`}>Talk to us about the right path.</h2>
          <div className="mt-8 flex justify-center">
            <a href="#" className={amberBtn} style={{ backgroundColor: AMBER }}>Book a Demo</a>
          </div>
        </div>
      </section>
    </main>
  );
}