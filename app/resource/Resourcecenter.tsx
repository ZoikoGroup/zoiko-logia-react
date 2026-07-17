"use client";

import { useState } from "react";
import Image from "next/image";

/* ------------------------------------------------------------------ */
/*  Design tokens (matched to ZoikoLogiaHome)                          */
/*  navy #071a33 · cream #f7f3ea · sand #efe8d6                        */
/*  amber #f59a23 · orange #d9720f · teal #0d9488                      */
/* ------------------------------------------------------------------ */

function Eyebrow({
  children,
  color = "amber",
  center = false,
}: {
  children: React.ReactNode;
  color?: "amber" | "teal";
  center?: boolean;
}) {
  const c = color === "amber" ? "#d9720f" : "#0d9488";
  return (
    <div className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}>
      <span className="h-px w-6" style={{ backgroundColor: c }} />
      <span className="text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: c }}>
        {children}
      </span>
    </div>
  );
}

/*
 * Shared image slot. Pass a real `src` -> renders with next/image (fill +
 * object-cover). Leave `src` empty -> dashed placeholder so the layout stays
 * intentional until the real asset is dropped in. Same mechanism as the
 * Homepage/Platform components.
 */
function ImagePlaceholder({
  src,
  alt = "",
  className = "",
  label = "Image",
  rounded = "rounded-xl",
}: {
  src?: string;
  alt?: string;
  className?: string;
  label?: string;
  rounded?: string;
}) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${rounded} ${className}`}>
        <Image src={src} alt={alt || label} fill sizes="(max-width:1024px) 100vw, 33vw" className="object-cover" />
      </div>
    );
  }
  return (
    <div className={`flex items-center justify-center border-2 border-dashed border-black/15 bg-black/[0.03] ${rounded} ${className}`}>
      <span className="text-xs font-medium uppercase tracking-widest text-black/30">{label}</span>
    </div>
  );
}

function IconTile({
  children,
  tone = "amber",
}: {
  children: React.ReactNode;
  tone?: "amber" | "teal" | "darkteal";
}) {
  const styles =
    tone === "amber"
      ? { bg: "rgba(245,154,35,0.12)", fg: "#d9720f" }
      : tone === "teal"
      ? { bg: "rgba(13,148,136,0.12)", fg: "#0d9488" }
      : { bg: "rgba(13,148,136,0.15)", fg: "#5eead4" };
  return (
    <span className="inline-flex h-9 w-9 items-center justify-center rounded-md" style={{ backgroundColor: styles.bg, color: styles.fg }}>
      {children}
    </span>
  );
}

function Pill({ children, tone = "amber" }: { children: React.ReactNode; tone?: "amber" | "teal" }) {
  const c = tone === "amber" ? { bg: "rgba(245,154,35,0.12)", fg: "#d9720f" } : { bg: "rgba(13,148,136,0.12)", fg: "#0d9488" };
  return (
    <span className="rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider" style={{ backgroundColor: c.bg, color: c.fg }}>
      {children}
    </span>
  );
}

function AmberButton({ children, deep = false }: { children: React.ReactNode; deep?: boolean }) {
  return (
    <button className="inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90" style={{ backgroundColor: deep ? "#d9720f" : "#f59a23" }}>
      {children}
    </button>
  );
}

function OutlineButton({ children, onDark = false }: { children: React.ReactNode; onDark?: boolean }) {
  return (
    <button className={`inline-flex items-center gap-2 rounded-md border px-6 py-3 text-sm font-semibold transition-colors ${onDark ? "border-white/25 text-white hover:bg-white/5" : "border-black/20 text-[#16233d] hover:bg-black/[0.04]"}`}>
      {children}
    </button>
  );
}

function ArrowLink({ children, onDark = false }: { children: React.ReactNode; onDark?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-1 text-sm font-semibold ${onDark ? "text-[#5eead4]" : "text-[#0d9488]"}`}>
      {children}
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Icons (inline — no external dependency)                            */
/* ------------------------------------------------------------------ */
const I = {
  book: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>,
  video: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M10 9l5 3-5 3z" /></svg>,
  pen: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z" /></svg>,
  tag: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.6 13.4 12 22l-9-9V3h10l7.6 7.6a2 2 0 0 1 0 2.8z" /><circle cx="7.5" cy="7.5" r="1" /></svg>,
  file: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 3v5h5M8 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-5-5H8z" /></svg>,
  docs: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1M15 3h4a2 2 0 0 1 2 2v9" /><path d="M9 7h4M9 11h6M9 15h6" /></svg>,
  shield: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" /></svg>,
  check: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>,
  calc: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M8 6h8M8 10h2M12 10h2M16 10h.01M8 14h2M12 14h2M16 14h.01M8 18h6" /></svg>,
  grid: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg>,
};

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */

