"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useCallback } from "react";

/* ── tokens ────────────────────────────────────────────────────────────── */
const INK   = "#16233d";
const NAVY  = "#0f1a30";
const AMBER = "#e8912a";

const eyebrowAmber = "flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#d9720f]";
const serifH       = "font-serif leading-tight";
const tealLink     = "text-sm font-semibold text-[#0d9488] hover:underline";
const cream        = "bg-[#f5efe0] dark:bg-gray-800/60";

/* ── atoms ─────────────────────────────────────────────────────────────── */
function ImageSlot({ src, alt, ratio = "aspect-[4/3]", rounded = "rounded-xl", className = "" }:
  { src: string; alt: string; ratio?: string; rounded?: string; className?: string }) {
  return (
    <div className={`relative w-full overflow-hidden bg-slate-200 dark:bg-gray-800 ${ratio} ${rounded} ${className}`}>
      <Image src={src} alt={alt} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
    </div>
  );
}

/* ── data ──────────────────────────────────────────────────────────────── */
const PATH_CARDS = [
  { title: "Enterprise Briefing", body: "Use when several stakeholders need a decision-focused conversation across product, trust, governance, or architecture.", cta: "Continue with briefing request", href: "#form", amber: true, img: "/images/Colleagues comparing notes on an evaluation question.png" },
  { title: "Book a Demo", body: "Use when you are exploring product fit and want a guided product walkthrough or discussion.", cta: "Book a Demo →", href: "/contact-us", img: "/images/Person exploring a product on a laptop.png" },
  { title: "Request Pilot", body: "Use when you have a defined workflow or outcome for a structured evaluation. Stakeholder review required.", cta: "Request Pilot →", href: "/contact-us", img: "/images/Team member defining a workflow to evaluate.png" },
  { title: "Trust & Evidence", body: "Use to access published administrative evaluation materials without a conversation.", cta: "Explore Trust →", href: "/privacy-security", img: "/images/Reviewer reading evaluation evidence.png" },
  { title: "Provider Due Diligence", body: "Use for structured provider evaluation and vendor evaluation and evidence review.", cta: "Open Provider Due Diligence →", href: "/privacy-security", img: "/images/Vendor risk reviewer working through a checklist.png" },
  { title: "API Reference", body: "Use for source-governed technical interface documentation when source-approved.", cta: "Open API Reference →", href: "/api-reference", img: "/images/Engineer reading technical documentation.png" },
];
const STAKEHOLDER_ROLES = [
  { label: "Executive sponsor",      img: "/images/Executive sponsor reviewing a decision summary.png" },
  { label: "Finance / operations",    img: "/images/Finance and operations lead.png" },
  { label: "IT / architecture",       img: "/images/IT and architecture reviewer.png" },
  { label: "Security / privacy",      img: "/images/Security and privacy reviewer.png" },
  { label: "Compliance / governance", img: "/images/Compliance and governance reviewer.png" },
  { label: "Procurement / legal",     img: "/images/Procurement and legal reviewer.png" },
];

const BRIEFING_TOPICS = [
  { id: "product_workflow", label: "Product workflow", desc: "Workflow Mode and Review Mode purpose.", href: "/kriton-ai" },
  { id: "trust",            label: "Trust",            desc: "The governed evaluation hub.",               href: "/privacy-security" },
  { id: "compliance",       label: "Compliance",       desc: "Compliance information and evidence status.",href: "/ai-safety-page" },
  { id: "governance",       label: "Governance",       desc: "Accountability and oversight information.",  href: "/ai-safety-page" },
  { id: "privacy_security", label: "Privacy & Security", desc: "Privacy and security information owner.", href: "/privacy-security" },
  { id: "due_diligence",    label: "Provider Due Diligence", desc: "Structured provider evaluation.",     href: "/privacy-security" },
  { id: "accessibility",    label: "Accessibility",    desc: "Posture, evidence and support routes.",      href: "/ai-safety-page" },
  { id: "technical",        label: "Technical interfaces", desc: "Technical reference when source-approved.", href: "/api-reference" },
  { id: "product_changes",  label: "Product & API changes", desc: "Approved chronological change context.", href: "/api-reference" },
];

