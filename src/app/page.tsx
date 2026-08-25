import VideoSection from "@/components/home/VideoSection";
import WhoWeAre from "@/components/home/WhoWeAre";
import OurProducts from "@/components/home/OurProducts";
import OurBranches from "@/components/home/OurBranches";
import News from "@/components/home/News";
import { Metadata } from "next";
import { getHomeNews } from "@/services/news.service";
import { getHomeEvents } from "@/services/events.service";
import { cookies } from "next/headers";

// Revalidate the home page every hour (ISR)
export const revalidate = 900;

export const metadata: Metadata = {
  title: "Abdallah Company | Home",
  description:
    "Discover our premium products, news, and global branches. We deliver excellence and innovative solutions.",
  openGraph: {
    title: "Abdullah Hashim Company",
    description:
      "Driving Progress Through Innovation, Quality, and Reliability",
    url: "https://abdallah-company.com",
    siteName: "Abdullah Hashim Company",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullah Hashim Company",
    description:
      "Driving Progress Through Innovation, Quality, and Reliability",
  },
};

export default async function Home() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("NEXT_LOCALE")?.value || "en") as string;

  // Divisions are already fetched in layout.tsx via DivisionsProvider.
  // Fetch only news and events here.
  const [newsResult, eventsResult] = await Promise.allSettled([
    getHomeNews(lang),
    getHomeEvents(lang),
  ]);

  const initialNews = newsResult.status === "fulfilled" ? newsResult.value : [];
  const initialEvents =
    eventsResult.status === "fulfilled" ? eventsResult.value : [];

  return (
    <>
      <VideoSection />
      <WhoWeAre />
      <OurProducts />
      <OurBranches />
      <News initialNews={initialNews} initialEvents={initialEvents} />
    </>
  );
}