const categories = [
  { icon: I.book, tone: "amber" as const, title: "Guides", desc: "In-depth explainers on source governance, Kriton™, RAG, and evaluation.", pills: ["12 Guides", "All Audiences"], link: "Read Guides" },
  { icon: I.video, tone: "teal" as const, title: "Webinars", desc: "Recorded sessions on governance, security review, and workflow adoption.", pills: ["8 Webinars", "On Demand"], link: "Watch Webinars" },
  { icon: I.pen, tone: "amber" as const, title: "Blog", desc: "Perspectives on governed AI accounting intelligence and industry practice.", pills: ["24 Articles"], link: "Read the Blog" },
  { icon: I.tag, tone: "teal" as const, title: "Glossary", desc: "Plain-language definitions for accounting AI and governance terminology.", pills: ["60+ Terms"], link: "Browse Glossary" },
  { icon: I.file, tone: "amber" as const, title: "Buyer Briefs", desc: "Executive-ready material for buying committees and procurement teams.", pills: ["6 Briefs"], link: "Explore Buyer Briefs" },
  { icon: I.docs, tone: "teal" as const, title: "Documentation", desc: "Technical references for implementation, integration, and admin setup.", pills: ["API Guides"], link: "View Documentation" },
];

const featured = [
  { highlight: true, badge: "Most Requested", title: "Executive Buyer Brief", desc: "A concise, board-ready overview of governed AI accounting intelligence and what it changes for your organization.", cta: "Download Brief", amber: true },
  { title: "Source-Governed Intelligence Guide", desc: "How a governed platform uses source authority, risk classification, and citation obligations in answers.", cta: "Read Guide" },
  { title: "Governance Overview", desc: "The controls behind every Kriton™ answer, from risk classification to escalation.", cta: "View Overview" },
  { title: "Privacy & Security Overview", desc: "Tenant isolation, encryption, provider due diligence, and accessibility, explained plainly.", cta: "View Overview" },
  { title: "ROI Calculator", desc: "Estimate time and review-cost impact for your team's accounting and audit workflows.", cta: "Open Calculator" },
  { title: "Compare Plans", desc: "See how platform, advisor, and governance features map across plans.", cta: "Compare Plans" },
];

const roles = [
  { img: "/images/Finance leader reviewing an executive brief.png", title: "CFOs & Finance Leaders", desc: "Executive guides, ROI support, and governance overviews for business-value evaluation.", link: "View Resources for Finance Leaders" },
  { img: "/images/Accounting firm partner reviewing client-service materials.png", title: "Accounting Firms", desc: "Professional-workflow guides, pilot checklists, and client-service implications.", link: "View Resources for Firms" },
  { img: "/images/Audit and compliance leader reviewing evidence materials.png", title: "Audit, Tax & Compliance", desc: "Governance guides, audit evidence materials, and source-authority explainers.", link: "View Governance Resources" },
  { img: "/images/CTO reviewing security and integration documentation.png", title: "CTOs, Security & IT", desc: "Technical briefs, API resources, and security and deployment overviews.", link: "Request Security Review" },
  { img: "/images/Educator guiding a learner through practice mode.png", title: "Educators & Learning Leaders", desc: "Learning-mode guides, education use cases, and integrity controls.", link: "Explore Education Resources" },
  { img: "/images/Existing customer reviewing onboarding materials.png", title: "Existing Customers", desc: "Onboarding guides, role-based playbooks, and training resources.", link: "Visit Customer Resources" },
];

