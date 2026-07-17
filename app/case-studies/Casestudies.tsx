"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";

// ─── TOKENS ─────────────────────────────────────────────────────────────────────
const INK = "#16233d";
const NAVY = "#0f1a30";
const AMBER = "#e8912a";


function ImageSlot({ src, alt, ratio = "aspect-[4/3]", rounded = "rounded-xl", className = "" }:
  { src: string; alt: string; ratio?: string; rounded?: string; className?: string }) {
  return (
    <div className={`relative w-full overflow-hidden ${ratio} ${rounded} bg-slate-200 dark:bg-gray-800 ${className}`}>
      <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
    </div>
  );
}

// ─── DATA ──────────────────────────────────────────────────────────────────────
const FEATURE_CHIPS = ["Customer Approved", "Source-Governed Workflow", "Reviewer Controls"];
const FILTERS = ["All", "Accounting Firms", "Enterprise Finance", "Audit & Assurance", "Tax Professionals", "Accounting Education", "AI Governance"];

type Study = { category: string; eyebrow: string; title: string; body: string; note: string; read: string; img: string };
const STUDIES: Study[] = [
  { category: "Accounting Firms", eyebrow: "Accounting Firm", title: "Structuring technical memos before busy season", body: "A growing firm needed consistent, source-backed drafting across multiple engagement teams ahead of filing deadlines.", note: "Helped standardize memo structure and reduce back-and-forth during partner review.", read: "6 min read", img: "/images/Accounting firm partner reviewing client-service materials.png" },
  { category: "Enterprise Finance", eyebrow: "Enterprise Finance Team", title: "Bringing consistency to multi-entity close processes", body: "A multi-entity finance organization wanted a shared source basis for policy questions raised across regional teams.", note: "Supported more consistent policy interpretation across entities during the close cycle.", read: "7 min read", img: "/images/div.role-hero-photo.png" },
  { category: "Audit & Assurance", eyebrow: "Audit & Assurance", title: "Evidence-ready documentation for review workflows", body: "An internal audit function needed clearer traceability between source guidance and workpaper conclusions.", note: "Improved documentation consistency and made review trails easier to reconstruct.", read: "1 min read", img: "/images/Audit, Tax & Compliance.png" },
  { category: "Tax Professionals", eyebrow: "Tax Professionals", title: "Structuring multi-jurisdiction research requests", body: "A tax practice handling multi-state clients needed a consistent way to scope jurisdiction-specific research.", note: "Accelerated early-stage research framing before senior review.", read: "5 min read", img: "/images/Container (1.png" },
  { category: "Accounting Education", eyebrow: "Accounting Education", title: "Guided practice without shortcutting the learning", body: "An accounting program wanted AI-assisted practice support that wouldn't undermine assessment integrity.", note: "Supported concept reinforcement while preserving instructor-set assessment boundaries.", read: "6 min read", img: "/images/photograph.png" },
  { category: "AI Governance", eyebrow: "AI Governance Team", title: "Evaluating release controls before enterprise rollout", body: "A governance committee needed to assess evaluation thresholds and release gates before approving wider deployment.", note: "Supported a documented, evidence-based approval process ahead of enterprise rollout.", read: "4 min read", img: "/images/AI governance team reviewing platform controls.png" },
];

