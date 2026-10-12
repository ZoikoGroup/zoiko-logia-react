"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShieldCheck, FileText, Lock } from "lucide-react";

// ─── FAQ Accordion Data (1620:3378) ──────────────────────────────────────────
const FAQS = [
  {
    q: "What is Workflow Mode in Zoiko Logia?",
    a: "Workflow Mode is the governed execution environment in Zoiko Logia where defined work, scope, dependencies, responsible roles, and step sequences are organized and progressed before review.",
  },
  {
    q: "How is Workflow Mode different from Review Mode?",
    a: "Workflow Mode structures, progresses, and captures evidence for work while it is being done. Review Mode is a separate destination where completed work packages are independently inspected, verified, and approved or returned for change.",
  },
  {
    q: "Does Workflow Mode automate accounting work?",
    a: "No. Workflow Mode governs and traces human and system actions with explicit role responsibility. It does not replace professional judgment or execute automated unsupervised accounting entries.",
  },
  {
    q: "Does Workflow Mode use Kriton™ AI Advisor?",
    a: "Kriton™ AI Advisor can be accessed as an authoritative assistant where enabled, but human responsibility remains explicit. Kriton is never an autonomous approver or authority.",
  },
  {
    q: "Can Workflow Mode show source evidence?",
    a: "Yes. Every step and decision retains explicit links to source lineage, attached documents, and versioned records without synthetic values or hidden data.",
  },
  {
    q: "How are exceptions handled?",
    a: "Exceptions remain strictly visible throughout the sequence. They require explicit human resolution or escalation and are never silently auto-resolved.",
  },
  {
    q: "Can Workflow Mode integrate with our systems?",
    a: "Integration capabilities follow authoritative API boundaries, object models, and role permissions established during technical enterprise evaluation.",
  },
  {
    q: "How can I evaluate Workflow Mode?",
    a: "You can book a demo or request a pilot with our solutions team to evaluate how Workflow Mode aligns with your organization's specific governance and process controls.",
  },
];

// ─── Tab contracts data for Section 3 (1620:3112) ────────────────────────────
interface TabContract {
  title: string;
  items: string[];
  secondTitle: string;
  secondDesc: string;
}

const TAB_CONTRACTS: Record<string, TabContract> = {
  Define: {
    title: "Define work & context",
    items: [
      "Name, plain-language purpose and scope",
      "Responsible role only if a responsibility model is approved",
      "Inputs: available, missing, access required",
      "Constraints visible before progression",
      "“Not set / Needs definition” when incomplete",
    ],
    secondTitle: "Currentness",
    secondDesc:
      "Version and updated fields show only when supported. No cosmetic “last updated” stamps, no ROI guarantees.",
  },
  Sources: {
    title: "Source evidence & lineage",
    items: [
      "Authoritative system of record identifiers",
      "Immutable source timestamps and lineage records",
      "Direct document links and verifiable extracts",
      "Status indicators: Active, Superseded, Pending review",
      "No synthesized records or unverified values",
    ],
    secondTitle: "Source integrity",
    secondDesc:
      "Changes to source documents trigger visible lineage updates across dependent steps.",
  },
  Sequence: {
    title: "Ordered sequence & steps",
    items: [
      "Deterministic step ordering and prerequisites",
      "Explicit blocking states when dependencies are unmet",
      "DOM order matches visual execution sequence",
      "Role-bound execution responsibility per step",
      "Clear status flags: Not started, In progress, Complete",
    ],
    secondTitle: "Progression controls",
    secondDesc:
      "Steps cannot progress silently without prerequisite validation and captured evidence.",
  },
  Decisions: {
    title: "Decision checkpoints",
    items: [
      "Explicit human responsibility at every decision point",
      "Captured justification and evidentiary basis",
      "Dual-authorization requirements where governed",
      "Immutable decision timestamp and sign-off identity",
      "No system-assumed or default-accepted decisions",
    ],
    secondTitle: "Auditability",
    secondDesc:
      "Every decision records the exact version of all inputs visible at the moment of approval.",
  },
  Handoff: {
    title: "Review handoff contract",
    items: [
      "Readiness state validation against approved taxonomy",
      "Unresolved exceptions and blocking items summarized",
      "Package freeze preventing mid-review modifications",
      "Evidence bundle assembly for Review Mode inspection",
      "Explicit boundary: Review Mode controls remain separate",
    ],
    secondTitle: "Destination boundary",
    secondDesc:
      "Workflow Mode marks work ready; Review Mode owns inspection, findings, and disposition.",
  },
};