const SIDEBAR_LINKS = [
  { label: "Trust hub",             href: "/privacy-security" },
  { label: "Compliance",            href: "/ai-safety-page" },
  { label: "Privacy & Security",    href: "/privacy-security" },
  { label: "Provider Due Diligence",href: "/privacy-security" },
  { label: "Accessibility",         href: "/ai-safety-page" },
  { label: "API Reference",         href: "/api-reference" },
  { label: "Release Notes",         href: "/api-reference" },
];

const OBJECTIVES = [
  "Trust & risk review",
  "Product evaluation",
  "Architecture review",
  "Compliance assessment",
  "Vendor due diligence",
  "Other",
];

const RELATIONSHIPS = [
  "Prefer not to say",
  "New evaluator",
  "Existing user",
  "Former user",
  "Partner / reseller",
  "Analyst / press",
];

const TIMEZONES = [
  "No preference",
  "Americas (Eastern)",
  "Americas (Pacific)",
  "Europe (UK / Western)",
  "Europe (Central)",
  "East Asia & Pacific",
  "Middle East & Africa",
];

const DESTINATION_ROWS = [
  { need: "General sales or commercial conversation",    today: "We don't take pricing, plans, schedules, account terms, or SLAs here. Use the approved paths below or contact sales directly.",   dest: "Contact Sales",    href: "/contact-us" },
  { need: "Structured process, forms, contracting",      today: "Enterprise workflows route to Provider Due Diligence. A briefing can capture decision context but isn't a process kickoff.",      dest: "Provider Due Diligence", href: "/privacy-security" },
  { need: "Feature or exception enquiry",                 today: "No partner trades or programs published here.",                                                                                   dest: "Feature Request",  href: "/contact-us" },
  { need: "Technology infrastructure",                    today: "Not yet available in public position. A briefing request provides leadership infrastructure.",                                      dest: "Architecture Review", href: "/contact-us" },
  { need: "Careers",                                      today: "Job applications aren't accepted here.",                                                                                          dest: "Careers",          href: "/contact-us" },
  { need: "Legal and corporate matters",                  today: "No contract advice or corporate-group summary. Use existing approved legal sources where present.",                                  dest: "Legal",            href: "/contact-us" },
];

const FAQS = [
  { q: "What is Request Enterprise Briefing?",                          a: "A request path for starting enterprise evaluation contact, and the protocol, trust and technical questions your stakeholders need to clarify. It is not a guaranteed meeting or a defined delivery program." },
  { q: "How is it different from Book a Demo?",                         a: "A demo is product-focused and typically single-stakeholder. A briefing supports multi-stakeholder evaluation with decision context and coordination." },
  { q: "When should I Request Pilot instead?",                          a: "When you already have a defined workflow, success criteria, and stakeholder approval for a structured evaluation." },
  { q: "What topics can I include?",                                    a: "Product workflow, trust, compliance, governance, privacy & security, provider due diligence, accessibility, technical interfaces, and product changes." },
  { q: "What should I include in the request?",                         a: "The decision or evaluation you're preparing for, the objective, any relevant internal decision date, and which topics matter to your evaluation." },
  { q: "Will an executive or specific specialist attend?",              a: "Attendance depends on the topics selected and availability. Specialist involvement is not guaranteed." },
  { q: "How long is the briefing?",                                     a: "Timing depends on scope and stakeholder count. There is no fixed format." },
  { q: "When will someone respond?",                                    a: "Response times vary. Submission does not guarantee a specific turnaround." },
  { q: "Is the briefing virtual or in person?",                         a: "Format depends on availability and coordination. This form doesn't confirm format." },
  { q: "Can I send confidential documents?",                            a: "Do not submit confidential, regulated, credential, customer or production data through this public form." },
  { q: "Can procurement use this page?",                                a: "Yes. Procurement teams can use this to initiate evaluation coordination, though structured due diligence has its own path." },
  { q: "Do I need to be an existing customer?",                         a: "No. This path is open to new evaluators, existing users, partners, and analysts." },
];

/* ── form state ────────────────────────────────────────────────────────── */
type FormData = {
  objective: string;
  description: string;
  clarify: string;
  internalDate: string;
  topics: string[];
  functions: string[];
  name: string;
  email: string;
  organization: string;
  role: string;
  relationship: string;
  additionalContext: string;
  timezone: string;
  privacyAgreed: boolean;
  marketingOptIn: boolean;
};

