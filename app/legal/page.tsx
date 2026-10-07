import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { sourceSerif } from "../fonts/sourceSerif";
import {
  Breadcrumb,
  HeroSection,
  RouterSection,
  DocumentsSection,
  TermsSection,
  PrivacySection,
  IpBrandSection,
  EnterpriseSection,
  NoticesSection,
  VersionsSection,
  FaqSection,
  CloseSection,
} from "./components";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Legal — ZoikoLogia",
  description:
    "Source-approved legal documents, notices, rights information and specialist routes for ZoikoLogia™. The authoritative document or source governs wherever a summary differs.",
};

/**
 * One responsive page that follows both Figma frames: "412w light" (mobile, below 1024px) and
 * "1440w light" (desktop, 1024px and up). The hero, the router cards, the "which terms apply" photo
 * and the closing band use different photos per frame (`*-desktop` / `*-mobile` in public/legal);
 * the enterprise photo is the same file in both frames.
 */
export default function LegalPage() {
  return (
    <div
      className={`${inter.variable} ${sourceSerif.variable} bg-[#f7f3ea] font-[family-name:var(--font-inter)] text-[#071a33] antialiased`}
    >
      <Breadcrumb />
      <HeroSection />
      <RouterSection />
      <DocumentsSection />
      <TermsSection />
      <PrivacySection />
      <IpBrandSection />
      <EnterpriseSection />
      <NoticesSection />
      <VersionsSection />
      <FaqSection />
      <CloseSection />
    </div>
  );
}
