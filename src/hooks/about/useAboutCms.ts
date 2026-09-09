import { useState, useEffect } from "react";
import { useLanguage } from "@/providers/LanguageProvider";
import { getAboutCmsData } from "@/services/about.service";
import type {
  AboutCmsData,
  AboutCmsSection,
  AboutBannerSectionFields,
  CompanyOverviewSectionFields,
  MissionVisionSectionFields,
  ValuesSectionFields,
} from "@/types/models";

export function getAboutSectionFields<T>(sections: AboutCmsSection[] = [], key: string): T | null {
  const section = sections.find((s) => s.key === key);
  return (section?.fields as T) || null;
}

export function useAboutCms(initialData: AboutCmsData | null = null) {
  const { locale } = useLanguage();
  const [data, setData] = useState<AboutCmsData | null>(initialData);

  useEffect(() => {
    let isMounted = true;
    async function fetchCms() {
      try {
        const res = await getAboutCmsData(locale);
        if (isMounted && res) {
          setData(res);
        }
      } catch (err) {
        console.error("Failed to update about CMS data for locale:", locale, err);
      }
    }

    if (locale) {
      fetchCms();
    }

    return () => {
      isMounted = false;
    };
  }, [locale]);

  const bannerFields = getAboutSectionFields<AboutBannerSectionFields>(data?.sections, "banner_section");
  const overviewFields = getAboutSectionFields<CompanyOverviewSectionFields>(data?.sections, "company_overview_section");
  const mvFields = getAboutSectionFields<MissionVisionSectionFields>(data?.sections, "mission_vision_section");
  const valuesFields = getAboutSectionFields<ValuesSectionFields>(data?.sections, "values_section");

  return {
    aboutData: data,
    bannerFields,
    overviewFields,
    mvFields,
    valuesFields,
  };
}
