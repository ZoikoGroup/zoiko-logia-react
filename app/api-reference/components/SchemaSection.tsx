import SectionHead from "./SectionHead";
import { Block, TD, TH, TableCard } from "./ui";

const CARDS = [
  {
    label: "Names",
    title: 'Never "cleaned up"',
    text: "Technical identifiers are shown exactly as the source states them.",
  },
  {
    label: "Requirements",
    title: "Stated, not inferred",
    text: "Required, optional, nullable and conditional states appear only with a defined rule.",
  },
  {
    label: "Values",
    title: "Synthetic only",
    text: "Examples never contain real customer, contract, accounting or transaction data.",
  },
];

const SOURCE_REQUIRED = <span className="text-[#d97f0e]">Source required</span>;

export default function SchemaSection() {
  return (
    <Block id="schema" gap="gap-4">
      <SectionHead
        n={6}
        title="How a schema will be presented."
        lead="Names, types and requirements come from the source, character for character."
      />

      <TableCard>
        <table className="w-full min-w-[640px] border-collapse">
          <thead>
            <tr>
              <th className={TH}>Field</th>
              <th className={TH}>Type</th>
              <th className={TH}>Required</th>
              <th className={TH}>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className={`${TD} text-left font-mono text-[12px] font-bold leading-[18.6px] text-[#071a33]`}>
                example_field
              </th>
              <td className={TD}>{SOURCE_REQUIRED}</td>
              <td className={TD}>{SOURCE_REQUIRED}</td>
              <td className={`${TD} text-[#5c6672]`}>
                Illustrative row. Real fields, types and descriptions appear only from a governed source.
              </td>
            </tr>
            <tr>
              <th scope="row" className={`${TD} text-left font-mono text-[12px] font-bold leading-[18.6px] text-[#071a33]`}>
                example_object
              </th>
              <td className={TD}>{SOURCE_REQUIRED}</td>
              <td className={TD}>{SOURCE_REQUIRED}</td>
              <td className={`${TD} text-[#5c6672]`}>
                Nested fields expand in a tree that preserves hierarchy and source order, and indentation is never the
                only cue.
              </td>
            </tr>
          </tbody>
        </table>
      </TableCard>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {CARDS.map((c) => (
          <article
            key={c.label}
            className="flex flex-col gap-[5.1px] rounded-[14px] border border-[#e3d9c2] bg-white p-5"
          >
            <p className="text-[10px] font-bold uppercase leading-4 tracking-[0.6px] text-[#049783]">{c.label}</p>
            <h3 className="pt-[1.9px] text-[14px] font-bold leading-[22.4px] tracking-[-0.21px] text-[#071a33]">
              {c.title}
            </h3>
            <p className="text-[12.6px] leading-[20.16px] text-[#5c6672]">{c.text}</p>
          </article>
        ))}
      </div>
    </Block>
  );
}
