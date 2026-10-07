import Link from "next/link";
import Br from "./Br";

const LINK = "font-bold text-[#049783] underline [text-underline-position:from-font]";

const EXPLORE = [
  { label: "API Reference", href: "/api-reference" },
  { label: "Trust", href: "/compliance" },
];

export default function SubmittedView({ reference }: { reference: string }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex flex-col items-center gap-[8.8px] px-5 pb-11 pt-[82px] sm:px-[30px]"
    >
      <span className="flex size-[52px] items-center justify-center rounded-[26px] bg-[rgba(0,191,166,0.12)]">
        <svg aria-hidden viewBox="0 0 24 24" className="size-6" fill="none">
          <path
            d="M5 12.5l4.5 4.5L19 7.5"
            stroke="#049783"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      <h2 className="w-full pt-[6.2px] text-center font-[family-name:var(--font-serif4)] text-[22px] font-semibold leading-[35.2px] tracking-[-0.22px] text-[#071a33]">
        Partner inquiry received
      </h2>

      <p className="w-full max-w-[500px] pb-[7.76px] text-center text-[13.2px] leading-[21.78px] text-[#5c6672] min-[1440px]:whitespace-nowrap">
        Your inquiry was received for the approved routing and review process. This
        <Br k="d" />
        does not confirm partner status, integration, certification, commercial rights or
        <Br k="d" />
        terms, a response time or a meeting.
      </p>

      <span className="rounded-[20px] bg-[#efe8d6] px-[14px] pb-[5.69px] pt-[5.5px] text-[12px] font-bold leading-[19.2px] text-[#049783]">
        Reference {reference}
      </span>

      <p className="w-full max-w-[500px] pt-[8.2px] text-center text-[11.8px] leading-[19.47px] text-[#8b93a0]">
        Design preview: nothing was actually sent.
      </p>

      <div className="flex w-full max-w-[440px] flex-col gap-[6px]">
        <h3 className="pb-[0.59px] text-[11px] font-bold uppercase leading-[17.6px] tracking-[0.55px] text-[#8b93a0]">
          Explore while you wait
        </h3>
        {EXPLORE.map((l) => (
          <Link
            key={l.label}
            href={l.href}
            className="flex items-center justify-between gap-4 rounded-[8px] border border-[#e3d9c2] px-[14px] py-[10px] text-[13px] font-semibold leading-[20.8px] text-[#071a33] transition-colors hover:border-[#cdbf9f]"
          >
            {l.label}
            <svg aria-hidden viewBox="0 0 14 10" className="h-[10px] w-[14px] text-[#049783]" fill="none">
              <path
                d="M0.8 5h11.4M8.4 1.2 12.2 5 8.4 8.8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        ))}
      </div>

      <p className="w-full max-w-[500px] pb-[0.7px] pt-[8.4px] text-center text-[12.4px] leading-[20.46px] text-[#5c6672] min-[1440px]:whitespace-nowrap">
        Need something else?{" "}
        <Link href="/book-a-demo" className={LINK}>
          Book a Demo
        </Link>{" "}
        or{" "}
        <Link href="/request-pilot" className={LINK}>
          Request Pilot
        </Link>
        . There&apos;s no need to submit
        <Br k="d" />
        twice.
      </p>
    </div>
  );
}
