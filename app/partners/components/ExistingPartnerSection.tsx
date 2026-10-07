import Link from "next/link";
import Eyebrow from "./Eyebrow";
import Br from "./Br";
import { NW, TABLE_NW } from "./tokens";

const LINK = "font-bold text-[#049783] underline [text-underline-position:from-font]";
const CELL = `border-t border-[#e3d9c2] px-[14px] py-[13px] align-top text-[12.5px] leading-[18.75px] ${TABLE_NW}`;

interface Row {
  situation: React.ReactNode;
  route: React.ReactNode;
}

/* The table is a fixed 641px wide on the phone and scrolls sideways inside its container, so the
   `t` breaks apply below the desktop layout. */
const ROWS: Row[] = [
  {
    situation: "View your public relationship",
    route: "Your canonical partner profile, once published.",
  },
  {
    situation: "Correct a public profile",
    route: (
      <>
        The organization-level route via{" "}
        <Link href="/contact-us" className={LINK}>
          Contact
        </Link>
        . Corrections update the
        <Br k="t" />
        source record, not just the page.
      </>
    ),
  },
  {
    situation: (
      <>
        Contract or procurement
        <Br k="t" />
        coordination
      </>
    ),
    route: (
      <Link href="/procurement-support" className={`${LINK} font-bold`}>
        Procurement Support
      </Link>
    ),
  },
  {
    situation: "Commercial follow-up",
    route: (
      <Link href="/contact-us" className={LINK}>
        Contact Sales
      </Link>
    ),
  },
  {
    situation: (
      <>
        Technical issue or contract
        <Br k="t" />
        question
      </>
    ),
    route: (
      <>
        <Link href="/api-reference" className={LINK}>
          API Reference
        </Link>{" "}
        for contract truth, plus your approved support route.
      </>
    ),
  },
  {
    situation: "Operational support",
    route: (
      <>
        An approved partner support route, only where one is live. Existing
        <Br k="t" />
        users can{" "}
        <Link href="/about" className={LINK}>
          sign in
        </Link>
        .
      </>
    ),
  },
];

export default function ExistingPartnerSection() {
  return (
    <section
      id="existing-partner"
      className="mx-auto flex w-full max-w-[1200px] scroll-mt-24 flex-col gap-[29.99px] px-5 py-[46px] lg:gap-[29.5px] lg:px-8 lg:py-16"
    >
      <div className="flex w-full flex-col items-center gap-12 lg:flex-row lg:justify-center">
        {/* Photo */}
        <div className="relative aspect-[5/4] w-full max-w-[480px] shrink-0 overflow-hidden rounded-[14px] lg:max-w-none lg:min-w-0 lg:flex-1 lg:shrink">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/partners/existing-partner.webp"
            alt=""
            loading="lazy"
            className="pointer-events-none absolute left-[-9.92%] top-0 h-full w-[119.85%] max-w-none"
          />
        </div>

        {/* Copy */}
        <div className="flex w-full flex-col items-start gap-[13.2px] pb-[14px] pt-[6.9px] lg:min-w-0 lg:flex-1 lg:gap-[13.3px]">
          <Eyebrow>Existing Partners</Eyebrow>

          <h2
            className={`w-full font-[family-name:var(--font-serif4)] text-[25px] font-semibold leading-[32px] tracking-[-0.25px] text-[#071a33] ${NW}`}
          >
            You shouldn&apos;t have to fill in a
            <Br k="m" />
            prospect form.
          </h2>

          <p className={`w-full text-[14px] leading-[23.8px] text-[#5c6672] ${NW}`}>
            If you already work with ZoikoLogia™, use the route that
            <Br k="m" />
            matches what you need.
            <Br k="d" />
            We don&apos;t describe a partner
            <Br k="m" />
            portal or a dedicated partner manager, because none
            <Br k="md" />
            has been approved for public mention.
          </p>
        </div>
      </div>

      {/* On the phone the 641px table scrolls sideways inside this wrapper. */}
      <div className="w-full overflow-x-auto">
        <table className="w-[641px] min-w-[640px] table-fixed border-collapse border border-[#e3d9c2] bg-white text-left lg:w-full">
          <colgroup>
            <col className="w-[206.55px] lg:w-[29.95%]" />
            <col />
          </colgroup>
          <thead>
            <tr>
              {["Situation", "Where to go"].map((h) => (
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
                  {r.situation}
                </th>
                <td className={`${CELL} text-[#5c6672]`}>{r.route}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
