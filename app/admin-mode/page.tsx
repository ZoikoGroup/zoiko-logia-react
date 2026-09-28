"use client";

import Image from "next/image";
import { useState } from "react";

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

const HERO_TAGS = [
  "Scoped access",
  "Reviewable change",
  "Source governance",
  "Provider controls",
  "Audit evidence",
];

const WHY_CARDS: [string, string][] = [
  ["Bounded authority", "Every control carries a scope, an owner and defined decision rights. Administrative reach is never unbounded."],
  ["Reviewable change", "Consequential changes are proposed, assessed, reviewed, approved, released and monitored — never silently applied."],
  ["Attributable evidence", "Administrative work is recorded so it stays accountable and reconstructable, without exposing records or implying guarantees."],
  ["Professional boundaries", "Configuration supports governed work. It does not replace legal, accounting, tax, audit or security judgment."],
];

const DOMAINS: [string, string, string][] = [
  ["01", "Organization & tenancy", "Organizations, workspaces, environments and business units — bounded, owned, and separated at the tenant boundary."],
  ["02", "Identity & access", "Users, groups, service identities, roles, scopes and sessions, reviewed on a defined cadence."],
  ["03", "Knowledge governance", "Sources, ontology concepts, mappings and RAG bundles governed as admitted knowledge, not free-form content."],
  ["04", "AI capability", "Models, providers, tools, prompts and evaluation gates bound to an approved purpose and environment."],
  ["05", "Data lifecycle", "Classification, retention, legal hold, deletion, export and disclosure obligations across the record's life."],
  ["06", "Operations", "Runtime health, incident state, degraded modes, provider status and escalation paths."],
  ["07", "Policy & configuration", "Draft, assessment, review, approval, release, monitoring and retirement of every policy object."],
  ["08", "Integrations", "Inbound and outbound connections, authorization scope, data path and revocation."],
  ["09", "Audit & evidence", "The append-only administrative record: who changed what, under which authority, and when."],
];

const ROLES: [string, string][] = [
  ["Organization Owner", "Holds ultimate accountability for the tenant. Assigns and revokes administrative authority."],
  ["Platform Administrator", "Configures workspaces, environments and platform-level settings within an approved scope."],
  ["Identity Administrator", "Manages users, groups, roles and session policy. Cannot approve their own privilege grants."],
  ["Source Governance Administrator", "Admits, versions and retires sources and their authority basis."],
  ["AI Model Administrator", "Manages model and provider enablement, evaluation gates and production promotion."],
  ["Integration Administrator", "Authorizes connections, defines data paths and revokes access."],
  ["Privacy / Retention Administrator", "Sets classification, retention windows, legal hold and deletion policy."],
  ["Auditor / Read-only Reviewer", "Full read access to the administrative evidence trail. No write authority at all."],
];

const DELEGATION: string[] = [
  "Every delegation action is scoped, time-boxed and recorded against the authority it supports.",
  "Scope is defined at grant time; it never widens by inheritance, import or role change.",
  "Standing delegation expires on a defined boundary and requires explicit renewal.",
  "Break-glass and maximum durations are explicit — no indefinite temporary access.",
  "Sensitive delegation requires independent approval and is disclosed to the tenant owner.",
  "Owner or authorization holders can revoke immediately; active sessions are invalidated when supported.",
];

const DUAL_CONTROL: [string, string][] = [
  ["Privileged role assignment", "Requires a second, independent approver."],
  ["Source authority promotion", "Requires source governance plus an owner review."],
  ["Model / provider production enablement", "Requires a passing evaluation gate plus approval."],
  ["Retention reduction or deletion override", "Requires privacy authority and a recorded justification."],
  ["Emergency access", "Documented trigger, defined duration, post-event review."],
];

const KNOWLEDGE_STEPS: [string, string][] = [
  ["Register & assess source", "Source publisher, authority basis, jurisdiction and version are recorded before admission."],
  ["Ontology & mapping", "Concepts, relationships and organization mapping are governed and reviewed."],
  ["RAG bundle assembly", "Eligible, versioned sources are assembled into the bundle a question may draw on."],
  ["Evaluation", "Bundle quality, coverage, conflict handling and currency are tested before release."],
  ["Release & revalidation", "Released with a review interval; revalidation is scheduled, not assumed."],
];

