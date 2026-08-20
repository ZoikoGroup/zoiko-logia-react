"use client";

import React from "react";

interface LifecycleStep {
  id: string;
  title: string;
  description: string;
  highlight?: boolean;
}

const STEPS: LifecycleStep[] = [
  { id: "1", title: "Intake", description: "Matter context, sensitivity, owner." },
  { id: "2", title: "Research", description: "Approved source bundle." },
  { id: "3", title: "Prepare", description: "Draft, calculations, notes." },
  {
    id: "4",
    title: "Review",
    description: "Named reviewer, exceptions.",
    highlight: true,
  },
  { id: "5", title: "Decide", description: "Firm decision, authorization." },
  { id: "6", title: "Execute", description: "Verified provider receipt." },
  { id: "7", title: "Retain", description: "Evidence pack, policy retention." },
];

export default function MatterLifecycleSection() {
  return (
    <section className="relative w-full bg-[#FFF7ED] pt-6 pb-24 px-6 sm:px-10 md:px-12 lg:px-16 font-sans antialiased overflow-hidden">
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

      <div className="relative max-w-[1312px] mx-auto w-full z-10">
        {/* Header */}
        <div className="text-left">
          <span className="opacity-0 animate-fade-in-up delay-0 text-xs font-bold tracking-wide text-[#155E75] uppercase block">
            GOVERNED MATTER LIFECYCLE
          </span>
          <h2 className="opacity-0 animate-fade-in-up delay-100 mt-3.5 max-w-[680px] text-3xl font-serif font-semibold leading-tight text-[#1F2A37]">
            From intake to retention, every step stays attributable.
          </h2>
        </div>

        {/* Timeline */}
        <div className="opacity-0 animate-fade-in-up delay-200 relative mt-7 overflow-x-auto">
          <div className="relative min-w-[880px] flex justify-center items-start">
            {/* Connector Line */}
            <div className="absolute left-0 right-0 top-4 h-px bg-[#D6D3D1]" />

            {STEPS.map((step) => (
              <div
                key={step.id}
                className="relative z-10 w-48 px-2 pb-4 flex flex-col justify-start items-center"
              >
                {/* Marker */}
                <div
                  className={`size-8 rounded-2xl flex justify-center items-center ${
                    step.highlight ? "bg-[#155E75]" : "bg-[#1F2A37]"
                  }`}
                >
                  <span className="text-center text-xs font-bold text-white">
                    {step.id}
                  </span>
                </div>

                {/* Title */}
                <span className="pt-4 pb-1.5 text-center text-sm font-semibold text-[#1F2A37]">
                  {step.title}
                </span>

                {/* Description */}
                <p className="text-center text-xs font-normal text-[#78716C] leading-4">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
