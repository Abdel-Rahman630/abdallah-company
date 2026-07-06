import Link from "next/link";
import { ReactNode } from "react";

interface WhiteButtonProps {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
}

export default function WhiteButton({ href, children, icon }: WhiteButtonProps) {
  return (
    <Link
      href={href}
      className="flex items-center justify-center gap-[4px] px-[16px] rounded-[5px] text-[#1E1E1E] bg-white hover:opacity-90 transition-opacity"
      style={{ height: "37px", fontSize: "0.85rem", fontWeight: 400, alignSelf: "stretch" }}
    >
      {children}
      {icon}
    </Link>
  );
}
