"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  tabTitle: string;
}

const SCENARIOS: Scenario[] = [
  { id: "S1", tabTitle: "Accounting Concept Explanation" },
  { id: "S2", tabTitle: "Framework Comparison" },
  { id: "S3", tabTitle: "Source Conflict" },
  { id: "S4", tabTitle: "Stale Source" },
  { id: "S5", tabTitle: "Restricted Source" },
];

export default function SyntheticScenariosSection() {
  const [activeTab, setActiveTab] = useState<string>("S1");

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-12">
          <div className="lg:col-span-5 text-left">
            <span className="opacity-0 animate-fade-in-up delay-0 text-xs font-semibold tracking-wide text-[#C97D2A] uppercase leading-4 block">
              SYNTHETIC SCENARIOS
            </span>
            <h2 className="opacity-0 animate-fade-in-up delay-100 mt-4 text-3xl sm:text-4xl font-serif font-bold leading-10 text-[#101828]">
              Governed question behavior in practice.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="opacity-0 animate-fade-in-up delay-200 text-base font-normal text-[#667085] leading-7">
              All scenarios use fictional entities, generalized facts and
              non-sensitive values. No real client data, personal information or
              confidential filings appear in any public demonstration.
            </p>
          </div>
        </div>

        {/* Tab Row */}
        <div className="opacity-0 animate-fade-in-up delay-300 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {SCENARIOS.map((item) => {
            const isActive = item.id === activeTab;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`text-left px-1 pb-3 border-b-2 transition-colors duration-200 ${
                  isActive
                    ? "border-b-[#C97D2A] text-[#101828]"
                    : "border-b-transparent text-[#8C8275] hover:text-[#101828]"
                }`}
              >
                <span
                  className={`block text-[10px] font-bold tracking-wide mb-1 ${
                    isActive ? "text-[#C97D2A]" : "text-[#8C8275]"
                  }`}
                >
                  {item.id}
                </span>
                <span className="block text-xs sm:text-sm font-semibold leading-snug">
                  {item.tabTitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* Scenario Image */}
        <div className="opacity-0 animate-fade-in-up delay-300 relative w-full aspect-[1184/430] bg-[#EDE8DC] overflow-hidden">
          <img
            src="/ask-accounting-questions/synthetic-scenarios.png"
            alt="Team working through a synthetic accounting question"
            className="w-full h-full object-cover block"
          />
        </div>
      </div>
    </section>
  );
}
