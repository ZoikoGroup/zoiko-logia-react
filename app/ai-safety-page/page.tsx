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
const PILLARS = [
  { title: "Risk Classification", body: "Real-time mapping of queries against professional risk domains to determine required guardrails." },
  { title: "Source Sufficiency", body: "Automated validation that provided source material meets the threshold for professional assertion." },
  { title: "Boundary Behavior", body: "Ensuring AI remains within advisory limits, never assuming signatory or final approval authority." },
  { title: "Limitation Handling", body: "Explicit refusal protocols for queries outside of the system's verified knowledge base or data access." },
  { title: "Human Routing", body: "Mandatory escalation to human practitioners when uncertainty or high-risk thresholds are met." },
  { title: "Monitoring", body: "Immutable logging of all AI reasoning paths for post-audit review and transparency compliance." },
  { title: "Release-Controlled Changes", body: "Safety model updates are deployed via versioned, audit-ready cycles with full regression testing for professional accuracy." },
];

const LIFECYCLE = [
  { n: "01", title: "Request Intake", body: "AI identifies context, intent, and jurisdiction of the professional inquiry." },
  { n: "02", title: "Source and Scope Check", body: "Verifies if the required documents (GL, trial balances, tax forms) are present and readable." },
  { n: "03", title: "Risk Classification", body: "Determines if the topic is Standard, High-Complexity, or Restricted based on professional standards." },
  { n: "04", title: "Response Behavior Selection", body: "Chooses between direct assistance, limited analysis, or proactive refusal based on risk score." },
  { n: "05", title: "Human Review or Escalation", body: "High-risk outputs are flagged for human oversight before being presented to the end user." },
  { n: "06", title: "Evidence Event Capture", body: "Complete audit trail of the reasoning steps is recorded for institutional compliance." },
];

const ACCURACY = [
  "Zero-hallucination policy for core GL data.",
  "Multi-model verification for high-risk tax positions.",
  "Automated AICPA/SOC2 compliance monitoring.",
];

type StateRow = { state: string; tone: keyof typeof STATE_TONES; meaning: string; behavior: string };
const STATE_TONES = {
  Supported: "bg-green-100 text-green-700",
  Limited: "bg-amber-100 text-amber-700",
  Conflicted: "bg-orange-100 text-orange-700",
  Uncertain: "bg-slate-200 text-slate-700",
  Restricted: "bg-red-100 text-red-700",
} as const;

const STATES: StateRow[] = [
  { state: "Supported", tone: "Supported", meaning: "Data is sufficient and risk is low. AI provides full analysis.", behavior: "Kriton generates a comprehensive report with linked citations." },
  { state: "Limited", tone: "Limited", meaning: "Sources are partially available. Insights are strictly qualified.", behavior: "AI provides partial analysis with explicit warnings about missing data." },
  { state: "Conflicted", tone: "Conflicted", meaning: "External regulations conflict with provided user data.", behavior: "AI flags discrepancies and requests professional clarification." },
  { state: "Uncertain", tone: "Uncertain", meaning: "The intent or jurisdiction cannot be confidently mapped.", behavior: "AI prompts for more context before attempting any computation." },
  { state: "Restricted", tone: "Restricted", meaning: "Query falls outside professional or regulatory safety bounds.", behavior: "AI refuses the request with a detailed explanation of compliance limits." },
];

const SCENARIOS = [
  { title: "Client-facing Explanation", body: "User asks for a draft email explaining complex tax changes to a client.", behavior: "Generates draft with placeholder brackets for professional review and regulatory disclaimers included." },
  { title: "Tax Position Uncertainty", body: "User requests a stance on a grey-area deduction without specific case law data.", behavior: "AI refuses to take a position, instead providing links to relevant IRC sections for human analysis." },
  { title: "Bulk Ledger Anomaly", body: "AI detects potential fraudulent patterns across 10,000 transactions.", behavior: "Immediately escalates to the Audit Partner role and creates a high-priority Evidence Event." },
  { title: "Data Source Conflict", body: "Bank statements contradict internal accounts payable records.", behavior: "AI halts the reconciliation process and highlights the specific transaction data for manual review." },
  { title: "Jurisdictional Ambiguity", body: "Multi-state nexus question without clear physical presence data.", behavior: "AI requests applicable nexus rules before providing state-specific guidance." },
  { title: "Signatory Authority Request", body: "User asks AI to \u201celectronically sign\u201d a tax filing on behalf of the firm.", behavior: "Hard refusal. AI explains that signatory actions require verified human biometric authentication." },
];

