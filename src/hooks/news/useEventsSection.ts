import { useState, useEffect, useRef } from "react";
import { getEvents } from "@/services/events.service";
import { EventItem as ApiEventItem, EventSlideItem as EventItem } from "@/types/models";
import { useLanguage } from "@/providers/LanguageProvider";

export function useEventsSection() {
  const { locale } = useLanguage();
  const [activeTab, setActiveTab] = useState("All");
  const [eventsData, setEventsData] = useState<EventItem[]>([]);
  const [tabs, setTabs] = useState<string[]>(["All"]);
  const [isLoading, setIsLoading] = useState(true);
  const tabsBuilt = useRef(false);

  useEffect(() => {
    let cancelled = false;

    async function fetchEvents() {
      setIsLoading(true);
      try {
        const params: any = { lang: locale };
        if (activeTab !== "All") params.category = activeTab;

        const response = await getEvents(params);
        if (cancelled) return;

        const mappedData = response.data.map((item: ApiEventItem) => {
          const eventDate = item.starts_at || item.date || item.start_date || item.created_at || new Date().toISOString();
          const d = new Date(eventDate);
          const monthName = d.toLocaleString("en-US", { month: "long" });
          const day = d.getDate().toString();

          return {
            id: item.id || item.slug,
            image: item.cover_image_url || "/bg.png",
            date: day,
            month: monthName.substring(0, 3).toLowerCase(),
            title: item.title || "Upcoming Event",
            category: item.category || "other",
            slug: item.slug,
            isFeatured: item.is_featured ?? true,
          };
        });

        setEventsData(mappedData);

        // Build unique tabs only once from the initial "All" load
        if (!tabsBuilt.current) {
          const uniqueCategories = Array.from(
            new Set(mappedData.map((e: EventItem) => e.category))
          ) as string[];
          setTabs(["All", ...uniqueCategories]);
          tabsBuilt.current = true;
        }
      } catch (error) {
        // Silently fail
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }

    fetchEvents();
    return () => { cancelled = true; };
  }, [activeTab, locale]);

  return { activeTab, setActiveTab, tabs, filtered: eventsData, isLoading };
}
