import { apiGet } from "./apiClient";
import type { ApiResponse, NewsItem } from "@/types/models";

/**
 * Fetches a paginated list of news articles.
 * Called from Server Components — cached by Next.js for 60s.
 */
export async function getNews(params?: {
  page?: number;
  limit?: number;
  category?: string;
}): Promise<ApiResponse<NewsItem[]>> {
  const query = new URLSearchParams();
  if (params?.page) query.set("page", String(params.page));
  if (params?.limit) query.set("limit", String(params.limit));
  if (params?.category) query.set("category", params.category);

  const qs = query.toString() ? `?${query.toString()}` : "";
  return apiGet<ApiResponse<NewsItem[]>>(`/news${qs}`, {
    revalidate: 60,
    tags: ["news"],
  });
}

/**
 * Fetches a single news article by slug.
 */
export async function getNewsById(slug: string): Promise<NewsItem> {
  return apiGet<NewsItem>(`/news/${slug}`, {
    revalidate: 60,
    tags: ["news", `news-${slug}`],
  });
}
