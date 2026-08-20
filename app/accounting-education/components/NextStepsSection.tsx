"use client";

import React from "react";

const ACTIONS = [
  { label: "Book an Education Demo", primary: true },
  { label: "Request an Institutional Pilot", primary: false },
  { label: "Request an Educator Briefing", primary: false },
  { label: "View Governance & Privacy", primary: false },
];

const DESTINATIONS = [
  {
    title: "Governance Framework",
    description: "Use-case register, policy gates, human decisions and evidence.",
  },
  {
    title: "Privacy & Security",
    description:
      "Tenant boundaries, data map, provider controls and incident response.",
  },
  {
    title: "Professional Boundaries",
    description: "What Kriton™ supports, limits and cannot replace.",
  },
  {
    title: "Accessibility Requirements",
    description:
      "WCAG 2.2 AA specification, accommodation support and testing evidence.",
  },
  {
    title: "Learning & Practice Mode",
    description: "Capability description, context model and integrity controls.",
  },
];

export default function NextStepsSection() {
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left: Heading + Actions */}
          <div className="lg:col-span-6 text-left space-y-5">
            <span className="opacity-0 animate-fade-in-up delay-0 text-xs font-semibold tracking-[1.5px] text-[#FFFFFF8C] uppercase block">
              NEXT STEPS
            </span>
            <h2 className="opacity-0 animate-fade-in-up delay-100 text-3xl sm:text-4xl font-serif font-semibold leading-[1.18] text-white tracking-tight">
              Start with a governed education demonstration.
            </h2>
            <p className="opacity-0 animate-fade-in-up delay-200 text-xs sm:text-sm text-[#FFFFFF99] leading-relaxed font-normal">
              Demonstrations use synthetic learning contexts, sources and
              scenarios. No real student records, exam content, client data or
              protected material appears.
            </p>

            {/* Stacked Action Buttons */}
            <div className="opacity-0 animate-fade-in-up delay-300 flex flex-col gap-3 pt-3">
              {ACTIONS.map((action, index) => (
                <a
                  key={index}
                  href="#"
                  className={`w-full flex items-center justify-between px-5 py-3.5 text-xs sm:text-sm font-semibold transition-colors duration-200 ${
                    action.primary
                      ? "bg-[#C97D2A] hover:bg-[#b06a20] text-white"
                      : "border border-[#FFFFFF1A] text-white hover:bg-[#1B2B45]"
                  }`}
                >
                  <span>{action.label}</span>
                  <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Destination List */}
          <div className="lg:col-span-6 opacity-0 animate-fade-in-up delay-300 border border-[#FFFFFF1A] divide-y divide-[#FFFFFF1A]">
            {DESTINATIONS.map((item, index) => (
              <a
                key={index}
                href="#"
                className="flex items-center justify-between gap-4 px-5 py-4 bg-[#1F2A3A] hover:bg-[#26334A] transition-colors duration-200 text-left"
              >
                <span className="flex flex-col gap-1">
                  <span className="text-xs font-semibold text-white">
                    {item.title}
                  </span>
                  <span className="text-[11px] text-[#FFFFFF99] font-normal leading-relaxed">
                    {item.description}
                  </span>
                </span>
                <span className="text-[#C97D2A] shrink-0" aria-hidden="true">
                  &rarr;
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
