import Link from "next/link";
import { ReactNode } from "react";

interface WhiteButtonProps {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}

export default function WhiteButton({ href, children, icon, className = "" }: WhiteButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex justify-center items-center gap-[10px] bg-white text-black rounded-[5px] px-[16px] h-[37px] text-[0.85rem] font-normal self-stretch transition-transform duration-500 hover:scale-105 active:scale-95 shadow-[0px_4px_10px_rgba(0,0,0,0.1)] ${className}`}
    >
      {children}
      {icon}
    </Link>
  );
}
