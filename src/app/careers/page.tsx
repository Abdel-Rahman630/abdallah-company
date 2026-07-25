import WhyJoinUs from "@/components/careers/WhyJoinUs";
import { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";
import { useLanguage } from "@/providers/LanguageProvider";

export const metadata: Metadata = {
  title: "Abdallah Company | Careers",
  description: "Explore career opportunities at Abdullah Hashim Company and join our team.",
};

export default function CareersPage() {
    const { t } = useLanguage();
  
  return (
    <>
      <PageBanner image="/careers.png" title={t("careers.title")} />
      <WhyJoinUs />
    </>
  );
}
