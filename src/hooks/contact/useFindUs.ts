import { useState, useEffect, useCallback } from "react";
import { useGlobalLoading } from "@/providers/LoadingProvider";

export type Location = {
  id: number;
  title: string;
  span: string;
  paragraph: string;
  mapQuery: string;
  googleMapsUrl: string;
  division: string;
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

export function useFindUs() {
  const [locations, setLocations] = useState<Location[]>([]);
  const [activeLocation, setActiveLocation] = useState<Location | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { startLoading, stopLoading } = useGlobalLoading();

  const fetchLocations = useCallback(async (filters?: { division?: string; city?: string }) => {
    setIsLoading(true);
    startLoading("findus-locations");
    try {
      let url = `${API_BASE_URL}/api/cms/locations?lang=en`;
      if (filters?.division) {
        url += `&division=${encodeURIComponent(filters.division)}`;
      }
      if (filters?.city) {
        url += `&city=${encodeURIComponent(filters.city)}`;
      }

      const res = await fetch(url);
      const json = await res.json();

      if (json.status && json.data) {
        const mapped: Location[] = json.data.map((item: any) => ({
          id: item.id,
          title: item.city || item.branch,
          span: item.facility_type || "Showroom",
          paragraph: item.address || "",
          mapQuery: item.address || item.branch || item.city,
          googleMapsUrl: item.google_maps_url || "",
          division: item.division || "Honda",
        }));

        setLocations(mapped);
        if (mapped.length > 0) {
          setActiveLocation(mapped[0]);
        }
      } else {
        setLocations([]);
        setActiveLocation(null);
      }
    } catch (err) {
      // Removed console.error
      setLocations([]);
      setActiveLocation(null);
    } finally {
      setIsLoading(false);
      stopLoading("findus-locations");
    }
  }, [startLoading, stopLoading]);

  const [divisions, setDivisions] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);

  useEffect(() => {
    fetchLocations();
    
    // Fetch options once
    async function fetchOptions() {
      startLoading("findus-options");
      try {
        const res = await fetch(`${API_BASE_URL}/api/cms/locations?lang=en`);
        const json = await res.json();
        if (json.status && json.data) {
          const divs = new Set<string>();
          const cits = new Set<string>();
          json.data.forEach((item: any) => {
            if (item.division) divs.add(item.division);
            if (item.city) cits.add(item.city);
          });
          setDivisions(Array.from(divs));
          setCities(Array.from(cits));
        }
      } catch (err) {
        // Removed console.error
      } finally {
        stopLoading("findus-options");
      }
    }
    fetchOptions();
  }, [fetchLocations, startLoading, stopLoading]);

  const headOfficeLocation = locations.find((l) => l.id === 28 || l.title.toLowerCase().includes("head office")) || null;

  return { locations, activeLocation, setActiveLocation, headOfficeLocation, isLoading, fetchLocations, divisions, cities };
}
