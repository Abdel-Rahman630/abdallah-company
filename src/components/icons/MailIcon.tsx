import React from "react";
import { IconProps } from "@/types/models";

export function MailIcon({ className = "", color = "#D0A42A" }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
      <path
        d="M14.6664 4.66777L8.67195 8.48539C8.46853 8.60352 8.23748 8.66574 8.00223 8.66574C7.76699 8.66574 7.53593 8.60352 7.33251 8.48539L1.33203 4.66777M2.66547 2.66797H13.333C14.0694 2.66797 14.6664 3.26486 14.6664 4.00117V12.0004C14.6664 12.7367 14.0694 13.3336 13.333 13.3336H2.66547C1.92903 13.3336 1.33203 12.7367 1.33203 12.0004V4.00117C1.33203 3.26486 1.92903 2.66797 2.66547 2.66797Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
