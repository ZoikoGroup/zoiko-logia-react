"use client";

import React from "react";

interface Destination {
  title: string;
  description: string;
  primary?: boolean;
}

const DESTINATIONS: Destination[] = [
  {
    title: "Start with a Guided Question",
    description:
      "Structured intent, context, source scope, privacy review and preview.",
    primary: true,
  },
  {
    title: "Book a Demo",
    description:
      "Guided walkthrough with source scope, accounting context, evidence and governance context.",
  },
  {
    title: "Request Pilot",
    description:
      "Controlled evaluation with synthetic validation, read-only and governance stages.",
  },
  {
    title: "Enterprise Briefing",
    description:
      "Data flows, integrations, professional boundaries and evaluation evidence.",
  },
  {
    title: "View Professional Boundaries",
    description:
      "Legal bottom-line on what Kriton™ can and cannot do in professional contexts.",
  },
];

export default function GetStartedSection() {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: Header + Image */}
          <div className="flex flex-col items-start text-left">
            <span className="opacity-0 animate-fade-in-up delay-0 text-xs font-semibold tracking-wide text-[#C97D2A] uppercase leading-4 block">
              GET STARTED
            </span>

            <h2 className="opacity-0 animate-fade-in-up delay-100 mt-4 text-3xl sm:text-4xl font-serif font-bold leading-10 text-[#101828]">
              Start with a governed question.
            </h2>

            <p className="opacity-0 animate-fade-in-up delay-200 mt-5 text-base font-normal text-[#667085] leading-7">
              All demonstrations use fictional entities, generalized facts and
              non-sensitive values. No real client data, personal information or
              confidential filings appear.
            </p>

            <div className="opacity-0 animate-fade-in-up delay-300 mt-8 w-full">
              <img
                src="/ask-accounting-questions/get-started.png"
                alt="Advisors greeting each other before a briefing"
                className="w-full h-auto object-cover block"
              />
            </div>
          </div>

          {/* Right: Destination List */}
          <div className="opacity-0 animate-fade-in-up delay-300 flex flex-col">
            {DESTINATIONS.map((item, index) => {
              const isAlt = index % 2 === 0;
              const baseBg = isAlt ? "bg-[#EDE8DC]" : "bg-white";

              return (
                <a
                  key={index}
                  href="#"
                  className={`flex items-center justify-between gap-4 px-6 py-5 border border-[#DDD8CC] border-b-0 last:border-b transition-colors duration-200 text-left ${
                    item.primary
                      ? "bg-[#C97D2A] hover:bg-[#b06a20] border-[#C97D2A]"
                      : `${baseBg} hover:bg-[#F7F2E8]`
                  }`}
                >
                  <span className="flex flex-col gap-1">
                    <span
                      className={`text-sm font-semibold ${
                        item.primary ? "text-white" : "text-[#101828]"
                      }`}
                    >
                      {item.title}
                    </span>
                    <span
                      className={`text-xs font-normal leading-relaxed ${
                        item.primary ? "text-[#FFFFFFCC]" : "text-[#667085]"
                      }`}
                    >
                      {item.description}
                    </span>
                  </span>
                  <span
                    className={`shrink-0 ${
                      item.primary ? "text-white" : "text-[#C97D2A]"
                    }`}
                    aria-hidden="true"
                  >
                    →
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
