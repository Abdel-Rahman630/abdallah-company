import { useState, useEffect, useMemo, useCallback } from "react";
import { OptionItem, Location, ApiLocation } from "@/types/models";
import { useLanguage } from "@/providers/LanguageProvider";
import { getLocations } from "@/services/locations.service";

export function useFindUs() {
  const { locale } = useLanguage();

  // Raw data from API
  const [rawData, setRawData] = useState<ApiLocation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Filter selections
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  // Fetch all raw data once
  const loadAllLocations = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const locations = await getLocations(locale);
      setRawData(locations);
    } catch (err: any) {
      console.error("Failed to fetch locations:", err);
      setError("Failed to load locations");
      setRawData([]);
    } finally {
      setIsLoading(false);
    }
  }, [locale]);

  useEffect(() => {
    loadAllLocations();
  }, [loadAllLocations]);

  // ── Cascading options ────────────────────────────────────────────────────────
  
  const divisions: OptionItem[] = useMemo(() => {
    const map = new Map<string | number, string>();
    rawData.forEach((item) => {
      if (Array.isArray(item.division)) {
        item.division.forEach((d) => map.set(d.value, d.label));
      }
    });
    return Array.from(map.entries()).map(([value, label]) => ({ value, label }));
  }, [rawData]);

  const departments: OptionItem[] = useMemo(() => {
    const map = new Map<string | number, string>();
    const subset = selectedDivision
      ? rawData.filter((item) =>
          Array.isArray(item.division) &&
          item.division.some((d) => String(d.value) === selectedDivision)
        )
      : rawData;

    subset.forEach((item) => {
      if (Array.isArray(item.department)) {
        item.department.forEach((dep) => map.set(dep.value, dep.label));
      }
    });
    return Array.from(map.entries()).map(([value, label]) => ({ value, label }));
  }, [rawData, selectedDivision]);

  const cities: string[] = useMemo(() => {
    const set = new Set<string>();
    let subset = rawData;

    if (selectedDivision) {
      subset = subset.filter(
        (item) =>
          Array.isArray(item.division) &&
          item.division.some((d) => String(d.value) === selectedDivision)
      );
    }
    if (selectedDepartment) {
      subset = subset.filter(
        (item) =>
          Array.isArray(item.department) &&
          item.department.some((dep) => String(dep.value) === selectedDepartment)
      );
    }

    subset.forEach((item) => {
      if (item.city) set.add(item.city);
    });
    return Array.from(set);
  }, [rawData, selectedDivision, selectedDepartment]);

  // ── Mapped & filtered locations ──────────────────────────────────────────────

  const allLocations: Location[] = useMemo(() => {
    return rawData.map((item) => ({
      id: item.id,
      title: item.branch || item.city || "",
      span:
        Array.isArray(item.department) && item.department.length > 0
          ? item.department.map((d) => d.label).join(", ")
          : item.city || "Showroom",
      paragraph: item.address || "",
      mapQuery: item.address || item.branch || item.city || "",
      googleMapsUrl: item.google_maps_url || "",
      division:
        Array.isArray(item.division) && item.division.length > 0
          ? item.division.map((d) => d.label).join(", ")
          : "",
      subDivision:
        Array.isArray(item.department) && item.department.length > 0
          ? item.department.map((d) => d.label).join(", ")
          : "",
      isMain: item.is_main === true || item.is_main === 1,
      city: item.city || "",
      sortOrder: typeof item.sort_order === "number" ? item.sort_order : 9999,
    }));
  }, [rawData]);

  // Apply filters
  const filteredLocations: Location[] = useMemo(() => {
    return allLocations.filter((loc) => {
      const raw = rawData.find((r) => r.id === loc.id);
      if (!raw) return true;

      if (
        selectedDivision &&
        !(
          Array.isArray(raw.division) &&
          raw.division.some((d) => String(d.value) === selectedDivision)
        )
      ) {
        return false;
      }
      if (
        selectedDepartment &&
        !(
          Array.isArray(raw.department) &&
          raw.department.some((dep) => String(dep.value) === selectedDepartment)
        )
      ) {
        return false;
      }
      if (selectedCity && raw.city !== selectedCity) {
        return false;
      }
      return true;
    });
  }, [allLocations, rawData, selectedDivision, selectedDepartment, selectedCity]);

  const mainLocations = useMemo(() => filteredLocations.filter((loc) => loc.isMain), [filteredLocations]);
  const [activeLocation, setActiveLocation] = useState<Location | null>(null);

  useEffect(() => {
    if (filteredLocations.length > 0) {
      setActiveLocation(filteredLocations[0]);
    } else {
      setActiveLocation(null);
    }
  }, [filteredLocations]);

  // handleFilter kept for compatibility with the existing button in LocationsFilter
  const handleFilter = useCallback(() => {
    // filtering is reactive — nothing extra needed
  }, []);

  // fetchLocations kept for clear button compatibility
  const fetchLocations = useCallback((_params?: {
    division?: string;
    subDivision?: string;
    city?: string;
  }) => {
    // resetting state is handled externally via setSelected* calls
  }, []);

  return {
    locations: filteredLocations,
    activeLocation,
    setActiveLocation,
    mainLocations,
    isLoading,
    error,
    fetchLocations,
    handleFilter,
    divisions,
    departments,
    cities,
    selectedDivision,
    setSelectedDivision,
    selectedDepartment,
    setSelectedDepartment,
    selectedCity,
    setSelectedCity,
  };
}
