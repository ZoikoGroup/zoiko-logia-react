import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { sourceSerif } from "../fonts/sourceSerif";
import {
  Breadcrumb,
  HeroSection,
  TruthScopeSection,
  DirectorySection,
  HowPublishedSection,
  GovernanceHandoffSection,
  OrganizationRoutesSection,
  MediaCorrectionsSection,
  CurrentnessSection,
  FaqSection,
  ConversionBandSection,
} from "./components";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Leadership — ZoikoLogia",
  description:
    "Source-approved leadership information for ZoikoLogia™. Profiles are published only after identity, title, scope and public-use approval.",
};

/**
 * One responsive page that follows both Figma frames: "412w light" (mobile, below 1024px) and
 * "1440w light" (desktop, 1024px and up). Images that differ between the frames live in
 * public/leadership as `*-mobile` / `*-desktop`.
 */
export default function LeadershipPage() {
  return (
    <div
      className={`${inter.variable} ${sourceSerif.variable} bg-[#f7f3ea] font-[family-name:var(--font-inter)] text-[#071a33] antialiased`}
    >
      <Breadcrumb />
      <HeroSection />
      <TruthScopeSection />
      <DirectorySection />
      <HowPublishedSection />
      <GovernanceHandoffSection />
      <OrganizationRoutesSection />
      <MediaCorrectionsSection />
      <CurrentnessSection />
      <FaqSection />
      <ConversionBandSection />
    </div>
  );
}
