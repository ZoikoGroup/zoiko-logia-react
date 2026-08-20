"use client";

import React from "react";

const META_FIELDS = [
  { label: "Framework:", value: "IFRS 15" },
  { label: "Period:", value: "FY2024" },
  { label: "Intent:", value: "Explain" },
  { label: "Sources:", value: "3 approved" },
  { label: "Assumptions:", value: "2 explicit" },
];

const ASSUMPTIONS = [
  "Synthetic arrangement assumed to meet the IFRS 15 “distinct” criterion.",
  "No variable consideration or significant financing component assumed.",
];

interface Evidence {
  ref: string;
  status: string;
  title: string;
  locator: string;
  tag: string;
}

const EVIDENCE: Evidence[] = [
  {
    ref: "[1]",
    status: "Current",
    title: "IFRS 15 — Revenue from Contracts with Customers",
    locator: "§§ 35–38 Over-time criteria",
    tag: "Over-time recognition",
  },
  {
    ref: "[2]",
    status: "Current",
    title: "IFRS 15 — Revenue from Contracts with Customers",
    locator: "§§ 38 (a)–(c) Point-in-time indicators",
    tag: "Point-in-time recognition",
  },
  {
    ref: "[3]",
    status: "Current",
    title: "IFRS 15 Implementation Guidance",
    locator: "IE Example 13 — Distinct deliverables",
    tag: "Applicability context",
  },
];

