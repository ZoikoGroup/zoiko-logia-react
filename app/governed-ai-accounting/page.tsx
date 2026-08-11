import {
  GovernedAiHeroSection,
  ControlSignalsSection,
  GovernanceScopeSection,
  AudienceRoutesSection,
  OperatingLifecycleSection,
  CapabilitySystemSection,
  EvaluationFrameworkSection,
  SyntheticScenariosSection,
  FaqSection,
} from "./components";

export default function GovernedAiAccountingPage() {
  return (
    <main>
      <GovernedAiHeroSection />
      <ControlSignalsSection />
      <GovernanceScopeSection />
      <AudienceRoutesSection />
      <OperatingLifecycleSection />
      <CapabilitySystemSection />
      <EvaluationFrameworkSection />
      <SyntheticScenariosSection />
      <FaqSection />
    </main>
  );
}
