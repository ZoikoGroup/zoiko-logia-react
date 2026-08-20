import {
  AskHeroSection,
  SupportedIntentsSection,
  AccountingContextSection,
  AnswerAnatomySection,
  SourceAuthoritySection,
  FollowUpContinuitySection,
  PrivacyControlsSection,
  SyntheticScenariosSection,
  FaqSection,
  GetStartedSection,
} from "./components";

export default function AskAccountingQuestionsPage() {
  return (
    <main className="bg-[#F7F2E8]">
      <AskHeroSection />
      <SupportedIntentsSection />
      <AccountingContextSection />
      <AnswerAnatomySection />
      <SourceAuthoritySection />
      <FollowUpContinuitySection />
      <PrivacyControlsSection />
      <SyntheticScenariosSection />
      <FaqSection />
      <GetStartedSection />
    </main>
  );
}
