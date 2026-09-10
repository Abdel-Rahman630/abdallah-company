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

  if (!careersCms?.seo) {
    return {
      title: "Abdullah Hashim Company Limited | Careers",
      description: "Explore career opportunities at Abdullah Hashim Company and join our team.",
    };
  }

  return {
    title: careersCms.seo.title || careersCms.title || "Careers",
    description: careersCms.seo.description || undefined,
    openGraph: {
      title: careersCms.seo.title || careersCms.title || "Careers",
      description: careersCms.seo.description || undefined,
      images: careersCms.seo.og_image ? [{ url: careersCms.seo.og_image }] : [],
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
