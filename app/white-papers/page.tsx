"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

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

const CATEGORIES = [
  { title: "Governed AI Accounting Intelligence", body: "Why accounting AI requires source authority, review controls, and audit evidence.", link: "Read Research" },
  { title: "RAG and Source Bundles", body: "How retrieval-augmented generation should be designed for source integrity.", link: "Download Paper" },
  { title: "Accounting Ontology", body: "How structured concepts improve AI consistency and reviewability.", link: "Explore Ontology Paper" },
  { title: "Audit Evidence & Traceability", body: "How evidence-ready records support review and enterprise governance.", link: "Request Evidence Paper" },
  { title: "AI Safety & Platform Limits", body: "How escalation, limits, and risk classification reduce misuse.", link: "Download Governance Paper" },
  { title: "Evaluation & Benchmarks", body: "How enterprises should test AI accounting outputs before deployment.", link: "Read Benchmark Paper" },
  { title: "Enterprise Deployment", body: "How enterprises move from exploratory AI to controlled deployment.", link: "Request Implementation Brief" },
];

const TOPICS = ["All Topics", "Source Governance", "RAG", "Ontology", "Audit Evidence", "AI Safety", "Evaluation", "Professional Boundaries", "Enterprise Deployment", "Education"];

type Paper = {
  tag: string; access: string; title: string; body: string; chips: string[];
  read: string; kind: string; topics: string[]; cta: "download" | "request";
};
const PAPERS: Paper[] = [
  { tag: "PO · NEW", access: "Free Download", title: "Source-Backed RAG for Accounting Workflows", body: "Explains why accounting AI must cite, rank, and limit sources — and how retrieval-augmented generation should be governed rather than left to model memory alone.", chips: ["CTO", "Accounting Firm", "Enterprise Finance"], read: "14 min read", kind: "Technical Paper", topics: ["Source Governance", "RAG"], cta: "download" },
  { tag: "PO · GOVERNANCE", access: "Free Download", title: "AI Safety and Professional Boundaries in Accounting", body: "Defines the line between AI assistance and professional judgment — where Kriton™ is designed to clarify, limit, or route rather than answer definitively.", chips: ["AI Governance", "Audit", "Legal"], read: "16 min read", kind: "Governance Paper", topics: ["AI Safety", "Professional Boundaries"], cta: "download" },
  { tag: "P1", access: "Free Download", title: "Accounting Ontology: The Structural Layer Behind Reliable AI Assistance", body: "Shows how structured accounting concepts, relationships, and definitions improve retrieval accuracy, consistency, and reviewability.", chips: ["Product", "Accounting Firm"], read: "12 min read", kind: "Technical Paper", topics: ["Ontology", "Source Governance"], cta: "download" },
  { tag: "P1", access: "Enterprise Access", title: "Audit Evidence Ledger for AI-Assisted Accounting Workflows", body: "Explains traceability, event records, review states, and evidence exports — and how audit teams can reconstruct what supported an AI-assisted answer.", chips: ["Audit", "Assurance"], read: "15 min read", kind: "Governance Paper", topics: ["Audit Evidence"], cta: "request" },
  { tag: "P1", access: "Free Download", title: "How to Evaluate AI Accounting Outputs Before Deployment", body: "Helps buyers understand evaluation, benchmarks, test cases, and go/no-go gates before wider rollout.", chips: ["AI Governance", "CTO", "Procurement"], read: "13 min read", kind: "Implementation Guide", topics: ["Evaluation", "Enterprise Deployment"], cta: "download" },
  { tag: "P2", access: "Free Download", title: "A Practical Guide to AI Accounting Adoption for Firms", body: "Supports firms evaluating client-service and productivity opportunities, with a realistic view of what changes and what doesn't.", chips: ["Accounting Firm", "Practice Leaders"], read: "17 min read", kind: "Implementation Guide", topics: ["Enterprise Deployment"], cta: "download" },
  { tag: "P2", access: "Free Download", title: "Responsible AI for Accounting Education", body: "Supports universities and training providers evaluating safe learning support, guided practice, and academic-integrity controls.", chips: ["Educator", "Institution"], read: "11 min read", kind: "Governance Paper", topics: ["Education", "AI Safety"], cta: "download" },
  { tag: "FEATURED · EXECUTIVE", access: "Free Download", title: "The Executive Guide to Governed AI Accounting Intelligence", body: "The board and C-suite adoption thesis for safe enterprise accounting AI — see the Featured module above for the full abstract.", chips: ["CFO", "Enterprise Finance", "AI Governance"], read: "18 min read", kind: "Executive Brief", topics: ["Enterprise Deployment", "AI Safety"], cta: "download" },
];

const FEATURED_CHIPS = ["CFO", "Accounting Firm Partner", "CTO", "AI Governance", "Audit", "Tax", "Enterprise Finance"];

