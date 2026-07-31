"use client";

import { useState } from "react";
import {
  ShieldCheck,
  FileSearch,
  Scale,
  Users,
  Lock,
  ClipboardCheck,
  ArrowRight,
  Plus,
  Minus,
  Check,
  Menu,
  X,
} from "lucide-react";

/**
 * ZoikoLogia — About page
 * Rebuilt from design. Uses the ZoikoLogia design system:
 *   cream #faf7f0 · navy #0f1a30 · amber #e8912a · teal #0d9488
 * Cream/navy bands are set via Tailwind classes with dark: variants
 * (never inline style={{ backgroundColor }}) so dark mode stays safe.
 *
 * Images are rendered as <Placeholder /> blocks so the page drops in and
 * renders with no missing assets. Swap each for next/image when art is ready.
 */

/* ---------- small building blocks ---------- */

function Eyebrow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-[0.2em] text-[#e8912a] ${className}`}
    >
      {children}
    </p>
  );
}

function Placeholder({
  className = "",
  label,
  tone = "cream",
}: {
  className?: string;
  label?: string;
  tone?: "cream" | "navy";
}) {
  const tones =
    tone === "navy"
      ? "bg-gradient-to-br from-[#16233f] to-[#0b1526] text-slate-500"
      : "bg-gradient-to-br from-[#efe9dc] to-[#e3dccc] dark:from-[#16233f] dark:to-[#0b1526] text-[#0f1a30]/30 dark:text-slate-500";
  return (
    <div
      role="img"
      aria-label={label ?? "ZoikoLogia imagery"}
      className={`relative overflow-hidden rounded-2xl ring-1 ring-black/5 dark:ring-white/10 ${tones} ${className}`}
    >
      <div className="absolute inset-0 flex items-center justify-center text-[11px] font-medium uppercase tracking-widest">
        {label ?? "Image"}
      </div>
    </div>
  );
}

