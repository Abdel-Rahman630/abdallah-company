import VideoSection from "@/components/home/VideoSection";
import WhoWeAre from "@/components/home/WhoWeAre";
import OurProducts from "@/components/home/OurProducts";
import OurBranches from "@/components/home/OurBranches";
import News from "@/components/home/News";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abdallah Company | Home",
  description: "Discover our premium products, news, and global branches. We deliver excellence and innovative solutions.",
  openGraph: {
    title: "Abdullah Hashim Company",
    description: "Driving Progress Through Innovation, Quality, and Reliability",
    url: "https://abdallah-company.com",
    siteName: "Abdullah Hashim Company",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullah Hashim Company",
    description: "Driving Progress Through Innovation, Quality, and Reliability",
  },
};

export default function Home() {
  return (
    <>
      <VideoSection />
      <WhoWeAre />
      <OurProducts />
      <OurBranches />
      <News />
    </>
  );
}
