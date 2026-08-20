"use client";

import React from "react";

interface IntegrityRow {
  state: string;
  behavior: string;
}

const INTEGRITY_ROWS: IntegrityRow[] = [
  {
    state: "Open self-study",
    behavior:
      "Full explanations, examples, practice, hints and feedback within source and professional boundaries.",
  },
  {
    state: "Formative activity",
    behavior:
      "Assistance according to course policy; reasoning prompts before solution reveal.",
  },
  {
    state: "Coursework — restricted",
    behavior:
      "Hints, questions, source navigation or feedback only according to policy.",
  },
  {
    state: "Graded assessment",
    behavior: "Show policy, permitted-help scope and evidence notice.",
  },
  {
    state: "Examination / timed",
    behavior: "Restrict or refuse according to approved institutional rule.",
  },
  {
    state: "Unknown status",
    behavior:
      "Ask the learner to identify assessment status and allowed-help policy.",
  },
];

export default function AcademicIntegritySection() {
  return (
    <section className="relative w-full bg-[#1A2332] text-white py-16 sm:py-20 px-6 sm:px-12 md:px-16 lg:px-24 font-sans antialiased overflow-hidden">
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
          <span className="opacity-0 animate-fade-in-up delay-0 text-xs font-semibold tracking-[1.5px] text-[#FFFFFF8C] uppercase block">
            ACADEMIC INTEGRITY
          </span>
          <h2 className="opacity-0 animate-fade-in-up delay-100 text-3xl sm:text-4xl font-serif font-semibold leading-[1.18] text-white tracking-tight">
            Assessment boundaries and allowed assistance.
          </h2>
          <p className="opacity-0 animate-fade-in-up max-w-130 delay-200 text-xs sm:text-sm text-[#FFFFFF99] leading-relaxed font-normal">
            Assistance changes according to context. Assessment status and
            allowed-help policy are visible before practice begins. Restrictions
            are communicated calmly and respectfully.
          </p>
        </div>

        {/* Layout: Table on the left, image on the right */}
        <div className="opacity-0 animate-fade-in-up delay-300 grid grid-cols-1 lg:grid-cols-12 items-stretch border border-[#FFFFFF1A]">
          {/* Table (8 cols) */}
          <div className="lg:col-span-8 flex flex-col border-b lg:border-b-0 lg:border-r border-[#FFFFFF1A]">
            {/* Table Header */}
            <div className="hidden sm:grid grid-cols-12 border-b border-[#FFFFFF1A] text-left">
              <div className="col-span-4 p-3 sm:p-3.5 border-r border-[#FFFFFF1A]">
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-[#FFFFFF8C] uppercase">
                  ASSESSMENT STATE
                </span>
              </div>
              <div className="col-span-8 p-3 sm:p-3.5">
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-[#FFFFFF8C] uppercase">
                  ALLOWED KRITON™ BEHAVIOR
                </span>
              </div>
            </div>

            {/* Table Rows */}
            {INTEGRITY_ROWS.map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-12 border-b last:border-b-0 border-[#FFFFFF0D] text-left"
              >
                <div className="col-span-12 sm:col-span-4 p-3 sm:p-3.5 flex items-center sm:border-r border-[#FFFFFF1A]">
                  <h3 className="text-xs font-semibold text-white leading-snug">
                    {row.state}
                  </h3>
                </div>
                <div className="col-span-12 sm:col-span-8 p-3 sm:p-3.5 flex items-center">
                  <p className="text-[11px] sm:text-xs text-[#FFFFFF99] font-normal leading-relaxed">
                    {row.behavior}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Image (4 cols) */}
          <div className="lg:col-span-4 relative w-full h-full min-h-[300px] bg-[#1F2A3A]">
            <img
              src="/accounting-education/academic-integrity.png"
              alt="Two students discussing coursework policy"
              className="w-full h-full object-cover block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
