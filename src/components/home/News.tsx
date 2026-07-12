"use client";

import Image from "next/image";
import ArrowLink from "@/components/ui/ArrowLink";
import { RevealText } from "@/components/ui/ScrollReveal";
import Link from "next/link";
import UpcomingEventsSlider from "@/components/sliders/UpcomingEventsSlider";


const newsList = [
  {
    id: 1,
    image: "/new2.png",
    subtitle: "Expansion",
    title: "Strategic Network Growth Across the Eastern Province",
    desc: "August 12, 2026"
  },
  {
    id: 2,
    image: "/new3.png",
    subtitle: "Sustainability",
    title: "The Shift to Electric: AHCL's Roadmap for Machinery",
    desc: "August 08, 2026"
  },
  {
    id: 3,
    image: "/new4.png",
    subtitle: "Corporate",
    title: "Celebrating 80 Years of Excellence in Saudi Arabia",
    desc: "July 30, 2026"
  },
    {
    id: 1,
    image: "/new2.png",
    subtitle: "Expansion",
    title: "Strategic Network Growth Across the Eastern Province",
    desc: "August 12, 2026"
  },
  {
    id: 2,
    image: "/new3.png",
    subtitle: "Sustainability",
    title: "The Shift to Electric: AHCL's Roadmap for Machinery",
    desc: "August 08, 2026"
  },
  {
    id: 3,
    image: "/new4.png",
    subtitle: "Corporate",
    title: "Celebrating 80 Years of Excellence in Saudi Arabia",
    desc: "July 30, 2026"
  },
];

export default function News() {


  return (
    <section id="news" className="py-[50px] lg:py-[100px] bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-[80px] pb-[50px] mb-[50px] border-b-[4px] border-[#C9A84C]">
          
          {/* First Div (Left Side) */}
          <div className="w-full lg:w-1/2">
            <RevealText delay={0.1}>
              <h3 className="text-[#C9A84C] text-[0.9rem] font-semibold uppercase mb-[12px]">
                News & Events
              </h3>
            </RevealText>
            <RevealText delay={0.2}>
              <h2 className="text-[#1E1E1E] text-[2.5rem] font-bold mb-[24px] md:mb-[50px]">
                Company Highlights
              </h2>
            </RevealText>

            <RevealText delay={0.3}>
              {/* Box with Background Image */}
              <div
                className="relative rounded-[15px] overflow-hidden flex flex-col justify-end p-[48px] h-[645px] bg-[url('/new1.png')] bg-cover bg-center"
              >
                {/* Optional dark overlay to ensure text is readable */}
                <div className="absolute inset-0 bg-black/40 z-0" />

                <div className="relative z-10 flex flex-col items-start gap-[22px]">
                  {/* First Box (Date + Category) */}
                  <div className="flex items-center gap-[1rem]">
                    <div className="inline-flex items-center gap-1 px-[16px] py-[8px] rounded-[5px] bg-[#C9A84C] flex-col">
                      <span className="text-[#1E1E1E] text-[1.5rem] font-bold leading-none">15</span>
                      <span className="text-[#1E1E1E] text-[0.75rem] font-semibold uppercase leading-none">aug</span>
                    </div>
                    <span className="text-white text-[0.6875rem] font-bold uppercase px-[12px] py-[6px] rounded-[4px] bg-white/10 backdrop-blur-[5px]">
                      Exclusive Reveal
                    </span>
                  </div>

                  {/* Second Box (Content) */}
                  <div>
                    <h3 className="text-white text-[1.8rem] md:text-[2.625rem] font-bold mb-[1rem] leading-tight">
                      {"UNVEILING THE FUTURE OF PERFORMANCE: AHCL'S FLAGSHIP INNOVATION HUB Exclusive Reveal"}
                    </h3>
                    <p className="text-white/80 text-[1.1rem] font-normal leading-relaxed">
                      Bridging the gap between legacy and progress, Abdullah Hashim Company Limited sets a new standard for automotive distribution in the heart of Jeddah.
                    </p>
                  </div>
                </div>
              </div>
            </RevealText>
          </div>

          {/* Second Div (Right Side) */}
          <div className="w-full lg:w-1/2 flex flex-col justify-end">
            <div className="mb-[24px] md:mb-[50px] flex justify-end">
              <ArrowLink href="/news" color="black">all news</ArrowLink>
            </div>

            {/* List of News - Scrollable */}
            <div className="flex flex-col flex-1 overflow-y-auto max-h-[500px] mb-[32px] pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
              {newsList.map((news, idx) => (
                <Link href={`/news/${news.id}`} key={`news-${idx}`} className="flex gap-[20px] border-b border-[#E5E5E5] pb-[1rem] mb-[32px] last:border-b-0 last:mb-0 hover:bg-gray-50 transition-colors">
                  <Image
                    src={news.image}
                    alt={news.title}
                    width={120}
                    height={120}
                    className="w-[120px] h-[120px] rounded-[8px] object-cover shrink-0"
                  />
                  <div className="flex flex-col">
                    <span className="text-[#C9A84C] text-[0.6875rem] font-semibold uppercase mb-[8px]">
                      {news.subtitle}
                    </span>
                    <h4 className="text-[#1E1E1E] text-[1.1rem] font-medium mb-[8px] leading-tight">
                      {news.title}
                    </h4>
                    <span className="text-[#555] text-[0.8125rem] font-normal leading-relaxed line-clamp-3">
                      {news.desc}
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Newsletter Div */}
            <RevealText delay={0.5}>
              <div className="rounded-[12px] border border-[#686868] bg-[#1E1E1E] flex md:flex-row flex-col md:items-center p-[32px]  gap-[1rem]">
                <h4 className="text-[#D1A52A] text-[1rem] font-medium">
                  Stay updated with AHCL
                </h4>
                <p className="text-[#949494] text-[0.75rem] font-normal">
                  Join our newsletter for exclusive event invites and industry news.
                </p>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="md:w-[33.3%] w-full rounded-[3px] border-b border-[#E5E5E5] bg-[#333] px-[10px] py-[12px] text-[#727272] text-[0.9rem] outline-none placeholder:text-[#727272] placeholder:font-normal focus:border-[#D1A52A] transition-colors"
                />
              </div>
            </RevealText>
          </div>
          
        </div>

        {/* Upcoming Events Header */}
        <div className="flex items-center justify-between mb-[40px]">
          <RevealText delay={0.1}>
            <h2 className="text-[#1A1A1A] text-[1.5rem] font-bold uppercase">
              UPCOMING EVENTS
            </h2>
          </RevealText>
          <RevealText delay={0.2}>
            <ArrowLink href="/events" color="black">all events</ArrowLink>
          </RevealText>
        </div>
      </div>

      <UpcomingEventsSlider />
    </section>
  );
}
