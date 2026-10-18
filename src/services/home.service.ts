import { apiGet } from "./apiClient";
import type { HomeCmsResponse, HomeCmsData, HeroSectionFields, WhoWeAreSectionFields, NetworkCoverageSectionFields } from "@/types/models";
import { normalizeImageUrl } from "@/lib/utils";

const REVALIDATE_TIME = 900; // 15 minutes (ISR)

function sanitizeHomeCms(data: HomeCmsData): HomeCmsData {
  if (!data || !Array.isArray(data.sections)) return data;

  const sections = data.sections.map((sec) => {
    if (sec.key === "hero_section" && sec.fields) {
      const f = sec.fields as HeroSectionFields;
      return {
        ...sec,
        fields: {
          ...f,
          hero_image: f.hero_image ? normalizeImageUrl(f.hero_image) : f.hero_image,
        },
      };
    }
    if (sec.key === "who_we_are_section" && sec.fields) {
      const f = sec.fields as WhoWeAreSectionFields;
      return {
        ...sec,
        fields: {
          ...f,
          gallery: Array.isArray(f.gallery)
            ? f.gallery.map((g) => ({
                ...g,
                image: g.image ? normalizeImageUrl(g.image) : g.image,
              }))
            : [],
        },
      };
    }
    if (sec.key === "network_coverage_section" && sec.fields) {
      const f = sec.fields as NetworkCoverageSectionFields;
      return {
        ...sec,
        fields: {
          ...f,
          map_image: f.map_image ? normalizeImageUrl(f.map_image) : f.map_image,
        },
      };
    }
    return sec;
  });

  return { ...data, sections };
}

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
    return res?.data ? sanitizeHomeCms(res.data) : null;
  } catch (error) {
    console.error("Error fetching Home CMS page data:", error);
    return null;
  }
}

