import { apiGet, apiPost } from "./apiClient";
import type { ApiResponse, EventItem } from "@/types/models";

const REVALIDATE_TIME = 900; // 1 hour

/**
 * Fetches upcoming events for the home page slider.
 * Called from Server Components — cached for 1 hour.
 */
export async function getHomeEvents(lang: string = "en"): Promise<EventItem[]> {
  try {
    const res = await apiGet<ApiResponse<EventItem[]>>(`/api/cms/events?lang=${lang}`, {
      revalidate: REVALIDATE_TIME,
      tags: ["events", "home-events"],
    });
    return Array.isArray(res?.data) ? res.data : [];
  } catch (error) {
    console.error("Error fetching home events:", error);
    return [];
  }
}

/**
 * Fetches a paginated list of events.
 * Called from Server Components — cached for 1 hour.
 */
export async function getEvents(params?: {
  page?: number;
  limit?: number;
  status?: "upcoming" | "past";
  lang?: string;
  category?: string;
}): Promise<ApiResponse<EventItem[]>> {
  try {
    const query = new URLSearchParams();
    if (params?.page) query.set("page", String(params.page));
    if (params?.limit) query.set("limit", String(params.limit));
    if (params?.status) query.set("status", params.status);
    if (params?.lang) query.set("lang", params.lang);
    if (params?.category && params.category !== "All") query.set("category", params.category);

    const qs = query.toString();
    return await apiGet<ApiResponse<EventItem[]>>(`/api/cms/events${qs ? '?' + qs : ''}`, {
      revalidate: REVALIDATE_TIME,
      tags: ["events"],
    });
  } catch (error) {
    console.error("Error fetching events:", error);
    return { message: "Failed to fetch events", data: [] };
  }
}

/**
 * Fetches a single event by id.
 */
export async function getEventById(id: string | number, lang?: string): Promise<EventItem | null> {
  try {
    const qs = lang ? `?lang=${lang}` : "";
    const res = await apiGet<ApiResponse<EventItem>>(`/api/cms/events/${id}${qs}`, {
      revalidate: 60,
      tags: ["events", `event-${id}`],
    });
    return res?.data || null;
  } catch (error) {
    console.error(`Error fetching event ${id}:`, error);
    return null;
  }
}

export interface EventRequestResponse {
  status: boolean;
  message: string;
}

/**
 * Submits an event interest request.
 */
export async function submitEventRequest(
  eventId: string | number,
  data: { name: string; phone: string; email: string }
): Promise<EventRequestResponse> {
  return apiPost<{ name: string; phone: string; email: string }, EventRequestResponse>(
    `/api/cms/events/${eventId}/requests`,
    data
  );
}
