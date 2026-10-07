import Link from "next/link";
import Eyebrow from "./Eyebrow";
import ArrowRight from "./ArrowRight";
import Br from "./Br";
import ResponsiveImage from "./ResponsiveImage";
import { NW } from "./tokens";

interface RouteCardData {
  /** Desktop and mobile frames use different photos; omit `desktop` for a mobile-only card. */
  mobile: string;
  desktop?: string;
  title: string;
  body: React.ReactNode;
  note: string;
  cta: string;
  href: string;
  /** The card exists only in the mobile frame. */
  mobileOnly?: boolean;
}

const CARDS: RouteCardData[] = [
  {
    desktop: "/legal/router-terms-desktop.webp",
    mobile: "/legal/router-terms-mobile.webp",
    title: "Terms and acceptable use",
    body: (
      <>
        Current, source-approved legal documents, named
        <Br k="md" />
        exactly as published.
      </>
    ),
    note: "Purpose only. No clause is paraphrased here.",
    cta: "Go to documents",
    href: "#legal-documents",
  },
  {
    desktop: "/legal/router-privacy-desktop.webp",
    mobile: "/legal/router-privacy-mobile.webp",
    title: "Privacy, cookies and data",
    body: (
      <>
        Privacy practices, retention and cookie preferences,
        <Br k="md" />
        owned by their specialist pages.
      </>
    ),
    note: "No duplicate privacy statement.",
    cta: "Privacy & Security",
    href: "/privacy-security",
  },
  {
    desktop: "/legal/router-security-desktop.webp",
    mobile: "/legal/router-security-mobile.webp",
    title: "Security vulnerability",
    body: (
      <>
        Security posture and reporting sit with the specialist
        <Br k="md" />
        owner.
      </>
    ),
    note: "A specialist critical route, never a legal form.",
    cta: "Privacy & Security",
    href: "/privacy-security",
  },
  {
    desktop: "/legal/router-accessibility-desktop.webp",
    mobile: "/legal/router-accessibility-mobile.webp",
    title: "Accessibility",
    body: "The authoritative statement status and support route.",
    note: "No conformance is inferred from here.",
    cta: "Accessibility",
    href: "/accessibility",
  },
  {
    desktop: "/legal/router-procurement-desktop.webp",
    mobile: "/legal/router-procurement-mobile.webp",
    title: "Procurement process",
    body: "Process, forms and contracting coordination.",
    note: "Process help, not legal interpretation.",
    cta: "Procurement Support",
    href: "/procurement-support",
  },
  {
    desktop: "/legal/router-commercial-desktop.webp",
    mobile: "/legal/router-commercial-mobile.webp",
    title: "Commercial or quote",
    body: "General commercial coordination.",
    note: "Not a legal authority and not a negotiation channel.",
    cta: "Contact Sales",
    href: "/contact-sales",
  },
  {
    mobile: "/legal/router-partner-mobile.webp",
    title: "Partner and brand usage",
    body: (
      <>
        Relationships and rights are kept separate. Partner status
        <Br k="md" />
        never grants mark rights.
      </>
    ),
    note: "See the brand section below for the rules.",
    cta: "Partner Inquiry",
    href: "/partner-inquiry",
    mobileOnly: true,
  },
];

export default function RouterSection() {
  return (
    <section
      id="legal-path"
      className="mx-auto flex w-full max-w-[1200px] scroll-mt-24 flex-col gap-7 px-5 py-[46px] lg:px-8 lg:py-16"
    >
      <div className="flex w-full max-w-[720px] flex-col items-start gap-[10px] pt-[6.9px]">
        <Eyebrow>Choose the Right Legal Path</Eyebrow>

        <h2
          className={`w-full pt-[2.825px] font-[family-name:var(--font-serif4)] text-[26px] font-semibold leading-[33.28px] tracking-[-0.26px] text-[#071a33] lg:pt-[2.69px] ${NW}`}
        >
          Most legal questions belong with
          <Br k="m" />
          a specialist owner.
        </h2>

        <p className={`w-full text-[14px] leading-[23.1px] text-[#5c6672] ${NW}`}>
          Each card names its owner and says what it won&apos;t do.
          <Br k="m" />
          None of them is a lead form.
        </p>
      </div>

      <div className="flex w-full flex-col gap-[18px] md:grid md:grid-cols-2 lg:min-h-[750px] lg:grid-cols-3 lg:content-start">
        {CARDS.map((c) => (
          <article
            key={c.title}
            className={`flex flex-col overflow-clip rounded-[14px] border border-[#e3d9c2] bg-white ${
              c.mobileOnly ? "lg:hidden" : ""
            }`}
          >
            <div className="relative aspect-[372/194.25] w-full shrink-0 overflow-hidden">
              <ResponsiveImage mobile={c.mobile} desktop={c.desktop} className="object-cover" />
            </div>

            <div className="flex flex-1 flex-col px-[18px] pb-[18px] pt-4">
              <h3 className="pb-[4.99px] text-[14px] font-bold leading-[22.4px] tracking-[-0.138px] text-[#071a33]">
                {c.title}
              </h3>
              <p className={`pb-2 text-[12.3px] leading-[19px] text-[#5c6672] ${NW}`}>{c.body}</p>
              <p className="pb-3 text-[11.2px] leading-[16.24px] text-[#d97f0e]">{c.note}</p>
              <div className="mt-auto flex">
                <Link
                  href={c.href}
                  className="flex items-center justify-center rounded-[6px] border border-[#e3d9c2] px-[14px] py-2 text-center text-[12.4px] font-semibold leading-[19.84px] whitespace-nowrap text-[#071a33] transition-opacity hover:opacity-90"
                >
                  {c.cta}
                  <ArrowRight />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
