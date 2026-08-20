"use client";

import React from "react";

interface PrivacyRow {
  label: string;
  detail: string;
}

const PRIVACY_ROWS: PrivacyRow[] = [
  {
    label: "Minimum data",
    detail:
      "Collect and display only fields needed for the approved task and role.",
  },
  {
    label: "Masking",
    detail:
      "Bank, tax ID, government ID, health and immigration values masked by default.",
  },
  {
    label: "Role-based reveal",
    detail: "Requires purpose, authority, re-authentication and logging.",
  },
  {
    label: "Tenant isolation",
    detail: "No cross-tenant retrieval, indexing, logs, exports or analytics.",
  },
  {
    label: "Retention",
    detail:
      "Task, evidence, legal hold and statutory policies with approved deletion.",
  },
  {
    label: "Export",
    detail: "Redaction, scope, recipient, format and authorization controls.",
  },
  {
    label: "Monitoring",
    detail:
      "No hidden worker surveillance, productivity scoring or behavioral profiling.",
  },
  {
    label: "Incidents",
    detail:
      "Containment, scope, notification and remediation states to authorized roles only.",
  },
];

export default function PrivacySection() {
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Image + Boundary Caption */}
          <div className="lg:col-span-5 opacity-0 animate-fade-in-up delay-300 w-full">
            <div className="relative w-full aspect-[4/3] bg-[#EDE8DC] overflow-hidden">
              <img
                src="/PayrollCompliance/privacy.png"
                alt="Payroll administrator working with masked employee records"
                className="w-full h-full object-cover block"
              />
            </div>
            <div className="bg-[#1A2332] px-5 py-4">
              <p className="text-xs leading-relaxed">
                <span className="text-[#C97D2A] font-semibold">
                  Professional Boundary —{" "}
                </span>
                <span className="text-[#FFFFFF99] font-normal">
                  Kriton™ does not monitor individual workers, infer
                  productivity or store employee data beyond approved task and
                  evidence retention requirements.
                </span>
              </p>
            </div>
          </div>

          {/* Right Column: Header + Privacy Table */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-5">
            <span className="opacity-0 animate-fade-in-up delay-0 text-xs font-semibold tracking-[1.5px] text-[#C97D2A] uppercase block">
              PRIVACY
            </span>

            <h2 className="opacity-0 animate-fade-in-up delay-100 text-3xl sm:text-4xl font-serif font-semibold leading-[1.18] text-[#101828] tracking-tight">
              Workforce data privacy and minimization.
            </h2>

            <p className="opacity-0 animate-fade-in-up delay-200 text-xs sm:text-sm text-[#667085] leading-relaxed font-normal">
              Every public demonstration uses synthetic identifiers and masked
              values. Institutional deployments apply minimum disclosure and
              role-based access. No real employee records appear in any public
              context.
            </p>

            {/* Privacy Table */}
            <div className="opacity-0 animate-fade-in-up delay-300 w-full border-t border-[#DDD8CC]">
              {PRIVACY_ROWS.map((row, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4 py-3.5 border-b border-[#DDD8CC]"
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
          </div>
        </div>
      </div>
    </section>
  );
}
