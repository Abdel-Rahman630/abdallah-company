"use client";

import { useFindUs } from "@/hooks/contact/useFindUs";
import { RevealText } from "@/components/ui/ScrollReveal";
import SubTitle from "@/components/ui/SubTitle";
import { useLanguage } from "@/providers/LanguageProvider";
import LocationsFilter from "./LocationsFilter";

export default function FindUs() {
  const {
    locations,
    activeLocation,
    setActiveLocation,
    mainLocations,
    isLoading,
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
  } = useFindUs();
  const { t } = useLanguage();

  return (
    <section id="find-us" className="bg-[#F9F9F9] py-[100px]">
      <div className="container mx-auto">
        <RevealText delay={0.1}>
          <SubTitle className="text-center">{t("contact.locations")}</SubTitle>
        </RevealText>
        <RevealText delay={0.2}>
          <h2 className="text-[#1E1E1E] text-center text-[3rem] font-bold mb-[40px]">{t("contact.findUs")}</h2>
        </RevealText>

        {/* Head Office Top Bar */}
        {(mainLocations.length > 0 || isLoading) && (
          <RevealText delay={0.3}>
            <div className="flex flex-col lg:flex-row justify-between items-stretch gap-[32px] mb-[40px] pb-[40px] border-b-[4px] border-[#E5E5E5]">
              {isLoading && mainLocations.length === 0
                ? Array.from({ length: 3 }).map((_, idx) => (
                    <div
                      key={idx}
                      className={`flex-1 ${
                        idx !== 2
                          ? "border-b border-[#D1A52A] pb-[32px] lg:border-b-0 lg:pb-0 lg:border-r lg:border-[#D1A52A] lg:pr-[32px]"
                          : ""
                      }`}
                    >
                      <div className="h-[24px] bg-[#E9E9E9] rounded w-[140px] mb-[1rem] animate-pulse" />
                      <div className="h-[16px] bg-[#E9E9E9] rounded w-[90%] animate-pulse" />
                    </div>
                  ))
                : mainLocations.map((loc, idx) => {
                    const isLast = idx === mainLocations.length - 1;
                    const mapUrl =
                      loc.googleMapsUrl ||
                      (loc.mapQuery ? `https://maps.google.com/?q=${encodeURIComponent(loc.mapQuery)}` : undefined);

                    return (
                      <div
                        key={loc.id}
                        className={`flex-1 ${
                          !isLast
                            ? "border-b border-[#D1A52A] pb-[32px] lg:border-b-0 lg:pb-0 lg:border-r lg:border-[#D1A52A] lg:pr-[32px]"
                            : ""
                        }`}
                      >
                        <div className="flex items-center gap-[12px] mb-[1rem] flex-wrap">
                          <h3 className="text-[#1E1E1E] text-[1.3rem] font-bold">{loc.title}</h3>
                        </div>
                        {mapUrl ? (
                          <a
                            href={mapUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-start gap-[8px] text-[#666666] text-[1rem] font-normal leading-relaxed mb-[1rem] hover:text-[#D0A42A]"
                          >
                            <svg
                              className="shrink-0 mt-[4px]"
                              xmlns="http://www.w3.org/2000/svg"
                              width="13"
                              height="16"
                              viewBox="0 0 13 16"
                              fill="none"
                            >
                              <path
                                d="M6.73343 14.2006C7.9733 13.1298 11.6656 9.6628 11.6656 6.33383C11.6656 4.91921 11.1038 3.56253 10.1037 2.56224C9.10357 1.56196 7.74715 1 6.3328 1C4.91845 1 3.56203 1.56196 2.56194 2.56224C1.56185 3.56253 1 4.91921 1 6.33383C1 9.6628 4.6923 13.1298 5.93217 14.2006C6.04768 14.2874 6.18828 14.3344 6.3328 14.3344C6.47732 14.3344 6.61792 14.2874 6.73343 14.2006Z"
                                stroke="#D0A42A"
                                strokeWidth="2"
                                strokeLinecap="round"
                              ></path>
                            </svg>
                            <span>{loc.paragraph || loc.mapQuery}</span>
                          </a>
                        ) : (
                          <div className="flex items-start gap-[8px] text-[#666666] text-[1rem] font-normal leading-relaxed mb-[1rem]">
                            <svg
                              className="shrink-0 mt-[4px]"
                              xmlns="http://www.w3.org/2000/svg"
                              width="13"
                              height="16"
                              viewBox="0 0 13 16"
                              fill="none"
                            >
                              <path
                                d="M6.73343 14.2006C7.9733 13.1298 11.6656 9.6628 11.6656 6.33383C11.6656 4.91921 11.1038 3.56253 10.1037 2.56224C9.10357 1.56196 7.74715 1 6.3328 1C4.91845 1 3.56203 1.56196 2.56194 2.56224C1.56185 3.56253 1 4.91921 1 6.33383C1 9.6628 4.6923 13.1298 5.93217 14.2006C6.47732 14.2874 6.61792 14.2874 6.73343 14.2006Z"
                                stroke="#D0A42A"
                                strokeWidth="2"
                                strokeLinecap="round"
                              ></path>
                            </svg>
                            <span>{loc.paragraph || loc.mapQuery}</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
            </div>
          </RevealText>
        )}

        {/* Filter Form and Results */}
        <RevealText delay={0.35}>
          <LocationsFilter
            divisions={divisions}
            departments={departments}
            cities={cities}
            selectedDivision={selectedDivision}
            setSelectedDivision={(val) => {
              setSelectedDivision(val);
              setSelectedDepartment("");
              setSelectedCity("");
            }}
            selectedDepartment={selectedDepartment}
            setSelectedDepartment={(val) => {
              setSelectedDepartment(val);
              setSelectedCity("");
            }}
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}
            handleFilter={handleFilter}
            isLoading={isLoading}
            fetchLocations={fetchLocations}
            t={t}
            locations={locations.filter((loc) => !loc.isMain)}
          />
        </RevealText>
      </div>
    </section>
  );
}