const STAKEHOLDERS = [
  { role: "Accounting Firms", body: "Protect brand reputation with AI that knows its professional limits." },
  { role: "CPAs", body: "Drive efficiency without introducing unmanaged systematic risk." },
  { role: "Tax Teams", body: "Accelerate research with direct citations and qualified guidance." },
  { role: "Audit Teams", body: "Enhance sampling and anomaly detection with high-fidelity routing." },
  { role: "General Counsel", body: "Mitigate liability through automated refusal of unauthorized practice." },
  { role: "IT / Security", body: "Seamless SOC2/GDPR compliance with immutable reasoning logs." },
  { role: "Clients", body: "Higher quality advice grounded in deeper, safer data analysis." },
  { role: "Partners", body: "Scale firm operations while maintaining rigorous oversight standards." },
];

const GOVERNANCE = [
  { title: "Reliance Governance", body: "Our framework is specifically engineered to prevent over-reliance on AI outputs through active prompting.", link: "View Trust Center" },
  { title: "Procurement Support", body: "Dedicated documentation to help internal legal and risk teams evaluate ZoikoLogia's AI safety profile.", link: "Download Guide" },
  { title: "Restricted Behavior", body: "We provide full transparency on what Kriton™ is programmed NOT to do, ensuring no regulatory gray areas.", link: "Policy Details" },
];

const FAQS = [
  { q: "How does the AI handle conflicting tax laws?", a: "When external regulations conflict with provided data, the system enters a Conflicted state — it flags the discrepancy and requests professional clarification rather than resolving it silently." },
  { q: "Is our firm's data used to train the global model?", a: "Data use is governed by contract and configuration. Customer data is not used to train a shared global model unless explicitly agreed; we do not make unconfirmed claims either way." },
  { q: "Can we customize the AI safety thresholds?", a: "Yes. Risk thresholds, restricted behaviors, and escalation routing are configurable to your firm's professional standards and risk appetite." },
  { q: "What happens if the AI makes an error?", a: "Every reasoning step is captured as an immutable Evidence Event, so errors are traceable and reviewable. High-risk outputs are routed for human oversight before they reach the end user." },
  { q: "How are safety model updates managed?", a: "Safety model updates ship through versioned, audit-ready release cycles with full regression testing before deployment." },
];

