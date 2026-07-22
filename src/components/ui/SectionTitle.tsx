import { SectionTitleProps } from "@/types/models";

export default function SectionTitle({ children, className = "" }: SectionTitleProps) {
  return (
    <h2 className={`text-[#1E1E1E] text-[2.5rem] font-bold leading-tight ${className}`}>
      {children}
    </h2>
  );
}
