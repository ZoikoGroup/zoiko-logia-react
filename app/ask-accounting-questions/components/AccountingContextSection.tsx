"use client";

import React from "react";

interface ContextRow {
  dimension: string;
  why: string;
  ui: string;
}

const CONTEXT_ROWS: ContextRow[] = [
  {
    dimension: "Accounting framework / basis",
    why: "Treatments and disclosure requirements may differ.",
    ui: "Visible chip with “not specified” or “not sure” state.",
  },
  {
    dimension: "Jurisdiction / authority",
    why: "Tax, payroll, legal and regulatory applicability may vary.",
    ui: "Visible region / authority context without implying availability or approval.",
  },
  {
    dimension: "Entity / arrangement",
    why: "Entity type, ownership, transaction and contractual facts can change analysis.",
    ui: "Generalized structured fields and material-fact prompts.",
  },
  {
    dimension: "Reporting period / effective date",
    why: "Standards, rates, thresholds and guidance can change over time.",
    ui: "Visible date or period with source-effective-date comparison.",
  },
  {
    dimension: "Task / professional purpose",
    why: "Learning, research, close, audit preparation, tax review and policy work carry different controls.",
    ui: "Purpose selector and mode route.",
  },
  {
    dimension: "Materiality / consequence",
    why: "Higher-consequence use may require stronger evidence and review.",
    ui: "Qualitative control or configured enterprise threshold; no public automatic conclusion.",
  },
  {
    dimension: "Organization policy",
    why: "Internal policy may constrain available treatments or workflow.",
    ui: "Authorized source / policy chip and access disclosure.",
  },
  {
    dimension: "Source scope",
    why: "Determines the authority and completeness of the answer.",
    ui: "Visible source-set summary and change history.",
  },
];

export default function AccountingContextSection() {
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
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-10">
          <div className="lg:col-span-5 text-left">
            <span className="opacity-0 animate-fade-in-up delay-0 text-xs font-semibold tracking-wide text-[#C97D2A] uppercase leading-4 block">
              ACCOUNTING CONTEXT
            </span>
            <h2 className="opacity-0 animate-fade-in-up delay-100 mt-4 text-3xl sm:text-4xl font-serif font-bold leading-10 text-[#101828]">
              The context that changes an accounting answer.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="opacity-0 animate-fade-in-up delay-200 text-base font-normal text-[#667085] leading-7">
              Accounting answers are not universal. Framework, jurisdiction,
              entity, period, purpose, policy and source scope can all shift what
              is applicable, supportable or required. Kriton™ keeps these visible
              — never silently assumed.
            </p>
          </div>
        </div>

        {/* Layout: Image + Builder | Table */}
        <div className="opacity-0 animate-fade-in-up delay-300 grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-0.5 items-stretch">
          {/* Left: Image + Material Context Builder */}
          <div className="flex flex-col gap-0.5">
            <div className="relative flex-1 min-h-72 bg-[#1A2332] overflow-hidden">
              <img
                src="/ask-accounting-questions/accounting-context.png"
                alt="Advisor walking a colleague through reporting context"
                className="w-full h-full object-cover block"
              />
            </div>
            <div className="bg-[#1A2332] px-6 py-5 flex flex-col">
              <h3 className="text-base font-serif font-semibold text-white leading-5">
                Material Context Builder
              </h3>
              <p className="pt-2.5 pb-3.5 text-xs font-normal text-[#FFFFFF66] leading-5">
                “Add only the details that could change the answer. Kriton™ will
                explain why a detail matters.”
              </p>
              <a
                href="#"
                className="text-xs font-semibold text-[#C97D2A] hover:text-[#b06a20] transition-colors duration-200"
              >
                Try the Guided Composer →
              </a>
            </div>
          </div>

          {/* Right: Context Table */}
          <div className="bg-white border border-[#DDD8CC] flex flex-col">
            {/* Table Header */}
            <div className="hidden md:grid grid-cols-[1fr_1.2fr_1.2fr] gap-2 md:gap-6 px-6 py-3 bg-[#EDE8DC] border-b border-[#DDD8CC]">
              <span className="text-[10px] font-semibold tracking-wide text-[#667085] uppercase leading-4">
                CONTEXT DIMENSION
              </span>
              <span className="text-[10px] font-semibold tracking-wide text-[#667085] uppercase leading-4">
                WHY IT MATTERS
              </span>
              <span className="text-[10px] font-semibold tracking-wide text-[#667085] uppercase leading-4">
                UI TREATMENT
              </span>
            </div>

            {/* Table Rows */}
            {CONTEXT_ROWS.map((row, index) => {
              const isEven = index % 2 === 0;
              const rowBg = isEven ? "bg-white" : "bg-[#F7F2E8]";

              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 md:grid-cols-[1fr_1.2fr_1.2fr] gap-2 md:gap-6 px-6 py-4 border-b last:border-b-0 border-[#DDD8CC] ${rowBg}`}
                >
                  <h3 className="text-xs font-semibold text-[#101828] leading-4">
                    {row.dimension}
                  </h3>
                  <p className="text-xs font-normal text-[#44403C] leading-5">
                    {row.why}
                  </p>
                  <p className="text-xs font-normal text-[#667085] leading-5">
                    {row.ui}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
