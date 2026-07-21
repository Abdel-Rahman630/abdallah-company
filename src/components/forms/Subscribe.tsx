"use client";

import React from "react";
import { useNewsletter } from "@/hooks/home/useNewsletter";
import { useLanguage } from "@/providers/LanguageProvider";

export default function Subscribe() {
  const { t } = useLanguage();
  const { email, setEmail, divisionId, setDivisionId, divisions, subscribeStatus, handleSubscribe } = useNewsletter();

  return (
    <section className="container mx-auto lg:pb-[120px] pb-[80px]">
      <div className="rounded-[12px] border border-white bg-[#DFDFDF] p-[32px] grid grid-cols-1 lg:grid-cols-5 gap-[1rem] lg:gap-[32px] items-center">
        {/* Col 1 */}
        <div className="md:col-span-1">
          <h2 className="text-[#1E1E1E] text-[1.5rem] font-medium">
            Stay Updated With <span className="font-bold">AHCL</span>
          </h2>
        </div>

        {/* Col 2 */}
        <div className="md:col-span-1">
          <p className="text-[#6B6B6B] text-[0.75rem] font-normal leading-relaxed">
            Join our newsletter for exclusive event invites and industry news.
          </p>
        </div>

        {/* Form (Cols 3, 4, 5) */}
        <form 
          onSubmit={(e) => { e.preventDefault(); handleSubscribe(e); }}
          className="lg:col-span-3 flex flex-col gap-[16px]"
        >
          {/* Input row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[16px]">
            {/* Select Box */}
            <div className="relative h-full">
              <select 
                value={divisionId}
                onChange={(e) => setDivisionId(e.target.value)}
                disabled={subscribeStatus === "loading"}
                className="w-full h-full rounded-[4px] border border-[#8D8D8D] p-[16px] pr-[40px] text-[#1E1E1E] text-[0.8rem] font-normal bg-transparent outline-none appearance-none"
              >
                <option value="">{t("contact.selectDivision")}</option>
                {divisions.map((d: any) => (
                  <option key={d.id} value={d.id}>{d.title || d.name}</option>
                ))}
              </select>
              {/* Custom dropdown arrow */}
              <div className="absolute right-[16px] top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="5"
                  viewBox="0 0 9 5"
                  fill="none"
                >
                  <path d="M4.33203 4.5L8.66216 0H0.00190401L4.33203 4.5Z" fill="#1E1E1E" />
                </svg>
              </div>
            </div>

            {/* Email Input */}
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={subscribeStatus === "loading"}
                placeholder="Email address"
                className="w-full h-full rounded-[3px] border-0 border-b border-[#C6C6C6] bg-[rgba(255,255,255,0.20)] text-[#1E1E1E] text-[0.8rem] font-normal py-[12px] px-[10px] outline-none placeholder:text-[#6B6B6B]"
              />
            </div>

            {/* Submit Button */}
            <div className="flex flex-col">
              <button
                type="submit"
                disabled={subscribeStatus === "loading" || !email || !divisionId}
                className="w-full lg:w-[150px] h-full bg-[#D1A52A] text-[#1E1E1E] rounded-[4px] py-[16px] px-[16px] text-[0.8rem] uppercase flex justify-center items-center tracking-[1px] "
              >
                {subscribeStatus === "loading" ? t("newsletter.loading") : "Subscribe"}
              </button>
            </div>
          </div>

          {/* Status — spans the full form width */}
          <div id="newsletter-status" aria-live="polite" aria-atomic="true" className="w-full">
            {subscribeStatus === "success" && (
              <div className="w-full p-[16px] rounded-[8px] bg-green-50 border border-green-200">
                <p className="text-green-800 font-bold text-[0.9rem]">{t("newsletterStatus.successTitle")}</p>
                <p className="text-green-700 text-[0.85rem]">{t("newsletterStatus.successDesc")}</p>
              </div>
            )}
            {subscribeStatus === "already" && (
              <div className="w-full p-[16px] rounded-[8px] bg-blue-50 border border-blue-200">
                <p className="text-blue-800 font-bold text-[0.9rem]">{t("newsletterStatus.alreadyTitle")}</p>
                <p className="text-blue-700 text-[0.85rem]">{t("newsletterStatus.alreadyDesc")}</p>
              </div>
            )}
            {subscribeStatus === "validation" && (
              <div className="w-full p-[16px] rounded-[8px] bg-red-50 border border-red-200">
                <p className="text-red-800 font-bold text-[0.9rem]">{t("newsletterStatus.validationTitle")}</p>
                <p className="text-red-700 text-[0.85rem]">{t("newsletterStatus.validationDesc")}</p>
              </div>
            )}
            {subscribeStatus === "rate_limit" && (
              <div className="w-full p-[16px] rounded-[8px] bg-yellow-50 border border-yellow-200">
                <p className="text-yellow-800 font-bold text-[0.9rem]">{t("newsletterStatus.rateLimitTitle")}</p>
                <p className="text-yellow-700 text-[0.85rem]">{t("newsletterStatus.rateLimitDesc")}</p>
              </div>
            )}
            {subscribeStatus === "error" && (
              <div className="w-full p-[16px] rounded-[8px] bg-red-50 border border-red-200">
                <p className="text-red-800 font-bold text-[0.9rem]">{t("newsletterStatus.errorTitle")}</p>
                <p className="text-red-700 text-[0.85rem]">{t("newsletterStatus.errorDesc")}</p>
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
