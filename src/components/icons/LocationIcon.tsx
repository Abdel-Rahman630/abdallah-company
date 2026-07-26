import React from "react";
import { IconProps } from "@/types/models";

export function LocationIcon({ className = "", color = "#D0A42A" }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 13 16" fill="none" className={className}>
      <path
        d="M6.73343 14.2006C7.9733 13.1298 11.6656 9.6628 11.6656 6.33383C11.6656 4.91921 11.1038 3.56253 10.1037 2.56224C9.10357 1.56196 7.74715 1 6.3328 1C4.91845 1 3.56203 1.56196 2.56194 2.56224C1.56185 3.56253 1 4.91921 1 6.33383C1 9.6628 4.6923 13.1298 5.93217 14.2006C6.04768 14.2874 6.18828 14.3344 6.3328 14.3344C6.47732 14.3344 6.61792 14.2874 6.73343 14.2006Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
