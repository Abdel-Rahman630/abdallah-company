import { apiGet } from "./apiClient";
import type { CareersCmsResponse, CareersCmsData } from "@/types/models";

const REVALIDATE_TIME = 900; // 15 minutes (ISR)

/**
 * Fetches the CMS page data for the Careers page.
 * Endpoint: GET /api/cms/pages/careers?lang={lang}
 */
export async function getCareersCmsData(lang: string = "en"): Promise<CareersCmsData | null> {
  try {
    const res = await apiGet<CareersCmsResponse>(`/api/cms/pages/careers?lang=${lang}`, {
      revalidate: REVALIDATE_TIME,
      tags: ["careers-cms", `careers-cms-${lang}`],
    });
    return res?.data || null;
  } catch (error) {
    console.error("Error fetching Careers CMS page data:", error);
    return null;
  }
}
