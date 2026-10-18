"use client";

import PageBanner from "@/components/ui/PageBanner";
import { useLanguage } from "@/providers/LanguageProvider";

export default function NewsBanner() {
  const { t } = useLanguage();
  return (
    <PageBanner
      image="/newsBanner.png"
      title={t("header.news")}
      alt="News and Events banner"
    />
  );
}
