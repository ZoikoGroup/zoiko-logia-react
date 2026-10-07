import LinkCard, { type LinkCardProps } from "./LinkCard";
import Br from "./Br";

const CARDS: LinkCardProps[] = [
  {
    image: "/partners/capability-context.webp",
    crop: "left-0 top-[-91.18%] h-[282.36%] w-full",
    title: "Capability context",
    body: (
      <>
        Labels describe the relationship only. They never stand
        <Br k="d" />
        in
        <Br k="m" />
        for a full product or company capability.
      </>
    ),
    cta: "Solutions",
    href: "/solutions",
    bodyPad: "lg:pb-[30.615px]",
  },
  {
    image: "/partners/accountability.webp",
    crop: "left-0 top-[-91.18%] h-[282.37%] w-full",
    title: "Accountability",
    body: (
      <>
        Who is responsible for what is stated where approved.
        <Br k="md" />
        Disputes route to an organization-level channel, not a
        <Br k="md" />
        person.
      </>
    ),
    cta: "Trust",
    href: "/compliance",
  },
  {
    image: "/partners/currentness.webp",
    crop: "left-0 top-[-12.79%] h-[125.58%] w-full",
    title: "Currentness",
    body: (
      <>
        Ended, stale or disputed records are removed or
        <Br k="md" />
        archived, so an old relationship claim never lingers.
      </>
    ),
    cta: "Release Notes",
    href: "/documentation",
    bodyPad: "lg:pb-[30.615px]",
  },
];

export default function ProfileCardsSection() {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-5 py-[46px] lg:px-8 lg:py-16">
      <div className="flex w-full flex-col gap-[18px] md:grid md:grid-cols-2 lg:grid-cols-3">
        {CARDS.map((c) => (
          <LinkCard key={c.title} {...c} />
        ))}
      </div>
    </section>
  );
}
