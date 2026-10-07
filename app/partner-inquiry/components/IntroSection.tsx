import Eyebrow from "./Eyebrow";
import Br from "./Br";

export default function IntroSection() {
  return (
    <div className="flex w-full max-w-[720px] flex-col items-start gap-[10px] pt-[6.9px]">
      <Eyebrow>Partner Inquiry</Eyebrow>

      <h1
        className={`w-full pt-[3.69px] font-[family-name:var(--font-serif4)] text-[28px] font-semibold leading-[34px] tracking-[-0.28px] text-[#071a33] sm:text-[32px] sm:leading-[38.4px] sm:tracking-[-0.32px] min-[1440px]:whitespace-nowrap`}
      >
        Explore a potential partnership with ZoikoLogia™.
      </h1>

      <p className={`w-full text-[14px] leading-[23.1px] text-[#5c6672] min-[1440px]:whitespace-nowrap`}>
        Share the relationship you&apos;d like to explore. An inquiry starts a review conversation only; it does not create
        <Br k="d" />
        partner status, integration, certification, resale or referral rights, commercial terms or program benefits.
      </p>
    </div>
  );
}
