interface EyebrowProps {
  children: React.ReactNode;
  tone?: "section" | "hero";
}

const TONES = {
  section: { bar: "bg-[#d97f0e]", text: "text-[#d97f0e]" },
  hero: { bar: "bg-[#f59a23]", text: "text-[#f59a23]" },
} as const;

export default function Eyebrow({ children, tone = "section" }: EyebrowProps) {
  const t = TONES[tone];
  return (
    <div className="flex min-h-[20px] items-center gap-2">
      <span className={`h-[2px] w-4 shrink-0 rounded-[2px] ${t.bar}`} />
      <p
        className={`text-[12px] font-bold uppercase leading-[19.2px] tracking-[0.96px] ${t.text}`}
      >
        {children}
      </p>
    </div>
  );
}
