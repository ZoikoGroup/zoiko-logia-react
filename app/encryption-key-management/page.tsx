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
const MEANS_CARDS = [
  { title: "Definition", body: "Encryption protects data in transit and at rest; key management governs how cryptographic keys are created, stored, rotated, revoked, and monitored.", link: "Explore Data Protection" },
  { title: "Why It Matters", body: "Accounting AI workflows can involve sensitive financial, source, and evidence data. Buyers need a clear security-control explanation before adoption.", link: "Request Security Review" },
  { title: "Kriton™ Context", body: "Kriton™ operates inside ZoikoLogia™ platform controls. It does not independently control encryption or keys.", link: "Meet Kriton™" },
  { title: "Enterprise Value", body: "Security clarity reduces procurement friction, supports internal stakeholder approval, and improves buyer confidence.", link: "Request Enterprise Briefing" },
];

type Pillar = { tag: string; title: string; body: string };
const PILLARS: Pillar[] = [
  { tag: "Designed Control", title: "Encryption in Transit", body: "Data movement is designed to use protected communication channels across sessions and integrations." },
  { tag: "Designed Control", title: "Encryption at Rest", body: "Stored tenant, source-reference, and evidence data are protected by storage-layer safeguards." },
  { tag: "Admin Control", title: "Key Lifecycle Governance", body: "Keys have defined lifecycle controls, role boundaries, and operational visibility." },
  { tag: "Admin Control", title: "Sensitive Export Controls", body: "High-risk exports are permissioned, restricted by role, and evidenced." },
  { tag: "Audit Evidence", title: "Evidence-Ready Events", body: "Security-relevant changes are logged for review, investigation, and procurement evidence." },
  { tag: "Review Available", title: "Enterprise Review Pathway", body: "Security questions route to formal review — not vague marketing claims." },
];
const TAG_TONE: Record<string, string> = {
  "Designed Control": "bg-teal-100 text-teal-700",
  "Admin Control": "bg-slate-200 text-slate-700",
  "Audit Evidence": "bg-amber-100 text-amber-700",
  "Review Available": "bg-teal-100 text-teal-700",
};

const LIFECYCLE = [
  { n: 1, title: "Creation", body: "Keys are created through approved platform security processes.", note: "Operational secrets not disclosed publicly." },
  { n: 2, title: "Storage", body: "Controlled infrastructure patterns designed to reduce unauthorized exposure.", note: "Architecture detail under security review." },
  { n: 3, title: "Use", body: "Keys protect data during authorized system operations.", note: "Not every metadata item is claimed encrypted unless verified." },
  { n: 4, title: "Rotation", body: "Keys follow defined lifecycle and rotation patterns.", note: "Exact schedules confirmed by security team." },
  { n: 5, title: "Revocation", body: "Revocation is governed, evidenced, and dependency-aware.", note: "Critical revocation routes to security review." },
  { n: 6, title: "Event Logging", body: "Key and admin events are captured for review and investigation.", note: "Sensitive secrets are never exposed in logs." },
];

const INTEGRATION_POINTS = [
  "Protected transport across approved integration patterns",
  "Credential handling boundaries reviewed before connection",
  "Vendor and security review required for new integration types",
  "Integration events logged alongside other security-relevant activity",
];

const BOUNDARIES = [
  "ZoikoLogia™ uses enterprise-aligned encryption and key-governance controls — not \"military-grade\" or unverifiable marketing language.",
  "The platform is designed to reduce risk through encryption, access control, monitoring, and governance — no system is breach-proof or impossible to access.",
  "Enterprise key-management options are subject to plan, region, architecture, and formal availability confirmation — not promised universally.",
  "Kriton™ operates within ZoikoLogia™ platform security controls; it does not control encryption keys independently.",
  "Sensitive data is protected through defined in-transit, at-rest, and access-control patterns — architecture specifics are confirmed in security review, not published broadly.",
  "Encryption supports data protection; it does not itself guarantee compliance, which depends on your obligations, configuration, and professional review.",
  "Certification claims (SOC 2, ISO 27001, or similar) are used only where formally approved — otherwise, security documentation is available through enterprise review.",
];

