import { apiGet } from "./apiClient";
import type { ApiResponse, Division } from "@/types/models";

const REVALIDATE_TIME = 900; // 1 hour

/**
 * Fetches divisions for the home page (Our Products section).
 * Called from Server Components — cached for 1 hour.
 */
export async function getHomeDivisions(lang: string = "en"): Promise<Division[]> {
  const res = await apiGet<ApiResponse<Division[]>>(`/api/cms/home/divisions`, {
    revalidate: REVALIDATE_TIME,
    tags: ["divisions", "home-divisions"],
  });
  return Array.isArray(res?.data) ? res.data : [];
}

/**
 * Fetches a single division by slug.
 */
export async function getDivisionById(id: string, lang: string = "en"): Promise<Division> {
  const res = await apiGet<ApiResponse<Division>>(`/api/cms/divisions/${id}?lang=${lang}`, {
    revalidate: 60,
    tags: ["divisions", `division-${id}`],
  });
  return res.data;
}
