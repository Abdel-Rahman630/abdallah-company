"use client";

import { useState } from "react";
import { useFindUs } from "@/hooks/contact/useFindUs";
import { RevealText, RevealImage } from "@/components/ui/ScrollReveal";
import SubTitle from "@/components/ui/SubTitle";
import { useLanguage } from "@/providers/LanguageProvider";

export default function FindUs() {
  const {
    locations,
    activeLocation,
    setActiveLocation,
    headOfficeLocation,
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

  return (
    <section id="find-us" className="bg-[#F9F9F9] py-[100px]">
      <div className="container mx-auto">
        <RevealText delay={0.1}>
          <SubTitle className="text-center">{t("contact.locations")}</SubTitle>
        </RevealText>
        <RevealText delay={0.2}>
          <h2 className="text-[#1E1E1E] text-center text-[3rem] font-bold mb-[40px]">
            {t("contact.findUs")}
          </h2>
        </RevealText>

        {/* Head Office Top Bar */}
        <RevealText delay={0.3}>
          <div className="flex flex-col lg:flex-row justify-between items-stretch gap-[32px] mb-[40px] pb-[40px] border-b-[4px] border-[rgba(201,168,76,0.8)]">
            <div className="flex-1 border-b border-[#D1A52A] pb-[32px] lg:border-b-0 lg:pb-0 lg:border-r lg:border-[#D1A52A] lg:pr-[32px]">
              <div className="flex items-center gap-[12px] mb-[1rem] flex-wrap">
                <h3 className="text-[#1E1E1E] text-[1.5rem] font-bold">
                  {t("contact.headOffice")}
                </h3>
                <span className="rounded-[4px] bg-[#E9E9E9] text-[#1E1E1E] text-[0.7rem] font-bold uppercase px-[8px] py-[4px]">
                  Jeddah
                </span>
              </div>
              <p className="text-[#666666] text-[1rem] font-normal leading-relaxed mb-[1rem]">
                44, Jeddah 21411, Madinah Road Al Bawadi Dist, Jeddah
              </p>
              <div className="flex gap-[48px] shrink-0">
                <div>
                  <h4 className="text-[#D1A52A] text-[0.8rem] font-semibold uppercase mb-[8px]">
                    {t("contact.emailLabel")}
                  </h4>
                  <a
                    href="mailto:info@ahcl.com.sa"
                    className="text-[#1E1E1E] text-[1rem] font-normal"
                  >
                    info@ahcl.com.sa
                  </a>
                </div>
                <div>
                  <h4 className="text-[#D1A52A] text-[0.8rem] font-semibold uppercase mb-[8px]">
                    {t("contact.phoneLabel")}
                  </h4>
                  <a
                    href="tel:0122638200"
                    className="text-[#1E1E1E] text-[1rem] font-normal"
                  >
                    012 263 8200
                  </a>
                </div>
              </div>
            </div>
            <div className="flex-1 border-b border-[#D1A52A] pb-[32px] lg:border-b-0 lg:pb-0 lg:border-r lg:border-[#D1A52A] lg:pr-[32px]">
              <div className="flex items-center gap-[12px] mb-[1rem] flex-wrap">
                <h3 className="text-[#1E1E1E] text-[1.5rem] font-bold">
                  {t("contact.centralOffice")}
                </h3>
                <span className="rounded-[4px] bg-[#E9E9E9] text-[#1E1E1E] text-[0.7rem] font-bold uppercase px-[8px] py-[4px]">
                  Riyadh
                </span>
              </div>
              <p className="text-[#666666] text-[1rem] font-normal leading-relaxed mb-[1rem]">
                RMDA4283, 4283 Al Kharj Rd, 7836, Ad Dar Al Baida, Riyadh 14516
              </p>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-[12px] mb-[1rem] flex-wrap">
                <h3 className="text-[#1E1E1E] text-[1.5rem] font-bold">
                  {t("contact.easternOffice")}
                </h3>
                <span className="rounded-[4px] bg-[#E9E9E9] text-[#1E1E1E] text-[0.7rem] font-bold uppercase px-[8px] py-[4px]">
                  Dammam
                </span>
              </div>
              <p className="text-[#666666] text-[1rem] font-normal leading-relaxed mb-[1rem]">
                C5RR+P7W, King Abdulaziz Rd, King Abdul Aziz Seaport, Dammam
                32212
              </p>
            </div>
          </div>
        </RevealText>

        {/* Filter Form */}
        <RevealText delay={0.35}>
          <div className="flex flex-wrap md:flex-nowrap gap-[24px] mb-[24px] justify-center items-center">
            <div className="relative w-[calc(33.33%-16px)] md:w-1/4">
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="5"
                  viewBox="0 0 9 5"
                  fill="none"
                >
                  <path
                    d="M4.33203 4.5L8.66216 0H0.00190401L4.33203 4.5Z"
                    fill="#1E1E1E"
                  />
                </svg>
              </div>
            </div>

            <div className="relative w-[calc(33.33%-16px)] md:w-1/4">
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="5"
                  viewBox="0 0 9 5"
                  fill="none"
                >
                  <path
                    d="M4.33203 4.5L8.66216 0H0.00190401L4.33203 4.5Z"
                    fill="#1E1E1E"
                  />
                </svg>
              </div>
            </div>

            <div className="relative w-[calc(33.33%-16px)] md:w-1/4">
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="5"
                  viewBox="0 0 9 5"
                  fill="none"
                >
                  <path
                    d="M4.33203 4.5L8.66216 0H0.00190401L4.33203 4.5Z"
                    fill="#1E1E1E"
                  />
                </svg>
              </div>
            </div>

            <button
              type="button"
              onClick={handleFilter}
              disabled={isLoading}
              aria-label="Filter locations"
              className="w-full md:w-auto bg-[#D1A52A] px-[32px] py-[16px] text-[#1E1E1E] text-[0.875rem] rounded-[4px] flex items-center justify-center gap-[10px] disabled:opacity-50"
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
              className="w-full md:w-auto bg-transparent border border-[#231F20] px-[32px] py-[16px] text-[#231F20] text-[0.875rem] rounded-[4px] flex items-center justify-center gap-[10px] disabled:opacity-50"
            >
              {t("contact.clear")}
            </button>
          </div>
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
            <h3 className="text-[#1E1E1E] text-[1.5rem] font-bold mb-[8px]">
              {t("contact.noLocations")}
            </h3>
            <p className="text-[#666] text-[1rem]">
              {t("contact.noLocationsDesc")}
            </p>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-[40px] md:gap-[80px]">
            {/* Left Column - List */}
            <div className="w-full lg:w-[45%] shrink-0">
              <RevealText delay={0.4}>
                <ul className="flex flex-col h-[500px] overflow-y-auto pr-[16px] [&::-webkit-scrollbar]:w-[4px] [&::-webkit-scrollbar-track]:bg-[#E9E9E9] [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#D1A52A] [&::-webkit-scrollbar-thumb]:rounded-full">
                  {isLoading
                    ? Array.from({ length: 5 }).map((_, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-[1rem] py-[20px] border-b border-[rgba(255,255,255,0.10)]"
                        >
                          <div className="w-[40px] h-[40px] rounded-[20px] bg-[rgba(255,255,255,0.05)] animate-pulse shrink-0" />
                          <div className="flex-1">
                            <div className="h-[20px] bg-[rgba(255,255,255,0.05)] rounded w-[120px] mb-[12px] animate-pulse" />
                            <div className="h-[14px] bg-[rgba(255,255,255,0.05)] rounded w-full mb-[6px] animate-pulse" />
                            <div className="h-[14px] bg-[rgba(255,255,255,0.05)] rounded w-[80%] animate-pulse" />
                          </div>
                        </li>
                      ))
                    : locations.map((loc) => (
                        <li
                          key={loc.id}
                          onClick={() => setActiveLocation(loc)}
                          className={`flex items-start gap-[1rem] py-[20px] border-b border-[rgba(255,255,255,0.10)] cursor-pointer group ${
                            activeLocation?.id === loc.id
                              ? "bg-[rgba(255,255,255,0.02)] px-[10px]"
                              : "px-[10px]"
                          }`}
                        >
                          <div className="w-[40px] h-[40px] rounded-[20px] bg-[#E9E9E9] flex items-center justify-center shrink-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                d="M10.5027 18.1667C12.0526 16.8283 16.6679 12.4945 16.6679 8.3333C16.6679 6.56503 15.9656 4.86918 14.7155 3.61882C13.4654 2.36846 11.7699 1.66602 10.0019 1.66602C8.234 1.66602 6.53848 2.36846 5.28836 3.61882C4.03825 4.86918 3.33594 6.56503 3.33594 8.3333C3.33594 12.4945 7.95131 16.8283 9.50115 18.1667C9.64554 18.2753 9.82129 18.334 10.0019 18.334C10.1826 18.334 10.3583 18.2753 10.5027 18.1667Z"
                                stroke={
                                  activeLocation?.id === loc.id
                                    ? "#1E1E1E"
                                    : "#D1A52A"
                                }
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                            </svg>
                          </div>
                          <div>
                            <div className="flex items-center gap-[8px] mb-[4px] flex-wrap">
                              <h4 className="text-[#1E1E1E] text-[1.25rem] font-bold">
                                {loc.title}
                              </h4>
                              <span className="rounded-[4px] bg-[#E9E9E9] text-[#1E1E1E] text-[0.7rem] font-bold uppercase px-[8px] py-[4px]">
                                {loc.span}
                              </span>
                              {/* {loc.division && (
                                <span className="rounded-[4px] border border-[#D1A52A] text-[#D1A52A] text-[0.6rem] font-bold uppercase px-[6px] py-[2px]">
                                  {loc.division}
                                </span>
                              )} */}
                            </div>
                            <p className="text-[#666666] text-[0.9rem] font-normal leading-relaxed">
                              {loc.paragraph}
                            </p>
                          </div>
                        </li>
                      ))}
                </ul>
              </RevealText>
            </div>

            {/* Right Column - Map */}
            <div className="w-full flex-1 min-h-[400px] lg:min-h-[500px]">
              <RevealImage delay={0.5}>
                <div className="w-full h-full min-h-[400px] lg:min-h-[500px] rounded-[16px] overflow-hidden bg-[rgba(255,255,255,0.05)] relative group">
                  {isLoading || !activeLocation ? (
                    <div className="w-full h-full min-h-[400px] lg:min-h-[500px] flex items-center justify-center">
                      <span className="text-[rgba(255,255,255,0.4)]">
                        {t("contact.loadingMap")}
                      </span>
                    </div>
                  ) : (
                    <>
                      <iframe
                        key={activeLocation.id}
                        width="100%"
                        height="500px"
                        frameBorder="0"
                        className="w-full h-full min-h-[400px] lg:min-h-[500px]"
                        src={`https://maps.google.com/maps?q=${encodeURIComponent(activeLocation.mapQuery)}&t=&z=14&ie=UTF8&output=embed`}
                        allowFullScreen
                      ></iframe>

                      {/* Floating Open in Google Maps Button */}
                      {activeLocation.googleMapsUrl && (
                        <a
                          href={activeLocation.googleMapsUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="absolute bottom-[24px] right-[24px] bg-[#1E1E1E] text-white px-[16px] py-[10px] rounded-[8px] shadow-lg flex items-center gap-[8px] text-[0.9rem] font-bold z-10 border border-[rgba(255,255,255,0.1)]"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M10.5027 18.1667C12.0526 16.8283 16.6679 12.4945 16.6679 8.3333C16.6679 6.56503 15.9656 4.86918 14.7155 3.61882C13.4654 2.36846 11.7699 1.66602 10.0019 1.66602C8.234 1.66602 6.53848 2.36846 5.28836 3.61882C4.03825 4.86918 3.33594 6.56503 3.33594 8.3333C3.33594 12.4945 7.95131 16.8283 9.50115 18.1667C9.64554 18.2753 9.82129 18.334 10.0019 18.334C10.1826 18.334 10.3583 18.2753 10.5027 18.1667Z"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                            <circle
                              cx="10"
                              cy="8.33398"
                              r="2.5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                            />
                          </svg>
                          {t("contact.openInMap")}
                        </a>
                      )}
                    </>
                  )}
                </div>
              </RevealImage>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