const FAQS = [
  { q: "Does ZoikoLogia™ encrypt data?", a: "The platform is designed to protect data in transit and at rest using enterprise-aligned controls, subject to final architecture and security review." },
  { q: "Who manages encryption keys?", a: "Keys are governed by defined lifecycle controls with role boundaries and operational visibility inside the platform's security model." },
  { q: "Can we bring our own keys (BYOK)?", a: "Enterprise key-management options — including customer-managed approaches — are subject to plan, region, architecture, and formal availability confirmation." },
  { q: "Can key events be audited?", a: "Yes. Security-relevant key and admin events are logged for review, investigation, and procurement evidence, without exposing sensitive secrets." },
  { q: "Does encryption make the platform breach-proof?", a: "No. Encryption and controls reduce risk; no system is breach-proof or impossible to access, and we don't claim otherwise." },
  { q: "How are integrations protected?", a: "Integrations inherit the same protected transport and access-control expectations as the rest of the platform, with review required before new connections." },
  { q: "Does encryption guarantee compliance?", a: "No. Encryption supports data protection but doesn't itself guarantee compliance, which depends on your obligations, configuration, and professional review." },
  { q: "Can our security team review the architecture?", a: "Yes. Security questions and architecture specifics route to a formal enterprise review pathway rather than being published broadly." },
  { q: "Does Kriton™ manage keys?", a: "No. Kriton™ operates within ZoikoLogia™ platform security controls and does not independently control encryption or keys." },
];

// ─── inline SVG helpers ─────────────────────────────────────────────────────────
function Chevron({ open }: { open: boolean }) {
  return <svg viewBox="0 0 24 24" className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function Info({ className = "h-4 w-4" }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 8h.01M11 12h1v4h1" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function Dot() {
  return <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e8912a]" />;
}

// Trust Vault Model — SVG list panel for the hero image overlay.
function TrustVault() {
  const rows = [
    { label: "Data Classification", state: "Designed Control" },
    { label: "Encryption States", state: "In Transit / At Rest" },
    { label: "Key Lifecycle", state: "Governed" },
    { label: "Audit Evidence", state: "Review Available" },
  ];
  return (
    <svg viewBox="0 0 560 150" className="h-auto w-full" role="img" aria-label="Trust vault model">
      <text x="18" y="20" fill="#f0a54a" fontSize="9" fontWeight="700" letterSpacing="1">TRUST VAULT MODEL</text>
      {rows.map((r, i) => {
        const y = 40 + i * 26;
        return (
          <g key={r.label}>
            <circle cx="24" cy={y} r="4" fill="#0d9488" />
            <text x="38" y={y + 4} fill="#e2e8f0" fontSize="10" fontWeight="600">{r.label}</text>
            <text x="542" y={y + 4} textAnchor="end" fill="#94a3b8" fontSize="9.5">{r.state}</text>
          </g>
        );
      })}
    </svg>
  );
}

const eyebrowAmber = "flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#d9720f]";
const serifH = "font-serif leading-tight";
const tealLink = "text-sm font-semibold text-[#0d9488] hover:underline";
const creamBand = "bg-[#f5efe0] dark:bg-gray-800/60";

