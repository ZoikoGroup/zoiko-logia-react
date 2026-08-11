"use client";

import React from "react";
import Image from "next/image";

export default function GovernedAiHeroSection() {
  return (
    <section className="relative w-full bg-[#0E1F33] text-white py-16 sm:py-20 md:py-24 px-6 sm:px-12 md:px-16 lg:px-24 font-sans antialiased overflow-hidden">
      {/* Embedded CSS Keyframes and Animation Classes */}
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

        /* Stagger Delays */
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
        .delay-500 {
          animation-delay: 500ms;
        }
        .delay-600 {
          animation-delay: 600ms;
        }
      `}</style>

      <div className="relative max-w-6xl mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text & Actions */}
          <div className="flex flex-col items-start text-left space-y-6">
            {/* Eyebrow Text */}
            <span className="opacity-0 animate-fade-in-up delay-100 text-[11px] font-semibold tracking-[1px] text-[#FFFFFF8C] uppercase block">
              GOVERNED AI ACCOUNTING INTELLIGENCE FOR MULTIDISCIPLINARY TEAMS
            </span>

            {/* Main Heading (50px / serif aesthetic matching design) */}
            <h1 className="opacity-0 animate-fade-in-up delay-200 text-3xl md:text-[50px] font-serif font-normal leading-[1.12] max-w-130 text-white tracking-tight">
              Bring accounting AI into enterprise control — from use-case intake
              to monitored release.
            </h1>

            {/* Subheading / Paragraph */}
            <p className="opacity-0 animate-fade-in-up delay-300 text-sm sm:text-base text-[#FFFFFFA6] leading-relaxed max-w-110">
              ZoikoLogia™ with Kriton™ helps multidisciplinary governance teams
              define context, control sources and providers, evaluate changes,
              require human decisions, preserve evidence and manage exceptions
              across accounting and finance workflows.
            </p>

            {/* Boundary Box Callout */}
            <div className="opacity-0 animate-fade-in-up delay-400 w-full max-w-xl bg-[#C97D2A12] border border-[#C97D2A80] rounded-lg p-4 sm:p-4.5 text-xs sm:text-sm leading-relaxed">
              <span className="text-[#C97D2A] font-medium">Boundary:</span>{" "}
              <span className="text-[#FFFFFFB2]">
                The platform supports governance teams; your organization
                retains policy, legal, professional and release decisions.
              </span>
            </div>

            {/* Action Buttons */}
            <div className="opacity-0 animate-fade-in-up delay-500 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#"
                className="bg-[#C97D2A] hover:bg-[#b06a20] text-white font-medium text-xs sm:text-sm px-6 py-3.5 rounded-[3px] transition-colors duration-200 shadow-sm text-center"
              >
                Book an AI Governance Briefing
              </a>
              <a
                href="#"
                className="bg-transparent hover:bg-[#1B2B45] text-white border border-[#2B3E5C] font-medium text-xs sm:text-sm px-6 py-3.5 rounded-[3px] transition-colors duration-200 text-center"
              >
                Request a Controlled Pilot
              </a>
            </div>
          </div>

          {/* Right Column: Hero Graphic / Image */}
          <div className="opacity-0 animate-fade-in-up delay-600 relative w-full aspect-square rounded-2xl overflow-hidden">
            <Image
              src="/governed-ai-accounting/hero.png"
              alt="Governed AI Dashboard Interface"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
