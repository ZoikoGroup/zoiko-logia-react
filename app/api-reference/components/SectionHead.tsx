import Br from "./Br";

export { Br };

/**
 * Numbered section header used by every block of the page: a navy numeral tile, a serif heading and a
 * short lead. `children` is the heading text, `lead` the paragraph under it (both may contain <Br />).
 */
export default function SectionHead({
  n,
  title,
  lead,
}: {
  n: number;
  title: React.ReactNode;
  lead?: React.ReactNode;
}) {
  return (
    <div className="flex w-full items-start gap-4">
      <div className="flex h-[39px] w-9 shrink-0 flex-col items-start pt-[3px]">
        <span className="flex size-9 items-center justify-center rounded-[10px] bg-[#071a33] pb-[6.5px] pt-[5.5px] font-[family-name:var(--font-serif4)] text-[15px] font-bold leading-6 text-[#f59a23]">
          {n}
        </span>
      </div>
      <div className="flex min-w-0 flex-col gap-[7.4px]">
        <h2 className="font-[family-name:var(--font-serif4)] text-[24px] font-semibold leading-[30px] tracking-[-0.36px] text-[#071a33] sm:text-[28px] sm:leading-[34.16px] sm:tracking-[-0.42px] min-[1440px]:whitespace-nowrap">
          {title}
        </h2>
        {lead && (
          <p className="max-w-[740px] text-[14px] leading-[23.8px] text-[#5c6672] min-[1440px]:whitespace-nowrap">
            {lead}
          </p>
        )}
      </div>
    </div>
  );
}
