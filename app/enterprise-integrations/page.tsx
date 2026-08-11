import type { ReactNode } from "react";
import Image from "next/image";

/* ============================================================================
   ZoikoLogia — Enterprise Integrations
   Single-file page reproduction. Navy / cream alternating bands, orange accent.
   Every image uses next/image via <ImageSlot/>. Drop your PNGs into /public/images/
   at the paths below (filenames are guesses — rename src to match your assets).
   ========================================================================== */

// ── Palette (kept local so the whole page reads from one place) ──────────────
const NAVY = "#0b1a2e";
const NAVY_PANEL = "#12263d";
const CREAM = "#f3ede1";
const ORANGE = "#dd7b34";

// ── Small building blocks ────────────────────────────────────────────────────
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

// Sized image slot backed by next/image. Point `src` at your PNG in /public/images/.
// Wrapper is `relative` so `fill` works; `object-cover` keeps the crop clean.
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
const principles = [
  { t: "Explicit authorization", d: "Every connection is granted deliberately, scoped to a named purpose, and recorded." },
  { t: "Least privilege", d: "Access is the minimum the workflow needs — nothing broader is provisioned by default." },
  { t: "Context preservation", d: "Accounting meaning, trust zone and data class travel with the record end to end." },
  { t: "Human control for consequence", d: "Any action with a real-world effect waits for a person to review and approve it." },
  { t: "Attributable evidence", d: "Who, what, when and why are captured as an append-only, tamper-evident trail." },
  { t: "Reversible change", d: "Write-backs are staged and revocable, so a mistake can be rolled back cleanly." },
];

const zones = [
  { c: "#dd7b34", t: "Enterprise systems", d: "Systems of record you already run — ledgers, ERP, identity, document stores." },
  { c: "#3a6ea5", t: "Authorization boundary", d: "Where scope, consent and revocation are enforced before anything is read." },
  { c: "#2f9e6f", t: "Governed integration layer", d: "Connectors that normalize data and attach classification and provenance." },
  { c: "#8a63d2", t: "Kriton™ reasoning zone", d: "Where analysis and proposals are produced — read and reason, never write." },
  { c: "#e0b13c", t: "Human decision layer", d: "Review, approval and override, with full context in front of the approver." },
  { c: "#c9563f", t: "Evidence and operations", d: "The audit ledger, monitoring and reconciliation that keep the loop honest." },
];

const zoneNotes = [
  { t: "Every field", d: "carries its meaning, source system and last-verified time." },
  { t: "Trust zones", d: "gate what may cross between systems of record and reasoning." },
  { t: "Data classes", d: "A / B / C drive masking, retention and who may see them." },
];

const systemCategories = [
  { n: "Accounting systems", d: "General ledgers, sub-ledgers and close tooling.", tag: "Read + proposed write-back" },
  { n: "ERP and finance platforms", d: "Procure-to-pay, order-to-cash and treasury.", tag: "Scoped read" },
  { n: "Identity and access systems", d: "Directory, SSO and role sources of truth.", tag: "Verify only" },
  { n: "Document and content repositories", d: "Contracts, invoices and supporting evidence.", tag: "Read + reference" },
  { n: "Workflow and case systems", d: "Approvals, tickets and exception handling.", tag: "Read + notify" },
  { n: "Data warehouse and reporting", d: "Analytics marts and reporting layers.", tag: "Read-only" },
];

const authorizationModel = [
  { t: "Authorization retained", d: "The organisation grants access; it is never assumed by the integration." },
  { t: "Scope-scoped", d: "Each grant names the systems, fields and actions it covers — and no more." },
  { t: "Time-boxed", d: "Grants expire and must be renewed, so stale access does not accumulate." },
  { t: "Revocable", d: "Any grant can be withdrawn immediately, cutting the connection at the boundary." },
  { t: "Service identity", d: "Every request is attributable to a named service acting on a named purpose." },
  { t: "Audit trail", d: "Grants, uses and revocations are all written to the evidence ledger." },
];

const dataContract = [
  { t: "Field meaning", d: "What the value represents in accounting terms, not just its column name." },
  { t: "Trust zone", d: "Which boundary the value belongs to and where it may travel." },
  { t: "Data class", d: "A, B or C — driving masking, access and retention rules." },
  { t: "Provenance", d: "Source system, extraction time and last-verified timestamp." },
];

