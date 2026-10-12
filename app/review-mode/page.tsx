"use client";

import { useState } from "react";
import Link from "next/link";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-mono",
  display: "swap",
});

// ─── TAB DATA FOR SECTION 3 ───────────────────────────────────────────────────
interface TabContract {
  title: string;
  items: string[];
  actions: string[];
}

const TAB_CONTRACTS: Record<string, TabContract> = {
  Scope: {
    title: "Review intake & scope",
    items: [
      "Package title, purpose, source Workflow Mode reference, state, version and currentness",
      "Included scope and an explicit excluded or out-of-scope list",
      "Readiness summary: unresolved, missing, restricted, conflicting",
      "“Ready” appears only if the product defines it",
    ],
    actions: [
      "Open first attention item",
      "View evidence",
      "View history",
      "No disposition until inspection state permits",
    ],
  },
  Evidence: {
    title: "Evidence & source lineage",
    items: [
      "Attached source artifacts with authority tier and license boundary",
      "Currentness status: current, superseded, draft, or pending verification",
      "Direct linkage between workpaper calculations and underlying evidence",
      "Restricted source indicators when access permissions require elevation",
    ],
    actions: [
      "Inspect source authority level",
      "Verify citation alignment",
      "Flag missing supporting schedule",
      "Request evidence elevation",
    ],
  },
  Checks: {
    title: "Automated & rule-based checks",
    items: [
      "Deterministic balance assertions, cross-footing, and tie-out validations",
      "Statutory rule checks against configured jurisdictional accounting standards",
      "Tolerance threshold checks with visible variance calculations",
      "Clear pass, warning, and failed assertion logs with rule citations",
    ],
    actions: [
      "Re-run verification checks",
      "Inspect failing assertion rule",
      "Add reviewer override note",
      "Escalate assertion breach",
    ],
  },
  Findings: {
    title: "Review observations & challenges",
    items: [
      "Threaded reviewer findings linked explicitly to lines, cells, or sources",
      "Severity categorization: observation, clarification needed, blocking exception",
      "Attributable reviewer identity, timestamp, and unresolved disposition",
      "Preparer response history preserved in immutable workpaper audit log",
    ],
    actions: [
      "Log new review finding",
      "Request preparer clarification",
      "Mark finding addressed",
      "Escalate finding to partner queue",
    ],
  },
  Outcome: {
    title: "Review disposition & sign-off",
    items: [
      "Role-based sign-off controls gated by blocking open findings",
      "Bounded outcomes: Accepted, Accepted with qualifications, Returned for rework",
      "Clear attribution: signing reviewer, license credential, sign-off timestamp",
      "Immutable snapshot creation locking reviewed package against modification",
    ],
    actions: [
      "Record qualified disposition",
      "Sign off review package",
      "Lock workpaper version",
      "Route to audit archiving queue",
    ],
  },
  Return: {
    title: "Handoff & return cycle",
    items: [
      "Controlled return of bounded package back to Workflow Mode preparer",
      "Carry-forward of open findings and explicit rework instructions",
      "Version increment tracking ensuring review changes are non-destructive",
      "Notification routing to original preparer with SLA milestone indicators",
    ],
    actions: [
      "Initiate return to preparer",
      "Attach return guidance notes",
      "Set milestone rework target",
      "Notify engagement lead",
    ],
  },
};

// ─── FAQ DATA ─────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "What is Review Mode in Zoiko Logia?",
    a: "Review Mode is the dedicated inspection interface designed specifically for reviewers, controllers, and partners. It isolates review controls from active drafting controls, keeping scope, source evidence, variance comparisons, and reviewer findings fully traceable.",
  },
  {
    q: "How is Review Mode different from Workflow Mode?",
    a: "Workflow Mode structures and progresses drafting work, dependencies, and evidence capture. Review Mode inspects that work after formal handoff, ensuring that doing and checking stay distinctly separated by design.",
  },
  {
    q: "Does Review Mode approve accounting work?",
    a: "No. Review Mode does not issue automated determinations or certify compliance. It provides qualified human reviewers with the evidence architecture and audit trails necessary to record their own professional judgment.",
  },
  {
    q: "Can Review Mode compare versions or evidence?",
    a: "Yes. Review Mode highlights differences between previous and current workpaper versions, flags replaced evidence sources, and makes attention states visible.",
  },
  {
    q: "Can reviewers create findings or ask questions?",
    a: "Yes. Reviewers can log attributable findings linked directly to specific objects, sources, or line items, which carry across to the return-for-change handoff cycle.",
  },
  {
    q: "Does Review Mode use Kriton™ AI Advisor?",
    a: "Kriton™ operates only within strictly defined boundaries and never outruns evidence. AI findings, comparisons, and suggestions are kept separate from authoritative source data and require qualified human validation.",
  },
  {
    q: "Can Review Mode integrate with our systems?",
    a: "Review Mode connects with ERPs, practice management suites, and secure audit archives via enterprise integrations and structured event hooks.",
  },
  {
    q: "How are unresolved items handled?",
    a: "Unresolved matters, conflicting sources, or restricted evidence are surfaced prominently in the attention rail and cannot be silently bypassed or cleared by the software.",
  },
  {
    q: "How can I evaluate Review Mode?",
    a: "You can book an enterprise briefing with our solutions team to review our evidence architecture, role models, and integration specs against your team's workflow.",
  },
];

