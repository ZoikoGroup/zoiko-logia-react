"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  Menu, X, ChevronDown,
  LayoutGrid, FileText, Network, Layers, ScrollText, BarChart3, Plug,
  Building2, Briefcase, ShieldCheck, CalendarDays, GraduationCap,
  Shield, Check, Lock, Calendar, ClipboardCheck,
  BookOpen, Calculator, PenLine, PlayCircle,
  type LucideIcon,
} from "lucide-react";

const AMBER = "#e0a92e";
const NAVY = "#0d1b2e";

// ─── Types ─────────────────────────────────────────────────────────────────────

interface MenuItem {
  label: string;
  href: string;
  desc: string;
  Icon: LucideIcon;
}

interface MenuColumn {
  label: string;
  items: MenuItem[];
}

interface Highlight {
  eyebrow: string;
  title: string;
  body: string;
  img: string;
  cta: string;
  ctaHref: string;
}

interface MegaMenu {
  key: string;
  label: string;      // nav trigger text
  href: string;       // where the trigger itself points
  title: string;      // panel header
  subtitle: string;
  Icon: LucideIcon;
  columns: MenuColumn[];
  highlight: Highlight;
}

// ─── Menu data ─────────────────────────────────────────────────────────────────

const PLATFORM: MegaMenu = {
  key: "platform",
  label: "Platform",
  href: "/platform",
  title: "Platform",
  subtitle: "The architecture behind every governed answer.",
  Icon: LayoutGrid,
  columns: [
    {
      label: "Explore",
      items: [
        { label: "Platform Overview", href: "/platform", desc: "The full architecture, end to end.", Icon: LayoutGrid },
        { label: "Source-Governed Intelligence", href: "/platform/source-governed-intelligence", desc: "Approved, versioned, licensed sources.", Icon: FileText },
        { label: "Accounting Ontology", href: "/platform/accounting-ontology", desc: "Structured concepts behind every answer.", Icon: Network },
        { label: "RAG Source Bundles", href: "/platform/rag-source-bundles", desc: "Retrieval, scoped to what's approved.", Icon: Layers },
      ],
    },
    {
      label: "Governance & Evidence",
      items: [
        { label: "Audit Evidence Ledger", href: "/platform/audit-evidence-ledger", desc: "Every material answer, reconstructable.", Icon: ScrollText },
        { label: "Evaluation & Benchmarks", href: "/platform/evaluation-benchmarks", desc: "How we test before release.", Icon: BarChart3 },
        { label: "Enterprise Integrations", href: "/platform/enterprise-integrations", desc: "Identity, ERP, document systems.", Icon: Plug },
      ],
    },
  ],
  highlight: {
    eyebrow: "Platform Highlight",
    title: "See a source-backed answer, live.",
    body: "Watch citations, tiers, and evidence attach to a real accounting question.",
    img: "/images/menu-platform.png",
    cta: "See It in Action",
    ctaHref: "/book-a-demo",
  },
};

const SOLUTIONS: MegaMenu = {
  key: "solutions",
  label: "Solutions",
  href: "/solutions",
  title: "Solutions",
  subtitle: "Built around who's actually asking the question.",
  Icon: LayoutGrid,
  columns: [
    {
      label: "By Team",
      items: [
        { label: "Accounting Firms", href: "/solutions/accounting-firms", desc: "Client-service and review workflows.", Icon: Building2 },
        { label: "Enterprise Finance Teams", href: "/solutions/enterprise-finance-teams", desc: "Policy consistency at scale.", Icon: Briefcase },
        { label: "Audit & Assurance Teams", href: "/solutions/audit-assurance-teams", desc: "Evidence-ready review support.", Icon: ShieldCheck },
      ],
    },
    {
      label: "By Need",
      items: [
        { label: "Payroll & Compliance", href: "/solutions/payroll-compliance", desc: "Jurisdiction-aware, escalation-ready.", Icon: CalendarDays },
        { label: "Accounting Education", href: "/solutions/accounting-education", desc: "Learning-safe, source-backed practice.", Icon: GraduationCap },
        { label: "Solutions Overview", href: "/solutions", desc: "See every audience side by side.", Icon: LayoutGrid },
      ],
    },
  ],
  highlight: {
    eyebrow: "Solutions Highlight",
    title: "See it built for your team specifically.",
    body: "Every solution page maps directly to the workflows your role actually owns.",
    img: "/images/menu-solutions.png",
    cta: "Book a Demo",
    ctaHref: "/book-a-demo",
  },
};

