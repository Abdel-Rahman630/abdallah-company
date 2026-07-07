"use client";

import ScrollAnimation from "@/components/ui/ScrollAnimation";
import Image from "next/image";
import Link from "next/link";
import { Counter } from "@/hooks/Counter";

const countdownData = [
  {
    to: 10,
    suffix: "+",
    title: (
      <>
       Cities
      </>
    ),
  },
  { to: 16, suffix: "+", title: "Showroom" },
  { to: 32, suffix: "+", title: "Service center" },
];

export default function OurBranches() {
  return (
    <section 
      id="branches" 
      className="py-[53px] bg-cover bg-center bg-[url('/contact-section.png')]"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-[50px] lg:gap-[100px] items-center">
          
          {/* First Div: Content */}
          <div className="flex-1 py-[24px]">
            <ScrollAnimation>
              <h3 className="mb-[8px] uppercase text-[#D1A52A] text-[0.6875rem] font-medium tracking-[2.5px]">
                OUR BRANCHES
              </h3>
            </ScrollAnimation>

            <ScrollAnimation delay={0.1}>
              <h2 className="mb-[34px] uppercase leading-tight text-white text-[2.125rem] font-bold">
                NETWORK AND COVERAGE
              </h2>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <p className="mb-[34px] leading-relaxed text-[#949494] text-[0.8125rem] font-normal">
                AHCL serves its customers via a network composed of 28 AHCL-operated facilities, and 34 dealer facilities. Through its own operated facilities, AHCL can reach approximately 78% of the population of Saudi Arabia.
              </p>
            </ScrollAnimation>

            <ScrollAnimation delay={0.3}>
              <p className="mb-[24px] leading-relaxed text-white text-[0.8125rem] font-normal">
                AHCL-operated facilities are categorized based on the scope of services they provide:
              </p>
            </ScrollAnimation>

            <ScrollAnimation delay={0.4}>
              <ul className="flex flex-col gap-[32px] mb-[32px]">
                {/* Item 1 */}
                <li className="flex items-center gap-[17px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none" className="shrink-0">
                    <circle cx="14.4293" cy="14.4293" r="14.4293" fill="#D1A52A" fillOpacity="0.22"/>
                    <circle cx="14.4293" cy="14.4293" r="13.7734" stroke="#D1A52A" strokeOpacity="0.55" strokeWidth="1.31175"/>
                    <circle cx="14.4298" cy="14.4279" r="6.55875" fill="#D1A52A"/>
                  </svg>
                  <span className="text-[#949494] text-[0.8125rem] font-normal">
                    A facility that provides either sales or service or spare parts.
                  </span>
                </li>

                {/* Item 2 */}
                <li className="flex items-center gap-[17px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none" className="shrink-0">
                    <circle cx="14.4293" cy="14.4293" r="14.4293" fill="#EF4444" fillOpacity="0.22"/>
                    <circle cx="14.4293" cy="14.4293" r="13.7734" stroke="#EF4444" strokeOpacity="0.55" strokeWidth="1.31175"/>
                    <circle cx="14.4298" cy="14.4279" r="6.55875" fill="#EF4444"/>
                  </svg>
                  <span className="text-[#949494] text-[0.8125rem] font-normal">
                    A facility that provides both service and spare parts at the same location.
                  </span>
                </li>

                {/* Item 3 */}
                <li className="flex items-center gap-[17px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none" className="shrink-0">
                    <circle cx="14.4293" cy="14.4293" r="14.4293" fill="#10B981" fillOpacity="0.22"/>
                    <circle cx="14.4293" cy="14.4293" r="13.7734" stroke="#10B981" strokeOpacity="0.55" strokeWidth="1.31175"/>
                    <circle cx="14.4298" cy="14.4279" r="6.55875" fill="#10B981"/>
                  </svg>
                  <span className="text-[#949494] text-[0.8125rem] font-normal">
                    A facility that provides sales, service, and spare parts at the same location.
                  </span>
                </li>
              </ul>
            </ScrollAnimation>

            <ScrollAnimation delay={0.5}>
              <Link
                href="#"
                className="group inline-flex items-center gap-2 text-white text-[1rem] font-normal uppercase underline"
              >
                More about our locations
                <svg
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="10"
                  viewBox="0 0 13 10"
                  fill="none"
                >
                  <path
                    d="M12.6624 4.24708L8.57908 0.163749C8.46907 0.0574899 8.32171 -0.00130703 8.16877 2.20514e-05C8.01582 0.00135113 7.86951 0.0626998 7.76136 0.170855C7.6532 0.279009 7.59185 0.425316 7.59052 0.578265C7.5892 0.731213 7.64799 0.878564 7.75425 0.988582L10.8418 4.07617H0.583333C0.428624 4.07617 0.280251 4.13762 0.170854 4.24702C0.0614581 4.35642 0 4.50479 0 4.6595C0 4.81421 0.0614581 4.96258 0.170854 5.07198C0.280251 5.18137 0.428624 5.24283 0.583333 5.24283H10.8418L7.75425 8.33042C7.69854 8.38423 7.6541 8.44859 7.62352 8.51976C7.59295 8.59093 7.57686 8.66748 7.57619 8.74493C7.57551 8.82239 7.59027 8.8992 7.6196 8.97089C7.64894 9.04258 7.69225 9.10771 7.74702 9.16248C7.80179 9.21725 7.86692 9.26056 7.93861 9.2899C8.0103 9.31923 8.08711 9.33399 8.16457 9.33331C8.24202 9.33264 8.31857 9.31655 8.38974 9.28597C8.46091 9.2554 8.52527 9.21096 8.57908 9.15525L12.6624 5.07192C12.7718 4.96252 12.8332 4.81418 12.8332 4.6595C12.8332 4.50482 12.7718 4.35647 12.6624 4.24708Z"
                    fill="#FFFFFF"
                  />
                </svg>
              </Link>
            </ScrollAnimation>
          </div>

          {/* Second Div: Image + Countdown */}
          <div className="flex-1 w-full lg:w-auto flex flex-col justify-center">
            <ScrollAnimation delay={0.2} className="relative w-full max-w-[602px] h-[300px] md:h-[450px]">
              <Image 
                src="/map.png" 
                alt="Our Branches Map" 
                fill 
                className="object-contain" 
              />
            </ScrollAnimation>

            {/* Counter Section under image */}
            <ScrollAnimation delay={0.6}>
              <div className="countdown flex md:flex-row flex-col mt-[40px] w-full">
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
                          ? "pt-4 md:pt-0 md:pl-12"
                          : "py-4 md:py-0 md:pl-12"
                    }`}
                  >
                    <span className="text-white text-[2.5rem] font-semibold uppercase mb-[10px] leading-none">
                      <Counter to={item.to} suffix={item.suffix} />
                    </span>
                    <span className="text-[#656565] text-[0.85rem] font-normal uppercase">{item.title}</span>
                  </div>
                ))}
              </div>
            </ScrollAnimation>
          </div>

        </div>
      </div>
    </section>
  );
}
