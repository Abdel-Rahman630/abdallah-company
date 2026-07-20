"use client";

import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function ScreenshotButton({ targetId = "pdf-content" }: { targetId?: string }) {
  const [isDownloading, setIsDownloading] = React.useState(false);

  const handleDownloadPDF = async () => {
    setIsDownloading(true);
    try {
      const element = document.getElementById(targetId) || document.body;
      const canvas = await html2canvas(element, {
        useCORS: true,
        scale: 2,
      });
      const imgData = canvas.toDataURL("image/png", 1.0);

      // Create PDF
      const doc = new jsPDF("p", "mm", "a4");
      const imgWidth = 210; // A4 size width in mm
      const pageHeight = 297; // A4 size height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // Handle multi-page PDF generation if canvas height exceeds page height
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      doc.save("download.pdf");
    } catch (error) {
      console.error("Failed to generate PDF", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <button
      onClick={handleDownloadPDF}
      disabled={isDownloading}
      className="w-[123px] h-[32px] rounded-[16px] border border-[#E5E5E5] flex items-center justify-center cursor-pointer text-[#666666] text-[0.9rem] font-medium gap-[8px] hover:bg-gray-50 transition-colors disabled:opacity-50"
    >
      <span className="capitalize">{isDownloading ? "Downloading..." : "Download"}</span>
      {!isDownloading && (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect x="7" y="2" width="2" height="9" rx="1" fill="#666666"/>
          <path d="M7.99923 2.33203V11.6664M3.33203 6.99923L7.99923 11.6664L12.6664 6.99923" stroke="#666666" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )}
    </button>
  );
}
