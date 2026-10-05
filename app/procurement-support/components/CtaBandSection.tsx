import ActionLink from "./ActionLink";
import ArrowRight from "./ArrowRight";
import Br from "./Br";
import ResponsiveImage from "./ResponsiveImage";
import { NW } from "./tokens";

export default function CtaBandSection() {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-5 pt-[46px] lg:px-8 lg:pt-16">
      <div className="relative flex min-h-[260px] items-center overflow-clip rounded-[18px]">
        <ResponsiveImage
          mobile="/procurement-support/cta-band-mobile.webp"
          desktop="/procurement-support/cta-band-desktop.webp"
          sizes="(min-width: 1440px) 1136px, 100vw"
          className="object-cover [object-position:50%_30%] lg:[object-position:50%_50%]"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(100deg, rgba(7,26,51,0.93) 0%, rgba(7,26,51,0.45) 62%, rgba(7,26,51,0) 100%)",
          }}
        />

        <div className="relative flex max-w-[500px] flex-col items-start gap-[10.8px] px-6 pb-7 pt-[27.3px] lg:px-11 lg:pb-10 lg:pt-[39.295px]">
          <h3
            className={`w-full font-[family-name:var(--font-serif4)] text-[22px] font-semibold leading-[28.6px] tracking-[-0.22px] text-white ${NW}`}
          >
            Start with the evidence. Bring in
            <Br k="m" />
            process
            <Br k="d" />
            help when you need it.
          </h3>

          <p className={`w-full pb-[7.2px] text-[13.5px] leading-[21.6px] text-[#d7e0e8] ${NW}`}>
            Your team can review provider evidence today,
            <Br k="m" />
            with no form and
            <Br k="d" />
            no sales call.
          </p>

          <ActionLink href="/buyers-brief" variant="primary">
            Open Provider Due Diligence
            <ArrowRight />
          </ActionLink>
        </div>
      </div>
    </section>
  );
}
