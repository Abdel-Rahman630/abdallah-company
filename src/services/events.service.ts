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
}): Promise<ApiResponse<EventItem[]>> {
  const query = new URLSearchParams();
  if (params?.page) query.set("page", String(params.page));
  if (params?.limit) query.set("limit", String(params.limit));
  if (params?.status) query.set("status", params.status);

  const qs = query.toString() ? `?${query.toString()}` : "";
  return apiGet<ApiResponse<EventItem[]>>(`/events${qs}`, {
    revalidate: 60,
    tags: ["events"],
  });
}

/**
 * Fetches a single event by slug.
 */
export async function getEventById(slug: string): Promise<EventItem> {
  return apiGet<EventItem>(`/events/${slug}`, {
    revalidate: 60,
    tags: ["events", `event-${slug}`],
  });
}
