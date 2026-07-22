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
      <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
    </div>
  );
}

// ─── DATA ──────────────────────────────────────────────────────────────────────
const OFFICES = [
  { label: "USA Headquarters", lines: ["1401 21st Street, Suite R", "Sacramento, CA 95811, USA"] },
  { label: "EU Office", lines: ["167-169 Great Portland Street, 5th Floor", "London W1W 5PF, UK"] },
];

const DEPARTMENTS = [
  { name: "Sales", email: "sales@zoikologia.com" },
  { name: "Support", email: "support@zoikologia.com" },
  { name: "Security & Privacy", email: "security@zoikologia.com" },
  { name: "Legal & Compliance", email: "legal@zoikologia.com" },
  { name: "Press & Media", email: "press@zoikologia.com" },
  { name: "Partnerships", email: "partners@zoikologia.com" },
  { name: "Careers", email: "careers@zoikologia.com" },
];

const HOURS = [
  { label: "Mon-Fri", value: "8:00 AM – 6:00 PM ET" },
  { label: "Mon-Fri (UK)", value: "9:00 AM – 5:30 PM GMT" },
  { label: "Sat-Sun", value: "Support only, limited" },
];

const TRUST_CARDS = [
  { title: "Trust Center", body: "Governance, privacy, security, and source authority — the full picture in one place.", link: "Visit Trust Center" },
  { title: "Privacy & Security Overview", body: "Tenant boundaries, access controls, and data handling posture.", link: "Explore" },
  { title: "Compliance Reports", body: "Security overviews, subprocessor lists, DPA, and vendor questionnaire responses.", link: "Request Reports" },
  { title: "Platform Limits & Escalation", body: "Where Kriton™ is designed to clarify, limit, or hand off to a human.", link: "Explore" },
];

type DoorCard = { title: string; body: string; link: string; img: string };
const DOORS: DoorCard[] = [
  { title: "Press & Media", body: "Interview requests, comments, and editorial inquiries — routed to our communications team.", link: "Submit Media Inquiry", img: "/images/Enterprise finance team reviewing reports.png" },
  { title: "Partnerships", body: "Implementation, channel, academic, and technology integration partners.", link: "Submit Partnership Inquiry", img: "/images/existing.png" },
  { title: "Careers", body: "Explore open roles and join our talent network for future opportunities.", link: "View Careers", img: "/images/Team member exploring career opportunities at ZoikoLogia.png" },
];

const ROLE_OPTIONS = ["Select your role", "Executive / Leadership", "Finance / Accounting", "Security / IT", "Procurement", "Legal & Compliance", "Partnerships", "Press / Analyst", "Other"];

const FAQS = [
  { q: "How do I contact ZoikoLogia™ for a demo?", a: "Use the \"Book a Demo\" path above. It's for teams ready to evaluate ZoikoLogia™ and Kriton™ against a real use case." },
  { q: "How do I request an enterprise briefing?", a: "Submit the contact form and select your role — enterprise and security inquiries are routed to the right team, typically within one business day." },
  { q: "How do existing customers get support?", a: "Email support@zoikologia.com or use your in-product support channel. Tickets are prioritized by urgency at submission." },
  { q: "Can I submit accounting, tax, audit, payroll, or legal questions through this form?", a: "No. This form routes inquiries only — please do not submit confidential client data or professional-advice questions. It does not provide professional advice." },
  { q: "How do I request security or privacy information?", a: "Start with the Trust Center and Compliance Reports request process, or email security@zoikologia.com for reviewer-specific materials." },
  { q: "How do media or analysts contact ZoikoLogia™?", a: "Use the Press & Media door below or email press@zoikologia.com — inquiries route to our communications team." },
  { q: "How do partners contact ZoikoLogia™?", a: "Use the Partnerships door below or email partners@zoikologia.com for implementation, channel, academic, and technology partnerships." },
  { q: "How do I contact ZoikoLogia™ about careers?", a: "Visit the Careers door below to explore open roles and join our talent network for future opportunities." },
];

