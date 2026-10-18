import { useMemo } from "react";
import { HomeNewsItem, NewsItem } from "@/types/models";
import { formatDateParts, normalizeImageUrl } from "@/lib/utils";
import { useLanguage } from "@/providers/LanguageProvider";

function mapNewsItem(item: NewsItem, defaultCategory: string, locale: string): HomeNewsItem {
  const rawDate = item.publish_date || item.published_at || item.created_at;
  const dateLocale = locale === "ar" ? "ar-SA" : "en-US";
  const { dayNum, monthShort, monthShortUpper } = formatDateParts(rawDate, dateLocale);
  const rawImg = item.cover_image || item.cover_image_url;
  const dateStr = locale === "ar" ? `${dayNum} ${monthShort}` : `${monthShort} ${dayNum}`;
  return {
    id: item.id,
    slug: item.slug,
    image: rawImg ? normalizeImageUrl(rawImg) : "/bg.png",
    subtitle: item.category || defaultCategory,
    title: item.title || "",
    desc: item.short_description || item.excerpt || "",
    dateStr,
    day: dayNum,
    monthStr: monthShortUpper,
  };
}

/**
 * Transforms pre-fetched server-side news data for the home page.
 * Data is passed as initialData from the Server Component — no client fetch needed.
 */
export function useHomeNews(initialData: NewsItem[] = []) {
  const { locale, t } = useLanguage();
  const defaultCategory = t("nav.news.newsTitle") || "News";

  const newsList = useMemo<HomeNewsItem[]>(
    () => initialData.map((item) => mapNewsItem(item, defaultCategory, locale)),
    [initialData, defaultCategory, locale]
  );

  const firstNews = newsList.length > 0 ? newsList[0] : null;
  const otherNews = newsList.length > 1 ? newsList.slice(1) : [];

  return { newsList, firstNews, otherNews, isLoading: false };
}
