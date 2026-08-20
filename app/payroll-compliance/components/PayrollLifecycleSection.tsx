"use client";

import React from "react";

interface LifecycleStage {
  id: string;
  stage: string;
  inputs?: string;
  output?: string;
}

const STAGES: LifecycleStage[] = [
  {
    id: "01",
    stage: "Define Context",
    inputs:
      "Entity, jurisdiction, worker population, pay group, period, obligation, provider, intended use.",
    output:
      "Approved context packet with missing or ambiguous fields identified.",
  },
  {
    id: "02",
    stage: "Assemble Sources",
    inputs:
      "Approved law, guidance, policy, contracts, provider documentation and prior approved decisions.",
    output: "Versioned source bundle with status and limitations.",
  },
  {
    id: "03",
    stage: "Collect Inputs",
    inputs:
      "Worker, time, earnings, deductions, benefits, changes, approvals and provider data.",
    output: "Completeness, authorization, duplicate and sensitivity checks.",
  },
  {
    id: "04",
    stage: "Prepare / Calculate",
    inputs:
      "Policies, formulas, rates, caps, thresholds, rounding, retroactivity and mappings.",
    output: "Traceable draft output with assumptions and exceptions.",
  },
  {
    id: "05",
    stage: "Validate",
    inputs:
      "Control totals, comparisons, variance thresholds, master-data checks and prior-period review.",
    output: "Validation results and blocked items.",
  },
  {
    id: "06",
    stage: "Reconcile",
    inputs:
      "Inputs to output, output to liabilities, cash, journals, provider files and prior period.",
    output: "Reconciliation status with unexplained differences.",
  },
  {
    id: "07",
    stage: "Review",
    inputs:
      "Context, sources, changes, calculations, exceptions, evidence and segregation of duties.",
    output: "Approve, reject, return, escalate or require additional evidence.",
  },
  {
    id: "08",
    stage: "Authorize Action",
    inputs:
      "Named approvers, dual control, provider scope, preview and release checklist.",
    output: "Authorized filing/payment instruction or blocked state.",
  },
  {
    id: "09",
    stage: "Confirm & Archive",
    inputs:
      "Provider receipt, rejection, correction, settlement, filing acknowledgement and ledger entry.",
    output: "Attributable completion or remediation record.",
  },
  {
    id: "10",
    stage: "Monitor & Improve",
    inputs:
      "Exceptions, incidents, source changes, late items, provider failures and control findings.",
    output: "Corrective action, revalidation and controlled release updates.",
  },
];

export default function PayrollLifecycleSection() {
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
        .delay-400 {
          animation-delay: 400ms;
        }
      `}</style>

      <div className="relative max-w-6xl mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Header + Image */}
          <div className="lg:col-span-4 flex flex-col items-start text-left space-y-5">
            <span className="opacity-0 animate-fade-in-up delay-0 text-xs font-semibold tracking-[1.5px] text-[#C97D2A] uppercase block">
              GOVERNED PAYROLL LIFECYCLE
            </span>

            <h2 className="opacity-0 animate-fade-in-up delay-100 text-3xl sm:text-4xl font-serif font-bold leading-10 text-[#101828] tracking-tight">
              Ten stages. Every stage controlled.
            </h2>

            <p className="opacity-0 animate-fade-in-up delay-200 text-base text-[#667085] leading-6 font-normal">
              Context and source status must be confirmed before calculation or
              action begins. Each stage produces an explicit output before the
              next stage may start.
            </p>

            <div className="opacity-0 animate-fade-in-up delay-300">
              <a
                href="#"
                className="text-xs font-semibold text-[#C97D2A] hover:text-[#b06a20] transition-colors duration-200 inline-flex items-center gap-1.5"
              >
                Explore Governed Payroll Workflow &rarr;
              </a>
            </div>

            <div className="opacity-0 animate-fade-in-up delay-400 w-full pt-2">
              <img
                src="/PayrollCompliance/lifecycle.png"
                alt="Payroll specialist working through a controlled pay run"
                className="w-full h-auto object-cover shadow-sm border border-[#E2DDD0]"
              />
            </div>
          </div>

          {/* Right Column: Stage List */}
          <div className="lg:col-span-8 opacity-0 animate-fade-in-up delay-300 flex flex-col gap-6">
            {STAGES.map((item) => (
              <div key={item.id} className="flex items-start gap-4 sm:gap-6">
                {/* Numbered Marker */}
                <div
                  className={`shrink-0 size-10 rounded-full border flex items-center justify-center ${
                    item.id === "01"
                      ? "bg-[#C97D2A] border-[#C97D2A] text-white"
                      : "bg-white border-[#DDD8CC] text-[#C97D2A]"
                  }`}
                >
                  <span className="text-xs font-bold leading-4">{item.id}</span>
                </div>

                {/* Stage Title Card + Detail Strip */}
                <div className="flex-1 min-w-0">
                  {/* Title Card */}
                  <div className="bg-white border border-[#DDD8CC] rounded-sm px-5 sm:px-6 py-3">
                    <h3 className="text-base font-serif font-semibold text-[#101828] leading-6">
                      {item.stage}
                    </h3>
                  </div>

                  {/* Detail Strip (sits on the section background) */}
                  {(item.inputs || item.output) && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 pt-3 px-1">
                      <div className="pr-0 sm:pr-4">
                        <span className="block text-[10px] font-semibold tracking-wider text-[#667085] uppercase leading-4">
                          REQUIRED INPUTS
                        </span>
                        <p className="pt-1.5 text-xs text-[#44403C] leading-5 font-normal">
                          {item.inputs}
                        </p>
                      </div>
                      <div className="pt-3 sm:pt-0 sm:pl-4 sm:border-l border-[#DDD8CC]">
                        <span className="block text-[10px] font-semibold tracking-wider text-[#667085] uppercase leading-4">
                          CONTROL / OUTPUT
                        </span>
                        <p className="pt-1.5 text-xs text-[#44403C] leading-5 font-normal">
                          {item.output}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
