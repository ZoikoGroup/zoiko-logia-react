import Link from "next/link";
import Eyebrow from "./Eyebrow";
import Br from "./Br";
import { NW, TABLE_NW } from "./tokens";

const LINK = "font-bold text-[#049783] underline [text-underline-position:from-font]";
const CELL = `border-t border-[#e3d9c2] px-[14px] py-[13px] align-top text-[12.5px] leading-[18.75px] ${TABLE_NW}`;

interface Row {
  need: React.ReactNode;
  use: React.ReactNode;
  warn?: boolean;
}

/* The table is a fixed 661px wide on the phone and scrolls sideways inside its container. */
const ROWS: Row[] = [
  {
    need: (
      <>
        Make a privacy
        <Br k="t" />
        request
      </>
    ),
    use: (
      <>
        <Link href="/privacy-security" className={LINK}>
          Privacy &amp; Security
        </Link>
        , where an approved rights-request route is published.
      </>
    ),
  },
  {
    need: (
      <>
        Report a security
        <Br k="t" />
        vulnerability
      </>
    ),
    use: (
      <>
        The security reporting route owned by{" "}
        <Link href="/privacy-security" className={LINK}>
          Privacy &amp; Security
        </Link>
        .
      </>
    ),
  },
  {
    need: (
      <>
        Give accessibility
        <Br k="t" />
        feedback
      </>
    ),
    use: (
      <Link href="/accessibility" className={LINK}>
        Accessibility
      </Link>
    ),
  },
  {
    need: (
      <>
        Ask about a partner
        <Br k="t" />
        relationship
      </>
    ),
    use: (
      <>
        <Link href="/partner-inquiry" className={LINK}>
          Partner Inquiry
        </Link>
        , or{" "}
        <Link href="/partners" className={LINK}>
          Partners
        </Link>{" "}
        for approved relationship information.
      </>
    ),
  },
  {
    need: (
      <>
        Ask about a customer-
        <Br k="t" tight />
        specific
        <Br k="d" />
        contract
      </>
    ),
    use: (
      <>
        Your approved account route. We don&apos;t interpret customer-specific
        <Br k="t" />
        agreements here.
      </>
    ),
  },
  {
    need: (
      <>
        Send a formal legal
        <Br k="t" />
        notice
      </>
    ),
    use: (
      <>
        No public notice method is published on this page. A contact or sales form is
        <Br k="t" />
        not a formal notice method, and no address is guessed. Use the
        <Br k="d" />
        method
        <Br k="t" />
        stated in the agreement that applies.
      </>
    ),
    warn: true,
  },
  {
    need: "General legal question",
    use: (
      <>
        An owner-approved route only. None is published yet, and we don&apos;t invent
        <Br k="t" />
        one.
      </>
    ),
  },
];

export default function NoticesSection() {
  return (
    <section
      id="legal-notices"
      className="mx-auto flex w-full max-w-[1200px] scroll-mt-24 flex-col gap-7 px-5 py-[46px] lg:gap-[27.51px] lg:px-8 lg:py-16"
    >
      <div className="flex w-full max-w-[720px] flex-col items-start gap-[10px] pt-[6.91px]">
        <Eyebrow>Legal Contact &amp; Formal Notices</Eyebrow>

        <h2
          className={`w-full pt-[2.815px] font-[family-name:var(--font-serif4)] text-[26px] font-semibold leading-[33.28px] tracking-[-0.26px] text-[#071a33] lg:pt-[2.69px] ${NW}`}
        >
          Most questions are answered
          <Br k="m" />
          without a form.
        </h2>

        <p className={`w-full text-[14px] leading-[23.1px] text-[#5c6672] ${NW}`}>
          No general legal contact form is published here, and a
          <Br k="m" />
          formal notice is a different thing from an enquiry.
        </p>
      </div>

      {/* On the phone the 661px table scrolls sideways inside this wrapper. */}
      <div className="w-full overflow-x-auto">
        <table className="w-[661px] min-w-[660px] table-fixed border-collapse border border-[#e3d9c2] bg-white text-left lg:w-full">
          <colgroup>
            <col className="w-[167.52px] lg:w-[20.6%]" />
            <col />
          </colgroup>
          <thead>
            <tr>
              {["If you need to", "Use"].map((h) => (
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
                <td className={`${CELL} ${r.warn ? "text-[#d97f0e]" : "text-[#5c6672]"}`}>{r.use}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
