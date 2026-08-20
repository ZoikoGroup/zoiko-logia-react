"use client";

import React from "react";

interface CapabilityRow {
  capability: string;
  value: string;
  control: string;
}

const CAPABILITY_ROWS: CapabilityRow[] = [
  {
    capability: "Ask Accounting Questions",
    value: "Structured, source-linked exploration of technical questions.",
    control:
      "Context completeness, authority, limitations, professional review.",
  },
  {
    capability: "Learning & Practice Mode",
    value:
      "Synthetic practice, guided explanation and controlled development.",
    control: "No credential/CPE claim; source date and educational intent.",
  },
  {
    capability: "Workflow Mode",
    value: "Repeatable steps, ownership, checkpoints and evidence handoffs.",
    control: "Approvals, permissions, action modes and rollback.",
  },
  {
    capability: "Review Mode",
    value: "Claim-level, calculation-level and version-aware review.",
    control: "Named reviewer, scope, outcome, exceptions, sign-off boundary.",
  },
  {
    capability: "Admin Mode",
    value: "Firm policy, roles, sources, providers, integrations, lifecycle.",
    control: "Separation of duties, safe defaults, auditability.",
  },
  {
    capability: "Human Escalation",
    value:
      "Qualified routing when competence, jurisdiction or authorization is required.",
    control: "Competence, independence, confidentiality, owner, return path.",
  },
  {
    capability: "Professional Boundaries",
    value: "Contextual stop, qualify and escalation behavior.",
    control: "No disclaimer-only implementation; enforced action gates.",
  },
];

export default function FirmCapabilitySection() {
  return (
    <section className="relative w-full bg-[#FFF7ED] py-20 sm:py-24 px-6 sm:px-10 md:px-12 lg:px-16 font-sans antialiased overflow-hidden">
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
      `}</style>

      <div className="relative max-w-[1312px] mx-auto w-full z-10">
        {/* Header */}
        <div className="text-left">
          <span className="opacity-0 animate-fade-in-up delay-0 text-xs font-bold tracking-wide text-[#155E75] uppercase block">
            FIRM CAPABILITY SYSTEM
          </span>
          <h2 className="opacity-0 animate-fade-in-up delay-100 mt-3.5 max-w-[680px] text-3xl font-serif font-semibold leading-tight text-[#1F2A37]">
            Every capability pairs a professional outcome with a visible
            control.
          </h2>
        </div>

        {/* Capability Table */}
        <div className="opacity-0 animate-fade-in-up delay-200 mt-7 rounded-xl border border-[#D6D3D1] overflow-hidden">
          {/* Table Header */}
          <div className="hidden md:grid grid-cols-[1fr_1.3fr_1.3fr] bg-[#F5F5F4] px-6 py-3.5 gap-2 md:gap-6">
            <span className="text-xs font-bold tracking-wide text-[#78716C] uppercase">
              CAPABILITY
            </span>
            <span className="text-xs font-bold tracking-wide text-[#78716C] uppercase">
              ACCOUNTING-FIRM VALUE
            </span>
            <span className="text-xs font-bold tracking-wide text-[#78716C] uppercase">
              CONTROL THAT MUST APPEAR
            </span>
          </div>

          {/* Table Rows */}
          {CAPABILITY_ROWS.map((row, index) => {
            const isEven = index % 2 === 0;
            const rowBg = isEven ? "bg-white" : "bg-[#F5F5F4]";

            return (
              <div
                key={index}
                className={`grid grid-cols-1 md:grid-cols-[1fr_1.3fr_1.3fr] px-6 py-5 gap-2 md:gap-6 border-t border-[#D6D3D1] ${rowBg}`}
              >
                <h3 className="text-sm font-semibold text-[#1F2A37]">
                  {row.capability}
                </h3>
                <p className="text-sm font-normal text-[#4B5563]">
                  {row.value}
                </p>
                <p className="text-sm font-normal text-[#4B5563]">
                  {row.control}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
