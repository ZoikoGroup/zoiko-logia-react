import Link from "next/link";

// ─── DATA ──────────────────────────────────────────────────────────────────
// Sections render in order. `body` = paragraphs. `code` = a fenced code block.
// `bullets` = [bold lead-in, rest] pairs. `steps` = numbered [bold, rest] pairs.

type Section = {
  id: string;
  navLabel: string;
  title: string;
  body?: string[];
  code?: string;
  bullets?: [string, string][];
  steps?: [string, string][];
};

const sections: Section[] = [
  {
    id: "api-reference",
    navLabel: "API Reference",
    title: "API Reference",
    body: ["Authenticate with a scoped API key, then submit governed queries against your tenant's approved source library."],
    code: `POST /v1/kriton/ask
Authorization: Bearer <api_key>
Content-Type: application/json

{
  "mode": "workflow",
  "question": "How should we treat a multi-element contract under ASC 606?",
  "jurisdiction": "US"
}`,
  },
  {
    id: "admin-guide",
    navLabel: "Admin Guide",
    title: "Admin Guide",
    body: ["Admin Mode controls tenant policy, source permissions, provider settings, and user roles."],
    bullets: [
      ["Tenant policy", "source access, jurisdictional scope, and provider eligibility."],
      ["Source permissions", "which libraries are approved for citation, display, or export."],
      ["Role configuration", "admins, reviewers, preparers, and integration service accounts."],
    ],
  },
  {
    id: "integration-guide",
    navLabel: "Integration Guide",
    title: "Integration Guide",
    body: [
      "ZoikoLogia™ is designed to connect to the workpaper, document management, and review tools your team already uses, through controlled APIs, webhooks, and export rules with inherited classification tags.",
    ],
  },
  {
    id: "onboarding",
    navLabel: "Onboarding",
    title: "Onboarding",
    steps: [
      ["Create your tenant", "set up your organization and initial admin account."],
      ["Configure sources", "approve the source libraries your team is licensed to use."],
      ["Invite your team", "assign roles: preparer, reviewer, or admin."],
      ["Run your first workflow", "try Workflow Mode on a real, low-risk question."],
    ],
  },
  {
    id: "user-role-guides",
    navLabel: "User Role Guides",
    title: "User Role Guides",
    bullets: [
      ["Preparer", "ask questions, draft workpapers, and structure workflow tasks."],
      ["Reviewer", "work reviewer queues, approve or escalate flagged items."],
      ["Admin", "configure tenant policy, sources, and user roles."],
    ],
  },
  {
    id: "training-pathways",
    navLabel: "Training Pathways",
    title: "Training Pathways",
    bullets: [
      ["New Preparer Track", "core workflow and source-citation basics."],
      ["New Reviewer Track", "risk flags, escalation, and sign-off practices."],
      ["Admin Onboarding Track", "tenant configuration and governance controls."],
    ],
  },
  {
    id: "release-notes",
    navLabel: "Release Notes",
    title: "Release Notes",
    bullets: [
      ["v2.4", "Improved citation panel and confidence-state display in Workflow Mode."],
      ["v2.3", "Added Review Mode reviewer queues and SLA indicators."],
      ["v2.2", "Expanded source authority tiers and license-state handling."],
    ],
  },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function Documentation() {
  return (
    <main className="bg-[#faf7f0] font-sans text-[#16233d] dark:bg-gray-900 dark:text-white">
      {/* ─── Hero ─── */}
      <section className="bg-[#f7f3ea] px-4 py-16 sm:px-6 md:px-8 lg:py-20 dark:bg-gray-800">
        <div className="mx-auto max-w-6xl">
          <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#d9720f]">
            <span className="h-px w-6 bg-[#d9720f]" /> Documentation
          </p>
          <h1 className="mt-5 max-w-2xl font-serif text-[clamp(2rem,5vw,3rem)] leading-tight">
            Technical references for implementation and admin setup.
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">
            API reference, admin configuration, onboarding steps, training pathways, and release notes — in one place.
          </p>
        </div>
      </section>

      {/* ─── Body: sidebar + sections ─── */}
      <section className="px-4 py-14 sm:px-6 md:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-[220px_1fr]">
          {/* Sidebar nav */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <nav className="flex flex-col gap-3">
              {sections.map((s) => (
                <Link
                  key={s.id}
                  href={`#${s.id}`}
                  className="text-sm text-slate-500 transition-colors hover:text-[#0d9488] dark:text-gray-400 dark:hover:text-[#34d39e]"
                >
                  {s.navLabel}
                </Link>
              ))}
            </nav>
          </aside>

          {/* Sections */}
          <div>
            {sections.map((s, i) => (
              <article
                key={s.id}
                id={s.id}
                className={`scroll-mt-24 pb-10 ${i > 0 ? "border-t border-black/10 pt-10 dark:border-gray-700" : ""}`}
              >
                <h2 className="font-serif text-[clamp(1.3rem,2.5vw,1.6rem)] leading-tight">{s.title}</h2>

                {s.body?.map((p, k) => (
                  <p key={k} className="mt-4 max-w-2xl text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">{p}</p>
                ))}

                {s.code ? (
                  <pre className="mt-5 overflow-x-auto rounded-lg bg-[#0d1b2e] p-4 text-[13px] leading-relaxed text-slate-200 dark:bg-gray-950">
                    <code>{s.code}</code>
                  </pre>
                ) : null}

                {s.code ? (
                  <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">
                    Every response includes a source bundle ID, risk classification, and confidence state alongside the answer text.
                  </p>
                ) : null}

                {s.bullets ? (
                  <div className="mt-5 space-y-2.5">
                    {s.bullets.map(([lead, rest], k) => (
                      <p key={k} className="text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">
                        <span className="font-bold text-[#16233d] dark:text-white">{lead}</span> — {rest}
                      </p>
                    ))}
                  </div>
                ) : null}

                {s.steps ? (
                  <div className="mt-5 space-y-2.5">
                    {s.steps.map(([lead, rest], k) => (
                      <p key={k} className="text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">
                        <span className="font-bold text-[#16233d] dark:text-white">{k + 1}. {lead}</span> — {rest}
                      </p>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-[#efe8d6] px-4 pb-20 sm:px-6 md:px-8 dark:bg-gray-900">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl bg-[#071a33] px-6 py-16 text-center sm:px-10">
            <p className="flex items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#0d9488]">
              <span className="h-px w-6 bg-[#0d9488]" /> Need something specific?
            </p>
            <h2 className="mx-auto mt-5 max-w-lg font-serif text-[clamp(1.6rem,4vw,2.1rem)] leading-tight text-white">
              Our team can walk your engineers through setup directly.
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/request-integration-briefing"
                className="rounded-md bg-[#f59a23] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Request Integration Briefing
              </Link>
              <Link
                href="/resources"
                className="rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
              >
                Back to Resources
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

;
