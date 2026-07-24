"use client";

import Image from "next/image";
import { useState } from "react";

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

const ASSETS = [
  { title: "Logo Package", body: "ZoikoLogia™ and Kriton™ marks in light, dark, and monochrome formats." },
  { title: "Brand Guidelines", body: "Naming conventions, trademark usage, and correct terminology for ZoikoLogia™ and Kriton™." },
  { title: "Product Screenshots", body: "Approved product imagery for editorial use, including Kriton™ interface examples." },
  { title: "Company Fact Sheet", body: "A one-page summary of what ZoikoLogia™ is, who it serves, and how it's governed." },
];

const FACTS = [
  { label: "Company", value: "Zoiko Tech Inc." },
  { label: "Product", value: "ZoikoLogia™ with Kriton™" },
  { label: "Category", value: "Governed AI Accounting Intelligence" },
  { label: "USA Headquarters", value: "Sacramento, CA" },
  { label: "EU Office", value: "London, UK" },
  { label: "Serves", value: "Accounting firms, enterprise finance, audit, tax, education, AI governance" },
  { label: "Trademark Note", value: "ZoikoLogia™ refers to the platform; Kriton™ refers to the embedded AI advisor." },
  { label: "Media Contact", value: "press@zoikologia.com" },
];

type News = { when: string; tag: string; tone: string; title: string; body: string };
const NEWS: News[] = [
  { when: "This Quarter", tag: "PRODUCT", tone: "bg-teal-100 text-teal-700", title: "Expanded source authority tiers and license-state handling", body: "Updated citation and evidence handling across Workflow and Review modes. See the full release notes in Documentation." },
  { when: "Last Quarter", tag: "PRODUCT", tone: "bg-teal-100 text-teal-700", title: "Review Mode reviewer queues and SLA indicators", body: "Added structured escalation queues to support reviewer workflows at scale." },
  { when: "Earlier", tag: "GOVERNANCE", tone: "bg-amber-100 text-amber-700", title: "Trust Center and Compliance Reports launched", body: "Consolidated governance, privacy, security, and compliance documentation into a single enterprise review pathway." },
];

const SPOKESPEOPLE = [
  { team: "Product & Platform Team", topic: "Governed AI & Kriton™ Design", body: "Speaks to product architecture, governance design, and how Kriton™'s modes work in practice." },
  { team: "Trust & Security Team", topic: "Governance, Privacy & Compliance", body: "Speaks to security posture, responsible AI, and enterprise trust questions." },
  { team: "Customer & Industry Team", topic: "Adoption & Market Perspective", body: "Speaks to how accounting firms, finance teams, and educators are adopting governed AI." },
];

const FAQS = [
  { q: "How do I contact ZoikoLogia™ for a press inquiry?", a: "Email press@zoikologia.com or submit a media inquiry through our Contact page — it routes directly to our communications team." },
  { q: "Can I use ZoikoLogia™ or Kriton™ logos in my coverage?", a: "Yes, within the brand guidelines. Download the logo package and guidelines from the press kit above and follow the trademark usage rules." },
  { q: "Can I request an interview with a company spokesperson?", a: "Yes. Submit a media inquiry noting the topic; spokesperson availability is confirmed per request through the media inquiry form." },
  { q: "Does ZoikoLogia™ comment on rumors or unannounced features?", a: "No. We comment on published information and announced capabilities; we don't confirm rumors or discuss unannounced features." },
  { q: "Where can I find company facts for a story?", a: "The Company Facts section above provides accurate, reportable basics; the Company Fact Sheet in the press kit has a one-page summary." },
];

