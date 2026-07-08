"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { RevealText } from "@/components/ui/ScrollReveal";
import ArrowLink from "@/components/ui/ArrowLink";

const productsData = [
  {
    title: "Automotive",
    image: "/automotive-demo.png",
    description:
      "AHCL is the distributor of Honda products in Saudi Arabia, handling the complete range of Honda products which now includes cars, motorcycles, marine, and power products.",
  },
  {
    title: "Marine",
    image: "/marine-demo.png",
    description:
      "ACHL offers Honda outboard marine engines and their  accessories, covering a range of horsepower up to 250 HP. Our customers range from leisure (private and  commercial) to fishing businesses.",
  },
  {
    title: "Power Solutions",
    image: "/power-demo.png",
    description:
      "AHCL offers power generators as a robust supplier of  power solutions, with more than 30,000 units of  generators sold to date. We are the distributor of  Kirloskar Oil Engines, a leading brand in the field.",
  },
  {
    title: "Agriculture",
    image: "/agriculture-demo.png",
    description:
      "Sonalika International tractors Ltd. is India's heavy duty tractor manufacturing  company, producing best-selling tractors and well recognized in domestic and  international market as the third largest player.",
  },
  {
    title: "Equipment",
    image: "/Equipment-demo.png",
    description:
      "AHCL offers construction equipment, water pumps, and air compressors built for performance, reliability, and efficiency, backed by expert support and nationwide service.",
  },
  {
    title: "Material Handling",
    image: "/material-demo.png",
    description:
      "AHCL offers reliable material handling equipment designed to improve efficiency, safety, and productivity across warehouses, logistics, and industrial operations.",
  },
];

export default function OurProducts() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = productsData[activeIndex];

  return (
    <section
      id="products"
      className="relative overflow-hidden py-[50px]"
    >
      {/* Background image with fade transition */}
      <AnimatePresence mode="sync">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={active.image}
            alt={active.title}
            fill
            className="object-cover md:object-center object-right"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none bg-overlay-gradient"
      />

      {/* Content */}
      <div className="relative z-20 container mx-auto">
        {/* Header */}
        <RevealText delay={0.1}>
          <div className="mb-[32px] text-center">
            <p className="mb-2 text-white text-center text-[1.75rem] font-normal">
              Our Products
            </p>
            <h2 className="text-white text-[2rem] font-bold">
              Solutions for Every Industry
            </h2>
          </div>
        </RevealText>

        {/* Main layout: Pagination then Content below */}
        <div className="flex flex-col">
          {/* Pagination Column */}
          <RevealText delay={0.2}>
            <nav className="flex flex-col gap-4 mb-[60px] md:mb-[90px]">
              {productsData.map((product, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`text-left transition-all duration-500 focus:outline-none cursor-pointer w-max px-4 py-2 ${
                    activeIndex === index
                      ? "text-white text-[1.5rem] font-semibold rounded-[5px] bg-white/10 backdrop-blur-[10px]"
                      : "text-[#949494] text-[1.25rem] font-medium"
                  }`}
                >
                  {product.title}
                </button>
              ))}
            </nav>
          </RevealText>

          {/* Content Panel */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="flex md:flex-row flex-col justify-between md:items-end items-start"
              >
                {/* Left: Title + Desc */}
                <div className="w-full md:w-[50%]">
                    <h3 className="text-white text-[2rem] font-bold uppercase mb-4">
                      {active.title}
                    </h3>
                    <p className="md:mb-0 mb-6 text-white text-justify text-[1rem] font-normal">
                      {active.description}
                    </p>
                </div>
                  <ArrowLink href="#">More about {active.title}</ArrowLink>

              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
