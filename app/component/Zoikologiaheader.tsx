

"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const AMBER = "#e0a92e";

const topLinks = [
  { label: "Compliance", href: "/compliance" },
  { label: "Governance", href: "/governance" },
  { label: "Privacy & Security", href: "/privacy-security" },
];

const navLinks = [
  { label: "Platform", href: "/platform" },
  { label: "Kriton™ AI Advisor", href: "/kriton" },
  { label: "Solutions", href: "/solutions" },
  { label: "Resources", href: "/resources" },
  { label: "Pricing", href: "/pricing" },
];

export default function ZoikoLogiaHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0d1b2e]">
      {/* Top strip */}
      <div className="hidden border-b border-white/10 lg:block">
        <div className="mx-auto flex max-w-7xl justify-end gap-6 px-6 py-1.5">
          {topLinks.map((l) => (
            <Link key={l.label} href={l.href} className="text-xs text-gray-400 transition-colors hover:text-white">
              {l.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Main bar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-extrabold tracking-tight text-white">
            Zoiko<span style={{ color: AMBER }}>Logia</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <Link key={l.label} href={l.href} className="flex items-center gap-1 text-sm font-medium text-gray-200 transition-colors hover:text-white">
              {l.label}
              {(l.label === "Platform" || l.label === "Solutions" || l.label === "Resources") && <ChevronDown size={14} />}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <Link href="/signin" className="hidden text-sm font-medium text-gray-200 transition-colors hover:text-white sm:inline-block">
            Sign in
          </Link>
          <Link href="/book-a-demo" className="hidden rounded-md px-4 py-2 text-sm font-semibold text-[#0d1b2e] transition-opacity hover:opacity-90 sm:inline-block" style={{ backgroundColor: AMBER }}>
            Book a Demo
          </Link>
          <Link href="/request-pilot" className="hidden rounded-md border border-white/25 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10 md:inline-block">
            Request Pilot
          </Link>
          <button type="button" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu" aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-md text-white hover:bg-white/10 lg:hidden">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-white/10 bg-[#0d1b2e] lg:hidden">
          {navLinks.map((l) => (
            <Link key={l.label} href={l.href} onClick={() => setOpen(false)}
              className="block border-b border-white/10 px-6 py-3.5 text-sm font-medium text-gray-200 active:bg-white/5">
              {l.label}
            </Link>
          ))}
          {topLinks.map((l) => (
            <Link key={l.label} href={l.href} onClick={() => setOpen(false)}
              className="block border-b border-white/10 px-6 py-3 text-xs text-gray-400 active:bg-white/5">
              {l.label}
            </Link>
          ))}
          <div className="space-y-2 p-4">
            <Link href="/book-a-demo" onClick={() => setOpen(false)} className="block rounded-md py-2.5 text-center text-sm font-semibold text-[#0d1b2e]" style={{ backgroundColor: AMBER }}>Book a Demo</Link>
            <Link href="/request-pilot" onClick={() => setOpen(false)} className="block rounded-md border border-white/25 py-2.5 text-center text-sm font-semibold text-white">Request Pilot</Link>
            <Link href="/signin" onClick={() => setOpen(false)} className="block py-2 text-center text-sm text-gray-300">Sign in</Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export { ZoikoLogiaHeader };