import NewsBanner from "@/components/news/NewsBanner";
import LatestNews from "@/components/news/LatestNews";
import EventsSection from "@/components/news/EventsSection";
import Subscribe from "@/components/forms/Subscribe";

import type { Metadata } from "next";
import { cookies } from "next/headers";

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("NEXT_LOCALE")?.value || "en") as string;
  const siteTitle = lang === "ar" ? "شركة عبد الله هاشم المحدودة" : "Abdullah Hashim Company Limited";
  const siteName = siteTitle;
  const pageTitle = lang === "ar" ? "الأخبار والفعاليات" : "News & Events";
  const description = lang === "ar"
    ? "ابقَ على اطلاع بآخر الأخبار والفعاليات والإعلانات من شركة عبد الله هاشم المحدودة."
    : "Stay updated with the latest news, events, and announcements from Abdullah Hashim Company.";

  return {
    title: `${siteTitle} | ${pageTitle}`,
    description,
    openGraph: {
      title: `${siteTitle} | ${pageTitle}`,
      description,
      siteName,
    },
  };
}

export default function NewsPage() {
  return (
    <>
      <NewsBanner />
      <LatestNews />
      <Subscribe />
      <EventsSection />
    </>
  );
}
