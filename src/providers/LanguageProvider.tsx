"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { Locale, LanguageContextProps } from "@/types/models";
import enTranslations from "@/locales/en.json";
import arTranslations from "@/locales/ar.json";
import { useGlobalLoading } from "@/providers/LoadingProvider";

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined,
);

export function LanguageProvider({
  children,
  initialLocale = "en",
}: {
  children: ReactNode;
  initialLocale?: Locale;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const router = useRouter();
  const { startLoading } = useGlobalLoading();

  // Helper to get nested translation keys e.g. "header.store"
  const getNestedTranslation = (
    obj: Record<string, unknown>,
    path: string,
  ): string | undefined => {
    return path.split(".").reduce((acc: unknown, part: string) => {
      if (acc && typeof acc === "object" && part in acc) {
        return (acc as Record<string, unknown>)[part];
      }
      return undefined;
    }, obj) as string | undefined;
  };

  const t = (key: string) => {
    const translations = locale === "ar" ? arTranslations : enTranslations;
    return getNestedTranslation(translations, key) || key;
  };

  const setLocale = (newLocale: Locale) => {
    // 1. Show global loading screen first
    startLoading("lang-switch");

    // 2. Wait for loading screen overlay to appear before updating state & direction
    setTimeout(() => {
      document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=3159000; SameSite=Lax`;
      setLocaleState(newLocale);

      // Update HTML attributes for client-side immediate feedback
      document.documentElement.lang = newLocale;
      document.documentElement.dir = newLocale === "ar" ? "rtl" : "ltr";

      if (typeof window !== "undefined") {
        window.location.reload();
      } else {
        router.refresh();
      }
    }, 150);
  };

  return (
    <LanguageContext.Provider value={{ locale, t, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
