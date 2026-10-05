import Link from "next/link";

type Variant = "primary" | "outline" | "ghost";

const VARIANTS: Record<Variant, string> = {
  primary: "border-transparent bg-[#f59a23] text-[#071a33]",
  outline: "border-[#e3d9c2] bg-transparent text-[#071a33]",
  ghost: "border-white/45 bg-white/[0.04] text-white",
};

interface ActionLinkProps {
  href: string;
  variant: Variant;
  children: React.ReactNode;
}

export default function ActionLink({ href, variant, children }: ActionLinkProps) {
  return (
    <Link
      href={href}
      className={`flex items-center justify-center rounded-[6px] border px-5 pb-[11.59px] pt-[10px] text-center text-[13.5px] font-semibold leading-[21.6px] whitespace-nowrap transition-opacity hover:opacity-90 ${VARIANTS[variant]}`}
    >
      {children}
    </Link>
  );
}
