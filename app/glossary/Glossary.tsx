import Link from "next/link";

// ─── DATA ──────────────────────────────────────────────────────────────────
// Flat list of terms — they get grouped by first letter automatically.
// Keep this alphabetical and the letter headings + columns take care of themselves.

type Term = { term: string; def: string };

const terms: Term[] = [
  { term: "Accounting Ontology", def: "The structured map of accounting concepts, frameworks, jurisdictions, and effective dates that Kriton™ reasons against." },
  { term: "Admin Mode", def: "The Kriton™ mode for tenant policy, source permissions, provider settings, and governance configuration." },
  { term: "Audit Evidence Ledger", def: "The immutable record connecting a material answer to its source bundle, model run, and reviewer actions." },
  { term: "Authoritative Source", def: "A source that has passed source-authority review and is approved for use at a defined authority level." },
  { term: "Citation Anchor", def: "A pointer from a specific claim in an answer to the exact source version and location that supports it." },
  { term: "Confidence State", def: "A label describing how strongly the retrieved sources support a given answer — high, moderate, or insufficient." },
  { term: "Classification Uncertain", def: "A risk state used when the system cannot confidently assign Low, Medium, High, or Restricted." },
  { term: "Effective Date", def: "The date a standard, rule, or rate takes effect — used to prevent superseded guidance from informing a current answer." },
  { term: "Escalation", def: "The routing of a request or answer to a human reviewer when risk, uncertainty, or professional boundary requires it." },
  { term: "Evidence-Ready", def: "Designed so that a material answer's supporting source bundle, model run, and reviewer trail can be reconstructed later." },
  { term: "Kriton™", def: "The AI advisor inside ZoikoLogia™ — the interface through which users ask questions, review answers, and escalate." },
  { term: "No-Source State", def: "The controlled response Kriton™ gives when it cannot find sufficient approved sources to answer responsibly." },
  { term: "Professional Boundary", def: "The line between AI-supported drafting and judgment that requires a qualified, licensed human." },
  { term: "Provider Due Diligence", def: "The review process applied to model providers and subprocessors before they're approved for production use." },
  { term: "RAG (Retrieval-Augmented Generation)", def: "Generating an answer by first retrieving approved, relevant sources and grounding the response in them." },
  { term: "Review Mode", def: "The Kriton™ mode for reviewer queues, escalation, and workpaper traceability on higher-risk matters." },
  { term: "Risk Classification", def: "The process of assigning a risk level to a request before Kriton™ is permitted to respond." },
  { term: "Source Authority", def: "The control layer defining which sources are approved, at what authority level, and under what license." },
  { term: "Source Bundle", def: "A governed collection of approved sources, with citation anchors and confidence state, assembled for a specific answer." },
  { term: "Tenant Isolation", def: "The architectural boundary ensuring one organization's data, prompts, and sources are never exposed to another's." },
  { term: "Workflow Mode", def: "The Kriton™ mode for source-backed professional task support, with explicit assumptions and limitations attached." },
];

// Group terms by first letter, preserving order.
function groupByLetter(list: Term[]) {
  const groups: { letter: string; items: Term[] }[] = [];
  for (const t of list) {
    const letter = t.term[0].toUpperCase();
    const last = groups[groups.length - 1];
    if (last && last.letter === letter) last.items.push(t);
    else groups.push({ letter, items: [t] });
  }
  return groups;
}

// Split groups into two balanced-ish columns (by term count).
function splitColumns(groups: ReturnType<typeof groupByLetter>) {
  const total = groups.reduce((n, g) => n + g.items.length, 0);
  const half = Math.ceil(total / 2);
  const left: typeof groups = [];
  const right: typeof groups = [];
  let count = 0;
  for (const g of groups) {
    if (count < half) { left.push(g); count += g.items.length; }
    else right.push(g);
  }
  return [left, right] as const;
}

// ─── BITS ──────────────────────────────────────────────────────────────────

function TermGroup({ letter, items }: { letter: string; items: Term[] }) {
  return (
    <div>
      <p className="mb-4 text-sm font-bold text-[#d9720f]">{letter}</p>
      <div className="space-y-6">
        {items.map((t) => (
          <div key={t.term}>
            <h3 className="text-[15px] font-bold text-[#16233d] dark:text-white">{t.term}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-gray-300">{t.def}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

function Glossary() {
  const groups = groupByLetter(terms);
  const [leftCol, rightCol] = splitColumns(groups);

  return (
    <main className="bg-[#faf7f0] font-sans text-[#16233d] dark:bg-gray-900 dark:text-white">
      {/* ─── Hero ─── */}
      <section className="bg-[#f7f3ea] px-4 py-16 sm:px-6 md:px-8 lg:py-20 dark:bg-gray-800">
        <div className="mx-auto max-w-6xl">
          <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#d9720f]">
            <span className="h-px w-6 bg-[#d9720f]" /> Glossary
          </p>
          <h1 className="mt-5 max-w-2xl font-serif text-[clamp(2rem,5vw,3rem)] leading-tight">
            Plain-language definitions for accounting AI and governance terms.
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">
            No jargon left unexplained. If a term you're looking for isn't here yet, ask Kriton™ directly or get in touch.
          </p>
        </div>
      </section>

      {/* ─── Terms (two columns) ─── */}
      <section className="px-4 py-14 sm:px-6 md:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2">
          <div className="space-y-10">
            {leftCol.map((g) => <TermGroup key={g.letter} letter={g.letter} items={g.items} />)}
          </div>
          <div className="space-y-10">
            {rightCol.map((g) => <TermGroup key={g.letter} letter={g.letter} items={g.items} />)}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-[#efe8d6] px-4 pb-20 sm:px-6 md:px-8 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl bg-[#071a33] px-6 py-16 text-center sm:px-10">
            <p className="flex items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#0d9488]">
              <span className="h-px w-6 bg-[#0d9488]" /> Didn't find a term?
            </p>
            <h2 className="mx-auto mt-5 max-w-lg font-serif text-[clamp(1.6rem,4vw,2.1rem)] leading-tight text-white">
              Ask Kriton™, or send us the term you were looking for.
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/suggest-a-term"
                className="rounded-md bg-[#f59a23] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Suggest a Term
              </Link>
              <Link
                href="/resources"
                className="rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
              >
                Back to Resources
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Exported both ways so either default or named import works.
export default Glossary;
export { Glossary };