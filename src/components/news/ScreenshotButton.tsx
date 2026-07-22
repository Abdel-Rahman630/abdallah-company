"use client";

import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

/**
 * Rewrites all <img> elements inside an element so that any external src
 * is fetched via our local proxy, bypassing CORS.
 */
async function proxyImages(element: HTMLElement): Promise<() => void> {
  const images = Array.from(element.querySelectorAll<HTMLImageElement>("img"));
  const originals: Array<{ img: HTMLImageElement; src: string }> = [];

  await Promise.all(
    images.map(async (img) => {
      const src = img.src || img.getAttribute("src") || "";
      // Only proxy absolute external URLs
      if (!src || src.startsWith("data:") || src.startsWith(window.location.origin)) {
        return;
      }
      originals.push({ img, src });
      try {
        const proxyUrl = `/api/proxy-image?url=${encodeURIComponent(src)}`;
        // Fetch as blob and create a local object URL
        const res = await fetch(proxyUrl);
        if (res.ok) {
          const blob = await res.blob();
          img.src = URL.createObjectURL(blob);
        }
      } catch {
        // Leave src unchanged if proxy fails
      }
    })
  );

  // Return a cleanup fn to restore original sources and revoke blob URLs
  return () => {
    originals.forEach(({ img, src }) => {
      if (img.src.startsWith("blob:")) {
        URL.revokeObjectURL(img.src);
      }
      img.src = src;
    });
  };
}

export default function ScreenshotButton({ targetId = "pdf-content" }: { targetId?: string }) {
  const [isDownloading, setIsDownloading] = React.useState(false);

  const handleDownloadPDF = async () => {
    setIsDownloading(true);
    let cleanup: (() => void) | null = null;
    try {
      const element = document.getElementById(targetId) || document.body;

      // Proxy all external images before capture
      cleanup = await proxyImages(element);

      // Small delay to allow image re-renders after src swap
      await new Promise((r) => setTimeout(r, 300));

      const canvas = await html2canvas(element, {
        useCORS: true,
        allowTaint: false,
        scale: 2,
        logging: false,
      });

      const imgData = canvas.toDataURL("image/png", 1.0);

      const doc = new jsPDF("p", "mm", "a4");
      const pdfWidth = 210;
      const margin = 15;
      const imgWidth = pdfWidth - margin * 2;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 10;

      doc.addImage(imgData, "PNG", margin, position, imgWidth, imgHeight);
      heightLeft -= pageHeight - position;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, "PNG", margin, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      doc.save("download.pdf");
    } catch (error) {
      console.error("Failed to generate PDF", error);
    } finally {
      cleanup?.();
      setIsDownloading(false);
    }
  };

  return (
    <button
      onClick={handleDownloadPDF}
      disabled={isDownloading}
      className="w-[123px] h-[32px] rounded-[16px] border border-[#E5E5E5] flex items-center justify-center cursor-pointer text-[#666666] text-[0.9rem] font-medium gap-[8px]"
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
