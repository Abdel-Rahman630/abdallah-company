import AboutUsClient from "./AboutUsClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abdallah Company | About Us",
  description: "Driving Progress Through Innovation, Quality, and Reliability",
};

export default function AboutUsPage() {
  return <AboutUsClient />;
}
