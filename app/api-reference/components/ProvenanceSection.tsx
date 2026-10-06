import SectionHead, { Br } from "./SectionHead";
import { Block, Pill, Rule, TD, TH, TableCard } from "./ui";

const ROWS: { field: string; tone?: "amber"; status: string }[] = [
  { field: "Owning source", status: "Source required" },
  { field: "Publication state", status: "Source required" },
  { field: "Contract context", status: "Source required" },
  { field: "Reviewed / updated", status: "Not published" },
  { field: "Artifact reference", status: "Not published" },
  { field: "Limitations", status: "Not publicly documented" },
];

export default function ProvenanceSection() {
  return (
    <Block id="provenance">
      <SectionHead
        n={2}
        title="Where this comes from, before any syntax appears."
        lead={
          <>
            Technical syntax without source provenance isn&apos;t production documentation. Every field below is
            <Br k="d" />
            shown only if a governed source supplies it.
          </>
        }
      />

      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[461fr_462fr] lg:gap-9">
        <div className="relative aspect-[461/357.27] w-full overflow-hidden rounded-[16px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/api-reference/provenance.webp"
            alt=""
            loading="lazy"
            className="absolute inset-0 size-full object-cover"
          />
        </div>

        <TableCard>
          <table className="w-full min-w-[420px] border-collapse">
            <thead>
              <tr>
                <th className={TH}>Field</th>
                <th className={TH}>Status</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.field}>
                  <th scope="row" className={`${TD} text-left font-bold text-[#071a33]`}>
                    {r.field}
                  </th>
                  <td className={TD}>
                    <Pill tone="amber">{r.status}</Pill>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableCard>
      </div>

      <Rule label="Provenance rule.">
        If we can&apos;t identify the authoritative source and applicable contract context, the item doesn&apos;t
        render as current production truth.
      </Rule>
    </Block>
  );
}
