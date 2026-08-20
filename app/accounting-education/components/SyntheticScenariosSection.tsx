"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  tabTitle: string;
  title?: string;
  status?: string;
  statusTone?: "open" | "restricted";
  meta?: string;
  context?: string;
  boundary?: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "S1",
    tabTitle: "Introductory Double-Entry Learning",
    title: "Introductory Double-Entry Learning",
    status: "Open Practice",
    statusTone: "open",
    meta: "Foundation · Open Practice",
    context:
      "Foundation accounting course. Objective: explain debit/credit effects for a cash purchase of equipment.",
    boundary:
      "Synthetic educational example; not a real entity posting instruction.",
  },
  { id: "S2", tabTitle: "Revenue Recognition Framework Comparison" },
  { id: "S3", tabTitle: "Audit Evidence and Professional Skepticism" },
  { id: "S5", tabTitle: "Restricted Graded Assignment" },
];

export default function SyntheticScenariosSection() {
  const [activeTab, setActiveTab] = useState<string>("S1");

  const activeScenario =
    SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

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
            SYNTHETIC SCENARIOS
          </span>
          <h2 className="opacity-0 animate-fade-in-up delay-100 text-3xl md:text-[34px] font-serif font-semibold leading-[1.18] text-[#101828] tracking-tight">
            Governed accounting AI in practice.
          </h2>
          <p className="opacity-0 animate-fade-in-up delay-200 max-w-140 text-xs sm:text-sm text-[#667085] leading-relaxed font-normal">
            All scenarios use synthetic facts. No real student records, client
            data, confidential exam material or protected content appears in
            public demonstrations.
          </p>
        </div>

        {/* Tabbed Scenario Panel */}
        <div className="opacity-0 animate-fade-in-up delay-300 w-full">
          {/* Top Tab Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#E2DDD0] border-b-0">
            {SCENARIOS.map((item) => {
              const isActive = item.id === activeTab;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`text-left px-5 py-3.5 border-b sm:border-b-0 sm:border-r last:sm:border-r-0 border-[#E2DDD0] transition-colors duration-200 ${
                    isActive
                      ? "bg-[#FBF7EF] text-[#101828] border-t-2 border-t-[#C97D2A]"
                      : "bg-[#EDE8DC] hover:bg-[#E6E1D4] text-[#667085] border-t-2 border-t-transparent"
                  }`}
                >
                  <span className="block text-[10px] font-bold text-[#C97D2A] mb-1">
                    {item.id}
                  </span>
                  <span className="block text-xs sm:text-[13px] font-semibold leading-snug">
                    {item.tabTitle}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Scenario Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch border border-[#E2DDD0] bg-[#FBF7EF] overflow-hidden shadow-sm">
            {/* Left: Scenario Detail */}
            <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col text-left">
              {/* Status Row */}
              {activeScenario.status && (
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span
                    className={`text-xs font-semibold ${
                      activeScenario.statusTone === "open"
                        ? "text-[#16A34A]"
                        : "text-[#C97D2A]"
                    }`}
                  >
                    ● {activeScenario.status}
                  </span>
                  <span className="text-xs text-[#8C8275] font-normal">
                    {activeScenario.meta}
                  </span>
                </div>
              )}

              <h3 className="text-xl sm:text-2xl font-serif font-semibold text-[#101828] leading-snug mb-4">
                {activeScenario.title ?? activeScenario.tabTitle}
              </h3>

              {activeScenario.context && (
                <p className="text-xs sm:text-[13px] text-[#344054] leading-relaxed font-normal mb-6">
                  {activeScenario.context}
                </p>
              )}

              {/* Boundary Callout */}
              {activeScenario.boundary && (
                <div className="bg-[#F5EDDF] border border-[#E3D3B6] px-4 py-3">
                  <p className="text-xs leading-relaxed">
                    <span className="text-[#C97D2A] font-semibold">
                      Boundary:{" "}
                    </span>
                    <span className="text-[#667085] font-normal">
                      {activeScenario.boundary}
                    </span>
                  </p>
                </div>
              )}
            </div>

            {/* Right: Scenario Steps Image */}
            <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col gap-4 bg-[#FBF7EF]">
              <span className="text-[10px] font-semibold tracking-wider text-[#8C8275] uppercase">
                SCENARIO STEPS
              </span>
              <div className="relative w-full flex-1 min-h-55 border border-[#E2DDD0] overflow-hidden">
                <img
                  src="/accounting-education/synthetic-scenarios.png"
                  alt="Learners working through a synthetic accounting practice scenario"
                  className="w-full h-full object-cover block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