type ResType = "Guide" | "Webinar" | "Blog" | "Glossary" | "Buyer Brief" | "Documentation";
const resources: { type: ResType; title: string; desc: string }[] = [
  { type: "Guide", title: "What Is Source-Governed Accounting AI?", desc: "The foundational explainer on approved sources and citation discipline." },
  { type: "Guide", title: "How Kriton™ Supports Accounting Teams", desc: "A walkthrough of Ask, Learning, Workflow, and Review modes." },
  { type: "Guide", title: "Evidence-Ready AI Accounting Workflows", desc: "How the Audit Evidence Ledger preserves traceability." },
  { type: "Webinar", title: "Security Review Checklist Walkthrough", desc: "A recorded session for CTOs and security reviewers." },
  { type: "Webinar", title: "Evaluating AI Governance in Accounting Platforms", desc: "A governance-focused session for audit and compliance leaders." },
  { type: "Blog", title: "Why Kriton™ Has to Come Before Capability", desc: "Perspective on building AI for regulated professional work." },
  { type: "Glossary", title: "Source Bundle", desc: "A governed collection of approved sources assembled for a specific answer." },
  { type: "Glossary", title: "Risk Classification", desc: "The process of assigning a risk level before Kriton™ responds." },
  { type: "Buyer Brief", title: "Executive Buyer Brief", desc: "Board-ready summary of value, governance, and risk posture." },
  { type: "Documentation", title: "Admin Setup Reference", desc: "Tenant policy, source permissions, and risk configuration." },
];
const filters: ("All" | ResType)[] = ["All", "Guide", "Webinar", "Blog", "Glossary", "Buyer Brief", "Documentation"];

const enablement = [
  { icon: I.file, title: "Executive Brief", desc: "Board-ready summary of value, governance, and risk posture.", cta: "Download PDF" },
  { icon: I.check, title: "Procurement Checklist", desc: "Questions procurement teams ask before approving an AI vendor.", cta: "Download Checklist" },
  { icon: I.shield, title: "Security Review Guide", desc: "What your IT and security team should evaluate first.", cta: "Download Guide" },
  { icon: I.grid, title: "Pilot Planning Worksheet", desc: "Define users, sources, and success criteria for a controlled pilot.", cta: "Download Worksheet" },
  { icon: I.check, title: "Governance Readiness Checklist", desc: "Assess your organization's readiness for governed AI adoption.", cta: "Download Checklist" },
  { icon: I.book, title: "Internal Champion Deck", desc: "A customizable deck to build internal buy-in.", cta: "Request Deck" },
];

const trustPills = ["Governance Overview", "Source Authority", "AI Safety", "Platform Limits & Escalation", "Privacy & Security Overview", "Data Protection", "Access Controls", "Compliance Reports"];

