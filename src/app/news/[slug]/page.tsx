import NewsBanner from "@/components/news/NewsBanner";
import Link from "next/link";
import { RevealImage, RevealText } from "@/components/ui/ScrollReveal";
import NewsDetailsSlider from "@/components/sliders/NewsDetailsSlider";
import { Metadata } from "next";
import { getNews, getNewsById } from "@/services/news.service";
import { NewsItem } from "@/types/models";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import ScreenshotButton from "@/components/news/ScreenshotButton";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  try {
    const { slug } = await params;
    const cookieStore = await cookies();
    const locale = cookieStore.get("NEXT_LOCALE")?.value || "en";
    
    const decodedSlug = decodeURIComponent(slug);
    const res = await getNews({ limit: 100, lang: locale });
    const matched = (res.data || []).find((n: NewsItem) =>
      n.slug === decodedSlug || n.slug === slug
    );
    if (!matched) return { title: "Abdallah Company | News Details" };

    const news = await getNewsById(String(matched.id), locale);
    return {
      title: `Abdallah Company | ${news.title}`,
      description: news.excerpt || news.short_description || "News details",
    };
  } catch {
    return {
      title: "Abdallah Company | News Details",
      description: "Read the latest news from Abdullah Hashim Company.",
    };
  }
}

export default async function NewsDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let news;
  try {
    const cookieStore = await cookies();
    const locale = cookieStore.get("NEXT_LOCALE")?.value || "en";
    const decodedSlug = decodeURIComponent(slug);
    
    const res = await getNews({ limit: 100, lang: locale });
    const matched = (res.data || []).find((n: NewsItem) =>
      n.slug === decodedSlug || n.slug === slug
    );
    
    if (!matched) {
      console.error(`News not found for slug: ${slug}`);
      return notFound();
    }
    
    news = await getNewsById(String(matched.id), locale);
  } catch (err) {
    console.error("NewsDetailsPage error:", err);
    return notFound();
  }

  // Build the images array from the media array, sorted by sort_order
  const mediaImages = (news.media ?? [])
    .slice()
    .sort((a, b) => a.sort_order - b.sort_order)
    .map((m) => m.url);

  // Fall back to cover_image if media is empty
  const sliderImages = mediaImages.length > 0 ? mediaImages : [news.cover_image];

  return (
    <>
      <NewsBanner />

      <section className="py-[80px] lg:py-[120px] bg-white">
        <div className="w-[80%] md:w-[60%] mx-auto flex flex-col items-center">

          {/* Back Button */}
          <div className="self-start mb-[40px]">
            <RevealText delay={0.1}>
              <Link
                href="/news"
                className="group inline-flex items-center gap-[10px] text-black text-[1rem] uppercase underline"
              >
                <svg
                  className="transition-transform duration-500 group-hover:-translate-x-1 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="10"
                  viewBox="0 0 13 10"
                  fill="none"
                >
                  <path
                    d="M0.337583 4.24708L4.42092 0.163749C4.53093 0.0574899 4.67829 -0.00130703 4.83123 2.20514e-05C4.98418 0.00135113 5.13049 0.0626998 5.23864 0.170855C5.3468 0.279009 5.40815 0.425316 5.40948 0.578265C5.4108 0.731213 5.35201 0.878564 5.24575 0.988582L2.15822 4.07617H12.4167C12.5714 4.07617 12.7197 4.13762 12.8291 4.24702C12.9385 4.35642 13 4.50479 13 4.6595C13 4.81421 12.9385 4.96258 12.8291 5.07198C12.7197 5.18137 12.5714 5.24283 12.4167 5.24283H2.15822L5.24575 8.33042C5.30146 8.38423 5.3459 8.44859 5.37648 8.51976C5.40705 8.59093 5.42314 8.66748 5.42381 8.74493C5.42449 8.82239 5.40973 8.8992 5.3804 8.97089C5.35106 9.04258 5.30775 9.10771 5.25298 9.16248C5.19821 9.21725 5.13308 9.26056 5.06139 9.2899C4.9897 9.31923 4.91289 9.33399 4.83543 9.33331C4.75798 9.33264 4.68143 9.31655 4.61026 9.28597C4.53909 9.2554 4.47473 9.21096 4.42092 9.15525L0.337583 5.07192C0.228187 4.96252 0.166838 4.81418 0.166838 4.6595C0.166838 4.50482 0.228187 4.35647 0.337583 4.24708Z"
                    fill="#1E1E1E"
                  />
                </svg>
                back to news &amp; events
              </Link>
            </RevealText>
          </div>

          {/* Slider — fed with real media images */}
          <div className="w-full">
            <RevealImage delay={0.2}>
              <NewsDetailsSlider images={sliderImages} />
            </RevealImage>
          </div>

          {/* Meta & Share Row */}
          <div className="w-full flex justify-between items-center pb-[24px]">
            <RevealText delay={0.3}>
              <div className="flex gap-[1rem] items-center">
                <span className="text-[#1E1E1E] text-[0.7rem] rounded-[4px] font-bold uppercase bg-[#D1A52A] px-[10px] py-[4px]">
                  Company News
                </span>
                <span className="text-[#D1A52A] text-[0.9rem]">
                  {news.publish_date
                    ? new Date(news.publish_date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })
                    : ""}
                </span>
              </div>
            </RevealText>

            <RevealText delay={0.3}>
              <ul className="flex gap-[8px]">
                   <li>
                  <ScreenshotButton />
                </li>
                {/* <li>
                  <a href="#" target="_blank" className="w-[32px] h-[32px] rounded-[16px] border border-[#E5E5E5] flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M10.0009 1.33203H12.0008V3.99891H10.0009C9.82412 3.99891 9.65456 4.06915 9.52954 4.19419C9.40453 4.31922 9.3343 4.48881 9.3343 4.66563V6.66579H12.0008L11.3342 9.33267H9.3343V14.6664H6.66782V9.33267H4.66797V6.66579H6.66782V4.66563C6.66782 3.78151 7.01899 2.93359 7.64406 2.30842C8.26914 1.68325 9.11692 1.33203 10.0009 1.33203Z" stroke="#666666" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" className="w-[32px] h-[32px] rounded-[16px] border border-[#E5E5E5] flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <g clipPath="url(#clip0_518_3077)">
                        <path d="M13.333 4.93215C14.1997 4.06544 14.6664 2.66538 14.6664 2.66538C14.6664 2.66538 13.3997 3.46542 12.6663 3.46542C10.6661 1.59866 7.39918 3.19874 7.99923 5.99887C5.73238 6.06554 3.46554 5.06549 1.99875 3.33208C0.331951 6.39888 1.99875 10.3324 5.33235 11.3324C4.2656 12.2658 2.79882 12.7325 1.33203 12.6658C7.06582 16.466 14.3997 11.5991 13.333 4.93215Z" stroke="#666666" strokeWidth="2" strokeLinecap="round"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_518_3077">
                          <rect width="16" height="16" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" className="w-[32px] h-[32px] rounded-[16px] border border-[#E5E5E5] flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.4948 6.50382C12.7446 5.75364 11.7271 5.3322 10.6661 5.3322C9.60516 5.3322 8.58766 5.75364 7.83746 6.50382C7.08725 7.254 6.66579 8.27146 6.66579 9.33237V13.9992H9.33267V9.33237C9.33267 8.97873 9.47316 8.63958 9.72323 8.38952C9.9733 8.13946 10.3125 7.99898 10.6661 7.99898C11.0198 7.99898 11.3589 8.13946 11.609 8.38952C11.8591 8.63958 11.9996 8.97873 11.9996 9.33237V13.9992H14.6664V9.33237C14.6664 8.27146 14.245 7.254 13.4948 6.50382Z" stroke="#666666" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M3.99891 5.99889H1.33203V13.9992H3.99891V5.99889Z" stroke="#666666" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M2.66547 3.99881C3.40191 3.99881 3.99891 3.40183 3.99891 2.66542C3.99891 1.92901 3.40191 1.33203 2.66547 1.33203C1.92903 1.33203 1.33203 1.92901 1.33203 2.66542C1.33203 3.40183 1.92903 3.99881 2.66547 3.99881Z" stroke="#666666" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </a>
                </li> */}
              </ul>
            </RevealText>
          </div>

          {/* Article Content */}
          <div className="w-full">
            <RevealText delay={0.4}>
              <h1 className="text-[#1E1E1E] text-[2.5rem] font-normal mb-[40px] leading-tight">
                {news.title}
              </h1>
            </RevealText>

            <RevealText delay={0.5}>
              <div
                className="text-[#333] text-[1rem] font-normal text-justify leading-relaxed mb-[40px] prose max-w-none [&_strong]:text-black [&_strong]:font-bold"
                dangerouslySetInnerHTML={{ __html: news.description }}
              />
            </RevealText>
          </div>
        </div>
      </section>
    </>
  );
}
