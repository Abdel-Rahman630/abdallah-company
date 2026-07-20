"use client";

import ReactPaginate from "react-paginate";
import NewsCard from "@/components/news/NewsCard";
import NewsCardSkeleton from "@/components/ui/NewsCardSkeleton";
import { RevealText } from "@/components/ui/ScrollReveal";
import { useLatestNews } from "@/hooks/news/useLatestNews";

export default function LatestNews() {
  const { newsData, pageCount, currentPage, setCurrentPage, isLoading } =
    useLatestNews();

  return (
    <section className="py-[80px] lg:py-[120px] bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-[80px]">
          <div className="w-full">
            <RevealText delay={0.1}>
              <h2 className="text-[#1E1E1E] text-[2.5rem] font-bold leading-tight mb-[40px]">
                LATEST NEWS
              </h2>
            </RevealText>

            {/* Cards */}
            <div className="flex flex-col gap-[2rem] min-h-[400px]">
              {isLoading ? (
                Array.from({ length: 3 }).map((_, i) => (
                  <NewsCardSkeleton key={i} />
                ))
              ) : newsData.length > 0 ? (
                newsData.map((item, idx) => (
                  <RevealText key={item.id || idx} delay={0.1 * (idx + 1)}>
                    <NewsCard
                      id={item.id}
                      slug={item.slug}
                      image={item.image}
                      date={item.date}
                      title={item.title}
                      paragraph={item.paragraph}
                      readMore={true}
                    />
                  </RevealText>
                ))
              ) : (
                <div className="text-gray-500">No news available at the moment.</div>
              )}
            </div>

            {/* Pagination */}
            {pageCount > 1 && (
              <nav className="mt-[40px]" aria-label="News pagination">
                <ReactPaginate
                  pageCount={pageCount}
                  onPageChange={({ selected }) => setCurrentPage(selected)}
                  forcePage={currentPage}
                  previousLabel={
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className="rotate-180" aria-hidden="true">
                      <path fillRule="evenodd" clipRule="evenodd" d="M9.58586 8.00008L4.29297 2.70718L5.70718 1.29297L12.4143 8.00008L5.70718 14.7072L4.29297 13.293L9.58586 8.00008Z" fill="#D1A52A"/>
                    </svg>
                  }
                  nextLabel={
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path fillRule="evenodd" clipRule="evenodd" d="M9.58586 8.00008L4.29297 2.70718L5.70718 1.29297L12.4143 8.00008L5.70718 14.7072L4.29297 13.293L9.58586 8.00008Z" fill="#D1A52A"/>
                    </svg>
                  }
                  previousClassName="flex items-center justify-center w-[32px] h-[32px] cursor-pointer"
                  nextClassName="flex items-center justify-center w-[32px] h-[32px] cursor-pointer"
                  previousLinkClassName="flex items-center justify-center"
                  nextLinkClassName="flex items-center justify-center"
                  containerClassName="flex items-center gap-[1rem]"
                  pageClassName=""
                  pageLinkClassName="flex items-center justify-center w-[32px] h-[32px] text-[1rem] font-semibold text-black rounded-[5px] transition-all duration-300 hover:bg-black hover:text-white"
                  activeClassName="[&_a]:bg-black [&_a]:text-white"
                  breakLabel="..."
                  breakClassName=""
                  breakLinkClassName="flex items-center justify-center w-[32px] h-[32px] text-[1rem] font-semibold text-black"
                  disabledClassName="opacity-30 pointer-events-none"
                />
              </nav>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
