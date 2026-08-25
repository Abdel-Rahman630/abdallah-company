import { useMemo } from "react";
import { HomeNewsItem, NewsItem } from "@/types/models";
import { formatDateParts } from "@/lib/utils";

function mapNewsItem(item: NewsItem): HomeNewsItem {
  const rawDate = item.publish_date || item.published_at || item.created_at;
  const { dayNum, monthShort, monthShortUpper } = formatDateParts(rawDate);
  return {
    id: item.id,
    slug: item.slug,
    image: item.cover_image || item.cover_image_url || "/bg.png",
    subtitle: item.category || "News",
    title: item.title || "",
    desc: item.short_description || item.excerpt || "",
    dateStr: `${monthShort} ${dayNum}`,
    day: dayNum,
    monthStr: monthShortUpper,
  };
}

/**
 * Transforms pre-fetched server-side news data for the home page.
 * Data is passed as initialData from the Server Component — no client fetch needed.
 */
export function useHomeNews(initialData: NewsItem[] = []) {
  const newsList = useMemo<HomeNewsItem[]>(
    () => initialData.map(mapNewsItem),
    [initialData]
  );

  const firstNews = newsList.length > 0 ? newsList[0] : null;
  const otherNews = newsList.length > 1 ? newsList.slice(1) : [];

  return { newsList, firstNews, otherNews, isLoading: false };
}
