import { apiGet } from "./apiClient";
import type { ContactCmsResponse, ContactCmsData } from "@/types/models";

const REVALIDATE_TIME = 900; // 15 minutes (ISR)

/**
 * Fetches the CMS page data for the Contact Us page.
 * Endpoint: GET /api/cms/pages/contact?lang={lang}
 */
export async function getContactCmsData(lang: string = "en"): Promise<ContactCmsData | null> {
  try {
    const res = await apiGet<ContactCmsResponse>(`/api/cms/pages/contact?lang=${lang}`, {
      revalidate: REVALIDATE_TIME,
      tags: ["contact-cms", `contact-cms-${lang}`],
    });
    return res?.data || null;
  } catch (error) {
    console.error("Error fetching Contact CMS page data:", error);
    return null;
  }
}
