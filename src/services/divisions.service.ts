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
  if (!id) return null;
  const cleanId = decodeURIComponent(id).trim();

  // 1. Primary Attempt: direct endpoint fetch
  try {
    const res = await apiGet<ApiResponse<Division>>(`/api/cms/divisions/${encodeURIComponent(cleanId)}?lang=${lang}`, {
      revalidate: 60,
      tags: ["divisions", `division-${cleanId}`, `division-${cleanId}-${lang}`],
    });
    if (res?.data) return sanitizeDivision(res.data);
  } catch (error) {
    console.warn(`Direct API fetch for division "${cleanId}" (${lang}) failed, using fallback match:`, error);
  }

  // 2. Fallback Attempt: search within home divisions list for requested language
  try {
    const list = await getHomeDivisions(lang);
    const match = list.find(
      (d) =>
        String(d.id) === cleanId ||
        d.slug === cleanId ||
        d.slug === id ||
        (d.name && d.name.toLowerCase() === cleanId.toLowerCase())
    );
    if (match) return match;

    // 3. Secondary Fallback: search within English home divisions (in case slug is English)
    if (lang !== "en") {
      const enList = await getHomeDivisions("en");
      const enMatch = enList.find(
        (d) =>
          String(d.id) === cleanId ||
          d.slug === cleanId ||
          d.slug === id ||
          (d.name && d.name.toLowerCase() === cleanId.toLowerCase())
      );
      if (enMatch) {
        // Try fetching division by numeric ID in requested lang
        try {
          const resById = await apiGet<ApiResponse<Division>>(`/api/cms/divisions/${enMatch.id}?lang=${lang}`, {
            revalidate: 60,
            tags: ["divisions", `division-${enMatch.id}`, `division-${enMatch.id}-${lang}`],
          });
          if (resById?.data) return sanitizeDivision(resById.data);
        } catch {
          // Ignore and fallback to list matching by ID
        }
        const matchById = list.find((d) => d.id === enMatch.id);
        if (matchById) return matchById;
      }
    }
  } catch (fallbackError) {
    console.error(`Fallback search for division "${cleanId}" failed:`, fallbackError);
  }

  return null;
}

