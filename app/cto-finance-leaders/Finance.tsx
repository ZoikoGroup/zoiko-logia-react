import Image from "next/image";
import Link from "next/link";

// ─── DATA ──────────────────────────────────────────────────────────────────
// "Curated for this role" cards (5 — last one sits alone on the third row).

type Card = { title: string; desc: string; href: string };

const cards: Card[] = [
  { title: "Executive Buyer Brief", desc: "Board-ready summary of value, governance, and risk posture.", href: "/resources/buyer-briefs#executive-brief" },
  { title: "Building a Business Case Guide", desc: "How to frame time, risk, and review quality for your committee.", href: "/resources/guides#business-case" },
  { title: "ROI Calculator", desc: "Estimate the time and cost impact for your team, live.", href: "/roi-calculator" },
  { title: "Governance Overview", desc: "The control architecture behind every Kriton\u2122 answer.", href: "/governance" },
  { title: "Compare Plans", desc: "See how features map across Starter, Professional, and Enterprise.", href: "/pricing" },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default  function FinanceLeaders() {
  return (
    <main className="bg-[#faf7f0] font-sans text-[#16233d] dark:bg-gray-900 dark:text-white">
      {/* ─── Hero ─── */}
      <section className="bg-[#f7f3ea] px-4 py-16 sm:px-6 md:px-8 lg:py-20 dark:bg-gray-800">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#d9720f]">
              <span className="h-px w-6 bg-[#d9720f]" /> Learn by Role · Finance Leaders
            </p>
            <h1 className="mt-5 max-w-xl font-serif text-[clamp(2rem,5vw,3rem)] leading-tight">
              Resources for CFOs and finance leaders.
            </h1>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">
              Executive guides, ROI support, and governance overviews built for the business-value conversation, not the
              technical one.
            </p>
            <Link
              href="/request-enterprise-briefing"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#f59a23] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Request Enterprise Briefing
            </Link>
          </div>

          {/* Portrait image slot */}
          <div className="relative aspect-[4/3] w-full max-w-sm overflow-hidden rounded-xl justify-self-center lg:justify-self-end">
            <Image src="/images/testpic.png" alt="CFO / finance leader" fill sizes="(max-width:1024px) 100vw, 20rem" className="object-cover" />
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
        </div>
      </section>
    </main>
  );
}

