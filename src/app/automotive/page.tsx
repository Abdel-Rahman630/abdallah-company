import PageBanner from "@/components/ui/PageBanner";
import AutomotiveBrands from "@/components/automotive/AutomotiveBrands";
import { RevealText } from "@/components/ui/ScrollReveal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abdullah Hashim Company | Automotive",
  description:
    "AHCL is a premier automotive distributor in Saudi Arabia — Honda, Shineray SRM, Forland and more.",
};

export default function AutomotivePage() {
  return (
    <>
      <PageBanner image="/auto-banner.png" title="Automotive" />

      {/* ── Overview Section ── */}
      <section className="pt-[80px] lg:pt-[120px] pb-[80px]">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-[30px]">
            {/* Left – title */}
            <div className="w-full lg:w-[40%] shrink-0">
              <RevealText>
                <h2 className="text-[#1E1E1E] text-[2rem] font-bold leading-snug">
                  Comprehensive Automotive Solutions
                </h2>
              </RevealText>
            </div>

            {/* Right – paragraph */}
            <div className="flex-1">
              <RevealText delay={0.15}>
                <p className="text-[#666] text-[1rem] font-normal leading-relaxed">
                  <span className="text-[#1E1E1E] font-bold">
                    Abdullah Hashim Company Ltd.{" "}
                  </span>
                  (AHCL) is a premier automotive distributor in Saudi Arabia,
                  offering a comprehensive range of vehicles to meet diverse
                  mobility and commercial needs. As the exclusive distributor for
                  Honda in KSA since 1960, we provide category-leading sedans,
                  SUVs, and high-performance passenger vehicles alongside an
                  iconic lineup of Honda motorcycles for touring, racing, and
                  daily commuting. Beyond personal mobility, AHCL powers Saudi
                  businesses with robust commercial vehicles. Our Shineray SRM
                  light commercial vehicles—including cargo vans and mini
                  trucks—deliver everyday practicality, while Forland trucks
                  provide heavy-duty transport solutions with maximum payload and
                  low ownership costs. Backed by AHCL&apos;s expansive nationwide
                  infrastructure, every passenger, commercial, and two-wheeled
                  vehicle receives expert maintenance and genuine spare parts
                  support, guaranteeing exceptional performance and long-term
                  reliability for individuals and corporate fleets alike.
                </p>
              </RevealText>
            </div>
          </div>
        </div>
      </section>

      {/* ── Brands Slider + Detail ── */}
      <AutomotiveBrands />
    </>
  );
}
