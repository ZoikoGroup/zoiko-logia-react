"use client";

import Link from "next/link";
import { useState } from "react";
import Br from "./Br";

/* The Figma frame only shows the closed dropdown ("Choose one…"), so these options are assumptions. */
const TOPICS = [
  "Evaluating ZoikoLogia™",
  "Pricing and packages",
  "Book a demo or briefing",
  "Procurement or contracting",
  "Something else",
];

const MAX = 500;

const INPUT =
  "w-full rounded-[8px] border border-[#e3d9c2] bg-white px-3 text-[14px] text-[#12202f] outline-none transition-colors placeholder:text-[#757575] focus:border-[#f59a23] focus:shadow-[0_0_0_1px_#f59a23]";

const CHEVRON =
  "bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%228%22 viewBox=%220 0 12 8%22 fill=%22none%22><path d=%22M1 1.5l5 5 5-5%22 stroke=%22%2312202f%22 stroke-width=%221.5%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22/></svg>')] bg-[length:12px_8px] bg-[position:right_14px_center] bg-no-repeat";

const LABEL = "text-[12.8px] font-semibold leading-[20.48px] text-[#123055]";

interface FormState {
  topic: string;
  message: string;
  name: string;
  email: string;
  organization: string;
  consent: boolean;
  updates: boolean;
}

const INITIAL: FormState = {
  topic: "",
  message: "",
  name: "",
  email: "",
  organization: "",
  consent: false,
  updates: false,
};

function Required() {
  return <span className="text-[#d97f0e]"> *</span>;
}

export default function ContactForm() {
  const [data, setData] = useState<FormState>(INITIAL);
  const [sent, setSent] = useState(false);

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setData((d) => ({ ...d, [key]: value }));

  return (
    <section
      aria-labelledby="contact-sales-form-title"
      className="w-full rounded-[16px] border border-[#e3d9c2] bg-white p-5 sm:p-[30px]"
    >
      <h2
        id="contact-sales-form-title"
        className="font-[family-name:var(--font-serif4)] text-[21px] font-semibold leading-[33.6px] tracking-[-0.21px] text-[#071a33]"
      >
        {sent ? "Request received" : "Send your question"}
      </h2>

      {sent ? (
        <div role="status" className="flex flex-col gap-4 pt-1">
          <p className="text-[13px] leading-[20.8px] text-[#5c6672]">
            Thanks, {data.name.trim() || "there"}. Your request is ready for the approved sales process. This does
            not confirm pricing, availability, response timing, account ownership or commercial terms.
          </p>
          <p className="text-[11.8px] leading-[19.47px] text-[#8b93a0]">Design preview: nothing was actually sent.</p>
          <button
            type="button"
            onClick={() => {
              setData(INITIAL);
              setSent(false);
            }}
            className="w-fit cursor-pointer rounded-[6px] border border-[#e3d9c2] px-[22px] py-3 text-[14px] font-semibold text-[#071a33] transition-opacity hover:opacity-90"
          >
            Send another question
          </button>
        </div>
      ) : (
        <>
          <p className="pt-1 text-[13px] leading-[20.8px] text-[#5c6672]">Takes about a minute.</p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="flex flex-col pt-[17px]"
          >
            <div className="flex flex-col gap-[6px]">
              <label htmlFor="cs-topic" className={LABEL}>
                What&apos;s this about?
                <Required />
              </label>
              <select
                id="cs-topic"
                required
                value={data.topic}
                onChange={(e) => set("topic", e.target.value)}
                className={`${INPUT} ${CHEVRON} h-[43px] cursor-pointer appearance-none py-[11.5px] pl-4 pr-7 leading-4`}
              >
                <option value="">Choose one…</option>
                {TOPICS.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-[6px] pb-[17px] pt-4">
              <label htmlFor="cs-message" className={LABEL}>
                What would you like to discuss?
                <Required />
              </label>
              <textarea
                id="cs-message"
                required
                maxLength={MAX}
                value={data.message}
                onChange={(e) => set("message", e.target.value)}
                className={`${INPUT} h-[92px] resize-y py-[10px] leading-[1.4]`}
              />
              <p className="pb-[0.59px] pt-[4.59px] text-right text-[11px] leading-[17.6px] text-[#8b93a0]">
                {data.message.length} / {MAX}
              </p>
            </div>

            <div className="rounded-br-[8px] rounded-tr-[8px] border-l-[3px] border-[#f59a23] bg-[rgba(245,154,35,0.09)] px-[14px] py-[10px] text-[11.8px] leading-[18.29px] text-[#123055]">
              <p className="min-[1440px]:whitespace-nowrap">
                Please don&apos;t include confidential, regulated, credential, customer or
                <Br k="d" />
                production data.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-x-[14px] gap-y-4 pt-[17px] sm:grid-cols-2">
              <div className="flex flex-col gap-[6px]">
                <label htmlFor="cs-name" className={LABEL}>
                  Name
                  <Required />
                </label>
                <input
                  id="cs-name"
                  required
                  autoComplete="name"
                  value={data.name}
                  onChange={(e) => set("name", e.target.value)}
                  className={`${INPUT} h-[41px]`}
                />
              </div>
              <div className="flex flex-col gap-[6px]">
                <label htmlFor="cs-email" className={LABEL}>
                  Email
                  <Required />
                </label>
                <input
                  id="cs-email"
                  type="email"
                  required
                  autoComplete="email"
                  value={data.email}
                  onChange={(e) => set("email", e.target.value)}
                  className={`${INPUT} h-[41px]`}
                />
              </div>
            </div>

            <div className="flex flex-col gap-[6px] pt-4">
              <label htmlFor="cs-org" className={LABEL}>
                Organization
                <Required />
              </label>
              <input
                id="cs-org"
                required
                autoComplete="organization"
                value={data.organization}
                onChange={(e) => set("organization", e.target.value)}
                className={`${INPUT} h-[41px]`}
              />
            </div>

            <label className="flex cursor-pointer items-start gap-[9px] pt-[17px] text-[12px] font-medium leading-[18.6px] text-[#5c6672]">
              <input
                type="checkbox"
                required
                checked={data.consent}
                onChange={(e) => set("consent", e.target.checked)}
                className="mt-[3px] size-4 shrink-0 cursor-pointer accent-[#049783]"
              />
              <span>
                I&apos;ve read the{" "}
                <Link
                  href="/privacy-security"
                  className="font-semibold text-[#049783] underline [text-underline-position:from-font]"
                >
                  privacy information
                </Link>{" "}
                and agree to be contacted about this request. <span className="text-[#d97f0e]">*</span>
              </span>
            </label>

            <label className="flex cursor-pointer items-start gap-[9px] pb-[25px] pt-[11px] text-[12px] font-medium leading-[18.6px] text-[#5c6672]">
              <input
                type="checkbox"
                checked={data.updates}
                onChange={(e) => set("updates", e.target.checked)}
                className="mt-[3px] size-4 shrink-0 cursor-pointer accent-[#049783]"
              />
              <span>Optional: send me occasional product updates. Separate from this request.</span>
            </label>

            <button
              type="submit"
              className="w-full cursor-pointer rounded-[6px] border border-transparent bg-[#f59a23] px-[22px] py-3 text-center text-[14px] font-semibold text-[#071a33] transition-opacity hover:opacity-90"
            >
              Contact Sales
            </button>
          </form>
        </>
      )}
    </section>
  );
}
