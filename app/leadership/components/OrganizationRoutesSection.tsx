import Link from "next/link";
import Eyebrow from "./Eyebrow";
import ArrowRight from "./ArrowRight";
import Br from "./Br";
import ResponsiveImage from "./ResponsiveImage";
import { NW } from "./tokens";

interface Route {
  title: string;
  description: React.ReactNode;
  note: React.ReactNode;
  /** Image for the desktop frame; routes without one only appear on the mobile frame. */
  desktopImage?: string;
  mobileImage: string;
  alt: string;
  href: string;
}

const ROUTES: Route[] = [
  {
    title: "Request Enterprise Briefing",
    description: (
      <>
        Broad, cross-functional enterprise
        <Br k="d" />
        evaluation.
      </>
    ),
    note: "Doesn't guarantee a particular attendee.",
    desktopImage: "/leadership/route-enterprise-briefing-desktop.webp",
    mobileImage: "/leadership/route-enterprise-briefing-mobile.webp",
    alt: "Cross-functional group working through an evaluation",
    href: "/book-a-demo",
  },
  {
    title: "Contact Sales",
    description: "Commercial coordination.",
    note: (
      <>
        No executive or account-owner assignment
        <Br k="d" />
        claim.
      </>
    ),
    desktopImage: "/leadership/route-contact-sales-desktop.webp",
    mobileImage: "/leadership/route-contact-sales-mobile.webp",
    alt: "Team member preparing a commercial question",
    href: "/contact-us",
  },
  {
    title: "Book a Demo",
    description: "Guided product discovery.",
    note: "No leader attendance promise.",
    desktopImage: "/leadership/route-book-demo-desktop.webp",
    mobileImage: "/leadership/route-book-demo-mobile.webp",
    alt: "Team exploring a guided product demo",
    href: "/book-a-demo",
  },
  {
    title: "Request Pilot",
    description: "Structured workflow evaluation.",
    note: "No pilot sponsorship claim.",
    desktopImage: "/leadership/route-request-pilot-desktop.webp",
    mobileImage: "/leadership/route-request-pilot-mobile.webp",
    alt: "Team defining a workflow to evaluate",
    href: "/request-pilot",
  },
  {
    title: "Procurement Support",
    description: "Procurement process and coordination.",
    note: "No leader escalation path.",
    mobileImage: "/leadership/route-procurement-support-mobile.webp",
    alt: "Colleague working through a procurement process",
    href: "/buyers-brief",
  },
  {
    title: "Provider Due Diligence",
    description: "Provider evidence and questionnaires.",
    note: "Leadership doesn't duplicate evidence.",
    mobileImage: "/leadership/route-provider-due-diligence-mobile.webp",
    alt: "Reviewer reading provider evidence",
    href: "/buyers-brief",
  },
];

const OPEN_LINK =
  "flex items-center justify-center self-start rounded-[6px] border border-[#e3d9c2] px-[14px] py-2 text-[12.4px] font-semibold leading-[19.84px] text-[#071a33] transition-colors hover:border-[#cdbf9f]";
const CARD_TITLE =
  "w-full pb-[5px] text-[14px] font-bold leading-[22.4px] tracking-[-0.138px] text-[#071a33]";
const BADGE =
  "mb-[10px] rounded-[20px] bg-[#efe8d6] px-[9px] py-[3px] text-[9.8px] font-bold uppercase leading-[15.68px] tracking-[0.294px] text-[#5c6672] whitespace-nowrap";

export default function OrganizationRoutesSection() {
  return (
    <section className="mx-auto flex w-full max-w-[1200px] flex-col gap-[28.01px] px-5 pb-[38px] pt-[46px] lg:gap-7 lg:px-8 lg:py-16">
      <div className="flex w-full max-w-[700px] flex-col items-start gap-[10px] pb-[1.2px] pt-[6.91px] lg:pb-0">
        <Eyebrow>Organization Routes</Eyebrow>

        <h2
          className={`w-full pt-[2.82px] font-[family-name:var(--font-serif4)] text-[26px] font-semibold leading-[33.28px] tracking-[-0.26px] text-[#071a33] lg:pt-[2.68px] ${NW}`}
        >
          Take the question to the right
          <Br k="m" />
          team.
        </h2>

        <p className={`w-full text-[14px] leading-[23.1px] text-[#5c6672] ${NW}`}>
          Each route is organization-level. None of them promises
          <Br k="m" />
          access to, or the attendance of, any individual.
        </p>
      </div>

      {/* Mobile: one card per route, stacked. Desktop: the first four routes in a 4-column grid. */}
      <ul className="flex w-full flex-col gap-[18px] lg:grid lg:grid-cols-4 lg:pb-4">
        {ROUTES.map((r) => (
          <li
            key={r.title}
            className={`min-h-[365.4px] flex-col overflow-clip rounded-[14px] border border-[#e3d9c2] bg-white lg:min-h-0 ${
              r.desktopImage ? "flex" : "flex lg:hidden"
            }`}
          >
            <div className="relative h-[208.13px] w-full shrink-0 overflow-clip lg:h-[151.03px]">
              <ResponsiveImage
                mobile={r.mobileImage}
                desktop={r.desktopImage}
                alt={r.alt}
                sizes="(min-width: 1440px) 271px, (min-width: 1024px) 25vw, 100vw"
              />
            </div>

            <div className="flex flex-1 flex-col items-start px-[18px] pb-[18px] pt-4">
              <h3 className={CARD_TITLE}>{r.title}</h3>
              <p className={`w-full pb-2 text-[12.2px] leading-[18.91px] text-[#5c6672] ${NW}`}>
                {r.description}
              </p>
              <p className="w-full pb-3 text-[11.2px] leading-[16.24px] text-[#d97f0e]">{r.note}</p>
              <Link href={r.href} className={`${OPEN_LINK} mt-auto`}>
                Open
                <ArrowRight />
              </Link>
            </div>
          </li>
        ))}

        {/* Mobile-only cards */}
        <li className="flex min-h-[164.2px] flex-col overflow-clip rounded-[14px] border border-dashed border-[#e3d9c2] lg:hidden">
          <div className="flex flex-col items-start p-5">
            <span className={BADGE}>Pending approval</span>
            <h3 className={CARD_TITLE}>Partner Inquiry</h3>
            <p className={`w-full pb-2 text-[12.2px] leading-[18.91px] text-[#5c6672] ${NW}`}>
              Partnership and ecosystem intake, available only after
              <Br k="m" />
              separate approval.
            </p>
            <p className="w-full text-[11.2px] leading-[16.24px] text-[#d97f0e]">
              Would carry no executive sponsor or endorsement claim.
            </p>
          </div>
        </li>

        <li className="flex min-h-[195.3px] flex-col overflow-clip rounded-[14px] border border-dashed border-[#e3d9c2] lg:hidden">
          <div className="flex flex-col items-start p-5">
            <span className={BADGE}>Existing users</span>
            <h3 className={CARD_TITLE}>Sign in</h3>
            <p className="w-full pb-2 text-[12.2px] leading-[18.91px] text-[#5c6672]">
              Authenticated product access.
            </p>
            <p className="w-full pb-3 text-[11.2px] leading-[16.24px] text-[#d97f0e]">
              Implies no access to leadership contact data.
            </p>
            <Link href="/about" className={OPEN_LINK}>
              Sign in
            </Link>
          </div>
        </li>
      </ul>
    </section>
  );
}
