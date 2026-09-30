"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Inter, Source_Serif_4 } from "next/font/google";
import { Users, Workflow, FileText, Lock, Check, Clock, Plus, Minus, ArrowRight } from "lucide-react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const serif = Source_Serif_4({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-serif4" });

// ─── TOKENS ─────────────────────────────────────────────────────────────────────
// #F7F3EA page · #EFE8D6 band / tile · #E3DED2 border · #071A33 navy / ink
// #0C2440 heading · #5C6672 body · #8A94A0 muted · #0F9D86 teal (text)
// #00BFA6 teal (accent) · #D97706 amber (text) · #EE9327 amber (button)

const IMG = "/request-pilot";

// ─── DATA ──────────────────────────────────────────────────────────────────────
const INCLUDES = [
  { icon: Users, tone: "teal", title: "Defined Users", body: "A specific group — not your whole org on day one. You choose who's in scope." },
  { icon: Workflow, tone: "amber", title: "Defined Workflows", body: "The specific tasks or question types you want to evaluate — not \"everything.\"" },
  { icon: FileText, tone: "teal", title: "Defined Sources", body: "The standards, guidance, or internal documents Kriton™ will be grounded in for this pilot." },
  { icon: Lock, tone: "amber", title: "Governance Controls", body: "Role permissions, review requirements, and escalation rules configured for your pilot." },
  { icon: Check, tone: "teal", title: "Success Criteria", body: "What \"this worked\" actually means, agreed with you before the pilot starts — not after." },
  { icon: Clock, tone: "amber", title: "A Fixed Timeline", body: "A clear start and end date, with a scheduled review before any decision about scaling." },
] as const;

const AUDIENCES = [
  { label: "Accounting Firms", img: "accounting-firms", href: "/accounting-firms" },
  { label: "Enterprise Finance", img: "enterprise-finance", href: "/enterprise-finance-team" },
  { label: "Audit & Assurance", img: "audit", href: "/audit-tax-compliance" },
  { label: "Payroll & Compliance", img: "payroll", href: "/payroll-compliance" },
  { label: "Education", img: "education", href: "/accounting-education" },
  { label: "AI Governance", img: "ai-governance", href: "/ai-governance-teams" },
];

const STEPS = [
  { title: "Discovery Call", body: "We understand your workflows, sources, and what you're trying to validate.", ring: "border-[#E3DED2] text-[#071A33]" },
  { title: "Scoping & Agreement", body: "Users, workflows, sources, and success criteria are documented and confirmed.", ring: "border-[#00BFA6]/40 text-[#0F9D86]" },
  { title: "Pilot Setup", body: "Tenant policy, roles, and approved sources are configured for your scope.", ring: "border-[#EE9327]/40 text-[#D97706]" },
  { title: "Pilot Period", body: "Your team uses the platform within the agreed scope, with regular check-ins.", ring: "border-[#E3DED2] text-[#071A33]" },
  { title: "Review & Decision", body: "We assess against the agreed criteria together and decide the next step.", ring: "border-[#00BFA6]/40 text-[#0F9D86]" },
];

const SUCCESS = [
  "Workflow fit validated against your actual questions, not hypotheticals",
  "Evidence-ready records from every material interaction during the pilot",
  "Governance review completed by your security or compliance stakeholders",
  "A documented go/no-go decision against the criteria you set upfront",
];

const ORG_TYPES = ["Accounting firm", "Enterprise finance team", "Audit & assurance", "Payroll & compliance", "Education / academic", "AI governance / risk", "Other"];
const USER_COUNTS = ["1–5", "6–15", "16–50", "51–100", "100+"];
const LENGTHS = ["2–4 weeks", "4–8 weeks", "8–12 weeks", "Not sure yet"];
const WORKFLOWS = ["Accounting Q&A", "Workflow / documentation support", "Review & escalation", "Evidence & audit readiness"];

