"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { Locale, LanguageContextProps } from "@/types/models";
import enTranslations from "@/locales/en.json";
import arTranslations from "@/locales/ar.json";

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({
  children,
  initialLocale = "en",
}: {
  children: ReactNode;
  initialLocale?: Locale;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const router = useRouter();

  // Helper to get nested translation keys e.g. "header.store"
  const getNestedTranslation = (obj: Record<string, unknown>, path: string): string | undefined => {
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
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;
    setLocaleState(newLocale);
    
    // Update HTML attributes for client-side immediate feedback
    document.documentElement.lang = newLocale;
    document.documentElement.dir = newLocale === "ar" ? "rtl" : "ltr";
    
    router.refresh(); // Refresh the server components to use new locale
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
