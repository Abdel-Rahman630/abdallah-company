"use client";

import React, { useMemo } from "react";
import { RevealImage, RevealText } from "@/components/ui/ScrollReveal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import ArrowLink from "@/components/ui/ArrowLink";
import "swiper/css";
import "swiper/css/effect-fade";
import CountDown from "@/components/ui/CountDown";
import type { WhoWeAreSectionFields, CountDownItem } from "@/types/models";
import { formatCtaUrl } from "@/lib/utils";

interface WhoWeAreProps {
  fields?: WhoWeAreSectionFields | null;
}

export default function WhoWeAre({ fields }: WhoWeAreProps) {
  const galleryItems = useMemo(() => {
    if (fields?.gallery && fields.gallery.length > 0) {
      return fields.gallery.slice().sort((a, b) => a.sort_order - b.sort_order);
    }
    return [];
  }, [fields?.gallery]);

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

  const eyebrow = fields?.eyebrow;
  const titleHtml = fields?.title;
  const descHtml = fields?.description;
  const ctaLabel = fields?.cta_label;
  const ctaUrl = formatCtaUrl(fields?.cta_url);

  return (
    <section id="whoWeAre" className="py-[80px] bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-[26px] lg:gap-[50px]">
          {galleryItems.length > 0 && (
            <div className="w-full lg:w-[40%] lg:h-auto h-[350px]">
              <RevealImage className="h-full">
                <Swiper
                  modules={[Autoplay, EffectFade]}
                  effect="fade"
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  loop={galleryItems.length > 1}
                  className="w-full h-full overflow-hidden shadow-sm rounded-[10px]"
                >
                  {galleryItems.map((item) => (
                    <SwiperSlide key={item.id}>
                      <div className="relative h-full w-full">
                        <Image
                          src={item.image}
                          alt={item.alt_text || "AHCL"}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 40vw"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </RevealImage>
            </div>
          )}

          <div className="w-full lg:flex-1 flex flex-col justify-center py-[24px]">
            <div className="text-content">
              {eyebrow && (
                <RevealText delay={0.1}>
                  <div className="flex items-center gap-[10px] mb-[11.5px]">
                    <Image
                      src="/logo.png"
                      alt="Logo"
                      width={96}
                      height={24}
                      className="h-6 object-contain"
                      style={{ width: "auto" }}
                    />
                    <span className="text-[#1E1E1E] text-[0.9rem] font-normal uppercase">
                      {eyebrow}
                    </span>
                  </div>
                </RevealText>
              )}

              {titleHtml && (
                <RevealText delay={0.2}>
                  <h2
                    className="text-[#1E1E1E] text-[1.8rem] font-light tracking-[-0.704px] uppercase mb-[2rem] [&_strong]:font-bold"
                    dangerouslySetInnerHTML={{ __html: titleHtml }}
                  />
                </RevealText>
              )}

              {descHtml && (
                <RevealText delay={0.3}>
                  <div
                    className="text-[#727272] text-[0.95rem] font-normal mb-[32px] [&_strong]:font-bold [&_strong]:text-[#1E1E1E] [&_p]:m-0 [&_p]:mb-2"
                    dangerouslySetInnerHTML={{ __html: descHtml }}
                  />
                </RevealText>
              )}

              {ctaLabel && ctaUrl && (
                <ArrowLink href={ctaUrl} color="black">
                  {ctaLabel}
                </ArrowLink>
              )}
            </div>

            {countdownData.length > 0 && (
              <div className="countdown mt-[32px] w-full">
                <CountDown data={countdownData} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
