"use client";

import Link from "next/link";
import { useState } from "react";
import Eyebrow from "./Eyebrow";
import Br from "./Br";
import ResponsiveImage from "./ResponsiveImage";
import { NW } from "./tokens";

/* The Figma frames show only the empty "Choose an option to begin." state. The destinations below
   are an assumption: each option points at the section or page that already owns that topic. */
const OPTIONS = [
  {
    value: "service-terms",
    title: "Service terms",
    text: "The terms that govern use of the service",
    owner: "Current legal documents",
    href: "#legal-documents",
  },
  {
    value: "acceptable-use",
    title: "Acceptable use",
    text: "Rules about permitted use",
    owner: "Current legal documents",
    href: "#legal-documents",
  },
  {
    value: "privacy",
    title: "Privacy, cookies or data processing",
    text: "How data and cookies are handled",
    owner: "Privacy & Security",
    href: "/privacy-security",
  },
  {
    value: "notices",
    title: "Public or formal notices",
    text: "Notices, operator details, how to send a notice",
    owner: "Contact and notices",
    href: "#legal-notices",
  },
  {
    value: "brand",
    title: "Brand, trademark or rights",
    text: "Using the name, logo or materials",
    owner: "IP and brand",
    href: "#legal-brand",
  },
  {
    value: "other",
    title: "Something else",
    text: "A different legal question",
    owner: "Contact Sales",
    href: "/contact-sales",
  },
];

export default function TermsSection() {
  const [value, setValue] = useState("");
  const chosen = OPTIONS.find((o) => o.value === value);

  return (
    <section className="mx-auto flex w-full max-w-[1200px] flex-col gap-[30px] px-5 py-[46px] lg:px-8 lg:py-16">
      <div className="flex w-full flex-col-reverse items-center gap-12 lg:flex-row lg:justify-center">
        {/* Copy */}
        <div className="flex w-full flex-col items-start gap-[13.3px] pb-[14px] pt-[6.9px] lg:min-w-0 lg:flex-1 lg:gap-[13.4px]">
          <Eyebrow>Which Terms Apply?</Eyebrow>

          <h2
            className={`w-full font-[family-name:var(--font-serif4)] text-[25px] font-semibold leading-[32px] tracking-[-0.25px] text-[#071a33] ${NW}`}
          >
            A way to find the right source, not
            <Br k="m" />
            a legal
            <Br k="d" />
            determination.
          </h2>

          <p className={`w-full text-[14px] leading-[23.8px] text-[#5c6672] ${NW}`}>
            Tell us what you&apos;re trying to locate and we&apos;ll show
            <Br k="m" />
            where to look. We never use
            <Br k="d" />
            your IP address, company
            <Br k="m" />
            or behavior to pick binding terms for you.
          </p>
        </div>

        {/* Photo: a different photo in each Figma frame */}
        <div className="relative aspect-[5/4] w-full max-w-[480px] shrink-0 overflow-hidden rounded-[14px] lg:max-w-none lg:min-w-0 lg:flex-1 lg:shrink">
          <ResponsiveImage
            mobile="/legal/terms-mobile.webp"
            desktop="/legal/terms-desktop.webp"
            className="object-cover"
          />
        </div>
      </div>

      <div className="grid w-full grid-cols-1 overflow-clip rounded-[16px] border border-[#e3d9c2] bg-white lg:min-h-[601.2px] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <fieldset className="flex flex-col gap-2 px-[18px] pb-[30px] lg:px-[30px] lg:pb-9">
          <legend className="float-left w-full font-[family-name:var(--font-serif4)] text-[19px] font-semibold leading-[30.4px] tracking-[-0.19px] text-[#071a33]">
            What are you trying to find?
          </legend>
          <p className="clear-both pb-2 pt-[19px] text-[12.8px] leading-[20.48px] text-[#5c6672] lg:pt-[25px]">
            Choose one. Nothing is sent or stored.
          </p>

          {OPTIONS.map((o) => (
            <label
              key={o.value}
              className="relative flex cursor-pointer flex-col gap-[4.49px] rounded-[10px] border border-[#e3d9c2] bg-white pb-[13.1px] pl-10 pr-[14px] pt-[11px] transition-colors hover:border-[#cdbf9f] has-[:checked]:border-[#f59a23] has-[:checked]:shadow-[0_0_0_1px_#f59a23]"
            >
              <input
                type="radio"
                name="legal-topic"
                value={o.value}
                checked={value === o.value}
                onChange={() => setValue(o.value)}
                className="absolute left-[19px] top-[17px] size-4 shrink-0 cursor-pointer appearance-none rounded-full border border-[#767676] bg-white checked:border-[5px] checked:border-[#071a33]"
              />
              <span className="text-[13px] font-bold leading-[20.8px] text-[#071a33]">{o.title}</span>
              <span className={`text-[11.6px] leading-[18.56px] text-[#5c6672] ${NW}`}>{o.text}</span>
            </label>
          ))}
        </fieldset>

        <div
          role="status"
          aria-live="polite"
          className="flex flex-col gap-2 bg-[#efe8d6] px-[18px] pb-12 pt-[21px] lg:px-[30px] lg:pb-[40px] lg:pt-[27px]"
        >
          <p className="pb-[0.59px] text-[11px] font-bold uppercase leading-[17.6px] tracking-[0.66px] text-[#049783]">
            Where to look
          </p>
          <p className="pb-[0.8px] pt-px font-[family-name:var(--font-serif4)] text-[18px] font-normal leading-[28.8px] text-[#071a33]">
            {chosen ? chosen.owner : "Choose an option to begin."}
          </p>
          {chosen ? (
            <Link
              href={chosen.href}
              className="w-fit rounded-[6px] border border-transparent bg-[#f59a23] px-5 py-[10px] text-[13.5px] font-semibold leading-[21.6px] text-[#071a33] transition-opacity hover:opacity-90"
            >
              Go to {chosen.owner}
            </Link>
          ) : null}
          <p className={`text-[12.8px] leading-[21.12px] text-[#123055] ${NW}`}>
            We&apos;ll show the current public records that match, the
            <Br k="m" />
            specialist route that owns the topic,
            <Br k="d" />
            and any caveat
            <Br k="m" />
            about which agreement applies.
          </p>
        </div>
      </div>
    </section>
  );
}
