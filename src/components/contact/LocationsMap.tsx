import React from "react";

interface LocationsMapProps {
  isLoading: boolean;
  activeLocation: any;
  t: (key: string) => string;
}

export default function LocationsMap({ isLoading, activeLocation, t }: LocationsMapProps) {
  return (
    <div className="w-full h-full min-h-[400px] lg:min-h-[500px] rounded-[16px] overflow-hidden bg-[rgba(255,255,255,0.05)] relative group">
      {isLoading || !activeLocation ? (
        <div className="w-full h-full min-h-[400px] lg:min-h-[500px] flex items-center justify-center">
          <span className="text-[rgba(255,255,255,0.4)]">{t("contact.loadingMap")}</span>
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
                <circle cx="10" cy="8.33398" r="2.5" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              {t("contact.openInMap")}
            </a>
          )}
        </>
      )}
    </div>
  );
}
