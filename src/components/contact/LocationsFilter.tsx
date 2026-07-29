import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { LocationsFilterProps, Location } from "@/types/models";

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
  locations = [],
}: LocationsFilterProps & { locations?: Location[] }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [prevLocationsLength, setPrevLocationsLength] = useState(
    locations.length,
  );
  const itemsPerPage = 4;
  const pageCount = Math.ceil(locations.length / itemsPerPage);

  // Reset page when filter results change
  if (locations.length !== prevLocationsLength) {
    setCurrentPage(0);
    setPrevLocationsLength(locations.length);
  }

  const currentItems = locations.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage,
  );

  return (
    <div className="">
      {/* Filter Form Wrapper */}
      <div className="lg:py-[50px] lg:px-[100px] md:py-[35px] md:px-[70px] py-[30px] px-[25px] bg-[white] rounded-[10px] mb-[40px]">
        <h2 className="text-[#1E1E1E] text-center text-[2rem] font-bold mb-[40px]">
          Find Our Network
        </h2>
        <div className="flex flex-wrap md:flex-nowrap gap-[24px] mb-[24px]">
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
      </div>

      {/* Results Section */}
      <div className="flex flex-col w-full">
        <p className="text-[#231F20] text-[1rem] font-normal pb-[8px] border-b border-[#E5E5E5] mb-[40px]">
          ({locations.length}) Locations Found
        </p>

        {locations.length === 0 ? (
          <div className="flex p-[35px] lg:p-[50px] flex-col rounded-[5px] bg-[#FFF] items-center justify-center border border-[#E5E5E5]">
            <span className="text-[#1E1E1E] text-[1.5rem] font-semibold">
              There is no locations
            </span>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-x-[40px] gap-y-[40px]">
            {currentItems.map((loc) => {
              const mapUrl =
                loc.googleMapsUrl ||
                (loc.mapQuery
                  ? `https://maps.google.com/?q=${encodeURIComponent(loc.mapQuery)}`
                  : "#");

              return (
                <div key={loc.id} className="flex flex-col">
                  <div className="flex p-[35px] lg:p-[50px] flex-col rounded-[5px] bg-[#FFF]">
                    <div className="text-[#1E1E1E] text-[2rem] font-semibold mb-[1rem]">
                      {loc.title}
                    </div>
                    <div className="flex items-center gap-[12px] mb-[32px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_1187_8503)">
                          <path
                            d="M12.7324 1.96406C11.4721 0.698337 9.79307 0.00125985 8.00457 0.00125985H7.99685C4.39535 -0.0724538 1.23572 3.09927 1.30987 6.69946C1.40415 9.24163 3.84976 12.4701 5.75426 14.9505C6.31356 15.6186 7.12851 16 8.00401 16C8.9102 16 9.75158 15.5917 10.3124 14.8797C11.7252 13.124 14.776 8.90121 14.6839 6.6994C14.6839 4.90961 13.9908 3.22791 12.7324 1.96406ZM9.33048 14.1063C8.68462 14.9582 7.32599 14.9598 6.67988 14.1078C4.09746 10.8195 2.55973 8.08099 2.55973 6.69943C2.55973 3.69526 4.99881 1.25121 7.99685 1.25121H8.00457C10.9984 1.25121 13.434 3.69529 13.434 6.69943C13.434 8.09602 11.9383 10.7957 9.33048 14.1063ZM8.03198 9.34428C6.56742 9.34428 5.37591 8.15276 5.37591 6.68821C5.5218 3.16457 10.5427 3.16561 10.688 6.68824C10.688 8.1528 9.49653 9.34428 8.03198 9.34428ZM8.03198 5.28205C7.25662 5.28205 6.62582 5.91286 6.62582 6.68821C6.70307 8.55367 9.36117 8.55311 9.43813 6.68821C9.43813 5.91286 8.80736 5.28205 8.03198 5.28205Z"
                            fill="#666666"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1187_8503">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="text-[#1E1E1E] text-[1.2rem] font-semibold">
                        Address:
                      </span>
                      <p className="text-[#231F20] text-[1.2rem] font-normal mb-[0]">
                      {loc.paragraph}
                    </p>
                    </div>

                    

                    <a
                      href={mapUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-[10px] justify-end"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_1187_8510)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.8984 2.66141C16.0172 2.30518 16.0344 1.9229 15.9482 1.55742C15.8619 1.19194 15.6756 0.857701 15.4101 0.592169C15.1445 0.326637 14.8103 0.140303 14.4448 0.0540525C14.0793 -0.0321984 13.6971 -0.014958 13.3408 0.103842L1.26602 4.12855C0.870698 4.26015 0.525685 4.51068 0.278182 4.84585C0.0306789 5.18103 -0.107226 5.58448 -0.116668 6.00103C-0.12611 6.41758 -0.00662713 6.82687 0.225435 7.17292C0.457497 7.51896 0.790804 7.78486 1.17976 7.93424L6.15471 9.84752L8.068 14.8225C8.21738 15.2114 8.48328 15.5447 8.82932 15.7768C9.17537 16.0089 9.58466 16.1283 10.0012 16.1189C10.4178 16.1095 10.8212 15.9716 11.1564 15.7241C11.4916 15.4766 11.7421 15.1315 11.8737 14.7362L15.8984 2.66141ZM7.46281 9.49304L9.32623 14.3386C9.37638 14.4679 9.46514 14.5785 9.58044 14.6555C9.69573 14.7326 9.83195 14.7722 9.97056 14.769C10.1092 14.7658 10.2434 14.72 10.3551 14.6378C10.4668 14.5556 10.5504 14.441 10.5946 14.3096L14.6193 2.23481C14.659 2.11608 14.6648 1.98864 14.6361 1.8668C14.6073 1.74495 14.5452 1.63353 14.4566 1.54504C14.3681 1.45656 14.2566 1.39452 14.1348 1.36588C14.0129 1.33725 13.8854 1.34317 13.7668 1.38296L1.69262 5.40767C1.56091 5.45156 1.44597 5.53505 1.36351 5.64674C1.28105 5.75843 1.23509 5.89285 1.23192 6.03165C1.22875 6.17044 1.26852 6.30682 1.34579 6.42216C1.42307 6.53749 1.53407 6.62615 1.66364 6.67601L6.5092 8.53943L11.528 3.52134C11.6551 3.39858 11.8253 3.33065 12.002 3.33219C12.1787 3.33372 12.3477 3.4046 12.4727 3.52955C12.5976 3.6545 12.6685 3.82353 12.6701 4.00024C12.6716 4.17694 12.6037 4.34717 12.4809 4.47428L7.46281 9.49304Z"
                            fill="#666666"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1187_8510">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="text-[#231F20] text-[1rem] font-bold">
                        Get Directions
                      </span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {pageCount > 1 && (
          <nav
            className="mt-[40px] flex justify-center"
            aria-label="Locations pagination"
          >
            <ReactPaginate
              pageCount={pageCount}
              onPageChange={({ selected }) => setCurrentPage(selected)}
              forcePage={currentPage}
              previousLabel={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="rotate-180"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.58586 8.00008L4.29297 2.70718L5.70718 1.29297L12.4143 8.00008L5.70718 14.7072L4.29297 13.293L9.58586 8.00008Z"
                    fill="#D1A52A"
                  />
                </svg>
              }
              nextLabel={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.58586 8.00008L4.29297 2.70718L5.70718 1.29297L12.4143 8.00008L5.70718 14.7072L4.29297 13.293L9.58586 8.00008Z"
                    fill="#D1A52A"
                  />
                </svg>
              }
              previousClassName="flex items-center justify-center w-[32px] h-[32px] cursor-pointer"
              nextClassName="flex items-center justify-center w-[32px] h-[32px] cursor-pointer"
              previousLinkClassName="flex items-center justify-center"
              nextLinkClassName="flex items-center justify-center"
              containerClassName="flex items-center gap-[1rem]"
              pageClassName=""
              pageLinkClassName="flex items-center justify-center w-[32px] h-[32px] text-[1rem] font-semibold text-black rounded-[5px] transition-all duration-300 hover:bg-black hover:text-white"
              activeClassName="[&_a]:bg-black [&_a]:text-white"
              breakLabel="..."
              breakClassName=""
              breakLinkClassName="flex items-center justify-center w-[32px] h-[32px] text-[1rem] font-semibold text-black"
              disabledClassName="opacity-30 pointer-events-none"
            />
          </nav>
        )}
      </div>
    </div>
  );
}
