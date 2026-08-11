import type { ReactNode } from "react";
import Image from "next/image";

/* ============================================================================
   ZoikoLogia — Governance Overview
   Navy / cream alternating bands, orange accent. Every image is a next/image
   slot pointing at /images/*.png — drop your PNGs into /public/images/.
   ========================================================================== */

const NAVY = "#0b1a2e";
const NAVY_PANEL = "#12263d";
const ORANGE = "#dd7b34";

// ── Building blocks ──────────────────────────────────────────────────────────
function Eyebrow({ children, onDark = false }: { children: ReactNode; onDark?: boolean }) {
  return (
    <p
      className={`mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] ${
        onDark ? "text-[#9fb2c6]" : "text-[#7c7360] dark:text-gray-400"
      }`}
    >
      <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ORANGE }} />
      {children}
    </p>
  );
}

function ImageSlot({
  src,
  alt = "",
  className = "",
  sizes = "(max-width: 768px) 100vw, 600px",
  priority = false,
}: {
  src: string;
  alt?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden rounded-xl ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
    </div>
  );
}

function PrimaryButton({ children }: { children: ReactNode }) {
  return (
    <button
      className="rounded-md px-5 py-3 text-sm font-semibold text-white transition-colors hover:brightness-110"
      style={{ backgroundColor: ORANGE }}
    >
      {children}
    </button>
  );
}

function GhostButton({ children }: { children: ReactNode }) {
  return (
    <button className="rounded-md border border-white/25 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">
      {children}
    </button>
  );
}

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="whitespace-nowrap rounded-full border border-[#e4dccb] bg-white px-3 py-1 text-xs font-medium text-[#59636f] dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
      {children}
    </span>
  );
}

// ── Data ─────────────────────────────────────────────────────────────────────
const heroFeatures = [
  { t: "Source authority", d: "Answers trace to authoritative, applicable sources." },
  { t: "Professional standards", d: "Work is held to accounting and audit standards." },
  { t: "Quality gates", d: "Evaluations run across retrieval, reasoning and output." },
  { t: "Evidence continuity", d: "An append-only trail follows every step." },
  { t: "Release control", d: "Every change is gated before and after deployment." },
];

const controlZones = [
  "Intake", "Classification", "Sourcing", "Reasoning", "Review",
  "Approval", "Write-back", "Evidence", "Monitoring",
];

const lifecycle = [
  "Intake", "Classify", "Design", "Validate", "Configure",
  "Evaluate", "Approve", "Deploy", "Monitor", "Retire",
];

const authorizationTable = [
  { cap: "Use-case classification", does: "Suggest a class from intake signals.", decide: "Confirm the class and its authorization.", std: "Least privilege by default" },
  { cap: "Source validation", does: "Check authority and applicability.", decide: "Approve authority, applicability and permitted use.", std: "Authoritative sources only" },
  { cap: "Evaluation cadence", does: "Run evaluations and surface findings.", decide: "Set thresholds and accept results.", std: "Evaluation before release" },
  { cap: "Production release", does: "Stage a release with the change.", decide: "Approve release or reject with delegated review.", std: "Gated change control" },
  { cap: "Consequential action", does: "Prepare a proposal with context.", decide: "Review and authorize where professional, financial, legal or operational consequence exists.", std: "Human control for consequence" },
  { cap: "Feedback capture", does: "Record and route feedback.", decide: "Decide what becomes a control change.", std: "Attributable evidence" },
  { cap: "Professional judgment", does: "Summarize and cite the basis.", decide: "Reach the accounting, tax, audit or reporting conclusion.", std: "Professional standards" },
];

const destinations = [
  { t: "Governance overview", q: "How does governance hold together end to end?", here: true },
  { t: "Quality & testing", q: "How is quality evaluated before release?" },
  { t: "Responsible AI", q: "Which principles guide development and use?" },
  { t: "Privacy & security", q: "How is data minimized, masked and protected?" },
  { t: "Evidence & audit", q: "What is recorded, and can it be trusted?" },
  { t: "Release & change", q: "How do changes reach production safely?" },
  { t: "Access & roles", q: "Who can see and do what, and why?" },
  { t: "Incident response", q: "What happens when a control fails?" },
];

