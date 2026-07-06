import Image from "next/image";

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none">
    <path d="M12.6624 4.24708L8.57908 0.163749C8.46907 0.0574899 8.32171 -0.00130703 8.16877 2.20514e-05C8.01582 0.00135113 7.86951 0.0626998 7.76136 0.170855C7.6532 0.279009 7.59185 0.425316 7.59052 0.578265C7.5892 0.731213 7.64799 0.878564 7.75425 0.988582L10.8418 4.07617H0.583333C0.428624 4.07617 0.280251 4.13762 0.170854 4.24702C0.0614581 4.35642 0 4.50479 0 4.6595C0 4.81421 0.0614581 4.96258 0.170854 5.07198C0.280251 5.18137 0.428624 5.24283 0.583333 5.24283H10.8418L7.75425 8.33042C7.69854 8.38423 7.6541 8.44859 7.62352 8.51976C7.59295 8.59093 7.57686 8.66748 7.57619 8.74493C7.57551 8.82239 7.59027 8.8992 7.6196 8.97089C7.64894 9.04258 7.69225 9.10771 7.74702 9.16248C7.80179 9.21725 7.86692 9.26056 7.93861 9.2899C8.0103 9.31923 8.08711 9.33399 8.16457 9.33331C8.24202 9.33264 8.31857 9.31655 8.38974 9.28597C8.46091 9.2554 8.52527 9.21096 8.57908 9.15525L12.6624 5.07192C12.7718 4.96252 12.8332 4.81418 12.8332 4.6595C12.8332 4.50482 12.7718 4.35647 12.6624 4.24708Z" fill="white"/>
  </svg>
);

interface Box {
  title: string;
  text: string;
}

interface DropdownPanelProps {
  sectionTitle: string;
  boxes: Box[];
  image: string;
  isMobile?: boolean;
}

export default function DropdownPanel({ sectionTitle, boxes, image, isMobile }: DropdownPanelProps) {
  return (
    <div
      className={`flex w-[939px] h-[418px] rounded-[5px] p-[38px] max-[1020px]:w-full max-[1020px]:h-auto max-[1020px]:p-0 ${
        isMobile ? "bg-transparent" : "bg-[#1E1E1E] shadow-[0_0_40px_10px_rgba(0,0,0,0.19)]"
      }`}
    >
      {/* Left column: title + boxes */}
      <div className="flex-1 flex flex-col overflow-hidden border-r border-[#666] pr-[38px] mr-[38px] max-[1020px]:border-none max-[1020px]:pr-0 max-[1020px]:mr-0">
        <p className="text-[#666] text-[12px] font-semibold uppercase pb-[25px] shrink-0 max-[1020px]:hidden">
          {sectionTitle}
        </p>

        {/* Boxes */}
        <div className="flex flex-col gap-4 overflow-auto">
          {boxes.length > 1 && (
            <div className="flex gap-4 max-[1020px]:flex-col">
              {boxes.slice(0, 2).map((box, i) => (
                <div
                  key={i}
                  className="flex-1 cursor-pointer rounded-[5px] bg-[#2D2D2D] p-[10px] hover:bg-[#383838] transition-colors"
                >
                  <div className="flex items-center gap-[5px] pb-[13px]">
                    <span className="text-white text-[0.9rem] font-medium">{box.title}</span>
                    <ArrowIcon />
                  </div>
                  <p className="text-[#666] text-[0.75rem] font-medium text-justify">{box.text}</p>
                </div>
              ))}
            </div>
          )}

          {boxes.length === 1 && (
            <div className="cursor-pointer rounded-[5px] bg-[#2D2D2D] p-[10px] hover:bg-[#383838] transition-colors">
              <div className="flex items-center gap-[5px] pb-[13px]">
                <span className="text-white text-[0.9rem] font-medium">{boxes[0].title}</span>
                <ArrowIcon />
              </div>
              <p className="text-[#666] text-[0.75rem] font-medium text-justify">{boxes[0].text}</p>
            </div>
          )}

          {boxes.slice(2).map((box, i) => (
            <div
              key={i}
              className="cursor-pointer rounded-[5px] bg-[#2D2D2D] p-[10px] hover:bg-[#383838] transition-colors"
            >
              <div className="flex items-center gap-[5px] pb-[13px]">
                <span className="text-white text-[0.9rem] font-medium">{box.title}</span>
                <ArrowIcon />
              </div>
              <p className="text-[#666] text-[0.75rem] font-medium text-justify">{box.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right column: image */}
      <div className="shrink-0 w-[258px] h-[342px] rounded-[5px] overflow-hidden relative max-[1020px]:hidden">
        <Image src={image} alt={sectionTitle} fill className="object-cover" />
      </div>
    </div>
  );
}
