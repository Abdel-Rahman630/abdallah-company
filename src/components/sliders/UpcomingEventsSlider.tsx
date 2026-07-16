"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import ArrowLink from "@/components/ui/ArrowLink";



import { getEvents } from "@/services/events.service";
import { EventItem, EventSlideItem } from "@/types/models";

export default function UpcomingEventsSlider() {
  const [events, setEvents] = useState<EventSlideItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchEvents() {
      setIsLoading(true);
      try {
        const response = await getEvents({ limit: 20, lang: "en" });
        const data = response.data;
       
        if (!Array.isArray(data) || data.length === 0) return;

        const mapped: EventSlideItem[] = data.map((item: EventItem) => {
          const dateStr = item.starts_at || item.date || item.start_date || item.created_at || new Date().toISOString();
          const d = new Date(dateStr);
          const monthName = d.toLocaleString("en-US", { month: "short" }).toLowerCase();
          const day = d.getDate().toString();
          return {
            id: item.id || item.slug,
            image: item.cover_image_url || item.cover_image || item.image || "/event1.png",
            date: day,
            month: monthName,
            title: item.title || "Upcoming Event",
            slug: item.slug,
            isFeatured: item.is_featured ?? true,
          };
        });
        setEvents(mapped);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchEvents();
  }, []);

  if (isLoading) {
    return (
      <div className="leftContainer overflow-hidden pb-[20px] pl-[15px]">
        <div className="flex gap-[30px]">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="shimmer !w-[260px] h-[222px] rounded-[5px] shrink-0" />
          ))}
        </div>
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className="leftContainer py-[8px]">
        <p className="text-[#727272] text-[0.95rem] font-normal">
          There are no upcoming events right now. Stay tuned for future announcements.
        </p>
      </div>
    );
  }

  return (
    <div className="leftContainer overflow-hidden pb-[20px]">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView="auto"
        loop={events.length > 3}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-full"
      >
        {events.map((event, idx) => {
          const href = event.slug ? `/events/${event.slug}` : null;
          const isFeatured = event.isFeatured !== false;

          return (
            <SwiperSlide key={`event-${idx}`} className="!w-[260px]">
              {href && isFeatured ? (
                <Link
                  href={href}
                  className="block group relative w-[260px] h-[222px] rounded-[5px] overflow-hidden cursor-pointer"
                >
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="260px"
                  />
                  <div className="absolute inset-0 bg-event-overlay transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute top-[24px] left-0 w-[109px] h-[47px] rounded-r-[5px] border-t border-r border-b border-white/30 bg-white/10 backdrop-blur-[5px] text-white flex items-center justify-center gap-[8px] z-10">
                    <span className="text-[2rem] font-bold leading-none">{event.date}</span>
                    <span className="text-[0.75rem] font-medium uppercase leading-none mt-1">{event.month}</span>
                  </span>
                  <h4 className="absolute bottom-[16px] left-1/2 -translate-x-1/2 w-[90%] text-white text-[1rem] font-semibold transition-transform duration-500 group-hover:-translate-y-8 z-10">
                    {event.title}
                  </h4>
                  <div className="absolute bottom-[16px] left-[16px] w-full flex opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-10">
                    <ArrowLink as="span" color="white" className="!text-[0.6rem]">
                      view more
                    </ArrowLink>
                  </div>
                </Link>
              ) : (
                <div className="relative w-[260px] h-[222px] rounded-[5px] overflow-hidden cursor-default opacity-80">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover scale-110"
                    sizes="260px"
                  />
                  <div className="absolute inset-0 bg-event-overlay" />
                  <div className="absolute inset-0 bg-black/60" />
                  <span className="absolute top-[24px] left-0 w-[109px] h-[47px] rounded-r-[5px] border-t border-r border-b border-white/30 bg-white/10 backdrop-blur-[5px] text-white flex items-center justify-center gap-[8px] z-10">
                    <span className="text-[2rem] font-bold leading-none">{event.date}</span>
                    <span className="text-[0.75rem] font-medium uppercase leading-none mt-1">{event.month}</span>
                  </span>
                  <h4 className="absolute bottom-[16px] left-1/2 -translate-x-1/2 -translate-y-8 w-[90%] text-white text-[1rem] font-semibold z-10">
                    {event.title}
                  </h4>
                  <div className="absolute bottom-[16px] left-[16px] w-full flex z-10">
                    <span className="text-white/50 text-[0.6rem] font-normal uppercase">Coming soon</span>
                  </div>
                </div>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
