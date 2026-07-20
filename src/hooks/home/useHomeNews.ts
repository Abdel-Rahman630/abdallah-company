import { useState, useEffect } from "react";
import { getNews } from "@/services/news.service";
import { useGlobalLoading } from "@/providers/LoadingProvider";
import { HomeNewsItem, NewsItem } from "@/types/models";

export function useHomeNews() {
  const [newsList, setNewsList] = useState<HomeNewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { startLoading, stopLoading } = useGlobalLoading();

  useEffect(() => {
    async function fetchNews() {
      setIsLoading(true);
      startLoading("home-news");
      try {
        const response = await getNews({ limit: 4, lang: "en" });
        const mappedData: HomeNewsItem[] = response.data.map((item: NewsItem) => {
          const rawDate = item.publish_date || item.published_at || item.created_at;
          const d = rawDate ? new Date(rawDate) : new Date();
          const isValid = !isNaN(d.getTime());
          return {
            id: item.id,
            slug: item.slug,
            image: item.cover_image || item.cover_image_url || "/bg.png",
            subtitle: item.category || "News",
            title: item.title || "",
            desc: item.short_description || item.excerpt || "",
            dateStr: isValid
              ? d.toLocaleString("en-US", { day: "numeric", month: "short" })
              : "",
            day: isValid ? d.getDate() : "",
            monthStr: isValid ? d.toLocaleString("en-US", { month: "short" }) : "",
          };
        });
        setNewsList(mappedData);
      } catch (error) {
        console.error("Failed to fetch news:", error);
      } finally {
        setIsLoading(false);
        stopLoading("home-news");
      }
    }
    fetchNews();
  }, [startLoading, stopLoading]);

  const firstNews = newsList.length > 0 ? newsList[0] : null;
  const otherNews = newsList.length > 1 ? newsList.slice(1) : [];

  return { newsList, firstNews, otherNews, isLoading };
}
