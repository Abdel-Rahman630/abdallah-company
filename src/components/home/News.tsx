"use client";

import Image from "next/image";
import ArrowLink from "@/components/ui/ArrowLink";
import { RevealText } from "@/components/ui/ScrollReveal";
import Link from "next/link";
import UpcomingEventsSlider from "@/components/sliders/UpcomingEventsSlider";
import { useHomeNews } from "@/hooks/home/useHomeNews";
import { useNewsletter } from "@/hooks/home/useNewsletter";

export default function News() {
  const { firstNews, otherNews, isLoading } = useHomeNews();
  const { email, setEmail, subscribeStatus, handleSubscribe } = useNewsletter();

  return (
    <section id="news" className="py-[50px] lg:py-[100px] bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-[80px] pb-[50px] mb-[50px] border-b-[4px] border-[#C9A84C]">
          
          {/* First Div (Left Side) */}
          <div className="w-full lg:w-1/2">
            <RevealText delay={0.1}>
              <h3 className="text-[#C9A84C] text-[0.9rem] font-semibold uppercase mb-[12px]">
                News &amp; Events
              </h3>
            </RevealText>
            <RevealText delay={0.2}>
              <h2 className="text-[#1E1E1E] text-[2.5rem] font-bold mb-[24px] md:mb-[50px]">
                Company Highlights
              </h2>
            </RevealText>

            <RevealText delay={0.3}>
              {isLoading ? (
                <div className="shimmer h-[645px] w-full rounded-[15px]" role="status" aria-label="Loading featured news" />
              ) : firstNews ? (
                <Link
                  href={`/news/${firstNews.id}`}
                  className="relative rounded-[15px] overflow-hidden flex flex-col justify-end p-[48px] h-[645px] bg-cover bg-center group block"
                  style={{ backgroundImage: `url(${firstNews.image})` }}
                  aria-label={`Read more: ${firstNews.title}`}
                >
                  <div className="absolute inset-0 bg-black/40 z-0 transition-colors duration-300 group-hover:bg-black/50" aria-hidden="true" />
                  <div className="relative z-10 flex flex-col items-start gap-[22px]">
                    <div className="flex items-center gap-[1rem]">
                      <div className="inline-flex items-center gap-1 px-[16px] py-[8px] rounded-[5px] bg-[#C9A84C] flex-col">
                        <span className="text-[#1E1E1E] text-[1.5rem] font-bold leading-none">{firstNews.day}</span>
                        <span className="text-[#1E1E1E] text-[0.75rem] font-semibold uppercase leading-none">{firstNews.monthStr}</span>
                      </div>
                      <span className="text-white text-[0.6875rem] font-bold uppercase px-[12px] py-[6px] rounded-[4px] bg-white/10 backdrop-blur-[5px]">
                        {firstNews.subtitle}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-white text-[1.8rem] md:text-[2.625rem] font-bold mb-[1rem] leading-tight group-hover:text-[#C9A84C] transition-colors duration-300">
                        {firstNews.title}
                      </h3>
                      <p className="text-white/80 text-[1.1rem] font-normal leading-relaxed line-clamp-3">
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
              <ArrowLink href="/news" color="black">all news</ArrowLink>
            </div>

            {/* List of News - Scrollable */}
            <div className="flex flex-col flex-1 overflow-y-auto max-h-[500px] mb-[32px] pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
              {isLoading ? (
                Array.from({ length: 3 }).map((_, idx) => (
                  <div key={idx} className="flex gap-[20px] mb-[32px]" role="status" aria-label="Loading news">
                    <div className="shimmer w-[120px] h-[120px] rounded-[8px] shrink-0" />
                    <div className="flex flex-col flex-1 gap-2 py-2">
                      <div className="shimmer h-[12px] w-[60px] rounded" />
                      <div className="shimmer h-[20px] w-full rounded" />
                    </div>
                  </div>
                ))
              ) : otherNews.map((news, idx) => (
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
                  </div>
                </Link>
              ))}
            </div>

            {/* Newsletter Div */}
            <RevealText delay={0.5}>
              <div className="rounded-[12px] border border-[#686868] bg-[#1E1E1E] flex md:flex-row flex-col md:items-center p-[32px] gap-[1rem]">
                <div className="flex-1">
                  <h4 className="text-[#D1A52A] text-[1rem] mb-[8px] font-medium shrink-0">
                    Stay updated with AHCL
                  </h4>
                  <p className="text-[#949494] text-[0.75rem] font-normal">
                    Join our newsletter for exclusive event invites and industry news.
                  </p>
                </div>
                <div className="md:w-[50%] w-full flex flex-col gap-2">
                  <div className="flex w-full">
                    <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                    <input
                      id="newsletter-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 rounded-l-[3px] bg-[#333] px-[10px] py-[12px] text-[#727272] text-[0.9rem] outline-none placeholder:text-[#727272] placeholder:font-normal"
                      disabled={subscribeStatus === "loading"}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") handleSubscribe();
                      }}
                      aria-describedby="newsletter-status"
                    />
                    <button
                      onClick={handleSubscribe}
                      disabled={subscribeStatus === "loading" || !email}
                      className="rounded-r-[3px] bg-[#d1a52a] px-[20px] py-[12px] text-[#1E1E1E] text-[0.9rem] font-semibold flex items-center justify-center"
                      aria-label="Subscribe to newsletter"
                    >
                      {subscribeStatus === "loading" ? "Sending..." : "Send"}
                    </button>
                  </div>
                  {/* Status Messages */}
                  <div id="newsletter-status" aria-live="polite" aria-atomic="true">
                    {subscribeStatus === "success" && (
                      <span className="text-green-500 text-xs">Successfully subscribed to the newsletter!</span>
                    )}
                    {subscribeStatus === "already" && (
                      <span className="text-blue-500 text-xs">You are already subscribed to the newsletter.</span>
                    )}
                    {subscribeStatus === "validation" && (
                      <span className="text-red-500 text-xs">Please enter a valid email address.</span>
                    )}
                    {subscribeStatus === "rate_limit" && (
                      <span className="text-yellow-500 text-xs">Too many requests. Please try again later.</span>
                    )}
                    {subscribeStatus === "error" && (
                      <span className="text-red-500 text-xs">An error occurred. Please try again.</span>
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
            <h2 className="text-[#1A1A1A] text-[1.5rem] font-bold uppercase">
              UPCOMING EVENTS
            </h2>
          </RevealText>
          <RevealText delay={0.2}>
            <ArrowLink href="/events" color="black">all events</ArrowLink>
          </RevealText>
        </div>
      </div>

      <UpcomingEventsSlider />
    </section>
  );
}
