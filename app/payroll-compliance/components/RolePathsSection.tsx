"use client";

import React from "react";

interface RoleRow {
  category: string;
  title: string;
  description: string;
  linkText: string;
  image: string;
  imageAlt: string;
}

interface RoleCard {
  category: string;
  title: string;
  linkText: string;
}

const ROLE_ROWS: RoleRow[] = [
  {
    category: "PAYROLL LEADERS",
    title:
      "Govern calendars, controls, exceptions, providers, approvals and evidence across entities.",
    description:
      "Owns payroll operating model, accountability, review and release governance.",
    linkText: "Request Enterprise Briefing",
    image: "/PayrollCompliance/role-payroll-leaders.png",
    imageAlt: "Payroll leader reviewing dashboards across multiple monitors",
  },
  {
    category: "PAYROLL OPERATIONS",
    title:
      "Validate inputs, trace calculations, reconcile outputs and manage exceptions.",
    description:
      "Prepares and reviews operational payroll artifacts within assigned authority.",
    linkText: "Explore Governed Payroll Workflow",
    image: "/PayrollCompliance/role-payroll-operations.png",
    imageAlt: "Payroll operations specialist reconciling figures at a desk",
  },
  {
    category: "EMPLOYMENT TAX",
    title:
      "Research obligations, rates, thresholds, effective dates, filings and evidence.",
    description: "Interprets rules and approves tax treatment or escalates.",
    linkText: "View Source Authority Pattern",
    image: "/PayrollCompliance/role-employment-tax.png",
    imageAlt: "Employment tax analyst researching rates across screens",
  },
  {
    category: "COMPLIANCE TEAMS",
    title:
      "Map obligations, controls, issues, remediation and supporting records.",
    description:
      "Owns compliance interpretation, monitoring and escalation within mandate.",
    linkText: "Explore Compliance Controls",
    image: "/PayrollCompliance/role-compliance-teams.png",
    imageAlt: "Compliance reviewer inspecting a reconciliation dashboard",
  },
];

const ROLE_CARDS: RoleCard[] = [
  {
    category: "HR OPERATIONS",
    title:
      "Connect approved worker lifecycle context without overexposing employee data.",
    linkText: "View Privacy-Safe Context Pattern",
  },
  {
    category: "FINANCE / CONTROLLERS",
    title:
      "Reconcile payroll expense, liabilities, cash, journals and close evidence.",
    linkText: "Explore Payroll Accounting Pattern",
  },
  {
    category: "PRIVACY / SECURITY",
    title:
      "Review data flows, roles, retention, transfers, incidents and provider boundaries.",
    linkText: "Visit Privacy & Security",
  },
  {
    category: "IT / INTEGRATIONS",
    title:
      "Connect approved HR, time, payroll, finance and identity systems through controlled modes.",
    linkText: "Explore Enterprise Integrations",
  },
];

export default function RolePathsSection() {
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
        .delay-400 {
          animation-delay: 400ms;
        }
      `}</style>

      <div className="relative max-w-6xl mx-auto w-full z-10">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-10">
          <div className="lg:col-span-5 text-left space-y-3">
            <span className="opacity-0 animate-fade-in-up delay-0 text-xs font-semibold tracking-[1.5px] text-[#C97D2A] uppercase block">
              ROLE PATHS
            </span>
            <h2 className="opacity-0 animate-fade-in-up delay-100 text-3xl sm:text-4xl font-serif font-semibold leading-[1.18] text-[#101828] tracking-tight">
              Find your governance path.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="opacity-0 animate-fade-in-up delay-200 text-xs sm:text-sm text-[#667085] leading-relaxed font-normal">
              Each discipline has distinct evidence requirements, decision
              rights and review obligations. Select your role to route to the
              right controls and proof materials.
            </p>
          </div>
        </div>

        {/* Wide Role Rows */}
        <div className="opacity-0 animate-fade-in-up delay-300 flex flex-col border border-[#DDD8CC] divide-y divide-[#DDD8CC]">
          {ROLE_ROWS.map((row, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-12 items-stretch bg-white"
            >
              {/* Text Block */}
              <div className="lg:col-span-9 px-6 sm:px-10 py-8 sm:py-9 flex flex-col justify-between gap-5 text-left">
                <div>
                  <span className="text-[10px] font-bold tracking-wider text-[#C97D2A] uppercase block mb-3">
                    {row.category}
                  </span>
                  <h3 className="max-w-120 text-lg sm:text-xl font-serif font-semibold text-[#101828] leading-snug mb-3">
                    {row.title}
                  </h3>
                  <p className="text-xs text-[#667085] leading-5 font-normal">
                    {row.description}
                  </p>
                </div>
                <a
                  href="#"
                  className="text-xs font-semibold text-[#C97D2A] hover:text-[#b06a20] transition-colors duration-200 inline-flex items-center gap-1"
                >
                  {row.linkText} &rarr;
                </a>
              </div>

              {/* Image Block */}
              <div className="lg:col-span-3 relative w-full min-h-50 bg-[#EDE8DC] order-first lg:order-none">
                <img
                  src={row.image}
                  alt={row.imageAlt}
                  className="w-full h-full object-cover block"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Small Role Cards */}
        <div className="opacity-0 animate-fade-in-up delay-400 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-x border-b border-[#DDD8CC] divide-y sm:divide-y-0 divide-[#DDD8CC]">
          {ROLE_CARDS.map((card, index) => (
            <div
              key={index}
              className="bg-[#F7F2E8] px-6 py-7 flex flex-col gap-3.5 text-left border-[#DDD8CC] sm:border-r last:sm:border-r-0"
            >
              <span className="text-[10px] font-bold tracking-wider text-[#C97D2A] uppercase block">
                {card.category}
              </span>
              <h3 className="flex-1 text-base font-serif font-semibold text-[#101828] leading-snug">
                {card.title}
              </h3>
              <a
                href="#"
                className="text-xs font-semibold text-[#C97D2A] hover:text-[#b06a20] transition-colors duration-200 inline-flex items-center gap-1"
              >
                {card.linkText} &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
