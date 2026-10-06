import Link from "next/link";
import Eyebrow from "./Eyebrow";
import Br from "./Br";

const WIDE = "min-[1440px]:whitespace-nowrap";

const ROUTES = [
  { label: "Book a Demo", note: "Guided walkthrough", href: "/book-a-demo" },
  { label: "Enterprise Briefing", note: "Several teams deciding", href: "/request-enterprise-briefing" },
  { label: "Request Pilot", note: "Try one workflow", href: "/request-pilot" },
  { label: "Trust & evidence", note: "No form needed", href: "/compliance" },
];

export default function IntroPanel() {
  return (
    <div className="flex w-full flex-col items-start gap-[13.7px] pt-[6.91px]">
      <Eyebrow>Contact Sales</Eyebrow>

      <h1
        className={`w-full font-[family-name:var(--font-serif4)] text-[30px] font-semibold leading-[36px] tracking-[-0.3px] text-[#071a33] sm:text-[34px] sm:leading-[40.12px] sm:tracking-[-0.34px] ${WIDE}`}
      >
        Talk with Sales about your
        <Br k="d" />
        ZoikoLogia™ evaluation.
      </h1>

      <p className={`w-full max-w-[420px] pt-[2.3px] text-[15px] leading-[25.5px] text-[#5c6672] ${WIDE}`}>
        Tell us what you&apos;re evaluating or what you need to
        <Br k="d" />
        coordinate. We&apos;ll route it through the approved sales
        <Br k="d" />
        process.
      </p>

      <div className="w-full border-t border-[#e3d9c2] pt-[43.3px]">
        <h2 className="pb-[10.6px] text-[11px] font-bold uppercase leading-[17.6px] tracking-[0.77px] text-[#8b93a0]">
          Looking for something more specific?
        </h2>
        <ul>
          {ROUTES.map((r) => (
            <li key={r.label}>
              <Link
                href={r.href}
                className="flex items-baseline justify-between gap-4 border-b border-[#e3d9c2] pb-[11.39px] pt-[10px] transition-colors hover:border-[#cdbf9f]"
              >
                <span className="text-[14px] font-semibold leading-[22.4px] text-[#071a33]">{r.label}</span>
                <span className="text-right text-[12px] font-medium leading-[19.2px] text-[#5c6672]">{r.note}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <p className={`w-full max-w-[420px] pt-[8.3px] text-[12px] leading-[19.2px] text-[#8b93a0] ${WIDE}`}>
        Submitting doesn&apos;t confirm pricing, availability, response timing, account
        <Br k="d" />
        ownership or commercial terms.
      </p>
    </div>
  );
}
