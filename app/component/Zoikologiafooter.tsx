"use client";
import Image from "next/image";
import Link from "next/link";

type Column = { heading: string; links: { label: string; href: string }[] };

const columns: Column[] = [
  {
    heading: "Platform",
    links: [
      { label: "Overview", href: "/platform" },
      { label: "Source-Governed Intelligence", href: "/source-governed-intelligence" },
      { label: "Accounting Knowledge Graph", href: "/accounting-knowledge-graph" },
      { label: "RAG Source Bundles", href: "/rag-source-bundles" },
      { label: "Audit Evidence", href: "/audit" },
      { label: "Evaluation & Benchmarks", href: "/evaluation&benchmark" },
      { label: "Enterprise Integrations", href: "/enterprise-integrations" },
    ],
  },
  {
    heading: "Kriton\u2122 AI Advisor",
    links: [
      { label: "Meet Kriton\u2122", href: "/meet-kriton" },
      { label: "Ask Accounting Questions", href: "/ask-accounting-questions" },
      { label: "Learning & Practice Mode", href: "/learning-practice-mode" },
      { label: "Workflow Mode", href: "/workflow-mode" },
      { label: "Review Mode", href: "/review-mode" },
      { label: "Admin Mode", href: "/admin-mode" },
      { label: "Human Escalation", href: "/human-escalation" },
      { label: "Professional Boundaries", href: "/professional-boundaries" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "Accounting Firms", href: "/accounting-firms" },
      { label: "Enterprise Finance Teams", href: "/enterprise-finance-team" },
      { label: "Tax Professionals", href: "/tax-professionals" },
      { label: "Audit & Assurance Teams", href: "/audit-tax-compliance" },
      { label: "Payroll & Compliance Teams", href: "/payroll-compliance-teams" },
      { label: "Accounting Education", href: "/educators" },
      { label: "AI Governance Teams", href: "/ai-governance-teams" },
    ],
  },
  {
    heading: "Governance",
    links: [
      { label: "Governance Overview", href: "/governance" },
      { label: "Source Authority", href: "/source-authority" },
      { label: "AI Safety", href: "/ai-safety" },
      { label: "Professional Boundaries", href: "/professional-boundaries" },
      { label: "Model Evaluation", href: "/model-evaluation" },
      { label: "Release Controls", href: "/release-controls" },
      { label: "Event Governance", href: "/event-governance" },
      { label: "Responsible AI", href: "/responsible-ai" },
    ],
  },
  {
    heading: "Privacy & Security",
    links: [
      { label: "Privacy & Security Overview", href: "/privacy-security" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Security Overview", href: "/security" },
      { label: "Data Protection", href: "/data-retention" },
      { label: "Provider Due Diligence", href: "/provider-due-diligence" },
      { label: "Accessibility Statement", href: "/accessibility-statement" },
      { label: "Trust Center", href: "/trust" },
      { label: "Contact Privacy Team", href: "/contact-privacy-team" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Documentation", href: "/documentation" },
      { label: "API Reference", href: "/api-reference" },
      { label: "Use Cases", href: "/use-cases" },
      { label: "Blog", href: "/blog" },
      { label: "Glossary", href: "/glossary" },
      { label: "Release Notes", href: "/releases" },
      { label: "Webinars", href: "/webinars" },
      { label: "Help Center", href: "/help-center" },
    ],
  },
  {
    heading: "Pricing & Access",
    links: [
      { label: "Pricing", href: "/pricing" },
      { label: "Plans", href: "/plans" },
      { label: "Book a Demo", href: "/book-a-demo" },
      { label: "Request Pilot", href: "/request-pilot" },
      { label: "Request Enterprise Briefing", href: "/request-enterprise-briefing" },
      { label: "Contact Sales", href: "/contact-sales" },
      { label: "Procurement Support", href: "/procurement-support" },
      { label: "Partner Inquiry", href: "/partner-inquiry" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Leadership", href: "/leadership" },
      { label: "Careers", href: "/careers" },
      { label: "Partners", href: "/partners" },
      { label: "Press", href: "/press" },
      { label: "Contact", href: "/contact" },
      { label: "Legal", href: "/legal" },
      { label: "Zoiko Group", href: "/zoiko-group" },
    ],
  },
];

export default function ZoikoLogiaFooter() {
  return (
    <footer className="bg-[#0a1626] text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-14">

        {/* ── Brand ──
            Moved above the link grid. With eight columns there is no longer room
            for the brand block to sit beside them on the same row. */}
        <div className="max-w-2xl">
          {/* flex-wrap = safety net: if the two marks can't fit on one line,
              "with Kriton" drops BELOW the logo instead of overflowing sideways. */}
          <div className="flex flex-wrap items-end gap-x-3 gap-y-2">
            <Link href="/" className="flex shrink-0 items-center">
              <Image
                src="/images/Rectangle 1.png"
                alt="ZoikoLogia"
                width={210}
                height={50}
                priority
                className="block h-9 w-auto dark:hidden"
              />
              <Image
                src="/images/zoikologia-logo-png.png"
                alt="ZoikoLogia"
                width={210}
                height={50}
                priority
                className="hidden h-9 w-auto dark:block"
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

          <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.15em] text-[#0d9488]">
            Governed AI Accounting Intelligence Platform
          </p>

          <p className="mt-3 text-sm leading-relaxed text-gray-400">
            ZoikoLogia<sup className="align-super text-[0.6em]">™</sup> with Kriton
            <sup className="align-super text-[0.6em]">™</sup> is a governed AI accounting intelligence
            platform designed to support source-backed accounting, tax, audit, payroll, compliance,
            finance and learning workflows.
          </p>
        </div>

        {/* ── Mega link grid ──
            Eight columns is too many for one row below ~1280px, so it steps
            2 → 4 → 8 rather than squeezing. gap-y keeps the wrapped rows apart. */}
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
          <p>© {new Date().getFullYear()} ZoikoLogia. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-5">
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/cookies" className="hover:text-white">Cookie Settings</Link>
            <Link href="/accessibility-statement" className="hover:text-white">Accessibility Statement</Link>
            <Link href="/system-status" className="hover:text-white">System Status</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { ZoikoLogiaFooter };