const CAPABILITY: [string, string][] = [
  ["Approved purpose", "Every capability is enabled for a specific, recorded purpose — not enabled in general."],
  ["Environment", "Development, staging, and production are separated, with distinct approval paths."],
  ["Data path", "Where data travels, what is retained upstream, and under which contractual terms."],
  ["Limits", "Rate, context, cost and concurrency limits are bound at the capability, not left open."],
  ["Evaluation", "Benchmark passes, quality thresholds, and regression checks gate promotion."],
  ["Lifecycle", "Proposed, piloted, approved, monitored, deprecated, retired — with a record at each stage."],
];

const DATA_CONTROLS: [string, string][] = [
  ["Data classification", "Applied at capture; drives retention, access and disclosure downstream."],
  ["Purpose limitation", "Data is used only for the purpose it was governed for. Repurposing requires new approval."],
  ["Retention", "Windows are set per class and per tenant, disclosed rather than silently applied."],
  ["Legal hold", "Suspends deletion for a defined matter, with its own approval and release record."],
  ["Deletion & export", "Both are governed actions. Exports carry an integrity signature; deletions are recorded."],
];

const CHANGE_STAGES: [string, string, string][] = [
  ["01", "Draft", "Change is authored with an owner, scope and stated intent."],
  ["02", "Impact assessment", "Affected scopes, roles, sources and downstream effects are identified."],
  ["03", "Review", "An independent reviewer examines the change against policy."],
  ["04", "Approval", "Recorded decision with reasoning; separation of duties applies where required."],
  ["05", "Scheduled release", "Applied at a defined boundary, never silently at write time."],
  ["06", "Monitor", "Post-release observation against expected effect."],
  ["07", "Rollback", "A prior version can be restored; the rollback is itself an appended event."],
  ["08", "Supersede / retire", "The prior state is preserved and marked superseded, not deleted."],
];

const DEGRADED: [string, string][] = [
  ["Provider degraded", "Reduced capability is surfaced to the user, not masked as a normal result."],
  ["Authorization expired", "The action is refused and the expiry is stated plainly."],
  ["Source unknown", "An answer is not assembled from a source whose authority cannot be established."],
  ["Security event", "Affected scope is isolated and the incident state is disclosed to the tenant."],
];

const EMERGENCY: [string, string][] = [
  ["Policy conflict", "The conflict is surfaced for human resolution; neither policy silently wins."],
  ["Emergency access", "Time-boxed, purpose-limited, and reviewed after the fact."],
  ["Rollback required", "The prior approved configuration is restorable, with the restore recorded."],
  ["Unknown provider state", "An unverified provider state is treated as unavailable, never as success."],
];

const WORKSPACE_TABS: [string, string][] = [
  ["Overview", "A synthetic control plane showing configuration state across governed domains."],
  ["Identity & Access", "Roles, scopes and delegation state — fictional identities only."],
  ["Policies", "Draft, in-review, approved and superseded policy objects."],
  ["Sources", "Admitted sources with authority basis, version and revalidation date."],
  ["Audit Evidence", "The append-only administrative record for the entries above."],
];

type Status = "ok" | "review" | "hold";

const WORKSPACE_ROWS: [string, string, Status, string][] = [
  ["Identity review cycle", "Q3 attestation", "ok", "Completed · 2 approvers recorded"],
  ["Source admission", "IFRS bundle v4", "review", "Awaiting source governance approval"],
  ["Model promotion", "Advisor model · staging", "hold", "Blocked — evaluation gate not passed"],
  ["Retention policy", "Working papers · 7y", "ok", "Approved · disclosed to tenant owner"],
  ["Integration scope", "Practice management", "review", "Scope reduction proposed, in review"],
];

const ARCHITECTURE: [string, string][] = [
  ["Platform Overview", "Admin Mode configures the governance plane every other layer operates within."],
  ["Accounting Ontology", "Admin Mode governs which concepts, mappings and versions are admitted."],
  ["RAG Source Bundles", "Bundle eligibility, assembly and revalidation are administered here."],
  ["Evaluation & Benchmarks", "Gates defined in Admin Mode determine what may reach production."],
  ["Enterprise Integrations", "Connection scope, data path and revocation are authorized here."],
  ["Ask Accounting Questions", "The capability, sources and limits available to a question are set here."],
  ["Learning & Practice Mode", "Practice scope and content admission follow the same governance."],
  ["Review Mode", "Reviewer roles, decision rights and evidence capture are configured here."],
];

