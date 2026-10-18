import Image from "next/image";
import { PageBannerProps } from "@/types/models";

export default function PageBanner({ image, title, alt }: PageBannerProps) {
  const displayImage = image || "/contactanner.png";
  const displayTitle = title || "";

  return (
    <section className="relative w-full h-[346px]" aria-label={displayTitle}>
      <Image
        src={displayImage}
        alt={alt ?? displayTitle}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#000000] opacity-20 z-10" aria-hidden="true" />
      <div className="container mx-auto h-full relative z-20">
        <h1 className="absolute bottom-[50px] start-4 lg:start-0 text-[#FFF] text-[3rem] font-bold z-20 capitalize">
          {displayTitle}
        </h1>
      </div>
    </section>
  );
}
