"use client";

import { useMemo, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import EventCard from "@/components/ui/EventCard";
import { EventItem, EventSlideItem } from "@/types/models";
import { formatDateParts } from "@/lib/utils";

interface Props {
  /** Pre-fetched events from the Server Component — no client fetch needed. */
  initialEvents?: EventItem[];
  onEventsFetched?: (hasEvents: boolean) => void;
}

export default function UpcomingEventsSlider({ initialEvents = [], onEventsFetched }: Props) {
  const events = useMemo<EventSlideItem[]>(() => {
    return initialEvents.map((item) => {
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
  }, [initialEvents]);

  // Notify parent whether we have events (runs once after mount)
  useEffect(() => {
    onEventsFetched?.(events.length > 0);
  }, [events.length, onEventsFetched]);

  if (events.length === 0) {
    return null;
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

