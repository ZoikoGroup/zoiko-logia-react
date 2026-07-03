"use client";

import { useState } from "react";

/* ------------------------------------------------------------------ */
/*  ZoikoLogia — Platform landing page (single-file component)         */
/*  Header & footer omitted · images are dashed placeholders          */
/*  Palette: navy #071a33 · cream #f7f3ea · sand #efe8d6               */
/*           amber #f59a23 · orange #d9720f · teal #0d9488 · ink #16233d */
/*  Fonts are loaded inline below — no page-level wiring required.     */
/* ------------------------------------------------------------------ */

/* Loads the display + body faces and exposes them as CSS variables    */
function Fonts() {
  return (
    <style>{`
@import url('https://fonts.googleapis.com/css2?family=Lora:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap');
.zk-root{--font-serif:'Lora',Georgia,serif;--font-body:'Inter',system-ui,sans-serif;}
`}</style>
  );
}

function Eyebrow({
  children,
  color = "amber",
  center = false,
}: {
  children: React.ReactNode;
  color?: "amber" | "teal";
  center?: boolean;
}) {
  const c = color === "amber" ? "#d9720f" : "#0d9488";
  return (
    <div className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}>
      <span className="h-px w-6" style={{ backgroundColor: c }} />
      <span
        className="text-[11px] font-bold uppercase tracking-[0.18em]"
        style={{ color: c }}
      >
        {children}
      </span>
    </div>
  );
}

function ImagePlaceholder({
  className = "",
  label = "Image",
  rounded = "rounded-xl",
}: {
  className?: string;
  label?: string;
  rounded?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center border-2 border-dashed border-black/15 bg-black/[0.03] ${rounded} ${className}`}
    >
      <span className="text-[10px] font-medium uppercase tracking-widest text-black/30">
        {label}
      </span>
    </div>
  );
}

function IconTile({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg"
      style={{ backgroundColor: "rgba(245,154,35,0.14)", color: "#d9720f" }}
    >
      {children}
    </span>
  );
}

/* Teal text link with trailing arrow */
function TealLink({ children }: { children: React.ReactNode }) {
  return (
    <a
      href="#"
      className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#0d9488] hover:text-[#0b7d72]"
    >
      {children}
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </a>
  );
}

function AmberButton({
  children,
  deep = false,
  full = false,
}: {
  children: React.ReactNode;
  deep?: boolean;
  full?: boolean;
}) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold text-[#16233d] transition-opacity hover:opacity-90 ${
        full ? "w-full" : ""
      }`}
      style={{ backgroundColor: deep ? "#d9720f" : "#f59a23" }}
    >
      {children}
    </button>
  );
}

