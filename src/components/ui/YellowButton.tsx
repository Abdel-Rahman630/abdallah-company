import Link from "next/link";
import { ReactNode } from "react";

interface YellowButtonProps {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
  target?: string;
}

export default function YellowButton({ href, children, icon, className = "", target }: YellowButtonProps) {
  return (
    <Link
      href={href}
      target={target}
      className={`inline-flex justify-center items-center gap-[10px] bg-[#D1A52A] text-black rounded-[5px] px-[16px] h-[37px] text-[0.85rem] font-normal self-stretch transition-transform duration-500 hover:scale-105 active:scale-95 ${className}`}
    >
      {children}
      {icon}
    </Link>
  );
}
