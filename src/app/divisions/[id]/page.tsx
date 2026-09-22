import DivisionsBanner from "@/components/ui/DivisionsBanner";
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
    const decodedId = decodeURIComponent(id || "");
    const cookieStore = await cookies();
    const locale = cookieStore.get("NEXT_LOCALE")?.value || "en";
    const data = await getDivisionById(decodedId, locale);
    const siteTitle = locale === "ar" ? "شركة عبد الله هاشم المحدودة" : "Abdullah Hashim Company Limited";
    const fallbackDesc = locale === "ar" ? "أقسام شركة عبد الله هاشم المحدودة." : "AHCL divisions.";

    if (!data) return { title: `${siteTitle} | ${locale === "ar" ? "الأقسام" : "Divisions"}` };

    const desc = data.description ? data.description.replace(/<[^>]*>/g, "").substring(0, 160) : fallbackDesc;

    return {
      title: `${siteTitle} | ${data.name || (locale === "ar" ? "الأقسام" : "Divisions")}`,
      description: desc,
    };
  } catch {
    return {
      title: "Abdullah Hashim Company Limited | Divisions",
    };
  }
}

export default async function DivisionPage({ params }: DynamicPageProps) {
  const { id } = await params;
  const decodedId = decodeURIComponent(id || "");

  let data;
  try {
    const cookieStore = await cookies();
    const locale = cookieStore.get("NEXT_LOCALE")?.value || "en";
    data = await getDivisionById(decodedId, locale);
  } catch (error) {
    console.error("Failed to fetch division:", error);
    notFound();
  }

  if (!data) return notFound();

  return (
    <>
      <DivisionsBanner image={data.banner || "/bg.png"} title={data.name} />

      {/* ── Overview Section ── */}
      <section className="pt-[80px] lg:pt-[120px] pb-[80px]" id={data.slug}>
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
                  className="text-[#666] text-[1rem] font-normal leading-relaxed whitespace-pre-wrap [&_strong]:text-black [&_strong]:font-bold"
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
                    unoptimized
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
