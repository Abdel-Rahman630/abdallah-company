"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { useLanguage } from "@/providers/LanguageProvider";

import { HistoryItem } from "@/types/models";

export default function HistorySlider() {
  const { locale } = useLanguage();
  const [historyData, setHistoryData] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [barKey, setBarKey] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    async function fetchHistory() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/cms/history?lang=${locale}`
        );
        const json = await res.json();
        if (json.data) {
          setHistoryData(json.data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchHistory();
  }, [locale]);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
    setBarKey((k) => k + 1);
  };

  if (loading || historyData.length === 0) return null;

  return (
    <section className="relative h-[700px] overflow-hidden">

      {/* Background Swiper */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade, Navigation]}
          effect="fade"
          loop
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          navigation={{
            nextEl: ".history-next",
            prevEl: ".history-prev",
          }}
          onSwiper={(swiper) => { swiperRef.current = swiper; }}
          onSlideChange={handleSlideChange}
          className="w-full h-full"
        >
          {historyData.map((item, idx) => (
            <SwiperSlide key={`slide-${idx}`}>
              <div className="relative w-full h-full">
                <Image
                  src={item.image}
                  alt={item.title ?? "History slide"}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={idx === 0}
                  unoptimized
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(30,30,30,0.60)_0%,rgba(30,30,30,0.00)_50%),linear-gradient(180deg,rgba(30,30,30,0.00)_0%,#1E1E1E_100%)]" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Static Top Title */}
      <div className="absolute top-[40px] left-0 right-0 z-20 pointer-events-none">
        <div className="container mx-auto text-center px-4">
          <h3 className="text-white text-[1.75rem] font-normal mb-[8px]">History &amp; Legacy</h3>
          <h2 className="text-white text-[2rem] font-bold">A legacy of trust, growth, <br /> and excellence across generations.</h2>
        </div>
      </div>

      {/* Bottom Content */}
      <div className="absolute bottom-[80px] left-0 right-0 z-20">
        <div className="container mx-auto px-4">
          {historyData.map((item, idx) => (
            <div
              key={`content-${idx}`}
              className={`transition-opacity duration-500 ${idx === activeIndex ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none absolute inset-x-0"}`}
            >
              <div className="pb-[37px] border-b-[3px] border-white/10 relative flex flex-col md:flex-row justify-between items-start md:items-end gap-[24px]">

                {/* Text */}
                <div className="max-w-4xl">
                  <div className="flex gap-[24px] items-baseline mb-[1rem]">
                    <span className="text-white text-[4rem] font-normal leading-none">{item.year}</span>
                    <span className="text-white text-[2.5rem] font-light uppercase leading-none">{item.hijri_year}H</span>
                  </div>
                  <h4 className="text-white text-[1.5rem] font-medium mb-[1rem]">
                    {item.title}
                  </h4>
               
                         <p 
                  className="text-white text-justify text-[1rem] font-normal [&_strong]:text-black [&_strong]:font-bold"
                  dangerouslySetInnerHTML={{ __html: item.description || item.paragraph || item.short_description || "" }}
                />
                </div>

                {/* Navigation */}
                <div className="flex gap-[1rem] shrink-0">
                  <button
                    className="history-prev flex items-center justify-center cursor-pointer opacity-100 hover:opacity-80 transition-opacity disabled:opacity-20"
                    aria-label="Previous slide"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M28 0C30.2091 0 32 1.79086 32 4V28C32 30.2091 30.2091 32 28 32H4C1.79086 32 0 30.2091 0 28V4C0 1.79086 1.79086 0 4 0H28ZM11.5859 16L18.293 22.707L19.707 21.293L14.4141 16L19.707 10.707L18.293 9.29297L11.5859 16Z" fill="white" />
                    </svg>
                  </button>
                  <button
                    className="history-next flex items-center justify-center cursor-pointer opacity-100 hover:opacity-80 transition-opacity disabled:opacity-20"
                    aria-label="Next slide"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M4 0C1.79086 0 0 1.79086 0 4V28C0 30.2091 1.79086 32 4 32H28C30.2091 32 32 30.2091 32 28V4C32 1.79086 30.2091 0 28 0H4ZM20.4141 16L13.707 22.707L12.293 21.293L17.5859 16L12.293 10.707L13.707 9.29297L20.4141 16Z" fill="white" />
                    </svg>
                  </button>
                </div>

                {/* Loading bar — key forces re-mount to restart animation */}
                <div
                  key={`bar-${barKey}`}
                  className="history-loading-bar absolute bottom-[-3px] left-0 h-[3px] bg-white"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
