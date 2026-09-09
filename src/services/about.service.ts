import { apiGet } from "./apiClient";
import type { AboutCmsResponse, AboutCmsData } from "@/types/models";

const REVALIDATE_TIME = 900; // 15 minutes (ISR)

/**
 * Fetches the CMS page data for the About Us page.
 * Endpoint: GET /api/cms/pages/about?lang={lang}
 */
export async function getAboutCmsData(lang: string = "en"): Promise<AboutCmsData | null> {
  try {
    const res = await apiGet<AboutCmsResponse>(`/api/cms/pages/about?lang=${lang}`, {
      revalidate: REVALIDATE_TIME,
      tags: ["about-cms", `about-cms-${lang}`],
    });
    return res?.data || null;
  } catch (error) {
    console.error("Error fetching About CMS page data:", error);
    return null;
  }
}
