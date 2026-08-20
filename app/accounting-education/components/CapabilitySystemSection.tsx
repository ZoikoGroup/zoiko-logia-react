"use client";

import React from "react";

interface CapabilityCard {
  title: string;
  details: string;
  boundary: string;
}

const LEFT_CARDS: CapabilityCard[] = [
  {
    title: "Learning & Practice Mode",
    details:
      "Guided explanations, worked examples, synthetic practice, hints, reflection and formative checks.",
    boundary: "Not a formal assessment or qualification decision.",
  },
  {
    title: "Review Mode",
    details:
      "Compare learner reasoning with sources, rubric criteria and expected steps for educator review.",
    boundary: "Educator retains grading, progression and disciplinary decisions.",
  },
];

const RIGHT_CARDS: CapabilityCard[] = [
  {
    title: "Workflow Mode",
    details:
      "Guide multi-step learning activities, research tasks, workpaper practice and review checkpoints.",
    boundary:
      "Does not authorize filings, client advice or real-world consequential action.",
  },
  {
    title: "Human Escalation",
    details:
      "Route ambiguity, accessibility need, assessment restriction and misconception to qualified educators.",
    boundary:
      "No guarantee of response time or advice availability without approved service terms.",
  },
];

function CapabilityCardBlock({ card }: { card: CapabilityCard }) {
  return (
    <div className="bg-[#1F2A3A] p-6 flex flex-col gap-3 h-full">
      <h3 className="text-xs font-semibold text-white leading-4">
        {card.title}
      </h3>
      <p className="flex-1 text-xs text-[#FFFFFF99] leading-5 font-normal">
        {card.details}
      </p>
      <div className="pt-3 border-t border-[#FFFFFF1A]">
        <p className="text-xs leading-4">
          <span className="text-[#C97D2A] font-semibold">Boundary: </span>
          <span className="text-[#FFFFFF4D] font-medium">{card.boundary}</span>
        </p>
      </div>
    </div>
  );
}

export default function CapabilitySystemSection() {
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
            CAPABILITY SYSTEM
          </span>
          <h2 className="opacity-0 animate-fade-in-up delay-100 text-3xl sm:text-4xl font-serif font-semibold leading-[1.18] text-white tracking-tight">
            Accounting education capability system.
          </h2>
          <p className="opacity-0 animate-fade-in-up max-w-130 delay-200 text-xs sm:text-sm text-[#FFFFFF99] leading-relaxed font-normal">
            Each capability layer operates within defined boundaries. Educators
            and learners can see what is supported, what requires human judgment
            and what is out of scope.
          </p>
        </div>

        {/* Layout: Left cards | Center image | Right cards */}
        <div className="opacity-0 animate-fade-in-up delay-300 grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr] gap-px bg-[#FFFFFF0D] items-stretch">
          {/* Left Column */}
          <div className="grid grid-cols-1 gap-px">
            {LEFT_CARDS.map((card, index) => (
              <CapabilityCardBlock key={index} card={card} />
            ))}
          </div>

          {/* Center Image */}
          <div className="relative w-full h-full min-h-[320px] bg-[#1F2A3A] order-first lg:order-none">
            <img
              src="/accounting-education/capability-system.png"
              alt="Educators reviewing learning analytics together"
              className="w-full h-full object-cover block"
            />
          </div>

          {/* Right Column */}
          <div className="grid grid-cols-1 gap-px">
            {RIGHT_CARDS.map((card, index) => (
              <CapabilityCardBlock key={index} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
