import ActionLink from "./ActionLink";
import Br from "./Br";
import ResponsiveImage from "./ResponsiveImage";
import { NW } from "./tokens";

export default function ConversionBandSection() {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-5 py-[46px] lg:px-8 lg:py-16">
      <div className="relative flex min-h-[469px] items-center overflow-clip rounded-[18px] lg:min-h-[366px]">
        <ResponsiveImage
          mobile="/leadership/conversion-band-mobile.webp"
          desktop="/leadership/conversion-band-desktop.webp"
          sizes="(min-width: 1440px) 1136px, 100vw"
          className="object-cover [object-position:50%_35%] lg:[object-position:50%_50%]"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(99.97deg, rgba(7,26,51,0.94) 0%, rgba(7,26,51,0.6) 55%, rgba(7,26,51,0.3) 100%)",
          }}
        />

        <div className="relative flex max-w-[560px] flex-col items-start gap-3 px-6 pb-[50.01px] pt-[29.265px] lg:px-12 lg:pb-[65.99px] lg:pt-[45.135px]">
          <h2
            className={`w-full pb-[0.535px] font-[family-name:var(--font-serif4)] text-[26px] font-semibold leading-[33.28px] tracking-[-0.26px] text-white ${NW}`}
          >
            Bring your organization-
            <Br k="m" tight />
            level questions
            <Br k="d" />
            to the right
            <Br k="m" />
            team.
          </h2>

          <p className={`w-full text-[14px] leading-[23.1px] text-[#d7e0e8] ${NW}`}>
            Whether you&apos;re evaluating, buying or partnering,
            <Br k="m" />
            an organization-level
            <Br k="d" />
            route will get your question
            <Br k="m" />
            to the people who can answer it.
          </p>

          <div className="flex w-full flex-col items-start gap-[10px] pt-2 lg:min-h-[53.59px] lg:flex-row lg:flex-wrap">
            <ActionLink href="/book-a-demo" variant="primary">
              Request Enterprise Briefing
            </ActionLink>
            <ActionLink href="/contact-us" variant="ghost">
              Contact Sales
            </ActionLink>
          </div>

          <p className={`w-full pt-1 text-[14px] leading-[23.1px] text-[#d7e0e8] ${NW}`}>
            Neither route guarantees a particular attendee,
            <Br k="m" />
            or any involvement
            <Br k="d" />
            from a person named on this
            <Br k="m" />
            page.
          </p>
        </div>
      </div>
    </section>
  );
}
