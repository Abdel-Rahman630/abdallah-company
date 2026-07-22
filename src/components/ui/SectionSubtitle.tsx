import { SectionSubtitleProps } from "@/types/models";

export default function SectionSubtitle({ children, className = "" }: SectionSubtitleProps) {
  return (
    <h3 className={`text-[#C9A84C] text-[0.9rem] font-semibold uppercase ${className}`}>
      {children}
    </h3>
  );
}
