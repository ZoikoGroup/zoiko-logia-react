import localFont from "next/font/local";

/**
 * Self-hosted variable fonts (Latin subset, SIL Open Font License).
 *
 * Why not next/font/google: it downloads font files from Google at build time, and on the
 * deployment VM the Turbopack build fails resolving those downloads ("next/font/google queries
 * have exactly one entry"). A failed build wipes .next, so the running server lost its CSS.
 * Local files make the build independent of the network.
 *
 * Each export keeps the CSS variable name the pages already use.
 */
export const geistSans = localFont({
  src: "./geist.woff2",
  weight: "100 900",
  display: "swap",
  variable: "--font-geist-sans",
});

export const geistMono = localFont({
  src: "./geist-mono.woff2",
  weight: "100 900",
  display: "swap",
  variable: "--font-geist-mono",
});

export const playfair = localFont({
  src: "./playfair-display.woff2",
  weight: "400 900",
  display: "swap",
  variable: "--font-playfair",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

export const inter = localFont({
  src: "./inter.woff2",
  weight: "100 900",
  display: "swap",
  variable: "--font-inter",
});

export const jetbrainsMono = localFont({
  src: "./jetbrains-mono.woff2",
  weight: "100 800",
  display: "swap",
  variable: "--font-mono",
});

/** Source Serif 4 under the variable name used by the Trust Center page. */
export const sourceSerifTrust = localFont({
  src: "./SourceSerif4-Variable-latin.woff2",
  weight: "200 900",
  display: "swap",
  variable: "--font-source-serif",
  fallback: ["Georgia", "Times New Roman", "serif"],
});
