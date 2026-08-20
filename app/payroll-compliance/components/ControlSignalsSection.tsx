"use client";

import React from "react";

interface Signal {
  title: string;
  description: string;
}

const LEFT_SIGNALS: Signal[] = [
  {
    title: "Source-backed obligations",
    description:
      "Sources carry jurisdiction, effective date, status and limitations.",
  },
  {
    title: "Segregation of duties",
    description:
      "Preparation, review, approval, transmission and reconciliation can be separated.",
  },
];

const RIGHT_SIGNALS: Signal[] = [
  {
    title: "Human authorization",
    description:
      "Named roles review, approve, reject, escalate and release consequential actions.",
  },
  {
    title: "Professional boundaries",
    description:
      "The platform supports work; it does not replace qualified judgment.",
  },
];

function SignalCard({ signal }: { signal: Signal }) {
  return (
    <div className="px-6 py-7 flex flex-col h-full">
      <h3 className="text-xs font-semibold text-white leading-4">
        {signal.title}
      </h3>
      <p className="pt-2 text-xs text-[#FFFFFF66] leading-5 font-normal">
        {signal.description}
      </p>
    </div>
  );
}

export default function ControlSignalsSection() {
  return (
    <section className="relative w-full bg-[#1A2332] text-white border-b border-[#FFFFFF0D] font-sans antialiased overflow-hidden">
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

      <div className="relative max-w-6xl mx-auto w-full z-10 px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="opacity-0 animate-fade-in-up delay-0 grid grid-cols-1 lg:grid-cols-[1fr_1.6fr_1fr] items-stretch">
          {/* Left Signals */}
          <div className="flex flex-col divide-y divide-[#FFFFFF0D] lg:border-r border-[#FFFFFF0D]">
            {LEFT_SIGNALS.map((signal, index) => (
              <SignalCard key={index} signal={signal} />
            ))}
          </div>

          {/* Center Image */}
          <div className="relative w-full min-h-60 bg-[#1F2A3A] order-first lg:order-none border-y lg:border-y-0 border-[#FFFFFF0D]">
            <img
              src="/PayrollCompliance/control-signals.png"
              alt="Two colleagues reviewing payroll records together"
              className="w-full h-full object-cover block"
            />
          </div>

          {/* Right Signals */}
          <div className="flex flex-col divide-y divide-[#FFFFFF0D] lg:border-l border-[#FFFFFF0D]">
            {RIGHT_SIGNALS.map((signal, index) => (
              <SignalCard key={index} signal={signal} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
