import { apiGet } from "./apiClient";
import type { ApiResponse, NewsItem, SingleNewsResponse } from "@/types/models";

/**
 * Fetches a paginated list of news articles.
 */
export async function getNews(params?: {
  page?: number;
  limit?: number;
  category?: string;
  lang?: string;
}): Promise<ApiResponse<NewsItem[]>> {
  const query = new URLSearchParams();
  if (params?.page) query.set("page", String(params.page));
  if (params?.limit) query.set("limit", String(params.limit));
  if (params?.category) query.set("category", params.category);
  if (params?.lang) query.set("lang", params.lang);

  const qs = query.toString() ? `?${query.toString()}` : "";
  return apiGet<ApiResponse<NewsItem[]>>(`/api/cms/news${qs}`, {
    revalidate: 60,
    tags: ["news"],
  });
}

/**
 * Fetches a single news article by ID.
 * Endpoint: GET /api/cms/news/{news_id}?lang=en
 */
export async function getNewsById(id: string | number, lang = "en"): Promise<NewsItem> {
  const response = await apiGet<SingleNewsResponse>(
    `/api/cms/news/${id}?lang=${lang}`,
    { revalidate: 60, tags: ["news", `news-${id}`] }
  );
  return response.data;
}
