"use client";
import Image from "next/image";
import Link from "next/link";

const TEAL = "#0d9488";

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
    heading: "Platform",
    links: [
      { label: "Source Library", href: "/platform" },
      { label: "Knowledge Graph", href: "/sourced-governed-intelligence" },
  
      { label: "RAG Engine", href: "/rag-source-bundles" },
  
      { label: "AI Safety", href: "/ai-safety-page" },
      { label: "Audit Ledger", href: "/audit" },
    ],
  },
  {
    heading: "Kriton\u2122",
    links: [
      { label: "AI Advisor", href: "/kriton-ai" },
      { label: "Learning Mode", href: "/learning-&-practice-mode" },
      { label: "Workflow Mode", href: "/learning-&-practice-mode" },
     
      { label: "Review Mode", href: "/kriton-ai" },
      { label: "Admin Mode", href: "/admin-mode" },
      
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "Accounting Firms", href: "/accounting-firms" },
      { label: "Enterprise Finance Teams", href: "/enterprise-finance-team" },
      { label: "Tax Teams", href: "/tax-professionals" },
      { label: "Audit Teams", href: "/audit-tax-compliance" },
      { label: "Education", href: "/educators" },
      { label: "AI Governance Teams", href: "/ai-governance-teams" },
    ],
  },
  {
    heading: "Trust",
    links: [
      { label: "Trust", href: "/governance" },
      { label: "Privacy & Security", href: "/privacy-security" },
      { label: "Provider Due Diligence", href: "/ai-safety-page" },
      { label: "Accessibility", href: "/tax-professionals" },
      // { label: "Model Evaluation", href: "/evaluation&benchmark" },
      // { label: "Release Controls", href: "/governance" },
      // { label: "Event Governance", href: "/compliance-reports" },
      // { label: "Responsible AI", href: "/responsible-ai" },
    ],
  },
  // {
  //   heading: "Privacy & Security",
  //   links: [
  //     { label: "Privacy & Security Overview", href: "/privacy-security" },
  //     { label: "Privacy Policy", href: "/privacy-security" },
  //     { label: "Security Overview", href: "/privacy-security" },
  //     { label: "Data Protection", href: "/data-retention" },
  //     { label: "Provider Due Diligence", href: "/privacy-security" },
  //     { label: "Accessibility Statement", href: "/privacy-security" },
  //     { label: "Trust Center", href: "/privacy-security" },
  //     { label: "Contact Privacy Team", href: "/contact-us" },
  //   ],
  // },
 
  {
    heading: "Resources",
     links : [
      { label: "Documentation", href: "/documentation" },
      { label: "API Reference", href: "/documentation" },
      { label: "Blog", href: "/resource" },,
      { label: "Release Notes", href: "/resource" },
     
    ],
  },
  {
    heading: "Pricing & Access",
    links: [
      { label: "Pricing", href: "/pricing" },
      { label: "Plans", href: "/pricing" },
      { label: "Book a Demo", href: "/book-a-demo" },
      { label: "Request Pilot", href: "/contact-us" },
      { label: "Request Enterprise Briefing", href: "/contact-us" },
      { label: "Contact Sales", href: "/contact-us" },
      { label: "Procurement Support", href: "/contact-us" },
      { label: "Partner Inquiry", href: "/contact-us" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Leadership", href: "/about" },
      { label: "Careers", href: "/about" },
      { label: "Partners", href: "/about" },
      { label: "Press", href: "/press-media" },
      { label: "Contact", href: "/contact-us" },
      { label: "Legal", href: "/privacy-security" },
      { label: "Zoiko Group", href: "/about" },
    ],
  },
];

export default function ZoikoLogiaFooter() {
  return (
    <footer className="bg-[#0a1626] text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-14">

        {/* ── Brand row: logo/text LEFT, pills RIGHT ── */}
        <div className="grid items-start gap-8 lg:grid-cols-[1fr_auto]">

          {/* Left — brand block */}
          <div className="max-w-xl">
            <div className="flex flex-wrap items-end gap-x-3 gap-y-2">
              <Link href="/" className="flex shrink-0 items-center">
                <Image
                  src="/images/zoikologia-logo-new.png"
                  alt="ZoikoLogia"
                  width={210}
                  height={50}
                  priority
                  className="block h-9 w-auto"
                />
              </Link>
              <Image
                src="/images/with Kriton.png"
                alt="with Kriton"
                width={150}
                height={40}
                className="block h-5 w-auto shrink-0"
              />
            </div>

            <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.15em]" style={{ color: TEAL }}>
              Governed AI Accounting Intelligence Platform
            </p>

            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              ZoikoLogia<sup className="align-super text-[0.6em]">&trade;</sup> with Kriton
              <sup className="align-super text-[0.6em]">&trade;</sup> is a governed AI accounting intelligence
              platform designed to support source-backed accounting, tax, audit, payroll, compliance,
              finance, and learning workflows.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              Built for professional work where source authority, privacy, auditability, risk routing,
              and human judgment matter.
            </p>

            <div className="mt-4 flex flex-wrap gap-3 ">
              <Link href="/platform" className="text-sm font-semibold text-teal-500 underline underline-offset-4 hover:no-underline">Explore Platform</Link>
              <Link href="/kriton-ai" className="text-sm font-semibold text-teal-500 underline underline-offset-4 hover:no-underline">Meet Kriton&trade;</Link>
              <Link href="/privacy-security" className="text-sm font-semibold text-teal-500 underline underline-offset-4 hover:no-underline">Visit Privacy &amp; Security</Link>
            </div>
          </div>

          {/* Right — pills */}
          <div className="flex flex-col items-end gap-2.5">
            {footerPills.map((pill) => (
              <span key={pill} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-gray-300">
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: TEAL }} />
                {pill}
              </span>
            ))}
          </div>

        </div>

        {/* ── Mega link grid ── */}
        <nav
          aria-label="Footer"
          className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-white/10 pt-10 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-8"
        >
          {columns.map((col) => (
            <div key={col.heading}>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.08em] text-white">
                {col.heading}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={`${col.heading}-${l.label}`}>
                    <Link
                      href={l.href}
                      className="text-[13px] leading-snug text-gray-400 transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* ── Bottom bar ── */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-gray-500 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} ZoikoLogia. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-5">
            <Link href="/privacy-security" className="hover:text-white">Terms of Service</Link>
            <Link href="/privacy-security" className="hover:text-white">Privacy Policy</Link>
            <Link href="/cookie-preferences" className="hover:text-white">Cookie Settings</Link>
            <Link href="/privacy-security" className="hover:text-white">Accessibility Statement</Link>
            <Link href="/" className="hover:text-white">System Status</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

export { ZoikoLogiaFooter };