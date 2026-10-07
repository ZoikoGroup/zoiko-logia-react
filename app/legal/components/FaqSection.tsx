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
    question: "What is the ZoikoLogia™ Legal page?",
    answer: (
      <>
        A source-governed destination for finding current
        <Br k="m" />
        approved legal documents, notices and specialist routes.
        <Br k="m" />
        The
        <Br k="d" />
        authoritative document governs wherever a summary
        <Br k="m" />
        here differs.
      </>
    ),
  },
  { key: "terms", question: "Where can I find the current terms?" },
  { key: "account", question: "Which terms apply to my account?" },
  { key: "privacy", question: "Where is privacy information?" },
  { key: "notice", question: "How do I send a formal notice?" },
  { key: "trademarks", question: "Can I use ZoikoLogia™ trademarks?" },
  { key: "advice", question: "Does ZoikoLogia™ provide legal advice here?" },
  { key: "procurement", question: "Where do procurement questions go?" },
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
    <section className="mx-auto w-full max-w-[1200px] px-5 pt-[46px] lg:px-8 lg:py-16">
      <div className="flex w-full flex-col gap-7">
        <div className="flex w-full max-w-[720px] flex-col items-start gap-[12.82px] pt-[6.91px] lg:gap-[12.68px]">
          <Eyebrow>Frequently Asked</Eyebrow>
          <h2
            className={`w-full font-[family-name:var(--font-serif4)] text-[26px] font-semibold leading-[33.28px] tracking-[-0.26px] text-[#071a33] ${NW}`}
          >
            Straight answers, within what
            <Br k="m" />
            we can say.
          </h2>
        </div>

        <ul className="w-full border-t border-[#e3d9c2]">
          {FAQS.map((item) => {
            const open = openKey === item.key;
            const panelId = `legal-faq-${item.key}`;
            return (
              <li key={item.key} className="border-b border-[#e3d9c2]">
                <h3>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={item.answer ? panelId : undefined}
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
                    className="max-w-[740px] overflow-clip lg:max-h-[240px]"
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
