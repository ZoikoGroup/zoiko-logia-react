import Link from "next/link";

type Tone = "amber" | "neutral" | "teal";

const PILL: Record<Tone, { box: string; dot: string; text: string }> = {
  amber: {
    box: "border-[rgba(217,127,14,0.4)] bg-[rgba(245,154,35,0.1)]",
    dot: "bg-[#d97f0e]",
    text: "text-[#d97f0e]",
  },
  neutral: { box: "border-[#e3d9c2] bg-transparent", dot: "bg-[#8b93a0]", text: "text-[#8b93a0]" },
  teal: {
    box: "border-[rgba(4,151,131,0.4)] bg-[rgba(0,191,166,0.1)]",
    dot: "bg-[#049783]",
    text: "text-[#049783]",
  },
};

/** Small status chip: a dot and an uppercase label ("Source required", "Not published"…). */
export function Pill({
  tone = "amber",
  children,
  href,
}: {
  tone?: Tone;
  children: React.ReactNode;
  href?: string;
}) {
  const t = PILL[tone];
  const chip = (
    <span
      className={`inline-flex h-[24.27px] items-center gap-[6px] whitespace-nowrap rounded-[20px] border px-[10px] text-[10.5px] font-bold uppercase leading-[16.27px] tracking-[0.315px] ${t.box} ${t.text}`}
    >
      <span aria-hidden className={`size-[6px] rounded-[3px] ${t.dot}`} />
      {children}
    </span>
  );
  return href ? <Link href={href}>{chip}</Link> : chip;
}

/** Orange left-border rule ("Provenance rule.", "Access rule." …). */
export function Rule({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="w-full rounded-br-[10px] rounded-tr-[10px] border-l-[3px] border-[#f59a23] bg-[rgba(245,154,35,0.09)] px-[18px] py-[13px] text-[12.6px] leading-[20.79px] text-[#123055] min-[1440px]:whitespace-nowrap">
      <strong className="font-bold text-[#071a33]">{label}</strong> {children}
    </div>
  );
}

/** Wrapper for each numbered block: anchor id, top rule and the shared vertical rhythm. */
export function Block({
  id,
  gap = "gap-[22px]",
  children,
}: {
  id: string;
  gap?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`flex scroll-mt-24 flex-col border-t border-[#e3d9c2] py-[44px] ${gap}`}>
      {children}
    </section>
  );
}

/** The framed table used for the specimen / status grids. Scrolls sideways when it can't fit. */
export function TableCard({ children }: { children: React.ReactNode }) {
  return <div className="w-full overflow-x-auto rounded-[14px] border border-[#e3d9c2] bg-white">{children}</div>;
}

export const TH =
  "bg-[#efe8d6] px-4 py-3 text-left text-[10.5px] font-bold uppercase leading-[16.8px] tracking-[0.63px] text-[#8b93a0] whitespace-nowrap";
export const TD = "border-t border-[#e3d9c2] px-4 py-3 align-top text-[12.6px] leading-[19.53px]";

/** Three-up (or n-up) cards: a teal label, a bold title and a short line. */
export function InfoCards({ cards }: { cards: { label: string; title: string; text: React.ReactNode }[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {cards.map((c) => (
        <article key={c.label} className="flex flex-col gap-[5.1px] rounded-[14px] border border-[#e3d9c2] bg-white p-5">
          <p className="text-[10px] font-bold uppercase leading-4 tracking-[0.6px] text-[#049783]">{c.label}</p>
          <h3 className="pt-[1.9px] text-[14px] font-bold leading-[22.4px] tracking-[-0.21px] text-[#071a33]">
            {c.title}
          </h3>
          <p className="text-[12.6px] leading-[20.16px] text-[#5c6672]">{c.text}</p>
        </article>
      ))}
    </div>
  );
}
