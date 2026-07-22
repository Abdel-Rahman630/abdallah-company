import PageBanner from "@/components/ui/PageBanner";
import GetInTouch from "@/components/contact/GetInTouch";
import FindUs from "@/components/contact/FindUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abdallah Company | Contact Us",
  description: "Get in touch with Abdullah Hashim Company. Find our locations and contact information.",
};

export default function ContactUsPage() {
  return (
    <>
      <PageBanner image="/contactanner.png" title="Contact Us" />
      <GetInTouch />
      <FindUs />
    </>
  );
}
