"use client";

import React from "react";

interface Signal {
  title: string;
  description: string;
  accent: string;
}

const LEFT_SIGNALS: Signal[] = [
  {
    title: "Source-backed workflow design",
    description: "Answers and drafts can show the sources and context used.",
    accent: "bg-[#155E75]",
  },
  {
    title: "Evidence continuity",
    description:
      "Sources, assumptions, versions, reviews and decisions can remain attributable.",
    accent: "bg-[#155E75]",
  },
];

const RIGHT_SIGNALS: Signal[] = [
  {
    title: "Review and escalation",
    description:
      "Qualified people remain responsible for consequential conclusions and actions.",
    accent: "bg-[#155E75]",
  },
  {
    title: "Professional boundaries",
    description:
      "The product stops, qualifies or escalates when professional judgment is required.",
    accent: "bg-[#FB923C]",
  },
];

function SignalCard({ signal }: { signal: Signal }) {
  return (
    <div className="bg-white px-6 py-6 flex flex-col h-full">
      <div className={`w-6 h-[3px] ${signal.accent}`} />
      <h3 className="pt-2 text-sm font-bold text-[#1F2A37]">{signal.title}</h3>
      <p className="pt-1.5 text-xs font-normal text-[#4B5563] leading-5">
        {signal.description}
      </p>
    </div>
  );
}

export default function ControlSignalsSection() {
  return (
    <section className="relative w-full bg-[#FFF7ED] py-12 px-6 sm:px-10 md:px-12 lg:px-16 font-sans antialiased overflow-hidden">
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
      `}</style>

      <div className="relative max-w-[1312px] mx-auto w-full z-10">
        <div className="opacity-0 animate-fade-in-up delay-0 grid grid-cols-1 lg:grid-cols-[1fr_436px_1fr] gap-px bg-[#FFF7ED] items-stretch">
          {/* Left Cards */}
          <div className="grid grid-cols-1 gap-px">
            {LEFT_SIGNALS.map((signal, index) => (
              <SignalCard key={index} signal={signal} />
            ))}
          </div>

          {/* Center Image */}
          <div className="relative w-full min-h-64 bg-white order-first lg:order-none overflow-hidden">
            <img
              src="/accounting-firms/control-signals.png"
              alt="Two firm professionals reviewing a client file together"
              className="w-full h-full object-cover block"
            />
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-1 gap-px">
            {RIGHT_SIGNALS.map((signal, index) => (
              <SignalCard key={index} signal={signal} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
