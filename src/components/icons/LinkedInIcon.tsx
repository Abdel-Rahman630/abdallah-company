import React from "react";
import { IconProps } from "@/types/models";

export function LinkedInIcon({ className = "", color = "white" }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" className={className}>
      <path
        d="M15.1831 7.31826C14.3391 6.47432 13.1944 6.00019 12.0008 6.00019C10.8073 6.00019 9.66259 6.47432 8.8186 7.31826C7.97462 8.16221 7.50048 9.30685 7.50048 10.5004V15.7506H10.5007V10.5004C10.5007 10.1025 10.6588 9.72099 10.9401 9.43967C11.2214 9.15836 11.603 9.00032 12.0008 9.00032C12.3987 9.00032 12.7803 9.15836 13.0616 9.43967C13.3429 9.72099 13.501 10.1025 13.501 10.5004V15.7506H16.5012V10.5004C16.5012 9.30685 16.0271 8.16221 15.1831 7.31826Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4.50024 6.75022H1.5V15.7506H4.50024V6.75022Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M3.00012 4.50013C3.82861 4.50013 4.50024 3.82853 4.50024 3.00006C4.50024 2.1716 3.82861 1.5 3.00012 1.5C2.17163 1.5 1.5 2.1716 1.5 3.00006C1.5 3.82853 2.17163 4.50013 3.00012 4.50013Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
