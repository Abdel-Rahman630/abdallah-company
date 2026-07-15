"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useAutomotiveBrands, type Brand, type SocialLink } from "@/hooks/automotive/useAutomotiveBrands";
import { RevealText, RevealImage } from "@/components/ui/ScrollReveal";
import { useEffect, useRef, useState } from "react";

/* ─── Social icon map ─── */
function SocialIcon({ type }: { type: string }) {
  const t = type?.toLowerCase();
  if (t === "linkedin")
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M16.8675 8.13075C15.9297 7.19303 14.6579 6.66623 13.3317 6.66623C12.0055 6.66623 10.7336 7.19303 9.79585 8.13075C8.85809 9.06848 8.33126 10.3403 8.33126 11.6664V17.5H11.6649V11.6664C11.6649 11.2244 11.8405 10.8005 12.1531 10.4879C12.4656 10.1753 12.8896 9.9997 13.3317 9.9997C13.7737 9.9997 14.1977 10.1753 14.5103 10.4879C14.8229 10.8005 14.9985 11.2244 14.9985 11.6664V17.5H18.3321V11.6664C18.3321 10.3403 17.8052 9.06848 16.8675 8.13075Z" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round"/>
        <path d="M4.99766 7.49959H1.66406V17.5H4.99766V7.49959Z" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round"/>
        <path d="M3.33086 4.99949C4.25141 4.99949 4.99766 4.25327 4.99766 3.33275C4.99766 2.41224 4.25141 1.66602 3.33086 1.66602C2.41031 1.66602 1.66406 2.41224 1.66406 3.33275C1.66406 4.25327 2.41031 4.99949 3.33086 4.99949Z" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    );
  if (t === "instagram")
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <g clipPath="url(#ig-clip)">
          <path d="M10 1.8025C12.67 1.8025 12.9867 1.8125 14.0417 1.86083C16.7517 1.98417 18.0175 3.27 18.1408 5.96C18.1892 7.01417 18.1983 7.33083 18.1983 10.0008C18.1983 12.6717 18.1883 12.9875 18.1408 14.0417C18.0167 16.7292 16.7542 18.0175 14.0417 18.1408C12.9867 18.1892 12.6717 18.1992 10 18.1992C7.33 18.1992 7.01333 18.1892 5.95917 18.1408C3.2425 18.0167 1.98333 16.725 1.86 14.0408C1.81167 12.9867 1.80167 12.6708 1.80167 10C1.80167 7.33 1.8125 7.01417 1.86 5.95917C1.98417 3.27 3.24667 1.98333 5.95917 1.86C7.01417 1.8125 7.33 1.8025 10 1.8025ZM10 0C7.28417 0 6.94417 0.0116667 5.8775 0.06C2.24583 0.226667 0.2275 2.24167 0.0608333 5.87667C0.0116667 6.94417 0 7.28417 0 10C0 12.7158 0.0116667 13.0567 0.06 14.1233C0.226667 17.755 2.24167 19.7733 5.87667 19.94C6.94417 19.9883 7.28417 20 10 20C12.7158 20 13.0567 19.9883 14.1233 19.94C17.7517 19.7733 19.775 17.7583 19.9392 14.1233C19.9883 13.0567 20 12.7158 20 10C20 7.28417 19.9883 6.94417 19.94 5.8775C19.7767 2.24917 17.7592 0.2275 14.1242 0.0608333C13.0567 0.0116667 12.7158 0 10 0ZM10 4.865C7.16417 4.865 4.865 7.16417 4.865 10C4.865 12.8358 7.16417 15.1358 10 15.1358C12.8358 15.1358 15.135 12.8367 15.135 10C15.135 7.16417 12.8358 4.865 10 4.865ZM10 13.3333C8.15917 13.3333 6.66667 11.8417 6.66667 10C6.66667 8.15917 8.15917 6.66667 10 6.66667C11.8408 6.66667 13.3333 8.15917 13.3333 10C13.3333 11.8417 11.8408 13.3333 10 13.3333ZM15.3383 3.4625C14.675 3.4625 14.1375 4 14.1375 4.6625C14.1375 5.325 14.675 5.8625 15.3383 5.8625C16.0008 5.8625 16.5375 5.325 16.5375 4.6625C16.5375 4 16.0008 3.4625 15.3383 3.4625Z" fill="#1E1E1E"/>
        </g>
        <defs><clipPath id="ig-clip"><rect width="20" height="20" fill="white"/></clipPath></defs>
      </svg>
    );
  if (t === "facebook")
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M12.5021 1.66602H15.0019V4.99962H12.5021C12.2811 4.99962 12.0692 5.08742 11.9129 5.24371C11.7566 5.40001 11.6688 5.61198 11.6688 5.83302V8.33322H15.0019L14.1687 11.6668H11.6688V18.334H8.33576V11.6668H5.83594V8.33322H8.33576V5.83302C8.33576 4.72786 8.77471 3.66797 9.55606 2.8865C10.3374 2.10504 11.3971 1.66602 12.5021 1.66602Z" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    );
  // Default: website / globe
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <g clipPath="url(#web-clip)">
        <path d="M9.99994 20C15.5139 20 19.9999 15.514 19.9999 10.0001C19.9999 4.48603 15.5139 0 9.99994 0C4.48597 0 0 4.48603 0 10.0001C0 15.514 4.48597 20 9.99994 20ZM3.4801 14.9371C4.27246 14.6255 5.27009 14.3771 6.39142 14.2069C6.54366 15.1209 6.74572 15.9683 6.99481 16.7157C7.12529 17.1072 7.26268 17.4527 7.40462 17.7597C5.82869 17.2312 4.46549 16.2352 3.4801 14.9371ZM1.81817 10.0001C1.81817 8.8034 2.07647 7.66595 2.54005 6.64051C3.52325 7.06141 4.76524 7.38705 6.16439 7.59729C6.09484 8.39632 6.0602 9.19801 6.06057 10.0001C6.06057 10.8208 6.09627 11.6264 6.16439 12.4028C4.76524 12.6131 3.52319 12.9387 2.54011 13.3596C2.07647 12.3342 1.81817 11.1967 1.81817 10.0001ZM9.99994 1.81817C10.1957 1.81817 10.7662 2.31702 11.2803 3.85925C11.4916 4.49319 11.6653 5.21215 11.7994 5.99063C11.2004 6.03232 10.6001 6.05314 9.9997 6.05305C9.38728 6.05305 8.78479 6.03154 8.2005 5.99063C8.33456 5.21215 8.50831 4.49325 8.71964 3.85931C9.2337 2.31702 9.80418 1.81817 9.99994 1.81817ZM9.9997 7.87123C10.6922 7.87123 11.3711 7.84577 12.0287 7.79723C12.0894 8.50662 12.1211 9.24516 12.1211 10.0001C12.1211 10.755 12.0894 11.4934 12.0288 12.2028C11.3536 12.1532 10.6769 12.1286 9.99994 12.1288C9.30746 12.1288 8.62868 12.1542 7.97116 12.2028C7.91044 11.4934 7.87874 10.7549 7.87874 10.0001C7.87874 9.24516 7.91044 8.50668 7.97116 7.79723C8.6462 7.84676 9.32284 7.87145 9.9997 7.87123ZM18.1817 10.0001C18.1817 11.1967 17.9234 12.334 17.4598 13.3595C16.4766 12.9386 15.2346 12.613 13.8355 12.4028C13.905 11.6038 13.9397 10.8021 13.9393 10.0001C13.9393 9.17922 13.9036 8.37365 13.8355 7.59723C15.2346 7.38699 16.4766 7.06129 17.4597 6.64032C17.9234 7.66583 18.1817 8.80334 18.1817 10.0001ZM9.99994 18.1818C9.80418 18.1818 9.2337 17.6829 8.7197 16.1408C8.50837 15.5068 8.33462 14.7879 8.2005 14.0094C8.7994 13.9676 9.39958 13.9468 9.99994 13.9469C10.6125 13.9469 11.215 13.9685 11.7994 14.0094C11.6653 14.7879 11.4916 15.5068 11.2803 16.1408C10.7662 17.683 10.1958 18.1818 9.99994 18.1818ZM12.5954 17.7597C12.7373 17.4527 12.8747 17.1072 13.0051 16.7157C13.2543 15.9683 13.4563 15.1209 13.6086 14.2069C14.7298 14.3771 15.7274 14.6254 16.5198 14.9371C15.5345 16.2351 14.1713 17.2311 12.5954 17.7597ZM16.5197 5.06282C15.7274 5.37445 14.7298 5.62288 13.6085 5.793C13.4563 4.87906 13.2543 4.03167 13.0051 3.28428C12.8747 2.89283 12.7373 2.54732 12.5953 2.24029C14.1712 2.76889 15.5343 3.76483 16.5197 5.06282ZM7.40462 2.24035C7.26268 2.54726 7.12535 2.89283 6.99481 3.28428C6.74572 4.03179 6.54366 4.87912 6.39142 5.79312C5.27009 5.62294 4.27246 5.37457 3.4801 5.063C4.46543 3.76495 5.82863 2.76883 7.40462 2.24035Z" fill="#1E1E1E"/>
      </g>
      <defs><clipPath id="web-clip"><rect width="20" height="20" fill="white"/></clipPath></defs>
    </svg>
  );
}

