"use client";

import Image from "next/image";
import Link from "next/link";
import SubTitle from "@/components/ui/SubTitle";
import ArrowLink from "@/components/ui/ArrowLink";
import { RevealText } from "@/components/ui/ScrollReveal";
import EventCardSkeleton from "@/components/ui/EventCardSkeleton";
import { useEventsSection } from "@/hooks/news/useEventsSection";

export default function EventsSection() {
  const { activeTab, setActiveTab, tabs, filtered, isLoading } =
    useEventsSection();

  return (
    <section id="events" className="py-[80px] lg:py-[100px] bg-[#F9F9F9]">
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
          <div className="flex flex-wrap gap-[12px] mb-[40px]" role="tablist" aria-label="Event categories">
            {tabs.map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === tab}
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
        <div className="flex flex-wrap gap-[30px] min-h-[222px]">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <EventCardSkeleton key={i} />
            ))
          ) : filtered.length > 0 ? (
            filtered.map((event, idx) => (
              <RevealText key={event.id || idx} delay={0.1 * (idx + 1)}>
                <Link
                  href={event.slug ? `/events/${event.slug}` : `/events/${event.id}`}
                  className="block group relative w-[260px] h-[222px] rounded-[5px] overflow-hidden cursor-pointer shrink-0"
                  aria-label={`View event: ${event.title}`}
                >
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="260px"
                  />

                  {/* Default Overlay */}
                  <div className="absolute inset-0 bg-event-overlay transition-opacity duration-500" aria-hidden="true" />

                  {/* Hover Dark Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />

                  {/* Date Badge */}
                  <span className="absolute top-[24px] left-0 w-[109px] h-[47px] rounded-r-[5px] border-t border-r border-b border-white/30 bg-white/10 backdrop-blur-[5px] text-white flex items-center justify-center gap-[8px] z-10">
                    <span className="text-[2rem] font-bold leading-none">{event.date}</span>
                    <span className="text-[0.75rem] font-medium uppercase leading-none mt-1">{event.month}</span>
                  </span>

                  {/* Title */}
                  <h3 className="absolute bottom-[16px] left-1/2 -translate-x-1/2 w-[90%] text-white text-[1rem] font-semibold transition-transform duration-500 group-hover:-translate-y-8 z-10">
                    {event.title}
                  </h3>

                  {/* Hover Link */}
                  <div className="absolute bottom-[16px] left-[16px] w-full flex opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-10">
                    <ArrowLink as="span" color="white" className="!text-[0.6rem]">
                      view more
                    </ArrowLink>
                  </div>
                </Link>
              </RevealText>
            ))
          ) : (
            <p className="text-[#727272] text-[1rem] font-normal w-full">
              No Events Found for {activeTab}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