const separation = [
  { t: "Read-only", l: "Retrieve records for context.", r: "No change of any kind is possible." },
  { t: "Analyze / assist", l: "Reason over retrieved data.", r: "Produces findings, not actions." },
  { t: "Propose only", l: "Draft a specific change.", r: "Held for human review before anything happens." },
  { t: "Reviewed write-back", l: "Apply an approved proposal.", r: "Only after a person signs off." },
  { t: "Policy-controlled write", l: "Write within policy limits.", r: "Bounded by amount, type and system." },
  { t: "Export", l: "Move data outward.", r: "Logged, classified and rate-limited." },
];

const lifecycle = [
  "Discover", "Classify", "Design", "Configure",
  "Sandbox", "Pilot", "Approve", "Deploy",
  "Monitor", "Reconcile", "Review", "Retire",
];

const operational = [
  { t: "Conflict detection", d: "Competing writes are caught before they reach a system of record." },
  { t: "Reconciliation", d: "Balances and counts are checked against the source on a schedule." },
  { t: "Failure isolation", d: "A failing connector is contained without affecting the rest." },
  { t: "Recovery", d: "Staged changes can be replayed or rolled back to a known-good state." },
];

const changeGates = [
  { n: "Schema change", d: "Any field added, removed or retyped.", tag: "Full re-evaluation" },
  { n: "Scope change", d: "New systems, fields or actions in a grant.", tag: "Re-authorization" },
  { n: "Model or prompt change", d: "Reasoning behaviour is updated.", tag: "Regression suite" },
  { n: "Policy change", d: "Write limits or classes are adjusted.", tag: "Approval gate" },
  { n: "Connector upgrade", d: "A new version ships.", tag: "Sandbox + pilot" },
];

const behavior = [
  "Kriton retrieves only what the current task authorises, and shows its sources.",
  "Proposals arrive with the reasoning and the exact change spelled out for review.",
  "Nothing is written until a named approver signs off inside the workflow.",
  "Every step — retrieval, proposal, approval, write — lands in the evidence ledger.",
];

const docLinks = [
  { t: "Enterprise integrations", d: "Reference architecture and connector catalog." },
  { t: "Security and trust", d: "Boundaries, data classes and controls." },
  { t: "API reference", d: "Endpoints, scopes and authentication." },
  { t: "Governance model", d: "Authorization, consent and revocation." },
  { t: "Evidence and audit", d: "The append-only ledger and its guarantees." },
  { t: "Developer guides", d: "Sandbox setup, testing and rollout." },
];

const faqs = [
  { q: "What is an enterprise integration in ZoikoLogia?", a: "A governed connection to a system you already run, scoped to a named purpose and bounded by consent, classification and an audit trail." },
  { q: "Does ZoikoLogia™ write to our systems?", a: "Only through reviewed write-back. Kriton proposes a specific change; a person approves it before anything is applied." },
  { q: "Can Kriton™ act directly on a live system?", a: "No. Reasoning and action are separated — Kriton reads and proposes, humans approve, and writes are staged and reversible." },
  { q: "How are permissions controlled?", a: "By scoped, time-boxed, revocable grants tied to a service identity, with least privilege as the default." },
  { q: "How is accounting context preserved?", a: "Field meaning, trust zone, data class and provenance travel with each record through the governed layer." },
  { q: "Can an integration be paused or revoked?", a: "Yes. Any grant can be withdrawn immediately, which cuts the connection at the authorization boundary." },
  { q: "How are connector changes tested before release?", a: "Each change type triggers a matching gate — re-evaluation, re-authorization, regression tests or a sandbox-then-pilot rollout." },
];