function OutlineButton({
  children,
  onDark = false,
  full = false,
}: {
  children: React.ReactNode;
  onDark?: boolean;
  full?: boolean;
}) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-md border px-6 py-3 text-sm font-semibold transition-colors ${
        full ? "w-full" : ""
      } ${
        onDark
          ? "border-white/25 text-white hover:bg-white/5"
          : "border-black/20 text-[#16233d] hover:bg-black/[0.04]"
      }`}
    >
      {children}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */

const platformCards = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 3v5h5M8 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-5-5H8z" />
        <path d="M9 13h6M9 17h4" />
      </svg>
    ),
    title: "Source-Governed",
    body: "Uses approved source structures, citation discipline, source confidence states, and controlled no-source behavior to reduce unsupported responses.",
    link: "Explore Source-Governed Intelligence",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
      </svg>
    ),
    title: "Professionally Bounded",
    body: "Designed to recognize risk, clarify assumptions, avoid inappropriate certainty, and route higher-risk matters toward review or escalation.",
    link: "Explore Platform Limits & Escalation",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 21V9l9-6 9 6v12M9 21v-6h6v6" />
      </svg>
    ),
    title: "Evidence-Ready",
    body: "Designed to maintain traceability across source bundles, model runs, reviewer actions, and workflow records to support review, auditability, and governance.",
    link: "Explore Audit Evidence Ledger",
  },
];

const kritonCards = [
  { title: "Ask Accounting Questions", body: "For accounting, tax, audit, payroll, finance, compliance, and learning inquiries.", link: "See Ask Accounting Questions" },
  { title: "Learning & Practice Mode", body: "Guided practice with prerequisite pathways and academic integrity controls.", link: "Explore Learning & Practice Mode" },
  { title: "Workflow Mode", body: "Source-backed guidance with clear assumptions and limitations.", link: "Explore Workflow Mode" },
  { title: "Review Mode", body: "Reviewer queues, escalation, and workpaper traceability.", link: "Explore Review Mode" },
  { title: "Admin Mode", body: "Tenant policy, source permissions, and governance configuration.", link: "Explore Admin Mode" },
  { title: "Human Escalation", body: "Clarification, limitation language, or human decision support.", link: "Explore Human Escalation" },
];

const serveCards = [
  { title: "Accounting Firms", body: "Research, client explanations, and review workflows.", label: "Firm" },
  { title: "Enterprise Finance Teams", body: "Policy consistency and review evidence.", label: "Enterprise" },
  { title: "Tax Professionals", body: "Jurisdiction-aware research and escalation.", label: "Tax" },
  { title: "Audit & Assurance Teams", body: "Evidence requirements and audit trail support.", label: "Audit" },
  { title: "Payroll & Compliance", body: "Jurisdiction-aware workflow guidance.", label: "Payroll" },
  { title: "Accounting Education", body: "Concept pathways and practice guidance.", label: "Education" },
  { title: "AI Governance Teams", body: "Evaluate professional AI controls.", label: "Governance" },
];

const steps = [
  { title: "Approved Sources", body: "Authority rules, versioning, and licensing controls." },
  { title: "Accounting Ontology", body: "Frameworks, jurisdictions, and effective dates." },
  { title: "RAG Source Bundles", body: "Citation grounding and confidence states." },
  { title: "Kriton™ Guidance", body: "Usable answers, workflows, and escalation.", kriton: true },
  { title: "Evidence Ledger", body: "Is designed to maintain evidence-ready traceability.", accent: true },
  { title: "Governance Controls", body: "Quality thresholds and release gates.", check: true },
];

const trustCards = [
  { title: "Privacy & Security", body: "Identity, access controls, encryption, and privacy routes." },
  { title: "Provider Due Diligence", body: "Providers and subprocessors reviewed before approval." },
  { title: "Quality & Testing", body: "Benchmark testing, thresholds, and drift monitoring." },
  { title: "Release Controls", body: "QA gates, pilot safeguards, and controlled rollout." },
  { title: "Accessibility", body: "Designed to meet WCAG 2.2 AA standards." },
  { title: "Trust Center", body: "The public hub for approved trust documentation and policies." },
];

const comparison = [
  { req: "Source discipline", generic: "Variable", zoiko: "Approved sources, authority, versions, and citations" },
  { req: "Professional boundaries", generic: "Often unclear", zoiko: "Limits, escalation, review, and risk-aware behavior" },
  { req: "Evidence readiness", generic: "Limited", zoiko: "Source-bundle records and traceability" },
  { req: "Accounting ontology", generic: "General model knowledge", zoiko: "Structured concepts, jurisdictions, and effective dates" },
  { req: "Enterprise controls", generic: "Usually broad", zoiko: "Privacy, security, and release governance" },
  { req: "Review workflow", generic: "Informal", zoiko: "Review Mode, escalation, workpaper support, and audit trail alignment" },
];

const faqs = [
  {
    q: "What is ZoikoLogia™?",
    a: "ZoikoLogia™ is a governed AI accounting intelligence platform designed to support accounting, tax, audit, finance, compliance, and learning workflows through source-backed intelligence, professional boundaries, and evidence-ready controls.",
  },
  {
    q: "Is ZoikoLogia™ a generic AI chatbot?",
    a: "No. It is a governed accounting intelligence platform. Kriton™ is the advisor experience on top of source governance, accounting ontology, risk classification, and an audit evidence ledger.",
  },
  {
    q: "Can ZoikoLogia™ replace accountants or auditors?",
    a: "No. Kriton™ supports professional judgment and routes higher-risk matters to human review — every regulated output is designed to be reviewed and signed by a qualified professional.",
  },
  {
    q: "Who is ZoikoLogia™ for?",
    a: "Accounting firms, enterprise finance teams, tax and audit professionals, payroll and compliance functions, accounting educators, and AI governance teams.",
  },
  {
    q: "Can organizations pilot ZoikoLogia™ before full deployment?",
    a: "Yes. You can request a controlled pilot with defined users, sources, workflows, governance expectations, and review criteria before wider rollout.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export function Platform() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="zk-root font-[family-name:var(--font-body)] text-[#16233d]">
      <Fonts />

      {/* ============================ HERO ============================ */}
      <section className="bg-[#071a33]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-12 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:py-24 lg:pl-16">
          <div>
            <Eyebrow color="teal">Governed AI Accounting Intelligence</Eyebrow>
            <h1 className="mt-6 font-[family-name:var(--font-serif)] text-4xl leading-[1.12] text-white sm:text-5xl lg:text-[3.4rem]">
              AI accounting intelligence built for professional judgment.
            </h1>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-slate-300">
              Source-governed, evidence-ready, and built around the realities of
              accounting work. Kriton™, the AI advisor inside ZoikoLogia™, helps
              you ask questions, explore sources, and know when a matter needs
              human review.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <AmberButton>Book a Demo</AmberButton>
              <OutlineButton onDark>Request Pilot</OutlineButton>
            </div>
            <p className="mt-6 max-w-md text-[13px] leading-relaxed text-slate-400">
              Built for accounting, tax, audit, finance, compliance, and
              learning workflows where source discipline and professional
              boundaries matter.
            </p>
          </div>

          {/* Right: image + overlaid controls card */}
          <div className="relative">
            <ImagePlaceholder className="aspect-[4/3] w-full" label="Hero image" />
            <div className="absolute inset-x-4 bottom-4 rounded-xl border border-white/10 bg-[#0a1424]/95 p-5 backdrop-blur sm:inset-x-6 sm:bottom-6">
              <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-slate-300">
                <span className="inline-block h-3.5 w-3.5 rounded-[3px] border border-slate-500" />
                Enterprise Controls — Governance &amp; Privacy
              </div>
              <ul className="mt-4 space-y-3 text-sm">
                {[
                  ["Kriton™ AI Advisor", "Surface", "#2dd4bf"],
                  ["RAG Source Bundles", "Intelligence", "#2dd4bf"],
                  ["Accounting Ontology", "Knowledge", "#64748b"],
                  ["Authoritative Sources", "Foundation", "#f59a23"],
                ].map(([label, tag, dot]) => (
                  <li key={label} className="flex items-center justify-between">
                    <span className="flex items-center gap-2.5 text-slate-100">
                      <span
                        className="inline-block h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: dot }}
                      />
                      {label}
                    </span>
                    <span className="text-xs text-slate-400">{tag}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 border-t border-dashed border-white/10 pt-3 text-[12px] text-[#f59a23]">
                + Audit Evidence Ledger, connected to every layer
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WHAT ZOIKOLOGIA IS ===================== */}
      <section className="bg-[#f7f3ea]">
        <div className="mx-auto max-w-[1200px] px-6 py-20 sm:px-10">
          <Eyebrow>What ZoikoLogia™ Is</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-[family-name:var(--font-serif)] text-3xl leading-tight text-[#16233d] sm:text-[2.4rem]">
            A governed AI accounting intelligence platform, not a general-purpose
            tool.
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-slate-600">
            Unlike general-purpose AI tools, ZoikoLogia™ is designed around the
            realities of accounting: effective dates, jurisdictional differences,
            authoritative source hierarchy, workflow documentation, professional
            skepticism, and escalation when an answer should not be treated as
            definitive.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {platformCards.map((c) => (
              <div
                key={c.title}
                className="flex flex-col rounded-xl border border-black/10 bg-white p-7"
              >
                <IconTile>{c.icon}</IconTile>
                <h3 className="mt-5 text-base font-bold text-[#16233d]">
                  {c.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                  {c.body}
                </p>
                <div className="mt-6 flex items-end justify-between gap-4">
                  <TealLink>{c.link}</TealLink>
                  <svg className="shrink-0 text-[#0d9488]" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M9 7h8v8" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= MEET KRITON ====================== */}
      <section className="bg-[#efe8d6]">
        <div className="mx-auto max-w-[1200px] px-6 py-20 sm:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center">
              <Eyebrow color="teal" center>Meet Kriton™</Eyebrow>
            </div>
            <h2 className="mt-5 font-[family-name:var(--font-serif)] text-3xl leading-tight text-[#16233d] sm:text-[2.4rem]">
              The AI advisor inside ZoikoLogia™.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-slate-600">
              Helps you ask, learn, and structure work — and knows when a matter
              needs human judgment instead.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {kritonCards.map((c) => (
              <div key={c.title} className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="text-base font-bold text-[#16233d]">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {c.body}
                </p>
                <div className="mt-4">
                  <TealLink>{c.link}</TealLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHO THE PLATFORM SERVES ================ */}
      <section className="bg-[#f7f3ea]">
        <div className="mx-auto max-w-[1200px] px-6 py-20 sm:px-10">
          <Eyebrow>Who The Platform Serves</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-[family-name:var(--font-serif)] text-3xl leading-tight text-[#16233d] sm:text-[2.4rem]">
            Built for every function accounting intelligence touches.
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {serveCards.map((c) => (
              <div
                key={c.title}
                className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5"
              >
                <ImagePlaceholder
                  className="aspect-[16/10] w-full"
                  rounded="rounded-none"
                  label={c.label}
                />
                <div className="p-5">
                  <h3 className="text-[15px] font-bold text-[#16233d]">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {c.body}
                  </p>
                  <div className="mt-4">
                    <TealLink>Learn more</TealLink>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <OutlineButton>Find Your Solution</OutlineButton>
          </div>
        </div>
      </section>

      {/* ===================== HOW ZOIKOLOGIA WORKS ================= */}
      <section className="bg-[#efe8d6]">
        <div className="mx-auto max-w-[1200px] px-6 py-20 sm:px-10">
          <Eyebrow>How ZoikoLogia™ Works</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-[family-name:var(--font-serif)] text-3xl leading-tight text-[#16233d] sm:text-[2.4rem]">
            Six governed steps between a question and an answer.
          </h2>

          <div className="relative mt-14">
            {/* connector line */}
            <div className="absolute left-0 right-0 top-6 hidden h-px bg-black/15 lg:block" />
            <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
              {steps.map((s) => (
                <div key={s.title} className="relative">
                  <span
                    className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full border ${
                      s.kriton ? "border-[#0d9488]" : "border-black/15 bg-white"
                    }`}
                    style={s.kriton ? { backgroundColor: "#d3ede8" } : undefined}
                  >
                    {s.check ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16233d" strokeWidth="2">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    ) : s.kriton ? (
                      <span className="text-sm font-bold text-[#0d9488]">K</span>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16233d" strokeWidth="1.6">
                        <rect x="5" y="5" width="14" height="14" rx="3" />
                      </svg>
                    )}
                  </span>
                  <h3 className="mt-4 pr-3 text-[14px] font-bold text-[#16233d]">
                    {s.title}
                  </h3>
                  <p
                    className={`mt-1.5 pr-4 text-[13px] leading-snug ${
                      s.accent ? "text-[#d9720f]" : "text-slate-500"
                    }`}
                  >
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================== ENTERPRISE TRUST & CONTROLS ============= */}
      <section className="bg-[#f7f3ea]">
        <div className="mx-auto max-w-[1200px] px-6 py-20 sm:px-10">
          <Eyebrow color="teal">Enterprise Trust &amp; Controls</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-[family-name:var(--font-serif)] text-3xl leading-tight text-[#16233d] sm:text-[2.4rem]">
            Built for organizations that need more than productivity gains.
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-slate-600">
            Disciplined AI adoption through privacy, security, provider due
            diligence, accessibility, and governance visibility.{" "}
            <a href="#" className="font-semibold text-[#0d9488] hover:text-[#0b7d72]">
              Visit Trust Center →
            </a>
          </p>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {trustCards.map((c) => (
              <div
                key={c.title}
                className="rounded-xl border border-black/10 bg-white p-6"
              >
                <h3 className="text-base font-bold text-[#16233d]">{c.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PLATFORM DIFFERENTIATION =============== */}
      <section className="bg-[#efe8d6]">
        <div className="mx-auto max-w-[1200px] px-6 py-20 sm:px-10">
          <Eyebrow>Platform Differentiation</Eyebrow>
          <h2 className="mt-5 font-[family-name:var(--font-serif)] text-3xl leading-tight text-[#16233d] sm:text-[2.4rem]">
            Governance first. Model capability second.
          </h2>

          {/* Pending sign-off banner */}
          <div className="mt-8 flex items-start gap-3 rounded-lg border border-[#e6b26a] bg-[#f5e2c2] px-5 py-4">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#e89a3c]/30 text-sm font-bold text-[#b5661a]">
              !
            </span>
            <p className="text-sm text-[#5b4a2e]">
              <span className="font-bold text-[#16233d]">
                Pending Legal/Compliance sign-off.
              </span>{" "}
              &ldquo;Generic AI Tool&rdquo; is an unnamed capability category, not
              a specific product.
            </p>
          </div>

          {/* Comparison table */}
          <div className="mt-8 overflow-hidden rounded-xl border border-black/10 bg-white">
            <div className="grid grid-cols-1 gap-0 md:grid-cols-[1.1fr_1fr_1.6fr]">
              {/* header */}
              <div className="hidden bg-[#efe8d6] px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-slate-500 md:block">
                Requirement
              </div>
              <div className="hidden bg-[#efe8d6] px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-slate-500 md:block">
                Generic AI Tool
              </div>
              <div className="hidden bg-[#efe8d6] px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-slate-500 md:block">
                ZoikoLogia™
              </div>

              {comparison.map((row) => (
                <div key={row.req} className="contents">
                  <div className="border-t border-black/[0.06] px-6 py-4 text-sm font-bold text-[#16233d]">
                    {row.req}
                  </div>
                  <div className="px-6 pb-4 text-sm text-slate-400 md:border-t md:border-black/[0.06] md:py-4">
                    {row.generic}
                  </div>
                  <div className="flex items-start gap-2 border-b border-black/[0.06] px-6 pb-4 text-sm text-slate-700 md:border-b-0 md:border-t md:py-4">
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#f59a23]" />
                    {row.zoiko}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== COMMERCIAL READINESS ================= */}
      <section className="bg-[#f7f3ea]">
        <div className="mx-auto max-w-[1200px] px-6 py-20 sm:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center">
              <Eyebrow center>Commercial Readiness</Eyebrow>
            </div>
            <h2 className="mt-5 font-[family-name:var(--font-serif)] text-3xl leading-tight text-[#16233d] sm:text-[2.3rem]">
              Wherever you sit — firm, enterprise, or governance function —
              there&apos;s a path in.
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Book a Demo (navy) */}
            <div className="flex flex-col rounded-xl bg-[#071a33] p-7">
              <h3 className="font-[family-name:var(--font-serif)] text-xl text-white">
                Book a Demo
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-300">
                See how ZoikoLogia™ and Kriton™ support source-backed accounting
                intelligence, professional workflows, and governance-ready AI
                adoption.
              </p>
              <div className="mt-6">
                <AmberButton full>Book a Demo</AmberButton>
              </div>
            </div>

            {/* Request Pilot (white) */}
            <div className="flex flex-col rounded-xl border border-black/10 bg-white p-7">
              <h3 className="font-[family-name:var(--font-serif)] text-xl text-[#16233d]">
                Request Pilot
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                Evaluate ZoikoLogia™ in a controlled setting with defined users,
                sources, workflows, governance expectations, and review criteria.
              </p>
              <div className="mt-6">
                <OutlineButton full>Request Pilot</OutlineButton>
              </div>
            </div>

            {/* Enterprise Briefing (sand) */}
            <div className="flex flex-col rounded-xl border border-black/10 bg-[#efe8d6] p-7">
              <h3 className="font-[family-name:var(--font-serif)] text-xl text-[#16233d]">
                Request Enterprise Briefing
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                For boards, CFOs, CTOs, compliance leaders, procurement teams, and
                AI governance stakeholders.
              </p>
              <div className="mt-6">
                <OutlineButton full>Request Enterprise Briefing</OutlineButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= FAQ ========================== */}
      <section className="bg-[#f7f3ea]">
        <div className="mx-auto max-w-[1200px] px-6 pb-20 sm:px-10">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-5 font-[family-name:var(--font-serif)] text-3xl text-[#16233d] sm:text-[2.3rem]">
            Platform questions, answered plainly.
          </h2>

          <div className="mt-10 border-t border-black/10">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q} className="border-b border-black/10">
                  <button
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="font-[family-name:var(--font-serif)] text-lg font-semibold text-[#16233d]">
                      {f.q}
                    </span>
                    <span className="shrink-0 text-2xl font-light leading-none text-[#16233d]">
                      {open ? "–" : "+"}
                    </span>
                  </button>
                  {open && (
                    <p className="max-w-3xl pb-6 text-sm leading-relaxed text-slate-600">
                      {f.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================= FINAL CTA ======================== */}
      <section className="bg-[#f7f3ea]">
        <div className="mx-auto max-w-[1200px] px-6 pb-20 sm:px-10">
          <div
            className="rounded-2xl px-6 py-16 text-center sm:px-10"
            style={{
              background:
                "linear-gradient(135deg,#071a33 0%,#0a2740 55%,#071a33 100%)",
            }}
          >
            <div className="flex justify-center">
              <Eyebrow color="teal" center>
                Governed AI, Ready To Evaluate
              </Eyebrow>
            </div>
            <h2 className="mt-5 font-[family-name:var(--font-serif)] text-3xl leading-tight text-white sm:text-[2.4rem]">
              See the platform behind the advisor.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-slate-300">
              Book a demo, request a controlled pilot, or bring your governance
              and procurement teams into an enterprise briefing.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <AmberButton>Book a Demo</AmberButton>
              <OutlineButton onDark>Request Pilot</OutlineButton>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-slate-200"
              >
                Request Enterprise Briefing
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Platform;