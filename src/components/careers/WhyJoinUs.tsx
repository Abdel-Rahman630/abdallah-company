"use client";

import Image from "next/image";
import SubTitle from "@/components/ui/SubTitle";
import ArrowButtonLink from "@/components/ui/ArrowButtonLink";
import React, { useRef, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RevealText, RevealImage } from "@/components/ui/ScrollReveal";
import type { WhyJoinUsSectionFields } from "@/types/models";
import { formatCtaUrl } from "@/lib/utils";

interface WhyJoinUsProps {
  fields?: WhyJoinUsSectionFields | null;
}

export default function WhyJoinUs({ fields }: WhyJoinUsProps) {
  const imgRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const headTitle = fields?.head_title;
  const title = fields?.title;
  const mainImage = fields?.image;
  const mainImageAlt = fields?.image_alt || "Build Your Future";
  const descHtml = fields?.description;
  const secondTitle = fields?.second_title;
  const secondDescHtml = fields?.second_description;
  const awardBadgeImage = fields?.award_badge_image;
  const awardBadgeAlt = fields?.award_badge_alt || "Award badge image";
  const awardCertImage = fields?.award_certificate_image;
  const awardCertAlt = fields?.award_certificate_alt || "Award certificate image";
  const ctaLabel = fields?.cta_label;
  const ctaUrl = fields?.cta_url ? formatCtaUrl(fields.cta_url) : undefined;

  const benefits = useMemo(() => {
    if (fields?.benefits && fields.benefits.length > 0) {
      return fields.benefits
        .filter((b) => b.is_active !== false)
        .slice()
        .sort((a, b) => a.sort_order - b.sort_order);
    }
    return [];
  }, [fields?.benefits]);

  return (
    <>
      <section id="why-join-us" className="py-[80px] lg:py-[120px] bg-white">
        <div className="container mx-auto">
          {(headTitle || title) && (
            <div className="mb-[50px]">
              {headTitle && (
                <RevealText delay={0.1}>
                  <SubTitle className="!mb-[12px]">{headTitle}</SubTitle>
                </RevealText>
              )}
              {title && (
                <RevealText delay={0.3}>
                  <h2 className="text-[#1E1E1E] text-[2.5rem] font-bold leading-tight">
                    {title}
                  </h2>
                </RevealText>
              )}
            </div>
          )}

          <div className="flex flex-col lg:flex-row gap-[30px] lg:gap-[80px]">
            {/* Left: Image */}
            {mainImage && (
              <div className="w-full lg:w-1/2">
                <RevealImage>
                  <div
                    ref={imgRef}
                    className="relative w-full lg:h-[870px] md:h-[500px] h-[350px] overflow-hidden rounded-[10px]"
                  >
                    <Image
                      src={mainImage}
                      alt={mainImageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </RevealImage>
              </div>
            )}

            {/* Right: Content */}
            <div className="w-full lg:w-1/2">
              {descHtml && (
                <RevealText delay={0.2}>
                  <div
                    className="text-[#727272] text-[1rem] font-normal md:mb-[48px] mb-[30px] leading-relaxed [&_strong]:font-bold [&_strong]:text-[#1E1E1E] [&_p]:mb-4 [&_p:last-child]:mb-0"
                    dangerouslySetInnerHTML={{ __html: descHtml }}
                  />
                </RevealText>
              )}

              {(secondTitle || secondDescHtml || awardBadgeImage) && (
                <RevealText delay={0.3}>
                  <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-[20px] md:mb-[48px] mb-[30px]">
                    <div className="flex-1">
                      {secondTitle && (
                        <h3 className="text-[#1E1E1E] text-[1.25rem] font-semibold mb-[8px]">
                          {secondTitle}
                        </h3>
                      )}
                      {secondDescHtml && (
                        <div
                          className="text-[#727272] text-[1rem] font-normal leading-relaxed [&_p]:m-0"
                          dangerouslySetInnerHTML={{ __html: secondDescHtml }}
                        />
                      )}
                    </div>

                    {awardBadgeImage && (
                      <div
                        className={`shrink-0 ${awardCertImage ? "cursor-pointer hover:scale-105" : ""} transition-transform duration-300`}
                        onClick={() => {
                          if (awardCertImage) setIsModalOpen(true);
                        }}
                      >
                        <Image
                          src={awardBadgeImage}
                          alt={awardBadgeAlt}
                          width={85}
                          height={85}
                          className="object-contain"
                        />
                      </div>
                    )}
                  </div>
                </RevealText>
              )}

              {benefits.length > 0 && (
                <ul className="flex flex-col gap-[32px] md:mb-[48px] mb-[30px]">
                  {benefits.map((item, index) => (
                    <RevealText key={item.id || index} delay={0.4 * (index + 1)}>
                      <li className="flex items-start gap-[20px]">
                        <div className="w-[40px] h-[40px] rounded-[20px] bg-[rgba(209,165,42,0.10)] flex justify-center items-center shrink-0 mt-[2px]">
                          {item.icon ? (
                            <Image
                              src={item.icon}
                              alt={item.title}
                              width={20}
                              height={20}
                              className="object-contain"
                            />
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                d="M18.3321 10.8332V5.83398H13.3317M18.3321 5.83398L11.2482 12.9162L7.08116 8.75018L1.66406 14.166"
                                stroke="#D1A52A"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                            </svg>
                          )}
                        </div>
                        <div>
                          {item.title && (
                            <h4 className="text-[#1E1E1E] text-[1.1rem] font-semibold mb-[8px]">
                              {item.title}
                            </h4>
                          )}
                          {item.description && (
                            <p className="text-[#727272] text-[1rem] font-normal leading-relaxed">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </li>
                    </RevealText>
                  ))}
                </ul>
              )}

              {ctaLabel && ctaUrl && (
                <RevealText delay={0.5}>
                  <div className="self-start">
                    <ArrowButtonLink href={ctaUrl} target="_blank">
                      {ctaLabel}
                    </ArrowButtonLink>
                  </div>
                </RevealText>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      {awardCertImage && (
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
                  className="absolute top-4 end-4 z-10 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black transition-colors"
                  onClick={() => setIsModalOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <Image
                  src={awardCertImage}
                  alt={awardCertAlt}
                  width={1200}
                  height={800}
                  className="max-w-full max-h-[90vh] object-contain"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  );
}
