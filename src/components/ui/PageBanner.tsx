import Image from "next/image";

interface PageBannerProps {
  image: string;
  title: string;
  alt?: string;
}

export default function PageBanner({ image, title, alt }: PageBannerProps) {
  return (
    <section className="relative w-full h-[366px]" aria-label={title}>
      <Image
        src={image}
        alt={alt ?? title}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#000000] opacity-20 z-10" aria-hidden="true" />
      <div className="container mx-auto h-full relative z-20">
        <h1 className="absolute bottom-[50px] left-4 lg:left-0 text-[#FFF] text-[3rem] font-bold z-20 capitalize">
          {title}
        </h1>
      </div>
    </section>
  );
}
