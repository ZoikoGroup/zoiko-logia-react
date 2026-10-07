import Link from "next/link";

export const INPUT =
  "w-full rounded-[8px] border border-[#e3d9c2] bg-white px-3 text-[13.5px] text-[#12202f] outline-none transition-colors placeholder:text-[#757575] focus:border-[#f59a23] focus:shadow-[0_0_0_1px_#f59a23]";

const CHEVRON =
  "bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%228%22 viewBox=%220 0 12 8%22 fill=%22none%22><path d=%22M1 1.5l5 5 5-5%22 stroke=%22%2312202f%22 stroke-width=%221.5%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22/></svg>')] bg-[length:12px_8px] bg-[position:right_14px_center] bg-no-repeat";

export const HINT = "text-[11.3px] leading-[16.39px] text-[#8b93a0]";

/** Label with a red asterisk (required) or a muted "(optional …)" suffix. */
export function Label({
  htmlFor,
  children,
  required,
  optional,
  as: Tag = "label",
}: {
  htmlFor?: string;
  children: React.ReactNode;
  required?: boolean;
  /** Text after the label, e.g. "(optional)". */
  optional?: string;
  as?: "label" | "p";
}) {
  const props = Tag === "label" ? { htmlFor } : {};
  return (
    <Tag {...props} className="flex min-h-[20.14px] items-end text-[12.6px] font-semibold leading-[20.16px] text-[#123055]">
      <span className="whitespace-pre">
        {children}
        {required || optional ? " " : ""}
      </span>
      {required && <span className="text-[#d97f0e]">*</span>}
      {optional && <span className="text-[11.5px] font-medium leading-[18.4px] text-[#8b93a0]">{optional}</span>}
    </Tag>
  );
}

export function Counter({ value, max, pad = "pt-[4.59px]" }: { value: string; max: number; pad?: string }) {
  return (
    <p className={`pb-[0.59px] text-right text-[11px] leading-[17.6px] text-[#8b93a0] ${pad}`}>
      {value.length} / {max}
    </p>
  );
}

export function TextInput(props: React.InputHTMLAttributes<HTMLInputElement> & { tall?: boolean }) {
  const { tall, className = "", ...rest } = props;
  return <input {...rest} className={`${INPUT} ${tall ? "h-10" : "h-[38px]"} ${className}`} />;
}

export function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { height: string }) {
  const { height, className = "", ...rest } = props;
  return <textarea {...rest} className={`${INPUT} ${height} resize-y py-[10px] leading-[1.4] ${className}`} />;
}

export function Select({
  options,
  placeholder,
  ...rest
}: React.SelectHTMLAttributes<HTMLSelectElement> & { options: string[]; placeholder?: string }) {
  return (
    <select
      {...rest}
      className={`${INPUT} ${CHEVRON} h-[42px] cursor-pointer appearance-none pb-[10px] pl-4 pr-7 pt-3 leading-4`}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
}

/** Orange left-border callout used for the "do not include confidential data" notices. */
export function Notice({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-br-[8px] rounded-tr-[8px] border-l-[3px] border-[#f59a23] bg-[rgba(245,154,35,0.08)] px-[14px] py-[11px] text-[11.8px] leading-[18.29px] text-[#123055]">
      {children}
    </div>
  );
}

const BTN = "cursor-pointer rounded-[6px] border px-5 py-[11px] text-center text-[13.5px] font-semibold text-[#071a33] transition-opacity hover:opacity-90";
export const BUTTON_GHOST = `${BTN} border-[#e3d9c2] bg-transparent`;
export const BUTTON_PRIMARY = `${BTN} border-transparent bg-[#f59a23]`;

/** Back / Cancel on the left, the primary action on the right. */
export function Actions({
  onBack,
  cancelHref,
  primary,
}: {
  onBack?: () => void;
  cancelHref?: string;
  primary: string;
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-3 border-t border-[#e3d9c2] pt-5">
      {cancelHref ? (
        <Link href={cancelHref} className="text-[16px] font-semibold leading-[25.6px] text-[#049783] hover:underline">
          Cancel
        </Link>
      ) : (
        <button type="button" onClick={onBack} className={BUTTON_GHOST}>
          Back
        </button>
      )}
      <button type="submit" className={BUTTON_PRIMARY}>
        {primary}
      </button>
    </div>
  );
}

export function StepHead({
  kicker,
  title,
  lead,
  titlePad = "pt-px",
  leadPad = "",
}: {
  kicker: string;
  title: string;
  lead?: string;
  titlePad?: string;
  leadPad?: string;
}) {
  return (
    <>
      <p className="pb-[0.59px] text-[11px] font-bold uppercase leading-[17.6px] tracking-[0.66px] text-[#049783]">
        {kicker}
      </p>
      <h2 className={`${titlePad} font-[family-name:var(--font-serif4)] text-[21px] font-semibold leading-[33.6px] tracking-[-0.21px] text-[#071a33]`}>
        {title}
      </h2>
      {lead && <p className={`text-[12.8px] leading-[20.48px] text-[#5c6672] ${leadPad}`}>{lead}</p>}
    </>
  );
}
