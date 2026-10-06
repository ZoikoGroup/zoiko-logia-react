import Link from "next/link";
import SectionHead, { Br } from "./SectionHead";
import { Block } from "./ui";

export default function NavigatorSection() {
  return (
    <Block id="navigator" gap="gap-6">
      <SectionHead
        n={4}
        title="Search and browse the governed inventory."
        lead={
          <>
            Search covers approved public labels, descriptions and identifiers only. Please don&apos;t paste secrets or
            <Br k="d" />
            credentials.
          </>
        }
      />

      <div className="w-full overflow-clip rounded-[16px] border border-[#e3d9c2] bg-white">
        {/* Search bar */}
        <div className="flex flex-wrap items-stretch gap-3 border-b border-[#e3d9c2] bg-[#efe8d6] px-[18px] py-4">
          <label className="relative min-w-[240px] flex-1">
            <span className="sr-only">Search published reference items</span>
            <svg
              aria-hidden
              viewBox="0 0 16 16"
              fill="none"
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2"
            >
              <circle cx="7.33" cy="7.33" r="4.33" stroke="#8B93A0" strokeWidth="1.2" />
              <path d="M10.67 10.67l3 3" stroke="#8B93A0" strokeWidth="1.2" />
            </svg>
            <input
              type="search"
              placeholder="Search published reference items"
              className="h-[41px] w-full rounded-[8px] border border-[#e3d9c2] bg-white pl-[38px] pr-3 text-[14px] text-[#12202f] outline-none placeholder:text-[#757575] focus:border-[#f59a23] focus:shadow-[0_0_0_1px_#f59a23]"
            />
          </label>
          <span className="flex items-center rounded-[8px] border border-[#e3d9c2] bg-[#f7f3ea] px-[14px] py-[9px] text-[12.4px] leading-[19.84px] text-[#8b93a0]">
            Context: none published
          </span>
        </div>

        {/* Resource tree + empty state */}
        <div className="flex min-h-[260px] flex-col md:flex-row">
          <div className="flex flex-col gap-[10px] border-b border-[#e3d9c2] bg-[#f7f3ea] px-4 pb-6 pt-[15px] md:w-[220px] md:shrink-0 md:border-b-0 md:border-r">
            <p className="pb-[0.8px] text-[10.5px] font-bold uppercase leading-[16.8px] tracking-[0.735px] text-[#8b93a0]">
              Resource tree
            </p>
            <p className="text-[12px] leading-[19.2px] text-[#5c6672]">
              The tree mirrors the governed taxonomy. It stays empty rather than implying interfaces that
              aren&apos;t published.
            </p>
          </div>

          <div className="flex min-w-0 flex-1 flex-col items-center justify-center px-7 py-[34px] text-center">
            <span className="mb-[14px] flex size-[46px] items-center justify-center rounded-[12px] bg-[#efe8d6]">
              <svg aria-hidden width="22" height="22" viewBox="0 0 22 22" fill="none" className="size-[22px]">
                <path
                  d="M15.585 3.668H6.418a2.75 2.75 0 0 0-2.75 2.75v9.167a2.75 2.75 0 0 0 2.75 2.75h9.167a2.75 2.75 0 0 0 2.75-2.75V6.418a2.75 2.75 0 0 0-2.75-2.75Z"
                  stroke="#123055"
                  strokeWidth="1.46667"
                />
                <path d="M7.332 9.168h7.333M7.332 12.835h4.583" stroke="#123055" strokeWidth="1.46667" />
              </svg>
            </span>
            <h3 className="pb-[0.8px] font-[family-name:var(--font-serif4)] text-[18px] font-semibold leading-[28.8px] tracking-[-0.27px] text-[#071a33]">
              No public reference inventory is currently published
            </h3>
            <p className="max-w-[460px] pb-4 pt-[6px] text-[13px] leading-[22.1px] text-[#5c6672]">
              This doesn&apos;t mean no interface exists, and it doesn&apos;t mean one does. It means nothing is
              published here yet. For technical questions, use an evaluation route.
            </p>
            <div className="flex flex-wrap justify-center gap-[10px]">
              <Link
                href="/book-a-demo"
                className="rounded-[8px] border border-transparent bg-[#f59a23] px-[14px] pb-[8.34px] pt-[7.5px] text-[12.4px] font-semibold leading-[19.84px] text-[#071a33] transition-opacity hover:opacity-90"
              >
                Book a Demo
              </Link>
              <Link
                href="/request-pilot"
                className="rounded-[8px] border border-[#e3d9c2] px-[14px] pb-[8.34px] pt-[7.5px] text-[12.4px] font-semibold leading-[19.84px] text-[#071a33] transition-opacity hover:opacity-90"
              >
                Request Pilot
              </Link>
            </div>
          </div>
        </div>

        <p className="border-t border-[#e3d9c2] bg-[#f7f3ea] px-[18px] py-[10.5px] text-[11.4px] leading-[18.24px] text-[#8b93a0]">
          Filters appear only when they cover a complete governed dimension. Order is stable or alphabetical, never
          &quot;recommended&quot;.
        </p>
      </div>
    </Block>
  );
}
