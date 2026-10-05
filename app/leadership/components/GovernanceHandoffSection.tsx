import Link from "next/link";
import Eyebrow from "./Eyebrow";
import ArrowRight from "./ArrowRight";
import Br from "./Br";
import ResponsiveImage from "./ResponsiveImage";
import { NW } from "./tokens";

const HANDOFFS = [
  {
    question: "How is the organization governed?",
    note: (
      <>
        Governance owns mechanisms, policies and decision control.
        <Br k="m" />
        Leadership doesn&apos;t summarize them.
      </>
    ),
    label: "Governance",
    href: "/governance",
  },
  {
    question: "What compliance evidence exists?",
    note: "No person-level certification is inferred.",
    label: "Compliance",
    href: "/compliance",
  },
  {
    question: "How is data protected?",
    note: "No biography-level security claims.",
    label: "Privacy & Security",
    href: "/privacy-security",
  },
  {
    question: "How do I evaluate the provider?",
    note: "Leadership identity is context only.",
    label: "Provider Due Diligence",
    href: "/buyers-brief",
  },
  {
    question: "What accessibility evidence exists?",
    note: "Evidence lives separately from this page.",
    label: "Accessibility",
    href: "/compliance",
  },
  {
    question: "What changed recently?",
    note: "No roadmap or release history on leadership pages.",
    label: "Release Notes",
    href: "/documentation",
  },
  {
    question: "Where is technical contract truth?",
    note: "Technical capability is never attributed to a biography.",
    label: "API Reference",
    href: "/documentation",
  },
];

export default function GovernanceHandoffSection() {
  return (
    <section className="border-t border-[#e3d9c2] bg-[#efe8d6] py-[46px] lg:px-[120px] lg:py-16">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-[30px] px-5 lg:gap-[29.99px] lg:px-8">
        <div className="flex w-full flex-col items-center gap-12 lg:flex-row lg:justify-center">
          <div className="relative h-[297.59px] w-full max-w-[480px] shrink-0 overflow-clip rounded-[14px] lg:h-[435.19px] lg:w-auto lg:min-w-0 lg:max-w-none lg:flex-1">
            <ResponsiveImage
              mobile="/leadership/governance-trust-mobile.webp"
              desktop="/leadership/governance-trust-desktop.webp"
              alt="Reviewer following a question to the page that owns the answer"
              sizes="(min-width: 1440px) 544px, (min-width: 1024px) 45vw, (max-width: 520px) 100vw, 480px"
            />
          </div>

          <div className="flex w-full flex-col items-start gap-[13.3px] pb-[14px] pt-[6.9px] lg:min-w-0 lg:flex-1 lg:gap-[13.4px]">
            <Eyebrow>Governance &amp; Trust Handoff</Eyebrow>

            <h2
              className={`w-full font-[family-name:var(--font-serif4)] text-[25px] font-semibold leading-[32px] tracking-[-0.25px] text-[#071a33] ${NW}`}
            >
              Leadership names people. Other
              <Br k="m" />
              pages hold the
              <Br k="d" />
              evidence.
            </h2>

            <p className={`w-full text-[14px] leading-[23.8px] text-[#5c6672] ${NW}`}>
              A person&apos;s listing never stands in for proof. For any
              <Br k="m" />
              claim about governance,
              <Br k="d" />
              compliance, security or the
              <Br k="m" />
              product, go to the destination that owns it.
            </p>
          </div>
        </div>

        <ul className="flex w-full flex-col gap-2">
          {HANDOFFS.map((h) => (
            <li key={h.question}>
              <Link
                href={h.href}
                className="flex min-h-[67.8px] w-full flex-wrap items-center justify-between gap-x-4 gap-y-[14px] rounded-[10px] border border-[#e3d9c2] bg-white px-[18px] py-[13px] transition-colors hover:border-[#cdbf9f] lg:gap-x-6"
              >
                <span className={`flex flex-col items-start gap-[0.8px] ${NW}`}>
                  <span className="text-[13px] font-semibold leading-[20.8px] text-[#071a33]">
                    {h.question}
                  </span>
                  <span className="text-[11.3px] font-medium leading-[18px] text-[#8b93a0]">
                    {h.note}
                  </span>
                </span>
                <span className="text-[12.4px] font-bold leading-[19.84px] text-[#049783] whitespace-nowrap">
                  {h.label}
                  <ArrowRight />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
