/**
 * Minimal server-side translation helper.
 * Reads the flat locale JSON and returns a t() function.
 */
import en from "@/locales/en.json";
import ar from "@/locales/ar.json";

type Locale = "en" | "ar";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const dictionaries: Record<Locale, Record<string, any>> = { en, ar };

function resolve(obj: Record<string, unknown>, key: string): string {
  const parts = key.split(".");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let cur: any = obj;
  for (const part of parts) {
    if (cur == null || typeof cur !== "object") return key;
    cur = cur[part];
  }
  return typeof cur === "string" ? cur : key;
}

export function getT(locale: string) {
  const dict = dictionaries[(locale as Locale) in dictionaries ? (locale as Locale) : "en"];
  return (key: string) => resolve(dict, key);
}
