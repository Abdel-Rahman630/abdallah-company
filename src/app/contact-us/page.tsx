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

  if (!contactCms?.seo) {
    return {
      title: "Abdullah Hashim Company Limited | Contact Us",
      description: "Get in touch with Abdullah Hashim Company. Find our locations and contact information.",
    };
  }

  return {
    title: contactCms.seo.title || contactCms.title || "Contact Us",
    description: contactCms.seo.description || undefined,
    openGraph: {
      title: contactCms.seo.title || contactCms.title || "Contact Us",
      description: contactCms.seo.description || undefined,
      images: contactCms.seo.og_image ? [{ url: contactCms.seo.og_image }] : [],
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

  const bannerImage = bannerFields?.banner_image || "/contactanner.png";
  const bannerTitle = bannerFields?.title || "Contact Us";

  return (
    <>
      <PageBanner image={bannerImage} title={bannerTitle} />
      <GetInTouch fields={contactFields} />
      <FindUs fields={locationsIntroFields} />
    </>
  );
}