// ─── PAGE ───────────────────────────────────────────────────────────────────────
export default function Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const amberBtn = "rounded-md px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90";

  return (
    <main className="bg-[#faf7f0] font-sans text-[#16233d] dark:bg-gray-900 dark:text-white">

      {/* ─── Hero (navy) + trust-vault image ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8 lg:py-20" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="text-white">
            <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#0d9488]">
              <span className="h-px w-6 bg-[#0d9488]" /> Enterprise AI Security for Accounting Intelligence
            </p>
            <h1 className={`mt-5 max-w-xl text-[clamp(2rem,4.5vw,2.9rem)] ${serifH}`}>Protect sensitive accounting AI workflows with clear encryption and key governance.</h1>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-slate-300/85">
              ZoikoLogia™ helps enterprise teams understand how sensitive accounting, source, user, and evidence data are
              designed to be protected through encryption, access boundaries, key lifecycle controls, and audit-ready
              security events.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#" className={amberBtn} style={{ backgroundColor: AMBER }}>Visit Trust Center →</a>
              <a href="#" className="rounded-md border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10">Book a Demo</a>
            </div>
            <p className="mt-6 max-w-md text-xs leading-relaxed text-slate-400/70">
              Designed for enterprise review. No absolute security claim. Customer-specific requirements are validated
              through security and procurement review.
            </p>
          </div>

          <div className="relative">
            <ImageSlot src="/images/AI governance team reviewing platform controls.png" alt="Trust vault model" ratio="aspect-[4/3]" rounded="rounded-2xl" />
            <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-white/10 bg-[#0f1a30]/95 px-3 py-2 shadow-xl">
              <TrustVault />
            </div>
          </div>
        </div>
      </section>

      {/* ─── What this page means (4 cards, cream band) ─── */}
      <section className={`px-4 py-16 sm:px-6 md:px-8 ${creamBand}`}>
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> What This Page Means</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Encryption and key management, in plain language.</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {MEANS_CARDS.map((c) => (
              <div key={c.title} className="flex flex-col rounded-xl border border-black/10 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <h3 className="text-base font-bold">{c.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-gray-300">{c.body}</p>
                <a href="#" className={`${tealLink} mt-4 inline-block text-xs`}>{c.link} →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Security control pillars (6 tagged cards, cream band) ─── */}
      <section className={`px-4 py-16 sm:px-6 md:px-8 ${creamBand}`}>
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Security Control Pillars</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Six controls a security reviewer actually checks.</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((p) => (
              <div key={p.title} className="rounded-xl border border-black/10 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <span className={`inline-block rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em] ${TAG_TONE[p.tag]}`}>{p.tag}</span>
                <h3 className="mt-3 text-base font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-gray-300">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Key lifecycle explainer (6 steps) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Key Lifecycle Explainer</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>What happens to a key, from creation to retirement.</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
            {LIFECYCLE.map((s) => (
              <div key={s.n}>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#0d9488] text-sm font-bold text-[#0d9488]">{s.n}</div>
                <h3 className="mt-3 text-sm font-bold">{s.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-gray-300">{s.body}</p>
                <p className="mt-2 text-[11px] font-semibold leading-snug text-[#d9720f]">{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Protected integrations (split, cream band) ─── */}
      <section className={`px-4 py-16 sm:px-6 md:px-8 ${creamBand}`}>
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <ImageSlot src="/images/Audit and compliance leader reviewing evidence materials.png" alt="Protected integrations" ratio="aspect-[4/3]" rounded="rounded-2xl" />
          <div>
            <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Protected Integrations</p>
            <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Connected systems stay inside the same encryption boundary.</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">
              Integrations don't get a separate, looser security model — they inherit the same protected transport and
              access-control expectations as the rest of the platform.
            </p>
            <ul className="mt-5 space-y-3">
              {INTEGRATION_POINTS.map((p) => (
                <li key={p} className="flex gap-3 text-[15px] leading-relaxed text-slate-600 dark:text-gray-300"><Dot />{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── Trust & legal boundaries (cream band) ─── */}
      <section className={`px-4 py-16 sm:px-6 md:px-8 ${creamBand}`}>
        <div className="mx-auto max-w-4xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Trust & Legal Boundaries</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>What we don't claim — stated plainly.</h2>
          <div className="mt-8 space-y-3">
            {BOUNDARIES.map((b, i) => (
              <div key={i} className="flex gap-3 rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <span className="mt-0.5 shrink-0 text-[#d9720f]"><Info className="h-4 w-4" /></span>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-gray-300">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-4xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Frequently Asked</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Encryption and key management, answered plainly.</h2>
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