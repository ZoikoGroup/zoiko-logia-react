"use client";

import React, { useState } from "react";

interface FaqItem {
  id: string;
  question: string;
  answer?: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: "01",
    question: "Can I ask Kriton™ accounting questions?",
    answer:
      "Yes — accounting, tax, audit, payroll, compliance, finance, reporting and learning questions. Selecting an intent first (explain, identify missing context, prepare questions or structure follow-through) helps calibrate source scope and answer shape.",
  },
  {
    id: "02",
    question: "What context does an accounting question need?",
    answer:
      "Framework or basis, jurisdiction, entity or arrangement, reporting period, task purpose, materiality, organization policy and source scope. Each is kept visible rather than silently assumed.",
  },
  {
    id: "03",
    question: "Does Kriton™ provide accounting or tax advice?",
    answer:
      "No. It supports understanding and professional judgment. Output is not a filing, audit opinion, certification or substitute for qualified professional judgment.",
  },
  {
    id: "04",
    question: "How are answers sourced?",
    answer:
      "Every source badge must support an identifiable part of the response. Source identity, authority, version and effective date, applicability, status and locator travel with each reference — citations are never decorative.",
  },
  {
    id: "05",
    question: "What happens when sources conflict?",
    answer:
      "Conflicting relevant sources are surfaced rather than resolved silently, and a qualified decision route is offered so a person makes the call.",
  },
  {
    id: "06",
    question: "What if information is missing?",
    answer:
      "A coverage gap is stated when available sources do not support part of the answer, and missing facts are never inferred as certain — you can ask which facts would change the analysis.",
  },
  {
    id: "07",
    question: "Can I use client or employee data?",
    answer:
      "Public demonstrations are synthetic only — no real client, employee, taxpayer or confidential records. Enterprise use applies minimum-necessary intake, sensitive-data detection and tenant isolation.",
  },
  {
    id: "08",
    question: "Can I save or share an answer?",
    answer:
      "Yes. Save, copy, export, review packages and internal sharing all carry the version, context, source scope, evidence, assumptions, limitations and review status with them.",
  },
  {
    id: "09",
    question: "Can Kriton™ file or approve accounting work?",
    answer:
      "No. Requests for action route to Workflow Mode or an approved product control. No autonomous filing, payment or approval executes from this page.",
  },
  {
    id: "10",
    question: "How can an enterprise evaluate the experience?",
    answer:
      "Through an enterprise briefing covering data flows, integrations and professional boundaries, followed by a controlled pilot with synthetic validation, read-only and governance stages.",
  },
];

const LINKS = [
  "Professional Boundaries",
  "Source-Governed Intelligence",
  "Privacy & Security",
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-[#0E1F33] text-white py-16 sm:py-20 px-6 sm:px-12 md:px-16 lg:px-24 font-sans antialiased overflow-hidden">
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
          {/* Left: Header + Links */}
          <div className="lg:col-span-4 text-left">
            <span className="opacity-0 animate-fade-in-up delay-0 text-xs font-semibold tracking-wide text-[#FFFFFF4D] uppercase leading-4 block">
              FAQ
            </span>

            <h2 className="opacity-0 animate-fade-in-up delay-100 mt-4 text-3xl sm:text-4xl font-serif font-bold leading-10 text-white">
              Common questions about governed accounting questions.
            </h2>

            <p className="opacity-0 animate-fade-in-up delay-200 mt-5 text-sm font-normal text-[#FFFFFF66] leading-6">
              Scoped to public product information. Contracts, security and data
              maps belong to the appropriate review process.
            </p>

            <div className="opacity-0 animate-fade-in-up delay-300 mt-8 flex flex-col gap-2.5">
              {LINKS.map((label, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-xs font-semibold text-[#C97D2A] hover:text-[#b06a20] transition-colors duration-200"
                >
                  {label} →
                </a>
              ))}
            </div>
          </div>

          {/* Right: Accordion */}
          <div className="lg:col-span-8 opacity-0 animate-fade-in-up delay-200 border-t border-[#FFFFFF1A]">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={item.id} className="border-b border-[#FFFFFF1A]">
                  <button
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 text-left group focus:outline-none py-5"
                  >
                    <span className="text-sm font-semibold text-white group-hover:text-[#C97D2A] transition-colors duration-200">
                      {item.question}
                    </span>
                    <span className="text-[#C97D2A] text-lg leading-none shrink-0">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {/* Expandable Answer */}
                  {isOpen && item.answer && (
                    <div className="pb-5 pr-6">
                      <p className="text-xs font-normal text-[#FFFFFF66] leading-relaxed">
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