const domains = [
  {
    ey: "Source authority",
    h: "Start with authority, applicability and provenance — not fluent output.",
    b: "A source is usable only when its authority, scope, jurisdiction and effective period are established. A citation does not itself prove professional sufficiency or legal applicability.",
    items: ["Authority and applicability are checked before use.", "Effective dates and jurisdiction are recorded.", "Provenance travels with the answer."],
    img: "/images/gov-source-authority.png",
    side: "right",
  },
  {
    ey: "AI safety",
    h: "Harmful, insecure and prohibited uses are anticipated before they occur.",
    b: "The platform applies use restrictions and can refuse or escalate requests that conflict with approved policies. Prompt-injection defenses, source separation and least-privilege access are enforced by design.",
    items: ["Prohibited uses are blocked or escalated.", "Injected content is isolated from instructions.", "Access stays scoped to the task."],
    img: "/images/gov-ai-safety.png",
    side: "left",
  },
  {
    ey: "Platform limits & escalation",
    h: "When evidence, permissions or professional sufficiency is inadequate, the platform says so.",
    b: "Insufficient evidence, conflicting authority, stale material, unsupported jurisdictions and inadequate integration produce an explicit answer — not silent failure or fabricated support. All then cleanly route to a human reviewer.",
    items: ["Gaps are stated, not filled.", "Escalation reaches a named reviewer.", "The path forward is explicit."],
    img: "/images/gov-limits.png",
    side: "right",
  },
  {
    ey: "Quality & evaluation",
    h: "Quality is evaluated across sources, retrieval, calculations and workflow.",
    b: "Evaluation covers source access and citation quality, retrieval and calculation traceability, and workflow actions. Adverse or borderline results route to review, and the standard holds across releases.",
    items: ["Retrieval and math are traceable.", "Borderline results are reviewed.", "The bar holds release to release."],
    img: "/images/gov-quality.png",
    side: "left",
  },
  {
    ey: "Release & change",
    h: "Every production change passes defined gates before and after deployment.",
    b: "Scope and impact assessment, evaluation, governance review and readiness review precede deployment; post-release monitoring, reconciliation and rollback follow it. A failing gate stops the release.",
    items: ["Gates precede and follow deployment.", "Monitoring watches for regressions.", "Rollback is always available."],
    img: "/images/gov-release.png",
    side: "right",
  },
  {
    ey: "Event management",
    h: "Incidents and control failures are handled through a seven-stage structured response.",
    b: "Detection, triage, containment, investigation, remediation, recovery and closure are sequenced and evidence-bound. Serious matters are coordinated with legal, privacy, security and communications.",
    items: ["A defined sequence, every time.", "Evidence is bound to the incident.", "Serious events are coordinated."],
    img: "/images/gov-events.png",
    side: "left",
  },
  {
    ey: "Responsible AI",
    h: "Eight principles guide development, deployment and use.",
    b: "Accountability, source authority, professional boundaries, privacy and security, transparency, safety and reliability, fair and appropriate use, and continuous governance operationalise how the platform is built and run.",
    items: ["Principles are enforced, not aspirational.", "They cover build and run.", "Governance is continuous."],
    img: "/images/gov-responsible-ai.png",
    side: "right",
  },
];

const scenarios = [
  { t: "New accounting policy moved to a use case", d: "Classified, sourced and gated before it can inform output." },
  { t: "Model or provider version change", d: "Re-evaluated through the change gates before release." },
  { t: "Prompt injection through shared material", d: "Isolated at the boundary; instructions are not executed." },
  { t: "Corporate action with material impact", d: "Held for human authorization as a consequential action." },
  { t: "External advisor needs access", d: "Granted a scoped, time-boxed, revocable role." },
];

const faqs = [
  { q: "What does governance cover?", a: "The full path from use-case intake to retirement — sources, reasoning, review, approval, write-back, evidence and monitoring." },
  { q: "Is ZoikoLogia™ a fully autonomous accounting system?", a: "No. It reasons and proposes; qualified people decide anything with professional, financial, legal or operational consequence." },
  { q: "Does governance guarantee that every answer is correct?", a: "It guarantees controls, evidence and escalation — not omniscience. Where sufficiency is inadequate, the platform says so." },
  { q: "How are new sources approved?", a: "By establishing authority, applicability, jurisdiction and effective period before the source can inform any output." },
  { q: "Can we see and export the evidence?", a: "Yes. Every governed action is written to an append-only ledger that is attributable and exportable for audit." },
  { q: "How are model or prompt changes controlled?", a: "They pass the change gates — re-evaluation, governance review and readiness review — before reaching production." },
  { q: "Can customers configure governance?", a: "Thresholds, roles, permitted uses and escalation paths are configurable within the platform's control standards." },
];

