"use client";

import React from "react";

interface PrivacyItem {
  title: string;
  description: string;
}

const PRIVACY_ITEMS: PrivacyItem[] = [
  {
    title: "Minimum-necessary intake",
    description:
      "We ask only for facts required for the task, and explain why sensitive fields are needed.",
  },
  {
    title: "Public forms stay client-free",
    description:
      "Never request client names, taxpayer identifiers, bank details, payroll records or source files.",
  },
  {
    title: "Tenant & matter boundaries",
    description:
      "Conceptual isolation and permission inheritance across clients and matters.",
  },
  {
    title: "Role-based access",
    description:
      "Effective permissions and restricted states, without revealing hidden document existence.",
  },
  {
    title: "Governed data lifecycle",
    description:
      "Retention, deletion, legal hold and export follow firm and privacy policy.",
  },
];

export default function PrivacyIntegrationsSection() {
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
        .delay-300 {
          animation-delay: 300ms;
        }
      `}</style>

      <div className="relative max-w-[1312px] mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Client Confidentiality & Privacy */}
          <div className="flex flex-col items-start text-left gap-3.5">
            <span className="opacity-0 animate-fade-in-up delay-0 text-xs font-bold tracking-wide text-[#155E75] uppercase block">
              CLIENT CONFIDENTIALITY &amp; PRIVACY
            </span>

            <h2 className="opacity-0 animate-fade-in-up delay-100 text-3xl font-serif font-semibold leading-tight text-[#1F2A37]">
              Minimum-necessary by design.
            </h2>

            <div className="opacity-0 animate-fade-in-up delay-200 py-2.5 flex flex-col gap-4 w-full">
              {PRIVACY_ITEMS.map((item, index) => (
                <div key={index} className="flex items-stretch gap-3">
                  <div className="w-[5px] shrink-0 bg-[#155E75] rounded-[3px]" />
                  <div className="flex flex-col gap-1">
                    <h3 className="text-sm font-semibold text-[#1F2A37]">
                      {item.title}
                    </h3>
                    <p className="text-xs font-normal text-[#4B5563] leading-5">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="opacity-0 animate-fade-in-up delay-300 text-sm font-semibold text-[#155E75] hover:text-[#0e4453] transition-colors duration-200"
            >
              Visit Privacy &amp; Security →
            </a>
          </div>

          {/* Right Column: Enterprise Integrations */}
          <div className="flex flex-col items-start text-left gap-3.5">
            <span className="opacity-0 animate-fade-in-up delay-0 text-xs font-bold tracking-wide text-[#155E75] uppercase block">
              ENTERPRISE INTEGRATIONS
            </span>

            <h2 className="opacity-0 animate-fade-in-up delay-100 text-3xl font-serif font-semibold leading-tight text-[#1F2A37]">
              Action follows explicit authorization.
            </h2>

            <div className="opacity-0 animate-fade-in-up delay-300 w-full pt-2">
              <div className="relative w-full aspect-[624/300] rounded-xl border border-[#D6D3D1] overflow-hidden">
                <img
                  src="/accounting-firms/enterprise-integrations.png"
                  alt="Firm team working across connected systems"
                  className="w-full h-full object-cover block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
