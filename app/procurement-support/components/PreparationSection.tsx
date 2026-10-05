import Eyebrow from "./Eyebrow";
import Br from "./Br";
import ResponsiveImage from "./ResponsiveImage";
import { NW } from "./tokens";

const DO_INCLUDE: React.ReactNode[] = [
  "Your organization and a reply email",
  <>
    The process question or
    <Br k="d" />
    coordination point
  </>,
  <>
    An optional target date, if it truly
    <Br k="d" />
    affects coordination
  </>,
  <>
    A public-safe Provider Due
    <Br k="d" />
    Diligence, Trust or
    <Br k="m" />
    technical record
    <Br k="d" />
    link, if your question relates to one
  </>,
  <>
    The next step you&apos;re trying to
    <Br k="d" />
    complete
  </>,
];

const DONT_INCLUDE: React.ReactNode[] = [
  <>
    Passwords, credentials, payment-
    <Br k="d" tight />
    card or bank details,
    <Br k="m" />
    or access
    <Br k="d" />
    tokens
  </>,
  <>
    Tax IDs, government identifiers or
    <Br k="d" />
    unnecessary
    <Br k="m" />
    financial records
  </>,
  <>
    Customer, employee, payroll,
    <Br k="d" />
    regulated or production
    <Br k="m" />
    data
  </>,
  <>
    Full confidential contracts, NDAs,
    <Br k="d" />
    security reports or
    <Br k="m" />
    supplier packets
  </>,
  <>
    Internal CRM, opportunity, ticket or
    <Br k="d" />
    contract IDs
  </>,
];

const HEADING =
  "w-full pb-[0.59px] text-[11px] font-bold uppercase leading-[17.6px] tracking-[0.66px]";
const ITEM = `relative w-full pb-[0.66px] pl-4 text-[12.3px] leading-[18.45px] text-[#123055] ${NW}`;

export default function PreparationSection() {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-5 py-[46px] lg:px-8 lg:py-16">
      <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-center">
        <div className="relative h-[297.59px] w-full max-w-[480px] shrink-0 overflow-clip rounded-[14px] lg:h-[435.19px] lg:w-auto lg:min-w-0 lg:max-w-none lg:flex-1">
          <ResponsiveImage
            mobile="/procurement-support/preparation-mobile.webp"
            desktop="/procurement-support/preparation-desktop.webp"
            alt="Colleagues preparing a clear, safe request"
            sizes="(min-width: 1440px) 544px, (min-width: 1024px) 45vw, (max-width: 520px) 100vw, 480px"
          />
        </div>

        <div className="flex w-full flex-col items-start gap-[13.3px] pt-[6.91px] lg:min-w-0 lg:flex-1 lg:gap-[13.4px]">
          <Eyebrow>Before You Request</Eyebrow>

          <h2
            className={`w-full font-[family-name:var(--font-serif4)] text-[25px] font-semibold leading-[32px] tracking-[-0.25px] text-[#071a33] ${NW}`}
          >
            A good request is short, specific
            <Br k="m" />
            and safe.
          </h2>

          <p className={`w-full text-[14px] leading-[23.8px] text-[#5c6672] ${NW}`}>
            This is a public form for routing a process question. It is
            <Br k="m" />
            not a document
            <Br k="d" />
            repository, so keep sensitive material
            <Br k="m" />
            out of it.
          </p>

          <div className="flex w-full flex-col items-stretch gap-4 pt-[0.7px] lg:flex-row lg:items-start lg:justify-center lg:pt-[0.6px]">
            <div className="flex min-w-0 flex-col items-start gap-[9px] rounded-[12px] border border-[#e3d9c2] bg-white px-[18px] pb-6 pt-[15px] lg:flex-1 lg:pb-[42.43px]">
              <h3 className={`${HEADING} text-[#049783]`}>Do include</h3>
              <ul className="flex w-full flex-col gap-[7px]">
                {DO_INCLUDE.map((item, i) => (
                  <li key={i} className={ITEM}>
                    <span
                      aria-hidden
                      className="absolute left-0 top-[9px] size-[6px] rounded-[3px] bg-[#049783]"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex min-w-0 flex-col items-start gap-[9px] rounded-[12px] border border-[#e3d9c2] bg-white px-[18px] pb-6 pt-[15px] lg:flex-1">
              <h3 className={`${HEADING} text-[#b23a27]`}>Don&apos;t include</h3>
              <ul className="flex w-full flex-col gap-[7px]">
                {DONT_INCLUDE.map((item, i) => (
                  <li key={i} className={ITEM}>
                    <span
                      aria-hidden
                      className="absolute left-0 top-0 w-[9.2px] text-[13px] font-bold leading-[19.5px] text-[#b23a27]"
                    >
                      ×
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
