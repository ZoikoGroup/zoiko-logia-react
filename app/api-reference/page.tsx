"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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

/* ── tiny SVG helpers ─────────────────────────────────────────────────── */
function Chevron({ open }: { open: boolean }) {
  return <svg viewBox="0 0 24 24" className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function ArrowRight({ className = "h-4 w-4" }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

/* ── tokens ────────────────────────────────────────────────────────────── */
const eyebrowAmber = "flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#d9720f]";
const eyebrowTeal = "text-[11px] font-bold uppercase tracking-[0.16em] text-[#0d9488] dark:text-[#34d39e]";
const serifH = "font-serif leading-tight";
const creamBand = "bg-[#f5efe0] dark:bg-gray-800/60";
const tealLink = "text-sm font-semibold text-[#0d9488] hover:underline";

/* ── data ──────────────────────────────────────────────────────────────── */
const ROLES = [
  { label: "Accounting Firm CTO", img: "/images/Integration engineer reviewing interface contracts.png" },
  { label: "Platform Engineer", img: "/images/Enterprise architect reviewing interface boundaries.png" },
  { label: "Integration Developer", img: "/images/Security reviewer assessing access boundaries.png" },
  { label: "Security & Compliance", img: "/images/QA engineer deriving test plans from schemas.png" },
  { label: "Product Manager", img: "/images/Procurement reviewer assessing documentation maturity.png" },
  { label: "Procurement / Vendor", img: "/images/Finance technical owner reviewing documented workflow interfaces.png" },
];

const PUBLICATION_ROWS = [
  { name: "Current Publication Source", status: "Source Required", published: "Not Yet Published", version: "No GUID" },
  { name: "Not Yet Designated", status: "Source Required", published: "Not Yet Published", version: "No GUID" },
];

const BROWSE_TABS = ["All Sources", "By Standards", "By Domain", "By Status"];

const SCHEMA_FIELDS = [
  { field: "source_id", type: "UUID", required: true },
  { field: "title", type: "string", required: true },
  { field: "authority_url", type: "URL", required: true },
  { field: "jurisdiction", type: "enum", required: false },
  { field: "effective_date", type: "date", required: true },
];

const DOC_CARDS = [
  { title: "Authentication", body: "Every API endpoint requires a valid, scoped API key or OAuth token. Keys are tenant-scoped; cross-tenant access is architecturally prohibited.", link: "/privacy-security", cta: "Explore Authentication" },
  { title: "Authorisation & Entitlements", body: "Capability-level entitlements control what each integration partner is permitted to read, write, or invoke — separate from authentication.", link: "/privacy-security", cta: "Explore Privacy & Security" },
  { title: "Errors & Traceability", body: "Every API error returns a correlation ID, a machine-readable code, and a human-readable explanation. No silent failures, no ambiguous 200s on bad data.", link: "/privacy-security", cta: "Explore Traceability" },
];

const DEST_CARDS = [
  { title: "About API Reference (Soon)", body: "API reference documentation will follow ZoikoLogia's publication governance: every endpoint, field, and constraint will be source-governed, versioned, and published only when the underlying contract is production-ready.", color: "#0d9488" },
  { title: "About Human Review Still Applies", body: "API design and integration review remain human-accountable. When API contract changes affect customer data, security boundaries, or compliance surfaces, human review gates apply before publication.", color: "#e8912a" },
];

const ROUTE_CARDS = [
  { title: "Access or Auth", desc: "Authentication, tokens, API keys, OAuth flows", link: "/privacy-security", cta: "Explore Workflow Mode" },
  { title: "Privacy & Security", desc: "Data handling, encryption, tenant boundaries", link: "/privacy-security", cta: "Explore Privacy & Security" },
  { title: "Compliance & Governance", desc: "Audit trails, retention, regulatory mapping", link: "/ai-safety-page", cta: "Explore Compliance" },
  { title: "Accessibility", desc: "WCAG conformance, assistive technology support", link: "/ai-safety-page", cta: "Explore Accessibility" },
];

const FAQS = [
  { q: "What is the ZoikoLogia™ API Reference?", a: "It is a governed, versioned reference to the technical contracts that underpin ZoikoLogia's platform — published only when source authority is established, not before." },
  { q: "Does Kriton™ have an API?", a: "Kriton is accessed through the ZoikoLogia platform. Direct API access for integration partners follows the same publication governance as the reference documentation." },
  { q: "Which API versions are available?", a: "Versions are published only when the underlying contract is production-ready and source-governed. No draft or pre-release versions are made public." },
  { q: "How do I authenticate?", a: "Every API endpoint requires a valid, scoped API key or OAuth token. Keys are tenant-scoped; cross-tenant access is architecturally prohibited." },
  { q: "Where can I find request/response paths and schemas?", a: "Schema and field documentation follows the same publication governance as all other platform documentation — published when source authority exists." },
  { q: "Where are errors documented?", a: "Every API error returns a correlation ID, a machine-readable code, and a human-readable explanation. Full error documentation follows publication governance." },
  { q: "Can I try requests from the documentation?", a: "Interactive request tooling will be available when the API reference reaches publication-ready status." },
  { q: "When may I see API changes?", a: "API contract changes are versioned and communicated through the Developer Console. Breaking changes follow a deprecation and migration window." },
  { q: "Does documentation exist? How is production versioned?", a: "Documentation is source-governed and versioned alongside the platform. Production versioning follows semantic versioning with governance gates." },
  { q: "How can my team's architect or integration lead?", a: "Integration architecture reviews are available through the Enterprise engagement path. Contact the team through the Request Pilot flow." },
];

/* ── PAGE ──────────────────────────────────────────────────────────────── */
export default function APIReferencePage() {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const amberBtn = "rounded-md px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90";
  const ghostBtn = "rounded-md border border-black/15 px-5 py-2.5 text-sm font-semibold text-[#16233d] transition-colors hover:border-[#0d9488] hover:text-[#0d9488] dark:border-gray-600 dark:text-gray-100";

  return (
    <main className="bg-[#faf7f0] font-sans text-[#16233d] dark:bg-gray-900 dark:text-white">

      {/* ─── 1. Hero ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8 lg:py-20" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="text-white">
            <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#0d9488]">
              <span className="h-px w-6 bg-[#0d9488]" /> API Reference
            </p>
            <h1 className={`mt-5 max-w-xl text-[clamp(2rem,4.5vw,2.9rem)] ${serifH}`}>
              Technical contracts you can inspect, not infer.
            </h1>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-slate-300/85">
              This section exposes ZoikoLogia&rsquo;s technical surface — endpoints, authentication, capabilities,
              limitations, status, and governance boundaries — without speculation, without premature publication.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/kriton-ai" className={amberBtn} style={{ backgroundColor: AMBER }}>
                Explore API Reference
              </a>
              <a href="/contact-us" className="rounded-md border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10">
                Request Documentation
              </a>
            </div>
            <p className="mt-6 max-w-md text-xs leading-relaxed text-slate-400/70">
              ZoikoLogia&rsquo;s API documentation is governed by the same publication standard as every other reference:
              no endpoint is documented until its contract is source-established and production-stable.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-[#162240] p-6 text-white shadow-xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#f0a54a]">What&rsquo;s Here</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300/90">
              ZoikoLogia&rsquo;s API surface is governed by publication-ready standards. Endpoints appear here only
              after contract, authentication, versioning, and access-control governance is established. Until then,
              API integrators get a standing start — not an empty page with a &ldquo;coming soon&rdquo; badge.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <span className="rounded-full bg-[#0d9488]/20 px-3 py-1 text-xs font-medium text-[#34d39e]">Publication Governed</span>
              <span className="rounded-full bg-[#e8912a]/20 px-3 py-1 text-xs font-medium text-[#f0a54a]">Contract-First</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. Role cards ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Role-Led Navigation</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>
            Different technical roles, different jobs to be done.
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {ROLES.map((r) => (
              <div key={r.label} className="group cursor-pointer text-center">
                <ImageSlot src={r.img} alt={r.label} ratio="aspect-square" rounded="rounded-xl" className="transition-shadow group-hover:shadow-lg" />
                <p className="mt-3 text-xs font-semibold">{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. Content source table (cream) ─── */}
      <section className={`px-4 py-16 sm:px-6 md:px-8 ${creamBand}`}>
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Documentation Governance & Source</p>
          <h2 className={`mt-4 max-w-3xl text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>
            Where this content comes from, before any system appears.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-gray-300">
            Every reference item is governed by a publication source. If the source authority is not established, the
            item doesn&rsquo;t exist in publication scope — no best-effort guesses, no crowd-sourced shortcuts, no AI fill.
          </p>
          <div className="mt-8 overflow-x-auto rounded-xl border border-black/10 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-black/10 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
                  <th className="px-5 py-3 font-semibold">Current Publication Source</th>
                  <th className="px-5 py-3 font-semibold">Source Required</th>
                  <th className="px-5 py-3 font-semibold">Not Yet Published</th>
                  <th className="px-5 py-3 font-semibold text-right">No GUID</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5 dark:divide-gray-700">
                {PUBLICATION_ROWS.map((r, i) => (
                  <tr key={i} className="align-top">
                    <td className="px-5 py-3 font-medium">{r.name}</td>
                    <td className="px-5 py-3 text-slate-500">{r.status}</td>
                    <td className="px-5 py-3 text-slate-500">{r.published}</td>
                    <td className="px-5 py-3 text-right text-slate-400">{r.version}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── 4. Version selection ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className={`${eyebrowAmber} justify-center`}><span className="h-px w-6 bg-[#d9720f]" /> Contract-First Versioning</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>
            No version selector until a version is actually source-established.
          </h2>
          <div className="mx-auto mt-10 max-w-2xl rounded-xl border border-black/10 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-900">
            <div className="rounded-md border border-dashed border-[#e8912a]/40 bg-[#fef3e2] px-4 py-3 text-center text-sm text-[#b5700e] dark:bg-[#e8912a]/10 dark:text-[#f0a54a]">
              No published API version or contract revision yet.
            </div>
            <p className="mt-6 max-w-lg mx-auto text-sm leading-relaxed text-slate-600 dark:text-gray-300">
              A version selector will appear here when the first API contract — its endpoints, fields, authentication,
              entitlements, error model, and deprecation policy — is published to production standard. Until then, no version
              is presented because no version exists in the governed sense.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 5. Browsing experience ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className={`text-center text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>
            The browsing experience, ready for when inventory exists.
          </h2>

          <div className="mt-8 rounded-xl border border-black/10 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 border-b border-black/10 pb-4 dark:border-gray-700">
              {BROWSE_TABS.map((t, i) => (
                <button key={t} type="button" onClick={() => setActiveTab(i)}
                  className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${activeTab === i
                    ? "bg-[#16233d] text-white"
                    : "border border-black/10 text-slate-600 hover:border-[#0d9488] hover:text-[#0d9488] dark:border-gray-600 dark:text-gray-300"}`}>
                  {t}
                </button>
              ))}
            </div>

            {/* Empty state */}
            <div className="flex flex-col items-center py-16 text-center">
              <div className="rounded-md border border-dashed border-[#e8912a]/40 bg-[#fef3e2] px-6 py-3 text-sm text-[#b5700e] dark:bg-[#e8912a]/10 dark:text-[#f0a54a]">
                No published reference items match the current filter.
              </div>
              <p className="mt-4 max-w-md text-sm text-slate-500">
                This browsing surface is structurally complete. Reference items will appear here when each item&rsquo;s
                source authority, field model, and publication review are confirmed.
              </p>
              <a href="/kriton-ai" className={`${tealLink} mt-4`}>
                Discover Publication Modes →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. Published reference item / Schema (cream) ─── */}
      <section className={`px-4 py-16 sm:px-6 md:px-8 ${creamBand}`}>
        <div className="mx-auto max-w-5xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Contract Detail Preview</p>
          <h2 className={`mt-4 max-w-3xl text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>
            What a published reference item will look like.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-gray-300">
            When a reference item is published, it will carry full source-governed field documentation in a format with
            a governed, traceable fact basis — not just a response schema but a publication contract you can inspect.
          </p>

          {/* Example reference item */}
          <div className="mt-8 rounded-xl border border-black/10 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
            <div className="rounded-t-xl px-5 py-3" style={{ backgroundColor: AMBER }}>
              <p className="text-sm font-semibold text-white">Example: Published Reference Item (Illustrative)</p>
            </div>
            <div className="space-y-3 p-5">
              <p className="text-sm text-slate-600 dark:text-gray-300">
                <span className="font-semibold text-[#16233d] dark:text-white">GET</span>{" "}
                <code className="rounded bg-gray-100 px-2 py-0.5 text-xs dark:bg-gray-800">/v1/reference/standards/{"{source_id}"}</code>
              </p>
              <p className="text-xs text-slate-400">Published · Governed · Versioned · Source-backed · Audit-trail attached · Reviewer approved</p>
            </div>
          </div>

          {/* Schema table */}
          <h3 className="mt-10 text-lg font-bold">Schema & Field Model (Illustrative)</h3>
          <div className="mt-4 overflow-x-auto rounded-xl border border-black/10 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-black/10 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
                  <th className="px-5 py-3 font-semibold">Field</th>
                  <th className="px-5 py-3 font-semibold">Type</th>
                  <th className="px-5 py-3 font-semibold">Required</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5 dark:divide-gray-700">
                {SCHEMA_FIELDS.map((f) => (
                  <tr key={f.field}>
                    <td className="px-5 py-3"><code className="text-xs">{f.field}</code></td>
                    <td className="px-5 py-3 text-slate-500">{f.type}</td>
                    <td className="px-5 py-3 text-slate-500">{f.required ? "Yes" : "No"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── 7. Documentation & access ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Authentication, Authorisation & Errors</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>
            Documentation and access are separately governed.
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {DOC_CARDS.map((c) => (
              <div key={c.title} className="flex flex-col rounded-xl border border-black/10 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <h3 className="text-base font-bold">{c.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-gray-300">{c.body}</p>
                <Link href={c.link} className={`${tealLink} mt-4 text-xs`}>{c.cta} →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. Fake-looking API (cream) ─── */}
      <section className={`px-4 py-16 sm:px-6 md:px-8 ${creamBand}`}>
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Why This Page Looks Like This</p>
            <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>
              A fake-looking API is worse than an honest gap.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">
              ZoikoLogia&rsquo;s API surface is governed by the same publication discipline as its accounting, audit, and
              compliance content. If you&rsquo;re seeing &ldquo;not yet published&rdquo; — that&rsquo;s the system being honest that full-specification
              published security controls have not been finalized, not that nothing exists under the hood.
            </p>
            <p className="mt-4 text-sm text-slate-500 dark:text-gray-400">
              The technical surface is real. The documentation publication is governed. You are looking at the governance
              layer doing its job.
            </p>
          </div>
          <ImageSlot src="/images/Engineering team reviewing documentation integrity standards.png" alt="Honest documentation" ratio="aspect-[4/3]" rounded="rounded-2xl" />
        </div>
      </section>

      {/* ─── 9. Two different destinations ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Architecture-Level Navigation</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>
            Two different jobs, two different destinations.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {DEST_CARDS.map((c) => (
              <div key={c.title} className="rounded-xl border-t-4 border-black/10 bg-white p-6 shadow-sm dark:bg-gray-900" style={{ borderTopColor: c.color }}>
                <h3 className="text-base font-bold">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-gray-300">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 10. Routed to team ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Where to Go From Here</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>
            Routed to the team that actually owns the answer.
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ROUTE_CARDS.map((c) => (
              <div key={c.title} className="flex flex-col rounded-xl border border-black/10 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <h3 className="text-sm font-bold">{c.title}</h3>
                <p className="mt-1 flex-1 text-xs leading-relaxed text-slate-500 dark:text-gray-400">{c.desc}</p>
                <Link href={c.link} className={`${tealLink} mt-4 text-xs`}>{c.cta} →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

   {/* ─── 11. Interface CTA (with image) ─── */}
<section className="px-4 py-16 sm:px-6 md:px-8">
  <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl">
    {/* Background image */}
    <div className="absolute inset-0">
      <Image
        src="/images/Technical team discussing integration architecture.png"
        alt="Technical team discussing integration"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#0f1a30]/75" />
    </div>

    {/* Content */}
    <div className="relative px-8 py-14 sm:px-12">
      <h2 className={`max-w-md text-[clamp(1.5rem,3vw,2.2rem)] text-white ${serifH}`}>
        Bring the interface questions that matter to your architecture.
      </h2>
      <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-300/85">
        Inspect the parts of the ZoikoLogia&trade; platform available,
        then use the right product, trust, or escalation route for
        anything outside the public reference.
      </p>
      <div className="mt-6">
        <a href="/contact-us" className={amberBtn} style={{ backgroundColor: AMBER }}>
          Book a Demo →
        </a>
      </div>
    </div>
  </div>
</section>

      {/* ─── 12. FAQ ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-3xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Frequently Asked</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>
            API questions, answered honestly.
          </h2>
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

      {/* ─── 13. Final CTA (navy) ─── */}
      <section className="px-4 pb-20 sm:px-6 md:px-8">
        <div className="mx-auto max-w-5xl rounded-2xl px-8 py-14 text-center" style={{ backgroundColor: NAVY }}>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#f0a54a]">Technical Surface</p>
          <h2 className={`mx-auto mt-3 max-w-xl text-[clamp(1.6rem,3vw,2.2rem)] text-white ${serifH}`}>
            Bring the interface questions that matter to your architecture.
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-[15px] leading-relaxed text-slate-300/80">
            Explore the parts of the ZoikoLogia&trade; platform that affect your integration, compliance, or
            audit roadmap — and see what&rsquo;s honest about what&rsquo;s ready.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="/contact-us" className={amberBtn} style={{ backgroundColor: AMBER }}>Book a Demo</a>
            <a href="/contact-us" className="rounded-md border border-white/25 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10">Request Pilot</a>
            <a href="/pricing" className="px-3 py-2.5 text-sm font-semibold text-[#f0a54a] hover:underline">Pricing →</a>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-xs text-slate-400">
            <a href="/about-us" className="hover:text-white">Platform</a>
            <a href="/kriton-ai" className="hover:text-white">Kriton AI</a>
            <a href="/pricing" className="hover:text-white">Pricing</a>
          </div>
        </div>
      </section>
    </main>
  );
}