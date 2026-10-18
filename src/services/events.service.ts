import { apiGet, apiPost } from "./apiClient";
import type { ApiResponse, EventItem } from "@/types/models";
import { normalizeImageUrl } from "@/lib/utils";

const REVALIDATE_TIME = 900; // 15 minutes (ISR)

function sanitizeEventItem(item: EventItem): EventItem {
  if (!item) return item;
  return {
    ...item,
    cover_image_url: item.cover_image_url ? normalizeImageUrl(item.cover_image_url) : item.cover_image_url,
    images: Array.isArray(item.images) ? item.images.map(normalizeImageUrl) : item.images,
    gallery_image_urls: Array.isArray(item.gallery_image_urls)
      ? item.gallery_image_urls.map(normalizeImageUrl)
      : item.gallery_image_urls,
  };
}

/**
 * Fetches upcoming events for the home page slider.
 * Called from Server Components — cached for 15 minutes.
 */
export async function getHomeEvents(lang: string = "en"): Promise<EventItem[]> {
  try {
    const res = await apiGet<ApiResponse<EventItem[]>>(`/api/cms/events?lang=${lang}`, {
      revalidate: REVALIDATE_TIME,
      tags: ["events", "home-events", `home-events-${lang}`],
    });
    const list = Array.isArray(res?.data) ? res.data : [];
    return list.map(sanitizeEventItem);
  } catch (error) {
    console.error("Error fetching home events:", error);
    return [];
  }
}

/**
 * Fetches a paginated list of events.
 * Called from Server Components / Client — cached for 15 minutes.
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
    const res = await apiGet<ApiResponse<EventItem[]>>(`/api/cms/events${qs ? '?' + qs : ''}`, {
      revalidate: REVALIDATE_TIME,
      tags: ["events", params?.lang ? `events-${params.lang}` : "events-all"],
    });
    return {
      ...res,
      data: Array.isArray(res?.data) ? res.data.map(sanitizeEventItem) : [],
    };
  } catch (error) {
    console.error("Error fetching events:", error);
    return { message: "Failed to fetch events", data: [] };
  }
}

/**
 * Fetches a single event by id.
 */
export async function getEventById(id: string | number, lang = "en"): Promise<EventItem | null> {
  try {
    const qs = lang ? `?lang=${lang}` : "";
    const res = await apiGet<ApiResponse<EventItem>>(`/api/cms/events/${id}${qs}`, {
      revalidate: 60,
      tags: ["events", `event-${id}`, `event-${id}-${lang}`],
    });
    return res?.data ? sanitizeEventItem(res.data) : null;
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

