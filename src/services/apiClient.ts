/**
 * Base API client using Next.js native fetch.
 * Integrates with Next.js caching and revalidation system.
 *
 * - On the CLIENT: uses relative URLs → goes through the Next.js rewrite proxy (no CORS)
 * - On the SERVER: uses the full external URL → direct API call
 */

const isServer = typeof window === "undefined";
const API_BASE_URL = isServer
  ? (process.env.NEXT_PUBLIC_API_URL ?? "https://digital-iconcreations.com/ahcl-crm")
  : ""; // empty = relative URL, routed through Next.js rewrites

interface FetchOptions extends RequestInit {
  /** Next.js revalidation in seconds. Use 0 for no cache, false for indefinite. */
  revalidate?: number | false;
  /** Next.js cache tags for on-demand revalidation */
  tags?: string[];
}

export async function apiGet<T>(endpoint: string, options: FetchOptions = {}): Promise<T> {
  const { revalidate, tags, ...fetchOptions } = options;

  const nextOptions: { next?: { revalidate?: number | false; tags?: string[] } } = {};
  if (revalidate !== undefined || tags) {
    nextOptions.next = {};
    if (revalidate !== undefined) nextOptions.next.revalidate = revalidate;
    if (tags) nextOptions.next.tags = tags;
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...fetchOptions,
    ...nextOptions,
    headers: {
      "Content-Type": "application/json",
      ...fetchOptions.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`API error ${response.status}: ${response.statusText} — ${endpoint}`);
  }

  const data = await response.json() as T;
 
  return data;
}

export async function apiPost<TBody, TResponse>(
  endpoint: string,
  body: TBody,
  options: RequestInit = {}
): Promise<TResponse> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: "POST",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`API error ${response.status}: ${response.statusText} — ${endpoint}`);
  }

  const data = await response.json() as TResponse;

  return data;
}
