"use client";

import React from "react";
import { RevealText } from "@/components/ui/ScrollReveal";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { MailIcon } from "@/components/icons/MailIcon";
import { PhoneIcon } from "@/components/icons/PhoneIcon";
import type { ContactSectionFields } from "@/types/models";
import { useLanguage } from "@/providers/LanguageProvider";

interface ContactSocialsProps {
  fields?: ContactSectionFields | null;
}

export default function ContactSocials({ fields }: ContactSocialsProps) {
  const { t } = useLanguage();
  const followTitle = fields?.follow_title || t("contact.followTitle");
  const followDescription = fields?.follow_description;
  const linkedInTitle = fields?.linkedin_title || "LinkedIn";
  const linkedInValue = fields?.linkedin_value || "Abdullah Hashim Company";
  const linkedInUrl = fields?.linkedin_url || "https://www.linkedin.com/company/abdullah-hashim-co--ltd-/";
  const emailTitle = fields?.email_title || t("contact.emailTitle");
  const contactEmail = fields?.contact_email || "info@ahcl.com.sa";
  const phoneTitle = fields?.phone_title || t("contact.phoneTitle");
  const contactPhone = fields?.contact_phone || "+966 12 6621500";
  const customerServiceTitle = fields?.customer_service_title || t("contact.customerServiceTitle");
  const customerServicePhone = fields?.customer_service_phone || "920 002 208";

  return (
    <div className="w-full lg:w-[400px] shrink-0">
      <RevealText delay={0.3}>
        <h3 className="text-[#1E1E1E] text-[1.5rem] font-bold mb-[1rem]">
          {followTitle}
        </h3>
      </RevealText>

      {followDescription ? (
        <RevealText delay={0.4}>
          <div
            className="text-[#6B7280] text-[0.8rem] font-normal mb-[32px] [&_p]:m-0"
            dangerouslySetInnerHTML={{ __html: followDescription }}
          />
        </RevealText>
      ) : null}

      <RevealText delay={0.5}>
        <ul className="flex flex-col gap-[8px] mb-[32px]">
          {/* LinkedIn */}
          <li className="p-[16px] border border-[#E5E7EB] rounded-[10px] bg-white w-full">
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-[20px] group w-full"
            >
              <div className="w-[48px] h-[48px] rounded-[24px] bg-[#F9F9F9] flex items-center justify-center shrink-0">
                <LinkedInIcon color="#1E1E1E" className="w-[24px] h-[24px]" />
              </div>
              <div>
                <h4 className="text-[#1E1E1E] text-[1.1rem] font-bold">
                  {linkedInTitle}
                </h4>
                <span className="text-[#6B7280] text-[14px] font-normal">
                  {linkedInValue}
                </span>
              </div>
            </a>
          </li>
          {/* Email */}
          <li className="p-[16px] border border-[#E5E7EB] rounded-[10px] bg-white w-full">
            <a
              href={`mailto:${contactEmail}`}
              className="flex items-center gap-[20px] group w-full"
            >
              <div className="w-[48px] h-[48px] rounded-[24px] bg-[#F9F9F9] flex items-center justify-center shrink-0">
                <MailIcon color="#1E1E1E" className="w-[24px] h-[24px]" />
              </div>
              <div>
                <h4 className="text-[#1E1E1E] text-[1.1rem] font-bold">
                  {emailTitle}
                </h4>
                <span className="text-[#6B7280] text-[14px] font-normal">
                  {contactEmail}
                </span>
              </div>
            </a>
          </li>
          {/* Phone */}
          <li className="p-[16px] border border-[#E5E7EB] rounded-[10px] bg-white w-full">
            <a
              href={`tel:${contactPhone.replace(/\s+/g, "")}`}
              className="flex items-center gap-[20px] group w-full"
            >
              <div className="w-[48px] h-[48px] rounded-[24px] bg-[#F9F9F9] flex items-center justify-center shrink-0">
                <PhoneIcon color="#1E1E1E" className="w-[24px] h-[24px]" />
              </div>
              <div>
                <h4 className="text-[#1E1E1E] text-[1.1rem] font-bold">
                  {phoneTitle}
                </h4>
                <span className="text-[#6B7280] text-[14px] font-normal">
                  {contactPhone}
                </span>
              </div>
            </a>
          </li>
        </ul>
      </RevealText>

      {/* Customer Service */}
      <RevealText delay={0.6}>
        <div className="flex flex-col justify-center px-[24px] py-[32px] gap-[16px] rounded-[10px] bg-[#F9F9F9]">
          <h4 className="text-[#1E1E1E] text-[1.1rem] font-bold">
            {customerServiceTitle}
          </h4>
          <div className="flex flex-col gap-[12px]">
            <div className="flex items-center gap-[12px]">
              <PhoneIcon color="#1E1E1E" className="w-[16px] h-[16px]" />
              <a
                href={`tel:${customerServicePhone.replace(/\s+/g, "")}`}
                className="text-[#666666] text-[1rem] font-semibold hover:text-[#D1A52A] transition-colors"
              >
                {customerServicePhone}
              </a>
            </div>
          </div>
        </div>
      </RevealText>
    </div>
  );
}
