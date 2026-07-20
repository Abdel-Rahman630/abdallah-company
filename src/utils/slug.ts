export function generateSlug(text?: string): string {
  if (!text) return "";
  return text
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, "-")
    .replace(/[^\w-]/g, "");
}

/**
 * Compares a title against a URL slug.
 * Converts the title to a slug and checks if it matches.
 */
export function compareSlug(title: string, slug: string): boolean {
  if (!title || !slug) return false;
  const titleSlug = generateSlug(title);
  const decodedSlug = decodeURIComponent(slug).toLowerCase().trim();
  return titleSlug === decodedSlug || titleSlug === decodedSlug.replace(/[^\w-]/g, "");
}
