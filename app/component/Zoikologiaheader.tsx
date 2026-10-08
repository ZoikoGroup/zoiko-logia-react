"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  Menu, X, ChevronDown,
  LayoutGrid, FileText, Network, Layers, ScrollText, BarChart3, Plug,
  Building2, Briefcase, ShieldCheck, CalendarDays, GraduationCap,
  Shield, Check, Lock, Calendar, ClipboardCheck,
  BookOpen, Calculator, PenLine, PlayCircle, Sparkles,
  type LucideIcon,
} from "lucide-react";

const AMBER = "#e59819";
const TEAL = "#0d9488";

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

// ─── Menu Data ─────────────────────────────────────────────────────────────────

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
        { label: "Source-Governed Intelligence", href: "/sourced-governed-intelligence", desc: "Approved, versioned, licensed sources.", Icon: FileText },
        { label: "Accounting Ontology", href: "/accounting-firms", desc: "Structured concepts behind every answer.", Icon: Network },
        { label: "RAG Source Bundles", href: "/rag-source-bundles", desc: "Retrieval, scoped to what's approved.", Icon: Layers },
      ],
    },
    {
      label: "Governance & Evidence",
      items: [
        { label: "Audit Evidence Ledger", href: "/audit-&-assurance-terms", desc: "Every material answer, reconstructable.", Icon: ScrollText },
        { label: "Evaluation & Benchmarks", href: "/evaluation&benchmark", desc: "How we test before release.", Icon: BarChart3 },
        { label: "Enterprise Integrations", href: "/enterprise-integrations", desc: "Identity, ERP, document systems.", Icon: Plug },
      ],
    },
  ],
  highlight: {
    eyebrow: "Platform Highlight",
    title: "See a source-backed answer, live.",
    body: "Watch citations, tiers, and evidence attach to a real accounting question.",
    img: "/images/Live source-governed answer demo.png",
    cta: "See It in Action",
    ctaHref: "/book-a-demo",
  },
};

const KRITON_AI: MegaMenu = {
  key: "kriton-ai",
  label: "Kriton™ AI Advisor",
  href: "/kriton-ai",
  title: "Kriton™ AI Advisor",
  subtitle: "Grounded in authoritative sources, not statistical guessing.",
  Icon: Sparkles,
  columns: [
    {
      label: "Core Capabilities",
      items: [
        { label: "Kriton™ AI Overview", href: "/kriton-ai", desc: "Source-grounded intelligence for professional judgment.", Icon: Sparkles },
        { label: "Ask Accounting Questions", href: "/ask-accounting-questions", desc: "Multi-tier citation and source verification.", Icon: FileText },
        { label: "Learning & Practice Mode", href: "/learning-&-practice-mode", desc: "Safe environment for simulation and review.", Icon: GraduationCap },
      ],
    },
    {
      label: "Audience Workflows",
      items: [
        { label: "Tax Professionals", href: "/tax-professionals", desc: "Jurisdiction-aware tax guidance and citation.", Icon: Calculator },
        { label: "Audit & Assurance", href: "/audit-tax-compliance", desc: "Evidence-ready review and audit support.", Icon: ShieldCheck },
        { label: "CTO & Security IT", href: "/cto-security-it", desc: "Enterprise integration and boundary controls.", Icon: Lock },
      ],
    },
  ],
  highlight: {
    eyebrow: "Kriton™ Highlight",
    title: "Ground every answer in real sources.",
    body: "See how citations, confidence scoring, and evidence attach in real time.",
    img: "/images/div.role-hero-photo.png",
    cta: "Explore Kriton™ AI",
    ctaHref: "/kriton-ai",
  },
};

const SOLUTIONS: MegaMenu = {
  key: "solutions",
  label: "Solutions",
  href: "/solutions",
  title: "Solutions",
  subtitle: "Built around who's actually asking the question.",
  Icon: Building2,
  columns: [
    {
      label: "By Team",
      items: [
        { label: "Accounting Firms", href: "/accounting-firms", desc: "Client-service and review workflows.", Icon: Building2 },
        { label: "Enterprise Finance Teams", href: "/enterprise-finance-team", desc: "Policy consistency at scale.", Icon: Briefcase },
        { label: "Audit & Assurance Teams", href: "/audit-tax-compliance", desc: "Evidence-ready review support.", Icon: ShieldCheck },
      ],
    },
    {
      label: "By Need",
      items: [
        { label: "Payroll & Compliance", href: "/payroll-compliance", desc: "Jurisdiction-aware, escalation-ready.", Icon: CalendarDays },
        { label: "Accounting Education", href: "/educators", desc: "Learning-safe, source-backed practice.", Icon: GraduationCap },
        { label: "Solutions Overview", href: "/solutions", desc: "See every audience side by side.", Icon: LayoutGrid },
      ],
    },
  ],
  highlight: {
    eyebrow: "Solutions Highlight",
    title: "See it built for your team specifically.",
    body: "Every solution page maps directly to the workflows your role actually owns.",
    img: "/images/Container (6).png",
    cta: "Book a Demo",
    ctaHref: "/book-a-demo",
  },
};

