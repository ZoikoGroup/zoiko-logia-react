import Link from "next/link";
import Eyebrow from "./Eyebrow";
import ActionLink from "./ActionLink";
import Br from "./Br";
import ResponsiveImage from "./ResponsiveImage";
import { NW } from "./tokens";

const CHIP =
  "rounded-[16px] bg-white/[0.08] px-[11px] py-1 text-[11.5px] font-semibold leading-[18.4px] text-[#e5ecf3] whitespace-nowrap";

/* Dashed 2px × 16px connector between the lanes of the source-to-process map. */
const CONNECTOR_STYLE = {
  backgroundImage:
    "linear-gradient(180deg, #f59a23 0%, #f59a23 25%, rgba(245,154,35,0) 25%, rgba(245,154,35,0) 43.75%, #f59a23 43.75%, #f59a23 68.75%, rgba(245,154,35,0) 68.75%, rgba(245,154,35,0) 87.5%, #f59a23 87.5%, #f59a23 100%)",
};

export default function HeroSection() {
  return (
    <section className="relative isolate flex items-center overflow-hidden bg-[#071a33] lg:min-h-[640px] lg:px-[120px] lg:py-[56.36px]">
      {/* Background photo */}
      <ResponsiveImage
        mobile="/procurement-support/hero-bg-mobile.webp"
        desktop="/procurement-support/hero-bg-desktop.webp"
        className="-z-30 object-cover"
        priority
      />

      {/* Navy gradients */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          backgroundImage:
            "linear-gradient(95deg, rgba(7,19,38,0.95) 0%, rgba(7,19,38,0.82) 42%, rgba(7,19,38,0.55) 75%, rgba(7,19,38,0.45) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[90px] bg-gradient-to-b from-[rgba(7,19,38,0)] to-[rgba(7,19,38,0.55)]"
      />

      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col items-center gap-11 px-5 lg:grid lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-stretch lg:px-0 lg:py-16">
        {/* Left column */}
        <div className="flex w-full flex-col items-start gap-[13.2px] pb-[1.9px] pt-[6.9px] lg:gap-[13.7px] lg:self-center lg:pb-0">
          <Eyebrow tone="hero">Enterprise Procurement</Eyebrow>

          <h1
            className={`w-full max-w-[560px] font-[family-name:var(--font-serif4)] text-[28px] font-semibold leading-[32.48px] tracking-[-0.28px] text-white lg:text-[38px] lg:leading-[44px] lg:tracking-[-0.38px] ${NW}`}
          >
            Keep procurement moving
            <Br k="m" />
            with
            <Br k="d" />
            the right source and next
            <Br k="m" />
            step.
          </h1>

          <p
            className={`w-full max-w-[540px] pt-[4.8px] text-[15px] leading-[25.8px] text-[#d3dce5] lg:pt-[3.595px] ${NW}`}
          >
            Use Procurement Support for process and
            <Br k="m" />
            coordination questions. For
            <Br k="d" />
            provider evidence,
            <Br k="m" />
            questionnaires and due-diligence records, use
            <Br k="m" />
            Provider
            <Br k="d" />
            Due Diligence. For general commercial
            <Br k="m" />
            questions, use Contact Sales.
          </p>

          <div className="flex w-full flex-col items-start justify-center gap-[10px] pt-[12.8px] lg:flex-row lg:flex-wrap lg:justify-start lg:pt-[12.3px]">
            <ActionLink href="#request-form" variant="primary">
              Get Procurement Support
            </ActionLink>
            <ActionLink href="/buyers-brief" variant="ghost">
              Open Provider Due Diligence
            </ActionLink>
          </div>

          {/* Quick links — mobile frame only */}
          <div className="flex w-full flex-wrap gap-x-[18px] pt-[2.8px] lg:hidden">
            <Link
              href="/contact-us"
              className="border-b border-[#f59a23]/40 py-1 text-[13px] font-semibold leading-[20.8px] text-[#f59a23]"
            >
              Contact Sales
            </Link>
            <Link
              href="/compliance"
              className="border-b border-[#f59a23]/40 py-1 text-[13px] font-semibold leading-[20.8px] text-[#f59a23]"
            >
              Explore Trust
            </Link>
          </div>

          <p
            className={`w-full max-w-[520px] pt-[6.235px] text-[11.8px] leading-[18.88px] text-[#9fb0c2] lg:pt-[5.735px] ${NW}`}
          >
            Submission does not confirm procurement approval, contract
            <Br k="m" />
            acceptance, onboarding,
            <Br k="d" />
            response time or commercial terms.
          </p>
        </div>

        {/* Right column: source-to-process map */}
        <div
          role="group"
          aria-label="Source-to-process map: evidence on one lane, commercial and legal owners on another, procurement coordination as the handoff layer between them."
          className="flex w-full flex-col items-center rounded-[16px] border border-white/[0.16] bg-[rgba(8,22,42,0.84)] px-5 pb-[21.8px] pt-[19px] backdrop-blur-[5px] lg:self-center lg:pb-5"
        >
          <p className="w-full pb-[14.8px] text-[10.5px] font-bold uppercase leading-[16.8px] tracking-[0.735px] text-[#9fb0c2]">
            Source-to-process map
          </p>

          {/* Evidence lane */}
          <div className="flex w-full flex-col items-start gap-2 rounded-[10px] border border-[rgba(0,191,166,0.4)] bg-[rgba(0,191,166,0.1)] px-[15px] pb-[13px] pt-3">
            <p className="w-full pb-[0.8px] text-[10.5px] font-bold uppercase leading-[16.8px] tracking-[0.525px] text-[#5fe7d2]">
              Evidence · authoritative
            </p>
            <div className="flex w-full flex-wrap gap-[6px]">
              <span className={CHIP}>Provider Due Diligence</span>
              <span className={CHIP}>Trust</span>
              <span className={CHIP}>Compliance</span>
              <span className={CHIP}>Privacy &amp; Security</span>
            </div>
          </div>

          <div aria-hidden className="h-4 w-[2px] shrink-0" style={CONNECTOR_STYLE} />

          {/* Handoff layer */}
          <div className="flex w-full flex-col items-center gap-[7.5px] rounded-[10px] border border-[#f59a23] bg-[rgba(245,154,35,0.1)] px-4 pb-[16.09px] pt-[14px]">
            <strong className="font-[family-name:var(--font-serif4)] text-[15px] font-bold leading-[24px] text-white">
              Procurement Support
            </strong>
            <p className="text-center text-[11.5px] leading-[18.4px] text-[#d3dce5] whitespace-nowrap">
              Process and coordination · the handoff layer
            </p>
          </div>

          <div aria-hidden className="h-4 w-[2px] shrink-0" style={CONNECTOR_STYLE} />

          {/* Commercial & legal lane */}
          <div className="flex w-full flex-col items-start gap-2 rounded-[10px] border border-white/[0.14] bg-white/[0.05] px-[15px] pb-[13px] pt-3">
            <p className="w-full pb-[0.8px] text-[10.5px] font-bold uppercase leading-[16.8px] tracking-[0.525px] text-[#b7c4d3]">
              Commercial &amp; legal owners
            </p>
            <div className="flex w-full flex-wrap gap-[6px]">
              <span className={CHIP}>Contact Sales</span>
              <span className={`${CHIP} italic opacity-65`}>Legal · pending</span>
              <span className={`${CHIP} italic opacity-65`}>Partner Inquiry · pending</span>
            </div>
          </div>

          <p
            className={`w-full pt-[11px] text-center text-[10.8px] leading-[16.2px] text-[#8ca0b8] ${NW}`}
          >
            Evidence stays with its owner. Procurement Support coordinates
            <Br k="m" />
            the process around it.
          </p>
        </div>
      </div>
    </section>
  );
}
