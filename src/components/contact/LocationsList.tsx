import React from "react";

interface LocationsListProps {
  isLoading: boolean;
  locations: any[];
  activeLocation: any;
  setActiveLocation: (loc: any) => void;
}

export default function LocationsList({
  isLoading,
  locations,
  activeLocation,
  setActiveLocation,
}: LocationsListProps) {
  return (
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
                activeLocation?.id === loc.id ? "bg-[rgba(255,255,255,0.02)] px-[10px]" : "px-[10px]"
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
                    stroke={activeLocation?.id === loc.id ? "#1E1E1E" : "#D1A52A"}
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-[8px] mb-[4px] flex-wrap">
                  <h4 className="text-[#1E1E1E] text-[1.25rem] font-bold">{loc.title}</h4>
                  {loc.span && (
                    <span className="rounded-[4px] bg-[#E9E9E9] text-[#1E1E1E] text-[0.7rem] font-bold uppercase px-[8px] py-[4px]">
                      {loc.span}
                    </span>
                  )}
                </div>
                <p className="text-[#666666] text-[0.9rem] font-normal leading-relaxed">{loc.paragraph}</p>
              </div>
            </li>
          ))}
    </ul>
  );
}
