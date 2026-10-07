import ActionLink from "./ActionLink";
import Br from "./Br";
import { NW } from "./tokens";

export default function PartnerInquirySection() {
  return (
    <section id="partner-inquiry" className="scroll-mt-24 border-t border-[#e3d9c2] bg-[#efe8d6]">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-[46px] lg:px-[152px] lg:py-16">
        <div className="relative flex min-h-[300px] items-center overflow-clip rounded-[18px]">
          <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/partners/partner-inquiry-bg.webp"
              alt=""
              loading="lazy"
              className="absolute left-0 top-[-3.78%] h-[110.81%] w-full max-w-none lg:top-[-113.91%] lg:h-[425.45%]"
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

          <div className="relative flex w-full max-w-[580px] flex-col items-start gap-3 px-6 pb-[50px] pt-[29.13px] lg:px-12 lg:pb-[66px] lg:pt-[45px]">
            <h2
              className={`w-full font-[family-name:var(--font-serif4)] text-[26px] font-semibold leading-[33.28px] tracking-[-0.26px] text-white ${NW}`}
            >
              Interested in exploring a
              <Br k="m" />
              partnership?
            </h2>

            <p className={`w-full text-[14px] leading-[23.1px] text-[#d7e0e8] ${NW}`}>
              A partnership enquiry shares your context with
              <Br k="m" />
              us. It doesn&apos;t create
              <Br k="d" />
              partner status, rights,
              <Br k="m" />
              integration or program eligibility, and it is
              <Br k="m" />
              separate
              <Br k="d" />
              from anything published on this page.
            </p>

            <div className="flex w-full flex-col items-start gap-[10px] pt-2 lg:flex-row lg:flex-wrap">
              <ActionLink href="/partner-inquiry" variant="primary">
                Start a partnership enquiry
              </ActionLink>
              <ActionLink href="#existing-partner" variant="ghost">
                Already a partner?
              </ActionLink>
            </div>

            <p className={`w-full pt-1 text-[14px] leading-[23.1px] text-[#d7e0e8] ${NW}`}>
              A dedicated Partner Inquiry page is pending
              <Br k="m" />
              approval. Until it&apos;s live, the
              <Br k="d" />
              partnership option on
              <Br k="m" />
              the Contact page is the organization-level route.
              <Br k="md" />
              We list no benefits, tiers, incentives or training
              <Br k="m" />
              here because none are
              <Br k="d" />
              published.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
