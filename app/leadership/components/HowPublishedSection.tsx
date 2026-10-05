import Eyebrow from "./Eyebrow";
import Br from "./Br";
import { NW } from "./tokens";

interface Row {
  element: React.ReactNode;
  source: React.ReactNode;
  missing: React.ReactNode;
}

const ROWS: Row[] = [
  {
    element: "Name",
    source: "An approved identity record.",
    missing: "The profile isn't published.",
  },
  {
    element: "Role title",
    source: (
      <>
        An approved current role record, shown exactly as
        <Br k="m" />
        approved.
      </>
    ),
    missing: "No normalized or inferred title is shown.",
  },
  {
    element: "Entity or product scope",
    source: "An approved relationship or role-scope source.",
    missing: (
      <>
        Omitted, or the profile is held back if omitting it would
        <Br k="m" />
        mislead.
      </>
    ),
  },
  {
    element: "Responsibility summary",
    source: "An approved, owner-authored public statement.",
    missing: "The section is omitted.",
  },
  {
    element: "Biography",
    source: "Approved biography content.",
    missing: "Omitted, never synthesized.",
  },
  {
    element: "Portrait",
    source: "An approved media asset with public-use rights.",
    missing: "The profile is text-only, with no silhouette.",
  },
  {
    element: (
      <>
        Board, founder or
        <Br k="d" />
        committee status
      </>
    ),
    source: "An approved corporate, governance or legal source.",
    missing: "Omitted, never inferred from a title.",
  },
  {
    element: "External links",
    source: "A verified public-link record.",
    missing: "The link is left out.",
  },
];

/* Desktop: a 3-column table row. Mobile: the same cells stacked, with their column labels shown. */
const COLS =
  "lg:grid lg:grid-cols-[170px_minmax(0,1fr)_minmax(0,1fr)] lg:gap-x-[18px] lg:px-[18px]";
const LABEL =
  "min-h-[15.8px] text-[10px] font-bold uppercase leading-[15px] tracking-[0.5px] text-[#8b93a0] lg:hidden";

export default function HowPublishedSection() {
  return (
    <section className="mx-auto flex w-full max-w-[1200px] flex-col gap-7 px-5 pb-[49px] pt-[47px] lg:gap-0 lg:px-8 lg:py-16">
      <div className="flex w-full max-w-[700px] flex-col items-start gap-[10px] pb-[1.2px] pt-[6.91px] lg:pb-0">
        <Eyebrow>Responsibility &amp; Scope Context</Eyebrow>

        <h2
          className={`w-full pt-[2.82px] font-[family-name:var(--font-serif4)] text-[26px] font-semibold leading-[33.28px] tracking-[-0.26px] text-[#071a33] lg:pt-[2.68px] ${NW}`}
        >
          How a profile gets onto this
          <Br k="m" />
          page.
        </h2>

        <p className={`w-full text-[14px] leading-[23.1px] text-[#5c6672] ${NW}`}>
          Every element needs its own approved source. If one is
          <Br k="m" />
          missing, that element is left out rather than filled
          <Br k="d" />
          in.
        </p>
      </div>

      {/* Column labels (desktop only) */}
      <div
        aria-hidden
        className={`${COLS} hidden min-h-[52.8px] items-end pb-[9px] pt-[27px] text-[10.5px] font-bold uppercase leading-[16.8px] tracking-[0.525px] text-[#8b93a0]`}
      >
        <span>Element</span>
        <span>Published only from</span>
        <span>If it&apos;s missing</span>
      </div>

      <ul className="flex w-full flex-col gap-2">
        {ROWS.map((row, i) => (
          <li
            key={i}
            className={`${COLS} flex flex-col items-start gap-2 rounded-[10px] border border-[#e3d9c2] bg-white px-[18px] py-[14px] lg:min-h-[50.8px] lg:items-start lg:gap-y-0 lg:pb-[14px] lg:pt-[13px]`}
          >
            <p className="w-full text-[13px] font-bold leading-[20.8px] text-[#071a33] lg:pt-px">
              {row.element}
            </p>

            <div className="flex w-full flex-col gap-px">
              <p className={LABEL}>Published only from</p>
              <p className={`text-[12.2px] leading-[18.3px] text-[#5c6672] ${NW}`}>{row.source}</p>
            </div>

            <div className="flex w-full flex-col gap-px">
              <p className={LABEL}>If it&apos;s missing</p>
              <p className={`text-[12.2px] leading-[18.3px] text-[#d97f0e] ${NW}`}>{row.missing}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
