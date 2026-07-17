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
const WHAT_CARDS = [
  { title: "Company Definition", body: "ZoikoLogia™ is a governed accounting intelligence platform, not a conventional ledger product or generic chatbot software.", link: "Explore Platform Overview" },
  { title: "Kriton™ Relationship", body: "Kriton™ is the embedded AI advisor inside ZoikoLogia™, providing guided accounting support within governance controls.", link: "Meet Kriton™" },
  { title: "Professional Boundary", body: "The platform supports professionals and institutions; it does not replace qualified judgment or accountable review.", link: "Explore Professional Boundaries" },
  { title: "Institutional Focus", body: "Built for accounting firms, enterprise finance, tax, audit, payroll/compliance, education, and AI governance teams.", link: "Explore Solutions" },
];

const WHY_ROWS = [
  { problem: "Generic AI can produce fluent but unsupported accounting responses.", response: "Source-governed intelligence, source sufficiency checks, and visible limitations.", value: "More buyer confidence and safer professional evaluation." },
  { problem: "Accounting rules are jurisdictional, time-sensitive, and context-dependent.", response: "Accounting ontology and effective-date sensitivity where approved sources are available.", value: "Better content framing and reduced unsupported reliance." },
  { problem: "Professional work needs review, accountability, and escalation.", response: "Kriton™ modes, human escalation, review controls, and professional boundaries.", value: "Improved governance and workflow adoption." },
  { problem: "Enterprise AI requires procurement, security, privacy, and audit readiness.", response: "Privacy & Security, access controls, audit logs, retention, and compliance reports.", value: "Faster enterprise review and stronger tension." },
];

const PRINCIPLES = [
  { title: "Source Authority Before Confidence", body: "Designed to ground accounting support in approved, traceable source context rather than unsupported AI fluency.", link: "Source Authority" },
  { title: "Governance Before Scale", body: "Enterprise AI should scale only with role controls, review paths, event governance, and release controls.", link: "Governance Overview" },
  { title: "Human Accountability Remains Central", body: "Kriton™ supports professional work but does not remove accountable human review.", link: "Platform Limits & Escalation" },
  { title: "Evidence Should Be Preserved", body: "Important outputs, assumptions, and review context are captured in evidence-ready records where configured.", link: "Audit Evidence Ledger" },
  { title: "Privacy & Security Are Design Inputs", body: "Data protection, access controls, audit logs, retention, and reporting support enterprise adoption.", link: "Privacy & Security Overview" },
  { title: "Quality Must Be Testable", body: "AI performance claims are supported by evaluation, benchmark, and release-control discipline.", link: "Quality & Testing" },
];

type Team = { title: string; body: string; link: string; img: string };
const TEAMS: Team[] = [
  { title: "Accounting Firms", body: "Consistent, source-backed support for professional teams and client-workflow review.", link: "Book a Firm Demo", img: "/images/div.role-hero-photo.png" },
  { title: "Enterprise Finance Teams", body: "Governed answers, documentation support, and controlled AI adoption for finance operations.", link: "Request Enterprise Briefing", img: "/images/Accounting firm partner reviewing client-service materials.png" },
  { title: "Tax Professionals", body: "Source-backed tax workflow support with boundary and jurisdiction controls.", link: "Explore Tax Workflows", img: "/images/Container (1.png" },
  { title: "Audit & Assurance", body: "Evidence-ready AI support, review routing, and traceability.", link: "Explore Audit Support", img: "/images/Audit and compliance leader reviewing evidence materials.png" },
  { title: "Payroll & Compliance", body: "Effective-date context, policy documentation, and escalation support.", link: "Request Pilot", img: "/images/div.split-photo.png" },
  { title: "Accounting Education", body: "Learning support, practice guidance, and academic integrity controls.", link: "Explore Education", img: "/images/testpic.png" },
  { title: "AI Governance Teams", body: "Controls, policy, evidence, audit logs, quality testing, and release governance.", link: "Explore Governance", img: "/images/AI governance team reviewing platform controls.png" },
];

