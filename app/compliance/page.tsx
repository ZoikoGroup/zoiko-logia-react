"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Inter, Source_Serif_4 } from "next/font/google";
import {
  Lock, FileText, ShieldCheck, Clock, Check, Shield, MessageSquare, Circle, Plus, Minus, ArrowRight,
} from "lucide-react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const serif = Source_Serif_4({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-serif4" });

// ─── TOKENS ─────────────────────────────────────────────────────────────────────
// #F7F3EA page · #EFE8D6 band / tile · #E3DED2 border · #081326 hero navy
// #071A33 ink · #0C2440 heading · #5C6672 body · #8A94A0 muted
// #0F9D86 teal (text) · #00BFA6 teal (accent) · #D97706 amber (text) · #EE9327 amber (button)

const IMG = {
  hero: "/complience/hero.webp",
  mapping: "/complience/mapping.webp",
  banner: "/complience/banner.webp",
};

// ─── DATA ──────────────────────────────────────────────────────────────────────
type Status = "Published" | "Review Due" | "Superseded";
type Evidence = "Public" | "Controlled" | "Disclosure Only";

const STATUS_DOT: Record<Status, string> = {
  Published: "bg-[#0F9D86]",
  "Review Due": "bg-[#D97706]",
  Superseded: "bg-[#8A94A0]",
};

const EVIDENCE_PILL: Record<Evidence, string> = {
  Public: "bg-[#00BFA6]/10 text-[#0F9D86]",
  Controlled: "bg-[#EE9327]/10 text-[#D97706]",
  "Disclosure Only": "bg-[#EFE8D6] text-[#5C6672]",
};

const PILLARS = [
  { icon: Lock, tone: "teal", title: "Governed", body: "Every public compliance statement has an accountable owner and an approval state — nothing renders by default.", link: "How information is governed", href: "/governance" },
  { icon: FileText, tone: "amber", title: "Source-Backed", body: "Claims link to an approved disclosure, evidence record, or a controlled evidence request — never a bare assertion.", link: "Scroll to evidence", href: "#evidence-library" },
  { icon: ShieldCheck, tone: "teal", title: "Scoped", body: "Coverage is shown with applicability and limitations, never implied to apply universally.", link: "Open scope explainer", href: "#scope" },
  { icon: Clock, tone: "amber", title: "Current", body: "Effective and review dates make freshness visible — nothing pretends to be evergreen.", link: "See current / review-due", href: "#registry" },
] as const;

const TERMS: { kind: "status" | "evidence" | "plain"; label: string; body: string }[] = [
  { kind: "status", label: "Published", body: "Approved for public display and within its review window. Not a synonym for \"certified.\"" },
  { kind: "status", label: "Review Due", body: "Still visible if policy permits, but flagged for owner review. Not alarming — just honest." },
  { kind: "status", label: "Superseded", body: "Replaced by a newer public record. Kept reachable so nothing silently disappears." },
  { kind: "evidence", label: "Controlled", body: "The artifact exists but isn't public. Request access instead of a direct download." },
  { kind: "evidence", label: "Public", body: "Viewable or downloadable without authentication — no gate, no form." },
  { kind: "plain", label: "Scope & Limitation", body: "The exact boundary a statement applies to, and what it explicitly doesn't cover — always adjacent to the claim, never buried." },
];

type Record_ = { claim: string; category: string; scope: string; status: Status; evidence: Evidence; reviewed: string };
const RECORDS: Record_[] = [
  { claim: "AI Governance Model Overview", category: "AI Governance", scope: "Platform, Kriton™ AI Advisor", status: "Published", evidence: "Public", reviewed: "Aug 12, 2026" },
  { claim: "Data Processing & Subprocessor Disclosure", category: "Regulatory / Disclosure", scope: "All customers, Global", status: "Published", evidence: "Public", reviewed: "Aug 3, 2026" },
  { claim: "Regional Hosting & Data Residency Summary", category: "Regulatory / Disclosure", scope: "Enterprise plan, Named regions", status: "Review Due", evidence: "Controlled", reviewed: "Mar 18, 2026" },
  { claim: "Access Control & Identity Governance Summary", category: "Product Controls", scope: "Platform", status: "Published", evidence: "Public", reviewed: "Jul 22, 2026" },
  { claim: "Source Licensing & Citation Eligibility Disclosure", category: "Product Controls", scope: "Platform, Kriton™", status: "Published", evidence: "Disclosure Only", reviewed: "Jun 30, 2026" },
  { claim: "Security Architecture Summary", category: "Frameworks & Assurance", scope: "Platform", status: "Published", evidence: "Controlled", reviewed: "Jul 5, 2026" },
  { claim: "Accessibility Conformance Statement", category: "Accessibility", scope: "Public site & product UI", status: "Published", evidence: "Public", reviewed: "Aug 1, 2026" },
  { claim: "Independent Assurance Program Status", category: "Frameworks & Assurance", scope: "Platform", status: "Review Due", evidence: "Disclosure Only", reviewed: "Mar 2, 2026" },
  { claim: "Data Retention & Deletion Disclosure", category: "Regulatory / Disclosure", scope: "All customers", status: "Published", evidence: "Public", reviewed: "Jun 15, 2026" },
  { claim: "Legacy Regional Hosting Statement (2025)", category: "Regulatory / Disclosure", scope: "EU customers", status: "Superseded", evidence: "Disclosure Only", reviewed: "Dec 10, 2025" },
];

