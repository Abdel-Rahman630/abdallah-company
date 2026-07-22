import Image from "next/image";
import Link from "next/link";
import ArrowLink from "@/components/ui/ArrowLink";
import { EventCardProps } from "@/types/models";

export default function EventCard({ id = 1, image, date, month, title }: EventCardProps) {
  return (
    <Link href={`/events/${id}`} className="block group relative w-[260px] h-[222px] rounded-[5px] overflow-hidden cursor-pointer">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="260px"
      />
      
      {/* Default Overlay */}
      <div className="absolute inset-0 bg-event-overlay transition-opacity duration-500" />
      
      {/* Hover Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Date Badge */}
      <span className="absolute top-[24px] left-0 w-[109px] h-[47px] rounded-r-[5px] border-t border-r border-b border-white/30 bg-white/10 backdrop-blur-[5px] text-white flex items-center justify-center gap-[8px] z-10">
        <span className="text-[2rem] font-bold leading-none">{date}</span>
        <span className="text-[0.75rem] font-medium uppercase leading-none mt-1">{month}</span>
      </span>
      
      {/* Title */}
      <h4 className="absolute bottom-[16px] left-1/2 -translate-x-1/2 w-[90%] text-white text-[1rem] font-semibold transition-transform duration-500 group-hover:-translate-y-8 z-10">
        {title}
      </h4>
      
      {/* Hover Link */}
      <div className="absolute bottom-[16px] left-[16px] w-full flex opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-10">
        <span className="inline-flex items-center gap-[10px] text-white text-[0.6rem] font-normal uppercase underline">
          <svg
            className="transition-transform duration-500 group-hover:translate-x-1 shrink-0"
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
          view more
        </span>
      </div>
    </Link>
  );
}
