import Link from "next/link";
import Eyebrow from "./Eyebrow";
import Br from "./Br";
import { NW } from "./tokens";

const STATES = [
  {
    title: "Current",
    text: (
      <>
        Shown with its effective date where the source provides
        <Br k="md" />
        one.
      </>
    ),
  },
  { title: "Scheduled", text: "Not yet effective, with the future date shown prominently." },
  { title: "Superseded", text: "Kept reachable, with the verified current replacement first." },
  { title: "Withdrawn", text: "Marked unavailable, with a replacement if one is mapped." },
  { title: "Request required", text: "Controlled access is explained. No entitlement is promised." },
  {
    title: "Source unavailable",
    text: (
      <>
        A temporary authority-source issue. &quot;Current&quot; is never
        <Br k="md" />
        asserted.
      </>
    ),
  },
];

const BTN =
  "flex items-center justify-center rounded-[6px] border px-5 pb-[11.59px] pt-[10px] text-center text-[13.5px] font-semibold leading-[21.6px] whitespace-nowrap text-[#071a33] transition-opacity hover:opacity-90";

/** Document-with-lines icon (22×22). */
function DocumentIcon() {
  return (
    <svg aria-hidden width="22" height="22" viewBox="0 0 22 22" fill="none" className="size-[22px]">
      <path d="M6.418 2.75h6.416l3.667 3.667V19.25H6.418V2.75Z" stroke="#123055" strokeWidth="1.46667" />
      <path
        d="M12.835 2.75v3.667h3.666M9.168 11h5.5M9.168 14.667h5.5"
        stroke="#123055"
        strokeWidth="1.46667"
      />
    </svg>
  );
}

export default function DocumentsSection() {
  return (
    <section id="legal-documents" className="scroll-mt-24 bg-[#efe8d6]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-[22px] px-5 py-[46px] lg:px-8 lg:py-16">
        <div className="flex w-full max-w-[720px] flex-col items-start gap-[12.69px] pt-[6.91px]">
          <Eyebrow>Current Legal Documents</Eyebrow>
          <h2 className="w-full font-[family-name:var(--font-serif4)] text-[26px] font-semibold leading-[33.28px] tracking-[-0.26px] text-[#071a33]">
            Registry-backed records only.
          </h2>
        </div>

        <div className="flex w-full flex-col items-center rounded-[16px] border border-dashed border-[#cdbf9f] bg-white px-5 pb-[54px] pt-[38px] lg:px-9 lg:pb-[66px] lg:pt-[50px]">
          <span className="flex size-12 items-center justify-center rounded-[12px] bg-[#efe8d6]">
            <DocumentIcon />
          </span>

          <h3
            className={`w-full pt-[17.6px] text-center font-[family-name:var(--font-serif4)] text-[22px] font-semibold leading-[35.2px] tracking-[-0.22px] text-[#071a33] ${NW}`}
          >
            No legal documents are currently
            <Br k="m" />
            published in this directory
          </h3>

          <p
            className={`w-full max-w-[640px] pt-[9.94px] text-center text-[13.5px] leading-[22.95px] text-[#5c6672] min-[1440px]:max-w-none ${NW}`}
          >
            A document appears here only when its exact title,
            <Br k="m" />
            state, scope and canonical location have been
            <Br k="md" />
            approved. Until then there are no sample cards, no
            <Br k="m" />
            placeholder titles and no document that merely
            <Br k="md" />
            looks live, because an empty directory is more
            <Br k="m" />
            honest than a convincing fake one.
          </p>

          <div className="flex w-full flex-wrap items-start justify-center gap-[10px] pt-[22.5px]">
            <Link href="/privacy-security" className={`${BTN} border-transparent bg-[#f59a23]`}>
              Privacy &amp; Security
            </Link>
            <Link href="/cookie-preferences" className={`${BTN} border-[#e3d9c2]`}>
              Manage cookie preferences
            </Link>
            <Link href="/compliance" className={`${BTN} border-[#e3d9c2]`}>
              Trust
            </Link>
          </div>

          <p
            className={`w-full max-w-[640px] text-center text-[13.5px] leading-[22.95px] text-[#5c6672] min-[1440px]:max-w-none ${NW}`}
          >
            This describes publication status only. It isn&apos;t a
            <Br k="m" />
            statement about which agreements exist or govern
            <Br k="md" />
            your use.
          </p>
        </div>

        <ul className="grid w-full grid-cols-1 gap-3 md:grid-cols-2 lg:auto-rows-[104.33px] lg:grid-cols-3">
          {STATES.map((s) => (
            <li key={s.title} className="flex flex-col gap-2 rounded-[10px] border border-[#e3d9c2] bg-white px-4 pb-[16.6px] pt-[13px]">
              <p className="text-[12.6px] font-bold leading-[20.16px] text-[#071a33]">{s.title}</p>
              <p className={`text-[11.8px] leading-[17.7px] text-[#5c6672] ${NW}`}>{s.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
