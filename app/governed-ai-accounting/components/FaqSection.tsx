"use client";

import React, { useState } from "react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: "01",
    question: "Is ZoikoLogia™ an AI governance platform?",
    answer:
      "ZoikoLogia™ provides an overarching AI governance framework and operating model designed to manage lifecycle artifacts, decision gates, and audit evidence across enterprise AI applications.",
  },
  {
    id: "02",
    question: "Does the platform guarantee compliant or safe AI use?",
    answer:
      "No platform can guarantee total compliance automatically; instead, it establishes structural controls, human oversight workflows, and traceable evidence logs necessary for continuous governance.",
  },
  {
    id: "03",
    question: "What is governed besides the model?",
    answer:
      "Governance extends beyond model weights to include input source data, accounting ontologies, user interaction workflows, human escalation paths, and system integration boundaries.",
  },
  {
    id: "04",
    question: "Can governance teams block or pause capability?",
    answer:
      "Yes. Governance administrators retain full control to pause, revoke, or constrain specific AI capabilities, models, or data access permissions across defined environments.",
  },
  {
    id: "05",
    question: "How are provider changes handled?",
    answer:
      "Provider and model version changes require formal change impact assessments and regression evidence revalidation before being promoted to active release status.",
  },
  {
    id: "06",
    question: "Does Kriton™ make professional decisions?",
    answer:
      "No. Kriton™ provides proposal-only assistance and structured workflow support. All final professional, legal, and financial decisions remain strictly with authorized human personnel.",
  },
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
      `}</style>

      <div className="relative max-w-6xl mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Side Header (5 cols) */}
          <div className="lg:col-span-5 text-left space-y-3">
            <span className="opacity-0 animate-fade-in-up delay-0 text-xs font-semibold tracking-[1.5px] text-[#C97D2A] uppercase block">
              FAQ
            </span>
            <h2 className="opacity-0 animate-fade-in-up delay-100 text-3xl sm:text-4xl font-serif font-semibold leading-[1.18] text-[#101828] tracking-tight">
              Common governance questions.
            </h2>
          </div>

          {/* Right Side Accordion (7 cols) */}
          <div className="lg:col-span-7 opacity-0 animate-fade-in-up delay-200 border-t border-[#E2DDD0] divide-y divide-[#E2DDD0]">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={item.id} className="py-4 sm:py-5">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between text-left group focus:outline-none"
                  >
                    <span className="text-xs sm:text-sm font-bold text-[#101828] group-hover:text-[#C97D2A] transition-colors duration-200 pr-4">
                      {item.question}
                    </span>
                    <span className="text-[#C97D2A] transition-transform duration-200 shrink-0">
                      <svg
                        className={`w-3.5 h-3.5 transform transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>

                  {/* Expandable Answer */}
                  {isOpen && (
                    <div className="mt-3 pr-6">
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
