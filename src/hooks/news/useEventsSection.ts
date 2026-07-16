import { useState, useEffect } from "react";
import { getEvents } from "@/services/events.service";
import { useGlobalLoading } from "@/providers/LoadingProvider";
import { EventItem as ApiEventItem, EventSlideItem as EventItem } from "@/types/models";

export function useEventsSection() {
  const [activeTab, setActiveTab] = useState("All");
  const [eventsData, setEventsData] = useState<EventItem[]>([]);
  const [tabs, setTabs] = useState<string[]>(["All"]);
  const [isLoading, setIsLoading] = useState(true);
  const { startLoading, stopLoading } = useGlobalLoading();

  useEffect(() => {
    async function fetchEvents() {
      setIsLoading(true);
      startLoading("events-section");
      try {
        const response = await getEvents({ limit: 50, lang: "en" });

        const mappedData = response.data.map((item: ApiEventItem) => {
          // Use starts_at or formatted_date for date display
          const eventDate = item.starts_at || item.date || item.start_date || item.created_at || new Date().toISOString();
          const d = new Date(eventDate);
          const monthName = d.toLocaleString("en-US", { month: "long" });
          const day = d.getDate().toString();

          return {
            id: item.id || item.slug,
            // Use cover_image_url as per API response
            image: item.cover_image_url || item.cover_image || item.image || "/event1.png",
            date: day,
            month: monthName.substring(0, 3).toLowerCase(),
            title: item.title || "Upcoming Event",
            // Use category key from API
            category: item.category || "other",
            slug: item.slug,
            isFeatured: item.is_featured ?? true,
          };
        });

        setEventsData(mappedData);

        // Build unique tabs from category keys
        const uniqueCategories = Array.from(
          new Set(mappedData.map((e: EventItem) => e.category))
        ) as string[];
        setTabs(["All", ...uniqueCategories]);
      } catch (error) {
        // Silently fail
      } finally {
        setIsLoading(false);
        stopLoading("events-section");
      }
    }

    fetchEvents();
  }, [startLoading, stopLoading]);

  const filtered =
    activeTab === "All"
      ? eventsData
      : eventsData.filter((e) => e.category === activeTab);

  return { activeTab, setActiveTab, tabs, filtered, isLoading };
}
