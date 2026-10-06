import Link from "next/link";

const BTN =
  "flex items-center justify-center rounded-[8px] border px-5 pb-[11.59px] pt-[10px] text-center text-[13.5px] font-semibold leading-[21.6px] whitespace-nowrap transition-opacity hover:opacity-90";

/** Closing band. It exists only in the narrow Figma frame; the 1440px frame ends with the FAQ. */
export default function CloseSection() {
  return (
    <section className="border-t border-[#e3d9c2] pb-5 pt-[34px] lg:hidden">
      <div className="relative isolate flex min-h-[310px] items-center overflow-clip rounded-[20px] bg-[#071a33]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/api-reference/close-band.webp"
          alt=""
          loading="lazy"
          className="absolute inset-0 -z-20 size-full object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "linear-gradient(100deg, rgba(7,26,51,0.95) 0%, rgba(7,26,51,0.65) 55%, rgba(7,26,51,0.3) 100%)",
          }}
        />
        <div className="relative flex w-full max-w-[600px] flex-col items-start gap-[11.4px] px-6 pb-[52px] pt-[30px]">
          <h2 className="font-[family-name:var(--font-serif4)] text-[28px] font-semibold leading-[35px] tracking-[-0.42px] text-white">
            Bring the interface questions that matter to your architecture.
          </h2>
          <p className="text-[14px] leading-[23.8px] text-[#d7e0e8]">
            Inspect the public technical information available, then use the right product, trust or evaluation route
            for anything outside it.
          </p>
          <div className="flex flex-wrap items-start gap-[10px] pt-[10.6px]">
            <Link href="/book-a-demo" className={`${BTN} border-transparent bg-[#f59a23] text-[#071a33]`}>
              Book a Demo
            </Link>
            <Link href="/request-pilot" className={`${BTN} border-white/40 bg-white/[0.06] text-white`}>
              Request Pilot
            </Link>
            <Link href="/about" className={`${BTN} border-white/40 bg-white/[0.06] text-white`}>
              Sign In
            </Link>
          </div>
          <p className="pt-1 text-[14px] leading-[23.8px] text-[#d7e0e8]">
            No API availability, entitlement, integration readiness, SLA, implementation support or production access
            is implied.
          </p>
        </div>
      </div>
    </section>
  );
}
