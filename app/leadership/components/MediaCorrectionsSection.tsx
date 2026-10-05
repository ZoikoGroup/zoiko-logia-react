import Link from "next/link";
import Eyebrow from "./Eyebrow";
import Br from "./Br";
import { NW, TABLE_NW } from "./tokens";

const INLINE_LINK = "font-bold text-[#049783] underline [text-underline-position:from-font]";

interface Row {
  need: React.ReactNode;
  what: React.ReactNode;
  /** Row height classes (mobile, then desktop) matching the Figma frames. */
  height: string;
}

const ROWS: Row[] = [
  {
    need: (
      <>
        Correct name or title
        <Br k="t" />
        for
        <Br k="d" />
        attribution
      </>
    ),
    what: "The canonical profile is the source, once one is published and current.",
    height: "h-[65px]",
  },
  {
    need: "Approved biography",
    what: "Only the visible profile biography. There is no hidden press-only version.",
    height: "h-[46px]",
  },
  {
    need: (
      <>
        Interview or comment
        <Br k="t" />
        request
      </>
    ),
    what: (
      <>
        Use the organization-level route in{" "}
        <Link href="/press-media" className={INLINE_LINK}>
          Press &amp; Media
        </Link>
        . Personal email and
        <Br k="t" />
        phone numbers are not shown. A profile existing doesn&apos;t imply interview
        <Br k="td" />
        availability.
      </>
    ),
    height: "h-[83.3px] lg:h-[65px]",
  },
  {
    need: (
      <>
        Portrait or media
        <Br k="t" />
        asset
      </>
    ),
    what: "No download is offered unless a rights-approved media resource exists.",
    height: "h-[65px] lg:h-[46px]",
  },
  {
    need: "Quotes",
    what: "Only an exact approved quote, with its context and rights.",
    height: "h-[46px]",
  },
  {
    need: "Corrections",
    what: (
      <>
        Raised through the organization-level route. Corrections update the source
        <Br k="t" />
        record, not just the page copy.
      </>
    ),
    height: "h-[65px] lg:h-[46px]",
  },
];

export default function MediaCorrectionsSection() {
  return (
    <section className="border-t border-[#e3d9c2] bg-[#efe8d6] py-[46px] lg:px-[120px] lg:py-16">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-7 px-5 lg:gap-[27.5px] lg:px-8">
        <div className="flex w-full max-w-[700px] flex-col items-start gap-[10px] pb-[1.1px] pt-[6.91px] lg:pb-0">
          <Eyebrow>Media &amp; Analyst Boundary</Eyebrow>

          <h2
            className={`w-full pt-[2.82px] font-[family-name:var(--font-serif4)] text-[26px] font-semibold leading-[33.28px] tracking-[-0.26px] text-[#071a33] lg:pt-[2.69px] ${NW}`}
          >
            Getting names and titles right in
            <Br k="m" />
            print.
          </h2>

          <p className={`w-full text-[14px] leading-[23.1px] text-[#5c6672] ${NW}`}>
            When profiles are published, the profile itself is the
            <Br k="m" />
            source for attribution. For organization-level media
            <Br k="md" />
            needs, use{" "}
            <Link href="/press-media" className={INLINE_LINK}>
              Press &amp; Media
            </Link>
            .
          </p>
        </div>

        {/* On the phone the 641px table scrolls sideways inside this wrapper. */}
        <div className="w-full overflow-x-auto">
          <table className="w-[641px] min-w-[640px] table-fixed border-collapse border border-[#e3d9c2] bg-white text-left lg:w-full">
            <colgroup>
              <col className="w-[162.86px] lg:w-[234.52px]" />
              <col />
            </colgroup>
            <thead>
              <tr className="h-[45px]">
                <th className="bg-[#efe8d6] px-[14px] py-3 font-[family-name:var(--font-serif4)] text-[12.6px] font-bold leading-[20.16px] text-[#071a33] whitespace-nowrap">
                  Need
                </th>
                <th className="bg-[#efe8d6] px-[14px] py-3 font-[family-name:var(--font-serif4)] text-[12.6px] font-bold leading-[20.16px] text-[#071a33] whitespace-nowrap">
                  What happens
                </th>
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
                    {row.what}
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
