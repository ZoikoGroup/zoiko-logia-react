"use client";

import { useState } from "react";

const NAVY = "#0f1a30";
const AMBER = "#e8912a";

const ORG_TYPES = ["Accounting Firm", "Enterprise Finance", "Tax Practice", "Audit Firm", "Education", "Other"];
const BUYER_ROLES = ["Partner / Owner", "Controller / CAO", "CFO / Finance Executive", "Finance Manager", "Other"];
const ADOPTION = [
  { key: "pilot", label: "Pilot — evaluating", factor: 0.5 },
  { key: "growing", label: "Growing — partial rollout", factor: 0.75 },
  { key: "mature", label: "Mature — broad adoption", factor: 1.0 },
];
const GOVERNANCE = ["Light", "Standard", "Strict"];

const BANDS = { conservative: 0.15, expected: 0.30, upside: 0.45 };

const HERO_STEPS = [
  { n: "01", title: "Your Inputs", body: "Team size, workflow volume, and current effort." },
  { n: "02", title: "Governed Assumptions", body: "Conservative support ranges, adjustable by you." },
  { n: "03", title: "Value Ranges", body: "Conservative, expected, and upside scenarios." },
  { n: "04", title: "Next Step", body: "Guided assessment, pilot, or enterprise pricing." },
];

const METHODOLOGY = [
  { title: "Baseline Modeling", body: "The estimate begins with the workflow volume, role mix, current effort, and review burden you enter. Every editable value is visible in the assumption report above." },
  { title: "Value Categories", body: "Time-value, review-capacity, governance-support, documentation-support, and adoption-expansion value are kept separate — never collapsed into one guaranteed savings number." },
  { title: "Scenario Bands", body: "Conservative, expected, and upside scenarios use different support-range assumptions. The conservative scenario is selected by default." },
  { title: "Confidence Indicator", body: "Confidence reflects input completeness and adoption maturity. Lower confidence estimates should lead to a guided assessment rather than being taken at face value." },
];

const FAQS = [
  { q: "Does the ROI Calculator guarantee savings?", a: "No. It provides directional estimates based on your own inputs, illustrative benchmarks, and scenario ranges — not a guarantee." },
  { q: "What does the calculator measure?", a: "It models potential time-value across research, review, documentation, evidence, and escalation workflows, then converts recoverable time into an annual value range using your blended hourly cost." },
  { q: "Does ZoikoLogia™ replace accountants or auditors?", a: "No. It supports professional workflows and reviewer-led decisions; the value modeled is workflow support, not replacement of professional judgment." },
  { q: "Can I use my own assumptions?", a: "Yes. Every workflow volume, effort minute, hourly cost, and adoption setting is editable — the estimate updates from your numbers, not fixed defaults." },
  { q: "Why are results shown as ranges?", a: "Because outcomes depend on adoption, workflow scope, source configuration, and review practices. Conservative, expected, and upside bands are more honest than a single figure." },
  { q: "Can I share the result with my team?", a: "Yes. The estimate and its assumptions are designed to be exported and reviewed with finance, procurement, and leadership stakeholders." },
  { q: "Is the calculator suitable for enterprise procurement?", a: "It's a directional planning tool. For procurement, pair it with a guided assessment and enterprise pricing rather than treating the output as a contractual commitment." },
  { q: "Does the calculator process client data?", a: "No. It uses only the workflow assumptions you enter in the browser — no confidential client records are submitted or required." },
  { q: "Can it estimate value for education teams?", a: "Yes. The learning-support interactions input is most relevant for education teams and feeds the same directional model." },
  { q: "What's the best next step after calculating?", a: "A guided assessment or pilot, which validates the assumptions against your real workflows before any broader rollout or pricing discussion." },
];

