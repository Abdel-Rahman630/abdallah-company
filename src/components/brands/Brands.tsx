"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Brand } from "@/types/models";
import { RevealText, RevealImage } from "@/components/ui/ScrollReveal";
import { useEffect, useRef, useState } from "react";

/* ─── Social icon map ─── */
function SocialIcon({ type }: { type: string }) {
  const t = type?.toLowerCase();
  if (t === "linkedin")
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M16.8675 8.13075C15.9297 7.19303 14.6579 6.66623 13.3317 6.66623C12.0055 6.66623 10.7336 7.19303 9.79585 8.13075C8.85809 9.06848 8.33126 10.3403 8.33126 11.6664V17.5H11.6649V11.6664C11.6649 11.2244 11.8405 10.8005 12.1531 10.4879C12.4656 10.1753 12.8896 9.9997 13.3317 9.9997C13.7737 9.9997 14.1977 10.1753 14.5103 10.4879C14.8229 10.8005 14.9985 11.2244 14.9985 11.6664V17.5H18.3321V11.6664C18.3321 10.3403 17.8052 9.06848 16.8675 8.13075Z"
          stroke="#1E1E1E"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M4.99766 7.49959H1.66406V17.5H4.99766V7.49959Z"
          stroke="#1E1E1E"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M3.33086 4.99949C4.25141 4.99949 4.99766 4.25327 4.99766 3.33275C4.99766 2.41224 4.25141 1.66602 3.33086 1.66602C2.41031 1.66602 1.66406 2.41224 1.66406 3.33275C1.66406 4.25327 2.41031 4.99949 3.33086 4.99949Z"
          stroke="#1E1E1E"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  if (t === "instagram")
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <g clipPath="url(#ig-clip)">
          <path
            d="M10 1.8025C12.67 1.8025 12.9867 1.8125 14.0417 1.86083C16.7517 1.98417 18.0175 3.27 18.1408 5.96C18.1892 7.01417 18.1983 7.33083 18.1983 10.0008C18.1983 12.6717 18.1883 12.9875 18.1408 14.0417C18.0167 16.7292 16.7542 18.0175 14.0417 18.1408C12.9867 18.1892 12.6717 18.1992 10 18.1992C7.33 18.1992 7.01333 18.1892 5.95917 18.1408C3.2425 18.0167 1.98333 16.725 1.86 14.0408C1.81167 12.9867 1.80167 12.6708 1.80167 10C1.80167 7.33 1.8125 7.01417 1.86 5.95917C1.98417 3.27 3.24667 1.98333 5.95917 1.86C7.01417 1.8125 7.33 1.8025 10 1.8025ZM10 0C7.28417 0 6.94417 0.0116667 5.8775 0.06C2.24583 0.226667 0.2275 2.24167 0.0608333 5.87667C0.0116667 6.94417 0 7.28417 0 10C0 12.7158 0.0116667 13.0567 0.06 14.1233C0.226667 17.755 2.24167 19.7733 5.87667 19.94C6.94417 19.9883 7.28417 20 10 20C12.7158 20 13.0567 19.9883 14.1233 19.94C17.7517 19.7733 19.775 17.7583 19.9392 14.1233C19.9883 13.0567 20 12.7158 20 10C20 7.28417 19.9883 6.94417 19.94 5.8775C19.7767 2.24917 17.7592 0.2275 14.1242 0.0608333C13.0567 0.0116667 12.7158 0 10 0ZM10 4.865C7.16417 4.865 4.865 7.16417 4.865 10C4.865 12.8358 7.16417 15.1358 10 15.1358C12.8358 15.1358 15.135 12.8367 15.135 10C15.135 7.16417 12.8358 4.865 10 4.865ZM10 13.3333C8.15917 13.3333 6.66667 11.8417 6.66667 10C6.66667 8.15917 8.15917 6.66667 10 6.66667C11.8408 6.66667 13.3333 8.15917 13.3333 10C13.3333 11.8417 11.8408 13.3333 10 13.3333ZM15.3383 3.4625C14.675 3.4625 14.1375 4 14.1375 4.6625C14.1375 5.325 14.675 5.8625 15.3383 5.8625C16.0008 5.8625 16.5375 5.325 16.5375 4.6625C16.5375 4 16.0008 3.4625 15.3383 3.4625Z"
            fill="#1E1E1E"
          />
        </g>
        <defs>
          <clipPath id="ig-clip">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  if (t === "facebook")
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M12.5021 1.66602H15.0019V4.99962H12.5021C12.2811 4.99962 12.0692 5.08742 11.9129 5.24371C11.7566 5.40001 11.6688 5.61198 11.6688 5.83302V8.33322H15.0019L14.1687 11.6668H11.6688V18.334H8.33576V11.6668H5.83594V8.33322H8.33576V5.83302C8.33576 4.72786 8.77471 3.66797 9.55606 2.8865C10.3374 2.10504 11.3971 1.66602 12.5021 1.66602Z"
          stroke="#1E1E1E"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  // Default: website / globe icon
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="8.25" stroke="#1E1E1E" strokeWidth="1.5"/>
      <ellipse cx="10" cy="10" rx="3.25" ry="8.25" stroke="#1E1E1E" strokeWidth="1.5"/>
      <path d="M1.75 7.5h16.5M1.75 12.5h16.5" stroke="#1E1E1E" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

/* ─── Brand Slide Card ─── */
function BrandCard({
  brand,
  active,
  onClick,
}: {
  brand: Brand;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center w-[200px] h-[150px] rounded-[5px] bg-white cursor-pointer transition-all duration-300 shrink-0 border ${
        active
          ? "border-b-4 border-[#D1A52A]"
          : "border-[#DEDEDE] hover:border-b-4 hover:border-[#D1A52A]"
      }`}
      aria-pressed={active}
      aria-label={brand.name}
    >
      <div className="relative w-[150px] h-[100px] mb-[6px]">
        <Image
          src={brand.logo || "/bg.png"}
          alt={brand.name}
          fill
          className="object-contain"
          sizes="150px"
          unoptimized
        />
      </div>
      <span className="text-[#231F20] text-center text-[1rem] font-bold leading-tight line-clamp-1 px-2">
        {brand.name}
      </span>
    </button>
  );
}

/* ─── Brand Detail Section ─── */
function BrandDetail({ brand }: { brand: Brand }) {
  const images = brand.images && brand.images.length > 0 ? brand.images : [];

  // Format social links object into array of {type, url}
  const socials = Object.entries(brand.social_links || {})
    .filter(([_, url]) => url)
    .map(([type, url]) => ({ type, url: url as string }));

  return (
    <div className="flex flex-col lg:flex-row gap-[52px] items-start">
      <RevealImage className="w-full lg:w-[450px] shrink-0 h-[400px] lg:h-[500px] rounded-[10px] overflow-hidden bg-gray-100">
        {images.length > 0 ? (
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            className="w-full h-full custom-swiper"
            loop={images.length > 1}
          >
            {images.map((img) => (
              <SwiperSlide key={img.id}>
                <div className="relative w-full h-full">
                  <Image
                    src={img.url}
                    alt={brand.title}
                    fill
                    className="object-cover object-right"
                    sizes="(max-width:1024px) 100vw, 450px"
                    unoptimized
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            No image available
          </div>
        )}
      </RevealImage>

      <div className="flex-1">
        <RevealText>
          <h3 className="text-[#1E1E1E] text-[2rem] font-bold mb-[24px]">
            {brand.title}
          </h3>
        </RevealText>
        <RevealText delay={0.1}>
          <p 
                  className="text-[#666] text-[1rem] font-normal leading-relaxed whitespace-pre-wrap"
                  dangerouslySetInnerHTML={{ __html: brand.description || "" }}
                />
        </RevealText>

        {socials.length > 0 && (
          <RevealText delay={0.2}>
            <p className="mt-[1rem] text-[#949494] text-[0.9rem] font-semibold uppercase mb-[1rem] tracking-wide">
              Brand Social Media
            </p>
            <ul className="flex gap-[12px] flex-wrap">
              {socials.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-[40px] h-[40px] rounded-full border border-[#E5E5E5] bg-white transition-colors duration-300 hover:bg-gray-50"
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
export default function Brands({ brands }: { brands: Brand[] }) {
  const [activeBrand, setActiveBrand] = useState<Brand | null>(null);
  const detailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (brands?.length > 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setActiveBrand((prev) => prev ?? brands[0]);
    }
  }, [brands]);

  const handleBrandClick = (brand: Brand) => {
    setActiveBrand(brand);
    setTimeout(() => {
      detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  if (!brands || brands.length === 0) return null;

  return (
    <>
      {/* ── Brands Slider Section ── */}
      <section className="pb-[80px]">
        <div className="container mx-auto">
          <RevealText>
            <h2 className="text-[#231F20] text-[2.5rem] font-bold mb-[40px]">
              Brands
            </h2>
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
        <section ref={detailRef} className="pb-[80px] lg:pb-[120px]">
          <div className="container mx-auto">
            <BrandDetail brand={activeBrand} />
          </div>
        </section>
      )}
    </>
  );
}
