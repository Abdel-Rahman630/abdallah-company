import { useState, useEffect } from "react";
import { getNews } from "@/services/news.service";
import { useGlobalLoading } from "@/providers/LoadingProvider";
import { useLanguage } from "@/providers/LanguageProvider";
import { LatestNewsItem, NewsItem } from "@/types/models";

const ITEMS_PER_PAGE = 3;

export function useLatestNews() {
  const { locale } = useLanguage();
  const [currentPage, setCurrentPage] = useState(0);
  const [allNews, setAllNews] = useState<NewsItem[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const { startLoading, stopLoading } = useGlobalLoading();

  // Fetch news data when locale changes
  useEffect(() => {
    let cancelled = false;

    async function fetchNews() {
      setIsLoading(true);
      startLoading("latest-news");
      try {
        const response = await getNews({ lang: locale });
        if (cancelled) return;
        const rawData = response.data || [];
        setAllNews(rawData);
        setPageCount(Math.ceil(rawData.length / ITEMS_PER_PAGE));
        setCurrentPage(0);
      } catch (error) {
        console.error("Failed to fetch news:", error);
      } finally {
        if (!cancelled) {
          setIsLoading(false);
          stopLoading("latest-news");
        }
      }
    }
    fetchNews();

    return () => {
      cancelled = true;
    };
  }, [locale, startLoading, stopLoading]);

  // Paginate locally during render (no need for useEffect or derived state)
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const paginatedData = allNews.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const newsData: LatestNewsItem[] = paginatedData.map((item: NewsItem) => ({
    id: item.id,
    slug: item.slug,
    image: item.cover_image || item.cover_image_url || "/bg.png",
    date: item.publish_date || item.created_at || "Recent News",
    title: item.title || "",
    paragraph: item.short_description || item.excerpt || "Read more about this article...",
  }));

  return { newsData, pageCount, currentPage, setCurrentPage, isLoading };
}
