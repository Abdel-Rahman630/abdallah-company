import WhyJoinUs from "@/components/careers/WhyJoinUs";
import { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";

export const metadata: Metadata = {
  title: "Abdallah Company | Careers",
  description: "Explore career opportunities at Abdullah Hashim Company and join our team.",
};

export default function CareersPage() {
  return (
    <>
      <PageBanner image="/careers.png" title="Careers" />
      <WhyJoinUs />
    </>
  );
}
