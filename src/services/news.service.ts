import { apiGet } from "./apiClient";
import type { ApiResponse, NewsItem, SingleNewsResponse } from "@/types/models";
import { normalizeImageUrl } from "@/lib/utils";

const REVALIDATE_TIME = 900; // 15 minutes (ISR)

function sanitizeNewsItem(item: NewsItem): NewsItem {
  if (!item) return item;
  return {
    ...item,
    cover_image: item.cover_image ? normalizeImageUrl(item.cover_image) : item.cover_image,
    cover_image_url: item.cover_image_url ? normalizeImageUrl(item.cover_image_url) : item.cover_image_url,
    media: Array.isArray(item.media)
      ? item.media.map((m) => ({
          ...m,
          url: m.url ? normalizeImageUrl(m.url) : m.url,
        }))
      : [],
  };
}

/**
 * Fetches the 4 latest news articles for the home page.
 * Called from Server Components — cached for 15 minutes.
 */
export async function getHomeNews(lang: string = "en"): Promise<NewsItem[]> {
  try {
    const res = await apiGet<ApiResponse<NewsItem[]>>(`/api/cms/news?limit=4&lang=${lang}`, {
      revalidate: REVALIDATE_TIME,
      tags: ["news", "home-news", `home-news-${lang}`],
    });
    const list = Array.isArray(res?.data) ? res.data : [];
    return list.map(sanitizeNewsItem);
  } catch (error) {
    console.error("Error fetching home news:", error);
    return [];
  }
}

/**
 * Fetches a paginated list of news articles.
 */
export async function getNews(params?: {
  page?: number;
  limit?: number;
  category?: string;
  lang?: string;
}): Promise<ApiResponse<NewsItem[]>> {
  try {
    const query = new URLSearchParams();
    if (params?.page) query.set("page", String(params.page));
    if (params?.limit) query.set("limit", String(params.limit));
    if (params?.category) query.set("category", params.category);
    if (params?.lang) query.set("lang", params.lang);

    const qs = query.toString() ? `?${query.toString()}` : "";
    const res = await apiGet<ApiResponse<NewsItem[]>>(`/api/cms/news${qs}`, {
      revalidate: REVALIDATE_TIME,
      tags: ["news", params?.lang ? `news-${params.lang}` : "news-all"],
    });

    return {
      ...res,
      data: Array.isArray(res?.data) ? res.data.map(sanitizeNewsItem) : [],
    };
  } catch (error) {
    console.error("Error fetching news:", error);
    return { message: "Failed to fetch news", data: [] };
  }
}

/**
 * Fetches a single news article by ID.
 * Endpoint: GET /api/cms/news/{news_id}?lang={lang}
 */
export async function getNewsById(id: string | number, lang = "en"): Promise<NewsItem | null> {
  try {
    const response = await apiGet<SingleNewsResponse>(
      `/api/cms/news/${id}?lang=${lang}`,
      { revalidate: 60, tags: ["news", `news-${id}`, `news-${id}-${lang}`] }
    );
    return response?.data ? sanitizeNewsItem(response.data) : null;
  } catch (error) {
    console.error(`Error fetching news ${id}:`, error);
    return null;
  }
}

