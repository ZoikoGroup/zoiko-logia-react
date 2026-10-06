import Eyebrow from "./Eyebrow";
import Br from "./Br";
import HandoffRows, { type HandoffRow } from "./HandoffRows";
import { NW } from "./tokens";

const ROWS: HandoffRow[] = [
  {
    title: "Privacy practices and rights",
    note: (
      <>
        Owner: Privacy &amp; Security. No duplicate rights, retention or
        <Br k="m" />
        transfer detail here.
      </>
    ),
    cta: "Privacy & Security",
    href: "/privacy-security",
  },
  {
    title: "Data retention and deletion",
    note: "Owner: Data Retention.",
    cta: "Data Retention",
    href: "/data-retention",
  },
  {
    title: "Manage cookie and consent preferences",
    note: "A tool for managing your choices, not a legal document.",
    cta: "Cookie Preferences",
    href: "/cookie-preferences",
  },
  {
    title: "Compliance information",
    note: "Owner: Compliance. No blanket legal-compliance claim.",
    cta: "Compliance",
    href: "/compliance",
  },
  {
    title: "Accessibility",
    note: "Owner: Accessibility. No conformance inferred.",
    cta: "Accessibility",
    href: "/accessibility",
  },
  {
    title: "Governance",
    note: "Owner: Governance. Process is not turned into a legal clause.",
    cta: "Governance",
    href: "/governance",
  },
  {
    title: "Provider evaluation and questionnaires",
    note: (
      <>
        Owner: Provider Due Diligence. Evidence isn&apos;t duplicated
        <Br k="m" />
        here.
      </>
    ),
    cta: "Provider Due Diligence",
    href: "/buyers-brief",
  },
  {
    title: "Technical contracts and changes",
    note: (
      <>
        Owners: API Reference and Release Notes. Legal obligations
        <Br k="m" />
        stay in the source document.
      </>
    ),
    cta: "API Reference",
    href: "/api-reference",
  },
];

export default function PrivacySection() {
  return (
    <section className="border-t border-[#e3d9c2] bg-[#efe8d6]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-7 px-5 py-[46px] lg:px-8 lg:py-16">
        <div className="flex w-full max-w-[720px] flex-col items-start gap-[10px] pt-[6.91px]">
          <Eyebrow>Privacy, Data &amp; Trust Handoffs</Eyebrow>

          <h2
            className={`w-full pt-[2.815px] font-[family-name:var(--font-serif4)] text-[26px] font-semibold leading-[33.28px] tracking-[-0.26px] text-[#071a33] lg:pt-[2.68px] ${NW}`}
          >
            Legal points to the owner. It
            <Br k="m" />
            doesn&apos;t restate their claims.
          </h2>

          <p className={`w-full text-[14px] leading-[23.1px] text-[#5c6672] ${NW}`}>
            These pages hold the detail. We never turn a trust or
            <Br k="m" />
            governance statement into a legal conclusion.
          </p>
        </div>

        <HandoffRows rows={ROWS} />
      </div>
    </section>
  );
}