// ─── Specimen 3-Column Card Component (Matches 1620:2704 and 1620:2964) ─────
function SpecimenWorkflowCard({
  className = "w-full lg:w-[806px] max-w-[806px] min-h-[554px]",
  isHero = false,
}: {
  className?: string;
  isHero?: boolean;
}) {
  return (
    <div
      className={`rounded-[14px] border border-[#E4DFD3] bg-white text-[#10213F] shadow-xl overflow-hidden flex flex-col justify-between ${className}`}
    >
      {/* 1. Card Top Header (1620:2705 for Hero / 1620:2965 for Section 2) */}
      <div className="border-b border-[#E4DFD3] bg-[#FAF7F0] px-4 py-3 sm:px-5">
        {isHero ? (
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="font-bold text-[14px] text-[#10213F] whitespace-nowrap">Workflow 01</span>
                <span className="rounded-[6px] bg-[#10213F] px-2 py-0.5 text-[10px] font-semibold tracking-wider text-white whitespace-nowrap">
                  WORKFLOW MODE
                </span>
              </div>
              <span className="rounded-[6px] border border-[#D9D3C4] bg-white px-2 py-0.5 text-[11.5px] font-semibold text-[#10213F] whitespace-nowrap">
                Responsible: workflow owner class
              </span>
            </div>
            <div className="mt-2.5 flex items-center">
              <span className="rounded-[6px] border border-[#D9D3C4] bg-white px-2 py-0.5 text-[11.5px] font-semibold text-[#10213F] whitespace-nowrap">
                State: In progress · Current
              </span>
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2.5">
              <span className="font-bold text-[14px] text-[#10213F] whitespace-nowrap">Workflow 01</span>
              <span className="rounded-[6px] bg-[#10213F] px-2 py-0.5 text-[10px] font-semibold tracking-wider text-white whitespace-nowrap">
                WORKFLOW MODE
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-[6px] border border-[#D9D3C4] bg-white px-2 py-0.5 text-[11.5px] font-semibold text-[#10213F] whitespace-nowrap">
                Responsible: workflow owner class
              </span>
              <span className="rounded-[6px] border border-[#D9D3C4] bg-white px-2 py-0.5 text-[11.5px] font-semibold text-[#10213F] whitespace-nowrap">
                State: In progress · Current
              </span>
            </div>
          </div>
        )}
      </div>

      {/* 2. Card Body: 3-Column Layout */}
      <div className="flex flex-col sm:flex-row flex-1">
        {/* Column 1: Left Navigation Rail (width 118px) */}
        <div className="w-full sm:w-[118px] shrink-0 border-b sm:border-b-0 sm:border-r border-[#E4DFD3] bg-[#FCFAF5] p-2 flex sm:flex-col gap-1 text-[11.5px]">
          <span className="rounded-[6px] px-2.5 py-1.5 text-[#5B6678]">Definition</span>
          <span className="rounded-[6px] bg-[#10213F] px-2.5 py-1.5 font-medium text-white">
            Steps
          </span>
          <span className="rounded-[6px] px-2.5 py-1.5 text-[#5B6678]">Sources</span>
          <span className="rounded-[6px] px-2.5 py-1.5 text-[#5B6678]">Decisions</span>
          <span className="rounded-[6px] px-2.5 py-1.5 text-[#5B6678]">Exceptions</span>
          <span className="rounded-[6px] px-2.5 py-1.5 text-[#5B6678]">History</span>
          <span className="rounded-[6px] px-2.5 py-1.5 text-[#5B6678]">Handoff</span>
        </div>

        {/* Column 2: Center Steps Canvas */}
        <div
          className={`p-3.5 flex flex-col justify-between shrink-0 ${
            isHero ? "flex-1" : "w-full sm:w-[526px] h-auto sm:h-[463px]"
          }`}
        >
          {/* Step 1 */}
          <div className="flex items-center justify-between rounded-[8px] border border-[#E4DFD3] bg-white px-2.5 py-2">
            <div className="flex items-center gap-2">
              <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#10213F] text-[10px] font-mono font-bold text-white shrink-0">
                1
              </span>
              <div>
                <div className="text-[12.5px] font-bold text-[#10213F] whitespace-nowrap">Define scope</div>
                <div className="text-[10.5px] text-[#5B6678] whitespace-nowrap">Workflow owner class</div>
              </div>
            </div>
            <span className="rounded-[6px] border border-[#D9D3C4] bg-white px-2 py-0.5 text-[10.5px] font-semibold text-[#10213F] whitespace-nowrap">
              Complete
            </span>
          </div>

          {/* Dashed connector */}
          <div className="pl-[20px] h-2">
            <div className="h-full border-l-2 border-dashed border-[#E8912D]" />
          </div>

          {/* Step 2 */}
          <div className="flex items-center justify-between rounded-[8px] border border-[#E4DFD3] bg-white px-2.5 py-2">
            <div className="flex items-center gap-2">
              <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#10213F] text-[10px] font-mono font-bold text-white shrink-0">
                2
              </span>
              <div>
                <div className="text-[12.5px] font-bold text-[#10213F] whitespace-nowrap">Gather inputs</div>
                <div className="text-[10.5px] text-[#5B6678] whitespace-nowrap">After step 1</div>
              </div>
            </div>
            <span className="rounded-[6px] border border-[#D9D3C4] bg-[#E9EDF5] px-2 py-0.5 text-[10.5px] font-semibold text-[#10213F] whitespace-nowrap">
              In progress
            </span>
          </div>

          {/* Dashed connector */}
          <div className="pl-[20px] h-2">
            <div className="h-full border-l-2 border-dashed border-[#E8912D]" />
          </div>

          {/* Step 3 - Decision needed 1 line only */}
          <div className="flex items-center justify-between rounded-[8px] border border-[#E4DFD3] bg-white px-2.5 py-2">
            <div className="flex items-center gap-2">
              <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#10213F] text-[10px] font-mono font-bold text-white shrink-0">
                3
              </span>
              <div>
                <div className="text-[12px] font-bold text-[#10213F] whitespace-nowrap">
                  ◆ Decision needed
                </div>
                <div className="text-[10.5px] text-[#5B6678] whitespace-nowrap">
                  Sources A, B
                </div>
              </div>
            </div>
            <span className="rounded-[6px] border border-[#E8B778] bg-[#FFF6E8] px-2 py-0.5 text-[10.5px] font-semibold text-[#8A4F0B] whitespace-nowrap">
              Needs decision
            </span>
          </div>

          {/* Dashed connector */}
          <div className="pl-[20px] h-2">
            <div className="h-full border-l-2 border-dashed border-[#E8912D]" />
          </div>

          {/* Step 4 */}
          <div className="flex items-center justify-between rounded-[8px] border border-[#E4DFD3] bg-white px-2.5 py-2">
            <div className="flex items-center gap-2">
              <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#10213F] text-[10px] font-mono font-bold text-white shrink-0">
                4
              </span>
              <div>
                <div className="text-[12.5px] font-bold text-[#10213F] whitespace-nowrap">Resolve exception</div>
                <div className="text-[10.5px] text-[#5B6678] whitespace-nowrap">Exception 01</div>
              </div>
            </div>
            <span className="rounded-[6px] border border-[#F3B8B8] bg-[#FDEAEA] px-2 py-0.5 text-[10.5px] font-semibold text-[#C53030] whitespace-nowrap">
              ▲ Unresolved
            </span>
          </div>

          {/* Dashed connector */}
          <div className="pl-[20px] h-2">
            <div className="h-full border-l-2 border-dashed border-[#E8912D]" />
          </div>

          {/* Step 5 */}
          <div className="flex items-center justify-between rounded-[8px] border border-[#E4DFD3] bg-white px-2.5 py-2">
            <div className="flex items-center gap-2">
              <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#10213F] text-[10px] font-mono font-bold text-white shrink-0">
                5
              </span>
              <div>
                <div className="text-[12.5px] font-bold text-[#10213F] whitespace-nowrap">Prepare for handoff</div>
                <div className="text-[10.5px] text-[#5B6678] whitespace-nowrap">After steps 3, 4</div>
              </div>
            </div>
            <span className="rounded-[6px] border border-[#D9D3C4] bg-[#E9EDF5] px-2 py-0.5 text-[10.5px] font-semibold text-[#10213F] whitespace-nowrap">
              Not started
            </span>
          </div>

          {/* Dashed connector */}
          <div className="pl-[20px] h-2">
            <div className="h-full border-l-2 border-dashed border-[#E8912D]" />
          </div>

          {/* Handoff marker */}
          <div className="rounded-[8px] border border-dashed border-[#E8912D] bg-[#FFF6E8] p-2 text-[11px] font-medium text-[#8A4F0B]">
            → Handoff marker: Review Mode (separate destination)
          </div>
        </div>

        {/* Column 3: Right Context Drawer (width 160px) */}
        <div className="w-full sm:w-[160px] shrink-0 border-t sm:border-t-0 sm:border-l border-[#E4DFD3] bg-[#FCFAF5] p-3 flex flex-col justify-start">
          <div className="space-y-2 text-[11px]">
            <div className="font-bold text-[12px] text-[#10213F]">Step 3 · Context</div>
            <p className="text-[#5B6678] leading-tight">
              Purpose: decision requirement (specimen)
            </p>
            <p className="text-[#5B6678]">Depends on: step 2</p>
            <p className="text-[#5B6678] leading-tight">
              Evidence: Source A (current), Source B (current)
            </p>
          </div>

          {/* Next action dashed card positioned directly under context */}
          <div className="mt-4 rounded-[8px] border border-dashed border-[#E4DFD3] bg-white p-2.5 text-[11px] text-[#5B6678]">
            <div className="text-[#5B6678]">Next action</div>
            <div className="mt-0.5 leading-tight text-[#5B6678]">
              Label comes from real<br />product state
            </div>
          </div>
        </div>
      </div>

      {/* 3. Card Bottom Footer (1620:2808 / 1620:3063) */}
      <div className="border-t border-[#E4DFD3] bg-[#FAF7F0] px-4 py-2.5 flex flex-wrap items-center justify-between gap-2">
        <div className="text-[11.5px] text-[#5B6678]">
          States: 1 complete · 1 in progress · 1 needs decision · 1 unresolved · 1 not started
        </div>
        <div className="text-[10px] font-semibold uppercase tracking-wider text-[#B8661A]">
          SPECIMEN DATA
        </div>
      </div>
    </div>
  );
}

export default function WorkflowModePage() {
  const [activeLayer, setActiveLayer] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<string>("Define");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen w-full bg-[#FAF7F0] text-[#10213F] antialiased">
      {/* ─── SECTION 0: HERO (1620:2683) ────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden bg-[#0B1A33] text-white py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-12 md:px-16 lg:px-[140px]">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left Column: Heading, Subtitle, Actions */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#B8661A]">
                WORKFLOW MODE
              </span>
              <h1
                className="mt-3 text-[57.6px] font-semibold leading-[66.24px] tracking-[-0.01em] text-[#E9EDF5]"
                style={{
                  fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
                }}
              >
                <span className="block whitespace-nowrap">Turn defined work</span>
                <span className="block whitespace-nowrap">into a governed</span>
                <span className="block whitespace-nowrap">sequence.</span>
              </h1>

              <p className="mt-5 text-[16px] sm:text-[17px] leading-[1.6] text-[#9FAAC0]">
                Organize scope, context, steps, decisions, evidence,
                <br />
                exceptions, and handoffs in a mode designed to keep
                <br />
                work traceable from start to review.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#workflow-model"
                  className="inline-flex h-[50px] items-center justify-center rounded-full bg-[#E8912D] px-7 text-[15px] font-semibold text-[#10213F] transition-all hover:bg-[#d47d1b]"
                >
                  Explore the workflow model
                </a>
                <Link
                  href="/book-a-demo"
                  className="inline-flex h-[50px] items-center justify-center rounded-full border border-[#E8912D] bg-transparent px-7 text-[15px] font-semibold text-white transition-all hover:bg-[#E8912D]/10"
                >
                  Book a Demo
                </Link>
              </div>

              {/* Subtext with link to Review Mode */}
              <p className="mt-7 text-[14px] leading-[22.4px] text-[#9FAAC0]">
                Ready for inspection?{" "}
                <Link
                  href="/review-mode"
                  className="font-semibold text-[#E8912D] underline underline-offset-2 hover:text-[#d47d1b]"
                >
                  Review Mode
                </Link>{" "}
                is a separate destination.
              </p>
            </div>

            {/* Right Column: Specimen Workflow Card (1620:2704 - exact 569px by 686px) */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <SpecimenWorkflowCard isHero className="w-full lg:w-[569px] max-w-[569px] h-[686px]" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 1: THE WORKFLOW MODEL (1620:2816) ───────────────────────── */}
      <section id="workflow-model" className="w-full bg-[#FAF7F0] border-b border-[#E4DFD3] py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-12 md:px-16 lg:px-[140px]">
          {/* Specimen Banner: Ordered steps visualization (1620:2817) */}
          <div className="relative h-[150px] w-full rounded-[14px] border border-[#E4DFD3] bg-gradient-to-r from-[#0B1A33] via-[#14284A] to-[#1B3563] shadow-sm overflow-hidden flex flex-col justify-between">
            <svg viewBox="0 0 1110 148" className="w-full h-full" preserveAspectRatio="none">
              {/* Alternating Connecting Lines */}
              <line x1="100" y1="52" x2="255" y2="76" stroke="rgba(255,255,255,0.28)" strokeWidth="1.55" />
              <line x1="255" y1="76" x2="410" y2="52" stroke="rgba(255,255,255,0.28)" strokeWidth="1.55" />
              <line x1="410" y1="52" x2="566" y2="76" stroke="rgba(255,255,255,0.28)" strokeWidth="1.55" strokeDasharray="4.4 4.4" />
              <line x1="566" y1="76" x2="721" y2="52" stroke="rgba(255,255,255,0.28)" strokeWidth="1.55" />
              <line x1="721" y1="52" x2="877" y2="76" stroke="rgba(255,255,255,0.28)" strokeWidth="1.55" />
              <line x1="877" y1="76" x2="1032" y2="52" stroke="rgba(255,255,255,0.28)" strokeWidth="1.55" />

              {/* Bottom Orange Curve */}
              <path d="M 0 135 C 300 110, 600 95, 1110 120" stroke="rgba(232, 145, 45, 0.7)" strokeWidth="2.22" fill="none" />

              {/* 7 Circles */}
              {[
                { num: 1, cx: 100, cy: 52 },
                { num: 2, cx: 255, cy: 76 },
                { num: 3, cx: 410, cy: 52 },
                { num: 4, cx: 566, cy: 76 },
                { num: 5, cx: 721, cy: 52 },
                { num: 6, cx: 877, cy: 76 },
                { num: 7, cx: 1032, cy: 52 },
              ].map((pt) => (
                <g key={pt.num}>
                  <circle cx={pt.cx} cy={pt.cy} r="22" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.28)" strokeWidth="1.55" />
                  <text x={pt.cx} y={pt.cy + 5} fill="white" fontSize="15" fontWeight="400" fontFamily="Inter, sans-serif" textAnchor="middle">
                    {pt.num}
                  </text>
                </g>
              ))}
            </svg>
            <div className="absolute bottom-3 left-5 text-[12px] font-mono tracking-wider text-[#9FAAC0]">
              SPECIMEN · ORDERED SEQUENCE
            </div>
          </div>

          {/* Section Header */}
          <div className="mt-12 max-w-[780px]">
            <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#B8661A]">
              THE WORKFLOW MODEL
            </span>
            <h2
              className="mt-2 text-[36px] font-semibold leading-[1.18] text-[#10213F] sm:text-[40px] font-['Playfair_Display']"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Three layers, one governed sequence.
            </h2>
            <p className="mt-3 text-[16px] sm:text-[17px] leading-relaxed text-[#5B6678]">
              Select a layer to see which part of the workspace proves it.
            </p>
          </div>

          {/* 3 Interactive Layer Cards */}
          <div className="mt-10 grid grid-cols-1 gap-[18px] md:grid-cols-3">
            {/* Layer 1 Card */}
            <button
              onClick={() => setActiveLayer(1)}
              className={`flex flex-col justify-between rounded-[12px] bg-white p-[22px] text-left transition-all ${
                activeLayer === 1
                  ? "border-2 border-[#E8912D] shadow-[0px_0px_0px_2px_rgba(232,145,45,0.35)]"
                  : "border border-[#E4DFD3] shadow-sm hover:border-[#10213F]"
              }`}
            >
              <div>
                {/* Top Illustration (1620:2865) */}
                <div className="w-full flex items-center justify-center py-4 bg-[#FCFAF5] rounded-[8px] border border-[#E4DFD3]/60 mb-4">
                  <svg width="240" height="85" viewBox="0 0 240 85" fill="none">
                    <rect x="15" y="8" width="70" height="68" rx="8" fill="white" stroke="#E8912D" strokeWidth="1.5" strokeDasharray="4 3" />
                    <line x1="28" y1="24" x2="72" y2="24" stroke="#E4DFD3" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="28" y1="36" x2="62" y2="36" stroke="#E4DFD3" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="28" y1="48" x2="72" y2="48" stroke="#E4DFD3" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="28" y1="60" x2="52" y2="60" stroke="#E4DFD3" strokeWidth="2.5" strokeLinecap="round" />

                    <line x1="85" y1="42" x2="115" y2="42" stroke="#E4DFD3" strokeWidth="1.5" />

                    <rect x="115" y="12" width="45" height="58" rx="6" fill="white" stroke="#10213F" strokeWidth="1.5" />
                    <line x1="125" y1="25" x2="150" y2="25" stroke="#E4DFD3" strokeWidth="2" strokeLinecap="round" />
                    <line x1="125" y1="35" x2="145" y2="35" stroke="#E4DFD3" strokeWidth="2" strokeLinecap="round" />
                    <line x1="125" y1="45" x2="150" y2="45" stroke="#E4DFD3" strokeWidth="2" strokeLinecap="round" />
                    <line x1="125" y1="55" x2="142" y2="55" stroke="#E4DFD3" strokeWidth="2" strokeLinecap="round" />

                    <rect x="170" y="12" width="45" height="58" rx="6" fill="white" stroke="#10213F" strokeWidth="1.5" />
                    <line x1="180" y1="25" x2="205" y2="25" stroke="#E4DFD3" strokeWidth="2" strokeLinecap="round" />
                    <line x1="180" y1="35" x2="200" y2="35" stroke="#E4DFD3" strokeWidth="2" strokeLinecap="round" />
                    <line x1="180" y1="45" x2="205" y2="45" stroke="#E4DFD3" strokeWidth="2" strokeLinecap="round" />
                    <line x1="180" y1="55" x2="197" y2="55" stroke="#E4DFD3" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>

                <span className="text-[12px] font-bold uppercase tracking-wider text-[#B8661A]">
                  LAYER 1
                </span>
                <h3
                  className="mt-2 text-[20px] font-semibold text-[#10213F] font-['Playfair_Display']"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Define the work
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[#5B6678]">
                  Purpose, scope, context, responsibility,
                  <br />
                  inputs and constraints.
                </p>
              </div>
              <div className="mt-6 border-t border-[#E4DFD3] pt-3 text-[13px] font-medium text-[#10213F]">
                Proof UI: definition rail · context summary
              </div>
            </button>

            {/* Layer 2 Card */}
            <button
              onClick={() => setActiveLayer(2)}
              className={`flex flex-col justify-between rounded-[12px] bg-white p-[22px] text-left transition-all ${
                activeLayer === 2
                  ? "border-2 border-[#E8912D] shadow-[0px_0px_0px_2px_rgba(232,145,45,0.35)]"
                  : "border border-[#E4DFD3] shadow-sm hover:border-[#10213F]"
              }`}
            >
              <div>
                {/* Top Illustration (1620:2896) */}
                <div className="w-full flex items-center justify-center py-4 bg-[#FCFAF5] rounded-[8px] border border-[#E4DFD3]/60 mb-4">
                  <svg width="260" height="85" viewBox="0 0 260 85" fill="none">
                    <line x1="33" y1="36" x2="67" y2="36" stroke="#10213F" strokeWidth="1.5" />
                    <line x1="93" y1="36" x2="127" y2="36" stroke="#10213F" strokeWidth="1.5" />
                    <line x1="153" y1="36" x2="187" y2="36" stroke="#10213F" strokeWidth="1.5" />
                    <line x1="213" y1="36" x2="247" y2="36" stroke="#10213F" strokeWidth="1.5" />

                    <circle cx="20" cy="36" r="13" fill="white" stroke="#10213F" strokeWidth="1.8" />
                    <text x="20" y="40" fill="#10213F" fontSize="11" fontWeight="700" fontFamily="monospace" textAnchor="middle">1</text>

                    <circle cx="80" cy="36" r="13" fill="white" stroke="#10213F" strokeWidth="1.8" />
                    <text x="80" y="40" fill="#10213F" fontSize="11" fontWeight="700" fontFamily="monospace" textAnchor="middle">2</text>

                    <circle cx="140" cy="36" r="13" fill="white" stroke="#E8912D" strokeWidth="2" />
                    <text x="140" y="40" fill="#10213F" fontSize="11" fontWeight="700" fontFamily="monospace" textAnchor="middle">3</text>

                    <circle cx="200" cy="36" r="13" fill="white" stroke="#10213F" strokeWidth="1.8" />
                    <text x="200" y="40" fill="#10213F" fontSize="11" fontWeight="700" fontFamily="monospace" textAnchor="middle">4</text>

                    <circle cx="250" cy="36" r="13" fill="white" stroke="#10213F" strokeWidth="1.8" />
                    <text x="250" y="40" fill="#10213F" fontSize="11" fontWeight="700" fontFamily="monospace" textAnchor="middle">5</text>

                    <path d="M 140 49 L 140 68 L 185 68" stroke="#E8912D" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
                    <text x="192" y="72" fill="#B8661A" fontSize="10.5" fontWeight="600" fontFamily="Inter, sans-serif">unresolved</text>
                  </svg>
                </div>

                <span className="text-[12px] font-bold uppercase tracking-wider text-[#B8661A]">
                  LAYER 2
                </span>
                <h3
                  className="mt-2 text-[20px] font-semibold text-[#10213F] font-['Playfair_Display']"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Progress the sequence
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[#5B6678]">
                  Ordered steps, dependencies, decisions,
                  <br />
                  exceptions and current state.
                </p>
              </div>
              <div className="mt-6 border-t border-[#E4DFD3] pt-3 text-[13px] font-medium text-[#10213F]">
                Proof UI: workflow canvas · step detail
              </div>
            </button>

            {/* Layer 3 Card */}
            <button
              onClick={() => setActiveLayer(3)}
              className={`flex flex-col justify-between rounded-[12px] bg-white p-[22px] text-left transition-all ${
                activeLayer === 3
                  ? "border-2 border-[#E8912D] shadow-[0px_0px_0px_2px_rgba(232,145,45,0.35)]"
                  : "border border-[#E4DFD3] shadow-sm hover:border-[#10213F]"
              }`}
            >
              <div>
                {/* Top Illustration (1620:2927) */}
                <div className="w-full flex items-center justify-center py-4 bg-[#FCFAF5] rounded-[8px] border border-[#E4DFD3]/60 mb-4">
                  <svg width="260" height="85" viewBox="0 0 260 85" fill="none">
                    <rect x="15" y="10" width="55" height="68" rx="6" fill="white" stroke="#10213F" strokeWidth="1.5" />
                    <line x1="25" y1="24" x2="58" y2="24" stroke="#E4DFD3" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="25" y1="36" x2="50" y2="36" stroke="#E4DFD3" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="25" y1="48" x2="58" y2="48" stroke="#E4DFD3" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="25" y1="60" x2="50" y2="60" stroke="#E4DFD3" strokeWidth="2.5" strokeLinecap="round" />

                    <rect x="85" y="16" width="55" height="62" rx="6" fill="white" stroke="#10213F" strokeWidth="1.5" />
                    <line x1="95" y1="30" x2="128" y2="30" stroke="#E4DFD3" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="95" y1="42" x2="120" y2="42" stroke="#E4DFD3" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="95" y1="54" x2="128" y2="54" stroke="#E4DFD3" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="95" y1="66" x2="120" y2="66" stroke="#E4DFD3" strokeWidth="2.5" strokeLinecap="round" />

                    <line x1="150" y1="47" x2="185" y2="47" stroke="#E8912D" strokeWidth="1.8" />
                    <polyline points="180,42 186,47 180,52" fill="none" stroke="#E8912D" strokeWidth="1.8" />

                    <rect x="195" y="33" width="56" height="28" rx="6" fill="white" stroke="#E8912D" strokeWidth="1.5" strokeDasharray="3 3" />
                    <text x="223" y="51" fill="#B8661A" fontSize="10.5" fontWeight="700" fontFamily="Inter, sans-serif" letterSpacing="0.05em" textAnchor="middle">
                      REVIEW
                    </text>
                  </svg>
                </div>

                <span className="text-[12px] font-bold uppercase tracking-wider text-[#B8661A]">
                  LAYER 3
                </span>
                <h3
                  className="mt-2 text-[20px] font-semibold text-[#10213F] font-['Playfair_Display']"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Preserve evidence &amp; hand off
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[#5B6678]">
                  Source lineage, changes, unresolved state,
                  <br />
                  output readiness and the Review Mode
                  <br />
                  boundary.
                </p>
              </div>
              <div className="mt-6 border-t border-[#E4DFD3] pt-3 text-[13px] font-medium text-[#10213F]">
                Proof UI: evidence timeline · handoff panel
              </div>
            </button>
          </div>

          {/* Interactive Callout Indicator (1620:2952) */}
          <div className="mt-8 flex w-full items-center rounded-r-[10px] border-l-[3px] border-[#E8912D] bg-white px-[18px] py-[13.5px] shadow-sm">
            <p className="text-[14.5px] leading-[23.2px]">
              {activeLayer === 1 && (
                <>
                  <span className="font-bold text-[#10213F]">Layer 1 in the workspace below:</span>{" "}
                  <span className="text-[#5B6678]">bounded work and current state (A, D).</span>
                </>
              )}
              {activeLayer === 2 && (
                <>
                  <span className="font-bold text-[#10213F]">Layer 2 in the workspace below:</span>{" "}
                  <span className="text-[#5B6678]">
                    ordered steps, dependencies, decisions and exceptions (B, E).
                  </span>
                </>
              )}
              {activeLayer === 3 && (
                <>
                  <span className="font-bold text-[#10213F]">Layer 3 in the workspace below:</span>{" "}
                  <span className="text-[#5B6678]">
                    source context and the review mode handoff boundary (C, F).
                  </span>
                </>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: ANNOTATED WORKFLOW WORKSPACE (1620:2954) ──────────────── */}
      <section className="w-full bg-[#F3EEE2] border-b border-[#E4DFD3] py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-12 md:px-16 lg:px-[140px]">
          <div className="max-w-[780px]">
            <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#B8661A]">
              Annotated workflow workspace
            </span>
            <h2
              className="mt-2 text-[36px] font-semibold leading-[1.18] text-[#10213F] sm:text-[40px]"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Structured before fast.
            </h2>
            <p className="mt-3 text-[16px] sm:text-[17px] leading-relaxed text-[#5B6678]">
              A credible application surface, with annotations outside the frame. No promotional copy
              <br />
              inside the product.
            </p>
          </div>

          <div className="mt-10 flex flex-col lg:flex-row items-start gap-[26px]">
            {/* Left: Specimen Application Surface (1620:2964 - exact 806px width) */}
            <div className="w-full lg:w-[806px] shrink-0">
              <SpecimenWorkflowCard />
            </div>

            {/* Right: Annotations A to F with Orange Badges (1620:3068 - exact 280px width) */}
            <div className="w-full lg:w-[280px] shrink-0 space-y-3">
              {[
                {
                  badge: "A",
                  title: "Bounded work",
                  desc: "Visible purpose, scope and current\nstate.",
                },
                {
                  badge: "B",
                  title: "Ordered sequence",
                  desc: "Numbered steps and dependencies;\nDOM order matches visual order.",
                },
                {
                  badge: "C",
                  title: "Source context",
                  desc: "Sources and evidence in view. No\nfake records or values.",
                },
                {
                  badge: "D",
                  title: "Human responsibility",
                  desc: "A responsible role at each decision.\nNo system authority implied.",
                },
                {
                  badge: "E",
                  title: "Exception visibility",
                  desc: "Unresolved items stay visible. No\nsilent auto-resolution.",
                },
                {
                  badge: "F",
                  title: "Review boundary",
                  desc: "A handoff marker only. No Review\nMode controls here.",
                },
              ].map((ann) => (
                <div key={ann.badge} className="flex items-start gap-3.5">
                  <span
                    className="flex h-[26px] w-[26px] flex-shrink-0 items-center justify-center rounded-full bg-[#E8912D] text-[12px] font-bold text-[#10213F] shadow-sm"
                    style={{ fontFamily: "var(--font-mono), monospace" }}
                  >
                    {ann.badge}
                  </span>
                  <div>
                    <h4 className="text-[14px] font-bold text-[#10213F]">{ann.title}</h4>
                    <p className="mt-0.5 text-[13px] leading-relaxed text-[#5B6678] whitespace-pre-line">
                      {ann.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: INSIDE A WORKFLOW (1620:3112) ────────────────────────── */}
      <section className="w-full bg-[#FAF7F0] border-b border-[#E4DFD3] py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-12 md:px-16 lg:px-[140px]">
          <div className="max-w-[780px]">
            <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#B8661A]">
              Inside a workflow
            </span>
            <h2
              className="mt-2 text-[36px] font-semibold leading-[1.18] text-[#10213F] sm:text-[40px] font-['Playfair_Display']"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Context, sequence and exceptions.
            </h2>
            <p className="mt-3 text-[16px] sm:text-[17px] leading-relaxed text-[#5B6678]">
              UI contracts for each area. Behaviors render only when the product confirms them.
            </p>
          </div>

          {/* Interactive Navigation Tabs (1620:3120) */}
          <div className="mt-8 flex flex-wrap gap-2.5">
            {Object.keys(TAB_CONTRACTS).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-5 py-2 text-[13px] font-medium transition-all ${
                  activeTab === tab
                    ? "bg-[#10213F] text-white shadow-sm"
                    : "border border-[#E4DFD3] bg-white text-[#10213F] hover:border-[#10213F]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Two Display Cards (1620:3132, 1620:3152) */}
          <div className="mt-8 grid grid-cols-1 gap-[18px] md:grid-cols-2">
            {/* Left Card: Scope & Items */}
            <div className="rounded-[12px] border border-[#E4DFD3] bg-white p-7 shadow-sm">
              <h3
                className="text-[20px] font-semibold text-[#10213F] font-['Playfair_Display']"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {TAB_CONTRACTS[activeTab].title}
              </h3>
              <ul className="mt-5 space-y-3">
                {TAB_CONTRACTS[activeTab].items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-[14.5px] leading-relaxed text-[#5B6678]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B6678]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Card: Currentness & Guardrails */}
            <div className="rounded-[12px] border border-[#E4DFD3] bg-white p-7 shadow-sm">
              <h3
                className="text-[20px] font-semibold text-[#10213F] font-['Playfair_Display']"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {TAB_CONTRACTS[activeTab].secondTitle}
              </h3>
              <p className="mt-5 text-[14.5px] leading-relaxed text-[#5B6678]">
                {TAB_CONTRACTS[activeTab].secondDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: KRITON™ AI ADVISOR BOUNDARY (1620:3157) ──────────────── */}
      <section className="w-full bg-[#0B1A33] py-20 text-white lg:py-24">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-12 md:px-16 lg:px-[140px]">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Heading, Explanation, CTA */}
            <div className="lg:col-span-6">
              <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#E8912D]">
                Kriton™ AI Advisor boundary
              </span>
              <h2
                className="mt-2 text-[36px] font-semibold leading-[1.18] text-[#E9EDF5] sm:text-[40px]"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Human responsibility stays
                <br />
                explicit.
              </h2>
              <p className="mt-4 max-w-[480px] text-[16px] leading-[1.65] text-[#9FAAC0]">
                Kriton™ AI Advisor is a primary navigation destination, but its
                <br />
                role inside Workflow Mode is not established here. This
                <br />
                page routes to the authoritative source instead of listing AI
                <br />
                capabilities.
              </p>
              <div className="mt-8">
                <Link
                  href="/kriton-ai"
                  className="inline-flex items-center justify-center rounded-full bg-[#E8912D] px-6 py-3.5 text-[15px] font-semibold text-[#10213F] transition-all hover:bg-[#d47d1b]"
                >
                  Explore Kriton™ AI Advisor
                </Link>
              </div>
            </div>

            {/* Right Column: Comparison Table (1620:3170) */}
            <div className="lg:col-span-6 pt-2">
              <div className="w-full">
                {/* Table Header Row */}
                <div className="flex items-center border-b border-[#26395C] pb-3 text-[12px] font-bold uppercase tracking-wider text-[#B8661A]">
                  <div className="w-[200px] shrink-0 pr-4">If shown</div>
                  <div className="flex-1 pl-4">Stays source-controlled</div>
                </div>
                {/* Table Data Row */}
                <div className="flex items-start border-b border-[#26395C] py-4 text-[13.5px] leading-[1.65] text-[#9FAAC0]">
                  <div className="w-[200px] shrink-0 pr-4">
                    Source and evidence
                    <br />
                    references and scope visible;
                    <br />
                    approved labels such as
                    <br />
                    suggestion or draft only if they
                    <br />
                    exist
                  </div>
                  <div className="flex-1 pl-4">
                    Model provider, training, retention,
                    <br />
                    accuracy, confidence, autonomy,
                    <br />
                    reasoning; any implication that Kriton
                    <br />
                    is the accountable approver
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: EVIDENCE LINEAGE & CHANGE HISTORY (1620:3180) ────────── */}
      <section className="w-full bg-[#FAF7F0] border-b border-[#E4DFD3] py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-12 md:px-16 lg:px-[140px]">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Heading, Description */}
            <div className="lg:col-span-6">
              <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#B8661A]">
                Evidence lineage &amp; change history
              </span>
              <h2
                className="mt-2 text-[36px] font-semibold leading-[1.18] text-[#10213F] sm:text-[40px]"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Traceable from start to
                <br />
                review.
              </h2>
              <p className="mt-4 max-w-[480px] text-[16px] leading-[1.65] text-[#5B6678]">
                Definition, step, source, decision and handoff events
                <br />
                show prior and current state where supported.
                <br />
                Specimens use neutral role labels. No “export audit log”
                <br />
                unless a real export exists.
              </p>
            </div>

            {/* Right Column: Timeline Events (1620:3190) */}
            <div className="lg:col-span-6 pt-2 lg:pl-6">
              <div className="relative ml-4 border-l border-[#E4DFD3] pl-7 space-y-7">
                {[
                  {
                    event: "Workflow definition changed",
                    desc: "Field: scope · prior / current summary · role class",
                  },
                  {
                    event: "Step state changed",
                    desc: "Step 2 · Not started → In progress",
                  },
                  {
                    event: "Source superseded",
                    desc: "Source A · current version replaced",
                  },
                  {
                    event: "Handoff created",
                    desc: "Destination: Review Mode · unresolved items summarized",
                  },
                ].map((evt) => (
                  <div key={evt.event} className="relative">
                    {/* Orange Hollow Circle Node */}
                    <span className="absolute -left-[36px] top-1 flex h-4 w-4 rounded-full border-2 border-[#E8912D] bg-white" />
                    <h3 className="text-[16px] font-bold text-[#10213F] leading-snug">
                      {evt.event}
                    </h3>
                    <p className="mt-1 text-[13.5px] leading-relaxed text-[#5B6678]">
                      {evt.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: READY FOR REVIEW (1620:3209) ─────────────────────────── */}
      <section className="w-full bg-[#F3EEE2] border-b border-[#E4DFD3] py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-12 md:px-16 lg:px-[140px]">
          <div className="max-w-[780px]">
            <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#B8661A]">
              Ready for review
            </span>
            <h2
              className="mt-2 text-[36px] font-semibold leading-[1.18] text-[#10213F] sm:text-[40px]"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Where doing ends and checking begins.
            </h2>
            <p className="mt-3 text-[16px] sm:text-[17px] leading-relaxed text-[#5B6678]">
              Workflow Mode and Review Mode are separate destinations. Workflow Mode shows only
              <br />
              the minimum handoff context.
            </p>
          </div>

          <div className="mt-10 flex flex-col md:flex-row items-center gap-[18px]">
            {/* Handoff Contract Card (1620:3218) */}
            <div className="flex w-full md:w-[547px] min-h-[189px] flex-col justify-start rounded-[12px] border border-[#E4DFD3] bg-white p-[22px] shadow-sm">
              <h3
                className="text-[19.2px] font-semibold leading-[22px] text-[#10213F]"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Handoff contract
              </h3>
              <ul className="mt-3 space-y-1.5 text-[14.5px] leading-[23.2px] text-[#5B6678]">
                <li className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B6678]" />
                  <span>Readiness state, only from an approved taxonomy</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B6678]" />
                  <span>What is included and what remains unresolved</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B6678]" />
                  <span>Evidence references, if supported</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B6678]" />
                  <span>Action such as “Open Review Mode” only if approved</span>
                </li>
              </ul>
            </div>

            {/* Review Mode Card (1620:3232) */}
            <div className="flex w-full md:w-[547px] min-h-[189px] flex-col justify-between rounded-[12px] border border-[#E4DFD3] bg-white p-[22px] shadow-sm">
              <div>
                <h3
                  className="text-[19.2px] font-semibold leading-[22px] text-[#10213F]"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  Review Mode
                </h3>
                <p className="mt-3 text-[14.5px] leading-[23.2px] text-[#5B6678]">
                  Inspection, findings, outcome and return-for-change are defined on the
                  <br />
                  Review Mode destination.
                </p>
              </div>
              <div className="mt-4">
                <Link
                  href="/review-mode"
                  className="text-[16px] font-semibold text-[#B8661A] hover:underline"
                >
                  Explore Review Mode →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 7: ENTERPRISE EVALUATION & TRUST (1620:3241) ───────────── */}
      <section className="w-full bg-[#FAF7F0] border-b border-[#E4DFD3] py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-12 md:px-16 lg:px-[140px]">
          <div className="max-w-[780px]">
            <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#B8661A]">
              Enterprise evaluation &amp; trust
            </span>
            <h2
              className="mt-2 text-[36px] font-semibold leading-[1.18] text-[#10213F] sm:text-[40px]"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Route each question to its authoritative
              <br />
              source.
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-[18px] max-w-[1112px]">
            {/* Governance Card */}
            <div className="flex flex-col justify-between rounded-[12px] border border-[#E4DFD3] bg-white p-[22px] shadow-sm">
              <div>
                <div className="flex h-[46px] w-[46px] items-center justify-center rounded-[12px] border border-[#E4DFD3] bg-[#FBF6EF] text-[#B8661A]">
                  <ShieldCheck className="h-[22px] w-[22px] stroke-[1.8]" />
                </div>
                <div className="pt-[15px]">
                  <h3
                    className="text-[19.2px] font-semibold leading-[22px] tracking-[-0.01em] text-[#10213F]"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    Governance
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-[23.2px] text-[#5B6678]">
                    How the product is governed.
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href="/governance"
                  className="text-[16px] font-semibold text-[#B8661A] hover:underline inline-flex items-center gap-1.5"
                >
                  Governance →
                </Link>
              </div>
            </div>

            {/* Compliance Card */}
            <div className="flex flex-col justify-between rounded-[12px] border border-[#E4DFD3] bg-white p-[22px] shadow-sm">
              <div>
                <div className="flex h-[46px] w-[46px] items-center justify-center rounded-[12px] border border-[#E4DFD3] bg-[#FBF6EF] text-[#B8661A]">
                  <FileText className="h-[22px] w-[22px] stroke-[1.8]" />
                </div>
                <div className="pt-[15px]">
                  <h3
                    className="text-[19.2px] font-semibold leading-[22px] tracking-[-0.01em] text-[#10213F]"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    Compliance
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-[23.2px] text-[#5B6678]">
                    What compliance evidence is available.
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href="/compliance"
                  className="text-[16px] font-semibold text-[#B8661A] hover:underline inline-flex items-center gap-1.5"
                >
                  Compliance →
                </Link>
              </div>
            </div>

            {/* Privacy & Security Card */}
            <div className="flex flex-col justify-between rounded-[12px] border border-[#E4DFD3] bg-white p-[22px] shadow-sm">
              <div>
                <div className="flex h-[46px] w-[46px] items-center justify-center rounded-[12px] border border-[#E4DFD3] bg-[#FBF6EF] text-[#B8661A]">
                  <Lock className="h-[22px] w-[22px] stroke-[1.8]" />
                </div>
                <div className="pt-[15px]">
                  <h3
                    className="text-[19.2px] font-semibold leading-[22px] tracking-[-0.01em] text-[#10213F]"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    Privacy &amp; Security
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-[23.2px] text-[#5B6678]">
                    How privacy and security are handled.
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href="/privacy-security"
                  className="text-[16px] font-semibold text-[#B8661A] hover:underline inline-flex items-center gap-1.5"
                >
                  Privacy &amp; Security →
                </Link>
              </div>
            </div>
          </div>

          {/* Technical Detail Callout (1620:3279) */}
          <div className="mt-8 flex w-full max-w-[1112px] items-center rounded-r-[10px] border-l-[3px] border-[#E8912D] bg-white px-[18px] py-[13.5px] shadow-sm">
            <p className="text-[14.5px] leading-[23.2px] text-[#10213F]">
              <span className="font-bold text-[#10213F]">Technical detail:</span>{" "}
              <span className="font-normal text-[#5B6678]">
                API Reference appears once approved. Until then, technical evaluation runs through sales.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 8: BUYER LENSES (1620:3281) ────────────────────────────── */}
      <section className="w-full bg-[#F3EEE2] border-b border-[#E4DFD3] py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-12 md:px-16 lg:px-[140px]">
          <div className="max-w-[780px]">
            <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#B8661A]">
              Buyer lenses
            </span>
            <h2
              className="mt-2 text-[36px] font-semibold leading-[1.18] text-[#10213F] sm:text-[40px]"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Find the proof that matters to you.
            </h2>
            <p className="mt-3 text-[16px] sm:text-[17px] leading-relaxed text-[#5B6678]">
              Lenses help you navigate. They are not editions, roles or permissions.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3 max-w-[1112px]">
            {[
              {
                title: "Finance / Accounting",
                desc: "Definition, step sequence, sources,\nexceptions, review handoff.",
                cta: "Book a Demo →",
                href: "/book-a-demo",
                icon: (
                  <svg className="h-[22px] w-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="4" y1="20" x2="20" y2="20" />
                    <line x1="7" y1="20" x2="7" y2="13" />
                    <line x1="12" y1="20" x2="12" y2="6" />
                    <line x1="17" y1="20" x2="17" y2="10" />
                  </svg>
                ),
              },
              {
                title: "Controller / Reviewer",
                desc: "Evidence lineage, unresolved items, human\nresponsibility, Review Mode boundary.",
                cta: "Explore Review Mode →",
                href: "/review-mode",
                icon: (
                  <svg className="h-[22px] w-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                ),
              },
              {
                title: "Operations",
                desc: "State visibility, dependencies, handoffs,\ncurrentness.",
                cta: "Book a Demo →",
                href: "/book-a-demo",
                icon: (
                  <svg className="h-[22px] w-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                    <polyline points="16 17 21 12 16 7" />
                    <line x1="21" y1="12" x2="9" y2="12" />
                  </svg>
                ),
              },
              {
                title: "IT / Architecture",
                desc: "Object model, integration boundary,\npermissions, events.",
                cta: "Contact sales →",
                href: "/contact-sales",
                icon: (
                  <svg className="h-[22px] w-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="6" rx="2" />
                    <rect x="3" y="14" width="18" height="6" rx="2" />
                  </svg>
                ),
              },
              {
                title: "Risk / Governance",
                desc: "Sources, evidence, decision responsibility,\nexceptions.",
                cta: "Governance →",
                href: "/governance",
                icon: (
                  <svg className="h-[22px] w-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                ),
              },
              {
                title: "Procurement / Enterprise",
                desc: "Trust routes, support paths, evaluation.",
                cta: "Request Pilot →",
                href: "/request-pilot",
                icon: (
                  <svg className="h-[22px] w-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 21V8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v13" />
                    <path d="M9 21v-5a3 3 0 0 1 6 0v5" />
                  </svg>
                ),
              },
            ].map((lens) => (
              <div
                key={lens.title}
                className="flex flex-col justify-between rounded-[12px] border border-[#E4DFD3] bg-white p-[22px] shadow-sm"
              >
                <div>
                  <div className="flex h-[46px] w-[46px] items-center justify-center rounded-[12px] border border-[#E4DFD3] bg-[#FBF6EF] text-[#B8661A]">
                    {lens.icon}
                  </div>
                  <div className="pt-[15px]">
                    <h3
                      className="text-[19.2px] font-semibold leading-[22px] tracking-[-0.01em] text-[#10213F]"
                      style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                    >
                      {lens.title}
                    </h3>
                    <p className="mt-2 text-[14.5px] leading-[23.2px] text-[#5B6678] whitespace-pre-line">
                      {lens.desc}
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <Link
                    href={lens.href}
                    className="text-[16px] font-semibold text-[#B8661A] hover:underline inline-flex items-center gap-1.5"
                  >
                    {lens.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 9: EVALUATE WORKFLOW MODE (1620:3349) ────────────────────── */}
      <section className="w-full bg-[#0B1A33] py-20 text-white lg:py-24">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-12 md:px-16 lg:px-[140px]">
          <div className="mx-auto max-w-[1100px] text-center">
            <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#E8912D]">
              Evaluate Workflow Mode
            </span>
            <h2
              className="mt-2 text-[30px] sm:text-[36px] lg:text-[40px] font-semibold leading-[1.18] tracking-[-0.01em] text-[#E9EDF5] md:whitespace-nowrap"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              See how Workflow Mode fits a real evaluation workflow.
            </h2>
            <p className="mt-4 max-w-[640px] mx-auto text-[16px] leading-[25.6px] text-[#9FAAC0]">
              Bring the workflow, review, evidence, governance, integration and decision
              <br />
              requirements that matter to your team. We will route the conversation to the
              <br />
              appropriate evaluation path.
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/book-a-demo"
                className="inline-flex h-[50px] w-[142px] items-center justify-center rounded-full bg-[#E8912D] text-[15px] font-semibold text-[#10213F] transition-all hover:bg-[#d47d1b]"
              >
                Book a Demo
              </Link>
              <Link
                href="/request-pilot"
                className="inline-flex h-[50px] w-[142px] items-center justify-center rounded-full border border-[#E8912D] bg-transparent text-[15px] font-semibold text-white transition-all hover:bg-[#E8912D]/10"
              >
                Request Pilot
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-[13.5px] text-[#9FAAC0]">
              <Link href="/compliance" className="hover:text-white hover:underline">
                Compliance
              </Link>
              <Link href="/governance" className="hover:text-white hover:underline">
                Governance
              </Link>
              <Link href="/privacy-security" className="hover:text-white hover:underline">
                Privacy &amp; Security
              </Link>
              <Link href="/about" className="hover:text-white hover:underline">
                Sign in
              </Link>
            </div>

            <p className="mt-6 text-[12.5px] leading-[20px] text-[#9FAAC0]">
              No implication of guaranteed pilot access, automation, integration availability or outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 10: FREQUENTLY ASKED (1620:3378) ────────────────────────── */}
      <section className="w-full bg-[#FAF7F0] py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-12 md:px-16 lg:px-[140px]">
          <div className="mx-auto max-w-[812px]">
            <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#B8661A]">
              Frequently asked
            </span>
            <h2
              className="mt-2 text-[36px] font-semibold leading-[1.18] text-[#10213F] sm:text-[40px]"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Straight answers, with limits stated.
            </h2>
          </div>

          <div className="mx-auto mt-10 max-w-[812px] divide-y divide-[#E4DFD3] border-y border-[#E4DFD3]">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="py-[18px]">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <span
                    className="text-[17px] font-semibold text-[#10213F]"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    {faq.q}
                  </span>
                  <span
                    className="ml-4 text-[22px] font-semibold text-[#B8661A]"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    {activeFaq === idx ? "−" : "+"}
                  </span>
                </button>
                {activeFaq === idx && (
                  <p className="mt-3 text-[15px] leading-relaxed text-[#5B6678]">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
