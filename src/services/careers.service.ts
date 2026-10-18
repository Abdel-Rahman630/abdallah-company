import { apiGet } from "./apiClient";
import type {
  CareersCmsResponse,
  CareersCmsData,
  CareersBannerSectionFields,
  WhyJoinUsSectionFields,
} from "@/types/models";
import { normalizeImageUrl } from "@/lib/utils";

const REVALIDATE_TIME = 900; // 15 minutes (ISR)

function sanitizeCareersCms(data: CareersCmsData): CareersCmsData {
  if (!data || !Array.isArray(data.sections)) return data;

  const sections = data.sections.map((sec) => {
    if (sec.key === "banner_section" && sec.fields) {
      const f = sec.fields as CareersBannerSectionFields;
      return {
        ...sec,
        fields: {
          ...f,
          banner_image: f.banner_image ? normalizeImageUrl(f.banner_image) : f.banner_image,
        },
      };
    }
    if (sec.key === "why_join_us_section" && sec.fields) {
      const f = sec.fields as WhyJoinUsSectionFields;
      return {
        ...sec,
        fields: {
          ...f,
          image: f.image ? normalizeImageUrl(f.image) : f.image,
          award_badge_image: f.award_badge_image ? normalizeImageUrl(f.award_badge_image) : f.award_badge_image,
          award_certificate_image: f.award_certificate_image ? normalizeImageUrl(f.award_certificate_image) : f.award_certificate_image,
          benefits: Array.isArray(f.benefits)
            ? f.benefits.map((b) => ({
                ...b,
                icon: b.icon ? normalizeImageUrl(b.icon) : b.icon,
              }))
            : [],
        },
      };
    }
    return sec;
  });

  return { ...data, sections };
}

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
    return res?.data ? sanitizeCareersCms(res.data) : null;
  } catch (error) {
    console.error("Error fetching Careers CMS page data:", error);
    return null;
  }
}

