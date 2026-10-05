import localFont from "next/font/local";

/**
 * Source Serif 4 as a self-hosted variable font (weight 200–900 + optical-size axis, Latin subset;
 * SIL Open Font License).
 *
 * Why not next/font/google: other pages in this app load "Source Serif 4" as static 600/700 faces
 * under the same family name. In a production build all of those @font-face rules end up in one
 * stylesheet, the static faces win the weight match, and headings lose the optical-size axis (they
 * render ~8% wider than the Figma designs). A local font gets its own scoped family name.
 */
export const sourceSerif = localFont({
  src: "./SourceSerif4-Variable-latin.woff2",
  weight: "200 900",
  style: "normal",
  display: "swap",
  variable: "--font-serif4",
  fallback: ["Georgia", "Times New Roman", "serif"],
});
