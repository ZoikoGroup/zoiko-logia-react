"use client";
import Image from "next/image";
import Link from "next/link";

const AMBER = "#e0a92e";

const columns: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Platform",
    links: [
      { label: "Source Library", href: "/platform/source-library" },
      { label: "Knowledge Graph", href: "/platform/knowledge-graph" },
      { label: "RAG Engine", href: "/platform/rag" },
      { label: "Audit Ledger", href: "/platform/audit-ledger" },
      { label: "Evaluation Framework", href: "/platform/evaluation" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "Accounting Firms", href: "/solutions/firms" },
      { label: "Enterprise Finance", href: "/solutions/enterprise" },
      { label: "Tax Professionals", href: "/solutions/tax" },
      { label: "Audit Teams", href: "/solutions/audit" },
      { label: "Education", href: "/solutions/education" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "Platform Architecture", href: "/architecture" },
      { label: "Governance Pack", href: "/governance-pack" },
      { label: "Blog", href: "/blog" },
      { label: "Release Notes", href: "/releases" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
      { label: "Security", href: "/security" },
      { label: "Trust Center", href: "/trust" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
      { label: "Data Processing", href: "/dpa" },
      { label: "Compliance", href: "/compliance" },
    ],
  },
];

export default function ZoikoLogiaFooter() {
  return (
    <footer className="bg-[#0a1626] text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-14">
        {/* Brand column widened (1.8fr) so the logo lockup has room and won't spill into "Platform". */}
        <div className="grid gap-10 lg:grid-cols-[1.8fr_repeat(5,1fr)]">

          {/* Brand */}
          <div>
            {/* flex-wrap = safety net: if the two marks can't fit on one line, "with Kriton"
                drops BELOW the logo instead of overflowing sideways. */}
            <div className="flex flex-wrap items-end gap-x-3 gap-y-2">
              <Link href="/" className="flex shrink-0 items-center">
                <Image
                  src="/images/Rectangle 1.png"
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

            <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.15em] text-[#0d9488]">
              Governed AI Accounting Intelligence Platform
            </p>

            <p className="mt-3 max-w-md text-sm leading-relaxed text-gray-400">
              ZoikoLogia<sup className="align-super text-[0.6em]">™</sup> with Kriton
              <sup className="align-super text-[0.6em]">™</sup> is a governed AI accounting intelligence platform designed to
              support source-backed accounting, tax, audit, payroll, compliance, finance, and learning workflows.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <p className="mb-4 text-sm font-semibold text-white">{col.heading}</p>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm text-gray-400 transition-colors hover:text-white">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-gray-500 sm:flex-row">
          <p>© {new Date().getFullYear()} ZoikoLogia. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/cookies" className="hover:text-white">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { ZoikoLogiaFooter };