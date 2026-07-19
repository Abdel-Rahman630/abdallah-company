import { useState, useEffect } from "react";
import { getNews } from "@/services/news.service";
import { useGlobalLoading } from "@/providers/LoadingProvider";
import { LatestNewsItem, NewsItem } from "@/types/models";

const ITEMS_PER_PAGE = 3;

export function useLatestNews() {
  const [currentPage, setCurrentPage] = useState(0);
  const [allNews, setAllNews] = useState<NewsItem[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const { startLoading, stopLoading } = useGlobalLoading();

  // Fetch all data once
  useEffect(() => {
    async function fetchNews() {
      setIsLoading(true);
      startLoading("latest-news");
      try {
        const response = await getNews({ lang: "en" }); // Fetch all (api defaults to 12)
        const rawData = response.data || [];
        setAllNews(rawData);
        setPageCount(Math.ceil(rawData.length / ITEMS_PER_PAGE));
      } catch (error) {
        console.error("Failed to fetch news:", error);
      } finally {
        setIsLoading(false);
        stopLoading("latest-news");
      }
    }
    fetchNews();
  }, [startLoading, stopLoading]);

  // Paginate locally during render (no need for useEffect or derived state)
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const paginatedData = allNews.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const newsData: LatestNewsItem[] = paginatedData.map((item: NewsItem) => ({
    id: item.id,
    image: item.cover_image || item.cover_image_url || "/bg.png",
    date: item.publish_date || item.created_at || "Recent News",
    title: item.title || "",
    paragraph: item.short_description || item.excerpt || "Read more about this article...",
  }));

  return { newsData, pageCount, currentPage, setCurrentPage, isLoading };
}
