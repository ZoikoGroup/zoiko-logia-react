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
    key: "who-leads",
    question: "Who leads ZoikoLogia™?",
    answer: (
      <>
        This page shows only current, approved leadership
        <Br k="m" />
        profiles. None are published at the moment, so we don&apos;t list
        <Br k="md" />
        names. That reflects publication status only. It isn&apos;t a
        <Br k="m" />
        statement about who does or doesn&apos;t lead the company.
      </>
    ),
  },
  { key: "executive-or-board", question: "Is this an executive team or board page?" },
  { key: "verification", question: "How are titles and biographies verified?" },
  { key: "currentness", question: "How current are profiles?" },
  { key: "contact-leader", question: "Can I contact a leader?" },
  { key: "request-leader", question: "Can I request a specific leader for a briefing?" },
  { key: "governance-info", question: "Where is governance information?" },
  { key: "trust-materials", question: "Where are trust and compliance materials?" },
  { key: "careers", question: "Where can I find careers?" },
  {
    key: "role-change",
    question: (
      <>
        What happens when a leader changes role or
        <Br k="m" />
        leaves?
      </>
    ),
  },
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
    <section className="bg-[#efe8d6] py-[46px] lg:px-[120px] lg:py-16">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-7 px-5 lg:px-8">
        <div className="flex w-full max-w-[700px] flex-col items-start gap-[12.9px] pt-[6.9px]">
          <Eyebrow>Frequently Asked</Eyebrow>
          <h2
            className={`w-full pb-[0.535px] font-[family-name:var(--font-serif4)] text-[26px] font-semibold leading-[33.28px] tracking-[-0.26px] text-[#071a33] ${NW}`}
          >
            Straight answers, including
            <Br k="m" />
            when the answer is &quot;nothing
            <Br k="m" />
            yet&quot;.
          </h2>
        </div>

        <ul className="w-full border-t border-[#e3d9c2]">
          {FAQS.map((item) => {
            const open = openKey === item.key;
            const panelId = `leadership-faq-${item.key}`;
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
