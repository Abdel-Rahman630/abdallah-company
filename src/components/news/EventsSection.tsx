"use client";

import { useState } from "react";
import Image from "next/image";
import SubTitle from "@/components/ui/SubTitle";
import ArrowLink from "@/components/ui/ArrowLink";
import { RevealText } from "@/components/ui/ScrollReveal";

const tabs = ["All", "June", "July", "August", "September", "October", "January"];

const eventsData = [
  { image: "/event1.png", date: "15", month: "june", title: "New Event in Saudi Arabia", category: "June" },
  { image: "/event2.png", date: "19", month: "june", title: "New Event in Saudi Arabia", category: "June" },
  { image: "/event3.png", date: "20", month: "june", title: "New Event in Saudi Arabia", category: "June" },
  { image: "/event4.png", date: "27", month: "june", title: "New Event in Saudi Arabia", category: "June" },
  { image: "/event5.png", date: "30", month: "july", title: "New Event in Saudi Arabia", category: "July" },
  { image: "/event4.png", date: "12", month: "aug", title: "New Event in Saudi Arabia", category: "August" },
  { image: "/event5.png", date: "30", month: "aug", title: "New Event in Saudi Arabia", category: "August" },
];

export default function EventsSection() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered =
    activeTab === "All"
      ? eventsData
      : eventsData.filter((e) => e.category === activeTab);

  return (
    <section className="py-[80px] lg:py-[100px] bg-[#F9F9F9]">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-[50px]">
          <RevealText delay={0.1}>
            <SubTitle className="!mb-[12px]">UPCOMING EVENTS</SubTitle>
          </RevealText>
          <RevealText delay={0.2}>
            <h2 className="text-[#1E1E1E] text-[2.5rem] font-bold">
              Events Calendar
            </h2>
          </RevealText>
        </div>

        {/* Tabs */}
        <RevealText delay={0.1}>
          <div className="flex flex-wrap gap-[12px] mb-[40px]">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-[0.9rem] font-semibold rounded-[5px] border px-[20px] py-[8px] transition-all duration-300 cursor-pointer ${
                  activeTab === tab
                    ? "bg-[#D1A52A] text-black border-[#D1A52A]"
                    : "text-[#858585] border-[#D3D3D3] hover:bg-[#D1A52A] hover:text-black hover:border-[#D1A52A]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </RevealText>

        {/* Event Cards Grid */}
        <div className="flex flex-wrap gap-[30px]">
          {filtered.length > 0 ? filtered.map((event, idx) => (
            <RevealText key={idx} delay={0.1 * (idx + 1)}>
              <div className="group relative w-[260px] h-[222px] rounded-[5px] overflow-hidden cursor-pointer shrink-0">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Default Overlay */}
                <div className="absolute inset-0 bg-event-overlay transition-opacity duration-500" />

                {/* Hover Dark Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Date Badge */}
                <span className="absolute top-[24px] left-0 w-[109px] h-[47px] rounded-r-[5px] border-t border-r border-b border-white/30 bg-white/10 backdrop-blur-[5px] text-white flex items-center justify-center gap-[8px] z-10">
                  <span className="text-[2rem] font-bold leading-none">{event.date}</span>
                  <span className="text-[0.75rem] font-medium uppercase leading-none mt-1">{event.month}</span>
                </span>

                {/* Title */}
                <h4 className="absolute bottom-[16px] left-1/2 -translate-x-1/2 w-[90%] text-white text-[1rem] font-semibold transition-transform duration-500 group-hover:-translate-y-8 z-10">
                  {event.title}
                </h4>

                {/* Hover Link */}
                <div className="absolute bottom-[16px] left-[16px] w-full flex opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-10">
                  <ArrowLink href="#" color="white" className="!text-[0.6rem]">
                    view more
                  </ArrowLink>
                </div>
              </div>
            </RevealText>
          )) : (
            <p className="text-[#727272] text-[1rem] font-normal">No Events Found</p>
          )}
        </div>

      </div>
    </section>
  );
}
