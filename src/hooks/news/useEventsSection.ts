import { useState, useEffect } from "react";
import { getEvents } from "@/services/events.service";
import { useGlobalLoading } from "@/providers/LoadingProvider";

export type EventItem = {
  id: string | number;
  image: string;
  date: string;
  month: string;
  title: string;
  category: string;
  slug?: string;
};

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

        const mappedData = response.data.map((item: any) => {
          const eventDate =
            item.date ||
            item.start_date ||
            item.created_at ||
            new Date().toISOString();
          const d = new Date(eventDate);
          const monthName = d.toLocaleString("en-US", { month: "long" });
          const day = d.getDate().toString();

          return {
            id: item.id || item.slug,
            image: item.cover_image || item.image || "/event1.png",
            date: day,
            month: monthName.substring(0, 3).toLowerCase(),
            title: item.title || "Upcoming Event",
            category: item.category || monthName,
            slug: item.slug,
          };
        });

        setEventsData(mappedData);

        const uniqueCategories = Array.from(
          new Set(mappedData.map((e: EventItem) => e.category))
        ) as string[];
        setTabs(["All", ...uniqueCategories]);
      } catch (error) {
        // Removed console.error
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