const footerCols = [
  { h: "Platform", links: ["Overview", "Kriton AI Advisor", "Governance", "Privacy & Security", "Pricing"] },
  { h: "Governance", links: ["Overview", "Quality & testing", "Responsible AI", "Evidence & audit", "Release & change"] },
  { h: "Solutions", links: ["By role", "By workflow", "Enterprise integrations", "Compliance reports"] },
  { h: "Resources", links: ["Documentation", "API reference", "White papers", "Webinars"] },
  { h: "Company", links: ["About", "Contact", "Careers", "News"] },
  { h: "Legal", links: ["Privacy policy", "Terms", "Data protection", "Cookie settings"] },
];

// ── Reusable heading ─────────────────────────────────────────────────────────
function SectionHead({ eyebrow, title, intro, onDark = false }: { eyebrow: string; title: string; intro?: string; onDark?: boolean }) {
  return (
    <>
      <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>
      <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>
      {intro && (
        <p className={`mt-4 max-w-2xl text-sm leading-7 ${onDark ? "text-[#a9b8c9]" : "text-[#59636f] dark:text-gray-400"}`}>
          {intro}
        </p>
      )}
    </>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export function GovernanceOverview() {
  return (
    <div className="w-full bg-white font-sans text-[#0f2038] dark:bg-gray-900 dark:text-gray-100">

      {/* ═══════════ HERO ═══════════ */}
      <section style={{ backgroundColor: NAVY }} className="text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <Eyebrow onDark>Governance Overview</Eyebrow>
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h1 className="text-3xl font-bold leading-tight md:text-[42px]">
                Govern AI accounting intelligence across sources, systems, decisions and change.
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-7 text-[#a9b8c9]">
                ZoikoLogia™ with Kriton™ brings source authority, professional boundaries, quality
                gates, human review, attributable continuity, release control and event oversight
                into one governed operating model.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <PrimaryButton>Explore the governance framework</PrimaryButton>
                <GhostButton>See the governance model</GhostButton>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-[#8fa1b5]">
                <span>View Privacy &amp; Security →</span>
                <span>Read the FAQ →</span>
              </div>
            </div>
            <ImageSlot src="/images/gov-hero.png" alt="Governance overview" priority className="h-64 w-full md:h-80" />
          </div>

          {/* feature row */}
          <div className="mt-14 grid gap-6 border-t border-white/10 pt-10 sm:grid-cols-3 lg:grid-cols-5">
            {heroFeatures.map((f) => (
              <div key={f.t}>
                <span className="inline-block h-6 w-6 rounded-md" style={{ backgroundColor: ORANGE }} />
                <h3 className="mt-3 text-sm font-semibold">{f.t}</h3>
                <p className="mt-1 text-xs leading-5 text-[#9fb0c3]">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ ARCHITECTURE (cream) ═══════════ */}
      <section className="bg-[#f3ede1] dark:bg-gray-900">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <Eyebrow>Governance architecture</Eyebrow>
          <div className="grid items-start gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">Governance extends across the complete AI-enabled accounting workflow</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-[#59636f] dark:text-gray-400">
                How control layers address every object that can influence an AI-enabled accounting
                outcome — from the use case itself to the evidence record created after it completes.
              </p>
              <div className="mt-6 rounded-xl border border-[#e4dccb] bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
                <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: ORANGE }}>
                  Nine governed control zones
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {controlZones.map((z) => (
                    <Tag key={z}>{z}</Tag>
                  ))}
                </div>
              </div>
              <p className="mt-4 text-xs text-[#7c7360] dark:text-gray-500">
                Each zone carries its own controls, evidence and the decisions people must make.
              </p>
            </div>
            <ImageSlot src="/images/gov-architecture.png" alt="Governance architecture" className="h-72 w-full" />
          </div>
        </div>
      </section>

      {/* ═══════════ LIFECYCLE (navy) ═══════════ */}
      <section style={{ backgroundColor: NAVY }} className="text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <SectionHead
            onDark
            eyebrow="Operating lifecycle"
            title="Ten governance stages from use-case intake through retirement"
            intro="Every use case passes through a controlled lifecycle. Classification, design, validation, approval, staged release, operation, response, recalibration and retirement are all evidence-bound stages."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {lifecycle.map((stage, i) => (
              <div key={stage} className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
                <span className="text-xs font-bold tabular-nums" style={{ color: ORANGE }}>{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-1 text-sm font-semibold">{stage}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#9fb0c3]">Governed intake</p>
              <p className="mt-2 text-sm leading-6 text-[#a9b8c9]">Use case, class, authority and permitted use are established before any work begins.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#9fb0c3]">Controlled retirement</p>
              <p className="mt-2 text-sm leading-6 text-[#a9b8c9]">Is the proposal sufficiently defined to advance? Use cases retire under review.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ AUTHORIZATION TABLE (cream) ═══════════ */}
      <section className="bg-[#f3ede1] dark:bg-gray-900">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <SectionHead
            eyebrow="Authorization model"
            title="What the platform may do — and what qualified humans must decide"
          />
          {/* header row (md+) */}
          <div className="mt-8 hidden gap-6 border-b border-[#d8cdb6] pb-3 text-xs font-semibold uppercase tracking-wider text-[#7c7360] md:grid md:grid-cols-[1fr_1.3fr_1.3fr_1fr] dark:border-gray-700 dark:text-gray-400">
            <span>Capability</span><span>What the platform does</span><span>What qualified humans decide</span><span>Governance standard</span>
          </div>
          <div className="divide-y divide-[#e4dccb] border-b border-[#e4dccb] dark:divide-gray-700 dark:border-gray-700">
            {authorizationTable.map((r) => (
              <div key={r.cap} className="grid gap-1 py-4 md:grid-cols-[1fr_1.3fr_1.3fr_1fr] md:gap-6">
                <p className="font-semibold">{r.cap}</p>
                <p className="text-sm text-[#59636f] dark:text-gray-400">{r.does}</p>
                <p className="text-sm text-[#59636f] dark:text-gray-400">{r.decide}</p>
                <p className="text-sm font-medium" style={{ color: ORANGE }}>{r.std}</p>
              </div>
            ))}
          </div>
          <ImageSlot src="/images/gov-authorization-band.png" alt="Governed workflow" sizes="(max-width: 1152px) 100vw, 1152px" className="mt-10 h-48 w-full md:h-64" />
        </div>
      </section>

      {/* ═══════════ DESTINATIONS (light) ═══════════ */}
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <SectionHead
            eyebrow="Governance destinations"
            title="Eight governance destinations — each answers a distinct control question"
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {destinations.map((d) =>
              d.here ? (
                <div key={d.t} className="rounded-xl border border-white/10 p-5 text-white" style={{ backgroundColor: NAVY }}>
                  <span className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: ORANGE }}>You are here</span>
                  <h3 className="mt-2 text-sm font-bold">{d.t}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#a9b8c9]">{d.q}</p>
                </div>
              ) : (
                <a key={d.t} href="#" className="group rounded-xl border border-[#e4dccb] bg-white p-5 transition-colors hover:border-[#dd7b34] dark:border-gray-700 dark:bg-gray-800">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold">{d.t}</h3>
                    <span className="text-[#dd7b34] transition-transform group-hover:translate-x-0.5">→</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-[#59636f] dark:text-gray-400">{d.q}</p>
                </a>
              )
            )}
          </div>
        </div>
      </section>

      {/* ═══════════ DOMAINS (alternating image + text) ═══════════ */}
      <section style={{ backgroundColor: NAVY_PANEL }} className="text-white">
        <div className="mx-auto max-w-6xl px-6 pt-16 md:pt-20">
          <SectionHead
            onDark
            eyebrow="Domain overview"
            title="Seven governance domains — each with its key controls and evidence cue"
          />
        </div>
        <div className="mx-auto max-w-6xl space-y-16 px-6 py-16 md:space-y-20 md:py-20">
          {domains.map((dm) => (
            <div key={dm.ey} className="grid items-center gap-10 md:grid-cols-2">
              <div className={dm.side === "left" ? "md:order-2" : ""}>
                <Eyebrow onDark>{dm.ey}</Eyebrow>
                <h3 className="text-xl font-bold md:text-2xl">{dm.h}</h3>
                <p className="mt-4 text-sm leading-7 text-[#a9b8c9]">{dm.b}</p>
                <ul className="mt-5 space-y-2">
                  {dm.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-sm leading-6 text-[#c3d0dd]">
                      <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ backgroundColor: ORANGE }} />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
              <ImageSlot src={dm.img} alt={dm.ey} className={`h-64 w-full md:h-72 ${dm.side === "left" ? "md:order-1" : ""}`} />
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════ PUBLIC ARTIFACTS (image band) ═══════════ */}
      <section style={{ backgroundColor: NAVY }} className="text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="relative overflow-hidden rounded-2xl">
            <ImageSlot src="/images/gov-artifacts.png" alt="Public governance artifacts" sizes="(max-width: 1152px) 100vw, 1152px" className="h-56 w-full rounded-2xl md:h-72" />
            <div className="pointer-events-none absolute inset-0 flex flex-col justify-center bg-gradient-to-r from-black/75 to-transparent p-8">
              <Eyebrow onDark>Public governance artifacts</Eyebrow>
              <h2 className="max-w-lg text-2xl font-bold md:text-3xl">Every public artifact carries scope, version, as-of date and owner.</h2>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ SCENARIOS (cream) ═══════════ */}
      <section className="bg-[#f3ede1] dark:bg-gray-900">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <SectionHead
            eyebrow="Synthetic governance scenarios"
            title="How the governance system behaves across representative accounting and AI risk situations"
          />
          <div className="mt-8 grid gap-10 md:grid-cols-[1.3fr_1fr]">
            <div className="divide-y divide-[#e4dccb] border-y border-[#e4dccb] dark:divide-gray-700 dark:border-gray-700">
              {scenarios.map((s) => (
                <details key={s.t} className="group py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold">
                    {s.t}
                    <span className="ml-4 text-[#dd7b34] transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-[#59636f] dark:text-gray-400">{s.d}</p>
                </details>
              ))}
            </div>
            <ImageSlot src="/images/gov-scenarios.png" alt="Governance scenarios" className="h-64 w-full md:h-full md:min-h-[16rem]" />
          </div>
        </div>
      </section>

      {/* ═══════════ FAQ (cream) ═══════════ */}
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
            <div>
              <Eyebrow>Frequently asked</Eyebrow>
              <h2 className="text-2xl font-bold md:text-3xl">Common governance questions — with scope and boundaries.</h2>
              <p className="mt-4 max-w-md text-sm leading-7 text-[#59636f] dark:text-gray-400">
                Answers are intentionally bounded: they say what the controls cover, where a person
                decides, and what governance guarantees — and does not.
              </p>
            </div>
            <div className="divide-y divide-[#e4dccb] border-y border-[#e4dccb] dark:divide-gray-700 dark:border-gray-700">
              {faqs.map((f) => (
                <details key={f.q} className="group py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold">
                    {f.q}
                    <span className="ml-4 text-[#dd7b34] transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-[#59636f] dark:text-gray-400">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ FOOTER (navy) ═══════════ */}
      <footer style={{ backgroundColor: NAVY }} className="text-white">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-[1.4fr_repeat(6,1fr)]">
            <div className="lg:col-span-1">
              <p className="text-lg font-bold">
                Zoiko<span style={{ color: ORANGE }}>Logia</span>™
              </p>
              <p className="mt-1 text-xs text-[#8fa1b5]">with Kriton™</p>
              <p className="mt-4 max-w-xs text-sm leading-6 text-[#9fb0c3]">
                Governed AI for accounting and finance — source authority, professional boundaries and
                attributable evidence, end to end.
              </p>
            </div>
            {footerCols.map((col) => (
              <div key={col.h}>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#8fa1b5]">{col.h}</p>
                <ul className="mt-4 space-y-2 text-sm text-[#b7c4d2]">
                  {col.links.map((l) => (
                    <li key={l}><a href="#" className="transition-colors hover:text-white">{l}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-[#8fa1b5] sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Zoiko Group. All rights reserved.</p>
            <p>ZoikoLogia™ and Kriton™ are trademarks of Zoiko Group.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default GovernanceOverview;