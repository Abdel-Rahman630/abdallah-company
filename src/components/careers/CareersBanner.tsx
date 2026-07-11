import Image from "next/image";

export default function CareersBanner() {
  return (
    <section className="relative w-full h-[366px]">
      <Image
        src="/careers.png"
        alt="Careers"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#000000] opacity-20 z-10" />
      <div className="container mx-auto h-full relative z-20">
        <h1 
          className="absolute bottom-[50px] left-4 lg:left-0 text-[#FFF] text-[3rem] font-bold z-20 capitalize"
        >
          Careers
        </h1>
      </div>
    </section>
  );
}
