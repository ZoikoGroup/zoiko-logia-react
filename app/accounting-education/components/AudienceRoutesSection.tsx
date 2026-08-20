"use client";

import React from "react";

interface RouteCard {
  category: string;
  title: string;
  description: string;
  linkText: string;
  image?: string;
  imageAlt?: string;
}

const IMAGE_CARDS: RouteCard[] = [
  {
    category: "FACULTY & INSTRUCTORS",
    title:
      "Design source-linked explanations, practice and feedback while retaining academic control.",
    description:
      "Curriculum authority, teaching approach, assignment policy and academic decisions.",
    linkText: "Explore Educator Controls",
    image: "/accounting-education/route-faculty.png",
    imageAlt: "Faculty and instructors working in an educational environment",
  },
  {
    category: "LEARNERS",
    title:
      "Understand concepts, practice reasoning and see where qualified guidance is needed.",
    description:
      "Owns learning effort; must follow course, assessment and professional-boundary rules.",
    linkText: "Explore Learning Experience",
    image: "/accounting-education/route-learners.png",
    imageAlt: "Learners working in an educational environment",
  },
  {
    category: "LEARNING DESIGNERS",
    title:
      "Map outcomes, prerequisites, activities, accessibility and review states.",
    description:
      "Instructional design, sequencing, scaffolding and learning-quality controls.",
    linkText: "View Learning Architecture",
    image: "/accounting-education/route-learning-designers.png",
    imageAlt: "Learning designers working in an educational environment",
  },
  {
    category: "ACADEMIC INTEGRITY",
    title:
      "Apply assistance rules by assessment status and preserve fair, reviewable evidence.",
    description:
      "Assessment states, allowed help, escalation and evidence handling.",
    linkText: "View Integrity Controls",
    image: "/accounting-education/route-academic-integrity.png",
    imageAlt: "Academic integrity team working in an educational environment",
  },
];

const TEXT_CARDS: RouteCard[] = [
  {
    category: "PROGRAM LEADERS",
    title:
      "Govern curriculum alignment, content versions, faculty roles and evidence.",
    description: "",
    linkText: "Review Program Governance",
  },
  {
    category: "PROFESSIONAL TRAINING",
    title:
      "Support role-based accounting learning without implying license or qualification.",
    description: "",
    linkText: "Explore Training Use Cases",
  },
  {
    category: "ACCESSIBILITY TEAMS",
    title:
      "Inspect keyboard, screen-reader, reflow, caption and accommodation requirements.",
    description: "",
    linkText: "Review Accessibility",
  },
  {
    category: "IT & PROCUREMENT",
    title:
      "Assess identity, LMS, privacy, security, data rights, support and pilot evidence.",
    description: "",
    linkText: "Request Institutional Briefing",
  },
];

export default function AudienceRoutesSection() {
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
        .delay-300 {
          animation-delay: 300ms;
        }
        .delay-400 {
          animation-delay: 400ms;
        }
      `}</style>

      <div className="relative max-w-6xl mx-auto w-full z-10">
        {/* Header Section */}
        <div className="text-left space-y-3 mb-10">
          <span className="opacity-0 animate-fade-in-up delay-0 text-xs font-semibold tracking-[1.5px] text-[#C97D2A] uppercase block">
            AUDIENCE ROUTES
          </span>
          <h2 className="opacity-0 animate-fade-in-up delay-100 text-3xl sm:text-4xl font-serif font-semibold leading-[1.18] text-[#101828] tracking-tight">
            Find your governance path.
          </h2>
          <p className="opacity-0 animate-fade-in-up max-w-140 delay-200 text-xs sm:text-sm text-[#667085] leading-relaxed font-normal">
            Each discipline has distinct evidence requirements, decision rights
            and review obligations. Select your role to route to the right
            controls.
          </p>
        </div>

        {/* Row 1: Image Cards */}
        <div className="opacity-0 animate-fade-in-up delay-300 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#E2DDD0] divide-y sm:divide-y-0 divide-[#E2DDD0]">
          {IMAGE_CARDS.map((card, index) => (
            <div
              key={index}
              className="bg-[#F7F2E8] flex flex-col text-left border-[#E2DDD0] sm:border-r last:sm:border-r-0"
            >
              <div className="w-full h-48 bg-[#1A2332] overflow-hidden">
                <img
                  src={card.image}
                  alt={card.imageAlt}
                  className="w-full h-full object-cover block"
                />
              </div>
              <div className="flex-1 p-6 sm:p-7 flex flex-col gap-4">
                <span className="text-[10px] font-bold tracking-wider text-[#C97D2A] uppercase block">
                  {card.category}
                </span>
                <h3 className="text-base font-serif font-semibold text-[#101828] leading-snug">
                  {card.title}
                </h3>
                <p className="flex-1 text-xs text-[#667085] leading-relaxed font-normal">
                  {card.description}
                </p>
                <a
                  href="#"
                  className="text-xs font-semibold text-[#C97D2A] hover:text-[#b06a20] transition-colors duration-200 inline-flex items-center gap-1"
                >
                  {card.linkText} &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Text-only Cards */}
        <div className="opacity-0 animate-fade-in-up delay-400 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-x border-b border-[#E2DDD0] divide-y sm:divide-y-0 divide-[#E2DDD0]">
          {TEXT_CARDS.map((card, index) => (
            <div
              key={index}
              className="bg-[#F7F2E8] p-6 sm:p-7 flex flex-col gap-4 text-left border-[#E2DDD0] sm:border-r last:sm:border-r-0"
            >
              <span className="text-[10px] font-bold tracking-wider text-[#C97D2A] uppercase block">
                {card.category}
              </span>
              <h3 className="flex-1 text-base font-serif font-semibold text-[#101828] leading-snug">
                {card.title}
              </h3>
              <a
                href="#"
                className="text-xs font-semibold text-[#C97D2A] hover:text-[#b06a20] transition-colors duration-200 inline-flex items-center gap-1"
              >
                {card.linkText} &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
