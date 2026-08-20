"use client";

import React from "react";

export default function EducationHeroSection() {
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
              ACCOUNTING EDUCATION
            </span>

            {/* Main Heading */}
            <h1 className="opacity-0 animate-fade-in-up delay-200 text-3xl md:text-[50px] font-serif font-normal leading-[1.12] max-w-130 text-white tracking-tight">
              Help learners understand accounting with sources, practice and
              educator control.
            </h1>

            {/* Subheading / Paragraph */}
            <p className="opacity-0 animate-fade-in-up delay-300 text-sm sm:text-base text-[#FFFFFFA6] leading-relaxed max-w-110">
              ZoikoLogia™ with Kriton™ supports governed accounting learning
              through source-backed explanations, transparent worked examples,
              synthetic practice, formative feedback, accessibility safeguards
              and clear routes to qualified educators.
            </p>

            {/* Action Buttons */}
            <div className="opacity-0 animate-fade-in-up delay-500 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#"
                className="bg-[#C97D2A] hover:bg-[#b06a20] text-white font-medium text-xs sm:text-sm px-6 py-3.5 rounded-[3px] transition-colors duration-200 shadow-sm text-center"
              >
                Book an Education Demo
              </a>
              <a
                href="#"
                className="bg-transparent hover:bg-[#1B2B45] text-white border border-[#2B3E5C] font-medium text-xs sm:text-sm px-6 py-3.5 rounded-[3px] transition-colors duration-200 text-center"
              >
                Request an Institutional Pilot
              </a>
              <a
                href="#"
                className="bg-transparent hover:bg-[#1B2B45] text-[#FFFFFFB2] border border-[#FFFFFF1A] font-medium text-xs sm:text-sm px-6 py-3.5 rounded-[3px] transition-colors duration-200 text-center"
              >
                Explore Learning &amp; Practice Mode
              </a>
            </div>

            {/* Trailing Link */}
            <div className="opacity-0 animate-fade-in-up delay-500 pt-2">
              <a
                href="#"
                className="text-xs sm:text-sm font-semibold text-[#C97D2A] hover:text-[#b06a20] transition-colors duration-200 inline-flex items-center gap-1.5"
              >
                View Governance and Privacy &amp; Security &rarr;
              </a>
            </div>
          </div>

          {/* Right Column: Hero Image + Integrity Status Bar */}
          <div className="opacity-0 animate-fade-in-up delay-600 w-full">
            <div className="relative w-full aspect-square bg-[#1A2332] border border-[#FFFFFF1A] overflow-hidden">
              <img
                src="/accounting-education/hero.png"
                alt="Accounting learner reviewing a worked ledger example"
                className="w-full h-full object-cover block"
              />
            </div>

            {/* Integrity Status Strip */}
            <div className="w-full bg-[#0E1F33] border-x border-b border-[#FFFFFF1A] px-4 py-2.5 flex flex-wrap items-center gap-x-6 gap-y-1.5">
              <span className="text-[10px] font-semibold tracking-wider text-[#FFFFFF66] uppercase">
                Integrity Status
              </span>
              <span className="text-xs font-medium text-[#4ADE80]">
                ● Open Practice
              </span>
              <span className="text-[10px] text-[#FFFFFF4D] font-normal">
                Assessment: not active · Full learning support permitted
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
