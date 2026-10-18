import { apiGet } from "./apiClient";
import type {
  AboutCmsResponse,
  AboutCmsData,
  AboutBannerSectionFields,
  CompanyOverviewSectionFields,
  MissionVisionSectionFields,
} from "@/types/models";
import { normalizeImageUrl } from "@/lib/utils";

const REVALIDATE_TIME = 900; // 15 minutes (ISR)

function sanitizeAboutCms(data: AboutCmsData): AboutCmsData {
  if (!data || !Array.isArray(data.sections)) return data;

  const sections = data.sections.map((sec) => {
    if (sec.key === "banner_section" && sec.fields) {
      const f = sec.fields as AboutBannerSectionFields;
      return {
        ...sec,
        fields: {
          ...f,
          banner_image: f.banner_image ? normalizeImageUrl(f.banner_image) : f.banner_image,
        },
      };
    }
    if (sec.key === "company_overview_section" && sec.fields) {
      const f = sec.fields as CompanyOverviewSectionFields;
      return {
        ...sec,
        fields: {
          ...f,
          image: f.image ? normalizeImageUrl(f.image) : f.image,
        },
      };
    }
    if (sec.key === "mission_vision_section" && sec.fields) {
      const f = sec.fields as MissionVisionSectionFields;
      return {
        ...sec,
        fields: {
          ...f,
          image: f.image ? normalizeImageUrl(f.image) : f.image,
        },
      };
    }
    return sec;
  });

  return { ...data, sections };
}

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
    return res?.data ? sanitizeAboutCms(res.data) : null;
  } catch (error) {
    console.error("Error fetching About CMS page data:", error);
    return null;
  }
}

