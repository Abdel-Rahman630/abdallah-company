"use client";

import PageBanner from "@/components/ui/PageBanner";
import SubTitle from "@/components/ui/SubTitle";
import CountDown from "@/components/ui/CountDown";
import HistorySlider from "@/components/sliders/HistorySlider";
import Image from "next/image";
import { RevealText, RevealImage } from "@/components/ui/ScrollReveal";
import { useLanguage } from "@/providers/LanguageProvider";

export default function AboutUsClient() {
  const { t } = useLanguage();

  const countdownData = [
    { to: 80, suffix: "+", title: "Years of Experience" },
    { to: 33, suffix: "+", title: "BRANCHES" },
    { to: 90, suffix: "+", title: "DEALERS" },
    { to: 1000, suffix: "+", title: "employees" },
  ];

  return (
    <>
      <PageBanner image="/about-banner.png" title={t("about.title")} />

      {/* Company Overview Section */}
      <section
        id="company-overview"
        className="pt-[80px] lg:pt-[120px] bg-white"
      >
        <div className="container mx-auto">
          <RevealText>
            <SubTitle>{t("about.companyOverview")}</SubTitle>
            <h2 className="text-[#1E1E1E] text-[2.5rem] font-bold mb-[40px]">
              {t("about.mainTitle")}
            </h2>
          </RevealText>

          <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[80px] mb-[50px]">
            <div className="lg:w-[580px] w-full h-[500px] lg:h-[824px] lg:shrink-0">
              <RevealImage className="w-full h-full">
                <div className="w-full h-full relative rounded-[10px] overflow-hidden">
                  <Image
                    src="/1.png"
                    alt="Company Overview"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 824px"
                  />
                </div>
              </RevealImage>
            </div>

            <div className="w-full flex-1 flex flex-col gap-[24px]">
              <RevealText delay={0.1}>
                <h3 className="text-[#1E1E1E] text-[2rem] font-bold leading-tight">
                  {t("about.subtitle")}
                </h3>
              </RevealText>

              <RevealText delay={0.2}>
                <p className="text-[#666] text-[1rem] font-normal leading-relaxed">
                  <span className="text-[#1E1E1E] font-bold">
                    Abdullah Hashim Company Limited (AHCL),{" "}
                  </span>
                  {t("about.desc1")}
                </p>
              </RevealText>

              <RevealText delay={0.3}>
                <p className="text-[#666] text-[1rem] font-normal leading-relaxed">
                  <span className="text-[#1E1E1E] font-bold">
                    Abdullah Hashim Company Limited{" "}
                  </span>
                  {t("about.desc2")}
                </p>
              </RevealText>

              <RevealText delay={0.4}>
                <p className="text-[#666] text-[1rem] font-normal leading-relaxed">
                  {t("about.desc3")}
                </p>
              </RevealText>

              <RevealText delay={0.5}>
                <p className="text-[#666] text-[1rem] font-normal leading-relaxed">
                  As a strategic contributor to Development in Saudi Arabia,{" "}
                  <span className="text-[#1E1E1E] font-bold">
                    Abdullah Hashim Company Limited (AHCL){" "}
                  </span>
                  {t("about.desc4")}
                </p>
              </RevealText>
            </div>
          </div>
        </div>
      </section>

      {/* Count Section */}
      <section
        id="history-legacy"
        className="py-[50px]"
      >
        <div className="container mx-auto">
          <CountDown data={countdownData} />
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section
        id="vision-mission"
        className="bg-[#F9F9F9] py-[80px] lg:py-[100px]"
      >
        <div className="container mx-auto">
          <div className="pb-[50px] mb-[50px] border-b-[4px] border-[#E5E5E5]/80">
            <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[80px]">
              <div className="w-full lg:w-1/2 lg:py-[24px] flex flex-col gap-[20px] lg:gap-[60px] justify-center">
                <RevealText delay={0.1}>
                  <div>
                    <h3 className="text-[#1E1E1E] text-[2.5rem] font-bold mb-[16px]">
                      {t("about.missionTitle")}
                    </h3>
                    <p className="text-[#666] text-[1rem] font-normal text-justify leading-relaxed">
                      {t("about.missionDesc")}
                    </p>
                  </div>
                </RevealText>

                <RevealText delay={0.2}>
                  <div>
                    <h3 className="text-[#1E1E1E] text-[2.5rem] font-bold mb-[16px]">
                      {t("about.visionTitle")}
                    </h3>
                    <p className="text-[#666] text-[1rem] font-normal text-justify leading-relaxed">
                      {t("about.visionDesc")}
                    </p>
                  </div>
                </RevealText>
              </div>

              <div className="w-full lg:w-1/2">
                <RevealImage>
                  <div className="w-full h-[300px] lg:h-[450px] relative rounded-[5px] overflow-hidden">
                    <Image
                      src="/ourMission.png"
                      alt="Our Mission and Vision"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </RevealImage>
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div>
            <RevealText delay={0.1}>
              <SubTitle>{t("about.valuesSubtitle")}</SubTitle>
              <h2 className="text-[#1E1E1E] text-[2.25rem] font-extrabold mb-[1rem]">
                {t("about.valuesTitle")}
              </h2>
              <p className="text-[#5E5E5E] text-[1rem] font-normal mb-[3rem]">
                {t("about.valuesDesc")}
              </p>
            </RevealText>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
              {[
                {
                  title: t("about.values.integrityTitle"),
                  desc: t("about.values.integrityDesc"),
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M7.50219 9.99962L9.16869 11.6663L12.5017 8.3329M16.6679 10.8334C16.6679 15.0002 13.7516 17.0836 10.2852 18.2919C10.1037 18.3534 9.90656 18.3505 9.72696 18.2836C6.25231 17.0836 3.33594 15.0002 3.33594 10.8334V4.99983C3.33594 4.77881 3.42373 4.56684 3.57999 4.41056C3.73626 4.25427 3.9482 4.16647 4.16919 4.16647C5.83569 4.16647 7.91881 3.16644 9.36867 1.89973C9.5452 1.74889 9.76976 1.66602 10.0019 1.66602C10.2341 1.66602 10.4587 1.74889 10.6352 1.89973C12.0934 3.17477 14.1682 4.16647 15.8347 4.16647C16.0557 4.16647 16.2676 4.25427 16.4239 4.41056C16.5801 4.56684 16.6679 4.77881 16.6679 4.99983V10.8334Z"
                        stroke="#D0A42A"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  ),
                },
                {
                  title: t("about.values.qualityTitle"),
                  desc: t("about.values.qualityDesc"),
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_876_3765)">
                        <path
                          d="M9.99806 18.334C14.6008 18.334 18.3321 14.6028 18.3321 10C18.3321 5.39727 14.6008 1.66602 9.99806 1.66602C5.39532 1.66602 1.66406 5.39727 1.66406 10C1.66406 14.6028 5.39532 18.334 9.99806 18.334Z"
                          stroke="#1E1E1E"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_876_3765">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  ),
                },
                {
                  title: t("about.values.commitmentTitle"),
                  desc: t("about.values.commitmentDesc"),
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M13.3317 17.5V15.8333C13.3317 14.9493 12.9804 14.1014 12.3553 13.4763C11.7301 12.8512 10.8822 12.5 9.99806 12.5H4.99766C4.11354 12.5 3.26562 12.8512 2.64045 13.4763C2.01528 14.1014 1.66406 14.9493 1.66406 15.8333V17.5M13.3317 2.60661C14.0465 2.79192 14.6796 3.20933 15.1315 3.79333C15.5835 4.37733 15.8287 5.09485 15.8287 5.83327C15.8287 6.5717 15.5835 7.28922 15.1315 7.87322C14.6796 8.45722 14.0465 8.87463 13.3317 9.05994M18.3321 17.4999V15.8332C18.3315 15.0947 18.0857 14.3772 17.6331 13.7935C17.1806 13.2098 16.547 12.7929 15.8319 12.6082M10.8315 5.83333C10.8315 7.67428 9.33896 9.16667 7.49786 9.16667C5.65677 9.16667 4.16426 7.67428 4.16426 5.83333C4.16426 3.99238 5.65677 2.5 7.49786 2.5C9.33896 2.5 10.8315 3.99238 10.8315 5.83333Z"
                        stroke="#D0A42A"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  ),
                },
                {
                  title: t("about.values.creativityTitle"),
                  desc: t("about.values.creativityDesc"),
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M12.5 11.6668C12.6667 10.8334 13.0833 10.25 13.75 9.58332C14.5833 8.83326 15 7.74984 15 6.66642C15 5.34023 14.4732 4.06836 13.5355 3.1306C12.5979 2.19284 11.3261 1.66602 10 1.66602C8.67392 1.66602 7.40215 2.19284 6.46447 3.1306C5.52678 4.06836 5 5.34023 5 6.66642C5 7.49982 5.16667 8.4999 6.25 9.58332C6.83333 10.1667 7.33333 10.8334 7.5 11.6668M7.5 15.0004H12.5M8.33333 18.334H11.6667"
                        stroke="#1E1E1E"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  ),
                },
                {
                  title: t("about.values.collaborationTitle"),
                  desc: t("about.values.collaborationDesc"),
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_876_3786)">
                        <path
                          d="M9.16466 14.1675L10.8315 15.8342C10.9956 15.9984 11.1905 16.1286 11.405 16.2174C11.6195 16.3063 11.8494 16.352 12.0816 16.352C12.3137 16.352 12.5436 16.3063 12.7581 16.2174C12.9726 16.1286 13.1675 15.9984 13.3317 15.8342C13.4958 15.6701 13.6261 15.4752 13.7149 15.2607C13.8037 15.0462 13.8495 14.8164 13.8495 14.5842C13.8495 14.3521 13.8037 14.1222 13.7149 13.9077C13.6261 13.6932 13.4958 13.4984 13.3317 13.3342M11.6651 11.6671L13.7486 13.7505C14.0801 14.082 14.5298 14.2683 14.9987 14.2683C15.4675 14.2683 15.9172 14.082 16.2488 13.7505C16.5803 13.419 16.7666 12.9693 16.7666 12.5005C16.7666 12.0316 16.5803 11.582 16.2488 11.2505L13.0152 8.01712C12.5464 7.54895 11.9109 7.28598 11.2484 7.28598C10.5858 7.28598 9.95033 7.54895 9.48154 8.01712L8.74815 8.75046C8.4166 9.08198 7.96693 9.26823 7.49805 9.26823C7.02917 9.26823 6.5795 9.08198 6.24795 8.75046C5.9164 8.41893 5.73014 7.96929 5.73014 7.50045C5.73014 7.0316 5.9164 6.58196 6.24795 6.25044L8.5898 3.90876C9.35007 3.15054 10.3415 2.66755 11.4072 2.53623C12.4729 2.40491 13.552 2.63278 14.4736 3.18376L14.8653 3.41709C15.2202 3.63125 15.6421 3.70552 16.0487 3.62543L17.4989 3.33376M17.4987 2.50081L18.3321 11.6675H16.6653M2.49746 2.50081L1.66406 11.6675L7.08116 17.0842C7.41271 17.4158 7.86238 17.602 8.33126 17.602C8.80014 17.602 9.24981 17.4158 9.58136 17.0842C9.91291 16.7527 10.0992 16.3031 10.0992 15.8342C10.0992 15.3654 9.91291 14.9157 9.58136 14.5842M2.49746 3.33415H9.16466"
                          stroke="#D0A42A"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_876_3786">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
