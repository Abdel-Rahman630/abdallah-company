"use client";

import { useState } from "react";
import { useFindUs } from "@/hooks/contact/useFindUs";
import { RevealText, RevealImage } from "@/components/ui/ScrollReveal";
import SubTitle from "@/components/ui/SubTitle";
import { useLanguage } from "@/providers/LanguageProvider";
import LocationsFilter from "./LocationsFilter";
import LocationsList from "./LocationsList";
import LocationsMap from "./LocationsMap";

export default function FindUs() {
  const {
    locations,
    activeLocation,
    setActiveLocation,
    mainLocations,
    isLoading,
    fetchLocations,
    divisions,
    subDivisions,
    cities,
  } = useFindUs();
  const { t } = useLanguage();

  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedSubDivision, setSelectedSubDivision] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const handleFilter = () => {
    fetchLocations({ division: selectedDivision, subDivision: selectedSubDivision, city: selectedCity });
  };

  console.log(locations)

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
            <div className="flex flex-col lg:flex-row justify-between items-stretch gap-[32px] mb-[40px] pb-[40px] border-b-[4px] border-[rgba(201,168,76,0.8)]">
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

        {/* Filter Form */}
        <RevealText delay={0.35}>
          <LocationsFilter
            divisions={divisions}
            subDivisions={subDivisions}
            cities={cities}
            selectedDivision={selectedDivision}
            setSelectedDivision={setSelectedDivision}
            selectedSubDivision={selectedSubDivision}
            setSelectedSubDivision={setSelectedSubDivision}
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}
            handleFilter={handleFilter}
            isLoading={isLoading}
            fetchLocations={fetchLocations}
            t={t}
          />
        </RevealText>

        {/* Locations List and Map */}
        {locations.length === 0 && !isLoading ? (
          <div className="flex flex-col items-center justify-center p-[60px] border border-[rgba(255,255,255,0.1)] rounded-[16px] bg-[#E9E9E9]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#D1A52A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mb-4"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <h3 className="text-[#1E1E1E] text-[1.5rem] font-bold mb-[8px]">{t("contact.noLocations")}</h3>
            <p className="text-[#666] text-[1rem]">{t("contact.noLocationsDesc")}</p>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-[40px] md:gap-[80px]">
            {/* Left Column - List */}
            <div className="w-full lg:w-[45%] shrink-0">
              <RevealText delay={0.4}>
                <LocationsList
                  isLoading={isLoading}
                  locations={locations.filter((loc) => !loc.isMain)}
                  activeLocation={activeLocation}
                  setActiveLocation={setActiveLocation}
                />
              </RevealText>
            </div>

            {/* Right Column - Map */}
            <div className="w-full flex-1 min-h-[400px] lg:min-h-[500px]">
              <RevealImage delay={0.5}>
                <LocationsMap isLoading={isLoading} activeLocation={activeLocation} t={t} />
              </RevealImage>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
