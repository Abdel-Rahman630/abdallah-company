import AboutUsClient from "./AboutUsClient";
import { Metadata } from "next";
import { getAboutCmsData } from "@/services/about.service";
import { cookies } from "next/headers";

export const revalidate = 900;

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("NEXT_LOCALE")?.value || "en") as string;
  const aboutCms = await getAboutCmsData(lang);

  const siteTitle = lang === "ar" ? "شركة عبد الله هاشم المحدودة" : "Abdullah Hashim Company Limited";
  const siteName = siteTitle;
  const pageTitle = aboutCms?.seo?.title || aboutCms?.title || (lang === "ar" ? "من نحن" : "About Us");
  const description = aboutCms?.seo?.description || (lang === "ar"
    ? "تعرف على تاريخ ورؤية شركة عبد الله هاشم المحدودة في المملكة العربية السعودية."
    : "Driving Progress Through Innovation, Quality, and Reliability.");

  return {
    title: `${siteTitle} | ${pageTitle}`,
    description,
    openGraph: {
      title: `${siteTitle} | ${pageTitle}`,
      description,
      siteName,
      images: aboutCms?.seo?.og_image ? [{ url: aboutCms.seo.og_image }] : [{ url: "/LOGO2.png" }],
    },
  };
}

export default async function AboutUsPage() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("NEXT_LOCALE")?.value || "en") as string;
  const aboutData = await getAboutCmsData(lang);

  return <AboutUsClient initialData={aboutData} />;
}
