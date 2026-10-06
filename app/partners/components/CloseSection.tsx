import ActionLink from "./ActionLink";
import Br from "./Br";
import { NW } from "./tokens";

export default function CloseSection() {
  return (
    <section className="bg-[#efe8d6]">
      <div className="mx-auto w-full max-w-[1440px] px-5 pb-[46px] pt-[92px] lg:px-[152px] lg:py-16">
        <div className="relative flex min-h-[300px] items-center overflow-clip rounded-[18px]">
          <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/partners/close-band.webp"
              alt=""
              loading="lazy"
              className="absolute left-[-44.04%] top-0 h-full w-[188.08%] max-w-none lg:left-0 lg:top-[-38.37%] lg:h-[195.92%] lg:w-full"
            />
          </div>
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(99.97deg, rgba(7,26,51,0.94) 0%, rgba(7,26,51,0.6) 55%, rgba(7,26,51,0.3) 100%)",
            }}
          />

          <div className="relative flex w-full max-w-[580px] flex-col items-start gap-3 px-6 pb-[49.99px] pt-[29.135px] lg:px-12 lg:pb-[66px] lg:pt-[45px]">
            <h2
              className={`w-full font-[family-name:var(--font-serif4)] text-[26px] font-semibold leading-[33.28px] tracking-[-0.26px] text-white ${NW}`}
            >
              Continue your evaluation
              <Br k="m" />
              without a gate.
            </h2>

            <p className={`w-full text-[14px] leading-[23.1px] text-[#d7e0e8] ${NW}`}>
              Everything on this page, and every page it links
              <Br k="m" />
              to, is open to read. When
              <Br k="d" />
              you&apos;re ready for a
              <Br k="m" />
              conversation, choose the route that fits.
            </p>

            <div className="flex w-full flex-col items-start gap-[10px] pt-2 lg:flex-row lg:flex-wrap">
              <ActionLink href="/book-a-demo" variant="primary">
                Book a Demo
              </ActionLink>
              <ActionLink href="/request-enterprise-briefing" variant="ghost">
                Request Enterprise Briefing
              </ActionLink>
              <ActionLink href="/compliance" variant="ghost">
                Explore Trust
              </ActionLink>
            </div>

            <p className={`w-full pt-1 text-[14px] leading-[23.1px] text-[#d7e0e8] ${NW}`}>
              No route here implies partner status, an
              <Br k="m" />
              integration, or access to any
              <Br k="d" />
              individual.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
