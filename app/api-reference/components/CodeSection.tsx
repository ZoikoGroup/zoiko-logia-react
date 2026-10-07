"use client";

import { useState } from "react";
import SectionHead, { Br } from "./SectionHead";
import { Block, InfoCards } from "./ui";

const SPECIMEN = [
  "// Layout specimen only. Not a real interface.",
  "POST https://example.invalid/resource",
  "{",
  '  "example": "source-controlled fields would appear here"',
  "}",
].join("\n");

const CARDS = [
  {
    label: "Credentials",
    title: "Never in examples",
    text: "No tokens, secrets, certificates, tenant IDs or signed material, ever.",
  },
  {
    label: "Copy",
    title: "Sanitized content only",
    text: "Copying announces success or failure, and the text stays selectable.",
  },
  {
    label: "Downloads",
    title: "Only if public",
    text: "No spec or schema download unless an approved public artifact exists.",
  },
];

export default function CodeSection() {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(SPECIMEN);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
    setTimeout(() => setStatus("idle"), 2000);
  };

  return (
    <Block id="code" gap="gap-4">
      <SectionHead
        n={9}
        title="Code and payloads, clearly labeled."
        lead={
          <>
            Anything not copied from an approved governed source is marked as illustrative. It demonstrates
            <Br k="d" />
            layout only.
          </>
        }
      />

      <div className="w-full overflow-clip rounded-[14px] border border-[#1f3a5c] bg-[#071a33] pt-2">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#1f3a5c] px-4 py-[11px]">
          <p className="text-[10.5px] font-bold uppercase leading-[16.8px] tracking-[0.525px] text-[#f59a23]">
            Illustrative example · not production syntax
          </p>
          <button
            type="button"
            onClick={copy}
            className="cursor-pointer rounded-[6px] border border-white/20 bg-white/[0.06] px-3 py-[5px] text-[11.8px] font-semibold text-[#c3cfdb] transition-opacity hover:opacity-90"
          >
            {status === "copied" ? "Copied" : status === "failed" ? "Copy failed" : "Copy"}
          </button>
        </div>
        <span role="status" aria-live="polite" className="sr-only">
          {status === "copied" ? "Copied to clipboard" : status === "failed" ? "Copy failed" : ""}
        </span>

        <pre className="overflow-x-auto px-5 py-[18px] font-mono text-[12.8px] leading-[22.4px] whitespace-pre-wrap text-[#b7e8dd]">
          <span className="text-[#6b8097]">{"// Layout specimen only. Not a real interface."}</span>
          {"\n"}
          <span className="text-[#f59a23]">POST</span>
          {" https://example.invalid/resource\n{\n  \"example\": \"source-controlled fields would appear here\"\n}"}
        </pre>

        <p className="border-t border-[#1f3a5c] px-4 pb-[10.75px] pt-[10.5px] text-[11.4px] leading-[18.24px] text-[#8ca0b8]">
          The host is a deliberately non-production placeholder. Language tabs and SDK examples appear only when
          approved examples exist.
        </p>
      </div>

      <InfoCards cards={CARDS} />
    </Block>
  );
}
