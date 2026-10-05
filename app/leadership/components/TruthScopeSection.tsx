import Link from "next/link";
import Eyebrow from "./Eyebrow";
import Br from "./Br";
import ResponsiveImage from "./ResponsiveImage";
import { NW } from "./tokens";

const ROW_BASE =
  "flex w-full flex-col items-start gap-[3.2px] rounded-[10px] border border-[#e3d9c2] bg-white px-5 pb-[15px] pt-[14px] lg:flex-row lg:gap-5";
const ROW = `${ROW_BASE} lg:min-h-[52px]`;
const ROW_TALL = `${ROW_BASE} lg:min-h-[72.94px]`;
const TERM =
  "min-h-[21px] w-full text-[12.6px] font-bold leading-[20.16px] text-[#071a33] lg:w-[200px] lg:shrink-0";
const DETAIL = `w-full pb-[0.7px] text-[12.8px] leading-[20.48px] text-[#5c6672] lg:min-w-0 lg:flex-1 lg:pb-0 ${NW}`;
const INLINE_LINK = "font-bold text-[#049783] underline [text-underline-position:from-font]";

export default function TruthScopeSection() {
  return (
    <section className="mx-auto flex w-full max-w-[1200px] flex-col gap-[30.01px] px-5 pb-12 pt-[46px] lg:gap-[30px] lg:px-8 lg:pb-[66px] lg:pt-16">
      <div className="flex w-full flex-col items-center gap-12 lg:flex-row lg:justify-center">
        {/* Text — second on mobile, first on desktop */}
        <div className="order-2 flex w-full flex-col items-start gap-[13.4px] pb-[14.01px] pt-[6.9px] lg:order-1 lg:min-w-0 lg:flex-1">
          <Eyebrow>Leadership Truth &amp; Scope</Eyebrow>

          <h2
            className={`w-full font-[family-name:var(--font-serif4)] text-[25px] font-semibold leading-[32px] tracking-[-0.25px] text-[#071a33] ${NW}`}
          >
            A short note on what these
            <Br k="m" />
            profiles will, and
            <Br k="d" />
            won&apos;t, tell you.
          </h2>

          <p className={`w-full text-[14px] leading-[23.8px] text-[#5c6672] ${NW}`}>
            Read this before relying on any person&apos;s listing. It&apos;s a
            <Br k="m" />
            scope note, not a disclaimer
            <Br k="d" />
            wall.
          </p>
        </div>

        {/* Image — first on mobile, second on desktop */}
        <div className="relative order-1 h-[297.59px] w-full max-w-[480px] shrink-0 overflow-clip rounded-[14px] lg:order-2 lg:h-[435.19px] lg:w-auto lg:min-w-0 lg:max-w-none lg:flex-1">
          <ResponsiveImage
            mobile="/leadership/truth-scope-mobile.webp"
            desktop="/leadership/truth-scope-desktop.webp"
            alt="Colleagues reading a scope note together"
            sizes="(min-width: 1440px) 544px, (min-width: 1024px) 45vw, (max-width: 520px) 100vw, 480px"
          />
        </div>
      </div>

      <dl className="flex w-full flex-col gap-2">
        <div className={ROW}>
          <dt className={TERM}>What this page contains</dt>
          <dd className={DETAIL}>
            Current public leadership profiles that have passed
            <Br k="m" />
            identity, role, scope and publication approval.
          </dd>
        </div>

        <div className={ROW_TALL}>
          <dt className={TERM}>What it does not prove</dt>
          <dd className={DETAIL}>
            A title does not by itself prove legal authority, board
            <Br k="m" />
            membership, founder status, ownership, reporting
            <Br k="m" />
            lines, signing authority or meeting
            <Br k="d" />
            availability.
          </dd>
        </div>

        <div className={ROW}>
          <dt className={TERM}>Governance</dt>
          <dd className={DETAIL}>
            For governance mechanisms, policies and decision-
            <Br k="m" tight />
            control context, use{" "}
            <Link href="/governance" className={INLINE_LINK}>
              Governance
            </Link>
            .
          </dd>
        </div>

        <div className={ROW}>
          <dt className={TERM}>Trust</dt>
          <dd className={DETAIL}>
            For enterprise evidence and specialist trust topics,
            <Br k="m" />
            use{" "}
            <Link href="/compliance" className={INLINE_LINK}>
              Trust
            </Link>{" "}
            and the destination that owns your
            <Br k="m" />
            question.
          </dd>
        </div>

        <div className={ROW_TALL}>
          <dt className={TERM}>Contact</dt>
          <dd className={DETAIL}>
            Use organization-level routes for commercial,
            <Br k="m" />
            enterprise, partnership or procurement needs.
            <Br k="m" />
            Personal contact information is not implied or
            <Br k="md" />
            published.
          </dd>
        </div>

        <div className={ROW}>
          <dt className={TERM}>Currentness</dt>
          <dd className={DETAIL}>
            Profile visibility follows the approved current state. A
            <Br k="m" />
            review date is shown only where one is maintained.
          </dd>
        </div>
      </dl>
    </section>
  );
}
