import { apiGet } from "./apiClient";
import type { ApiResponse, EventItem } from "@/types/models";

/**
 * Fetches a paginated list of events.
 * Called from Server Components — cached for 60s.
 */
export async function getEvents(params?: {
  page?: number;
  limit?: number;
  status?: "upcoming" | "past";
  lang?: string;
  category?: string;
}): Promise<ApiResponse<EventItem[]>> {
  const query = new URLSearchParams();
  if (params?.page) query.set("page", String(params.page));
  if (params?.limit) query.set("limit", String(params.limit));
  if (params?.status) query.set("status", params.status);
  if (params?.lang) query.set("lang", params.lang);
  if (params?.category && params.category !== "All") query.set("category", params.category);

  const qs = query.toString();
  return apiGet<ApiResponse<EventItem[]>>(`/api/cms/events${qs ? '?' + qs : ''}`, {
    revalidate: 60,
    tags: ["events"],
  });
}

/**
 * Fetches a single event by id.
 */
export async function getEventById(id: string | number, lang?: string): Promise<EventItem> {
  const qs = lang ? `?lang=${lang}` : "";
  const res = await apiGet<ApiResponse<EventItem>>(`/api/cms/events/${id}${qs}`, {
    revalidate: 60,
    tags: ["events", `event-${id}`],
  });
  return res.data;
}
