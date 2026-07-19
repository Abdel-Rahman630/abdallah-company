"use client";

import Image from "next/image";
import ArrowLink from "@/components/ui/ArrowLink";
import { RevealText } from "@/components/ui/ScrollReveal";
import Link from "next/link";
import SectionTitle from "@/components/ui/SectionTitle";
import SectionSubtitle from "@/components/ui/SectionSubtitle";
import UpcomingEventsSlider from "@/components/sliders/UpcomingEventsSlider";
import { useHomeNews } from "@/hooks/home/useHomeNews";
import { useNewsletter } from "@/hooks/home/useNewsletter";
import { useLanguage } from "@/providers/LanguageProvider";

export default function News() {
  const { t } = useLanguage();
  const { firstNews, otherNews, isLoading } = useHomeNews();
  const { email, setEmail, divisionId, setDivisionId, divisions, subscribeStatus, handleSubscribe } = useNewsletter();

  return (
    <section id="news" className="py-[50px] lg:py-[100px] bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-[80px] pb-[50px] mb-[50px] border-b-[4px] border-[#C9A84C]">
          {/* First Div (Left Side) */}
          <div className="w-full lg:w-1/2">
            <RevealText delay={0.1}>
              <SectionSubtitle className="mb-[12px]">{t("home.newsSubtitle")}</SectionSubtitle>
            </RevealText>
            <RevealText delay={0.2}>
              <SectionTitle className="mb-[24px] md:mb-[50px]">{t("home.newsTitle")}</SectionTitle>
            </RevealText>

            <RevealText delay={0.3}>
              {isLoading ? (
                <div
                  className="shimmer h-[645px] w-full rounded-[15px]"
                  role="status"
                  aria-label="Loading featured news"
                />
              ) : firstNews ? (
                <Link
                  href={`/news/${firstNews.id}`}
                  className="relative rounded-[15px] overflow-hidden flex flex-col justify-end p-[32px] md:p-[48px] h-[500px] md:h-[645px] bg-cover bg-center group block"
                  style={{ backgroundImage: `url(${firstNews.image})` }}
                  aria-label={`Read more: ${firstNews.title}`}
                >
                  <div
                    className="absolute inset-0 bg-black/40 z-0 transition-colors duration-300 group-hover:bg-black/50"
                    aria-hidden="true"
                  />
                  <div className="relative z-10 flex flex-col items-start gap-[22px]">
                    <div className="flex items-center gap-[1rem]">
                      <div className="inline-flex items-center gap-1 px-[16px] py-[8px] rounded-[5px] bg-[#C9A84C] flex-col">
                        <span className="text-[#1E1E1E] text-[1.5rem] font-bold leading-none">{firstNews.day}</span>
                        <span className="text-[#1E1E1E] text-[0.75rem] font-semibold uppercase leading-none">
                          {firstNews.monthStr}
                        </span>
                      </div>
                      <span className="text-white text-[0.6875rem] font-bold uppercase px-[12px] py-[6px] rounded-[4px] bg-white/10 backdrop-blur-[5px]">
                        {firstNews.subtitle}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-white text-[1.6rem] md:text-[2.625rem] font-bold mb-[1rem] leading-tight">
                        {firstNews.title}
                      </h3>
                      <p className="text-white/80 text-[1rem] md:text-[1.1rem] font-normal leading-relaxed line-clamp-3">
                        {firstNews.desc}
                      </p>
                    </div>
                  </div>
                </Link>
              ) : (
                <div className="flex items-center justify-center h-[645px] rounded-[15px] bg-gray-100 text-gray-500">
                  No news available
                </div>
              )}
            </RevealText>
          </div>

          {/* Second Div (Right Side) */}
          <div className="w-full lg:w-1/2 flex flex-col justify-end">
            <div className="mb-[24px] md:mb-[50px] flex justify-end">
              <ArrowLink href="/news" color="black">
                {t("home.readMore")}
              </ArrowLink>
            </div>

            {/* List of News - Scrollable */}
            <div className="flex flex-col flex-1 overflow-y-auto max-h-[500px] mb-[32px] pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
              {isLoading
                ? Array.from({ length: 3 }).map((_, idx) => (
                    <div key={idx} className="flex gap-[20px] mb-[32px]" role="status" aria-label="Loading news">
                      <div className="shimmer w-[120px] h-[120px] rounded-[8px] shrink-0" />
                      <div className="flex flex-col flex-1 gap-2 py-2">
                        <div className="shimmer h-[12px] w-[60px] rounded" />
                        <div className="shimmer h-[20px] w-full rounded" />
                      </div>
                    </div>
                  ))
                : otherNews.map((news, idx) => (
                    <Link
                      href={`/news/${news.id}`}
                      key={`news-${idx}`}
                      className="flex gap-[20px] border-b border-[#E5E5E5] pb-[1rem] mb-[32px] last:border-b-0 last:mb-0"
                      aria-label={`Read: ${news.title}`}
                    >
                      <Image
                        src={news.image}
                        alt={news.title}
                        width={120}
                        height={120}
                        className="w-[120px] h-[120px] rounded-[8px] object-cover shrink-0"
                      />
                      <div className="flex flex-col">
                        <span className="text-[#C9A84C] text-[0.6875rem] font-semibold uppercase mb-[8px]">
                          {news.subtitle}
                        </span>
                        <h4 className="text-[#1E1E1E] text-[1.1rem] font-medium mb-[8px] leading-tight">
                          {news.title}
                        </h4>
                        {news.dateStr && <span className="text-[#999] text-[0.75rem] font-normal">{news.dateStr}</span>}
                      </div>
                    </Link>
                  ))}
            </div>

            {/* Newsletter Div */}
            <RevealText delay={0.5}>
              <div className="rounded-[12px] border border-[#C6C6C6] flex md:flex-row flex-col md:items-center p-[32px] gap-[1rem]">
                <div className="flex-1">
                  <h4 className="text-[#1E1E1E] text-[1rem] mb-[8px] font-medium shrink-0">{t("newsletter.title")}</h4>
                  <p className="text-[#949494] text-[0.75rem] font-normal">{t("newsletter.description")}</p>
                </div>
                <div className="md:w-[50%] w-full flex flex-col gap-2">
                  <div className="flex w-full">
                    <label htmlFor="newsletter-email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="newsletter-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t("newsletter.placeholder")}
                      className=" border-b-[1px] border-[#C6C6C6] flex-1 rounded-l-[3px] bg-[#F2F2F2] px-[10px] py-[12px] text-[#727272] text-[0.9rem] outline-none placeholder:text-[#727272] placeholder:font-normal"
                      disabled={subscribeStatus === "loading"}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") handleSubscribe();
                      }}
                      aria-describedby="newsletter-status"
                    />
                    <button
                      onClick={() => handleSubscribe()}
                      disabled={subscribeStatus === "loading" || !email}
                      className="rounded-r-[3px] bg-[#d1a52a] px-[20px] py-[12px] text-[#1E1E1E] text-[0.9rem] font-semibold flex items-center justify-center"
                      aria-label="Subscribe to newsletter"
                    >
                      {subscribeStatus === "loading" ? t("newsletter.loading") : t("newsletter.subscribe")}
                    </button>
                  </div>
                  {/* Status Messages */}
                  <div id="newsletter-status" aria-live="polite" aria-atomic="true">
                    {subscribeStatus === "success" && (
                      <div className="mt-[16px] p-[16px] rounded-[8px] bg-green-50 border border-green-200">
                        <p className="text-green-800 font-bold text-[0.9rem]">{t("newsletterStatus.successTitle")}</p>
                        <p className="text-green-700 text-[0.85rem]">{t("newsletterStatus.successDesc")}</p>
                      </div>
                    )}
                    {subscribeStatus === "already" && (
                      <div className="mt-[16px] p-[16px] rounded-[8px] bg-blue-50 border border-blue-200">
                        <p className="text-blue-800 font-bold text-[0.9rem]">{t("newsletterStatus.alreadyTitle")}</p>
                        <p className="text-blue-700 text-[0.85rem]">{t("newsletterStatus.alreadyDesc")}</p>
                      </div>
                    )}
                    {subscribeStatus === "validation" && (
                      <div className="mt-[16px] p-[16px] rounded-[8px] bg-red-50 border border-red-200">
                        <p className="text-red-800 font-bold text-[0.9rem]">{t("newsletterStatus.validationTitle")}</p>
                        <p className="text-red-700 text-[0.85rem]">{t("newsletterStatus.validationDesc")}</p>
                      </div>
                    )}
                    {subscribeStatus === "rate_limit" && (
                      <div className="mt-[16px] p-[16px] rounded-[8px] bg-yellow-50 border border-yellow-200">
                        <p className="text-yellow-800 font-bold text-[0.9rem]">{t("newsletterStatus.rateLimitTitle")}</p>
                        <p className="text-yellow-700 text-[0.85rem]">{t("newsletterStatus.rateLimitDesc")}</p>
                      </div>
                    )}
                    {subscribeStatus === "error" && (
                      <div className="mt-[16px] p-[16px] rounded-[8px] bg-red-50 border border-red-200">
                        <p className="text-red-800 font-bold text-[0.9rem]">{t("newsletterStatus.errorTitle")}</p>
                        <p className="text-red-700 text-[0.85rem]">{t("newsletterStatus.errorDesc")}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </RevealText>
          </div>
        </div>

        {/* Upcoming Events Header */}
        <div className="flex items-center justify-between mb-[40px]">
          <RevealText delay={0.1}>
            <h2 className="text-[#1A1A1A] text-[1.5rem] font-bold uppercase">{t("events.upcoming")}</h2>
          </RevealText>
          <RevealText delay={0.2}>
            <ArrowLink href="/news#events" color="black">
              {t("events.readMore")}
            </ArrowLink>
          </RevealText>
        </div>
      </div>

      <UpcomingEventsSlider />
    </section>
  );
}
