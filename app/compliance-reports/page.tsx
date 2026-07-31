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
      <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
    </div>
  );
}

// ─── DATA ──────────────────────────────────────────────────────────────────────
type Status = "available" | "in-progress" | "on-request";
const STATUS_META: Record<Status, { label: string; cls: string }> = {
  available: { label: "Available on Request", cls: "text-[#0d9488]" },
  "in-progress": { label: "In Progress", cls: "text-[#d9720f]" },
  "on-request": { label: "By Request Only", cls: "text-slate-400" },
};

type Doc = { title: string; body: string; status: Status };
const DOCS: Doc[] = [
  { title: "Security Overview", body: "A structured summary of identity, access, encryption posture, and infrastructure controls.", status: "available" },
  { title: "SOC 2 Report", body: "Status and timeline provided directly on request. Certification claims are used only once formally confirmed.", status: "in-progress" },
  { title: "ISO 27001", body: "Current alignment status and roadmap available through the enterprise review pathway.", status: "in-progress" },
  { title: "Penetration Test Summary", body: "A summary-level overview of the most recent independent security assessment.", status: "available" },
  { title: "Subprocessor List", body: "Current third-party subprocessors and the review process applied before approval.", status: "available" },
  { title: "Data Processing Addendum (DPA)", body: "Standard data-processing terms, provided for legal and privacy review alongside contract discussions.", status: "available" },
  { title: "Business Continuity & DR Overview", body: "A summary of business continuity and disaster recovery planning at a level appropriate for procurement review.", status: "available" },
  { title: "Vendor Security Questionnaire Response", body: "Completed responses to standard vendor security questionnaires (e.g., SIG Lite, CAIQ-style formats).", status: "available" },
  { title: "Incident Response Summary", body: "Incident response process overview, provided during formal security review rather than published broadly.", status: "on-request" },
];

const PROCESS = [
  { n: 1, title: "Submit Request", body: "Tell us which documents you need and your role in the review." },
  { n: 2, title: "NDA (if Required)", body: "Sensitive materials may require a mutual NDA before delivery." },
  { n: 3, title: "Review & Delivery", body: "Our team confirms scope and delivers the requested materials." },
  { n: 4, title: "Follow-Up Q&A", body: "Security, privacy, or legal teams can request a live follow-up briefing." },
];

const WHO = [
  { role: "Security / IT Reviewers", body: "Security overview, penetration test summary, data protection, and access control documentation." },
  { role: "Procurement Teams", body: "Vendor security questionnaire responses, subprocessor list, and business continuity overview." },
  { role: "Legal & Compliance", body: "Data Processing Addendum, contractual terms, and certification status confirmation." },
  { role: "Auditors & Assurance Teams", body: "Evidence-ready documentation supporting your own audit or assurance procedures." },
];

const DOC_OPTIONS = [
  "Security Overview", "SOC 2 Status", "ISO 27001 Status", "Penetration Test Summary",
  "Subprocessor List", "DPA", "Business Continuity Overview", "Vendor Questionnaire Response",
];

const ROLE_OPTIONS = ["Security / IT", "Procurement", "Legal & Compliance", "Auditor / Assurance", "Other"];

const FAQS = [
  { q: "Do you have SOC 2 or ISO 27001 certification?", a: "Current status is provided directly upon request. We do not make certification claims here beyond what has been formally confirmed at the time you ask." },
  { q: "Can we sign an NDA before receiving documents?", a: "Yes. Sensitive materials may require a mutual NDA before delivery — this is a standard part of the request process." },
  { q: "How current is the documentation?", a: "Documentation reflects status at the time of request. Availability changes as certifications, audits, and reviews are completed." },
  { q: "Can auditors request these reports directly?", a: "Yes. Auditors and assurance teams can request evidence-ready documentation to support your own audit or assurance procedures." },
  { q: "Do these reports guarantee regulatory compliance?", a: "No. The documentation supports your review; it does not itself constitute a compliance guarantee or certification claim beyond what is formally confirmed." },
  { q: "Who do I contact for a live security briefing?", a: "Submit a request and note that you'd like a follow-up briefing — our security team will arrange a live session for your reviewers." },
];

