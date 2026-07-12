"use client";

import { useFindUs } from "@/hooks/contact/useFindUs";
import { RevealText, RevealImage } from "@/components/ui/ScrollReveal";
import SubTitle from "@/components/ui/SubTitle";

export default function FindUs() {
  const { locations, activeLocation, setActiveLocation } = useFindUs();

  return (
    <section className="bg-[#1E1E1E] py-[100px]">
      <div className="container mx-auto">
        <RevealText delay={0.1}>
          <SubTitle className="text-center">OUR LOCATIONS</SubTitle>
        </RevealText>
        <RevealText delay={0.2}>
          <h2 className="text-white text-center text-[3rem] font-bold mb-[40px]">
            Find Us
          </h2>
        </RevealText>

        {/* Head Office Top Bar */}
        <RevealText delay={0.3}>
          <div className="rounded-[16px] border-[2px] border-[#D1A52A] bg-[rgba(255,255,255,0.05)] p-[24px] lg:p-[40px] flex flex-col lg:flex-row justify-between items-start lg:items-center gap-[40px] mb-[40px]">
            <div className="flex-1">
              <div className="flex items-center gap-[8px] mb-[1rem]">
                <h3 className="text-white text-[1.75rem] font-bold">Head Office</h3>
                <span className="rounded-[4px] bg-[#D1A52A] text-[#1E1E1E] text-[0.7rem] font-bold uppercase px-[8px] py-[4px]">
                  Head Office
                </span>
              </div>
              <p className="text-[rgba(255,255,255,0.80)] text-[1rem] font-normal leading-relaxed">
                Abdullah Hashim Company Ltd. Building, 44, Jeddah 21411, Madinah Road Al Bawadi Dist, Jeddah
              </p>
            </div>
            
            <div className="flex gap-[48px] shrink-0">
              <div>
                <h4 className="text-[#D1A52A] text-[0.8rem] font-semibold uppercase mb-[8px]">
                  Email Address
                </h4>
                <a href="mailto:info@ahcl.com.sa" className="text-white text-[1rem] font-normal hover:text-[#D1A52A] transition-colors">
                  info@ahcl.com.sa
                </a>
              </div>
              <div>
                <h4 className="text-[#D1A52A] text-[0.8rem] font-semibold uppercase mb-[8px]">
                  Phone Number
                </h4>
                <a href="tel:0122638200" className="text-white text-[1rem] font-normal hover:text-[#D1A52A] transition-colors">
                  012 263 8200
                </a>
              </div>
            </div>
          </div>
        </RevealText>

        {/* Locations List and Map */}
        <div className="flex flex-col lg:flex-row gap-[40px] md:gap-[80px]">
          {/* Left Column - List */}
          <div className="w-full lg:w-[45%] shrink-0">
            <RevealText delay={0.4}>
              <ul className="flex flex-col h-[500px] overflow-y-auto pr-[16px] [&::-webkit-scrollbar]:w-[4px] [&::-webkit-scrollbar-track]:bg-[#2c2c2c] [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#D1A52A] [&::-webkit-scrollbar-thumb]:rounded-full">
                {locations.map((loc) => (
                  <li 
                    key={loc.id}
                    onClick={() => setActiveLocation(loc)}
                    className={`flex items-start gap-[1rem] py-[20px] border-b border-[rgba(255,255,255,0.10)] cursor-pointer transition-colors group ${
                      activeLocation.id === loc.id ? "bg-[rgba(255,255,255,0.02)] px-[10px]" : "hover:bg-[rgba(255,255,255,0.02)] px-[10px]"
                    }`}
                  >
                    <div className="w-[40px] h-[40px] rounded-[20px] bg-[rgba(255,255,255,0.05)] flex items-center justify-center shrink-0 group-hover:bg-[#D1A52A] transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10.5027 18.1667C12.0526 16.8283 16.6679 12.4945 16.6679 8.3333C16.6679 6.56503 15.9656 4.86918 14.7155 3.61882C13.4654 2.36846 11.7699 1.66602 10.0019 1.66602C8.234 1.66602 6.53848 2.36846 5.28836 3.61882C4.03825 4.86918 3.33594 6.56503 3.33594 8.3333C3.33594 12.4945 7.95131 16.8283 9.50115 18.1667C9.64554 18.2753 9.82129 18.334 10.0019 18.334C10.1826 18.334 10.3583 18.2753 10.5027 18.1667Z" stroke={activeLocation.id === loc.id ? "#1E1E1E" : "#D1A52A"} className="group-hover:stroke-[#1E1E1E] transition-colors" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <div>
                      <div className="flex items-center gap-[8px] mb-[4px]">
                        <h4 className="text-white text-[1.25rem] font-bold">{loc.title}</h4>
                        <span className="rounded-[4px] bg-[#D1A52A] text-[#1E1E1E] text-[0.6rem] font-bold uppercase px-[6px] py-[2px]">
                          {loc.span}
                        </span>
                      </div>
                      <p className="text-[rgba(255,255,255,0.60)] text-[0.9rem] font-normal leading-relaxed">
                        {loc.paragraph}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </RevealText>
          </div>

          {/* Right Column - Map */}
          <div className="w-full flex-1 min-h-[400px] lg:min-h-[500px]">
            <RevealImage delay={0.5}>
              <div className="w-full h-full min-h-[400px] lg:min-h-[500px] rounded-[16px] overflow-hidden bg-[rgba(255,255,255,0.05)]">
                <iframe
                  width="100%"
                  height="500px"
                  frameBorder="0"
                  className="w-full h-full min-h-[400px] lg:min-h-[500px]"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(activeLocation.mapQuery)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                  allowFullScreen
                ></iframe>
              </div>
            </RevealImage>
          </div>
        </div>
      </div>
    </section>
  );
}
