/**
 * Inline arrow used in place of the "→" glyph: Inter's latin subset omits U+2192,
 * so the character would otherwise fall back to a different font.
 */
export default function ArrowRight() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 10 10"
      className="ml-[0.3em] inline-block h-[0.72em] w-[0.72em] align-baseline"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M0.8 5h8.4M6 1.8 9.2 5 6 8.2" />
    </svg>
  );
}
