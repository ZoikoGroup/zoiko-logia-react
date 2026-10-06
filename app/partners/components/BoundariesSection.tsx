import Link from "next/link";
import Eyebrow from "./Eyebrow";
import ArrowRight from "./ArrowRight";
import Br from "./Br";
import { NW } from "./tokens";

const ROUTES = [
  { q: "How is ZoikoLogia™ governed?", note: "Link only.", cta: "Governance", href: "/governance" },
  {
    q: "What compliance information exists?",
    note: "No certification summary here.",
    cta: "Compliance",
    href: "/compliance",
  },
  { q: "How is data protected?", note: "Link only.", cta: "Privacy & Security", href: "/privacy-security" },
  {
    q: "What accessibility information exists?",
    note: "Link only.",
    cta: "Accessibility",
    href: "/accessibility",
  },
  {
    q: "How do I evaluate the provider or a questionnaire?",
    note: "Route out. Partner status is not vendor-risk proof.",
    cta: "Provider Due Diligence",
    href: "/buyers-brief",
  },
  {
    q: "Where is procurement help?",
    note: "Route out. No partner-status inference.",
    cta: "Procurement Support",
    href: "/procurement-support",
  },
  {
    q: "What changed technically?",
    note: "Only where a mapping is verified.",
    cta: "Release Notes",
    href: "/documentation",
  },
];

const PENDING_CARD = "flex w-full flex-col rounded-[12px] border border-[#e3d9c2] bg-white p-[22px] lg:flex-1";

export default function BoundariesSection() {
  return (
    <section className="border-t border-[#e3d9c2] bg-[#efe8d6]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-[22px] px-5 py-[46px] lg:px-8 lg:py-16">
        <div className="flex w-full max-w-[700px] flex-col items-start gap-[10px] pt-[6.91px]">
          <Eyebrow>Trust, Procurement &amp; Legal Boundaries</Eyebrow>

          <h2
            className={`w-full pt-[2.82px] font-[family-name:var(--font-serif4)] text-[26px] font-semibold leading-[33.28px] tracking-[-0.26px] text-[#071a33] lg:pt-[2.69px] ${NW}`}
          >
            A partner relationship is not
            <Br k="m" />
            evidence. Go to the source.
          </h2>

          <p className={`w-full text-[14px] leading-[23.1px] text-[#5c6672] ${NW}`}>
            These pages own the answers. Partners links to them
            <Br k="m" />
            and never restates their claims.
          </p>
        </div>

        <div className="flex w-full flex-col gap-2 pt-[6px]">
          {ROUTES.map((r) => (
            <Link
              key={r.cta}
              href={r.href}
              className="flex flex-wrap items-center justify-between gap-x-[14px] gap-y-[14px] rounded-[10px] border border-[#e3d9c2] bg-white px-[18px] py-[13px] transition-colors hover:border-[#cdbf9f]"
            >
              <span className="flex flex-col gap-[0.8px]">
                <span className="text-[13px] font-semibold leading-[21px] text-[#071a33]">{r.q}</span>
                <span className="text-[11.3px] font-medium leading-[18px] text-[#8b93a0]">{r.note}</span>
              </span>
              <span className="whitespace-nowrap text-[12.4px] font-bold leading-[19.84px] text-[#049783]">
                {r.cta}
                <ArrowRight />
              </span>
            </Link>
          ))}
        </div>

        <div className="flex w-full flex-col items-start gap-[18px] lg:flex-row lg:justify-center">
          <div className={PENDING_CARD}>
            <p className="pb-2 text-[10px] font-bold uppercase leading-[16px] tracking-[0.5px] text-[#049783]">
              Pending approval
            </p>
            <h3 className="pb-[7px] text-[13.8px] font-bold leading-[22px] tracking-[-0.138px] text-[#071a33]">
              Legal
            </h3>
            <p className={`text-[12.4px] leading-[19.34px] text-[#5c6672] ${NW}`}>
              Legal and brand-rights information, including logo and
              <Br k="m" />
              trademark usage rules, is owned
              <Br k="d" />
              by a future Legal
              <Br k="m" />
              destination. We give no legal advice, trademark grants
              <Br k="m" />
              or contract
              <Br k="d" />
              interpretation here.
            </p>
          </div>

          <div className={`${PENDING_CARD} lg:self-stretch`}>
            <p className="pb-2 text-[10px] font-bold uppercase leading-[16px] tracking-[0.5px] text-[#049783]">
              Pending approval
            </p>
            <h3 className="pb-[7px] text-[13.8px] font-bold leading-[22px] tracking-[-0.138px] text-[#071a33]">
              Zoiko Group
            </h3>
            <p className={`text-[12.4px] leading-[19.34px] text-[#5c6672] ${NW}`}>
              Group and corporate-relationship information is owned
              <Br k="m" />
              by a future destination. Nothing
              <Br k="d" />
              on this page implies a
              <Br k="m" />
              group, parent or affiliate relationship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
