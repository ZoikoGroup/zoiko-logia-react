import Image from "next/image";
import Link from "next/link";

// ─── DATA ──────────────────────────────────────────────────────────────────
// "Curated for this role" cards.

type Card = { title: string; desc: string; href: string };

const cards: Card[] = [
  { title: "For Accounting Firms Guide", desc: "What changes for firms — professional boundaries, pilots, and disclosure.", href: "/resources/guides#for-firms" },
  { title: "Platform Limits & Escalation", desc: "Where Kriton\u2122 is designed to stop and hand off to a human.", href: "/platform/limits" },
  { title: "Pilot Planning Worksheet", desc: "Define users, sources, and success criteria for a firm pilot.", href: "/resources/buyer-briefs#pilot-planning" },
  { title: "Governance Readiness Checklist", desc: "Assess your firm's readiness for governed AI adoption.", href: "/resources/buyer-briefs#governance-readiness" },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function AccountingFirms() {
  return (
    <main className="bg-[#faf7f0] font-sans text-[#16233d] dark:bg-gray-900 dark:text-white">
      {/* ─── Hero ─── */}
      <section className="bg-[#f7f3ea] px-4 py-16 sm:px-6 md:px-8 lg:py-20 dark:bg-gray-800">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#d9720f]">
              <span className="h-px w-6 bg-[#d9720f]" /> Learn by Role · Accounting Firms
            </p>
            <h1 className="mt-5 max-w-xl font-serif text-[clamp(2rem,5vw,3rem)] leading-tight">
              Resources for accounting firms.
            </h1>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">
              Professional-boundary guidance, pilot checklists, and client-service considerations for partners
              evaluating firm-wide adoption.
            </p>
            <Link
              href="/request-pilot"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#f59a23] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Request Firm Pilot
            </Link>
          </div>

          {/* Portrait image slot */}
          <div className="relative aspect-[4/3] w-full max-w-sm overflow-hidden rounded-xl justify-self-center lg:justify-self-end">
            <Image src="/images/Accounting educator guiding a learner.png" alt="Accounting firm partner" fill sizes="(max-width:1024px) 100vw, 22rem" className="object-cover" />
          </div>
        </div>
      </section>

      {/* ─── Curated for this role ─── */}
      <section className="px-4 py-14 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-serif text-2xl leading-tight sm:text-[1.75rem]">Curated for this role</h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {cards.map((c) => (
              <Link
                key={c.title}
                href={c.href}
                className="group rounded-xl border border-black/10 bg-white p-6 transition-colors hover:border-[#0d9488] dark:border-gray-700 dark:bg-gray-800 dark:hover:border-[#34d39e]"
              >
                <h3 className="text-base font-bold text-[#16233d] group-hover:text-[#0d9488] dark:text-white dark:group-hover:text-[#34d39e]">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-gray-400">{c.desc}</p>
              </Link>
            ))}
          </div>

          {/* Educational disclaimer */}
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-slate-500 dark:text-gray-400">
            This content is educational and supports evaluation. Decisions about client disclosure and
            engagement-letter language should involve your own professional and legal counsel.
          </p>
        </div>
      </section>
    </main>
  );
}

