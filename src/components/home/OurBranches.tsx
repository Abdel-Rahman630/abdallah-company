"use client";

import { RevealText, RevealImage } from "@/components/ui/ScrollReveal";
import Image from "next/image";
import { Counter } from "@/hooks/Counter";
import ArrowLink from "@/components/ui/ArrowLink";
import SubTitle from "@/components/ui/SubTitle";

const countdownData = [
  // {
  //   to: 10,
  //   suffix: "+",
  //   title: <>Strong network across <br />the Kingdom of Saudi Arabia</>,
  // },
  { to: 22, suffix: "+", title: "Showroom" },
  { to: 26, suffix: "+", title: "Service center" },
  { to: 29, suffix: "+", title: "Spare Part" },

];

export default function OurBranches() {
  return (
    <section
      id="branches"
      className="py-[53px] bg-cover bg-center bg-[url('/contact-section.png')]"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-[50px] lg:gap-[100px] items-center">
          {/* First Div: Content — order-2 on mobile, order-1 on lg */}
          <div className="flex-1 py-[24px]">
            <RevealText delay={0.1}>
              <SubTitle>OUR BRANCHES</SubTitle>
            </RevealText>

            <RevealText delay={0.2}>
              <h2 className="mb-[34px] uppercase leading-tight text-[#1E1E1E] text-[2.125rem] font-bold">
                NETWORK AND COVERAGE
              </h2>
            </RevealText>

            {/* <RevealText delay={0.3}>
              <p className="mb-[34px] leading-relaxed text-[#666] text-[0.8125rem] font-normal">
                AHCL serves its customers via a network composed of 28 AHCL-operated facilities, and 34 dealer facilities. Through its own operated facilities, AHCL can reach approximately 78% of the population of Saudi Arabia.
              </p>
            </RevealText> */}

            <RevealText delay={0.4}>
              <p className="mb-[24px] leading-relaxed text-[#1E1E1E] text-[0.8125rem] font-normal">
                AHCL-operated facilities are categorized based on the scope of services they provide:
              </p>
            </RevealText>

            <ul className="flex flex-row gap-[32px] mb-[32px]">
              {/* Item 1 */}
              <li className="flex items-center gap-[17px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  className="shrink-0"
                >
                  <circle
                    cx="14.4293"
                    cy="14.4293"
                    r="14.4293"
                    fill="#D1A52A"
                    fillOpacity="0.22"
                  />
                  <circle
                    cx="14.4293"
                    cy="14.4293"
                    r="13.7734"
                    stroke="#D1A52A"
                    strokeOpacity="0.55"
                    strokeWidth="1.31175"
                  />
                  <circle
                    cx="14.4298"
                    cy="14.4279"
                    r="6.55875"
                    fill="#D1A52A"
                  />
                </svg>
                <span className="text-[#949494] text-[0.8125rem] font-normal">
                  Head Office.
                </span>
              </li>

              {/* Item 2 */}
              <li className="flex items-center gap-[17px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  className="shrink-0"
                >
                  <circle
                    cx="14.4293"
                    cy="14.4293"
                    r="14.4293"
                    fill="#EF4444"
                    fillOpacity="0.22"
                  />
                  <circle
                    cx="14.4293"
                    cy="14.4293"
                    r="13.7734"
                    stroke="#EF4444"
                    strokeOpacity="0.55"
                    strokeWidth="1.31175"
                  />
                  <circle
                    cx="14.4298"
                    cy="14.4279"
                    r="6.55875"
                    fill="#EF4444"
                  />
                </svg>
                <span className="text-[#949494] text-[0.8125rem] font-normal">
                  Distributor Hub.
                </span>
              </li>

              {/* Item 3 */}
              <li className="flex items-center gap-[17px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  className="shrink-0"
                >
                  <circle
                    cx="14.4293"
                    cy="14.4293"
                    r="14.4293"
                    fill="#10B981"
                    fillOpacity="0.22"
                  />
                  <circle
                    cx="14.4293"
                    cy="14.4293"
                    r="13.7734"
                    stroke="#10B981"
                    strokeOpacity="0.55"
                    strokeWidth="1.31175"
                  />
                  <circle
                    cx="14.4298"
                    cy="14.4279"
                    r="6.55875"
                    fill="#10B981"
                  />
                </svg>
                <span className="text-[#949494] text-[0.8125rem] font-normal">
                 Operation Network.
                </span>
              </li>
            </ul>
            {/* Counter Section under image */}
            <div className="countdown flex md:flex-row flex-col mb-[32px] w-full">
              {countdownData.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col flex-1 items-center md:items-start text-center md:text-left ${
                    index !== countdownData.length - 1
                      ? "border-b border-[#D1A52A] md:border-b-0 md:border-r md:border-[#D1A52A]"
                      : ""
                  } ${
                    index === 0
                      ? "pb-4 md:pb-0"
                      : index === countdownData.length - 1
                        ? "pt-4 md:pt-0 md:pl-6"
                        : "py-4 md:py-0 md:pl-6"
                  }`}
                >
                  <span className="text-[#1E1E1E] text-[2.5rem] font-semibold uppercase mb-[10px] leading-none">
                    <Counter to={item.to} suffix={item.suffix} />
                  </span>
                  <span className="text-[#656565] text-[0.85rem] font-normal uppercase">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
            <ArrowLink href="/contact-us#find-us" color="black">More about our locations</ArrowLink>
          </div>

          {/* Second Div: Image — order-1 on mobile, order-2 on lg */}
          <div className="flex-1 w-full lg:w-auto flex flex-col justify-center items-center lg:items-end">
            <RevealImage className="relative w-full max-w-[700px] lg:max-w-none lg:w-[600px] xl:w-[700px] h-[450px] md:h-[580px] lg:h-[640px]">
              <Image
                src="/map.png"
                alt="Our Branches Map"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 700px"
              />
            </RevealImage>
          </div>
        </div>
      </div>
    </section>
  );
}
