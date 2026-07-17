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
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(5,1fr)]">
          {/* Brand */}
          <div>
            <span className="text-xl font-extrabold tracking-tight text-white">
               <Link href="/" className="flex items-center">
  <Image
    src="/images/Rectangle 1.png"
    alt="ZoikoLogia"
    width={180}
    height={50}
    priority
    className="h-10 w-auto"
  />
</Link>
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-400">
              Source-backed accounting intelligence, governed by design. Powered by Kriton™, the judgment interface for
              professional accounting workflows.
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