const RESOURCES: MegaMenu = {
  key: "resources",
  label: "Resources",
  href: "/resource",
  title: "Resources",
  subtitle: "Research, education, and proof — organized by what you need.",
  Icon: BookOpen,
  columns: [
    {
      label: "Learn",
      items: [
        { label: "Resource Center", href: "/resource", desc: "The full hub, all in one place.", Icon: LayoutGrid },
        { label: "Guides", href: "/guides", desc: "Practical implementation reading.", Icon: FileText },
        { label: "White Papers", href: "/white-papers", desc: "Executive-grade research.", Icon: ScrollText },
        { label: "Webinars", href: "/webinars", desc: "Live and on-demand sessions.", Icon: PlayCircle },
      ],
    },
    {
      label: "Evaluate",
      items: [
        { label: "Case Studies", href: "/case-studies", desc: "Proof, filtered by your use case.", Icon: BarChart3 },
        { label: "ROI Calculator", href: "/roi-calculator", desc: "Model your own directional value.", Icon: Calculator },
        { label: "Blog", href: "/resource", desc: "Shorter-form perspective pieces.", Icon: PenLine },
        { label: "Glossary", href: "/glossary", desc: "Every term, defined plainly.", Icon: BookOpen },
      ],
    },
  ],
  highlight: {
    eyebrow: "Resource Highlight",
    title: "Try the ROI Calculator.",
    body: "Model directional value for your team's actual workflow volume.",
    img: "/images/Container (8).png",
    cta: "Calculate My ROI",
    ctaHref: "/roi-calculator",
  },
};

const COMPANY: MegaMenu = {
  key: "company",
  label: "Company",
  href: "/about",
  title: "Company",
  subtitle: "Building the standard for governed financial intelligence.",
  Icon: Building2,
  columns: [
    {
      label: "About ZoikoLogia",
      items: [
        { label: "About Us", href: "/about", desc: "Our mission, philosophy, and approach.", Icon: Building2 },
        { label: "Leadership", href: "/leadership", desc: "Accounting and AI domain experts.", Icon: Briefcase },
        { label: "Press & Media", href: "/press-media", desc: "Brand assets, logos, and press releases.", Icon: FileText },
      ],
    },
    {
      label: "Connect & Trust",
      items: [
        { label: "Contact Us", href: "/contact-us", desc: "Connect with our specialist team.", Icon: Plug },
        { label: "Partner Network", href: "/partners", desc: "Ecosystem and technology partners.", Icon: Network },
        { label: "Request Pilot", href: "/request-pilot", desc: "Evaluate in your firm environment.", Icon: ShieldCheck },
      ],
    },
  ],
  highlight: {
    eyebrow: "Company Highlight",
    title: "Governed AI for accounting.",
    body: "Learn how we build trust into every layer of our platform.",
    img: "/images/About.png",
    cta: "Meet the Team",
    ctaHref: "/leadership",
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
        { label: "Responsible AI", href: "/responsible-ai", desc: "Six principles behind every answer.", Icon: Check },
        { label: "Source Authority", href: "/governance", desc: "Tiers, versioning, licensing.", Icon: FileText },
      ],
    },
    {
      label: "Controls",
      items: [
        { label: "AI Safety", href: "/ai-safety-page", desc: "Risk classification and escalation.", Icon: Lock },
        { label: "Event Catalog", href: "/governed-ai-accounting", desc: "Every trackable governance event.", Icon: Calendar },
        { label: "QA Release Gates", href: "/governance", desc: "What has to pass before ship.", Icon: ClipboardCheck },
      ],
    },
  ],
  highlight: {
    eyebrow: "Governance Highlight",
    title: "What we don't claim, stated plainly.",
    body: "Every governance page ends with the same honesty: here's exactly where the boundary is.",
    img: "/images/Container (7).png",
    cta: "Visit Trust Center",
    ctaHref: "/privacy-security",
  },
};