const faqs = [
  { q: "What is the ZoikoLogia™ Resource Center?", a: "The Resource Center is the public knowledge hub for guides, webinars, buyer briefs, glossary definitions, documentation links, and trust resources about ZoikoLogia™ with Kriton™." },
  { q: "Does the Resource Center provide accounting, tax, legal, or audit advice?", a: "No. These are educational resources designed to support evaluation and responsible use; they do not replace professional or qualified accounting, tax, legal, or compliance judgment." },
  { q: "Which resources should enterprise buyers review first?", a: "Start with the Executive Buyer Brief, the Governance Overview, and the Privacy & Security Overview, then use the Procurement and Security Review checklists." },
  { q: "How should technical teams use the Resource Center?", a: "Technical teams should begin with the Documentation, the Security Review Guide, and the API references, then request a security review where needed." },
  { q: "Can existing customers use the Resource Center after implementation?", a: "Yes. Onboarding guides, role-based playbooks, and training resources remain available to existing customers after implementation." },
];

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function ResourceCenter() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const shown = filter === "All" ? resources : resources.filter((r) => r.type === filter);

  return (
    <main className="font-[family-name:var(--font-body)] text-[#16233d]">
      {/* ============================ HERO ============================ */}
      <section className="bg-[#071a33]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-stretch lg:grid-cols-2">
          <div className="flex flex-col justify-center px-6 py-16 sm:px-10 lg:py-24 lg:pl-16 lg:pr-14">
            <Eyebrow color="teal">Resource Center for Governed AI Accounting Intelligence</Eyebrow>
            <h1 className="mt-6 font-[family-name:var(--font-serif)] text-4xl leading-[1.15] text-white sm:text-5xl lg:text-[3.35rem]">
              Learn, evaluate, and adopt ZoikoLogia™ with confidence.
            </h1>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-slate-300">
              Guides, webinars, buyer briefs, governance resources, security explainers, glossary definitions, and
              implementation materials for source-governed accounting AI and Kriton™ advisor workflows.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <AmberButton>Book a Demo</AmberButton>
              <OutlineButton onDark>Download Buyer Brief</OutlineButton>
            </div>
            <p className="mt-6 max-w-sm text-xs leading-relaxed text-slate-400">
              Educational resources are designed to support evaluation and responsible use. They do not provide legal,
              tax, audit, or professional advice.
            </p>
          </div>

          <div className="relative min-h-[230px] lg:min-h-[300px]">
            <ImagePlaceholder src="/images/Accounting professionals learning and evaluating source-backed AI resources together.png" alt="Team using the ZoikoLogia Resource Center" className="h-full w-full" rounded="rounded-none" label="Hero image" />
            <div className="absolute bottom-8 left-8 right-8 rounded-lg bg-[#0a2244]/90 p-5 shadow-xl backdrop-blur sm:right-auto sm:max-w-md">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#5eead4]">Your path through the Resource Center</p>
              <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-3">
                {["Learn", "Evaluate", "Implement", "Trust", "Decide"].map((s, i, arr) => (
                  <span key={s} className="flex items-center gap-2">
                    <span className="flex flex-col items-center gap-1">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-[10px] font-bold text-white">{i + 1}</span>
                      <span className="text-[10px] font-semibold text-slate-300">{s}</span>
                    </span>
                    {i < arr.length - 1 && <span className="h-px w-4 bg-white/20" />}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== BROWSE BY CATEGORY =================== */}
      <section className="bg-[#f7f3ea]">
        <div className="mx-auto max-w-[1200px] px-6 py-20 sm:px-10">
          <Eyebrow>Browse by Category</Eyebrow>
          <h2 className="mt-5 font-[family-name:var(--font-serif)] text-3xl leading-tight text-[#16233d] sm:text-[2.35rem]">Six ways into the Resource Center.</h2>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <div key={c.title} className="flex flex-col rounded-lg bg-white p-6 shadow-sm ring-1 ring-black/5">
                <IconTile tone={c.tone}>{c.icon}</IconTile>
                <h3 className="mt-4 text-base font-bold text-[#16233d]">{c.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{c.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.pills.map((p) => <Pill key={p} tone={c.tone === "teal" ? "teal" : "amber"}>{p}</Pill>)}
                </div>
                <div className="mt-5"><ArrowLink>{c.link}</ArrowLink></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= START HERE ======================= */}
      <section className="bg-[#efe8d6]">
        <div className="mx-auto max-w-[1200px] px-6 py-20 sm:px-10">
          <Eyebrow color="teal">Featured</Eyebrow>
          <h2 className="mt-5 font-[family-name:var(--font-serif)] text-3xl leading-tight text-[#16233d] sm:text-[2.35rem]">Start here — the highest-value resources.</h2>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((f) => (
              <div key={f.title} className={`flex flex-col rounded-lg p-6 shadow-sm ring-1 ${f.highlight ? "bg-[#fbe9cf] ring-[#f59a23]/40" : "bg-white ring-black/5"}`}>
                {f.badge && <div className="mb-3"><Pill>{f.badge}</Pill></div>}
                <h3 className="text-base font-bold text-[#16233d]">{f.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{f.desc}</p>
                <div className="mt-5">
                  {f.amber ? <AmberButton deep>{f.cta}</AmberButton> : <OutlineButton>{f.cta}</OutlineButton>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= LEARN BY ROLE ==================== */}
      <section className="bg-[#f7f3ea]">
        <div className="mx-auto max-w-[1200px] px-6 py-20 sm:px-10">
          <Eyebrow>Learn by Role</Eyebrow>
          <h2 className="mt-5 font-[family-name:var(--font-serif)] text-3xl leading-tight text-[#16233d] sm:text-[2.35rem]">Resources built around what you&apos;re responsible for.</h2>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {roles.map((r) => (
              <div key={r.title} className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-black/5">
                <ImagePlaceholder src={r.img} alt={r.title} className="aspect-[16/10] w-full" rounded="rounded-none" label="Role image" />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-base font-bold text-[#16233d]">{r.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{r.desc}</p>
                  <div className="mt-5"><ArrowLink>{r.link}</ArrowLink></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

   {/* ======================= RESOURCE FINDER ==================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-20 sm:px-10">
          <Eyebrow>Resource Finder</Eyebrow>
          <h2 className="mt-5 font-[family-name:var(--font-serif)] text-3xl leading-tight text-[#16233d] sm:text-[2.35rem]">Search and filter every resource.</h2>

          <div className="mt-10 rounded-xl border border-black/10 bg-[#faf7f0] p-5">
            <div className="flex gap-3">
              <input type="text" placeholder="Search guides, webinars, glossary terms…" className="w-full rounded-md border border-black/15 bg-white px-4 py-2.5 text-sm text-[#16233d] placeholder:text-slate-400 focus:border-[#0d9488] focus:outline-none focus:ring-1 focus:ring-[#0d9488]" />
              <button className="shrink-0 rounded-md bg-[#071a33] px-6 py-2.5 text-sm font-semibold text-white">Search</button>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {filters.map((f) => (
                <button key={f} className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${f === "All" ? "bg-[#071a33] text-white" : "border border-black/15 text-slate-600 hover:bg-black/[0.04]"}`}>{f}</button>
              ))}
            </div>
          </div>

          <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-slate-400">{resources.length} resources</p>
          <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((r) => (
              <div key={r.title} className="flex flex-col rounded-lg border border-black/10 bg-white p-5">
                <div className="mb-3"><Pill tone={r.type === "Webinar" || r.type === "Glossary" ? "teal" : "amber"}>{r.type}</Pill></div>
                <h3 className="text-[15px] font-bold text-[#16233d]">{r.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{r.desc}</p>
                <div className="mt-4"><ArrowLink>{r.type === "Webinar" ? "Watch Webinar" : r.type === "Glossary" ? "Read Glossary" : r.type === "Buyer Brief" ? "View Buyer Brief" : r.type === "Documentation" ? "View Documentation" : "Read Guide"}</ArrowLink></div>
            </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== BUYER ENABLEMENT ZONE ================= */}
      <section className="bg-[#efe8d6]">
        <div className="mx-auto max-w-[1200px] px-6 py-20 sm:px-10">
          <Eyebrow color="teal">Buyer Enablement Zone</Eyebrow>
          <h2 className="mt-5 font-[family-name:var(--font-serif)] text-3xl leading-tight text-[#16233d] sm:text-[2.35rem]">Package your evaluation for the whole buying committee.</h2>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {enablement.map((e) => (
              <div key={e.title} className="flex flex-col rounded-lg bg-white p-6 shadow-sm ring-1 ring-black/5">
                <IconTile tone="amber">{e.icon}</IconTile>
                <h3 className="mt-4 text-base font-bold text-[#16233d]">{e.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{e.desc}</p>
                <div className="mt-5"><ArrowLink>{e.cta}</ArrowLink></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================== TRUST & GOVERNANCE ===================== */}
      <section className="bg-[#f7f3ea]">
        <div className="mx-auto max-w-[1200px] px-6 pb-20 sm:px-10">
          <div className="rounded-2xl bg-[#071a33] px-6 py-14 sm:px-12">
            <Eyebrow color="teal">Trust &amp; Governance Resources</Eyebrow>
            <h2 className="mt-5 font-[family-name:var(--font-serif)] text-3xl leading-tight text-white sm:text-[2.2rem]">Everything a reviewer, regulator, or security team asks for.</h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-slate-300">Kept visible here, not buried in the footer — because procurement and compliance reviewers look for it early.</p>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {trustPills.map((t) => (
                <div key={t} className="flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-200">
                  <span className="text-[#5eead4]">{I.check}</span> {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================= NEWSLETTER ======================= */}
      <section className="bg-[#efe8d6]">
        <div className="mx-auto max-w-[1200px] px-6 py-16 sm:px-10">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            <div>
              <h2 className="font-[family-name:var(--font-serif)] text-2xl text-[#16233d] sm:text-[1.9rem]">Stay current on governed accounting AI.</h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600">New guides, webinars, and governance updates — no more than twice a month.</p>
            </div>
            <div>
              <div className="flex gap-3">
                <input type="email" placeholder="Work email" className="w-full rounded-md border border-black/15 bg-white px-4 py-2.5 text-sm text-[#16233d] placeholder:text-slate-400 focus:border-[#0d9488] focus:outline-none focus:ring-1 focus:ring-[#0d9488]" />
                <AmberButton>Subscribe</AmberButton>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-slate-500">By subscribing, you agree to receive product and educational updates. You can unsubscribe anytime. See our Privacy Notice.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= FAQ ========================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-20 sm:px-10">
          <Eyebrow>Frequently Asked</Eyebrow>
          <h2 className="mt-5 font-[family-name:var(--font-serif)] text-3xl text-[#16233d] sm:text-[2.2rem]">About the Resource Center.</h2>

          <div className="mt-10 border-t border-black/10">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q} className="border-b border-black/10">
                  <button onClick={() => setOpenFaq(open ? null : i)} className="flex w-full items-center justify-between gap-4 py-5 text-left">
                    <span className="font-[family-name:var(--font-serif)] text-lg font-semibold text-[#16233d]">{f.q}</span>
                    <span className="shrink-0 text-2xl font-light leading-none text-[#16233d]">{open ? "–" : "+"}</span>
                  </button>
                  {open && <p className="max-w-3xl pb-6 text-sm leading-relaxed text-slate-600">{f.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================= CTA ========================== */}
      <section className="bg-[#f7f3ea]">
        <div className="mx-auto max-w-[1200px] px-6 py-20 sm:px-10">
          <div className="rounded-2xl bg-[#071a33] px-6 py-16 text-center sm:px-10">
            <div className="flex justify-center"><Eyebrow color="teal" center>Before You Deploy</Eyebrow></div>
            <h2 className="mt-5 font-[family-name:var(--font-serif)] text-3xl leading-tight text-white sm:text-[2.3rem]">Build confidence before you deploy governed accounting AI.</h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-slate-300">Use ZoikoLogia™ resources to learn the platform, evaluate Kriton™, review governance, prepare security and procurement conversations, and move toward a controlled demo or pilot.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <AmberButton>Book a Demo</AmberButton>
              <OutlineButton onDark>Request Enterprise Briefing</OutlineButton>
              <OutlineButton onDark>Download Buyer Brief</OutlineButton>
            </div>
            <p className="mx-auto mt-6 max-w-xl text-xs leading-relaxed text-slate-400">Educational resources support evaluation and responsible use; they do not replace professional or qualified accounting, tax, legal, or compliance judgment.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
