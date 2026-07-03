"use client";

import { useState } from "react";
import Image from "next/image";

/* ------------------------------------------------------------------ */
/*  Design tokens (matched to the provided mockup)                     */
/*  navy #071a33 · cream #f7f3ea · sand #efe8d6                        */
/*  amber #f59a23 · orange #d9720f · teal #0d9488                      */
/* ------------------------------------------------------------------ */

/* Small reusable "— LABEL" eyebrow */
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
    <div
      className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}
    >
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

/*
 * Image slot used across the page. Pass a real `src` and it renders with
 * next/image (fill + object-cover) — same mechanism used on the Platform
 * and Homepage components. Leave `src` empty/undefined and it falls back
 * to the dashed placeholder box so the layout still looks intentional
 * until the real asset is dropped in.
 */
function ImagePlaceholder({
  src,
  alt = "",
  className = "",
  label = "Image",
  rounded = "rounded-xl",
}: {
  src?: string;
  alt?: string;
  className?: string;
  label?: string;
  rounded?: string;
}) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${rounded} ${className}`}>
        <Image
          src={src}
          alt={alt || label}
          fill
          sizes="(max-width:1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center border-2 border-dashed border-black/15 bg-black/[0.03] ${rounded} ${className}`}
    >
      <span className="text-xs font-medium uppercase tracking-widest text-black/30">
        {label}
      </span>
    </div>
  );
}

