import { Actions, HINT, Label, StepHead, TextArea, TextInput } from "./fields";
import type { InquiryData, SetField } from "./formData";

interface Props {
  data: InquiryData;
  set: SetField;
  onBack: () => void;
  onNext: () => void;
}

/** Each field keeps 16px below it so the two-column rows match the Figma row height (80.14px). */
const FIELD = "flex flex-col gap-[6px] pb-4";

export default function StepDetails({ data, set, onBack, onNext }: Props) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onNext();
      }}
      className="flex flex-col px-5 pb-[26px] pt-[27px] sm:px-[30px]"
    >
      <StepHead
        kicker="Step 3 of 4 · Your details"
        title="How should we reply?"
        lead="The minimum needed to respond."
        titlePad="pt-[6px]"
        leadPad="pt-[5.01px]"
      />

      <div className="grid grid-cols-1 gap-x-[14px] pt-5 sm:grid-cols-2">
        <div className={FIELD}>
          <Label htmlFor="pi-name" required>
            Name
          </Label>
          <TextInput
            id="pi-name"
            required
            autoComplete="name"
            value={data.name}
            onChange={(e) => set("name", e.target.value)}
          />
        </div>

        <div className={FIELD}>
          <Label htmlFor="pi-email" required>
            Email
          </Label>
          <TextInput
            id="pi-email"
            type="email"
            required
            autoComplete="email"
            value={data.email}
            onChange={(e) => set("email", e.target.value)}
          />
        </div>

        <div className={FIELD}>
          <Label htmlFor="pi-org" required>
            Organization
          </Label>
          <TextInput
            id="pi-org"
            required
            autoComplete="organization"
            value={data.organization}
            onChange={(e) => set("organization", e.target.value)}
          />
        </div>

        <div className={FIELD}>
          <Label htmlFor="pi-role" optional="(optional)">
            Role / function
          </Label>
          <TextInput
            id="pi-role"
            autoComplete="organization-title"
            value={data.role}
            onChange={(e) => set("role", e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <Label htmlFor="pi-website" optional="(optional)">
          Website
        </Label>
        <TextInput
          id="pi-website"
          type="url"
          tall
          placeholder="https://"
          autoComplete="url"
          value={data.website}
          onChange={(e) => set("website", e.target.value)}
        />
        <p className={HINT}>
          Used for context only. It is not proof of identity, and we don&apos;t fetch it automatically.
        </p>
      </div>

      <div className="flex flex-col gap-[6px] pb-[31.6px] pt-[15.99px]">
        <Label htmlFor="pi-additional" optional="(optional)">
          Additional context
        </Label>
        <TextArea
          id="pi-additional"
          height="h-[70px]"
          placeholder="Please don't include confidential, customer, credential or regulated data."
          value={data.additional}
          onChange={(e) => set("additional", e.target.value)}
        />
      </div>

      <Actions onBack={onBack} primary="Review inquiry" />
    </form>
  );
}
