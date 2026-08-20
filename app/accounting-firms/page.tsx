import {
  FirmsHeroSection,
  ControlSignalsSection,
  ContextRichSection,
  RoleBasedPathsSection,
  FirmCapabilitySection,
  MatterLifecycleSection,
  SyntheticScenariosSection,
  PrivacyIntegrationsSection,
  PilotModelSection,
  FaqSection,
} from "./components";

export default function AccountingFirmsPage() {
  return (
    <main className="bg-[#FFF7ED]">
      <FirmsHeroSection />
      <ControlSignalsSection />
      <ContextRichSection />
      <RoleBasedPathsSection />
      <FirmCapabilitySection />
      <MatterLifecycleSection />
      <SyntheticScenariosSection />
      <PrivacyIntegrationsSection />
      <PilotModelSection />
      <FaqSection />
    </main>
  );
}