const emptyForm: FormData = {
  objective: "", description: "", clarify: "", internalDate: "",
  topics: [], functions: [],
  name: "", email: "", organization: "", role: "",
  relationship: "Prefer not to say", additionalContext: "",
  timezone: "No preference",
  privacyAgreed: false, marketingOptIn: false,
};

/* ═══════════════════════════════════════════════════════════════════════ */
export default function RequestEnterpriseBriefingPage() {
  const [step, setStep]   = useState(1);
  const [form, setForm]   = useState<FormData>(emptyForm);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const set = useCallback(<K extends keyof FormData>(key: K, val: FormData[K]) =>
    setForm(prev => ({ ...prev, [key]: val })), []);

  const toggleTopic = (id: string) =>
    setForm(prev => ({
      ...prev,
      topics: prev.topics.includes(id) ? prev.topics.filter(t => t !== id) : [...prev.topics, id],
    }));

  const toggleFunction = (fn: string) =>
    setForm(prev => ({
      ...prev,
      functions: prev.functions.includes(fn) ? prev.functions.filter(f => f !== fn) : [...prev.functions, fn],
    }));

  const amberBtn  = "inline-block rounded-md px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90";
  const ghostBtn  = "rounded-md border border-black/15 px-5 py-2.5 text-sm font-semibold text-[#16233d] transition-colors hover:border-[#0d9488] hover:text-[#0d9488] dark:border-gray-600 dark:text-gray-100";

  /* ── step labels ───── */
  const STEPS = ["Decision context", "Topics & stakeholders", "Requester & coordination", "Review & submit"];

  /* ── sidebar ────────── */
  const Sidebar = () => (
    <div className="rounded-xl border border-black/10 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
      <p className="text-sm font-bold">Prefer to look first?</p>
      <p className="mt-2 text-xs leading-relaxed text-slate-500">
        Everything below is open to you now, with no form required.
      </p>
      <div className="mt-4 divide-y divide-black/5 dark:divide-gray-700">
        {SIDEBAR_LINKS.map(l => (
          <Link key={l.label} href={l.href}
            className="flex items-center justify-between py-2.5 text-sm font-semibold hover:text-[#0d9488]">
            {l.label} <span className="text-slate-400">→</span>
          </Link>
        ))}
      </div>
      <p className="mt-4 text-xs leading-relaxed text-slate-400">
        Each destination owns its own claims and evidence. We link to them rather than copy them here.
      </p>
    </div>
  );

  /* ── step indicator ─── */
  const StepIndicator = () => (
    <div className="flex rounded-lg border border-black/10 bg-white dark:border-gray-700 dark:bg-gray-900">
      {STEPS.map((s, i) => {
        const n  = i + 1;
        const done    = n < step;
        const current = n === step;
        return (
          <button key={s} type="button"
            onClick={() => { if (done || current) setStep(n); }}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
              current ? "border-b-2 border-[#16233d] text-[#16233d]" :
              done    ? "text-[#0d9488]" : "text-slate-400"
            } ${i > 0 ? "border-l border-black/10 dark:border-gray-700" : ""}`}>
            <span className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
              done ? "bg-[#0d9488] text-white" : current ? "bg-[#16233d] text-white" : "bg-gray-200 text-slate-500"
            }`}>{n}</span>
            <span className="hidden sm:inline">{s}</span>
          </button>
        );
      })}
    </div>
  );

  /* ── input helpers ──── */
  const Label = ({ children, required }: { children: React.ReactNode; required?: boolean }) => (
    <label className="block text-sm font-semibold">
      {children}{required && <span className="ml-0.5 text-red-500">*</span>}
    </label>
  );

  const Input = ({ value, onChange, placeholder }: { value: string; onChange: (v: string) => void; placeholder?: string }) => (
    <input type="text" value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
      className="mt-1.5 w-full rounded-md border border-black/10 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#0d9488] dark:border-gray-700 dark:bg-gray-900" />
  );

  const Select = ({ value, onChange, options }: { value: string; onChange: (v: string) => void; options: string[] }) => (
    <select value={value} onChange={e => onChange(e.target.value)}
      className="mt-1.5 w-full rounded-md border border-black/10 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#0d9488] dark:border-gray-700 dark:bg-gray-900">
      {options.map(o => <option key={o} value={o}>{o}</option>)}
    </select>
  );

  return (
    <main className="bg-[#faf7f0] font-sans text-[#16233d] dark:bg-gray-900 dark:text-white">

      {/* ═══ HERO ═════════════════════════════════════════════════════════ */}
      <section className="px-4 py-16 sm:px-6 md:px-8 lg:py-20" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="text-white">
            <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#0d9488]">
              <span className="h-px w-6 bg-[#0d9488]" /> Enterprise Evaluation
            </p>
            <h1 className={`mt-5 max-w-xl text-[clamp(2rem,4.5vw,2.9rem)] ${serifH}`}>
              Request an enterprise briefing for your evaluation.
            </h1>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-slate-300/85">
              Share the decision, stakeholders and questions your team needs to work through.
              Your request provides context for the appropriate product, trust or
              enterprise conversation; submission does not confirm availability, format,
              timing, attendance or commercial terms.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#form" className={amberBtn} style={{ backgroundColor: AMBER }}>Request Enterprise Briefing</a>
              <a href="/contact-us" className="rounded-md border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10">
                Book a Demo
              </a>
            </div>
            <p className="mt-6 max-w-md text-xs leading-relaxed text-slate-400/70">
              Public evidence is always available behind the Trust, Compliance, Privacy & Security,
              Provider Due Diligence and API Reference pages at any sign-in or form.
            </p>
          </div>
          <ImageSlot src="/images/TET.png" alt="Enterprise evaluation briefing" ratio="aspect-[4/3]" rounded="rounded-2xl" />
        </div>
      </section>

      {/* ═══ CHOOSE THE RIGHT PATH ════════════════════════════════════════ */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Choose the Right Enterprise Path</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Not every question needs a briefing request.</h2>
          <p className="mt-2 text-sm text-slate-500">Pick the path that fits. If a shorter route works, you&rsquo;ll reach the answer in less time.</p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PATH_CARDS.map((c) => (
              <div key={c.title} className="flex flex-col rounded-xl border border-black/10 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <ImageSlot src={c.img} alt={c.title} ratio="aspect-[16/10]" rounded="rounded-lg" className="mb-4" />
                <h3 className="text-base font-bold">{c.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-gray-300">{c.body}</p>
                <Link href={c.href} className={c.amber
                  ? `mt-4 inline-block rounded-md px-4 py-2 text-sm font-semibold text-white` + ` bg-[${INK}]`
                  : `${tealLink} mt-4 text-xs`}
                  style={c.amber ? { backgroundColor: INK, color: "#fff" } : undefined}>
                  {c.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ENTERPRISE DECISIONS — ROLE PHOTOS ═══════════════════════════ */}
      <section className={`px-4 py-16 sm:px-6 md:px-8 ${cream}`}>
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Functions in Evaluation</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Enterprise decisions rarely belong to one team.</h2>
          <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
           {STAKEHOLDER_ROLES.map(r => (
  <div key={r.label} className="text-center">
    <ImageSlot src={r.img} alt={r.label} ratio="aspect-[4/5]" rounded="rounded-xl" />
    <p className="mt-3 text-xs font-semibold">{r.label}</p>
  </div>
))}
          </div>
          <p className="mt-6 text-xs leading-relaxed text-slate-500">
            ZoikoLogia&rsquo;s briefing structure lets evaluation teams ask their domain-specific questions to exactly
            the right people, with context, rather than routing everything to sales.
          </p>
        </div>
      </section>

      {/* ═══ MULTI-STEP FORM ══════════════════════════════════════════════ */}
      <section id="form" className="scroll-mt-20 px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Request Enterprise Briefing</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Tell us the decision first. Identity comes last.</h2>
          <p className="mt-2 max-w-xl text-sm text-slate-500">
            Four short steps. Only name, email and organization are required. You can go back at any point without losing what you&rsquo;ve entered.
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_280px]">
            {/* form card */}
            <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
              <StepIndicator />

              {/* ── STEP 1: Decision context ─── */}
              {step === 1 && (
                <div className="mt-8">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#d9720f]">Step 1 of 4 · Decision Context</p>
                  <h3 className={`mt-3 text-xl ${serifH}`}>What decision or evaluation are you preparing for?</h3>
                  <p className="mt-2 text-sm text-slate-500">Describe the business or evaluation question. This helps route your request; you don&rsquo;t need a project plan.</p>
                  <p className="mt-3 text-xs text-slate-400">Do not include confidential, customer records, customer IDs, regulated or personal data, or production passwords.</p>

                  <div className="mt-6 space-y-5">
                    <div>
                      <Label>Objective</Label>
                      <Select value={form.objective} onChange={v => set("objective", v)}
                        options={["Select an objective...", ...OBJECTIVES]} />
                    </div>
                    <div>
                      <Label>What should this briefing help clarify?</Label>
                      <textarea value={form.clarify} onChange={e => set("clarify", e.target.value)}
                        rows={3} placeholder="Describe your evaluation question or decision context."
                        className="mt-1.5 w-full rounded-md border border-black/10 bg-white px-4 py-2.5 text-sm outline-none focus:border-[#0d9488] dark:border-gray-700 dark:bg-gray-900" />
                    </div>
                    <div>
                      <Label>When is your internal decision or review? <span className="text-xs font-normal text-slate-400">(optional)</span></Label>
                      <div className="relative mt-1.5">
                        <input type="date" value={form.internalDate} onChange={e => set("internalDate", e.target.value)}
                          className="w-full rounded-md border border-black/10 bg-white px-4 py-2.5 text-sm outline-none focus:border-[#0d9488] dark:border-gray-700 dark:bg-gray-900" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-black/5 pt-6">
                    <Link href="#form" className="text-sm font-semibold text-[#0d9488] hover:underline">← Back to path choice</Link>
                    <button type="button" onClick={() => setStep(2)}
                      className={amberBtn} style={{ backgroundColor: AMBER }}>Continue to Topics</button>
                  </div>
                </div>
              )}

              {/* ── STEP 2: Topics & stakeholders ─── */}
              {step === 2 && (
                <div className="mt-8">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#d9720f]">Step 2 of 4 · Topics &amp; Stakeholders</p>
                  <h3 className={`mt-3 text-xl ${serifH}`}>Which topics and functions matter to your evaluation?</h3>
                  <p className="mt-2 text-sm text-slate-500">Optional. Pick any that apply. Each topic links to the page that owns the answer, so you can read it before or instead of a conversation.</p>

                  <p className="mt-6 text-sm font-bold">Briefing topics</p>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    {BRIEFING_TOPICS.map(t => {
                      const checked = form.topics.includes(t.id);
                      return (
                        <label key={t.id}
                          className={`flex cursor-pointer gap-3 rounded-lg border p-4 transition-colors ${
                            checked ? "border-[#0d9488] bg-[#0d9488]/5" : "border-black/10 hover:border-[#0d9488]/40"
                          } dark:border-gray-700`}>
                          <input type="checkbox" checked={checked} onChange={() => toggleTopic(t.id)}
                            className="mt-0.5 h-4 w-4 accent-[#0d9488]" />
                          <div>
                            <p className="text-sm font-semibold">{t.label}</p>
                            <p className="mt-0.5 text-xs text-slate-500">{t.desc}</p>
                            <Link href={t.href} className="mt-1 text-xs font-semibold text-[#0d9488] hover:underline">Open source ↗</Link>
                          </div>
                        </label>
                      );
                    })}
                  </div>

                  <p className="mt-4 text-xs text-slate-400">
                    Selecting a topic doesn&rsquo;t promise the briefing will cover it, or that a specific specialist will attend. Source links open in a new tab so your progress stays here.
                  </p>

                  <p className="mt-8 text-sm font-bold">Functions to represent</p>
                  <p className="mt-1 text-xs text-slate-500">Which functions need to be part of the evaluation? We don&rsquo;t collect attendee names.</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {[...STAKEHOLDER_ROLES.map(r => r.label), "Other"].map(fn => {
                      const active = form.functions.includes(fn);
                      return (
                        <button key={fn} type="button" onClick={() => toggleFunction(fn)}
                          className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                            active ? "border-[#0d9488] bg-[#0d9488]/10 text-[#0d9488]" : "border-black/10 text-slate-600 hover:border-[#0d9488]"
                          }`}>{fn}</button>
                      );
                    })}
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-black/5 pt-6">
                    <button type="button" onClick={() => setStep(1)} className={ghostBtn}>Back</button>
                    <button type="button" onClick={() => setStep(3)}
                      className={amberBtn} style={{ backgroundColor: AMBER }}>Continue to your details</button>
                  </div>
                </div>
              )}

              {/* ── STEP 3: Requester & coordination ─── */}
              {step === 3 && (
                <div className="mt-8">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#d9720f]">Step 3 of 4 · Requester &amp; Coordination</p>
                  <h3 className={`mt-3 text-xl ${serifH}`}>How should we follow up?</h3>
                  <p className="mt-2 text-sm text-slate-500">The minimum we need to follow up. Everything else is optional.</p>

                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    <div><Label required>Name</Label><Input value={form.name} onChange={v => set("name", v)} /></div>
                    <div><Label required>Email</Label><input type="email" value={form.email} onChange={e => set("email", e.target.value)}
                      className="mt-1.5 w-full rounded-md border border-black/10 bg-white px-4 py-2.5 text-sm outline-none focus:border-[#0d9488] dark:border-gray-700 dark:bg-gray-900" /></div>
                    <div><Label required>Organization</Label><Input value={form.organization} onChange={v => set("organization", v)} /></div>
                    <div><Label>Role / function <span className="text-xs font-normal text-slate-400">(optional; helps route the request)</span></Label><Input value={form.role} onChange={v => set("role", v)} /></div>
                  </div>

                  <div className="mt-5">
                    <Label>Your relationship to ZoikoLogia™ <span className="text-xs font-normal text-slate-400">(optional)</span></Label>
                    <Select value={form.relationship} onChange={v => set("relationship", v)} options={RELATIONSHIPS} />
                  </div>

                  <div className="mt-5">
                    <Label>Additional context <span className="text-xs font-normal text-slate-400">(optional)</span></Label>
                    <textarea value={form.additionalContext} onChange={e => set("additionalContext", e.target.value)}
                      rows={3} placeholder="Please don't include confidential, regulated, credential, customer or production data."
                      className="mt-1.5 w-full rounded-md border border-black/10 bg-white px-4 py-2.5 text-sm outline-none focus:border-[#0d9488] dark:border-gray-700 dark:bg-gray-900" />
                  </div>

                  <div className="mt-6">
                    <p className="text-sm font-bold">Coordination preferences <span className="text-xs font-normal text-slate-400">(optional)</span></p>
                    <div className="mt-2">
                      <Label>Time zone</Label>
                      <Select value={form.timezone} onChange={v => set("timezone", v)} options={TIMEZONES} />
                    </div>
                    <p className="mt-2 text-xs text-slate-400">A preference only. This is not a booking, and it doesn&rsquo;t confirm availability or format.</p>
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-black/5 pt-6">
                    <button type="button" onClick={() => setStep(2)} className={ghostBtn}>Back</button>
                    <button type="button" onClick={() => setStep(4)}
                      className={amberBtn} style={{ backgroundColor: AMBER }}>Review request</button>
                  </div>
                </div>
              )}

              {/* ── STEP 4: Review & submit ─── */}
              {step === 4 && (
                <div className="mt-8">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#d9720f]">Step 4 of 4 · Review &amp; Submit</p>
                  <h3 className={`mt-3 text-xl ${serifH}`}>Check your request</h3>
                  <p className="mt-2 text-sm text-slate-500">Edit anything before you submit.</p>

                  {/* summary cards */}
                  <div className="mt-6 space-y-4">
                    {/* decision */}
                    <div className="rounded-lg border border-black/10 p-4">
                      <div className="flex items-center justify-between">
                        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#d9720f]">Decision</p>
                        <button type="button" onClick={() => setStep(1)} className="text-xs font-semibold text-[#0d9488] hover:underline">Edit</button>
                      </div>
                      <p className="mt-2 text-xs text-slate-400">Objective</p>
                      <p className="text-sm font-medium">{form.objective || "—"}</p>
                      {form.internalDate && <><p className="mt-2 text-xs text-slate-400">Internal decision date</p><p className="text-sm font-medium">{form.internalDate}</p></>}
                    </div>

                    {/* topics */}
                    <div className="rounded-lg border border-black/10 p-4">
                      <div className="flex items-center justify-between">
                        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#d9720f]">Topics</p>
                        <button type="button" onClick={() => setStep(2)} className="text-xs font-semibold text-[#0d9488] hover:underline">Edit</button>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {form.topics.length ? form.topics.map(id => {
                          const t = BRIEFING_TOPICS.find(bt => bt.id === id);
                          return <span key={id} className="rounded-full border border-black/10 px-3 py-1 text-xs font-medium">{t?.label || id}</span>;
                        }) : <p className="text-sm text-slate-400">None selected</p>}
                      </div>
                    </div>

                    {/* functions */}
                    <div className="rounded-lg border border-black/10 p-4">
                      <div className="flex items-center justify-between">
                        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#d9720f]">Stakeholder Functions</p>
                        <button type="button" onClick={() => setStep(2)} className="text-xs font-semibold text-[#0d9488] hover:underline">Edit</button>
                      </div>
                      <p className="mt-2 text-sm">{form.functions.length ? form.functions.join(", ") : "None selected"}</p>
                    </div>

                    {/* requester */}
                    <div className="rounded-lg border border-black/10 p-4">
                      <div className="flex items-center justify-between">
                        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#d9720f]">Requester</p>
                        <button type="button" onClick={() => setStep(3)} className="text-xs font-semibold text-[#0d9488] hover:underline">Edit</button>
                      </div>
                      <div className="mt-2 space-y-1 text-sm">
                        <p><span className="text-xs text-slate-400">Name</span><br /><span className="font-medium">{form.name || "—"}</span></p>
                        <p><span className="text-xs text-slate-400">Email</span><br /><span className="font-medium">{form.email || "—"}</span></p>
                        <p><span className="text-xs text-slate-400">Organization</span><br /><span className="font-medium">{form.organization || "—"}</span></p>
                        <p><span className="text-xs text-slate-400">Relationship</span><br /><span className="font-medium">{form.relationship}</span></p>
                      </div>
                    </div>

                    {/* coordination */}
                    <div className="rounded-lg border border-black/10 p-4">
                      <div className="flex items-center justify-between">
                        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#d9720f]">Coordination Preference</p>
                        <button type="button" onClick={() => setStep(3)} className="text-xs font-semibold text-[#0d9488] hover:underline">Edit</button>
                      </div>
                      <p className="mt-2 text-xs text-slate-400">Time zone</p>
                      <p className="text-sm font-medium">{form.timezone}</p>
                    </div>

                    {/* marketing */}
                    <div className="rounded-lg border border-black/10 p-4">
                      <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#d9720f]">Marketing Updates</p>
                      <p className="mt-2 text-sm">{form.marketingOptIn ? "Opted in" : "Not opted in"}</p>
                    </div>
                  </div>

                  {/* disclaimer */}
                  <div className="mt-6 rounded-md border-l-2 bg-[#fef3e2] px-4 py-3 text-xs leading-relaxed text-slate-600" style={{ borderColor: AMBER }}>
                    Do not submit confidential, regulated, credential, customer or production data through this public form.
                  </div>

                  {/* checkboxes */}
                  <div className="mt-6 space-y-3">
                    <label className="flex gap-3 text-sm">
                      <input type="checkbox" checked={form.privacyAgreed} onChange={e => set("privacyAgreed", e.target.checked)}
                        className="mt-0.5 h-4 w-4 accent-[#0d9488]" />
                      <span>I acknowledge the <Link href="/privacy-security" className="font-semibold text-[#0d9488] underline">privacy information</Link> and agree to be contacted about this request. <span className="text-red-500">*</span></span>
                    </label>
                    <label className="flex gap-3 text-sm">
                      <input type="checkbox" checked={form.marketingOptIn} onChange={e => set("marketingOptIn", e.target.checked)}
                        className="mt-0.5 h-4 w-4 accent-[#0d9488]" />
                      <span>Optional: send me occasional ZoikoLogia™ updates. This is separate from your request and not required.</span>
                    </label>
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-black/5 pt-6">
                    <button type="button" onClick={() => setStep(3)} className={ghostBtn}>Back</button>
                    <button type="button" disabled={!form.privacyAgreed}
                      className={`${amberBtn} ${!form.privacyAgreed ? "opacity-50 cursor-not-allowed" : ""}`}
                      style={{ backgroundColor: AMBER }}>
                      Request Enterprise Briefing
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* sidebar */}
            <div className="hidden lg:block"><Sidebar /></div>
          </div>
        </div>
      </section>

      {/* ═══ REQUEST FORM SHOULDN'T INVENT A PROJECT PLAN ═════════════════ */}
      <section className={`px-4 py-16 sm:px-6 md:px-8 ${cream}`}>
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Why It&rsquo;s Built This Way</p>
            <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>
              A request form shouldn&rsquo;t make you invent a project plan.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">
              Enterprise evaluations start with a question, not a budget and a timeline. So this page
              starts from the decision context first and only asks minimum identity last.
            </p>
            <ul className="mt-5 space-y-2">
              {[
                "No phone number, headcount, revenue, budget or seat count required.",
                "Ask the question, select any relevant enterprise interests.",
                "Marketing consent is separate, optional and never pre-checked.",
                "No promise of response time, attendance, format or activity resulting.",
              ].map(t => (
                <li key={t} className="flex gap-3 text-sm leading-relaxed text-slate-600 dark:text-gray-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: AMBER }} />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <ImageSlot src="/images/Colleagues working through an evaluation together.png" alt="Enterprise evaluation context" ratio="aspect-[4/3]" rounded="rounded-2xl" />
        </div>
      </section>

      {/* ═══ DESTINATION TABLE ═════════════════════════════════════════════ */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Determined Route Management</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>What this page does today, and what belongs elsewhere.</h2>
          <p className="mt-2 text-sm text-slate-500">Some enterprise destinations are still pending approval. We say so rather than imply they work.</p>

          <div className="mt-8 overflow-x-auto rounded-xl border border-black/10 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
            <table className="w-full min-w-[700px] text-left text-sm">
              <thead>
                <tr className="border-b border-black/10 bg-gray-50 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:border-gray-700 dark:bg-gray-800">
                  <th className="px-5 py-3">Need</th>
                  <th className="px-5 py-3">What happens today</th>
                  <th className="px-5 py-3">Later destination</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5 dark:divide-gray-700">
                {DESTINATION_ROWS.map(r => (
                  <tr key={r.need}>
                    <td className="px-5 py-3 font-semibold">{r.need}</td>
                    <td className="px-5 py-3 text-slate-600 dark:text-gray-300">{r.today}</td>
                    <td className="px-5 py-3"><Link href={r.href} className={tealLink}>{r.dest} →</Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══ EVIDENCE CTA (dark with image) ═══════════════════════════════ */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl">
          <div className="absolute inset-0">
            <Image src="/images/Evaluator reading trust information on a laptop.png" alt="" fill className="object-cover" />
            <div className="absolute inset-0 bg-[#0f1a30]/75" />
          </div>
          <div className="relative px-8 py-14 sm:px-12">
            <h2 className={`max-w-md text-[clamp(1.4rem,3vw,2rem)] text-white ${serifH}`}>
              Start with the evidence. Ask for a conversation when you need one.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-300/85">
              Your team can review the Trust, Compliance, Privacy, and API Reference
              information today, with no form and no sales contact.
            </p>
            <div className="mt-6">
              <Link href="/privacy-security" className={amberBtn} style={{ backgroundColor: AMBER }}>
                Explore Trust →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ══════════════════════════════════════════════════════════ */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-3xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Frequently Asked</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Straight answers, including what we can&rsquo;t promise.</h2>
          <div className="mt-8 divide-y divide-black/10 border-y border-black/10 dark:divide-gray-700 dark:border-gray-700">
            {FAQS.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q}>
                  <button type="button" onClick={() => setOpenFaq(open ? null : i)} aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 py-4 text-left text-[15px] font-semibold">
                    {f.q}
                    <span className="shrink-0 text-lg text-slate-400">{open ? "−" : "+"}</span>
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