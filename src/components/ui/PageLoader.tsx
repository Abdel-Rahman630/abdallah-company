"use client";

import { useGlobalLoading } from "@/providers/LoadingProvider";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function PageLoader() {
  const { isLoading } = useGlobalLoading();
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    if (isLoading) {
      setShouldRender(true);
    } else {
      const timer = setTimeout(() => setShouldRender(false), 500); // Wait for fade out
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-[#1E1E1E] flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out ${
        isLoading ? "opacity-100" : "opacity-0"
      }`}
      role="alert"
      aria-busy="true"
      aria-label="Loading page content"
    >
      <div className="relative w-[200px] h-[60px] animate-pulse">
        <Image
          src="/header-logo.png"
          alt="AHCL Logo"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
      <div className="mt-8 flex gap-[8px]">
        <div className="w-3 h-3 bg-[#D1A52A] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
        <div className="w-3 h-3 bg-[#D1A52A] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
        <div className="w-3 h-3 bg-[#D1A52A] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
      </div>
    </div>
  );
}
