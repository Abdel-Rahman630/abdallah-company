import VideoSection from "@/components/home/VideoSection";
import WhoWeAre from "@/components/home/WhoWeAre";
import OurProducts from "@/components/home/OurProducts";
import OurBranches from "@/components/home/OurBranches";
import News from "@/components/home/News";
import { getHomeNews } from "@/services/news.service";
import { getHomeEvents } from "@/services/events.service";
import { getHomeCmsData } from "@/services/home.service";
import { cookies } from "next/headers";
import type { Metadata } from "next";
import type {
  HeroSectionFields,
  WhoWeAreSectionFields,
  NetworkCoverageSectionFields,
  HomeCmsSection,
} from "@/types/models";

// Revalidate the home page every 15 minutes (ISR)
export const revalidate = 900;

function getSectionFields<T>(sections: HomeCmsSection[] = [], key: string): T | null {
  const section = sections.find((s) => s.key === key);
  return (section?.fields as T) || null;
}

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("NEXT_LOCALE")?.value || "en") as string;
  const homeCms = await getHomeCmsData(lang);

  if (!homeCms?.seo) {
    return {
      title: "Abdullah Hashim Company Limited",
    };
  }

  return {
    title: homeCms.seo.title || homeCms.title || "Homepage",
    description: homeCms.seo.description || undefined,
    openGraph: {
      title: homeCms.seo.title || homeCms.title || "Homepage",
      description: homeCms.seo.description || undefined,
      images: homeCms.seo.og_image ? [{ url: homeCms.seo.og_image }] : [],
    },
  };
}

export default async function Home() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("NEXT_LOCALE")?.value || "en") as string;

  // Fetch home CMS page data, news, and events in parallel
  const [cmsResult, newsResult, eventsResult] = await Promise.allSettled([
    getHomeCmsData(lang),
    getHomeNews(lang),
    getHomeEvents(lang),
  ]);

  const homeCmsData = cmsResult.status === "fulfilled" ? cmsResult.value : null;
  const initialNews = newsResult.status === "fulfilled" ? newsResult.value : [];
  const initialEvents = eventsResult.status === "fulfilled" ? eventsResult.value : [];

  const heroFields = getSectionFields<HeroSectionFields>(homeCmsData?.sections, "hero_section");
  const whoWeAreFields = getSectionFields<WhoWeAreSectionFields>(homeCmsData?.sections, "who_we_are_section");
  const networkFields = getSectionFields<NetworkCoverageSectionFields>(homeCmsData?.sections, "network_coverage_section");

  return (
    <>
      <VideoSection fields={heroFields} />
      <WhoWeAre fields={whoWeAreFields} />
      <OurProducts />
      <OurBranches fields={networkFields} />
      <News initialNews={initialNews} initialEvents={initialEvents} />
    </>
  );
}

