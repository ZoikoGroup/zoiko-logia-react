"use client";

import { useEffect, useState } from "react";

export const TOC = [
  { id: "overview", label: "Overview" },
  { id: "provenance", label: "Provenance" },
  { id: "versions", label: "Versions" },
  { id: "navigator", label: "Search & browse" },
  { id: "anatomy", label: "Reference anatomy" },
  { id: "schema", label: "Schema model" },
  { id: "access", label: "Access boundary" },
  { id: "errors", label: "Errors" },
  { id: "code", label: "Code & payloads" },
  { id: "changes", label: "Changes" },
  { id: "routes", label: "Related routes" },
  { id: "faq", label: "FAQ" },
] as const;

/** "On this page" navigation: a sticky rail on desktop, a collapsible list below `lg`. */
export default function OnThisPage() {
  const [active, setActive] = useState<string>(TOC[0].id);

  useEffect(() => {
    const els = TOC.map((t) => document.getElementById(t.id)).filter(Boolean) as HTMLElement[];
    if (!els.length || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -65% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const list = (
    <nav aria-label="On this page" className="flex flex-col">
      {TOC.map((t) => {
        const on = t.id === active;
        return (
          <a
            key={t.id}
            href={`#${t.id}`}
            aria-current={on ? "location" : undefined}
            className={`border-l-2 px-3 py-[7px] text-[13px] leading-[20.8px] transition-colors ${
              on
                ? "border-[#f59a23] bg-gradient-to-r from-[rgba(245,154,35,0.1)] to-transparent font-bold text-[#071a33]"
                : "border-[#e3d9c2] font-medium text-[#5c6672] hover:text-[#071a33]"
            }`}
          >
            {t.label}
          </a>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* Below lg: collapsible */}
      <details className="mb-2 rounded-[10px] border border-[#e3d9c2] bg-white lg:hidden">
        <summary className="cursor-pointer px-4 py-3 text-[11px] font-bold uppercase tracking-[0.945px] text-[#5c6672]">
          On this page
        </summary>
        <div className="px-4 pb-3">{list}</div>
      </details>

      {/* lg and up: sticky rail */}
      <aside className="hidden lg:block">
        <div className="sticky top-24 flex flex-col gap-[10px]">
          <h2 className="pb-[0.8px] text-[10.5px] font-bold uppercase leading-[16.8px] tracking-[0.945px] text-[#8b93a0]">
            On this page
          </h2>
          {list}
          <p className="mt-[16px] rounded-[10px] border border-dashed border-[#cdbf9f] p-3 text-[11.2px] leading-[17.36px] text-[#8b93a0]">
            Illustrative specimens on this page are labeled. None is production syntax.
          </p>
        </div>
      </aside>
    </>
  );
}
