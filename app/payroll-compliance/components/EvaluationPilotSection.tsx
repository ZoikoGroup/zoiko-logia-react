"use client";

import React from "react";

interface EvaluationRow {
  dimension: string;
  gate: string;
}

const EVALUATION_ROWS: EvaluationRow[] = [
  {
    dimension: "Source fidelity",
    gate: "Output reflects approved source with correct status and effective date; blocked if unsupported or stale.",
  },
  {
    dimension: "Context completeness",
    gate: "Entity, jurisdiction, worker type, period, obligation and intended use present before consequential use.",
  },
  {
    dimension: "Calculation reproducibility",
    gate: "Approved inputs, policy, formula, rates, caps and rounding reproduce the result.",
  },
  {
    dimension: "Privacy / access",
    gate: "Unauthorized roles cannot retrieve or infer restricted worker data. Zero tolerance.",
  },
  {
    dimension: "Action gating",
    gate: "Review, dual control, re-authentication and provider scope cannot be bypassed. Zero tolerance.",
  },
  {
    dimension: "Provider state",
    gate: "Submission, acceptance, rejection, settlement and unknown states represented accurately.",
  },
  {
    dimension: "Safe refusal",
    gate: "System refuses or escalates classification, legal or unsupported jurisdictional determinations.",
  },
  {
    dimension: "Change regression",
    gate: "Source, policy, connector or model changes do not alter approved behavior unexpectedly.",
  },
];

export default function EvaluationPilotSection() {
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-10">
          <div className="lg:col-span-6 text-left space-y-3">
            <span className="opacity-0 animate-fade-in-up delay-0 text-xs font-semibold tracking-[1.5px] text-[#C97D2A] uppercase block">
              EVALUATION &amp; PILOT
            </span>
            <h2 className="opacity-0 animate-fade-in-up delay-100 text-3xl sm:text-4xl font-serif font-semibold leading-[1.18] text-[#101828] tracking-tight">
              Controlled evidence, not assertions.
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="opacity-0 animate-fade-in-up delay-200 text-xs sm:text-sm text-[#667085] leading-relaxed font-normal">
              Adoption requires controlled evidence across source fidelity,
              calculations, privacy, action gating, provider states and safe
              refusal. Each dimension has a release gate that blocks deployment
              if not satisfied.
            </p>
          </div>
        </div>

        {/* Layout: Dimensions table | Image + CTAs */}
        <div className="opacity-0 animate-fade-in-up delay-300 grid grid-cols-1 lg:grid-cols-2 items-stretch">
          {/* Left: Evaluation Dimensions */}
          <div className="border border-[#DDD8CC] flex flex-col">
            <div className="bg-[#EDE8DC] px-5 sm:px-6 py-3.5 border-b border-[#DDD8CC]">
              <span className="text-[11px] font-semibold tracking-wider text-[#667085] uppercase">
                EVALUATION DIMENSIONS
              </span>
            </div>
            {EVALUATION_ROWS.map((row, index) => {
              const isEven = index % 2 === 0;
              const rowBg = isEven ? "bg-white" : "bg-[#F7F2E8]";

              return (
                <div
                  key={index}
                  className={`px-5 sm:px-6 py-4 border-b last:border-b-0 border-[#DDD8CC] ${rowBg}`}
                >
                  <h3 className="text-xs font-semibold text-[#101828] leading-4 mb-1.5">
                    {row.dimension}
                  </h3>
                  <p className="text-xs text-[#667085] leading-5 font-normal">
                    {row.gate}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right: Image + CTA Row */}
          <div className="flex flex-col border border-[#DDD8CC] border-t-0 lg:border-t lg:border-l-0">
            <div className="relative w-full flex-1 min-h-70 bg-[#EDE8DC] overflow-hidden">
              <img
                src="/PayrollCompliance/evaluation.png"
                alt="Evaluation findings presented to a review board"
                className="w-full h-full object-cover block"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <a
                href="#"
                className="bg-[#C97D2A] hover:bg-[#b06a20] text-white px-6 py-5 text-xs sm:text-sm font-semibold transition-colors duration-200"
              >
                Request Pilot &rarr;
              </a>
              <a
                href="#"
                className="bg-[#F7F2E8] hover:bg-[#EDE8DC] text-[#101828] px-6 py-5 text-xs sm:text-sm font-semibold transition-colors duration-200"
              >
                Enterprise Briefing &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
