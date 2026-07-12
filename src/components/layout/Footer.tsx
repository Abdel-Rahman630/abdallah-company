import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#231F20] py-[50px] md:py-[80px]">
      <div className="container mx-auto">
        {/* Top Section */}
        <div className="pb-[64px] border-b border-[rgba(255,255,255,0.30)] grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Logo & Socials */}
          <div>
            <Image
              src="/footer-logo.png"
              alt="Footer Logo"
              width={228}
              height={50}
              className="mb-[24px] "
            />
            <p className="text-[rgba(255,255,255,0.70)] text-[0.9rem] font-normal mb-[24px]">
              A Legacy of Automotive Excellence across the Kingdom of Saudi
              Arabia.
            </p>
            <div className="flex items-center gap-[12px]">
              <Link
              target="_blank"
                href="https://www.linkedin.com/company/abdullah-hashim-co--ltd-/"
                className="flex items-center justify-center w-[36px] h-[36px] rounded-[18px] border border-[rgba(255,255,255,0.30)] hover:bg-[rgba(255,255,255,0.1)] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M15.1831 7.31826C14.3391 6.47432 13.1944 6.00019 12.0008 6.00019C10.8073 6.00019 9.66259 6.47432 8.8186 7.31826C7.97462 8.16221 7.50048 9.30685 7.50048 10.5004V15.7506H10.5007V10.5004C10.5007 10.1025 10.6588 9.72099 10.9401 9.43967C11.2214 9.15836 11.603 9.00032 12.0008 9.00032C12.3987 9.00032 12.7803 9.15836 13.0616 9.43967C13.3429 9.72099 13.501 10.1025 13.501 10.5004V15.7506H16.5012V10.5004C16.5012 9.30685 16.0271 8.16221 15.1831 7.31826Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M4.50024 6.75022H1.5V15.7506H4.50024V6.75022Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M3.00012 4.50013C3.82861 4.50013 4.50024 3.82853 4.50024 3.00006C4.50024 2.1716 3.82861 1.5 3.00012 1.5C2.17163 1.5 1.5 2.1716 1.5 3.00006C1.5 3.82853 2.17163 4.50013 3.00012 4.50013Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Wrapper for Col 2 and 3 */}
          <div className="grid grid-cols-2 gap-8 md:col-span-2">
            {/* Column 2: Quick Links */}
            <div>
            <h4 className="text-[#FFF] text-[1rem] font-bold uppercase pb-[1rem] relative mb-[1rem]">
              Quick Links
              <span className="absolute bottom-0 left-0 w-[32px] h-[2px] bg-[#D0A42A]"></span>
            </h4>
            <ul className="space-y-[12px]">
              <li>
                <Link
                  href="/"
                  className="text-[rgba(255,255,255,0.70)] text-[0.9rem] font-normal hover:text-white transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-[rgba(255,255,255,0.70)] text-[0.9rem] font-normal hover:text-white transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-[rgba(255,255,255,0.70)] text-[0.9rem] font-normal hover:text-white transition"
                >
                  News & Events
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-[rgba(255,255,255,0.70)] text-[0.9rem] font-normal hover:text-white transition"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  target="_blank"
                  className="text-[rgba(255,255,255,0.70)] text-[0.9rem] font-normal hover:text-white transition"
                >
                  {"AHCL's Store"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-[#FFF] text-[1rem] font-bold uppercase pb-[1rem] relative mb-[1rem]">
              Our Products
              <span className="absolute bottom-0 left-0 w-[32px] h-[2px] bg-[#D0A42A]"></span>
            </h4>
            <ul className="space-y-[12px]">
              <li>
                <Link
                  href="#who-we-are"
                  className="text-[rgba(255,255,255,0.70)] text-[0.9rem] font-normal hover:text-white transition"
                >
                  Automotive
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="text-[rgba(255,255,255,0.70)] text-[0.9rem] font-normal hover:text-white transition"
                >
                  Marine
                </Link>
              </li>
              <li>
                <Link
                  href="#news"
                  className="text-[rgba(255,255,255,0.70)] text-[0.9rem] font-normal hover:text-white transition"
                >
                  Power solutions
                </Link>
              </li>
              <li>
                <Link
                  href="#who-we-are"
                  className="text-[rgba(255,255,255,0.70)] text-[0.9rem] font-normal hover:text-white transition"
                >
                  Agriculture
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="text-[rgba(255,255,255,0.70)] text-[0.9rem] font-normal hover:text-white transition"
                >
                  Construction Equipment
                </Link>
              </li>
              <li>
                <Link
                  href="#news"
                  className="text-[rgba(255,255,255,0.70)] text-[0.9rem] font-normal hover:text-white transition"
                >
                  Water Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="#news"
                  className="text-[rgba(255,255,255,0.70)] text-[0.9rem] font-normal hover:text-white transition"
                >
                  Material handling
                </Link>
              </li>
            </ul>
          </div>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-[#FFF] text-[1rem] font-bold uppercase pb-[1rem] relative mb-[1rem]">
              Contact Us
              <span className="absolute bottom-0 left-0 w-[32px] h-[2px] bg-[#D0A42A]"></span>
            </h4>
            <ul className="space-y-[12px]">
              <li>
                <Link
                  target="_blank"
                  href="/contact-us"
                  className="flex items-start gap-[10px] text-[rgba(255,255,255,0.70)] text-[0.9rem] font-normal hover:text-white transition"
                >
                  <span className="mt-[2px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="16"
                      viewBox="0 0 13 16"
                      fill="none"
                    >
                      <path
                        d="M6.73343 14.2006C7.9733 13.1298 11.6656 9.6628 11.6656 6.33383C11.6656 4.91921 11.1038 3.56253 10.1037 2.56224C9.10357 1.56196 7.74715 1 6.3328 1C4.91845 1 3.56203 1.56196 2.56194 2.56224C1.56185 3.56253 1 4.91921 1 6.33383C1 9.6628 4.6923 13.1298 5.93217 14.2006C6.04768 14.2874 6.18828 14.3344 6.3328 14.3344C6.47732 14.3344 6.61792 14.2874 6.73343 14.2006Z"
                        stroke="#D0A42A"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <span>P.O.Box 44, Jeddah 21411,Kingdom Of Saudi Arabia</span>
                </Link>
              </li>
              <li>
                <Link
                  href="telto:920002208"
                  className="flex items-center gap-[10px] text-[rgba(255,255,255,0.70)] text-[0.9rem] font-normal hover:text-white transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_130_1282)">
                      <path
                        d="M9.66049 11.0858C9.51349 11.1225 9.35836 11.108 9.22066 11.0448C7.3688 10.1359 5.87018 8.63919 4.95899 6.78847C4.8915 6.65004 4.87402 6.49252 4.90951 6.34267C4.945 6.19281 5.03127 6.05986 5.15367 5.9664L5.4657 5.73238C5.6313 5.60818 5.76572 5.44712 5.8583 5.26196C5.95087 5.07681 5.99907 4.87264 5.99907 4.66563V2.66547C5.99907 2.31182 5.85858 1.97266 5.60852 1.72259C5.35845 1.47252 5.01928 1.33203 4.66563 1.33203H2.66547C2.31182 1.33203 1.97266 1.47252 1.72259 1.72259C1.47252 1.97266 1.33203 2.31182 1.33203 2.66547C1.33203 5.84832 2.59641 8.90082 4.84703 11.1514C7.09765 13.402 10.1501 14.6664 13.333 14.6664C13.6866 14.6664 14.0258 14.5259 14.2759 14.2759C14.5259 14.0258 14.6664 13.6866 14.6664 13.333V11.3328C14.6664 10.9792 14.5259 10.64 14.2759 10.3899C14.0258 10.1399 13.6866 9.99939 13.333 9.99939H11.3328C11.1258 9.99939 10.9217 10.0476 10.7365 10.1402C10.5513 10.2327 10.3903 10.3672 10.2661 10.5328L10.0294 10.8428C9.93761 10.9634 9.8075 11.0491 9.66049 11.0858Z"
                        stroke="#D0A42A"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_130_1282">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>920002208</span>
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:info@ahcl.com.sa"
                  className="flex items-center gap-[10px] text-[rgba(255,255,255,0.70)] text-[0.9rem] font-normal hover:text-white transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M14.6664 4.66777L8.67195 8.48539C8.46853 8.60352 8.23748 8.66574 8.00223 8.66574C7.76699 8.66574 7.53593 8.60352 7.33251 8.48539L1.33203 4.66777M2.66547 2.66797H13.333C14.0694 2.66797 14.6664 3.26486 14.6664 4.00117V12.0004C14.6664 12.7367 14.0694 13.3336 13.333 13.3336H2.66547C1.92903 13.3336 1.33203 12.7367 1.33203 12.0004V4.00117C1.33203 3.26486 1.92903 2.66797 2.66547 2.66797Z"
                      stroke="#D0A42A"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span>info@ahcl.com.sa</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-[24px] flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="lg:order-1 order-2 text-[rgba(255,255,255,0.70)] text-[0.75rem] font-normal text-center md:text-left">
            © 2026 Abdullah Hashim Company LTD. All Rights Reserved.
          </div>
          <div className="flex items-center gap-[8px] lg:order-2 order-3">
            <span className="text-[#AAA] text-[0.75rem] font-medium">
              Designed & Developed by
            </span>
            <Link href="http://icon-creations.com/" target="_blank">
              <Image
                src="/icon.svg"
                alt="Developer Icon"
                width={63}
                height={24}
              />
            </Link>
          </div>
          <div className="lg:order-3 order-1 flex items-center text-[#FFF] text-[0.75rem] font-normal">
            <Link href="#" className="hover:text-gray-300 transition">
              Privacy Policy
            </Link>
            <span className="w-[1px] h-[12px] bg-[rgba(255,255,255,0.30)] mx-[16px]"></span>
            <Link href="#" className="hover:text-gray-300 transition">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
