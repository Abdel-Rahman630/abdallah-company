/**
 * Base API client using Next.js native fetch.
 * Integrates with Next.js caching and revalidation system.
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "https://api.ahcl.com.sa";

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
  console.log(`[API GET] ${endpoint} Response:`, JSON.stringify(data, null, 2));
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
  console.log(`[API POST] ${endpoint} Response:`, JSON.stringify(data, null, 2));
  return data;
}
