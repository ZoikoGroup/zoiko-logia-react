"use client";

import React from "react";

interface Destination {
  title: string;
  description: string;
  primary?: boolean;
}

const DESTINATIONS: Destination[] = [
  {
    title: "Book a Demo",
    description:
      "Guided walkthrough with role, workflow, control and boundary context.",
    primary: true,
  },
  {
    title: "Request Pilot",
    description:
      "Controlled evaluation with synthetic validation, read-only and governance stages.",
  },
  {
    title: "Enterprise Briefing",
    description:
      "Data flows, integrations, professional boundaries and evaluation evidence.",
  },
  {
    title: "Governance Framework",
    description: "Use-case register, policy gates, evidence and human decision model.",
  },
  {
    title: "Privacy & Security",
    description: "Data map, access controls, masking, retention and incident model.",
  },
];

export default function GetStartedSection() {
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: Heading */}
          <div className="lg:col-span-5 text-left space-y-5">
            <span className="opacity-0 animate-fade-in-up delay-0 text-xs font-semibold tracking-[1.5px] text-[#FFFFFF66] uppercase block">
              GET STARTED
            </span>
            <h2 className="opacity-0 animate-fade-in-up delay-100 text-3xl sm:text-4xl font-serif font-semibold leading-[1.18] text-white tracking-tight">
              Start with a governed demonstration.
            </h2>
            <p className="opacity-0 animate-fade-in-up delay-200 text-xs sm:text-sm text-[#FFFFFF99] leading-relaxed font-normal">
              Demonstrations use fictional entities, synthetic worker aliases
              and masked values. No real employee records, bank details or
              confidential filings appear.
            </p>
          </div>

          {/* Right: Destination List */}
          <div className="lg:col-span-7 opacity-0 animate-fade-in-up delay-300 border border-[#FFFFFF1A] divide-y divide-[#FFFFFF1A]">
            {DESTINATIONS.map((item, index) => (
              <a
                key={index}
                href="#"
                className={`flex items-center justify-between gap-4 px-5 sm:px-6 py-5 transition-colors duration-200 text-left ${
                  item.primary
                    ? "bg-[#C97D2A] hover:bg-[#b06a20]"
                    : "bg-[#132539] hover:bg-[#1B2B45]"
                }`}
              >
                <span className="flex flex-col gap-1">
                  <span className="text-xs sm:text-sm font-semibold text-white">
                    {item.title}
                  </span>
                  <span
                    className={`text-[11px] font-normal leading-relaxed ${
                      item.primary ? "text-[#FFFFFFCC]" : "text-[#FFFFFF80]"
                    }`}
                  >
                    {item.description}
                  </span>
                </span>
                <span
                  className={`shrink-0 ${
                    item.primary ? "text-white" : "text-[#C97D2A]"
                  }`}
                  aria-hidden="true"
                >
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
