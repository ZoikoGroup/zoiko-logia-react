"use client";

import React from "react";

interface CapabilityLayer {
  id: string;
  title: string;
  details: string;
}

const CAPABILITY_LAYERS: CapabilityLayer[] = [
  {
    id: "01",
    title: "Source & Context",
    details:
      "Source-Governed Intelligence; Accounting Ontology; RAG Source Bundles",
  },
  {
    id: "02",
    title: "Advisor & Workflow",
    details:
      "Ask Accounting Questions; Learning & Practice; Workflow; Review; Admin",
  },
  {
    id: "03",
    title: "Evidence & Evaluation",
    details: "Audit Evidence Ledger; Evaluation & Benchmarks",
  },
  {
    id: "04",
    title: "Human Accountability",
    details: "Human Escalation; Professional Boundaries",
  },
  {
    id: "05",
    title: "Enterprise Integration",
    details: "Enterprise Integrations",
  },
];

export default function CapabilitySystemSection() {
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
        {/* Header Section */}
        <div className="text-left space-y-3 mb-10">
          <span className="opacity-0 animate-fade-in-up delay-0 text-xs font-semibold tracking-[1.5px] text-[#FFFFFF8C] uppercase block">
            CAPABILITY SYSTEM
          </span>
          <h2 className="opacity-0 animate-fade-in-up delay-100 text-3xl sm:text-4xl font-serif font-semibold leading-[1.18] text-white tracking-tight">
            AI governance capability system.
          </h2>
          <p className="opacity-0 animate-fade-in-up max-w-130 delay-200 text-xs sm:text-sm text-[#FFFFFF99] leading-relaxed font-normal">
            Connected to approved Platform and Kriton™ destinations. Each layer
            delivers a governance outcome with traceable evidence.
          </p>
        </div>

        {/* Main Content Layout: Left Table + Right Image */}
        <div className="opacity-0 animate-fade-in-up delay-300 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Side: Continuous vertical divider + horizontal dividers between rows */}
          <div className="lg:col-span-7 relative flex flex-col justify-between divide-y divide-[#FFFFFF1A]">
            {/* Continuous vertical divider line */}
            <div className="absolute top-0 bottom-0 left-[33%] w-[1px] bg-[#FFFFFF1A] pointer-events-none" />

            {CAPABILITY_LAYERS.map((layer) => (
              <div
                key={layer.id}
                className="grid grid-cols-12 py-5 items-center text-left relative z-10"
              >
                {/* ID & Title */}
                <div className="col-span-4 pr-6">
                  <span className="text-[11px] font-bold text-[#C97D2A] block mb-1">
                    {layer.id}
                  </span>
                  <h3 className="text-sm sm:text-base font-serif font-bold text-white leading-snug">
                    {layer.title}
                  </h3>
                </div>

                {/* Single Line Description */}
                <div className="col-span-8 pl-6 flex items-center">
                  <p className="text-xs text-[#FFFFFF99] font-normal overflow-hidden">
                    {layer.details}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Image (5 cols) */}
          <div className="lg:col-span-5 relative w-full h-full min-h-[360px]">
            <img
              src="/governed-ai-accounting/4.png"
              alt="AI Governance Capability System Collaboration"
              className="w-full h-full object-cover block rounded-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
