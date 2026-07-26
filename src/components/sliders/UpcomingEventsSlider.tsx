"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import ArrowLink from "@/components/ui/ArrowLink";
import EventCard from "@/components/ui/EventCard";



import { getEvents } from "@/services/events.service";
import { EventItem, EventSlideItem } from "@/types/models";
import { formatDateParts } from "@/lib/utils";

export default function UpcomingEventsSlider() {
  const [events, setEvents] = useState<EventSlideItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchEvents() {
      setIsLoading(true);
      try {
        const response = await getEvents({ lang: "en" });
        const data = response.data;
       
        if (!Array.isArray(data) || data.length === 0) return;

        const mapped: EventSlideItem[] = data.map((item: EventItem) => {
          const dateStr = item.formatted_date || item.date || item.start_date || item.created_at;
          const { day, monthShort } = formatDateParts(dateStr);
          return {
            id: item.id,
            slug: item.slug,
            image: item.cover_image_url || "/bg.png",
            date: day,
            month: monthShort.toLowerCase(),
            title: item.title,
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
        autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        className="w-full"
      >
        {events.map((event, idx) => {
          const href = event.slug ? `/events/${event.slug}` : (event.id ? `/events/${event.id}` : null);
          const isFeatured = event.isFeatured !== false;

          return (
            <SwiperSlide key={`event-${idx}`} className="!w-[260px]">
              <EventCard
                id={event.slug || event.id}
                image={event.image}
                date={event.date}
                month={event.month}
                title={event.title}
                disabled={!isFeatured}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
