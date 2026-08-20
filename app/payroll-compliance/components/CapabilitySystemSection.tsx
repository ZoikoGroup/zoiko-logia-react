"use client";

import React from "react";

interface Capability {
  title: string;
  description: string;
  boundary: string;
}

const CAPABILITIES: Capability[] = [
  {
    title: "Ask Accounting Questions",
    description:
      "Clarify payroll accounting, employment-tax, reporting or compliance questions with source-linked explanations.",
    boundary:
      "Not legal or tax advice; not a worker-status or filing determination.",
  },
  {
    title: "Workflow Mode",
    description:
      "Structure calendars, inputs, validations, reconciliations, reviews, approvals and handoffs for payroll and compliance work.",
    boundary:
      "No autonomous pay, filing, payment or employee communication.",
  },
  {
    title: "Review Mode",
    description:
      "Inspect context, sources, calculations, versions, exceptions, approvals and unresolved items before consequential action.",
    boundary: "Outcome requires an authorized human.",
  },
  {
    title: "Source-Governed Intelligence",
    description:
      "Control approved laws, regulations, guidance, policies, contracts and provider documentation with jurisdiction and effective-date context.",
    boundary:
      "Source presence does not establish applicability or legal sufficiency.",
  },
];

export default function CapabilitySystemSection() {
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
        .delay-400 {
          animation-delay: 400ms;
        }
      `}</style>

      <div className="relative max-w-6xl mx-auto w-full z-10">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-12">
          <div className="lg:col-span-6 text-left space-y-4">
            <span className="opacity-0 animate-fade-in-up delay-0 text-xs font-semibold tracking-[1.5px] text-[#FFFFFF66] uppercase block">
              CAPABILITY SYSTEM
            </span>
            <h2 className="opacity-0 animate-fade-in-up delay-100 text-3xl sm:text-4xl font-serif font-semibold leading-[1.18] text-white tracking-tight">
              What Kriton™ can support — and where it stops.
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="opacity-0 animate-fade-in-up delay-200 text-xs sm:text-sm text-[#FFFFFF80] leading-relaxed font-normal">
              Every capability layer operates within a declared boundary. Teams
              can see what is supported, what requires qualified judgment and
              what must be refused or escalated.
            </p>
          </div>
        </div>

        {/* Capability Grid */}
        <div className="opacity-0 animate-fade-in-up delay-300 grid grid-cols-1 lg:grid-cols-2 border-t border-l border-[#FFFFFF1A]">
          {CAPABILITIES.map((item, index) => (
            <div
              key={index}
              className="px-6 sm:px-8 py-8 border-r border-b border-[#FFFFFF1A] flex flex-col text-left"
            >
              <h3 className="text-xs font-semibold text-white leading-5">
                {item.title}
              </h3>
              <p className="flex-1 pt-2.5 text-xs text-[#FFFFFF80] leading-5 font-normal">
                {item.description}
              </p>
              <div className="mt-4 pt-4 border-t border-[#FFFFFF0D]">
                <p className="text-xs leading-4">
                  <span className="text-[#C97D2A] font-semibold">
                    Boundary —{" "}
                  </span>
                  <span className="text-[#FFFFFF4D] font-normal">
                    {item.boundary}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Wide Image */}
        <div className="opacity-0 animate-fade-in-up delay-400 relative w-full h-64 sm:h-80 md:h-96 border-x border-b border-[#FFFFFF1A] overflow-hidden">
          <img
            src="/PayrollCompliance/capability-system.png"
            alt="Payroll practitioner working within a governed workflow"
            className="w-full h-full object-cover block"
          />
        </div>
      </div>
    </section>
  );
}
