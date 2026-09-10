
import { ReactNode, SelectHTMLAttributes, InputHTMLAttributes } from "react";

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

// ─── i18n ────────────────────────────────────────────────────────────────────

export type Locale = "en" | "ar";

// ─── Forms & Status ──────────────────────────────────────────────────────────

export type SubscribeStatus =
  | "idle"
  | "loading"
  | "success"
  | "already"
  | "validation"
  | "rate_limit"
  | "error";

export type SubmitStatus = "idle" | "loading" | "success" | "error";

export type ContactFormData = {
  name: string;
  division: string;
  email: string;
  phone: string;
  message: string;
};

// ─── Locations ───────────────────────────────────────────────────────────────

export type OptionItem = {
  value: string | number;
  label: string;
};

export type Location = {
  id: number;
  title: string;
  span: string;
  paragraph: string;
  mapQuery: string;
  googleMapsUrl: string;
  division: string;
  subDivision?: string;
  isMain?: boolean;
  city?: string;
  sortOrder?: number;
};
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
  slug?: string;
  image: string;
  date: string;
  title: string;
  paragraph: string;
};

export type HomeNewsItem = {
  id: string | number;
  slug?: string;
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
  images?: string[];
  gallery_image_urls?: string[];
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
  slug?: string;
  image: string;
  date: string;
  month: string;
  title: string;
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
  home_image?: string;
  slogan?: string;
  sort_order: number;
  brands: Brand[];
}

// ─── Component Props ────────────────────────────────────────────────────────

export interface IconProps {
  className?: string;
  color?: string;
}

export interface YellowButtonProps {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
  target?: string;
}

export interface WhiteButtonProps {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}

export interface SectionTitleProps {
  children: ReactNode;
  className?: string;
}

export interface SectionSubtitleProps {
  children: ReactNode;
  className?: string;
}

export interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export interface PageBannerProps {
  image?: string;
  title?: string;
  alt?: string;
}

export interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
}

export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export interface EventCardProps {
  id?: string | number;
  image: string;
  date: string;
  month: string;
  title: string;
  disabled?: boolean;
}

export interface DropdownPanelBox {
  title: string;
  text: string;
  link?: string;
}

export interface DropdownPanelProps {
  sectionTitle: string;
  boxes: DropdownPanelBox[];
  image: string;
  isMobile?: boolean;
  onLinkClick?: () => void;
}

export interface DropdownPanelData {
  sectionTitle: string;
  boxes: DropdownPanelBox[];
  image: string;
}

export interface NavItem {
  key: string;
  label: string;
  href?: string;
  dropdown?: DropdownPanelData | null;
}

export interface CountDownItem {
  to: number | string;
  suffix?: string;
  prefix?: string;
  title: ReactNode | string;
}

export interface CountDownProps {
  data: CountDownItem[];
}

export interface ArrowLinkProps {
  href?: string;
  children: ReactNode;
  color?: "white" | "black";
  className?: string;
  as?: "link" | "span";
}

export interface ArrowButtonLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  target?: string;
}

export interface NewsDetailsSliderProps {
  images?: string[];
}

export interface NewsCardProps {
  image: string;
  date: string;
  title: string;
  paragraph: string;
  readMore?: boolean;
  id?: string | number;
  slug?: string;
}

export interface HeaderClientProps {
  logo: ReactNode;
  actions: ReactNode;
}

export interface RegisterInterestFormData {
  name: string;
  phone: string;
  email: string;
}

export interface RegisterInterestFormProps {
  eventId: string | number;
}

export interface FetchOptions extends RequestInit {
  /** Next.js revalidation in seconds. Use 0 for no cache, false for indefinite. */
  revalidate?: number | false;
  /** Next.js cache tags for on-demand revalidation */
  tags?: string[];
}

export interface LanguageContextProps {
  locale: Locale;
  t: (key: string) => string;
  setLocale: (locale: Locale) => void;
}

export interface ApiLocation {
  id: number;
  title?: string;
  branch?: string;
  city?: string;
  city_id?: number;
  facility_type?: string;
  address?: string;
  google_maps_url?: string;
  division?: { value: string | number; key: string; label: string }[];
  department?: { value: string | number; key: string; label: string }[];
  is_main?: boolean | number | string;
  sort_order?: number;
}

export interface ScreenshotButtonProps {
  newsSlug?: string;
  slug?: string;
  lang?: string;
  targetId?: string;
  filename?: string;
}

export interface LocationsMapProps {
  isLoading: boolean;
  activeLocation: any;
  t: (key: string) => string;
}

export interface LocationsListProps {
  isLoading: boolean;
  locations: any[];
  activeLocation: any;
  setActiveLocation: (loc: any) => void;
}

export interface LocationsFilterProps {
  divisions: OptionItem[];
  departments: OptionItem[];
  cities: string[];
  selectedDivision: string;
  setSelectedDivision: (val: string) => void;
  selectedDepartment: string;
  setSelectedDepartment: (val: string) => void;
  selectedCity: string;
  setSelectedCity: (val: string) => void;
  handleFilter: () => void;
  isLoading: boolean;
  fetchLocations: (params: any) => void;
  t: (key: string) => string;
}

export interface LocationsApiResponse {
  status: boolean;
  message: string;
  meta: unknown[];
  data: ApiLocation[];
}

// ─── Home CMS ────────────────────────────────────────────────────────────────