const TRUST = [
  { title: "Product Governance", body: "Source authority, AI safety, limits, escalation, quality, release, events, responsible AI." },
  { title: "Privacy & Security", body: "Data protection, access controls, audit logs, encryption, retention, reports." },
  { title: "Professional Boundaries", body: "The platform supports, not replaces, professional responsibility." },
  { title: "Evaluation Discipline", body: "Evaluation, benchmarks, quality testing, and release controls." },
  { title: "Enterprise Readiness", body: "Procurement and trust pathways without unsupported certification claims." },
  { title: "Commercial Transparency", body: "Clear pricing overview and plan comparison routes." },
];

const MVC = [
  { h: "Mission", body: "To make accounting intelligence safer, more source-aware, more reviewable, and more useful for serious professional and institutional work." },
  { h: "Vision", body: "A future where accounting professionals and institutions can use AI with confidence because source authority, governance, review, and evidence are built into the workflow." },
  { h: "Category", body: "Governed accounting intelligence: a specialist AI layer for professional accounting knowledge, workflows, controls, and evidence." },
  { h: "Product Promise", body: "Source-backed assistance, structured context, guided workflows, professional boundaries, escalation, and traceability where configured." },
  { h: "What We Don't Claim", body: "No replacing professionals, issuing audit opinions, providing legal/tax advice, guaranteeing compliance, or regulator approval.", muted: true },
];

const BEFORE = [
  { q: "Is this just a chatbot?", body: "No. ZoikoLogia™ is a governed accounting intelligence platform with Kriton™ as the embedded advisor inside controlled workflows.", link: "Explore Platform Overview" },
  { q: "Can we trust AI for accounting?", body: "Trust depends on source authority, review controls, professional boundaries, quality testing, privacy, security, and escalation — not unsupported automation claims.", link: "Visit Trust Center" },
  { q: "Does it replace our professionals?", body: "No. It supports professional teams and preserves accountable review.", link: "Explore Professional Boundaries" },
  { q: "Is it ready for enterprise review?", body: "It's built for procurement, security, privacy, retention, compliance reports, and pricing.", link: "Request Enterprise Briefing" },
  { q: "Who is Kriton™?", body: "The AI advisor inside ZoikoLogia™, designed to help users ask accounting questions, work through workflows, learn, review, and escalate within boundaries.", link: "Meet Kriton™" },
  { q: "Can we evaluate before buying?", body: "Yes. Demo, pilot, briefing, trust review, and resource pathways are all available.", link: "Request Pilot" },
];

const ABOUT_FAQ = [
  { q: "What is ZoikoLogia™?", a: "ZoikoLogia™ is a governed accounting intelligence platform designed to support accounting, finance, audit, tax, education, and AI governance workflows with source-backed assistance, review controls, and evidence-ready traceability." },
  { q: "Who is Kriton™?", a: "Kriton™ is the embedded AI advisor inside ZoikoLogia™ — it guides users through accounting questions, workflows, learning, and review within defined governance boundaries." },
  { q: "Is ZoikoLogia™ an accounting software company?", a: "No. It is a governed AI intelligence layer for professional accounting knowledge and workflows, not a ledger or bookkeeping product." },
  { q: "Does ZoikoLogia™ replace accountants or auditors?", a: "No. It supports professionals and preserves accountable human review; final judgment stays with your team." },
  { q: "How does ZoikoLogia™ approach trust?", a: "Through source authority, access controls, audit logs, evaluation discipline, privacy and security by design, and clear professional boundaries." },
  { q: "Can enterprises evaluate ZoikoLogia™ before purchase?", a: "Yes — through demos, scoped pilots, enterprise briefings, and Trust Center evidence for procurement and security teams." },
  { q: "What makes ZoikoLogia™ different from generic AI tools?", a: "It is source-governed and built for professional accounting work, with review controls, escalation, evidence records, and enterprise readiness rather than open-ended chat." },
  { q: "Where can I learn more?", a: "Explore the Platform Overview, Trust Center, and Solutions pages, or request a demo or enterprise briefing." },
];

