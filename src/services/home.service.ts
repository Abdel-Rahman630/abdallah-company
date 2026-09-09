import { apiGet } from "./apiClient";
import type { HomeCmsResponse, HomeCmsData } from "@/types/models";

const REVALIDATE_TIME = 900; // 15 minutes (ISR)

/**
 * Fetches the CMS page data for the Homepage.
 * Endpoint: GET /api/cms/pages/home?lang={lang}
 */
export async function getHomeCmsData(lang: string = "en"): Promise<HomeCmsData | null> {
  try {
    const res = await apiGet<HomeCmsResponse>(`/api/cms/pages/home?lang=${lang}`, {
      revalidate: REVALIDATE_TIME,
      tags: ["home-cms", `home-cms-${lang}`],
    });
    return res?.data || null;
  } catch (error) {
    console.error("Error fetching Home CMS page data:", error);
    return null;
  }
}