const CATEGORIES = Array.from(new Set(RECORDS.map((r) => r.category)));
const STATUSES: Status[] = ["Published", "Review Due", "Superseded"];
const EVIDENCE_TYPES: Evidence[] = ["Public", "Controlled", "Disclosure Only"];

const CONTROLS = [
  { title: "Identity & Access", body: "How identity and access governance is organized, and where evidence can be found — not a claim of universal enforcement." },
  { title: "Change & Configuration", body: "How policy and configuration changes are governed and recorded — not a claim of compliance in every jurisdiction." },
  { title: "Evidence & Auditability", body: "How records and evidence are made available or requested — not an implied independent assurance we haven't obtained." },
  { title: "Data Handling", body: "Where privacy and security disclosures are owned and how scope links across — not a legal compliance conclusion." },
  { title: "AI Governance", body: "How Kriton™ governance information routes to the dedicated governance source — not a model safety guarantee." },
  { title: "Operational Resilience", body: "Where continuity and recovery evidence can be evaluated if approved — not a specific uptime or RTO/RPO claim." },
];

const ARTIFACTS: { type: string; title: string; meta: string; controlled: boolean }[] = [
  { type: "Disclosure", title: "Data Processing & Subprocessor Disclosure", meta: "Public · Updated Aug 2026", controlled: false },
  { type: "Architecture Summary", title: "Security Architecture Summary", meta: "Controlled · Reviewed Jul 2026", controlled: true },
  { type: "Policy", title: "Data Retention & Deletion Disclosure", meta: "Public · Updated Jun 2026", controlled: false },
  { type: "Statement", title: "Accessibility Conformance Statement", meta: "Public · WCAG 2.2 AA target", controlled: false },
  { type: "Questionnaire", title: "Standard Security Questionnaire Responses", meta: "Controlled · Customer-only", controlled: true },
  { type: "Disclosure", title: "Regional Hosting & Data Residency Summary", meta: "Controlled · Review due", controlled: true },
];

const SCOPE_ROWS = [
  { label: "Product / Service", body: "Scope is stated by name (Platform, Kriton™, a named service or bundle) — never inferred." },
  { label: "Geography", body: "Global, a named jurisdiction, or a named hosting region — never inferred from a visitor's location." },
  { label: "Customer Applicability", body: "All customers, a specific plan tier, or a pilot scope — confidential contract terms are never exposed publicly." },
  { label: "Lifecycle", body: "Current, legacy/superseded, or a future effective date requiring \"not yet effective\" treatment." },
  { label: "Evidence Period", body: "Shown as a point-in-time or a defined period, whichever the underlying record actually supports." },
  { label: "Exclusions", body: "Explicit exclusions or dependencies are shown in the record summary, never only in fine print." },
];

const CONNECTS = [
  { title: "Compliance", body: "Owns approved framework, regulatory, and compliance statements, their scope, evidence status, and procurement routing. This page.", link: null, href: null },
  { title: "Governance", body: "Explains accountability, decision rights, policy lifecycle, oversight structures, and AI governance ownership.", link: "Explore Governance", href: "/governance" },
  { title: "Privacy & Security", body: "Explains privacy architecture, security controls, data protection, and technical trust content in depth.", link: "Explore Privacy & Security", href: "/privacy-security" },
];