// ─── inline SVG helpers ─────────────────────────────────────────────────────────
function Check({ className = "h-4 w-4" }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function Chevron({ open }: { open: boolean }) {
  return <svg viewBox="0 0 24 24" className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

const eyebrowAmber = "flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#d9720f]";
const eyebrowTeal = "text-[11px] font-bold uppercase tracking-[0.16em] text-[#0d9488] dark:text-[#34d39e]";
const serifH = "font-serif leading-tight";

// ─── PAGE ───────────────────────────────────────────────────────────────────────
export default function Company() {
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
              <span className="h-px w-6 bg-[#f0a54a]" /> Company
            </p>
            <h1 className={`mt-5 max-w-xl text-[clamp(2rem,4.5vw,2.9rem)] ${serifH}`}>
              Building governed accounting intelligence for serious professional work.
            </h1>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-slate-300/85">
              ZoikoLogia™ with Kriton™ helps accounting, finance, audit, tax, education, and governance teams work with
              source-backed AI support, professional review, reviewer controls, and evidence-ready traceability.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#" className={amberBtn} style={{ backgroundColor: AMBER }}>Book a Demo</a>
              <a href="#" className="rounded-md border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10">Request Enterprise Briefing</a>
            </div>
            <p className="mt-6 max-w-lg text-xs leading-relaxed text-slate-400/70">
              Designed to support qualified professional judgment, legal-safe boundaries, and enterprise review.
              ZoikoLogia™ does not replace professional judgment, or provide legal, tax, or regulatory advice.
            </p>
          </div>

          <div className="relative">
            <ImageSlot src="/images/Container 2.png" alt="Professionals reviewing governed accounting work" ratio="aspect-[4/3]" />
            <div className="absolute bottom-3 left-3 right-3 rounded-md bg-white/95 px-4 py-3 text-[#16233d]">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#0d9488]">Company Trust Operating Model</p>
              <ul className="mt-2 space-y-1 text-xs">
                {[["Corporate Identity", "Why we are"], ["Market Purpose", "Why we exist"], ["Trust & Governance", "How we operate"], ["Commercial Confidence", "How you evaluate us"]].map(([l, r]) => (
                  <li key={l} className="flex items-center justify-between gap-4">
                    <span className="flex items-center gap-1.5 font-medium"><span className="text-[#0d9488]"><Check className="h-3 w-3" /></span>{l}</span>
                    <span className="text-slate-400">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── What ZoikoLogia is ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> What ZoikoLogia Is</p>
          <h2 className={`mt-4 max-w-2xl text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>A governed accounting intelligence platform — not generic chatbot software.</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHAT_CARDS.map((c) => (
              <div key={c.title} className="flex flex-col rounded-xl border border-black/10 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-md" style={{ backgroundColor: "#efe6d2" }}>
                  <span className="text-[#d9720f]"><Check className="h-4 w-4" /></span>
                </div>
                <h3 className={`text-base ${serifH}`}>{c.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-gray-300">{c.body}</p>
                <a href="#" className={tealLink}>{c.link} →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why we exist (cream) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: "#f5efe0" }}>
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Why We Exist</p>
              <h2 className={`mt-4 max-w-md text-black text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Turning AI from a productivity layer into a governed professional-support system.</h2>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-slate-500 ">
                Accounting AI requires source authority, domain structure, safety controls, review routes, and evidence
                discipline. That's the reason the company exists.
              </p>
            </div>
            <ImageSlot src="/images/c.png" alt="Team collaborating on governed accounting work" ratio="aspect-[4/3]" />
          </div>

          {/* problem / response / value rows */}
          <div className="mt-12 overflow-hidden rounded-xl border border-black/10 bg-white dark:border-gray-700 dark:bg-gray-900">
            {WHY_ROWS.map((r, i) => (
              <div key={i} className={`grid gap-4 p-5 md:grid-cols-3 ${i < WHY_ROWS.length - 1 ? "border-b border-black/10 dark:border-gray-700" : ""}`}>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">Market Problem</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-gray-300">{r.problem}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#0d9488]">ZoikoLogia Response</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-gray-300">{r.response}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#d9720f]">Business Value</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-gray-300">{r.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Operating principles ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Operating Principles</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>What governs the platform, governs the company.</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRINCIPLES.map((p) => (
              <div key={p.title} className="flex flex-col rounded-xl border border-black/10 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <h3 className={`text-base ${serifH}`}>{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-gray-300">{p.body}</p>
                <a href="#" className={tealLink}>{p.link} →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Who we serve (cream) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: "#f5efe0" }}>
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Who We Serve</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Seven teams, one governed platform.</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAMS.map((t) => (
              <article key={t.title} className="flex flex-col overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <ImageSlot src={t.img} alt={t.title} ratio="aspect-[16/10]" rounded="rounded-none" />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className={`text-base ${serifH}`}>{t.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-gray-300">{t.body}</p>
                  <a href="#" className={tealLink}>{t.link} →</a>
                </div>
              </article>
            ))}
            {/* "Not sure where to start" navy card */}
            <div className="flex flex-col justify-center rounded-xl p-6 text-white" style={{ backgroundColor: NAVY }}>
              <h3 className={`text-base ${serifH}`}>Not sure where to start?</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-300/85">See how ZoikoLogia™ maps to your team.</p>
              <a href="#" className="mt-4 rounded-md px-4 py-2 text-center text-sm font-semibold text-white" style={{ backgroundColor: AMBER }}>Explore Solutions</a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Trust architecture (navy) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl rounded-2xl px-8 py-12" style={{ backgroundColor: NAVY }}>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#f0a54a]">Trust Architecture</p>
          <h2 className={`mt-3 max-w-xl text-2xl text-white ${serifH}`}>The controls behind the company, not just the marketing.</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-300/70">
            So lawyers, procurement, security, and legal reviewers actually check before they trust an AI vendor.
          </p>
          <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
            {TRUST.map((t) => (
              <div key={t.title} className="flex gap-3">
                <span className="mt-0.5 text-[#0d9488]"><Check className="h-4 w-4" /></span>
                <div>
                  <h3 className="text-[15px] font-bold text-white">{t.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-300/75">{t.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Mission / Vision / Category ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Mission, Vision & Category</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>What we're building toward.</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {MVC.map((m) => (
              <div key={m.h} className={`rounded-xl border p-5 ${m.muted ? "border-transparent" : "border-black/10 bg-white dark:border-gray-700 dark:bg-gray-900"}`} style={m.muted ? { backgroundColor: "#efe6d2" } : undefined}>
                <h3 className="text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: m.muted ? "#d9720f" : "#0d9488" }}>{m.h}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-gray-300">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Partner / Careers banners ─── */}
      <section className="px-4 pb-16 sm:px-6 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {[
            { title: "Partner With Us", body: "Universities, advisory partners, implementation partners, and professional bodies — let's talk about fit.", cta: "Partner With Us" },
            { title: "Join the Team", body: "We're building governed AI for serious professional work — mission, custom, and category retention involved.", cta: "View Careers" },
          ].map((b) => (
            <div key={b.title} className="relative overflow-hidden rounded-2xl p-8 text-white" style={{ backgroundColor: NAVY }}>
              <h3 className={`text-xl ${serifH}`}>{b.title}</h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-300/80">{b.body}</p>
              <a href="#" className="mt-5 inline-block rounded-md px-4 py-2 text-sm font-semibold text-white" style={{ backgroundColor: AMBER }}>{b.cta}</a>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Before you ask (cards) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: "#f5efe0" }}>
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Before You Ask</p>
          <h2 className={`mt-4  text-black text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>What buyers usually want to know first.</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BEFORE.map((b) => (
              <div key={b.q} className="flex flex-col rounded-xl border border-black/10 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <h3 className="text-[15px] font-bold">{b.q}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-gray-300">{b.body}</p>
                <a href="#" className={tealLink}>{b.link} →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Frequently asked (accordion) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-3xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Frequently Asked</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>About the company.</h2>
          <div className="mt-8 divide-y divide-black/10 border-y border-black/10 dark:divide-gray-700 dark:border-gray-700">
            {ABOUT_FAQ.map((f, i) => {
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
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#f0a54a]">Start the Conversation</p>
          <h2 className={`mx-auto mt-3 max-w-xl text-[clamp(1.6rem,3vw,2.2rem)] text-white ${serifH}`}>See what governed accounting intelligence looks like in practice.</h2>
          <p className="mx-auto mt-3 max-w-lg text-[15px] leading-relaxed text-slate-300/80">
            Book a demo, request an enterprise briefing, or visit the Trust Center to review governance, privacy, and security before you talk to sales.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#" className={amberBtn} style={{ backgroundColor: AMBER }}>Book a Demo</a>
            <a href="#" className="rounded-md border border-white/25 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10">Request Enterprise Briefing</a>
            <a href="#" className="px-3 py-2.5 text-sm font-semibold text-[#f0a54a] hover:underline">Visit Trust Center →</a>
          </div>
        </div>
      </section>
    </main>
  );
}

export { CompanyOverview };