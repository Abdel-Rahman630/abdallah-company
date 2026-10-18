import PageBanner from "@/components/ui/PageBanner";
import GetInTouch from "@/components/contact/GetInTouch";
import FindUs from "@/components/contact/FindUs";
import { Metadata } from "next";
import { getContactCmsData } from "@/services/contact.service";
import { cookies } from "next/headers";
import type {
  ContactBannerSectionFields,
  ContactSectionFields,
  LocationsIntroSectionFields,
  ContactCmsSection,
} from "@/types/models";

export const revalidate = 900;

function getSectionFields<T>(sections: ContactCmsSection[] = [], key: string): T | null {
  const section = sections.find((s) => s.key === key);
  return (section?.fields as T) || null;
}

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("NEXT_LOCALE")?.value || "en") as string;
  const contactCms = await getContactCmsData(lang);

  const siteTitle = lang === "ar" ? "شركة عبد الله هاشم المحدودة" : "Abdullah Hashim Company Limited";
  const siteName = siteTitle;
  const pageTitle = contactCms?.seo?.title || contactCms?.title || (lang === "ar" ? "تواصل معنا" : "Contact Us");
  const description = contactCms?.seo?.description || (lang === "ar"
    ? "تواصل مع شركة عبد الله هاشم المحدودة. اعثر على مواقعنا ومعلومات التواصل."
    : "Get in touch with Abdullah Hashim Company. Find our locations and contact information.");

  return {
    title: `${siteTitle} | ${pageTitle}`,
    description,
    openGraph: {
      title: `${siteTitle} | ${pageTitle}`,
      description,
      siteName,
      images: contactCms?.seo?.og_image ? [{ url: contactCms.seo.og_image }] : [{ url: "/LOGO2.png" }],
    },
  };
}

export default async function ContactUsPage() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("NEXT_LOCALE")?.value || "en") as string;
  const contactData = await getContactCmsData(lang);

  const bannerFields = getSectionFields<ContactBannerSectionFields>(contactData?.sections, "banner_section");
  const contactFields = getSectionFields<ContactSectionFields>(contactData?.sections, "contact_section");
  const locationsIntroFields = getSectionFields<LocationsIntroSectionFields>(contactData?.sections, "locations_intro_section");

  const bannerImage = bannerFields?.banner_image;
  const bannerTitle = bannerFields?.title;

  return (
    <>
      <PageBanner image={bannerImage} title={bannerTitle} />
      <GetInTouch fields={contactFields} />
      <FindUs fields={locationsIntroFields} />
    </>
  );
}
