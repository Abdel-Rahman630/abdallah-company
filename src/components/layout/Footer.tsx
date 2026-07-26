"use client";

import { useLanguage } from "@/providers/LanguageProvider";
import { useOurProducts } from "@/hooks/home/useOurProducts";
import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterContact from "./FooterContact";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  const { t } = useLanguage();
  const { products, loading } = useOurProducts();
  return (
    <footer className="bg-[#231F20] py-[50px] md:py-[80px]">
      <div className="container mx-auto">
        {/* Top Section */}
        <div className="pb-[64px] border-b border-[rgba(255,255,255,0.30)] grid grid-cols-1 md:grid-cols-4 gap-8">
          <FooterBrand t={t} />
          <FooterLinks t={t} products={products} loading={loading} />
          <FooterContact t={t} />
        </div>

        {/* Bottom Section */}
        <FooterBottom t={t} />
      </div>
    </footer>
  );
}
