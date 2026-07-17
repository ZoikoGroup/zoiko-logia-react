import Link from "next/link";

// ─── DATA ──────────────────────────────────────────────────────────────────
// Each brief is an object. `note` is an optional shaded callout under a brief.

type Brief = {
  id: string;
  chip: string;      // filter-chip label
  category: string;  // eyebrow suffix: "BUYER BRIEF · {category}"
  title: string;
  intro: string;
  bullets: string[];
  note?: string;
};

const briefs: Brief[] = [
  {
    id: "executive-brief",
    chip: "Executive Brief",
    category: "Board & Executive",
    title: "Executive Brief",
    intro:
      "A concise, board-ready overview of governed AI accounting intelligence and what it changes for your organization — written for people who won't read a technical spec but need to approve a budget line.",
    bullets: [
      "What \u201cgoverned\u201d means and why it matters for regulated professional work.",
      "The three-part business case: time, risk, and review quality.",
      "A one-page summary suitable for board or steering-committee circulation.",
    ],
    note: "Most requested document in this library — start here if you're building buy-in.",
  },
  {
    id: "procurement-checklist",
    chip: "Procurement Checklist",
    category: "Procurement",
    title: "Procurement Checklist",
    intro:
      "The questions procurement teams ask before approving any AI vendor — organized so you're not scrambling to answer them one at a time during a vendor call.",
    bullets: [
      "Data handling, subprocessor list, and training opt-out verification.",
      "Contracting entity, headquarters, and trademark ownership details.",
      "Renewal terms, data portability, and offboarding process.",
    ],
  },
  {
    id: "security-review",
    chip: "Security Review Guide",
    category: "Security & IT",
    title: "Security Review Guide",
    intro:
      "What your IT and security team should evaluate first — tenant isolation, encryption in transit and at rest, access controls, and where to request current compliance reports.",
    bullets: [
      "Architecture summary for a technical reviewer, not a sales deck.",
      "Provider due diligence process and regional data routing.",
      "How to request a live security review with our team.",
    ],
  },
  {
    id: "pilot-planning",
    chip: "Pilot Planning Worksheet",
    category: "Evaluation",
    title: "Pilot Planning Worksheet",
    intro:
      "A working template for defining a controlled pilot — before you talk to us, or during your first call. Filling this out tends to cut weeks off the evaluation timeline.",
    bullets: [
      "Define pilot users, source scope, and workflows in advance.",
      "Set success criteria that both sides agree on before starting.",
      "Identify the reviewer(s) who will sign off on pilot results.",
    ],
  },
  {
    id: "governance-readiness",
    chip: "Governance Readiness Checklist",
    category: "Governance",
    title: "Governance Readiness Checklist",
    intro:
      "A self-assessment for evaluating whether your organization is ready to adopt governed AI in accounting workflows — and what to put in place first if it isn't yet.",
    bullets: [
      "Source licensing and approval process readiness.",
      "Reviewer capacity for escalated or high-risk matters.",
      "Existing AI governance policy, if any, and where it needs updating.",
    ],
  },
  {
    id: "champion-deck",
    chip: "Champion Deck",
    category: "Internal Champion",
    title: "Internal Champion Deck",
    intro:
      "If you're the person inside your organization pushing this evaluation forward, this is the deck built for you — customizable slides for pitching internally to finance, IT, and leadership.",
    bullets: [
      "Editable slide template covering value, governance, and rollout plan.",
      "Built to be presented by you, not by our sales team.",
      "Customized to your role and use case on request.",
    ],
  },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────

 export default function Buyers() {
  return (
    <main className="bg-[#faf7f0] font-sans text-[#16233d] dark:bg-gray-900 dark:text-white">
      {/* ─── Hero ─── */}
      <section className="bg-[#f7f3ea] px-4 py-16 sm:px-6 md:px-8 lg:py-20 dark:bg-gray-800">
        <div className="mx-auto max-w-6xl">
          <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#d9720f]">
            <span className="h-px w-6 bg-[#d9720f]" /> Buyer Briefs
          </p>
          <h1 className="mt-5 max-w-2xl font-serif text-[clamp(2rem,5vw,3rem)] leading-tight">
            Executive-ready material for buying committees.
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">
            Six documents built for the different people in your buying process — from the board summary to the security
            reviewer's checklist.
          </p>

          {/* Jump chips */}
          <div className="mt-8 flex flex-wrap gap-3">
            {briefs.map((b) => (
              <Link
                key={b.id}
                href={`#${b.id}`}
                className="rounded-full border border-black/15 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:border-[#0d9488] hover:text-[#0d9488] dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-[#34d39e] dark:hover:text-[#34d39e]"
              >
                {b.chip}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Briefs ─── */}
      <section className="px-4 sm:px-6 md:px-8">
        <div className="mx-auto max-w-3xl">
          {briefs.map((b, i) => (
            <article
              key={b.id}
              id={b.id}
              className={`scroll-mt-24 py-12 ${i < briefs.length - 1 ? "border-b border-black/10 dark:border-gray-700" : ""}`}
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#0d9488] dark:text-[#34d39e]">
                Buyer Brief · {b.category}
              </p>
              <h2 className="mt-3 font-serif text-[clamp(1.4rem,3vw,1.9rem)] leading-tight">{b.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">{b.intro}</p>

              <ul className="mt-5 space-y-3">
                {b.bullets.map((t, k) => (
                  <li key={k} className="flex gap-3 text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f59a23]" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>

              {b.note ? (
                <div className="mt-6 rounded-md bg-[#efe6d2] px-4 py-3 text-[13px] leading-relaxed text-slate-600 dark:bg-gray-800 dark:text-gray-300">
                  {b.note}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <div className="pb-16" />
    </main>
  );
}