/* ─── Brand Slide Card ─── */
function BrandCard({ brand, active, onClick }: { brand: Brand; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center w-[200px] h-[150px] rounded-[5px] bg-white cursor-pointer transition-all duration-300 shrink-0 border ${
        active ? "border-b-4 border-[#D1A52A]" : "border-[#DEDEDE] hover:border-b-4 hover:border-[#D1A52A]"
      }`}
      aria-pressed={active}
      aria-label={brand.title}
    >
      <div className="relative w-[150px] h-[100px] mb-[6px]">
        <Image
          src={brand.logo || brand.image || "/honda.png"}
          alt={brand.title}
          fill
          className="object-contain"
          sizes="150px"
          unoptimized
        />
      </div>
      <span className="text-[#231F20] text-center text-[1rem] font-bold leading-tight line-clamp-1 px-2">
        {brand.title}
      </span>
    </button>
  );
}

/* ─── Brand Detail Section ─── */
function BrandDetail({ brand }: { brand: Brand }) {
  return (
    <div className="flex flex-col lg:flex-row gap-[52px] items-start">
      {/* Left – image */}
      <RevealImage className="w-full lg:w-[350px] shrink-0 h-[500px] rounded-[10px] overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src={brand.image}
            alt={brand.title}
            fill
            className="object-cover"
            sizes="(max-width:1024px) 100vw, 350px"
            unoptimized
          />
        </div>
      </RevealImage>

      {/* Right – content */}
      <div className="flex-1">
        <RevealText>
          <h3 className="text-[#1E1E1E] text-[2rem] font-bold mb-[24px]">{brand.title}</h3>
        </RevealText>
        <RevealText delay={0.1}>
          <p className="text-[#666] text-[1rem] font-normal mb-[24px] leading-relaxed">
            {brand.description}
          </p>
        </RevealText>

        {brand.social_links && brand.social_links.length > 0 && (
          <RevealText delay={0.2}>
            <p className="text-[#949494] text-[0.9rem] font-semibold uppercase mb-[1rem] tracking-wide">
              Brand Social Media
            </p>
            <ul className="flex gap-[12px] flex-wrap">
              {brand.social_links.map((link: SocialLink, i: number) => (
                <li key={i}>
                  <Link
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-[40px] h-[40px] rounded-full border border-[#E5E5E5] bg-white hover:border-[#D1A52A] transition-colors duration-300"
                    aria-label={link.type}
                  >
                    <SocialIcon type={link.type} />
                  </Link>
                </li>
              ))}
            </ul>
          </RevealText>
        )}
      </div>
    </div>
  );
}

/* ─── Main Brands Section ─── */
export default function AutomotiveBrands() {
  const { brands, loading } = useAutomotiveBrands();
  const [activeBrand, setActiveBrand] = useState<Brand | null>(null);
  const detailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (brands.length > 0 && !activeBrand) {
      setActiveBrand(brands[0]);
    }
  }, [brands, activeBrand]);

  const handleBrandClick = (brand: Brand) => {
    setActiveBrand(brand);
    // Smooth scroll to detail section
    setTimeout(() => {
      detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  if (loading) {
    return (
      <section className="pb-[80px] lg:pb-[120px]">
        <div className="container mx-auto">
          <div className="h-8 w-32 shimmer rounded mb-8" />
          <div className="flex gap-4 overflow-hidden">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="shimmer w-[200px] h-[150px] rounded-[5px] shrink-0" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (brands.length === 0) return null;

  return (
    <>
      {/* ── Brands Slider Section ── */}
      <section className="pb-[80px]">
        <div className="container mx-auto">
          <RevealText>
            <h2 className="text-[#231F20] text-[2.5rem] font-bold mb-[40px]">Brands</h2>
          </RevealText>

          <div className="overflow-hidden">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView="auto"
              loop={brands.length > 4}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              className="w-full !overflow-visible"
            >
              {brands.map((brand) => (
                <SwiperSlide key={brand.id} className="!w-[200px]">
                  <BrandCard
                    brand={brand}
                    active={activeBrand?.id === brand.id}
                    onClick={() => handleBrandClick(brand)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* ── Brand Detail Section ── */}
      {activeBrand && (
        <section
          ref={detailRef}
          className="pb-[80px] lg:pb-[120px]"
        >
          <div className="container mx-auto">
            <BrandDetail brand={activeBrand} />
          </div>
        </section>
      )}
    </>
  );
}
