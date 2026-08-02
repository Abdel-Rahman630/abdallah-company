import { apiGet } from "./apiClient";
import type { ApiLocation, LocationsApiResponse } from "@/types/models";

/**
 * Fetches all branch locations.
 * Client-side: relative URL routed through the Next.js rewrite proxy.
 * Server-side:  full URL via apiGet (prepends NEXT_PUBLIC_API_URL).
 */
export async function getLocations(lang: string = "en"): Promise<ApiLocation[]> {
  const res = await apiGet<LocationsApiResponse>(
    `/api/cms/locations?lang=${encodeURIComponent(lang)}`,
    { revalidate: 300, tags: ["locations"] }
  );

  if (!res.status || !Array.isArray(res.data)) return [];

  return [...res.data].sort(
    (a, b) => (a.sort_order ?? 9999) - (b.sort_order ?? 9999)
  );
}
