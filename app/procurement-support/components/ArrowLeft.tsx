/** Inline "←" arrow (Inter's latin subset omits U+2190, so the glyph would fall back to another font). */
export default function ArrowLeft() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 10 10"
      className="mr-[0.4em] inline-block h-[0.72em] w-[0.72em] align-baseline"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9.2 5H0.8M4 1.8 0.8 5 4 8.2" />
    </svg>
  );
}
