import React from "react";
import DropdownPanel from "@/components/ui/DropdownPanel";
import ProductsDropdown from "@/components/ui/ProductsDropdown";
import { NavItem } from "@/types/models"; // I might need to make sure this type exists or use any

export default function DesktopMenu({
  navItems,
  activeDropdown,
  toggleDropdown,
  setActiveDropdown,
}: {
  navItems: NavItem[];
  activeDropdown: string | null;
  toggleDropdown: (key: string) => void;
  setActiveDropdown: (key: string | null) => void;
}) {
  return (
    <nav className="hidden min-[1200px]:flex items-center">
      <ul className="flex items-center gap-[10px] p-[4px] rounded-[5px] transition-all duration-300">
        {navItems.map((item) => (
          <li key={item.key}>
            <button
              onClick={() => toggleDropdown(item.key)}
              className={`flex items-center gap-1.5 px-[8px] py-[4px] rounded-[3px] text-sm transition-colors whitespace-nowrap cursor-pointer ${
                activeDropdown === item.key ? "bg-[#D1A52A] text-black" : "text-white"
              }`}
            >
              {item.label}
            </button>

            {/* Dropdown Panel - single unified dropdown */}
            {activeDropdown === item.key && (
              <div className="absolute top-full mt-3 z-50 left-1/2 -translate-x-1/2">
                {item.dropdown ? (
                  <DropdownPanel
                    sectionTitle={item.dropdown.sectionTitle}
                    boxes={item.dropdown.boxes}
                    image={item.dropdown.image}
                    onLinkClick={() => setActiveDropdown(null)}
                  />
                ) : item.key === "divisions" ? (
                  <ProductsDropdown onClose={() => setActiveDropdown(null)} />
                ) : (
                  <div className="bg-[#1E1E1E] rounded-[5px] shadow-[0_0_40px_10px_rgba(0,0,0,0.19)] p-[38px] min-w-[939px] min-h-[418px]">
                    {/* Other dropdowns placeholder */}
                  </div>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
