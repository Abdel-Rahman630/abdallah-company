export default function NewsCardSkeleton() {
  return (
    <div
      className="flex flex-col md:flex-row gap-[40px] lg:gap-[80px] items-center p-4 -m-4"
      role="status"
      aria-label="Loading news article"
    >
      {/* Image placeholder */}
      <div className="shimmer shrink-0 w-full md:w-[200px] lg:w-[523px] h-[259px] md:h-[359px] rounded-[5px]" />

      {/* Content placeholder */}
      <div className="flex flex-col justify-center flex-1 w-full gap-[14px]">
        {/* Title */}
        <div className="shimmer h-[28px] w-[80%] rounded-[4px]" />
        <div className="shimmer h-[28px] w-[55%] rounded-[4px]" />
        {/* Date */}
        <div className="shimmer h-[16px] w-[120px] rounded-[4px]" />
        {/* Paragraph lines */}
        <div className="shimmer h-[14px] w-full rounded-[4px]" />
        <div className="shimmer h-[14px] w-full rounded-[4px]" />
        <div className="shimmer h-[14px] w-[70%] rounded-[4px]" />
        {/* Read more */}
        <div className="shimmer h-[14px] w-[90px] rounded-[4px] mt-[8px]" />
      </div>
    </div>
  );
}
