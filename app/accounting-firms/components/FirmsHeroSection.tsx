"use client";

import React from "react";

export default function FirmsHeroSection() {
  return (
    <section className="relative w-full bg-[#1F2A37] text-white py-20 sm:py-24 px-6 sm:px-10 md:px-12 lg:px-16 font-sans antialiased overflow-hidden">
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

      <div className="relative max-w-[1312px] mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Text & Actions */}
          <div className="flex flex-col items-start text-left">
            {/* Eyebrow */}
            <span className="opacity-0 animate-fade-in-up delay-100 text-xs font-bold tracking-wider text-[#94A3B8] uppercase block">
              SOLUTIONS FOR ACCOUNTING FIRMS
            </span>

            {/* Main Heading */}
            <h1 className="opacity-0 animate-fade-in-up delay-200 mt-6 text-4xl md:text-5xl font-serif font-semibold leading-[1.09] text-[#FFF7ED]">
              Bring governed AI into accounting-firm work — with sources, review
              and professional control intact.
            </h1>

            {/* Paragraph */}
            <p className="opacity-0 animate-fade-in-up delay-300 mt-7 text-base font-normal text-[#9CA3AF] leading-7">
              ZoikoLogia™ with Kriton™ helps accounting practices explore
              source-backed research, structured workflows, review-ready
              evidence and controlled learning — while qualified professionals
              retain judgment, authorization and client responsibility.
            </p>

            {/* Action Buttons */}
            <div className="opacity-0 animate-fade-in-up delay-400 mt-9 flex flex-wrap items-center gap-5">
              <a
                href="#"
                className="bg-[#D97706] hover:bg-[#b45309] text-white text-base font-semibold px-6 py-3.5 rounded-md transition-colors duration-200"
              >
                Book a Demo
              </a>
              <a
                href="#"
                className="text-[#FFF7ED] text-base font-semibold px-7 py-3.5 rounded-md border border-[#FFF7ED] hover:bg-[#FFFFFF12] transition-colors duration-200"
              >
                Request Pilot
              </a>
              <a
                href="#"
                className="text-[#D97706] hover:text-[#b45309] text-sm font-semibold transition-colors duration-200"
              >
                See How Governance Works →
              </a>
            </div>

            {/* Disclaimer */}
            <p className="opacity-0 animate-fade-in-up delay-500 mt-10 max-w-[520px] text-xs font-normal text-[#9CA3AF] leading-5">
              Kriton™ supports professional work. It does not replace qualified
              accountants, auditors, tax professionals, statutory obligations or
              required human review.
            </p>
          </div>

          {/* Right Column: Hero Image */}
          <div className="opacity-0 animate-fade-in-up delay-500 w-full">
            <div className="relative w-full aspect-[628/511] bg-[#1F2A37] rounded-2xl border border-[#374151] shadow-[0px_20px_50px_-20px_rgba(0,0,0,0.45)] overflow-hidden">
              <img
                src="/accounting-firms/hero.png"
                alt="Accounting firm advisors meeting with a client"
                className="w-full h-full object-cover block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
