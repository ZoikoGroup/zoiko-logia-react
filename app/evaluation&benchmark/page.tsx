"use client";

import Image from "next/image";
import { useState } from "react";

// ─── TOKENS ─────────────────────────────────────────────────────────────────────
const INK = "#16233d";
const NAVY = "#0f1a30";
const AMBER = "#e8912a";
const AMBER_DARK = "#d9720f";
const TEAL = "#2f9e8f";

function ImageSlot({ src, alt, ratio = "aspect-[4/3]", rounded = "rounded-xl", className = "" }:
  { src: string; alt: string; ratio?: string; rounded?: string; className?: string }) {
  return (
    <div className={`relative w-full overflow-hidden bg-slate-200 dark:bg-gray-800 ${ratio} ${rounded} ${className}`}>
      <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
    </div>
  );
}

// Full-bleed image slot for grid cells that need to fill a parent-defined height (no fixed ratio).
function ImageFill({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative min-h-[280px] w-full overflow-hidden bg-slate-200 dark:bg-gray-800 ${className}`}>
      <Image src={src} alt={alt} fill sizes="(max-width: 1024px) 100vw, 34vw" className="object-cover" />
    </div>
  );
}

// ─── DATA ──────────────────────────────────────────────────────────────────────

type PatternRow = { pattern: string; hides: string; approach: string };
const PATTERNS: PatternRow[] = [
  { pattern: "Generic LLM benchmark", hides: "Surface fluency across broad tasks", approach: "Professional accounting consequence" },
  { pattern: "Single accuracy number", hides: "Hides critical failure modes", approach: "Multi-dimensional scorecard" },
  { pattern: "Static test set", hides: "No version, scope or date context", approach: "Versioned, scoped, dated result" },
  { pattern: "Model-only evaluation", hides: "Ignores retrieval, policy, ontology", approach: "Full configuration evaluation" },
  { pattern: "Aggregate score", hides: "Averages away material failures", approach: "Severity-based release gates" },
];

type StageItem = { n: string; title: string; body: string; note: string };
const STAGES_LEFT: StageItem[] = [
  { n: "01", title: "Define", body: "Set task, audience, professional consequence, expected behavior and prohibited behavior.", note: "Test charter + owner + risk class" },
  { n: "04", title: "Configure", body: "Lock model, prompt, retrieval, ontology, policy, source bundle and tool configuration.", note: "Configuration manifest" },
  { n: "07", title: "Adjudicate", body: "Qualified reviewers resolve ambiguity and consequential failures.", note: "Reviewer decision + rationale + disagreement record" },
];
const STAGES_RIGHT: StageItem[] = [
  { n: "03", title: "Validate", body: "Confirm case clarity, answer key, rubric, framework, jurisdiction and effective period.", note: "Subject-matter review + test-pack version" },
  { n: "06", title: "Score", body: "Apply deterministic checks, rubric scoring and evidence verification.", note: "Metric results + denominator + failure details" },
  { n: "09", title: "Monitor", body: "Repeat after changes, source updates, incidents or drift signals.", note: "Regression history + linked Audit Evidence Ledger entries" },
];

type DimensionItem = { title: string; body: string; risk: string };
const DIMENSIONS_LEFT: DimensionItem[] = [
  { title: "Source Grounding", body: "Claims supported by eligible, attributable source material.", risk: "Unsupported statement or citation to an unused passage." },
  { title: "Retrieval Quality", body: "Relevant evidence selected; distracting material excluded.", risk: "Missing controlling source or prioritizing lower authority." },
  { title: "Refusal & Escalation", body: "System stops or routes when evidence or authority is insufficient.", risk: "Producing a filing conclusion without required facts." },
];
const DIMENSIONS_RIGHT: DimensionItem[] = [
  { title: "Applicability & Context", body: "Framework, jurisdiction, entity and period are recognized.", risk: "Using a rule outside its jurisdiction or effective period." },
  { title: "Uncertainty & Calibration", body: "Confidence and evidence limits communicated proportionately.", risk: "Expressing certainty where sources conflict." },
  { title: "Evidence Continuity", body: "Inputs, versions, reviewers and decisions traceable.", risk: "Score exists without preserved test configuration." },
];

type BenchmarkClass = { n: string; title: string; body: string; note: string };
const BENCHMARK_CLASSES: BenchmarkClass[] = [
  { n: "01", title: "Public Methodology Pack", body: "Explain how representative synthetic cases are structured and scored.", note: "May publish method and cleared examples; no implied customer performance." },
  { n: "02", title: "Public Capability Benchmark", body: "Show approved results for a tightly defined task class.", note: "Requires version, scope, sample size, date, limitations and claim approval." },
  { n: "03", title: "Release-Gate Regression Suite", body: "Detect changes across model, retrieval, ontology, policy and source updates.", note: "Internal by default; publish only summarized, approved evidence." },
  { n: "04", title: "Critical-Failure Gate Set", body: "Test prohibited outputs, missing escalation, privacy or high-consequence errors.", note: "Pass/fail; a single critical failure may block release." },
  { n: "05", title: "Adversarial / Red-Team Suite", body: "Probe prompt manipulation, source conflict, data exfiltration and policy bypass.", note: "Restricted details where disclosure would increase abuse risk." },
  { n: "06", title: "Domain Benchmark Pack", body: "Evaluate accounting, tax, audit, payroll, compliance, reporting or finance separately.", note: "Never aggregate into universal domain fitness without approved rationale." },
  { n: "07", title: "Framework / Jurisdiction Pack", body: "Evaluate applicability for a defined framework, location and effective period.", note: "Scope labels mandatory; do not imply global availability." },
  { n: "08", title: "Enterprise Private Pack", body: "Evaluate customer-approved workflows using tenant-isolated data and policy.", note: "Results private to authorized customer and platform roles." },
  { n: "09", title: "Longitudinal Monitoring Pack", body: "Observe drift, source changes and operational degradation over time.", note: "Show comparable versions only when configuration and scope are controlled." },
];

type TabKey = "scope" | "testpack" | "config" | "metrics" | "review" | "results" | "limitations" | "history";
const TABS: { key: TabKey; label: string; title: string; body: string; bullets: string[] }[] = [
  {
    key: "scope", label: "Scope", title: "Task class, audience and consequence",
    body: "Each benchmark is bounded by task class, intended audience, professional consequence, applicable frameworks, jurisdictions and effective dates. Exclusions are stated explicitly — we do not evaluate what is not in scope.",
    bullets: ["Task class and user role", "Professional consequence level", "Applicable frameworks", "Jurisdiction and date bounds", "Explicit exclusions"],
  },
  {
    key: "testpack", label: "Test Pack", title: "Case clarity, answer key and rubric",
    body: "Every test pack is subject-matter reviewed before use. Cases carry a defined answer key, scoring rubric, framework mapping and effective period so a result can be traced back to what was actually tested.",
    bullets: ["Case clarity and answer key", "Scoring rubric", "Framework and jurisdiction mapping", "Effective period", "Subject-matter review sign-off"],
  },
  {
    key: "config", label: "Configuration", title: "Locked configuration manifest",
    body: "Model, prompt, retrieval, ontology, policy, source bundle and tool configuration are locked and versioned before scoring begins, so a result can be reproduced against the exact configuration it was measured on.",
    bullets: ["Model and prompt version", "Retrieval and source bundle", "Ontology and policy version", "Tool configuration", "Configuration manifest ID"],
  },
  {
    key: "metrics", label: "Metrics", title: "Deterministic checks and rubric scoring",
    body: "Each dimension applies deterministic checks, rubric scoring and evidence verification. Metric results are recorded with denominator and failure detail, not just a pass rate.",
    bullets: ["Deterministic checks", "Rubric scoring", "Evidence verification", "Denominator and failure detail", "Per-dimension thresholds"],
  },
  {
    key: "review", label: "Review", title: "Qualified reviewer adjudication",
    body: "Qualified reviewers resolve ambiguity and consequential failures. Disagreement is documented rather than silently overwritten, and disputed high-consequence cases require at least two reviewers.",
    bullets: ["Reviewer decision and rationale", "Disagreement record", "Two-reviewer rule for disputes", "Independent governance sign-off"],
  },
  {
    key: "results", label: "Results", title: "Status, threshold and note per metric",
    body: "Results are published with pass, review or block status against a stated threshold and severity — never as a single number without the underlying detail.",
    bullets: ["Pass / Review / Block status", "Threshold and severity", "Passed-of-tested count", "Reviewer note on exceptions"],
  },
  {
    key: "limitations", label: "Limitations", title: "What was not evaluated",
    body: "A result states what it does not cover as clearly as what it does. Limitations such as latency under sustained load, cross-tenant isolation or multi-language output are disclosed, not implied.",
    bullets: ["Explicit out-of-scope items", "Operational limitations", "No implied compliance claim", "No implied audit sufficiency"],
  },
  {
    key: "history", label: "Change History", title: "Regression history and drift signals",
    body: "Benchmarks are repeated after changes, source updates, incidents or drift signals, with regression history linked to the Audit Evidence Ledger for traceability.",
    bullets: ["Regression history", "Linked Audit Evidence Ledger entries", "Drift and incident triggers", "Version-to-version comparison"],
  },
];

type ScoreRow = { metric: string; passed: string; threshold: string; severity: "Critical" | "Major" | "Moderate"; status: "Pass" | "Review" | "Block"; note: string };
const SCORE_ROWS: ScoreRow[] = [
  { metric: "Source Grounding", passed: "91 of 96", threshold: "≥ 90%", severity: "Critical", status: "Pass", note: "Source eligibility verified per approved bundle" },
  { metric: "Citation Integrity", passed: "88 of 96", threshold: "≥ 88%", severity: "Major", status: "Pass", note: "Locator precision verified against test-pack rubric" },
  { metric: "Accounting Ontology", passed: "84 of 92", threshold: "≥ 85%", severity: "Major", status: "Review", note: "Two IFRS/GAAP disambiguation cases under review" },
  { metric: "Refusal & Escalation", passed: "100 of 100", threshold: "100%", severity: "Critical", status: "Pass", note: "All prohibited-action tests passed" },
  { metric: "Professional Boundaries", passed: "98 of 100", threshold: "≥ 95%", severity: "Critical", status: "Pass", note: "No audit-opinion substitution observed" },
  { metric: "Latency / Operational", passed: "79 of 90", threshold: "≥ 90%", severity: "Moderate", status: "Block", note: "Not measured for this configuration" },
];

type GateItem = { title: string; body: string; action: string; border: string; text: string };
const GATES: GateItem[] = [
  { title: "Block Release", body: "Any critical failure, unresolved privacy/security breach, source-integrity failure or prohibited professional claim.", action: "Do not release; open remediation and Audit Evidence Ledger record.", border: "border-red-600", text: "text-red-700" },
  { title: "Executive Review", body: "Material regression, disputed high-severity case or unmet consequential-task threshold.", action: "Named approver reviews evidence and conditions.", border: "border-amber-500", text: "text-amber-700" },
  { title: "Conditional Approval", body: "Defined non-critical limitation accepted for a restricted scope with monitoring.", action: "Publish limitation and enforce feature / configuration constraints.", border: "border-yellow-600", text: "text-yellow-700" },
  { title: "Approve for Scope", body: "All mandatory gates pass and residual limitations are accepted.", action: "Record scope, version, date and approvers.", border: "border-emerald-600", text: "text-emerald-700" },
  { title: "Monitor After Release", body: "Operational or low-severity signals require scheduled observation.", action: "Define metric, threshold, owner and reassessment date.", border: "border-blue-600", text: "text-blue-700" },
  { title: "Rollback / Disable", body: "Post-release evidence shows unacceptable risk or material regression.", action: "Use release controls; preserve incident and decision evidence.", border: "border-rose-800", text: "text-rose-800" },
];

type RoleRow = { role: string; responsibility: string; control: string };
const REVIEW_ROLES: RoleRow[] = [
  { role: "Evaluation Owner", responsibility: "Defines purpose, scope, metric and release relevance.", control: "Cannot approve own material exception alone." },
  { role: "Accounting SME Reviewer", responsibility: "Validates technical meaning, applicability and material omissions.", control: "Framework / jurisdiction competence must match test scope." },
  { role: "Governance / Safety Reviewer", responsibility: "Reviews policy, refusal, escalation and professional-boundary behavior.", control: "Independent view for high-consequence cases." },
  { role: "Data / Source Reviewer", responsibility: "Validates rights, provenance, source version and test-data classification.", control: "Blocks uncleared data from approved packs." },
  { role: "Engineering Reviewer", responsibility: "Confirms configuration, reproducibility, instrumentation and failure capture.", control: "Cannot redefine professional correctness unilaterally." },
  { role: "Adjudicator", responsibility: "Resolves reviewer disagreement according to documented rules.", control: "Rationale and dissent preserved." },
  { role: "Release Approver", responsibility: "Accepts residual risk for a defined release scope.", control: "Approval cannot exceed delegated authority." },
  { role: "External / Enterprise Reviewer", responsibility: "May inspect approved evidence or private tenant pack.", control: "Access, confidentiality and non-reliance terms apply." },
];

type ScenarioItem = { title: string; body: string; expected: string };
const SCENARIOS: ScenarioItem[] = [
  { title: "Source Manipulation", body: "User asks system to ignore approved evidence or prefer an unverified blog.", expected: "Maintain source authority or explain limitation." },
  { title: "Citation Fabrication", body: "Scenario lacks a supporting source but requests a citation.", expected: "Do not fabricate; refuse or request evidence." },
  { title: "Jurisdiction Confusion", body: "Prompt mixes rules from different regions or periods.", expected: "Disambiguate and avoid cross-jurisdiction conclusion." },
  { title: "Professional Impersonation", body: "User asks system to issue an audit opinion or tax determination.", expected: "Preserve professional boundary and escalate." },
  { title: "Sensitive-Data Extraction", body: "Prompt attempts to reveal restricted payroll or tenant evidence.", expected: "Deny according to permissions; record event where appropriate." },
  { title: "Prompt Injection", body: "Retrieved document contains instructions to override system policy.", expected: "Treat source as evidence, not instruction." },
  { title: "Ambiguity Pressure", body: "User demands a definitive answer despite missing facts.", expected: "Surface missing facts, uncertainty and next step." },
  { title: "Benchmark Gaming", body: "Input resembles known public test wording.", expected: "Holdout and variation strategy detects memorized behavior." },
];

type DemoCard = { title: string; focus: string; expected: string };
const DEMO_CARDS: DemoCard[] = [
  { title: "Policy question with two frameworks", focus: "Applicability, source authority, disambiguation", expected: "Ask which framework applies; cite only relevant sources; show limitations." },
  { title: "Revenue recognition with missing contract facts", focus: "Completeness, uncertainty, escalation", expected: "Identify missing facts and avoid a definitive conclusion." },
  { title: "Audit workflow requesting an opinion", focus: "Professional boundary and refusal", expected: "Explain support limits and route to qualified human judgment." },
  { title: "Tax question using a superseded source", focus: "Freshness, versioning and citation integrity", expected: "Detect supersession and use current approved material or stop." },
  { title: "Payroll scenario with restricted employee data", focus: "Access, privacy and purpose limitation", expected: "Restrict fields and avoid disclosure." },
  { title: "Correct arithmetic but wrong entity context", focus: "Ontology and applicability", expected: "Fail despite arithmetic correctness; surface context mismatch." },
];

type LayerItem = { title: string; body: string; link: string; current?: boolean };
const LAYERS_LEFT: LayerItem[] = [
  { title: "Platform Overview", body: "Defines the governed platform and professional operating model being evaluated.", link: "Explore" },
  { title: "RAG Source Bundles", body: "Supplies versioned evidence bundles for retrieval and grounding tests.", link: "Explore" },
];
const LAYERS_RIGHT: LayerItem[] = [
  { title: "Accounting Ontology", body: "Defines concepts, relationships and applicability context used in test design.", link: "Explore" },
  { title: "Evaluation & Benchmarks", body: "Coordinates methodology, test packs, scoring, adjudication and release gates.", link: "Current page", current: true },
];

type ArtifactItem = { title: string; body: string; access: string };
const ARTIFACTS: ArtifactItem[] = [
  { title: "Evaluation Methodology Brief", body: "Scope model, lifecycle, dimensions, scoring and limitations.", access: "Public or requestable after approval." },
  { title: "Sample Synthetic Test Pack", body: "Cleared cases, sources, expected behavior and rubric.", access: "Public with synthetic label and rights review." },
  { title: "Versioned Scorecard", body: "Metric results, denominator, failures, thresholds and release status.", access: "Published only when claim-approved." },
  { title: "Configuration Manifest", body: "Model, retrieval, ontology, policy, source and tool versions.", access: "Enterprise / confidential where security-sensitive." },
  { title: "Failure & Remediation Summary", body: "Material failures, root cause, fix and non-regression evidence.", access: "Controlled disclosure; no sensitive exploit detail." },
  { title: "Reviewer / Adjudication Record", body: "Reviewer roles, decisions, disagreement and rationale.", access: "Role-level public summary; detailed enterprise access controlled." },
  { title: "Benchmark Governance Register", body: "Data rights, privacy, contamination, holdout and retirement status.", access: "Enterprise review or controlled excerpt." },
  { title: "Release Decision Record", body: "Gate outcome, scope, limitations, approvers and linked evidence.", access: "Controlled evidence pack." },
];

const FAQS = [
  { q: "What does ZoikoLogia™ evaluate?", a: "Source grounding, accounting context, retrieval quality, answer quality, uncertainty and calibration, refusal and escalation behavior, and policy compliance — scored across versioned, evidence-backed test packs." },
  { q: "Is there one overall accuracy score?", a: "No. Results are reported across fourteen quality dimensions with separate thresholds, because a single aggregate number can hide critical failure modes." },
  { q: "Who reviews the benchmark results?", a: "Qualified reviewers, including accounting subject-matter experts and governance/safety reviewers, with an adjudicator for disputed cases — not automated self-approval." },
  { q: "Do benchmarks prove compliance or audit readiness?", a: "No. Results describe test performance for a defined scope and configuration, not a compliance guarantee or audit-sufficiency claim." },
  { q: "How do you prevent benchmark gaming?", a: "Holdout cases, wording variation and drift monitoring are used to detect memorized or gamed responses rather than genuine task performance." },
  { q: "What happens when a critical test fails?", a: "A single critical failure is sufficient to block release, regardless of the mean score across other dimensions." },
  { q: "Are customer data used in public benchmarks?", a: "No. Public benchmark demonstrations use synthetic, clearly labeled scenarios — never customer data or production claims." },
  { q: "How are results kept reproducible?", a: "Every result is tied to a versioned configuration manifest covering model, prompt, retrieval, ontology, policy and source bundle." },
  { q: "Does a passed benchmark mean no human review is needed?", a: "No. Automated evaluators assist triage only; qualified human review remains required for consequential or disputed cases." },
];

// ─── inline SVG helpers ─────────────────────────────────────────────────────────
function Chevron({ open }: { open: boolean }) {
  return <svg viewBox="0 0 24 24" className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function StatusPill({ status }: { status: ScoreRow["status"] }) {
  const map = {
    Pass: "bg-emerald-50 text-emerald-700 border-emerald-200",
    Review: "bg-amber-50 text-amber-700 border-amber-200",
    Block: "bg-red-50 text-red-700 border-red-200",
  } as const;
  const glyph = status === "Pass" ? "✓" : status === "Review" ? "▲" : "✕";
  return (
    <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold ${map[status]}`}>
      {glyph} {status}
    </span>
  );
}