const ALL_MEGA_MENUS: MegaMenu[] = [
  PLATFORM,
  KRITON_AI,
  SOLUTIONS,
  RESOURCES,
  COMPANY,
  GOVERNANCE,
];

// Main navigation items shown in header bar
const MAIN_NAV_ITEMS: { key?: string; label: string; href?: string; isMega?: boolean }[] = [
  { key: "platform", label: "Platform", isMega: true },
  { key: "kriton-ai", label: "Kriton™ AI Advisor", isMega: true },
  { key: "solutions", label: "Solutions", isMega: true },
  { key: "resources", label: "Resources", isMega: true },
  { label: "Pricing", href: "/pricing", isMega: false },
];

// Top strip navigation items
const TOP_NAV_ITEMS: { key?: string; label: string; href?: string; isMega?: boolean }[] = [
  { key: "company", label: "Company", isMega: true },
  { key: "governance", label: "Governance", isMega: true },
  { label: "Privacy & Security", href: "/privacy-security", isMega: false },
];

// ─── Mega panel component ──────────────────────────────────────────────────────

function MegaPanel({ menu, onNavigate }: { menu: MegaMenu; onNavigate: () => void }) {
  const { Icon } = menu;

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-2xl shadow-slate-900/10">
      {/* Panel header */}
      <div className="flex items-center gap-3.5 border-b border-slate-100 bg-slate-50/60 px-6 py-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-[#0d9488] border border-teal-100/80">
          <Icon size={18} strokeWidth={2} />
        </span>
        <div>
          <span className="block font-serif text-[15px] font-bold text-[#16233d]">{menu.title}</span>
          <span className="block text-[12.5px] text-slate-500">{menu.subtitle}</span>
        </div>
      </div>

      {/* Columns */}
      <div className="grid md:grid-cols-3">
        {menu.columns.map((col) => (
          <div key={col.label} className="border-b border-slate-100 p-5 md:border-b-0 md:border-r">
            <p className="mb-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#0d9488]">{col.label}</p>
            <ul className="space-y-3">
              {col.items.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={onNavigate}
                    className="group flex gap-3 rounded-lg p-1.5 -mx-1.5 transition-colors hover:bg-teal-50/40 outline-none focus-visible:ring-2 focus-visible:ring-[#0d9488]"
                  >
                    <span className="mt-0.5 shrink-0 text-slate-400 transition-colors group-hover:text-[#0d9488]">
                      <item.Icon size={16} strokeWidth={1.8} />
                    </span>
                    <span>
                      <span className="block text-[13.5px] font-semibold leading-snug text-[#16233d] transition-colors group-hover:text-[#0d9488]">
                        {item.label}
                      </span>
                      <span className="mt-0.5 block text-[12px] leading-relaxed text-slate-500">
                        {item.desc}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Highlight Card */}
        <div className="bg-gradient-to-br from-[#faf7f0] to-[#f5efe0] p-5 flex flex-col justify-between">
          <div>
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#c8791a]">
              {menu.highlight.eyebrow}
            </p>
            <p className="text-[14px] font-bold leading-snug text-[#16233d]">
              {menu.highlight.title}
            </p>
            <p className="mt-1.5 text-[12px] leading-relaxed text-slate-600">
              {menu.highlight.body}
            </p>
            <div className="relative mt-3.5 aspect-[16/10] w-full overflow-hidden rounded-lg border border-black/5 bg-slate-200 shadow-sm">
              <Image src={menu.highlight.img} alt="" fill sizes="280px" className="object-cover" />
            </div>
          </div>
          <Link
            href={menu.highlight.ctaHref}
            onClick={onNavigate}
            className="mt-3.5 block rounded-lg py-2.5 px-4 text-center text-[13px] font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
            style={{ backgroundColor: AMBER }}
          >
            {menu.highlight.cta}
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─── Header Component ──────────────────────────────────────────────────────────

export default function ZoikoLogiaHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  // Delay on mouse-leave so pointer can travel comfortably between trigger and panel
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpenKey(null), 160);
  }, [cancelClose]);

  const closeNow = useCallback(() => {
    cancelClose();
    setOpenKey(null);
  }, [cancelClose]);

  // Escape key closes any open menu
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

  // Clean up pending timer on unmount
  useEffect(() => () => cancelClose(), [cancelClose]);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const activeMenu = ALL_MEGA_MENUS.find((m) => m.key === openKey) ?? null;

  return (
    <div className="relative z-50 w-full" onMouseLeave={scheduleClose}>
      {/* ─── Top Utility Strip ──────────────────────────────────────────────── */}
      <div className="hidden border-b border-gray-200 bg-[#f8f9fa] lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-7 px-6 py-2">
          {TOP_NAV_ITEMS.map((item) => {
            if (item.isMega && item.key) {
              const mega = ALL_MEGA_MENUS.find((m) => m.key === item.key);
              if (!mega) return null;
              const isOpen = openKey === item.key;
              return (
                <div key={item.label} onMouseEnter={() => { cancelClose(); setOpenKey(mega.key); }}>
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                    onClick={() => setOpenKey(isOpen ? null : mega.key)}
                    onFocus={() => { cancelClose(); setOpenKey(mega.key); }}
                    className={`flex items-center gap-1 text-[13px] font-normal transition-colors ${
                      isOpen ? "text-[#16233d] font-medium" : "text-[#5a6578] hover:text-[#16233d]"
                    }`}
                  >
                    {item.label}
                    <ChevronDown size={13} className={`text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180 text-slate-700" : ""}`} />
                  </button>
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href || "#"}
                onMouseEnter={scheduleClose}
                className="text-[13px] font-normal text-[#5a6578] transition-colors hover:text-[#16233d]"
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>

      {/* ─── Main Header Bar ─────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white shadow-xs">
        <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3.5">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center focus-visible:outline-none" onClick={closeNow}>
            <Image
              src="/images/zoikologia-logo.png"
              alt="ZoikoLogia"
              width={195}
              height={33}
              priority
              className="h-8 w-auto md:h-9"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-7 xl:flex">
            {MAIN_NAV_ITEMS.map((item) => {
              if (item.isMega && item.key) {
                const mega = ALL_MEGA_MENUS.find((m) => m.key === item.key);
                if (!mega) return null;
                const isOpen = openKey === item.key;
                return (
                  <div key={item.label} onMouseEnter={() => { cancelClose(); setOpenKey(mega.key); }}>
                    <button
                      type="button"
                      aria-haspopup="true"
                      aria-expanded={isOpen}
                      onClick={() => setOpenKey(isOpen ? null : mega.key)}
                      onFocus={() => { cancelClose(); setOpenKey(mega.key); }}
                      className={`flex items-center gap-1.5 py-1 text-[14px] font-medium transition-colors ${
                        isOpen ? "text-[#0d9488]" : "text-[#16233d] hover:text-[#0d9488]"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={`text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180 text-[#0d9488]" : ""}`}
                      />
                    </button>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href || "#"}
                  onMouseEnter={scheduleClose}
                  className="py-1 text-[14px] font-medium text-[#16233d] transition-colors hover:text-[#0d9488]"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex shrink-0 items-center gap-3">
            <Link
              href="/about"
              className="hidden text-[14px] font-medium text-[#16233d] transition-colors hover:text-[#0d9488] sm:inline-block px-2 py-1.5"
            >
              Sign In
            </Link>

            <Link
              href="/book-a-demo"
              className="hidden rounded-lg px-5 py-2.5 text-[14px] font-semibold text-white shadow-sm transition-all hover:opacity-95 sm:inline-block"
              style={{ backgroundColor: AMBER }}
            >
              Book a Demo
            </Link>

            <Link
              href="/request-pilot"
              className="hidden rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-[14px] font-semibold text-[#16233d] transition-colors hover:bg-slate-50 sm:inline-block"
            >
              Request Pilot
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-800 hover:bg-slate-100 xl:hidden"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop MegaPanel Floating Dropdown */}
          {activeMenu && (
            <div
              className="absolute left-1/2 top-full z-50 hidden w-[min(920px,calc(100vw-3rem))] -translate-x-1/2 pt-2 xl:block"
              onMouseEnter={cancelClose}
              onMouseLeave={scheduleClose}
            >
              <MegaPanel menu={activeMenu} onNavigate={closeNow} />
            </div>
          )}
        </div>

        {/* ─── Mobile / Tablet Drawer Menu ───────────────────────────────────── */}
        {mobileOpen && (
          <nav className="max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t border-slate-200 bg-white shadow-xl xl:hidden">
            <div className="divide-y divide-slate-100">
              {/* Main Nav Items */}
              {MAIN_NAV_ITEMS.map((item) => {
                if (item.isMega && item.key) {
                  const mega = ALL_MEGA_MENUS.find((m) => m.key === item.key);
                  if (!mega) return null;
                  const expanded = mobileSection === mega.key;
                  return (
                    <div key={item.label}>
                      <button
                        type="button"
                        aria-expanded={expanded}
                        onClick={() => setMobileSection(expanded ? null : mega.key)}
                        className="flex w-full items-center justify-between px-6 py-4 text-left text-[14px] font-semibold text-slate-900 active:bg-slate-50"
                      >
                        {item.label}
                        <ChevronDown size={16} className={`text-slate-400 transition-transform ${expanded ? "rotate-180" : ""}`} />
                      </button>

                      {expanded && (
                        <div className="bg-slate-50/70 px-6 pb-4 pt-1">
                          {mega.columns.map((col) => (
                            <div key={col.label} className="pt-3">
                              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#0d9488]">{col.label}</p>
                              <ul className="space-y-2.5">
                                {col.items.map((it) => (
                                  <li key={it.label}>
                                    <Link
                                      href={it.href}
                                      onClick={() => setMobileOpen(false)}
                                      className="flex gap-3 text-slate-700 active:text-[#0d9488]"
                                    >
                                      <span className="mt-0.5 shrink-0 text-slate-400">
                                        <it.Icon size={15} strokeWidth={1.8} />
                                      </span>
                                      <span>
                                        <span className="block text-[13px] font-semibold text-slate-900">{it.label}</span>
                                        <span className="mt-0.5 block text-[11.5px] leading-snug text-slate-500">{it.desc}</span>
                                      </span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}

                          <div className="mt-4 pt-2">
                            <Link
                              href={mega.highlight.ctaHref}
                              onClick={() => setMobileOpen(false)}
                              className="block rounded-lg py-2.5 text-center text-[13px] font-semibold text-white shadow-sm"
                              style={{ backgroundColor: AMBER }}
                            >
                              {mega.highlight.cta}
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href || "#"}
                    onClick={() => setMobileOpen(false)}
                    className="block px-6 py-4 text-[14px] font-semibold text-slate-900 active:bg-slate-50"
                  >
                    {item.label}
                  </Link>
                );
              })}

              {/* Top Nav Items on Mobile (Company, Governance, Privacy) */}
              <div className="bg-slate-50/50 py-1">
                {TOP_NAV_ITEMS.map((item) => {
                  if (item.isMega && item.key) {
                    const mega = ALL_MEGA_MENUS.find((m) => m.key === item.key);
                    if (!mega) return null;
                    const expanded = mobileSection === mega.key;
                    return (
                      <div key={item.label}>
                        <button
                          type="button"
                          aria-expanded={expanded}
                          onClick={() => setMobileSection(expanded ? null : mega.key)}
                          className="flex w-full items-center justify-between px-6 py-3 text-left text-[13px] font-medium text-slate-700 active:bg-slate-100"
                        >
                          {item.label}
                          <ChevronDown size={14} className={`text-slate-400 transition-transform ${expanded ? "rotate-180" : ""}`} />
                        </button>

                        {expanded && (
                          <div className="bg-slate-100/60 px-6 pb-3 pt-1">
                            {mega.columns.map((col) => (
                              <div key={col.label} className="pt-2">
                                <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#0d9488]">{col.label}</p>
                                <ul className="space-y-2">
                                  {col.items.map((it) => (
                                    <li key={it.label}>
                                      <Link
                                        href={it.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="flex gap-2.5 text-slate-700 active:text-[#0d9488]"
                                      >
                                        <span className="mt-0.5 shrink-0 text-slate-400">
                                          <it.Icon size={14} strokeWidth={1.8} />
                                        </span>
                                        <span>
                                          <span className="block text-[12.5px] font-semibold text-slate-900">{it.label}</span>
                                          <span className="block text-[11px] text-slate-500">{it.desc}</span>
                                        </span>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.label}
                      href={item.href || "#"}
                      onClick={() => setMobileOpen(false)}
                      className="block px-6 py-3 text-[13px] font-medium text-slate-700 active:bg-slate-100"
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Mobile Actions Bottom CTA */}
            <div className="space-y-2.5 border-t border-slate-200 bg-white p-6">
              <Link
                href="/book-a-demo"
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg py-3 text-center text-[14px] font-semibold text-white shadow-sm"
                style={{ backgroundColor: AMBER }}
              >
                Book a Demo
              </Link>
              <Link
                href="/request-pilot"
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg border border-slate-300 py-3 text-center text-[14px] font-semibold text-slate-800 active:bg-slate-50"
              >
                Request Pilot
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-center text-[14px] font-medium text-slate-600 active:text-slate-900"
              >
                Sign In
              </Link>
            </div>
          </nav>
        )}
      </header>
    </div>
  );
}

export { ZoikoLogiaHeader };