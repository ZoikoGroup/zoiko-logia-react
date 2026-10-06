"use client";

import { useState } from "react";
import SectionHead from "./SectionHead";
import { Block, Pill } from "./ui";

/* Figma only shows the "Identity" panel. The other five panels reuse the same structure; their
   wording is an assumption that keeps to the page's "shown only when sourced" rule. */
const TABS = [
  {
    id: "identity",
    label: "Identity",
    heading: "Interface identity",
    text: (
      <>
        The exact approved label, interface kind and contract context. A method, path, protocol or topic appears only
        when a governed source defines it. We don&apos;t normalize anything to REST terminology.
      </>
    ),
  },
  {
    id: "inputs",
    label: "Inputs",
    heading: "Inputs",
    text: "Parameters, fields and constraints, listed exactly as the governed source defines them.",
  },
  {
    id: "outputs",
    label: "Outputs",
    heading: "Outputs",
    text: "Response shapes and result fields, shown only when a governed source defines them.",
  },
  {
    id: "errors",
    label: "Errors",
    heading: "Errors",
    text: "Error identifiers and meanings, shown only as the governed source states them.",
  },
  {
    id: "access",
    label: "Access",
    heading: "Access",
    text: "Authentication and authorization context, shown only when published. Seeing it is never evidence of entitlement.",
  },
  {
    id: "limits",
    label: "Limits",
    heading: "Limits",
    text: "Documented limits and constraints, shown only when a source states them.",
  },
] as const;

export default function AnatomySection() {
  const [active, setActive] = useState<(typeof TABS)[number]["id"]>("identity");
  const tab = TABS.find((t) => t.id === active) ?? TABS[0];

  return (
    <Block id="anatomy" gap="gap-6">
      <SectionHead
        n={5}
        title="What a published reference item will look like."
        lead="This is the layout only. Every panel stays empty until its source is approved."
      />

      <div className="w-full overflow-clip rounded-[16px] border border-[#e3d9c2] bg-white">
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-b border-[#e3d9c2] px-[22px] py-[18px]">
          <div>
            <h3 className="font-[family-name:var(--font-serif4)] text-[17px] leading-[27.2px] tracking-[-0.255px] text-[#071a33]">
              <span className="font-semibold">Reference item </span>
              <span className="font-medium text-[#8b93a0]">(layout specimen)</span>
            </h3>
            <p className="text-[11.5px] font-medium leading-[18.4px] text-[#8b93a0]">
              Identity, context and state are shown here when sourced.
            </p>
          </div>
          <span className="inline-flex h-[24.8px] items-center gap-[6px] rounded-[20px] border border-[#e3d9c2] px-[10px] text-[10.5px] font-bold uppercase leading-[16.8px] tracking-[0.315px] whitespace-nowrap text-[#5c6672]">
            <span aria-hidden className="size-[6px] rounded-[3px] bg-[#5c6672]" />
            Illustrative · not production
          </span>
        </div>

        <div
          role="tablist"
          aria-label="Reference item sections"
          className="flex gap-[2px] overflow-x-auto border-b border-[#e3d9c2] bg-[#f7f3ea] px-[14px]"
        >
          {TABS.map((t) => {
            const on = t.id === active;
            return (
              <button
                key={t.id}
                role="tab"
                id={`anatomy-tab-${t.id}`}
                aria-selected={on}
                aria-controls="anatomy-panel"
                onClick={() => setActive(t.id)}
                className={`cursor-pointer whitespace-nowrap border-b-[3px] px-[14px] py-[13px] text-[12.6px] font-semibold ${
                  on ? "border-[#f59a23] text-[#071a33]" : "border-transparent text-[#5c6672] hover:text-[#071a33]"
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id="anatomy-panel"
          aria-labelledby={`anatomy-tab-${tab.id}`}
          className="flex flex-col gap-[6px] px-[26px] pb-6 pt-[23px]"
        >
          <p className="pb-[0.59px] text-[11px] font-bold uppercase leading-[17.6px] tracking-[0.66px] text-[#8b93a0]">
            {tab.heading}
          </p>
          <p className="max-w-[640px] pb-[6px] text-[13px] leading-[22.1px] text-[#5c6672]">{tab.text}</p>
          <div className="flex w-fit max-w-full flex-wrap items-center gap-2 rounded-[8px] border border-dashed border-[#cdbf9f] bg-[#f7f3ea] px-[14px] py-2">
            <Pill tone="amber">Source required</Pill>
            <span className="text-[12px] leading-[19.2px] text-[#123055]">Nothing is shown until published</span>
          </div>
        </div>
      </div>
    </Block>
  );
}
