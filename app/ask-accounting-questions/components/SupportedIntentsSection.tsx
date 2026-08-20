"use client";

import React from "react";

interface Intent {
  label: string;
  quote: string;
  boundary: string;
}

const LEFT_INTENTS: Intent[] = [
  {
    label: "Explain",
    quote:
      "“Explain why materiality affects the level of review in this synthetic scenario.”",
    boundary:
      "Explanation is general information and must show source and applicability context.",
  },
  {
    label: "Prepare questions",
    quote:
      "“Prepare questions for a qualified reviewer about this synthetic policy choice.”",
    boundary: "Do not impersonate or replace the reviewer.",
  },
];

const RIGHT_INTENTS: Intent[] = [
  {
    label: "Identify missing context",
    quote:
      "“What facts would change the accounting analysis for this synthetic arrangement?”",
    boundary: "Do not infer missing facts as certain.",
  },
  {
    label: "Structure follow-through",
    quote: "“Turn the unresolved points into a review-ready issue list.”",
    boundary: "No consequential action executes from this page.",
  },
];

function IntentCard({ intent }: { intent: Intent }) {
  return (
    <div className="px-6 py-7 flex flex-col h-full">
      <span className="text-[10px] font-bold tracking-wide text-[#C97D2A] uppercase leading-4">
        {intent.label}
      </span>
      <p className="flex-1 pt-2.5 text-sm font-serif font-normal text-[#FFFFFFB3] leading-5">
        {intent.quote}
      </p>
      <div className="pt-4">
        <div className="pt-3 border-t border-[#FFFFFF0D]">
          <p className="text-xs leading-4">
            <span className="text-[#C97D2A] font-semibold">Boundary — </span>
            <span className="text-[#FFFFFF4D] font-normal">
              {intent.boundary}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function SupportedIntentsSection() {
  return (
    <section className="relative w-full bg-[#1A2332] text-white py-16 sm:py-20 px-6 sm:px-12 md:px-16 lg:px-24 font-sans antialiased overflow-hidden">
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
            <span className="opacity-0 animate-fade-in-up delay-0 text-xs font-semibold tracking-wide text-[#FFFFFF4D] uppercase leading-4 block">
              SUPPORTED INTENTS
            </span>
            <h2 className="opacity-0 animate-fade-in-up delay-100 mt-4 text-3xl sm:text-4xl font-serif font-bold leading-10 text-white">
              Governed question types.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="opacity-0 animate-fade-in-up delay-200 max-w-[540px] text-base font-normal text-[#FFFFFF66] leading-6">
              Each intent maps to a distinct output type — explanation,
              comparison, evidence trace, checklist or structured follow-through.
              Selecting an intent before asking helps Kriton™ calibrate source
              scope, answer shape and review guidance.
            </p>
          </div>
        </div>

        {/* Intent Grid with Center Image */}
        <div className="opacity-0 animate-fade-in-up delay-300 grid grid-cols-1 lg:grid-cols-[1fr_1.6fr_1fr] items-stretch border-t border-[#FFFFFF1A]">
          {/* Left Cards */}
          <div className="flex flex-col divide-y divide-[#FFFFFF1A] lg:border-r border-[#FFFFFF1A]">
            {LEFT_INTENTS.map((intent, index) => (
              <IntentCard key={index} intent={intent} />
            ))}
          </div>

          {/* Center Image */}
          <div className="relative w-full min-h-72 bg-[#1F2A3A] order-first lg:order-none border-y lg:border-y-0 border-[#FFFFFF1A]">
            <img
              src="/ask-accounting-questions/supported-intents.png"
              alt="Team debating an accounting question together"
              className="w-full h-full object-cover block"
            />
          </div>

          {/* Right Cards */}
          <div className="flex flex-col divide-y divide-[#FFFFFF1A] lg:border-l border-[#FFFFFF1A]">
            {RIGHT_INTENTS.map((intent, index) => (
              <IntentCard key={index} intent={intent} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