const BOUNDARIES = [
  "Submitting this form does not commit you to a paid deployment — scope and terms are confirmed together, in writing, before anything starts.",
  "Pilot data handling follows the same tenant policy, access controls, and privacy protections as any production deployment.",
  "Success criteria are set collaboratively — we won't declare a pilot \"successful\" using goals you didn't agree to.",
  "A pilot does not guarantee production pricing, timelines, or feature availability beyond what's explicitly scoped.",
  "You can request a security or privacy review before the pilot begins — this doesn't need to wait until deployment.",
];

const FAQS = [
  { q: "How long does a typical pilot run?", a: "Most pilots run 4–8 weeks, but the length is set together based on your workflows and how much usage you need to see to evaluate fairly." },
  { q: "Does a pilot cost anything?", a: "It depends on scope. Pricing, if any, is agreed in writing before the pilot starts — submitting this request never commits you to a paid deployment." },
  { q: "Can we limit the pilot to one team or department?", a: "Yes. Most pilots start with a specific group of users. You choose who's in scope, and it can be as small as a single team." },
  { q: "What happens to our data after the pilot ends?", a: "Pilot data follows your tenant's retention and deletion policy, the same as a production deployment. Handling at the end of the pilot is confirmed during scoping." },
  { q: "Can our security team review the platform before the pilot starts?", a: "Yes. You can request a security or privacy review at any point before the pilot begins — it doesn't need to wait until deployment." },
  { q: "What if the pilot doesn't go well?", a: "Then you'll know, clearly and against criteria you agreed to upfront. There's no obligation to continue, and we'll share what we learned from the review." },
];

// ─── STYLES ────────────────────────────────────────────────────────────────────
const serifH = "font-[family-name:var(--font-serif4)] font-semibold text-[#0C2440]";
const h2 = `text-[1.375rem] leading-8 sm:text-2xl ${serifH}`;
const container = "mx-auto w-full max-w-290 px-4 sm:px-6 lg:px-8";
const card = "rounded-xl border border-[#E3DED2] bg-white";
const label = "block text-xs font-semibold leading-5 text-[#071A33]";
const field =
  "mt-1.5 h-11 w-full min-w-0 rounded-lg border border-[#E3DED2] bg-white px-3 text-base text-[#152436] placeholder:text-[#8A94A0] focus:border-[#00BFA6] focus:outline-none focus:ring-1 focus:ring-[#00BFA6] sm:h-10 sm:text-sm [&::-webkit-date-and-time-value]:text-left";
const btnAmber = "inline-flex items-center justify-center gap-1.5 rounded-md bg-[#EE9327] px-5 py-3 text-sm font-semibold text-[#071A33] transition-opacity hover:opacity-90";
const btnGhostDark = "inline-flex items-center justify-center rounded-md border border-white/30 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10";

function Eyebrow({ children, tone = "amber", center = false }: { children: React.ReactNode; tone?: "amber" | "teal"; center?: boolean }) {
  const c = tone === "amber" ? "text-[#D97706]" : "text-[#00BFA6]";
  const bar = tone === "amber" ? "bg-[#D97706]" : "bg-[#00BFA6]";
  return (
    <p className={`flex items-center gap-2 text-xs font-bold uppercase leading-5 tracking-wide ${c} ${center ? "justify-center" : ""}`}>
      <span className={`h-0.5 w-4 shrink-0 rounded-xs ${bar}`} /> {children}
    </p>
  );
}

function Req() {
  return <span className="text-[#EE9327]"> *</span>;
}

