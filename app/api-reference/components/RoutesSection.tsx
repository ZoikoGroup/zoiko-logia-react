import Link from "next/link";
import SectionHead from "./SectionHead";
import ArrowRight from "./ArrowRight";
import { Block } from "./ui";

const ROUTES = [
  {
    title: "Governance and oversight",
    note: "Owner: Governance.",
    cta: "Governance",
    href: "/governance",
  },
  {
    title: "Procurement process",
    note: "Owner: Procurement Support. Process help, not API facts.",
    cta: "Procurement Support",
    href: "/procurement-support",
  },
  {
    title: "A commercial question about access or packaging",
    note: "Owner: Contact Sales. No entitlement is implied.",
    cta: "Contact Sales",
    href: "/contact-sales",
  },
  {
    title: "How does this relate to Workflow Mode or Review Mode?",
    note: "Only when a verified technical mapping exists. Otherwise it's a product evaluation question.",
    cta: "Kriton™",
    href: "/kriton-ai",
  },
];

export default function RoutesSection() {
  return (
    <Block id="routes" gap="gap-4">
      <SectionHead
        n={11}
        title="Routed to the team that owns the answer."
        lead="Security, compliance and accessibility claims live with their owners. We link, and we don't repeat them."
      />

      <div className="flex w-full flex-col gap-2">
        {ROUTES.map((r) => (
          <Link
            key={r.cta}
            href={r.href}
            className="flex flex-wrap items-center justify-between gap-x-4 gap-y-[14px] rounded-[12px] border border-[#e3d9c2] bg-white px-[18px] py-[13px] transition-colors hover:border-[#cdbf9f]"
          >
            <span className="flex min-w-0 flex-col gap-[0.8px]">
              <span className="text-[13px] font-semibold leading-[20.8px] text-[#071a33]">{r.title}</span>
              <span className="text-[11.4px] font-medium leading-[18.24px] text-[#8b93a0]">{r.note}</span>
            </span>
            <span className="whitespace-nowrap text-[12.4px] font-bold leading-[19.84px] text-[#049783]">
              {r.cta}
              <ArrowRight />
            </span>
          </Link>
        ))}
      </div>
    </Block>
  );
}
