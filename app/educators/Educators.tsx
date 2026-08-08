import Image from "next/image";
import Link from "next/link";

// ─── DATA ──────────────────────────────────────────────────────────────────


type Card = { title: string; desc: string; href: string };

const cards: Card[] = [
  { title: "For Educators Guide", desc: "What changes in Learning Mode — pathways, warnings, and integrity safeguards.", href: "/resources/guides#for-educators" },
  { title: "Glossary", desc: "Plain-language definitions to share with students and new hires.", href: "/resources/glossary" },
  { title: "Responsible AI", desc: "Why Kriton\u2122 is designed to decline live-exam completion requests.", href: "/responsible-ai" },
  { title: "Webinars", desc: "Recorded sessions including workflow and governance walkthroughs.", href: "/resources/webinars" },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function Educators() {
  return (
    <main className="bg-[#faf7f0] font-sans text-[#16233d] dark:bg-gray-900 dark:text-white">
      {/* ─── Hero ─── */}
      <section className="bg-[#f7f3ea] px-4 py-16 sm:px-6 md:px-8 lg:py-20 dark:bg-gray-800">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#d9720f]">
              <span className="h-px w-6 bg-[#d9720f]" /> Learn by Role · Educators &amp; Learning Leaders
            </p>
            <h1 className="mt-5 max-w-xl font-serif text-[clamp(2rem,5vw,3rem)] leading-tight">
              Resources for educators and learning leaders.
            </h1>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">
              Learning-mode guides, education use cases, and academic integrity controls for instructors evaluating
              classroom or training use.
            </p>
            <Link
              href="/resources"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#f59a23] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Explore Education Resources
            </Link>
          </div>

          {/* Portrait image slot (PNG in /images) */}
          <div className="relative aspect-[4/3] w-full max-w-sm overflow-hidden rounded-xl justify-self-center lg:justify-self-end">
            <Image src="/images/photograph.png" alt="Educators and learning leaders" fill sizes="(max-width:1024px) 100vw, 22rem" className="object-cover" />
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



