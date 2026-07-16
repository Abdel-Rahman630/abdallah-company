import { apiGet } from "./apiClient";
import type { ApiResponse, Division } from "@/types/models";

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
