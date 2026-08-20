"use client";

import React, { useState } from "react";

interface FaqItem {
  id: string;
  question: string;
  answer?: string;
}

const FAQ_ITEMS: FaqItem[] = [
  { id: "01", question: "Is ZoikoLogia™ an accredited education provider?" },
  { id: "02", question: "Can Kriton™ replace an accounting instructor?" },
  { id: "03", question: "Can learners use it for graded assignments?" },
  { id: "04", question: "How are sources selected and kept current?" },
  { id: "05", question: "How is learner privacy protected?" },
  { id: "06", question: "Does path completion mean competence?" },
  { id: "07", question: "Can it integrate with our LMS?" },
  { id: "08", question: "How can an institution evaluate it?" },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-[#F7F2E8] text-[#1D1D1F] py-16 sm:py-20 px-6 sm:px-12 md:px-16 lg:px-24 font-sans antialiased overflow-hidden">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Side: Header + Image (5 cols) */}
          <div className="lg:col-span-5 text-left space-y-5">
            <span className="opacity-0 animate-fade-in-up delay-0 text-xs font-semibold tracking-[1.5px] text-[#C97D2A] uppercase block">
              FAQ
            </span>
            <h2 className="opacity-0 animate-fade-in-up delay-100 text-3xl sm:text-4xl font-serif font-semibold leading-[1.18] text-[#101828] tracking-tight">
              Common governance questions.
            </h2>
            <p className="opacity-0 animate-fade-in-up delay-200 text-xs sm:text-sm text-[#667085] leading-relaxed font-normal">
              Answers are scoped to public product information. Questions about
              institutional deployments, data maps, contracts and security
              should be directed to the appropriate review team.
            </p>
            <div className="opacity-0 animate-fade-in-up delay-300 w-full pt-2">
              <img
                src="/accounting-education/faq.png"
                alt="Instructor presenting to an institutional review team"
                className="w-full h-auto object-cover shadow-sm border border-[#E2DDD0]"
              />
            </div>
          </div>

          {/* Right Side: Accordion (7 cols) */}
          <div className="lg:col-span-7 opacity-0 animate-fade-in-up delay-200 border border-[#E2DDD0] divide-y divide-[#E2DDD0] bg-white">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={item.id} className="px-5 sm:px-6">
                  <button
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between text-left group focus:outline-none py-4 sm:py-5"
                  >
                    <span className="text-xs sm:text-sm font-semibold text-[#101828] group-hover:text-[#C97D2A] transition-colors duration-200 pr-4">
                      {item.question}
                    </span>
                    <span className="text-[#8C8275] text-lg leading-none shrink-0 transition-transform duration-200">
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
