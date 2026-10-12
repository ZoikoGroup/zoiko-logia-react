import { Metadata } from "next";
import Link from "next/link";
import { Inter, Source_Serif_4 } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-source-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Trust Center — ZoikoLogia",
  description:
    "Source authority, AI safety, platform limits, data protection, access controls, responsible AI, and compliance reporting — in one place, kept current.",
};

const PILLS = [
  { label: "Source Authority", href: "#source-authority" },
  { label: "AI Safety", href: "#ai-safety" },
  { label: "Platform Limits", href: "#platform-limits" },
  { label: "Data Protection", href: "#data-protection" },
  { label: "Access Controls", href: "#access-controls" },
  { label: "Responsible AI", href: "#responsible-ai" },
  { label: "Compliance Reports", href: "#compliance-reports" },
];

export default function TrustCenterPage() {
  return (
    <div
      className={`${inter.variable} ${sourceSerif4.variable} min-h-screen bg-[#F7F3EA] font-sans text-[#071A33] antialiased selection:bg-[#00BFA6]/20`}
      style={{ fontFamily: "var(--font-inter), Arial, sans-serif" }}
    >
      {/* ─── SECTION 1: HERO / INTRO ────────────────────────────────────────── */}
      <section className="w-full border-b border-[#E3D9C2]">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-12 md:px-20 lg:px-[180px] pt-7 pb-10">
          <div className="max-w-[1080px] px-0 sm:px-4 md:px-8 pt-[6.9px]">
            {/* Overline Eyebrow */}
            <div className="flex items-center gap-2 mb-[13.1px]">
              <div className="h-[2px] w-4 rounded-[2px] bg-[#049783]" />
              <span className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#049783] leading-[19.2px]">
                Trust Center
              </span>
            </div>

            {/* Heading 1 */}
            <h1
              className="max-w-[880px] text-[34px] font-semibold leading-[40.8px] tracking-[-0.01em] text-[#071A33] mb-[13.1px]"
              style={{ fontFamily: "var(--font-source-serif), Georgia, serif" }}
            >
              Everything a reviewer, regulator, or security team<br />
              asks for.
            </h1>

            {/* Intro Lead Body */}
            <p className="max-w-[640px] text-[15px] font-normal leading-[25.5px] text-[#5C6672] mb-6">
              Source authority, AI safety, platform limits, data protection, access controls, responsible
              <br className="hidden md:inline" />
              AI, and compliance reporting — in one place, kept current.
            </p>

            {/* Pill Navigation Links */}
            <div className="flex flex-wrap items-center gap-2 pt-[6.9px]">
              {PILLS.map((pill) => (
                <a
                  key={pill.label}
                  href={pill.href}
                  className="rounded-full border border-[#E3D9C2] bg-white px-[14px] py-[7px] text-[12px] font-semibold leading-[19.2px] text-[#123055] transition-all hover:border-[#049783] hover:text-[#049783]"
                >
                  {pill.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: ARTICLES ────────────────────────────────────────────── */}
      <section className="w-full">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-12 md:px-20 lg:px-[180px]">
          <div className="max-w-[1080px] px-0 sm:px-4 md:px-8">
            {/* Article 1: Source Authority */}
            <article
              id="source-authority"
              className="max-w-[720px] scroll-mt-24 border-b border-[#E3D9C2] pt-[49px] pb-[58px]"
            >
              <div className="mb-[2.6px]">
                <span className="text-[11px] font-bold uppercase tracking-[0.05em] text-[#049783] leading-[17.6px]">
                  Governance
                </span>
              </div>
              <h2
                className="text-[25px] font-semibold leading-[32px] tracking-[-0.01em] text-[#071A33]"
                style={{ fontFamily: "var(--font-source-serif), Georgia, serif" }}
              >
                Source Authority
              </h2>
              <p className="pt-[10.3px] pb-[0.78px] text-[14.8px] font-normal leading-[25.9px] text-[#123055]">
                Every answer starts with a question: which sources are even allowed to be used, at what authority
                <br className="hidden md:inline" />
                level, under what license, and for what purpose? Source Authority is the control layer that answers this
                <br className="hidden md:inline" />
                — before anything is retrieved, not after.
              </p>
              <ul className="flex flex-col gap-[10px] pt-[11.4px]">
                <li className="relative pl-5 text-[14.4px] font-normal leading-[23.76px] text-[#123055]">
                  <span className="absolute left-0 top-[9px] h-[6px] w-[6px] rounded-full bg-[#F59A23]" />
                  Authority hierarchy distinguishing primary standards from secondary commentary.
                </li>
                <li className="relative pl-5 text-[14.4px] font-normal leading-[23.76px] text-[#123055]">
                  <span className="absolute left-0 top-[9px] h-[6px] w-[6px] rounded-full bg-[#F59A23]" />
                  Version and effective-date tracking so superseded guidance can&apos;t silently inform an answer.
                </li>
                <li className="relative pl-5 text-[14.4px] font-normal leading-[23.76px] text-[#123055]">
                  <span className="absolute left-0 top-[9px] h-[6px] w-[6px] rounded-full bg-[#F59A23]" />
                  License-aware display, citation, and export rules per source.
                </li>
              </ul>
            </article>

            {/* Article 2: AI Safety */}
            <article
              id="ai-safety"
              className="max-w-[720px] scroll-mt-24 border-b border-[#E3D9C2] pt-[49px] pb-[58px]"
            >
              <div className="mb-[2.6px]">
                <span className="text-[11px] font-bold uppercase tracking-[0.05em] text-[#049783] leading-[17.6px]">
                  Governance
                </span>
              </div>
              <h2
                className="text-[25px] font-semibold leading-[32px] tracking-[-0.01em] text-[#071A33]"
                style={{ fontFamily: "var(--font-source-serif), Georgia, serif" }}
              >
                AI Safety
              </h2>
              <p className="pt-[10.4px] pb-[0.89px] text-[14.8px] font-normal leading-[25.9px] text-[#123055]">
                Before Kriton™ drafts a response, the request is classified by risk and routed accordingly.
              </p>
              <ul className="flex flex-col gap-[9.5px] pt-[11.4px]">
                <li className="relative pl-5 text-[14.4px] font-normal leading-[23.76px] text-[#123055]">
                  <span className="absolute left-0 top-[9.5px] h-[6px] w-[6px] rounded-full bg-[#F59A23]" />
                  <strong className="font-bold text-[#123055]">Low</strong> — general concept questions with strong source coverage.
                </li>
                <li className="relative pl-5 text-[14.4px] font-normal leading-[23.76px] text-[#123055]">
                  <span className="absolute left-0 top-[9.5px] h-[6px] w-[6px] rounded-full bg-[#F59A23]" />
                  <strong className="font-bold text-[#123055]">Medium</strong> — workflow guidance requiring explicit assumptions and limitations.
                </li>
                <li className="relative pl-5 text-[14.4px] font-normal leading-[23.76px] text-[#123055]">
                  <span className="absolute left-0 top-[9.5px] h-[6px] w-[6px] rounded-full bg-[#F59A23]" />
                  <strong className="font-bold text-[#123055]">High</strong> — matters requiring stronger source basis and likely human review.
                </li>
                <li className="relative pl-5 text-[14.4px] font-normal leading-[23.76px] text-[#123055]">
                  <span className="absolute left-0 top-[9.5px] h-[6px] w-[6px] rounded-full bg-[#F59A23]" />
                  <strong className="font-bold text-[#123055]">Restricted</strong> — requests outside Kriton™&apos;s intended scope, declined by design.
                </li>
                <li className="relative pl-5 text-[14.4px] font-normal leading-[23.76px] text-[#123055]">
                  <span className="absolute left-0 top-[9.5px] h-[6px] w-[6px] rounded-full bg-[#F59A23]" />
                  <strong className="font-bold text-[#123055]">Classification Uncertain</strong> — routed conservatively when risk can&apos;t be confidently assigned.
                </li>
              </ul>
            </article>

            {/* Article 3: Platform Limits & Escalation */}
            <article
              id="platform-limits"
              className="max-w-[720px] scroll-mt-24 border-b border-[#E3D9C2] pt-[49px] pb-[58px]"
            >
              <div className="mb-[2.6px]">
                <span className="text-[11px] font-bold uppercase tracking-[0.05em] text-[#049783] leading-[17.6px]">
                  Governance
                </span>
              </div>
              <h2
                className="text-[25px] font-semibold leading-[32px] tracking-[-0.01em] text-[#071A33]"
                style={{ fontFamily: "var(--font-source-serif), Georgia, serif" }}
              >
                Platform Limits &amp; Escalation
              </h2>
              <p className="pt-[10.2px] pb-[0.73px] text-[14.8px] font-normal leading-[25.9px] text-[#123055]">
                Kriton™ is designed to clarify, limit, refuse, or escalate rather than answer definitively when source
                <br className="hidden md:inline" />
                coverage is weak, a request is restricted, or a matter requires qualified human review. Escalated items
                <br className="hidden md:inline" />
                route to a reviewer queue with full context attached — the question, the available sources, and the
                <br className="hidden md:inline" />
                reason for escalation.
              </p>
            </article>

            {/* Article 4: Data Protection */}
            <article
              id="data-protection"
              className="max-w-[720px] scroll-mt-24 border-b border-[#E3D9C2] pt-[49px] pb-[44px]"
            >
              <div className="mb-[2.6px]">
                <span className="text-[11px] font-bold uppercase tracking-[0.05em] text-[#049783] leading-[17.6px]">
                  Privacy &amp; Security
                </span>
              </div>
              <h2
                className="text-[25px] font-semibold leading-[32px] tracking-[-0.01em] text-[#071A33]"
                style={{ fontFamily: "var(--font-source-serif), Georgia, serif" }}
              >
                Data Protection
              </h2>
              <p className="pt-[10.3px] pb-[0.78px] text-[14.8px] font-normal leading-[25.9px] text-[#123055]">
                Tenant data, prompts, uploads, and source bundles are scoped and protected by design — encrypted
                <br className="hidden md:inline" />
                in transit and at rest, classified by sensitivity, and subject to retention and regional routing rules before
                <br className="hidden md:inline" />
                any model processing occurs.
              </p>
              <div className="pt-[15.4px]">
                <Link
                  href="/privacy-security"
                  className="inline-flex items-center rounded-[6px] border border-[#E3D9C2] px-[14px] py-[8px] text-[12.5px] font-semibold leading-[20px] text-[#071A33] transition-all hover:border-[#049783] hover:text-[#049783]"
                >
                  Read the Full Privacy &amp; Security Overview
                </Link>
              </div>
            </article>

            {/* Article 5: Access Controls */}
            <article
              id="access-controls"
              className="max-w-[720px] scroll-mt-24 border-b border-[#E3D9C2] pt-[49px] pb-[58px]"
            >
              <div className="mb-[2.6px]">
                <span className="text-[11px] font-bold uppercase tracking-[0.05em] text-[#049783] leading-[17.6px]">
                  Privacy &amp; Security
                </span>
              </div>
              <h2
                className="text-[25px] font-semibold leading-[32px] tracking-[-0.01em] text-[#071A33]"
                style={{ fontFamily: "var(--font-source-serif), Georgia, serif" }}
              >
                Access Controls
              </h2>
              <p className="pt-[10.35px] pb-[0.83px] text-[14.8px] font-normal leading-[25.9px] text-[#123055]">
                Access follows a role-based model — preparer, reviewer, admin, and integration service accounts
                <br className="hidden md:inline" />
                each receive only the permissions their role requires, configured per tenant.
              </p>
            </article>

            {/* Article 6: Responsible AI */}
            <article
              id="responsible-ai"
              className="max-w-[720px] scroll-mt-24 border-b border-[#E3D9C2] pt-[49px] pb-[44px]"
            >
              <div className="mb-[2.6px]">
                <span className="text-[11px] font-bold uppercase tracking-[0.05em] text-[#049783] leading-[17.6px]">
                  Governance
                </span>
              </div>
              <h2
                className="text-[25px] font-semibold leading-[32px] tracking-[-0.01em] text-[#071A33]"
                style={{ fontFamily: "var(--font-source-serif), Georgia, serif" }}
              >
                Responsible AI
              </h2>
              <p className="pt-[10.23px] pb-[0.73px] text-[14.8px] font-normal leading-[25.9px] text-[#123055]">
                Kriton™ is designed to support professional judgment, not replace it. It does not impersonate a licensed
                <br className="hidden md:inline" />
                professional, issue binding determinations, certify compliance, or approve filings. When source
                <br className="hidden md:inline" />
                coverage is weak, context is missing, or a matter is outside its intended boundary, it&apos;s designed to
                <br className="hidden md:inline" />
                clarify, limit, or escalate rather than guess.
              </p>
              <div className="pt-[15.4px]">
                <Link
                  href="/responsible-ai"
                  className="inline-flex items-center rounded-[6px] border border-[#E3D9C2] px-[14px] py-[8px] text-[12.5px] font-semibold leading-[20px] text-[#071A33] transition-all hover:border-[#049783] hover:text-[#049783]"
                >
                  Read the Full Responsible AI Page →
                </Link>
              </div>
            </article>

            {/* Article 7: Compliance Reports */}
            <article
              id="compliance-reports"
              className="max-w-[720px] scroll-mt-24 pt-[49px] pb-[44px]"
            >
              <div className="mb-[2.6px]">
                <span className="text-[11px] font-bold uppercase tracking-[0.05em] text-[#049783] leading-[17.6px]">
                  Procurement
                </span>
              </div>
              <h2
                className="text-[25px] font-semibold leading-[32px] tracking-[-0.01em] text-[#071A33]"
                style={{ fontFamily: "var(--font-source-serif), Georgia, serif" }}
              >
                Compliance Reports
              </h2>
              <p className="pt-[10.35px] pb-[0.83px] text-[14.8px] font-normal leading-[25.9px] text-[#123055]">
                Security and compliance documentation — including current reports where available — is provided
                <br className="hidden md:inline" />
                directly to procurement and security reviewers under request, rather than published broadly.
              </p>
              <div className="pt-[15.4px]">
                <Link
                  href="/compliance-reports"
                  className="inline-flex items-center rounded-[6px] bg-[#071A33] px-[14px] py-[8px] text-[12.5px] font-semibold leading-[20px] text-white transition-all hover:bg-[#123055]"
                >
                  Request Compliance Reports
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: CTA REVIEW BANNER ───────────────────────────────────── */}
      <section className="w-full pt-[55px] pb-20">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-12 md:px-20 lg:px-[180px]">
          <div className="relative mx-auto max-w-[1016px] overflow-hidden rounded-[20px] bg-[#071A33] px-6 sm:px-10 md:px-[42px] pt-[55px] pb-[48px] text-center shadow-xl">
            {/* Radial teal glow gradient matching Figma exact stop: rgba(0, 191, 166, 0.14) */}
            <div
              className="pointer-events-none absolute inset-0 h-full w-full"
              style={{
                background:
                  "radial-gradient(circle at 50% 0%, rgba(0, 191, 166, 0.14) 0%, rgba(0, 191, 166, 0) 65%)",
              }}
            />

            <div className="relative z-10 flex flex-col items-center">
              {/* Eyebrow */}
              <div className="mb-[13.1px] flex items-center justify-center gap-2">
                <div className="h-[2px] w-4 rounded-[2px] bg-[#049783]" />
                <span className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#049783] leading-[19.2px]">
                  Preparing a Review?
                </span>
              </div>

              {/* Heading */}
              <h2
                className="max-w-[680px] text-[26px] font-semibold leading-[32.76px] tracking-[-0.01em] text-white mb-[10.9px]"
                style={{ fontFamily: "var(--font-source-serif), Georgia, serif" }}
              >
                Request a security review or enterprise briefing<br />
                directly.
              </h2>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-[10px] pt-[10.9px]">
                <Link
                  href="/contact-sales"
                  className="inline-flex items-center justify-center rounded-[6px] bg-[#F59A23] px-5 py-[10px] pb-[11.75px] text-[13.6px] font-semibold leading-[21.76px] text-[#071A33] shadow-sm transition-all hover:bg-[#e59819]"
                >
                  Request Security Review
                </Link>
                <Link
                  href="/request-enterprise-briefing"
                  className="inline-flex items-center justify-center rounded-[6px] border border-white/30 bg-transparent px-5 py-[10px] pb-[11.75px] text-[13.6px] font-semibold leading-[21.76px] text-white transition-all hover:bg-white/10"
                >
                  Request Enterprise Briefing
                </Link>
                <Link
                  href="/resource"
                  className="inline-flex items-center justify-center rounded-[6px] px-[6px] py-[10px] pb-[11.75px] text-[13.6px] font-semibold leading-[21.76px] text-[#C4CFDA] transition-all hover:text-white"
                >
                  Back to Resources →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
