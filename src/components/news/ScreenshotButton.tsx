"use client";

import React, { useState } from "react";

interface ScreenshotButtonProps {
  newsSlug?: string;
  slug?: string;
  lang?: string;
  targetId?: string;
  filename?: string;
}

async function fetchAndDownload(url: string, fallbackFilename: string) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
  }

  const contentType = response.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    const data = await response.json();
    const downloadUrl =
      data.url ||
      data.download_url ||
      data.file ||
      data.data?.url ||
      (typeof data.data === "string" ? data.data : null);

    if (downloadUrl) {
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = fallbackFilename;
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }
  }

  let filename = fallbackFilename;
  const disposition = response.headers.get("content-disposition");
  if (disposition && disposition.includes("filename=")) {
    const match = disposition.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);
    if (match && match[1]) {
      filename = match[1].replace(/['"]/g, "");
    }
  }

  const blob = await response.blob();
  const blobUrl = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = blobUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => window.URL.revokeObjectURL(blobUrl), 2000);
}

export default function ScreenshotButton({
  newsSlug,
  slug,
  lang = "en",
}: ScreenshotButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const effectiveSlug = newsSlug || slug || "";

  const handleDownload = async () => {
    if (!effectiveSlug) {
      console.warn("No news slug provided for download.");
      return;
    }

    setIsDownloading(true);
    try {
      const imagesUrl = `/api/cms/news/${effectiveSlug}/downloads/images`;
      const pdfUrl = `/api/cms/news/${effectiveSlug}/downloads/pdf?lang=${lang}`;

      await Promise.allSettled([
        fetchAndDownload(pdfUrl, `${effectiveSlug}.pdf`),
        fetchAndDownload(imagesUrl, `${effectiveSlug}-images.zip`),
      ]);
    } catch (error) {
      console.error("Failed to download files", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isDownloading}
      className="w-[123px] h-[32px] rounded-[16px] border border-[#E5E5E5] flex items-center justify-center cursor-pointer text-[#666666] text-[0.9rem] font-medium gap-[8px] hover:bg-gray-50 transition-colors disabled:opacity-50"
    >
      <span className="capitalize">{isDownloading ? "Downloading..." : "Download"}</span>
      {!isDownloading && (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect x="7" y="2" width="2" height="9" rx="1" fill="#666666" />
          <path
            d="M7.99923 2.33203V11.6664M3.33203 6.99923L7.99923 11.6664L12.6664 6.99923"
            stroke="#666666"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      )}
    </button>
  );
}
