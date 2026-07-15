"use client";

import { Counter } from "@/hooks/Counter";
import { RevealText } from "@/components/ui/ScrollReveal";

interface CountDownItem {
  to: number | string;
  suffix?: string;
  prefix?: string;
  title: React.ReactNode | string;
}

export default function CountDown({ data }: { data: CountDownItem[] }) {
  return (
    <div className=" mx-auto grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 gap-y-8 w-full">
      {data.map((item, index) => {
        // On md (6-col grid): items 0-2 each take col-span-2 (fills row 1)
        // items 3 and 4: col-span-2, and we push item 3 to col-start-2 to center the pair
        const mdColSpan = "md:col-span-2";
        const mdColStart =
          index === 3 ? "md:col-start-2" : index === 4 ? "md:col-start-4" : "";
        // On lg (5-col grid): each takes 1 col
        const lgColSpan = "lg:col-span-1";
        const lgColStart = index === 3 ? "lg:col-start-auto" : "";

        const isNotLast = index !== data.length - 1;

        return (
          <div
            key={index}
            className={`flex flex-col items-center md:items-start text-center md:text-left px-6
              ${mdColSpan} ${mdColStart} ${lgColSpan} ${lgColStart}
              ${isNotLast ? "border-b border-[#D1A52A] md:border-b-0 md:border-r md:border-[#D1A52A]" : ""}
              pb-6 md:pb-0
            `}
          >
            <RevealText delay={0.1 * index}>
              <span className="text-[#1E1E1E] text-[3.75rem] font-semibold uppercase mb-[10px] leading-none block">
                {item.prefix}
                {typeof item.to === "number" ? (
                  <Counter to={item.to} suffix={item.suffix || ""} />
                ) : (
                  <>{item.to}{item.suffix}</>
                )}
              </span>
              <span className="text-[#656565] text-[1.25rem] font-normal uppercase whitespace-pre-line block">
                {item.title}
              </span>
            </RevealText>
          </div>
        );
      })}
    </div>
  );
}
