import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { sourceSerif } from "../fonts/sourceSerif";
import {
  Breadcrumb,
  HeroSection,
  RouterSection,
  RelationshipSection,
  DirectorySection,
  RecordSection,
  ProfileCardsSection,
  PartnerInquirySection,
  ExistingPartnerSection,
  BoundariesSection,
  FaqSection,
  CloseSection,
} from "./components";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Partners — ZoikoLogia",
  description:
    "Approved public partner relationships for ZoikoLogia™, each with its scope, currentness and accountability. No public partner records are currently available.",
};

/**
 * One responsive page that follows both Figma frames: "412w light" (mobile, below 1024px) and
 * "1440w light" (desktop, 1024px and up). The photos are the same files in both frames (only the
 * crop differs), so each lives once in public/partners.
 */
export default function PartnersPage() {
  return (
    <div
      className={`${inter.variable} ${sourceSerif.variable} bg-[#f7f3ea] font-[family-name:var(--font-inter)] text-[#071a33] antialiased`}
    >
      <Breadcrumb />
      <HeroSection />
      <RouterSection />
      <RelationshipSection />
      <DirectorySection />
      <RecordSection />
      <ProfileCardsSection />
      <PartnerInquirySection />
      <ExistingPartnerSection />
      <BoundariesSection />
      <FaqSection />
      <CloseSection />
    </div>
  );
}
