"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { RevealText } from "@/components/ui/ScrollReveal";
import { useLanguage } from "@/providers/LanguageProvider";
import { Division } from "@/types/models";
import { truncateText, normalizeImageUrl } from "@/lib/utils";
import { useOurProducts } from "@/hooks/home/useOurProducts";
import ArrowLink from "@/components/ui/ArrowLink";

export default function OurProducts({ initialProducts = [] }: { initialProducts?: Division[] }) {
  const { t } = useLanguage();
  const { products, activeIndex, setActiveIndex, active, loading } = useOurProducts(initialProducts);

  if (loading || !products || products.length === 0) {
    return (
      <section id="products" className="relative overflow-hidden py-[50px] min-h-[500px] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-[#D1A52A] border-t-transparent rounded-full animate-spin"></div>
      </section>
    );
  }

  const activeImage = active?.home_image ? normalizeImageUrl(active.home_image) : "";

  return (
    <section id="products" className="relative overflow-hidden py-[50px]">
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
          {activeImage && (
            <Image
              src={activeImage}
              alt={active.title || active.name}
              fill
              className="object-cover md:object-center ltr:object-right rtl:object-left"
              priority
              sizes="100vw"
              unoptimized
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-overlay-gradient" />

      {/* Content */}
      <div className="relative z-20 container mx-auto">
        {/* Header */}
        <RevealText delay={0.1}>
          <div className="mb-[32px] text-center">
            <p className="mb-2 text-white text-center text-[1.75rem] font-normal">
              {t("home.ourProducts")}
            </p>
            <h2 className="text-white text-[2rem] font-bold">
              {active?.slogan || t("home.productsSubtitle")}
            </h2>
          </div>
        </RevealText>

        {/* Main layout: Pagination then Content below */}
        <div className="flex flex-col">
          {/* Pagination Column */}
          <RevealText delay={0.2}>
            <nav className="flex flex-col gap-4 mb-[60px] md:mb-[90px]">
              {products.map((product, index) => (
                <button
                  type="button"
                  key={product.id || index}
                  onClick={() => setActiveIndex(index)}
                  className={`text-white text-start transition-all duration-500 focus:outline-none w-max px-4 py-2 cursor-pointer ${
                    activeIndex === index
                      ? "text-[1.5rem] font-semibold rounded-[5px] bg-white/20 backdrop-blur-[40px]"
                      : "text-[1.25rem] font-medium"
                  }`}
                >
                  {product.name}
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
                    {active?.title}
                  </h3>
                  <p className="md:mb-0 mb-6 text-white text-justify text-[1rem] font-normal">
                    {truncateText(active?.description, 200)}
                  </p>
                </div>
                <ArrowLink href={`/divisions/${active?.slug || active?.id}#${active?.slug || active?.id}`}>
                  {t("home.moreAbout")} {active?.title || active?.name}
                </ArrowLink>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
