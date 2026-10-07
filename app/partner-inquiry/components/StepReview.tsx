import Link from "next/link";
import Br from "./Br";
import { Actions, Notice, StepHead } from "./fields";
import { INTENTS, type InquiryData, type SetField } from "./formData";

interface Props {
  data: InquiryData;
  set: SetField;
  onBack: () => void;
  onEdit: (step: number) => void;
  onSend: () => void;
}

function Card({
  title,
  onEdit,
  rows,
}: {
  title: string;
  onEdit: () => void;
  rows: { term: string; detail: string }[];
}) {
  return (
    <section className="flex flex-col gap-2 rounded-[10px] border border-[#e3d9c2] px-4 py-[14px]">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-[11px] font-bold uppercase leading-[17.6px] tracking-[0.55px] text-[#8b93a0]">{title}</h3>
        <button
          type="button"
          onClick={onEdit}
          className="cursor-pointer text-[12px] font-semibold text-[#049783] hover:underline"
        >
          Edit
        </button>
      </div>
      <dl>
        {rows.map((r, i) => (
          <div key={r.term} className={i > 0 ? "pt-[6px]" : ""}>
            <dt className="text-[11.5px] leading-[18.4px] text-[#8b93a0]">{r.term}</dt>
            <dd className="whitespace-pre-wrap break-words text-[13px] leading-[20.8px] text-[#071a33]">{r.detail}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export default function StepReview({ data, set, onBack, onEdit, onSend }: Props) {
  const intent = INTENTS.find((i) => i.value === data.intent)?.title ?? "Not selected";

  const relationship = [
    { term: "Objective", detail: data.objective },
    { term: "Capability you may contribute", detail: data.capability },
  ];
  const optional = [
    { term: "Product area", detail: data.productArea || "None selected" },
    { term: "Timing", detail: data.timing },
  ];
  const requester = [
    { term: "Name", detail: data.name },
    { term: "Email", detail: data.email },
    { term: "Organization", detail: data.organization },
    ...(data.role ? [{ term: "Role / function", detail: data.role }] : []),
    ...(data.website ? [{ term: "Website", detail: data.website }] : []),
    ...(data.additional ? [{ term: "Additional context", detail: data.additional }] : []),
  ];

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSend();
      }}
      className="flex flex-col gap-[5px] px-5 pb-[26px] pt-[27px] sm:px-[30px]"
    >
      <StepHead kicker="Step 4 of 4 · Review & send" title="Check your inquiry" lead="Edit anything before you send." />

      <div className="flex flex-col gap-3 pb-[6.99px] pt-[15px]">
        <Card title="Intent" onEdit={() => onEdit(1)} rows={[{ term: "Partnership intent", detail: intent }]} />
        <Card title="Relationship" onEdit={() => onEdit(2)} rows={relationship} />
        <Card title="Optional context" onEdit={() => onEdit(2)} rows={optional} />
        <Card title="Requester" onEdit={() => onEdit(3)} rows={requester} />
      </div>

      <Notice>
        <p className="min-[1440px]:whitespace-nowrap">
          Before sending, please remove any confidential, customer, credential, tax, bank or contract data. We
          don&apos;t state that submissions
          <Br k="d" />
          are confidential or covered by an NDA.
        </p>
      </Notice>

      <label className="flex cursor-pointer items-start gap-2 pb-[3px] pt-[12px] text-[12px] font-medium leading-[18.6px] text-[#5c6672]">
        <input
          type="checkbox"
          required
          checked={data.ack}
          onChange={(e) => set("ack", e.target.checked)}
          className="mt-[2px] size-4 shrink-0 cursor-pointer accent-[#049783]"
        />
        <span>
          I acknowledge the{" "}
          <Link
            href="/privacy-security"
            className="font-semibold text-[#049783] underline [text-underline-position:from-font]"
          >
            privacy information
          </Link>{" "}
          and agree to be contacted about this inquiry. <span className="text-[#d97f0e]">*</span>
        </span>
      </label>

      <label className="flex cursor-pointer items-start gap-2 pb-[21.4px] pt-[7px] text-[12px] font-medium leading-[18.6px] text-[#5c6672]">
        <input
          type="checkbox"
          checked={data.marketing}
          onChange={(e) => set("marketing", e.target.checked)}
          className="mt-[2px] size-4 shrink-0 cursor-pointer accent-[#049783]"
        />
        <span>
          Optional: send me occasional ZoikoLogia™ updates. This is separate from your inquiry and not required.
        </span>
      </label>

      <Actions onBack={onBack} primary="Send Partner Inquiry" />
    </form>
  );
}