function AmberButton({
  children,
  href = "#",
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-lg bg-[#e8912a] px-6 py-3 text-sm font-semibold text-[#0f1a30] transition-colors hover:bg-[#d17f1e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e8912a]"
    >
      {children}
    </a>
  );
}

function OutlineButton({
  children,
  href = "#",
  onNavy = false,
}: {
  children: React.ReactNode;
  href?: string;
  onNavy?: boolean;
}) {
  const base =
    "inline-flex items-center gap-2 rounded-lg border px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e8912a]";
  const skin = onNavy
    ? "border-white/25 text-white hover:bg-white/10"
    : "border-[#0f1a30]/20 text-[#0f1a30] hover:bg-[#0f1a30]/5 dark:border-white/25 dark:text-white dark:hover:bg-white/10";
  return (
    <a href={href} className={`${base} ${skin}`}>
      {children}
    </a>
  );
}

/* A bold label + supporting line, with an amber check. Used in list columns. */
function CheckPoint({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <div className="flex gap-3">
      <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[#e8912a]/15 text-[#e8912a]">
        <Check className="h-3 w-3" strokeWidth={3} />
      </span>
      <div>
        <h3 className="font-semibold text-[#0f1a30] dark:text-white">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-[#0f1a30]/60 dark:text-slate-400">
          {body}
        </p>
      </div>
    </div>
  );
}

/* ---------- data ---------- */

const NAV = ["About", "Governance", "Platform", "Kriton™", "Who It's For", "Company"];

const WHO_WE_ARE = [
  {
    title: "We are source-governed",
    body: "Answers are grounded in real, verified source material to reduce the risk of confident-but-wrong claims.",
  },
  {
    title: "We are profession-aware",
    body: "We reflect professional accounting standards, ethics, and the way qualified practitioners actually work.",
  },
  {
    title: "We are enterprise-minded",
    body: "The platform is built with the controls, privacy, and reliability that firms need to run at scale.",
  },
  {
    title: "We are built for responsibility",
    body: "Kriton™ is designed to support human judgment — never to quietly replace professional expertise.",
  },
];

const MISSION_STRIP = [
  { title: "Governance-first design", body: "Rules and boundaries come before answers." },
  { title: "Source-grounded answers", body: "Every response is anchored to verifiable material." },
  { title: "Profession-aware", body: "Standards and ethics are built into reasoning." },
  { title: "Enterprise-grade controls", body: "Privacy, access, and reliability by default." },
  { title: "Human judgment respected", body: "People stay in control of decisions." },
  { title: "Audit + compliance ready", body: "Everything is traceable and exportable." },
];

const WHY = [
  {
    title: "Source-backed accounting guidance",
    body: "Every answer is anchored to verifiable source material rather than unattributed generation.",
  },
  {
    title: "Accounting rules awareness",
    body: "The system understands that accounting work is bound by standards, not open-ended opinion.",
  },
  {
    title: "Risk-sensitive answers",
    body: "Kriton™ flags uncertainty and highlights where professional judgment is required.",
  },
  {
    title: "Professional boundary respect",
    body: "It stays within defined governance boundaries instead of guessing past them.",
  },
  {
    title: "Audit-and-compliance traceability",
    body: "Interactions are logged so answers can be reviewed, defended, and exported.",
  },
];

const WHAT_WE_DO = [
  {
    title: "Source-backed knowledge access",
    body: "Ask accounting questions and receive answers anchored to verifiable, ingested source material.",
  },
  {
    title: "Clear answer boundaries",
    body: "The system stays within governance boundaries and flags where professional judgment is required.",
  },
  {
    title: "Audit-ready responses",
    body: "Every response can be traced, reviewed, and exported for compliance and record-keeping.",
  },
];

const WHO_ITS_FOR = [
  {
    title: "Accounting firms",
    body: "Firms that need reliable, source-backed answers and clear audit trails for client work.",
  },
  {
    title: "Tax professionals",
    body: "Specialists who need accurate, current, and defensible positions on complex matters.",
  },
  {
    title: "Payroll and compliance teams",
    body: "Teams responsible for accuracy, documentation, and regulatory adherence.",
  },
  {
    title: "Finance and operations teams",
    body: "In-house teams that want governed accounting intelligence they can stand behind.",
  },
];

const APPROACH = [
  {
    title: "Source authority before answers",
    body: "We establish a verifiable source basis first — the answer comes second, never the other way around.",
  },
  {
    title: "Privacy before promotion",
    body: "Sensitive data is protected by design. We treat confidentiality as a requirement, not a feature.",
  },
  {
    title: "Auditability before automation",
    body: "If it can't be traced and reviewed, it doesn't ship. Evidence comes before convenience.",
  },
];

const ARCHITECTURE = [
  {
    title: "Source ingestion & verification",
    body: "Controls what content enters the system and confirms it against trusted, verifiable sources.",
  },
  {
    title: "Governance & policy engine",
    body: "Applies governance rules, boundaries, and professional standards to every request.",
  },
  {
    title: "Reasoning & answer construction",
    body: "Builds answers within defined boundaries and marks where professional judgment is required.",
  },
  {
    title: "Audit & compliance logging",
    body: "Records every interaction so answers can be traced, reviewed, and exported.",
  },
  {
    title: "Privacy & access control",
    body: "Protects sensitive data with strict access, retention, and privacy controls.",
  },
  {
    title: "Human review & escalation",
    body: "Routes sensitive or high-risk matters to qualified human professionals.",
  },
];

const PRINCIPLES = [
  {
    title: "We do not treat answers as final truth",
    body: "Kriton™ shows its basis and boundaries so professionals can verify, not just trust.",
  },
  {
    title: "We do not guess when sources are missing",
    body: "If the source basis is weak, the system says so rather than inventing a confident answer.",
  },
  {
    title: "We do not bypass professional standards",
    body: "Accounting rules and ethics constrain the system — they are not optional context.",
  },
  {
    title: "We do not ignore privacy",
    body: "Confidential data is protected end to end, with access limited to who should see it.",
  },
  {
    title: "We do not remove human judgment",
    body: "Final interpretation, advice, and sign-off stay with the qualified professional.",
  },
];

const TRUST = [
  {
    icon: ShieldCheck,
    title: "Secure by design",
    body: "Privacy, encryption, and access controls are built into the platform, not bolted on later.",
  },
  {
    icon: Lock,
    title: "Encryption everywhere",
    body: "Sensitive data is protected in transit and at rest with strong encryption standards.",
  },
  {
    icon: Users,
    title: "Access controls",
    body: "Role-based access ensures people only see what they are permitted to see.",
  },
  {
    icon: ClipboardCheck,
    title: "Full auditability",
    body: "Every action is logged and traceable for compliance and internal review.",
  },
];

const JUDGMENT: [string, string][] = [
  ["Source-backed research and context", "Final interpretation and professional opinion"],
  ["Highlighted risks and considerations", "Risk decisions and client advice"],
  ["Draft explanations and summaries", "Sign-off and professional accountability"],
  ["Flagged areas that need judgment", "Applied ethics and professional judgment"],
];

const SOURCE_CHIPS = [
  "Accounting standards",
  "Tax legislation",
  "Regulatory guidance",
  "Company filings",
  "Firm policies",
  "Verified references",
  "Professional literature",
  "Client documentation",
  "Public records",
  "Audit evidence",
  "Internal knowledge",
  "Statutory sources",
];

const FAQ: [string, string][] = [
  [
    "What is ZoikoLogia™?",
    "ZoikoLogia™ is a governed AI accounting intelligence platform. It helps businesses and accounting professionals work with accounting knowledge through a system built around source authority, professional standards, and auditability.",
  ],
  [
    "What is Kriton™?",
    "Kriton™ is the AI advisor at the centre of ZoikoLogia™. It answers accounting questions within defined governance boundaries, shows the source basis behind its answers, and flags where professional judgment is required.",
  ],
  [
    "Is ZoikoLogia™ a general-purpose AI chatbot?",
    "No. Unlike general chatbots, ZoikoLogia™ is purpose-built for accounting work. It stays within governance boundaries, grounds answers in verified sources, and is designed to be defensible in a professional context.",
  ],
  [
    "Where do ZoikoLogia™ answers come from?",
    "Answers are grounded in verifiable, ingested source material — standards, regulations, filings, and approved references. The stronger the source basis, the more trustworthy the answer.",
  ],
  [
    "Who is ZoikoLogia™ for?",
    "It is built for accounting firms, tax professionals, payroll and compliance teams, and in-house finance and operations teams that need trustworthy, traceable accounting intelligence.",
  ],
  [
    "Does ZoikoLogia™ replace accountants?",
    "No. Kriton™ supports professional judgment; it does not replace it. Final interpretation, advice, and sign-off remain with the qualified professional.",
  ],
  [
    "How does ZoikoLogia™ handle privacy and data?",
    "Privacy, encryption, access control, and audit logging are core product requirements. Sensitive data is protected end to end and access is limited by role.",
  ],
];

/* ---------- section wrappers (band backgrounds live here, as classes) ---------- */

const CREAM = "bg-[#faf7f0] dark:bg-[#0b1220] text-[#0f1a30] dark:text-white";
const NAVY = "bg-[#0f1a30] text-white";
const CONTAINER = "mx-auto w-full max-w-6xl px-6";

/* ---------- page ---------- */

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="font-sans">
      {/* ---------------- Header ---------------- */}
      <header className={`sticky top-0 z-50 border-b border-black/5 dark:border-white/10 ${CREAM}`}>
        <div className={`${CONTAINER} flex h-16 items-center justify-between`}>
          <a href="#" className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#0f1a30] text-sm font-bold text-[#e8912a] dark:bg-white/10">
              Z
            </span>
            <span className="font-serif text-lg font-bold tracking-tight">
              ZoikoLogia<span className="align-super text-[10px]">™</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {NAV.map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium text-[#0f1a30]/70 transition-colors hover:text-[#0f1a30] dark:text-slate-300 dark:hover:text-white"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="#"
              className="text-sm font-medium text-[#0f1a30]/70 hover:text-[#0f1a30] dark:text-slate-300 dark:hover:text-white"
            >
              Sign In
            </a>
            <AmberButton>Request a Demo</AmberButton>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {menuOpen && (
          <div className={`border-t border-black/5 dark:border-white/10 lg:hidden ${CREAM}`}>
            <div className={`${CONTAINER} flex flex-col gap-4 py-4`}>
              {NAV.map((item) => (
                <a key={item} href="#" className="text-sm font-medium">
                  {item}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-2">
                <a href="#" className="text-sm font-medium">
                  Sign In
                </a>
                <AmberButton>Request a Demo</AmberButton>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ---------------- Hero ---------------- */}
      <section className={CREAM}>
        <div className={`${CONTAINER} py-16 text-center sm:py-20`}>
          <Eyebrow className="mb-5">Governed AI for accounting</Eyebrow>
          <h1 className="mx-auto max-w-3xl font-serif text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
            We Are Building Governed AI Accounting Intelligence for Professional Work.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#0f1a30]/60 dark:text-slate-400">
            ZoikoLogia™ is an AI accounting intelligence platform. Kriton™, our advisor,
            helps businesses and accounting professionals work with accounting knowledge
            through source authority, professional standards, and enterprise-grade controls.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <AmberButton>Explore the Platform</AmberButton>
            <OutlineButton>Read the Guide</OutlineButton>
          </div>
          <a
            href="#"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0d9488] hover:underline"
          >
            Meet Kriton™ <ArrowRight className="h-4 w-4" />
          </a>

          <Placeholder
            label="Platform preview"
            className="mx-auto mt-12 h-64 w-full max-w-4xl sm:h-80"
          />
        </div>
      </section>

      {/* ---------------- Who we are ---------------- */}
      <section className={CREAM}>
        <div className={`${CONTAINER} grid gap-12 py-16 lg:grid-cols-2 lg:gap-16`}>
          <div>
            <Eyebrow className="mb-4">Who we are</Eyebrow>
            <h2 className="font-serif text-3xl font-bold leading-tight tracking-tight">
              ZoikoLogia™ Exists to Bring Trust, Structure, and Governance to AI-Powered
              Accounting Work.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#0f1a30]/60 dark:text-slate-400">
              ZoikoLogia™ was created out of a simple conviction: AI can be genuinely useful
              in accounting, but only if it is trustworthy. Accounting work is bound by
              standards, evidence, and professional responsibility — so the intelligence that
              supports it has to be governed the same way.
            </p>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0d9488] hover:underline"
            >
              Learn how the platform works <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-7 sm:grid-cols-2">
            {WHO_WE_ARE.map((p) => (
              <CheckPoint key={p.title} title={p.title} body={p.body} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Mission (navy) ---------------- */}
      <section className={NAVY}>
        <div className={`${CONTAINER} py-16 sm:py-20`}>
          <Eyebrow className="mb-5 text-center">Our mission</Eyebrow>
          <blockquote className="mx-auto max-w-3xl text-center font-serif text-3xl font-medium leading-snug tracking-tight sm:text-4xl">
            “To make AI useful, trustworthy, and governed for accounting professionals.”
          </blockquote>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {MISSION_STRIP.map((m) => (
              <div key={m.title} className="flex gap-4">
                <Placeholder tone="navy" label="" className="h-14 w-14 flex-none rounded-xl" />
                <div>
                  <h3 className="font-semibold text-white">{m.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{m.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Why it matters ---------------- */}
      <section className={CREAM}>
        <div className={`${CONTAINER} py-16 sm:py-20`}>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow className="mb-4">Why it matters</Eyebrow>
            <h2 className="font-serif text-3xl font-bold leading-tight tracking-tight">
              The Accounting Profession Needs AI That Understands Governance.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#0f1a30]/60 dark:text-slate-400">
              Generic AI tools create real risk in professional accounting. ZoikoLogia™
              approaches the problem from the opposite direction — governance first.
            </p>
          </div>
          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="grid gap-6">
              {WHY.map((w) => (
                <div
                  key={w.title}
                  className="rounded-xl border border-black/5 bg-white/60 p-5 dark:border-white/10 dark:bg-white/5"
                >
                  <h3 className="font-semibold text-[#0f1a30] dark:text-white">{w.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#0f1a30]/60 dark:text-slate-400">
                    {w.body}
                  </p>
                </div>
              ))}
            </div>
            <Placeholder label="Accountants at work" className="min-h-[20rem] w-full" />
          </div>
        </div>
      </section>

      {/* ---------------- What we do ---------------- */}
      <section className={CREAM}>
        <div className={`${CONTAINER} grid items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16`}>
          <Placeholder label="Governed AI system" className="order-2 min-h-[20rem] w-full lg:order-1" />
          <div className="order-1 lg:order-2">
            <Eyebrow className="mb-4">What we do</Eyebrow>
            <h2 className="font-serif text-3xl font-bold leading-tight tracking-tight">
              ZoikoLogia™ Helps Users Work With Accounting Knowledge Through a Governed AI
              System.
            </h2>
            <div className="mt-8 grid gap-6">
              {WHAT_WE_DO.map((w) => (
                <CheckPoint key={w.title} title={w.title} body={w.body} />
              ))}
            </div>
            <a
              href="#"
              className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0d9488] hover:underline"
            >
              Explore core capabilities <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ---------------- Meet Kriton ---------------- */}
      <section className={CREAM}>
        <div className={`${CONTAINER} py-16 text-center sm:py-20`}>
          <Eyebrow className="mb-4">Meet Kriton™</Eyebrow>
          <h2 className="mx-auto max-w-3xl font-serif text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Kriton™ Is the AI Advisor for Governed Accounting Intelligence.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#0f1a30]/60 dark:text-slate-400">
            Kriton™ works inside governance rules, grounds its answers in source authority,
            and respects professional judgment. It doesn’t just answer — it shows its basis
            and its boundaries.
          </p>
          <Placeholder label="Kriton™ advisor interface" className="mx-auto mt-12 h-72 w-full max-w-4xl sm:h-96" />
        </div>
      </section>

      {/* ---------------- Who it's for ---------------- */}
      <section className={CREAM}>
        <div className={`${CONTAINER} grid gap-12 py-16 lg:grid-cols-2 lg:gap-16`}>
          <div>
            <Eyebrow className="mb-4">Who it&apos;s for</Eyebrow>
            <h2 className="font-serif text-3xl font-bold leading-tight tracking-tight">
              Built for the People and Organizations That Need Trustworthy Accounting
              Intelligence.
            </h2>
            <div className="mt-8 grid gap-7 sm:grid-cols-2">
              {WHO_ITS_FOR.map((p) => (
                <CheckPoint key={p.title} title={p.title} body={p.body} />
              ))}
            </div>
          </div>
          <Placeholder label="Teams collaborating" className="min-h-[22rem] w-full" />
        </div>
      </section>

      {/* ---------------- Our approach ---------------- */}
      <section className={CREAM}>
        <div className={`${CONTAINER} py-16 sm:py-20`}>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow className="mb-4">Our approach</Eyebrow>
            <h2 className="font-serif text-3xl font-bold leading-tight tracking-tight">
              ZoikoLogia™ Is Built Around Governance First.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#0f1a30]/60 dark:text-slate-400">
              Three commitments shape every product decision we make.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {APPROACH.map((a) => (
              <div
                key={a.title}
                className="rounded-2xl border border-black/5 bg-white/60 p-6 dark:border-white/10 dark:bg-white/5"
              >
                <Placeholder label="" className="mb-5 h-36 w-full" />
                <h3 className="font-serif text-lg font-bold">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#0f1a30]/60 dark:text-slate-400">
                  {a.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Architecture (navy) ---------------- */}
      <section className={NAVY}>
        <div className={`${CONTAINER} py-16 sm:py-20`}>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow className="mb-4">The architecture</Eyebrow>
            <h2 className="font-serif text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              ZoikoLogia™ Is Governed by a Complete Back-End Control Architecture.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-400">
              Every request passes through layered controls — from source verification to
              human escalation.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {ARCHITECTURE.map((a) => (
              <div
                key={a.title}
                className="rounded-xl border border-white/10 bg-white/[0.04] p-5"
              >
                <h3 className="font-semibold text-white">{a.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{a.body}</p>
              </div>
            ))}
          </div>
          <Placeholder tone="navy" label="Control architecture" className="mt-12 h-56 w-full sm:h-72" />
        </div>
      </section>

      {/* ---------------- Principles ---------------- */}
      <section className={CREAM}>
        <div className={`${CONTAINER} grid items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16`}>
          <Placeholder label="Human oversight" className="min-h-[22rem] w-full" />
          <div>
            <Eyebrow className="mb-4">Our principles</Eyebrow>
            <h2 className="font-serif text-3xl font-bold leading-tight tracking-tight">
              We Believe Accounting AI Must Be Useful Without Being Reckless.
            </h2>
            <div className="mt-8 grid gap-6">
              {PRINCIPLES.map((p) => (
                <CheckPoint key={p.title} title={p.title} body={p.body} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Trust & safety ---------------- */}
      <section className={CREAM}>
        <div className={`${CONTAINER} py-16 sm:py-20`}>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow className="mb-4">Trust &amp; safety</Eyebrow>
            <h2 className="font-serif text-3xl font-bold leading-tight tracking-tight">
              Privacy, Security, and Auditability Are Core Product Requirements.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#0f1a30]/60 dark:text-slate-400">
              These aren’t add-ons. They are built into the platform from the ground up.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TRUST.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-black/5 bg-white/60 p-6 dark:border-white/10 dark:bg-white/5"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0d9488]/10 text-[#0d9488]">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-semibold text-[#0f1a30] dark:text-white">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#0f1a30]/60 dark:text-slate-400">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Professional judgment (table) ---------------- */}
      <section className={CREAM}>
        <div className={`${CONTAINER} py-16 sm:py-20`}>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow className="mb-4">Professional judgment</Eyebrow>
            <h2 className="font-serif text-3xl font-bold leading-tight tracking-tight">
              Kriton™ Supports Professional Judgment. It Does Not Replace It.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#0f1a30]/60 dark:text-slate-400">
              Kriton™ does the research and surfaces the evidence. The professional keeps the
              decision.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-black/10 dark:border-white/10">
            <div className="grid grid-cols-2 bg-[#0f1a30] text-white">
              <div className="border-r border-white/10 px-5 py-4 text-sm font-semibold">
                What Kriton™ provides
              </div>
              <div className="px-5 py-4 text-sm font-semibold">
                What stays with the professional
              </div>
            </div>
            {JUDGMENT.map(([left, right], i) => (
              <div
                key={left}
                className={`grid grid-cols-2 text-sm ${
                  i % 2 ? "bg-white/40 dark:bg-white/[0.03]" : "bg-transparent"
                }`}
              >
                <div className="flex items-start gap-2 border-r border-black/10 px-5 py-4 dark:border-white/10">
                  <span className="mt-0.5 text-[#0d9488]">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span className="text-[#0f1a30]/80 dark:text-slate-300">{left}</span>
                </div>
                <div className="flex items-start gap-2 px-5 py-4">
                  <span className="mt-0.5 text-[#e8912a]">
                    <Scale className="h-4 w-4" />
                  </span>
                  <span className="text-[#0f1a30]/80 dark:text-slate-300">{right}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Source basis (navy) ---------------- */}
      <section className={NAVY}>
        <div className={`${CONTAINER} grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16`}>
          <div>
            <Eyebrow className="mb-4">The source basis</Eyebrow>
            <h2 className="font-serif text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              The Source Basis Matters.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-slate-400">
              ZoikoLogia™ answers are grounded in verifiable source material. The stronger the
              source basis, the more trustworthy the answer.
            </p>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {SOURCE_CHIPS.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 text-sm text-slate-300"
                >
                  <FileSearch className="h-3.5 w-3.5 text-[#e8912a]" />
                  {chip}
                </span>
              ))}
            </div>
          </div>
          <Placeholder tone="navy" label="Source verification" className="min-h-[20rem] w-full" />
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className={CREAM}>
        <div className={`${CONTAINER} py-16 sm:py-20`}>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow className="mb-4">FAQ</Eyebrow>
            <h2 className="font-serif text-3xl font-bold leading-tight tracking-tight">
              About ZoikoLogia™ and Kriton™.
            </h2>
          </div>
          <div className="mx-auto mt-10 max-w-3xl divide-y divide-black/10 border-y border-black/10 dark:divide-white/10 dark:border-white/10">
            {FAQ.map(([q, a], i) => {
              const open = openFaq === i;
              return (
                <div key={q}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : i)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="font-semibold text-[#0f1a30] dark:text-white">{q}</span>
                    <span className="flex-none text-[#e8912a]">
                      {open ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                    </span>
                  </button>
                  {open && (
                    <p className="pb-5 text-sm leading-relaxed text-[#0f1a30]/60 dark:text-slate-400">
                      {a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- Final CTA (navy) ---------------- */}
      <section className={NAVY}>
        <div className={`${CONTAINER} py-16 text-center sm:py-20`}>
          <h2 className="mx-auto max-w-3xl font-serif text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Use AI Accounting Intelligence With Source Authority, Audit Evidence, and
            Professional Controls.
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <AmberButton>Request a Demo</AmberButton>
            <OutlineButton onNavy>Explore the Platform</OutlineButton>
          </div>
        </div>
      </section>

      {/* ---------------- Footer ---------------- */}
      <footer className="bg-[#0b1526] text-slate-400">
        <div className={`${CONTAINER} py-14`}>
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 text-white">
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white/10 text-sm font-bold text-[#e8912a]">
                  Z
                </span>
                <span className="font-serif text-lg font-bold">ZoikoLogia™</span>
              </div>
              <p className="mt-4 max-w-xs text-sm leading-relaxed">
                Governed AI accounting intelligence — built on source authority, professional
                standards, and auditability.
              </p>
            </div>
            {[
              ["Platform", ["Overview", "Kriton™", "Governance", "Architecture"]],
              ["Company", ["About", "Careers", "Contact", "Press"]],
              ["Legal", ["Privacy", "Terms", "Security", "Compliance"]],
            ].map(([title, links]) => (
              <div key={title as string}>
                <h4 className="text-sm font-semibold text-white">{title as string}</h4>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {(links as string[]).map((l) => (
                    <li key={l}>
                      <a href="#" className="hover:text-white">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 border-t border-white/10 pt-6 text-xs">
            © {new Date().getFullYear()} ZoikoLogia™. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}