const STEPS = [
  { icon: Check, tone: "teal", title: "Find the relevant claim", body: "Use the registry's search and filters above." },
  { icon: Shield, tone: "teal", title: "Verify scope", body: "Every record shows its scope and limitations inline." },
  { icon: Lock, tone: "amber", title: "Request restricted evidence", body: "Submit the form here — no direct download for gated artifacts." },
  { icon: MessageSquare, tone: "teal", title: "Ask a structured question", body: "Use \"Other\" in the request type below for anything that doesn't fit." },
  { icon: Circle, tone: "teal", title: "Evaluate product fit or pilot it", body: "Book a Demo or Request Pilot once the evidence checks out." },
] as const;

const ROLES = ["Finance / Accounting", "Risk / Compliance", "Security / IT", "Procurement", "Legal / Privacy", "Executive", "Other"];
const REQUEST_TYPES = ["Evidence access", "Questionnaire", "Compliance scope", "Security/privacy routing", "Pilot/demo support", "Other"];
const STAGES = ["Early research", "Shortlisting vendors", "Security / procurement review", "Pilot planning", "Renewal / existing customer"];

const FAQS = [
  { q: "What does the ZoikoLogia™ Compliance page contain?", a: "A governed index of approved compliance information, scope, evidence status, and procurement resources. Only approved public statements appear." },
  { q: "How do I know whether a compliance statement applies to my use of ZoikoLogia™?", a: "Check the scope on each record — product, geography, customer applicability, and lifecycle are stated inline. If it's still unclear, request compliance scope confirmation through the form." },
  { q: "Where can I find evidence for a compliance statement?", a: "Every record in the registry links to its evidence. Public artifacts open directly; controlled artifacts are requested through the procurement form." },
  { q: "Why is some compliance evidence restricted?", a: "Some artifacts contain security-sensitive or customer-confidential detail. They exist, but are shared through a controlled request rather than a public download." },
  { q: "How current is the information?", a: "Each record shows its last-reviewed date and status. Records past their review window are marked Review Due rather than silently kept as current." },
  { q: "Does the Compliance page replace legal, regulatory, or accounting advice?", a: "No. It describes ZoikoLogia™'s approved compliance information. It does not provide legal, regulatory, tax, or accounting advice for your organization." },
  { q: "How are Governance and Privacy & Security different from Compliance?", a: "Governance explains accountability and decision rights; Privacy & Security explains technical controls in depth. Compliance owns the approved statements, their scope, and evidence status." },
  { q: "How can I discuss requirements for my organization?", a: "Submit the procurement request above, or book a demo to review requirements with your finance, risk, security, and procurement stakeholders." },
];

// ─── STYLES ────────────────────────────────────────────────────────────────────
const serifH = "font-[family-name:var(--font-serif4)] font-semibold text-[#0C2440]";
const h2 = `text-[1.375rem] leading-8 sm:text-2xl ${serifH}`;
const container = "mx-auto w-full max-w-300 px-4 sm:px-6 lg:px-8";
const card = "rounded-xl border border-[#E3DED2] bg-white";
const tealLink = "inline-flex items-center gap-1 text-xs font-semibold leading-5 text-[#0F9D86] hover:underline";
const label = "block text-xs font-semibold leading-5 text-[#071A33]";
const field =
  "mt-1.5 h-11 w-full min-w-0 rounded-lg border border-[#E3DED2] bg-white px-4 text-base text-[#152436] placeholder:text-[#8A94A0] focus:border-[#00BFA6] focus:outline-none focus:ring-1 focus:ring-[#00BFA6] sm:h-10 sm:text-sm";
const btnAmber = "inline-flex items-center justify-center gap-1.5 rounded-md bg-[#EE9327] px-5 py-3 text-sm font-semibold text-[#071A33] transition-opacity hover:opacity-90";
const btnGhostDark = "inline-flex items-center justify-center rounded-md border border-white/30 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10";

function Eyebrow({ children, tone = "amber", center = false }: { children: React.ReactNode; tone?: "amber" | "teal"; center?: boolean }) {
  const c = tone === "amber" ? "text-[#D97706]" : "text-[#00BFA6]";
  const bar = tone === "amber" ? "bg-[#D97706]" : "bg-[#00BFA6]";
  return (
    <p className={`flex items-center gap-2 text-xs font-bold uppercase leading-5 tracking-wide ${c} ${center ? "justify-center" : ""}`}>
      <span className={`h-0.5 w-4 rounded-xs ${bar}`} /> {children}
    </p>
  );
}

function StatusDot({ status }: { status: Status }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-semibold leading-5 text-[#071A33]">
      <span className={`size-1.5 rounded-sm ${STATUS_DOT[status]}`} /> {status}
    </span>
  );
}

