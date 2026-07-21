"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useOurProducts } from "@/hooks/home/useOurProducts";

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
            <Link
              key={product.id}
              href={`/divisions/${product.slug}`}
              onClick={() => {
                setActiveIndex(index);
                if (onClose) onClose();
              }}
              className={`text-left text-[0.9rem] font-normal transition-colors py-1 cursor-pointer ${
                activeIndex === index ? "text-white" : "text-[#666]"
              }`}
            >
              {product.name}
            </Link>
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
                <span className="text-white text-[1rem] font-medium">{activeProduct.name}</span>
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
                  href={`/divisions/${activeProduct.slug}`}
                  onClick={onClose}
                  className="text-[#FFF] text-[0.9rem] font-medium hover:underline cursor-pointer"
                >
                  {activeProduct.title}
                </Link>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none">
                  <path
                    d="M12.6624 4.24708L8.57908 0.163749C8.46907 0.0574899 8.32171 -0.00130703 8.16877 2.20514e-05C8.01582 0.00135113 7.86951 0.0626998 7.76136 0.170855C7.6532 0.279009 7.59185 0.425316 7.59052 0.578265C7.5892 0.731213 7.64799 0.878564 7.75425 0.988582L10.8418 4.07617H0.583333C0.428624 4.07617 0.280251 4.13762 0.170854 4.24702C0.0614581 4.35642 0 4.50479 0 4.6595C0 4.81421 0.0614581 4.96258 0.170854 5.07198C0.280251 5.18137 0.428624 5.24283 0.583333 5.24283H10.8418L7.75425 8.33042C7.69854 8.38423 7.6541 8.44859 7.62352 8.51976C7.59295 8.59093 7.57686 8.66748 7.57619 8.74493C7.57551 8.82239 7.59027 8.8992 7.6196 8.97089C7.64894 9.04258 7.69225 9.10771 7.74702 9.16248C7.80179 9.21725 7.86692 9.26056 7.93861 9.2899C8.0103 9.31923 8.08711 9.33399 8.16457 9.33331C8.24202 9.33264 8.31857 9.31655 8.38974 9.28597C8.46091 9.2554 8.52527 9.21096 8.57908 9.15525L12.6624 5.07192C12.7718 4.96252 12.8332 4.81418 12.8332 4.6595C12.8332 4.50482 12.7718 4.35647 12.6624 4.24708Z"
                    fill="white"
                  />
                </svg>
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