const FAQS: [string, string][] = [
  ["What is Kriton™ Admin Mode?", "A governed operating layer for administering people, policy, sources, capability and lifecycle across the platform. It configures how governed work happens — it does not perform accounting work itself."],
  ["Can administrators see all accounting data?", "No. Access is bound by role, tenant and field-level permission. Administrative authority over configuration is not the same as access to content, and the two are separated deliberately."],
  ["Does Admin Mode make us compliant?", "No. It provides controls, evidence and reviewability that support a compliance programme. Compliance itself remains a determination made by qualified people in your organization."],
  ["How are AI models and providers controlled?", "Each is enabled for a recorded purpose and environment, bounded by limits, and gated on evaluation before production promotion. Enablement is never open-ended."],
  ["How are accounting sources governed?", "Sources are registered with their authority basis, jurisdiction and version, assessed before admission, assembled into bundles, evaluated, then released with a scheduled revalidation interval."],
  ["How are integrations authorized?", "Each connection declares its scope and data path, is approved against that declaration, and can be revoked immediately. Scope never widens implicitly."],
  ["Can the system approve things on our behalf?", "No. Consequential changes require human approval, and separation of duties applies where the change is privileged. Automated writes operate under policy with no silent override."],
  ["What happens during provider degradation?", "Reduced capability is disclosed to the user. A degraded or unknown state is never presented as a successful result."],
  ["How can an enterprise evaluate Admin Mode?", "Through the synthetic administration workspace and a governed pilot. Both use fictional data — no production configuration is touched during evaluation."],
];

// ─── inline SVG helpers ─────────────────────────────────────────────────────────

