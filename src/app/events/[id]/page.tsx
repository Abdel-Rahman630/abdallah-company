import { getEventById } from "@/services/events.service";
import NewsBanner from "@/components/news/NewsBanner";
import Link from "next/link";
import { RevealImage, RevealText } from "@/components/ui/ScrollReveal";
import { Metadata } from "next";
import NewsDetailsSlider from "@/components/sliders/NewsDetailsSlider";
import RegisterInterestForm from "@/components/forms/RegisterInterestForm";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  try {
    const { id } = await params;
    const event = await getEventById(id);
    return {
      title: `Abdallah Company | ${event.title}`,
      description: event.excerpt || event.description?.substring(0, 150) || "Event details",
    };
  } catch (err) {
    return {
      title: "Abdallah Company | Event Details",
      description: "Learn more about the latest events at Abdullah Hashim Company.",
    };
  }
}

export default async function EventDetailsPage({ params }: PageProps) {
  const { id } = await params;
  let event;
  try {
    event = await getEventById(id, "en");
  } catch (error) {
    return notFound();
  }

  if (!event) return notFound();

  // Fallback for dates
  const dateStr = event.starts_at || event.date || event.start_date || event.created_at || new Date().toISOString();
  const d = new Date(dateStr);
  const formattedDate = event.formatted_date || d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  
  // Format time if available
  let timeStr = "TBA";
  if (event.starts_at) {
    const startD = new Date(event.starts_at);
    timeStr = startD.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
    if (event.ends_at) {
      const endD = new Date(event.ends_at);
      timeStr += ` - ${endD.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}`;
    }
  } else if (event.time) {
    timeStr = event.time;
  }

  // Handle images for slider
  const images = [];
  const mainImg = event.cover_image_url || event.cover_image || event.image;
  if (mainImg) images.push(mainImg);
  if (Array.isArray(event.images)) {
    event.images.forEach((img: string) => {
      if (img !== mainImg) images.push(img);
    });
  }

  return (
    <>
      <NewsBanner />

      <section className="py-[80px] lg:py-[120px] bg-white">
        <div className="container mx-auto">
          {/* Back Button */}
          <div className="self-start mb-[40px]">
            <RevealText delay={0.1}>
              <Link
                href="/news"
                className="group inline-flex items-center gap-[10px] text-black text-[1rem] uppercase underline"
              >
                <svg
                  className="transition-transform duration-500 group-hover:-translate-x-1 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="10"
                  viewBox="0 0 13 10"
                  fill="none"
                >
                  <path
                    d="M0.337583 4.24708L4.42092 0.163749C4.53093 0.0574899 4.67829 -0.00130703 4.83123 2.20514e-05C4.98418 0.00135113 5.13049 0.0626998 5.23864 0.170855C5.3468 0.279009 5.40815 0.425316 5.40948 0.578265C5.4108 0.731213 5.35201 0.878564 5.24575 0.988582L2.15822 4.07617H12.4167C12.5714 4.07617 12.7197 4.13762 12.8291 4.24702C12.9385 4.35642 13 4.50479 13 4.6595C13 4.81421 12.9385 4.96258 12.8291 5.07198C12.7197 5.18137 12.5714 5.24283 12.4167 5.24283H2.15822L5.24575 8.33042C5.30146 8.38423 5.3459 8.44859 5.37648 8.51976C5.40705 8.59093 5.42314 8.66748 5.42381 8.74493C5.42449 8.82239 5.40973 8.8992 5.3804 8.97089C5.35106 9.04258 5.30775 9.10771 5.25298 9.16248C5.19821 9.21725 5.13308 9.26056 5.06139 9.2899C4.9897 9.31923 4.91289 9.33399 4.83543 9.33331C4.75798 9.33264 4.68143 9.31655 4.61026 9.28597C4.53909 9.2554 4.47473 9.21096 4.42092 9.15525L0.337583 5.07192C0.228187 4.96252 0.166838 4.81418 0.166838 4.6595C0.166838 4.50482 0.228187 4.35647 0.337583 4.24708Z"
                    fill="#1E1E1E"
                  />
                </svg>
                back to news &amp; events
              </Link>
            </RevealText>
          </div>

          {/* Main Layout: Left Column (Slider + Content) and Right Column (Sidebar) */}
          <div className="w-full flex flex-col lg:flex-row gap-[5%]">
            
            {/* Left Column */}
            <div className="w-full lg:w-[65%]">
              {/* Slider */}
              <div className="w-full">
                <RevealImage delay={0.2}>
                  <NewsDetailsSlider images={images} />
                </RevealImage>
              </div>

              {/* Meta Row */}
              <div className="w-full flex items-center pb-[24px]">
                <RevealText delay={0.3}>
                  <div className="flex gap-[1rem] items-center">
                    <span className="text-[#1E1E1E] text-[0.7rem] rounded-[4px] font-bold uppercase bg-[#D1A52A] px-[10px] py-[4px]">
                      {event.computed_status === "upcoming" ? "Upcoming Event" : "Past Event"}
                    </span>
                  </div>
                </RevealText>
              </div>

              {/* Article Content */}
              <div className="w-full mb-[48px]">
                <RevealText delay={0.4}>
                  <h1 className="text-[#1E1E1E] text-[2.5rem] font-bold mb-[24px] leading-tight">
                    {event.title}
                  </h1>
                </RevealText>

                <RevealText delay={0.5}>
                  <p className="text-[#333] text-[1rem] font-normal text-justify leading-relaxed">
                    {event.excerpt || event.description}
                  </p>
                </RevealText>
              </div>

              {/* Register Interest Form */}
              <RegisterInterestForm />
            </div>

            {/* Right Column (Sidebar) */}
            <div className="w-full lg:w-[30%] shrink-0">
              <RevealText delay={0.3}>
                <ul className="flex flex-col items-start gap-[32px] mt-[32px] mb-[32px]">
                  
                  {/* Date */}
                  <li className="flex gap-[1rem] items-start w-full">
                    <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M6.66667 1.66602V4.99962M13.3333 1.66602V4.99962M2.5 8.33322H17.5M4.16667 3.33282H15.8333C16.7538 3.33282 17.5 4.07907 17.5 4.99962V16.6672C17.5 17.5878 16.7538 18.334 15.8333 18.334H4.16667C3.24619 18.334 2.5 17.5878 2.5 16.6672V4.99962C2.5 4.07907 3.24619 3.33282 4.16667 3.33282Z" stroke="#D1A52A" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <div>
                      <h4 className="text-[#1E1E1E] text-[0.75rem] font-semibold uppercase pb-[4px]">Date</h4>
                      <p className="text-[#666] text-[0.9rem] font-normal">{formattedDate}</p>
                    </div>
                  </li>

                  {/* Time */}
                  <li className="flex gap-[1rem] items-start w-full">
                    <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <g clipPath="url(#clip0_518_3611)">
                        <path d="M9.99806 4.99962V10L13.3317 11.6668M18.3321 10C18.3321 14.6028 14.6008 18.334 9.99806 18.334C5.39532 18.334 1.66406 14.6028 1.66406 10C1.66406 5.39727 5.39532 1.66602 9.99806 1.66602C14.6008 1.66602 18.3321 5.39727 18.3321 10Z" stroke="#D1A52A" strokeWidth="2" strokeLinecap="round"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_518_3611">
                          <rect width="20" height="20" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                    <div>
                      <h4 className="text-[#1E1E1E] text-[0.75rem] font-semibold uppercase pb-[4px]">Time</h4>
                      <p className="text-[#666] text-[0.9rem] font-normal">{timeStr}</p>
                    </div>
                  </li>

                  {/* Venue */}
                  <li className="flex gap-[1rem] items-start w-full">
                    <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M10.5027 18.1667C12.0526 16.8283 16.6679 12.4945 16.6679 8.3333C16.6679 6.56503 15.9656 4.86918 14.7155 3.61882C13.4654 2.36846 11.7699 1.66602 10.0019 1.66602C8.234 1.66602 6.53848 2.36846 5.28836 3.61882C4.03825 4.86918 3.33594 6.56503 3.33594 8.3333C3.33594 12.4945 7.95131 16.8283 9.50115 18.1667C9.64554 18.2753 9.82129 18.334 10.0019 18.334C10.1826 18.334 10.3583 18.2753 10.5027 18.1667Z" stroke="#D1A52A" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <div>
                      <h4 className="text-[#1E1E1E] text-[0.75rem] font-semibold uppercase pb-[4px]">Venue</h4>
                      <p className="text-[#666] text-[0.9rem] font-normal">{event.venue_name || event.venue || "TBA"}</p>
                    </div>
                  </li>

                  {/* Category */}
                  <li className="flex gap-[1rem] items-start w-full">
                    <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <g clipPath="url(#clip0_518_3625)">
                        <path d="M9.30803 1.66602C9.75006 1.66611 10.174 1.84178 10.4865 2.15439L17.7404 9.40833C18.1168 9.78712 18.3281 10.2994 18.3281 10.8334C18.3281 11.3675 18.1168 11.8798 17.7404 12.2586L12.2566 17.7424C11.8778 18.1188 11.3655 18.33 10.8315 18.33C10.2975 18.33 9.78517 18.1188 9.40637 17.7424L2.15244 10.4884C1.83983 10.1759 1.66416 9.75201 1.66406 9.30999V3.33282C1.66406 2.89076 1.83967 2.4668 2.15226 2.15421C2.46485 1.84162 2.8888 1.66602 3.33087 1.66602H9.30803Z" stroke="#D1A52A" strokeWidth="2" strokeLinecap="round"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_518_3625">
                          <rect width="20" height="20" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                    <div>
                      <h4 className="text-[#1E1E1E] text-[0.75rem] font-semibold uppercase pb-[4px]">Category</h4>
                      <p className="text-[#666] text-[0.9rem] font-normal capitalize">{event.category}</p>
                    </div>
                  </li>

                  {/* Organizer */}
                  {event.organizer && (
                  <li className="flex gap-[1rem] items-start w-full">
                    <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M15.8321 17.5V15.8333C15.8321 14.9493 15.4808 14.1014 14.8556 13.4763C14.2304 12.8512 13.3825 12.5 12.4983 12.5H7.49778C6.61362 12.5 5.76568 12.8512 5.14048 13.4763C4.51529 14.1014 4.16406 14.9493 4.16406 15.8333V17.5M13.3318 5.83333C13.3318 7.67428 11.8392 9.16667 9.99806 9.16667C8.1569 9.16667 6.66435 7.67428 6.66435 5.83333C6.66435 3.99238 8.1569 2.5 9.99806 2.5C11.8392 2.5 13.3318 3.99238 13.3318 5.83333Z" stroke="#D1A52A" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <div>
                      <h4 className="text-[#1E1E1E] text-[0.75rem] font-semibold uppercase pb-[4px]">Organizer</h4>
                      <p className="text-[#666] text-[0.9rem] font-normal">{event.organizer}</p>
                    </div>
                  </li>
                  )}
                </ul>
              </RevealText>

              {/* Share Event */}
              <RevealText delay={0.4}>
                <div>
                  <h4 className="text-[#949494] text-[0.9rem] font-semibold uppercase mb-[1rem]">share event</h4>
                  <ul className="flex gap-[8px]">
                    <li>
                      <a
                        href="#"
                        target="_blank"
                        className="w-[32px] h-[32px] rounded-[16px] border border-[#E5E5E5] flex items-center justify-center hover:bg-gray-50 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M10.0009 1.33203H12.0008V3.99891H10.0009C9.82412 3.99891 9.65456 4.06915 9.52954 4.19419C9.40453 4.31922 9.3343 4.48881 9.3343 4.66563V6.66579H12.0008L11.3342 9.33267H9.3343V14.6664H6.66782V9.33267H4.66797V6.66579H6.66782V4.66563C6.66782 3.78151 7.01899 2.93359 7.64406 2.30842C8.26914 1.68325 9.11692 1.33203 10.0009 1.33203Z"
                            stroke="#666666"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        target="_blank"
                        className="w-[32px] h-[32px] rounded-[16px] border border-[#E5E5E5] flex items-center justify-center hover:bg-gray-50 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <g clipPath="url(#clip0_518_3077)">
                            <path
                              d="M13.333 4.93215C14.1997 4.06544 14.6664 2.66538 14.6664 2.66538C14.6664 2.66538 13.3997 3.46542 12.6663 3.46542C10.6661 1.59866 7.39918 3.19874 7.99923 5.99887C5.73238 6.06554 3.46554 5.06549 1.99875 3.33208C0.331951 6.39888 1.99875 10.3324 5.33235 11.3324C4.2656 12.2658 2.79882 12.7325 1.33203 12.6658C7.06582 16.466 14.3997 11.5991 13.333 4.93215Z"
                              stroke="#666666"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_518_3077">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        target="_blank"
                        className="w-[32px] h-[32px] rounded-[16px] border border-[#E5E5E5] flex items-center justify-center hover:bg-gray-50 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M13.4948 6.50382C12.7446 5.75364 11.7271 5.3322 10.6661 5.3322C9.60516 5.3322 8.58766 5.75364 7.83746 6.50382C7.08725 7.254 6.66579 8.27146 6.66579 9.33237V13.9992H9.33267V9.33237C9.33267 8.97873 9.47316 8.63958 9.72323 8.38952C9.9733 8.13946 10.3125 7.99898 10.6661 7.99898C11.0198 7.99898 11.3589 8.13946 11.609 8.38952C11.8591 8.63958 11.9996 8.97873 11.9996 9.33237V13.9992H14.6664V9.33237C14.6664 8.27146 14.245 7.254 13.4948 6.50382Z"
                            stroke="#666666"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M3.99891 5.99889H1.33203V13.9992H3.99891V5.99889Z"
                            stroke="#666666"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M2.66547 3.99881C3.40191 3.99881 3.99891 3.40183 3.99891 2.66542C3.99891 1.92901 3.40191 1.33203 2.66547 1.33203C1.92903 1.33203 1.33203 1.92901 1.33203 2.66542C1.33203 3.40183 1.92903 3.99881 2.66547 3.99881Z"
                            stroke="#666666"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </RevealText>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
