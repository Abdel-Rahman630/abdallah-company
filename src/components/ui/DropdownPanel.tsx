import Image from "next/image";
import Link from "next/link";
import { DropdownPanelProps } from "@/types/models";
import { ArrowIcon } from "@/components/icons/ArrowIcon";

export default function DropdownPanel({ sectionTitle, boxes, image, isMobile, onLinkClick }: DropdownPanelProps) {
  return (
    <div
      className={`flex w-[939px] h-[418px] rounded-[5px] p-[38px] max-[1020px]:w-full max-[1020px]:h-auto max-[1020px]:p-0 ${
        isMobile ? "bg-transparent" : "bg-[#1E1E1E] shadow-[0_0_40px_10px_rgba(0,0,0,0.19)]"
      }`}
    >
      {/* Left column: title + boxes */}
      <div className="flex-1 flex flex-col overflow-hidden border-r border-[#666] pr-[38px] mr-[38px] max-[1020px]:border-none max-[1020px]:pr-0 max-[1020px]:mr-0">
        {/* <p className="text-[#666] text-[12px] font-semibold uppercase pb-[25px] shrink-0 md:hidden">
          {sectionTitle}
        </p> */}

        {/* Boxes */}
        <div className="flex flex-col gap-4 overflow-auto">
          {boxes.length > 1 && (
            <div className="flex gap-4 max-[1020px]:flex-col">
              {boxes.slice(0, 2).map((box, i) => {
                const Wrapper = box.link ? Link : "div";
                return (
                  <Wrapper
                    key={i}
                    href={box.link || "#"}
                    onClick={onLinkClick}
                    className="flex-1 cursor-pointer rounded-[5px] bg-[#2D2D2D] p-[10px] hover:bg-[#383838] transition-colors block"
                  >
                    <div className="flex items-center gap-[5px] pb-[13px]">
                      <span className="text-white text-[0.9rem] font-medium">{box.title}</span>
                      <ArrowIcon />
                    </div>
                    <p className="text-[#666] text-[0.75rem] font-medium text-justify">{box.text}</p>
                  </Wrapper>
                );
              })}
            </div>
          )}

          {boxes.length === 1 && (() => {
            const Wrapper = boxes[0].link ? Link : "div";
            return (
              <Wrapper 
                href={boxes[0].link || "#"}
                onClick={onLinkClick}
                className="cursor-pointer rounded-[5px] bg-[#2D2D2D] p-[10px] hover:bg-[#383838] transition-colors block"
              >
                <div className="flex items-center gap-[5px] pb-[13px]">
                  <span className="text-white text-[0.9rem] font-medium">{boxes[0].title}</span>
                  <ArrowIcon />
                </div>
                <p className="text-[#666] text-[0.75rem] font-medium text-justify">{boxes[0].text}</p>
              </Wrapper>
            );
          })()}

          {boxes.slice(2).map((box, i) => {
            const Wrapper = box.link ? Link : "div";
            return (
              <Wrapper
                key={i}
                href={box.link || "#"}
                onClick={onLinkClick}
                className="cursor-pointer rounded-[5px] bg-[#2D2D2D] p-[10px] hover:bg-[#383838] transition-colors block"
              >
                <div className="flex items-center gap-[5px] pb-[13px]">
                  <span className="text-white text-[0.9rem] font-medium">{box.title}</span>
                  <ArrowIcon />
                </div>
                <p className="text-[#666] text-[0.75rem] font-medium text-justify">{box.text}</p>
              </Wrapper>
            );
          })}
        </div>
      </div>

      {/* Right column: image */}
      <div className="shrink-0 w-[258px] h-[342px] rounded-[5px] overflow-hidden relative max-[1020px]:hidden">
        <Image src={image} alt={sectionTitle} fill className="object-cover" sizes="258px" />
      </div>
    </div>
  );
}
