"use client";

import Image from "next/image";
import Link from "next/link";
import { Globe, ChevronDown, ArrowUpRight } from "lucide-react";

// Social SVG Icons
function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function XIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function YouTubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

const ACCENT_TEAL = "#00e5c9";

type Column = { heading: string; links: { label: string; href: string }[] };

const footerPills = [
  "Source-backed workflow design",
  "Privacy & Security controls",
  "Audit-ready evidence architecture",
  "Professional-boundary safeguards",
  "WCAG 2.2 AA design target",
];

const columns: Column[] = [
  {
    heading: "PLATFORM",
    links: [
      { label: "Source Library", href: "/sourced-governed-intelligence" },
      { label: "Knowledge Graph", href: "/accounting-firms" },
      { label: "RAG Engine", href: "/rag-source-bundles" },
      { label: "AI Safety", href: "/ai-safety-page" },
      { label: "Audit Ledger", href: "/audit-&-assurance-terms" },
    ],
  },
  {
    heading: "KRITON™",
    links: [
      { label: "AI Advisor", href: "/kriton-ai" },
      { label: "Learning Mode", href: "/learning-&-practice-mode" },
      { label: "Workflow Mode", href: "/learning-&-practice-mode" },
      { label: "Review Mode", href: "/audit-tax-compliance" },
      { label: "Admin Mode", href: "/admin-mode" },
    ],
  },
  {
    heading: "SOLUTIONS",
    links: [
      { label: "Accounting Firms", href: "/accounting-firms" },
      { label: "Enterprise Finance", href: "/enterprise-finance-team" },
      { label: "Tax Teams", href: "/tax-professionals" },
      { label: "Audit Teams", href: "/audit-tax-compliance" },
      { label: "Education", href: "/educators" },
    ],
  },
  {
    heading: "TRUST",
    links: [
      { label: "Trust Center", href: "/privacy-security" },
      { label: "Privacy & Security", href: "/privacy-security" },
      { label: "Provider Due Diligence", href: "/compliance" },
      { label: "Accessibility", href: "/accessibility" },
    ],
  },
  {
    heading: "RESOURCES",
    links: [
      { label: "Documentation", href: "/documentation" },
      { label: "API Reference", href: "/api-reference" },
      { label: "Blog", href: "/resource" },
      { label: "Release Notes", href: "/resource" },
    ],
  },
  {
    heading: "PRICING & ACCESS",
    links: [
      { label: "Plans & Pricing", href: "/pricing" },
      { label: "Book a Demo", href: "/book-a-demo" },
      { label: "Request Pilot", href: "/request-pilot" },
      { label: "Request Enterprise Briefing", href: "/request-enterprise-briefing" },
      { label: "Contact Sales", href: "/contact-sales" },
      { label: "Procurement Support", href: "/procurement-support" },
      { label: "Partner Inquiry", href: "/partner-inquiry" },
    ],
  },
  {
    heading: "COMPANY",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Leadership", href: "/leadership" },
      { label: "Careers", href: "/about" },
      { label: "Partners", href: "/partners" },
      { label: "Press", href: "/press-media" },
      { label: "Contact", href: "/contact-us" },
      { label: "Legal", href: "/legal" },
      { label: "Zoiko Group", href: "/about" },
    ],
  },
];

const LEGAL_LINKS = [
  { label: "Terms of Service", href: "/legal" },
  { label: "Privacy Policy", href: "/privacy-security" },
  { label: "Cookie Settings", href: "/cookie-preferences" },
  { label: "Support", href: "/contact-us" },
  { label: "System Status", href: "/compliance", external: true },
  { label: "Security", href: "/privacy-security" },
  { label: "Accessibility Statement", href: "/accessibility" },
  { label: "Responsible AI", href: "/responsible-ai" },
];

