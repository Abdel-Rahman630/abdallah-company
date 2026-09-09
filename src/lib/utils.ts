/**
 * Utility function to parse a date string safely and format it.
 */

export function parseDate(dateStr?: string | null): Date {
  if (!dateStr) return new Date();
  const d = new Date(dateStr);
  return isNaN(d.getTime()) ? new Date() : d;
}

export function formatDateParts(dateStr?: string | null, locale: string = "en-US") {
  const d = parseDate(dateStr);
  return {
    day: String(d.getDate()).padStart(2, "0"),
    dayNum: d.getDate(),
    monthShort: d.toLocaleString(locale, { month: "short" }),
    monthShortUpper: d.toLocaleString(locale, { month: "short" }).toUpperCase(),
    year: d.getFullYear(),
  };
}

export function formatFullDate(dateStr?: string | null, locale: string = "en-GB"): string {
  const d = parseDate(dateStr);
  return d.toLocaleDateString(locale, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function formatTime(dateStr?: string | null, locale: string = "en-US"): string {
  const d = parseDate(dateStr);
  return d.toLocaleTimeString(locale, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

/**
 * Formats full CMS external URLs (e.g. https://www.ahcl.com.sa/about-us)
 * to internal route paths (e.g. /about-us) if applicable.
 */
export function formatCtaUrl(url?: string): string {
  if (!url) return "#";
  if (url.startsWith("http://") || url.startsWith("https://")) {
    try {
      const parsed = new URL(url);
      if (
        parsed.hostname.includes("ahcl.com.sa") ||
        parsed.hostname.includes("digital-iconcreations.com")
      ) {
        return (parsed.pathname || "/") + (parsed.hash || "");
      }
    } catch {
      return url;
    }
  }
  return url;
}

/**
 * Truncates a string to a maximum number of characters, appending an ellipsis.
 */
export function truncateText(text: string | undefined, max: number): string {
  if (!text) return "";
  return text.length > max ? text.substring(0, max).trimEnd() + "\u2026" : text;
}
