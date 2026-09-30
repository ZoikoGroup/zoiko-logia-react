"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Inter, Source_Serif_4 } from "next/font/google";
import { Clock, Check, MessageSquare, Shield, Plus, Minus } from "lucide-react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const serif = Source_Serif_4({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-serif4" });

// ─── TOKENS ─────────────────────────────────────────────────────────────────────
// #F7F3EA page · #FFFFFF card · #E3DED2 border · #071A33 label · #0C2440 heading
// #152436 input text · #8A94A0 placeholder · #5C6672 body · #00BFA6 teal
// #EE9327 amber · #1F3A5C icon

// ─── DATA ──────────────────────────────────────────────────────────────────────
const TEAM_SIZES = ["1–10", "11–50", "51–200", "201–1,000", "1,000+"];

const USE_CASES = [
  "Accounting firm workflows",
  "Enterprise finance",
  "Tax research & review",
  "Audit & assurance",
  "Payroll & compliance",
  "Accounting education",
  "Security / governance review",
  "Other",
];

const TIMES = ["No preference", "Morning (9am–12pm)", "Afternoon (12pm–4pm)", "Late afternoon (4pm–6pm)"];

const PROMISES = [
  { icon: Clock, title: "30 minutes, no pressure", body: "A focused walkthrough, not a sales pitch — you can ask us to stop and go deeper anywhere." },
  { icon: Check, title: "Tailored to your role", body: "We'll walk through the workflow modes and source controls most relevant to your team." },
  { icon: MessageSquare, title: "Bring a real question", body: "Optional, but the best demos start with an actual accounting question from your work." },
  { icon: Shield, title: "Trust questions welcome", body: "Security, privacy, and governance questions are fair game — we'll route deeper ones to the right person." },
];

const FAQS = [
  { q: "How long is the demo?", a: "About 30 minutes, with room to go longer if there's more you want to cover." },
  { q: "Is it live, or a recorded walkthrough?", a: "Live. A member of our team walks through ZoikoLogia™ with you and answers questions as they come up." },
  { q: "Do I need to prepare anything?", a: "No. If you have a real accounting question in mind, bring it — just leave out confidential client data." },
  { q: "Can enterprise teams get a custom session?", a: "Yes. Tell us about your team in the form and we'll shape the session around your workflows, stakeholders, and review requirements." },
  { q: "Will a security or privacy person be able to answer questions?", a: "Yes. Flag it in the form and we'll bring in someone who can speak to security, privacy, and governance controls." },
];

// ─── STYLES ────────────────────────────────────────────────────────────────────
const label = "block text-xs font-semibold leading-5 text-[#071A33]";
const field =
  "mt-1.5 h-11 w-full min-w-0 rounded-lg border border-[#E3DED2] bg-white px-3 text-base text-[#152436] sm:h-10 sm:text-sm [&::-webkit-date-and-time-value]:text-left placeholder:text-[#8A94A0] focus:border-[#00BFA6] focus:outline-none focus:ring-1 focus:ring-[#00BFA6]";
const serifH = "font-[family-name:var(--font-serif4)] font-semibold text-[#0C2440]";

function Req() {
  return <span className="text-[#EE9327]"> *</span>;
}

