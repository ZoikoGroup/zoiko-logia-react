import Link from "next/link";
import Eyebrow from "./Eyebrow";
import ArrowRight from "./ArrowRight";
import Br from "./Br";
import { NW } from "./tokens";

const HANDOFFS = [
  {
    title: "Provider profile and vendor-risk facts",
    owner: "Owner: Provider Due Diligence",
    href: "/buyers-brief",
  },
  {
    title: "Evidence availability and documents",
    owner: (
      <>
        Owner: Provider Due Diligence. Access states are shown
        <Br k="m" />
        there; they can&apos;t be upgraded from here.
      </>
    ),
    href: "/buyers-brief",
  },
  {
    title: "Questionnaire answers",
    owner: (
      <>
        Owner: Provider Due Diligence. Answers are referenced,
        <Br k="m" />
        never rewritten.
      </>
    ),
    href: "/buyers-brief",
  },
  { title: "Compliance information", owner: "Owner: Compliance", href: "/compliance" },
  { title: "Governance and accountability", owner: "Owner: Governance", href: "/governance" },
  { title: "Privacy and security", owner: "Owner: Privacy & Security", href: "/privacy-security" },
  {
    title: "Accessibility",
    owner: "Owner: Accessibility. No conformance is implied from here.",
    href: "/compliance",
  },
  { title: "Technical interfaces", owner: "Owner: API Reference", href: "/documentation" },
  {
    title: "Product and API change history",
    owner: "Owner: Release Notes",
    href: "/documentation",
  },
  {
    title: "Not sure which source owns your question?",
    owner: "Owner: Trust, the evidence-orientation router",
    href: "/compliance",
  },
];

export default function EvidenceHandoffSection() {
  return (
    <section className="mx-auto flex w-full max-w-[1200px] flex-col gap-[27.99px] px-5 py-[46px] lg:px-8 lg:py-16">
      <div className="flex w-full max-w-[700px] flex-col items-start gap-[10px] pb-[1.2px] pt-[6.9px] lg:pb-0">
        <Eyebrow>Evidence &amp; Trust Handoff</Eyebrow>

        <h2
          className={`w-full pt-[2.825px] font-[family-name:var(--font-serif4)] text-[26px] font-semibold leading-[33.28px] tracking-[-0.26px] text-[#071a33] lg:pt-[2.69px] ${NW}`}
        >
          Open the source that owns the
          <Br k="m" />
          answer.
        </h2>

        <p className={`w-full text-[14px] leading-[23.1px] text-[#5c6672] ${NW}`}>
          Procurement Support links to authoritative records
          <Br k="m" />
          instead of restating them, so you&apos;re never reading a
          <Br k="md" />
          stale copy.
        </p>
      </div>

      <ul className="flex w-full flex-col gap-2">
        {HANDOFFS.map((h) => (
          <li key={h.title}>
            <Link
              href={h.href}
              className="flex min-h-[67.8px] w-full flex-wrap items-center justify-between gap-x-4 gap-y-[14px] rounded-[10px] border border-[#e3d9c2] bg-white px-[18px] py-[13px] transition-colors hover:border-[#cdbf9f] lg:gap-x-6"
            >
              <span className={`flex flex-col items-start gap-[0.8px] ${NW}`}>
                <span className="text-[13px] font-semibold leading-[20.8px] text-[#071a33]">
                  {h.title}
                </span>
                <span className="text-[11.3px] font-medium leading-[18px] text-[#8b93a0]">
                  {h.owner}
                </span>
              </span>
              <span className="text-[12.4px] font-bold leading-[19.84px] text-[#049783] whitespace-nowrap">
                Open
                <ArrowRight />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