export default function ZoikoLogiaFooter() {
  return (
    <footer className="bg-[#071322] text-slate-300 antialiased">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:py-16">

        {/* ─── Top Brand & Capability Pills Row ─────────────────────────────── */}
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_auto]">

          {/* Left: Brand info */}
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-x-3.5 gap-y-2">
              <Link href="/" className="flex shrink-0 items-center">
                <Image
                  src="/images/zoikologia-logo.png"
                  alt="ZoikoLogia"
                  width={195}
                  height={33}
                  className="block h-8 w-auto md:h-9"
                />
              </Link>
              <span className="text-lg font-bold text-white tracking-tight flex items-center">
                with Kriton <span className="text-[11px] align-super ml-0.5 text-slate-400">™</span>
              </span>
            </div>

            <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.16em]" style={{ color: ACCENT_TEAL }}>
              GOVERNED AI ACCOUNTING INTELLIGENCE PLATFORM
            </p>

            <p className="mt-3 text-[13.5px] leading-relaxed text-slate-400">
              ZoikoLogia™ with Kriton™ is a governed AI accounting intelligence platform designed to support source-backed accounting, tax, audit, payroll, compliance, finance, and learning workflows.
            </p>

            <p className="mt-3 text-[13.5px] leading-relaxed text-slate-500">
              Built for professional work where source authority, privacy, auditability, risk routing, and human judgment matter.
            </p>
          </div>

          {/* Right: Security & Architecture Pills */}
          <div className="flex flex-col items-start lg:items-end gap-2.5">
            {footerPills.map((pill) => (
              <span
                key={pill}
                className="inline-flex items-center gap-2.5 rounded-full border border-teal-950/60 bg-[#0c1e34]/70 px-4 py-1.5 text-[12px] text-slate-300 shadow-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ACCENT_TEAL }} />
                {pill}
              </span>
            ))}
          </div>

        </div>

        {/* ─── 7-Column Mega Navigation Grid ─────────────────────────────────── */}
        <nav
          aria-label="Footer Navigation"
          className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-slate-800/80 pt-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7"
        >
          {columns.map((col) => (
            <div key={col.heading}>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.12em] text-white">
                {col.heading}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={`${col.heading}-${l.label}`}>
                    <Link
                      href={l.href}
                      className="text-[13px] text-slate-400 transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* ─── Legal Links & Language Selector Bar ──────────────────────────── */}
        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-slate-800/80 pt-6 lg:flex-row lg:items-center">
          {/* Legal Navigation Links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[12.5px] text-slate-400">
            {LEGAL_LINKS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="inline-flex items-center gap-1 transition-colors hover:text-white"
              >
                {item.label}
                {item.external && <ArrowUpRight size={12} className="opacity-70" />}
              </Link>
            ))}
          </div>

          {/* Region / Language Selector */}
          <div className="shrink-0">
            <button suppressHydrationWarning
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-3.5 py-1.5 text-[12px] font-medium text-slate-300 transition-colors hover:border-slate-500 hover:text-white"
            >
              <Globe size={13} className="text-slate-400" />
              <span>United States — English</span>
              <ChevronDown size={13} className="text-slate-400" />
            </button>
          </div>
        </div>

        {/* ─── Trademarks, Disclaimers & Headquarters ───────────────────────── */}
        <div className="mt-8 space-y-3.5 text-[12px] leading-relaxed text-slate-500">
          <p>
            © 2026 ZoikoLogia™ and Kriton™ are trademarks of Zoiko Tech Inc. ZoikoLogia™ refers to the platform. Kriton™ refers to the AI advisor within ZoikoLogia™.
          </p>
          <p>
            ZoikoLogia™ with Kriton™ supports professional judgment. It does not replace qualified accountants, auditors, tax professionals, compliance officers, statutory obligations, audit opinions, tax determinations, filings, or required human review.
          </p>

          <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2 md:gap-8">
            <div>
              <p className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-slate-400">USA HEADQUARTERS</p>
              <p className="mt-0.5 text-slate-400">1401 21st Street, Suite R, Sacramento, CA 95811, USA.</p>
            </div>
            <div>
              <p className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-slate-400">EU HEADQUARTERS</p>
              <p className="mt-0.5 text-slate-400">167-169 Great Portland Street, 5th Floor, London W1W 5PF, UK.</p>
            </div>
          </div>
        </div>

        {/* ─── Bottom Copyright & Social Icons Row ──────────────────────────── */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-800/50 pt-6 text-[12px] text-slate-500 sm:flex-row">
          <p>© 2026 ZoikoLogia | All rights reserved.</p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-slate-400">
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-white"
            >
              <LinkedInIcon className="h-4 w-4" />
            </Link>
            <Link
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="transition-colors hover:text-white"
            >
              <XIcon className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="transition-colors hover:text-white"
            >
              <YouTubeIcon className="h-4 w-4" />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition-colors hover:text-white"
            >
              <InstagramIcon className="h-4 w-4" />
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="transition-colors hover:text-white"
            >
              <FacebookIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

export { ZoikoLogiaFooter };