export interface Intent {
  value: string;
  title: string;
  text: string;
}

export const INTENTS: Intent[] = [
  {
    value: "technology-product",
    title: "Technology / product collaboration",
    text: "Explore a potential technical, product or interoperability relationship.",
  },
  {
    value: "implementation-services",
    title: "Implementation / services collaboration",
    text: "Explore a potential implementation or services collaboration.",
  },
  {
    value: "advisory-consulting",
    title: "Advisory / consulting collaboration",
    text: "Explore advisory or domain-expertise collaboration.",
  },
  {
    value: "channel-reseller",
    title: "Channel / reseller conversation",
    text: "Explore a possible route-to-market relationship.",
  },
  {
    value: "referral-ecosystem",
    title: "Referral / ecosystem relationship",
    text: "Explore a business-development or ecosystem relationship.",
  },
  {
    value: "strategic-other",
    title: "Strategic / other",
    text: "Describe another potential collaboration.",
  },
];

/* The Figma frames show only the default value of each dropdown ("None selected", "No preference")
   and one chosen example in the review step ("Workflow Mode", "Exploratory"); the remaining
   options are assumptions. */
export const PRODUCT_AREAS = [
  "Workflow Mode",
  "Review Mode",
  "Admin Mode",
  "Learning Mode",
  "AI Advisor",
  "Knowledge Graph",
  "API Reference",
];

export const TIMINGS = ["No preference", "Exploratory", "Within 3 months", "3–6 months", "6+ months"];

export const INTEROP = ["Yes", "No", "Unsure"] as const;

export const MAX_TEXT = 500;

export interface InquiryData {
  intent: string;
  objective: string;
  capability: string;
  techObjective: string;
  sourceContext: string;
  architecture: string;
  interop: string;
  intentDetail: string;
  customerContext: string;
  productArea: string;
  timing: string;
  name: string;
  email: string;
  organization: string;
  role: string;
  website: string;
  additional: string;
  ack: boolean;
  marketing: boolean;
}

export const INITIAL: InquiryData = {
  intent: "",
  objective: "",
  capability: "",
  techObjective: "",
  sourceContext: "",
  architecture: "",
  interop: "",
  intentDetail: "",
  customerContext: "",
  productArea: "",
  timing: "No preference",
  name: "",
  email: "",
  organization: "",
  role: "",
  website: "",
  additional: "",
  ack: false,
  marketing: false,
};

export const STEPS = ["Intent", "Relationship", "Your details", "Review & send"];

export type SetField = <K extends keyof InquiryData>(key: K, value: InquiryData[K]) => void;

/** The first step whose required answers are missing, or 0 when the inquiry is complete. */
export function firstIncompleteStep(d: InquiryData): number {
  if (!d.intent) return 1;
  if (!d.objective.trim() || !d.capability.trim()) return 2;
  if (!d.name.trim() || !d.email.trim() || !d.organization.trim()) return 3;
  return 0;
}
