import Eyebrow from "./Eyebrow";
import ArrowRight from "./ArrowRight";
import Br from "./Br";
import ResponsiveImage from "./ResponsiveImage";
import { NW } from "./tokens";

const STATES = [
  {
    chip: "Current",
    chipClass: "border-[#00bfa6] text-[#5fe7d2]",
    text: (
      <>
        The version in force. Its effective date is
        <Br k="m" />
        shown when the source
        <Br k="d" />
        gives one.
      </>
    ),
  },
  {
    chip: "Scheduled",
    chipClass: "border-white/35 text-[#e5ecf3]",
    text: (
      <>
        Not yet effective. The current version
        <Br k="m" />
        stays most prominent.
      </>
    ),
  },
  {
    chip: "Superseded",
    chipClass: "border-white/35 text-[#e5ecf3]",
    text: (
      <>
        Replaced. The current replacement is
        <Br k="m" />
        always linked first.
      </>
    ),
  },
  {
    chip: "Request required",
    chipClass: "border-white/35 text-[#e5ecf3]",
    text: (
      <>
        Controlled access, with no
        <Br k="m" />
        promise of entitlement.
      </>
    ),
  },
];

export default function HeroSection() {
  return (
    <section className="relative isolate flex items-center overflow-hidden bg-[#071a33] lg:min-h-[700px] lg:px-[120px] lg:py-[44.42px]">
      {/* Background photo: a different photo in each Figma frame */}
      <ResponsiveImage
        mobile="/legal/hero-bg-mobile.webp"
        desktop="/legal/hero-bg-desktop.webp"
        className="-z-30 object-cover"
        priority
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          backgroundImage:
            "linear-gradient(98deg, rgba(7,19,38,0.97) 0%, rgba(7,19,38,0.88) 40%, rgba(7,19,38,0.6) 72%, rgba(7,19,38,0.5) 100%)",
        }}
      />
      <div aria-hidden className="absolute inset-y-0 left-0 w-[6px] bg-[#f59a23]" />

      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col items-center gap-12 px-5 lg:grid lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:items-center lg:px-0 lg:py-[72px]">
        {/* Left column */}
        <div className="flex w-full flex-col items-start gap-[13.7px] pb-[0.01px] pt-[6.9px] lg:gap-[12.9px] lg:pt-[6.91px]">
          <Eyebrow tone="hero">Legal</Eyebrow>

          <h1
            className={`w-full max-w-[660px] font-[family-name:var(--font-serif4)] text-[34px] font-semibold leading-[36px] tracking-[-0.68px] text-white lg:text-[54px] lg:leading-[57.24px] lg:tracking-[-1.08px] ${NW}`}
          >
            Legal information and
            <Br k="md" />
            <span className="text-[#f59a23]">current documents</span> for
            <Br k="md" />
            ZoikoLogia™.
          </h1>

          <p
            className={`w-full max-w-[580px] pt-[8.31px] text-[15px] leading-[25.5px] text-[#dce4ec] lg:pt-[9.11px] lg:text-[16.5px] lg:leading-[28px] ${NW}`}
          >
            Find source-approved legal documents, notices,
            <Br k="m" />
            rights information and
            <Br k="d" />
            specialist routes. The
            <Br k="m" />
            authoritative document or source governs wherever
            <Br k="md" />
            a summary differs.
          </p>

          <div className="flex w-full flex-col items-start gap-3 pb-[10.29px] pt-[16.3px] lg:flex-row lg:flex-wrap lg:gap-y-0 lg:pb-[11.09px] lg:pt-[17.1px]">
            <a
              href="#legal-documents"
              className="flex items-center justify-center rounded-[6px] border border-transparent bg-[#f59a23] px-[26px] py-[14px] text-center text-[14.5px] font-semibold leading-[23.2px] whitespace-nowrap text-[#071a33] transition-opacity hover:opacity-90"
            >
              Explore legal documents
              <ArrowRight />
            </a>
            <a
              href="#legal-path"
              className="flex items-center justify-center rounded-[6px] border border-white/50 bg-white/[0.06] px-[26px] py-[14px] text-center text-[14.5px] font-semibold leading-[23.2px] whitespace-nowrap text-white transition-opacity hover:opacity-90"
            >
              Find the right legal path
              <ArrowRight />
            </a>
          </div>

          <div className="w-full max-w-[560px] border-l-2 border-[#f59a23] pl-[14px]">
            <p className={`text-[12.6px] leading-[20.79px] text-[#b4c2d1] ${NW}`}>
              This public destination does not provide personalized legal
              <Br k="m" />
              advice or determine which
              <Br k="d" />
              customer-specific agreement
              <Br k="m" />
              applies to you.
            </p>
          </div>
        </div>

        {/* Right column: how to read a legal record */}
        <div
          role="group"
          aria-label="How to read a legal record: its state is always shown in words."
          className="w-full rounded-[18px] border border-white/[0.18] bg-[rgba(8,22,42,0.86)] px-[22px] pb-[22px] pt-[21px] backdrop-blur-[5px]"
        >
          <p className="pb-[0.8px] text-[10.5px] font-bold uppercase leading-[16.8px] tracking-[0.84px] text-[#9fb0c2]">
            How to read a legal record
          </p>
          <p
            className={`pb-[14px] pt-[5.99px] font-[family-name:var(--font-serif4)] text-[17px] font-normal leading-[22.1px] text-white ${NW}`}
          >
            Every record states where it stands, in
            <Br k="m" />
            words.
          </p>

          {STATES.map((s) => (
            <div key={s.chip} className="flex items-start gap-[22px] border-t border-white/[0.12] pb-[11px] pt-[10px]">
              <span
                className={`mt-px shrink-0 rounded-[20px] border px-[9px] py-[3px] text-[10px] font-bold uppercase leading-4 tracking-[0.4px] whitespace-nowrap ${s.chipClass}`}
              >
                {s.chip}
              </span>
              <p className={`-mt-px text-[12.2px] leading-[18.3px] text-[#c3cfdb] ${NW}`}>{s.text}</p>
            </div>
          ))}

          <p className={`border-t border-white/[0.12] pt-3 text-[11px] leading-[16.5px] text-[#8ca0b8] ${NW}`}>
            If a source can&apos;t be reached, we say so. We never show
            <Br k="m" />
            &quot;Current&quot; without a source
            <Br k="d" />
            behind it.
          </p>
        </div>
      </div>
    </section>
  );
}
