export default function VideoSection() {
  return (
    <section className="relative h-[700px] w-full">
      <video 
        className="w-full h-full object-cover"
        autoPlay 
        muted 
        loop 
        playsInline
      >
        <source src="/banner.mp4" type="video/mp4" />
      </video>

      {/* Overlay Layer */}
      <div 
        className="absolute inset-0 bg-video-overlay z-10 pointer-events-none"
      ></div>

      {/* Text Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
        <p className="text-white text-center text-[24px] font-normal mb-4">
          Abdullah Hashim Company Limited
        </p>
        <h1 className="text-white text-[2.5rem] font-bold max-w-[800px] leading-[1.2]">
          Driving Progress Through Innovation, Quality, and Reliability
        </h1>
      </div>
    </section>
  );
}