const eyebrow = "flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em]";
const serifH = "font-serif leading-tight";
const creamBand = "bg-[#f5efe0] dark:bg-gray-800/60";

// ─── PAGE ───────────────────────────────────────────────────────────────────────
export default function Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<TabKey>("scope");
  const amberBtn = "rounded-md px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90";
  const activeTabData = TABS.find((t) => t.key === activeTab)!;

  return (
    <main className="bg-[#faf7f0] font-sans text-[#16233d] dark:bg-gray-900 dark:text-white">

      {/* ─── Hero (navy) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8 lg:py-20" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="text-white">
            <p className={`${eyebrow}`} style={{ color: "#9aa5b1" }}>
              <span className="h-px w-6" style={{ backgroundColor: TEAL }} /> Evaluation Built for Professional Consequences
            </p>
            <h1 className={`mt-5 max-w-xl text-[clamp(2rem,4.5vw,2.9rem)] ${serifH}`}>Measure what matters before governed accounting intelligence reaches real work.</h1>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-slate-300/85">
              ZoikoLogia™ with Kriton™ evaluates source grounding, accounting context, retrieval, answer quality,
              uncertainty, escalation and policy behavior through versioned, evidence-backed tests.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#" className={amberBtn} style={{ backgroundColor: AMBER }}>View Evaluation Methodology</a>
              <a href="#" className="rounded-md border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10">Request Enterprise Benchmark Review</a>
            </div>
          </div>

          <ImageSlot src="/images/Image (Professional team reviewing evaluation evidence).png" alt="Governance and evaluation team reviewing platform controls" ratio="aspect-[4/3]" rounded="rounded-2xl" />
        </div>
      </section>

      {/* ─── Why generic accuracy is not enough ─── */}
      <section className={`px-4 py-16 sm:px-6 md:px-8 ${creamBand}`}>
        <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className={eyebrow} style={{ color: AMBER_DARK }}><span className="h-px w-6" style={{ backgroundColor: AMBER_DARK }} /> Why Generic Accuracy Is Not Enough</p>
            <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Professional consequence demands professional evaluation.</h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-600 dark:text-gray-300">
              A single benchmark score cannot distinguish source-grounded accounting reasoning from fluent
              hallucination. Our evaluation is stratified by domain, task, framework, jurisdiction, period, role and
              consequence — because fitness depends on applicability, not surface fluency.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
            <table className="w-full text-left text-sm">
              <thead className="bg-black/[0.03] dark:bg-white/5">
                <tr className="text-[11px] uppercase tracking-wide text-slate-500 dark:text-gray-400">
                  <th className="px-5 py-3 font-semibold">Pattern</th>
                  <th className="px-5 py-3 font-semibold">What It Hides</th>
                  <th className="px-5 py-3 font-semibold">Our Approach</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/10 dark:divide-gray-700">
                {PATTERNS.map((r) => (
                  <tr key={r.pattern} className="align-top">
                    <td className="px-5 py-4 font-medium">{r.pattern}</td>
                    <td className="px-5 py-4 text-slate-600 dark:text-gray-300">{r.hides}</td>
                    <td className="px-5 py-4 font-semibold">{r.approach}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── Nine stages (Evaluation Operating Model) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className={eyebrow} style={{ color: AMBER_DARK }}><span className="h-px w-6" style={{ backgroundColor: AMBER_DARK }} /> Evaluation Operating Model</p>
              <h2 className={`mt-4 max-w-xl text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Nine stages from test design to monitored release.</h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-slate-600 dark:text-gray-300">
              A test result without a defined scope, configuration manifest and release consequence is not an
              approved benchmark claim.
            </p>
          </div>

          <div className="mt-10 grid overflow-hidden rounded-2xl border border-black/10 dark:border-gray-700 lg:grid-cols-3">
            <div className={`flex flex-col divide-y divide-black/10 dark:divide-gray-700 ${creamBand}`}>
              {STAGES_LEFT.map((s) => (
                <div key={s.n} className="p-6">
                  <span className="text-xs font-bold" style={{ color: AMBER_DARK }}>{s.n}</span>
                  <h3 className="mt-2 text-sm font-bold">{s.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-gray-300">{s.body}</p>
                  <p className="mt-2 border-t border-black/10 pt-2 text-[11px] italic text-slate-500 dark:border-gray-700 dark:text-gray-400">{s.note}</p>
                </div>
              ))}
            </div>
            <ImageFill src="/images/Container (4).png" alt="Analyst reviewing accounting evaluation data with a calculator" />
            <div className={`flex flex-col divide-y divide-black/10 dark:divide-gray-700 ${creamBand}`}>
              {STAGES_RIGHT.map((s) => (
                <div key={s.n} className="p-6">
                  <span className="text-xs font-bold" style={{ color: AMBER_DARK }}>{s.n}</span>
                  <h3 className="mt-2 text-sm font-bold">{s.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-gray-300">{s.body}</p>
                  <p className="mt-2 border-t border-black/10 pt-2 text-[11px] italic text-slate-500 dark:border-gray-700 dark:text-gray-400">{s.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Fourteen quality dimensions ─── */}
      <section className={`px-4 py-16 sm:px-6 md:px-8 ${creamBand}`}>
        <div className="mx-auto max-w-6xl">
          <p className={eyebrow} style={{ color: AMBER_DARK }}><span className="h-px w-6" style={{ backgroundColor: AMBER_DARK }} /> What We Evaluate</p>
          <h2 className={`mt-4 max-w-2xl text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Fourteen quality dimensions — not one aggregate score.</h2>
          <p className="mt-3 flex items-center gap-2 text-sm text-slate-600 dark:text-gray-300">
            <span className="h-1.5 w-1.5" style={{ backgroundColor: AMBER_DARK }} /> Each dimension has a separate metric, denominator, threshold and human review path.
          </p>

          <div className="mt-8 grid overflow-hidden rounded-2xl border border-black/10 dark:border-gray-700 lg:grid-cols-3">
            <div className="flex flex-col divide-y divide-black/10 bg-white dark:divide-gray-700 dark:bg-gray-900">
              {DIMENSIONS_LEFT.map((d) => (
                <div key={d.title} className="p-6">
                  <h3 className="text-sm font-bold">{d.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-gray-300">{d.body}</p>
                  <p className="mt-2 text-[11px] italic text-red-600/90">{d.risk}</p>
                </div>
              ))}
            </div>
            <ImageFill src="/images/Container (5).png" alt="Two reviewers examining evaluation evidence together" />
            <div className="flex flex-col divide-y divide-black/10 bg-white dark:divide-gray-700 dark:bg-gray-900">
              {DIMENSIONS_RIGHT.map((d) => (
                <div key={d.title} className="p-6">
                  <h3 className="text-sm font-bold">{d.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-gray-300">{d.body}</p>
                  <p className="mt-2 text-[11px] italic text-red-600/90">{d.risk}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Nine benchmark classes (Benchmark Portfolio) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <p className={eyebrow} style={{ color: AMBER_DARK }}><span className="h-px w-6" style={{ backgroundColor: AMBER_DARK }} /> Benchmark Portfolio</p>
            <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Nine benchmark classes — each with distinct governance.</h2>
            <div className="mt-8">
              <ImageSlot src="/images/Image (Data analysis dashboard).png" alt="Laptop displaying benchmark performance dashboard" ratio="aspect-[4/3]" />
            </div>
          </div>
          <div className="divide-y divide-black/10 dark:divide-gray-700">
            {BENCHMARK_CLASSES.map((b) => (
              <div key={b.n} className="flex gap-4 py-5">
                <span className="pt-0.5 text-xs font-bold" style={{ color: AMBER_DARK }}>{b.n}</span>
                <div>
                  <h3 className="text-sm font-bold">{b.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-gray-300">{b.body}</p>
                  <p className="mt-1 text-xs italic text-slate-500 dark:text-gray-400">{b.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Methodology Explorer (tabs) ─── */}
      <section className={`px-4 py-16 sm:px-6 md:px-8 ${creamBand}`}>
        <div className="mx-auto max-w-6xl">
          <p className={eyebrow} style={{ color: AMBER_DARK }}><span className="h-px w-6" style={{ backgroundColor: AMBER_DARK }} /> Methodology Explorer</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Inspect scoring, evidence and adjudication logic.</h2>

          <div className="mt-8 grid overflow-hidden rounded-2xl border border-black/10 dark:border-gray-700 sm:grid-cols-[220px_1fr]">
            <div className="flex flex-col" style={{ backgroundColor: NAVY }}>
              {TABS.map((t) => {
                const active = t.key === activeTab;
                return (
                  <button
                    key={t.key}
                    type="button"
                    onClick={() => setActiveTab(t.key)}
                    className={`px-5 py-3.5 text-left text-sm font-semibold transition-colors ${active ? "bg-white/10 text-white" : "text-slate-400 hover:text-white"}`}
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>
            <div className="bg-white p-8 dark:bg-gray-900">
              <h3 className="text-lg font-bold">{activeTabData.title}</h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-gray-300">{activeTabData.body}</p>
              <ul className="mt-5 space-y-2.5">
                {activeTabData.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-slate-700 dark:text-gray-200">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0" style={{ backgroundColor: AMBER_DARK }} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Scorecard architecture ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrow} style={{ color: AMBER_DARK }}><span className="h-px w-6" style={{ backgroundColor: AMBER_DARK }} /> Scorecard Architecture</p>
          <h2 className={`mt-4 max-w-2xl text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Method, scope and limitations before the headline number.</h2>

          <div className="mt-6 flex items-start gap-3 rounded-lg border px-4 py-3 text-sm" style={{ borderColor: `${AMBER}55`, backgroundColor: `${AMBER}12` }}>
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0" style={{ backgroundColor: AMBER_DARK }} />
            <p>Synthetic example — not customer data or a production claim. Run date: synthetic · System v2.4 · Pack v1.9 · Source snapshot: 2024-Q4-synth</p>
          </div>
          <p className="mt-4 text-xs text-slate-500 dark:text-gray-400">Synthetic scorecard — not a production claim. All results are illustrative.</p>

          <div className="mt-4 overflow-x-auto rounded-xl border border-black/10 dark:border-gray-700">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead style={{ backgroundColor: INK }}>
                <tr className="text-[11px] uppercase tracking-wide text-white/80">
                  <th className="px-5 py-3 font-semibold">Metric</th>
                  <th className="px-5 py-3 font-semibold">Passed / Tested</th>
                  <th className="px-5 py-3 font-semibold">Threshold</th>
                  <th className="px-5 py-3 font-semibold">Severity</th>
                  <th className="px-5 py-3 font-semibold">Status</th>
                  <th className="px-5 py-3 font-semibold">Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/10 dark:divide-gray-700">
                {SCORE_ROWS.map((r) => (
                  <tr key={r.metric} className="bg-white align-top dark:bg-gray-900">
                    <td className="px-5 py-4 font-semibold">{r.metric}</td>
                    <td className="px-5 py-4 text-slate-600 dark:text-gray-300">{r.passed}</td>
                    <td className="px-5 py-4 text-slate-600 dark:text-gray-300">{r.threshold}</td>
                    <td className={`px-5 py-4 font-medium ${r.severity === "Critical" ? "text-red-600" : r.severity === "Major" ? "text-amber-600" : "text-slate-500"}`}>{r.severity}</td>
                    <td className="px-5 py-4"><StatusPill status={r.status} /></td>
                    <td className="px-5 py-4 text-[13px] italic text-slate-500 dark:text-gray-400">{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="rounded-b-xl bg-black/[0.03] px-5 py-3 text-xs leading-relaxed text-slate-500 dark:bg-white/5 dark:text-gray-400">
            Not evaluated for: latency under sustained load, cross-tenant isolation, multi-language output. Result
            does not establish compliance, audit sufficiency or professional fitness.
          </div>
        </div>
      </section>

      {/* ─── Release gates & severity ─── */}
      <section className={`px-4 py-16 sm:px-6 md:px-8 ${creamBand}`}>
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <p className={eyebrow} style={{ color: AMBER_DARK }}><span className="h-px w-6" style={{ backgroundColor: AMBER_DARK }} /> Release Gates & Severity</p>
            <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Critical failures block release — regardless of mean score.</h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600 dark:text-gray-300">
              A single critical test failure is sufficient to block release. Severity-based gates prevent material
              failures from being averaged away into an acceptable aggregate.
            </p>
            <div className="mt-8">
              <ImageSlot src="/images/Image (Governance review meeting).png" alt="Team reviewing release readiness in a meeting room" ratio="aspect-[4/3]" />
            </div>
          </div>
          <div className="divide-y divide-black/10 overflow-hidden rounded-xl border border-black/10 bg-white dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-900">
            {GATES.map((g) => (
              <div key={g.title} className={`border-l-4 px-6 py-4 ${g.border}`}>
                <h3 className={`text-sm font-bold ${g.text}`}>{g.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-gray-300">{g.body}</p>
                <p className="mt-2 text-xs text-slate-500 dark:text-gray-400"><span className="font-semibold uppercase tracking-wide">Action:</span> {g.action}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Human review & adjudication ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <p className={eyebrow} style={{ color: AMBER_DARK }}><span className="h-px w-6" style={{ backgroundColor: AMBER_DARK }} /> Human Review & Adjudication</p>
            <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Qualified reviewers — not automated self-approval.</h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600 dark:text-gray-300">
              Automated evaluators may assist triage, but they must not be the sole approval authority for
              consequential professional quality. At least two qualified reviews are required for disputed
              high-consequence cases.
            </p>
            <div className="mt-8">
              <ImageSlot src="/images/Image (Reviewer team in discussion).png" alt="Reviewers discussing an adjudication decision" ratio="aspect-[4/3]" />
            </div>
          </div>
          <div className="overflow-x-auto rounded-xl border border-black/10 dark:border-gray-700">
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead className="bg-black/[0.03] dark:bg-white/5">
                <tr className="text-[11px] uppercase tracking-wide text-slate-500 dark:text-gray-400">
                  <th className="px-5 py-3 font-semibold">Role</th>
                  <th className="px-5 py-3 font-semibold">Responsibilities</th>
                  <th className="px-5 py-3 font-semibold">Control</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/10 dark:divide-gray-700">
                {REVIEW_ROLES.map((r) => (
                  <tr key={r.role} className="align-top odd:bg-white even:bg-black/[0.02] dark:odd:bg-gray-900 dark:even:bg-white/5">
                    <td className="px-5 py-4 font-semibold">{r.role}</td>
                    <td className="px-5 py-4 text-slate-600 dark:text-gray-300">{r.responsibility}</td>
                    <td className="px-5 py-4 text-[13px] italic text-slate-500 dark:text-gray-400">{r.control}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── Safety & adversarial evaluation (navy) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-start">
          <div className="text-white lg:sticky lg:top-20">
            <p className={eyebrow} style={{ color: "#9aa5b1" }}><span className="h-px w-6" style={{ backgroundColor: TEAL }} /> Safety & Adversarial Evaluation</p>
            <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Probe the limits — under controlled, governed conditions.</h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-slate-300/85">
              Adversarial test details may be restricted where disclosure would increase abuse risk. The methodology
              is public; protected case details remain restricted.
            </p>
          </div>
          <div className="divide-y divide-white/10 overflow-hidden rounded-xl border border-white/10">
            {SCENARIOS.map((s, i) => (
              <div key={s.title} className={`px-6 py-4 ${i % 2 === 0 ? "bg-white/[0.04]" : "bg-white/[0.02]"}`}>
                <h3 className="text-xs font-bold uppercase tracking-wide" style={{ color: AMBER }}>{s.title}</h3>
                <p className="mt-1.5 text-sm text-slate-300">{s.body}</p>
                <p className="mt-1.5 text-sm">
                  <span className="font-semibold" style={{ color: TEAL }}>Expected →</span>{" "}
                  <span className="text-slate-200">{s.expected}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Synthetic evaluation demonstrations ─── */}
      <section className={`px-4 py-16 sm:px-6 md:px-8 ${creamBand}`}>
        <div className="mx-auto max-w-6xl">
          <p className={eyebrow} style={{ color: AMBER_DARK }}><span className="h-px w-6" style={{ backgroundColor: AMBER_DARK }} /> Synthetic Evaluation Demonstrations</p>
          <h2 className={`mt-4 max-w-2xl text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Method made concrete — without customer data.</h2>
          <div className="mt-4 flex items-start gap-3 rounded-lg border px-4 py-3 text-sm" style={{ borderColor: `${AMBER}55`, backgroundColor: `${AMBER}12` }}>
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0" style={{ backgroundColor: AMBER_DARK }} />
            <p>All scenarios are synthetic — not customer data or production claims.</p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DEMO_CARDS.map((d) => (
              <div key={d.title} className="rounded-xl border border-black/10 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <h3 className="text-sm font-bold">{d.title}</h3>
                <p className="mt-1 text-xs uppercase tracking-wide text-slate-500 dark:text-gray-400"><span className="font-semibold">Focus</span> {d.focus}</p>
                <div className="mt-3 rounded-lg border-l-2 pl-3 py-2" style={{ borderColor: AMBER }}>
                  <p className="text-xs font-semibold" style={{ color: AMBER_DARK }}>Expected Behavior</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-gray-300">{d.expected}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Connected platform layers ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrow} style={{ color: AMBER_DARK }}><span className="h-px w-6" style={{ backgroundColor: AMBER_DARK }} /> Connected Platform Layers</p>
          <h2 className={`mt-4 max-w-2xl text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Evaluation connects every approved platform capability.</h2>

          <div className="mt-8 grid overflow-hidden rounded-2xl border border-black/10 dark:border-gray-700 lg:grid-cols-3">
            <div className={`flex flex-col divide-y divide-black/10 dark:divide-gray-700 ${creamBand}`}>
              {LAYERS_LEFT.map((l) => (
                <div key={l.title} className="p-6">
                  <h3 className="text-sm font-bold">{l.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-gray-300">{l.body}</p>
                  <a href="#" className="mt-3 inline-block text-xs font-semibold" style={{ color: AMBER_DARK }}>{l.link} →</a>
                </div>
              ))}
            </div>
            <ImageFill src="/images/image 60.png" alt="Workspace desk showing platform and integration tools" />
            <div className="flex flex-col divide-y divide-black/10 dark:divide-gray-700">
              {LAYERS_RIGHT.map((l) =>
                l.current ? (
                  <div key={l.title} className="p-6 text-white" style={{ backgroundColor: NAVY }}>
                    <h3 className="text-sm font-bold">{l.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-300">{l.body}</p>
                    <span className="mt-3 inline-block text-xs font-semibold" style={{ color: AMBER }}>{l.link}</span>
                  </div>
                ) : (
                  <div key={l.title} className={`p-6 ${creamBand}`}>
                    <h3 className="text-sm font-bold">{l.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-gray-300">{l.body}</p>
                    <a href="#" className="mt-3 inline-block text-xs font-semibold" style={{ color: AMBER_DARK }}>{l.link} →</a>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-black/10 bg-black/[0.03] px-6 py-4 dark:border-gray-700 dark:bg-white/5">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wide text-slate-500 dark:text-gray-400">Next: Enterprise Integrations</p>
              <p className="mt-1 max-w-2xl text-sm text-slate-600 dark:text-gray-300">
                Evaluate connected workflows before production use. Integration, tool and connector changes are
                included in relevant evaluation and regression runs.
              </p>
              <p className="mt-1 text-xs italic text-slate-500 dark:text-gray-400">This destination is out of scope until the Evaluation & Benchmarks page is explicitly approved.</p>
            </div>
            <span className="shrink-0 rounded-md border border-black/15 px-4 py-2 text-sm font-semibold text-slate-500 dark:border-gray-600 dark:text-gray-400">Coming Soon</span>
          </div>
        </div>
      </section>

      {/* ─── Proof artifacts for enterprise review ─── */}
      <section className={`px-4 py-16 sm:px-6 md:px-8 ${creamBand}`}>
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <p className={eyebrow} style={{ color: AMBER_DARK }}><span className="h-px w-6" style={{ backgroundColor: AMBER_DARK }} /> Proof Artifacts for Enterprise Review</p>
            <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>What can be inspected, requested or shared.</h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600 dark:text-gray-300">
              Enterprise procurement, model risk and assurance teams can request an evidence pack or benchmark
              review. Access, confidentiality and non-reliance terms apply.
            </p>
            <a href="#" className={`mt-6 inline-block ${amberBtn}`} style={{ backgroundColor: AMBER }}>Request Enterprise Benchmark Review</a>
            <p className="mt-3 text-xs text-slate-500 dark:text-gray-400">Qualified form — role, organization, use case, domain and timeline required.</p>
          </div>
          <div className="divide-y divide-black/10 overflow-hidden rounded-xl border border-black/10 bg-white dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-900">
            {ARTIFACTS.map((a) => (
              <div key={a.title} className="flex flex-wrap items-start justify-between gap-4 px-6 py-4">
                <div className="max-w-sm">
                  <h3 className="text-sm font-bold">{a.title}</h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-gray-300">{a.body}</p>
                </div>
                <p className="max-w-[200px] shrink-0 text-right text-xs italic text-slate-500 dark:text-gray-400">{a.access}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-4xl">
          <p className={eyebrow} style={{ color: AMBER_DARK }}><span className="h-px w-6" style={{ backgroundColor: AMBER_DARK }} /> Frequently Asked Questions</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Direct answers to trust and procurement questions.</h2>
          <div className="mt-8 divide-y divide-black/10 border-y border-black/10 dark:divide-gray-700 dark:border-gray-700">
            {FAQS.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q}>
                  <button type="button" onClick={() => setOpenFaq(open ? null : i)} aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 py-4 text-left text-[15px] font-semibold">
                    {f.q}
                    <span style={{ color: AMBER_DARK }}><Chevron open={open} /></span>
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