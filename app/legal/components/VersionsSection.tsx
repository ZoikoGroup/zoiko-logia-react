import Eyebrow from "./Eyebrow";
import Br from "./Br";
import { NW } from "./tokens";

const CARDS = [
  {
    label: "Archive",
    title: "Superseded versions stay reachable",
    text: (
      <>
        Each shows its exact title, version and effective range,
        <Br k="md" />
        with a banner linking to the verified current document.
        <Br k="md" />
        No archive entries exist yet.
      </>
    ),
  },
  {
    label: "Corrections",
    title: "Corrected, never silently rewritten",
    text: (
      <>
        A correction carries its own approved metadata. We
        <Br k="md" />
        don&apos;t alter a historical version&apos;s effect after the fact,
        <Br k="md" />
        and we offer comparison only if an approved system
        <Br k="md" />
        exists.
      </>
    ),
  },
  {
    label: "Region",
    title: "Location never picks your terms",
    text: (
      <>
        Regional notices appear only when owner-approved,
        <Br k="md" />
        and your IP address or locale never decides which
        <Br k="md" />
        rights apply. No regional legal notices are published
        <Br k="md" />
        today.
      </>
    ),
  },
];

export default function VersionsSection() {
  return (
    <section className="border-t border-[#e3d9c2] bg-[#efe8d6]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-7 px-5 py-[46px] lg:gap-[27.99px] lg:px-8 lg:py-16">
        <div className="flex w-full max-w-[720px] flex-col items-start gap-[12.9px] pb-[0.01px] pt-[6.9px]">
          <Eyebrow>Versions, Archive &amp; Region</Eyebrow>

          <h2
            className={`w-full pb-[0.535px] font-[family-name:var(--font-serif4)] text-[26px] font-semibold leading-[33.28px] tracking-[-0.26px] text-[#071a33] lg:pb-0 ${NW}`}
          >
            History is preserved, and the
            <Br k="m" />
            current version is always easy to
            <Br k="md" />
            find.
          </h2>
        </div>

        <div className="flex w-full flex-col gap-[18px] lg:flex-row lg:items-stretch lg:justify-center">
          {CARDS.map((c) => (
            <article
              key={c.label}
              className="flex w-full flex-col rounded-[12px] border border-[#e3d9c2] bg-white p-[22px] lg:min-w-0 lg:flex-1"
            >
              <p className="pb-2 text-[10px] font-bold uppercase leading-4 tracking-[0.5px] text-[#049783]">{c.label}</p>
              <h3 className="pb-[7px] text-[13.8px] font-bold leading-[22px] tracking-[-0.138px] text-[#071a33]">
                {c.title}
              </h3>
              <p className={`text-[12.4px] leading-[19.34px] text-[#5c6672] ${NW}`}>{c.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