function InlineRef({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-[#4ADE801A] border-b border-[#4ADE8066] text-[#FFFFFFBF]">
      {children}
    </span>
  );
}

export default function AnswerAnatomySection() {
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
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-10">
          <div className="lg:col-span-5 text-left">
            <span className="opacity-0 animate-fade-in-up delay-0 text-xs font-semibold tracking-wide text-[#FFFFFF4D] uppercase leading-4 block">
              ANSWER ANATOMY
            </span>
            <h2 className="opacity-0 animate-fade-in-up delay-100 mt-4 text-3xl sm:text-4xl font-serif font-bold leading-10 text-white">
              What a governed answer contains.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="opacity-0 animate-fade-in-up delay-200 text-base font-normal text-[#FFFFFF66] leading-6">
              A governed answer is not a response. It is a versioned artifact
              with a state, visible context, claim-linked evidence, explicit
              assumptions, limitations and a safe next action — all available for
              qualified review.
            </p>
          </div>
        </div>

        {/* Single panel: answer card | image + note, split by one divider */}
        <div className="opacity-0 animate-fade-in-up delay-300 grid grid-cols-1 lg:grid-cols-[802fr_384fr] items-stretch bg-[#1A2332] border border-[#FFFFFF1A]">
          {/* Left: Answer Card */}
          <div className="flex flex-col border-b lg:border-b-0 lg:border-r border-[#FFFFFF1A]">
            {/* Card Header */}
            <div className="px-6 sm:px-7 py-5 border-b border-[#FFFFFF1A] flex flex-wrap justify-between items-start gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-[3px] bg-[#4ADE801A] border border-[#4ADE8040] rounded-xs text-[10px] font-semibold text-[#4ADE80] leading-4">
                    ● Supported
                  </span>
                  <span className="text-[10px] font-normal text-[#FFFFFF4D] leading-4">
                    Explain · v1.0 · 14 Jan 2025 09:42
                  </span>
                </div>
                <h3 className="pt-2 text-lg font-serif font-semibold text-white leading-6">
                  Recognition period: long-term service vs. point-in-time
                  delivery
                </h3>
              </div>
              <span className="px-3.5 py-1.5 border border-[#FFFFFF1A] rounded-xs text-xs font-medium text-[#FFFFFF66] leading-4">
                Save answer
              </span>
            </div>

            {/* Meta Strip */}
            <div className="px-6 sm:px-7 py-2.5 bg-[#FFFFFF0D] border-b border-[#FFFFFF0D] flex flex-wrap gap-x-5 gap-y-1.5">
              {META_FIELDS.map((field, index) => (
                <span key={index} className="text-xs leading-4">
                  <span className="text-[#FFFFFF4D] font-normal">
                    {field.label}{" "}
                  </span>
                  <span className="text-[#FFFFFF99] font-semibold">
                    {field.value}
                  </span>
                </span>
              ))}
            </div>

            {/* Card Body */}
            <div className="flex-1 px-6 sm:px-7 py-6 grid grid-cols-1 md:grid-cols-[440fr_281fr] gap-6">
              {/* Direct Response */}
              <div className="flex flex-col">
                <span className="text-[10px] font-semibold tracking-wide text-[#FFFFFF4D] uppercase leading-4">
                  DIRECT RESPONSE
                </span>

                <p className="pt-3 text-sm font-normal text-[#FFFFFF99] leading-6">
                  Under IFRS 15, an entity recognizes revenue when — or as — it
                  satisfies a performance obligation. For the synthetic long-term
                  service arrangement, recognition occurs over time where the
                  entity&apos;s performance creates or enhances an asset the
                  customer controls as it is created. <InlineRef>[1]</InlineRef>
                </p>

                <p className="pt-5 text-sm font-normal text-[#FFFFFF99] leading-6">
                  The point-in-time arrangement differs because the performance
                  obligation is satisfied at a single moment — typically when
                  control of a distinct good or service transfers to the
                  customer. <InlineRef>[2]</InlineRef>
                </p>

                {/* Assumptions */}
                <div className="pt-5">
                  <div className="pt-4 border-t border-[#FFFFFF0D]">
                    <span className="text-[10px] font-semibold tracking-wide text-[#FFFFFF4D] uppercase leading-4">
                      ASSUMPTIONS
                    </span>
                    <div className="pt-2.5 flex flex-col gap-1.5">
                      {ASSUMPTIONS.map((assumption, index) => (
                        <p
                          key={index}
                          className="pl-3 border-l border-[#C97D2A66] text-xs font-normal text-[#FFFFFF66] leading-5"
                        >
                          {assumption}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Boundary */}
                <div className="pt-4">
                  <div className="px-3.5 py-2.5 bg-[#C97D2A1A] border border-[#C97D2A4D] rounded-xs">
                    <p className="text-xs leading-4">
                      <span className="text-[#C97D2A] font-semibold">
                        Boundary —{" "}
                      </span>
                      <span className="text-[#FFFFFF80] font-normal">
                        This output supports understanding and review; it is not
                        a filing, audit opinion, certification or substitute for
                        qualified professional judgment.
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Evidence Used */}
              <div className="flex flex-col">
                <span className="text-[10px] font-semibold tracking-wide text-[#FFFFFF4D] uppercase leading-4">
                  EVIDENCE USED
                </span>

                <div className="pt-3 flex flex-col gap-2">
                  {EVIDENCE.map((item, index) => (
                    <div
                      key={index}
                      className="px-3.5 py-3 bg-[#FFFFFF0D] border border-[#FFFFFF1A] rounded-xs flex flex-col"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-bold text-[#4ADE80] leading-4">
                          {item.ref}
                        </span>
                        <span className="px-1.5 py-0.5 bg-[#4ADE801A] border border-[#4ADE8033] rounded-xs text-[9px] font-normal text-[#4ADE80] leading-3">
                          {item.status}
                        </span>
                      </div>
                      <h4 className="pt-1.5 text-xs font-semibold text-white leading-4">
                        {item.title}
                      </h4>
                      <span className="pt-1 text-[10px] font-normal text-[#FFFFFF4D] leading-4">
                        {item.locator}
                      </span>
                      <span className="pt-1.5 text-[10px] font-normal text-[#C97D2A] leading-4">
                        {item.tag}
                      </span>
                    </div>
                  ))}
                </div>

                <span className="pt-3 text-[10px] font-normal text-[#FFFFFF33] leading-4">
                  3 supporting · 0 conflicting · 0 access-limited
                </span>
              </div>
            </div>
          </div>

          {/* Right: Image fills to the panel edges, note sits beneath it */}
          <div className="flex flex-col">
            <div className="relative w-full flex-1 min-h-[320px] overflow-hidden">
              <img
                src="/ask-accounting-questions/answer-anatomy.png"
                alt="Colleagues reviewing an answer together"
                className="absolute inset-0 w-full h-full object-cover block"
              />
            </div>

            <div className="px-6 py-5">
              <span className="text-[10px] font-semibold tracking-wide text-[#FFFFFF4D] uppercase leading-4">
                NEVER COLOR-ONLY
              </span>
              <p className="pt-2.5 text-xs font-normal text-[#FFFFFF66] leading-5">
                Every state uses icon, text and color together. Screen readers
                receive the state label as text. No reliance on color alone to
                convey meaning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
