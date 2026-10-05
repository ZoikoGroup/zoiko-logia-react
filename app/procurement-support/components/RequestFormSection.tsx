"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Eyebrow from "./Eyebrow";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import Br from "./Br";
import { NW } from "./tokens";

/* ───────────────────────── data ───────────────────────── */

const STEPS = ["Need", "Process context", "Your details", "Review & send"];

const NEEDS = [
  {
    id: "starting-procurement",
    title: "Starting procurement",
    description: (
      <>
        Questions about how to begin a procurement
        <Br k="m" />
        process.
      </>
    ),
  },
  {
    id: "forms-or-supplier-setup",
    title: "Forms or supplier setup",
    description: (
      <>
        Questions about a form or setup topic. No
        <Br k="m" />
        documents are collected here.
      </>
    ),
  },
  {
    id: "contracting-coordination",
    title: "Contracting coordination",
    description: (
      <>
        Process questions about contracting next steps.
        <Br k="m" />
        Please don&apos;t paste contract clauses.
      </>
    ),
  },
  {
    id: "existing-follow-up",
    title: "Existing procurement follow-up",
    description: "Following up on something already in progress.",
  },
  {
    id: "purchase-or-administrative",
    title: "Purchase or administrative process",
    description: (
      <>
        High-level administrative process topics. Never
        <Br k="m" />
        bank, tax or payment details.
      </>
    ),
  },
  {
    id: "other-process-question",
    title: "Other procurement process question",
    description: "Anything else about procurement process.",
  },
];

const NEED_TITLE = Object.fromEntries(NEEDS.map((n) => [n.id, n.title]));

/** Related-source options; `href` makes the review step link to the owning page. */
const SOURCES = [
  { value: "None", href: "" },
  { value: "Provider Due Diligence", href: "/buyers-brief" },
  { value: "Trust", href: "/compliance" },
  { value: "Compliance", href: "/compliance" },
  { value: "Privacy & Security", href: "/privacy-security" },
  { value: "Accessibility", href: "/compliance" },
  { value: "API Reference", href: "/documentation" },
  { value: "Release Notes", href: "/documentation" },
];

const RELATIONSHIPS = [
  "Prefer not to say",
  "Prospective customer",
  "Existing customer",
  "Evaluator or reviewer",
  "Partner or ecosystem",
  "Other",
];

const SIDE_LINKS = [
  { label: "Provider Due Diligence", href: "/buyers-brief" },
  { label: "Trust hub", href: "/compliance" },
  { label: "Compliance", href: "/compliance" },
  { label: "Privacy & Security", href: "/privacy-security" },
  { label: "Accessibility", href: "/compliance" },
  { label: "API Reference", href: "/documentation" },
];

interface FormData {
  need: string;
  question: string;
  source: string;
  reference: string;
  targetDate: string;
  name: string;
  email: string;
  organization: string;
  role: string;
  relationship: string;
  acknowledged: boolean;
}

const INITIAL: FormData = {
  need: "",
  question: "",
  source: "None",
  reference: "",
  targetDate: "",
  name: "",
  email: "",
  organization: "",
  role: "",
  relationship: RELATIONSHIPS[0],
  acknowledged: false,
};

const QUESTION_MAX = 500;

/* ───────────────────────── shared styles ───────────────────────── */

const INPUT =
  "w-full rounded-[8px] border border-[#e3d9c2] bg-white px-3 text-[13.5px] text-[#12202f] outline-none transition-colors placeholder:text-[#757575] focus:border-[#f59a23]";
const FIELD_HEIGHT = "h-[38px]";
const SELECT = `${INPUT} ${FIELD_HEIGHT} appearance-none pl-4 pr-8 bg-[length:10px] bg-[right_12px_center] bg-no-repeat bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6' fill='none' stroke='%2312202f' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M1 1l4 4 4-4'/%3E%3C/svg%3E")]`;
const BUTTON_BASE =
  "rounded-[6px] border px-5 py-[11px] text-[13.5px] font-semibold text-[#071a33] transition-opacity";
const BUTTON_GHOST = `${BUTTON_BASE} border-[#e3d9c2] bg-transparent hover:border-[#cdbf9f]`;
const BUTTON_PRIMARY = `${BUTTON_BASE} border-transparent bg-[#f59a23] hover:opacity-90`;
const KICKER = "w-full pb-[0.59px] text-[11px] font-bold uppercase leading-[17.6px] tracking-[0.66px] text-[#049783]";
const STEP_TITLE =
  "w-full font-[family-name:var(--font-serif4)] text-[21px] font-semibold leading-[33.6px] tracking-[-0.21px] text-[#071a33] outline-none";
