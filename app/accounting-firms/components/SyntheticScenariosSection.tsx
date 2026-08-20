"use client";

import React, { useState } from "react";

interface ScenarioCard {
  label: string;
  body: string;
}

interface Scenario {
  id: string;
  tabTitle: string;
  cards?: ScenarioCard[];
}

const SCENARIOS: Scenario[] = [
  {
    id: "technical-accounting-research",
    tabTitle: "Technical Accounting Research",
    cards: [
      {
        label: "CONTEXT",
        body: "Pseudonymous entity, reporting framework, period and intended use — missing facts highlighted, no real client identity.",
      },
      {
        label: "SOURCES & DRAFT",
        body: "Approved standards and firm guidance with effective-date metadata; issue tree, alternatives and open questions — labeled draft, professional review required.",
      },
      {
        label: "REVIEW & EVIDENCE",
        body: "Reviewer challenges a claim, requests evidence and records the outcome; source bundle, edits and decision preserved in the Audit Evidence Ledger.",
      },
    ],
  },
  { id: "tax-research-escalation", tabTitle: "Tax Research & Escalation" },
  { id: "review-ready-workpaper", tabTitle: "Review-Ready Workpaper" },
  { id: "firm-learning-path", tabTitle: "Firm Learning Path" },
];

export default function SyntheticScenariosSection() {
  const [activeTab, setActiveTab] = useState<string>(
    "technical-accounting-research"
  );

  const activeScenario =
    SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <section className="relative w-full bg-[#1F2A37] py-20 sm:py-24 px-6 sm:px-10 md:px-12 lg:px-16 font-sans antialiased overflow-hidden">
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
        {/* Header */}
        <div className="text-left">
          <span className="opacity-0 animate-fade-in-up delay-0 text-xs font-bold tracking-wide text-[#94A3B8] uppercase block">
            SYNTHETIC SCENARIOS
          </span>
          <h2 className="opacity-0 animate-fade-in-up delay-100 mt-3.5 max-w-[680px] text-3xl font-serif font-semibold leading-tight text-[#FFF7ED]">
            See governed work, without seeing real client data.
          </h2>
          <p className="opacity-0 animate-fade-in-up delay-200 mt-2 text-sm font-normal text-[#9CA3AF]">
            Synthetic demonstration — not client advice.
          </p>
        </div>

        {/* Tab Row */}
        <div className="opacity-0 animate-fade-in-up delay-300 mt-9 flex flex-wrap items-start gap-1.5 border-b border-[#374151]">
          {SCENARIOS.map((item) => {
            const isActive = item.id === activeTab;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-5 pt-3.5 pb-4 text-sm transition-colors duration-200 ${
                  isActive
                    ? "text-[#FFF7ED] font-semibold border-b-2 border-[#FB923C]"
                    : "text-[#64748B] font-medium border-b-2 border-transparent hover:text-[#FFF7ED]"
                }`}
              >
                {item.tabTitle}
              </button>
            );
          })}
        </div>

        {/* Active Scenario Cards */}
        {activeScenario.cards && (
          <div className="opacity-0 animate-fade-in-up delay-300 pt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {activeScenario.cards.map((card, index) => (
              <div
                key={index}
                className="bg-[#26313F] rounded-[10px] px-5 py-5 flex flex-col gap-2 text-left"
              >
                <span className="text-xs font-bold tracking-wide text-[#94A3B8] uppercase">
                  {card.label}
                </span>
                <p className="text-xs font-normal text-[#E4E4E7] leading-5">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