export interface HomeCmsSeo {
  title: string;
  description: string;
  og_image: string;
}

export interface HeroSectionFields {
  hero_image: string;
  video: string;
  title: string;
  subtitle: string;
}

export interface WhoWeAreGalleryItem {
  id: string;
  image: string;
  alt_text: string;
  sort_order: number;
}

export interface StatisticItem {
  id: string;
  value: string;
  suffix: string;
  label: string;
  sort_order: number;
}

export interface WhoWeAreSectionFields {
  section_icon?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  gallery?: WhoWeAreGalleryItem[];
  cta_label?: string;
  cta_url?: string;
  statistics?: StatisticItem[];
}

export interface NetworkLegendItem {
  id?: string;
  type: string;
  label: string;
  sort_order: number;
}

export interface NetworkCoverageSectionFields {
  eyebrow?: string;
  title?: string;
  map_image?: string;
  map_alt?: string;
  legend_items?: NetworkLegendItem[];
  statistics?: StatisticItem[];
  cta_label?: string;
  cta_url?: string;
}

export interface HomeCmsSection<T = unknown> {
  key: "hero_section" | "who_we_are_section" | "network_coverage_section" | string;
  type: string;
  sort_order: number;
  fields: T;
}

export interface HomeCmsData {
  key: string;
  title: string;
  slug: string;
  seo: HomeCmsSeo;
  sections: HomeCmsSection[];
}

export interface HomeCmsResponse {
  status: boolean;
  message: string;
  meta: unknown[];
  data: HomeCmsData;
}

// ─── About CMS ───────────────────────────────────────────────────────────────

export interface AboutBannerSectionFields {
  banner_image?: string;
  image_alt?: string;
  title?: string;
}

export interface CompanyOverviewSectionFields {
  head_title?: string;
  title?: string;
  sub_title?: string;
  image?: string;
  image_alt?: string;
  description?: string;
  statistics?: StatisticItem[];
}

export interface MissionVisionSectionFields {
  image?: string;
  image_alt?: string;
  mission_title?: string;
  mission_description?: string;
  vision_title?: string;
  vision_description?: string;
}

export interface ValuesSectionFields {
  head_title?: string;
  title?: string;
  description?: string;
  integrity_title?: string;
  integrity_description?: string;
  customer_excellence_title?: string;
  customer_excellence_description?: string;
  performance_collaboration_title?: string;
  performance_collaboration_description?: string;
  community_impact_title?: string;
  community_impact_description?: string;
}

export interface AboutCmsSection<T = unknown> {
  key: "banner_section" | "company_overview_section" | "mission_vision_section" | "values_section" | string;
  type: string;
  sort_order: number;
  fields: T;
}

export interface AboutCmsData {
  key: string;
  title: string;
  slug: string;
  seo: HomeCmsSeo;
  sections: AboutCmsSection[];
}

export interface AboutCmsResponse {
  status: boolean;
  message: string;
  meta: unknown[];
  data: AboutCmsData;
}

// ─── Careers CMS ─────────────────────────────────────────────────────────────

export interface CareersBannerSectionFields {
  banner_image: string;
  image_alt: string;
  title: string;
}

export interface BenefitItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  sort_order: number;
  is_active: boolean;
}

export interface WhyJoinUsSectionFields {
  head_title: string;
  title: string;
  image: string;
  image_alt: string;
  description: string;
  second_title: string;
  second_description: string;
  award_badge_image: string;
  award_badge_alt: string;
  award_certificate_image: string;
  award_certificate_alt: string;
  benefits: BenefitItem[];
  cta_label: string;
  cta_url: string;
}

export interface CareersCmsSection<T = unknown> {
  key: "banner_section" | "why_join_us_section" | string;
  type: string;
  sort_order: number;
  fields: T;
}

export interface CareersCmsData {
  key: string;
  title: string;
  slug: string;
  seo: HomeCmsSeo;
  sections: CareersCmsSection[];
}

export interface CareersCmsResponse {
  status: boolean;
  message: string;
  meta: unknown[];
  data: CareersCmsData;
}

// ─── Contact CMS ──────────────────────────────────────────────────────────────

export interface ContactBannerSectionFields {
  banner_image: string;
  image_alt: string;
  title: string;
}

export interface ContactSectionFields {
  head_title: string;
  title: string;
  description: string;
  name_placeholder: string;
  division_placeholder: string;
  email_placeholder: string;
  phone_placeholder: string;
  message_placeholder: string;
  submit_label: string;
  follow_title: string;
  follow_description: string;
  linkedin_title: string;
  linkedin_value: string;
  linkedin_url: string;
  email_title: string;
  contact_email: string;
  phone_title: string;
  contact_phone: string;
  customer_service_title: string;
  customer_service_phone: string;
}

export interface LocationsIntroSectionFields {
  head_title: string;
  title: string;
  network_title: string;
}

export interface ContactCmsSection<T = unknown> {
  key: "banner_section" | "contact_section" | "locations_intro_section" | string;
  type: string;
  sort_order: number;
  fields: T;
}

export interface ContactCmsData {
  key: string;
  title: string;
  slug: string;
  seo: HomeCmsSeo;
  sections: ContactCmsSection[];
}

export interface ContactCmsResponse {
  status: boolean;
  message: string;
  meta: unknown[];
  data: ContactCmsData;
}