const LEAD = `w-full text-[12.8px] leading-[20.48px] text-[#5c6672] ${NW}`;

/* ───────────────────────── small pieces ───────────────────────── */

function StepBubble({ n, state }: { n: number; state: "done" | "current" | "todo" }) {
  const styles = {
    done: "border-[#049783] bg-[#049783] text-white",
    current: "border-[#071a33] bg-[#071a33] text-white",
    todo: "border-[#e3d9c2] bg-white text-[#8b93a0]",
  } as const;
  return (
    <span
      className={`flex h-[20.41px] w-5 shrink-0 items-center justify-center rounded-[10px] border pb-[1.41px] text-[10.5px] font-semibold leading-[16.8px] ${styles[state]}`}
    >
      {n}
    </span>
  );
}

function Label({
  htmlFor,
  required,
  hint,
  children,
}: {
  htmlFor?: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="flex items-end gap-1 whitespace-nowrap">
      <span className="text-[12.6px] font-semibold leading-[20.16px] text-[#123055]">
        {children}
        {required && <span className="text-[#d97f0e]"> *</span>}
      </span>
      {hint && <span className="text-[11.5px] font-medium leading-[18.4px] text-[#8b93a0]">({hint})</span>}
    </label>
  );
}

function Notice({ children }: { children: React.ReactNode }) {
  return (
    <p className="w-full rounded-br-[8px] rounded-tr-[8px] border-l-[3px] border-[#f59a23] bg-[rgba(245,154,35,0.08)] px-[14px] py-[10.5px] text-[11.8px] leading-[18.29px] text-[#123055]">
      {children}
    </p>
  );
}

function SummaryCard({
  title,
  onEdit,
  children,
}: {
  title: string;
  onEdit: () => void;
  children: React.ReactNode;
}) {
  return (
    <section className="flex w-full flex-col gap-2 rounded-[10px] border border-[#e3d9c2] px-4 py-[14px]">
      <div className="flex items-center justify-between gap-4">
        <h4 className="text-[11px] font-bold uppercase leading-[17.6px] tracking-[0.55px] text-[#8b93a0]">
          {title}
        </h4>
        <button
          type="button"
          onClick={onEdit}
          className="text-[12px] font-semibold text-[#049783] hover:underline"
        >
          Edit
        </button>
      </div>
      <dl className="flex flex-col">{children}</dl>
    </section>
  );
}

function SummaryRow({ term, first, children }: { term: string; first?: boolean; children: React.ReactNode }) {
  return (
    <>
      <dt className={`text-[11.5px] leading-[18.4px] text-[#8b93a0] ${first ? "" : "pt-[6px]"}`}>{term}</dt>
      <dd className="break-words text-[13px] leading-[20.8px] text-[#071a33]">{children}</dd>
    </>
  );
}

/* ───────────────────────── section ───────────────────────── */

