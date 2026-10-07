import Link from "next/link";
import Br from "./Br";
import ResponsiveImage from "./ResponsiveImage";
import { NW } from "./tokens";

const BTN =
  "flex items-center justify-center rounded-[6px] border px-5 pb-[11.59px] pt-[10px] text-center text-[13.5px] font-semibold leading-[21.6px] whitespace-nowrap transition-opacity hover:opacity-90";

export default function CloseSection() {
  return (
    <section className="bg-[#efe8d6]">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-[46px] lg:px-[152px] lg:py-16">
        <div className="relative isolate flex min-h-[300px] items-center overflow-clip rounded-[18px]">
          {/* A different photo in each Figma frame */}
          <ResponsiveImage
            mobile="/legal/close-band-mobile.webp"
            desktop="/legal/close-band-desktop.webp"
            className="-z-20 object-cover [object-position:50%_35%] lg:[object-position:50%_50%]"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10"
            style={{
              backgroundImage:
                "linear-gradient(99.97deg, rgba(7,26,51,0.94) 0%, rgba(7,26,51,0.6) 55%, rgba(7,26,51,0.3) 100%)",
            }}
          />

          <div className="relative flex w-full max-w-[580px] flex-col items-start gap-3 px-6 pb-[50px] pt-[29.265px] lg:min-w-[580px] lg:px-12 lg:pb-[66px] lg:pt-[45.13px]">
            <h2
              className={`w-full pb-[0.535px] font-[family-name:var(--font-serif4)] text-[26px] font-semibold leading-[33.28px] tracking-[-0.26px] text-white lg:pb-0 ${NW}`}
            >
              Read first. Ask for a
              <Br k="m" />
              conversation only
              <Br k="d" />
              when you
              <Br k="m" />
              need one.
            </h2>

            <p className={`w-full text-[14px] leading-[23.1px] text-[#d7e0e8] ${NW}`}>
              Everything on this page and the pages it links to
              <Br k="m" />
              is open to read. When
              <Br k="d" />
              you do want to talk,
              <Br k="m" />
              choose the route that matches your need.
            </p>

            <div className="flex w-full flex-col items-start gap-[10px] pt-2 lg:flex-row lg:flex-wrap">
              <Link href="/compliance" className={`${BTN} border-transparent bg-[#f59a23] text-[#071a33]`}>
                Explore Trust
              </Link>
              <Link
                href="/request-enterprise-briefing"
                className={`${BTN} border-white/50 bg-white/[0.06] text-white`}
              >
                Request Enterprise Briefing
              </Link>
            </div>

            <p className={`w-full pt-1 text-[14px] leading-[23.1px] text-[#d7e0e8] ${NW}`}>
              Nothing here is legal advice, and no route
              <Br k="m" />
              implies a legal determination.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
