export default function VideoSection() {
  return (
    <section className="relative h-screen w-full">
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
        className="absolute inset-0 z-10" 
        style={{ background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%)' }}
      ></div>
    </section>
  );
}
