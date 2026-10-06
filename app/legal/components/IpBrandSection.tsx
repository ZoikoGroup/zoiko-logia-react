import Link from "next/link";
import Eyebrow from "./Eyebrow";
import Br from "./Br";
import { NW, TABLE_NW } from "./tokens";

const LINK = "font-bold text-[#049783] underline [text-underline-position:from-font]";
const CELL = `border-t border-[#e3d9c2] px-[14px] py-[13px] align-top text-[12.5px] leading-[18.75px] ${TABLE_NW}`;

interface Row {
  need: React.ReactNode;
  rule: React.ReactNode;
  /** Orange text marks a rule that warns rather than permits. */
  warn?: boolean;
}

/* The table is a fixed 661px wide on the phone and scrolls sideways inside its container, so its
   `t` breaks apply below the desktop layout and `d` breaks only at the 1440px frame. */
const ROWS: Row[] = [
  {
    need: (
      <>
        Use the ZoikoLogia™
        <Br k="t" />
        name or logo
      </>
    ),
    rule: (
      <>
        Only under approved trademark or brand rules, once they&apos;re published. No
        <Br k="t" />
        such guidelines are published today, so this page grants no
        <Br k="d" />
        permission.
      </>
    ),
  },
  {
    need: (
      <>
        Download a brand
        <Br k="t" />
        asset
      </>
    ),
    rule: (
      <>
        Asset availability is separate from usage permission. A download, such as
        <Br k="t" />
        one from{" "}
        <Link href="/press-media" className={LINK}>
          Press &amp; Media
        </Link>
        , doesn&apos;t grant a right to use it.
      </>
    ),
  },
  {
    need: (
      <>
        Represent ZoikoLogia™
        <Br k="t" />
        as a partner
      </>
    ),
    rule: (
      <>
        Partner status or a listing never grants agency, endorsement, resale or
        <Br k="t" />
        representation rights. See{" "}
        <Link href="/partners" className={LINK}>
          Partners
        </Link>
        .
      </>
    ),
    warn: true,
  },
  {
    need: "Trademark symbols",
    rule: (
      <>
        The ™ shown on this site follows the brand system. We don&apos;t imply
        <Br k="t" />
        registration status (®) beyond it.
      </>
    ),
  },
  {
    need: "Request permission",
    rule: (
      <>
        Only through an approved legal or brand route, if one is published. No
        <Br k="t" />
        response time or approval is promised.
      </>
    ),
  },
  {
    need: (
      <>
        Open-source and third-
        <Br k="t" tight />
        party
        <Br k="d" />
        notices
      </>
    ),
    rule: (
      <>
        Linked from their source-controlled records when published. Obligations are
        <Br k="t" />
        not summarized casually, and external content never implies
        <Br k="d" />
        endorsement.
      </>
    ),
  },
];

export default function IpBrandSection() {
  return (
    <section
      id="legal-brand"
      className="mx-auto flex w-full max-w-[1200px] scroll-mt-24 flex-col gap-7 px-5 py-[46px] lg:gap-[27.49px] lg:px-8 lg:py-16"
    >
      <div className="flex w-full max-w-[720px] flex-col items-start gap-[10px] pt-[6.9px]">
        <Eyebrow>IP, Brand &amp; Third-Party Materials</Eyebrow>

        <h2
          className={`w-full pt-[2.815px] font-[family-name:var(--font-serif4)] text-[26px] font-semibold leading-[33.28px] tracking-[-0.26px] text-[#071a33] lg:pt-[2.69px] ${NW}`}
        >
          Having an asset is not the same
          <Br k="m" />
          as having permission to use it.
        </h2>

        <p className={`w-full text-[14px] leading-[23.1px] text-[#5c6672] ${NW}`}>
          No trademark guidelines or permission process are
          <Br k="m" />
          published here yet. These are the rules that apply in the
          <Br k="md" />
          meantime.
        </p>
      </div>

      {/* On the phone the 661px table scrolls sideways inside this wrapper. */}
      <div className="w-full overflow-x-auto">
        <table className="w-[661px] min-w-[660px] table-fixed border-collapse border border-[#e3d9c2] bg-white text-left lg:w-full">
          <colgroup>
            <col className="w-[172.5px] lg:w-[21.7%]" />
            <col />
          </colgroup>
          <thead>
            <tr>
              {["Need", "The rule"].map((h) => (
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
                <td className={`${CELL} ${r.warn ? "text-[#d97f0e]" : "text-[#5c6672]"}`}>{r.rule}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
