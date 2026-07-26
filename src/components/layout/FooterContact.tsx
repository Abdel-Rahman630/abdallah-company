import React from "react";
import Link from "next/link";
import { LocationIcon } from "@/components/icons/LocationIcon";
import { PhoneIcon } from "@/components/icons/PhoneIcon";
import { MailIcon } from "@/components/icons/MailIcon";

export default function FooterContact({ t }: { t: (key: string) => string }) {
  return (
    <div>
      <h2 className="text-[#FFF] text-[1rem] font-bold uppercase pb-[1rem] relative mb-[1rem]">
        {t("footer.contact")}
        <span className="absolute bottom-0 left-0 w-[32px] h-[2px] bg-[#D0A42A]"></span>
      </h2>
      <ul className="space-y-[12px]">
        <li>
          <Link
            target="_blank"
            href="/contact-us"
            className="flex items-start gap-[10px] text-[rgba(255,255,255,0.70)] text-[0.9rem] font-normal hover:text-white transition"
          >
            <span className="mt-[2px]">
              <LocationIcon />
            </span>
            <span>{t("footer.address")}</span>
          </Link>
        </li>
        <li>
          <Link
            href="telto:920002208"
            className="flex items-center gap-[10px] text-[rgba(255,255,255,0.70)] text-[0.9rem] font-normal hover:text-white transition"
          >
            <PhoneIcon />
            <span>{t("footer.phone")}</span>
          </Link>
        </li>
        <li>
          <Link
            href="mailto:info@ahcl.com.sa"
            className="flex items-center gap-[10px] text-[rgba(255,255,255,0.70)] text-[0.9rem] font-normal hover:text-white transition"
          >
            <MailIcon />
            <span>{t("footer.email")}</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
