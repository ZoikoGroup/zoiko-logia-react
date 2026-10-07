import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { sourceSerif } from "../fonts/sourceSerif";
import { IntroSection, InquiryForm } from "./components";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Partner Inquiry — ZoikoLogia",
  description:
    "Share the relationship you'd like to explore. An inquiry starts a review conversation only; it does not create partner status, integration, certification, resale or referral rights, commercial terms or program benefits.",
};

/**
 * Figma provides the 1440w frame only (node 1703:1596), so the layout is fluid below it:
 * the radio cards stack on narrow screens and the stepper collapses to numbered dots.
 */
export default function PartnerInquiryPage() {
  return (
    <div
      className={`${inter.variable} ${sourceSerif.variable} bg-[#f7f3ea] font-[family-name:var(--font-inter)] text-[#071a33] antialiased`}
    >
      <main className="mx-auto flex w-full max-w-[1200px] flex-col gap-7 px-5 pb-16 pt-12 lg:px-8 lg:pt-[86px]">
        <IntroSection />
        <InquiryForm />
      </main>
    </div>
  );
}
