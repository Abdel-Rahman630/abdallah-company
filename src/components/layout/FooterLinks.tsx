import React from "react";
import Link from "next/link";

export default function FooterLinks({
  t,
  products,
  loading,
}: {
  t: (key: string) => string;
  products: any[];
  loading: boolean;
}) {
  return (
    <div className="grid grid-cols-2 gap-8 md:col-span-2">
      {/* Column 2: Quick Links */}
      <div>
        <h2 className="text-[#FFF] text-[1rem] font-bold uppercase pb-[1rem] relative mb-[1rem]">
          {t("footer.quickLinks")}
          <span className="absolute bottom-0 left-0 w-[32px] h-[2px] bg-[#D0A42A]"></span>
        </h2>
        <ul className="space-y-[12px]">
          <li>
            <Link href="/" className="text-[rgba(255,255,255,0.70)] text-[0.9rem] font-normal hover:text-white transition">
              {t("footer.home")}
            </Link>
          </li>
          <li>
            <Link href="/about-us" className="text-[rgba(255,255,255,0.70)] text-[0.9rem] font-normal hover:text-white transition">
              {t("footer.about")}
            </Link>
          </li>
          <li>
            <Link href="/news" className="text-[rgba(255,255,255,0.70)] text-[0.9rem] font-normal hover:text-white transition">
              {t("footer.news")}
            </Link>
          </li>
          <li>
            <Link href="/careers" className="text-[rgba(255,255,255,0.70)] text-[0.9rem] font-normal hover:text-white transition">
              {t("footer.careers")}
            </Link>
          </li>
          <li>
            <Link href="https://ahcl-store.com.sa/ar" target="_blank" className="text-[rgba(255,255,255,0.70)] text-[0.9rem] font-normal hover:text-white transition">
              {t("footer.store")}
            </Link>
          </li>
        </ul>
      </div>

      {/* Column 3: Services */}
      <div>
        <h2 className="text-[#FFF] text-[1rem] font-bold uppercase pb-[1rem] relative mb-[1rem]">
          {t("footer.division")}
          <span className="absolute bottom-0 left-0 w-[32px] h-[2px] bg-[#D0A42A]"></span>
        </h2>
        <ul className="space-y-[12px]">
          {loading ? (
            <li>
              <span className="text-[rgba(255,255,255,0.70)] text-[0.9rem] font-normal hover:text-white transition">
                ...
              </span>
            </li>
          ) : (
            products.map((product) => (
              <li key={product.id}>
                <Link
                  href={`/divisions/${product.slug}#${product.slug}`}
                  className="text-[rgba(255,255,255,0.70)] text-[0.9rem] font-normal hover:text-white transition"
                >
                  {product.name}
                </Link>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
