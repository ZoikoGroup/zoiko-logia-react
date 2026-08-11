"use client";

import React from "react";

interface ControlSignalItem {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

const CONTROL_SIGNALS: ControlSignalItem[] = [
  {
    title: "Source Authority",
    description: "Approved sources, scope and effective dates remain visible.",
    linkText: "Source-Governed Intelligence",
    linkHref: "#",
  },
  {
    title: "Human Decision Rights",
    description: "Consequential decisions remain with authorized people.",
    linkText: "Professional Boundaries",
    linkHref: "#",
  },
  {
    title: "Evaluation Gates",
    description: "Changes require evidence, review and release conditions.",
    linkText: "Evaluation & Benchmarks",
    linkHref: "#",
  },
  {
    title: "Evidence Continuity",
    description:
      "Inputs, versions, reviews, exceptions and outcomes can be traced.",
    linkText: "Audit Evidence Ledger",
    linkHref: "#",
  },
  {
    title: "Change Control",
    description:
      "Organizations can restrict, pause, roll back and retire governed capability.",
    linkText: "Release Controls",
    linkHref: "#",
  },
  {
    title: "Privacy and Security",
    description:
      "Access, provider, retention and data handling controls are visible.",
    linkText: "Privacy & Security",
    linkHref: "#",
  },
];

export default function ControlSignalsSection() {
  return (
    <section className="relative w-full bg-[#1A2332] text-white py-16 sm:py-20 px-4 sm:px-6 md:px-8 font-sans antialiased overflow-hidden">
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
        .delay-500 {
          animation-delay: 500ms;
        }
        .delay-600 {
          animation-delay: 600ms;
        }
      `}</style>

      <div className="relative max-w-6xl mx-auto w-full z-10">
        {/* Eyebrow Header */}
        <div className="opacity-0 animate-fade-in-up delay-0 mb-10 text-left px-1">
          <span className="text-xs font-semibold tracking-[1.5px] text-[#FFFFFF8C] uppercase block">
            CONTROL SIGNALS
          </span>
        </div>

        {/* 6 Grid Columns without colspans */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-0">
          {CONTROL_SIGNALS.map((item, index) => {
            const delayClasses = [
              "delay-100",
              "delay-200",
              "delay-300",
              "delay-400",
              "delay-500",
              "delay-600",
            ];

            return (
              <div
                key={index}
                className={`opacity-0 animate-fade-in-up ${delayClasses[index]} flex flex-col justify-between text-left lg:px-3.5 xl:px-4 lg:border-r lg:border-[#FFFFFF1A] first:lg:pl-0 last:lg:pr-0 last:lg:border-r-0`}
              >
                <div>
                  <h3 className="text-[15px] font-semibold text-white mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  {/* Adjusted max-width & text size to maintain 2-line description in max-w-6xl container */}
                  <p className="text-[11px] sm:text-xs text-[#FFFFFF80] leading-[1.45] mb-5 max-w-[175px]">
                    {item.description}
                  </p>
                </div>

                {/* Link with inline arrow and constrained width for 2-line wrapping where necessary */}
                <a
                  href={item.linkHref}
                  className="text-[11px] sm:text-xs font-medium text-[#C97D2A] hover:text-[#d88c39] transition-colors duration-200 leading-snug inline-block max-w-40"
                >
                  {item.linkText} &rarr;
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
