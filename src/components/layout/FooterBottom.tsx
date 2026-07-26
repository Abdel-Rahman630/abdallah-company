import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function FooterBottom({ t }: { t: (key: string) => string }) {
  return (
    <div className="pt-[24px] flex flex-col lg:flex-row items-center justify-between gap-4">
      <div className="lg:order-1 order-2 text-[rgba(255,255,255,0.70)] text-[0.75rem] font-normal text-center md:text-left">
        {t("footer.copyright")}
      </div>
      <div className="flex items-center gap-[8px] lg:order-2 order-3">
        <span className="text-[#AAA] text-[0.75rem] font-medium">{t("footer.developedBy")}</span>
        <Link href="http://icon-creations.com/" target="_blank">
          <Image src="/icon.svg" alt="Developer Icon" width={63} height={24} />
        </Link>
      </div>
      <div className="lg:order-3 order-1 flex items-center text-[#FFF] text-[0.75rem] font-normal">
        <Link href="/privacy-policy" className="hover:text-gray-300 transition">
          {t("footer.privacy")}
        </Link>
        <span className="w-[1px] h-[12px] bg-[rgba(255,255,255,0.30)] mx-[16px]"></span>
        <Link href="/cookies-policy" className="hover:text-gray-300 transition">
          Cookies Policy
        </Link>
      </div>
    </div>
  );
}
