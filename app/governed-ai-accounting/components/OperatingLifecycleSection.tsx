"use client";

import React from "react";

interface LifecycleStage {
  id: string;
  stage: string;
  artifact: string;
}

const STAGES: LifecycleStage[] = [
  {
    id: "01",
    stage: "Intake",
    artifact: "Use-case proposal and accountable owner",
  },
  { id: "02", stage: "Classification", artifact: "Risk and context profile" },
  { id: "03", stage: "Control Design", artifact: "Policy and control plan" },
  {
    id: "04",
    stage: "Build / Configure",
    artifact: "Versioned system configuration",
  },
  { id: "05", stage: "Evaluate", artifact: "Evaluation plan and results" },
  { id: "06", stage: "Release Decision", artifact: "Review packet" },
  { id: "07", stage: "Deploy", artifact: "Controlled release record" },
  {
    id: "08",
    stage: "Monitor",
    artifact: "Quality, exceptions, drift, incidents",
  },
  {
    id: "09",
    stage: "Change / Revalidate",
    artifact: "Change impact and regression evidence",
  },
  { id: "10", stage: "Retire", artifact: "Retirement and data/evidence plan" },
];

export default function OperatingLifecycleSection() {
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
        {/* Header Section */}
        <div className="text-left space-y-3 mb-10">
          <span className="opacity-0 animate-fade-in-up delay-0 text-xs font-semibold tracking-[1.5px] text-[#C97D2A] uppercase block">
            OPERATING MODEL
          </span>
          <h2 className="opacity-0 animate-fade-in-up delay-100 text-3xl sm:text-4xl font-serif font-semibold leading-[1.18] text-[#101828] tracking-tight">
            Governance operating lifecycle and decision artifacts.
          </h2>
          <p className="opacity-0 animate-fade-in-up max-w-130 delay-200 text-xs sm:text-sm text-[#667085] leading-relaxed font-normal">
            Every governed use case moves through explicit stages, each
            requiring a defined artifact, human decision gate, and evidence
            record.
          </p>
        </div>

        {/* Layout: Table on the Left, Image on the Right */}
        <div className="opacity-0 animate-fade-in-up delay-300 grid grid-cols-1 lg:grid-cols-12 items-stretch border border-[#E2DDD0] bg-white overflow-hidden shadow-sm">
          
          {/* Table Container (8 cols) - Removed justify-between here */}
          <div className="lg:col-span-8 flex flex-col border-b lg:border-b-0 lg:border-r border-[#E2DDD0]">
            
            {/* Table Header */}
            <div className="grid grid-cols-12 bg-[#EDE8DC] border-b border-[#E2DDD0] text-left">
              {/* Added col-span-2 */}
              <div className="p-2.5 sm:p-3 text-center border-r border-[#E2DDD0]">
                {/* Empty header for step numbers */}
              </div>
              <div className="col-span-4 p-2.5 sm:p-3 border-r border-[#E2DDD0]">
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-[#667085] uppercase">
                  STAGE
                </span>
              </div>
              <div className="col-span-6 p-2.5 sm:p-3">
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-[#667085] uppercase">
                  REQUIRED ARTIFACT
                </span>
              </div>
            </div>

            {/* Table Rows (Alternating white and #F7F2E8) */}
            {STAGES.map((item, index) => {
              const isEven = index % 2 === 0;
              const rowBg = isEven ? "bg-white" : "bg-[#F7F2E8]";

              return (
                <div
                  key={item.id}
                  className={`grid grid-cols-12 border-b last:border-b-0 border-[#E2DDD0] text-left ${rowBg}`}
                >
                  {/* Step ID - Added col-span-2 */}
                  <div className="p-2 sm:p-2.5 flex items-center justify-center border-r border-[#E2DDD0]">
                    <span className="text-[11px] font-bold text-[#C97D2A]">
                      {item.id}
                    </span>
                  </div>

                  {/* Stage Name */}
                  <div className="col-span-4 p-2 sm:p-2.5 flex items-center border-r border-[#E2DDD0]">
                    <h3 className="text-xs font-bold text-[#101828]">
                      {item.stage}
                    </h3>
                  </div>

                  {/* Required Artifact */}
                  <div className="col-span-6 p-2 sm:p-2.5 flex items-center">
                    <p className="text-[11px] sm:text-xs text-[#667085] font-normal leading-tight">
                      {item.artifact}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Image Container (4 cols) */}
          <div className="lg:col-span-4 relative w-full h-full min-h-[350px] bg-[#EDE8DC]">
            <img
              src="/governed-ai-accounting/3.png"
              alt="Governance Operating Lifecycle Review"
              className="w-full h-full object-cover block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}