import Eyebrow from "./Eyebrow";
import ActionLink from "./ActionLink";
import Br from "./Br";
import { NW } from "./tokens";

/** Two-people icon (22×22), stroke #123055. */
function PeopleIcon() {
  return (
    <svg aria-hidden width="22" height="22" viewBox="0 0 22 22" fill="none" className="size-[22px]">
      <path
        d="M7.33 11a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5Z"
        stroke="#123055"
        strokeWidth="1.46667"
      />
      <path
        d="M15.125 11.365a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z"
        stroke="#123055"
        strokeWidth="1.46667"
      />
      <path
        d="M2.29 17.415c0-2.75 2.2-4.583 5.043-4.583s5.043 1.833 5.043 4.583M13.293 17.415c0-1.833 1.1-3.3 2.933-3.666"
        stroke="#123055"
        strokeWidth="1.46667"
      />
    </svg>
  );
}

export default function DirectorySection() {
  return (
    <section
      id="directory"
      className="mx-auto flex w-full max-w-[1200px] scroll-mt-24 flex-col gap-7 px-5 py-[46px] lg:px-8 lg:py-16"
    >
      <div className="flex w-full max-w-[700px] flex-col items-start gap-[12.69px] pt-[6.91px]">
        <Eyebrow>Partner Directory</Eyebrow>
        <h2 className="w-full font-[family-name:var(--font-serif4)] text-[26px] font-semibold leading-[33.28px] tracking-[-0.26px] text-[#071a33]">
          Approved current partners.
        </h2>
      </div>

      <div className="flex w-full flex-col items-center rounded-[16px] border border-dashed border-[#cdbf9f] bg-white px-5 pb-[54px] pt-8 lg:px-9 lg:pb-[66px] lg:pt-11">
        <span className="flex size-12 items-center justify-center rounded-[12px] bg-[#efe8d6]">
          <PeopleIcon />
        </span>

        <h3
          className={`w-full pt-[17.6px] text-center font-[family-name:var(--font-serif4)] text-[22px] font-semibold leading-[35.2px] tracking-[-0.22px] text-[#071a33] ${NW}`}
        >
          No public partner records are
          <Br k="m" />
          currently available
        </h3>

        <p
          className={`w-full max-w-[620px] pt-[9.94px] text-center text-[13.5px] leading-[22.95px] text-[#5c6672] min-[1440px]:max-w-none ${NW}`}
        >
          Partners appear here only once a relationship, its
          <Br k="m" />
          scope and its public-use rights have been
          <Br k="md" />
          approved. Until then there are no search or filter
          <Br k="m" />
          controls to browse, no placeholder logos and no
          <Br k="md" />
          example names, because a blank directory is more
          <Br k="m" />
          honest than an invented one.
        </p>

        <div className="flex w-full flex-wrap items-start justify-center gap-[10px] pt-[22.5px]">
          <ActionLink href="#partner-inquiry" variant="primary">
            Explore a partnership
          </ActionLink>
          <ActionLink href="/contact-sales" variant="outline">
            Contact Sales
          </ActionLink>
          <span className="contents lg:hidden">
            <ActionLink href="/compliance" variant="outline">
              Trust
            </ActionLink>
          </span>
        </div>

        <p
          className={`w-full max-w-[620px] text-center text-[13.5px] leading-[22.95px] text-[#5c6672] min-[1440px]:max-w-none ${NW}`}
        >
          This describes publication status. It isn&apos;t a
          <Br k="m" />
          statement about whether ZoikoLogia™ works with
          <Br k="md" />
          other organizations.
        </p>
      </div>
    </section>
  );
}
