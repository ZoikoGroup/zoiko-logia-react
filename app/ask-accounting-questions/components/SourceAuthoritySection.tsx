"use client";

import React from "react";

interface SourceRow {
  label: string;
  detail: string;
}

const SOURCE_ROWS: SourceRow[] = [
  {
    label: "Source identity",
    detail:
      "Human-readable source title, publisher / owner and source type where permitted.",
  },
  {
    label: "Authority",
    detail:
      "Why the source is relevant or authoritative; no unapproved internal rankings.",
  },
  {
    label: "Version / effective date",
    detail:
      "Publication, effective, retrieved or last-reviewed dates as applicable.",
  },
  {
    label: "Applicability",
    detail:
      "Framework, jurisdiction, entity, period, task and policy scope where relevant.",
  },
  {
    label: "Status",
    detail:
      "Current, superseded, withdrawn, restricted, under review or unavailable.",
  },
  {
    label: "Conflict",
    detail:
      "Conflicting relevant sources surfaced; qualified decision route offered.",
  },
  {
    label: "Coverage gap",
    detail:
      "Stated when available sources do not support part of the answer.",
  },
  {
    label: "Locator integrity",
    detail:
      "Links to page, section, paragraph or approved locator where available; no decorative citation.",
  },
];

export default function SourceAuthoritySection() {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left: Header + Image */}
          <div className="flex flex-col items-start text-left">
            <span className="opacity-0 animate-fade-in-up delay-0 text-xs font-semibold tracking-wide text-[#C97D2A] uppercase leading-4 block">
              SOURCE AUTHORITY
            </span>

            <h2 className="opacity-0 animate-fade-in-up delay-100 mt-4 text-3xl sm:text-4xl font-serif font-bold leading-10 text-[#101828]">
              Source controls that govern every answer.
            </h2>

            <p className="opacity-0 animate-fade-in-up delay-200 mt-5 text-base font-normal text-[#667085] leading-7">
              A source badge in a Kriton™ answer must support an identifiable
              part of the response. Citations are not decorative. Status,
              effective date and applicability travel with every source
              reference.
            </p>

            <div className="opacity-0 animate-fade-in-up delay-300 mt-10 w-full">
              <img
                src="/ask-accounting-questions/source-authority.png"
                alt="Advisor reviewing source documentation on a tablet"
                className="w-full h-auto object-cover block"
              />
            </div>
          </div>

          {/* Right: Source Control Table */}
          <div className="opacity-0 animate-fade-in-up delay-200 w-full bg-white border border-[#DDD8CC] flex flex-col">
            {SOURCE_ROWS.map((row, index) => {
              const isEven = index % 2 === 0;
              const rowBg = isEven ? "bg-white" : "bg-[#F7F2E8]";

              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 sm:grid-cols-[190px_1fr] gap-1 sm:gap-4 px-5 py-4 border-b last:border-b-0 border-[#DDD8CC] ${rowBg}`}
                >
                  <h3 className="text-xs font-semibold text-[#101828] leading-4">
                    {row.label}
                  </h3>
                  <p className="text-xs font-normal text-[#44403C] leading-5">
                    {row.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