// ─── PAGE ───────────────────────────────────────────────────────────────────────
export default function BookADemoPage() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", company: "",
    teamSize: "", useCase: "", date: "", time: TIMES[0], notes: "",
  });
  const [agree, setAgree] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const set = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm({ ...form, [k]: e.target.value });

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  const canSubmit =
    form.firstName.trim() && form.lastName.trim() && emailOk && form.company.trim() && form.useCase && agree;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (canSubmit) setSubmitted(true);
  };

  return (
    <div className={`${inter.variable} ${serif.variable} bg-[#F7F3EA] font-[family-name:var(--font-inter)] text-[#152436]`}>
      {/* ─── Intro + form ─── */}
      <section className="px-4 py-10 sm:px-6 sm:py-16 lg:pt-20">
        <div className="mx-auto grid max-w-xl items-center gap-10 lg:max-w-254 lg:grid-cols-[minmax(0,1fr)_minmax(0,554px)] xl:gap-16">
          {/* Left column */}
          <div>
            <p className="flex items-center gap-2 text-xs font-bold uppercase leading-5 tracking-wide text-[#00BFA6]">
              <span className="h-0.5 w-4 rounded-xs bg-[#00BFA6]" /> Book a Demo
            </p>
            <h1 className={`mt-4 text-2xl leading-8 sm:text-3xl sm:leading-10 ${serifH}`}>
              See ZoikoLogia™ work on <br className="hidden sm:block" />your team&apos;s actual questions.
            </h1>
            <p className="mt-4 text-sm leading-6 lg:max-w-sm text-[#5C6672]">
              30 minutes, tailored to your role — not a generic slide deck. Bring a real question and we&apos;ll show
              you exactly how Kriton™ handles it.
            </p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-1 lg:gap-4">
              {PROMISES.map(({ icon: Icon, title, body }) => (
                <li key={title} className="flex items-start gap-3">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-lg border border-[#E3DED2] bg-white">
                    <Icon className="size-3.5 text-[#00BFA6]" strokeWidth={2} />
                  </span>
                  <div>
                    <p className={`text-sm leading-5 ${serifH}`}>{title}</p>
                    <p className="mt-1 text-xs leading-5 lg:max-w-sm text-[#5C6672]">{body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Form card */}
          <div className="rounded-2xl border border-[#E3DED2] bg-white p-5 sm:p-8">
            {submitted ? (
              <div className="py-10 text-center">
                <span className="mx-auto flex size-10 items-center justify-center rounded-full bg-[#00BFA6]/10">
                  <Check className="size-5 text-[#00BFA6]" />
                </span>
                <h2 className={`mt-4 text-xl ${serifH}`}>Demo request received.</h2>
                <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-[#5C6672]">
                  Thanks, {form.firstName}. We&apos;ll follow up at{" "}
                  <span className="font-semibold text-[#152436]">{form.email}</span> to confirm a time, typically within
                  one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-3.5">
                  <div>
                    <label htmlFor="firstName" className={label}>First name<Req /></label>
                    <input id="firstName" autoComplete="given-name" required className={field} value={form.firstName} onChange={set("firstName")} />
                  </div>
                  <div>
                    <label htmlFor="lastName" className={label}>Last name<Req /></label>
                    <input id="lastName" autoComplete="family-name" required className={field} value={form.lastName} onChange={set("lastName")} />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className={label}>Work email<Req /></label>
                  <input id="email" type="email" autoComplete="email" required className={field} value={form.email} onChange={set("email")} />
                </div>

                <div className="grid gap-4 sm:grid-cols-2 sm:gap-3.5">
                  <div>
                    <label htmlFor="company" className={label}>Company<Req /></label>
                    <input id="company" autoComplete="organization" required className={field} value={form.company} onChange={set("company")} />
                  </div>
                  <div>
                    <label htmlFor="teamSize" className={label}>Team size</label>
                    <select id="teamSize" className={`${field} px-4`} value={form.teamSize} onChange={set("teamSize")}>
                      <option value="">Select…</option>
                      {TEAM_SIZES.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="useCase" className={label}>Primary use case<Req /></label>
                  <select id="useCase" required className={`${field} px-4`} value={form.useCase} onChange={set("useCase")}>
                    <option value="">Select…</option>
                    {USE_CASES.map((u) => <option key={u}>{u}</option>)}
                  </select>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 sm:gap-3.5">
                  <div>
                    <label htmlFor="date" className={label}>Preferred date</label>
                    <input id="date" type="date" className={field} value={form.date} onChange={set("date")} />
                  </div>
                  <div>
                    <label htmlFor="time" className={label}>Preferred time</label>
                    <select id="time" className={`${field} px-4`} value={form.time} onChange={set("time")}>
                      {TIMES.map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="notes" className={label}>What would you like us to cover? (optional)</label>
                  <textarea
                    id="notes"
                    rows={3}
                    placeholder="A specific workflow, question, or concern…"
                    className={`${field} h-auto resize-y py-2.5`}
                    value={form.notes}
                    onChange={set("notes")}
                  />
                </div>

                <label className="flex items-start gap-2 py-2 text-xs leading-5 text-[#5C6672]">
                  <input
                    type="checkbox"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                    className="mt-0.5 size-4 shrink-0 accent-[#00BFA6] sm:mt-1 sm:size-3.5"
                  />
                  <span>
                    I agree to be contacted about scheduling this demo, subject to the{" "}
                    <Link href="/privacy-security" className="underline hover:text-[#152436]">Privacy Policy</Link>.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={!canSubmit}
                  className="w-full rounded-md bg-[#EE9327] px-5 py-3.5 text-sm font-semibold text-white sm:py-3 transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  Request My Demo
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="px-4 pt-2 pb-10 sm:px-6 sm:pt-8 sm:pb-12">
        <div className="mx-auto max-w-[720px] border-t border-[#E3DED2]">
          {FAQS.map((f, i) => {
            const open = openFaq === i;
            return (
              <div key={f.q} className="border-b border-[#E3DED2]">
                <button
                  type="button"
                  onClick={() => setOpenFaq(open ? null : i)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left"
                >
                  <span className={`text-sm ${serifH}`}>{f.q}</span>
                  {open ? (
                    <Minus className="size-4 shrink-0 text-[#1F3A5C]" />
                  ) : (
                    <Plus className="size-4 shrink-0 text-[#1F3A5C]" />
                  )}
                </button>
                {open && <p className="pb-4 text-xs leading-5 text-[#5C6672]">{f.a}</p>}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
