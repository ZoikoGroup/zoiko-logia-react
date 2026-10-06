import Link from "next/link";
import ArrowRight from "./ArrowRight";
import { NW } from "./tokens";

export interface HandoffRow {
  title: string;
  note: React.ReactNode;
  cta: string;
  href: string;
}

/** White link rows: a title and note on the left, the owner's link on the right. */
export default function HandoffRows({ rows }: { rows: HandoffRow[] }) {
  return (
    <div className="flex w-full flex-col gap-2">
      {rows.map((r) => (
        <Link
          key={r.cta + r.title}
          href={r.href}
          className="flex flex-wrap items-center justify-between gap-x-[14px] gap-y-[14px] rounded-[10px] border border-[#e3d9c2] bg-white px-[18px] py-[13px] transition-colors hover:border-[#cdbf9f]"
        >
          <span className="flex flex-col gap-[0.8px]">
            <span className="text-[13px] font-semibold leading-[20.8px] text-[#071a33]">{r.title}</span>
            <span className={`text-[11.3px] font-medium leading-[18px] text-[#8b93a0] ${NW}`}>{r.note}</span>
          </span>
          <span className="whitespace-nowrap text-[12.4px] font-bold leading-[19.84px] text-[#049783]">
            {r.cta}
            <ArrowRight />
          </span>
        </Link>
      ))}
    </div>
  );
}