const footerCols = [
  { h: "Platform", links: ["Overview", "Kriton AI Advisor", "Governance", "Security"] },
  { h: "Solutions", links: ["Enterprise integrations", "Compliance reports", "ROI calculator", "White papers"] },
  { h: "Resources", links: ["Documentation", "API reference", "Webinars", "Brand resources"] },
  { h: "Company", links: ["About", "Contact", "Privacy policy", "Terms"] },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export function EnterpriseIntegrations() {
  return (
    <div className="w-full bg-white font-sans text-[#0f2038] dark:bg-gray-900 dark:text-gray-100">

      {/* ═══════════ HERO ═══════════ */}
      <section style={{ backgroundColor: NAVY }} className="text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <Eyebrow onDark>Enterprise Integrations</Eyebrow>
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h1 className="text-3xl font-bold leading-tight md:text-[42px]">
                Connect enterprise systems without losing control of identity, context or evidence.
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-7 text-[#a9b8c9]">
                ZoikoLogia™ with Kriton™ is designed to connect approved accounting, finance,
                identity, workflow and data systems through controlled authorization, context
                preservation, and reviewable, attributable evidence — no exceptions.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <PrimaryButton>Request integration architecture review</PrimaryButton>
                <GhostButton>Explore integration patterns</GhostButton>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-[#8fa1b5]">
                <span>Read the integration overview →</span>
                <span>See the governance model →</span>
              </div>
            </div>
            <ImageSlot src="/images/image 61.png" alt="Integration graphic" priority className="h-64 w-full md:h-80" />
          </div>
        </div>
      </section>

      {/* ═══════════ WHY GOVERNANCE MATTERS (cream) ═══════════ */}
      <section className="bg-[#f3ede1] dark:bg-gray-900">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <Eyebrow>Design principle</Eyebrow>
          <div className="grid items-start gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">Why integration governance matters</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-[#59636f] dark:text-gray-400">
                The larger and more capable a connection is, the more it can do. Trust is established
                through explicit approvals, consent, evidence and revocation — not by starting with
                access and auditing after the fact.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-[#334053] dark:text-gray-300">
                {[
                  "Access is granted for a named purpose, not left open.",
                  "Every value keeps its source and its meaning.",
                  "People stay in control of anything with a consequence.",
                  "Evidence is created as work happens, not reconstructed later.",
                  "Any connection can be revoked in one step.",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ backgroundColor: ORANGE }} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <ImageSlot src="/images/image 62.png" alt="Governance" className="h-72 w-full" />
          </div>
        </div>
      </section>

      {/* ═══════════ INTEGRATION PRINCIPLES (navy, numbered) ═══════════ */}
      <section style={{ backgroundColor: NAVY }} className="text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <Eyebrow onDark>Why this matters</Eyebrow>
          <h2 className="text-2xl font-bold md:text-3xl">Integration principles</h2>
          <div className="mt-8 grid items-center gap-10 md:grid-cols-2">
            <ol className="space-y-5">
              {principles.map((p, i) => (
                <li key={p.t} className="flex gap-4">
                  <span className="w-8 flex-shrink-0 text-lg font-bold tabular-nums" style={{ color: ORANGE }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold">{p.t}</h3>
                    <p className="mt-1 text-sm leading-6 text-[#a9b8c9]">{p.d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <ImageSlot src="/images/image 63.png" alt="Team review" className="h-80 w-full" />
          </div>
        </div>
      </section>

      {/* ═══════════ SIX LOGICAL ZONES (navy) ═══════════ */}
      <section style={{ backgroundColor: NAVY_PANEL }} className="text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <Eyebrow onDark>Conceptual reference architecture</Eyebrow>
          <h2 className="text-2xl font-bold md:text-3xl">Six logical zones, no infrastructure detail</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#a9b8c9]">
            A reference model that shows how data, decisions and evidence move — described as trust
            zones and responsibilities, not as servers, hosts or endpoints.
          </p>
          <div className="mt-8 grid items-center gap-10 md:grid-cols-2">
            <ul className="space-y-4">
              {zones.map((z) => (
                <li key={z.t} className="flex items-start gap-3">
                  <span className="mt-1.5 inline-block h-2.5 w-2.5 flex-shrink-0 rounded-full" style={{ backgroundColor: z.c }} />
                  <div>
                    <h3 className="text-sm font-semibold">{z.t}</h3>
                    <p className="mt-0.5 text-sm leading-6 text-[#9fb0c3]">{z.d}</p>
                  </div>
                </li>
              ))}
            </ul>
            <ImageSlot src="/images/image 64.png" alt="Reference architecture" className="h-72 w-full" />
          </div>
          <div className="mt-10 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
            {zoneNotes.map((n) => (
              <div key={n.t}>
                <p className="text-sm font-semibold" style={{ color: ORANGE }}>{n.t}</p>
                <p className="mt-1 text-sm leading-6 text-[#9fb0c3]">{n.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ APPROVED SYSTEM CATEGORIES (cream, table) ═══════════ */}
      <section className="bg-[#f3ede1] dark:bg-gray-900">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <Eyebrow>Systems and workflows</Eyebrow>
          <h2 className="text-2xl font-bold md:text-3xl">Approved system categories</h2>
          <div className="mt-8 divide-y divide-[#e4dccb] border-y border-[#e4dccb] dark:divide-gray-700 dark:border-gray-700">
            {systemCategories.map((s) => (
              <div key={s.n} className="grid items-center gap-2 py-4 md:grid-cols-[1fr_1.4fr_auto] md:gap-6">
                <p className="font-semibold">{s.n}</p>
                <p className="text-sm text-[#59636f] dark:text-gray-400">{s.d}</p>
                <div className="md:justify-self-end"><Tag>{s.tag}</Tag></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CONSENT / LEAST PRIVILEGE / REVOCATION (navy) ═══════════ */}
      <section style={{ backgroundColor: NAVY }} className="text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <Eyebrow onDark>Authorization model</Eyebrow>
          <h2 className="text-2xl font-bold md:text-3xl">Consent, least privilege and revocation</h2>
          <div className="mt-8 grid items-start gap-10 md:grid-cols-2">
            <ul className="space-y-4">
              {authorizationModel.map((a) => (
                <li key={a.t} className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
                  <h3 className="text-sm font-semibold" style={{ color: ORANGE }}>{a.t}</h3>
                  <p className="mt-1 text-sm leading-6 text-[#a9b8c9]">{a.d}</p>
                </li>
              ))}
            </ul>
            <ImageSlot src="/images/image 65.png" alt="Consent and revocation" className="h-80 w-full" />
          </div>
        </div>
      </section>

      {/* ═══════════ GOVERNED DATA CONTRACT (cream, 4 cards) ═══════════ */}
      <section className="bg-[#f3ede1] dark:bg-gray-900">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <Eyebrow>Governed data contract</Eyebrow>
          <h2 className="text-2xl font-bold md:text-3xl">Accounting meaning travels with the data</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {dataContract.map((c) => (
              <div key={c.t} className="rounded-xl border border-[#e4dccb] bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
                <h3 className="text-sm font-semibold">{c.t}</h3>
                <p className="mt-2 text-sm leading-6 text-[#59636f] dark:text-gray-400">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ SEPARATION OF DUTIES (navy, table) ═══════════ */}
      <section style={{ backgroundColor: NAVY_PANEL }} className="text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <Eyebrow onDark>Separation of duties</Eyebrow>
          <h2 className="text-2xl font-bold md:text-3xl">Retrieval, proposal, approval and write-back are separate</h2>
          <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
            {separation.map((s) => (
              <div key={s.t} className="grid gap-2 py-4 md:grid-cols-[0.8fr_1fr_1fr] md:gap-6">
                <p className="font-semibold">{s.t}</p>
                <p className="text-sm text-[#a9b8c9]">{s.l}</p>
                <p className="text-sm text-[#9fb0c3]">{s.r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ LIFECYCLE — TWELVE STAGES (navy grid) ═══════════ */}
      <section style={{ backgroundColor: NAVY }} className="text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <Eyebrow onDark>Integration lifecycle</Eyebrow>
          <h2 className="text-2xl font-bold md:text-3xl">Twelve stages, discovery through retirement</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {lifecycle.map((stage, i) => (
              <div key={stage} className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
                <span className="text-xs font-bold tabular-nums" style={{ color: ORANGE }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-1 text-sm font-semibold">{stage}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ ROLLOUT (navy, image band) ═══════════ */}
      <section style={{ backgroundColor: NAVY }} className="text-white">
        <div className="mx-auto max-w-6xl px-6 pb-16 md:pb-20">
          <div className="relative overflow-hidden rounded-2xl">
            <ImageSlot src="/images/Paragraph+Overlay+Border (3).png" alt="Phased rollout" sizes="(max-width: 1152px) 100vw, 1152px" className="h-56 w-full rounded-2xl md:h-72" />
            <div className="pointer-events-none absolute inset-0 flex flex-col justify-center bg-gradient-to-r from-black/70 to-transparent p-8">
              <Eyebrow onDark>Rollout</Eyebrow>
              <h2 className="max-w-md text-2xl font-bold md:text-3xl">Sandbox, pilot and phased rollout</h2>
              <p className="mt-3 max-w-md text-sm leading-7 text-[#c3d0dd]">
                Nothing reaches production untested. Every connector moves through an isolated
                sandbox, a limited pilot, and a phased, reversible rollout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ OPERATIONAL MATURITY (navy) ═══════════ */}
      <section style={{ backgroundColor: NAVY_PANEL }} className="text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <Eyebrow onDark>Operational maturity</Eyebrow>
          <h2 className="text-2xl font-bold md:text-3xl">Conflict, reconciliation, failure and recovery</h2>
          <div className="mt-8 grid items-center gap-10 md:grid-cols-2">
            <ul className="space-y-4">
              {operational.map((o) => (
                <li key={o.t} className="flex items-start gap-3">
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ backgroundColor: ORANGE }} />
                  <div>
                    <h3 className="text-sm font-semibold">{o.t}</h3>
                    <p className="mt-0.5 text-sm leading-6 text-[#9fb0c3]">{o.d}</p>
                  </div>
                </li>
              ))}
            </ul>
            <ImageSlot src="/images/image 67.png" alt="Operations" className="h-72 w-full" />
          </div>
        </div>
      </section>

      {/* ═══════════ PRIVACY, SECURITY & EVIDENCE (cream) ═══════════ */}
<section className="bg-[#f3ede1] dark:bg-gray-900">
  <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
    <Eyebrow>Privacy, security and evidence</Eyebrow>
    <h2 className="max-w-lg text-2xl font-bold md:text-3xl">
      Minimum-necessary data, attributable evidence
    </h2>

    {/* four numbered record steps */}
    <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
      {[
        { t: "Connection record", d: "Category, environment, tenant, owner, authorization method and status." },
        { t: "Mapping record", d: "Fields, transformations, ontology concepts, version and approver." },
        { t: "Operation record", d: "Request/event ID, input reference, result and error state." },
        { t: "Human decision record", d: "Reviewer, decision, changes, reason and approved operation." },
      ].map((r, i) => (
        <div key={r.t} className="text-center">
          <div
            className="mx-auto flex h-14 w-14 items-center justify-center rounded-full"
            style={{ backgroundColor: NAVY }}
          >
            <span className="text-lg font-bold" style={{ color: ORANGE }}>{i + 1}</span>
          </div>
          <h3 className="mt-4 text-sm font-bold">{r.t}</h3>
          <p className="mt-1 text-xs leading-5 text-[#59636f] dark:text-gray-400">{r.d}</p>
        </div>
      ))}
    </div>

    {/* band: left labels · image · right labels */}
    <div className="mt-12 rounded-xl bg-[#ece3d2] p-4 dark:bg-gray-800 md:p-6">
      <div className="grid items-center gap-6 md:grid-cols-[1fr_1.3fr_1fr]">
        {/* left column */}
        <div className="divide-y divide-[#d8cbb4] dark:divide-gray-700">
          {[
            { t: "Data minimization", d: "Only approved data required for the workflow is accessed or transferred." },
            { t: "Sensitive fields", d: "Restricted fields excluded, redacted or subject to additional approval." },
          ].map((it) => (
            <div key={it.t} className="py-4 first:pt-0 last:pb-0">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2.5 w-2.5 flex-shrink-0 rounded-[2px] bg-[#2f9e6f]" />
                <h3 className="text-sm font-bold">{it.t}</h3>
              </div>
              <p className="mt-1 text-xs leading-5 text-[#59636f] dark:text-gray-400">{it.d}</p>
            </div>
          ))}
        </div>

        {/* center image */}
        <ImageSlot
          src="/images/image 68.png"
          alt="Privacy, security and evidence"
          sizes="(max-width: 768px) 100vw, 420px"
          className="h-48 w-full md:h-64"
        />

        {/* right column */}
        <div className="divide-y divide-[#d8cbb4] dark:divide-gray-700">
          {[
            { t: "Secrets and keys", d: "Credentials protected, rotated and revoked; never exposed after creation." },
            { t: "Analytics", d: "Routine analytics never capture accounting payloads or secrets." },
          ].map((it) => (
            <div key={it.t} className="py-4 first:pt-0 last:pb-0">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2.5 w-2.5 flex-shrink-0 rounded-[2px] bg-[#2f9e6f]" />
                <h3 className="text-sm font-bold">{it.t}</h3>
              </div>
              <p className="mt-1 text-xs leading-5 text-[#59636f] dark:text-gray-400">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

      {/* ═══════════ EVALUATIONS AND CHANGE GATES (cream, table) ═══════════ */}
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <Eyebrow>Evaluations and change gates</Eyebrow>
          <h2 className="text-2xl font-bold md:text-3xl">Every connector change is tested before release</h2>
          <div className="mt-8 divide-y divide-[#e4dccb] border-y border-[#e4dccb] dark:divide-gray-700 dark:border-gray-700">
            {changeGates.map((c) => (
              <div key={c.n} className="grid items-center gap-2 py-4 md:grid-cols-[1fr_1.4fr_auto] md:gap-6">
                <p className="font-semibold">{c.n}</p>
                <p className="text-sm text-[#59636f] dark:text-gray-400">{c.d}</p>
                <div className="md:justify-self-end"><Tag>{c.tag}</Tag></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ BEHAVIOR IN USE (navy) ═══════════ */}
      <section style={{ backgroundColor: NAVY }} className="text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <Eyebrow onDark>Behavior in use</Eyebrow>
          <h2 className="text-2xl font-bold md:text-3xl">How this behaves in realistic work</h2>
          <div className="mt-8 grid items-center gap-10 md:grid-cols-2">
            <ul className="space-y-4">
              {behavior.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm leading-6 text-[#c3d0dd]">
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ backgroundColor: ORANGE }} />
                  {b}
                </li>
              ))}
            </ul>
            <ImageSlot src="/images/image 69.png" alt="In use" className="h-72 w-full" />
          </div>
        </div>
      </section>

      {/* ═══════════ DOCS & INTEGRATIONS (cream, link grid) ═══════════ */}
      <section className="bg-[#f3ede1] dark:bg-gray-900">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <Eyebrow>Documentation and integrations</Eyebrow>
          <h2 className="text-2xl font-bold md:text-3xl">Route to implementation detail</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {docLinks.map((d) => (
              <a
                key={d.t}
                href="#"
                className="group rounded-xl border border-[#e4dccb] bg-white p-5 transition-colors hover:border-[#dd7b34] dark:border-gray-700 dark:bg-gray-800"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold">{d.t}</h3>
                  <span className="text-[#dd7b34] transition-transform group-hover:translate-x-0.5">→</span>
                </div>
                <p className="mt-2 text-sm text-[#59636f] dark:text-gray-400">{d.d}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ FAQ (cream, accordion) ═══════════ */}
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <Eyebrow>Support and onboarding</Eyebrow>
          <h2 className="text-2xl font-bold md:text-3xl">Frequently asked questions</h2>
          <div className="mt-8 grid gap-10 md:grid-cols-[1.4fr_1fr]">
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
            <ImageSlot src="/images/image 70.png" alt="Onboarding" className="h-64 w-full md:h-full md:min-h-[16rem]" />
          </div>
        </div>
      </section>

      {/* ═══════════ FOOTER (navy) ═══════════ */}
      <footer style={{ backgroundColor: NAVY }} className="text-white">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(4,1fr)]">
            <div>
              <p className="text-lg font-bold">
                Zoiko<span style={{ color: ORANGE }}>Logia</span>™
              </p>
              <p className="mt-1 text-xs text-[#8fa1b5]">with Kriton™</p>
              <p className="mt-4 max-w-xs text-sm leading-6 text-[#9fb0c3]">
                Governed AI for accounting and finance — controlled access, preserved context and
                attributable evidence.
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

export default EnterpriseIntegrations;