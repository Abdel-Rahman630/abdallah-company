"use client";

import Image from "next/image";
import Link from "next/link";
import SubTitle from "@/components/ui/SubTitle";
import SectionTitle from "@/components/ui/SectionTitle";
import ArrowLink from "@/components/ui/ArrowLink";
import { RevealText } from "@/components/ui/ScrollReveal";
import EventCardSkeleton from "@/components/ui/EventCardSkeleton";
import EventCard from "@/components/ui/EventCard";
import { useEventsSection } from "@/hooks/news/useEventsSection";
import { useLanguage } from "@/providers/LanguageProvider";

export default function EventsSection() {
  const { t } = useLanguage();
  const { activeTab, setActiveTab, tabs, filtered, isLoading } =
    useEventsSection();

  return (
    <section id="events" className="py-[80px] lg:py-[100px] bg-[#F9F9F9]">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-[50px]">
          <RevealText delay={0.1}>
            <SubTitle className="!mb-[12px]">{t("events.upcoming")}</SubTitle>
          </RevealText>
          <RevealText delay={0.2}>
            <SectionTitle>{t("events.calendar")}</SectionTitle>
          </RevealText>
        </div>

        {/* Tabs */}
        <RevealText delay={0.1}>
          <div className="flex flex-wrap gap-[12px] mb-[40px]" role="tablist" aria-label="Event categories">
            {tabs.map((tab) => (
              <button
                type="button"
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
          filtered.map((event, idx) => {
            const isFeatured = event.isFeatured !== false;
            const href = event.slug ? `/events/${event.slug}` : (event.id ? `/events/${event.id}` : null);

            return (
              <RevealText key={event.id || idx} delay={0.1 * (idx + 1)}>
                <EventCard
                  id={event.slug || event.id}
                  image={event.image}
                  date={event.date}
                  month={event.month}
                  title={event.title}
                  disabled={!isFeatured}
                />
              </RevealText>
            );
          })
          ) : (
            <div className="w-full py-[40px] flex flex-col items-center gap-[12px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" opacity="0.3">
                <path d="M16 4V12M32 4V12M6 20H42M10 8H38C40.2091 8 42 9.79086 42 12V40C42 42.2091 40.2091 44 38 44H10C7.79086 44 6 42.2091 6 40V12C6 9.79086 7.79086 8 10 8Z" stroke="#1E1E1E" strokeWidth="3" strokeLinecap="round"/>
              </svg>
              <p className="text-[#727272] text-[1rem] font-normal text-center">
                {activeTab === "All"
                  ? "There are no events right now. Stay tuned for upcoming announcements."
                  : `There are no events in the "${activeTab}" category right now.`}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