const DETAIL = [
  { h: "The Challenge", body: "Ahead of a busy filing season, the firm's technical accounting group was spending significant reviewer time re-deriving standard interpretation on multi-element revenue contracts before reaching the actual judgment call — creating a documentation gap between draft and final position." },
  { h: "Why ZoikoLogia™", body: "The firm selected ZoikoLogia™ for its source-governed citation model and Workflow Mode's explicit assumptions-and-limitations format, which matched how their reviewing partners already structured technical memos." },
];
const DEPLOYMENT = [
  "Scope: technical accounting group only, single engagement type",
  "12 preparers, 4 reviewing partners, Workflow + Review modes",
  "Controlled pilot for one quarter before wider adoption",
];
const NEXT_STEPS = [
  { title: "Download Proof Pack", body: "All case studies bundled with an executive summary and governance one-pager.", cta: "Download Proof Pack" },
  { title: "Request a Similar Pilot", body: "Tell us which story is closest to yours, and we'll scope a comparable pilot.", cta: "Request Similar Pilot" },
  { title: "Start a Trust Review", body: "Route procurement and security stakeholders straight to Trust Center evidence.", cta: "Start Trust Review" },
  { title: "Request Enterprise Briefing", body: "Bring this proof to your board, CFO, or procurement committee directly.", cta: "Request Enterprise Briefing" },
];
const FAQS = [
  { q: "Is this just a chatbot?", a: "No — every story here reflects source governance, reviewer controls, evidence records, and enterprise workflow structure, not a general-purpose chat interface." },
  { q: "Can we trust the outcomes shown?", a: "Outcomes are shown with deployment context and measurement windows, and every story is customer-approved before publication. Results are qualitative and specific to each engagement." },
  { q: "Will this replace our professionals?", a: "No. Kriton™ supports professional workflows and reviewer-led decisions; final judgment stays with your team." },
  { q: "Can procurement verify this independently?", a: "Yes. Procurement and security teams can request evidence through the Trust Center, including security and governance documentation." },
  { q: "Will it work for our specific workflow?", a: "That's what a scoped pilot is for. We'll map a comparable story to your team and define success criteria before starting." },
  { q: "Are results guaranteed?", a: "No. Results depend on deployment context and are not guaranteed; case studies describe specific engagements, not promised outcomes." },
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
export default function CaseStudies() {
  const [filter, setFilter] = useState("All");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const visible = useMemo(() => (filter === "All" ? STUDIES : STUDIES.filter((s) => s.category === filter)), [filter]);

  const amberBtn = "rounded-md px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90";
  const inkBtn = "rounded-md px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90";
  const ghostBtn = "rounded-md border border-black/15 px-5 py-2.5 text-sm font-semibold text-[#16233d] transition-colors hover:border-[#0d9488] hover:text-[#0d9488] dark:border-gray-600 dark:text-gray-100";

  return (
    <main className="bg-[#faf7f0] font-sans text-[#16233d] dark:bg-gray-900 dark:text-white">

      {/* ─── Hero (navy) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8 lg:py-20" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="text-white">
            <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#f0a54a]">
              <span className="h-px w-6 bg-[#f0a54a]" /> Customer Proof for Governed Accounting AI
            </p>
            <h1 className={`mt-5 max-w-xl text-[clamp(2rem,4.5vw,2.9rem)] ${serifH}`}>See how teams put ZoikoLogia™ and Kriton™ to work.</h1>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-slate-300/85">
              Customer-approved stories showing how accounting, finance, audit, tax, education, and AI governance teams
              use source-backed workflows, reviewer controls, escalation, and evidence-ready traceability.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#library" className={amberBtn} style={{ backgroundColor: AMBER }}>Read Case Studies</a>
              <a href="#" className="rounded-md border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10">Book a Demo</a>
              <a href="#" className="text-sm font-semibold text-[#f0a54a] hover:underline">Download Proof Pack →</a>
            </div>
            <p className="mt-6 max-w-lg text-xs leading-relaxed text-slate-400/70">
              Outcomes are shown with deployment context, measurement window, customer approval, and legal-safe
              boundaries. ZoikoLogia™ does not guarantee compliance, replace professional judgment, or provide legal or tax advice.
            </p>
          </div>

          <div className="relative">
            <ImageSlot src="/images/Container (1).png" alt="Team reviewing governed accounting work" ratio="aspect-[4/3]" />
           
          </div>
        </div>
      </section>

      {/* ─── Featured story ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Featured Story</p>
          <h2 className={`mt-4 max-w-2xl text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>A regional accounting firm's rollout of governed Workflow Mode.</h2>

          <div className="mt-8 grid gap-8 rounded-2xl border border-black/10 bg-white p-4 shadow-sm md:grid-cols-2 md:p-6 dark:border-gray-700 dark:bg-gray-900">
            <ImageSlot src="/images/Finance professionals reviewing governed source documentation.png" alt="Firm rollout" ratio="aspect-[4/3]" />
            <div>
              <p className={eyebrowTeal}>Accounting Firm · Composite Story · 40–120 Staff</p>
              <h3 className={`mt-3 text-xl ${serifH}`}>Reducing review friction on multi-element revenue contracts</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {FEATURE_CHIPS.map((c) => (
                  <span key={c} className="flex items-center gap-1 rounded-full bg-[#0d9488]/10 px-3 py-1 text-xs font-medium text-[#0d9488]">
                    <Check className="h-3 w-3" /> {c}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">
                A mid-size firm's technical accounting group adopted Workflow Mode to structure revenue-recognition memos
                across a busy season, with every draft routed through source citations and a reviewing partner before filing.
              </p>
              <blockquote className="mt-4 border-l-2 pl-4 text-[15px] italic leading-relaxed text-slate-600 dark:text-gray-300" style={{ borderColor: AMBER }}>
                “The citation panel is the first thing our reviewing partners check now. It's changed the shape of our
                review meetings — less time re-deriving the standard, more time on judgment calls.”
              </blockquote>
              <p className="mt-3 text-xs text-slate-400">Approved for publication · Composite of three engagement teams · Reviewed by Customer Success, Q2</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href="#detail" className={inkBtn} style={{ backgroundColor: INK }}>Read Full Story</a>
                <a href="#" className={ghostBtn}>Request Similar Pilot</a>
              </div>
              <a href="#" className="mt-4 inline-block text-sm font-semibold text-[#0d9488] hover:underline">Download Executive Summary →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Case study library (cream) ─── */}
      <section id="library" className="scroll-mt-20 px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: "#f5efe0" }}>
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Case Study Library</p>
          <h2 className={`mt-4 max-w-2xl text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Filter by the team and use case closest to yours.</h2>

          <div className="mt-8 flex flex-wrap gap-3">
            {FILTERS.map((f) => {
              const active = filter === f;
              return (
                <button key={f} type="button" onClick={() => setFilter(f)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${active ? "border-transparent text-white" : "border-black/15 bg-white text-slate-600 hover:border-[#0d9488] hover:text-[#0d9488] dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300"}`}
                  style={active ? { backgroundColor: INK } : undefined}>
                  {f}
                </button>
              );
            })}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((s) => (
              <article key={s.title} className="flex flex-col overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <ImageSlot src={s.img} alt={s.eyebrow} ratio="aspect-[16/10]" rounded="rounded-none" />
                <div className="flex flex-1 flex-col p-5">
                  <p className={eyebrowTeal}>{s.eyebrow}</p>
                  <h3 className={`mt-2 text-lg ${serifH}`}>{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-gray-300">{s.body}</p>
                  <div className="mt-3 rounded-md bg-[#efe6d2] px-3 py-2 text-[13px] leading-relaxed text-slate-600 dark:bg-gray-800 dark:text-gray-300">{s.note}</div>
                  <div className="mt-auto flex items-center justify-between pt-4">
                    <a href="#detail" className="text-sm font-semibold text-[#0d9488] hover:underline">Read Case Study →</a>
                    <span className="text-xs text-slate-400">{s.read}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          {visible.length === 0 && <p className="mt-10 text-sm text-slate-500">No case studies in this category yet.</p>}
        </div>
      </section>

      {/* ─── Case study detail ─── */}
      <section id="detail" className="scroll-mt-20 px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-4xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Case Study Detail</p>
          <h2 className={`mt-4 max-w-2xl text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Inside the featured story: how the rollout actually worked.</h2>

          <div className="relative mt-8 overflow-hidden rounded-2xl">
            <ImageSlot src="/images/Accounting firm reviewing a governed workflow.png" alt="Rollout detail" ratio="aspect-[21/9]" rounded="rounded-2xl" />
            <div className="absolute inset-0 flex flex-col justify-center p-8" style={{ backgroundColor: "rgba(15,26,48,0.72)" }}>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#f0a54a]">Accounting Firm · Composite Story</p>
              <h3 className={`mt-2 max-w-lg text-2xl text-white ${serifH}`}>Reducing review friction on multi-element revenue contracts</h3>
              <p className="mt-3 max-w-lg text-sm text-slate-300/85">Approved scope: technical accounting group, 12 preparers, 4 reviewing partners. Anonymity level: composite of three engagement teams.</p>
            </div>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {DETAIL.map((d) => (
              <div key={d.h}>
                <p className={eyebrowTeal}>{d.h}</p>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">{d.body}</p>
              </div>
            ))}
            <div>
              <p className={eyebrowTeal}>Deployment Model</p>
              <ul className="mt-3 space-y-2">
                {DEPLOYMENT.map((t) => (
                  <li key={t} className="flex gap-3 text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: AMBER }} /><span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className={eyebrowTeal}>Results</p>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">
                Over the pilot quarter, reviewing partners reported that citation panels reduced time spent verifying source
                basis during review meetings, and memo structure became more consistent across preparers. Results are
                qualitative and specific to this engagement; they are not a guaranteed outcome for other workflows.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-md bg-[#efe6d2] px-4 py-4 dark:bg-gray-800">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#d9720f]">Lessons Learned</p>
            <p className="mt-2 text-[14px] leading-relaxed text-slate-600 dark:text-gray-300">
              The firm found that reviewer buy-in mattered more than preparer adoption — once reviewing partners started
              referencing the citation panel directly in review meetings, preparer usage followed. They recommend starting a
              pilot with the reviewing group, not just preparers.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#" className={inkBtn} style={{ backgroundColor: INK }}>Request a Similar Pilot</a>
            <a href="#" className={ghostBtn}>Book a Demo</a>
          </div>
        </div>
      </section>

      {/* disclaimer callout */}
      <section className="px-4 pb-8 sm:px-6 md:px-8">
        <div className="mx-auto max-w-4xl rounded-md border-l-2 bg-[#efe6d2] px-4 py-4 text-[13px] leading-relaxed text-slate-600 dark:bg-gray-800 dark:text-gray-300" style={{ borderColor: AMBER }}>
          About the outcomes on this page: results are shown with deployment context, measurement window, and customer
          approval status. We do not claim guaranteed savings, audit-proof outcomes, regulator or auditor endorsement, or
          replacement of professional judgment. Kriton™ supports professional workflows and reviewer-led decisions — it does not replace them.
        </div>
      </section>

      {/* ─── Next step (cream) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: "#f5efe0" }}>
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Next Step</p>
          <h2 className={`mt-4 text-black text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Take this proof further.</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {NEXT_STEPS.map((s) => (
              <div key={s.title} className="flex flex-col rounded-xl border border-black/10 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <h3 className={`text-base ${serifH}`}>{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-gray-300">{s.body}</p>
                <a href="#" className="mt-4 rounded-md border border-black/15 px-4 py-2 text-center text-sm font-semibold text-[#16233d] transition-colors hover:border-[#0d9488] hover:text-[#0d9488] dark:border-gray-600 dark:text-gray-100">{s.cta}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-3xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Before You Ask</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>What buyers usually want to know first.</h2>
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
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#f0a54a]">See the Proof</p>
          <h2 className={`mx-auto mt-3 max-w-xl text-[clamp(1.6rem,3vw,2.2rem)] text-white ${serifH}`}>See the proof behind governed accounting AI.</h2>
          <p className="mx-auto mt-3 max-w-lg text-[15px] leading-relaxed text-slate-300/80">
            Explore how teams use ZoikoLogia™ and Kriton™ with source-backed workflows, reviewer controls, escalation, and evidence-ready traceability.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#" className={amberBtn} style={{ backgroundColor: AMBER }}>Book a Demo</a>
            <a href="#" className="rounded-md border border-white/25 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10">Download Proof Pack</a>
            <a href="#" className="rounded-md border border-white/25 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10">Request Similar Pilot</a>
            <a href="#" className="px-3 py-2.5 text-sm font-semibold text-[#f0a54a] hover:underline">Visit Trust Center →</a>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-xs text-slate-400">
            <a href="#" className="hover:text-white">Read White Papers</a>
            <a href="#" className="hover:text-white">Explore Guides</a>
            <a href="#" className="hover:text-white">View Compliance Reports</a>
          </div>
        </div>
      </section>
    </main>
  );
}

export { CaseStudies };