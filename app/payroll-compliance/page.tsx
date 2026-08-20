import {
  PayrollHeroSection,
  ControlSignalsSection,
  RolePathsSection,
  CapabilitySystemSection,
  PayrollLifecycleSection,
  CalculationTraceSection,
  PrivacySection,
  SyntheticScenariosSection,
  EvaluationPilotSection,
  FaqSection,
  GetStartedSection,
} from "./components";

export default function PayrollCompliancePage() {
  return (
    <main>
      <PayrollHeroSection />
      <ControlSignalsSection />
      <RolePathsSection />
      <CapabilitySystemSection />
      <PayrollLifecycleSection />
      <CalculationTraceSection />
      <PrivacySection />
      <SyntheticScenariosSection />
      <EvaluationPilotSection />
      <FaqSection />
      <GetStartedSection />
    </main>
  );
}
