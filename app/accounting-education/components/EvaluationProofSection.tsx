"use client";

import React from "react";

interface EvaluationRow {
  dimension: string;
  evidence: string;
}

const EVALUATION_ROWS: EvaluationRow[] = [
  {
    dimension: "Source fidelity",
    evidence:
      "Claims and worked steps trace to approved sources with correct context and locators.",
  },
  {
    dimension: "Explanation quality",
    evidence:
      "Qualified educators assess clarity, level appropriateness, concept accuracy and limitations.",
  },
  {
    dimension: "Reasoning support",
    evidence:
      "Experience prompts active reasoning and does not default to answer-only behavior.",
  },
  {
    dimension: "Calculation traceability",
    evidence:
      "Inputs, formulas, units, steps, rounding and validation are inspectable.",
  },
  {
    dimension: "Feedback quality",
    evidence:
      "Feedback is criterion-linked, specific, non-punitive and supports a next learning action.",
  },
  {
    dimension: "Academic integrity",
    evidence:
      "System obeys assessment-state and allowed-help policies, including refusal cases.",
  },
  {
    dimension: "Accessibility",
    evidence:
      "Keyboard, screen-reader, reflow, contrast, math, media and alternative-format tests pass.",
  },
  {
    dimension: "Privacy",
    evidence:
      "Public demos are synthetic; institutional tests verify minimum access and retention controls.",
  },
  {
    dimension: "Human oversight",
    evidence:
      "Educator review, override, correction and escalation states work end-to-end.",
  },
];

export default function EvaluationProofSection() {
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
          {/* Left Column: Text & Image */}
          <div className="lg:col-span-5 flex flex-col items-start text-left space-y-5">
            <span className="opacity-0 animate-fade-in-up delay-0 text-xs font-semibold tracking-[1.5px] text-[#C97D2A] uppercase block">
              EVALUATION &amp; PROOF
            </span>

            <h2 className="opacity-0 animate-fade-in-up delay-100 text-3xl md:text-[34px] font-serif font-semibold leading-[1.18] text-[#101828] tracking-tight">
              Governed evaluation and benchmarks.
            </h2>

            <p className="opacity-0 animate-fade-in-up delay-200 text-xs sm:text-sm text-[#667085] leading-relaxed font-normal">
              Institutional adoption requires controlled evidence across source
              fidelity, learning quality, accessibility, privacy and human
              oversight — not assertions.
            </p>

            <div className="opacity-0 animate-fade-in-up delay-300 w-full pt-2">
              <img
                src="/accounting-education/evaluation.png"
                alt="Educators reviewing evaluation evidence together"
                className="w-full h-auto object-cover shadow-sm border border-[#E2DDD0]"
              />
            </div>
          </div>

          {/* Right Column: Evaluation Table */}
          <div className="lg:col-span-7 opacity-0 animate-fade-in-up delay-200 w-full border border-[#DDD8CC] overflow-hidden text-left bg-white">
            {/* Table Header */}
            <div className="grid grid-cols-1 sm:grid-cols-12 bg-[#EDE8DC] border-b border-[#E2DDD0]">
              <div className="sm:col-span-4 p-3.5 sm:p-4 border-b sm:border-b-0 sm:border-r border-[#E2DDD0]">
                <span className="text-[11px] font-semibold tracking-wider text-[#667085] uppercase">
                  EVALUATION DIMENSION
                </span>
              </div>
              <div className="sm:col-span-8 p-3.5 sm:p-4">
                <span className="text-[11px] font-semibold tracking-wider text-[#667085] uppercase">
                  ILLUSTRATIVE EVIDENCE / GATE
                </span>
              </div>
            </div>

            {/* Table Rows */}
            {EVALUATION_ROWS.map((row, index) => {
              const isEven = index % 2 === 0;
              const rowBg = isEven ? "bg-white" : "bg-[#F7F2E8]";

              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 sm:grid-cols-12 border-b last:border-b-0 border-[#DDD8CC] ${rowBg}`}
                >
                  <div className="sm:col-span-4 p-3.5 sm:p-4 border-b sm:border-b-0 sm:border-r border-[#DDD8CC] flex items-center">
                    <h3 className="text-xs font-semibold text-[#101828] leading-snug">
                      {row.dimension}
                    </h3>
                  </div>
                  <div className="sm:col-span-8 p-3.5 sm:p-4 flex items-center">
                    <p className="text-[11px] sm:text-xs text-[#667085] leading-relaxed font-normal">
                      {row.evidence}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