function Chevron({ open }: { open: boolean }) {
  return <svg viewBox="0 0 24 24" className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

const eyebrowAmber = "flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#d9720f]";
const eyebrowTeal = "text-[11px] font-bold uppercase tracking-[0.14em] text-[#0d9488]";
const serifH = "font-serif leading-tight";
const creamBand = "bg-[#f5efe0] dark:bg-gray-800/60";

const money = (n: number) => "$" + Math.round(n).toLocaleString("en-US");

export default function Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const [org, setOrg] = useState({ type: ORG_TYPES[0], teamSize: 15, role: BUYER_ROLES[0] });
  const [wf, setWf] = useState({ research: 40, review: 25, evidence: 10, docs: 20, learning: 0, escalations: 5 });
  const [effort, setEffort] = useState({ perResearch: 25, perReviewDoc: 20, perEvidence: 30, escalationDelay: 45 });
  const [cost, setCost] = useState(65);
  const [adoption, setAdoption] = useState("growing");
  const [governance, setGovernance] = useState("Standard");
  const [result, setResult] = useState<null | {
    conservative: number; expected: number; upside: number; annualHours: number; confidence: string; confTone: string;
  }>(null);

  const useConservativeDefaults = () => {
    setWf({ research: 20, review: 12, evidence: 5, docs: 10, learning: 0, escalations: 2 });
    setEffort({ perResearch: 20, perReviewDoc: 15, perEvidence: 25, escalationDelay: 30 });
    setCost(55);
    setAdoption("pilot");
    setGovernance("Strict");
    setResult(null);
  };

  const calculate = () => {
    const weeklyMinutes =
      wf.research * effort.perResearch +
      (wf.review + wf.docs + wf.learning) * effort.perReviewDoc +
      wf.evidence * effort.perEvidence +
      wf.escalations * effort.escalationDelay;

    const weeklyHours = weeklyMinutes / 60;
    const annualHours = weeklyHours * 52;
    const annualCost = annualHours * cost;

    const factor = ADOPTION.find((a) => a.key === adoption)?.factor ?? 0.75;
    const value = (band: number) => annualCost * band * factor;

    const filled = [wf.research, wf.review, wf.evidence, wf.docs, wf.escalations].filter((v) => v > 0).length;
    let confidence = "Moderate", confTone = "bg-amber-100 text-amber-700";
    if (adoption === "mature" && filled >= 4) { confidence = "Higher"; confTone = "bg-teal-100 text-teal-700"; }
    else if (adoption === "pilot" || filled <= 2) { confidence = "Lower"; confTone = "bg-slate-200 text-slate-700"; }

    setResult({
      conservative: value(BANDS.conservative),
      expected: value(BANDS.expected),
      upside: value(BANDS.upside),
      annualHours,
      confidence,
      confTone,
    });
  };

  const amberBtn = "rounded-md px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90";
  const ghostBtn = "rounded-md border border-black/15 px-4 py-2 text-sm font-semibold text-[#16233d] transition-colors hover:border-[#0d9488] hover:text-[#0d9488] dark:border-gray-600 dark:text-gray-100";
  const field = "mt-1.5 w-full rounded-md border border-black/15 px-3 py-2.5 text-sm text-[#16233d] focus:border-[#0d9488] focus:outline-none focus:ring-1 focus:ring-[#0d9488] dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100";
  const groupLabel = "text-[11px] font-bold uppercase tracking-[0.14em] text-[#0d9488]";

  const Slider = ({ label, k, max, hint }: { label: string; k: keyof typeof wf; max: number; hint?: string }) => (
    <div>
      <div className="flex items-center justify-between">
        <label className="text-sm text-slate-600 dark:text-gray-300">{label}</label>
        <span className="text-sm font-bold">{wf[k]}</span>
      </div>
      <input type="range" min={0} max={max} value={wf[k]} onChange={(e) => setWf({ ...wf, [k]: Number(e.target.value) })}
        className="mt-2 w-full accent-[#0d9488]" />
      {hint && <p className="mt-1 text-xs text-slate-400">{hint}</p>}
    </div>
  );

  const num = (label: string, val: number, set: (n: number) => void, hint?: string) => (
    <div>
      <label className="text-sm font-medium text-slate-600 dark:text-gray-300">{label}</label>
      <input type="number" min={0} value={val} onChange={(e) => set(Number(e.target.value))} className={field} />
      {hint && <p className="mt-1 text-xs text-slate-400">{hint}</p>}
    </div>
  );

  return (
    <main className="bg-[#faf7f0] font-sans text-[#16233d] dark:bg-gray-900 dark:text-white">

      <section className="px-4 py-16 sm:px-6 md:px-8 lg:py-20" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto max-w-6xl text-white">
          <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#0d9488]">
            <span className="h-px w-6 bg-[#0d9488]" /> AI Accounting Value Planning
          </p>
          <h1 className={`mt-5 max-w-2xl text-[clamp(2rem,4.5vw,2.9rem)] ${serifH}`}>Estimate the directional value of governed AI for accounting teams.</h1>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-slate-300/85">
            Use transparent assumptions to model how ZoikoLogia™ with Kriton™ may support accounting research, review
            capacity, documentation, evidence preparation, learning support, and governance workflows.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#build" className={amberBtn} style={{ backgroundColor: AMBER }}>Calculate My ROI</a>
            <a href="#" className="rounded-md border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10">Request Enterprise Pricing →</a>
          </div>
          <p className="mt-6 max-w-2xl text-xs leading-relaxed text-slate-400/70">
            Directional estimates only. Results depend on team adoption, workflow scope, approved sources, review
            practices, and implementation quality.
          </p>

          <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {HERO_STEPS.map((s) => (
              <div key={s.n} className="bg-[#0f1a30] p-5">
                <span className="text-xs font-bold text-[#0d9488]">{s.n}</span>
                <h3 className="mt-2 text-sm font-bold text-white">{s.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="build" className="scroll-mt-20 px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">

            <div className="flex items-center justify-between gap-3 border-b border-black/10 px-6 py-5 dark:border-gray-700">
              <h2 className="text-lg font-bold">Build Your Estimate</h2>
              <button type="button" onClick={useConservativeDefaults} className={ghostBtn}>Use Conservative Defaults</button>
            </div>

            <div className="space-y-8 p-6">

              <div>
                <p className={groupLabel}>Organization Profile</p>
                <div className="mt-4 grid gap-5 sm:grid-cols-3">
                  <div>
                    <label className="text-sm font-medium text-slate-600 dark:text-gray-300">Organization type</label>
                    <select className={field} value={org.type} onChange={(e) => setOrg({ ...org, type: e.target.value })}>
                      {ORG_TYPES.map((o) => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                  {num("Team size", org.teamSize, (n) => setOrg({ ...org, teamSize: n }))}
                  <div>
                    <label className="text-sm font-medium text-slate-600 dark:text-gray-300">Primary buyer role</label>
                    <select className={field} value={org.role} onChange={(e) => setOrg({ ...org, role: e.target.value })}>
                      {BUYER_ROLES.map((r) => <option key={r}>{r}</option>)}
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <p className={groupLabel}>Workflow Baseline (per week)</p>
                <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <Slider label="Research questions" k="research" max={200} />
                  <Slider label="Review items" k="review" max={200} />
                  <Slider label="Evidence requests" k="evidence" max={100} />
                  <Slider label="Documentation tasks" k="docs" max={100} />
                  <Slider label="Learning-support interactions" k="learning" max={100} hint="Most relevant for education teams" />
                  <Slider label="Escalations requiring review" k="escalations" max={50} />
                </div>
              </div>

              <div>
                <p className={groupLabel}>Current Effort (minutes, typical)</p>
                <div className="mt-4 grid gap-5 sm:grid-cols-3">
                  {num("Per research question", effort.perResearch, (n) => setEffort({ ...effort, perResearch: n }), "Estimate — not independently verified")}
                  {num("Per review / documentation item", effort.perReviewDoc, (n) => setEffort({ ...effort, perReviewDoc: n }))}
                  {num("Per evidence request", effort.perEvidence, (n) => setEffort({ ...effort, perEvidence: n }))}
                </div>
                <div className="mt-5 grid gap-5 sm:grid-cols-3">
                  {num("Avg. escalation routing delay", effort.escalationDelay, (n) => setEffort({ ...effort, escalationDelay: n }))}
                </div>
              </div>

              <div>
                <p className={groupLabel}>Cost Basis</p>
                <div className="mt-4 grid gap-5 sm:grid-cols-3">
                  {num("Blended hourly cost ($)", cost, setCost, "Illustrative benchmark — edit freely")}
                </div>
              </div>

              <div>
                <p className={groupLabel}>Adoption & Governance</p>
                <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  <div>
                    <label className="text-sm font-medium text-slate-600 dark:text-gray-300">Adoption maturity</label>
                    <select className={field} value={adoption} onChange={(e) => setAdoption(e.target.value)}>
                      {ADOPTION.map((a) => <option key={a.key} value={a.key}>{a.label}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-600 dark:text-gray-300">Governance environment</label>
                    <select className={field} value={governance} onChange={(e) => setGovernance(e.target.value)}>
                      {GOVERNANCE.map((g) => <option key={g}>{g}</option>)}
                    </select>
                  </div>
                </div>
              </div>

              <div className="border-t border-black/10 pt-6 dark:border-gray-700">
                <button type="button" onClick={calculate} className={amberBtn} style={{ backgroundColor: AMBER }}>Calculate My Directional Value</button>
              </div>

              {result && (
                <div className="rounded-xl border border-[#0d9488]/30 bg-[#f5efe0] p-6 dark:bg-gray-800">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className={eyebrowTeal}>Directional Annual Value</p>
                    <span className={`rounded-full px-3 py-1 text-xs font-bold ${result.confTone}`}>Confidence: {result.confidence}</span>
                  </div>
                  <div className="mt-4 grid gap-4 sm:grid-cols-3">
                    {[
                      { k: "Conservative", v: result.conservative, tone: "text-slate-600 dark:text-gray-300" },
                      { k: "Expected", v: result.expected, tone: "text-[#0d9488]" },
                      { k: "Upside", v: result.upside, tone: "text-[#16233d] dark:text-white" },
                    ].map((r) => (
                      <div key={r.k} className="rounded-lg border border-black/10 bg-white p-4 text-center dark:border-gray-700 dark:bg-gray-900">
                        <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">{r.k}</p>
                        <p className={`mt-1 text-2xl font-extrabold ${r.tone}`}>{money(r.v)}</p>
                        <p className="text-[11px] text-slate-400">per year</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-xs leading-relaxed text-slate-500 dark:text-gray-400">
                    Based on ~{Math.round(result.annualHours).toLocaleString("en-US")} measured workflow hours/year at {money(cost)}/hr,
                    adjusted for adoption maturity. Directional estimate only — not a guarantee or contractual commitment.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className={`px-4 py-16 sm:px-6 md:px-8 ${creamBand}`}>
        <div className="mx-auto max-w-5xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Methodology</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>How this estimate is actually built.</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {METHODOLOGY.map((m) => (
              <div key={m.title} className="rounded-xl border border-black/10 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <h3 className="text-base font-bold">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-gray-300">{m.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-md border-l-4 border-[#e8912a] bg-[#efe6d2] px-4 py-3 text-xs leading-relaxed text-[#7a5a12] dark:bg-amber-950/40 dark:text-amber-200/90">
            Implementation caveat: value depends on deployment quality, training, user adoption, source configuration, and review controls — this calculator models a directional estimate, not a contractual commitment.
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-5xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Frequently Asked</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>ROI Calculator questions, answered plainly.</h2>
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