const FAQS = [
  { q: "What are ZoikoLogia™ white papers?", a: "Strategic and technical research assets for organizations evaluating governed AI accounting intelligence." },
  { q: "Are the white papers free?", a: "Most are free downloads. A few enterprise-oriented papers are available through a short access request so we can share them with the right context." },
  { q: "Do white papers provide accounting, tax, or legal advice?", a: "No. They are educational research only — they do not constitute accounting, tax, legal, audit, or compliance advice." },
  { q: "Can I request a briefing after reading a white paper?", a: "Yes. Each paper links to a request for an executive or enterprise briefing where our team walks through it with your stakeholders." },
  { q: "Can procurement or security teams use these materials?", a: "Yes. Governance, audit-evidence, and deployment papers are written to support procurement and security review alongside the Trust Center." },
  { q: "How often are white papers updated?", a: "They're revised as the platform, evidence architecture, and governance model evolve; featured papers show a last-updated indicator." },
  { q: "Can customers use white papers for internal adoption?", a: "Yes. They're designed to be shared internally to support adoption discussions with finance, leadership, and governance stakeholders." },
];

function Chevron({ open }: { open: boolean }) {
  return <svg viewBox="0 0 24 24" className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function DocIcon({ className = "h-5 w-5" }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 3h6l4 4v12a2 2 0 01-2 2H8a2 2 0 01-2-2V5a2 2 0 012-2z" strokeLinecap="round" strokeLinejoin="round" /><path d="M14 3v4h4" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

const eyebrowAmber = "flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#d9720f]";
const serifH = "font-serif leading-tight";
const amberLink = "text-sm font-semibold text-[#d9720f] hover:underline";
const creamBand = "bg-[#f5efe0] dark:bg-gray-800/60";

export default function Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [topic, setTopic] = useState("All Topics");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return PAPERS.filter((p) => {
      const byTopic = topic === "All Topics" || p.topics.includes(topic);
      const q = query.trim().toLowerCase();
      const byQuery = !q || p.title.toLowerCase().includes(q) || p.body.toLowerCase().includes(q);
      return byTopic && byQuery;
    });
  }, [topic, query]);

  const amberBtn = "rounded-md px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90";
  const chip = "rounded bg-teal-50 px-2 py-0.5 text-[11px] font-semibold text-teal-700 dark:bg-teal-950/40 dark:text-teal-300";

  return (
    <main className="bg-[#faf7f0] font-sans text-[#16233d] dark:bg-gray-900 dark:text-white">

      <section className="px-4 py-16 sm:px-6 md:px-8 lg:py-20" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="text-white">
            <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#0d9488]">
              <span className="h-px w-6 bg-[#0d9488]" /> Research Library for Governed AI Accounting Intelligence
            </p>
            <h1 className={`mt-5 max-w-xl text-[clamp(2rem,4.5vw,2.9rem)] ${serifH}`}>White papers for leaders evaluating AI in accounting.</h1>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-slate-300/85">
              Explore executive-grade research on source-backed accounting intelligence, RAG, accounting ontology, audit
              evidence, AI safety, evaluation, governance, and enterprise deployment with ZoikoLogia™ and Kriton™.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#featured" className={amberBtn} style={{ backgroundColor: AMBER }}>Download Featured White Paper</a>
              <a href="#" className="rounded-md border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10">Request Enterprise Briefing</a>
            </div>
            <p className="mt-6 max-w-md text-xs leading-relaxed text-slate-400/70">
              Research materials are educational and strategic in nature. They do not constitute accounting, tax, legal, audit, or compliance advice.
            </p>
          </div>
          <ImageSlot src="/images/Rectangle 6.png" alt="Leaders evaluating research" ratio="aspect-[4/3]" rounded="rounded-2xl" />
        </div>
      </section>

      <section id="featured" className="scroll-mt-20 px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid overflow-hidden rounded-2xl border border-black/10 shadow-sm lg:grid-cols-2 dark:border-gray-700">
            <div className="p-8 text-white" style={{ backgroundColor: NAVY }}>
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-[#0d9488]"><DocIcon /></span>
              <h2 className={`mt-5 text-xl ${serifH}`}>The Executive Guide to Governed AI Accounting Intelligence</h2>
              <ul className="mt-5 space-y-2 text-sm text-slate-300/85">
                <li>• Market question: is AI safe for accounting?</li>
                <li>• Research asset: governed intelligence thesis</li>
                <li>• Evidence gate: source authority &amp; escalation</li>
                <li>• Next step: enterprise briefing</li>
              </ul>
            </div>
            <div className="bg-white p-8 dark:bg-gray-900">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#d9720f]">Featured · Executive Brief</p>
              <h3 className={`mt-3 text-xl ${serifH}`}>The shift from generic AI prompts to source-governed accounting intelligence.</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-gray-300">
                Explains why professional-boundary controls, audit evidence, evaluation discipline, and escalation
                pathways separate governed accounting AI from general-purpose chat tools — and what a board or C-suite
                adoption thesis should actually include.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {FEATURED_CHIPS.map((c) => <span key={c} className={chip}>{c}</span>)}
              </div>
              <p className="mt-4 text-xs text-slate-400">18 min read · PDF · Free Download · Updated this quarter</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href="#" className={amberBtn} style={{ backgroundColor: AMBER }}>Download the White Paper</a>
                <a href="#" className="rounded-md border border-black/15 px-5 py-2.5 text-sm font-semibold text-[#16233d] hover:border-[#0d9488] hover:text-[#0d9488] dark:border-gray-600 dark:text-gray-100">Request Executive Briefing</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`px-4 py-16 sm:px-6 md:px-8 ${creamBand}`}>
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Research Categories</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Seven ways into the library.</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((c) => (
              <div key={c.title} className="flex flex-col rounded-xl border border-black/10 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-md text-[#0d9488]" style={{ backgroundColor: "#e6f2f0" }}><DocIcon className="h-4 w-4" /></span>
                <h3 className="text-sm font-bold">{c.title}</h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-600 dark:text-gray-300">{c.body}</p>
                <a href="#library" className={`${amberLink} mt-4 inline-block text-xs`}>{c.link} →</a>
              </div>
            ))}
            <div className="flex flex-col justify-center rounded-xl p-5 text-white" style={{ backgroundColor: NAVY }}>
              <h3 className="text-sm font-bold">See All White Papers</h3>
              <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-300/85">Clear filters and browse the full research library below.</p>
              <a href="#library" className="mt-4 inline-block text-xs font-semibold text-[#0d9488] hover:underline">Browse Library →</a>
            </div>
          </div>
        </div>
      </section>

      <section id="library" className="scroll-mt-20 px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> White Paper Library</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Filter by topic to find what's relevant to you.</h2>

          <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by title or topic..."
            className="mt-6 w-full rounded-lg border border-black/15 px-4 py-3 text-sm focus:border-[#0d9488] focus:outline-none focus:ring-1 focus:ring-[#0d9488] dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100" />

          <div className="mt-4 flex flex-wrap gap-2">
            {TOPICS.map((t) => {
              const on = topic === t;
              return (
                <button key={t} type="button" onClick={() => setTopic(t)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${on ? "border-transparent bg-[#0f1a30] text-white dark:bg-[#0d9488]" : "border-black/15 text-slate-600 hover:border-[#0d9488] hover:text-[#0d9488] dark:border-gray-600 dark:text-gray-300"}`}>
                  {t}
                </button>
              );
            })}
          </div>

          <p className="mt-4 text-xs text-slate-400">{filtered.length} white paper{filtered.length !== 1 ? "s" : ""}</p>

          <div className="mt-4 grid gap-6 md:grid-cols-2">
            {filtered.map((p) => (
              <article key={p.title} className="flex flex-col rounded-xl border border-black/10 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <div className="flex items-start justify-between gap-3">
                  <span className="rounded bg-teal-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-teal-700 dark:bg-teal-950/40 dark:text-teal-300">{p.tag}</span>
                  <span className="text-[11px] font-semibold text-slate-400">{p.access}</span>
                </div>
                <h3 className="mt-3 text-base font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-gray-300">{p.body}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.chips.map((c) => <span key={c} className="rounded bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:bg-gray-800 dark:text-gray-300">{c}</span>)}
                </div>
                <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
                  <span>{p.read}</span><span>{p.kind}</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a href="#" className="rounded-md border border-[#e8912a] px-3 py-1.5 text-xs font-semibold text-[#d9720f] hover:bg-amber-50 dark:hover:bg-amber-950/30">
                    {p.cta === "request" ? "Request Access →" : "Download →"}
                  </a>
                  <a href="#" className="rounded-md border border-[#0d9488] px-3 py-1.5 text-xs font-semibold text-[#0d9488] hover:bg-teal-50 dark:hover:bg-teal-950/30">View Summary</a>
                </div>
                <p className="mt-4 border-t border-black/5 pt-3 text-[11px] text-slate-400 dark:border-gray-800">Educational research only; not accounting, tax, legal, or audit advice.</p>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-8 rounded-lg border border-black/10 bg-white p-6 text-center text-sm text-slate-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400">
              No white papers match that filter. Try a different topic or clear the search.
            </p>
          )}
        </div>
      </section>

      <section className={`px-4 py-16 sm:px-6 md:px-8 ${creamBand}`}>
        <div className="mx-auto max-w-4xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Frequently Asked</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>White paper questions, answered plainly.</h2>
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