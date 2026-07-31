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
      <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
    </div>
  );
}

const PRINCIPLES = [
  { title: "Source Authority First", body: "Answers are designed to be grounded in approved, versioned sources — not model fluency alone.", link: "Explore Source Authority" },
  { title: "Human Accountability Remains Central", body: "Kriton™ supports professional work; it does not remove accountable human review from the decision.", link: "Company Overview" },
  { title: "Escalate Rather Than Guess", body: "When source coverage is weak or a matter is high-risk, Kriton™ is designed to clarify, limit, or hand off — not answer with false confidence.", link: "Platform Limits & Escalation" },
  { title: "Transparency in Limitations", body: "Limitation language is attached wherever source coverage or context is insufficient — not hidden behind a confident answer.", link: "Explore the Platform" },
  { title: "Evaluation & Release Discipline", body: "Platform behavior is evaluated, benchmarked, and release-controlled before it reaches production.", link: "Evaluation & Benchmarks" },
  { title: "Privacy & Security by Design", body: "Tenant boundaries, access controls, and data protection are built in, not added after the fact.", link: "Privacy & Security Overview" },
];

const IN_PRACTICE = [
  { n: 1, title: "Risk Classification", body: "Every question is classified by risk before Kriton™ responds — Low, Medium, High, or Restricted." },
  { n: 2, title: "No-Source State", body: "When approved sources are insufficient, Kriton™ says so instead of guessing." },
  { n: 3, title: "Escalation Routing", body: "Higher-risk or restricted requests route to a human reviewer with full context." },
  { n: 4, title: "Evidence Capture", body: "Source bundle, model run, and reviewer action are preserved for later reconstruction." },
];

type RoleRow = { role: string; means: string; where: string };
const ROLES: RoleRow[] = [
  { role: "Accounting Firm Partner", means: "Kriton™ supports engagement work without taking over professional sign-off.", where: "Accounting Firm Resources" },
  { role: "CFO / Finance Leader", means: "Governed adoption that preserves review discipline across finance workflows.", where: "Finance Leader Resources" },
  { role: "Audit & Compliance Lead", means: "Evidence-ready traceability that supports, not replaces, professional skepticism.", where: "Governance Resources" },
  { role: "AI Governance / Security", means: "Evaluation, release control, and escalation visibility across every Kriton™ mode.", where: "Trust Center" },
  { role: "Educator", means: "Learning Mode designed to support understanding, not shortcut assessment.", where: "Education Resources" },
];

const CLAIMS = [
  "Kriton™ does not impersonate a licensed professional, issue binding determinations, certify compliance, or approve filings.",
  "ZoikoLogia™ does not guarantee accuracy, audit-proof outcomes, or regulatory approval — it supports governed workflows, not certainty.",
  "Kriton™ is designed to escalate ambiguous or high-risk matters rather than resolve them unilaterally.",
  "Evaluation and release discipline reduce risk; they do not eliminate the need for professional review.",
  "Responsible AI is a design commitment, not a certification — current compliance documentation is available through the Trust Center on request.",
];

const FAQS = [
  { q: "What does \"Responsible AI\" mean at ZoikoLogia™?", a: "It means Kriton™ is designed to support professional judgment rather than replace it — grounded in approved sources, classified by risk, and built to escalate rather than guess." },
  { q: "Does Kriton™ ever refuse to answer?", a: "Yes. When approved sources are insufficient or a matter is high-risk or restricted, Kriton™ is designed to say so, limit its response, or route to a human reviewer rather than guess." },
  { q: "Does ZoikoLogia™ replace accountants, auditors, or educators?", a: "No. It supports professional workflows and reviewer-led decisions; accountable human review and professional sign-off remain central." },
  { q: "How is AI safety tested before release?", a: "Platform behavior is evaluated, benchmarked, and release-controlled before it reaches production, with escalation and limitation behavior verified as part of that discipline." },
  { q: "Where can I find governance and safety documentation?", a: "Through the Trust Center, which houses governance, privacy, security, and safety documentation available on request." },
  { q: "Can our AI governance team request a deeper review?", a: "Yes. AI governance and security teams can request evaluation, release-control, and escalation-visibility documentation through a guided enterprise review." },
];

