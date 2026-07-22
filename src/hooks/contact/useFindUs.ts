import { useState, useEffect, useCallback } from "react";
import { OptionItem, Location } from "@/types/models";
import { useLanguage } from "@/providers/LanguageProvider";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ApiAny = any;

export function useFindUs() {
  const { locale } = useLanguage();
  const [locations, setLocations] = useState<Location[]>([]);
  const [activeLocation, setActiveLocation] = useState<Location | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchLocations = useCallback(async (filters?: { division?: string | number; subDivision?: string | number; city?: string }) => {
    setIsLoading(true);
    try {
      let url = `${API_BASE_URL}/api/cms/locations?lang=${locale}`;
      if (filters?.division) {
        url += `&division=${encodeURIComponent(String(filters.division))}`;
      }
      if (filters?.subDivision) {
        url += `&sub_division=${encodeURIComponent(String(filters.subDivision))}`;
      }
      if (filters?.city) {
        url += `&city=${encodeURIComponent(filters.city)}`;
      }

      const res = await fetch(url);
      const json = await res.json();

      if (json.status && json.data) {
        const mapped: Location[] = json.data.map((item: ApiAny) => ({
          id: item.id,
          title: item.city || item.branch,
          span: item.facility_type || "Showroom",
          paragraph: item.address || "",
          mapQuery: item.address || item.branch || item.city,
          googleMapsUrl: item.google_maps_url || "",
          division: item.division?.label || item.division || "Honda",
          subDivision: item.sub_divisions?.map((s: ApiAny) => s.label).join(", ") || "",
        }));

        setLocations(mapped);
        if (mapped.length > 0) {
          setActiveLocation(mapped[0]);
        }
      } else {
        setLocations([]);
        setActiveLocation(null);
      }
    } catch {
      setLocations([]);
      setActiveLocation(null);
    } finally {
      setIsLoading(false);
    }
  }, [locale]);

  const [divisions, setDivisions] = useState<OptionItem[]>([]);
  const [subDivisions, setSubDivisions] = useState<OptionItem[]>([]);
  const [cities, setCities] = useState<string[]>([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchLocations();

    async function fetchOptions() {
      try {
        const res = await fetch(`${API_BASE_URL}/api/cms/locations?lang=${locale}`);
        const json = await res.json();
        if (json.status && json.data) {
          const divMap = new Map<string | number, string>();
          const subDivMap = new Map<string | number, string>();
          const cits = new Set<string>();

          json.data.forEach((item: ApiAny) => {
            if (item.division && typeof item.division === 'object') {
              divMap.set(item.division.value, item.division.label);
            } else if (typeof item.division === 'string') {
              divMap.set(item.division, item.division);
            }

            if (item.sub_divisions && Array.isArray(item.sub_divisions)) {
              item.sub_divisions.forEach((sub: ApiAny) => {
                subDivMap.set(sub.value, sub.label);
              });
            }

            if (item.city) cits.add(item.city);
          });

          setDivisions(Array.from(divMap.entries()).map(([value, label]) => ({ value, label })));
          setSubDivisions(Array.from(subDivMap.entries()).map(([value, label]) => ({ value, label })));
          setCities(Array.from(cits));
        }
      } catch {
        // Ignored
      }
    }
    fetchOptions();
  }, [fetchLocations, locale]);

  const headOfficeLocation = locations.find((l) => l.id === 28 || l.title.toLowerCase().includes("head office")) || null;

  return { locations, activeLocation, setActiveLocation, headOfficeLocation, isLoading, fetchLocations, divisions, subDivisions, cities };
}