354:                   ),
355:                 },
356:                 {
357:                   title: t("about.values.learningTitle"),
358:                   desc: t("about.values.learningDesc"),
359:                   icon: (
360:                     <svg
361:                       xmlns="http://www.w3.org/2000/svg"
362:                       width="20"
363:                       height="20"
364:                       viewBox="0 0 20 20"
365:                       fill="none"
366:                     >
367:                       <path
368:                         d="M18.3321 10.8332V5.83398H13.3317M18.3321 5.83398L11.2482 12.9162L7.08116 8.75018L1.66406 14.166"
369:                         stroke="#1E1E1E"
370:                         strokeWidth="2"
371:                         strokeLinecap="round"
372:                       />
373:                     </svg>
374:                   ),
375:                 },
376:               ].map((item, index) => (
377:                 <RevealText key={index} delay={0.1 * index}>
378:                   <div className="p-[1rem] rounded-[12px] border border-[#F2F2F2] bg-[#FDFDFD] h-full transition-shadow hover:shadow-md">
379:                     <span className="w-[40px] h-[40px] rounded-[20px] bg-[rgba(209,165,42,0.07)] mb-[12px] flex items-center justify-center">
380:                       {item.icon}
381:                     </span>
382:                     <h4 className="text-[#1E1E1E] text-[1rem] font-bold tracking-[0.5px] pb-[6px]">
383:                       {item.title}
384:                     </h4>
385:                     <p className="text-[#666] text-[0.8rem] font-normal leading-relaxed">
386:                       {item.desc}
387:                     </p>
388:                   </div>
389:                 </RevealText>
390:               ))}
391:             </div>
392:           </div>
393:         </div>
394:       </section>
395:       {/* History Slider */}
396:       <HistorySlider />
397:     </>
398:   );
399: }
