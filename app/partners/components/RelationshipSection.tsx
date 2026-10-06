import Eyebrow from "./Eyebrow";
import Br from "./Br";
import { NW } from "./tokens";

const LIST_CARD =
  "flex w-full flex-col gap-3 rounded-[14px] border border-[#e3d9c2] bg-white px-6 pb-[31px] pt-[21px] lg:flex-1";
const LIST_TITLE = "pb-[0.59px] text-[11px] font-bold uppercase leading-[17.6px] tracking-[0.66px]";
const LIST = "flex w-full flex-col gap-[8.4px] lg:gap-[9px]";
const ITEM = `relative pl-[18px] text-[12.8px] leading-[19.84px] text-[#123055] ${NW}`;

export default function RelationshipSection() {
  return (
    <section className="border-t border-[#e3d9c2] bg-[#efe8d6]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-[30px] px-5 py-[46px] lg:px-8 lg:py-16">
        <div className="flex w-full flex-col-reverse items-center gap-12 lg:flex-row lg:justify-center">
          {/* Copy */}
          <div className="flex w-full flex-col items-start gap-[13.2px] pb-[14px] pt-[6.91px] lg:min-w-0 lg:flex-1 lg:gap-[13.4px]">
            <Eyebrow>Relationship Truth Model</Eyebrow>

            <h2
              className={`w-full font-[family-name:var(--font-serif4)] text-[25px] font-semibold leading-[32px] tracking-[-0.25px] text-[#071a33] ${NW}`}
            >
              A partner record describes a
              <Br k="m" />
              relationship, and
              <Br k="d" />
              nothing more.
            </h2>

            <p className={`w-full text-[14px] leading-[23.8px] text-[#5c6672] ${NW}`}>
              A published record identifies an approved public
              <Br k="m" />
              relationship and its scope. Read
              <Br k="d" />
              the two lists below
              <Br k="m" />
              before drawing any conclusion from a partner&apos;s
              <Br k="m" />
              presence.
            </p>
          </div>

          {/* Photo */}
          <div className="relative aspect-[5/4] w-full max-w-[480px] shrink-0 overflow-hidden rounded-[14px] lg:max-w-none lg:min-w-0 lg:flex-1 lg:shrink">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/partners/relationship-scope.webp"
              alt=""
              loading="lazy"
              className="pointer-events-none absolute left-[-9.92%] top-0 h-full w-[119.85%] max-w-none"
            />
          </div>
        </div>

        <div className="flex w-full flex-col gap-[17.99px] lg:flex-row lg:items-start lg:justify-center lg:gap-[18px]">
          {/* What a record does tell you */}
          <div className={LIST_CARD}>
            <h3 className={`${LIST_TITLE} text-[#049783]`}>A record does tell you</h3>
            <ul className={LIST}>
              {[
                <>The partner&apos;s approved public name</>,
                <>The relationship type and its exact scope</>,
                <>
                  Capability context that applies to that relationship
                  <Br k="m" />
                  only
                </>,
                <>When the record was reviewed or took effect</>,
                <>Who is accountable for what, where it&apos;s approved</>,
                <>
                  Where to go for technical, trust or commercial
                  <Br k="m" />
                  detail
                </>,
              ].map((t, i) => (
                <li key={i} className={ITEM}>
                  <span aria-hidden className="absolute left-0 top-2 size-[6px] rounded-[3px] bg-[#049783]" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* What a record does not mean */}
          <div className={LIST_CARD}>
            <h3 className={`${LIST_TITLE} text-[#b23a27]`}>A record does not mean</h3>
            <ul className={LIST}>
              {[
                <>
                  Certification, tiers or &quot;official&quot; or &quot;preferred&quot;
                  <Br k="m" />
                  status
                </>,
                <>That an integration exists or is compatible</>,
                <>
                  That the partner can resell or represent
                  <Br k="m" />
                  ZoikoLogia™
                </>,
                <>
                  Endorsement, an implementation guarantee, or
                  <Br k="m" />
                  service availability
                </>,
                <>
                  Assurance or vendor-risk proof (see Provider Due
                  <Br k="m" />
                  Diligence)
                </>,
                <>A Zoiko Group or corporate-entity relationship</>,
              ].map((t, i) => (
                <li key={i} className={ITEM}>
                  <span
                    aria-hidden
                    className="absolute left-0 top-[12.2px] -translate-y-1/2 text-[14px] font-bold leading-[21.7px] text-[#b23a27]"
                  >
                    ×
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
