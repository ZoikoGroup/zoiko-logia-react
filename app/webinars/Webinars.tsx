import Link from "next/link";

// ─── DATA ──────────────────────────────────────────────────────────────────
// Each webinar is an object. `icon` picks one of the small tile glyphs below.

type Webinar = {
  id: string;
  icon: "lock" | "shield" | "kriton";
  title: string;
  desc: string;
  meta: string;
  cta: string;
  href: string;
};

const webinars: Webinar[] = [
  {
    id: "security-review",
    icon: "lock",
    title: "Security Review Checklist Walkthrough",
    desc: "For CTOs and security reviewers preparing a vendor assessment — tenant isolation, encryption, provider due diligence, and what to ask for in a compliance report.",
    meta: "32 min · Captioned · Transcript available",
    cta: "Request Access",
    href: "/request-access?w=security-review",
  },
  {
    id: "governance",
    icon: "shield",
    title: "Evaluating AI Governance in Accounting Platforms",
    desc: "For audit and compliance leaders validating control design — risk classification, escalation paths, and what “evidence-ready” actually means in practice.",
    meta: "41 min · Captioned · Transcript available",
    cta: "Request Access",
    href: "/request-access?w=governance",
  },
  {
    id: "kriton-practice",
    icon: "kriton",
    title: "Kriton™ in Practice: A Live Workflow Walkthrough",
    desc: "Watching Workflow Mode handle a real revenue recognition question end to end — from source retrieval through citation panel to reviewer sign-off.",
    meta: "28 min · Captioned · Transcript available",
    cta: "Request Access",
    href: "/request-access?w=kriton-practice",
  },
];

// ─── ICON TILE ───────────────────────────────────────────────────────────────

function IconTile({ kind }: { kind: Webinar["icon"] }) {
  return (
    <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[#f59a23]/12 text-[#d9720f] dark:bg-[#f59a23]/15">
      {kind === "lock" && (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="4" y="11" width="16" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" />
        </svg>
      )}
      {kind === "shield" && (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
        </svg>
      )}
      {kind === "kriton" && <span className="text-sm font-bold">K</span>}
    </span>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

function Webinars() {
  return (
    <main className="bg-[#faf7f0] font-sans text-[#16233d] dark:bg-gray-900 dark:text-white">
      {/* ─── Hero ─── */}
      <section className="bg-[#f7f3ea] px-4 py-16 sm:px-6 md:px-8 lg:py-20 dark:bg-gray-800">
        <div className="mx-auto max-w-6xl">
          <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#d9720f]">
            <span className="h-px w-6 bg-[#d9720f]" /> Webinars
          </p>
          <h1 className="mt-5 max-w-2xl font-serif text-[clamp(2rem,5vw,3rem)] leading-tight">
            Recorded sessions on governance, security, and workflow adoption.
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">
            Captioned recordings with transcripts, built for the people evaluating ZoikoLogia™ on behalf of their team.
          </p>
        </div>
      </section>

      {/* ─── Webinar cards ─── */}
      <section className="px-4 py-14 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {webinars.map((w) => (
              <div
                key={w.id}
                className="flex flex-col rounded-xl bg-white p-6 shadow-sm ring-1 ring-black/5 dark:bg-gray-800 dark:ring-gray-700"
              >
                <IconTile kind={w.icon} />
                <h3 className="mt-5 text-base font-bold text-[#16233d] dark:text-white">{w.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-gray-300">{w.desc}</p>
                <p className="mt-6 text-xs text-slate-400 dark:text-gray-500">{w.meta}</p>
                <Link
                  href={w.href}
                  className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#0d9488] dark:text-[#34d39e]"
                >
                  {w.cta} <span aria-hidden>→</span>
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs leading-relaxed text-slate-400 dark:text-gray-500">
            All recordings include captions and a downloadable transcript. Access is provided by request while our
            on-demand library is being finalized.
          </p>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-[#efe8d6] px-4 pb-20 sm:px-6 md:px-8 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl bg-[#071a33] px-6 py-16 text-center sm:px-10">
            <p className="flex items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#0d9488]">
              <span className="h-px w-6 bg-[#0d9488]" /> Prefer to talk it through?
            </p>
            <h2 className="mx-auto mt-5 max-w-xl font-serif text-[clamp(1.6rem,4vw,2.1rem)] leading-tight text-white">
              Skip the recording — book a live walkthrough instead.
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/book-a-demo"
                className="rounded-md bg-[#f59a23] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Book a Demo
              </Link>
              <Link
                href="/resources"
                className="rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
              >
                Back to Resources
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Exported both ways so either default or named import works.
export default Webinars;
export { Webinars };