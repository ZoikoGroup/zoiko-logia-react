"use client";

import React, { useState } from "react";

interface FaqItem {
  question: string;
  answer?: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Does Kriton™ replace qualified accountants or reviewers?",
    answer:
      "No. It supports professional work; people retain judgment, authorization and responsibility for every conclusion.",
  },
  {
    question: "Can it provide tax advice or an audit opinion?",
    answer:
      "No. It stops, qualifies or escalates when professional judgment is required; advice, opinions and sign-off remain with qualified professionals.",
  },
  {
    question: "How are answers supported?",
    answer:
      "By approved sources with effective-date metadata, stated context and limitations — drafts are labeled and require professional review.",
  },
  {
    question: "Can our firm control sources and access?",
    answer:
      "Yes. Admin Mode governs firm policy, roles, sources, providers, integrations and lifecycle, with separation of duties and safe defaults.",
  },
  {
    question: "How do we run a pilot?",
    answer:
      "Through the controlled pilot model — readiness, configure, validate, limited pilot, decision and rollback — under your own governance.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-[#FFF7ED] py-20 sm:py-24 px-6 sm:px-10 md:px-12 lg:px-16 font-sans antialiased overflow-hidden">
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

      <div className="relative max-w-[680px] mx-auto w-full z-10">
        {/* Header */}
        <div className="text-center">
          <span className="opacity-0 animate-fade-in-up delay-0 text-xs font-bold tracking-wide text-[#155E75] uppercase block">
            FREQUENTLY ASKED
          </span>
          <h2 className="opacity-0 animate-fade-in-up delay-100 mt-3 text-2xl sm:text-3xl font-serif font-semibold leading-tight text-[#1F2A37]">
            Common questions from firms evaluating Kriton™.
          </h2>
        </div>

        {/* Accordion */}
        <div className="opacity-0 animate-fade-in-up delay-200 mt-8 border-t border-[#D6D3D1]">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="border-b border-[#D6D3D1]">
                <button
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-left group focus:outline-none py-4"
                >
                  <span className="text-sm font-semibold text-[#1F2A37] group-hover:text-[#155E75] transition-colors duration-200">
                    {item.question}
                  </span>
                  <span className="text-[#78716C] text-lg leading-none shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Expandable Answer */}
                {isOpen && item.answer && (
                  <div className="pb-4">
                    <p className="text-xs font-normal text-[#4B5563] leading-5">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
