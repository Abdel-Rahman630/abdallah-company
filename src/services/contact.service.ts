import { apiGet } from "./apiClient";
import type {
  ContactCmsResponse,
  ContactCmsData,
  ContactBannerSectionFields,
} from "@/types/models";
import { normalizeImageUrl } from "@/lib/utils";

const REVALIDATE_TIME = 900; // 15 minutes (ISR)

function sanitizeContactCms(data: ContactCmsData): ContactCmsData {
  if (!data || !Array.isArray(data.sections)) return data;

  const sections = data.sections.map((sec) => {
    if (sec.key === "banner_section" && sec.fields) {
      const f = sec.fields as ContactBannerSectionFields;
      return {
        ...sec,
        fields: {
          ...f,
          banner_image: f.banner_image ? normalizeImageUrl(f.banner_image) : f.banner_image,
        },
      };
    }
    return sec;
  });

  return { ...data, sections };
}

/**
 * Fetches the CMS page data for the Contact Us page.
 * Endpoint: GET /api/cms/pages/contact?lang={lang}
 */
export async function getContactCmsData(lang: string = "en"): Promise<ContactCmsData | null> {
  try {
    const res = await apiGet<ContactCmsResponse>(`/api/cms/pages/contact?lang=${lang}`, {
      revalidate: REVALIDATE_TIME,
      tags: ["contact-cms", `contact-cms-${lang}`],
    });
    return res?.data ? sanitizeContactCms(res.data) : null;
  } catch (error) {
    console.error("Error fetching Contact CMS page data:", error);
    return null;
  }
}

