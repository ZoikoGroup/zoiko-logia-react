"use client";

import React from "react";

interface PrivacyRow {
  label: string;
  detail: string;
}

const PRIVACY_ROWS: PrivacyRow[] = [
  {
    label: "Pre-entry guidance",
    detail:
      "Users are told not to enter unnecessary names, account numbers, credentials, employee data, client identifiers or confidential details before beginning a question.",
  },
  {
    label: "Minimum necessary",
    detail:
      "Request only facts that materially affect the answer; prefer generalized descriptions over specific identifiers.",
  },
  {
    label: "Sensitive-data detection",
    detail:
      "Credential-like, highly sensitive or policy-restricted content warned or blocked without exposure to marketing analytics.",
  },
  {
    label: "Tenant isolation",
    detail:
      "Cross-tenant content, metadata or source existence is never exposed, inferred or indexed.",
  },
  {
    label: "Analytics boundaries",
    detail:
      "No raw question, answer, attachment, evidence or personal data enters marketing analytics events. State categories only.",
  },
  {
    label: "Public demo",
    detail:
      "Synthetic data only. No upload or use of real client, employee, taxpayer or confidential transaction records.",
  },
];

export default function PrivacyControlsSection() {
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
              PRIVACY &amp; ENTERPRISE CONTROLS
            </span>
            <h2 className="opacity-0 animate-fade-in-up delay-100 mt-4 text-3xl sm:text-4xl font-serif font-bold leading-10 text-white">
              Minimum necessary data. Administrator-governed access.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="opacity-0 animate-fade-in-up delay-200 text-base font-normal text-[#FFFFFF66] leading-6">
              Every public demonstration uses synthetic identifiers and
              generalized descriptions. Enterprise deployments apply role,
              workspace and tenant isolation. Admin configuration cannot remove
              statutory professional responsibility.
            </p>
          </div>
        </div>

        {/* Layout: Requirements table | Image + note */}
        <div className="opacity-0 animate-fade-in-up delay-300 grid grid-cols-1 lg:grid-cols-2 items-stretch border border-[#FFFFFF1A]">
          {/* Left: Requirements */}
          <div className="flex flex-col lg:border-r border-[#FFFFFF1A]">
            <div className="px-6 py-4 bg-[#FFFFFF0D] border-b border-[#FFFFFF1A]">
              <span className="text-[10px] font-semibold tracking-wide text-[#FFFFFF66] uppercase leading-4">
                DATA &amp; PRIVACY REQUIREMENTS
              </span>
            </div>

            {PRIVACY_ROWS.map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-[170px_1fr] gap-1 sm:gap-4 px-6 py-4 border-b last:border-b-0 border-[#FFFFFF0D]"
              >
                <h3 className="text-xs font-semibold text-white leading-4">
                  {row.label}
                </h3>
                <p className="text-xs font-normal text-[#FFFFFF66] leading-5">
                  {row.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Image + Note */}
          <div className="flex flex-col">
            <div className="relative w-full flex-1 min-h-64 bg-[#1F2A3A] overflow-hidden">
              <img
                src="/ask-accounting-questions/privacy.png"
                alt="Enterprise team reviewing governed documentation"
                className="w-full h-full object-cover block"
              />
            </div>

            <div className="px-6 py-6 flex flex-col">
              <p className="text-sm font-normal text-[#FFFFFF66] leading-6">
                Admin configuration cannot convert Kriton™ into a licensed
                professional or remove statutory responsibility from qualified
                individuals.
              </p>
              <div className="pt-4 flex flex-wrap gap-6">
                <a
                  href="#"
                  className="text-xs font-semibold text-[#C97D2A] hover:text-[#b06a20] transition-colors duration-200"
                >
                  Privacy &amp; Security →
                </a>
                <a
                  href="#"
                  className="text-xs font-semibold text-[#C97D2A] hover:text-[#b06a20] transition-colors duration-200"
                >
                  Governance Framework →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