const GOVERNANCE: MegaMenu = {
  key: "governance",
  label: "Governance",
  href: "/governance",
  title: "Governance",
  subtitle: "How Kriton™'s behavior is controlled, tested, and bounded.",
  Icon: Shield,
  columns: [
    {
      label: "Principles",
      items: [
        { label: "Governance Overview", href: "/governance", desc: "The full control architecture.", Icon: Shield },
        { label: "Responsible AI", href: "/governance/responsible-ai", desc: "Six principles behind every answer.", Icon: Check },
        { label: "Source Authority", href: "/governance/source-authority", desc: "Tiers, versioning, licensing.", Icon: FileText },
      ],
    },
    {
      label: "Controls",
      items: [
        { label: "AI Safety", href: "/governance/ai-safety", desc: "Risk classification and escalation.", Icon: Lock },
        { label: "Event Catalog", href: "/governance/event-catalog", desc: "Every trackable governance event.", Icon: Calendar },
        { label: "QA Release Gates", href: "/governance/qa-release-gates", desc: "What has to pass before ship.", Icon: ClipboardCheck },
      ],
    },
  ],
  highlight: {
    eyebrow: "Governance Highlight",
    title: "What we don't claim, stated plainly.",
    body: "Every governance page ends with the same honesty: here's exactly where the boundary is.",
    img: "/images/menu-governance.png",
    cta: "Visit Trust Center",
    ctaHref: "/trust-center",
  },
};

const RESOURCES: MegaMenu = {
  key: "resources",
  label: "Resources",
  href: "/resources",
  title: "Resources",
  subtitle: "Research, education, and proof — organized by what you need.",
  Icon: LayoutGrid,
  columns: [
    {
      label: "Learn",
      items: [
        { label: "Resource Center", href: "/resources", desc: "The full hub, all in one place.", Icon: LayoutGrid },
        { label: "Guides", href: "/resources/guides", desc: "Practical implementation reading.", Icon: FileText },
        { label: "White Papers", href: "/resources/white-papers", desc: "Executive-grade research.", Icon: ScrollText },
        { label: "Webinars", href: "/resources/webinars", desc: "Live and on-demand sessions.", Icon: PlayCircle },
      ],
    },
    {
      label: "Evaluate",
      items: [
        { label: "Case Studies", href: "/resources/case-studies", desc: "Proof, filtered by your use case.", Icon: BarChart3 },
        { label: "ROI Calculator", href: "/resources/roi-calculator", desc: "Model your own directional value.", Icon: Calculator },
        { label: "Blog", href: "/resources/blog", desc: "Shorter-form perspective pieces.", Icon: PenLine },
        { label: "Glossary", href: "/resources/glossary", desc: "Every term, defined plainly.", Icon: BookOpen },
      ],
    },
  ],
  highlight: {
    eyebrow: "Resource Highlight",
    title: "Try the ROI Calculator.",
    body: "Model directional value for your team's actual workflow volume.",
    img: "/images/menu-resources.png",
    cta: "Calculate My ROI",
    ctaHref: "/resources/roi-calculator",
  },
};

const MEGA_MENUS: MegaMenu[] = [PLATFORM, SOLUTIONS, GOVERNANCE, RESOURCES];

/** Nav entries with no dropdown */
const FLAT_LINKS: { label: string; href: string }[] = [
  { label: "Kriton™ AI Advisor", href: "/kriton" },
  { label: "Privacy & Security", href: "/privacy-security" },
  { label: "Pricing", href: "/pricing" },
  { label: "Company", href: "/company" },
];

/** Order of the desktop nav bar */
const NAV_ORDER: string[] = [
  "Platform", "Kriton™ AI Advisor", "Solutions", "Governance",
  "Privacy & Security", "Pricing", "Resources", "Company",
];

const TOP_LINKS = [
  { label: "Compliance", href: "/compliance" },
  { label: "Trust Center", href: "/trust-center" },
  { label: "Support", href: "/support" },
];

// ─── Mega panel ────────────────────────────────────────────────────────────────

