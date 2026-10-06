import Link from "next/link";
import Eyebrow from "./Eyebrow";
import Br from "./Br";

const WIDE = "min-[1440px]:whitespace-nowrap";

const STATUS = [
  { label: "Public reference inventory", chip: "Not published", tone: "amber" },
  { label: "Version / contract context", chip: "Source required", tone: "amber" },
  { label: "Authentication detail", chip: "Source required", tone: "amber" },
  { label: "Release history", chip: "See Release Notes", tone: "teal", href: "/documentation" },
] as const;

const CHIP = {
  amber: "border-[rgba(245,154,35,0.5)] bg-[rgba(245,154,35,0.1)] text-[#f7b654]",
  teal: "border-[rgba(0,191,166,0.5)] bg-[rgba(0,191,166,0.1)] text-[#5fe7d2]",
} as const;
const DOT = { amber: "bg-[#f7b654]", teal: "bg-[#5fe7d2]" } as const;

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#071a33] px-5 lg:px-[100px]">
      {/* Background photo, faint */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-30 opacity-[0.32]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/api-reference/hero-bg.webp"
          alt=""
          fetchPriority="high"
          className="absolute inset-0 size-full object-cover [object-position:50%_40%]"
        />
        <div className="absolute inset-0 bg-white/40" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          backgroundImage:
            "linear-gradient(100deg, rgba(7,19,38,0.97) 0%, rgba(7,19,38,0.9) 45%, rgba(7,26,51,0.7) 100%)",
        }}
      />
      {/* Figma 'Gradient' layer: untiled tint bands (top 2.27% / left 2.27%), masked to fade out by 90% height */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(59,106,158,0.14) 2.2727%, rgba(59,106,158,0) 2.2727%), linear-gradient(90deg, rgba(59,106,158,0.14) 2.2727%, rgba(59,106,158,0) 2.2727%)",
          maskImage: "linear-gradient(180deg, #000 0%, transparent 90%)",
          WebkitMaskImage: "linear-gradient(180deg, #000 0%, transparent 90%)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-12 pb-12 pt-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:pb-[60px] lg:pt-[68px]">
        <div className="flex flex-col items-start gap-[11.7px] pt-[6.9px]">
          <Eyebrow tone="hero">API Reference</Eyebrow>

          <h1
            className={`w-full max-w-[640px] font-[family-name:var(--font-serif4)] text-[34px] font-semibold leading-[38px] tracking-[-0.68px] text-white sm:text-[42px] sm:leading-[46px] lg:text-[50px] lg:leading-[53.5px] lg:tracking-[-1px] ${WIDE}`}
          >
            Technical contracts you can
            <Br k="d" />
            <span className="text-[#f59a23]">inspect</span>, not infer.
          </h1>

          <p
            className={`w-full max-w-[580px] pt-[7.3px] text-[15.6px] leading-[26.52px] text-[#d3dce5] ${WIDE}`}
          >
            Find source-approved interface versions, resources, operations, schemas,
            <Br k="d" />
            errors and access boundaries when published. Exact production behavior
            <Br k="d" />
            appears only from governed ZoikoLogia™ technical sources.
          </p>

          <div className="flex w-full flex-wrap items-start gap-[10px] pt-[16.3px]">
            <Link
              href="#overview"
              className="flex items-center justify-center rounded-[8px] border border-transparent bg-[#f59a23] px-5 pb-[11.59px] pt-[10px] text-center text-[13.5px] font-semibold leading-[21.6px] whitespace-nowrap text-[#071a33] transition-opacity hover:opacity-90"
            >
              Browse API Reference
            </Link>
            <Link
              href="/documentation"
              className="flex items-center justify-center rounded-[8px] border border-white/40 bg-white/[0.06] px-5 pb-[11.59px] pt-[10px] text-center text-[13.5px] font-semibold leading-[21.6px] whitespace-nowrap text-white transition-opacity hover:opacity-90"
            >
              Search documentation
            </Link>
          </div>

          <div className="w-full max-w-[560px] border-l-2 border-[#f59a23] pl-3">
            <p className={`text-[12px] leading-[19.8px] text-[#a9b8c8] ${WIDE}`}>
              Documentation visibility does not itself confirm API availability, production access, entitlement,
              <Br k="d" />
              integration support, service level or product coverage.
            </p>
          </div>
        </div>

        <aside
          aria-label="Current documentation status"
          className="relative isolate w-full overflow-clip rounded-[18px] border border-white/[0.16] bg-[rgba(8,22,42,0.82)] backdrop-blur-[5px]"
        >
          <div className="relative -mb-[34px] h-[150px] w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/api-reference/hero-status.webp"
              alt=""
              loading="eager"
              className="absolute inset-0 size-full object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(8,22,42,0)] from-30% to-[rgba(8,22,42,0.95)]" />
          </div>

          <div className="relative px-5 pb-[17.99px] pt-[3px]">
            <p className="pb-[10.8px] text-[10.5px] font-bold uppercase leading-[16.8px] tracking-[0.84px] text-[#9fb0c2]">
              Documentation status
            </p>

            {STATUS.map((s) => {
              const chip = (
                <span
                  className={`inline-flex h-[24.8px] items-center gap-[6px] rounded-[20px] border px-[10px] text-[10.5px] font-bold uppercase leading-[16.8px] tracking-[0.315px] whitespace-nowrap ${CHIP[s.tone]}`}
                >
                  <span aria-hidden className={`size-[6px] rounded-[3px] ${DOT[s.tone]}`} />
                  {s.chip}
                </span>
              );
              return (
                <div
                  key={s.label}
                  className="flex items-center justify-between gap-4 border-t border-white/10 py-[9px]"
                >
                  <span className="text-[12.4px] leading-[19.84px] text-[#d3dce5]">{s.label}</span>
                  {"href" in s ? <Link href={s.href}>{chip}</Link> : chip}
                </div>
              );
            })}

            <p className="pt-[9px] text-[10.8px] leading-[16.2px] text-[#8ca0b8]">
              An honest gap is shown instead of plausible-looking syntax.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
