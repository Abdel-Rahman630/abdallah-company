import CareersBanner from "@/components/careers/CareersBanner";
import WhyJoinUs from "@/components/careers/WhyJoinUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abdallah Company | Careers",
  description: "Explore career opportunities at Abdullah Hashim Company and join our team.",
};

export default function CareersPage() {
  return (
    <>
      <CareersBanner />
      <WhyJoinUs />
    </>
  );
}
