"use client";

import React from "react";
import html2canvas from "html2canvas";

export default function ScreenshotButton() {
  const handleDownloadScreenshot = async () => {
    try {
      const canvas = await html2canvas(document.body, {
        useCORS: true,
        scale: 2,
      });
      const image = canvas.toDataURL("image/png", 1.0);
      const link = document.createElement("a");
      link.download = "news-screenshot.png";
      link.href = image;
      link.click();
    } catch (error) {
      console.error("Failed to take screenshot", error);
    }
  };

  return (
    <button
      onClick={handleDownloadScreenshot}
      className="w-[123px] h-[32px] rounded-[16px] border border-[#E5E5E5] flex items-center justify-center cursor-pointer text-[#666666] text-[0.9rem] font-medium gap-[8px] hover:bg-gray-50 transition-colors"
    >
      <span className="capitalize">Download</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="7" y="2" width="2" height="9" rx="1" fill="#666666"/>
        <path d="M7.99923 2.33203V11.6664M3.33203 6.99923L7.99923 11.6664L12.6664 6.99923" stroke="#666666" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </button>
  );
}