function Chevron({ open }: { open: boolean }) {
  return <svg viewBox="0 0 24 24" className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function Check({ className = "h-4 w-4" }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function Dot({ tone }: { tone: Status }) {
  const color = tone === "ok" ? "bg-[#0d9488]" : tone === "review" ? "bg-[#e8912a]" : "bg-rose-500";
  return <span className={`inline-block h-2 w-2 shrink-0 rounded-full ${color}`} />;
}

const eyebrowAmber = "flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#d9720f]";
const eyebrowLight = "flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#f0a54a]";
const serifH = "font-serif leading-tight";

// ─── PAGE ───────────────────────────────────────────────────────────────────────

export default function Page() {
  const [tab, setTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const amberBtn = "rounded-md px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90";

  return (
    <main className="bg-[#faf7f0] font-sans text-[#16233d] dark:bg-gray-900 dark:text-white">

      {/* ─── Hero (navy) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8 lg:py-20" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="text-white">
            <p className={eyebrowLight}>
              <span className="h-px w-6 bg-[#f0a54a]" /> Kriton™ AI Advisor · Admin Mode
            </p>
            <h1 className={`mt-5 max-w-xl text-[clamp(2rem,4.5vw,2.9rem)] ${serifH}`}>
              Govern the people, policies, sources and systems behind AI accounting work.
            </h1>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-slate-300/85">
              Admin Mode helps authorized teams configure access, policy, sources, integration, provider,
              evaluation and lifecycle controls — while keeping every consequential change reviewable
              and attributable.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#" className={amberBtn} style={{ backgroundColor: AMBER }}>Book an Admin Controls Demo</a>
              <a href="#" className="rounded-md border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10">Request a Governed Pilot</a>
            </div>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-[#f0a54a]">
              <a href="#" className="hover:underline">Review &amp; Approval Continuity →</a>
              <a href="#" className="hover:underline">Audit Threads &amp; Retention →</a>
            </div>
            <ul className="mt-7 flex flex-wrap gap-2">
              {HERO_TAGS.map((t) => (
                <li key={t} className="rounded-full bg-white/5 px-3 py-1.5 text-[11px] font-medium text-slate-300/80 ring-1 ring-white/10">
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <ImageSlot src="/images/image 119.png" alt="Authorized team configuring governed controls" ratio="aspect-[4/3]" />
        </div>
      </section>

      {/* ─── WHY ADMIN MODE ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Why Admin Mode</p>
              <h2 className={`mt-4 max-w-2xl text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>
                A governed operating system, not a settings page
              </h2>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">
                Institutional control over people, policy, data, sources and systems — authority stays bounded,
                and every consequential change stays reviewable.
              </p>
            </div>
            <ImageSlot src="/images/image 120.png" alt="Distributed team reviewing configuration" ratio="aspect-[16/10]" />
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_CARDS.map(([t, b]) => (
              <div key={t} className="rounded-xl border border-black/10 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <span className="text-[#0d9488]"><Check className="h-5 w-5" /></span>
                <h3 className="mt-3 text-sm font-bold">{t}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-slate-600 dark:text-gray-300">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ADMINISTRATIVE CONTROL MAP (navy) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto max-w-6xl text-white">
          <p className={eyebrowLight}><span className="h-px w-6 bg-[#f0a54a]" /> Administrative Control Map</p>
          <h2 className={`mt-4 max-w-2xl text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Nine governed control domains</h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-300/85">
            Each domain opens to scope, owner, decision rights and required visibility — never a bare feature list.
          </p>
          <div className="mt-10 grid items-start gap-10 lg:grid-cols-[1.4fr_1fr]">
            <ol className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {DOMAINS.map(([n, title, desc]) => (
                <li key={n} className="border-t border-white/10 pt-4">
                  <span className="font-serif text-lg text-[#f0a54a]">{n}</span>
                  <h3 className="mt-1.5 text-sm font-semibold">{title}</h3>
                  <p className="mt-1 text-[12px] leading-relaxed text-slate-300/70">{desc}</p>
                </li>
              ))}
            </ol>
            <ImageSlot src="/images/image 121.png" alt="Control domain review session" ratio="aspect-[3/4]" className="lg:sticky lg:top-8" />
          </div>
        </div>
      </section>

      {/* ─── IDENTITY & DECISION RIGHTS ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: "#f5efe0" }}>
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Identity &amp; Decision Rights</p>
              <h2 className={`mt-4 text-black text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>
                Who may view, configure, approve and administer
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-700">
                Roles are bound to scope and authority. No role inherits privilege implicitly, and no role approves
                its own grant.
              </p>
              <dl className="mt-8 divide-y divide-black/10 border-y border-black/10">
                {ROLES.map(([term, def]) => (
                  <div key={term} className="py-3.5">
                    <dt className="text-sm font-bold text-black">{term}</dt>
                    <dd className="mt-0.5 text-[13px] leading-relaxed text-slate-700">{def}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Policy &amp; Configuration Lifecycle</p>
              <h2 className={`mt-4 text-black text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>
                Propose, assess, review, approve, release, monitor, retire
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-700">
                Every policy object moves through the same governed path. Nothing reaches production by edit alone.
              </p>
              <ImageSlot src="/images/image 122.png" alt="Policy lifecycle review meeting" ratio="aspect-[4/3]" className="mt-8" />
            </div>
          </div>

          {/* Delegation + dual control */}
          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">Delegation &amp; temporary access</p>
              <ul className="mt-5 space-y-3.5 border-t border-black/10 pt-5">
                {DELEGATION.map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-0.5 text-[#0d9488]"><Check className="h-4 w-4" /></span>
                    <p className="text-[13px] leading-relaxed text-slate-700">{t}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">Separation of duties · dual control required</p>
              <dl className="mt-5 divide-y divide-black/10 border-y border-black/10">
                {DUAL_CONTROL.map(([term, def]) => (
                  <div key={term} className="grid gap-1 py-3.5 sm:grid-cols-2 sm:gap-4">
                    <dt className="text-[13px] font-semibold text-black">{term}</dt>
                    <dd className="text-[13px] leading-relaxed text-slate-600">{def}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SOURCE, ONTOLOGY & RAG GOVERNANCE ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Source, Ontology &amp; RAG Governance</p>
          <h2 className={`mt-4 max-w-2xl text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>
            Governed knowledge administration, end to end
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">
            Authority, rights, applicability, version and approval travel with every source, mapping and bundle.
          </p>
          <ol className="mt-10 grid gap-px overflow-hidden rounded-lg bg-black/10 dark:bg-gray-700 sm:grid-cols-2 lg:grid-cols-5">
            {KNOWLEDGE_STEPS.map(([title, desc], i) => (
              <li key={title} className="bg-[#faf7f0] p-5 dark:bg-gray-900">
                <span className="font-serif text-lg text-[#e8912a]">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 text-xs font-bold leading-snug">{title}</h3>
                <p className="mt-1.5 text-[11px] leading-snug text-slate-500 dark:text-gray-400">{desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ─── MODEL, PROVIDER, TOOL & INTEGRATION GOVERNANCE (navy) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto max-w-6xl text-white">
          <p className={eyebrowLight}><span className="h-px w-6 bg-[#f0a54a]" /> Model, Provider, Tool &amp; Integration Governance</p>
          <h2 className={`mt-4 max-w-2xl text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Connected capability, bounded on purpose</h2>
          <div className="mt-10 grid items-start gap-10 lg:grid-cols-2">
            <dl className="divide-y divide-white/10 border-y border-white/10">
              {CAPABILITY.map(([term, def]) => (
                <div key={term} className="py-3.5">
                  <dt className="text-sm font-semibold">{term}</dt>
                  <dd className="mt-0.5 text-[13px] leading-relaxed text-slate-300/70">{def}</dd>
                </div>
              ))}
            </dl>
            <ImageSlot src="/images/image 123.png" alt="Reviewing connected capability" ratio="aspect-[4/3]" className="lg:sticky lg:top-8" />
          </div>
        </div>
      </section>

      {/* ─── PRIVACY, RETENTION, AUDIT & EVIDENCE ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Privacy, Retention, Audit &amp; Evidence</p>
          <h2 className={`mt-4 max-w-2xl text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Data lifecycle and attributable record</h2>
          <div className="mt-10 grid items-start gap-10 lg:grid-cols-[1.3fr_1fr]">
            <dl className="divide-y divide-black/10 border-y border-black/10 dark:divide-gray-700 dark:border-gray-700">
              {DATA_CONTROLS.map(([term, def]) => (
                <div key={term} className="grid gap-1 py-4 sm:grid-cols-[180px_1fr] sm:gap-6">
                  <dt className="text-sm font-bold">{term}</dt>
                  <dd className="text-sm leading-relaxed text-slate-600 dark:text-gray-300">{def}</dd>
                </div>
              ))}
            </dl>
            <ImageSlot src="/images/image 124.png" alt="Data lifecycle walkthrough" ratio="aspect-[4/3]" className="lg:sticky lg:top-8" />
          </div>
        </div>
      </section>

      {/* ─── CHANGE MANAGEMENT · VERSIONING & ROLLBACK ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: "#f5efe0" }}>
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Change Management · Versioning &amp; Rollback</p>
          <h2 className={`mt-4 max-w-2xl text-black text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>
            Draft through retirement, nothing applied silently
          </h2>
          <div className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
            {CHANGE_STAGES.map(([n, title, desc]) => (
              <div key={n} className="border-t border-black/10 pt-4">
                <span className="font-serif text-lg text-[#e8912a]">{n}</span>
                <h3 className="mt-1.5 text-sm font-bold text-black">{title}</h3>
                <p className="mt-1 text-[12px] leading-relaxed text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INCIDENT, DEGRADED & EMERGENCY CONTROLS ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Incident, Degraded &amp; Emergency Controls</p>
          <h2 className={`mt-4 max-w-2xl text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>
            Degraded and unknown states are never shown as success
          </h2>
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400 dark:text-gray-500">Degraded &amp; incident states</p>
              <dl className="mt-5 divide-y divide-black/10 border-y border-black/10 dark:divide-gray-700 dark:border-gray-700">
                {DEGRADED.map(([term, def]) => (
                  <div key={term} className="flex gap-3 py-3.5">
                    <span className="mt-1.5"><Dot tone="hold" /></span>
                    <div>
                      <dt className="text-[13px] font-semibold">{term}</dt>
                      <dd className="mt-0.5 text-[13px] leading-relaxed text-slate-600 dark:text-gray-300">{def}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400 dark:text-gray-500">Emergency &amp; recovery states</p>
              <dl className="mt-5 divide-y divide-black/10 border-y border-black/10 dark:divide-gray-700 dark:border-gray-700">
                {EMERGENCY.map(([term, def]) => (
                  <div key={term} className="flex gap-3 py-3.5">
                    <span className="mt-1.5"><Dot tone="review" /></span>
                    <div>
                      <dt className="text-[13px] font-semibold">{term}</dt>
                      <dd className="mt-0.5 text-[13px] leading-relaxed text-slate-600 dark:text-gray-300">{def}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SYNTHETIC ADMINISTRATION WORKSPACE (navy) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto max-w-6xl text-white">
          <p className={eyebrowLight}><span className="h-px w-6 bg-[#f0a54a]" /> Synthetic Administration Workspace</p>
          <h2 className={`mt-4 max-w-2xl text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>
            See the control plane without touching production
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-300/85">
            Synthetic organization, users, sources, policies, providers and evidence only. No real names,
            credentials or customer data.
          </p>

          <div className="mt-10 overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10">
            <div className="flex gap-1 overflow-x-auto border-b border-white/10 p-2">
              {WORKSPACE_TABS.map(([label], i) => (
                <button key={label} type="button" onClick={() => setTab(i)}
                  className={`shrink-0 rounded-md px-3.5 py-2 text-xs font-medium transition-colors ${
                    tab === i ? "bg-white text-[#0f1a30]" : "text-slate-300/70 hover:bg-white/10"
                  }`}>
                  {label}
                </button>
              ))}
            </div>

            <div className="p-5 sm:p-6">
              <p className="mb-5 text-[13px] leading-relaxed text-slate-300/80">{WORKSPACE_TABS[tab][1]}</p>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[560px] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="pb-2.5 pr-4 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">Control</th>
                      <th className="pb-2.5 pr-4 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">Object</th>
                      <th className="pb-2.5 pr-4 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">State</th>
                      <th className="pb-2.5 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">Evidence</th>
                    </tr>
                  </thead>
                  <tbody>
                    {WORKSPACE_ROWS.map(([control, object, state, evidence]) => (
                      <tr key={control} className="border-b border-white/5 last:border-0">
                        <td className="py-3 pr-4 text-[13px] font-medium">{control}</td>
                        <td className="py-3 pr-4 text-[13px] text-slate-300/70">{object}</td>
                        <td className="py-3 pr-4">
                          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-2.5 py-1 text-[11px] font-medium ring-1 ring-white/10">
                            <Dot tone={state} />
                            {state === "ok" ? "Approved" : state === "review" ? "In review" : "Blocked"}
                          </span>
                        </td>
                        <td className="py-3 text-[12px] text-slate-300/60">{evidence}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-5 text-[11px] leading-relaxed text-slate-400/70">
                Synthetic demonstration data — not a professional conclusion, and not derived from any customer tenant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ARCHITECTURE RELATIONSHIPS ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Architecture Relationships</p>
          <h2 className={`mt-4 max-w-2xl text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>
            How Admin Mode connects to the rest of the platform
          </h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-lg bg-black/10 dark:bg-gray-700 sm:grid-cols-2">
            {ARCHITECTURE.map(([t, b]) => (
              <div key={t} className="bg-[#faf7f0] p-5 dark:bg-gray-900">
                <h3 className="text-sm font-bold">{t}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-slate-600 dark:text-gray-300">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: "#f5efe0" }}>
        <div className="mx-auto max-w-6xl">
          <div className="grid items-start gap-10 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Direct Answers</p>
              <h2 className={`mt-4 text-black text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Frequently asked questions</h2>
              <div className="mt-8 divide-y divide-black/10 border-y border-black/10">
                {FAQS.map(([q, a], i) => {
                  const open = openFaq === i;
                  return (
                    <div key={q}>
                      <button type="button" onClick={() => setOpenFaq(open ? null : i)} aria-expanded={open}
                        className="flex w-full items-center justify-between gap-4 py-4 text-left text-[15px] font-semibold text-black">
                        {q}<span className="text-black"><Chevron open={open} /></span>
                      </button>
                      {open && <p className="pb-4 text-[15px] leading-relaxed text-slate-600">{a}</p>}
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">Related sections</p>
              <ImageSlot src="/images/image 125.png" alt="Administrators reviewing platform controls" ratio="aspect-[3/4]" className="mt-5 lg:sticky lg:top-8" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA (navy) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto max-w-3xl text-center text-white">
          <h2 className={`mx-auto max-w-xl text-[clamp(1.6rem,3vw,2.2rem)] ${serifH}`}>
            Review the control plane before you commit
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#" className={amberBtn} style={{ backgroundColor: AMBER }}>Book an Admin Controls Demo</a>
            <a href="#" className="rounded-md border border-white/25 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10">Request a Governed Pilot</a>
          </div>
          <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-semibold text-[#f0a54a]">
            <a href="#" className="hover:underline">View Governance Framework →</a>
            <a href="#" className="hover:underline">Visit Privacy &amp; Security →</a>
          </div>
        </div>
      </section>
    </main>
  );
}