/* Small square icon tile */
function IconTile({
  children,
  tone = "amber",
}: {
  children: React.ReactNode;
  tone?: "amber" | "teal" | "darkteal";
}) {
  const styles =
    tone === "amber"
      ? { bg: "rgba(245,154,35,0.12)", fg: "#d9720f" }
      : tone === "teal"
      ? { bg: "rgba(13,148,136,0.12)", fg: "#0d9488" }
      : { bg: "rgba(13,148,136,0.15)", fg: "#5eead4" };
  return (
    <span
      className="inline-flex h-9 w-9 items-center justify-center rounded-md"
      style={{ backgroundColor: styles.bg, color: styles.fg }}
    >
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */

// Each persona now carries an `img` field for its circular avatar.
// Leave `img` as "" to keep the placeholder circle.
const personas = [
  { n: 1, name: "Student /\nCareer Explorer", desc: "Learns the foundation.", tag: "Learning / Exploration", img: "/images/Student exploring accounting fundamentals.png" },
  { n: 2, name: "Junior\nAccountant", desc: "Builds professional confidence.", tag: "Learning / Workflow", img: "/images/Junior accountant building professional skillss.png" },
  { n: 3, name: "Business\nOwner", desc: "Reads the financials with confidence.", tag: "Business /\nNon-accounting", img: "/images/Business owner reviewing financial statementsd.png" },
  { n: 4, name: "Operations\nLeader", desc: "Asks the right financial questions.", tag: "Business /\nNon-accounting", img: "/images/Operations leader analyzing a financial question.png" },
  { n: 5, name: "Finance\nManager", desc: "Prepares the workpaper.", tag: "Professional\nWorkflow", img: "/images/Finance manager preparing a workpaper.png" },
  { n: 6, name: "Tax\nDirector", desc: "Validates jurisdictional treatment.", tag: "Professional\nAuthority", img: "/images/Audit partner reviewing evidence.png" },
  { n: 7, name: "Audit\nPartner", desc: "Reviews the evidence.", tag: "Professional\nAuthority", img: "/images/Audit partner reviewing evidence.png" },
  { n: 8, name: "CFO", desc: "Signs the financials.", tag: "Professional\nAuthority", img: "/images/CFO signing financial statements.png" },
];

const kritonTabs: Record<string, { title: string; body: string }> = {
  Learning: {
    title: "Learning Mode",
    body: "Explains concepts and supports guided practice while preserving academic integrity.",
  },
  Workflow: {
    title: "Workflow Mode",
    body: "Structures multi-step accounting tasks with source checks and review gates at every stage.",
  },
  Review: {
    title: "Review Mode",
    body: "Surfaces the evidence and flags where human review is required before sign-off.",
  },
  Admin: {
    title: "Admin Mode",
    body: "Configures tenant policy, source authority, and risk thresholds across the platform.",
  },
};

const governance = [
  { title: "Source authority first", body: "Sources are validated before regulated answer generation." },
  { title: "Risk classified first", body: "Kriton™ classifies risk before producing regulated guidance." },
  { title: "Evidence before trust", body: "Outputs are replayable through source bundles and model runs." },
  { title: "Privacy before processing", body: "Data use is controlled by purpose, tenant scope, and region." },
  { title: "Evaluated before promotion", body: "Thresholds and result packs govern every model release." },
  { title: "Human judgment protected", body: "Kriton™ supports professionals — it never replaces them." },
];

const faqs = [
  {
    q: "Is ZoikoLogia™ a chatbot?",
    a: "No. It's a governed accounting intelligence system — Kriton™ is the advisor experience on top of source governance, risk classification, and audit logging.",
  },
  {
    q: "Does it replace accountants?",
    a: "No. Kriton™ supports professional judgment — it never replaces it. Every regulated output is designed to be reviewed and signed by a qualified professional.",
  },
  {
    q: "How does it reduce hallucination risk?",
    a: "Answers are generated from approved, versioned sources and are replayable through source bundles and model runs, so every claim can be traced back to its evidence.",
  },
  {
    q: "Is it built for enterprises?",
    a: "Yes. Tenant isolation, encryption, regional routing, audit evidence, and release governance are core product requirements, not add-ons.",
  },
];

/* ------------------------------------------------------------------ */
/*  Buttons                                                           */
/* ------------------------------------------------------------------ */

function AmberButton({
  children,
  deep = false,
}: {
  children: React.ReactNode;
  deep?: boolean;
}) {
  return (
    <button
      className="inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
      style={{ backgroundColor: deep ? "#d9720f" : "#f59a23" }}
    >
      {children}
    </button>
  );
}

function OutlineButton({
  children,
  onDark = false,
}: {
  children: React.ReactNode;
  onDark?: boolean;
}) {
  return (
    <button
      className={`inline-flex items-center gap-2 rounded-md border px-6 py-3 text-sm font-semibold transition-colors ${
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
/*  Page                                                              */
/*  Note: no <header>/<footer> markup is included here — this          */
/*  component only ever contained the page body (hero → CTA). It's     */
/*  meant to be rendered inside your shared Header/Footer components,  */
/*  e.g. `<Header /><ZoikoLogiaHome /><Footer />`.                     */
/* ------------------------------------------------------------------ */

export function ZoikoLogiaHome() {
  const [activeTab, setActiveTab] = useState("Learning");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="font-[family-name:var(--font-body)] text-[#16233d]">
      {/* ============================ HERO ============================ */}
      <section className="bg-[#071a33]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-stretch lg:grid-cols-2">
          {/* Left copy */}
          <div className="flex flex-col justify-center px-6 py-16 sm:px-10 lg:py-24 lg:pl-16 lg:pr-14">
            <Eyebrow color="teal">About ZoikoLogia™</Eyebrow>
            <h1 className="mt-6 font-[family-name:var(--font-serif)] text-4xl leading-[1.15] text-white sm:text-5xl lg:text-[3.35rem]">
              Governed AI accounting intelligence, built for professional work.
            </h1>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-slate-300">
              ZoikoLogia™, with Kriton™, helps accounting professionals, firms,
              and finance teams work with source-backed, auditable AI — not a
              generic chatbot.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <AmberButton>Book a Demo</AmberButton>
              <OutlineButton onDark>Find Your Solution</OutlineButton>
            </div>
          </div>

          {/* Right image + floating card */}
          <div className="relative min-h-220px">
            <ImagePlaceholder
              src="/images/div.spotlight-photo.png"
              alt="Team working together at ZoikoLogia"
              className="h-full w-full"
              rounded="rounded-none"
              label="Hero image"
            />
            <div className="absolute bottom-8 left-8 max-w-xs rounded-lg bg-white p-5 shadow-xl">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#0d9488]">
                Built Different
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Governance first, model capability second — every answer is
                source-backed and replayable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= WHO WE ARE ========================= */}
      <section className="bg-[#f7f3ea]">
        <div className="mx-auto max-w-[1200px] px-6 py-20 sm:px-10">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <Eyebrow>Who We Are</Eyebrow>
              <h2 className="mt-5 font-[family-name:var(--font-serif)] text-3xl leading-tight text-[#16233d] sm:text-[2.35rem]">
                Accounting work can&apos;t run on unsupported AI confidence.
              </h2>
              <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-slate-600">
                Accounting, audit, tax, and compliance work require controlled
                sources, jurisdictional awareness, professional boundaries, and
                clear escalation — not just fluent language. ZoikoLogia™ brings
                these controls together in one governed platform.
              </p>
              <div className="mt-8">
                <OutlineButton>How the Platform Works</OutlineButton>
              </div>
            </div>
            <ImagePlaceholder
              src="/images/zoikologia/who-we-are-team.png"
              alt="ZoikoLogia team collaborating"
              className="aspect-[4/3] w-full"
              label="Team image"
            />
          </div>

          {/* Three feature columns */}
          <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-3">
            {[
              {
                tone: "amber" as const,
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 3v5h5M8 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-5-5H8z" />
                  </svg>
                ),
                title: "Source-governed",
                body: "Approved, versioned sources — not model memory alone.",
              },
              {
                tone: "teal" as const,
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
                  </svg>
                ),
                title: "Enterprise-oriented",
                body: "Tenant isolation, audit evidence, and release governance.",
              },
              {
                tone: "amber" as const,
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                ),
                title: "Responsible by design",
                body: "Kriton™ supports human judgment — it doesn't replace it.",
              },
            ].map((f) => (
              <div key={f.title}>
                <IconTile tone={f.tone}>{f.icon}</IconTile>
                <h3 className="mt-4 text-[15px] font-bold text-[#16233d]">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= WHAT KRITON DOES ==================== */}
      <section className="bg-[#efe8d6]">
        <div className="mx-auto max-w-[1200px] px-6 py-20 sm:px-10">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <Eyebrow color="teal">What Kriton™ Does</Eyebrow>
              <h2 className="mt-5 font-[family-name:var(--font-serif)] text-3xl leading-tight text-[#16233d] sm:text-[2.35rem]">
                The AI advisor for governed accounting work.
              </h2>
              <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-slate-600">
                Kriton™ helps users ask questions, structure workflows, and
                recognize when human review is required — governed by source
                authority and risk classification at every step.
              </p>

              {/* Tabs */}
              <div className="mt-10 flex gap-8 border-b border-black/10">
                {Object.keys(kritonTabs).map((tab) => {
                  const active = tab === activeTab;
                  return (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`-mb-px border-b-2 pb-3 text-sm font-semibold transition-colors ${
                        active
                          ? "border-[#0d9488] text-[#16233d]"
                          : "border-transparent text-slate-400 hover:text-slate-600"
                      }`}
                    >
                      {tab}
                    </button>
                  );
                })}
              </div>

              <div className="mt-8">
                <h3 className="font-[family-name:var(--font-serif)] text-xl text-[#16233d]">
                  {kritonTabs[activeTab].title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600">
                  {kritonTabs[activeTab].body}
                </p>
              </div>
            </div>

            <ImagePlaceholder
              src="/images/zoikologia/kriton-advisor.png"
              alt="Kriton AI advisor in use"
              className="aspect-[4/3] w-full self-start"
              label="Advisor image"
            />
          </div>
        </div>
      </section>

      {/* ======================== WHO WE SERVE ======================= */}
      <section className="bg-[#efe8d6]">
        <div className="mx-auto max-w-[1200px] px-6 pb-24 sm:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex justify-center">
              <Eyebrow center>Who We Serve</Eyebrow>
            </div>
            <h2 className="mt-5 font-[family-name:var(--font-serif)] text-3xl leading-tight text-[#16233d] sm:text-[2.5rem]">
              Accounting intelligence for the people who ask, prepare, review,
              govern, and sign.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-slate-600">
              ZoikoLogia™ with Kriton™ supports professionals who carry
              judgment, business leaders who need financial clarity, and
              learners building accounting knowledge — all through source-backed,
              evidence-ready, professionally governed AI workflows.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <AmberButton deep>
                Explore Solutions <Chevron />
              </AmberButton>
              <OutlineButton>
                Book a Demo <Chevron />
              </OutlineButton>
            </div>
          </div>

          {/* Persona cards */}
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {personas.map((p) => (
              <div
                key={p.n}
                className="rounded-lg bg-white p-5 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="relative shrink-0">
                    <ImagePlaceholder
                      src={p.img}
                      alt={p.name.replace("\n", " ")}
                      className="h-14 w-14"
                      rounded="rounded-full"
                      label=""
                    />
                    <span className="absolute -left-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-bold text-[#16233d] shadow ring-1 ring-black/5">
                      {p.n}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="whitespace-pre-line font-[family-name:var(--font-serif)] text-[15px] font-bold leading-tight text-[#16233d]">
                      {p.name}
                    </h3>
                    <p className="mt-2 text-[13px] leading-snug text-slate-500">
                      {p.desc}
                    </p>
                    <p className="mt-3 whitespace-pre-line text-[11px] font-bold leading-tight text-[#16233d]">
                      {p.tag}
                    </p>
                    <span className="mt-1 block h-0.5 w-6 bg-[#f59a23]" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Journey bar */}
          <div className="mt-12 border-t border-black/10 pt-8">
            <div className="flex flex-wrap items-center justify-between gap-y-6">
              <JourneyStep
                tone="amber"
                label="Explore & Learn"
                icon={
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12c.5.5 1 1.5 1 2h6c0-.5.5-1.5 1-2a7 7 0 0 0-4-12z" />
                  </svg>
                }
              />
              <Dashes tone="amber" />
              <JourneyStep
                tone="amber"
                label="Build & Prepare"
                icon={
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 3v5h5M8 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-5-5H8z" />
                  </svg>
                }
              />
              <Dashes tone="amber" />
              <JourneyStep
                tone="navy"
                label="Review & Govern"
                icon={
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                }
              />
              <Dashes tone="navy" />
              <JourneyStep
                tone="navy"
                label="Sign & Stand Behind"
                icon={
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* ====================== HOW WE'RE DIFFERENT ================== */}
      <section className="bg-[#071a33]">
        <div className="mx-auto max-w-[1200px] px-6 py-20 sm:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center">
              <Eyebrow color="teal" center>
                How We&apos;re Different
              </Eyebrow>
            </div>
            <h2 className="mt-5 font-[family-name:var(--font-serif)] text-3xl leading-tight text-white sm:text-[2.4rem]">
              Governance first. Model capability second.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-slate-300">
              ZoikoLogia™ is designed to answer the questions compliance teams
              ask before deploying AI: which sources, which jurisdiction, what
              risk, what evidence.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {governance.map((g) => (
              <div key={g.title}>
                <IconTile tone="darkteal">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="4" y="4" width="16" height="16" rx="3" />
                  </svg>
                </IconTile>
                <h3 className="mt-4 text-[15px] font-bold text-white">
                  {g.title}
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-400">
                  {g.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <OutlineButton onDark>View Governance Framework</OutlineButton>
          </div>
        </div>
      </section>

      {/* ======================= TRUST & SECURITY =================== */}
      <section className="bg-[#f7f3ea]">
        <div className="mx-auto max-w-[1200px] px-6 py-20 sm:px-10">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <ImagePlaceholder
              src="/images/zoikologia/trust-security.png"
              alt="Accounting professional reviewing documents"
              className="aspect-[4/3] w-full"
              label="Security image"
            />
            <div>
              <Eyebrow color="teal">Trust &amp; Security</Eyebrow>
              <h2 className="mt-5 font-[family-name:var(--font-serif)] text-3xl leading-tight text-[#16233d] sm:text-[2.2rem]">
                Privacy and auditability are product requirements, not add-ons.
              </h2>
              <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-slate-600">
                Tenant isolation, encryption, regional routing, and replay-ready
                audit evidence — designed to meet WCAG 2.2 AA accessibility
                across the platform.
              </p>
              <div className="mt-8">
                <OutlineButton>Visit Privacy &amp; Security</OutlineButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= FAQ ========================== */}
      <section className="bg-[#efe8d6]">
        <div className="mx-auto max-w-[1200px] px-6 py-20 sm:px-10">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-5 font-[family-name:var(--font-serif)] text-3xl text-[#16233d] sm:text-[2.2rem]">
            A few things people ask first.
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

      {/* ============================= CTA ========================== */}
      <section className="bg-[#f7f3ea]">
        <div className="mx-auto max-w-[1200px] px-6 py-20 sm:px-10">
          <div className="rounded-2xl bg-[#071a33] px-6 py-16 text-center sm:px-10">
            <div className="flex justify-center">
              <Eyebrow color="teal" center>
                Start With Governed Accounting AI
              </Eyebrow>
            </div>
            <h2 className="mt-5 font-[family-name:var(--font-serif)] text-3xl leading-tight text-white sm:text-[2.3rem]">
              See how ZoikoLogia™ fits your organization.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-slate-300">
              We&apos;re glad to walk through the platform, the governance model,
              and what&apos;s live today.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <AmberButton>Book a Demo</AmberButton>
              <OutlineButton onDark>Request Pilot</OutlineButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ------------------------------------------------------------------ */
/*  Small helpers                                                     */
/* ------------------------------------------------------------------ */

function Chevron() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

function JourneyStep({
  tone,
  label,
  icon,
}: {
  tone: "amber" | "navy";
  label: string;
  icon: React.ReactNode;
}) {
  const color = tone === "amber" ? "#d9720f" : "#16233d";
  return (
    <div className="flex items-center gap-2.5">
      <span
        className="flex h-8 w-8 items-center justify-center rounded-full border"
        style={{ borderColor: color, color }}
      >
        {icon}
      </span>
      <span
        className="text-[11px] font-bold uppercase tracking-wider"
        style={{ color }}
      >
        {label}
      </span>
    </div>
  );
}

function Dashes({ tone }: { tone: "amber" | "navy" }) {
  const color = tone === "amber" ? "#d9720f" : "#16233d";
  return (
    <span
      className="hidden h-px flex-1 lg:block"
      style={{
        backgroundImage: `repeating-linear-gradient(to right, ${color} 0 6px, transparent 6px 12px)`,
        opacity: 0.5,
        margin: "0 12px",
      }}
    />
  );
}

export default ZoikoLogiaHome;