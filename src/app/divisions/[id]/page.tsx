import PageBanner from "@/components/ui/PageBanner";
import Brands from "@/components/brands/Brands";
import { RevealText } from "@/components/ui/ScrollReveal";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDivisionById } from "@/services/divisions.service";
import { cookies } from "next/headers";
import Image from "next/image";

type DynamicPageProps = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: DynamicPageProps): Promise<Metadata> {
  try {
    const { id } = await params;
    const cookieStore = await cookies();
    const locale = cookieStore.get("NEXT_LOCALE")?.value || "en";
    const data = await getDivisionById(id, locale);
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

export default async function DivisionPage({ params }: DynamicPageProps) {
  const { id } = await params;

  let data;
  try {
    const cookieStore = await cookies();
    const locale = cookieStore.get("NEXT_LOCALE")?.value || "en";
    data = await getDivisionById(id, locale);
  } catch (error) {
    console.error("Failed to fetch division:", error);
    notFound();
  }

  if (!data) return notFound();

  return (
    <>
      <PageBanner image={data.banner || "/bg.png"} title={data.name} />

      {/* ── Overview Section ── */}
      <section className="pt-[80px] lg:pt-[120px] pb-[80px]">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-[30px] lg:gap-[50px] items-start">
            {/* Left – title and description */}
            <div className="lg:order-1 order-2 w-full lg:flex-1">
              <RevealText>
                <h2 className="text-[#1E1E1E] text-[2rem] font-bold leading-snug mb-6">
                  {data.title}
                </h2>
              </RevealText>
              <RevealText delay={0.15}>
                <div 
                  className="text-[#666] text-[1rem] font-normal leading-relaxed whitespace-pre-wrap"
                  dangerouslySetInnerHTML={{ __html: data.description || "" }}
                />
              </RevealText>
            </div>

            {/* Right – image */}
            {data.image && (
              <div className="lg:order-2 order-1 w-full lg:w-[45%] shrink-0">
                <div className="relative w-full aspect-[4/3] rounded-[10px] overflow-hidden shadow-sm">
                  <Image
                    src={data.image}
                    alt={data.title || data.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Brands Slider + Detail ── */}
      {data.brands && data.brands.length > 0 && <Brands brands={data.brands} />}
    </>
  );
}
