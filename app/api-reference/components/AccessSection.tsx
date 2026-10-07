import Link from "next/link";
import SectionHead, { Br } from "./SectionHead";
import { Block, Rule, TD, TH, TableCard } from "./ui";

const ROWS: { topic: string; text: string; warn?: boolean }[] = [
  {
    topic: "Authentication",
    text: "Names a protocol or flow only from an approved technical or security source.",
  },
  { topic: "Authorization", text: "Shows a scope or permission model only when governed." },
  {
    topic: "Environments",
    text: "Distinguishes sandbox, non-production and production only if a source establishes them.",
  },
  {
    topic: "Entitlement",
    text: "Visibility grants none. A documented interface isn't enabled for every customer.",
    warn: true,
  },
  { topic: "Credentials", text: "Never shown, in docs, examples, analytics or URLs.", warn: true },
];

export default function AccessSection() {
  return (
    <Block id="access">
      <SectionHead
        n={7}
        title="Documentation and access are separately governed."
        lead="Being able to read a contract is never the same as being able to use it."
      />

      <div className="grid grid-cols-1 items-center gap-6 pt-[2px] lg:grid-cols-[462fr_461fr] lg:gap-[35px]">
        <TableCard>
          <table className="w-full min-w-[460px] border-collapse">
            <thead>
              <tr>
                <th className={TH}>Topic</th>
                <th className={TH}>What this page does</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.topic}>
                  <th scope="row" className={`${TD} text-left font-bold text-[#071a33] whitespace-nowrap`}>
                    {r.topic}
                  </th>
                  <td className={`${TD} ${r.warn ? "text-[#d97f0e]" : "text-[#5c6672]"}`}>{r.text}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableCard>

        <div className="relative aspect-[461/357.27] w-full overflow-hidden rounded-[16px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/api-reference/access.webp"
            alt=""
            loading="lazy"
            className="absolute inset-0 size-full object-cover"
          />
        </div>
      </div>

      <Rule label={`No "Try it" console.`}>
        We don&apos;t show an interactive request executor, credential generator or environment switcher, and not a<Br k="d" />
        disabled mock either, because a mock implies a capability that may not exist.<Br k="d" /> For access and security, see{" "}
        <Link href="/privacy-security" className="text-[#049783] underline [text-underline-position:from-font]">
          Privacy &amp; Security
        </Link>
        .
      </Rule>
    </Block>
  );
}
