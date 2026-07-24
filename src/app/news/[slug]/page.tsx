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
  const cookieStore = await cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value || "en";

  let news;
  try {
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

          {/* Back Button — outside the PDF capture zone */}
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

      
          {/* PDF-capturable article content */}
          <div id="pdf-content" className="w-full flex flex-col items-center">

            {/* Slider — fed with real media images */}
            {/* Removed RevealImage to prevent html2canvas clip-path issues */}
            <div className="w-full">
              <NewsDetailsSlider images={sliderImages} />
            </div>
    {/* Meta Data (Top) */}
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
               {/* Download Button (Last element in page, outside PDF content so it doesn't print itself) */}
          <div className=" flex justify-end">
            <RevealText delay={0.5}>
            <ScreenshotButton newsSlug={slug} lang={locale} />

            </RevealText>
          </div>
          </div>

            {/* Article Content */}
            <div className="w-full mt-[24px]">
              <h1 className="text-[#1E1E1E] text-[2.5rem] font-normal mb-[40px] leading-tight">
                {news.title}
              </h1>

              <div
                className="text-[#333] text-[1rem] font-normal text-justify leading-relaxed mb-[40px] prose max-w-none [&_strong]:text-black [&_strong]:font-bold"
                dangerouslySetInnerHTML={{ __html: news.description }}
              />
            </div>
          </div>

       
        </div>
      </section>
    </>
  );
}
