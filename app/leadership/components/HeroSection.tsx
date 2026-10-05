import Eyebrow from "./Eyebrow";
import ActionLink from "./ActionLink";
import Br from "./Br";
import ResponsiveImage from "./ResponsiveImage";
import { NW } from "./tokens";

const ROUTES = [
  { label: <>Governance mechanisms</>, target: <>Governance</> },
  { label: <>Evidence and specialist trust topics</>, target: <>Trust</> },
  {
    label: (
      <>
        Commercial and
        <Br k="m" />
        enterprise needs
      </>
    ),
    target: (
      <>
        Contact Sales ·
        <Br k="m" />
        Enterprise Briefing
      </>
    ),
  },
  { label: <>Procurement process</>, target: <>Procurement Support</> },
  { label: <>Media and corrections</>, target: <>Press &amp; Media</> },
];

export default function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[845px] items-center overflow-hidden bg-[#071a33] lg:min-h-[640px] lg:px-[120px] lg:py-[79px]">
      {/* Desktop background photo */}
      <ResponsiveImage
        desktop="/leadership/hero-bg-desktop.webp"
        className="-z-30 object-cover"
        priority
      />

      {/* Blurred photo layer (bleeds 12px past the section on every side) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-3 -z-20 opacity-70 blur-[1.5px]"
      >
        <div className="absolute inset-0 overflow-hidden">
          <ResponsiveImage
            mobile="/leadership/hero-photo-mobile.webp"
            desktop="/leadership/hero-photo-desktop.webp"
            className="object-cover lg:[object-position:50%_40.01%]"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-white" />
      </div>

      {/* Navy gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(95deg, rgba(7,19,38,0.96) 0%, rgba(7,19,38,0.86) 45%, rgba(10,30,58,0.7) 100%)",
        }}
      />

      {/* Network line art */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-clip opacity-55"
      >
        <div className="absolute -bottom-[1.56%] -right-[161.39%] -top-[1.56%] left-1/2 lg:-bottom-[11.88%] lg:-right-[5%] lg:-top-[11.88%]">
          <ResponsiveImage
            mobile="/leadership/hero-network-lines-mobile.svg"
            desktop="/leadership/hero-network-lines-desktop.svg"
            className="block"
            unoptimized
          />
        </div>
        <div className="absolute inset-[25.94%_-98.62%_25.94%_112.78%] lg:inset-[21.12%_11.33%_21.12%_66.33%]">
          <ResponsiveImage
            mobile="/leadership/hero-network-nodes-mobile.svg"
            desktop="/leadership/hero-network-nodes-desktop.svg"
            className="block"
            unoptimized
          />
        </div>
      </div>

      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col items-center gap-11 px-5 lg:grid lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-stretch lg:px-0 lg:py-16">
        {/* Left column */}
        <div className="flex w-full flex-col items-start gap-[12.7px] pt-[6.9px] lg:self-center">
          <Eyebrow tone="hero">Leadership</Eyebrow>

          <h1 className="w-full font-[family-name:var(--font-serif4)] text-[34px] font-semibold leading-[37.4px] tracking-[-0.34px] text-white lg:pb-[0.59px] lg:text-[46px] lg:leading-[50.6px] lg:tracking-[-0.46px]">
            Leadership
          </h1>

          <p
            className={`w-full max-w-[540px] pt-[5.3px] text-[15px] leading-[25.8px] text-[#d3dce5] lg:pt-[4.5px] ${NW}`}
          >
            Source-approved leadership information for
            <Br k="m" />
            ZoikoLogia™ appears here once
            <Br k="d" />
            identity, title, scope
            <Br k="m" />
            and publication are approved. No leadership profiles
            <Br k="md" />
            are currently published, so this page lists no names,
            <Br k="m" />
            titles, biographies or
            <Br k="d" />
            portraits.
          </p>

          <div className="flex w-full flex-wrap items-start gap-[10px] pb-[7.3px] pt-[13.3px] lg:min-h-[66.19px]">
            <ActionLink href="#leadership-directory" variant="primary">
              View leadership
            </ActionLink>
            <ActionLink href="/governance" variant="ghost">
              Governance
            </ActionLink>
            <ActionLink href="/book-a-demo" variant="ghost">
              Request Enterprise Briefing
            </ActionLink>
          </div>

          <p
            className={`w-full max-w-[520px] border-l-2 border-[#f59a23] pl-3 text-[12px] leading-[19.2px] text-[#a9b8c8] ${NW}`}
          >
            Names, titles, biographies and portraits are published only
            <Br k="m" />
            when approved for public use.
          </p>
        </div>

        {/* Right column: routing card */}
        <div className="flex w-full flex-col items-start gap-2 rounded-[16px] border border-white/[0.16] bg-[rgba(8,22,42,0.84)] px-5 pb-5 pt-[19px] backdrop-blur-[5px] lg:self-center">
          <p className="w-full pb-[6.8px] text-[10.5px] font-bold uppercase leading-[16.8px] tracking-[0.735px] text-[#9fb0c2]">
            Where each question goes
          </p>

          {ROUTES.map((r, i) => (
            <div
              key={i}
              className="flex w-full items-center justify-between gap-3 rounded-[10px] border border-white/[0.14] bg-white/[0.04] px-[14px] py-[11px] lg:gap-4"
            >
              <span className={`text-[12.6px] font-semibold leading-[20.16px] text-white ${NW}`}>
                {r.label}
              </span>
              <span className={`text-right text-[11.2px] leading-[17.92px] text-[#b7c4d3] ${NW}`}>
                {r.target}
              </span>
            </div>
          ))}

          <p
            className={`w-full pt-[3.1px] text-center text-[10.8px] leading-[16.2px] text-[#8ca0b8] lg:pt-[3px] ${NW}`}
          >
            Organization-level routes. No route here implies access to an
            <Br k="m" />
            individual.
          </p>
        </div>
      </div>
    </section>
  );
}
