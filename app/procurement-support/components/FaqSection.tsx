"use client";

import { useState } from "react";
import Eyebrow from "./Eyebrow";
import Br from "./Br";
import { NW } from "./tokens";

interface FaqItem {
  key: string;
  question: React.ReactNode;
  /** The Figma frames only specify copy for the first question. */
  answer?: React.ReactNode;
}

const FAQS: FaqItem[] = [
  {
    key: "what-is-it",
    question: "What is ZoikoLogia™ Procurement Support?",
    answer: (
      <>
        A process and help destination for approved procurement
        <Br k="m" />
        routing, forms and checklist guidance, and contracting
        <Br k="md" />
        coordination. It doesn&apos;t replace Provider Due Diligence
        <Br k="m" />
        evidence or Contact Sales commercial coordination.
      </>
    ),
  },
  { key: "provider-evidence", question: "Where do I find provider evidence?" },
  {
    key: "questionnaire",
    question: (
      <>
        Can Procurement Support answer a due-
        <Br k="m" tight />
        diligence questionnaire?
      </>
    ),
  },
  { key: "pricing", question: "How do I ask about pricing or a quote?" },
  { key: "uploads", question: "Can I upload contracts or supplier forms here?" },
  { key: "documents", question: "What documents are required for procurement?" },
  { key: "response-time", question: "How quickly will someone respond?" },
  {
    key: "approved-vendor",
    question: (
      <>
        Does submitting mean ZoikoLogia™ is an
        <Br k="m" />
        approved vendor?
      </>
    ),
  },
  { key: "legal-advice", question: "Can Procurement Support provide legal advice?" },
  { key: "partners", question: "Where do partners go?" },
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
    <section className="bg-[#efe8d6] pb-[46px] pt-[92px] lg:px-[120px] lg:pb-16 lg:pt-32">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-7 px-5 lg:px-8">
        <div className="flex w-full max-w-[700px] flex-col items-start gap-[12.82px] pt-[6.91px] lg:pt-[6.9px]">
          <Eyebrow>Frequently Asked</Eyebrow>
          <h2
            className={`w-full font-[family-name:var(--font-serif4)] text-[26px] font-semibold leading-[33.28px] tracking-[-0.26px] text-[#071a33] ${NW}`}
          >
            Straight answers, including what
            <Br k="m" />
            we can&apos;t promise.
          </h2>
        </div>

        <ul className="w-full border-t border-[#e3d9c2]">
          {FAQS.map((item) => {
            const open = openKey === item.key;
            const panelId = `procurement-faq-${item.key}`;
            return (
              <li key={item.key} className="border-b border-[#e3d9c2]">
                <h3>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenKey(open ? null : item.key)}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 py-[17px] text-left font-[family-name:var(--font-serif4)] text-[14.4px] font-semibold leading-[normal] text-[#071a33] lg:gap-6"
                  >
                    <span className={`min-w-0 lg:whitespace-nowrap ${NW}`}>{item.question}</span>
                    <ToggleIcon open={open} />
                  </button>
                </h3>

                {item.answer && (
                  <div
                    id={panelId}
                    role="region"
                    hidden={!open}
                    className="max-w-[720px] overflow-clip lg:max-h-[240px]"
                  >
                    <p className={`pb-[17px] text-[13.2px] leading-[21.12px] text-[#5c6672] ${NW}`}>
                      {item.answer}
                    </p>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
