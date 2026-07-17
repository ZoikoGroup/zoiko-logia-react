import Image from "next/image";
import Link from "next/link";

// ─── DATA ──────────────────────────────────────────────────────────────────
// Each guide is an object. `img` is optional — leave "" for no image, or set a
// path like "/images/zoikologia/guides/source-governed.jpg" to show a banner.
// `bullets` are [bold lead-in, rest of sentence] pairs.

type Guide = {
  id: string;
  category: string;
  chip: string;
  title: string;
  body: string[];
  bullets: [string, string][];
  outro?: string;
  note?: string;
  img?: string;
};

const guides: Guide[] = [
  {
    id: "source-governed",
    category: "Platform",
    chip: "Source-Governed AI",
    title: "What Is Source-Governed Accounting AI?",
    img: "",
    body: [
      "Most AI tools answer from model memory — a statistical best-guess shaped by training data, not by any specific authoritative source. For general writing tasks, that's fine. For accounting, tax, and audit work, it's a problem: a fluent-sounding answer with no traceable source is not something a reviewer can sign off on.",
      "Source-governed AI flips the order of operations. Instead of generating first and citing after the fact (if at all), the system determines which sources are approved, at what authority level, and under what license — before retrieval even happens. Only sources that pass those checks ever become candidates for an answer.",
    ],
    bullets: [
      ["Source authority hierarchy", "not all sources carry the same weight; primary standards outrank secondary commentary."],
      ["Version and effective-date awareness", "a superseded standard shouldn't silently inform a current answer."],
      ["License-aware display", "some sources can be cited but not quoted at length, or summarized but not exported."],
      ["Controlled no-source behavior", "when nothing sufficient is approved, the system says so instead of guessing."],
    ],
    outro:
      "This is also the foundation for retrieval-augmented generation (RAG) done well: the “retrieval” step only ever pulls from a pool that's already been governed, so what gets assembled into a source bundle is provenance-checked by construction — which is what makes citation-backed answers possible in the first place. It's the same discipline that underlies the platform's Accounting Ontology layer, which maps how those approved sources relate to frameworks, jurisdictions, and effective dates.",
    note: "This guide is educational and supports evaluation; it does not constitute accounting, audit, tax, or legal advice.",
  },
  {
    id: "kriton-workflows",
    category: "Kriton™",
    chip: "Kriton™ Workflows",
    title: "How Kriton™ Supports Accounting Teams",
    img: "",
    body: [
      "Kriton™ is the AI advisor inside ZoikoLogia™ — the interface people actually talk to. It operates across four modes, each with a different scope of what it's allowed to do.",
    ],
    bullets: [
      ["Ask", "general accounting, tax, audit, payroll, and compliance questions."],
      ["Learning", "concept explanations, guided practice, and prerequisite-aware pathways."],
      ["Workflow", "source-backed guidance for structured professional tasks, with explicit assumptions and limitations attached."],
      ["Review", "reviewer queues, escalation routing, and full workpaper traceability for higher-risk matters."],
    ],
    outro:
      "The mode isn't just a UI label — it changes what evidence Kriton™ requires before it will answer, and what limitation language gets attached automatically. A Workflow Mode answer about revenue recognition carries different obligations than a Learning Mode explanation of the same concept to a student.",
  },
  {
    id: "evidence-ready",
    category: "Governance",
    chip: "Evidence-Ready Workflows",
    title: "Evidence-Ready AI Accounting Workflows",
    img: "",
    body: [
      "“Evidence-ready” is a specific claim, not a marketing phrase: it means every material answer is designed to be reconstructed later — which source bundle supported it, which model run produced it, and which reviewer signed off (if one was required).",
      "This matters most in exactly the moments it's hardest to retrofit: six months after an answer was used in a workpaper, when an auditor asks “what supported this?” The Audit Evidence Ledger is designed to answer that question with a record, not a reconstruction from memory.",
    ],
    bullets: [
      ["Source bundle ID, ontology version, and risk policy ID", "attached to every material answer."],
      ["Model run history", "preserved for replay."],
      ["Reviewer actions and sign-offs", "logged as part of the same trail."],
      ["Replay manifests that disclose completeness", "including known gaps, rather than hiding them."],
    ],
  },
  {
    id: "business-case",
    category: "Buyer Enablement",
    chip: "Business Case",
    title: "Building a Business Case for Governed Accounting AI",
    img: "",
    body: [
      "Most AI business cases lean entirely on time savings. For accounting and audit workflows, that's an incomplete pitch — the real case has three legs: time, risk, and review quality.",
    ],
    bullets: [
      ["Time:", "hours spent manually locating and verifying sources before drafting a position."],
      ["Risk:", "the cost of an unsupported answer reaching a filing, a client deliverable, or an audit workpaper."],
      ["Review quality:", "reviewers spending their time evaluating judgment calls instead of re-deriving basic facts."],
    ],
    outro:
      "Use the ROI Calculator to put rough numbers against the time dimension, and pair it with the Governance Overview and Compliance Reports when the conversation turns to risk.",
  },
  {
    id: "for-firms",
    category: "For Accounting Firms",
    chip: "For Accounting Firms",
    title: "What Changes for Accounting Firms",
    img: "",
    body: [
      "Firms carry client-service obligations that internal finance teams don't — disclosure expectations, engagement letters, and professional-body rules about AI-assisted work. Three things to plan for:",
    ],
    bullets: [
      ["Professional boundaries", "Kriton™ is designed to support staff research and drafting, not to be the final word on a client position."],
      ["Pilot structure", "start with a defined engagement type, a small group of reviewers, and clear success criteria before wider rollout."],
      ["Client-service disclosure", "decide, with your own counsel, what (if anything) needs to be disclosed to clients about AI-assisted preparation."],
    ],
  },
  {
    id: "for-educators",
    category: "For Educators",
    chip: "For Educators",
    title: "What Changes for Educators",
    img: "",
    body: [
      "Learning Mode is built differently from the other three modes — its job is to build understanding, not just deliver an answer. That distinction has direct implications for classroom and training use.",
    ],
    bullets: [
      ["Prerequisite-aware pathways", "explanations sequence based on what a learner already knows."],
      ["Misconception warnings", "surfaced in context rather than left for a learner to discover later."],
      ["Academic integrity safeguards", "Learning Mode is designed to decline requests that look like live exam completion, offering study support instead."],
    ],
  },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────

function Guides() {
  return (
    <main className="bg-[#faf7f0] font-sans text-[#16233d] dark:bg-gray-900 dark:text-white">
      {/* ─── Hero ─── */}
      <section className="bg-[#f7f3ea] px-4 py-16 sm:px-6 md:px-8 lg:py-20 dark:bg-gray-800">
        <div className="mx-auto max-w-6xl">
          <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#d9720f]">
            <span className="h-px w-6 bg-[#d9720f]" /> Guides
          </p>
          <h1 className="mt-5 max-w-3xl font-serif text-[clamp(2rem,5vw,3rem)] leading-tight">
            In-depth guides on governed accounting AI.
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">
            Six explainers covering source governance, Kriton™, evidence readiness, the business case, and what changes
            for accounting firms and educators.
          </p>

          {/* Jump chips */}
          <div className="mt-8 flex flex-wrap gap-3">
            {guides.map((g) => (
              <Link
                key={g.id}
                href={`#${g.id}`}
                className="rounded-full border border-black/15 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:border-[#0d9488] hover:text-[#0d9488] dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-[#34d39e] dark:hover:text-[#34d39e]"
              >
                {g.chip}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Guide sections ─── */}
      <section className="px-4 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          {guides.map((g, i) => (
            <article
              key={g.id}
              id={g.id}
              className={`scroll-mt-24 py-14 ${i < guides.length - 1 ? "border-b border-black/10 dark:border-gray-700" : ""}`}
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#0d9488] dark:text-[#34d39e]">
                Guide · {g.category}
              </p>
              <h2 className="mt-3 max-w-3xl font-serif text-[clamp(1.4rem,3vw,1.9rem)] leading-tight">
                {g.title}
              </h2>

              {/* Optional image slot */}
              {g.img ? (
                <div className="relative mt-6 aspect-[16/7] w-full overflow-hidden rounded-xl">
                  <Image src={g.img} alt={g.title} fill sizes="(max-width:1024px) 100vw, 66vw" className="object-cover" />
                </div>
              ) : null}

              <div className="mt-5 max-w-3xl space-y-4">
                {g.body.map((p, k) => (
                  <p key={k} className="text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">{p}</p>
                ))}
              </div>

              <ul className="mt-6 max-w-3xl space-y-3">
                {g.bullets.map(([lead, rest], k) => (
                  <li key={k} className="flex gap-3 text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f59a23]" />
                    <span>
                      <span className="font-bold text-[#16233d] dark:text-white">{lead}</span> — {rest}
                    </span>
                  </li>
                ))}
              </ul>

              {g.outro ? (
                <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">{g.outro}</p>
              ) : null}

              {g.note ? (
                <div className="mt-6 max-w-3xl rounded-md bg-[#efe6d2] px-4 py-3 text-[13px] leading-relaxed text-slate-600 dark:bg-gray-800 dark:text-gray-300">
                  {g.note}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="px-4 pb-20 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl bg-[#071a33] px-6 py-16 text-center sm:px-10">
            <p className="flex items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#0d9488]">
              <span className="h-px w-6 bg-[#0d9488]" /> Keep Exploring
            </p>
            <h2 className="mx-auto mt-5 max-w-lg font-serif text-[clamp(1.6rem,4vw,2.1rem)] leading-tight text-white">
              See how these ideas show up in the actual product.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-slate-300">
              Guides explain the thinking. The platform shows the implementation.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/book-a-demo" className="rounded-md bg-[#f59a23] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90">
                Book a Demo
              </Link>
              <Link href="/platform" className="rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5">
                Explore the Platform
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Exported both ways so either default or named import works.
export default Guides;
export { Guides };