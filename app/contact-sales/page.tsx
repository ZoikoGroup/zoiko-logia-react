import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { sourceSerif } from "../fonts/sourceSerif";
import { IntroPanel, ContactForm } from "./components";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Contact Sales — ZoikoLogia",
  description:
    "Tell us what you're evaluating or what you need to coordinate. We'll route it through the approved sales process.",
};

/**
 * Figma provides the 1440w frame only (node 1711:5681), so the two columns stack below the
 * `lg` breakpoint and the line breaks apply only at 1440px+.
 */
export default function ContactSalesPage() {
  return (
    <div
      className={`${inter.variable} ${sourceSerif.variable} bg-[#f7f3ea] font-[family-name:var(--font-inter)] text-[#071a33] antialiased`}
    >
      <main className="mx-auto grid w-full max-w-[1080px] grid-cols-1 items-start gap-10 px-5 pb-16 pt-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14 lg:px-8 lg:pt-14">
        <IntroPanel />
        <ContactForm />
      </main>
    </div>
  );
}
