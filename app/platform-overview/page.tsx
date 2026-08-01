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

// ─── DATA ──────────────────────────────────────────────────────────────────────
const TRUST_LOGOS = ["Meridian Health", "Arclight Mfg", "Luminary SaaS", "Castleton Group", "Vega Capital", "Prism Retail"];

const STATS: [string, string][] = [
  ["94%", "Reduction in close cycle time"],
  ["3.2×", "More accounts processed per analyst"],
  ["$2.1M", "Average annual savings per client"],
  ["99.7%", "Data accuracy rate"],
];

const CAPABILITIES: [string, string][] = [
  ["Automated Journal Entries", "AI categorizes and posts transactions with 99.4% accuracy — eliminating manual data entry across your chart of accounts."],
  ["Predictive Forecasting", "ML models trained on your historical data project cash flow, revenue, and expenses 12 months ahead with confidence intervals."],
  ["ERP Synchronization", "Native connectors to NetSuite, SAP, QuickBooks, and Xero keep records in sync without middleware or manual exports."],
  ["Natural Language Queries", "Ask “What drove the Q3 EBITDA miss?” in plain English and receive a structured, cited breakdown in seconds."],
];

const STEPS: [string, string][] = [
  ["Connect your data sources", "Link your ERP, bank feeds, and GL in under 20 minutes using pre-built OAuth connectors. No IT involvement required."],
  ["AI learns your chart of accounts", "The model maps your accounts, cost centers, and rules, then proposes categorizations for you to confirm."],
  ["Automate your close workflow", "Recurring entries, reconciliations, and anomaly checks run on schedule, with exceptions routed for review."],
  ["Generate board-ready reporting", "Produce cited, presentation-ready reporting the moment the books are closed."],
];

// [capability, zoikologia, manual, legacyErp]
const COMPARE: [string, boolean, boolean, boolean][] = [
  ["Journal entry automation", true, false, false],
  ["Real-time anomaly alerts", true, false, false],
  ["ERP native integration", true, false, true],
  ["NLP financial queries", true, false, false],
  ["SOX audit trail", true, true, true],
  ["Predictive cash flow", true, false, false],
  ["Sub-5 day close", true, false, false],
];

const TESTIMONIALS: { quote: string; name: string; role: string; initials: string }[] = [
  { quote: "We closed our books in 4 days last quarter. Before Zoikologia it took 18. Our CFO can’t imagine going back.", name: "Sarah Chen", role: "Controller, Meridian Health Systems", initials: "SC" },
  { quote: "The anomaly detection alone paid for the platform in month two. It caught a $340K duplicate vendor payment our team missed.", name: "Marcus Webb", role: "VP Finance, Arclight Manufacturing", initials: "MW" },
  { quote: "Natural language queries changed how our board engages with financials. They actually read the reports now.", name: "Priya Nair", role: "CFO, Luminary SaaS Corp", initials: "PN" },
];

const ENTERPRISE = [
  "Role-based permissions down to the field level",
  "Immutable audit log with tamper detection",
  "Multi-entity consolidation with intercompany elimination",
  "SSO with Okta, Azure AD, and Google Workspace",
];

const BADGES = ["SOC 2 Type II", "GDPR Compliant", "ISO 27001"];

