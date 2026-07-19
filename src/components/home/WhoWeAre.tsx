"use client";

import { RevealImage, RevealText } from "@/components/ui/ScrollReveal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import ArrowLink from "@/components/ui/ArrowLink";

import "swiper/css";
import "swiper/css/effect-fade";
import { Counter } from "@/hooks/Counter";
import { useLanguage } from "@/providers/LanguageProvider";

const countdownData = [
  {
    to: 80,
    suffix: "+",
    title: (
      <>
        Years of <br /> Experience
      </>
    ),
  },
  { to: 33, suffix: "+",   title: (
      <>
        Branches Kingdom <br /> Wide
      </>
    ) },
  { to: 25, suffix: "+", title: "Brands" },
];

export default function WhoWeAre() {
  const { t } = useLanguage();


  return (
    <section
      id="whoWeAre"
      className="section-padding bg-white"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-[26px] lg:gap-[50px]">
          {/* Left Slider - 30% Width */}
          <div className="w-full lg:w-[40%] lg:h-auto h-[350px]">
            <RevealImage className="h-full">
              <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
                className="w-full h-full overflow-hidden shadow-sm rounded-[10px]"
              >
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <SwiperSlide key={num}>
                    <div className="relative h-full w-full">
                      <div className="w-full h-full relative">
                        <Image src={`/${num}.png`} alt={`Slide ${num}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 40vw" />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </RevealImage>
          </div>

          {/* Right Text Area */}
          <div className="w-full lg:flex-1 flex flex-col justify-center py-[24px]">
            <div className="text-content">
              <RevealText delay={0.1}>
                <div className="flex items-center gap-[10px] mb-[11.5px]">
                  <Image src="/logo.png" alt="Logo" width={96} height={24} className="h-6 object-contain" style={{ width: "auto" }} />
                  <span className="text-[#1E1E1E] text-[1rem] font-normal  uppercase">{t("home.whoWeAre")}</span>
                </div>
              </RevealText>

              <RevealText delay={0.2}>
                <h2 className="text-[#1E1E1E] text-[2rem] font-light tracking-[-0.704px] uppercase mb-[2rem]">
                  {t("home.whoWeAreTitle")}
                </h2>
              </RevealText>

              <RevealText delay={0.3}>
                <p className="text-[#727272] text-[1rem] font-normal  mb-[32px]">
                  <span className="font-bold text-[#1E1E1E]">Abdullah Hashim Company Limited (AHCL) </span>
                  is an established automotive and machinery distributor in Saudi Arabia. Since its establishment in
                  1945, it has grown and expanded its network of showrooms, service centers & dealers, allowing it to
                  serve a large customer base in the kingdom. AHCL operates across automobiles (including HONDA),
                  machinery & commercial trucks and is headquartered in Jeddah, Saudi Arabia.
                </p>
              </RevealText>

              <ArrowLink href="/about-us" color="black">{t("home.readMore")}</ArrowLink>
            </div>

            <div className="contdown  flex md:flex-row flex-col mt-[32px] w-full">
              {countdownData.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col flex-1 items-center md:items-start text-center md:text-left ${
                    index !== countdownData.length - 1
                      ? "border-b border-[#D1A52A] md:border-b-0 md:border-r md:border-[#D1A52A]"
                      : ""
                  } ${
                    index === 0
                      ? "pb-4 md:pb-0"
                      : index === countdownData.length - 1
                        ? "pt-4 md:pt-0 md:pl-8"
                        : "py-4 md:py-0 md:pl-8"
                  }`}
                >
                  <span className="text-[#1E1E1E]  text-[3.75rem] font-semibold uppercase mb-[10px] leading-none">
                    <Counter to={item.to} suffix={item.suffix} />
                  </span>
                  <span className="text-[#656565]  text-[1.25rem] font-normal uppercase">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