function Chevron({ open }: { open: boolean }) {
  return <svg viewBox="0 0 24 24" className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function Info({ className = "h-4 w-4" }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 8h.01M11 12h1v4h1" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function Shield({ className = "h-4 w-4" }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

const eyebrowAmber = "flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#d9720f]";
const serifH = "font-serif leading-tight";
const tealLink = "text-sm font-semibold text-[#0d9488] hover:underline";
const creamBand = "bg-[#f5efe0] dark:bg-gray-800/60";

export default function Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const amberBtn = "rounded-md px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90";

  return (
    <main className="bg-[#faf7f0] font-sans text-[#16233d] dark:bg-gray-900 dark:text-white">

      <section className="px-4 py-16 sm:px-6 md:px-8 lg:py-20" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="text-white">
            <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#0d9488]">
              <span className="h-px w-6 bg-[#0d9488]" /> Responsible AI
            </p>
            <h1 className={`mt-5 max-w-xl text-[clamp(2rem,4.5vw,2.9rem)] ${serifH}`}>AI that's designed to know what it doesn't know.</h1>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-slate-300/85">
              Kriton™ is built to support professional judgment, not replace it — grounded in approved sources,
              classified by risk, and designed to clarify, limit, or escalate rather than guess.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#" className={amberBtn} style={{ backgroundColor: AMBER }}>Visit Trust Center</a>
              <a href="#" className="rounded-md border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10">Book a Demo</a>
              <a href="#" className="px-3 py-2.5 text-sm font-semibold text-[#f0a54a] hover:underline">Request Security Review →</a>
            </div>
            <p className="mt-6 max-w-md text-xs leading-relaxed text-slate-400/70">
              Kriton™ does not impersonate a licensed professional, issue binding determinations, certify compliance, or approve filings.
            </p>
          </div>

          <div className="relative">
            <ImageSlot src="/images/c.png" alt="Responsible AI in practice" ratio="aspect-[4/3]" rounded="rounded-2xl" />
            <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-[#0f1a30]/95 p-4 text-white shadow-xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#f0a54a]">Responsible AI, in Practice</p>
              <ul className="mt-2 space-y-1.5 text-xs text-slate-200">
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#0d9488]" /> Source Authority First</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#0d9488]" /> Human Accountability Remains Central</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#e8912a]" /> Escalate Rather Than Guess</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Our Principles</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Six commitments that shape how Kriton™ behaves.</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRINCIPLES.map((p) => (
              <div key={p.title} className="flex flex-col rounded-xl border border-black/10 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-md text-[#0d9488]" style={{ backgroundColor: "#e6f2f0" }}><Shield className="h-4 w-4" /></span>
                <h3 className="text-base font-bold">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-gray-300">{p.body}</p>
                <a href="#" className={`${tealLink} mt-4 inline-block text-xs`}>{p.link} →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`px-4 py-16 sm:px-6 md:px-8 ${creamBand}`}>
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> In Practice</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>How these principles show up inside Kriton™.</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {IN_PRACTICE.map((s) => (
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
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> What This Means for Your Role</p>
          <h2 className={`mt-4 max-w-2xl text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Responsible AI looks different depending on where you sit.</h2>
          <div className="mt-6 overflow-x-auto rounded-xl border border-black/10 dark:border-gray-700">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead style={{ backgroundColor: INK }}>
                <tr className="text-[11px] uppercase tracking-wide text-white/80">
                  <th className="px-5 py-3 font-semibold">Role</th>
                  <th className="px-5 py-3 font-semibold">What Responsible AI Means Here</th>
                  <th className="px-5 py-3 font-semibold">Where to Look</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/10 dark:divide-gray-700">
                {ROLES.map((r) => (
                  <tr key={r.role} className="bg-white align-top dark:bg-gray-900">
                    <td className="px-5 py-4 font-semibold">{r.role}</td>
                    <td className="px-5 py-4 text-slate-600 dark:text-gray-300">{r.means}</td>
                    <td className="px-5 py-4"><a href="#" className="font-semibold text-[#0d9488] hover:underline">{r.where}</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className={`px-4 py-16 sm:px-6 md:px-8 ${creamBand}`}>
        <div className="mx-auto max-w-4xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> What We Don't Claim</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Stated plainly, not buried in fine print.</h2>
          <div className="mt-8 space-y-3">
            {CLAIMS.map((c, i) => (
              <div key={i} className="flex gap-3 rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <span className="mt-0.5 shrink-0 text-[#d9720f]"><Info className="h-4 w-4" /></span>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-gray-300">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-4xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Frequently Asked</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Responsible AI questions, answered plainly.</h2>
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