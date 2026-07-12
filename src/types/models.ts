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

export interface NewsItem {
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  image: string;
  images: string[];
  paragraph: string;
  content: string;
  date: string;
  tags: string[];
  category: string;
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
