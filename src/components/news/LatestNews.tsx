"use client";

import { useState } from "react";
import ReactPaginate from "react-paginate";
import NewsCard from "@/components/news/NewsCard";
import { RevealText } from "@/components/ui/ScrollReveal";

const newsData = [
  {
    image: "/firstnew.png",
    date: "30 October 2025",
    title: "AHCL Signs Exclusive Distribution Agreement with Mikasa Corporation",
    paragraph:
      "Abdullah Hashim Company Limited (AHCL) signed an exclusive distribution agreement with Japan's Mikasa Corporation to supply light construction equipment across Saudi Arabia. The partnership includes products such as soil compactors and concrete vibrators, supporting the Kingdom's growing infrastructure and construction sectors.",
  },
  {
    image: "/secondnew.png",
    date: "3 January 2026",
    title: "AHG Group Participates as a Gold Sponsor at Saudi Industry Forum 2026",
    paragraph:
      "AHG Group participated as a Gold Sponsor at the Saudi Industry Forum 2026, showcasing its latest industrial solutions and strengthening relationships with customers and industry partners. The participation reflects the company's commitment to supporting Saudi Arabia's industrial development and Vision 2030 objectives.",
  },
  {
    image: "/thirdnew.png",
    date: "22 September 2025",
    title: "Abdullah Hashim Industrial Gases & Equipment Announces New Investment in Oxagon, NEOM",
    paragraph:
      "Abdullah Hashim Industrial Gases & Equipment signed a land lease agreement with Oxagon, NEOM, to develop a new industrial project valued at approximately SAR 600 million. The investment aims to expand industrial gas production capabilities and contribute to Saudi Arabia's growing industrial ecosystem.",
  },
    {
    image: "/firstnew.png",
    date: "30 October 2025",
    title: "AHCL Signs Exclusive Distribution Agreement with Mikasa Corporation",
    paragraph:
      "Abdullah Hashim Company Limited (AHCL) signed an exclusive distribution agreement with Japan's Mikasa Corporation to supply light construction equipment across Saudi Arabia. The partnership includes products such as soil compactors and concrete vibrators, supporting the Kingdom's growing infrastructure and construction sectors.",
  },
  {
    image: "/secondnew.png",
    date: "3 January 2026",
    title: "AHG Group Participates as a Gold Sponsor at Saudi Industry Forum 2026",
    paragraph:
      "AHG Group participated as a Gold Sponsor at the Saudi Industry Forum 2026, showcasing its latest industrial solutions and strengthening relationships with customers and industry partners. The participation reflects the company's commitment to supporting Saudi Arabia's industrial development and Vision 2030 objectives.",
  },
  {
    image: "/thirdnew.png",
    date: "22 September 2025",
    title: "Abdullah Hashim Industrial Gases & Equipment Announces New Investment in Oxagon, NEOM",
    paragraph:
      "Abdullah Hashim Industrial Gases & Equipment signed a land lease agreement with Oxagon, NEOM, to develop a new industrial project valued at approximately SAR 600 million. The investment aims to expand industrial gas production capabilities and contribute to Saudi Arabia's growing industrial ecosystem.",
  },
];

const ITEMS_PER_PAGE = 3;

export default function LatestNews() {
  const [currentPage, setCurrentPage] = useState(0);

  const pageCount = Math.ceil(newsData.length / ITEMS_PER_PAGE);
  const offset = currentPage * ITEMS_PER_PAGE;
  const currentItems = newsData.slice(offset, offset + ITEMS_PER_PAGE);

  return (
    <section className="py-[80px] lg:py-[120px] bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-[80px]">
          {/* Left: Title (65%) */}
          <div className="w-full">
            <RevealText delay={0.1}>
              <h2
                className="text-[#1E1E1E] text-[2.5rem] font-bold leading-tight mb-[40px]"
              >
                LATEST NEWS
              </h2>
            </RevealText>

            {/* Cards */}
            <div className="flex flex-col gap-[2rem]">
              {currentItems.map((item, idx) => (
                <RevealText key={idx} delay={0.1 * (idx + 1)}>
                  <NewsCard
                    image={item.image}
                    date={item.date}
                    title={item.title}
                    paragraph={item.paragraph}
                    readMore={true}
                  />
                </RevealText>
              ))}
            </div>

            {/* Pagination */}
            {pageCount > 1 && (
              <div className="mt-[40px]">
                <ReactPaginate
                  pageCount={pageCount}
                  onPageChange={({ selected }) => setCurrentPage(selected)}
                  forcePage={currentPage}
                  previousLabel={
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className="rotate-180">
                      <path fillRule="evenodd" clipRule="evenodd" d="M9.58586 8.00008L4.29297 2.70718L5.70718 1.29297L12.4143 8.00008L5.70718 14.7072L4.29297 13.293L9.58586 8.00008Z" fill="#D1A52A"/>
                    </svg>
                  }
                  nextLabel={
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
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
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
