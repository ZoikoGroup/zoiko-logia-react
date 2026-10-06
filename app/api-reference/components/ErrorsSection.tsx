import SectionHead, { Br } from "./SectionHead";
import { Block, InfoCards } from "./ui";

const CARDS = [
  {
    label: "Traceability",
    title: "Source-defined only",
    text: "Correlation and trace field names stay exactly as published.",
  },
  {
    label: "Unknown behavior",
    title: "Marked, not guessed",
    text: `"Not public" or "undocumented" states route you to an approved evaluation path.`,
  },
  {
    label: "Live health",
    title: "A separate concern",
    text: "Contract documentation is distinct from any future operational-status page.",
  },
];

export default function ErrorsSection() {
  return (
    <Block id="errors" gap="gap-4">
      <SectionHead
        n={8}
        title="An honest gap beats a convincing fake."
        lead="Error behavior is documented only where a source documents it."
      />

      <div className="relative isolate flex min-h-[260px] items-center overflow-clip rounded-[20px] bg-[#071a33] py-7">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/api-reference/errors-band.webp"
          alt=""
          loading="lazy"
          className="absolute inset-0 -z-20 size-full object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "linear-gradient(100deg, rgba(7,26,51,0.95) 0%, rgba(7,26,51,0.65) 55%, rgba(7,26,51,0.3) 100%)",
          }}
        />
        <div className="flex w-full max-w-[620px] flex-col gap-[11.2px] px-6 py-[30px] sm:px-11 sm:py-[38px]">
          <h2 className="font-[family-name:var(--font-serif4)] text-[23px] font-semibold leading-[28.75px] tracking-[-0.345px] text-white">
            No error catalog is published yet.
          </h2>
          <p className="text-[14px] leading-[23.8px] text-[#d7e0e8] min-[1440px]:whitespace-nowrap">
            We list exact documented errors, request-tracing concepts and retry behavior
            <Br k="d" />
            only when they&apos;re source-approved. We never infer retryability from a status
            <Br k="d" />
            family, and we never show stack traces, internal service names or tenant
            <Br k="d" />
            identifiers.
          </p>
        </div>
      </div>

      <InfoCards cards={CARDS} />
    </Block>
  );
}
