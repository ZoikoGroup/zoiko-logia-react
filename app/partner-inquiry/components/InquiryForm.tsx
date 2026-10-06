"use client";

import { useEffect, useRef, useState } from "react";
import StepDetails from "./StepDetails";
import StepIntent from "./StepIntent";
import StepRelationship from "./StepRelationship";
import StepReview from "./StepReview";
import SubmittedView from "./SubmittedView";
import { INITIAL, STEPS, firstIncompleteStep, type InquiryData, type SetField } from "./formData";

/**
 * The four-step partner inquiry from the Figma frames, plus the "Form submitted" state.
 * Nothing is sent anywhere: the confirmation is a client-side preview, as its own copy says.
 */
export default function InquiryForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<InquiryData>(INITIAL);
  const [reference, setReference] = useState<string | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const mounted = useRef(false);

  const set: SetField = (key, value) => setData((d) => ({ ...d, [key]: value }));

  /* Bring the card back into view when the step changes (not on first render). */
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    cardRef.current?.scrollIntoView({ block: "start", behavior: "smooth" });
  }, [step, reference]);

  const send = () => {
    // Steps can be opened in any order, so make sure the required answers are in.
    const missing = firstIncompleteStep(data);
    if (missing) {
      setStep(missing);
      return;
    }
    setReference(`PI-${Math.floor(100000 + Math.random() * 900000)}`);
  };

  return (
    <div
      ref={cardRef}
      className="w-full max-w-[820px] scroll-mt-24 overflow-clip rounded-[16px] border border-[#e3d9c2] bg-white"
    >
      {reference ? (
        <SubmittedView reference={reference} />
      ) : (
        <>
          <ol
            aria-label="Inquiry progress"
            className="flex items-start justify-center border-b border-[#e3d9c2] bg-[#efe8d6]"
          >
            {STEPS.map((label, i) => {
              const n = i + 1;
              const current = n === step;
              const done = n < step;
              const cell = `flex min-w-0 flex-1 items-center justify-center gap-2 px-[14px] py-[13px] sm:justify-start ${
                i < STEPS.length - 1 ? "border-r border-[#e3d9c2]" : ""
              } ${current ? "bg-white shadow-[inset_0_-3px_0_0_#f59a23]" : ""}`;
              const circle = `flex h-[20.41px] w-5 shrink-0 items-center justify-center rounded-[10px] border pb-[1.41px] text-[10.5px] font-semibold leading-[16.8px] ${
                current
                  ? "border-[#071a33] bg-[#071a33] text-white"
                  : done
                    ? "border-[#049783] bg-[#049783] text-white"
                    : "border-[#e3d9c2] bg-white text-[#8b93a0]"
              }`;
              const text = `hidden whitespace-nowrap text-[11.5px] font-semibold leading-[18.4px] sm:inline ${
                current ? "text-[#071a33]" : done ? "text-[#049783]" : "text-[#8b93a0]"
              }`;
              const inner = (
                <>
                  <span className={circle}>{n}</span>
                  <span className={text}>{label}</span>
                </>
              );
              return (
                <li key={label} aria-current={current ? "step" : undefined} className="contents">
                  {current ? (
                    <span className={cell}>{inner}</span>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setStep(n)}
                      aria-label={`Go to step ${n}: ${label}`}
                      className={`${cell} cursor-pointer`}
                    >
                      {inner}
                    </button>
                  )}
                </li>
              );
            })}
          </ol>

          {step === 1 && <StepIntent data={data} set={set} onNext={() => setStep(2)} />}
          {step === 2 && (
            <StepRelationship data={data} set={set} onBack={() => setStep(1)} onNext={() => setStep(3)} />
          )}
          {step === 3 && (
            <StepDetails data={data} set={set} onBack={() => setStep(2)} onNext={() => setStep(4)} />
          )}
          {step === 4 && (
            <StepReview data={data} set={set} onBack={() => setStep(3)} onEdit={setStep} onSend={send} />
          )}
        </>
      )}
    </div>
  );
}
