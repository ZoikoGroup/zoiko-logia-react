/**
 * Figma frames: desktop 1440px, mobile 412px. The layout switches at Tailwind's `lg` (1024px).
 *
 * Hard line breaks (<Br />) and no-wrap are applied only at the design widths — 412–479px for the
 * mobile frame and 1440px+ for the desktop frame — so the text breaks exactly as in Figma there,
 * and wraps naturally everywhere else (no overflow on a 360px phone, a tablet or a 1100px laptop).
 */
export const NW =
  "min-[412px]:max-[479px]:whitespace-nowrap min-[1440px]:whitespace-nowrap";

/** Table cells never wrap on the phone layout (the table scrolls), and only at 1440px+ on desktop. */
export const TABLE_NW =
  "whitespace-nowrap lg:whitespace-normal min-[1440px]:whitespace-nowrap";
