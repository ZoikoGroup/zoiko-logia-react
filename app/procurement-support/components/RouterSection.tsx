import Link from "next/link";
import Eyebrow from "./Eyebrow";
import ArrowRight from "./ArrowRight";
import Br from "./Br";
import ResponsiveImage from "./ResponsiveImage";
import { NW } from "./tokens";

interface Route {
  title: string;
  description: React.ReactNode;
  cta: string;
  href: string;
  /** Image for the desktop frame; routes without one only appear on the mobile frame. */
  desktopImage?: string;
  mobileImage: string;
  alt: string;
  /** The Procurement Support card, which continues into the request form. */
  current?: boolean;
  arrow?: boolean;
}

const ROUTES: Route[] = [
  {
    title: "Procurement Support",
    description: (
      <>
        Process, forms and checklist guidance, and
        <Br k="d" />
        contracting
        <Br k="m" />
        coordination where operationally
        <Br k="d" />
        approved.
      </>
    ),
    cta: "Continue",
    href: "#request-form",
    desktopImage: "/procurement-support/route-procurement-support-desktop.webp",
    mobileImage: "/procurement-support/route-procurement-support-mobile.webp",
    alt: "Colleague working through a procurement process question",
    current: true,
  },
  {
    title: "Provider Due Diligence",
    description: (
      <>
        Provider information, evidence availability, and
        <Br k="md" />
        questionnaire and evaluation support.
      </>
    ),
    cta: "Open Provider Due Diligence",
    href: "/buyers-brief",
    desktopImage: "/procurement-support/route-provider-due-diligence-desktop.webp",
    mobileImage: "/procurement-support/route-provider-due-diligence-mobile.webp",
    alt: "Reviewer checking provider evidence",
    arrow: true,
  },
  {
    title: "Contact Sales",
    description: (
      <>
        General sales and commercial coordination, including
        <Br k="md" />
        pricing and packaging questions.
      </>
    ),
    cta: "Contact Sales",
    href: "/contact-us",
    desktopImage: "/procurement-support/route-contact-sales-desktop.webp",
    mobileImage: "/procurement-support/route-contact-sales-mobile.webp",
    alt: "Team member preparing a commercial question",
    arrow: true,
  },
  {
    title: "Book a Demo",
    description: (
      <>
        A guided product discovery and evaluation
        <Br k="md" />
        conversation.
      </>
    ),
    cta: "Book a Demo",
    href: "/book-a-demo",
    desktopImage: "/procurement-support/route-book-demo-desktop.webp",
    mobileImage: "/procurement-support/route-book-demo-mobile.webp",
    alt: "Person exploring a product on a laptop",
    arrow: true,
  },
  {
    title: "Request Enterprise Briefing",
    description: "A broader, cross-functional decision-context request.",
    cta: "Request Enterprise Briefing",
    href: "/book-a-demo",
    desktopImage: "/procurement-support/route-enterprise-briefing-desktop.webp",
    mobileImage: "/procurement-support/route-enterprise-briefing-mobile.webp",
    alt: "Cross-functional group reviewing a decision",
    arrow: true,
  },
  {
    title: "Request Pilot",
    description: "A structured workflow or outcome evaluation request.",
    cta: "Request Pilot",
    href: "/request-pilot",
    desktopImage: "/procurement-support/route-request-pilot-desktop.webp",
    mobileImage: "/procurement-support/route-request-pilot-mobile.webp",
    alt: "Team defining a workflow to evaluate",
    arrow: true,
  },
  {
    title: "Trust",
    description: (
      <>
        Evidence orientation and discovery of the specialist
        <Br k="m" />
        source that owns your question.
      </>
    ),
    cta: "Explore Trust",
    href: "/compliance",
    mobileImage: "/procurement-support/route-trust-mobile.webp",
    alt: "Evaluator reading trust information",
    arrow: true,
  },
];

const BUTTON =
  "flex items-center justify-center self-start rounded-[6px] border px-[14px] py-2 text-[12.4px] font-semibold leading-[19.84px] text-[#071a33] transition-colors";
const CARD_TITLE =
  "w-full pb-[6px] text-[14.5px] font-bold leading-[23.2px] tracking-[-0.138px] text-[#071a33]";
const BADGE =
  "mb-[10px] rounded-[20px] bg-[#efe8d6] px-[9px] py-[3px] text-[9.8px] font-bold uppercase leading-[15.68px] tracking-[0.294px] text-[#5c6672] whitespace-nowrap";

