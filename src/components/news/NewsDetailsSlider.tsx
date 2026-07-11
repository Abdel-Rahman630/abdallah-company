"use client";

import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const images = ["/newsDetails.png", "/newsDetails.png", "/newsDetails.png"];

export default function NewsDetailsSlider() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="relative w-full h-[500px] mb-[40px] rounded-[10px] overflow-hidden">
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".custom-prev-button",
          nextEl: ".custom-next-button",
        }}
        className="w-full h-full"
        loop={true}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <Image
              src={src}
              alt={`News Detail ${index + 1}`}
              fill
              className="object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation */}
      <div className="absolute left-[24px] bottom-[24px] z-20 flex gap-[8px]">
        <button className="custom-prev-button w-[32px] h-[32px] bg-white rounded-[4px] flex items-center justify-center transition-transform hover:scale-105 active:scale-95 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M11.7073 13.293L10.293 14.7072L3.58594 8.00008L10.293 1.29297L11.7073 2.70718L6.41436 8.00008L11.7073 13.293Z" fill="#1E1E1E"/>
          </svg>
        </button>
        <button className="custom-next-button w-[32px] h-[32px] bg-white rounded-[4px] flex items-center justify-center transition-transform hover:scale-105 active:scale-95 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M4.29274 13.293L5.70696 14.7072L12.4141 8.00008L5.70696 1.29297L4.29274 2.70718L9.58564 8.00008L4.29274 13.293Z" fill="#1E1E1E"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
