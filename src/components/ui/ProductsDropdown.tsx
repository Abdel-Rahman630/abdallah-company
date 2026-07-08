"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const productsData = [
  {
    title: "Automotive",
    text: "AHCL is the distributor of Honda products in Saudi Arabia, handling the complete range of Honda products which now includes cars, motorcycles, marine, and power products.",
    keywords: ["Passenger", "Commercial", "Motorcycles"],
    image: "/automotive.png",
  },
  {
    title: "Marine",
    text: "ACHL offers Honda outboard marine engines and their accessories, covering a range of horsepower up to 250 HP. Our customers range from leisure (private and commercial) to fishing businesses.",
    keywords: ["Marine Engines"],
    image: "/marine.png",
  },
  {
    title: "Power Solutions",
    text: "AHCL offers power generators as a robust supplier of power solutions, with more than 30,000 units of generators sold to date. We are the distributor of Kirloskar Oil Engines, a leading brand in the field.",
    keywords: ["Tower Light", "Air Cooled", "Air Compressors"],
    image: "/power.png",
  },
  {
    title: "Agriculture",
    text: "Sonalika International tractors Ltd. is India's heavy duty tractor manufacturing company, producing best-selling tractors and well recognized in domestic and international market as the third largest player.",
    keywords: ["De-watering Pump", "Tractors"],
    image: "/agriculture.png",
  },
  {
    title: "Construction Equipment",
    text: "AHCL offers construction equipment, water pumps, and air compressors built for performance, reliability, and efficiency, backed by expert support and nationwide service.",
    keywords: ["Construction Equipment"],
    image: "/construction.png",
  },
  {
    title: "Material Handling",
    text: "AHCL offers reliable material handling equipment designed to improve efficiency, safety, and productivity across warehouses, logistics, and industrial operations.",
    keywords: ["Forklifts"],
    image: "/material.png",
  },
  {
    title: "Water Solutions",
    text: "AHCL provides reliable water solutions, including high-performance pumps and systems designed for efficient water supply, transfer, and management across residential, commercial, and industrial applications.",
    keywords: ["Water Pumps"],
    image: "/water.png",
  },
];

export default function ProductsDropdown({ isMobile }: { isMobile?: boolean }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeProduct = productsData[activeIndex];

  if (isMobile) {
    return (
      <div className="flex flex-col gap-6 w-full">
        {/* Titles Column */}
        <div className="flex flex-col gap-2">
          {productsData.map((product, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`text-left text-[0.9rem] font-medium transition-colors py-1 ${
                activeIndex === index ? "text-white" : "text-[#666]"
              }`}
            >
              {product.title}
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
                <span className="text-white text-[1rem] font-medium">{activeProduct.title}</span>
              </div>
              <p className="text-[#999] text-[0.85rem] leading-relaxed">
                {activeProduct.text}
              </p>
              <div className="flex flex-wrap gap-[8px] mt-1">
                {activeProduct.keywords.map((keyword, i) => (
                  <div
                    key={i}
                    className="text-white text-[0.7rem] font-medium py-[4px] px-[10px] rounded-[50px] bg-[#403838]"
                  >
                    {keyword}
                  </div>
                ))}
              </div>
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
          Our Products
        </p>
        <ul className="flex flex-col gap-[1rem]">
          {productsData.map((product, index) => (
            <li
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              className={`cursor-pointer transition-colors text-[0.9rem] font-normal ${
                activeIndex === index ? "text-white" : "text-[#666]"
              }`}
            >
              {product.title}
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
                <span className="text-[#FFF] text-[0.9rem] font-medium">
                  {activeProduct.title}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="10"
                  viewBox="0 0 13 10"
                  fill="none"
                >
                  <path
                    d="M12.6624 4.24708L8.57908 0.163749C8.46907 0.0574899 8.32171 -0.00130703 8.16877 2.20514e-05C8.01582 0.00135113 7.86951 0.0626998 7.76136 0.170855C7.6532 0.279009 7.59185 0.425316 7.59052 0.578265C7.5892 0.731213 7.64799 0.878564 7.75425 0.988582L10.8418 4.07617H0.583333C0.428624 4.07617 0.280251 4.13762 0.170854 4.24702C0.0614581 4.35642 0 4.50479 0 4.6595C0 4.81421 0.0614581 4.96258 0.170854 5.07198C0.280251 5.18137 0.428624 5.24283 0.583333 5.24283H10.8418L7.75425 8.33042C7.69854 8.38423 7.6541 8.44859 7.62352 8.51976C7.59295 8.59093 7.57686 8.66748 7.57619 8.74493C7.57551 8.82239 7.59027 8.8992 7.6196 8.97089C7.64894 9.04258 7.69225 9.10771 7.74702 9.16248C7.80179 9.21725 7.86692 9.26056 7.93861 9.2899C8.0103 9.31923 8.08711 9.33399 8.16457 9.33331C8.24202 9.33264 8.31857 9.31655 8.38974 9.28597C8.46091 9.2554 8.52527 9.21096 8.57908 9.15525L12.6624 5.07192C12.7718 4.96252 12.8332 4.81418 12.8332 4.6595C12.8332 4.50482 12.7718 4.35647 12.6624 4.24708Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="mb-[20px]">
                <p className="text-[#666] text-justify text-[0.9rem] font-medium leading-relaxed">
                  {activeProduct.text}
                </p>
              </div>

              {/* Keywords */}
              <div className="grid grid-cols-2 gap-[10px] w-max">
                {activeProduct.keywords.map((keyword, i) => (
                  <div
                    key={i}
                    className="text-[#FFF] text-center text-[0.75rem] font-medium py-[4px] px-[10px] rounded-[50px] bg-[#403838]"
                  >
                    {keyword}
                  </div>
                ))}
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
              src={activeProduct.image}
              alt={activeProduct.title}
              fill
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
