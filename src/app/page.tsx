import VideoSection from "@/components/home/VideoSection";
import WhoWeAre from "@/components/home/WhoWeAre";
import OurProducts from "@/components/home/OurProducts";
import OurBranches from "@/components/home/OurBranches";
import News from "@/components/home/News";
import { getHomeNews } from "@/services/news.service";
import { getHomeEvents } from "@/services/events.service";
import { getHomeCmsData } from "@/services/home.service";
import { getHomeDivisions } from "@/services/divisions.service";
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

  const siteTitle = lang === "ar" ? "شركة عبد الله هاشم المحدودة" : "Abdullah Hashim Company Limited";
  const siteName = siteTitle;
  const pageTitle = homeCms?.seo?.title || homeCms?.title || (lang === "ar" ? "الموقع الرسمي" : "Official Website");
  const description = homeCms?.seo?.description || (lang === "ar"
    ? "شركة عبد الله هاشم المحدودة (AHCL) موزّع متميز للسيارات والآلات في المملكة العربية السعودية."
    : "Abdullah Hashim Company Limited (AHCL) is an established Automotive & machinery distributor in Saudi Arabia.");

  return {
    title: `${siteTitle} | ${pageTitle}`,
    description,
    openGraph: {
      title: `${siteTitle} | ${pageTitle}`,
      description,
      siteName,
      images: homeCms?.seo?.og_image ? [{ url: homeCms.seo.og_image }] : [{ url: "/LOGO2.png" }],
    },
  };
}

export default async function Home() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("NEXT_LOCALE")?.value || "en") as string;

  // Fetch home CMS page data, news, events, and divisions in parallel
  const [cmsResult, newsResult, eventsResult, divisionsResult] = await Promise.allSettled([
    getHomeCmsData(lang),
    getHomeNews(lang),
    getHomeEvents(lang),
    getHomeDivisions(lang),
  ]);

  const homeCmsData = cmsResult.status === "fulfilled" ? cmsResult.value : null;
  const initialNews = newsResult.status === "fulfilled" ? newsResult.value : [];
  const initialEvents = eventsResult.status === "fulfilled" ? eventsResult.value : [];
  const initialDivisions = divisionsResult.status === "fulfilled" ? divisionsResult.value : [];

  const heroFields = getSectionFields<HeroSectionFields>(homeCmsData?.sections, "hero_section");
  const whoWeAreFields = getSectionFields<WhoWeAreSectionFields>(homeCmsData?.sections, "who_we_are_section");
  const networkFields = getSectionFields<NetworkCoverageSectionFields>(homeCmsData?.sections, "network_coverage_section");

  return (
    <>
      <VideoSection fields={heroFields} />
      <WhoWeAre fields={whoWeAreFields} />
      <OurProducts initialProducts={initialDivisions} />
      <OurBranches fields={networkFields} />
      <News initialNews={initialNews} initialEvents={initialEvents} />
    </>
  );
}