export default function ReviewModePage() {
  const [selectedLayer, setSelectedLayer] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<string>("Scope");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div
      className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable} min-h-screen bg-[#FAF7F0] font-sans text-[#10213F] antialiased selection:bg-[#E8912D] selection:text-[#10213F]`}
      style={{ fontFamily: "var(--font-inter), Arial, sans-serif" }}
    >
      {/* ─── SECTION 0: HERO (1619:1280) ────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0A1628] pt-12 pb-20 text-white lg:pt-16 lg:pb-24">
        {/* Subtle radial glow */}
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(circle at 30% 20%, rgba(232, 145, 45, 0.12) 0%, transparent 60%)",
          }}
        />

        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-12 md:px-16 lg:px-[120px]">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Left Content */}
            <div className="lg:col-span-6">
              <div className="mb-4 inline-flex items-center gap-2">
                <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#E8912D]">
                  Review Mode
                </span>
              </div>

              <h1
                className="text-[44px] font-semibold leading-[1.12] tracking-[-0.015em] text-[#E9EDF5] sm:text-[54px] lg:text-[58px]"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Review the work
                <br />
                with its evidence
                <br />
                intact.
              </h1>

              <p className="mt-6 max-w-[540px] text-[17px] font-normal leading-[1.6] text-[#9FAAC0]">
                Inspect scope, sources, changes, unresolved items,
                <br />
                review observations, and handoff context in a mode
                <br />
                designed to keep review traceable.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <a
                  href="#review-model"
                  className="inline-flex items-center justify-center rounded-full bg-[#E8912D] px-6 py-3.5 text-[15px] font-semibold text-[#10213F] shadow-sm transition-all hover:bg-[#d47d1b]"
                >
                  Explore the review model
                </a>
                <Link
                  href="/book-a-demo"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-white/10"
                >
                  Book a Demo
                </Link>
              </div>

              <p className="mt-8 text-[13.5px] leading-relaxed text-[#9FAAC0]/90">
                Need to structure or progress the work first?{" "}
                <Link
                  href="/learning-&-practice-mode"
                  className="text-[#E8912D] underline decoration-[#E8912D]/60 underline-offset-4 hover:decoration-[#E8912D]"
                >
                  Workflow Mode
                </Link>{" "}
                remains a<br />
                separate destination.
              </p>
            </div>

            {/* Right: Specimen Review Workspace Card (1619:1318) */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="w-full max-w-[570px] overflow-hidden rounded-[14px] border border-[#2B3A50] bg-[#FAF7F0] text-[#10213F] shadow-2xl">
                {/* 1. Header (1619:1321) */}
                <div className="border-b border-[#E2DCD0] bg-white px-5 py-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <span className="text-[14px] font-bold text-[#10213F]">Review item 01</span>
                      <span className="rounded-full bg-[#10213F] px-2.5 py-0.5 text-[10px] font-semibold tracking-wider text-white">
                        REVIEW MODE
                      </span>
                    </div>
                    <div className="rounded-[6px] border border-[#E2DCD0] bg-[#FAF7F0] px-2.5 py-1 text-[11px] font-medium text-[#5B6678]">
                      From Workflow Mode - ref W-01
                    </div>
                  </div>
                  <div className="mt-2.5 flex items-center">
                    <span className="rounded-[6px] border border-[#E2DCD0] bg-[#FAF7F0] px-2.5 py-1 text-[11px] font-medium text-[#10213F]">
                      State: Under review · Current
                    </span>
                  </div>
                </div>

                {/* 2. Three-column body (1619:1337) */}
                <div className="grid grid-cols-12 min-h-[360px]">
                  {/* Left Column: Vertical Tab Rail (1619:1338) */}
                  <div className="col-span-3 border-r border-[#E2DCD0] bg-[#FAF7F0] p-2.5 flex flex-col gap-1">
                    <div className="rounded-[6px] bg-[#10213F] px-3 py-2 text-[12px] font-semibold text-white">
                      Scope
                    </div>
                    <div className="px-3 py-1.5 text-[12px] font-medium text-[#5B6678] hover:text-[#10213F] cursor-pointer">
                      Evidence
                    </div>
                    <div className="px-3 py-1.5 text-[12px] font-medium text-[#5B6678] hover:text-[#10213F] cursor-pointer">
                      Checks
                    </div>
                    <div className="px-3 py-1.5 text-[12px] font-medium text-[#5B6678] hover:text-[#10213F] cursor-pointer">
                      Findings
                    </div>
                    <div className="px-3 py-1.5 text-[12px] font-medium text-[#5B6678] hover:text-[#10213F] cursor-pointer">
                      Unresolved
                    </div>
                    <div className="px-3 py-1.5 text-[12px] font-medium text-[#5B6678] hover:text-[#10213F] cursor-pointer">
                      History
                    </div>
                    <div className="px-3 py-1.5 text-[12px] font-medium text-[#5B6678] hover:text-[#10213F] cursor-pointer">
                      Outcome
                    </div>
                  </div>

                  {/* Middle Column: Badges & Objects (1619:1357) */}
                  <div className="col-span-6 p-3 flex flex-col gap-2.5">
                    {/* Attention Badges (1619:1358) */}
                    <div className="flex flex-col gap-1.5">
                      <div className="w-[252px]">
                        <span className="block w-[252px] rounded-[6px] border border-[#F5D6A8] bg-[#FFF8ED] px-2.5 py-1 text-[11px] font-semibold text-[#8A4F0B]">
                          ▲ 2 unresolved
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="rounded-[6px] border border-[#D0DCE8] bg-[#F0F4F9] px-2 py-1 text-[11px] font-semibold text-[#10213F]">
                          ◐ 1 changed
                        </span>
                        <span className="rounded-[6px] border border-[#F5B7B1] bg-[#FDEDEC] px-2 py-1 text-[11px] font-semibold text-[#8E2F2F]">
                          ■ 1 evidence restricted
                        </span>
                      </div>
                      <div className="w-[204px]">
                        <span className="block w-[204px] rounded-[6px] border border-[#F5D6A8] bg-[#FFF8ED] px-2.5 py-1 text-[11px] font-semibold text-[#8A4F0B]">
                          ⇄ 1 conflict
                        </span>
                      </div>
                    </div>

                    {/* SELECTED OBJECT (1619:1383) */}
                    <div className="rounded-[8px] border border-[#E2DCD0] bg-white p-2.5">
                      <div className="text-[10px] font-bold tracking-wider text-[#B8661A]">
                        SELECTED OBJECT
                      </div>
                      <div className="mt-0.5 text-[12.5px] font-bold text-[#10213F]">
                        Review item 01 · Source A
                      </div>
                      <div className="text-[10.5px] text-[#5B6678]">
                        Evidence: current · Access: available
                      </div>
                    </div>

                    {/* Comparison 2-col (1619:1391) */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="rounded-[8px] border border-[#E2DCD0] bg-white p-2">
                        <div className="text-[10px] text-[#5B6678]">Previous version</div>
                        <div className="mt-0.5 text-[11.5px] leading-tight text-[#10213F]">
                          Value not shown (specimen)
                        </div>
                      </div>
                      <div className="rounded-[8px] border border-[#E2DCD0] bg-white p-2">
                        <div className="text-[10px] text-[#5B6678]">Current version</div>
                        <div className="mt-0.5 text-[11.5px] leading-tight text-[#10213F]">
                          Change flagged in text: “Field updated”
                        </div>
                      </div>
                    </div>

                    {/* FINDING 02 (1619:1400) */}
                    <div className="rounded-[8px] border border-[#E2DCD0] bg-white p-2.5">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-bold tracking-wider text-[#B8661A]">
                          FINDING 02
                        </span>
                        <span className="text-[11px] text-[#10213F]">· Needs attention</span>
                      </div>
                      <div className="mt-1 text-[10.5px] text-[#5B6678]">
                        Linked to Source A · Owner: responsibility class TBD
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Context & Outcome (1619:1407) */}
                  <div className="col-span-3 border-l border-[#E2DCD0] bg-[#FAF7F0] p-3 flex flex-col gap-2">
                    <div>
                      <div className="text-[12px] font-bold text-[#10213F]">Context</div>
                      <div className="mt-2 text-[11px] leading-snug text-[#5B6678]">
                        Scope: 3 objects in, 1 out
                      </div>
                      <div className="mt-1 text-[11px] text-[#5B6678]">Source A · Source B</div>
                    </div>

                    {/* Reserved Outcome Area (1619:1414) */}
                    <div className="mt-1 rounded-[8px] border border-dashed border-[#D6CFC3] bg-white p-2.5">
                      <div className="text-[10px] font-semibold text-[#5B6678]">Outcome area</div>
                      <div className="mt-1 text-[10px] leading-tight text-[#8A95A5]">
                        Reserved · source-
                        <br />
                        defined action slot
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Bottom bar (1619:1420) */}
                <div className="flex flex-wrap items-center justify-between border-t border-[#E2DCD0] bg-[#F5F1E8] px-4 py-2.5 text-[11px]">
                  <div className="flex flex-wrap items-center gap-3 text-[#5B6678]">
                    <span>● Package received</span>
                    <span>● Finding updated</span>
                    <span>● Returned for change</span>
                  </div>
                  <div className="text-[10.5px] font-bold tracking-wider text-[#B8661A]">
                    SPECIMEN DATA
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 1: THE REVIEW MODEL (1619:1429) ────────────────────────── */}
      <section id="review-model" className="w-full border-b border-[#E3DED2] py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-12 md:px-16 lg:px-[120px]">
          <div className="max-w-[760px]">
            <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#B8661A]">
              The review model
            </span>
            <h2
              className="mt-2 text-[36px] font-semibold leading-[1.18] text-[#10213F] sm:text-[40px]"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Three layers, one connected review.
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-[#5B6678]">
              A recommended structure for how a bounded package of work moves through<br />
              inspection. Select a layer to see what it shows.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-[18px] md:grid-cols-3">
            {/* Layer 1 */}
            <div
              onClick={() => setSelectedLayer(1)}
              className={`cursor-pointer rounded-[12px] border p-[22px] transition-all ${
                selectedLayer === 1
                  ? "border-[#E8912D] bg-white shadow-md ring-1 ring-[#E8912D]"
                  : "border-[#E3DED2] bg-white hover:border-[#E8912D]"
              }`}
            >
              <span
                className="text-[13px] font-bold text-[#B8661A]"
                style={{ fontFamily: "var(--font-mono), monospace" }}
              >
                LAYER 1
              </span>
              <h3
                className="mt-2.5 text-[20px] font-semibold leading-snug text-[#10213F]"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Receive &amp; scope the review
              </h3>
              <p className="mt-3 text-[15px] leading-[24px] text-[#5B6678]">
                <span className="block">What arrived from Workflow Mode, what is</span>
                <span className="block">included, currentness, unresolved work and</span>
                <span className="block">the review boundary.</span>
              </p>
              <div className="mt-6 border-t border-[#F0EBE0] pt-4 text-[13px] font-medium text-[#10213F]">
                Proof UI: package summary · scope rail
              </div>
            </div>

            {/* Layer 2 */}
            <div
              onClick={() => setSelectedLayer(2)}
              className={`cursor-pointer rounded-[12px] border p-[22px] transition-all ${
                selectedLayer === 2
                  ? "border-[#E8912D] bg-white shadow-md ring-1 ring-[#E8912D]"
                  : "border-[#E3DED2] bg-white hover:border-[#E8912D]"
              }`}
            >
              <span
                className="text-[13px] font-bold text-[#B8661A]"
                style={{ fontFamily: "var(--font-mono), monospace" }}
              >
                LAYER 2
              </span>
              <h3
                className="mt-2.5 text-[20px] font-semibold leading-snug text-[#10213F]"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Inspect &amp; challenge
              </h3>
              <p className="mt-3 text-[15px] leading-[24px] text-[#5B6678]">
                <span className="block">Sources and evidence, changes, checks</span>
                <span className="block">and comparisons, findings and questions,</span>
                <span className="block">with uncertainty kept visible.</span>
              </p>
              <div className="mt-6 border-t border-[#F0EBE0] pt-4 text-[13px] font-medium text-[#10213F]">
                Proof UI: inspection canvas · finding drawer
              </div>
            </div>

            {/* Layer 3 */}
            <div
              onClick={() => setSelectedLayer(3)}
              className={`cursor-pointer rounded-[12px] border p-[22px] transition-all ${
                selectedLayer === 3
                  ? "border-[#E8912D] bg-white shadow-md ring-1 ring-[#E8912D]"
                  : "border-[#E3DED2] bg-white hover:border-[#E8912D]"
              }`}
            >
              <span
                className="text-[13px] font-bold text-[#B8661A]"
                style={{ fontFamily: "var(--font-mono), monospace" }}
              >
                LAYER 3
              </span>
              <h3
                className="mt-2.5 text-[20px] font-semibold leading-snug text-[#10213F]"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Disposition &amp; handoff
              </h3>
              <p className="mt-3 text-[15px] leading-[24px] text-[#5B6678]">
                <span className="block">A source-defined outcome, conditions, the</span>
                <span className="block">return and change cycle, next destination</span>
                <span className="block">and history.</span>
              </p>
              <div className="mt-6 border-t border-[#F0EBE0] pt-4 text-[13px] font-medium text-[#10213F]">
                Proof UI: outcome rail · handoff panel · timeline
              </div>
            </div>
          </div>

          {/* Layer Indicator Container (1619:1477 Background+VerticalBorder) */}
          <div className="mt-8 flex w-full items-center rounded-r-[10px] border-l-[3px] border-[#E8912D] bg-white px-[18px] py-[13.5px] shadow-sm">
            <p className="text-[14.5px] leading-[1.6]">
              <span className="font-bold text-[#10213F]">
                Layer {selectedLayer} in the workspace below:
              </span>{" "}
              <span className="font-normal text-[#5B6678]">
                the package summary and scope rail (A, H).
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: ANNOTATED WORKSPACE (1619:1481) ─────────────────────── */}
      <section className="w-full bg-[#F3EEE2] border-b border-[#E3DED2] py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-12 md:px-16 lg:px-[120px]">
          <div className="max-w-[780px]">
            <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#B8661A]">
              Annotated review workspace
            </span>
            <h2
              className="mt-2 text-[36px] font-semibold leading-[1.18] text-[#10213F] sm:text-[40px]"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Inspection first. Outcome second.
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-[#5B6678]">
              Review controls dominate; workflow progression controls are absent. Annotations sit<br />
              outside the frame so the interface stays credible.
            </p>
          </div>

          {/* 2-Column Section Layout: Workspace Specimen on Left, Annotations on Right */}
          <div className="mt-12 flex flex-col lg:flex-row items-start gap-8 xl:gap-12">
            {/* Left: Specimen Review Workspace Card (1619:1493) */}
            <div className="w-full lg:flex-1 overflow-hidden rounded-[14px] border border-[#E2DCD0] bg-[#FAF7F0] text-[#10213F] shadow-xl">
              {/* Top Header Bar (1619:1495) */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E2DCD0] bg-white px-5 py-3.5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="text-[14px] font-bold text-[#10213F]">Review item 01</span>
                  <span className="rounded-full bg-[#10213F] px-2.5 py-0.5 text-[10px] font-semibold tracking-wider text-white">
                    REVIEW MODE
                  </span>
                  <span className="rounded-[6px] border border-[#E2DCD0] bg-[#FAF7F0] px-2.5 py-0.5 text-[11px] font-semibold text-[#B8661A]">
                    A · Scope: 3 in / 1 out
                  </span>
                </div>
                <div className="rounded-[6px] border border-[#E2DCD0] bg-[#FAF7F0] px-2.5 py-0.5 text-[11px] font-medium text-[#5B6678]">
                  H · Source: Workflow Mode W-01
                </div>
              </div>

              {/* 3-Column Body (1619:1505) */}
              <div className="grid grid-cols-12 min-h-[320px]">
                {/* Column 1: Vertical Tabs (1619:1506) */}
                <div className="col-span-2 border-r border-[#E2DCD0] bg-[#FAF7F0] p-2 flex flex-col gap-0.5 text-[11.5px]">
                  <div className="px-2.5 py-1.5 font-medium text-[#5B6678]">Overview</div>
                  <div className="px-2.5 py-1.5 font-medium text-[#5B6678]">Scope</div>
                  <div className="rounded-[6px] bg-[#10213F] px-2.5 py-1.5 font-semibold text-white">
                    Evidence
                  </div>
                  <div className="px-2.5 py-1.5 font-medium text-[#5B6678]">Checks</div>
                  <div className="px-2.5 py-1.5 font-medium text-[#5B6678]">Findings</div>
                  <div className="px-2.5 py-1.5 font-medium text-[#5B6678]">Unresolved</div>
                  <div className="px-2.5 py-1.5 font-medium text-[#5B6678]">History</div>
                  <div className="px-2.5 py-1.5 font-medium text-[#5B6678]">Outcome</div>
                </div>

                {/* Column 2: Center Canvas (1619:1523) */}
                <div className="col-span-7 p-3 flex flex-col gap-2.5">
                  {/* B · EVIDENCE INTACT Card (1619:1524) */}
                  <div className="rounded-[8px] border border-[#E2DCD0] bg-white p-2.5">
                    <div className="text-[10px] font-bold tracking-wider text-[#B8661A]">
                      B · EVIDENCE INTACT
                    </div>
                    <div className="mt-0.5 text-[12.5px] font-bold text-[#10213F]">
                      Source A → Review item 01
                    </div>
                    <div className="text-[10.5px] text-[#5B6678]">
                      Type: not specified · Currentness: current · Access: available
                    </div>
                  </div>

                  {/* Badges Row (1619:1528) */}
                  <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-semibold">
                    <span className="rounded-[6px] border border-[#F5D6A8] bg-[#FFF8ED] px-2.5 py-1 text-[#8A4F0B]">
                      C ▲ Unresolved: 2
                    </span>
                    <span className="rounded-[6px] border border-[#F5B7B1] bg-[#FDEDEC] px-2 py-1 text-[#8E2F2F]">
                      ■ Restricted: 1
                    </span>
                    <span className="rounded-[6px] border border-[#F5D6A8] bg-[#FFF8ED] px-2.5 py-1 text-[#8A4F0B]">
                      ⇄ Conflict: 1
                    </span>
                  </div>

                  {/* 2-Column Comparison (1619:1539) */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-[8px] border border-[#E2DCD0] bg-white p-2.5">
                      <div className="text-[10px] text-[#5B6678]">Source A (reference)</div>
                      <div className="mt-0.5 text-[11.5px] leading-snug text-[#10213F]">
                        Information unavailable / not<br />provided
                      </div>
                    </div>
                    <div className="rounded-[8px] border border-[#E2DCD0] bg-white p-2.5">
                      <div className="text-[10px] text-[#5B6678]">Review item 01 (reviewed)</div>
                      <div className="mt-0.5 text-[11.5px] leading-snug text-[#10213F]">
                        Observed state: needs attention
                      </div>
                    </div>
                  </div>

                  {/* E · FINDING 02 Card (1619:1547) */}
                  <div className="rounded-[8px] border border-[#E2DCD0] bg-white p-2.5">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-bold tracking-wider text-[#B8661A]">
                        E · FINDING 02
                      </span>
                      <span className="text-[11.5px] text-[#10213F]">→ Source A, Review item 01</span>
                    </div>
                    <div className="mt-0.5 text-[10.5px] text-[#5B6678]">
                      State: Open (example label)
                    </div>
                  </div>
                </div>

                {/* Column 3: Context Drawer (1619:1551) */}
                <div className="col-span-3 border-l border-[#E2DCD0] bg-[#FAF7F0] p-3 flex flex-col gap-2">
                  <div className="text-[12px] font-bold text-[#10213F]">Context drawer</div>
                  <div className="text-[11px] leading-snug text-[#5B6678]">
                    Related: Source A,<br />Source B
                  </div>
                  <div className="text-[11px] text-[#5B6678]">Version: current</div>

                  {/* F · Outcome Dashed Box (1619:1558) */}
                  <div className="rounded-[8px] border border-dashed border-[#D6CFC3] bg-white p-2 mt-1">
                    <div className="text-[10px] font-bold text-[#B8661A]">F · Outcome</div>
                    <div className="mt-1 text-[10px] leading-tight text-[#8A95A5]">
                      Unavailable until<br />permission and package<br />state allow
                    </div>
                  </div>

                  <div className="text-[11px] text-[#5B6678] mt-1">
                    G · History: 3 events
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Ordered List - Annotations (1619:1566) */}
            <div className="w-full lg:w-[320px] flex flex-col gap-4">
              {[
                {
                  letter: "A",
                  title: "Bounded review",
                  desc: "Package title, scope and source workflow reference stay visible.",
                },
                {
                  letter: "B",
                  title: "Evidence intact",
                  desc: "The selected object links to its source and currentness.",
                },
                {
                  letter: "C",
                  title: "Attention state",
                  desc: "Unresolved, missing, conflicting and changed states shown in text.",
                },
                {
                  letter: "D",
                  title: "Inspection, not execution",
                  desc: "No workflow progression controls.",
                },
                {
                  letter: "E",
                  title: "Finding linkage",
                  desc: "Observations tie to an object and evidence.",
                },
                {
                  letter: "F",
                  title: "Outcome boundary",
                  desc: "Permission and state dependent; no unsupported Approve/Reject.",
                },
                {
                  letter: "G",
                  title: "Traceability",
                  desc: "History and version relation without taking over.",
                },
                {
                  letter: "H",
                  title: "Workflow relationship",
                  desc: "Source and return handoff are visible.",
                },
              ].map((item) => (
                <div key={item.letter} className="flex items-start gap-3">
                  <span
                    className="flex h-[26px] w-[26px] flex-shrink-0 items-center justify-center rounded-full bg-[#E8912D] text-[12px] font-bold text-[#10213F] shadow-sm"
                    style={{ fontFamily: "var(--font-mono), monospace" }}
                  >
                    {item.letter}
                  </span>
                  <div>
                    <h4 className="text-[14px] font-bold text-[#10213F]">{item.title}</h4>
                    <p className="mt-0.5 text-[12.5px] leading-relaxed text-[#5B6678]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: INSIDE A REVIEW PACKAGE (1619:1628) ─────────────────── */}
      <section className="w-full border-b border-[#E3DED2] py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-12 md:px-16 lg:px-[120px]">
          <div className="max-w-[780px]">
            <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#B8661A]">
              Inside a review package
            </span>
            <h2
              className="mt-2 text-[36px] font-semibold leading-[1.18] text-[#10213F] sm:text-[40px]"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              What a reviewer can inspect.
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-[#5B6678]">
              Recommended UI contracts for each area. Behaviors marked conditional render only
              <br />
              when the product confirms them.
            </p>
          </div>

          {/* Interactive Navigation Tabs (1619:1636) */}
          <div className="mt-8 flex flex-wrap gap-2.5">
            {Object.keys(TAB_CONTRACTS).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-5 py-2 text-[13px] font-medium transition-all ${
                  activeTab === tab
                    ? "bg-[#10213F] text-white shadow-sm"
                    : "border border-[#E2DCD0] bg-white text-[#10213F] hover:border-[#10213F]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content Display - Two Separate Cards (1619:1651) */}
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* Left Card: Contract Scope / Items (1619:1652) */}
            <div className="rounded-[14px] border border-[#E2DCD0] bg-white p-7 shadow-sm">
              <h3
                className="text-[20px] font-semibold text-[#10213F]"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                {TAB_CONTRACTS[activeTab].title}
              </h3>
              <ul className="mt-5 space-y-3">
                {TAB_CONTRACTS[activeTab].items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-[14.5px] leading-relaxed text-[#5B6678]">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#5B6678]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Card: Actions (1619:1671) */}
            <div className="rounded-[14px] border border-[#E2DCD0] bg-white p-7 shadow-sm">
              <h3
                className="text-[20px] font-semibold text-[#10213F]"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Actions
              </h3>
              <ul className="mt-5 space-y-3">
                {TAB_CONTRACTS[activeTab].actions.map((act, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-[14.5px] leading-relaxed text-[#5B6678]">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#5B6678]" />
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: KRITON™ AI ADVISOR BOUNDARY (1619:1687) ─────────────── */}
      <section className="w-full bg-[#0A1628] py-20 text-white lg:py-24">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-12 md:px-16 lg:px-[120px]">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Heading, Paragraph, CTA (1619:1690) */}
            <div className="lg:col-span-6">
              <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#E8912D]">
                Kriton™ AI Advisor boundary
              </span>
              <h2
                className="mt-2 text-[36px] font-semibold leading-[1.18] text-[#E9EDF5] sm:text-[40px] whitespace-nowrap"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                AI never outruns evidence.
              </h2>
              <p className="mt-4 max-w-[480px] text-[16px] leading-[1.65] text-[#9FAAC0]">
                Kriton™ AI Advisor is a primary navigation destination, but its
                <br />
                behavior inside Review Mode is not established here. This
                <br />
                page links to the authoritative source instead of describing
                <br />
                AI review.
              </p>
              <div className="mt-8">
                <Link
                  href="/kriton-ai"
                  className="inline-flex items-center justify-center rounded-full bg-[#E8912D] px-6 py-3.5 text-[15px] font-semibold text-[#10213F] transition-all hover:bg-[#d47d1b]"
                >
                  Go to Kriton™ AI Advisor
                </Link>
              </div>
            </div>

            {/* Right Column: Comparison Table (1619:1702) */}
            <div className="lg:col-span-6 pt-2 lg:pl-[20px]">
              <div className="w-full">
                {/* Table Header Row */}
                <div className="flex items-center border-b border-[#26395C] pb-3 text-[12px] font-bold uppercase tracking-wider text-[#B8661A]">
                  <div className="w-[236px] shrink-0 pr-4 whitespace-nowrap">May show conditionally</div>
                  <div className="flex-1 pl-4">Needs approved source</div>
                </div>
                {/* Table Data Row */}
                <div className="flex items-start border-b border-[#26395C] py-4 text-[13.5px] leading-[1.65] text-[#9FAAC0]">
                  <div className="w-[236px] shrink-0 pr-4">
                    Contextual Kriton™ link;
                    <br />
                    advisor panel shell only if
                    <br />
                    integration is confirmed
                  </div>
                  <div className="flex-1 pl-4">
                    <span className="block whitespace-nowrap">Generated findings, anomaly</span>
                    <span className="block whitespace-nowrap">detection, confidence scores,</span>
                    <span className="block whitespace-nowrap">automatic comparison, automated</span>
                    <span className="block whitespace-nowrap">disposition, accuracy claims</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: REVIEW EVIDENCE & HISTORY (1619:1717) ────────────────── */}
      <section className="w-full border-b border-[#E3DED2] py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-12 md:px-16 lg:px-[120px]">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column (1619:1718) */}
            <div className="lg:col-span-6">
              <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#B8661A]">
                Review evidence &amp; history
              </span>
              <h2
                className="mt-2 text-[36px] font-semibold leading-[1.18] text-[#10213F] sm:text-[40px]"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                <span className="whitespace-nowrap">History is part of the product</span>
                <br />
                <span className="whitespace-nowrap">story.</span>
              </h2>
              <p className="mt-4 max-w-[480px] text-[16px] leading-[1.65] text-[#5B6678]">
                Package, finding, evidence and outcome events stay
                <br />
                traceable where supported. Specimen events use neutral
                <br />
                role labels and placeholder times. No export or download
                <br />
                is shown unless a real export exists.
              </p>
            </div>

            {/* Right Column: Ordered List - Specimen History Timeline (1619:1727) */}
            <div className="lg:col-span-6 pt-2 lg:pl-[30px]">
              <div className="relative ml-4 border-l border-[#E2DCD0] pl-7 space-y-7">
                {[
                  {
                    event: "Package received",
                    desc: "Role: review participant · Time placeholder · State: received",
                  },
                  {
                    event: "Finding updated",
                    desc: "Finding 02 · Open → Addressed (example labels)",
                  },
                  {
                    event: "Evidence superseded",
                    desc: "Source A · current version replaced; review impact shown if known",
                  },
                  {
                    event: "Returned for change",
                    desc: "To Workflow Mode · unresolved findings carried across",
                  },
                ].map((evt) => (
                  <div key={evt.event} className="relative">
                    {/* Orange Hollow Circle Node (1619:1733) */}
                    <span className="absolute -left-[36px] top-1 flex h-4 w-4 rounded-full border-2 border-[#E8912D] bg-white" />
                    <h3 className="text-[16px] font-bold text-[#10213F] leading-snug">
                      {evt.event}
                    </h3>
                    <p className="mt-1 text-[13.5px] leading-relaxed text-[#5B6678] whitespace-nowrap">
                      {evt.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: WORKFLOW MODE RELATIONSHIP (1619:1750) ───────────────── */}
      <section className="w-full bg-[#F3EEE2] border-b border-[#E3DED2] py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-12 md:px-16 lg:px-[120px]">
          <div className="max-w-[780px]">
            <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#B8661A]">
              Workflow Mode relationship
            </span>
            <h2
              className="mt-2 text-[36px] font-semibold leading-[1.18] text-[#10213F] sm:text-[40px]"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Doing and checking stay distinct.
            </h2>
            <p className="mt-4 text-[17px] leading-[27.2px] text-[#5B6678]">
              <span className="block whitespace-nowrap">
                Provisional boundary: Workflow Mode structures and progresses work. Review Mode
              </span>
              <span className="block whitespace-nowrap">
                inspects it after handoff. The two remain separate destinations.
              </span>
            </p>
          </div>

          <div className="mt-10 flex flex-col md:flex-row items-center gap-[18px]">
            {/* Workflow Mode Column (1619:1760) */}
            <div className="flex w-full md:w-[547px] h-[189px] flex-col justify-between rounded-[12px] border border-[#E4DFD3] bg-white p-[22px] shadow-sm">
              <div>
                <h3
                  className="text-[19.2px] font-semibold leading-[22px] text-[#10213F]"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  Workflow Mode owns
                </h3>
                <ul className="mt-2.5 space-y-1 text-[14.5px] leading-[23.2px] text-[#5B6678]">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B6678]" />
                    <span>Definition, context, sequence, work state</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B6678]" />
                    <span>Dependencies, exceptions, evidence capture</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B6678]" />
                    <span>Progression controls and work correction</span>
                  </li>
                </ul>
              </div>
              <div>
                <Link
                  href="/learning-&-practice-mode"
                  className="text-[16px] font-semibold text-[#B8661A] hover:underline"
                >
                  Explore Workflow Mode →
                </Link>
              </div>
            </div>

            {/* Review Mode Column (1619:1774) */}
            <div className="flex w-full md:w-[547px] h-[189px] flex-col justify-start rounded-[12px] border border-[#E4DFD3] bg-white p-[22px] shadow-sm">
              <div>
                <h3
                  className="text-[19.2px] font-semibold leading-[22px] text-[#10213F]"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  Review Mode owns, as source-approved
                </h3>
                <ul className="mt-2.5 space-y-1 text-[14.5px] leading-[23.2px] text-[#5B6678]">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B6678]" />
                    <span>Intake and scope, inspection context</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B6678]" />
                    <span>Checks, findings, questions</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B6678]" />
                    <span>Outcome, return-for-change, review history</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 7: ENTERPRISE EVALUATION & TRUST (1619:1787) ───────────── */}
      <section className="w-full bg-[#FAF7F0] border-b border-[#E3DED2] py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-12 md:px-16 lg:px-[120px]">
          <div className="max-w-[780px]">
            <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#B8661A]">
              Enterprise evaluation &amp; trust
            </span>
            <h2
              className="mt-2 text-[36px] font-semibold leading-[1.18] text-[#10213F] sm:text-[40px]"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              <span className="block whitespace-nowrap">Route each question to its authoritative</span>
              <span className="block whitespace-nowrap">source.</span>
            </h2>
            <p className="mt-4 text-[17px] leading-[27.2px] text-[#5B6678]">
              Trust claims live on their own pages and are not repeated here.
            </p>
          </div>

          <div className="mt-10 flex flex-col md:flex-row items-center gap-[18px]">
            {/* Governance Card (1619:1796) */}
            <div className="flex w-full md:w-[358.67px] flex-col justify-between rounded-[12px] border border-[#E4DFD3] bg-white p-[22px] shadow-sm">
              <div>
                <h3
                  className="text-[19.2px] font-semibold leading-[22px] text-[#10213F]"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  Governance
                </h3>
                <p className="mt-2 text-[14.5px] leading-[23.2px] text-[#5B6678]">
                  How review decisions are governed.
                </p>
              </div>
              <div className="mt-3">
                <Link
                  href="/governance"
                  className="text-[16px] font-semibold text-[#B8661A] hover:underline"
                >
                  Governance →
                </Link>
              </div>
            </div>

            {/* Compliance Card (1619:1802) */}
            <div className="flex w-full md:w-[358.67px] flex-col justify-between rounded-[12px] border border-[#E4DFD3] bg-white p-[22px] shadow-sm">
              <div>
                <h3
                  className="text-[19.2px] font-semibold leading-[22px] text-[#10213F]"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  Compliance
                </h3>
                <p className="mt-2 text-[14.5px] leading-[23.2px] text-[#5B6678]">
                  What compliance evidence exists.
                </p>
              </div>
              <div className="mt-3">
                <Link
                  href="/compliance"
                  className="text-[16px] font-semibold text-[#B8661A] hover:underline"
                >
                  Compliance →
                </Link>
              </div>
            </div>

            {/* Privacy & Security Card (1619:1808) */}
            <div className="flex w-full md:w-[358.67px] flex-col justify-between rounded-[12px] border border-[#E4DFD3] bg-white p-[22px] shadow-sm">
              <div>
                <h3
                  className="text-[19.2px] font-semibold leading-[22px] text-[#10213F]"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  Privacy &amp; Security
                </h3>
                <p className="mt-2 text-[14.5px] leading-[23.2px] text-[#5B6678]">
                  How review data is protected.
                </p>
              </div>
              <div className="mt-3">
                <Link
                  href="/privacy-security"
                  className="text-[16px] font-semibold text-[#B8661A] hover:underline"
                >
                  Privacy &amp; Security →
                </Link>
              </div>
            </div>
          </div>

          {/* Technical Detail Callout (1619:1814 Background+VerticalBorder) */}
          <div className="mt-8 flex w-full max-w-[1112px] items-center rounded-r-[10px] border-l-[3px] border-[#E8912D] bg-white px-[18px] py-[13.5px] shadow-sm">
            <p className="text-[14.5px] leading-[23.2px] text-[#10213F]">
              <span className="font-bold text-[#10213F]">Technical detail:</span>{" "}
              <span className="font-normal text-[#5B6678]">
                API Reference, Release Notes, Accessibility and Provider Due Diligence appear once approved. Until then,
                technical evaluation runs<br />through sales.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 8: BUYER LENSES (1619:1816) ────────────────────────────── */}
      <section className="w-full bg-[#F3EEE2] border-b border-[#E3DED2] py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-12 md:px-16 lg:px-[120px]">
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
            <p className="mt-4 text-[17px] leading-[27.2px] text-[#5B6678]">
              Lenses help you navigate. They are not product roles, editions or permissions.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3 max-w-[1112px]">
            {[
              {
                title: "Finance / Accounting",
                desc: "Scope, source evidence, changed items, unresolved work, outcome history.",
                cta: "Book a Demo →",
                href: "/book-a-demo",
              },
              {
                title: "Controller / Reviewer",
                desc: "Inspection context, comparisons, findings, return cycle, traceability.",
                cta: "Explore Review Mode →",
                href: "#review-model",
              },
              {
                title: "Operations",
                desc: "Handoff, state visibility, unresolved work, version cycle.",
                cta: "Book a Demo →",
                href: "/book-a-demo",
              },
              {
                title: "IT / Architecture",
                desc: "Object model, permissions, events, integration boundary.",
                cta: "Contact sales →",
                href: "/contact-sales",
              },
              {
                title: "Risk / Governance",
                desc: "Evidence lineage, responsibility, findings, history.",
                cta: "Governance →",
                href: "/governance",
              },
              {
                title: "Procurement / Enterprise",
                desc: "Trust routes, evaluation path, accessibility.",
                cta: "Request Pilot →",
                href: "/request-pilot",
              },
            ].map((lens) => (
              <div
                key={lens.title}
                className="flex flex-col justify-between rounded-[12px] border border-[#E4DFD3] bg-white p-[22px] shadow-sm"
              >
                <div>
                  <h3
                    className="text-[19.2px] font-semibold leading-[22px] text-[#10213F]"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    {lens.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-[23.2px] text-[#5B6678]">{lens.desc}</p>
                </div>
                <div className="mt-4">
                  <Link
                    href={lens.href}
                    className="text-[16px] font-semibold text-[#B8661A] hover:underline"
                  >
                    {lens.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 9: EVALUATE REVIEW MODE (1619:1862) ─────────────────────── */}
      <section className="w-full bg-[#10213F] py-20 text-white lg:py-24">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-12 md:px-16 lg:px-[120px]">
          <div className="mx-auto max-w-[860px] text-center">
            <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#E8912D]">
              Evaluate Review Mode
            </span>
            <h2
              className="mt-2 text-[36px] font-semibold leading-[1.18] text-[#E9EDF5] sm:text-[40px] whitespace-nowrap"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              See how Review Mode fits your review process.
            </h2>
            <p className="mt-4 max-w-[620px] mx-auto text-[16px] leading-[25.6px] text-[#9FAAC0]">
              <span className="block">Bring the workflow handoff, evidence, review, governance, integration and</span>
              <span className="block">decision requirements that matter to your team. We will route the conversation to</span>
              <span className="block">the appropriate evaluation path.</span>
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
              Submission does not guarantee pilot availability, approval capability, automated checking, AI review or accounting outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 10: FREQUENTLY ASKED (1619:1887) ────────────────────────── */}
      <section className="w-full bg-[#FAF7F0] py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-12 md:px-16 lg:px-[120px]">
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