// ─── SECTIONS ──────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="bg-[#071A33]">
      <div className={`${container} grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:py-9 xl:grid-cols-[minmax(0,1fr)_minmax(0,502px)] xl:gap-20`}>
        <div className="lg:py-16">
          <Eyebrow tone="teal">Controlled Evaluation, Not a Free-for-All</Eyebrow>
          <h1 className="mt-3 max-w-xl font-[family-name:var(--font-serif4)] text-[1.75rem] font-semibold leading-9 text-white sm:text-3xl sm:leading-10">
            Request a pilot scoped to your team, your workflows, your sources.
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-6 text-[#B7C4D3]">
            A pilot is a defined, time-boxed evaluation — specific users, specific workflows, specific sources, and clear success criteria agreed upfront. Not an open-ended trial with no shape to it.
          </p>
          <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center">
            <a href="#request" className={btnAmber}>Start Your Pilot Request</a>
            <Link href="/book-a-demo" className={btnGhostDark}>Book a Demo Instead</Link>
            <Link href="/contact-us" className="inline-flex items-center justify-center gap-1 px-1.5 py-3 text-sm font-semibold text-[#B7C4D3] hover:text-white">
              Talk to Sales <ArrowRight className="size-3.5" />
            </Link>
          </div>
          <p className="mt-4 max-w-lg text-xs leading-5 text-slate-400">
            Pilots are scoped collaboratively — nothing here commits you to a paid deployment. Terms are confirmed in writing before the pilot begins.
          </p>
        </div>

        <div className="relative mx-auto aspect-[502/452] w-full max-w-lg overflow-hidden rounded-2xl lg:max-w-none">
          <Image src={`${IMG}/hero.webp`} alt="Two colleagues celebrating a successful pilot" fill priority sizes="(max-width: 1024px) 100vw, 502px" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent from-40% to-[#071A33]/90" />
          <div className="absolute inset-x-3 bottom-3 rounded-xl border border-[#00BFA6]/30 bg-[#0B1C33]/95 px-4 py-3.5 backdrop-blur-sm sm:inset-x-4 sm:bottom-4">
            <p className="pb-2.5 text-[10px] font-bold uppercase leading-4 tracking-wide text-[#8CA0B8]">Every Pilot Defines</p>
            {[
              { t: "Users & Roles in Scope", c: "bg-[#00BFA6]" },
              { t: "Workflows & Sources Tested", c: "bg-[#5FE7D2]" },
              { t: "Success Criteria, Agreed Upfront", c: "bg-[#EE9327]" },
            ].map((r) => (
              <p key={r.t} className="flex items-center gap-2 border-t border-white/10 py-1.5 text-xs leading-5 text-zinc-200">
                <span className={`size-1.5 rounded-sm ${r.c}`} /> {r.t}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Includes() {
  return (
    <section className="py-14 sm:py-20">
      <div className={container}>
        <Eyebrow>What a Pilot Includes</Eyebrow>
        <h2 className={`mt-3 max-w-2xl ${h2}`}>Six things every pilot defines before it starts.</h2>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {INCLUDES.map(({ icon: Icon, tone, title, body }) => (
            <div key={title} className={`${card} p-5 sm:p-6`}>
              <span className="flex size-9 items-center justify-center rounded-lg bg-[#EFE8D6]">
                <Icon className={`size-4 ${tone === "teal" ? "text-[#0F9D86]" : "text-[#D97706]"}`} strokeWidth={1.8} />
              </span>
              <p className="mt-4 text-sm font-bold leading-6 text-[#0C2440]">{title}</p>
              <p className="mt-1 text-xs leading-5 text-[#5C6672]">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Audiences() {
  return (
    <section className="border-t border-[#E3DED2] bg-[#EFE8D6] py-14 sm:py-16">
      <div className={container}>
        <Eyebrow>Who Pilots Are For</Eyebrow>
        <h2 className={`mt-3 max-w-2xl ${h2}`}>Every team evaluates governed AI a little differently.</h2>
        <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-3.5">
          {AUDIENCES.map((a) => (
            <Link key={a.label} href={a.href} className={`${card} group overflow-hidden transition-shadow hover:shadow-md`}>
              <div className="relative aspect-square w-full overflow-hidden bg-[#E3DED2] lg:aspect-[169/170]">
                <Image src={`${IMG}/${a.img}.webp`} alt="" fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 169px" className="object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <p className="px-3 py-3 text-xs font-bold leading-4 text-[#0C2440]">{a.label}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="py-14 sm:py-20">
      <div className={container}>
        <Eyebrow>How the Process Works</Eyebrow>
        <h2 className={`mt-3 ${h2}`}>Five steps from request to review.</h2>

        <ol className="relative mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3.5">
          {/* Connector line — desktop only */}
          <span aria-hidden className="absolute left-11 right-[10%] top-[22px] hidden h-px bg-[#E3DED2] lg:block" />
          {STEPS.map((s, i) => (
            <li key={s.title} className="relative flex gap-4 lg:block">
              <span className={`relative z-10 flex size-11 shrink-0 items-center justify-center rounded-full border bg-white font-[family-name:var(--font-serif4)] text-base font-bold ${s.ring}`}>
                {i + 1}
              </span>
              <div className="lg:mt-3 lg:pr-4">
                <p className="text-xs font-bold leading-4 text-[#0C2440] max-lg:pt-1.5 max-lg:text-sm max-lg:leading-5">{s.title}</p>
                <p className="mt-1 text-xs leading-4 text-[#5C6672] max-lg:leading-5">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Success() {
  return (
    <section className="bg-[#EFE8D6] py-14 sm:py-16">
      <div className={`${container} grid items-center gap-8 lg:grid-cols-2 lg:gap-12`}>
        <div className="relative mx-auto aspect-[524/420] w-full max-w-lg overflow-hidden rounded-2xl lg:max-w-none">
          <Image src={`${IMG}/success.webp`} alt="Smiling team lead after a pilot review" fill sizes="(max-width: 1024px) 100vw, 524px" className="object-cover" />
        </div>
        <div>
          <Eyebrow>What Success Looks Like</Eyebrow>
          <h2 className={`mt-3 max-w-md ${h2} lg:text-[1.625rem] lg:leading-9`}>A clear answer, either way — not a fuzzy impression.</h2>
          <p className="mt-4 max-w-lg text-sm leading-6 text-[#5C6672]">
            A well-scoped pilot gives you something concrete to evaluate at the end, not just a vague sense of whether people liked it.
          </p>
          <ul className="mt-4 space-y-2">
            {SUCCESS.map((s) => (
              <li key={s} className="flex items-start gap-3 text-[13px] leading-5 text-[#071A33]">
                <span className="mt-[7px] size-1.5 shrink-0 rounded-sm bg-[#EE9327]" /> {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function RequestForm() {
  const [form, setForm] = useState({
    name: "", email: "", org: "", role: "", orgType: "", users: "", start: "", length: "", sources: "", success: "",
  });
  const [workflows, setWorkflows] = useState<string[]>([]);
  const [agree, setAgree] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const set = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setForm({ ...form, [k]: e.target.value });
  const toggle = (w: string) => setWorkflows((p) => (p.includes(w) ? p.filter((x) => x !== w) : [...p, w]));

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  const canSubmit = form.name.trim() && emailOk && form.org.trim() && form.orgType && agree;
  const groupLabel = "text-xs font-bold uppercase leading-4 tracking-wide text-[#0F9D86]";

  return (
    <section id="request" className="scroll-mt-24 py-14 sm:py-20">
      <div className={container}>
        <div className="mx-auto max-w-165 text-center">
          <Eyebrow center>Start Your Pilot Request</Eyebrow>
          <h2 className={`mt-3 ${h2}`}>Tell us the shape of what you want to evaluate.</h2>
          <p className="mt-2 text-sm leading-6 text-[#5C6672]">We&apos;ll follow up to confirm scope together — nothing here locks you into anything.</p>
        </div>

        <div className="mx-auto mt-8 max-w-190 rounded-2xl border border-[#E3DED2] bg-white p-5 sm:px-9 sm:py-8">
          {submitted ? (
            <div className="py-10 text-center">
              <span className="mx-auto flex size-10 items-center justify-center rounded-full bg-[#00BFA6]/10">
                <Check className="size-5 text-[#0F9D86]" />
              </span>
              <h3 className={`mt-4 text-xl ${serifH}`}>Pilot request received.</h3>
              <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-[#5C6672]">
                Thanks, {form.name.split(" ")[0]}. We&apos;ll follow up at <span className="font-semibold text-[#152436]">{form.email}</span> to confirm scope together, typically within one business day.
              </p>
            </div>
          ) : (
            <form noValidate onSubmit={(e) => { e.preventDefault(); if (canSubmit) setSubmitted(true); }}>
              <p className={groupLabel}>Your Details</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 sm:gap-3.5">
                <div>
                  <label htmlFor="rp-name" className={label}>Full name<Req /></label>
                  <input id="rp-name" autoComplete="name" required className={field} value={form.name} onChange={set("name")} />
                </div>
                <div>
                  <label htmlFor="rp-email" className={label}>Work email<Req /></label>
                  <input id="rp-email" type="email" autoComplete="email" required className={field} value={form.email} onChange={set("email")} />
                </div>
                <div>
                  <label htmlFor="rp-org" className={label}>Organization<Req /></label>
                  <input id="rp-org" autoComplete="organization" required className={field} value={form.org} onChange={set("org")} />
                </div>
                <div>
                  <label htmlFor="rp-role" className={label}>Role</label>
                  <input id="rp-role" autoComplete="organization-title" placeholder="e.g. Controller, Audit Partner" className={field} value={form.role} onChange={set("role")} />
                </div>
              </div>

              <p className={`${groupLabel} mt-8`}>Pilot Scope</p>
              <div className="mt-4 space-y-4">
                <div>
                  <label htmlFor="rp-type" className={label}>Organization type<Req /></label>
                  <select id="rp-type" required className={`${field} px-4`} value={form.orgType} onChange={set("orgType")}>
                    <option value="">Select…</option>
                    {ORG_TYPES.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>

                <div className="grid gap-4 sm:grid-cols-3 sm:gap-3.5">
                  <div>
                    <label htmlFor="rp-users" className={label}>Estimated pilot users</label>
                    <select id="rp-users" className={`${field} px-4`} value={form.users} onChange={set("users")}>
                      <option value="">Select…</option>
                      {USER_COUNTS.map((o) => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="rp-start" className={label}>Target start date</label>
                    <input id="rp-start" type="date" className={field} value={form.start} onChange={set("start")} />
                  </div>
                  <div>
                    <label htmlFor="rp-length" className={label}>Desired pilot length</label>
                    <select id="rp-length" className={`${field} px-4`} value={form.length} onChange={set("length")}>
                      <option value="">Select…</option>
                      {LENGTHS.map((o) => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                </div>

                <fieldset>
                  <legend className={label}>Which workflows do you want to test? (select all that apply)</legend>
                  <div className="mt-2 grid gap-x-4 gap-y-3 sm:grid-cols-2">
                    {WORKFLOWS.map((w) => (
                      <label key={w} className="flex items-center gap-2.5 text-xs font-semibold leading-5 text-[#071A33]">
                        <input type="checkbox" checked={workflows.includes(w)} onChange={() => toggle(w)} className="size-4 shrink-0 accent-[#00BFA6]" />
                        {w}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div>
                  <label htmlFor="rp-sources" className={label}>Sources or standards you want in scope (optional)</label>
                  <input id="rp-sources" placeholder="e.g. IFRS 15, ASC 606, internal policy manual" className={field} value={form.sources} onChange={set("sources")} />
                </div>

                <div>
                  <label htmlFor="rp-success" className={label}>What would count as a successful pilot for you?</label>
                  <textarea
                    id="rp-success"
                    rows={3}
                    placeholder="e.g. Reviewers trust the citations, cuts research time on X type of question…"
                    className={`${field} h-auto resize-y py-2.5`}
                    value={form.success}
                    onChange={set("success")}
                  />
                </div>
              </div>

              <label className="mt-5 flex items-start gap-2.5 text-xs leading-5 text-[#5C6672]">
                <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} className="mt-0.5 size-4 shrink-0 accent-[#00BFA6] sm:size-3.5 sm:mt-1" />
                <span>
                  I agree to be contacted about scoping this pilot, subject to the{" "}
                  <Link href="/privacy-security" className="underline hover:text-[#152436]">Privacy Policy</Link>. This request does not commit me to a paid deployment.
                </span>
              </label>

              <button
                type="submit"
                disabled={!canSubmit}
                className="mt-5 w-full rounded-md bg-[#EE9327] px-5 py-3.5 text-sm font-semibold text-[#071A33] transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:py-2.5"
              >
                Submit Pilot Request
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function NotReadyBanner() {
  return (
    <section className="border-t border-[#E3DED2] bg-[#EFE8D6] py-14 sm:py-16">
      <div className={container}>
        <div className="relative overflow-hidden rounded-2xl bg-[#071A33]">
          <Image src={`${IMG}/banner.webp`} alt="" fill sizes="(max-width: 1160px) 100vw, 1096px" className="object-cover object-right" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071A33] via-[#071A33]/80 to-[#071A33]/10 sm:via-[#071A33]/55" />
          <div className="relative max-w-md px-6 py-10 sm:px-11 sm:py-14">
            <h2 className="font-[family-name:var(--font-serif4)] text-xl font-semibold leading-7 text-white sm:text-[1.375rem] sm:leading-8">
              Not ready to scope a full pilot yet?
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Start with a live demo instead — bring a real question and see how Kriton™ handles it before committing to anything.
            </p>
            <Link href="/book-a-demo" className={`${btnAmber} mt-6 px-4 py-2.5`}>
              Book a Demo <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Boundaries() {
  return (
    <section className="py-14 sm:py-20">
      <div className={container}>
        <Eyebrow>Trust &amp; Legal Boundaries</Eyebrow>
        <h2 className={`mt-3 max-w-2xl ${h2}`}>What a pilot request does — and doesn&apos;t — commit you to.</h2>
        <ul className={`${card} mt-7 divide-y divide-[#E3DED2] overflow-hidden`}>
          {BOUNDARIES.map((b) => (
            <li key={b} className="flex items-start gap-3 px-4 py-3.5">
              <span className="flex size-5 shrink-0 items-center justify-center rounded-md bg-[#EE9327]/12 text-xs font-bold text-[#D97706]" aria-hidden>i</span>
              <p className="text-xs leading-5 text-[#071A33] sm:text-[13px]">{b}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-[#EFE8D6] py-14 sm:py-20">
      <div className={container}>
        <Eyebrow>Frequently Asked</Eyebrow>
        <h2 className={`mt-3 ${h2} lg:text-[1.625rem] lg:leading-9`}>Pilot questions, answered plainly.</h2>
        <div className="mt-8 border-t border-[#E3DED2]">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-[#E3DED2]">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left"
                >
                  <span className={`text-sm leading-5 ${serifH}`}>{f.q}</span>
                  {isOpen ? <Minus className="size-4 shrink-0 text-[#1F3A5C]" /> : <Plus className="size-4 shrink-0 text-[#1F3A5C]" />}
                </button>
                {isOpen && <p className="max-w-3xl pb-5 text-[13px] leading-6 text-[#5C6672]">{f.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="py-14 sm:py-16">
      <div className={container}>
        <div className="rounded-2xl bg-[#071A33] bg-[radial-gradient(ellipse_60%_80%_at_50%_0%,#0B3A46_0%,transparent_70%)] px-6 py-12 text-center sm:px-10 sm:py-14">
          <Eyebrow tone="teal" center>Ready to Scope It?</Eyebrow>
          <h2 className="mx-auto mt-4 max-w-xl font-[family-name:var(--font-serif4)] text-2xl font-semibold leading-snug text-white sm:text-[1.75rem] sm:leading-10">
            Let&apos;s define what a successful pilot looks like for your team.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-slate-300">
            Fill out the request above, or talk to sales first if you have questions about scope, pricing, or timing.
          </p>
          <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a href="#request" className={btnAmber}>Start Your Pilot Request</a>
            <Link href="/contact-us" className={btnGhostDark}>Talk to Sales</Link>
            <Link href="/privacy-security" className={btnGhostDark}>Visit Trust Center</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── PAGE ───────────────────────────────────────────────────────────────────────
export default function RequestPilotPage() {
  return (
    <div className={`${inter.variable} ${serif.variable} bg-[#F7F3EA] font-[family-name:var(--font-inter)] text-[#152436]`}>
      <Hero />
      <Includes />
      <Audiences />
      <Process />
      <Success />
      <RequestForm />
      <NotReadyBanner />
      <Boundaries />
      <Faq />
      <FinalCta />
    </div>
  );
}
