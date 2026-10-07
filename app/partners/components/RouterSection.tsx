import Eyebrow from "./Eyebrow";
import LinkCard, { type LinkCardProps } from "./LinkCard";
import Br from "./Br";
import { NW } from "./tokens";

const CARDS: LinkCardProps[] = [
  {
    image: "/partners/router-browse-directory.webp",
    crop: "left-0 top-[-12.79%] h-[125.58%] w-full",
    title: "Browse partners",
    body: "Approved public partner relationships. No form required.",
    cta: "Go to directory",
    href: "#directory",
    current: true,
    bodyPad: "lg:pb-[30.59px]",
  },
  {
    image: "/partners/router-explore-partnership.webp",
    crop: "left-0 top-[-91.18%] h-[282.37%] w-full",
    title: "Explore a partnership",
    body: (
      <>
        Prospective partnership and ecosystem interest.
        <Br k="d" />
        Doesn&apos;t
        <Br k="m" />
        imply approval or eligibility.
      </>
    ),
    cta: "See how",
    href: "#partner-inquiry",
  },
  {
    image: "/partners/router-commercial-question.webp",
    crop: "left-0 top-[-68.46%] h-[236.91%] w-full",
    title: "Commercial question",
    body: (
      <>
        General sales and commercial coordination. No
        <Br k="d" />
        duplicate
        <Br k="m" />
        partner lead is created.
      </>
    ),
    cta: "Contact Sales",
    href: "/contact-us",
  },
  {
    image: "/partners/router-technical-documentation.webp",
    crop: "left-0 top-[-12.79%] h-[125.58%] w-full",
    title: "Technical documentation",
    body: (
      <>
        Authoritative technical contract information. A partner
        <Br k="md" />
        listing never implies an integration.
      </>
    ),
    cta: "API Reference",
    href: "/api-reference",
  },
  {
    image: "/partners/router-due-diligence.webp",
    crop: "left-0 top-[-12.79%] h-[125.59%] w-full",
    title: "Due diligence",
    body: (
      <>
        Provider evidence and questionnaire evaluation. A
        <Br k="md" />
        partner badge is never proof.
      </>
    ),
    cta: "Provider Due Diligence",
    href: "/buyers-brief",
  },
  {
    image: "/partners/router-procurement-help.webp",
    crop: "left-0 top-[-91.18%] h-[282.36%] w-full",
    title: "Procurement help",
    body: (
      <>
        Process, forms and contracting coordination. Partner
        <Br k="md" />
        status isn&apos;t inferred.
      </>
    ),
    cta: "Procurement Support",
    href: "/procurement-support",
  },
];

export default function RouterSection() {
  return (
    <section className="mx-auto flex w-full max-w-[1200px] flex-col gap-7 px-5 py-[46px] lg:px-8 lg:py-16">
      <div className="flex w-full max-w-[700px] flex-col items-start gap-[10px] pt-[6.9px]">
        <Eyebrow>Find the Right Path</Eyebrow>

        <h2
          className={`w-full pt-[2.82px] font-[family-name:var(--font-serif4)] text-[26px] font-semibold leading-[33.28px] tracking-[-0.26px] text-[#071a33] lg:pt-[2.69px] ${NW}`}
        >
          Most partner-adjacent questions
          <Br k="m" />
          have a more direct home.
        </h2>

        <p className={`w-full text-[14px] leading-[23.1px] text-[#5c6672] ${NW}`}>
          Choosing a route here never creates a lead. Each card
          <Br k="m" />
          is a plain link to the page that owns the answer.
        </p>
      </div>

      <div className="flex w-full flex-col gap-[18px] md:grid md:grid-cols-2 lg:grid-cols-3">
        {CARDS.map((c) => (
          <LinkCard key={c.title} {...c} />
        ))}
      </div>
    </section>
  );
}
