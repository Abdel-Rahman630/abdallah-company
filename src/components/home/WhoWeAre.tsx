"use client";

import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { Counter } from "@/hooks/Counter";

import "swiper/css";
import "swiper/css/effect-fade";

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
  { to: 33, suffix: "+", title: "BRANCHES" },
  { to: 90, suffix: "+", title: "DEALERS" },
];

export default function WhoWeAre() {
  return (
    <section
      id="whoWeAre"
      className="section-padding bg-white"
      style={{ backgroundImage: "linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(157, 157, 157, 0.52) 100%)" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-[26px] lg:gap-[50px]">
          {/* Left Slider - 30% Width */}
          <div className="w-full lg:w-[40%] lg:h-auto h-[350px]">
            <ScrollAnimation className="h-full">
              <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
                className="w-full rounded-[5px] overflow-hidden shadow-sm h-full"
              >
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <SwiperSlide key={num}>
                    <div className="relative h-full w-full">
                      <Image src={`/${num}.png`} alt={`Slide ${num}`} fill className="object-cover" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </ScrollAnimation>
          </div>

          {/* Right Text Area */}
          <div className="w-full lg:flex-1 flex flex-col justify-center py-[24px]">
            <div className="text-content">
              <ScrollAnimation delay={0.2}>
                <div className="flex items-center gap-[10px] mb-[11.5px]">
                  <Image src="/logo.png" alt="Logo" width={96} height={24} className="h-6 w-auto object-contain" />
                  <span className="text-[#1E1E1E] text-[1rem] font-normal  uppercase">who we are</span>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.3}>
                <h2 className="text-[#1E1E1E] text-[2rem] font-light tracking-[-0.704px] uppercase mb-[2rem]">
                  A Legacy of <span className="font-bold">Automotive & machinery distributor</span> Excellence
                </h2>
              </ScrollAnimation>

              <ScrollAnimation delay={0.4}>
                <p className="text-[#727272] text-[1rem] font-normal  mb-[32px]">
                  <span className="font-bold text-[#1E1E1E]">Abdullah Hashim Company Limited (AHCL) </span>
                  is an established automotive and machinery distributor in Saudi Arabia. Since its establishment in
                  1945, it has grown and expanded its network of showrooms, service centers & dealers, allowing it to
                  serve a large customer base in the kingdom. AHCL operates across automobiles (including HONDA),
                  machinery & commercial trucks and is headquartered in Jeddah, Saudi Arabia.
                </p>
              </ScrollAnimation>

              <ScrollAnimation delay={0.5}>
                <Link
                  href="#"
                  className="group inline-flex items-center text-black gap-2 text-[#1E1E1E] text-[1rem] font-normal  uppercase underline"
                >
                  More on about us
                  <svg
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="10"
                    viewBox="0 0 13 10"
                    fill="none"
                  >
                    <path
                      d="M12.6624 4.24708L8.57908 0.163749C8.46907 0.0574899 8.32171 -0.00130703 8.16877 2.20514e-05C8.01582 0.00135113 7.86951 0.0626998 7.76136 0.170855C7.6532 0.279009 7.59185 0.425316 7.59052 0.578265C7.5892 0.731213 7.64799 0.878564 7.75425 0.988582L10.8418 4.07617H0.583333C0.428624 4.07617 0.280251 4.13762 0.170854 4.24702C0.0614581 4.35642 0 4.50479 0 4.6595C0 4.81421 0.0614581 4.96258 0.170854 5.07198C0.280251 5.18137 0.428624 5.24283 0.583333 5.24283H10.8418L7.75425 8.33042C7.69854 8.38423 7.6541 8.44859 7.62352 8.51976C7.59295 8.59093 7.57686 8.66748 7.57619 8.74493C7.57551 8.82239 7.59027 8.8992 7.6196 8.97089C7.64894 9.04258 7.69225 9.10771 7.74702 9.16248C7.80179 9.21725 7.86692 9.26056 7.93861 9.2899C8.0103 9.31923 8.08711 9.33399 8.16457 9.33331C8.24202 9.33264 8.31857 9.31655 8.38974 9.28597C8.46091 9.2554 8.52527 9.21096 8.57908 9.15525L12.6624 5.07192C12.7718 4.96252 12.8332 4.81418 12.8332 4.6595C12.8332 4.50482 12.7718 4.35647 12.6624 4.24708Z"
                      fill="#1E1E1E"
                    />
                  </svg>
                </Link>
              </ScrollAnimation>
            </div>

            <ScrollAnimation delay={0.6}>
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
                          ? "pt-4 md:pt-0 md:pl-12"
                          : "py-4 md:py-0 md:pl-12"
                    }`}
                  >
                    <span className="text-[#1E1E1E]  text-[3.75rem] font-semibold uppercase mb-[10px] leading-none">
                      <Counter to={item.to} suffix={item.suffix} />
                    </span>
                    <span className="text-[#656565]  text-[1.25rem] font-normal uppercase">{item.title}</span>
                  </div>
                ))}
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
