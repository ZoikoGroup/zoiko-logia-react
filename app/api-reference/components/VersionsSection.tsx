import SectionHead from "./SectionHead";
import { Block, Pill } from "./ui";

function CubeIcon() {
  return (
    <svg aria-hidden width="22" height="22" viewBox="0 0 22 22" fill="none" className="size-[22px]">
      <path d="M11 2.75l7.333 4.125v8.25L11 19.25 3.667 15.125v-8.25L11 2.75Z" stroke="#123055" strokeWidth="1.46667" />
      <path d="M11 11l7.333-4.125M11 11v8.25M11 11 3.667 6.875" stroke="#123055" strokeWidth="1.46667" />
    </svg>
  );
}

export default function VersionsSection() {
  return (
    <Block id="versions" gap="gap-6">
      <SectionHead
        n={3}
        title="No version selector until a version is actually established."
        lead={`A selector isn't permission to invent "v1", "latest", "stable", support windows or sunset dates.`}
      />

      <div className="flex w-full flex-col gap-5 rounded-[16px] border border-dashed border-[#cdbf9f] bg-white p-5 sm:flex-row sm:gap-5 sm:px-7 sm:pb-7 sm:pt-[25px]">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-[12px] bg-[#efe8d6] sm:mt-px">
          <CubeIcon />
        </span>

        <div className="flex min-w-0 flex-1 flex-col gap-[6px]">
          <h3 className="pb-[0.8px] font-[family-name:var(--font-serif4)] text-[18px] font-semibold leading-[28.8px] tracking-[-0.27px] text-[#071a33]">
            No public contract context is currently published
          </h3>
          <p className="pb-2 text-[13px] leading-[22.1px] text-[#5c6672]">
            When a version or environment is source-established, a selector will appear here, defaulting only to a
            context the technical source designates. An unavailable context shows an explicit state and never silently
            redirects to another contract. Seeing a context is never evidence of your entitlement or environment access.
          </p>
          <div className="flex w-fit max-w-full flex-wrap items-center gap-[10px] rounded-[8px] border border-[#e3d9c2] bg-[#f7f3ea] px-[14px] py-[9px]">
            <Pill tone="neutral">Not available</Pill>
            <span className="text-[12.4px] leading-[19.84px] text-[#8b93a0]">
              Context selector hidden until a source exists
            </span>
          </div>
        </div>
      </div>
    </Block>
  );
}
