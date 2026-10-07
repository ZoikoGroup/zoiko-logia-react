import Link from "next/link";
import Eyebrow from "./Eyebrow";
import Br from "./Br";
import { NW } from "./tokens";

interface Row {
  element: React.ReactNode;
  shown: React.ReactNode;
  never: React.ReactNode;
}

const ROWS: Row[] = [
  {
    element: "Identity & relationship",
    shown: (
      <>
        The partner&apos;s name and relationship type are approved
        <Br k="m" />
        for public use.
      </>
    ),
    never: (
      <>
        Certification, authorization, or &quot;official&quot; or &quot;preferred&quot;
        <Br k="m" />
        status.
      </>
    ),
  },
  {
    element: "Capabilities & scope",
    shown: (
      <>
        Capability labels are mapped to this relationship
        <Br k="m" />
        specifically.
      </>
    ),
    never: <>The partner&apos;s, or ZoikoLogia™&apos;s, full capability.</>,
  },
  {
    element: "Integration & technical context",
    shown: (
      <>
        The technical registry approves exact wording, linked to
        <Br k="m" />
        <Link
          href="/api-reference"
          className="font-bold text-[#049783] underline [text-underline-position:from-font]"
        >
          API Reference
        </Link>
        .
      </>
    ),
    never: (
      <>
        Endpoints, compatibility, versions or access from a
        <Br k="m" />
        relationship alone.
      </>
    ),
  },
  {
    element: (
      <>
        Implementation &amp;
        <Br k="d" />
        accountability
      </>
    ),
    shown: (
      <>
        Responsibilities for ZoikoLogia™, the partner and, if
        <Br k="m" />
        relevant, the
        <Br k="d" />
        customer are approved.
      </>
    ),
    never: <>Support SLAs, deal terms or outcomes.</>,
  },
  {
    element: "Geography & availability",
    shown: <>Regions, countries or languages are explicitly sourced.</>,
    never: (
      <>
        &quot;Global&quot; coverage, or anything from an office location or
        <Br k="m" />
        website
        <Br k="d" />
        language.
      </>
    ),
  },
  {
    element: "Proof & currentness",
    shown: (
      <>
        A review or effective date exists, plus any rights-
        <Br k="m" tight />
        approved proof with its
        <Br k="d" />
        scope and date.
      </>
    ),
    never: (
      <>
        Customer outcomes, metrics or quotes without
        <Br k="m" />
        definitions, dates and
        <Br k="d" />
        rights.
      </>
    ),
  },
];

const LABEL = "text-[10px] font-bold uppercase leading-[15.5px] tracking-[0.5px] text-[#8b93a0] lg:hidden";
const HEAD =
  "text-[10.5px] font-bold uppercase leading-[16.8px] tracking-[0.525px] text-[#8b93a0] pb-[0.8px]";
const GRID = "lg:grid lg:grid-cols-[200px_minmax(0,1fr)_minmax(0,1fr)] lg:gap-[18px] lg:px-5";

export default function RecordSection() {
  return (
    <section className="border-t border-[#e3d9c2] bg-[#efe8d6]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-7 px-5 py-[46px] lg:px-8 lg:py-16">
        <div className="flex w-full max-w-[700px] flex-col items-start gap-[10px] pt-[6.91px]">
          <Eyebrow>Inside a Partner Profile</Eyebrow>

          <h2
            className={`w-full pb-[0.535px] pt-[2.945px] font-[family-name:var(--font-serif4)] text-[26px] font-semibold leading-[33.28px] tracking-[-0.26px] text-[#071a33] lg:pb-0 lg:pt-[2.82px] ${NW}`}
          >
            What every published partner
            <Br k="m" />
            record will contain, and what
            <Br k="d" />
            it
            <Br k="m" />
            won&apos;t.
          </h2>

          <p className={`w-full text-[14px] leading-[23.1px] text-[#5c6672] ${NW}`}>
            Each element needs its own approved source. If one is
            <Br k="m" />
            missing, that element is left out rather than filled in
            <Br k="d" />
            with
            <Br k="m" />
            something plausible.
          </p>
        </div>

        <div role="table" aria-label="Partner record elements" className="w-full overflow-clip rounded-[14px] border border-[#e3d9c2] bg-white">
          <div role="row" className={`hidden bg-[#efe8d6] pb-[15px] pt-[14px] ${GRID}`}>
            <span role="columnheader" className={HEAD}>Element</span>
            <span role="columnheader" className={HEAD}>Shown when</span>
            <span role="columnheader" className={HEAD}>Never inferred</span>
          </div>

          {ROWS.map((r, i) => (
            <div
              key={i}
              role="row"
              className={`flex flex-col gap-[7px] border-t border-[#e3d9c2] px-5 py-[15px] first:border-t-0 lg:py-[15px] lg:first:border-t ${GRID} lg:px-5`}
            >
              <div
                role="rowheader"
                className="text-[13px] font-bold leading-[20.8px] text-[#071a33] lg:whitespace-nowrap"
              >
                {r.element}
              </div>

              <div role="cell" className="flex flex-col gap-[1.525px]">
                <span className={LABEL}>Shown when</span>
                <p className={`text-[12.3px] leading-[19px] text-[#5c6672] ${NW}`}>{r.shown}</p>
              </div>

              <div role="cell" className="flex flex-col gap-[1.525px]">
                <span className={LABEL}>Never inferred</span>
                <p className={`text-[12.3px] leading-[19px] text-[#d97f0e] ${NW}`}>{r.never}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
