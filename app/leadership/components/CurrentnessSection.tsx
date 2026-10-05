import Eyebrow from "./Eyebrow";
import Br from "./Br";
import ResponsiveImage from "./ResponsiveImage";
import { NW } from "./tokens";

const CARDS = [
  {
    label: "Title correction",
    title: "Replaced after approval",
    body: (
      <>
        The profile, cards, structured data and internal search
        <Br k="md" />
        are all refreshed from the corrected record.
      </>
    ),
  },
  {
    label: "Role change",
    title: "Current role published",
    body: (
      <>
        The new role replaces the old one. Role history
        <Br k="d" />
        appears
        <Br k="m" />
        only if it has been approved.
      </>
    ),
  },
  {
    label: "Leaves leadership",
    title: "Removed from the directory",
    body: (
      <>
        The profile leaves the current listing and its structured
        <Br k="md" />
        data is withdrawn. A successor is never redirected
        <Br k="md" />
        from a predecessor&apos;s page.
      </>
    ),
  },
  {
    label: "Disputed profile",
    title: "Held back",
    body: (
      <>
        Affected fields or the whole profile are suppressed
        <Br k="d" />
        until
        <Br k="m" />
        the owner reconciles them. No stale data is left
        <Br k="d" />
        visible.
      </>
    ),
  },
  {
    label: "Portrait withdrawn",
    title: "Image removed only",
    body: (
      <>
        If rights are revoked, just the portrait comes off. A text
        <Br k="md" />
        profile remains if it is still publishable.
      </>
    ),
  },
  {
    label: "Source missing",
    title: "Fails closed",
    body: (
      <>
        If an approved source can&apos;t be found, the information
        <Br k="md" />
        isn&apos;t shown. Old cached facts don&apos;t stand in.
      </>
    ),
  },
];

export default function CurrentnessSection() {
  return (
    <section className="mx-auto flex w-full max-w-[1200px] flex-col gap-[29.99px] px-5 pb-[46px] pt-[42px] lg:gap-[30px] lg:px-8 lg:py-16">
      <div className="flex w-full flex-col items-center gap-12 lg:flex-row lg:justify-center">
        {/* Text — second on mobile, first on desktop */}
        <div className="order-2 flex w-full flex-col items-start gap-[13.2px] pb-[13.99px] pt-[6.91px] lg:order-1 lg:min-w-0 lg:flex-1 lg:gap-[13.3px]">
          <Eyebrow>Currentness &amp; Profile Changes</Eyebrow>

          <h2
            className={`w-full font-[family-name:var(--font-serif4)] text-[25px] font-semibold leading-[32px] tracking-[-0.25px] text-[#071a33] ${NW}`}
          >
            When something changes, it
            <Br k="m" />
            changes everywhere
            <Br k="d" />
            at once.
          </h2>

          <p className={`w-full text-[14px] leading-[23.8px] text-[#5c6672] ${NW}`}>
            Titles, structured data and search references all come
            <Br k="m" />
            from one governed record,
            <Br k="d" />
            so a correction doesn&apos;t
            <Br k="m" />
            leave an old title behind. We don&apos;t publish an update
            <Br k="md" />
            timeline we can&apos;t guarantee.
          </p>
        </div>

        {/* Image — first on mobile, second on desktop */}
        <div className="relative order-1 h-[297.59px] w-full max-w-[480px] shrink-0 overflow-clip rounded-[14px] lg:order-2 lg:h-[435.19px] lg:w-auto lg:min-w-0 lg:max-w-none lg:flex-1">
          <ResponsiveImage
            mobile="/leadership/currentness-mobile.webp"
            desktop="/leadership/currentness-desktop.webp"
            alt="Colleagues checking that a record is current"
            sizes="(min-width: 1440px) 544px, (min-width: 1024px) 45vw, (max-width: 520px) 100vw, 480px"
          />
        </div>
      </div>

      <ul className="flex w-full flex-col justify-center gap-[18px] lg:grid lg:grid-cols-3 lg:grid-rows-[repeat(2,157.09px)]">
        {CARDS.map((c) => (
          <li key={c.label} className="rounded-[12px] border border-[#e3d9c2] bg-white p-[22px]">
            <p className="w-full pb-2 text-[10px] font-bold uppercase leading-[16px] tracking-[0.5px] text-[#049783]">
              {c.label}
            </p>
            <h3 className="w-full pb-[7px] text-[13.8px] font-bold leading-[22px] tracking-[-0.138px] text-[#071a33]">
              {c.title}
            </h3>
            <p className={`w-full text-[12.4px] leading-[19.34px] text-[#5c6672] ${NW}`}>{c.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
