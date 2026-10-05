import Link from "next/link";

/** Shown on the mobile frame only (the desktop frame has no breadcrumb row). */
export default function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="px-5 pb-[13px] lg:hidden">
      <p className="text-[12px] leading-[19.2px]">
        <Link href="/" className="font-semibold text-[#5c6672]">
          Home
        </Link>
        <span className="text-[#8b93a0]"> / </span>
        <span aria-current="page" className="text-[#123055]">
          Leadership
        </span>
      </p>
    </nav>
  );
}
