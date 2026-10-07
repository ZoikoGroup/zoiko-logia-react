"use client";

import { useState } from "react";
import SectionHead, { Br } from "./SectionHead";

interface FaqItem {
  key: string;
  question: string;
  /** The Figma frames only specify copy for the first question. */
  answer?: React.ReactNode;
}

const FAQS: FaqItem[] = [
  {
    key: "what",
    question: "What is the ZoikoLogia™ API Reference?",
    answer: (
      <>
        The source-governed public presentation layer for approved technical contracts. It doesn&apos;t imply that
        every product
        <Br k="d" />
        capability has an API.
      </>
    ),
  },
  { key: "api", question: "Does ZoikoLogia™ have an API?" },
  { key: "versions", question: "Which API versions are available?" },
  { key: "auth", question: "How do I authenticate?" },
  { key: "endpoints", question: "Where can I find endpoint paths and schemas?" },
  { key: "limits", question: "What rate limits or quotas apply?" },
  { key: "errors", question: "How are errors documented?" },
  { key: "try", question: "Can I try requests from the documentation?" },
  { key: "changes", question: "Where can I see API changes?" },
  { key: "access", question: "Does documentation mean I have production access?" },
  { key: "evaluate", question: "How can my team evaluate an integration?" },
];

function ToggleIcon({ open }: { open: boolean }) {
  return (
    <span aria-hidden className="relative block size-[18px] shrink-0">
      <span className="absolute left-[2px] top-2 h-[2px] w-[14px] bg-[#0c2440]" />
      <span
        className={`absolute left-2 top-[2px] h-[14px] w-[2px] bg-[#0c2440] transition-transform duration-200 ${
          open ? "rotate-90" : ""
        }`}
      />
    </span>
  );
}

export default function FaqSection() {
  const [openKey, setOpenKey] = useState<string | null>(FAQS[0].key);

  return (
    <section id="faq" className="flex scroll-mt-24 flex-col gap-6 border-t border-[#e3d9c2] py-[44px]">
      <SectionHead n={12} title="API questions, answered honestly." />

      <ul className="w-full border-t border-[#e3d9c2]">
        {FAQS.map((item) => {
          const open = openKey === item.key;
          const panelId = `api-faq-${item.key}`;
          return (
            <li key={item.key} className="border-b border-[#e3d9c2]">
              <h3>
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={item.answer ? panelId : undefined}
                  onClick={() => setOpenKey(open ? null : item.key)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 py-[18px] text-left font-[family-name:var(--font-serif4)] text-[15px] font-semibold leading-[normal] text-[#071a33]"
                >
                  <span className="min-w-0">{item.question}</span>
                  <ToggleIcon open={open} />
                </button>
              </h3>

              {item.answer && (
                <div id={panelId} role="region" hidden={!open} className="max-w-[760px] overflow-clip">
                  <p className="pb-[18px] text-[13.4px] leading-[22.78px] text-[#5c6672] min-[1440px]:whitespace-nowrap">
                    {item.answer}
                  </p>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
