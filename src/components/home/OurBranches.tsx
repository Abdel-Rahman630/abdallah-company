"use client";

import React, { useMemo } from "react";
import { RevealText, RevealImage } from "@/components/ui/ScrollReveal";
import Image from "next/image";
import ArrowLink from "@/components/ui/ArrowLink";
import CountDown from "@/components/ui/CountDown";
import SubTitle from "@/components/ui/SubTitle";
import type { NetworkCoverageSectionFields, CountDownItem } from "@/types/models";
import { formatCtaUrl } from "@/lib/utils";

interface OurBranchesProps {
  fields?: NetworkCoverageSectionFields | null;
}

const getLegendColor = (type: string, index: number) => {
  switch (type) {
    case "head_office":
      return "#D1A52A";
    case "distribution_hub":
      return "#EF4444";
    case "operation_network":
      return "#10B981";
    default: {
      const fallbackColors = ["#D1A52A", "#EF4444", "#10B981"];
      return fallbackColors[index % fallbackColors.length];
    }
  }
};
export default function OurBranches({ fields }: OurBranchesProps) {
  const eyebrow = fields?.eyebrow;
  const title = fields?.title;
  const mapImage = fields?.map_image;
  const mapAlt = fields?.map_alt || "Branches Map";
  const ctaLabel = fields?.cta_label;
  const ctaUrl = formatCtaUrl(fields?.cta_url);

  const legendItems = useMemo(() => {
    if (fields?.legend_items && fields.legend_items.length > 0) {
      return fields.legend_items
        .slice()
        .sort((a, b) => a.sort_order - b.sort_order);
    }
    return [];
  }, [fields?.legend_items]);

  const countdownData = useMemo<CountDownItem[]>(() => {
    if (fields?.statistics && fields.statistics.length > 0) {
      return fields.statistics
        .slice()
        .sort((a, b) => a.sort_order - b.sort_order)
        .map((stat) => ({
          to: parseInt(stat.value.replace(/,/g, ""), 10) || stat.value,
          suffix: stat.suffix || "",
          title: stat.label,
        }));
    }
    return [];
  }, [fields?.statistics]);

  return (
    <section
      id="branches"
      className="py-[53px] bg-cover bg-center bg-[url('/contact-section.png')]"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-[50px] lg:gap-[100px] items-center">
          {/* First Div: Content */}
          <div className="flex-1 py-[24px]">
            {eyebrow && (
              <RevealText delay={0.1}>
                <SubTitle>{eyebrow}</SubTitle>
              </RevealText>
            )}

            {title && (
              <RevealText delay={0.2}>
                <h2 className="mb-[34px] uppercase leading-tight text-[#1E1E1E] text-[2.125rem] font-bold">
                  {title}
                </h2>
              </RevealText>
            )}

            {legendItems.length > 0 && (
              <ul className="flex flex-row flex-wrap gap-[32px] mb-[32px]">
                {legendItems.map((item, index) => {
                  const color = getLegendColor(item.type, index);
                  return (
                    <li key={item.id || index} className="flex items-center gap-[17px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="29"
                        height="29"
                        viewBox="0 0 29 29"
                        fill="none"
                        className="shrink-0"
                      >
                        <circle
                          cx="14.4293"
                          cy="14.4293"
                          r="14.4293"
                          fill={color}
                          fillOpacity="0.22"
                        />
                        <circle
                          cx="14.4293"
                          cy="14.4293"
                          r="13.7734"
                          stroke={color}
                          strokeOpacity="0.55"
                          strokeWidth="1.31175"
                        />
                        <circle
                          cx="14.4298"
                          cy="14.4279"
                          r="6.55875"
                          fill={color}
                        />
                      </svg>
                      <span className="text-[#949494] text-[0.8125rem] font-normal">
                        {item.label}
                      </span>
                    </li>
                  );
                })}
              </ul>
            )}

            {countdownData.length > 0 && (
              <div className="countdown mb-[32px] w-full">
                <CountDown data={countdownData} />
              </div>
            )}

            {ctaLabel && ctaUrl && (
              <ArrowLink href={ctaUrl} color="black">
                {ctaLabel}
              </ArrowLink>
            )}
          </div>

          {/* Second Div: Image */}
          {mapImage && (
            <div className="flex-1 w-full lg:w-auto flex flex-col justify-center items-center lg:items-end">
              <RevealImage className="relative w-full max-w-[700px] lg:max-w-none lg:w-[600px] xl:w-[700px] h-[450px] md:h-[580px] lg:h-[640px]">
                <Image
                  src={mapImage}
                  alt={mapAlt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 700px"
                  unoptimized
                />
              </RevealImage>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}


