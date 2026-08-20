"use client";

import React from "react";

interface TraceRow {
  label: string;
  detail: string;
}

const TRACE_ROWS: TraceRow[] = [
  {
    label: "Input values",
    detail:
      "Masked or aggregated where possible; show source, period, owner and version.",
  },
  {
    label: "Policy rule",
    detail:
      "Approved rule name, version, effective date, owner and exception policy.",
  },
  {
    label: "Formula / method",
    detail: "Readable formula or method explanation with units and sequence.",
  },
  {
    label: "Rates / thresholds / caps",
    detail: "Source, jurisdiction, effective date, range and status.",
  },
  {
    label: "Rounding",
    detail: "Method, precision, currency treatment and stage of application.",
  },
  {
    label: "Retroactivity",
    detail:
      "Original period, correction period, reason, delta, limits and review.",
  },
  {
    label: "Manual adjustment",
    detail: "Reason, evidence, preparer, reviewer, approver and expiration.",
  },
  {
    label: "Exception",
    detail:
      "Reason, affected population, materiality/risk, proposed treatment and escalation.",
  },
];

interface ActionMode {
  label: string;
  dot: string;
}

const ACTION_MODES: ActionMode[] = [
  { label: "Read-only", dot: "#4ADE80" },
  { label: "Assist", dot: "#60A5FA" },
  { label: "Propose-only", dot: "#A78BFA" },
  { label: "Reviewed write", dot: "#F59E0B" },
  { label: "Dual-controlled release", dot: "#C97D2A" },
  { label: "Export", dot: "#9CA3AF" },
  { label: "Blocked", dot: "#EF4444" },
  { label: "Degraded / Unknown", dot: "#6B7280" },
];

export default function CalculationTraceSection() {
  return (
    <section className="relative w-full bg-[#EDE8DC] text-[#1D1D1F] py-16 sm:py-20 px-6 sm:px-12 md:px-16 lg:px-24 font-sans antialiased overflow-hidden">
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
            CONTROLS
          </span>
          <h2 className="opacity-0 animate-fade-in-up delay-100 max-w-120 text-3xl sm:text-4xl font-serif font-semibold leading-[1.18] text-[#101828] tracking-tight">
            Calculation traceability and reconciliation controls.
          </h2>
        </div>

        {/* Layout: Trace table | Image + Action modes */}
        <div className="opacity-0 animate-fade-in-up delay-200 grid grid-cols-1 lg:grid-cols-2 items-stretch">
          {/* Left: Calculation Trace Card */}
          <div className="bg-white border border-[#DDD8CC] px-6 sm:px-8 py-8 flex flex-col text-left">
            <span className="text-[11px] font-semibold tracking-wider text-[#C97D2A] uppercase block mb-3">
              CALCULATION TRACE
            </span>
            <h3 className="text-base sm:text-lg font-serif font-semibold text-[#101828] leading-snug mb-5">
              Every component of a calculation is inspectable and attributable.
            </h3>

            <div className="flex-1 border-t border-[#E2DDD0]">
              {TRACE_ROWS.map((row, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4 py-3 border-b border-[#E2DDD0]"
                >
                  <span className="sm:col-span-4 text-xs font-semibold text-[#101828] leading-5">
                    {row.label}
                  </span>
                  <p className="sm:col-span-8 text-xs text-[#667085] leading-5 font-normal">
                    {row.detail}
                  </p>
                </div>
              ))}
            </div>

            <p className="pt-4 text-[11px] text-[#8C8275] leading-relaxed font-normal">
              A calculation trace supports review. It does not establish legal
              or tax correctness by itself.
            </p>
          </div>

          {/* Right: Image + Integration Action Modes */}
          <div className="flex flex-col border border-[#DDD8CC] border-t-0 lg:border-t lg:border-l-0">
            <div className="relative w-full min-h-70 flex-1 bg-[#EDE8DC] overflow-hidden">
              <img
                src="/PayrollCompliance/calculation-trace.png"
                alt="Payroll reviewer recording notes beside a workstation"
                className="w-full h-full object-cover block"
              />
            </div>

            <div className="bg-[#F7F2E8] px-6 sm:px-8 py-7">
              <span className="text-[11px] font-semibold tracking-wider text-[#C97D2A] uppercase block mb-4">
                INTEGRATION ACTION MODES
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {ACTION_MODES.map((mode, index) => (
                  <div
                    key={index}
                    className="bg-white border border-[#E2DDD0] px-3 py-2.5 flex flex-col gap-1.5"
                  >
                    <span
                      className="size-1.5 rounded-full"
                      style={{ backgroundColor: mode.dot }}
                      aria-hidden="true"
                    />
                    <span className="text-xs font-semibold text-[#101828] leading-4">
                      {mode.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
