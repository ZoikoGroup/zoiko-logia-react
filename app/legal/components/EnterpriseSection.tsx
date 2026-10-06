import Link from "next/link";
import Eyebrow from "./Eyebrow";
import Br from "./Br";
import { NW, TABLE_NW } from "./tokens";

const LINK = "font-bold text-[#049783] underline [text-underline-position:from-font]";
const CELL = `border-t border-[#e3d9c2] px-[14px] py-[13px] align-top text-[12.5px] leading-[18.75px] ${TABLE_NW}`;

interface Row {
  need: React.ReactNode;
  goes: React.ReactNode;
  role: React.ReactNode;
}

/* The table is a fixed 661px wide on the phone and scrolls sideways inside its container. */
const ROWS: Row[] = [
  {
    need: (
      <>
        General commercial
        <Br k="t" />
        coordination
      </>
    ),
    goes: (
      <Link href="/contact-sales" className={LINK}>
        Contact Sales
      </Link>
    ),
    role: (
      <>
        No price, quote, discount or negotiation
        <Br k="t" />
        promise.
      </>
    ),
  },
  {
    need: (
      <>
        Procurement process and
        <Br k="t" />
        forms
      </>
    ),
    goes: (
      <Link href="/procurement-support" className={LINK}>
        Procurement Support
      </Link>
    ),
    role: (
      <>
        Documents can be linked. The process
        <Br k="t" />
        stays with procurement.
      </>
    ),
  },
  {
    need: (
      <>
        Provider evidence or a
        <Br k="t" />
        questionnaire
      </>
    ),
    goes: (
      <Link href="/buyers-brief" className={LINK}>
        Provider Due Diligence
      </Link>
    ),
    role: "No evidence is duplicated here.",
  },
  {
    need: "Broader evaluation",
    goes: (
      <Link href="/request-enterprise-briefing" className={LINK}>
        Request Enterprise
        <Br k="t" />
        Briefing
      </Link>
    ),
    role: (
      <>
        No executive or legal attendee is
        <Br k="t" />
        promised.
      </>
    ),
  },
  {
    need: "Product discovery",
    goes: (
      <Link href="/book-a-demo" className={LINK}>
        Book a Demo
      </Link>
    ),
    role: "No legal gating.",
  },
  {
    need: (
      <>
        Structured workflow
        <Br k="t" />
        evaluation
      </>
    ),
    goes: (
      <Link href="/request-pilot" className={LINK}>
        Request Pilot
      </Link>
    ),
    role: "No legal approval is inferred.",
  },
  {
    need: "Existing customer",
    goes: (
      <>
        <Link href="/about" className={LINK}>
          Sign in
        </Link>{" "}
        or your approved
        <Br k="t" />
        account route
      </>
    ),
    role: (
      <>
        No promise that legal documents or status
        <Br k="t" />
        exist inside the product.
      </>
    ),
  },
];

export default function EnterpriseSection() {
  return (
    <section className="border-t border-[#e3d9c2] bg-[#efe8d6]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-[30px] px-5 py-[46px] lg:gap-[29.5px] lg:px-8 lg:py-16">
        <div className="flex w-full flex-col items-center gap-12 lg:flex-row lg:justify-center">
          {/* Photo (the same file in both Figma frames) */}
          <div className="relative aspect-[5/4] w-full max-w-[480px] shrink-0 overflow-hidden rounded-[14px] lg:max-w-none lg:min-w-0 lg:flex-1 lg:shrink">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/legal/enterprise.webp"
              alt=""
              loading="lazy"
              className="pointer-events-none absolute inset-0 size-full object-cover"
            />
          </div>

          <div className="flex w-full flex-col items-start gap-[13.4px] pb-[14px] pt-[6.91px] lg:min-w-0 lg:flex-1 lg:gap-[13.7px] lg:pt-[6.9px]">
            <Eyebrow>Enterprise, Procurement &amp; Commercial</Eyebrow>

            <h2
              className={`w-full font-[family-name:var(--font-serif4)] text-[25px] font-semibold leading-[32px] tracking-[-0.25px] text-[#071a33] ${NW}`}
            >
              Legal documents stay self-
              <Br k="m" tight />
              service. Business
              <Br k="d" />
              workflows stay
              <Br k="m" />
              separate.
            </h2>

            <p className={`w-full text-[14px] leading-[23.8px] text-[#5c6672] ${NW}`}>
              You can read what&apos;s published here without a call, a
              <Br k="m" />
              form or a sales conversation.
            </p>
          </div>
        </div>

        {/* On the phone the 661px table scrolls sideways inside this wrapper. */}
        <div className="w-full overflow-x-auto">
          <table className="w-[661px] min-w-[660px] table-fixed border-collapse border border-[#e3d9c2] bg-white text-left lg:w-full">
            <colgroup>
              <col className="w-[188.75px] lg:w-[27%]" />
              <col className="w-[190.31px] lg:w-[27.8%]" />
              <col />
            </colgroup>
            <thead>
              <tr>
                {["Need", "Where it goes", "Legal's role"].map((h) => (
                  <th
                    key={h}
                    className="bg-[#efe8d6] px-[14px] py-3 font-[family-name:var(--font-serif4)] text-[12.6px] font-bold leading-[20.16px] text-[#071a33] whitespace-nowrap"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r, i) => (
                <tr key={i}>
                  <th scope="row" className={`${CELL} font-bold text-[#123055]`}>
                    {r.need}
                  </th>
                  <td className={`${CELL} text-[#5c6672]`}>{r.goes}</td>
                  <td className={`${CELL} text-[#5c6672]`}>{r.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
