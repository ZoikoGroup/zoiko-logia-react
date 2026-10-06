import Link from "next/link";
import SectionHead from "./SectionHead";
import { TD, TH, TableCard } from "./ui";

const LINK = "font-bold text-[#049783] underline [text-underline-position:from-font]";

const ROWS: { q: string; where: React.ReactNode; warn?: boolean }[] = [
  {
    q: "What changed?",
    where: (
      <Link href="/documentation" className={LINK}>
        Release Notes
      </Link>
    ),
  },
  {
    q: "Is it deprecated?",
    where: (
      <>
        Only a source-defined lifecycle status, or{" "}
        <Link href="/documentation" className={LINK}>
          Release Notes
        </Link>
        .
      </>
    ),
  },
  { q: "What replaces it?", where: "An approved replacement link, if one exists." },
  { q: "Is it breaking?", where: "Never inferred from a version number or schema difference.", warn: true },
  { q: "How long is it supported?", where: "No support window is implied.", warn: true },
];

export default function ChangesSection() {
  return (
    <section
      id="changes"
      className="flex scroll-mt-24 flex-col gap-6 border-t border-[#e3d9c2] pb-[66px] pt-[44px]"
    >
      <SectionHead
        n={10}
        title="Two destinations, two different jobs."
        lead="API Reference describes the current approved contract. Release Notes owns change history."
      />

      <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[461fr_462fr] lg:gap-9">
        <div className="relative aspect-[461/357.27] w-full overflow-hidden rounded-[16px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/api-reference/changes.webp"
            alt=""
            loading="lazy"
            className="absolute inset-0 size-full object-cover"
          />
        </div>

        <TableCard>
          <table className="w-full min-w-[420px] border-collapse">
            <thead>
              <tr>
                <th className={TH}>Question</th>
                <th className={TH}>Where</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.q}>
                  <th scope="row" className={`${TD} text-left font-bold text-[#071a33] whitespace-nowrap`}>
                    {r.q}
                  </th>
                  <td className={`${TD} ${r.warn ? "text-[#d97f0e]" : "text-[#5c6672]"}`}>{r.where}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableCard>
      </div>
    </section>
  );
}