function EvidencePill({ evidence }: { evidence: Evidence }) {
  return <span className={`inline-block whitespace-nowrap rounded-full px-2 py-0.5 text-xs font-bold leading-4 ${EVIDENCE_PILL[evidence]}`}>{evidence}</span>;
}

// ─── SECTIONS ──────────────────────────────────────────────────────────────────
function Hero() {
  const heroRecords = [RECORDS[0], RECORDS[7]];
  return (
    <section className="relative overflow-hidden bg-[#081326]">
      <Image src={IMG.hero} alt="" fill priority sizes="100vw" className="object-cover opacity-15 mix-blend-luminosity" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#081326] via-[#081326]/85 to-[#081326]/60" />
      <div className={`${container} relative grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-2 lg:gap-10 lg:py-28 xl:grid-cols-[minmax(0,1fr)_minmax(0,552px)] xl:gap-16`}>
        <div>
          <Eyebrow tone="teal">Compliance</Eyebrow>
          <h1 className="mt-3 font-[family-name:var(--font-serif4)] text-[2rem] font-semibold leading-tight text-white sm:text-[2.5rem]">
            Compliance you can verify.
          </h1>
          <p className="mt-4 max-w-lg text-[15px] leading-7 text-slate-300">
            Review approved compliance information, scope, evidence status, and procurement resources for ZoikoLogia™ — in one governed destination.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#registry" className={btnAmber}>Review Compliance Evidence</a>
            <Link href="/book-a-demo" className={btnGhostDark}>Book a Demo</Link>
            <Link href="/contact-us" className={btnGhostDark}>Request Pilot</Link>
          </div>
          <p className="mt-5 max-w-md text-xs leading-5 text-slate-400">
            Only approved, current claims render publicly. Evidence availability may vary by scope and access level.
          </p>
        </div>

        <div className="space-y-4">
          {heroRecords.map((r) => (
            <div key={r.claim} className="rounded-xl border border-[#00BFA6]/30 bg-[#0B1C33]/90 p-5 backdrop-blur-sm">
              <div className="flex items-start justify-between gap-3">
                <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">{r.category}</p>
                <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide ${r.status === "Published" ? "bg-[#00BFA6]/15 text-[#5FE7D2]" : "bg-[#EE9327]/15 text-[#F5B45C]"}`}>
                  {r.status}
                </span>
              </div>
              <p className="mt-2 text-base font-semibold text-white">{r.claim}</p>
              <p className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-xs text-slate-400">
                <span>Scope: <span className="font-semibold text-slate-200">{r.scope.replace(" AI Advisor", "")}</span></span>
                <span>Last reviewed: <span className="font-semibold text-slate-200">{r.reviewed.replace(/ \d+,/, "")}</span></span>
              </p>
              <div className="mt-4 flex items-center justify-between gap-3 border-t border-white/10 pt-3 text-xs">
                <span className="text-slate-400">Evidence: {r.evidence === "Public" ? "Public" : "Controlled"}</span>
                <a href={r.evidence === "Public" ? "#registry" : "#request"} className="font-semibold text-[#5FE7D2] hover:underline">
                  {r.evidence === "Public" ? "View record →" : "Request access →"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  return (
    <section className="py-12 sm:py-16">
      <div className={`${container} grid gap-4 sm:grid-cols-2 lg:grid-cols-4`}>
        {PILLARS.map(({ icon: Icon, tone, title, body, link, href }) => (
          <div key={title} className={`${card} flex flex-col p-5`}>
            <span className="flex size-9 items-center justify-center rounded-lg bg-[#EFE8D6]">
              <Icon className={`size-4 ${tone === "teal" ? "text-[#0F9D86]" : "text-[#D97706]"}`} strokeWidth={1.8} />
            </span>
            <p className="mt-3.5 text-sm font-bold leading-5 text-[#0C2440]">{title}</p>
            <p className="mt-1.5 flex-1 text-xs leading-5 text-[#5C6672]">{body}</p>
            <a href={href} className={`${tealLink} mt-3`}>{link} →</a>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowToRead() {
  return (
    <section className="border-t border-[#E3DED2] bg-[#EFE8D6] py-14 sm:py-16">
      <div className={container}>
        <Eyebrow>How to Read This Page</Eyebrow>
        <h2 className={`mt-3 max-w-2xl ${h2}`}>Seven terms that matter more than any badge would.</h2>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {TERMS.map((t) => (
            <div key={t.label} className={`${card} px-5 py-4`}>
              {t.kind === "status" && (
                <p className={`flex items-center gap-2.5 text-sm leading-6 ${serifH}`}>
                  <span className={`size-1.5 rounded-sm ${STATUS_DOT[t.label as Status]}`} /> {t.label}
                </p>
              )}
              {t.kind === "evidence" && <EvidencePill evidence={t.label as Evidence} />}
              {t.kind === "plain" && <p className={`text-sm leading-6 ${serifH}`}>{t.label}</p>}
              <p className="mt-2 text-xs leading-5 text-[#5C6672]">{t.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Registry() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("");
  const [status, setStatus] = useState("");
  const [ev, setEv] = useState("");

  const rows = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return RECORDS.filter(
      (r) =>
        (!needle || [r.claim, r.category, r.scope].some((s) => s.toLowerCase().includes(needle))) &&
        (!cat || r.category === cat) &&
        (!status || r.status === status) &&
        (!ev || r.evidence === ev),
    );
  }, [q, cat, status, ev]);

  const clear = () => { setQ(""); setCat(""); setStatus(""); setEv(""); };
  const select = "mt-1.5 h-10 w-full rounded-md border border-[#E3DED2] bg-[#EFEFEF] px-3.5 text-base text-black focus:border-[#00BFA6] focus:outline-none sm:text-xs";
  const filterLabel = "block text-xs font-bold uppercase leading-4 tracking-wide text-[#8A94A0]";
  const detailsHref = (r: Record_) => (r.evidence === "Controlled" ? "#request" : "#evidence-library");

  return (
    <section id="registry" className="scroll-mt-24 py-14 sm:py-20">
      <div className={container}>
        <Eyebrow>Compliance Coverage Registry</Eyebrow>
        <h2 className={`mt-3 ${h2}`}>Filter to what&apos;s relevant to your evaluation.</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-[#5C6672]">
          This is the primary evidence surface — not a logo wall. Every row is scoped, dated, and routed to real evidence.
        </p>

        {/* Filters */}
        <div className={`${card} mt-6 rounded-2xl p-5 sm:pt-8`}>
          <label htmlFor="reg-search" className="sr-only">Search records</label>
          <input
            id="reg-search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search claim, category, or scope…"
            className={field.replace("mt-1.5 ", "")}
          />
          <div className="mt-4 grid gap-4 sm:grid-cols-3 lg:flex lg:flex-wrap lg:items-end">
            <div className="lg:w-48">
              <label htmlFor="f-cat" className={filterLabel}>Category</label>
              <select id="f-cat" className={select} value={cat} onChange={(e) => setCat(e.target.value)}>
                <option value="">All Categories</option>
                {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div className="lg:w-44">
              <label htmlFor="f-status" className={filterLabel}>Status</label>
              <select id="f-status" className={select} value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="">All Statuses</option>
                {STATUSES.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div className="lg:w-44">
              <label htmlFor="f-ev" className={filterLabel}>Evidence</label>
              <select id="f-ev" className={select} value={ev} onChange={(e) => setEv(e.target.value)}>
                <option value="">All Evidence Types</option>
                {EVIDENCE_TYPES.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
            <button type="button" onClick={clear} className="justify-self-start py-2 text-xs font-semibold text-[#0F9D86] hover:underline">
              Clear filters
            </button>
          </div>
        </div>

        <p className="mt-4 text-xs leading-5 text-[#8A94A0]" aria-live="polite">{rows.length} {rows.length === 1 ? "record" : "records"}</p>

        {rows.length === 0 ? (
          <div className={`${card} mt-3 p-8 text-center text-sm text-[#5C6672]`}>
            No records match these filters. <button type="button" onClick={clear} className="font-semibold text-[#0F9D86] hover:underline">Clear filters</button>
          </div>
        ) : (
          <>
            {/* Table — lg and up */}
            <div className={`${card} mt-3 hidden overflow-x-auto lg:block`}>
              <table className="w-full min-w-[880px] border-collapse text-left">
                <thead className="bg-[#EFE8D6]">
                  <tr>
                    {["Topic / Claim", "Category", "Scope", "Status", "Evidence", "Last Reviewed", ""].map((h) => (
                      <th key={h} scope="col" className={`px-3.5 py-3 text-xs font-bold leading-5 ${serifH}`}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.claim} className="border-t border-[#E3DED2] align-top">
                      <td className="w-56 px-3.5 py-3.5 text-xs font-bold leading-5 text-[#071A33]">{r.claim}</td>
                      <td className="px-3.5 py-3.5 text-xs leading-5 text-[#5C6672]">{r.category}</td>
                      <td className="px-3.5 py-3.5 text-xs leading-5 text-[#5C6672]">{r.scope}</td>
                      <td className="whitespace-nowrap px-3.5 py-3.5"><StatusDot status={r.status} /></td>
                      <td className="px-3.5 py-3.5"><EvidencePill evidence={r.evidence} /></td>
                      <td className="whitespace-nowrap px-3.5 py-3.5 text-xs leading-5 text-[#5C6672]">{r.reviewed}</td>
                      <td className="whitespace-nowrap px-3.5 py-3.5"><a href={detailsHref(r)} className="text-xs font-bold text-[#0F9D86] hover:underline">View details</a></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Cards — below lg */}
            <ul className="mt-3 grid gap-3 sm:grid-cols-2 lg:hidden">
              {rows.map((r) => (
                <li key={r.claim} className={`${card} flex flex-col p-4`}>
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-sm font-bold leading-5 text-[#071A33]">{r.claim}</p>
                    <EvidencePill evidence={r.evidence} />
                  </div>
                  <dl className="mt-3 grid flex-1 content-start grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-xs leading-5">
                    <dt className="text-[#8A94A0]">Category</dt><dd className="text-[#5C6672]">{r.category}</dd>
                    <dt className="text-[#8A94A0]">Scope</dt><dd className="text-[#5C6672]">{r.scope}</dd>
                    <dt className="text-[#8A94A0]">Status</dt><dd><StatusDot status={r.status} /></dd>
                    <dt className="text-[#8A94A0]">Reviewed</dt><dd className="text-[#5C6672]">{r.reviewed}</dd>
                  </dl>
                  <a href={detailsHref(r)} className={`${tealLink} mt-3`}>View details →</a>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  );
}

function ControlMapping() {
  return (
    <section className="bg-[#EFE8D6] py-14 sm:py-16">
      <div className={container}>
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>Control &amp; Assurance Mapping</Eyebrow>
            <h2 className={`mt-3 max-w-md ${h2} lg:text-[1.625rem] lg:leading-9`}>How compliance topics map to governed controls.</h2>
            <p className="mt-4 max-w-lg text-sm leading-6 text-[#5C6672]">
              This connects compliance language to product and process reality — without implying an auditor&apos;s conclusion we haven&apos;t earned.
            </p>
          </div>
          <div className="relative aspect-[544/435] w-full overflow-hidden rounded-2xl">
            <Image src={IMG.mapping} alt="Team member reviewing control and assurance mapping" fill sizes="(max-width: 1024px) 100vw, 544px" className="object-cover" />
          </div>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {CONTROLS.map((c) => (
            <div key={c.title} className={`${card} p-5 sm:px-6`}>
              <p className="text-sm font-bold leading-5 text-[#071A33]">{c.title}</p>
              <p className="mt-2 text-[13px] leading-5 text-[#5C6672]">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EvidenceLibrary() {
  return (
    <section id="evidence-library" className="scroll-mt-24 py-14 sm:py-20">
      <div className={container}>
        <Eyebrow>Evidence Library</Eyebrow>
        <h2 className={`mt-3 ${h2}`}>Public and controlled artifacts, in one list.</h2>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ARTIFACTS.map((a) => (
            <div key={a.title} className={`${card} flex flex-col p-5 sm:p-6`}>
              <p className="text-[11px] font-bold uppercase tracking-wide text-[#8A94A0]">{a.type}</p>
              <p className={`mt-2 text-[15px] leading-6 ${serifH}`}>{a.title}</p>
              <p className="mt-1.5 flex-1 text-xs leading-5 text-[#5C6672]">{a.meta}</p>
              <a href={a.controlled ? "#request" : "#registry"} className={`mt-5 inline-flex items-center gap-1 font-semibold text-[#0F9D86] hover:underline ${a.controlled ? "text-sm" : "text-base"}`}>
                {a.controlled ? "Request access" : "View"} <ArrowRight className="size-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Scope() {
  return (
    <section id="scope" className="scroll-mt-24 bg-[#EFE8D6] py-14 sm:py-16">
      <div className={container}>
        <Eyebrow>Scope, Applicability &amp; Limitations</Eyebrow>
        <h2 className={`mt-3 max-w-2xl ${h2} lg:text-[1.625rem] lg:leading-9`}>Compliance information only means something with its scope attached.</h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-[#5C6672]">
          Every public record states what it applies to, what it doesn&apos;t cover when material, and the date it was last reviewed.
        </p>
        <ul className={`${card} mt-7 divide-y divide-[#E3DED2]`}>
          {SCOPE_ROWS.map((s) => (
            <li key={s.label} className="flex items-start gap-3 px-4 py-4 sm:gap-4 sm:px-5">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-[#EE9327]/10 text-xs font-semibold text-[#D97706]" aria-hidden>i</span>
              <p className="pt-0.5 text-[13px] leading-5 text-[#152436]">
                <span className="font-bold text-[#071A33]">{s.label}</span> — {s.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Connects() {
  return (
    <section className="py-14 sm:py-20">
      <div className={container}>
        <Eyebrow>How This Connects</Eyebrow>
        <h2 className={`mt-3 max-w-2xl ${h2} lg:text-[1.625rem] lg:leading-9`}>Compliance, Governance, and Privacy &amp; Security aren&apos;t the same page.</h2>
        <div className="mt-7 grid gap-4 lg:grid-cols-3 lg:gap-5">
          {CONNECTS.map((c) => (
            <div
              key={c.title}
              className={`flex flex-col rounded-xl border p-5 sm:p-6 ${c.href ? "border-[#E3DED2] bg-white" : "border-[#00BFA6] bg-[#F2FBF8]"}`}
              aria-current={c.href ? undefined : "page"}
            >
              <p className={`text-[15px] leading-6 ${serifH}`}>{c.title}</p>
              <p className="mt-2.5 text-[13px] leading-5 text-[#5C6672]">{c.body}</p>
              {c.href && (
                <Link href={c.href} className="mt-5 inline-flex items-center gap-1 text-base font-semibold text-[#0F9D86] hover:underline">
                  {c.link} <ArrowRight className="size-4" />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Procurement() {
  const [form, setForm] = useState({ email: "", company: "", role: "", stage: "", message: "" });
  const [types, setTypes] = useState<string[]>([]);
  const [agree, setAgree] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const set = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setForm({ ...form, [k]: e.target.value });
  const toggleType = (t: string) => setTypes((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]));

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  const canSubmit = emailOk && form.company.trim() && form.role && agree;

  return (
    <section id="request" className="scroll-mt-24 bg-[#EFE8D6] py-14 sm:py-20">
      <div className={container}>
        <Eyebrow center>Procurement Readiness</Eyebrow>
        <h2 className={`mt-3 text-center ${h2} lg:text-[1.625rem] lg:leading-9`}>Get the specific documentation your evaluation needs.</h2>

        <div className="mt-8 grid items-start gap-8 sm:mt-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-10 xl:grid-cols-[minmax(0,464px)_minmax(0,1fr)] xl:gap-11">
          <ol className="divide-y divide-[#E3DED2]">
            {STEPS.map(({ icon: Icon, tone, title, body }) => (
              <li key={title} className="flex gap-3 py-5 first:pt-0">
                <Icon className={`mt-0.5 size-3.5 shrink-0 ${tone === "teal" ? "text-[#0F9D86]" : "text-[#D97706]"}`} strokeWidth={2} />
                <div>
                  <p className="text-sm font-semibold leading-5 text-[#071A33]">{title}</p>
                  <p className="mt-1 text-xs leading-5 text-[#5C6672]">{body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="rounded-2xl border border-[#E3DED2] bg-white p-5 sm:p-8">
            {submitted ? (
              <div className="py-10 text-center">
                <span className="mx-auto flex size-10 items-center justify-center rounded-full bg-[#00BFA6]/10">
                  <Check className="size-5 text-[#0F9D86]" />
                </span>
                <h3 className={`mt-4 text-xl ${serifH}`}>Request received.</h3>
                <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-[#5C6672]">
                  We&apos;ll route your request and follow up at <span className="font-semibold text-[#152436]">{form.email}</span>, typically within one business day.
                </p>
              </div>
            ) : (
              <form
                noValidate
                onSubmit={(e) => { e.preventDefault(); if (canSubmit) setSubmitted(true); }}
                className="space-y-5"
              >
                <div className="grid gap-5 sm:grid-cols-2 sm:gap-3.5">
                  <div>
                    <label htmlFor="p-email" className={label}>Work email<span className="text-[#EE9327]"> *</span></label>
                    <input id="p-email" type="email" autoComplete="email" required className={field} value={form.email} onChange={set("email")} />
                  </div>
                  <div>
                    <label htmlFor="p-company" className={label}>Company<span className="text-[#EE9327]"> *</span></label>
                    <input id="p-company" autoComplete="organization" required className={field} value={form.company} onChange={set("company")} />
                  </div>
                </div>

                <div>
                  <label htmlFor="p-role" className={label}>Role / function<span className="text-[#EE9327]"> *</span></label>
                  <select id="p-role" required className={field} value={form.role} onChange={set("role")}>
                    <option value="">Select…</option>
                    {ROLES.map((r) => <option key={r}>{r}</option>)}
                  </select>
                </div>

                <fieldset>
                  <legend className={label}>Request type (select all that apply)</legend>
                  <div className="mt-2 grid gap-x-4 gap-y-3 sm:grid-cols-2">
                    {REQUEST_TYPES.map((t) => (
                      <label key={t} className="flex items-center gap-2.5 text-[13px] font-medium text-[#071A33]">
                        <input type="checkbox" checked={types.includes(t)} onChange={() => toggleType(t)} className="size-4 shrink-0 accent-[#00BFA6]" />
                        {t}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div>
                  <label htmlFor="p-stage" className={label}>Evaluation stage</label>
                  <select id="p-stage" className={field} value={form.stage} onChange={set("stage")}>
                    <option value="">Select…</option>
                    {STAGES.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label htmlFor="p-message" className={label}>Message</label>
                  <textarea
                    id="p-message"
                    rows={3}
                    placeholder="Please don't include secrets or regulated data here."
                    className={`${field} h-auto resize-y py-2.5`}
                    value={form.message}
                    onChange={set("message")}
                  />
                </div>

                <label className="flex items-start gap-2.5 text-xs leading-5 text-[#5C6672]">
                  <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} className="mt-0.5 size-4 shrink-0 accent-[#00BFA6]" />
                  <span>
                    I acknowledge the <Link href="/privacy-security" className="underline hover:text-[#152436]">Privacy Policy</Link> and agree to be contacted about this request.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={!canSubmit}
                  className="w-full rounded-md bg-[#EE9327] px-5 py-3.5 text-sm font-semibold text-[#071A33] transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:py-3"
                >
                  Submit Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function StakeholderBanner() {
  return (
    <section className="py-14 sm:py-16">
      <div className={container}>
        <div className="relative overflow-hidden rounded-xl bg-[#081326]">
          <Image src={IMG.banner} alt="" fill sizes="(max-width: 1136px) 100vw, 1136px" className="object-cover object-right" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#081326] via-[#081326]/80 to-[#081326]/10 sm:via-[#081326]/60" />
          <div className="relative max-w-md px-6 py-10 sm:px-11 sm:py-11">
            <h2 className="font-[family-name:var(--font-serif4)] text-xl font-semibold leading-7 text-white sm:text-[1.375rem] sm:leading-8">
              Bring your finance, risk, and security stakeholders together.
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Compliance information means more when your whole evaluation team reviews it against the scope that actually applies to you.
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

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-[#EFE8D6] py-14 sm:py-20">
      <div className={container}>
        <Eyebrow>Frequently Asked</Eyebrow>
        <h2 className={`mt-3 ${h2} lg:text-[1.625rem] lg:leading-9`}>Compliance questions, answered plainly.</h2>
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
          <Eyebrow tone="teal" center>Evidence First, Then Evaluation</Eyebrow>
          <h2 className="mx-auto mt-4 max-w-2xl font-[family-name:var(--font-serif4)] text-2xl font-semibold leading-snug text-white sm:text-[1.75rem] sm:leading-10">
            Ready to evaluate ZoikoLogia™ with your compliance requirements in view?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-300">
            Review the product with your finance, accounting, risk, security, and procurement stakeholders using the evidence and scope relevant to your evaluation.
          </p>
          <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link href="/book-a-demo" className={btnAmber}>Book a Demo</Link>
            <Link href="/contact-us" className={btnGhostDark}>Request Pilot</Link>
            <a href="#request" className={btnGhostDark}>Request Compliance Evidence</a>
          </div>
          <p className="mx-auto mt-6 max-w-md text-sm leading-6 text-slate-400">
            Commercial evaluation does not expand or change the scope of published compliance claims.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── PAGE ───────────────────────────────────────────────────────────────────────
export default function CompliancePage() {
  return (
    <div className={`${inter.variable} ${serif.variable} bg-[#F7F3EA] font-[family-name:var(--font-inter)] text-[#152436]`}>
      <Hero />
      <Pillars />
      <HowToRead />
      <Registry />
      <ControlMapping />
      <EvidenceLibrary />
      <Scope />
      <Connects />
      <Procurement />
      <StakeholderBanner />
      <Faq />
      <FinalCta />
    </div>
  );
}
