"use client";

import React from "react";

interface Row {
  label: string;
  detail: string;
}

const FOLLOW_UP_ROWS: Row[] = [
  {
    label: "Clarify a term",
    detail:
      "Answer within existing context and source scope; inherited context shown.",
  },
  {
    label: "Change framework / jurisdiction",
    detail:
      "Treated as a material context change; change summary generated, new answer version created.",
  },
  {
    label: "Compare alternative",
    detail:
      "Structured comparison using same material facts; no final choice without review requirement.",
  },
  {
    label: "Challenge a source",
    detail:
      "Source status, alternative evidence and issue-report route shown; challenge not suppressed.",
  },
  {
    label: "Ask for action",
    detail:
      "Routed to Workflow Mode or approved product control; no autonomous filing, payment or approval.",
  },
];

const EXPORT_ROWS: Row[] = [
  {
    label: "Save answer",
    detail:
      "Version, context, source scope, evidence, assumptions, limitations and review status preserved.",
  },
  {
    label: "Copy",
    detail:
      "Default: “Copy with context and limitations” for consequential content.",
  },
  {
    label: "Export",
    detail:
      "Title, timestamp, version, context, evidence, limitations and review status in approved formats.",
  },
  {
    label: "Create review package",
    detail:
      "Question, material context, answer, evidence, conflicts and requested decision bundled.",
  },
  {
    label: "Share internally",
    detail:
      "Authorized recipients, permission preview, expiry / access rules and attributable event.",
  },
];

export default function FollowUpContinuitySection() {
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
      `}</style>

      <div className="relative max-w-6xl mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start">
          {/* Left: Follow-Up & Continuity (dark card) */}
          <div className="opacity-0 animate-fade-in-up delay-0 bg-[#1A2332] border border-[#FFFFFF1A] p-7 sm:p-9 flex flex-col">
            <span className="text-xs font-semibold tracking-wide text-[#FFFFFF4D] uppercase leading-4 block">
              FOLLOW-UP &amp; CONTINUITY
            </span>

            <h2 className="pt-1.5 text-2xl font-serif font-bold text-white leading-8">
              Context persists. Material changes are visible.
            </h2>

            <p className="pt-2 text-sm font-normal text-[#FFFFFF66] leading-6">
              Follow-up questions inherit confirmed context and source scope.
              When a follow-up changes material context, a visible change summary
              appears and a new answer version is created — prior versions
              preserved.
            </p>

            <div className="pt-7 flex flex-col">
              {FOLLOW_UP_ROWS.map((row, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 sm:grid-cols-[170px_1fr] gap-1 sm:gap-4 py-3.5 border-t border-[#FFFFFF0D]"
                >
                  <h3 className="text-xs font-semibold text-white leading-4">
                    {row.label}
                  </h3>
                  <p className="text-xs font-normal text-[#FFFFFF66] leading-5">
                    {row.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Save, Copy & Export + Human Review */}
          <div className="opacity-0 animate-fade-in-up delay-100 flex flex-col">
            {/* Save, Copy & Export (white card) */}
            <div className="flex-1 bg-white border border-[#DDD8CC] p-7 sm:p-9 flex flex-col">
              <span className="text-xs font-semibold tracking-wide text-[#C97D2A] uppercase leading-4 block">
                SAVE, COPY &amp; EXPORT
              </span>

              <h2 className="pt-1.5 text-2xl font-serif font-bold text-[#101828] leading-8">
                Limitations travel with the answer.
              </h2>

              <p className="pt-2 text-sm font-normal text-[#667085] leading-6">
                Consequential content is never exported stripped of its context,
                evidence or professional-boundary statement.
              </p>

              <div className="pt-6 flex flex-col">
                {EXPORT_ROWS.map((row, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-1 sm:grid-cols-[170px_1fr] gap-1 sm:gap-4 py-3.5 border-t border-[#DDD8CC]"
                  >
                    <h3 className="text-xs font-semibold text-[#101828] leading-4">
                      {row.label}
                    </h3>
                    <p className="text-xs font-normal text-[#667085] leading-5">
                      {row.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Human Review & Escalation */}
            <div className="opacity-0 animate-fade-in-up delay-200 bg-[#F7F2E8] border-x border-b border-[#DDD8CC] p-7 sm:p-9 flex flex-col">
              <span className="text-xs font-semibold tracking-wide text-[#C97D2A] uppercase leading-4 block">
                HUMAN REVIEW &amp; ESCALATION
              </span>

              <h3 className="pt-2 text-lg font-serif font-bold text-[#101828] leading-7">
                A structured review packet routes to an authorized qualified
                reviewer — not a generic support queue.
              </h3>

              <a
                href="#"
                className="pt-4 text-xs font-semibold text-[#C97D2A] hover:text-[#b06a20] transition-colors duration-200"
              >
                View Human Escalation →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
