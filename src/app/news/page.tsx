import NewsBanner from "@/components/news/NewsBanner";
import LatestNews from "@/components/news/LatestNews";
import EventsSection from "@/components/news/EventsSection";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abdallah Company | News & Events",
  description: "Stay updated with the latest news, events, and announcements from Abdullah Hashim Company.",
};

export default function NewsPage() {
  return (
    <>
      <NewsBanner />
      <LatestNews />
      <EventsSection />
    </>
  );
}
