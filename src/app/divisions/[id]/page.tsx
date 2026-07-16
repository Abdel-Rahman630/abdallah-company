import PageBanner from "@/components/ui/PageBanner";
import Brands from "@/components/brands/Brands";
import { RevealText } from "@/components/ui/ScrollReveal";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDivisionById } from "@/services/divisions.service";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { id } = await params;
    const data = await getDivisionById(id, "en");
    return {
      title: `Abdullah Hashim Company | ${data.name || "Divisions"}`,
      description: data.description?.substring(0, 160) || "AHCL divisions.",
    };
  } catch (error) {
    return {
      title: "Abdullah Hashim Company | Divisions",
    };
  }
}

export default async function DivisionPage({ params }: Props) {
  const { id } = await params;

  let data;
  try {
    data = await getDivisionById(id, "en");
  } catch (error) {
    console.error("Failed to fetch division:", error);
    notFound();
  }

  if (!data) return notFound();

  return (
    <>
      <PageBanner image={data.banner || "/auto-banner.png"} title={data.name} />

      {/* ── Overview Section ── */}
      <section className="pt-[80px] lg:pt-[120px] pb-[80px]">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-[30px]">
            {/* Left – title */}
            <div className="w-full lg:w-[40%] shrink-0">
              <RevealText>
                <h2 className="text-[#1E1E1E] text-[2rem] font-bold leading-snug">
                  {data.title}
                </h2>
              </RevealText>
            </div>

            {/* Right – paragraph */}
            <div className="flex-1">
              <RevealText delay={0.15}>
                <p className="text-[#666] text-[1rem] font-normal leading-relaxed whitespace-pre-wrap">
                  {data.description}
                </p>
              </RevealText>
            </div>
          </div>
        </div>
      </section>

      {/* ── Brands Slider + Detail ── */}
      {data.brands && data.brands.length > 0 && <Brands brands={data.brands} />}
    </>
  );
}
