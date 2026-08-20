"use client";

import React, { useState } from "react";

interface WorkflowStep {
  label: string;
  detail: string;
}

interface Scenario {
  id: string;
  tabTitle: string;
  title?: string;
  status?: string;
  statusTone?: "open" | "restricted";
  meta?: string;
  context?: string;
  boundary?: string;
  workflow?: WorkflowStep[];
}

const SCENARIOS: Scenario[] = [
  {
    id: "S1",
    tabTitle: "Monthly Multi-Entity Payroll Run",
    title: "Monthly Multi-Entity Payroll Run",
    status: "Open",
    statusTone: "open",
    meta: "Operations · Open Practice",
    context:
      "Fictional entities in two approved jurisdictions; monthly pay groups; synthetic worker aliases; no real personal data.",
    boundary:
      "No claim of correct payroll, jurisdictional compliance or settlement until authorized provider confirmation and human review.",
    workflow: [
      {
        label: "Define context",
        detail:
          "Confirm entity, jurisdiction, pay group, period, obligation and provider.",
      },
      {
        label: "Validate inputs",
        detail:
          "Completeness, authorization, duplicates and sensitivity rules checked.",
      },
      {
        label: "Trace calculation",
        detail:
          "Formula, rates, caps, rounding, source version and exceptions inspected.",
      },
      {
        label: "Reconcile",
        detail:
          "Register, liabilities, cash and journals compared; differences surfaced.",
      },
      {
        label: "Dual approval",
        detail:
          "Payroll leader and finance approver confirm before transmission.",
      },
      {
        label: "Capture receipt",
        detail:
          "Provider acknowledgement, reference and accepted/rejected status recorded.",
      },
    ],
  },
  { id: "S2", tabTitle: "Regulatory Rate Change" },
  { id: "S3", tabTitle: "Off-Cycle Correction & Employee Complaint" },
  { id: "S4", tabTitle: "Filing Rejection" },
  { id: "S5", tabTitle: "Worker Classification Escalation" },
];

export default function SyntheticScenariosSection() {
  const [activeTab, setActiveTab] = useState<string>("S1");

  const activeScenario =
    SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

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
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-12">
          <div className="lg:col-span-6 text-left space-y-4">
            <span className="opacity-0 animate-fade-in-up delay-0 text-xs font-semibold tracking-[1.5px] text-[#FFFFFF66] uppercase block">
              SYNTHETIC SCENARIOS
            </span>
            <h2 className="opacity-0 animate-fade-in-up delay-100 text-3xl sm:text-4xl font-serif font-semibold leading-[1.18] text-white tracking-tight">
              Governed payroll AI in practice.
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="opacity-0 animate-fade-in-up delay-200 text-xs sm:text-sm text-[#FFFFFF80] leading-relaxed font-normal">
              All scenarios use fictional entities, synthetic worker aliases and
              masked values. No real employee records, government identifiers or
              confidential filings appear in public demonstrations.
            </p>
          </div>
        </div>

        {/* Tab Row */}
        <div className="opacity-0 animate-fade-in-up delay-300 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 border-b border-[#FFFFFF1A]">
          {SCENARIOS.map((item) => {
            const isActive = item.id === activeTab;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`text-left px-4 py-4 border-b-2 transition-colors duration-200 ${
                  isActive
                    ? "border-b-[#C97D2A] text-white"
                    : "border-b-transparent text-[#FFFFFF80] hover:text-white"
                }`}
              >
                <span className="block text-[10px] font-bold text-[#C97D2A] mb-1.5">
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
        <div className="opacity-0 animate-fade-in-up delay-300 grid grid-cols-1 lg:grid-cols-12 items-start border-x border-b border-[#FFFFFF1A] bg-[#132539]">
          {/* Left: Scenario Detail */}
          <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col text-left">
            {activeScenario.status && (
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span
                  className={`px-2.5 py-1 text-xs font-semibold ${
                    activeScenario.statusTone === "open"
                      ? "bg-[#4ADE801A] text-[#4ADE80]"
                      : "bg-[#C97D2A1A] text-[#E08A3C]"
                  }`}
                >
                  ● {activeScenario.status}
                </span>
                <span className="text-xs text-[#FFFFFF66] font-normal">
                  {activeScenario.meta}
                </span>
              </div>
            )}

            <h3 className="text-xl sm:text-2xl font-serif font-semibold text-white leading-snug mb-4">
              {activeScenario.title ?? activeScenario.tabTitle}
            </h3>

            {activeScenario.context && (
              <p className="text-xs sm:text-[13px] text-[#FFFFFF99] leading-relaxed font-normal mb-6">
                {activeScenario.context}
              </p>
            )}

            {/* Boundary Callout */}
            {activeScenario.boundary && (
              <div className="bg-[#C97D2A0D] border border-[#C97D2A4D] px-4 py-3">
                <p className="text-xs leading-relaxed">
                  <span className="text-[#C97D2A] font-semibold">
                    Boundary —{" "}
                  </span>
                  <span className="text-[#FFFFFF99] font-normal">
                    {activeScenario.boundary}
                  </span>
                </p>
              </div>
            )}
          </div>

          {/* Right: Scenario Workflow */}
          <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col gap-4">
            <span className="text-[10px] font-semibold tracking-wider text-[#FFFFFF66] uppercase">
              SCENARIO WORKFLOW
            </span>
            <div className="border-t border-[#FFFFFF1A]">
              {(activeScenario.workflow ?? []).map((step, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4 py-3 border-b border-[#FFFFFF0D]"
                >
                  <span className="sm:col-span-4 text-xs font-semibold text-white leading-5">
                    {step.label}
                  </span>
                  <p className="sm:col-span-8 text-xs text-[#FFFFFF99] leading-5 font-normal">
                    {step.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