export default function RouterSection() {
  return (
    <section
      id="choose-path"
      className="mx-auto flex w-full max-w-[1200px] flex-col gap-[27.99px] px-5 py-[46px] lg:px-8 lg:pb-[63.99px] lg:pt-16"
    >
      <div className="flex w-full max-w-[700px] flex-col items-start gap-[10px] pb-[1.2px] pt-[6.9px] lg:pb-0">
        <Eyebrow>Choose the Right Path</Eyebrow>

        <h2
          className={`w-full pt-[2.825px] font-[family-name:var(--font-serif4)] text-[26px] font-semibold leading-[33.28px] tracking-[-0.26px] text-[#071a33] lg:pt-[2.69px] ${NW}`}
        >
          Most procurement questions
          <Br k="m" />
          belong somewhere else first.
        </h2>

        <p className={`w-full text-[14px] leading-[23.1px] text-[#5c6672] ${NW}`}>
          Only the Procurement Support card continues into the
          <Br k="m" />
          request form. Every other card is a normal link, and
          <Br k="d" />
          no
          <Br k="m" />
          request is created if you leave.
        </p>
      </div>

      {/* Mobile: one card per route, stacked. Desktop: the first six routes in a 3-column grid. */}
      <ul className="flex w-full flex-col gap-[18px] lg:grid lg:grid-cols-3">
        {ROUTES.map((r) => (
          <li
            key={r.title}
            className={`relative isolate flex-col overflow-clip rounded-[14px] border bg-white ${
              r.current
                ? "border-[#f59a23] shadow-[0_0_0_1px_#f59a23]"
                : "border-[#e3d9c2]"
            } ${r.desktopImage ? "flex" : "flex lg:hidden"}`}
          >
            <div className="relative z-[2] h-[196.56px] w-full shrink-0 overflow-clip lg:h-[193.72px]">
              <ResponsiveImage
                mobile={r.mobileImage}
                desktop={r.desktopImage}
                alt={r.alt}
                sizes="(min-width: 1440px) 354px, (min-width: 1024px) 33vw, 100vw"
              />
              {r.current && (
                <span className="absolute left-[10px] top-[10px] rounded-[20px] bg-[#f59a23] px-[10px] py-1 text-[9.8px] font-bold uppercase leading-[15.68px] tracking-[0.392px] text-[#071a33] whitespace-nowrap">
                  This page
                </span>
              )}
            </div>

            <div className="relative z-[1] flex flex-1 flex-col items-start px-5 pb-5 pt-[18px]">
              <h3 className={CARD_TITLE}>{r.title}</h3>
              <p className={`w-full pb-[15px] text-[12.5px] leading-[19.5px] text-[#5c6672] lg:pb-[14px] ${NW}`}>
                {r.description}
              </p>
              <Link
                href={r.href}
                className={`${BUTTON} mt-auto ${
                  r.current
                    ? "border-transparent bg-[#f59a23] hover:opacity-90"
                    : "border-[#e3d9c2] hover:border-[#cdbf9f]"
                }`}
              >
                {r.cta}
                {r.arrow && <ArrowRight />}
              </Link>
            </div>
          </li>
        ))}

        {/* Mobile-only cards */}
        <li className="flex min-h-[177px] flex-col overflow-clip rounded-[14px] border border-dashed border-[#e3d9c2] lg:hidden">
          <div className="flex flex-col items-start p-5">
            <span className={BADGE}>Pending approval</span>
            <h3 className={CARD_TITLE}>Legal</h3>
            <p className={`w-full pb-[14px] text-[12.5px] leading-[19.5px] text-[#5c6672] ${NW}`}>
              Authoritative legal information, available only after
              <Br k="m" />
              separate approval. We don&apos;t point you to a page that
              <Br k="m" />
              doesn&apos;t exist yet.
            </p>
          </div>
        </li>

        <li className="flex min-h-[157px] flex-col overflow-clip rounded-[14px] border border-dashed border-[#e3d9c2] lg:hidden">
          <div className="flex flex-col items-start p-5">
            <span className={BADGE}>Pending approval</span>
            <h3 className={CARD_TITLE}>Partner Inquiry</h3>
            <p className={`w-full pb-[14px] text-[12.5px] leading-[19.5px] text-[#5c6672] ${NW}`}>
              Ecosystem and partnership intake, available only after
              <Br k="m" />
              separate approval. This page is not a partner form.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}
