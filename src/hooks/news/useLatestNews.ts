import { useState, useEffect } from "react";
import { getNews } from "@/services/news.service";
import { useGlobalLoading } from "@/providers/LoadingProvider";

export type LatestNewsItem = {
  id: string | number;
  image: string;
  date: string;
  title: string;
  paragraph: string;
};

const ITEMS_PER_PAGE = 3;

export function useLatestNews() {
  const [currentPage, setCurrentPage] = useState(0);
  const [newsData, setNewsData] = useState<LatestNewsItem[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const { startLoading, stopLoading } = useGlobalLoading();

  useEffect(() => {
    async function fetchNews() {
      setIsLoading(true);
      startLoading("latest-news");
      try {
        const response = await getNews({
          page: currentPage + 1,
          limit: ITEMS_PER_PAGE,
          lang: "en",
        });

        let rawData = response.data;
        let totalPages = 1;

        const meta = (response as any).meta;
        if (meta?.last_page) {
          totalPages = meta.last_page;
        } else if (response.pagination?.totalPages) {
          totalPages = response.pagination.totalPages;
        } else {
          // Local pagination fallback if API returns all items ignoring the limit
          if (rawData.length > ITEMS_PER_PAGE) {
            totalPages = Math.ceil(rawData.length / ITEMS_PER_PAGE);
            const startIndex = currentPage * ITEMS_PER_PAGE;
            rawData = rawData.slice(startIndex, startIndex + ITEMS_PER_PAGE);
          } else {
            totalPages = 1;
          }
        }

        const mappedData = rawData.map((item: any) => ({
          id: item.id || item.slug,
          image: item.cover_image || "/firstnew.png",
          date: item.published_at || item.created_at || "Recent News",
          title: item.title,
          paragraph: item.short_description || "Read more about this article...",
        }));

        setNewsData(mappedData);
        setPageCount(totalPages);
      } catch (error) {
        // Removed console.error
      } finally {
        setIsLoading(false);
        stopLoading("latest-news");
      }
    }

    fetchNews();
  }, [currentPage, startLoading, stopLoading]);

  return { newsData, pageCount, currentPage, setCurrentPage, isLoading };
}
