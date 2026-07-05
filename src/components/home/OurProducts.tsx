"use client";

import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';

export default function OurProducts() {
  return (
    <section id="products" className="section-padding bg-custom-gradient">
      <div className="container mx-auto px-4">
        <ScrollAnimation className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover our range of premium solutions tailored for you.</p>
        </ScrollAnimation>

        <div className="flex flex-col md:flex-row gap-[50px]">
          {/* Left Slider - 30% Width */}
          <div className="w-full md:w-[30%]">
            <ScrollAnimation>
              <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
                className="w-full rounded-[5px] overflow-hidden shadow-sm"
              >
                <SwiperSlide>
                  <div className="h-[400px] bg-gray-300 w-full flex items-center justify-center text-gray-500">
                    Image 1
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="h-[400px] bg-gray-400 w-full flex items-center justify-center text-white">
                    Image 2
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="h-[400px] bg-gray-500 w-full flex items-center justify-center text-white">
                    Image 3
                  </div>
                </SwiperSlide>
              </Swiper>
            </ScrollAnimation>
          </div>

          {/* Right Text Area */}
          <div className="w-full md:flex-1 flex flex-col justify-center">
            <ScrollAnimation delay={0.2}>
              {/* Text placeholder where you will add your text */}
              <div className="text-content">
                {/* 
                   You can add your text content here!
                   The slider on the left takes 30% of the width,
                   and this area takes the rest, with a 50px gap between them.
                */}
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
