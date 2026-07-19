"use client";

import PageBanner from "@/components/ui/PageBanner";
import { useLanguage } from "@/providers/LanguageProvider";

export default function CareersBanner() {
  const { t } = useLanguage();
  return <PageBanner image="/careers.png" title={t("careers.title")} />;
}
