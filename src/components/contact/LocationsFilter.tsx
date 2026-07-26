import React from "react";

interface LocationsFilterProps {
  divisions: any[];
  subDivisions: any[];
  cities: any[];
  selectedDivision: string;
  setSelectedDivision: (val: string) => void;
  selectedSubDivision: string;
  setSelectedSubDivision: (val: string) => void;
  selectedCity: string;
  setSelectedCity: (val: string) => void;
  handleFilter: () => void;
  isLoading: boolean;
  fetchLocations: (params: any) => void;
  t: (key: string) => string;
}

export default function LocationsFilter({
  divisions,
  subDivisions,
  cities,
  selectedDivision,
  setSelectedDivision,
  selectedSubDivision,
  setSelectedSubDivision,
  selectedCity,
  setSelectedCity,
  handleFilter,
  isLoading,
  fetchLocations,
  t,
}: LocationsFilterProps) {
  return (
    <div className="flex flex-wrap md:flex-nowrap gap-[24px] mb-[24px] justify-center items-center">
      <div className="relative w-full md:w-1/4">
        <label htmlFor="division-select" className="sr-only">
          Division
        </label>
        <select
          id="division-select"
          value={selectedDivision}
          onChange={(e) => setSelectedDivision(e.target.value)}
          className="w-full appearance-none rounded-[4px] border border-[#E5E7EB] bg-[white] p-[16px] pr-[40px] text-[#1E1E1E] outline-none focus:border-[#D1A52A]"
        >
          <option value="">{t("contact.selectDivision")}</option>
          {divisions.map((d) => (
            <option key={d.value} value={d.value}>
              {d.label}
            </option>
          ))}
        </select>
        <div className="absolute right-[16px] top-1/2 -translate-y-1/2 pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="9" height="5" viewBox="0 0 9 5" fill="none">
            <path d="M4.33203 4.5L8.66216 0H0.00190401L4.33203 4.5Z" fill="#1E1E1E" />
          </svg>
        </div>
      </div>

      <div className="relative w-full md:w-1/4">
        <label htmlFor="sub-division-select" className="sr-only">
          Sub Division
        </label>
        <select
          id="sub-division-select"
          value={selectedSubDivision}
          onChange={(e) => setSelectedSubDivision(e.target.value)}
          className="w-full appearance-none rounded-[4px] border border-[#E5E7EB] bg-[white] p-[16px] pr-[40px] text-[#1E1E1E] outline-none focus:border-[#D1A52A]"
        >
          <option value="">{t("contact.selectSubDivision")}</option>
          {subDivisions.map((d) => (
            <option key={d.value} value={d.value}>
              {d.label}
            </option>
          ))}
        </select>
        <div className="absolute right-[16px] top-1/2 -translate-y-1/2 pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="9" height="5" viewBox="0 0 9 5" fill="none">
            <path d="M4.33203 4.5L8.66216 0H0.00190401L4.33203 4.5Z" fill="#1E1E1E" />
          </svg>
        </div>
      </div>

      <div className="relative w-full md:w-1/4">
        <label htmlFor="city-select" className="sr-only">
          City
        </label>
        <select
          id="city-select"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className="w-full appearance-none rounded-[4px] border border-[#E5E7EB] bg-[white] p-[16px] pr-[40px] text-[#1E1E1E] outline-none focus:border-[#D1A52A]"
        >
          <option value="">{t("contact.selectCity")}</option>
          {cities.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <div className="absolute right-[16px] top-1/2 -translate-y-1/2 pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="9" height="5" viewBox="0 0 9 5" fill="none">
            <path d="M4.33203 4.5L8.66216 0H0.00190401L4.33203 4.5Z" fill="#1E1E1E" />
          </svg>
        </div>
      </div>

      <button
        type="button"
        onClick={handleFilter}
        disabled={isLoading}
        aria-label="Filter locations"
        className="w-full md:w-auto bg-[#D1A52A] px-[32px] py-[16px] text-[#1E1E1E] text-[0.875rem] rounded-[4px] flex items-center justify-center gap-[10px]"
      >
        {t("contact.filter")}
      </button>
      <button
        type="button"
        onClick={() => {
          setSelectedDivision("");
          setSelectedSubDivision("");
          setSelectedCity("");
          fetchLocations({ division: "", subDivision: "", city: "" });
        }}
        disabled={isLoading}
        aria-label="Clear filters"
        className="w-full md:w-auto bg-transparent border border-[#231F20] px-[32px] py-[16px] text-[#231F20] text-[0.875rem] rounded-[4px] flex items-center justify-center gap-[10px]"
      >
        {t("contact.clear")}
      </button>
    </div>
  );
}
