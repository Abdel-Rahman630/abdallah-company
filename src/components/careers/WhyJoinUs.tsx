"use client";

import Image from "next/image";
import SubTitle from "@/components/ui/SubTitle";
import ArrowButtonLink from "@/components/ui/ArrowButtonLink";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { RevealText, RevealImage } from "@/components/ui/ScrollReveal";

export default function WhyJoinUs() {
  const imgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const benefits = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M18.3321 10.8332V5.83398H13.3317M18.3321 5.83398L11.2482 12.9162L7.08116 8.75018L1.66406 14.166" stroke="#D1A52A" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Career Growth",
      desc: "Structured paths for advancement and professional development across all sectors."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M12.8977 10.7407L14.1602 17.8457C14.1743 17.9294 14.1626 18.0154 14.1266 18.0922C14.0905 18.169 14.0319 18.233 13.9585 18.2756C13.8851 18.3181 13.8004 18.3373 13.7159 18.3305C13.6313 18.3237 13.5508 18.2912 13.4852 18.2374L10.5019 15.9982C10.3578 15.8906 10.1829 15.8325 10.0031 15.8325C9.82334 15.8325 9.64839 15.8906 9.50437 15.9982L6.51603 18.2366C6.45047 18.2903 6.37008 18.3227 6.28561 18.3295C6.20114 18.3363 6.11659 18.3172 6.04325 18.2748C5.96991 18.2323 5.91126 18.1685 5.87513 18.0918C5.839 18.0152 5.82711 17.9293 5.84103 17.8457L7.1027 10.7407M15 6.66602C15 9.42744 12.7614 11.666 10 11.666C7.23858 11.666 5 9.42744 5 6.66602C5 3.90459 7.23858 1.66602 10 1.66602C12.7614 1.66602 15 3.90459 15 6.66602Z" stroke="#D1A52A" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Competitive Benefits",
      desc: "A comprehensive package that supports your well-being and long-term security."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M13.3317 17.5V15.8333C13.3317 14.9493 12.9804 14.1014 12.3553 13.4763C11.7301 12.8512 10.8822 12.5 9.99806 12.5H4.99766C4.11354 12.5 3.26562 12.8512 2.64045 13.4763C2.01528 14.1014 1.66406 14.9493 1.66406 15.8333V17.5M13.3317 2.60661C14.0465 2.79192 14.6796 3.20933 15.1315 3.79333C15.5835 4.37733 15.8287 5.09485 15.8287 5.83327C15.8287 6.5717 15.5835 7.28922 15.1315 7.87322C14.6796 8.45722 14.0465 8.87463 13.3317 9.05994M18.3321 17.4999V15.8332C18.3315 15.0947 18.0857 14.3772 17.6331 13.7935C17.1806 13.2098 16.547 12.7929 15.8319 12.6082M10.8315 5.83333C10.8315 7.67428 9.33896 9.16667 7.49786 9.16667C5.65677 9.16667 4.16426 7.67428 4.16426 5.83333C4.16426 3.99238 5.65677 2.5 7.49786 2.5C9.33896 2.5 10.8315 3.99238 10.8315 5.83333Z" stroke="#D1A52A" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Inclusive Culture",
      desc: "A workspace where diverse perspectives are valued and every voice is heard."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M9.99806 5.83333V17.5M9.99806 5.83333C9.99806 4.94928 9.64684 4.10143 9.02167 3.47631C8.3965 2.85119 7.54859 2.5 6.66446 2.5H2.49746C2.27643 2.5 2.06445 2.5878 1.90816 2.74408C1.75187 2.90036 1.66406 3.11232 1.66406 3.33333V14.1667C1.66406 14.3877 1.75187 14.5996 1.90816 14.7559C2.06445 14.9122 2.27643 15 2.49746 15H7.49786C8.16096 15 8.79689 15.2634 9.26577 15.7322C9.73465 16.2011 9.99806 16.837 9.99806 17.5M9.99806 5.83333C9.99806 4.94928 10.3493 4.10143 10.9745 3.47631C11.5996 2.85119 12.4475 2.5 13.3317 2.5H17.4987C17.7197 2.5 17.9317 2.5878 18.088 2.74408C18.2443 2.90036 18.3321 3.11232 18.3321 3.33333V14.1667C18.3321 14.3877 18.2443 14.5996 18.088 14.7559C17.9317 14.9122 17.7197 15 17.4987 15H12.4983C11.8352 15 11.1992 15.2634 10.7304 15.7322C10.2615 16.2011 9.99806 16.837 9.99806 17.5" stroke="#D1A52A" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Learning & Development",
      desc: "Access to world-class training programs and industry certifications."
    }
  ];

  return (
    <>
      <section id="why-join-us" className="py-[80px] lg:py-[120px] bg-white">
        <div className="container mx-auto">
          
          <div className="mb-[50px]">
            <RevealText delay={0.1}>
              <SubTitle className="!mb-[12px]">Why Join Us</SubTitle>
            </RevealText>
            <RevealText delay={0.3}>
              <h2 className="text-[#1E1E1E] text-[2.5rem] font-bold leading-tight">
                Build Your Future with AHCL
              </h2>
            </RevealText>
          </div>

          <div className="flex flex-col lg:flex-row gap-[30px] lg:gap-[80px]">

            {/* Left: Image with parallax */}
            <div className="w-full lg:w-1/2">
              <RevealImage>
                <div
                  ref={imgRef}
                  className="relative w-full lg:h-[830px] md:h-[500px] h-[350px] overflow-hidden rounded-[10px]"
                >
                  <motion.div style={{ y }} className="absolute w-full h-[130%] -top-[15%]">
                    <Image
                      src="/careerSection.jpg"
                      alt="Build Your Future"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </motion.div>
                </div>
              </RevealImage>
            </div>

            {/* Right: Content with reveal animations */}
            <div className="w-full lg:w-1/2">

              <RevealText delay={0.2}>
                <p className="text-[#727272] text-[1rem] font-normal md:mb-[48px] mb-[30px] leading-relaxed">
                  At <span className="text-[#1E1E1E] font-bold">AHCL Company</span>, our vision, strong market reputation, commitment to excellence, and passion for innovation set us apart. We believe our people are our greatest asset, which is why we invest in their growth, encourage continuous learning, and cultivate a collaborative culture where talent can thrive. By joining <span className="text-[#1E1E1E] font-bold">AHCL Company</span>, you become part of a high-performing team committed to excellence, innovation, and creating lasting value for our customers, partners, and stakeholders.
                </p>
              </RevealText>

              <RevealText delay={0.3}>
                <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-[20px] md:mb-[48px] mb-[30px]">
                  <div className="flex-1">
                    <h3 className="text-[#1E1E1E] text-[1.25rem] font-semibold mb-[8px]">
                      Best Place to Work Certification Award 2024
                    </h3>
                    <p className="text-[#727272] text-[1rem] font-normal leading-relaxed">
                      Recognized for fostering an exceptional workplace culture built on trust, collaboration, and employee growth.
                    </p>
                  </div>
                  <div 
                    className="shrink-0 cursor-pointer hover:scale-105 transition-transform duration-300"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <Image
                      src="/trophy.png"
                      alt="Trophy"
                      width={85}
                      height={85}
                      className="object-contain"
                    />
                  </div>
                </div>
              </RevealText>

              <ul className="flex flex-col gap-[32px] md:mb-[48px] mb-[30px]">
                {benefits.map((item, index) => (
                  <RevealText key={index} delay={0.4 * (index + 1)}>
                    <li className="flex items-start gap-[20px]">
                      <div className="w-[40px] h-[40px] rounded-[20px] bg-[rgba(209,165,42,0.10)] flex justify-center items-center shrink-0 mt-[2px]">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-[#1E1E1E] text-[1.1rem] font-semibold mb-[8px]">
                          {item.title}
                        </h4>
                        <p className="text-[#727272] text-[1rem] font-normal leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </li>
                  </RevealText>
                ))}
              </ul>

              <RevealText delay={0.5}>
                <div className="self-start">
                  <ArrowButtonLink href="https://abdullah-hashim-company-ltd.careers-page.com" target="_blank">
                    Explore Opportunities
                  </ArrowButtonLink>
                </div>
              </RevealText>

            </div>
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full max-h-[90vh] rounded-[10px] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black transition-colors"
                onClick={() => setIsModalOpen(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <Image
                src="/certificate.png"
                alt="Best Place to Work Certificate"
                width={1200}
                height={800}
                className="max-w-full max-h-[90vh] object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

