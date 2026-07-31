"use client";

import { useState } from "react";

// ─── TOKENS ─────────────────────────────────────────────────────────────────────
const INK = "#16233d";
const NAVY = "#0f1a30";
const AMBER = "#e8912a";


type OptionalKey = "analytics" | "functional" | "marketing";
type Consent = Record<OptionalKey, boolean>;

const OPTIONAL: { key: OptionalKey; label: string }[] = [
  { key: "analytics", label: "Analytics" },
  { key: "functional", label: "Functional" },
  { key: "marketing", label: "Marketing" },
];

type CategoryCard = {
  key?: OptionalKey;               // toggleable optional categories
  title: string;
  body: string;
  right?: "always-on" | "see-policy" | "routing"; // fixed categories
  link?: string;
};
const CATEGORIES: CategoryCard[] = [
  { title: "Strictly Necessary", body: "Required for core site functions such as security, session continuity, load balancing, consent storage, and form operation.", right: "always-on" },
  { key: "analytics", title: "Analytics", body: "Helps us understand aggregated site usage, page performance, funnel friction, and content effectiveness.", link: "View examples" },
  { key: "functional", title: "Functional / Personalization", body: "Supports remembered preferences, improved site experience, and selected convenience features.", link: "View examples" },
  { key: "marketing", title: "Marketing / Measurement", body: "Supports campaign attribution, ad measurement, and relevant outreach where enabled and legally permitted.", link: "View examples" },
  { title: "Third-Party Technologies", body: "Confirmed third-party providers and categories are listed in the detailed policy table, not invented here.", right: "see-policy", link: "View details" },
  { title: "Do Not Sell / Share Routing", body: "Where applicable by jurisdiction, this routes to an opt-out for sale/share-style tracking categories after legal review.", right: "routing" },
];

const RELATED = [
  "Privacy Policy", "Privacy & Security Overview", "Data Protection", "Compliance Reports",
  "Newsletter Preferences", "Contact Privacy Support", "Trust Center", "Terms of Use",
];

const FAQS = [
  { q: "Can I reject optional cookies?", a: "Yes. You can reject optional cookies where applicable without losing access to core website content or legal resources." },
  { q: "Can I change my cookie preferences later?", a: "Yes. Your choices are reversible at any time — return to this page to review, update, accept, or reject optional categories whenever you like." },
  { q: "Are cookies required to book a demo?", a: "No. Strictly necessary technologies handle form operation, so you can book a demo without enabling optional categories." },
  { q: "What are strictly necessary technologies?", a: "Those required for core site operation — security, session continuity, load balancing, consent storage, and form handling. They cannot be turned off." },
  { q: "Does ZoikoLogia™ use marketing cookies?", a: "Only where you enable the Marketing / Measurement category and where legally permitted. It's disabled by default until you opt in." },
  { q: "Who do I contact about privacy questions?", a: "Use Contact Privacy Support or email the privacy team — links are in the Related section above and in the footer." },
  { q: "Does rejecting optional cookies affect product access?", a: "No. Rejecting optional categories does not restrict access to core website content, legal resources, or the ability to contact us." },
];

// ─── inline SVG helpers ─────────────────────────────────────────────────────────
function Chevron({ open }: { open: boolean }) {
  return <svg viewBox="0 0 24 24" className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function Toggle({ on, onClick, label }: { on: boolean; onClick: () => void; label: string }) {
  return (
    <button type="button" role="switch" aria-checked={on} aria-label={label} onClick={onClick}
      className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors ${on ? "bg-[#0d9488]" : "bg-slate-300 dark:bg-gray-600"}`}>
      <span className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${on ? "translate-x-5" : "translate-x-0.5"}`} />
    </button>
  );
}

const eyebrowAmber = "flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#d9720f]";
const serifH = "font-serif leading-tight";
const tealLink = "text-sm font-semibold text-[#0d9488] hover:underline";
const creamBand = "bg-[#f5efe0] dark:bg-gray-800/60";

