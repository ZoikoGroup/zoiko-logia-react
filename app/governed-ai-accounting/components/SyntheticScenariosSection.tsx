"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  title: string;
  tag: string;
  context: string;
  riskControl: string;
  decision: string;
  boundary: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "01",
    title: "Month-End Close Assistant",
    tag: "SYNTHETIC — ILLUSTRATIVE ONLY",
    context:
      "Enterprise finance team proposes a close assistant using approved ERP extracts and policy documents.",
    riskControl:
      "Confidential finance data; propose-only journal support; controller review; no autonomous posting.",
    decision:
      "Conditionally approved for one business unit with expiry and read-only integration.",
    boundary:
      "No claim that the system closes the books or approves financial statements.",
  },
  {
    id: "02",
    title: "Tax Research Provider Change",
    tag: "SYNTHETIC — ILLUSTRATIVE ONLY",
    context:
      "Tax department replaces research engine source with approved external technical tax library.",
    riskControl:
      "Source citation requirement; human review of tax positions; version-controlled citations.",
    decision:
      "Approved for internal tax team guidance only; external advice requires partner sign-off.",
    boundary:
      "No direct client-facing advice or automated legal tax opinion generation.",
  },
  {
    id: "03",
    title: "Audit Workpaper Evidence Exception",
    tag: "SYNTHETIC — ILLUSTRATIVE ONLY",
    context:
      "Audit team identifies missing supporting documentation during automated workpaper analysis.",
    riskControl:
      "Flagged exception log; mandatory engagement manager notification; audit trail logging.",
    decision:
      "Escalated to quality review gate; required secondary evidence upload before completion.",
    boundary:
      "System cannot auto-resolve or clear missing evidence exceptions without manual sign-off.",
  },
  {
    id: "04",
    title: "Payroll Tool Partial Failure",
    tag: "SYNTHETIC — ILLUSTRATIVE ONLY",
    context:
      "Third-party payroll ingestion API encounters partial data format mismatch during sync.",
    riskControl:
      "Automatic execution pause; transaction roll-back; immediate IT and HR alert state.",
    decision:
      "Fallback to manual review queue; automated batch posting halted until validation.",
    boundary:
      "No partial or unverified payroll records committed to core accounting ledger.",
  },
];

export default function SyntheticScenariosSection() {
  const [activeTab, setActiveTab] = useState<string>("01");

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
          <p className="opacity-0 animate-fade-in-up delay-200 max-w-140 text-base leading-relaxed font-normal">
            Illustrative examples using synthetic data. All scenarios are
            clearly labeled and do not expose customer controls, incidents or
            confidential evaluation results.
          </p>
        </div>

        {/* Tabbed Interactive Card Layout - Height expanded to 320px for breathing room */}
        <div className="opacity-0 animate-fade-in-up delay-300 grid grid-cols-1 lg:grid-cols-12 items-stretch border border-[#E2DDD0] bg-white overflow-hidden shadow-sm h-auto lg:h-[320px]">
          {/* Left Navigation Tabs (4 cols) */}
          <div className="lg:col-span-4 flex flex-col bg-[#EDE8DC] divide-y divide-[#E2DDD0] border-b lg:border-b-0 lg:border-r border-[#E2DDD0] h-full justify-between">
            {SCENARIOS.map((item) => {
              const isActive = item.id === activeTab;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full h-full text-left px-5 py-3.5 transition-colors duration-200 flex items-center gap-3.5 ${
                    isActive
                      ? "bg-white text-[#101828]"
                      : "bg-[#EDE8DC] hover:bg-[#E6E1D4] text-[#667085]"
                  }`}
                >
                  <span className="text-xs font-bold text-[#C97D2A] shrink-0">
                    {item.id}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold leading-snug">
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Content Panel (8 cols) */}
          <div className="lg:col-span-8 p-6 sm:p-8 flex flex-col justify-between bg-white text-left h-full">
            <div>
              {/* Synthetic Tag */}
              <div className="mb-5">
                <span className="inline-block bg-[#F7F2E8] text-[#8C8275] text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1">
                  {activeScenario.tag}
                </span>
              </div>

              {/* Data Fields */}
              <div className="space-y-4">
                {/* CONTEXT */}
                <div className="grid grid-cols-1 sm:grid-cols-12 items-baseline gap-2 sm:gap-4">
                  <span className="sm:col-span-3 text-[10px] font-semibold tracking-wider text-[#8C8275] uppercase shrink-0">
                    CONTEXT
                  </span>
                  <p className="sm:col-span-9 text-xs sm:text-[13px] text-[#344054] leading-relaxed font-normal">
                    {activeScenario.context}
                  </p>
                </div>

                {/* RISK / CONTROL */}
                <div className="grid grid-cols-1 sm:grid-cols-12 items-baseline gap-2 sm:gap-4">
                  <span className="sm:col-span-3 text-[10px] font-semibold tracking-wider text-[#8C8275] uppercase shrink-0">
                    RISK / CONTROL
                  </span>
                  <p className="sm:col-span-9 text-xs sm:text-[13px] text-[#344054] leading-relaxed font-normal">
                    {activeScenario.riskControl}
                  </p>
                </div>

                {/* DECISION */}
                <div className="grid grid-cols-1 sm:grid-cols-12 items-baseline gap-2 sm:gap-4">
                  <span className="sm:col-span-3 text-[10px] font-semibold tracking-wider text-[#8C8275] uppercase shrink-0">
                    DECISION
                  </span>
                  <p className="sm:col-span-9 text-xs sm:text-[13px] text-[#344054] leading-relaxed font-normal">
                    {activeScenario.decision}
                  </p>
                </div>

                {/* BOUNDARY */}
                <div className="grid grid-cols-1 sm:grid-cols-12 items-baseline gap-2 sm:gap-4">
                  <span className="sm:col-span-3 text-[10px] font-semibold tracking-wider text-[#8C8275] uppercase shrink-0">
                    BOUNDARY
                  </span>
                  <p className="sm:col-span-9 text-xs sm:text-[13px] text-[#344054] leading-relaxed font-normal">
                    {activeScenario.boundary}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
