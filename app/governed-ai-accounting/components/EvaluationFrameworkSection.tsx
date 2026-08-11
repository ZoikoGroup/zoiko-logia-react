"use client";

import React from "react";

export default function EvaluationFrameworkSection() {
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
      `}</style>

      <div className="relative max-w-6xl mx-auto w-full z-10">
        {/* Header Section */}
        <div className="text-left space-y-3 mb-8 sm:mb-10">
          <span className="opacity-0 animate-fade-in-up delay-0 text-xs font-semibold tracking-[1.5px] text-[#C97D2A] uppercase block">
            EVALUATION FRAMEWORK
          </span>
          <h2 className="opacity-0 animate-fade-in-up delay-100 text-3xl sm:text-4xl font-serif font-semibold leading-[1.18] text-[#101828] tracking-tight">
            Governed evaluation and benchmarks.
          </h2>
        </div>

        {/* Full Width Image Display */}
        <div className="opacity-0 animate-fade-in-up delay-200 relative w-full h-[320px] sm:h-[450px] md:h-[520px] overflow-hidden shadow-sm">
          <img
            src="/governed-ai-accounting/5.png"
            alt="Governed Evaluation and Benchmarks Analysis"
            className="w-full h-full object-cover block"
          />
        </div>
      </div>
    </section>
  );
}