export default function RequestFormSection() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(INITIAL);
  const [sent, setSent] = useState(false);
  const headingRef = useRef<HTMLElement>(null);
  const mounted = useRef(false);

  const set = <K extends keyof FormData>(key: K, value: FormData[K]) =>
    setData((d) => ({ ...d, [key]: value }));

  /* Move focus to the new step's heading (not on first render). */
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    headingRef.current?.focus({ preventScroll: true });
    headingRef.current?.scrollIntoView({ block: "center", behavior: "smooth" });
  }, [step, sent]);

  const next = (e: React.FormEvent) => {
    e.preventDefault(); // native `required` validation has already passed
    if (step < 4) {
      setStep(step + 1);
      return;
    }
    // Steps can be opened in any order, so make sure earlier required fields are filled.
    if (!data.need) setStep(1);
    else if (!data.question.trim()) setStep(2);
    else if (!data.name.trim() || !data.email.trim() || !data.organization.trim()) setStep(3);
    else setSent(true);
  };

  const restart = () => {
    setData(INITIAL);
    setSent(false);
    setStep(1);
  };

  const source = SOURCES.find((s) => s.value === data.source);

  return (
    <section
      id="request-form"
      className="scroll-mt-20 border-t border-[#e3d9c2] bg-[#efe8d6] py-[46px] lg:scroll-mt-24 lg:px-[120px] lg:py-16"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-7 px-5 lg:px-8">
        <div className="flex w-full max-w-[700px] flex-col items-start gap-[10px] pb-[1.2px] pt-[6.91px] lg:pb-0 lg:pt-[6.9px]">
          <Eyebrow>Procurement Support Request</Eyebrow>

          <h2
            className={`w-full pt-[2.815px] font-[family-name:var(--font-serif4)] text-[26px] font-semibold leading-[33.28px] tracking-[-0.26px] text-[#071a33] lg:pt-[2.69px] ${NW}`}
          >
            Four short steps. Only the
            <Br k="m" />
            essentials are required.
          </h2>

          <p className={`w-full text-[14px] leading-[23.1px] text-[#5c6672] ${NW}`}>
            Choose your need, describe the process question, tell
            <Br k="m" />
            us how to reply, then review. You can go back at
            <Br k="d" />
            any
            <Br k="m" />
            point without losing what you&apos;ve entered.
          </p>
        </div>

        <div className="flex w-full flex-col gap-[31.99px] lg:grid lg:grid-cols-[minmax(0,1.45fr)_minmax(0,0.55fr)] lg:items-start lg:gap-8">
          {/* Form card */}
          <div className="w-full overflow-clip rounded-[16px] border border-[#e3d9c2] bg-white">
            <ol
              aria-label="Request progress"
              className="flex items-start justify-center border-b border-[#e3d9c2] bg-[#efe8d6]"
            >
              {STEPS.map((label, i) => {
                const n = i + 1;
                const current = !sent && n === step;
                const done = sent || n < step;
                const state = current ? "current" : done ? "done" : "todo";
                const labelColor = current ? "text-[#071a33]" : done ? "text-[#049783]" : "text-[#8b93a0]";
                const cell = `relative flex min-w-0 flex-1 items-center justify-center py-3 pl-[31.75px] pr-[39.75px] lg:justify-start lg:gap-2 lg:px-[14px] lg:py-[13px] ${
                  i < STEPS.length - 1 ? "border-r border-[#e3d9c2]" : ""
                } ${current ? "bg-white shadow-[inset_0_-3px_0_0_#f59a23]" : ""}`;
                const content = (
                  <>
                    <StepBubble n={n} state={state} />
                    <span
                      className={`hidden whitespace-nowrap text-[11.5px] font-semibold leading-[18.4px] lg:inline ${labelColor}`}
                    >
                      {label}
                    </span>
                  </>
                );
                return (
                  <li key={label} aria-current={current ? "step" : undefined} className="contents">
                    {!sent && !current ? (
                      <button
                        type="button"
                        onClick={() => setStep(n)}
                        aria-label={`Go to step ${n}: ${label}`}
                        className={`${cell} cursor-pointer`}
                      >
                        {content}
                      </button>
                    ) : (
                      <span className={cell}>{content}</span>
                    )}
                  </li>
                );
              })}
            </ol>

            {sent ? (
              <div className="flex flex-col items-start gap-[5px] px-[18px] pb-[26px] pt-[21px] lg:px-[30px] lg:pt-[27px]">
                <p className={KICKER}>Request ready</p>
                <h3
                  ref={headingRef as React.RefObject<HTMLHeadingElement>}
                  tabIndex={-1}
                  className={STEP_TITLE}
                >
                  Thank you, {data.name.trim() || "there"}.
                </h3>
                <p className="w-full text-[12.8px] leading-[20.48px] text-[#5c6672]">
                  Your request has been captured for routing to {NEED_TITLE[data.need] ?? "the right team"}. We&apos;ll
                  reply to {data.email}. Submission does not confirm procurement approval, contract acceptance,
                  onboarding, response time or commercial terms.
                </p>
                <div className="mt-5 flex w-full border-t border-[#e3d9c2] pt-5">
                  <button type="button" onClick={restart} className={BUTTON_GHOST}>
                    Start a new request
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={next}
                className="flex flex-col px-[18px] pb-[22.01px] pt-[21px] lg:px-[30px] lg:pb-[26px] lg:pt-[27px]"
              >
                {/* ───────── Step 1 ───────── */}
                {step === 1 && (
                  <fieldset className="flex flex-col gap-[5px] lg:gap-[5.2px]">
                    <p className={KICKER}>Step 1 of 4 · Procurement need</p>

                    <legend
                      ref={headingRef as React.RefObject<HTMLLegendElement>}
                      tabIndex={-1}
                      className={`${STEP_TITLE} pt-px lg:pt-[0.8px]`}
                    >
                      What do you need help with?
                    </legend>

                    <p className={LEAD}>
                      Pick the closest match. Selecting a need doesn&apos;t
                      <Br k="m" />
                      confirm that a process step exists for your situation;
                      <Br k="m" />
                      the responsible
                      <Br k="d" />
                      team confirms that.
                    </p>

                    <div
                      role="radiogroup"
                      aria-labelledby="procurement-need-label"
                      className="flex flex-col gap-[6px] pb-[19px] pt-[14px] lg:pb-[18.8px] lg:pt-[13.8px]"
                    >
                      <p
                        id="procurement-need-label"
                        className="w-full text-[12.6px] font-semibold leading-[20.16px] text-[#123055]"
                      >
                        Procurement need <span className="text-[#d97f0e]">*</span>
                      </p>

                      {NEEDS.map((n, idx) => (
                        <label
                          key={n.id}
                          className={`relative flex cursor-pointer flex-col gap-px rounded-[10px] border border-[#e3d9c2] bg-white pb-[14.5px] pl-11 pr-4 transition-colors has-[:checked]:border-[#f59a23] hover:border-[#cdbf9f] lg:pb-[13px] ${
                            idx === 0 ? "pt-3 lg:min-h-[68px]" : "pt-[14px] lg:min-h-[70px]"
                          }`}
                        >
                          <input
                            type="radio"
                            name="procurement-need"
                            value={n.id}
                            required
                            checked={data.need === n.id}
                            onChange={() => set("need", n.id)}
                            className={`absolute left-[21px] size-4 cursor-pointer appearance-none rounded-full border border-[#767676] bg-white checked:border-[5px] checked:border-[#f59a23] ${idx === 0 ? "top-[19px]" : "top-[21px]"}`}
                          />
                          <span className="text-[13.3px] font-bold leading-[21.28px] text-[#071a33]">
                            {n.title}
                          </span>
                          <span className={`text-[11.8px] leading-[17.11px] text-[#5c6672] ${NW}`}>
                            {n.description}
                          </span>
                        </label>
                      ))}
                    </div>
                  </fieldset>
                )}

                {/* ───────── Step 2 ───────── */}
                {step === 2 && (
                  <fieldset className="flex flex-col gap-[5px]">
                    <p className={KICKER}>Step 2 of 4 · Process context</p>

                    <legend
                      ref={headingRef as React.RefObject<HTMLLegendElement>}
                      tabIndex={-1}
                      className={`${STEP_TITLE} pt-px`}
                    >
                      What&apos;s the process question?
                    </legend>

                    <p className="w-full pb-[15px] text-[12.8px] leading-[20.48px] text-[#5c6672]">
                      Describe the next step you&apos;re trying to complete, in plain language.
                    </p>

                    <Notice>
                      Do not include credentials, bank or tax details, contracts, or customer, employee or
                      production data.
                    </Notice>

                    <div className="flex flex-col gap-[6px] pt-3">
                      <Label htmlFor="pr-question" required>
                        Process question
                      </Label>
                      <textarea
                        id="pr-question"
                        required
                        maxLength={QUESTION_MAX}
                        value={data.question}
                        onChange={(e) => set("question", e.target.value)}
                        className={`${INPUT} h-[102px] resize-none py-[10px]`}
                      />
                      <p className="pt-[4.6px] text-right text-[11px] leading-[17.6px] text-[#8b93a0]">
                        {data.question.length} / {QUESTION_MAX}
                      </p>
                    </div>

                    <div className="flex flex-col gap-[6px] pt-[11px]">
                      <Label htmlFor="pr-source" hint="optional">
                        Related source
                      </Label>
                      <select
                        id="pr-source"
                        value={data.source}
                        onChange={(e) => set("source", e.target.value)}
                        className={SELECT}
                      >
                        {SOURCES.map((s) => (
                          <option key={s.value}>{s.value}</option>
                        ))}
                      </select>
                    </div>

                    <div className="flex flex-col gap-[6px] pt-[11px]">
                      <Label htmlFor="pr-reference" hint="optional; public-safe only">
                        Record or link reference
                      </Label>
                      <input
                        id="pr-reference"
                        type="text"
                        value={data.reference}
                        onChange={(e) => set("reference", e.target.value)}
                        placeholder="e.g. a public page link or record title"
                        className={`${INPUT} ${FIELD_HEIGHT}`}
                      />
                    </div>

                    <div className="flex flex-col gap-[6px] pb-[19px] pt-[11px]">
                      <Label htmlFor="pr-date" hint="optional; planning only">
                        Target date or horizon
                      </Label>
                      <input
                        id="pr-date"
                        type="date"
                        value={data.targetDate}
                        onChange={(e) => set("targetDate", e.target.value)}
                        className={`${INPUT} ${FIELD_HEIGHT}`}
                      />
                    </div>
                  </fieldset>
                )}

                {/* ───────── Step 3 ───────── */}
                {step === 3 && (
                  <fieldset className="flex flex-col gap-[5px]">
                    <p className={KICKER}>Step 3 of 4 · Your details</p>

                    <legend
                      ref={headingRef as React.RefObject<HTMLLegendElement>}
                      tabIndex={-1}
                      className={`${STEP_TITLE} pt-[6px]`}
                    >
                      How should we reply?
                    </legend>

                    <p className="w-full pt-[5px] text-[12.8px] leading-[20.48px] text-[#5c6672]">
                      The minimum needed to route and respond to your request.
                    </p>

                    <div className="grid grid-cols-1 gap-x-[14px] gap-y-4 pb-6 pt-5 sm:grid-cols-2">
                      <div className="flex flex-col gap-[6px]">
                        <Label htmlFor="pr-name" required>
                          Name
                        </Label>
                        <input
                          id="pr-name"
                          type="text"
                          required
                          autoComplete="name"
                          value={data.name}
                          onChange={(e) => set("name", e.target.value)}
                          className={`${INPUT} ${FIELD_HEIGHT}`}
                        />
                      </div>
                      <div className="flex flex-col gap-[6px]">
                        <Label htmlFor="pr-email" required>
                          Email
                        </Label>
                        <input
                          id="pr-email"
                          type="email"
                          required
                          autoComplete="email"
                          value={data.email}
                          onChange={(e) => set("email", e.target.value)}
                          className={`${INPUT} ${FIELD_HEIGHT}`}
                        />
                      </div>
                      <div className="flex flex-col gap-[6px]">
                        <Label htmlFor="pr-org" required>
                          Organization
                        </Label>
                        <input
                          id="pr-org"
                          type="text"
                          required
                          autoComplete="organization"
                          value={data.organization}
                          onChange={(e) => set("organization", e.target.value)}
                          className={`${INPUT} ${FIELD_HEIGHT}`}
                        />
                      </div>
                      <div className="flex flex-col gap-[6px]">
                        <Label htmlFor="pr-role" hint="optional">
                          Role / function
                        </Label>
                        <input
                          id="pr-role"
                          type="text"
                          autoComplete="organization-title"
                          value={data.role}
                          onChange={(e) => set("role", e.target.value)}
                          className={`${INPUT} ${FIELD_HEIGHT}`}
                        />
                      </div>
                      <div className="flex flex-col gap-[6px] sm:col-span-2">
                        <Label htmlFor="pr-relationship" hint="optional">
                          Relationship to ZoikoLogia™
                        </Label>
                        <select
                          id="pr-relationship"
                          value={data.relationship}
                          onChange={(e) => set("relationship", e.target.value)}
                          className={SELECT}
                        >
                          {RELATIONSHIPS.map((r) => (
                            <option key={r}>{r}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </fieldset>
                )}

                {/* ───────── Step 4 ───────── */}
                {step === 4 && (
                  <fieldset className="flex flex-col gap-[5px]">
                    <p className={KICKER}>Step 4 of 4 · Review &amp; send</p>

                    <legend
                      ref={headingRef as React.RefObject<HTMLLegendElement>}
                      tabIndex={-1}
                      className={`${STEP_TITLE} pt-px`}
                    >
                      Check your request
                    </legend>

                    <p className="w-full text-[12.8px] leading-[20.48px] text-[#5c6672]">
                      Edit anything before you send.
                    </p>

                    <div className="flex flex-col gap-3 pb-[7px] pt-[15px]">
                      <SummaryCard title="Need" onEdit={() => setStep(1)}>
                        <SummaryRow term="Procurement need" first>
                          {NEED_TITLE[data.need]}
                        </SummaryRow>
                      </SummaryCard>

                      <SummaryCard title="Process question" onEdit={() => setStep(2)}>
                        <SummaryRow term="Question" first>
                          <span className="whitespace-pre-wrap">{data.question}</span>
                        </SummaryRow>
                      </SummaryCard>

                      <SummaryCard title="Source context & timing" onEdit={() => setStep(2)}>
                        <SummaryRow term="Related source" first>
                          {source?.href ? (
                            <>
                              {data.source} (
                              <Link href={source.href} className="font-semibold text-[#049783] hover:underline">
                                open
                              </Link>
                              )
                            </>
                          ) : (
                            data.source
                          )}
                        </SummaryRow>
                        {data.reference.trim() && (
                          <SummaryRow term="Record or link reference">{data.reference}</SummaryRow>
                        )}
                        <SummaryRow term="Target date">{data.targetDate || "Not specified"}</SummaryRow>
                      </SummaryCard>

                      <SummaryCard title="Requester" onEdit={() => setStep(3)}>
                        <SummaryRow term="Name" first>
                          {data.name}
                        </SummaryRow>
                        <SummaryRow term="Email">{data.email}</SummaryRow>
                        <SummaryRow term="Organization">{data.organization}</SummaryRow>
                        {data.role.trim() && <SummaryRow term="Role / function">{data.role}</SummaryRow>}
                        {data.relationship !== RELATIONSHIPS[0] && (
                          <SummaryRow term="Relationship to ZoikoLogia™">{data.relationship}</SummaryRow>
                        )}
                      </SummaryCard>
                    </div>

                    <Notice>
                      Do not submit confidential contracts, credentials, bank or tax details, or customer or
                      production data through this public form.
                    </Notice>

                    <label className="flex cursor-pointer items-start gap-2 py-[13px] text-[12px] font-medium leading-[18.6px] text-[#5c6672]">
                      <input
                        type="checkbox"
                        required
                        checked={data.acknowledged}
                        onChange={(e) => set("acknowledged", e.target.checked)}
                        className="mt-[1px] size-4 shrink-0 cursor-pointer appearance-none rounded-[2.5px] border border-[#767676] bg-white checked:border-[#049783] checked:bg-[#049783] checked:bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2016%2016%27%20fill=%27none%27%20stroke=%27white%27%20stroke-width=%272%27%20stroke-linecap=%27round%27%20stroke-linejoin=%27round%27%3E%3Cpath%20d=%27M4%208.5l2.5%202.5L12%205.5%27/%3E%3C/svg%3E')]"
                      />
                      <span>
                        I acknowledge the{" "}
                        <Link
                          href="/privacy-security"
                          className="font-semibold text-[#049783] underline [text-underline-position:from-font]"
                        >
                          privacy information
                        </Link>{" "}
                        and agree to be contacted about this request. <span className="text-[#d97f0e]">*</span>
                      </span>
                    </label>
                  </fieldset>
                )}

                {/* ───────── Actions ───────── */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#e3d9c2] pt-5">
                  {step === 1 ? (
                    <Link
                      href="#choose-path"
                      className="text-[16px] font-semibold leading-[25.6px] text-[#049783] whitespace-nowrap"
                    >
                      <ArrowLeft />
                      Back to path choice
                    </Link>
                  ) : (
                    <button type="button" onClick={() => setStep(step - 1)} className={BUTTON_GHOST}>
                      Back
                    </button>
                  )}

                  <button type="submit" className={BUTTON_PRIMARY}>
                    {step === 3 ? "Review request" : step === 4 ? "Send Procurement Support Request" : "Continue"}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Aside */}
          <aside className="flex w-full flex-col items-start rounded-[14px] border border-[#e3d9c2] bg-white px-5 pb-[30px] pt-[19px] lg:sticky lg:top-24">
            <h3 className="w-full pb-[0.59px] text-[13.5px] font-bold leading-[21.6px] tracking-[-0.138px] text-[#071a33]">
              Evidence is open, no form needed
            </h3>
            <p className={`w-full pb-3 pt-[4.8px] text-[12px] leading-[18.6px] text-[#5c6672] ${NW}`}>
              Procurement Support never sits between you
              <Br k="d" />
              and public
              <Br k="m" />
              evidence.
            </p>

            {SIDE_LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="flex w-full items-end justify-between border-t border-[#e3d9c2] pb-[10.24px] pt-2 text-[12.6px] font-semibold leading-[20.16px] text-[#123055] transition-colors hover:text-[#049783]"
              >
                <span className="whitespace-nowrap">{l.label}</span>
                <span aria-hidden className="text-[12.6px]">
                  <ArrowRight />
                </span>
              </Link>
            ))}

            <p className={`w-full pt-3 text-[11px] leading-[16.5px] text-[#8b93a0] ${NW}`}>
              No upload is accepted here. If a document
              <Br k="d" />
              exchange is ever
              <Br k="m" />
              required, it will be confirmed
              <Br k="d" />
              through an approved controlled
              <Br k="m" />
              channel.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
