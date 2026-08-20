"use client";

import React from "react";

interface PilotStep {
  label: string;
  description: string;
}

const PILOT_STEPS: PilotStep[] = [
  {
    label: "1. Readiness",
    description:
      "Use cases, stakeholders, data boundaries, approved sources and success criteria.",
  },
  {
    label: "2. Configure",
    description:
      "Workspace, roles, sources, templates, boundaries, integrations and retention.",
  },
  {
    label: "3. Validate",
    description:
      "Synthetic and approved test cases; failure modes, permissions, rollback.",
  },
  {
    label: "4. Limited pilot",
    description:
      "Small approved cohort, narrow use cases, human review and monitored support.",
  },
  {
    label: "5. Decision",
    description:
      "Expand, revise, pause or stop — with owner and rationale recorded.",
  },
  {
    label: "6. Rollback",
    description:
      "Export approved evidence, revoke access and close data obligations.",
  },
];

export default function PilotModelSection() {
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
        .delay-300 {
          animation-delay: 300ms;
        }
      `}</style>

      <div className="relative max-w-[1312px] mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Header + Steps */}
          <div className="flex flex-col items-start text-left">
            <span className="opacity-0 animate-fade-in-up delay-0 text-xs font-bold tracking-wide text-[#155E75] uppercase block">
              CONTROLLED PILOT MODEL
            </span>

            <h2 className="opacity-0 animate-fade-in-up delay-100 mt-3.5 text-3xl font-serif font-semibold leading-tight text-[#1F2A37]">
              Evaluate under your own governance, before you scale.
            </h2>

            {/* Step Rows */}
            <div className="opacity-0 animate-fade-in-up delay-200 mt-8 w-full">
              {PILOT_STEPS.map((step, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-1 sm:gap-6 py-4 border-b border-[#D6D3D1]"
                >
                  <span className="text-sm font-semibold text-[#1F2A37]">
                    {step.label}
                  </span>
                  <p className="text-sm font-normal text-[#4B5563] leading-5">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="opacity-0 animate-fade-in-up delay-300 w-full">
            <div className="relative w-full aspect-[520/430] rounded-xl border border-[#D6D3D1] overflow-hidden">
              <img
                src="/accounting-firms/pilot-model.png"
                alt="Firm stakeholders discussing a controlled pilot"
                className="w-full h-full object-cover block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