// ─── PAGE ───────────────────────────────────────────────────────────────────────
export default function Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Shared consent state — both the status card and the category toggles read/write this.
  const [consent, setConsent] = useState<Consent>({ analytics: false, functional: false, marketing: false });
  const [lastUpdated, setLastUpdated] = useState<string>("Not yet set");

  const toggle = (k: OptionalKey) => setConsent((c) => ({ ...c, [k]: !c[k] }));
  const setAll = (v: boolean) => setConsent({ analytics: v, functional: v, marketing: v });
  const save = () => setLastUpdated(new Date().toLocaleString());

  const amberBtn = "rounded-md px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90";
  const ghostBtn = "rounded-md border border-black/15 px-4 py-2 text-sm font-semibold text-[#16233d] transition-colors hover:border-[#0d9488] hover:text-[#0d9488] dark:border-gray-600 dark:text-gray-100";

  return (
    <main className="bg-[#faf7f0] font-sans text-[#16233d] dark:bg-gray-900 dark:text-white">

      {/* ─── Hero (navy) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8 lg:py-20" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto max-w-6xl text-white">
          <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#0d9488]">
            <span className="h-px w-6 bg-[#0d9488]" /> Privacy & Consent Controls
          </p>
          <h1 className={`mt-5 max-w-2xl text-[clamp(2rem,4.5vw,2.9rem)] ${serifH}`}>Manage cookie and consent preferences.</h1>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-slate-300/85">
            Review how ZoikoLogia™ uses cookies and similar technologies, choose which optional categories are enabled,
            and update your preferences at any time.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#categories" className={amberBtn} style={{ backgroundColor: AMBER }}>Customize Preferences</a>
            <button type="button" onClick={() => { setAll(false); save(); }} className="rounded-md border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10">Reject Optional Cookies</button>
            <button type="button" onClick={() => { setAll(true); save(); }} className="rounded-md border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10">Accept Optional Cookies</button>
          </div>
          <a href="#" className="mt-6 inline-block text-sm font-semibold text-[#f0a54a] hover:underline">Read the Privacy Policy →</a>
          <p className="mt-4 max-w-2xl text-xs leading-relaxed text-slate-400/70">
            Strictly necessary technologies support core site operation. Optional analytics, personalization, and
            marketing technologies are controlled by your preferences where applicable.
          </p>
        </div>
      </section>

      {/* ─── Current preferences (status card) ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-4xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Your Current Preferences</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Where things stand right now.</h2>

          <div className="mt-8 rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
            <div className="grid gap-4 rounded-xl bg-[#f5efe0] p-5 sm:grid-cols-3 dark:bg-gray-800">
              {OPTIONAL.map((o) => {
                const on = consent[o.key];
                return (
                  <div key={o.key} className="sm:border-r sm:border-black/10 sm:last:border-0 sm:dark:border-gray-700">
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500 dark:text-gray-400">{o.label}</p>
                    <p className="mt-2 flex items-center gap-2 text-sm font-bold">
                      <span className={`h-2 w-2 rounded-full ${on ? "bg-[#0d9488]" : "bg-slate-400"}`} />
                      {on ? "Enabled" : "Disabled"}
                    </p>
                  </div>
                );
              })}
            </div>

            <p className="mt-4 text-xs text-slate-500 dark:text-gray-400">Last updated: {lastUpdated}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              <button type="button" onClick={() => setAll(true)} className={ghostBtn}>Accept All Optional</button>
              <button type="button" onClick={() => setAll(false)} className={ghostBtn}>Reject All Optional</button>
              <a href="#categories" className={ghostBtn}>Open Granular Settings</a>
              <button type="button" onClick={save} className={amberBtn} style={{ backgroundColor: AMBER }}>Save Changes</button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Cookie categories (toggles, cream band) ─── */}
      <section id="categories" className={`scroll-mt-20 px-4 py-16 sm:px-6 md:px-8 ${creamBand}`}>
        <div className="mx-auto max-w-4xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Cookie Categories</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Choose what's enabled, category by category.</h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-600 dark:text-gray-300">
            Strictly necessary technologies keep the core site working and cannot be turned off. Everything else is optional and reversible.
          </p>

          <div className="mt-8 space-y-4">
            {CATEGORIES.map((c) => (
              <div key={c.title} className="rounded-xl border border-black/10 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-base font-bold">{c.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-gray-300">{c.body}</p>
                    {c.link && <a href="#" className={`${tealLink} mt-2 inline-block`}>{c.link}</a>}
                  </div>
                  <div className="shrink-0 pt-1">
                    {c.key && <Toggle on={consent[c.key]} onClick={() => toggle(c.key!)} label={`Toggle ${c.title}`} />}
                    {c.right === "always-on" && <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">Always On</span>}
                    {c.right === "see-policy" && <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">See Policy</span>}
                    {c.right === "routing" && <button type="button" className={ghostBtn}>Open Routing</button>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Related links ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-4xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Related</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Where else to look.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {RELATED.map((r) => (
              <a key={r} href="#" className="flex items-center rounded-lg border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-[#16233d] shadow-sm transition-colors hover:border-[#0d9488] hover:text-[#0d9488] dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100">
                {r}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-4xl">
          <p className={eyebrowAmber}><span className="h-px w-6 bg-[#d9720f]" /> Frequently Asked</p>
          <h2 className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] ${serifH}`}>Cookie questions, answered plainly.</h2>
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

      {/* ─── Final CTA (navy) ─── */}
      <section className="px-4 pb-20 sm:px-6 md:px-8">
        <div className="mx-auto max-w-4xl rounded-2xl px-8 py-12" style={{ backgroundColor: NAVY }}>
          <h2 className={`text-[clamp(1.4rem,3vw,1.9rem)] text-white ${serifH}`}>Control your cookie preferences.</h2>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-slate-300/80">
            Review, update, accept, or reject optional cookie categories at any time. Your choices remain clear,
            reversible, and respectful while you evaluate ZoikoLogia™.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#categories" className={amberBtn} style={{ backgroundColor: AMBER }}>Customize Preferences</a>
            <button type="button" onClick={() => { setAll(false); save(); }} className="rounded-md border border-white/25 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10">Reject Optional Cookies</button>
            <a href="#" className="rounded-md border border-white/25 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10">Explore Privacy & Security</a>
            <a href="#" className="rounded-md border border-white/25 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10">Book a Demo</a>
          </div>
          <a href="#" className="mt-5 inline-block text-sm font-semibold text-[#0d9488] hover:underline">Contact Privacy Support →</a>
        </div>
      </section>
    </main>
  );
}