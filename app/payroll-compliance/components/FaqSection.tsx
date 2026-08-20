"use client";

import React, { useState } from "react";

interface FaqItem {
  id: string;
  question: string;
  answer?: string;
}

const FAQ_ITEMS: FaqItem[] = [
  { id: "01", question: "Does Kriton™ replace payroll software?" },
  { id: "02", question: "Can it guarantee payroll accuracy or compliance?" },
  { id: "03", question: "Can it determine employee or contractor status?" },
  { id: "04", question: "Can it submit tax filings or release payments?" },
  { id: "05", question: "How are calculations explained?" },
  { id: "06", question: "How does it protect employee data?" },
  { id: "07", question: "How are regulatory changes handled?" },
  { id: "08", question: "Can it support payroll audits?" },
  { id: "09", question: "How does human escalation work?" },
  { id: "10", question: "How do we start?" },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-[#EDE8DC] text-[#1D1D1F] py-16 sm:py-20 px-6 sm:px-12 md:px-16 lg:px-24 font-sans antialiased overflow-hidden">
      {/* Embedded CSS Keyframes */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
        }

        .delay-0 {
          animation-delay: 0ms;
        }
        .delay-100 {
          animation-delay: 100ms;
        }
        .delay-200 {
          animation-delay: 200ms;
        }
        .delay-300 {
          animation-delay: 300ms;
        }
      `}</style>

      <div className="relative max-w-6xl mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Side: Header + Links (4 cols) */}
          <div className="lg:col-span-4 text-left space-y-4">
            <span className="opacity-0 animate-fade-in-up delay-0 text-xs font-semibold tracking-[1.5px] text-[#C97D2A] uppercase block">
              FAQ
            </span>
            <h2 className="opacity-0 animate-fade-in-up delay-100 text-3xl sm:text-4xl font-serif font-semibold leading-[1.18] text-[#101828] tracking-tight">
              Common governance questions.
            </h2>
            <p className="opacity-0 animate-fade-in-up delay-200 text-xs sm:text-sm text-[#667085] leading-relaxed font-normal">
              Scoped to public product information. Questions about contracts,
              data maps and security belong to the appropriate review team.
            </p>
            <div className="opacity-0 animate-fade-in-up delay-300 flex flex-col gap-2 pt-2">
              {[
                "View Governance Framework",
                "Visit Privacy & Security",
                "Professional Boundaries",
              ].map((label, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-xs font-semibold text-[#C97D2A] hover:text-[#b06a20] transition-colors duration-200 inline-flex items-center gap-1"
                >
                  {label} &rarr;
                </a>
              ))}
            </div>
          </div>

          {/* Right Side: Accordion (8 cols) */}
          <div className="lg:col-span-8 opacity-0 animate-fade-in-up delay-200 border-t border-[#DDD8CC]">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={item.id} className="border-b border-[#DDD8CC]">
                  <button
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between text-left group focus:outline-none py-4 sm:py-5"
                  >
                    <span className="text-xs sm:text-sm font-semibold text-[#101828] group-hover:text-[#C97D2A] transition-colors duration-200 pr-4">
                      {item.question}
                    </span>
                    <span className="text-[#C97D2A] text-lg leading-none shrink-0">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {/* Expandable Answer */}
                  {isOpen && item.answer && (
                    <div className="pb-5 pr-6">
                      <p className="text-xs text-[#667085] leading-relaxed font-normal">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
