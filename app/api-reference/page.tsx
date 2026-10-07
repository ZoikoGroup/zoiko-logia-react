import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { sourceSerif } from "../fonts/sourceSerif";
import {
  HeroSection,
  OnThisPage,
  OverviewSection,
  ProvenanceSection,
  VersionsSection,
  NavigatorSection,
  AnatomySection,
  SchemaSection,
  AccessSection,
  ErrorsSection,
  CodeSection,
  ChangesSection,
  RoutesSection,
  FaqSection,
  CloseSection,
} from "./components";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "API Reference — ZoikoLogia",
  description:
    "Source-approved interface versions, resources, operations, schemas, errors and access boundaries for ZoikoLogia™, shown only when published.",
};

/**
 * Follows the 1440w Figma frame (hero, "On this page" rail and twelve numbered sections). Below `lg`
 * the rail becomes a collapsible list and every grid stacks into a single column, as in the narrow
 * frame; the narrow frame also ends with a closing band that the 1440px frame doesn't have.
 */
export default function ApiReferencePage() {
  return (
    <div
      className={`${inter.variable} ${sourceSerif.variable} bg-[#f7f3ea] font-[family-name:var(--font-inter)] text-[#071a33] antialiased`}
    >
      <HeroSection />

      <div className="mx-auto grid w-full max-w-[1240px] grid-cols-1 gap-x-[52px] px-5 pb-16 pt-8 lg:grid-cols-[230px_minmax(0,1fr)] lg:px-0 lg:pt-12">
        <OnThisPage />

        <main className="min-w-0">
          <OverviewSection />
          <ProvenanceSection />
          <VersionsSection />
          <NavigatorSection />
          <AnatomySection />
          <SchemaSection />
          <AccessSection />
          <ErrorsSection />
          <CodeSection />
          <ChangesSection />
          <RoutesSection />
          <FaqSection />
          <CloseSection />
        </main>
      </div>
    </div>
  );
}