function Chevron({ open }: { open: boolean }) {
  return <svg viewBox="0 0 24 24" className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function Check({ className = "h-4 w-4" }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function DocIcon({ className = "h-4 w-4" }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 3h6l4 4v12a2 2 0 01-2 2H8a2 2 0 01-2-2V5a2 2 0 012-2z" strokeLinecap="round" strokeLinejoin="round" /><path d="M14 3v4h4" strokeLinecap="round" strokeLinejoin="round" /></svg>;
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
              <span className="h-px w-6 bg-[#0d9488]" /> Press & Media
            </p>
            <h1 className={`mt-5 max-w-xl text-[clamp(2rem,4.5vw,2.9rem)] ${serifH}`}>Resources for journalists, analysts, and editorial teams.</h1>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-slate-300/85">
              Brand assets, company facts, product announcements, and a direct line to our communications team —
              everything you need to cover ZoikoLogia™ accurately.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#kit" className={amberBtn} style={{ backgroundColor: AMBER }}>Download Press Kit</a>
              <a href="#" className="rounded-md border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10">Submit Media Inquiry</a>
            </div>
            <p className="mt-6 max-w-md text-xs leading-relaxed text-slate-400/70">
              Press materials describe ZoikoLogia™ accurately and factually. For product claims beyond what's published here, please contact our press team directly.
            </p>
          </div>

          <div className="relative">
            <ImageSlot src="/images/c.png" alt="Editorial team" ratio="aspect-[4/3]" rounded="rounded-2xl" />
            <div className="absolute -bottom-4 left-4 right-4 flex items-center gap-2 rounded-xl border border-white/10 bg-[#0f1a30]/95 px-4 py-3 text-white shadow-xl">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0d9488] text-white"><Check className="h-3 w-3" /></span>
              <span className="text-xs text-slate-200">Media inquiries are routed to a real communications contact — not a shared inbox.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-black/10 bg-white p-6 shadow-sm sm:flex-row sm:items-center dark:border-gray-700 dark:bg-gray-900">
            <div>
              <h2 className="text-lg font-bold">Media & Press Contact</h2>
              <p className="mt-1 text-sm text-slate-600 dark:text-gray-300">For interviews, comments, and editorial requests: <a href="mailto:press@zoikologia.com" className="font-semibold text-[#0d9488] hover:underline">press@zoikologia.com</a></p>
            </div>
            <a href="#" className="rounded-md px-5 py-2.5 text-sm font-semibold text-white" style={{ backgroundColor: NAVY }}>Submit Media Inquiry</a>
          </div>
        </div>
      </section>

      <section id="kit" className={`scroll-mt-20 px-4 py-16 sm:px-6 md:px-8 ${creamBand}`}>
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Press Kit & Brand Assets</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Everything you need to reference ZoikoLogia™ correctly.</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ASSETS.map((a) => (
              <div key={a.title} className="flex flex-col rounded-xl border border-black/10 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-md text-[#0d9488]" style={{ backgroundColor: "#e6f2f0" }}><DocIcon className="h-4 w-4" /></span>
                <h3 className="text-sm font-bold">{a.title}</h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-600 dark:text-gray-300">{a.body}</p>
                <a href="#" className={`${tealLink} mt-4 inline-block text-xs`}>Download →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Company Facts</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>The basics, for accurate reporting.</h2>
          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-4 dark:border-gray-700 dark:bg-gray-700">
            {FACTS.map((f) => (
              <div key={f.label} className="bg-white p-5 dark:bg-gray-900">
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">{f.label}</p>
                <p className="mt-2 text-sm font-medium leading-relaxed">{f.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`px-4 py-16 sm:px-6 md:px-8 ${creamBand}`}>
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> News & Announcements</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>What we've shared publicly.</h2>
          <div className="mt-8 divide-y divide-black/10 border-y border-black/10 dark:divide-gray-700 dark:border-gray-700">
            {NEWS.map((n) => (
              <div key={n.title} className="grid gap-3 py-6 md:grid-cols-[130px_1fr]">
                <p className="text-xs font-semibold text-slate-400">{n.when}</p>
                <div>
                  <span className={`inline-block rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${n.tone}`}>{n.tag}</span>
                  <h3 className="mt-2 text-base font-bold">{n.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-gray-300">{n.body}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-500 dark:text-gray-400">
            Looking for a specific announcement or comment on a story? <a href="#" className={tealLink}>Contact our press team →</a>
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Available for Comment</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Who we can make available for interviews.</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {SPOKESPEOPLE.map((s) => (
              <div key={s.team} className="rounded-xl border border-black/10 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <h3 className="text-base font-bold">{s.team}</h3>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-[#0d9488]">{s.topic}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-gray-300">{s.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-slate-400">Spokesperson availability is confirmed per request through the media inquiry form.</p>
        </div>
      </section>

      <section className={`px-4 py-16 sm:px-6 md:px-8 ${creamBand}`}>
        <div className="mx-auto max-w-4xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Frequently Asked</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Press questions, answered plainly.</h2>
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