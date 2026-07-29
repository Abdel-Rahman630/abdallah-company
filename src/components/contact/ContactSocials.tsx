import React from "react";
import { RevealText } from "@/components/ui/ScrollReveal";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { MailIcon } from "@/components/icons/MailIcon";
import { PhoneIcon } from "@/components/icons/PhoneIcon";

export default function ContactSocials() {
  return (
    <div className="w-full lg:w-[400px] shrink-0">
      <RevealText delay={0.3}>
        <h3 className="text-[#1E1E1E] text-[1.5rem] font-bold mb-[1rem]">
          Follow Our Progress
        </h3>
      </RevealText>

      <RevealText delay={0.4}>
        <p className="text-[#6B7280] text-[0.8rem] font-normal mb-[32px]">
          Join our community and stay updated with AHCL news
        </p>
      </RevealText>

      <RevealText delay={0.5}>
        <ul className="flex flex-col gap-[8px] mb-[32px]">
          {/* LinkedIn */}
          <li className="p-[16px] border border-[#E5E7EB] rounded-[10px] bg-white w-full">
            <a
              href="https://www.linkedin.com/company/abdullah-hashim-co--ltd-/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-[20px] group w-full"
            >
              <div className="w-[48px] h-[48px] rounded-[24px] bg-[#F9F9F9] flex items-center justify-center shrink-0">
                <LinkedInIcon color="#1E1E1E" className="w-[24px] h-[24px]" />
              </div>
              <div>
                <h4 className="text-[#1E1E1E] text-[1.1rem] font-bold">
                  LinkedIn
                </h4>
                <span className="text-[#6B7280] text-[14px] font-normal">
                  Abdullah Hashim Company
                </span>
              </div>
            </a>
          </li>
          {/* Email */}
          <li className="p-[16px] border border-[#E5E7EB] rounded-[10px] bg-white w-full">
            <a
              href="mailto:info@ahcl.com.sa"
              className="flex items-center gap-[20px] group w-full"
            >
              <div className="w-[48px] h-[48px] rounded-[24px] bg-[#F9F9F9] flex items-center justify-center shrink-0">
                <MailIcon color="#1E1E1E" className="w-[24px] h-[24px]" />
              </div>
              <div>
                <h4 className="text-[#1E1E1E] text-[1.1rem] font-bold">
                  Email Address
                </h4>
                <span className="text-[#6B7280] text-[14px] font-normal">
                  info@ahcl.com.sa
                </span>
              </div>
            </a>
          </li>
          {/* Phone */}
          <li className="p-[16px] border border-[#E5E7EB] rounded-[10px] bg-white w-full">
            <a
              href="tel:0122638200"
              className="flex items-center gap-[20px] group w-full"
            >
              <div className="w-[48px] h-[48px] rounded-[24px] bg-[#F9F9F9] flex items-center justify-center shrink-0">
                <PhoneIcon color="#1E1E1E" className="w-[24px] h-[24px]" />
              </div>
              <div>
                <h4 className="text-[#1E1E1E] text-[1.1rem] font-bold">
                  Phone Number
                </h4>
                <span className="text-[#6B7280] text-[14px] font-normal">
                  +012 263 8200
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
            Customer Service
          </h4>
          <div className="flex flex-col gap-[12px]">
            <div className="flex items-center gap-[12px]">
              <PhoneIcon color="#1E1E1E" className="w-[16px] h-[16px]" />
              <a
                href="tel:920002208"
                className="text-[#666666] text-[1rem] font-semibold hover:text-[#D1A52A] transition-colors"
              >
                920 002 208
              </a>
            </div>
          </div>
        </div>
      </RevealText>
    </div>
  );
}