// ─── inline SVG helpers ─────────────────────────────────────────────────────────
function Chevron({ open }: { open: boolean }) {
  return <svg viewBox="0 0 24 24" className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function Check({ className = "h-4 w-4" }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function Shield({ className = "h-5 w-5" }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

const eyebrowAmber = "flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#d9720f]";
const eyebrowTeal = "text-[11px] font-bold uppercase tracking-[0.16em] text-[#0d9488] dark:text-[#34d39e]";
const serifH = "font-serif leading-tight";

// ─── PAGE ───────────────────────────────────────────────────────────────────────
export default function Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const amberBtn = "rounded-md px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90";
  const ghostBtn = "rounded-md border border-black/15 px-5 py-2.5 text-sm font-semibold text-[#16233d] transition-colors hover:border-[#0d9488] hover:text-[#0d9488] dark:border-gray-600 dark:text-gray-100";
  const tealLink = "mt-4 inline-block text-sm font-semibold text-[#0d9488] hover:underline";

  return (
    <main className="bg-[#faf7f0] font-sans text-[#16233d] dark:bg-gray-900 dark:text-white">

      {/* ─── Hero ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8 lg:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> AI Safety for Professional Accounting Intelligence</p>
            <h1 className={`mt-5 max-w-xl text-[clamp(2rem,4.5vw,2.9rem)] ${serifH}`}>Risk-Aware AI Accounting Support Built for Human Judgment</h1>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">
              ZoikoLogia™ recognizes systemic risks and source sufficiency before providing insights. Our governance
              layer ensures every AI output is grounded in professional boundaries and verifiable evidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#" className={amberBtn} style={{ backgroundColor: AMBER }}>Book a Demo</a>
              <a href="#" className={ghostBtn}>Request Pilot</a>
            </div>
          </div>
          <ImageSlot src="/images/stitch-placeholder-300x300.png" alt="Accountant reviewing work with governed AI support" ratio="aspect-[4/3]" />
        </div>
      </section>

      {/* ─── Seven pillars ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className={`text-center text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>The Seven Pillars of AI Safety</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-slate-500 dark:text-gray-400">
            Our institutional framework governs how Kriton™ AI interacts with professional data environments.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p) => (
              <div key={p.title} className="rounded-xl border border-black/10 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-md" style={{ backgroundColor: "#efe6d2" }}>
                  <span className="text-[#d9720f]"><Shield className="h-5 w-5" /></span>
                </div>
                <h3 className="text-base font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-gray-300">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Routing lifecycle + accuracy panel ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_380px]">
          <div>
            <h2 className={`text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>The Safety Routing Lifecycle</h2>
            <p className="mt-3 max-w-lg text-sm text-slate-500 dark:text-gray-400">
              How ZoikoLogia™ processes every professional inquiry to ensure compliance and accuracy.
            </p>
            <ol className="mt-8 space-y-6">
              {LIFECYCLE.map((s) => (
                <li key={s.n} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-xs font-bold text-white" style={{ backgroundColor: INK }}>{s.n}</span>
                  <div>
                    <h3 className="text-[15px] font-bold">{s.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-gray-300">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="h-fit rounded-2xl p-8 text-white" style={{ backgroundColor: NAVY }}>
            <h3 className={`text-2xl ${serifH}`}>Built for Accuracy.</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300/80">
              Every step in our routing flow is designed to prioritize the integrity of financial data over the speed of response.
            </p>
            <ul className="mt-6 space-y-3">
              {ACCURACY.map((a) => (
                <li key={a} className="flex gap-3 text-sm text-slate-200">
                  <span className="mt-0.5 text-[#0d9488]"><Check className="h-4 w-4" /></span>{a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── Universal safety states (table) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className={`text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Universal Safety States</h2>
          <div className="mt-8 overflow-x-auto rounded-xl border border-black/10 dark:border-gray-700">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead style={{ backgroundColor: INK }}>
                <tr className="text-[11px] uppercase tracking-wide text-white/80">
                  <th className="px-5 py-3 font-semibold">Safety State</th>
                  <th className="px-5 py-3 font-semibold">User-Facing Meaning</th>
                  <th className="px-5 py-3 font-semibold">Expected Behavior</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/10 dark:divide-gray-700">
                {STATES.map((r) => (
                  <tr key={r.state} className="bg-white dark:bg-gray-900">
                    <td className="px-5 py-4"><span className={`rounded px-2 py-0.5 text-xs font-bold ${STATE_TONES[r.tone]}`}>{r.state}</span></td>
                    <td className="px-5 py-4 text-slate-600 dark:text-gray-300">{r.meaning}</td>
                    <td className="px-5 py-4 text-slate-500 dark:text-gray-400">{r.behavior}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── Operational scenarios ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className={`text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Operational Scenarios</h2>
          <p className="mt-3 text-sm text-slate-500 dark:text-gray-400">Real-world examples of safe product behavior in action.</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SCENARIOS.map((s) => (
              <div key={s.title} className="rounded-xl border border-black/10 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <h3 className="text-base font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-gray-300">{s.body}</p>
                <div className="mt-4 border-l-2 pl-3" style={{ borderColor: AMBER }}>
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#d9720f]">Safe Behavior</p>
                  <p className="mt-1 text-[13px] leading-relaxed text-slate-600 dark:text-gray-300">{s.behavior}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Value across the organization (navy) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl rounded-2xl px-8 py-12" style={{ backgroundColor: NAVY }}>
          <h2 className={`text-2xl text-white ${serifH}`}>Value Across the Organization</h2>
          <p className="mt-2 text-sm text-slate-300/70">How different stakeholders leverage our risk-aware intelligence.</p>
          <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {STAKEHOLDERS.map((s) => (
              <div key={s.role}>
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#f0a54a]">{s.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-300/75">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Governance cards ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {GOVERNANCE.map((g) => (
            <div key={g.title} className="flex flex-col rounded-xl border border-black/10 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-md" style={{ backgroundColor: "#efe6d2" }}>
                <span className="text-[#d9720f]"><Shield className="h-5 w-5" /></span>
              </div>
              <h3 className={`text-lg ${serifH}`}>{g.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-gray-300">{g.body}</p>
              <a href="#" className={tealLink}>{g.link} →</a>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className={`text-center text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Safety &amp; Governance FAQ</h2>
          <div className="mt-8 space-y-3">
            {FAQS.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q} className="overflow-hidden rounded-lg border border-black/10 bg-white dark:border-gray-700 dark:bg-gray-900">
                  <button type="button" onClick={() => setOpenFaq(open ? null : i)} aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-[15px] font-semibold">
                    {f.q}<Chevron open={open} />
                  </button>
                  {open && <p className="px-5 pb-5 text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">{f.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="px-4 pb-20 sm:px-6 md:px-8">
        <div className="mx-auto max-w-4xl rounded-2xl bg-[#efe6d2] px-8 py-14 text-center dark:bg-gray-800">
          <h2 className={`text-[clamp(1.6rem,3vw,2.2rem)] ${serifH}`}>Evaluate Risk-Aware AI Accounting Intelligence</h2>
          <p className="mx-auto mt-3 max-w-lg text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">
            Join leading institutional firms in deploying AI that respects professional boundaries and prioritizes data integrity.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#" className={amberBtn} style={{ backgroundColor: INK }}>Book an Executive Demo</a>
            <a href="#" className={`${ghostBtn} bg-white/60`}>Download Safety Whitepaper</a>
          </div>
        </div>
      </section>
    </main>
  );
}