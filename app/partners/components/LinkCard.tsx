import Link from "next/link";
import ArrowRight from "./ArrowRight";
import { NW } from "./tokens";

export interface LinkCardProps {
  image: string;
  /** Crop of the photo inside its frame (identical in the desktop and mobile Figma frames). */
  crop: string;
  title: string;
  body: React.ReactNode;
  cta: string;
  href: string;
  /** Highlighted card ("This page") with the filled orange link. */
  current?: boolean;
  /** Extra bottom padding under the body (desktop) so a card with fewer lines matches its row. */
  bodyPad?: string;
}

/** Photo card used by the router and the "inside a partner profile" rows. */
export default function LinkCard({ image, crop, title, body, cta, href, current, bodyPad = "" }: LinkCardProps) {
  return (
    <article
      className={`flex flex-col overflow-clip rounded-[14px] border bg-white ${
        current ? "border-[#f59a23] shadow-[0_0_0_1px_#f59a23]" : "border-[#e3d9c2]"
      }`}
    >
      <div className="relative aspect-[372/196.56] w-full shrink-0 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt=""
          loading="lazy"
          className={`pointer-events-none absolute max-w-none ${crop}`}
        />
        {current && (
          <span className="absolute left-[10px] top-[10px] rounded-[20px] bg-[#f59a23] px-[10px] py-1 text-[9.8px] font-bold uppercase leading-[15.68px] tracking-[0.392px] text-[#071a33]">
            This page
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col px-[18px] pb-[18px] pt-4">
        <h3 className="pb-[4.99px] text-[14px] font-bold leading-[22.4px] tracking-[-0.138px] text-[#071a33]">
          {title}
        </h3>
        <p className={`pb-3 text-[12.3px] leading-[19px] text-[#5c6672] ${NW} ${bodyPad}`}>{body}</p>
        <div className="mt-auto flex">
          <Link
            href={href}
            className={`flex items-center justify-center rounded-[6px] border px-[14px] py-2 text-center text-[12.4px] font-semibold leading-[19.84px] whitespace-nowrap text-[#071a33] transition-opacity hover:opacity-90 ${
              current ? "border-transparent bg-[#f59a23]" : "border-[#e3d9c2]"
            }`}
          >
            {cta}
            {!current && <ArrowRight />}
          </Link>
        </div>
      </div>
    </article>
  );
}
