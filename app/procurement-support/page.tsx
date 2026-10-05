import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { sourceSerif } from "../fonts/sourceSerif";
import {
  Breadcrumb,
  HeroSection,
  RouterSection,
  ScopeSection,
  PreparationSection,
  RequestFormSection,
  EvidenceHandoffSection,
  BoundariesSection,
  CtaBandSection,
  FaqSection,
} from "./components";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Procurement Support — ZoikoLogia",
  description:
    "Use Procurement Support for process and coordination questions. Provider evidence stays with Provider Due Diligence; general commercial questions go to Contact Sales.",
};

/**
 * One responsive page that follows both Figma frames: "412w light" (mobile, below 1024px) and
 * "1440w light" (desktop, 1024px and up). Images that differ between the frames live in
 * public/procurement-support as `*-mobile` / `*-desktop`.
 */
export default function ProcurementSupportPage() {
  return (
    <div
      className={`${inter.variable} ${sourceSerif.variable} bg-[#f7f3ea] font-[family-name:var(--font-inter)] text-[#071a33] antialiased`}
    >
      <Breadcrumb />
      <HeroSection />
      <RouterSection />
      <ScopeSection />
      <PreparationSection />
      <RequestFormSection />
      <EvidenceHandoffSection />
      <BoundariesSection />
      <CtaBandSection />
      <FaqSection />
    </div>
  );
}
