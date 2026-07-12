// ─── Shared ────────────────────────────────────────────────────────────────

export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface ApiResponse<T> {
  data: T;
  pagination?: Pagination;
  message?: string;
}

// ─── News ───────────────────────────────────────────────────────────────────

export interface NewsMediaItem {
  id: number;
  url: string;
  sort_order: number;
}

export interface NewsItem {
  id: number;
  slug: string;
  title: string;
  short_description: string;
  description: string;
  cover_image: string;
  media: NewsMediaItem[];
  publish_date: string;
  is_active: boolean;
}

export interface SingleNewsResponse {
  status: boolean;
  message: string;
  meta: unknown[];
  data: NewsItem;
}

// ─── Events ─────────────────────────────────────────────────────────────────

export interface EventItem {
  id: string;
  title: string;
  slug: string;
  image: string;
  images: string[];
  date: string;
  time: string;
  venue: string;
  category: string;
  organizer: string;
  status: "upcoming" | "past";
  description: string;
}

// ─── Locations ───────────────────────────────────────────────────────────────

export interface LocationItem {
  id: string;
  title: string;
  label: string;
  address: string;
  mapQuery: string;
  email?: string;
  phone?: string;
}

// ─── Products ────────────────────────────────────────────────────────────────

export interface ProductItem {
  id: string;
  title: string;
  slug: string;
  image: string;
  description: string;
  category: string;
}

// ─── Careers ─────────────────────────────────────────────────────────────────

export interface JobItem {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "full-time" | "part-time" | "contract";
  description: string;
  postedAt: string;
}