// ─── inline SVG helpers ─────────────────────────────────────────────────────────
function Chevron({ open }: { open: boolean }) {
  return <svg viewBox="0 0 24 24" className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function Check({ className = "h-4 w-4" }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

const eyebrowAmber = "flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#d9720f]";
const serifH = "font-serif leading-tight";
const tealLink = "text-sm font-semibold text-[#0d9488] hover:underline";
const amberLink = "text-sm font-semibold text-[#d9720f] hover:underline";
const creamBand = "bg-[#f5efe0] dark:bg-gray-800/60";

// ─── PAGE ───────────────────────────────────────────────────────────────────────
export default function Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const [form, setForm] = useState({ name: "", email: "", org: "", role: ROLE_OPTIONS[0], teamSize: "", region: "", useCase: "" });
  const [agree, setAgree] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  const canSubmit = form.name.trim() && emailOk && agree;

  const amberBtn = "rounded-md px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90";
  const field = "mt-1.5 w-full rounded-md border border-black/15 px-3 py-2.5 text-sm text-[#16233d] focus:border-[#0d9488] focus:outline-none focus:ring-1 focus:ring-[#0d9488] dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100";

  return (
    <main className="bg-[#faf7f0] font-sans text-[#16233d] dark:bg-gray-900 dark:text-white">

      {/* ─── Hero (navy) + contact form ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8 lg:py-20" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto max-w-6xl">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div className="text-white">
              <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#0d9488]">
                <span className="h-px w-6 bg-[#0d9488]" /> Contact ZoikoLogia™
              </p>
              <h1 className={`mt-5 max-w-xl text-[clamp(2rem,4.5vw,2.9rem)] ${serifH}`}>Get the right ZoikoLogia™ team involved.</h1>
              <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-slate-300/85">
                Tell us what you need and we'll route your inquiry to the right commercial, security, support, media,
                partnership, education, or talent team.
              </p>
              <div className="mt-6 max-w-lg rounded-lg border border-white/10 bg-white/[0.04] p-4">
                <p className="text-xs leading-relaxed text-slate-300/80">
                  Please do not submit confidential client data, regulated personal data, or accounting, tax, audit,
                  payroll, or legal advice questions through this form. This page routes inquiries — it does not provide
                  professional advice.
                </p>
              </div>
            </div>

            {/* Hero image + floating routing badge */}
            <div className="relative">
              <ImageSlot src="/images/Team member ready to connect with the right ZoikoLogia contact.png" alt="ZoikoLogia support team" ratio="aspect-[4/3]" rounded="rounded-2xl" />
              <div className="absolute -bottom-4 left-4 right-4 flex items-center gap-2 rounded-xl border border-white/10 bg-[#0f1a30]/95 px-4 py-3 text-white shadow-xl">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0d9488] text-white"><Check className="h-3 w-3" /></span>
                <span className="text-xs text-slate-200">Every inquiry is routed to a real team — never a generic inbox.</span>
              </div>
            </div>
          </div>

          {/* Contact form card */}
          <div className="mt-12 rounded-2xl bg-[#faf7f0] p-6 shadow-xl sm:p-8 dark:bg-gray-900">
            <h2 className="text-xl font-bold">Contact Us</h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-gray-400">For teams ready to evaluate ZoikoLogia™ with Kriton™ against a real use case.</p>

            {submitted ? (
              <div className="mt-8 rounded-xl border border-[#0d9488]/30 bg-white p-8 text-center dark:bg-gray-800">
                <h3 className={`text-xl ${serifH}`}>Inquiry received.</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-gray-300">
                  Thanks{form.name ? `, ${form.name.split(" ")[0]}` : ""}. We'll route your inquiry to the appropriate
                  ZoikoLogia™ team and follow up at <span className="font-semibold">{form.email}</span>, typically within one business day.
                </p>
              </div>
            ) : (
              <div className="mt-6">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="text-sm font-semibold">Full name</label>
                    <input id="name" className={field} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-semibold">Work email</label>
                    <input id="email" type="email" className={field} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  </div>
                  <div>
                    <label htmlFor="org" className="text-sm font-semibold">Organization</label>
                    <input id="org" className={field} value={form.org} onChange={(e) => setForm({ ...form, org: e.target.value })} />
                  </div>
                  <div>
                    <label htmlFor="role" className="text-sm font-semibold">Role</label>
                    <select id="role" className={field} value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}>
                      {ROLE_OPTIONS.map((r) => <option key={r}>{r}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="team" className="text-sm font-semibold">Team size</label>
                    <input id="team" className={field} placeholder="e.g. 25" value={form.teamSize} onChange={(e) => setForm({ ...form, teamSize: e.target.value })} />
                  </div>
                  <div>
                    <label htmlFor="region" className="text-sm font-semibold">Preferred region / time zone</label>
                    <input id="region" className={field} placeholder="e.g. US Eastern" value={form.region} onChange={(e) => setForm({ ...form, region: e.target.value })} />
                  </div>
                </div>

                <div className="mt-5">
                  <label htmlFor="usecase" className="text-sm font-semibold">What would you like to evaluate?</label>
                  <textarea id="usecase" rows={3} placeholder="Tell us about your use case" className={`${field} resize-y`} value={form.useCase} onChange={(e) => setForm({ ...form, useCase: e.target.value })} />
                </div>

                <div className="mt-5 rounded-md border-l-4 border-[#e8912a] bg-[#efe6d2] px-4 py-3 text-xs leading-relaxed text-[#7a5a12] dark:bg-amber-950/40 dark:text-amber-200/90">
                  Please do not submit confidential personal data, regulated data, tax identifiers, payroll data, audit evidence, contracts, or privileged material through this form.
                </div>

                <label className="mt-5 flex items-start gap-2.5 text-sm text-slate-600 dark:text-gray-300">
                  <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} className="mt-0.5 h-4 w-4 accent-[#0d9488]" />
                  <span>I agree to the Privacy Notice and Terms, and understand my inquiry will be routed to the appropriate ZoikoLogia™ team.</span>
                </label>

                <button type="button" onClick={() => canSubmit && setSubmitted(true)} disabled={!canSubmit}
                  className={`mt-6 ${amberBtn} ${canSubmit ? "" : "cursor-not-allowed opacity-50"}`} style={{ backgroundColor: AMBER }}>
                  Submit Request
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ─── Contact details (offices / departments / hours) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Contact Details</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Direct lines, if you already know where to go.</h2>

          <div className="mt-8 grid gap-6 rounded-2xl border border-black/10 bg-white p-6 shadow-sm sm:p-8 md:grid-cols-3 dark:border-gray-700 dark:bg-gray-900">
            {/* Offices */}
            <div className="md:border-r md:border-black/10 md:pr-6 md:dark:border-gray-700">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0d9488]">Offices</p>
              <div className="mt-4 space-y-4">
                {OFFICES.map((o) => (
                  <div key={o.label}>
                    <p className="text-sm font-bold">{o.label}</p>
                    {o.lines.map((l) => <p key={l} className="text-sm text-slate-600 dark:text-gray-300">{l}</p>)}
                  </div>
                ))}
              </div>
              <p className="mt-4 rounded-md bg-[#f5efe0] px-3 py-2 text-xs leading-relaxed text-slate-600 dark:bg-gray-800 dark:text-gray-300">
                We work remote-first. Office addresses reflect registered locations, not walk-in reception.
              </p>
            </div>

            {/* Departments */}
            <div className="md:border-r md:border-black/10 md:px-6 md:dark:border-gray-700">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0d9488]">Departments</p>
              <div className="mt-4 space-y-3">
                {DEPARTMENTS.map((d) => (
                  <div key={d.name} className="flex items-center justify-between gap-3 text-sm">
                    <span className="text-slate-600 dark:text-gray-300">{d.name}</span>
                    <a href={`mailto:${d.email}`} className="font-medium text-[#0d9488] hover:underline">{d.email}</a>
                  </div>
                ))}
              </div>
            </div>

            {/* Hours & response */}
            <div className="md:pl-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0d9488]">Hours & Response</p>
              <div className="mt-4 space-y-3">
                {HOURS.map((h) => (
                  <div key={h.label} className="flex items-center justify-between gap-3 text-sm">
                    <span className="font-medium">{h.label}</span>
                    <span className="text-slate-600 dark:text-gray-300">{h.value}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 rounded-md bg-[#f5efe0] px-3 py-2 text-xs leading-relaxed text-slate-600 dark:bg-gray-800 dark:text-gray-300">
                Sales and enterprise inquiries: typically within 1 business day. Support tickets: prioritized by urgency at submission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Trust / security / procurement cards ─── */}
      <section className="px-4 pb-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Trust, Security & Procurement</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Reviewing before you talk to sales? Start here instead.</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TRUST_CARDS.map((c) => (
              <div key={c.title} className="flex flex-col rounded-xl border border-black/10 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <h3 className="text-base font-bold">{c.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-gray-300">{c.body}</p>
                <a href="#" className={`${tealLink} mt-4 inline-block`}>{c.link} →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Media / partnerships / careers doors (cream band) ─── */}
      <section className={`px-4 py-16 sm:px-6 md:px-8 ${creamBand}`}>
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Media, Partnerships & Careers</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>A few more doors in, depending on why you're really here.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {DOORS.map((d) => (
              <article key={d.title} className="flex flex-col overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <ImageSlot src={d.img} alt={d.title} ratio="aspect-[16/10]" rounded="rounded-none" />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-base font-bold">{d.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-gray-300">{d.body}</p>
                  <a href="#" className={`${amberLink} mt-4 inline-block`}>{d.link} →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Remote-first note ─── */}
      <section className="px-4 py-12 sm:px-6 md:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-start gap-3 rounded-xl border border-[#0d9488]/25 bg-[#0d9488]/5 px-5 py-4 dark:border-teal-900 dark:bg-teal-950/30">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0d9488] text-white"><Check className="h-3.5 w-3.5" /></span>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-gray-300">
              We work remote-first, across regions. Inquiries are routed to the nearest available team by business hours
              and time zone. We don't guarantee a specific response time or local office presence in every jurisdiction —
              your confirmation will include a clear next step once your inquiry is routed.
            </p>
          </div>
        </div>
      </section>

      {/* ─── FAQ (cream band) ─── */}
      <section className={`px-4 py-16 sm:px-6 md:px-8 ${creamBand}`}>
        <div className="mx-auto max-w-3xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Frequently Asked</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Contact questions, answered plainly.</h2>
          <div className="mt-8 divide-y divide-black/10 border-y border-black/10 dark:divide-gray-700 dark:border-gray-700">
            {FAQS.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q}>
                  <button type="button" onClick={() => setOpenFaq(open ? null : i)} aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 py-4 text-left text-[15px] font-semibold">
                    {f.q}<Chevron open={open} />
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