"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import EventCard from "@/components/ui/EventCard";

const eventsData = [
  { id: 1, image: "/event1.png", date: "15", month: "june", title: "New Event in Saudi Arabia" },
  { id: 2, image: "/event2.png", date: "19", month: "june", title: "New Event in Saudi Arabia" },
  { id: 3, image: "/event3.png", date: "20", month: "june", title: "New Event in Saudi Arabia" },
  { id: 4, image: "/event4.png", date: "27", month: "june", title: "New Event in Saudi Arabia" },
  { id: 5, image: "/event5.png", date: "30", month: "june", title: "New Event in Saudi Arabia" },
  { id: 6, image: "/event4.png", date: "27", month: "june", title: "New Event in Saudi Arabia" },
  { id: 7, image: "/event5.png", date: "30", month: "june", title: "New Event in Saudi Arabia" },
];

export default function UpcomingEventsSlider() {
  return (
    <div className="leftContainer overflow-hidden pb-[20px]">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView="auto"
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-full"
      >
        {eventsData.map((event, idx) => (
          <SwiperSlide key={`event-${idx}`} className="!w-[260px]">
            <EventCard 
              id={event.id}
              image={event.image}
              date={event.date}
              month={event.month}
              title={event.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
