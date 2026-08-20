"use client";

import React from "react";

export default function ContextRichSection() {
  return (
    <section className="relative w-full bg-[#FFF7ED] py-20 sm:py-22 px-6 sm:px-10 md:px-12 lg:px-16 font-sans antialiased overflow-hidden">
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

      <div className="relative max-w-[1312px] mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[523px_1fr] gap-12 lg:gap-14 items-start">
          {/* Left Column: Text */}
          <div className="flex flex-col items-start text-left">
            <span className="opacity-0 animate-fade-in-up delay-0 text-xs font-bold tracking-wide text-[#FB923C] uppercase block">
              WHY GENERIC AI FALLS SHORT
            </span>

            <h2 className="opacity-0 animate-fade-in-up delay-100 mt-5 text-3xl font-serif font-semibold leading-10 text-[#1F2A37]">
              Accounting-firm work is context-rich.
            </h2>

            <p className="opacity-0 animate-fade-in-up delay-200 mt-6 text-base font-normal text-[#4B5563] leading-6">
              The same question can produce a different responsible next step
              when the client, entity, framework, jurisdiction, period,
              engagement, materiality, authorization or intended use changes. A
              page — or a platform — that ignores this invites confident,
              unsupported answers.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="opacity-0 animate-fade-in-up delay-300 w-full">
            <div className="relative w-full aspect-[733/384] bg-[#D6D3D1] rounded-xl border border-[#D6D3D1] overflow-hidden">
              <img
                src="/accounting-firms/context-rich.png"
                alt="Two accountants working through a client engagement"
                className="w-full h-full object-cover block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
