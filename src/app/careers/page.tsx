import WhyJoinUs from "@/components/careers/WhyJoinUs";
import { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";
import { getCareersCmsData } from "@/services/careers.service";
import { cookies } from "next/headers";
import type {
  CareersBannerSectionFields,
  WhyJoinUsSectionFields,
  CareersCmsSection,
} from "@/types/models";

export const revalidate = 900;

function getSectionFields<T>(sections: CareersCmsSection[] = [], key: string): T | null {
  const section = sections.find((s) => s.key === key);
  return (section?.fields as T) || null;
}

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("NEXT_LOCALE")?.value || "en") as string;
  const careersCms = await getCareersCmsData(lang);

  const siteTitle = lang === "ar" ? "شركة عبد الله هاشم المحدودة" : "Abdullah Hashim Company Limited";
  const siteName = siteTitle;
  const pageTitle = careersCms?.seo?.title || careersCms?.title || (lang === "ar" ? "الوظائف" : "Careers");
  const description = careersCms?.seo?.description || (lang === "ar"
    ? "استكشف فرص العمل في شركة عبد الله هاشم المحدودة وانضم إلى فريقنا."
    : "Explore career opportunities at Abdullah Hashim Company and join our team.");

  return {
    title: `${siteTitle} | ${pageTitle}`,
    description,
    openGraph: {
      title: `${siteTitle} | ${pageTitle}`,
      description,
      siteName,
      images: careersCms?.seo?.og_image ? [{ url: careersCms.seo.og_image }] : [{ url: "/LOGO2.png" }],
    },
  };
}

export default async function CareersPage() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("NEXT_LOCALE")?.value || "en") as string;
  const careersData = await getCareersCmsData(lang);

  const bannerFields = getSectionFields<CareersBannerSectionFields>(careersData?.sections, "banner_section");
  const whyJoinUsFields = getSectionFields<WhyJoinUsSectionFields>(careersData?.sections, "why_join_us_section");

  const bannerImage = bannerFields?.banner_image;
  const bannerTitle = bannerFields?.title;

  return (
    <>
      <PageBanner image={bannerImage} title={bannerTitle} />
      <WhyJoinUs fields={whyJoinUsFields} />
    </>
  );
}
