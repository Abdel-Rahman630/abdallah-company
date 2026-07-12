import Image from "next/image";
import Link from "next/link";
import ArrowLink from "../ui/ArrowLink";

interface NewsCardProps {
  image: string;
  date: string;
  title: string;
  paragraph: string;
  readMore?: boolean;
  id?: string | number;
}

export default function NewsCard({ image, date, title, paragraph, readMore, id = 1 }: NewsCardProps) {
  const content = (
    <div className="flex flex-col md:flex-row gap-[40px] lg:gap-[80px] items-center">
      {/* Image */}
      <div className="relative shrink-0 w-full md:w-[200px] lg:w-[523px] h-[259px] md:h-[359px] rounded-[5px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 200px, 523px"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center flex-1">
        <h3 className="text-[#231F20] text-[1.5rem] font-bold mb-[1rem]">
          {title}
        </h3>
        <span className="block text-[#D0A42A] text-[0.9rem] font-bold mb-[24px] md:mb-[32px]">
          {date}
        </span>
        <p className="text-[#727272] text-[1rem] font-normal leading-[1.7] mb-[24px] md:mb-[32px]">
          {paragraph}
        </p>
        {readMore && <ArrowLink href={`/news/${id}`} as="span" color="black" className="font-normal">Read More</ArrowLink>}
      </div>
    </div>
  );

  return id ? <Link href={`/news/${id}`} className="block group p-4 -m-4 rounded-xl">{content}</Link> : content;
}
