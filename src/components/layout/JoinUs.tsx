"use client";

import YellowButton from "@/components/ui/YellowButton";
import { RevealText } from "@/components/ui/ScrollReveal";

const ArrowIconBlack = () => (
  <svg
    className="transition-transform duration-500 group-hover:translate-x-1 shrink-0"
    xmlns="http://www.w3.org/2000/svg"
    width="13"
    height="10"
    viewBox="0 0 13 10"
    fill="none"
  >
    <path
      d="M12.6624 4.24708L8.57908 0.163749C8.46907 0.0574899 8.32171 -0.00130703 8.16877 2.20514e-05C8.01582 0.00135113 7.86951 0.0626998 7.76136 0.170855C7.6532 0.279009 7.59185 0.425316 7.59052 0.578265C7.5892 0.731213 7.64799 0.878564 7.75425 0.988582L10.8418 4.07617H0.583333C0.428624 4.07617 0.280251 4.13762 0.170854 4.24702C0.0614581 4.35642 0 4.50479 0 4.6595C0 4.81421 0.0614581 4.96258 0.170854 5.07198C0.280251 5.18137 0.428624 5.24283 0.583333 5.24283H10.8418L7.75425 8.33042C7.69854 8.38423 7.6541 8.44859 7.62352 8.51976C7.59295 8.59093 7.57686 8.66748 7.57619 8.74493C7.57551 8.82239 7.59027 8.8992 7.6196 8.97089C7.64894 9.04258 7.69225 9.10771 7.74702 9.16248C7.80179 9.21725 7.86692 9.26056 7.93861 9.2899C8.0103 9.31923 8.08711 9.33399 8.16457 9.33331C8.24202 9.33264 8.31857 9.31655 8.38974 9.28597C8.46091 9.2554 8.52527 9.21096 8.57908 9.15525L12.6624 5.07192C12.7718 4.96252 12.8332 4.81418 12.8332 4.6595C12.8332 4.50482 12.7718 4.35647 12.6624 4.24708Z"
      fill="#1E1E1E"
    />
  </svg>
);

export default function JoinUs() {
  return (
    <section className="bg-joinus border-b border-[#565656] py-[40px]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-[30px]">
          <div className="max-w-2xl">
            <RevealText delay={0.1}>
              <h2 className="text-white text-[1.5rem] font-bold uppercase mb-[10px]">
                Join Abdullah Hashim Company Limited
              </h2>
            </RevealText>
            <RevealText delay={0.2}>
              <p className="text-white text-[0.9rem] font-normal leading-relaxed">
                Join our team and build your future with AHCL. Explore exciting career opportunities and grow with us.
              </p>
            </RevealText>
          </div>
          <div className="shrink-0 flex items-center">
            <RevealText delay={0.3}>
              <YellowButton href="/contact-us#join-us" icon={<ArrowIconBlack />} className="w-[154px]">
                Join Us
              </YellowButton>
            </RevealText>
          </div>
        </div>
      </div>
    </section>
  );
}
