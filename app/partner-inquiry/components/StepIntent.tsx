import { Actions, StepHead } from "./fields";
import { INTENTS, type InquiryData, type SetField } from "./formData";

interface Props {
  data: InquiryData;
  set: SetField;
  onNext: () => void;
}

export default function StepIntent({ data, set, onNext }: Props) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onNext();
      }}
      className="flex flex-col gap-[5px] px-5 pb-[26px] pt-[27px] sm:px-[30px]"
    >
      <StepHead
        kicker="Step 1 of 4 · Partnership intent"
        title="Which relationship would you like to explore?"
        lead="Choose the closest match. You can change it later."
      />

      <fieldset className="grid grid-cols-1 gap-[10px] pb-[19px] pt-[15px] sm:grid-cols-2">
        <legend className="pb-[10px] text-[12.6px] font-semibold leading-[20.16px] text-[#123055]">
          Partnership intent <span className="text-[#d97f0e]">*</span>
        </legend>

        {INTENTS.map((o, i) => (
          <label
            key={o.value}
            className="relative flex cursor-pointer flex-col gap-[2px] rounded-[10px] border border-[#e3d9c2] bg-white py-3 pl-10 pr-[14px] transition-colors hover:border-[#cdbf9f] has-[:checked]:border-[#f59a23] has-[:checked]:shadow-[0_0_0_1px_#f59a23]"
          >
            <input
              type="radio"
              name="intent"
              value={o.value}
              required={i === 0}
              checked={data.intent === o.value}
              onChange={() => set("intent", o.value)}
              className="absolute left-[19px] top-[18px] size-4 shrink-0 cursor-pointer appearance-none rounded-full border border-[#767676] bg-white checked:border-[5px] checked:border-[#071a33]"
            />
            <span className="text-[13px] font-bold leading-[20.8px] text-[#071a33]">{o.title}</span>
            <span className="text-[11.5px] leading-[16.1px] text-[#5c6672]">{o.text}</span>
          </label>
        ))}
      </fieldset>

      <Actions cancelHref="/partners" primary="Continue" />
    </form>
  );
}
