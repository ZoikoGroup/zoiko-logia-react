"use client";

import React from "react";

interface TableRowData {
  objectTitle: string;
  objectDesc: string;
  pageMessage: string;
}

const TABLE_DATA: TableRowData[] = [
  {
    objectTitle: "Use case",
    objectDesc: "Purpose, population, consequence and workflow determine risk.",
    pageMessage: "Govern the work being done, not only the underlying model.",
  },
  {
    objectTitle: "Sources and evidence",
    objectDesc:
      "Authority, rights, freshness and applicability affect answer reliability.",
    pageMessage: "Source governance is a first-class control.",
  },
  {
    objectTitle: "Ontology and context",
    objectDesc:
      "Framework, jurisdiction, entity, period and terminology shape meaning.",
    pageMessage: "Context changes the control requirement.",
  },
  {
    objectTitle: "RAG bundles and prompts",
    objectDesc: "Selection, retrieval and instructions can change outcomes.",
    pageMessage: "Version and evaluate the complete answer pathway.",
  },
  {
    objectTitle: "Model and provider",
    objectDesc:
      "Capabilities, limitations, contracts, data handling and change notices vary.",
    pageMessage: "Provider review is necessary but not sufficient.",
  },
  {
    objectTitle: "Tools and integrations",
    objectDesc: "Read/write authority can create consequential actions.",
    pageMessage: "Action modes require explicit authorization and review.",
  },
  {
    objectTitle: "Policies and reviewers",
    objectDesc:
      "Rules, exceptions and human decisions determine release boundaries.",
    pageMessage: "Accountability must be assigned and evidenced.",
  },
  {
    objectTitle: "Monitoring and incidents",
    objectDesc: "Quality can change after release.",
    pageMessage: "Governance continues after deployment.",
  },
  {
    objectTitle: "Professional obligations",
    objectDesc:
      "Accounting, tax, audit, payroll and compliance duties remain human and jurisdiction-dependent.",
    pageMessage: "Platform assistance does not replace qualified judgment.",
  },
];

export default function GovernanceScopeSection() {
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
        .delay-400 {
          animation-delay: 400ms;
        }
      `}</style>

      <div className="relative max-w-6xl mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Text & Image */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-6">
            {/* Eyebrow Text */}
            <span className="opacity-0 animate-fade-in-up delay-0 text-xs font-semibold tracking-[1.5px] text-[#C97D2A] uppercase block">
              GOVERNANCE SCOPE
            </span>

            {/* Main Heading */}
            <h2 className="opacity-0 animate-fade-in-up delay-100 mt-5 text-3xl md:text-[34px] font-serif mb-5 font-semibold leading-[1.18] text-[#101828] tracking-tight">
              Accounting AI governance extends beyond the model.
            </h2>

            {/* Paragraph Description */}
            <p className="opacity-0 animate-fade-in-up max-w-100 delay-200 text-[#475467] leading-7 mb-10 font-normal">
              Every layer — from source authority to professional boundaries —
              requires explicit control, evidence, and accountable human
              decisions.
            </p>

            {/* Link */}
            <div className="opacity-0 animate-fade-in-up delay-300">
              <a
                href="#"
                className="text-xs sm:text-sm font-semibold text-[#C97D2A] hover:text-[#b06a20] transition-colors duration-200 inline-flex items-center gap-1.5"
              >
                View Governance Framework &rarr;
              </a>
            </div>

            {/* Left Image using HTML <img> tag */}
            <div className="opacity-0 animate-fade-in-up delay-400 w-full pt-2">
              <img
                src="/governed-ai-accounting/1.png"
                alt="Accounting AI Governance Meeting"
                className="w-full h-auto rounded-none object-cover shadow-sm border border-[#E2DDD0]"
              />
            </div>
          </div>

          {/* Right Column: Custom Grid Table (Swapping white and #F7F2E8 rows, no colspans) */}
          <div className="lg:col-span-6 opacity-0 animate-fade-in-up delay-200 w-full border border-[#DDD8CC] overflow-hidden text-left bg-white">
            {/* Table Header */}
            <div className="grid grid-cols-1 sm:grid-cols-2 bg-[#EDE8DC] border-b border-[#E2DDD0]">
              <div className="p-3.5 sm:p-4 border-b sm:border-b-0 sm:border-r border-[#E2DDD0]">
                <span className="text-[11px] font-semibold tracking-wider text-[#667085] uppercase">
                  GOVERNANCE OBJECT
                </span>
              </div>
              <div className="p-3.5 sm:p-4">
                <span className="text-[11px] font-semibold tracking-wider text-[#667085] uppercase">
                  PAGE MESSAGE
                </span>
              </div>
            </div>

            {/* Table Rows */}
            {TABLE_DATA.map((row, index) => {
              const isEven = index % 2 === 0;
              const rowBg = isEven ? "bg-white" : "bg-[#F7F2E8]";

              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 sm:grid-cols-2 border-b last:border-b-0 border-[#DDD8CC] ${rowBg}`}
                >
                  {/* Left Cell: Object */}
                  <div className="p-3.5 sm:p-4 border-b sm:border-b-0 sm:border-r border-[#DDD8CC] flex flex-col justify-center">
                    <h3 className="text-xs font-bold text-[#101828] mb-1">
                      {row.objectTitle}
                    </h3>
                    <p className="text-[11px] text-[#667085] leading-normal font-normal">
                      {row.objectDesc}
                    </p>
                  </div>

                  {/* Right Cell: Page Message */}
                  <div className="p-3.5 sm:p-4 flex items-center">
                    <p className="text-xs text-[#344054] leading-normal font-medium">
                      {row.pageMessage}
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