function MegaPanel({ menu, onNavigate }: { menu: MegaMenu; onNavigate: () => void }) {
  const { Icon } = menu;

  return (
    <div className="overflow-hidden rounded-xl border border-[#e8d9b8] bg-white shadow-2xl dark:border-gray-700 dark:bg-gray-900">
      {/* Panel header */}
      <div className="flex items-start gap-3 border-b border-black/10 p-5 dark:border-gray-700">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#dfeee6] text-[#0d9488] dark:bg-teal-900/40">
          <Icon size={17} strokeWidth={1.9} />
        </span>
        <span>
          <span className="block font-serif text-base font-bold text-[#16233d] dark:text-white">{menu.title}</span>
          <span className="mt-0.5 block text-[13px] text-slate-500 dark:text-gray-400">{menu.subtitle}</span>
        </span>
      </div>

      {/* Columns */}
      <div className="grid md:grid-cols-3">
        {menu.columns.map((col) => (
          <div key={col.label} className="border-b border-black/10 p-5 md:border-b-0 md:border-r dark:border-gray-700">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.12em] text-[#0d9488]">{col.label}</p>
            <ul className="space-y-4">
              {col.items.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} onClick={onNavigate}
                    className="group flex gap-3 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-[#0d9488]">
                    <span className="mt-0.5 shrink-0 text-slate-400 transition-colors group-hover:text-[#0d9488] dark:text-gray-500">
                      <item.Icon size={16} strokeWidth={1.8} />
                    </span>
                    <span>
                      <span className="block text-[14px] font-bold leading-snug text-[#16233d] transition-colors group-hover:text-[#0d9488] dark:text-white">
                        {item.label}
                      </span>
                      <span className="mt-0.5 block text-[12.5px] leading-relaxed text-slate-500 dark:text-gray-400">
                        {item.desc}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Highlight */}
        <div className="bg-[#f5efe0] p-5 dark:bg-gray-800">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.12em] text-[#c8791a]">
            {menu.highlight.eyebrow}
          </p>
          <p className="text-[15px] font-bold leading-snug text-[#16233d] dark:text-white">
            {menu.highlight.title}
          </p>
          <p className="mt-2 text-[12.5px] leading-relaxed text-slate-600 dark:text-gray-300">
            {menu.highlight.body}
          </p>
          <div className="relative mt-4 aspect-[16/10] w-full overflow-hidden rounded-md bg-slate-200 dark:bg-gray-700">
            <Image src={menu.highlight.img} alt="" fill sizes="240px" className="object-cover" />
          </div>
          <Link href={menu.highlight.ctaHref} onClick={onNavigate}
            className="mt-3 block rounded-md py-2.5 text-center text-[13px] font-semibold text-[#16233d] transition-opacity hover:opacity-90"
            style={{ backgroundColor: AMBER }}>
            {menu.highlight.cta}
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─── Header ────────────────────────────────────────────────────────────────────

export default function ZoikoLogiaHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  // Delay on mouse-leave so the pointer can travel from trigger to panel
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpenKey(null), 140);
  }, [cancelClose]);

  const closeNow = useCallback(() => {
    cancelClose();
    setOpenKey(null);
  }, [cancelClose]);

  // Escape closes any open menu
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenKey(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Clean up the pending timer on unmount
  useEffect(() => () => cancelClose(), [cancelClose]);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const activeMenu = MEGA_MENUS.find((m) => m.key === openKey) ?? null;

  return (
    <header
      className="sticky top-0 z-50 border-b border-white/10"
      style={{ backgroundColor: NAVY }}
      onMouseLeave={scheduleClose}
    >
      {/* Top strip */}
      <div className="hidden border-b border-white/10 lg:block">
        <div className="mx-auto flex max-w-7xl justify-end gap-6 px-6 py-1.5">
          {TOP_LINKS.map((l) => (
            <Link key={l.label} href={l.href} className="text-xs text-gray-400 transition-colors hover:text-white">
              {l.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Main bar */}
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/images/Rectangle 1.png"
            alt="ZoikoLogia"
            width={180}
            height={50}
            priority
            className="h-10 w-auto dark:hidden"
          />
          <Image
            src="/images/zoikologia-logo-png.png"
            alt="ZoikoLogia"
            width={180}
            height={50}
            priority
            className="hidden h-10 w-auto dark:block"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 xl:flex">
          {NAV_ORDER.map((label) => {
            const mega = MEGA_MENUS.find((m) => m.label === label);

            if (mega) {
              const isOpen = openKey === mega.key;
              return (
                <div key={label} onMouseEnter={() => { cancelClose(); setOpenKey(mega.key); }}>
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                    onClick={() => setOpenKey(isOpen ? null : mega.key)}
                    onFocus={() => { cancelClose(); setOpenKey(mega.key); }}
                    className={`flex items-center gap-1 whitespace-nowrap text-sm font-medium transition-colors ${
                      isOpen ? "text-white" : "text-gray-200 hover:text-white"
                    }`}
                  >
                    {label}
                    <ChevronDown size={14} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                </div>
              );
            }

            const flat = FLAT_LINKS.find((f) => f.label === label);
            if (!flat) return null;
            return (
              <Link key={label} href={flat.href}
                onMouseEnter={scheduleClose}
                className="whitespace-nowrap text-sm font-medium text-gray-200 transition-colors hover:text-white">
                {flat.label}
              </Link>
            );
          })}
        </nav>

        {/* Right actions */}
        <div className="flex shrink-0 items-center gap-3">
          <Link href="/signin" className="hidden text-sm font-medium text-gray-200 transition-colors hover:text-white sm:inline-block">
            Sign in
          </Link>
          <Link href="/book-a-demo"
            className="hidden rounded-md px-4 py-2 text-sm font-semibold transition-opacity hover:opacity-90 sm:inline-block"
            style={{ backgroundColor: AMBER, color: NAVY }}>
            Book a Demo
          </Link>
          <Link href="/request-pilot" className="hidden rounded-md border border-white/25 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10 md:inline-block">
            Request Pilot
          </Link>
          <button type="button" onClick={() => setMobileOpen((o) => !o)} aria-label="Toggle menu" aria-expanded={mobileOpen}
            className="flex h-9 w-9 items-center justify-center rounded-md text-white hover:bg-white/10 xl:hidden">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mega panel — the pt-2 wrapper is a hover bridge between trigger and panel */}
        {activeMenu && (
          <div
            className="absolute left-1/2 top-full z-50 hidden w-[min(880px,calc(100vw-3rem))] -translate-x-1/2 pt-2 xl:block"
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
          >
            <MegaPanel menu={activeMenu} onNavigate={closeNow} />
          </div>
        )}
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-white/10 xl:hidden" style={{ backgroundColor: NAVY }}>
          {NAV_ORDER.map((label) => {
            const mega = MEGA_MENUS.find((m) => m.label === label);

            if (mega) {
              const expanded = mobileSection === mega.key;
              return (
                <div key={label} className="border-b border-white/10">
                  <button type="button" aria-expanded={expanded}
                    onClick={() => setMobileSection(expanded ? null : mega.key)}
                    className="flex w-full items-center justify-between px-6 py-3.5 text-left text-sm font-medium text-gray-200 active:bg-white/5">
                    {label}
                    <ChevronDown size={16} className={`transition-transform ${expanded ? "rotate-180" : ""}`} />
                  </button>

                  {expanded && (
                    <div className="bg-white/5 pb-3">
                      {mega.columns.map((col) => (
                        <div key={col.label} className="px-6 pt-3">
                          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#7fd4c1]">{col.label}</p>
                          <ul className="space-y-2.5">
                            {col.items.map((item) => (
                              <li key={item.label}>
                                <Link href={item.href} onClick={() => setMobileOpen(false)}
                                  className="flex gap-2.5 text-gray-200 active:text-white">
                                  <span className="mt-0.5 shrink-0 text-gray-500"><item.Icon size={15} strokeWidth={1.8} /></span>
                                  <span>
                                    <span className="block text-[13px] font-semibold">{item.label}</span>
                                    <span className="mt-0.5 block text-[11.5px] leading-snug text-gray-400">{item.desc}</span>
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                      <div className="mt-4 px-6">
                        <Link href={mega.highlight.ctaHref} onClick={() => setMobileOpen(false)}
                          className="block rounded-md py-2.5 text-center text-[13px] font-semibold"
                          style={{ backgroundColor: AMBER, color: NAVY }}>
                          {mega.highlight.cta}
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            const flat = FLAT_LINKS.find((f) => f.label === label);
            if (!flat) return null;
            return (
              <Link key={label} href={flat.href} onClick={() => setMobileOpen(false)}
                className="block border-b border-white/10 px-6 py-3.5 text-sm font-medium text-gray-200 active:bg-white/5">
                {flat.label}
              </Link>
            );
          })}

          {TOP_LINKS.map((l) => (
            <Link key={l.label} href={l.href} onClick={() => setMobileOpen(false)}
              className="block border-b border-white/10 px-6 py-3 text-xs text-gray-400 active:bg-white/5">
              {l.label}
            </Link>
          ))}

          <div className="space-y-2 p-4">
            <Link href="/book-a-demo" onClick={() => setMobileOpen(false)}
              className="block rounded-md py-2.5 text-center text-sm font-semibold"
              style={{ backgroundColor: AMBER, color: NAVY }}>
              Book a Demo
            </Link>
            <Link href="/request-pilot" onClick={() => setMobileOpen(false)}
              className="block rounded-md border border-white/25 py-2.5 text-center text-sm font-semibold text-white">
              Request Pilot
            </Link>
            <Link href="/signin" onClick={() => setMobileOpen(false)}
              className="block py-2 text-center text-sm text-gray-300">
              Sign in
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export { ZoikoLogiaHeader };