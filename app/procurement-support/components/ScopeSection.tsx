import Eyebrow from "./Eyebrow";
import Br from "./Br";
import ResponsiveImage from "./ResponsiveImage";
import { NW } from "./tokens";

interface ScopeRow {
  layer: string;
  does: React.ReactNode;
  doesnt: React.ReactNode;
}

const ROWS: ScopeRow[] = [
  {
    layer: "Process",
    does: (
      <>
        Explains which owner-approved procurement step or
        <Br k="m" />
        question can be
        <Br k="d" />
        coordinated.
      </>
    ),
    doesnt: "Invent stages or universal requirements.",
  },
  {
    layer: "Routing",
    does: (
      <>
        Sends your question to the correct owner or authoritative
        <Br k="m" />
        destination.
      </>
    ),
    doesnt: "Promise a specific person or team will respond.",
  },
  {
    layer: "Context",
    does: "Preserves minimal organization, need and source context.",
    doesnt: "Profile you or enrich your details behind the scenes.",
  },
  {
    layer: "Evidence",
    does: "References Provider Due Diligence and Trust records.",
    doesnt: (
      <>
        Copy evidence, change its status, or upgrade your
        <Br k="m" />
        access to it.
      </>
    ),
  },
  {
    layer: "Commercial",
    does: "Routes general sales questions to Contact Sales.",
    doesnt: "Answer pricing, quote or discount questions.",
  },
  {
    layer: "Legal",
    does: "Coordinates process only.",
    doesnt: "Give legal advice or interpret contract terms.",
  },
  {
    layer: "Documents",
    does: (
      <>
        Confirm any required exchange through an approved
        <Br k="m" />
        controlled channel, if
        <Br k="d" />
        one exists.
      </>
    ),
    doesnt: (
      <>
        Accept public uploads. There is no upload control on this
        <Br k="m" />
        page.
      </>
    ),
  },
  {
    layer: "Status",
    does: "Confirm receipt of your request.",
    doesnt: (
      <>
        Show &quot;in review&quot;, &quot;approved&quot; or &quot;complete&quot; without a
        <Br k="m" />
        process authority
        <Br k="d" />
        behind it.
      </>
    ),
  },
];

/* Desktop: a 3-column table row. Mobile: the same cells stacked. */
const COLS =
  "lg:grid lg:grid-cols-[170px_minmax(0,1fr)_minmax(0,1fr)] lg:gap-x-[18px] lg:px-[18px]";
const LABEL =
  "text-[10px] font-bold uppercase leading-[15px] tracking-[0.5px] text-[#8b93a0]";

export default function ScopeSection() {
  return (
    <section className="border-t border-[#e3d9c2] bg-[#efe8d6] py-[46px] lg:px-[120px] lg:py-16">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-[33.99px] px-5 lg:gap-0 lg:px-8">
        <div className="flex w-full flex-col items-center gap-12 lg:flex-row lg:justify-center">
          {/* Text — second on mobile, first on desktop */}
          <div className="order-2 flex w-full flex-col items-start gap-[13.2px] pb-[13.99px] pt-[6.91px] lg:order-1 lg:min-w-0 lg:flex-1 lg:gap-[13.3px] lg:pb-[14px] lg:pt-[6.9px]">
            <Eyebrow>What Procurement Support Owns</Eyebrow>

            <h2
              className={`w-full font-[family-name:var(--font-serif4)] text-[25px] font-semibold leading-[32px] tracking-[-0.25px] text-[#071a33] ${NW}`}
            >
              Intentionally narrow, so it can
              <Br k="m" />
              stay accurate.
            </h2>

            <p className={`w-full text-[14px] leading-[23.8px] text-[#5c6672] ${NW}`}>
              Evidence evaluation and procurement process support
              <Br k="m" />
              are different jobs. This
              <Br k="d" />
              page helps with the second, and
              <Br k="m" />
              points to the owners of the first. It never copies a
              <Br k="md" />
              provider answer into a separate record.
            </p>
          </div>

          {/* Image — first on mobile, second on desktop */}
          <div className="relative order-1 h-[297.59px] w-full max-w-[480px] shrink-0 overflow-clip rounded-[14px] lg:order-2 lg:h-[435.19px] lg:w-auto lg:min-w-0 lg:max-w-none lg:flex-1">
            <ResponsiveImage
              mobile="/procurement-support/scope-mobile.webp"
              desktop="/procurement-support/scope-desktop.webp"
              alt="Colleagues separating evidence questions from process questions"
              sizes="(min-width: 1440px) 544px, (min-width: 1024px) 45vw, (max-width: 520px) 100vw, 480px"
            />
          </div>
        </div>

        {/* Column labels (desktop only) */}
        <div
          aria-hidden
          className={`${COLS} hidden min-h-[58.8px] items-end pb-[9px] pt-[33px] text-[10.5px] font-bold uppercase leading-[16.8px] tracking-[0.525px] text-[#8b93a0]`}
        >
          <span>Layer</span>
          <span>What it does</span>
          <span>What it doesn&apos;t</span>
        </div>

        <ul className="flex w-full flex-col gap-2">
          {ROWS.map((row) => (
            <li
              key={row.layer}
              className={`${COLS} flex flex-col items-start gap-[6px] rounded-[10px] border border-[#e3d9c2] bg-white px-[18px] py-[14.6px] lg:min-h-[65px] lg:py-[14px]`}
            >
              <p className="w-full text-[13px] font-bold leading-[20.8px] text-[#071a33]">
                {row.layer}
              </p>

              <div className="flex w-full flex-col gap-px">
                <p className={LABEL}>Does</p>
                <p className={`text-[12.2px] leading-[18.3px] text-[#5c6672] ${NW}`}>{row.does}</p>
              </div>

              <div className="flex w-full flex-col gap-px">
                <p className={LABEL}>Doesn&apos;t</p>
                <p className={`text-[12.2px] leading-[18.3px] text-[#d97f0e] ${NW}`}>{row.doesnt}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
