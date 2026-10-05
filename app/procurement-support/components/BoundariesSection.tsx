import Link from "next/link";
import Eyebrow from "./Eyebrow";
import Br from "./Br";
import { NW, TABLE_NW } from "./tokens";

const LINK = "font-bold text-[#049783] underline [text-underline-position:from-font]";

interface Row {
  need: React.ReactNode;
  here: React.ReactNode;
  goesTo: React.ReactNode;
  /** Row height classes matching the Figma frames (mobile, then desktop). */
  height: string;
}

/* The table is a fixed 661px wide on the phone and scrolls sideways inside its container, so its
   `t` breaks are unconditional below the desktop layout; `td` also applies on the 1440px frame. */
const ROWS: Row[] = [
  {
    need: "General buying question",
    here: (
      <>
        Routed out before a request is
        <Br k="t" />
        created.
      </>
    ),
    goesTo: (
      <Link href="/contact-us" className={LINK}>
        Contact Sales
      </Link>
    ),
    height: "h-[65px] lg:h-[45.75px]",
  },
  {
    need: (
      <>
        Pricing, packages,
        <Br k="t" />
        discounts, quotes
      </>
    ),
    here: "Not answered or collected here.",
    goesTo: (
      <Link href="/contact-us" className={LINK}>
        Contact Sales
      </Link>
    ),
    height: "h-[65px] lg:h-[45.75px]",
  },
  {
    need: (
      <>
        Evidence or
        <Br k="t" />
        questionnaire
      </>
    ),
    here: (
      <>
        Not answered here. Neither
        <Br k="t" />
        page duplicates evidence.
      </>
    ),
    goesTo: (
      <Link href="/buyers-brief" className={LINK}>
        Provider Due Diligence
      </Link>
    ),
    height: "h-[65px] lg:h-[45.75px]",
  },
  {
    need: "Renewal or expansion",
    here: "Not owned here.",
    goesTo: (
      <>
        Your approved commercial or
        <Br k="t" />
        customer owner. Existing users can
        <Br k="td" />
        <Link href="/about" className={LINK}>
          sign in
        </Link>
        .
      </>
    ),
    height: "h-[83.3px] lg:h-[64.5px]",
  },
  {
    need: (
      <>
        Legal information or
        <Br k="t" />
        contract
        <Br k="d" />
        interpretation
      </>
    ),
    here: (
      <>
        No legal advice or interpretation.
        <Br k="t" />
        Process coordination
        <Br k="d" />
        only.
      </>
    ),
    goesTo: "Legal (pending approval)",
    height: "h-[65px] lg:h-[64.5px]",
  },
  {
    need: (
      <>
        Partner or ecosystem
        <Br k="t" />
        enquiry
      </>
    ),
    here: "Not accepted here.",
    goesTo: "Partner Inquiry (pending approval)",
    height: "h-[65px] lg:h-[45.75px]",
  },
  {
    need: "Product support or billing",
    here: "Not a support fallback.",
    goesTo: (
      <>
        Your approved support route, or sign
        <Br k="t" />
        in
      </>
    ),
    height: "h-[65px] lg:h-[45.75px]",
  },
];

export default function BoundariesSection() {
  return (
    <section className="border-t border-[#e3d9c2] bg-[#efe8d6] py-[46px] lg:px-[120px] lg:py-16">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-[27.99px] px-5 lg:gap-[27.49px] lg:px-8">
        <div className="flex w-full max-w-[700px] flex-col items-start gap-[10px] pb-[1.2px] pt-[6.9px] lg:pb-0">
          <Eyebrow>Commercial, Legal &amp; Partner Boundaries</Eyebrow>

          <h2
            className={`w-full pt-[2.825px] font-[family-name:var(--font-serif4)] text-[26px] font-semibold leading-[33.28px] tracking-[-0.26px] text-[#071a33] lg:pt-[2.69px] ${NW}`}
          >
            Adjacent needs, and where they
            <Br k="m" />
            go instead.
          </h2>

          <p className={`w-full text-[14px] leading-[23.1px] text-[#5c6672] ${NW}`}>
            A procurement visitor isn&apos;t automatically a sales lead. A
            <Br k="m" />
            commercial conversation starts only when you
            <Br k="d" />
            choose
            <Br k="m" />
            it.
          </p>
        </div>

        {/* On the phone the 661px table scrolls sideways inside this wrapper. */}
        <div className="w-full overflow-x-auto">
          <table className="w-[661px] min-w-[660px] table-fixed border-collapse border border-[#e3d9c2] bg-white text-left lg:w-full">
            <colgroup>
              <col className="w-[187.13px] lg:w-[291.8px]" />
              <col className="w-[222.92px] lg:w-[380.63px]" />
              <col />
            </colgroup>
            <thead>
              <tr className="h-[45px]">
                {["Need", "Here", "Goes to"].map((h) => (
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
              {ROWS.map((row, i) => (
                <tr key={i} className={row.height}>
                  <th
                    scope="row"
                    className={`border-t border-[#e3d9c2] px-[14px] py-[13px] align-top text-[12.5px] font-bold leading-[18.75px] text-[#123055] ${TABLE_NW}`}
                  >
                    {row.need}
                  </th>
                  <td
                    className={`border-t border-[#e3d9c2] px-[14px] py-[13px] align-top text-[12.5px] leading-[18.75px] text-[#5c6672] ${TABLE_NW}`}
                  >
                    {row.here}
                  </td>
                  <td
                    className={`border-t border-[#e3d9c2] px-[14px] py-[13px] align-top text-[12.5px] leading-[18.75px] text-[#5c6672] ${TABLE_NW}`}
                  >
                    {row.goesTo}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
