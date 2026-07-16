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
  // Fallbacks for compatibility
  published_at?: string;
  created_at?: string;
  cover_image_url?: string;
  category?: string;
  excerpt?: string;
}

export interface SingleNewsResponse {
  status: boolean;
  message: string;
  meta: unknown[];
  data: NewsItem;
}

export type LatestNewsItem = {
  id: string | number;
  image: string;
  date: string;
  title: string;
  paragraph: string;
};

export type HomeNewsItem = {
  id: string | number;
  image: string;
  subtitle: string;
  title: string;
  desc: string;
  dateStr: string;
  day: number | string;
  monthStr: string;
};

// ─── Events ─────────────────────────────────────────────────────────────────

export interface EventItem {
  id: string | number;
  title: string;
  slug: string;
  category: string;
  excerpt?: string;
  cover_image_url?: string;
  cover_image?: string;
  image?: string;
  images?: string[];
  starts_at?: string;
  ends_at?: string;
  formatted_date?: string;
  venue_name?: string;
  venue?: string;
  is_featured?: boolean;
  computed_status?: "upcoming" | "past";
  description?: string;
  time?: string;
  date?: string;
  start_date?: string;
  created_at?: string;
  organizer?: string;
}

export interface EventSlideItem {
  id: string | number;
  image: string;
  date: string;
  month: string;
  title: string;
  slug?: string;
  isFeatured: boolean;
  category?: string;
}

export interface HistoryItem {
  image: string;
  title?: string;
  year: string | number;
  hijri_year: string | number;
  description?: string;
  paragraph?: string;
  short_description?: string;
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

// ─── Divisions & Brands ──────────────────────────────────────────────────────

export interface BrandImage {
  id: number;
  url: string;
  sort_order: number;
}

export interface BrandSocialLinks {
  website?: string;
  facebook?: string;
  linkedin?: string;
  instagram?: string;
}

export interface Brand {
  id: number;
  name: string;
  logo: string;
  title: string;
  description: string;
  images: BrandImage[];
  social_links?: BrandSocialLinks;
  sort_order: number;
}

export interface Division {
  id: number;
  slug: string;
  name: string;
  title: string;
  description: string;
  banner?: string | null;
  image?: string | null;
  sort_order: number;
  brands: Brand[];
}

