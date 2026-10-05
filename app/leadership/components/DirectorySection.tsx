import Image from "next/image";
import Link from "next/link";
import Eyebrow from "./Eyebrow";
import ActionLink from "./ActionLink";
import Br from "./Br";
import { NW } from "./tokens";

const PILL =
  "flex flex-col items-center rounded-[20px] border bg-[#f7f3ea] px-[14px] py-[6px] text-[12px] leading-[19.2px] whitespace-nowrap";

export default function DirectorySection() {
  return (
    <section
      id="leadership-directory"
      className="scroll-mt-20 border-t border-[#e3d9c2] bg-[#efe8d6] py-[46px] lg:scroll-mt-24 lg:px-[120px] lg:py-16"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-7 px-5 lg:gap-[27.99px] lg:px-8">
        <div className="flex w-full max-w-[700px] flex-col items-start gap-[12.69px] pt-[6.9px]">
          <Eyebrow>Leadership Directory</Eyebrow>
          <h2 className="w-full font-[family-name:var(--font-serif4)] text-[26px] font-semibold leading-[33.28px] tracking-[-0.26px] text-[#071a33]">
            Current approved profiles.
          </h2>
        </div>

        <div className="flex w-full flex-col items-center rounded-[16px] border border-dashed border-[#cdbf9f] bg-white px-5 pb-[54px] pt-8 lg:px-9 lg:pb-[65.99px] lg:pt-11">
          <div className="flex size-12 items-center justify-center rounded-[12px] bg-[#efe8d6]">
            <span className="relative block size-[22px]">
              <Image
                src="/leadership/directory-empty-icon.svg"
                alt=""
                fill
                unoptimized
                className="block"
              />
            </span>
          </div>

          <h3
            className={`flex w-full flex-col items-center pt-[17.7px] text-center font-[family-name:var(--font-serif4)] text-[22px] font-semibold leading-[35.2px] tracking-[-0.22px] text-[#071a33] lg:pt-[17.5px] ${NW}`}
          >
            <span>
              No leadership profiles are
              <Br k="m" />
              currently published
            </span>
          </h3>

          <p
            className={`w-full max-w-[600px] pt-[9.94px] text-center text-[13.5px] leading-[22.95px] text-[#5c6672] ${NW}`}
          >
            Profiles appear here only after a person&apos;s identity,
            <Br k="m" />
            current title, scope and public-use
            <Br k="d" />
            approval are
            <Br k="m" />
            confirmed. Until then, there are no placeholder
            <Br k="m" />
            cards, silhouettes or sample
            <Br k="d" />
            names, because an
            <Br k="m" />
            empty directory is more honest than an invented
            <Br k="m" />
            one.
          </p>

          <div className="flex w-full flex-wrap items-start justify-center gap-[10px] pb-[22.6px] pt-[22.6px] lg:min-h-[90.6px]">
            <ActionLink href="/governance" variant="primary">
              Governance
            </ActionLink>
            <ActionLink href="/compliance" variant="outline">
              Trust
            </ActionLink>
            <ActionLink href="/contact-us" variant="outline">
              Contact Sales
            </ActionLink>
          </div>

          <div className="flex w-full flex-wrap items-start justify-center gap-2 border-t border-[#e3d9c2] pt-5 lg:min-h-[55px]">
            <Link href="/platform" className={`${PILL} border-[#e3d9c2] font-semibold text-[#123055]`}>
              Workflow Mode
            </Link>
            <Link href="/platform" className={`${PILL} border-[#e3d9c2] font-semibold text-[#123055]`}>
              Review Mode
            </Link>
            <Link href="/book-a-demo" className={`${PILL} border-[#e3d9c2] font-semibold text-[#123055]`}>
              Request Enterprise Briefing
            </Link>
            <span className={`${PILL} border-dashed border-[#e3d9c2] font-medium text-[#8b93a0]`}>
              Partner Inquiry · pending approval
            </span>
          </div>

          <p
            className={`w-full max-w-[600px] text-center text-[13.5px] leading-[22.95px] text-[#5c6672] ${NW}`}
          >
            This is a statement about publication status. It is
            <Br k="m" />
            not a statement about who does or doesn&apos;t
            <Br k="d" />
            lead the
            <Br k="m" />
            company.
          </p>
        </div>
      </div>
    </section>
  );
}
