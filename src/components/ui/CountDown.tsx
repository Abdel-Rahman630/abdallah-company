"use client";

import { Counter } from "@/hooks/Counter";
import { RevealText } from "@/components/ui/ScrollReveal";
import { CountDownItem, CountDownProps } from "@/types/models";

export default function CountDown({
  data
}: CountDownProps) {
  // On lg: all items in one row. On mobile/tablet: 2 per row.
  const lgColsClass =
    data.length === 3
      ? "lg:grid-cols-3"
      : data.length === 4
      ? "lg:grid-cols-4"
      : data.length === 5
      ? "lg:grid-cols-5"
      : `lg:grid-cols-${data.length}`;

  // For lg border logic: right border on all except the last
  // For mobile/tablet (2 cols): right border on left col, bottom border between rows
  const smCols = 2;
  const smTotalRows = Math.ceil(data.length / smCols);

  return (
    <div className={`mx-auto grid grid-cols-2 ${lgColsClass} w-full`}>
      {data.map((item, index) => {
        // --- mobile/tablet (2-col) borders ---
        const smCol = index % smCols;
        const smRow = Math.floor(index / smCols);
        const smIsLastRow = smRow === smTotalRows - 1;
        const smIsLeftCol = smCol === 0;

        // --- lg (N-col) borders ---
        const lgIsLast = index === data.length - 1;

        const borderClasses = [
          "border-[#D1A52A]",
          // mobile/tablet: right border on left column
          smIsLeftCol ? "border-r" : "border-r-0",
          // mobile/tablet: bottom border between rows (not last row)
          !smIsLastRow ? "border-b" : "border-b-0",
          // lg: reset bottom, apply right border to all except last
          !lgIsLast ? "lg:border-r" : "lg:border-r-0",
          "lg:border-b-0",
        ].join(" ");

        return (
          <div
            key={index}
            className={`flex flex-col items-center text-center lg:items-start lg:text-left px-4 py-6 lg:py-0 ${borderClasses}`}
          >
            <RevealText delay={0.1 * index}>
              <span className={`text-[#1E1E1E] text-[1.5rem] md:text-[2.5rem] font-semibold uppercase mb-[10px] leading-none block`}>
                {item.prefix}
                {typeof item.to === "number" ? (
                  <Counter to={item.to} suffix={item.suffix || ""} />
                ) : (
                  <>{item.to}{item.suffix}</>
                )}
              </span>
              <span className={`text-[#656565] text-[1rem] font-normal uppercase whitespace-pre-line block`}>
                {item.title}
              </span>
            </RevealText>
          </div>
        );
      })}
    </div>
  );
}
