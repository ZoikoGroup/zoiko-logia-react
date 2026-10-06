import SectionHead, { Br } from "./SectionHead";

const AUDIENCES = [
  {
    image: "/api-reference/audience-engineers.webp",
    title: "Engineers & architects",
    text: (
      <>
        Check contracts, schemas and limits before
        <Br k="d" />
        designing anything.
      </>
    ),
  },
  {
    image: "/api-reference/audience-security.webp",
    title: "Security reviewers",
    text: (
      <>
        Find the access boundary and where security
        <Br k="d" />
        evidence lives.
      </>
    ),
  },
  {
    image: "/api-reference/audience-procurement.webp",
    title: "Procurement & vendor risk",
    text: (
      <>
        See what&apos;s documented and what&apos;s not,
        <Br k="d" />
        without a sales call.
      </>
    ),
  },
  {
    image: "/api-reference/audience-finance.webp",
    title: "Finance & accounting leads",
    text: (
      <>
        Understand how a technical decision may
        <Br k="d" />
        touch your workflows.
      </>
    ),
  },
  {
    image: "/api-reference/audience-partners.webp",
    title: "Implementation partners",
    text: (
      <>
        Scope an evaluation against published facts,
        <Br k="d" />
        not assumptions.
      </>
    ),
  },
  {
    image: "/api-reference/audience-evaluators.webp",
    title: "Technical evaluators",
    text: (
      <>
        Reach a specific item or a safe fallback in
        <Br k="d" />
        three steps.
      </>
    ),
  },
];

export default function OverviewSection() {
  return (
    <section id="overview" className="flex scroll-mt-24 flex-col gap-5 pb-11 pt-2">
      <SectionHead
        n={1}
        title="Built for the people who have to trust the details."
        lead={
          <>
            Different technical roles come here for different jobs. Each gets the same honest answer about what&apos;s
            <Br k="d" />
            published.
          </>
        }
      />

      <div
        className="rounded-[14px] border border-[rgba(0,191,166,0.35)] px-[22px] pb-[18px] pt-[22px] text-[13.4px] leading-[22.78px] text-[#123055] min-[1440px]:whitespace-nowrap"
        style={{
          backgroundImage: "linear-gradient(133deg, rgba(0,191,166,0.1) 0%, rgba(0,191,166,0.03) 100%)",
        }}
      >
        <strong className="font-bold text-[#071a33]">The short answer.</strong> API Reference is the public
        presentation layer for approved technical contract information. It shows only the interface facts,
        <Br k="d" />
        versions, schemas, errors and access context that governed sources support, and says so plainly where they
        don&apos;t yet.
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {AUDIENCES.map((a) => (
          <article
            key={a.title}
            className="relative isolate flex min-h-[220px] items-end overflow-clip rounded-[16px] bg-[#071a33]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={a.image}
              alt=""
              loading="lazy"
              className="absolute inset-0 -z-20 size-full object-cover opacity-[0.55]"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[rgba(7,26,51,0.1)] from-20% to-[rgba(7,26,51,0.94)]" />
            <div className="flex flex-col gap-[3.15px] px-5 py-[18px]">
              <h3 className="text-[14.5px] font-bold leading-[23.2px] tracking-[-0.217px] text-white">{a.title}</h3>
              <p className="text-[12.2px] leading-[18.3px] text-[#c3cfdb] min-[1440px]:whitespace-nowrap">{a.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
