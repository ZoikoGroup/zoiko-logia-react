import Br from "./Br";
import { Actions, Counter, HINT, Label, Notice, Select, StepHead, TextArea, TextInput } from "./fields";
import {
  INTENTS,
  INTEROP,
  MAX_TEXT,
  PRODUCT_AREAS,
  TIMINGS,
  type InquiryData,
  type SetField,
} from "./formData";

interface Props {
  data: InquiryData;
  set: SetField;
  onBack: () => void;
  onNext: () => void;
}

const WIDE = "min-[1440px]:whitespace-nowrap";

export default function StepRelationship({ data, set, onBack, onNext }: Props) {
  const intent = INTENTS.find((i) => i.value === data.intent);
  const technology = data.intent === "technology-product";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onNext();
      }}
      className="flex flex-col gap-[5px] px-5 pb-[26px] pt-[27px] sm:px-[30px]"
    >
      <StepHead
        kicker="Step 2 of 4 · Relationship"
        title="Tell us about the relationship"
        lead="Describe the idea, not a confidential proposal."
        leadPad="pb-[15px]"
      />

      <Notice>
        <p className={WIDE}>
          Do not include passwords, credentials, customer or regulated data, source code, bank or tax details,
          contracts, or confidential
          <Br k="d" />
          information that routing doesn&apos;t need.
        </p>
      </Notice>

      <div className="flex flex-col gap-[6px] pt-3">
        <Label htmlFor="pi-objective" required>
          Relationship objective
        </Label>
        <TextArea
          id="pi-objective"
          height="h-[86px]"
          required
          maxLength={MAX_TEXT}
          value={data.objective}
          onChange={(e) => set("objective", e.target.value)}
        />
        <Counter value={data.objective} max={MAX_TEXT} />
      </div>

      <div className="flex flex-col gap-1 pt-[10px]">
        <Label htmlFor="pi-capability" required>
          Capability you may contribute
        </Label>
        <TextArea
          id="pi-capability"
          height="h-[72px]"
          required
          maxLength={MAX_TEXT}
          value={data.capability}
          onChange={(e) => set("capability", e.target.value)}
        />
        <Counter value={data.capability} max={MAX_TEXT} pad="pt-[6.59px]" />
        <p className={HINT}>
          A description of your organization&apos;s own capability. It is not treated as an endorsement.
        </p>
      </div>

      {/* Questions specific to the chosen relationship */}
      <section
        aria-label="Questions for the chosen relationship"
        className="flex flex-col gap-3 rounded-[12px] border border-[#e3d9c2] bg-[rgba(0,191,166,0.04)] px-[18px] pb-5 pt-[26px]"
      >
        <p className="pb-[0.8px] text-[10.5px] font-bold uppercase leading-[16.8px] tracking-[0.63px] text-[#049783]">
          Questions for: {intent?.title ?? "Your chosen relationship"}
        </p>

        {technology ? (
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-[6px] pb-[7.59px]">
              <Label htmlFor="pi-tech-objective" optional="(optional)">
                Technical objective
              </Label>
              <TextArea
                id="pi-tech-objective"
                height="h-[54px]"
                value={data.techObjective}
                onChange={(e) => set("techObjective", e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-1">
              <Label htmlFor="pi-source" optional="(optional)">
                Source or API context
              </Label>
              <TextInput
                id="pi-source"
                tall
                value={data.sourceContext}
                onChange={(e) => set("sourceContext", e.target.value)}
              />
              <p className={HINT}>e.g. a public API Reference topic</p>
            </div>

            <div className="flex flex-col gap-[6px]">
              <Label htmlFor="pi-architecture" optional="(optional)">
                Architecture category
              </Label>
              <TextInput
                id="pi-architecture"
                value={data.architecture}
                onChange={(e) => set("architecture", e.target.value)}
              />
            </div>

            <fieldset className="flex flex-col gap-1">
              <legend className="mb-1 flex min-h-[20.14px] items-end text-[12.6px] font-semibold leading-[20.16px] text-[#123055]">
                <span className="whitespace-pre">Does this involve technical interoperability? </span>
                <span className="text-[11.5px] font-medium leading-[18.4px] text-[#8b93a0]">(optional)</span>
              </legend>
              <div className="flex flex-wrap gap-x-[18px] pt-[2px]">
                {INTEROP.map((o) => (
                  <label
                    key={o}
                    className="relative flex h-[20.8px] cursor-pointer items-center pl-[31px] text-[13px] font-medium leading-[20.8px] text-[#123055]"
                  >
                    <input
                      type="radio"
                      name="interop"
                      value={o}
                      checked={data.interop === o}
                      onChange={() => set("interop", o)}
                      className="absolute left-[5px] top-[3.9px] size-4 shrink-0 cursor-pointer appearance-none rounded-full border border-[#767676] bg-white checked:border-[5px] checked:border-[#071a33]"
                    />
                    {o}
                  </label>
                ))}
              </div>
              <p className={HINT}>This routes a technical review. It promises no integration.</p>
            </fieldset>
          </div>
        ) : (
          /* The Figma frames only show the Technology / product questions. */
          <div className="flex flex-col gap-[6px]">
            <Label htmlFor="pi-intent-detail" optional="(optional)">
              Anything specific to this relationship
            </Label>
            <TextArea
              id="pi-intent-detail"
              height="h-[54px]"
              maxLength={MAX_TEXT}
              value={data.intentDetail}
              onChange={(e) => set("intentDetail", e.target.value)}
            />
          </div>
        )}
      </section>

      <div className="flex flex-col gap-[6px] pb-[7.59px] pt-[13px]">
        <Label htmlFor="pi-customer" optional="(optional; no customer names needed)">
          Customer or operating context
        </Label>
        <TextArea
          id="pi-customer"
          height="h-[70px]"
          value={data.customerContext}
          onChange={(e) => set("customerContext", e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 gap-x-[14px] pb-[19px] pt-[11px] sm:grid-cols-2">
        <div className="flex flex-col gap-1 pb-4">
          <Label htmlFor="pi-product" optional="(optional)">
            Relevant product area
          </Label>
          <Select
            id="pi-product"
            options={PRODUCT_AREAS}
            placeholder="None selected"
            value={data.productArea}
            onChange={(e) => set("productArea", e.target.value)}
          />
          <p className={HINT}>Selecting an area doesn&apos;t imply support or fit.</p>
        </div>

        <div className="flex flex-col gap-1 pb-4">
          <Label htmlFor="pi-timing" optional="(optional)">
            Timing
          </Label>
          <Select
            id="pi-timing"
            options={TIMINGS}
            value={data.timing}
            onChange={(e) => set("timing", e.target.value)}
          />
          <p className={HINT}>A broad horizon only. It sets no priority.</p>
        </div>
      </div>

      <Actions onBack={onBack} primary="Continue" />
    </form>
  );
}
