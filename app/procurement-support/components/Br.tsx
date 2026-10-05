/**
 * A line break that only exists at the width of a Figma frame.
 *   m  – mobile frame (412–479px)
 *   d  – desktop frame (1440px and up)
 *   md – both
 *   t  – every width below the desktop layout (used inside the horizontally scrolling table)
 *   td – the table break that also applies on the desktop frame
 * A space is rendered before the break so the words stay separated when the break is hidden.
 * Use `tight` for a break that follows a hyphen ("decision-" / "control").
 */
type Kind = "m" | "d" | "md" | "t" | "td";

const CLASSES: Record<Kind, string> = {
  m: "hidden min-[412px]:max-[479px]:inline",
  d: "hidden min-[1440px]:inline",
  md: "hidden min-[412px]:max-[479px]:inline min-[1440px]:inline",
  t: "lg:hidden",
  td: "lg:hidden min-[1440px]:inline",
};

export default function Br({ k, tight = false }: { k: Kind; tight?: boolean }) {
  return (
    <>
      {!tight && " "}
      <br className={CLASSES[k]} />
    </>
  );
}
