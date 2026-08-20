"use client";

import React from "react";

export default function AskHeroSection() {
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
      `}</style>

      <div className="relative max-w-6xl mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Text & Actions */}
          <div className="flex flex-col items-start text-left">
            {/* Eyebrow */}
            <span className="opacity-0 animate-fade-in-up delay-100 text-xs font-semibold tracking-wider text-[#FFFFFF66] uppercase leading-4 block">
              ASK ACCOUNTING QUESTIONS
            </span>

            {/* Main Heading */}
            <h1 className="opacity-0 animate-fade-in-up delay-200 mt-6 text-4xl md:text-5xl font-serif font-bold leading-[1.01] text-white">
              Ask accounting questions with the context, sources and review they
              require.
            </h1>

            {/* Paragraph */}
            <p className="opacity-0 animate-fade-in-up delay-300 mt-7 text-base font-normal text-[#FFFFFF99] leading-7">
              Use Kriton™ to explore accounting, tax, audit, payroll,
              compliance, finance, reporting and learning questions through
              source-backed explanations, visible assumptions and safe next
              steps.
            </p>

            {/* Boundary Callout */}
            <div className="opacity-0 animate-fade-in-up delay-400 mt-9 w-full bg-[#C97D2A1A] border border-[#C97D2A66] rounded-[3px] px-4 py-2.5">
              <p className="text-xs leading-5">
                <span className="text-[#C97D2A] font-semibold">Boundary — </span>
                <span className="text-[#FFFFFF99] font-normal">
                  Kriton™ supports understanding and professional judgment. It
                  does not replace qualified advice, filings, approvals or
                  required human review.
                </span>
              </p>
            </div>

            {/* Action Buttons */}
            <div className="opacity-0 animate-fade-in-up delay-500 mt-9 flex flex-col items-start gap-3">
              <a
                href="#"
                className="bg-[#C97D2A] hover:bg-[#b06a20] text-white text-xs font-semibold px-6 py-3 rounded-[3px] transition-colors duration-200 text-center"
              >
                Start with a Guided Question
              </a>
              <a
                href="#"
                className="border border-[#FFFFFF33] text-[#FFFFFFCC] hover:bg-[#1B2B45] text-xs font-medium px-5 py-3.5 rounded-[3px] transition-colors duration-200 text-center"
              >
                See How Answers Are Governed
              </a>
            </div>
          </div>

          {/* Right Column: Hero Image */}
          <div className="opacity-0 animate-fade-in-up delay-500 w-full">
            <div className="relative w-full aspect-square bg-[#0E1F33] border-x border-[#FFFFFF1A] overflow-hidden">
              <img
                src="/ask-accounting-questions/hero.png"
                alt="Accounting professional asking a governed question"
                className="w-full h-full object-cover block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
