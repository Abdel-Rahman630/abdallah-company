"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useOurProducts } from "@/hooks/home/useOurProducts";
import { ArrowIcon } from "@/components/icons/ArrowIcon";

const truncate = (text: string, max: number) =>
  text && text.length > max ? text.substring(0, max).trimEnd() + "…" : text;

export default function ProductsDropdown({ isMobile, onClose }: { isMobile?: boolean; onClose?: () => void }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { products, loading } = useOurProducts();

  const activeProduct = products[activeIndex];

  if (loading) {
    return (
      <div className="bg-[#1E1E1E] rounded-[5px] shadow-[0_0_40px_10px_rgba(0,0,0,0.19)] p-[38px] flex min-w-[939px] min-h-[418px] items-center justify-center">
        <div className="w-6 h-6 border-2 border-[#D1A52A] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!activeProduct) return null;

  if (isMobile) {
    return (
      <div className="flex flex-col gap-6 w-full">
        {/* Titles Column */}
        <div className="flex flex-col gap-2">
          {products.map((product, index) => (
            <button
              key={product.id}
              onClick={() => {
                setActiveIndex(index);
              }}
              className={`text-left text-[0.9rem] font-normal transition-colors py-1 cursor-pointer ${
                activeIndex === index ? "text-white" : "text-[#666]"
              }`}
            >
              {product.name}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex flex-col gap-2 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-2"
            >
              <div className="flex items-center gap-[5px] mb-1">
                <Link
                  href={`/divisions/${activeProduct.slug}#${activeProduct.slug}`}
                  onClick={onClose}
                  className="text-white text-[1rem] font-medium underline"
                >
                  {activeProduct.name}
                </Link>
              </div>
              <p className="text-[#999] text-[0.85rem] leading-relaxed">
                {truncate(activeProduct.description, 100)}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#1E1E1E] rounded-[5px] shadow-[0_0_40px_10px_rgba(0,0,0,0.19)] p-[38px] flex min-w-[939px] min-h-[418px]">
      {/* First Column: List of Products */}
      <div className="border-r border-[#666666] flex flex-col shrink-0 min-w-[200px]">
        <p className="text-[#666] text-[12px] font-semibold uppercase mb-[25px]">
          Divisions
        </p>
        <ul className="flex flex-col gap-[1rem]">
          {products.map((product, index) => (
            <li
              key={product.id}
              onMouseEnter={() => setActiveIndex(index)}
              className={`cursor-pointer transition-colors text-[0.9rem] font-normal ${
                activeIndex === index ? "text-white" : "text-[#666]"
              }`}
            >
              {product.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Second Column: Content Details */}
      <div className="flex-1 pl-[38px] pb-[30px] flex flex-col relative overflow-hidden">
        <p className="text-[#666] text-[12px] font-semibold uppercase mb-[25px]">
          Explore
        </p>

        <div className="flex-1 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0"
            >
              <div className="flex items-center gap-[5px] mb-[13px]">
                <Link
                  href={`/divisions/${activeProduct.slug}#${activeProduct.slug}`}
                  onClick={onClose}
                  className="text-[#FFF] text-[0.9rem] font-medium hover:underline cursor-pointer"
                >
                  {activeProduct.title}
                </Link>
                <ArrowIcon />
              </div>
              <div className="mb-[20px]">
                <p className="text-[#666] text-justify text-[0.85rem] font-medium leading-relaxed">
                  {truncate(activeProduct.description, 100)}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Third Column: Image */}
      <div className="shrink-0 w-[258px] h-[342px] rounded-[5px] overflow-hidden relative ml-[38px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <Image
              src={activeProduct.home_image || "/bg.png"}
              alt={activeProduct.title}
              fill
              className="object-cover"
              sizes="258px"
              unoptimized
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