// ─── inline SVG helpers ─────────────────────────────────────────────────────────
function Chevron({ open }: { open: boolean }) {
  return <svg viewBox="0 0 24 24" className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function DocIcon({ className = "h-4 w-4" }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 3h6l4 4v12a2 2 0 01-2 2H8a2 2 0 01-2-2V5a2 2 0 012-2z" strokeLinecap="round" strokeLinejoin="round" /><path d="M14 3v4h4" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

const eyebrowAmber = "flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#d9720f]";
const eyebrowTeal = "flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#0d9488]";
const serifH = "font-serif leading-tight";

// Reusable cream band — flips to dark gray in dark mode (unlike an inline style).
const creamBand = "bg-[#f5efe0] dark:bg-gray-800/60";

// ─── PAGE ───────────────────────────────────────────────────────────────────────
export default function Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Request form state
  const [form, setForm] = useState({ name: "", email: "", company: "", role: ROLE_OPTIONS[0] });
  const [docs, setDocs] = useState<string[]>([]);
  const [agree, setAgree] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggleDoc = (d: string) =>
    setDocs((prev) => (prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d]));

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  const canSubmit = form.name.trim() && emailOk && agree;

  const amberBtn = "rounded-md px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90";
  const field = "mt-1.5 w-full rounded-md border border-black/15 px-3 py-2.5 text-sm text-[#16233d] focus:border-[#0d9488] focus:outline-none focus:ring-1 focus:ring-[#0d9488] dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100";

  return (
    <main className="bg-[#faf7f0] font-sans text-[#16233d] dark:bg-gray-900 dark:text-white">

      {/* ─── Hero (navy — intentional dark band in both modes) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8 lg:py-20" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="text-white">
            <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#0d9488]">
              <span className="h-px w-6 bg-[#0d9488]" /> Trust Center
            </p>
            <h1 className={`mt-5 max-w-xl text-[clamp(2rem,4.5vw,2.9rem)] ${serifH}`}>Compliance reports and documentation, for the people who have to check.</h1>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-slate-300/85">
              Security overviews, data handling summaries, subprocessor lists, and review materials — available through
              a structured request process for procurement, security, and legal reviewers.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#request" className={amberBtn} style={{ backgroundColor: AMBER }}>Request Compliance Reports</a>
              <a href="#" className="rounded-md border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10">Back to Trust Center</a>
            </div>
            <p className="mt-6 max-w-lg text-xs leading-relaxed text-slate-400/70">
              Documentation reflects current status at time of request and is provided subject to confidentiality terms.
              It does not itself constitute a compliance guarantee or certification claim beyond what is formally confirmed.
            </p>
          </div>
          <ImageSlot src="/images/Rectangle 5.png" alt="Reviewer checking compliance documentation" ratio="aspect-[4/3]" />
        </div>
      </section>

      {/* ─── What's available (status cards) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> What's Available</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Documentation reviewers actually ask for.</h2>
          <p className="mt-3 max-w-xl text-sm text-slate-500 dark:text-gray-400">
            Status reflects current documentation state. Availability may change as certifications, audits, and reviews are completed.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DOCS.map((d) => (
              <div key={d.title} className="rounded-xl border border-black/10 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-md text-[#d9720f]" style={{ backgroundColor: "#efe6d2" }}>
                    <DocIcon className="h-4 w-4" />
                  </span>
                  <span className={`text-[10px] font-bold uppercase tracking-[0.12em] ${STATUS_META[d.status].cls}`}>{STATUS_META[d.status].label}</span>
                </div>
                <h3 className="mt-3 text-base font-bold">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-white">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Request process (cream band — flips in dark mode) ─── */}
      <section className={`px-4 py-16 sm:px-6 md:px-8 ${creamBand}`}>
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Request Process</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>A structured path, not a public download.</h2>
          <p className="mt-3 max-w-xl text-sm text-slate-600 dark:text-gray-300">
            Reports are shared directly rather than published openly, to protect the specificity buyers actually need.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((s) => (
              <div key={s.n}>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#0d9488] text-sm font-bold text-[#0d9488]">{s.n}</div>
                <h3 className="mt-3 text-sm font-bold">{s.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-gray-400">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Who should request (list) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-4xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Who Should Request</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Wherever you sit in the review, there's a path.</h2>
          <div className="mt-8 divide-y divide-black/10 border-y border-black/10 dark:divide-gray-700 dark:border-gray-700">
            {WHO.map((w) => (
              <div key={w.role} className="grid gap-2 py-5 md:grid-cols-[220px_1fr]">
                <p className="text-[15px] font-bold">{w.role}</p>
                <p className="text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Request form (cream band — flips in dark mode) ─── */}
      <section id="request" className={`scroll-mt-20 px-4 py-16 sm:px-6 md:px-8 ${creamBand}`}>
        <div className="mx-auto max-w-3xl">
          <p className={eyebrowTeal}><span className="h-px w-6 bg-[#0d9488]" /> Request Compliance Reports</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Tell us what you need, and who's asking.</h2>

          {submitted ? (
            <div className="mt-8 rounded-2xl border border-[#0d9488]/30 bg-white p-8 text-center shadow-sm dark:bg-gray-900">
              <h3 className={`text-xl ${serifH}`}>Request received.</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-gray-300">
                Thanks{form.name ? `, ${form.name.split(" ")[0]}` : ""}. Our team will review your request and follow up at
                <span className="font-semibold"> {form.email}</span>. Sensitive materials may require a mutual NDA before delivery.
              </p>
            </div>
          ) : (
            <div className="mt-8 rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
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
                  <label htmlFor="company" className="text-sm font-semibold">Company</label>
                  <input id="company" className={field} value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
                </div>
                <div>
                  <label htmlFor="role" className="text-sm font-semibold">Your role</label>
                  <select id="role" className={field} value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}>
                    {ROLE_OPTIONS.map((r) => <option key={r}>{r}</option>)}
                  </select>
                </div>
              </div>

              <p className="mt-5 text-sm font-semibold">Which documents do you need?</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {DOC_OPTIONS.map((d) => {
                  const on = docs.includes(d);
                  return (
                    <button key={d} type="button" onClick={() => toggleDoc(d)}
                      className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${on ? "border-transparent bg-[#0d9488] text-white" : "border-black/15 text-slate-600 hover:border-[#0d9488] hover:text-[#0d9488] dark:border-gray-600 dark:text-gray-300"}`}>
                      {d}
                    </button>
                  );
                })}
              </div>

              <label className="mt-5 flex items-start gap-2.5 text-sm text-slate-600 dark:text-gray-300">
                <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} className="mt-0.5 h-4 w-4 accent-[#0d9488]" />
                <span>I understand certain materials may require a mutual NDA before delivery, and that documentation reflects status at time of request.</span>
              </label>

              <button
                type="button"
                onClick={() => canSubmit && setSubmitted(true)}
                disabled={!canSubmit}
                className={`mt-6 ${amberBtn} ${canSubmit ? "" : "cursor-not-allowed opacity-50"}`}
                style={{ backgroundColor: AMBER }}
              >
                Request Compliance Reports
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-3xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Frequently Asked</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Compliance questions, answered plainly.</h2>
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

      {/* ─── Final CTA (navy — intentional dark band in both modes) ─── */}
      <section className="px-4 pb-20 sm:px-6 md:px-8">
        <div className="mx-auto max-w-5xl rounded-2xl px-8 py-14 text-center" style={{ backgroundColor: NAVY }}>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0d9488]">Before You Deploy</p>
          <h2 className={`mx-auto mt-3 max-w-xl text-[clamp(1.6rem,3vw,2.2rem)] text-white ${serifH}`}>Get the documentation your review actually needs.</h2>
          <p className="mx-auto mt-3 max-w-lg text-[15px] leading-relaxed text-slate-300/80">
            Request compliance reports, or start with the broader Trust Center for governance, privacy, and security context first.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#request" className={amberBtn} style={{ backgroundColor: AMBER }}>Request Compliance Reports</a>
            <a href="#" className="rounded-md border border-white/25 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10">Visit Trust Center</a>
            <a href="#" className="px-3 py-2.5 text-sm font-semibold text-[#0d9488] hover:underline">Privacy & Security Overview →</a>
          </div>
        </div>
      </section>
    </main>
  );
}