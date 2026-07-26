import React from "react";
import Link from "next/link";
import Image from "next/image";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";

export default function FooterBrand({ t }: { t: (key: string) => string }) {
  return (
    <div>
      <Image src="/mainLogo.svg" alt="Footer Logo" width={228} height={50} className="mb-[24px]" />
      <p className="text-[rgba(255,255,255,0.70)] text-[0.9rem] font-normal mb-[24px]">{t("footer.legacy")}</p>
      <div className="flex items-center gap-[12px]">
        <Link
          target="_blank"
          href="https://www.linkedin.com/company/abdullah-hashim-co--ltd-/"
          className="flex items-center justify-center w-[36px] h-[36px] rounded-[18px] border border-[rgba(255,255,255,0.30)] hover:bg-[rgba(255,255,255,0.1)] transition-colors"
          aria-label="Abdullah Hashim Co. Ltd. LinkedIn"
        >
          <LinkedInIcon />
        </Link>
      </div>
    </div>
  );
}
