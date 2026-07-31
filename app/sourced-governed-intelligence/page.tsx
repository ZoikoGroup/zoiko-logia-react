"use client";

import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  ArrowUpRight,
  Plus,
  Minus,
  Check,
  ShieldCheck,
  ScrollText,
  Scale,
  Layers,
} from "lucide-react";

/*
  ZoikoLogia — Kriton page body (app/.../page.tsx)
  Site header/nav and footer are omitted here — they come from the shared layout.
  <Photo/> blocks are reserved image slots; pass a `src` prop to drop in a real image,
  otherwise the icon placeholder is shown.
  Brand tokens: cream #faf7f0 · navy #0f1a30 · amber #e8912a · teal #0d9488 · serif headings
*/

// ---- reusable image placeholder -------------------------------------------
function Photo({
  className = "",
  label = "",
  tone = "cream",
}: {
  className?: string;
  label?: string;
  tone?: "cream" | "navy";
}) {
  const base =
    tone === "navy"
      ? "bg-[#16233d] text-[#faf7f0]/40 ring-1 ring-white/10"
      : "bg-[#efe9dc] text-[#0f1a30]/30 ring-1 ring-[#0f1a30]/10";
  return (
    <div className={`relative overflow-hidden rounded-lg ${base} ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src=""
        alt={label || "photograph"}
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
}

function Eyebrow({
  children,
  tone = "light",
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  const c = tone === "dark" ? "text-[#e8912a]" : "text-[#0d9488]";
  return (
    <p className={`mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] ${c}`}>
      {children}
    </p>
  );
}

function TaskCard({ title, desc, link }: { title: string; desc: string; link: string }) {
  return (
    <div className="flex flex-col rounded-lg border border-[#0f1a30]/10 bg-white p-5">
      <h3 className="text-sm font-semibold">{title}</h3>
      <p className="mt-1.5 flex-1 text-[13px] leading-relaxed text-[#0f1a30]/60">{desc}</p>
      <a
        href="#"
        className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#0d9488] hover:text-[#12b3a6]"
      >
        {link} <ArrowRight className="h-3.5 w-3.5" />
      </a>
    </div>
  );
}

// ---- data ------------------------------------------------------------------
const capabilities: [string, string][] = [
  ["Source admission", "Governance Framework"],
  ["Context control", "Accounting Ontology"],
  ["Evidence visibility", "Audit Evidence Ledger"],
  ["Conflict handling", "Platform Limits & Escalation"],
  ["Human decision rights", "Professional Boundaries"],
];

const stages: [string, string, string][] = [
  ["01", "Discover / propose", "A candidate source is put forward for admission."],
  ["02", "Assess rights & scope", "Ownership, licence, and permitted use are checked."],
  ["03", "Classify context", "Jurisdiction, framework, and date are recorded."],
  ["04", "Approve / restrict", "The source is admitted with explicit boundaries."],
  ["05", "Package / index", "Content is structured for controlled retrieval."],
  ["06", "Retrieve under controls", "Only in-scope sources reach a given question."],
  ["07", "Show evidence", "Every answer exposes the sources behind it."],
  ["08", "Review / decide", "A qualified person confirms or overrides."],
  ["09", "Monitor / retire", "Sources are re-checked and withdrawn when stale."],
];

const admission: [string, string][] = [
  ["Source owner", "The organisation or body accountable for the source."],
  ["Intended use", "The tasks and questions the source is permitted to inform."],
  ["Authority type", "Whether it is standard, policy, guidance, or commentary."],
  ["Applicability context", "The jurisdiction, framework, and entity it applies to."],
  ["Access rights", "Who may retrieve it, and under what role and conditions."],
];

const contextControls: [LucideIcon, string, string][] = [
  [Scale, "Jurisdiction", "The same question resolves differently across territories; scope follows the jurisdiction in play."],
  [Layers, "Task intent", "What the user is trying to do narrows which sources are even eligible to answer."],
  [ShieldCheck, "Entity type", "Rules for a listed group are not the rules for a sole trader; entity shapes applicability."],
  [ScrollText, "Materiality", "Thresholds and effective dates decide whether a source still applies at all."],
];

const ledger: [string, string, string, string][] = [
  ["Approved standard / guidance", "Admitted for direct use in this jurisdiction and framework.", "Approved", "bg-[#0d9488]"],
  ["Organization accounting policy", "Internal policy applied where firm-specific treatment is required.", "Conditional", "bg-[#e8912a]"],
  ["Approved learning commentary", "Explanatory only — supports understanding, never the conclusion.", "Advisory", "bg-[#0f1a30]"],
];

const quoteCols: [string, string][] = [
  ["Context summary", "The jurisdiction and framework in play, and what the admitted sources actually cover."],
  ["Why it matters", "The remaining gap is named rather than smoothed over with a confident guess."],
  ["Safe actions", "What can proceed now, and what needs a qualified person or a further source."],
];

const decisionRights: [string, string][] = [
  ["Context confirmation", "Confirm the jurisdiction, framework, and intent before anything is drafted."],
  ["Evidence inspection", "Open every source behind an answer and check it in full."],
  ["Draft revision", "Revise the draft; the record tracks what changed and why."],
  ["Approval for use", "A qualified person signs off before an answer is relied on."],
];

const tasks: [string, string, string][] = [
  ["Accounting policy exploration", "Explore treatment options against admitted standards, with the reasoning shown.", "route to Accounting Firms"],
  ["Audit planning support", "Assemble planning support from audited evidence and named sources.", "route to CFOs & Teams"],
  ["Payroll / compliance inquiry", "Answer compliance questions bounded to the correct jurisdiction and date.", "route to Payroll & Compliance"],
  ["Learning and practice", "Practise realistic scenarios; commentary supports, it does not decide.", "route to Learning & Practice"],
];

const audience: [string, string][] = [
  ["Accounting firm partners", "Govern the sources your teams rely on, and show the basis for every answer."],
  ["CFOs & architecture teams", "Fit source-governed intelligence into your stack with clear boundaries."],
  ["AI governance & risk", "Evidence, controls, and human decision rights that stand up to review."],
];

const faqs: [string, string][] = [
  ["What is source-governed intelligence?", "It is intelligence where every source is admitted deliberately, scoped to a context, and exposed as evidence — so you can see which sources informed an answer and why they were allowed to."],
  ["Is source-governed intelligence the same as citations?", "No. A citation points at a document after the fact. Source governance decides in advance which sources may answer a given question, and records the rights, scope, and context behind each one."],
  ["Does ZoikoLogia search the open web?", "No. Kriton answers only from admitted sources. Nothing informs an answer unless it has been approved, scoped, and given permitted uses."],
  ["How does ZoikoLogia decide which source is authoritative?", "Authority is set at admission — by owner, authority type, jurisdiction, framework, and effective date — not inferred at answer time. Standards outrank commentary, and commentary can never carry a conclusion."],
  ["Can users see why a source was used?", "Yes. Every answer opens onto the source ledger behind it, showing each source, its status, and the boundaries it was retrieved under."],
  ["What happens when sources disagree?", "The conflict is surfaced, not resolved silently. Kriton states the qualified position, names the gap, and hands the decision to a person."],
  ["Does this replace professional review?", "No. Human review remains the final decision. Kriton assembles context and evidence; a qualified person confirms, revises, or overrides before anything is relied on."],
  ["How can procurement evaluate the capability?", "Request a pilot against your own scenarios. You review the governance framework, the evidence ledger, and the escalation limits before anything goes live."],
];

// ---- page ------------------------------------------------------------------
export default function Page() {
  const [open, setOpen] = useState<number>(0);

  return (
    <div className="min-h-screen bg-[#faf7f0] font-sans text-[#0f1a30] antialiased">
      {/* HERO ------------------------------------------------------------- */}
      <section className="bg-[#0f1a30] text-[#faf7f0]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-16 pt-16 md:grid-cols-2 md:pb-24">
          <div>
            <Eyebrow>Platform Capability · Source-Governed Intelligence</Eyebrow>
            <h1 className="font-serif text-4xl leading-[1.1] tracking-tight md:text-5xl">
              Know which sources informed the answer—and why they were allowed.
            </h1>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[#faf7f0]/70">
              ZoikoLogia governs source admission, context, retrieval, evidence,
              review, and change across accounting intelligence workflows. Kriton
              only answers from sources it has been allowed — preserving
              professional boundaries and human decision rights.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#demo"
                className="rounded-md bg-[#e8912a] px-5 py-2.5 text-sm font-semibold text-[#0f1a30] hover:bg-[#f0a24a]"
              >
                Book a Demo
              </a>
              <a
                href="#demo"
                className="rounded-md px-5 py-2.5 text-sm font-semibold text-[#faf7f0] ring-1 ring-[#faf7f0]/30 hover:bg-white/5"
              >
                Request Pilot
              </a>
            </div>
            <p className="mt-6 text-xs text-[#faf7f0]/50">
              Supports qualified professional judgement. Does not replace required
              review, filings, opinions, determinations, or statutory obligations.
            </p>
          </div>
          <Photo tone="navy" label="Advisor presenting to a client team" className="aspect-[4/3] w-full" />
        </div>

        {/* capability strip */}
        <div className="border-t border-white/10">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 sm:grid-cols-2 lg:grid-cols-5">
            {capabilities.map(([title, link]) => (
              <div key={title}>
                <h3 className="text-sm font-semibold">{title}</h3>
                <a
                  href="#"
                  className="mt-3 inline-flex items-center gap-1 text-xs text-[#0d9488] hover:text-[#12b3a6]"
                >
                  {link} <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* twin image band -------------------------------------------------- */}
      <section className="mx-auto grid max-w-6xl gap-5 px-6 py-12 md:grid-cols-2">
        <Photo label="Team collaborating" className="aspect-[16/9] w-full" />
        <Photo label="Advisors in discussion" className="aspect-[16/9] w-full" />
      </section>

      {/* THE GAP ---------------------------------------------------------- */}
      <section id="gap" className="mx-auto max-w-6xl px-6 py-16">
        <Eyebrow>The Gap</Eyebrow>
        <h2 className="max-w-2xl font-serif text-3xl leading-tight tracking-tight md:text-4xl">
          Why ordinary citations are not enough
        </h2>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[#0f1a30]/70">
          A link to a document names a source without explaining its authority,
          status, or why it was used. Source-governed intelligence keeps the
          stages — admission, scope, context, retrieval — around the answer, so
          what informed it is a controlled decision rather than an afterthought.
        </p>
        <Photo label="Team in a glass meeting room" className="mt-10 aspect-[21/9] w-full" />
      </section>

      {/* OPERATING MODEL -------------------------------------------------- */}
      <section id="operating" className="mx-auto max-w-6xl px-6 py-16">
        <Eyebrow>Operating Model</Eyebrow>
        <h2 className="max-w-2xl font-serif text-3xl leading-tight tracking-tight md:text-4xl">
          Nine stages, from candidate source to retirement
        </h2>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[#0f1a30]/70">
          A source begins as a candidate and is admitted, scoped, and retrieved
          under controls. Governance continues after deployment — nothing is
          admitted once and forgotten.
        </p>

        <ol className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-[#0f1a30]/10 sm:grid-cols-3 lg:grid-cols-9">
          {stages.map(([n, title, desc]) => (
            <li key={n} className="bg-[#faf7f0] p-4">
              <span className="font-serif text-lg text-[#e8912a]">{n}</span>
              <h3 className="mt-2 text-xs font-semibold leading-snug">{title}</h3>
              <p className="mt-1 text-[11px] leading-snug text-[#0f1a30]/55">{desc}</p>
            </li>
          ))}
        </ol>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <Photo label="Working session" className="aspect-[4/3] w-full" />
          <Photo label="Reviewing evidence" className="aspect-[4/3] w-full" />
          <Photo label="Client meeting" className="aspect-[4/3] w-full" />
        </div>
      </section>

      {/* ADMISSION & OWNERSHIP -------------------------------------------- */}
      <section className="mx-auto grid max-w-6xl items-start gap-10 px-6 py-16 md:grid-cols-[1.3fr_1fr]">
        <div>
          <Eyebrow>Admission & Ownership</Eyebrow>
          <h2 className="font-serif text-3xl leading-tight tracking-tight md:text-4xl">
            Who approves a source, and on what basis
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-[#0f1a30]/70">
            Every candidate source is assessed against ownership, rights, intended
            use, applicability, and context before it may inform an answer.
          </p>
          <dl className="mt-8 divide-y divide-[#0f1a30]/10 border-y border-[#0f1a30]/10">
            {admission.map(([term, def]) => (
              <div key={term} className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[200px_1fr] sm:gap-6">
                <dt className="text-sm font-semibold">{term}</dt>
                <dd className="text-sm text-[#0f1a30]/65">{def}</dd>
              </div>
            ))}
          </dl>
        </div>
        <Photo label="Partners reviewing a source" className="aspect-[3/4] w-full md:sticky md:top-8" />
      </section>

      {/* CONTEXT CONTROLS (navy) ------------------------------------------ */}
      <section className="bg-[#0f1a30] text-[#faf7f0]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Eyebrow tone="dark">Context Controls</Eyebrow>
          <h2 className="max-w-2xl font-serif text-3xl leading-tight tracking-tight md:text-4xl">
            Jurisdiction, framework, date, and role change what applies
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[#faf7f0]/70">
            Context is present in an otherwise relevant source being used in the
            wrong situation. The platform never infers jurisdiction from location
            alone.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
            <Photo tone="navy" label="Judicial context" className="aspect-[4/3] w-full" />
            <div className="grid gap-4 sm:grid-cols-2">
              {contextControls.map(([Icon, title, desc]) => (
                <div key={title} className="rounded-lg bg-white/5 p-5 ring-1 ring-white/10">
                  <Icon className="h-5 w-5 text-[#0d9488]" strokeWidth={1.5} />
                  <h3 className="mt-3 text-sm font-semibold">{title}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-[#faf7f0]/60">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EVIDENCE DEMONSTRATION ------------------------------------------- */}
      <section id="evidence" className="mx-auto max-w-6xl px-6 py-16">
        <Eyebrow>Evidence Demonstration · Synthetic Data</Eyebrow>
        <h2 className="max-w-2xl font-serif text-3xl leading-tight tracking-tight md:text-4xl">
          Can I see why a source informed an answer?
        </h2>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[#0f1a30]/70">
          All identifiers, figures, and text below are fictional and used only to
          illustrate the evidence model — no client data appears on this page.
        </p>

        <div className="mt-10 grid gap-6 rounded-xl bg-white p-4 ring-1 ring-[#0f1a30]/10 md:grid-cols-2 md:p-6">
          <Photo label="Advisory session" className="aspect-[4/3] w-full" />
          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0f1a30]/40">
              Source Ledger
            </p>
            <ul className="space-y-3">
              {ledger.map(([title, desc, badge, badgeBg]) => (
                <li key={title} className="rounded-lg border border-[#0f1a30]/10 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-sm font-semibold">{title}</h3>
                    <span className={`shrink-0 rounded-full ${badgeBg} px-2.5 py-0.5 text-[11px] font-semibold text-white`}>
                      {badge}
                    </span>
                  </div>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-[#0f1a30]/60">{desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* qualified-answer quote */}
        <div className="mt-8 rounded-xl border border-[#0f1a30]/15 bg-[#f3eee2] p-8 md:p-10">
          <blockquote className="max-w-3xl font-serif text-2xl leading-snug tracking-tight md:text-3xl">
            “The available sources do not support one unqualified answer.”
          </blockquote>
          <div className="mt-8 grid gap-6 border-t border-[#0f1a30]/10 pt-6 sm:grid-cols-3">
            {quoteCols.map(([title, desc]) => (
              <div key={title}>
                <h3 className="text-sm font-semibold">{title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-[#0f1a30]/60">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DECISION RIGHTS -------------------------------------------------- */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Eyebrow>Decision Rights</Eyebrow>
        <h2 className="max-w-2xl font-serif text-3xl leading-tight tracking-tight md:text-4xl">
          Human review remains the final decision
        </h2>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[#0f1a30]/70">
          ZoikoLogia with Kriton supports professional judgement through controlled
          source use and evidence visibility. It does not replace qualified
          accountants, auditors, tax professionals, compliance officers, legal
          counsel, statutory obligations, or audit opinions.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {decisionRights.map(([title, desc]) => (
            <div key={title} className="rounded-lg border border-[#0f1a30]/10 bg-white p-5">
              <Check className="h-5 w-5 text-[#0d9488]" strokeWidth={2} />
              <h3 className="mt-3 text-sm font-semibold">{title}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-[#0f1a30]/60">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <Photo label="Team standup" className="aspect-[4/3] w-full" />
          <Photo label="Presenting findings" className="aspect-[4/3] w-full" />
          <Photo label="Collaboration" className="aspect-[4/3] w-full" />
        </div>
      </section>

      {/* SYNTHETIC / NON-ADVISORY ----------------------------------------- */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Eyebrow>Synthetic · Non-Advisory</Eyebrow>
        <h2 className="max-w-2xl font-serif text-3xl leading-tight tracking-tight md:text-4xl">
          How it operates in realistic professional tasks
        </h2>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[#0f1a30]/70">
          Every scenario uses fictional entities, periods, and figures. None is a
          professional conclusion suitable for filing, opinion, or submission.
        </p>

        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-[1fr_0.8fr_1fr]">
          <div className="grid gap-5">
            {tasks.slice(0, 2).map(([title, desc, link]) => (
              <TaskCard key={title} title={title} desc={desc} link={link} />
            ))}
          </div>
          <Photo label="Practitioner at work" className="aspect-[3/4] w-full self-center" />
          <div className="grid gap-5">
            {tasks.slice(2).map(([title, desc, link]) => (
              <TaskCard key={title} title={title} desc={desc} link={link} />
            ))}
          </div>
        </div>
      </section>

      {/* AUDIENCE PATHWAYS (navy) ----------------------------------------- */}
      <section className="bg-[#0f1a30] text-[#faf7f0]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Eyebrow tone="dark">Audience Pathways</Eyebrow>
          <h2 className="max-w-2xl font-serif text-3xl leading-tight tracking-tight md:text-4xl">
            Choose the next step for your role
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr_1fr_0.9fr]">
            {audience.map(([title, desc]) => (
              <div key={title} className="flex flex-col rounded-lg bg-white/5 p-6 ring-1 ring-white/10">
                <h3 className="font-serif text-lg tracking-tight">{title}</h3>
                <p className="mt-2 flex-1 text-[13px] leading-relaxed text-[#faf7f0]/60">{desc}</p>
                <a href="#" className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#e8912a] hover:text-[#f0a24a]">
                  Explore path <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            ))}
            <Photo tone="navy" label="Team portrait" className="aspect-[3/4] w-full" />
          </div>
        </div>
      </section>

      {/* FAQ -------------------------------------------------------------- */}
      <section id="faq" className="mx-auto max-w-3xl px-6 py-16">
        <Eyebrow>Direct Answers</Eyebrow>
        <h2 className="font-serif text-3xl leading-tight tracking-tight md:text-4xl">
          Frequently asked questions
        </h2>
        <div className="mt-8 divide-y divide-[#0f1a30]/10 border-y border-[#0f1a30]/10">
          {faqs.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <div key={q}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-[15px] font-medium">{q}</span>
                  {isOpen ? (
                    <Minus className="h-4 w-4 shrink-0 text-[#e8912a]" />
                  ) : (
                    <Plus className="h-4 w-4 shrink-0 text-[#0f1a30]/40" />
                  )}
                </button>
                {isOpen && (
                  <p className="-mt-1 pb-5 pr-8 text-sm leading-relaxed text-[#0f1a30]/65">{a}</p>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}