"use client";

import React from "react";

interface LifecycleStage {
  id: string;
  stage: string;
  control: string;
}

const STAGES: LifecycleStage[] = [
  {
    id: "01",
    stage: "Establish Context",
    control:
      "Select course, level, outcome, topic, framework, jurisdiction and intended use.",
  },
  {
    id: "02",
    stage: "Check Assessment Status",
    control:
      "Declare or infer open practice, formative, graded, exam, confidential or unknown.",
  },
  {
    id: "03",
    stage: "Assemble Sources",
    control:
      "Retrieve approved, rights-cleared, current source bundle with scope and gaps.",
  },
  {
    id: "04",
    stage: "Activate Prior Knowledge",
    control:
      "Prompt learner to recall prerequisite concepts or make an initial attempt.",
  },
  {
    id: "05",
    stage: "Explain Concept",
    control:
      "Provide layered explanation with examples, contrasts, glossary and sources.",
  },
  {
    id: "06",
    stage: "Practice Reasoning",
    control:
      "Use synthetic scenarios, step capture, hints and checks without answer-first behavior.",
  },
  {
    id: "07",
    stage: "Provide Feedback",
    control:
      "Tie feedback to reasoning, outcome and next action. Label automated/formative feedback.",
  },
  {
    id: "08",
    stage: "Reflect and Revise",
    control:
      "Ask learner to explain, compare or retry. Preserve attempts without punitive labeling.",
  },
  {
    id: "09",
    stage: "Educator Review",
    control:
      "Route unresolved misconception, restriction or professional-risk question to qualified educator.",
  },
  {
    id: "10",
    stage: "Preserve Evidence",
    control:
      "Store approved content, attempt, feedback and review events with privacy controls.",
  },
  {
    id: "11",
    stage: "Revalidate",
    control:
      "Recheck affected learning objects after source, policy or model change.",
  },
];

export default function LearningLifecycleSection() {
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
        {/* Header Section */}
        <div className="text-left space-y-3 mb-10">
          <span className="opacity-0 animate-fade-in-up delay-0 text-xs font-semibold tracking-[1.5px] text-[#C97D2A] uppercase block">
            GOVERNED LEARNING LIFECYCLE
          </span>
          <h2 className="opacity-0 animate-fade-in-up delay-100 text-3xl sm:text-4xl font-serif font-semibold leading-[1.18] text-[#101828] tracking-tight">
            Governance spanning operating lifecycle and decision artifacts.
          </h2>
          <p className="opacity-0 animate-fade-in-up max-w-130 delay-200 text-xs sm:text-sm text-[#667085] leading-relaxed font-normal">
            Every stage has a required control. Context and assessment status
            must be confirmed before explanation or practice begins.
          </p>
        </div>

        {/* Lifecycle Table */}
        <div className="opacity-0 animate-fade-in-up delay-300 w-full border border-[#E2DDD0] bg-white overflow-hidden shadow-sm">
          {/* Table Header */}
          <div className="hidden sm:grid grid-cols-12 bg-[#EDE8DC] border-b border-[#E2DDD0] text-left">
            <div className="col-span-1 p-2.5 sm:p-3 border-r border-[#E2DDD0]">
              {/* Empty header for step numbers */}
            </div>
            <div className="col-span-5 p-2.5 sm:p-3 border-r border-[#E2DDD0]">
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-[#667085] uppercase">
                STAGE
              </span>
            </div>
            <div className="col-span-6 p-2.5 sm:p-3">
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-[#667085] uppercase">
                REQUIRED CONTROL
              </span>
            </div>
          </div>

          {/* Table Rows */}
          {STAGES.map((item, index) => {
            const isEven = index % 2 === 0;
            const rowBg = isEven ? "bg-white" : "bg-[#F7F2E8]";

            return (
              <div
                key={item.id}
                className={`grid grid-cols-12 border-b last:border-b-0 border-[#E2DDD0] text-left ${rowBg}`}
              >
                {/* Step ID */}
                <div className="col-span-2 sm:col-span-1 p-2 sm:p-2.5 flex items-center justify-center border-r border-[#E2DDD0]">
                  <span className="text-[11px] font-bold text-[#C97D2A]">
                    {item.id}
                  </span>
                </div>

                {/* Stage Name */}
                <div className="col-span-10 sm:col-span-5 p-2 sm:p-2.5 flex items-center sm:border-r border-[#E2DDD0]">
                  <h3 className="text-xs font-serif font-semibold text-[#101828]">
                    {item.stage}
                  </h3>
                </div>

                {/* Required Control */}
                <div className="col-span-12 sm:col-span-6 p-2 sm:p-2.5 flex items-center border-t sm:border-t-0 border-[#E2DDD0]">
                  <p className="text-[11px] sm:text-xs text-[#667085] font-normal leading-tight">
                    {item.control}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