// ─── inline SVG helpers ─────────────────────────────────────────────────────────
function Check({ className = "h-4 w-4" }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function Arrow({ className = "h-4 w-4" }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

const eyebrowAmber = "text-[11px] font-bold uppercase tracking-[0.18em] text-[#d9720f]";
const eyebrowMuted = "text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400";
const serifH = "font-serif leading-tight";

// ─── PAGE ───────────────────────────────────────────────────────────────────────
export default function Page() {
  const [step, setStep] = useState(0);

  const amberBtn = "inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90";

  return (
    <main className="bg-white font-sans text-[#16233d] dark:bg-gray-900 dark:text-white">

      {/* ─── Hero (navy) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8 lg:py-20" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="text-white">
            <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#f0a54a] ring-1 ring-white/10">
              AI-Powered Accounting Intelligence
            </span>
            <h1 className={`mt-5 max-w-xl text-[clamp(2.1rem,5vw,3.2rem)] ${serifH}`}>Bring artificial intelligence to your accounting workflow.</h1>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-slate-300/85">
              Zoikologia automates journal entries, reconciliations, and financial reporting — so your team focuses on
              strategy, not spreadsheets.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#" className={amberBtn} style={{ backgroundColor: AMBER }}>Start free trial <Arrow className="h-4 w-4" /></a>
              <a href="#" className="rounded-md border border-white/25 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">Watch 3-min demo</a>
            </div>
            <div className="mt-6 flex flex-wrap gap-5 text-xs text-slate-400">
              {BADGES.map((b) => (
                <span key={b} className="flex items-center gap-1.5"><span className="text-[#f0a54a]">★</span>{b}</span>
              ))}
            </div>
          </div>
          <ImageSlot src="/images/Image (Financial analytics dashboard on laptop screen).png" alt="Zoikologia analytics dashboard" ratio="aspect-[4/3]" rounded="rounded-2xl" />
        </div>
      </section>

      {/* ─── Trusted by ─── */}
      <section className="border-b border-black/5 px-4 py-8 sm:px-6 md:px-8" style={{ backgroundColor: "#faf7f0" }}>
        <div className="mx-auto max-w-6xl text-center">
          <p className={eyebrowMuted}>Trusted by finance teams at</p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {TRUST_LOGOS.map((l) => (
              <span key={l} className="text-sm font-semibold text-slate-400">{l}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Stats ─── */}
      <section className="px-4 py-14 sm:px-6 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map(([num, label]) => (
            <div key={label}>
              <p className={`text-[clamp(2rem,4vw,2.75rem)] font-bold ${serifH}`} style={{ color: INK }}>{num}</p>
              <p className="mt-1 text-sm text-slate-500 dark:text-gray-400">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Platform capabilities ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: "#f5efe0" }}>
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}>Platform Capabilities</p>
          <h2 className={`mt-4 max-w-2xl text-black text-[clamp(1.6rem,3vw,2.2rem)] ${serifH}`}>Everything your accounting team needs, automated.</h2>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-slate-600">
            A unified intelligence layer across your financial operations — from transaction capture to board reporting.
          </p>

          <div className="mt-10 grid items-center gap-6 lg:grid-cols-[1fr_1fr_1fr]">
            <div className="grid gap-6">
              {CAPABILITIES.slice(0, 2).map(([t, b]) => (
                <div key={t} className="rounded-xl bg-white p-5 shadow-sm">
                  <span className="text-[#0d9488]"><Check className="h-5 w-5" /></span>
                  <h3 className="mt-3 text-base font-bold text-black">{t}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-600">{b}</p>
                </div>
              ))}
            </div>
            <ImageSlot src="/images/Container.png" alt="Accounting team collaborating" ratio="aspect-[3/4]" className="self-stretch" />
            <div className="grid gap-6">
              {CAPABILITIES.slice(2).map(([t, b]) => (
                <div key={t} className="rounded-xl bg-white p-5 shadow-sm">
                  <span className="text-[#0d9488]"><Check className="h-5 w-5" /></span>
                  <h3 className="mt-3 text-base font-bold text-black">{t}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-600">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── How it works (interactive stepper) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}>How It Works</p>
          <h2 className={`mt-4 max-w-xl text-[clamp(1.6rem,3vw,2.2rem)] ${serifH}`}>From connection to close in four steps.</h2>

          <div className="mt-10 grid items-start gap-10 lg:grid-cols-2">
            <div className="space-y-3">
              {STEPS.map(([t, b], i) => {
                const active = step === i;
                return (
                  <button key={t} type="button" onClick={() => setStep(i)}
                    className={`w-full rounded-xl border p-5 text-left transition-colors ${active ? "border-[#0d9488] bg-[#0d9488]/[0.05]" : "border-black/10 hover:border-black/20 dark:border-gray-700"}`}>
                    <div className="flex items-center gap-3">
                      <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${active ? "bg-[#0d9488] text-white" : "bg-slate-200 text-slate-500 dark:bg-gray-700"}`}>{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-sm font-bold">{t}</span>
                    </div>
                    {active && <p className="mt-3 pl-10 text-[13px] leading-relaxed text-slate-600 dark:text-gray-300">{b}</p>}
                  </button>
                );
              })}
            </div>
            <div className="relative">
              <ImageSlot src="/images/Container (2).png" alt="Closing the books on a laptop" ratio="aspect-[4/3]" />
              <div className="absolute bottom-4 left-4 rounded-xl border border-black/5 bg-white p-3 shadow-lg">
                <p className="flex items-center gap-2 text-xs font-bold text-[#0d9488]"><Check className="h-4 w-4" /> Month-end close complete</p>
                <p className="mt-0.5 pl-6 text-[11px] text-slate-500">4 days ahead of schedule</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Why Zoikologia (comparison, navy) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto max-w-5xl text-white">
          <p className={`${eyebrowMuted} text-center`}>Why Zoikologia</p>
          <h2 className={`mt-3 text-center text-[clamp(1.6rem,3vw,2.2rem)] ${serifH}`}>Built for modern accounting teams.</h2>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 text-[11px] font-bold uppercase tracking-[0.12em]">
                  <th className="py-3 pr-4 text-slate-400">Capability</th>
                  <th className="px-4 py-3 text-center text-[#f0a54a]">Zoikologia</th>
                  <th className="px-4 py-3 text-center text-slate-400">Manual process</th>
                  <th className="px-4 py-3 text-center text-slate-400">Legacy ERP</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {COMPARE.map(([cap, z, m, l]) => (
                  <tr key={cap}>
                    <td className="py-4 pr-4 text-slate-200">{cap}</td>
                    <td className="px-4 py-4 text-center">{z ? <span className="inline-flex text-[#f0a54a]"><Check className="mx-auto h-4 w-4" /></span> : <span className="text-slate-600">—</span>}</td>
                    <td className="px-4 py-4 text-center">{m ? <span className="inline-flex text-slate-300"><Check className="mx-auto h-4 w-4" /></span> : <span className="text-slate-600">—</span>}</td>
                    <td className="px-4 py-4 text-center">{l ? <span className="inline-flex text-slate-300"><Check className="mx-auto h-4 w-4" /></span> : <span className="text-slate-600">—</span>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── Customer stories ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: "#f5efe0" }}>
        <div className="mx-auto max-w-6xl">
          <p className={`${eyebrowAmber} text-center`}>Customer Stories</p>
          <h2 className={`mt-3 text-center text-black text-[clamp(1.6rem,3vw,2.2rem)] ${serifH}`}>Finance leaders speak frankly.</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="flex flex-col rounded-xl border border-black/10 bg-white p-6 shadow-sm">
                <blockquote className="flex-1 text-[15px] leading-relaxed text-slate-700">“{t.quote}”</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0f1a30] text-xs font-bold text-white">{t.initials}</span>
                  <span>
                    <span className="block text-sm font-bold text-black">{t.name}</span>
                    <span className="block text-xs text-slate-500">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Enterprise ready ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <ImageSlot src="/images/Container (3).png" alt="Audit review" ratio="aspect-[4/3]" />
          <div>
            <p className={eyebrowAmber}>Enterprise-Ready</p>
            <h2 className={`mt-4 text-[clamp(1.6rem,3vw,2.2rem)] ${serifH}`}>The controls your audit committee demands.</h2>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">
              Zoikologia ships with end-to-end audit trails, role-based access control, and SOC 2 Type II certification.
              Every change is logged, attributed, and exportable for your auditors in a single click.
            </p>
            <ul className="mt-6 space-y-3">
              {ENTERPRISE.map((e) => (
                <li key={e} className="flex gap-3 text-[15px] text-slate-700 dark:text-gray-300">
                  <span className="mt-0.5 text-[#0d9488]"><Check className="h-4 w-4" /></span>{e}
                </li>
              ))}
            </ul>
            <a href="#" className="mt-7 inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold text-white" style={{ backgroundColor: NAVY }}>Read security overview <Arrow className="h-4 w-4" /></a>
          </div>
        </div>
      </section>

      {/* ─── Final CTA (navy) ─── */}
      <section className="px-4 py-20 sm:px-6 md:px-8" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto max-w-3xl text-center text-white">
          <h2 className={`mx-auto max-w-xl text-[clamp(1.8rem,3.5vw,2.6rem)] ${serifH}`}>Ready to close faster than you thought possible?</h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-slate-300/85">
            Join 400+ finance teams who’ve reclaimed their close week. Set up takes 20 minutes. No credit card required.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#" className={amberBtn} style={{ backgroundColor: AMBER }}>Start your free trial <Arrow className="h-4 w-4" /></a>
            <a href="#" className="rounded-md border border-white/25 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">Talk to sales</a>
          </div>
          <p className="mt-6 text-xs text-slate-400">14-day free trial · No setup fees · Cancel anytime</p>
        </div>
      </section>
    </main>
  );
}