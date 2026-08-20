"use client";

import React from "react";

const CONTEXT_FIELDS = [
  { label: "ENTITY", value: "Fictional Corp — UK/IE" },
  { label: "PAY GROUP", value: "Monthly · Dec 2024" },
  { label: "OBLIGATION", value: "PAYE · NIC · Pension" },
  { label: "GATE", value: "Dual Approval Required" },
];

export default function PayrollHeroSection() {
  return (
    <section className="relative w-full bg-[#0E1F33] text-white py-16 sm:py-20 md:py-24 px-6 sm:px-12 md:px-16 lg:px-24 font-sans antialiased overflow-hidden">
      {/* Embedded CSS Keyframes and Animation Classes */}
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
        .delay-500 {
          animation-delay: 500ms;
        }
        .delay-600 {
          animation-delay: 600ms;
        }
      `}</style>

      <div className="relative max-w-6xl mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text & Actions */}
          <div className="flex flex-col items-start text-left space-y-6">
            {/* Eyebrow Text */}
            <span className="opacity-0 animate-fade-in-up delay-100 text-[11px] font-semibold tracking-[1px] text-[#FFFFFF8C] uppercase block">
              SOLUTIONS FOR PAYROLL &amp; COMPLIANCE TEAMS
            </span>

            {/* Main Heading */}
            <h1 className="opacity-0 animate-fade-in-up delay-200 text-3xl md:text-[46px] font-serif font-normal leading-[1.12] max-w-140 text-white tracking-tight">
              Bring source authority, review and evidence continuity to payroll
              and compliance work.
            </h1>

            {/* Subheading / Paragraph */}
            <p className="opacity-0 animate-fade-in-up delay-300 text-sm sm:text-base text-[#FFFFFFA6] leading-relaxed max-w-140">
              ZoikoLogia™ with Kriton™ helps payroll, employment-tax,
              compliance, HR and finance teams research obligations, prepare
              controlled workflows, validate inputs, trace calculations,
              reconcile outcomes and route consequential decisions to authorized
              people.
            </p>

            {/* Boundary Box Callout */}
            <div className="opacity-0 animate-fade-in-up delay-400 w-full max-w-140 bg-[#C97D2A12] border border-[#C97D2A66] rounded-[3px] px-4 py-3 text-xs leading-relaxed">
              <span className="text-[#C97D2A] font-semibold">Boundary — </span>
              <span className="text-[#FFFFFF99]">
                Kriton™ supports payroll and compliance work. It does not
                provide legal or tax advice, determine worker status, authorize
                pay, submit filings or release payments.
              </span>
            </div>

            {/* Action Buttons */}
            <div className="opacity-0 animate-fade-in-up delay-500 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#"
                className="bg-[#C97D2A] hover:bg-[#b06a20] text-white font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-[3px] transition-colors duration-200 shadow-sm text-center"
              >
                Book a Demo
              </a>
              <a
                href="#"
                className="bg-transparent hover:bg-[#1B2B45] text-[#FFFFFFCC] border border-[#FFFFFF33] font-medium text-xs sm:text-sm px-6 py-3.5 rounded-[3px] transition-colors duration-200 text-center"
              >
                Request Pilot
              </a>
              <a
                href="#"
                className="bg-transparent hover:bg-[#1B2B45] text-[#FFFFFF80] border border-[#FFFFFF1A] font-medium text-xs sm:text-sm px-6 py-3.5 rounded-[3px] transition-colors duration-200 text-center"
              >
                Enterprise Briefing
              </a>
            </div>
          </div>

          {/* Right Column: Context Strip + Image + Gate Bar */}
          <div className="opacity-0 animate-fade-in-up delay-600 w-full">
            {/* Context Field Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 bg-[#0A1727] border border-[#FFFFFF1A] rounded-t-md">
              {CONTEXT_FIELDS.map((field, index) => (
                <div
                  key={index}
                  className="px-4 py-3 border-[#FFFFFF0D] border-b sm:border-b-0 border-l first:border-l-0 sm:border-l sm:first:border-l-0"
                >
                  <span className="block text-[9px] font-semibold tracking-wider text-[#C97D2A] uppercase leading-3">
                    {field.label}
                  </span>
                  <span className="block pt-1 text-xs text-[#FFFFFF99] font-normal leading-4">
                    {field.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Hero Image */}
            <div className="relative w-full aspect-[4/3] bg-[#1A2332] border-x border-[#FFFFFF1A] overflow-hidden">
              <img
                src="/PayrollCompliance/hero.png"
                alt="Payroll and compliance team reviewing a controlled pay run"
                className="w-full h-full object-cover block"
              />
            </div>

            {/* Gate Status Bar */}
            <div className="w-full bg-[#0A1727] border-x border-b border-[#FFFFFF1A] rounded-b-md px-5 py-2.5">
              <p className="text-xs leading-4">
                <span className="text-[#E08A3C] font-medium">
                  ⊙ Dual Approval Required{" "}
                </span>
                <span className="text-[#FFFFFF4D] font-normal">
                  · No transmission until both approvers confirm · Provider
                  scope verified
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
