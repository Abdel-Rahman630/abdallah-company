import { apiGet } from "./apiClient";
import type { ApiResponse, Division } from "@/types/models";
import { normalizeImageUrl } from "@/lib/utils";

const REVALIDATE_TIME = 900; // 15 minutes (ISR)

function sanitizeDivision(d: Division): Division {
  if (!d) return d;
  return {
    ...d,
    home_image: d.home_image ? normalizeImageUrl(d.home_image) : d.home_image,
    banner: d.banner ? normalizeImageUrl(d.banner) : d.banner,
    image: d.image ? normalizeImageUrl(d.image) : d.image,
    brands: Array.isArray(d.brands)
      ? d.brands.map((b) => ({
          ...b,
          logo: b.logo ? normalizeImageUrl(b.logo) : b.logo,
          images: Array.isArray(b.images)
            ? b.images.map((img) => ({
                ...img,
                url: img.url ? normalizeImageUrl(img.url) : img.url,
              }))
            : [],
        }))
      : [],
  };
}

/**
 * Fetches divisions for the home page (Our Products section).
 * Called from Server Components — cached with language tag.
 */
export async function getHomeDivisions(lang: string = "en"): Promise<Division[]> {
  try {
    const res = await apiGet<ApiResponse<Division[]>>(`/api/cms/home/divisions?lang=${lang}`, {
      revalidate: REVALIDATE_TIME,
      tags: ["divisions", "home-divisions", `home-divisions-${lang}`],
    });
    const list = Array.isArray(res?.data) ? res.data : [];
    return list.map(sanitizeDivision);
  } catch (error) {
    console.error("Error fetching home divisions:", error);
    return [];
  }
}

/**
 * Fetches a single division by slug or id.
 */
export async function getDivisionById(id: string, lang: string = "en"): Promise<Division | null> {
  try {
    const res = await apiGet<ApiResponse<Division>>(`/api/cms/divisions/${id}?lang=${lang}`, {
      revalidate: 60,
      tags: ["divisions", `division-${id}`, `division-${id}-${lang}`],
    });
    return res?.data ? sanitizeDivision(res.data) : null;
  } catch (error) {
    console.error(`Error fetching division ${id}:`, error);
    return null;
  }
}

