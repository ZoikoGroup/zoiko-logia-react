import Eyebrow from "./Eyebrow";
import ActionLink from "./ActionLink";
import Br from "./Br";
import { NW } from "./tokens";

const STEPS = [
  { title: "Identity", text: "The partner's approved public name" },
  { title: "Relationship scope", text: "What the relationship covers, and what it doesn't" },
  { title: "Currentness", text: "When the record was last reviewed" },
  { title: "Next route", text: null },
];

export default function HeroSection() {
  return (
    <section className="relative isolate flex items-center overflow-hidden bg-[#071a33] lg:min-h-[600px] lg:px-[120px] lg:py-[38px]">
      {/* Background photo: one file, cropped differently in the two Figma frames */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-30 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/partners/hero-bg.webp"
          alt=""
          fetchPriority="high"
          className="absolute left-[-16.49%] top-0 h-full w-[132.98%] max-w-none lg:left-0 lg:top-[-104%] lg:h-[360%] lg:w-full"
        />
      </div>

      {/* Navy gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          backgroundImage:
            "linear-gradient(95deg, rgba(7,19,38,0.95) 0%, rgba(7,19,38,0.82) 45%, rgba(7,19,38,0.55) 100%)",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col items-center gap-11 px-5 lg:grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:px-0 lg:py-[60px]">
        {/* Left column */}
        <div className="flex w-full flex-col items-start gap-[12.7px] pb-[0.01px] pt-[6.9px] lg:pb-0 lg:pt-[6.91px]">
          <Eyebrow tone="hero">Partners</Eyebrow>

          <h1 className="w-full font-[family-name:var(--font-serif4)] text-[34px] font-semibold leading-[37.4px] tracking-[-0.34px] text-white lg:text-[44px] lg:leading-[48.4px] lg:tracking-[-0.44px]">
            Partners
          </h1>

          <p
            className={`w-full max-w-[540px] pt-[4.5px] text-[15px] leading-[25.8px] text-[#d3dce5] lg:pt-[4.6px] ${NW}`}
          >
            This page lists approved public partner relationships
            <Br k="m" />
            for ZoikoLogia™, each
            <Br k="d" />
            with its scope, currentness
            <Br k="m" />
            and accountability. No public partner records
            <Br k="d" />
            are
            <Br k="m" />
            currently available, so no partners are listed.
          </p>

          <div className="flex w-full flex-wrap items-start gap-x-[10px] pb-[7.3px] pt-[13.3px]">
            <ActionLink href="#directory" variant="primary">
              Explore partners
            </ActionLink>
            <ActionLink href="#partner-inquiry" variant="ghost">
              Explore a partnership
            </ActionLink>
          </div>

          <div className="w-full max-w-[520px] border-l-2 border-[#f59a23] pl-3">
            <p className={`text-[12px] leading-[19.2px] text-[#a9b8c8] ${NW}`}>
              Partner names, logos and relationship details are published
              <Br k="m" />
              only when approved for
              <Br k="d" />
              public use. A listing never implies
              <Br k="m" />
              certification, integration, endorsement or resale rights.
            </p>
          </div>
        </div>

        {/* Right column: what a published record tells you */}
        <div
          role="group"
          aria-label="What a published partner record tells you, in order: identity, relationship scope, currentness, then the next route."
          className="flex w-full flex-col items-start gap-2 rounded-[16px] border border-white/[0.16] bg-[rgba(8,22,42,0.84)] px-5 pb-5 pt-[19px] backdrop-blur-[5px]"
        >
          <p className="w-full pb-[0.8px] text-[10.5px] font-bold uppercase leading-[16.8px] tracking-[0.735px] text-[#9fb0c2]">
            What a published record tells you
          </p>

          {STEPS.map((s, i) => (
            <div
              key={s.title}
              className={`flex w-full items-center gap-3 rounded-[10px] border border-white/[0.14] bg-white/[0.04] px-[14px] pb-[11px] pt-[10px] first-of-type:pt-4 ${
                i === 3 ? "min-[412px]:max-[479px]:min-h-[95.33px]" : ""
              }`}
            >
              <span className="flex size-6 shrink-0 items-center justify-center rounded-[12px] bg-[rgba(245,154,35,0.18)] pb-[3.8px] pt-[2.2px] text-[11px] font-bold leading-[17.6px] text-[#f59a23]">
                {i + 1}
              </span>
              <div className="flex min-w-0 flex-1 flex-col gap-[5px] pb-[2.59px]">
                <p className="text-[12.6px] font-semibold leading-[21px] text-white">{s.title}</p>
                <p className={`text-[11.2px] leading-[18px] text-[#b7c4d3] ${NW}`}>
                  {s.text ?? (
                    <>
                      The owner for technical, trust or commercial
                      <Br k="m" />
                      questions
                    </>
                  )}
                </p>
              </div>
            </div>
          ))}

          <p className="w-full pt-[2.99px] text-center text-[10.8px] leading-[17px] text-[#8ca0b8]">
            The order is deliberate: identity first, badges never.
          </p>
        </div>
      </div>
    </section>
  );
}
