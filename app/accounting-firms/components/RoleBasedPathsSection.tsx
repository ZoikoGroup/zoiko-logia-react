"use client";

import React from "react";

interface RolePath {
  category: string;
  title: string;
  items: string[];
  linkText: string;
}

const ROLE_PATHS: RolePath[] = [
  {
    category: "PARTNERS & DIRECTORS",
    title: "Adopt AI without weakening professional accountability.",
    items: [
      "Governance posture",
      "Service-line controls",
      "Proof and pilot",
      "Executive oversight",
    ],
    linkText: "Request Enterprise Briefing",
  },
  {
    category: "MANAGERS & REVIEWERS",
    title: "Review the claim, evidence and change — not just the prose.",
    items: [
      "Review packets",
      "Exceptions",
      "Version comparison",
      "Escalation & decision record",
    ],
    linkText: "Explore Review Mode",
  },
  {
    category: "PREPARERS & ASSOCIATES",
    title: "Start with context, sources and a controlled work plan.",
    items: [
      "Guided questions",
      "Draft support",
      "Learning",
      "Workflow checkpoints",
    ],
    linkText: "Meet Kriton™",
  },
  {
    category: "QUALITY, RISK & INDEPENDENCE",
    title: "Make non-negotiable controls visible and enforceable.",
    items: [
      "Policies & permissions",
      "Boundaries",
      "Conflicts",
      "Ledger continuity",
    ],
    linkText: "View Governance Framework",
  },
  {
    category: "IT, SECURITY & PROCUREMENT",
    title: "Connect approved systems through governed scopes and evidence.",
    items: [
      "SSO & access",
      "Retention",
      "Integration modes",
      "Logs & due diligence",
    ],
    linkText: "Request Technical Briefing",
  },
];

export default function RoleBasedPathsSection() {
  return (
    <section className="relative w-full bg-white py-20 sm:py-24 px-6 sm:px-10 md:px-12 lg:px-16 font-sans antialiased overflow-hidden">
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

      <div className="relative max-w-[1312px] mx-auto w-full z-10">
        {/* Header */}
        <div className="text-left">
          <span className="opacity-0 animate-fade-in-up delay-0 text-xs font-bold tracking-wide text-[#155E75] uppercase block">
            ROLE-BASED PATHS
          </span>
          <h2 className="opacity-0 animate-fade-in-up delay-100 mt-4 text-3xl font-serif font-semibold leading-tight text-[#1F2A37]">
            Find the path that matches how your firm works.
          </h2>
        </div>

        {/* Cards */}
        <div className="opacity-0 animate-fade-in-up delay-200 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[26px]">
          {ROLE_PATHS.map((path, index) => (
            <div
              key={index}
              className="rounded-xl border border-[#D6D3D1] px-5 py-6 flex flex-col gap-3 text-left"
            >
              <span className="text-xs font-bold tracking-wide text-[#78716C] uppercase block">
                {path.category}
              </span>

              <h3 className="text-base font-semibold text-[#1F2A37] leading-5">
                {path.title}
              </h3>

              <ul className="flex-1 pl-4 flex flex-col">
                {path.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-xs font-normal text-[#4B5563] leading-5"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="pt-6 text-xs font-semibold text-[#155E75] hover:text-[#0e4453] transition-colors duration-200"
              >
                {path.linkText} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
