import AboutUsClient from "./AboutUsClient";
import { Metadata } from "next";
import { getAboutCmsData } from "@/services/about.service";
import { cookies } from "next/headers";

export const revalidate = 900;

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("NEXT_LOCALE")?.value || "en") as string;
  const aboutCms = await getAboutCmsData(lang);

  if (!aboutCms?.seo) {
    return {
      title: "Abdullah Hashim Company Limited | About Us",
      description: "Driving Progress Through Innovation, Quality, and Reliability",
    };
  }

  return {
    title: aboutCms.seo.title || aboutCms.title || "About Us",
    description: aboutCms.seo.description || undefined,
    openGraph: {
      title: aboutCms.seo.title || aboutCms.title || "About Us",
      description: aboutCms.seo.description || undefined,
      images: aboutCms.seo.og_image ? [{ url: aboutCms.seo.og_image }] : [],
    },
  };
}

export default async function AboutUsPage() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("NEXT_LOCALE")?.value || "en") as string;
  const aboutData = await getAboutCmsData(lang);

  return <AboutUsClient initialData={aboutData} />;
}
