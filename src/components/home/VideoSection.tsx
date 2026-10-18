import type { HeroSectionFields } from "@/types/models";

interface VideoSectionProps {
  fields?: HeroSectionFields | null;
}

export default function VideoSection({ fields }: VideoSectionProps) {
  const videoUrl = fields?.video;
  const posterUrl = fields?.hero_image;
  const title = fields?.title;
  const subtitle = fields?.subtitle;

  return (
    <section className="relative h-[700px] w-full">
      {videoUrl && (
        <video
          key={videoUrl}
          className="w-full h-full object-cover"
          src={videoUrl}
          autoPlay
          muted
          loop
          playsInline
          poster={posterUrl || undefined}
          aria-hidden="true"
        />
      )}

      {/* Overlay Layer */}
      <div className="absolute inset-0 bg-video-overlay z-10 pointer-events-none" />

      {/* Text Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
        {subtitle && (
          <div
            className="text-white text-center text-[24px] font-normal mb-4 [&_p]:m-0"
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
        )}

        {title && (
          <h1 className="text-white text-[2.5rem] font-bold max-w-[800px] leading-[1.2]">
            {title}
          </h1>
        )}
      </div>
    </section>
  );
}
