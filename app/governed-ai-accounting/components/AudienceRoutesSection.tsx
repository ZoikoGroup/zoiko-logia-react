"use client";

import React from "react";

interface RouteCard {
  category: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

const LEFT_CARDS: RouteCard[] = [
  {
    category: "AI GOVERNANCE",
    title: "Turn principles into controlled operating decisions.",
    description: "Use-case register, policy gates, exceptions and evidence",
    linkText: "Book Governance Briefing",
    linkHref: "#",
  },
  {
    category: "LEGAL & COMPLIANCE",
    title: "Review boundaries, obligations, mappings and human decisions.",
    description: "Professional boundaries, policy evidence and limitations",
    linkText: "Request Enterprise Briefing",
    linkHref: "#",
  },
];

const RIGHT_CARDS: RouteCard[] = [
  {
    category: "PRIVACY & SECURITY",
    title: "Control data, providers, identity, incidents and exports.",
    description:
      "Tenant boundaries, minimum access, provider receipts and response states",
    linkText: "Visit Privacy & Security",
    linkHref: "#",
  },
  {
    category: "PROCUREMENT / TPRM",
    title: "Review platform and provider evidence before commitment.",
    description:
      "Due diligence packet, pilot, data flow and contractual evidence",
    linkText: "Request Evidence Pack",
    linkHref: "#",
  },
];

export default function AudienceRoutesSection() {
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
            AUDIENCE ROUTES
          </span>
          <h2 className="opacity-0 animate-fade-in-up delay-100 text-3xl sm:text-4xl font-serif font-semibold leading-[1.18] text-[#101828] tracking-tight">
            Find your governance path.
          </h2>
          <p className="opacity-0 animate-fade-in-up max-w-120 delay-200 text-xs sm:text-sm text-[#667085] leading-relaxed font-normal">
            Each discipline has distinct evidence requirements, decision rights
            and review obligations. Select your role to route to the right
            controls.
          </p>
        </div>

        {/* 3-Column Grid Layout (Left Cards, Center Image, Right Cards) without colspans */}
        <div className="opacity-0 animate-fade-in-up delay-300 grid grid-cols-1 lg:grid-cols-[27%_46%_27%] gap-4 lg:gap-0 items-stretch border border-[#E2DDD0]">
          {/* Left Column: 2 Stacked Cards */}
          <div className="grid grid-cols-1 divide-y divide-[#E2DDD0] border-b lg:border-b-0 lg:border-r border-[#E2DDD0]">
            {LEFT_CARDS.map((card, index) => (
              <div
                key={index}
                className="bg-[#F7F2E8] p-6 sm:p-8 flex flex-col justify-between text-left"
              >
                <div>
                  <span className="text-[11px] font-semibold tracking-wider text-[#C97D2A] uppercase block mb-2">
                    {card.category}
                  </span>
                  <h3 className="text-base font-serif font-bold text-[#101828] mb-2 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#667085] leading-relaxed font-normal mb-6">
                    {card.description}
                  </p>
                </div>
                <a
                  href={card.linkHref}
                  className="text-xs font-semibold text-[#C97D2A] hover:text-[#b06a20] transition-colors duration-200 inline-flex items-center gap-1"
                >
                  {card.linkText} &rarr;
                </a>
              </div>
            ))}
          </div>

          {/* Center Column: Image */}
          <div className="relative w-full h-full min-h-[320px] bg-white border-b lg:border-b-0 lg:border-r border-[#E2DDD0]">
            <img
              src="/governed-ai-accounting/2.png"
              alt="Governance Team Collaboration"
              className="w-full h-full object-cover block"
            />
          </div>

          {/* Right Column: 2 Stacked Cards */}
          <div className="grid grid-cols-1 divide-y divide-[#E2DDD0]">
            {RIGHT_CARDS.map((card, index) => (
              <div
                key={index}
                className="bg-[#F7F2E8] p-6 sm:p-8 flex flex-col justify-between text-left"
              >
                <div>
                  <span className="text-[11px] font-semibold tracking-wider text-[#C97D2A] uppercase block mb-2">
                    {card.category}
                  </span>
                  <h3 className="text-base font-serif font-bold text-[#101828] mb-2 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#667085] leading-relaxed font-normal mb-6">
                    {card.description}
                  </p>
                </div>
                <a
                  href={card.linkHref}
                  className="text-xs font-semibold text-[#C97D2A] hover:text-[#b06a20] transition-colors duration-200 inline-flex items-center gap-1"
                >
                  {card.linkText} &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
