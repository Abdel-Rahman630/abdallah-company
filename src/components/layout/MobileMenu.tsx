import React from "react";
import DropdownPanel from "@/components/ui/DropdownPanel";
import ProductsDropdown from "@/components/ui/ProductsDropdown";
import { NavItem, DropdownPanelData } from "@/types/models";

export default function MobileMenu({
  mobileOpen,
  mobileActiveMenu,
  setMobileActiveMenu,
  setMobileOpen,
  navItems,
  actions,
  activeDropdownData,
}: {
  mobileOpen: boolean;
  mobileActiveMenu: string | null;
  setMobileActiveMenu: (key: string | null) => void;
  setMobileOpen: (open: boolean) => void;
  navItems: NavItem[];
  actions: React.ReactNode;
  activeDropdownData?: DropdownPanelData | null;
}) {
  return (
    <div
      className={`min-[1200px]:hidden transition-all duration-500 overflow-hidden ${
        mobileOpen ? "max-h-[100dvh] opacity-100" : "max-h-0 opacity-0"
      } bg-[#1E1E1E]`}
    >
      <div className="container mx-auto lg:pb-6 pt-4 relative">
        {/* Main Links */}
        <div
          className={`transition-all duration-300 ${
            mobileActiveMenu ? "-translate-x-full absolute w-full opacity-0 pointer-events-none" : "translate-x-0 relative opacity-100"
          }`}
        >
          <ul className="flex flex-col gap-1 mb-6">
            {navItems.map((item) => (
              <li key={item.key}>
                <button
                  onClick={() => {
                    if (item.dropdown || item.key === "divisions") {
                      setMobileActiveMenu(item.key);
                    }
                  }}
                  className="w-full flex items-center justify-between px-3 py-3 text-white text-[0.95rem] font-medium hover:bg-[#2D2D2D] transition-colors cursor-pointer"
                >
                  <span>{item.label}</span>
                  <svg className="w-4 h-4 -rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 6" fill="none">
                    <path d="M1 1L5 5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </li>
            ))}
          </ul>

          <div className="border-t border-[#333] mb-6" />
          <div className="flex flex-col gap-3">{actions}</div>
        </div>

        {/* Submenu Panel */}
        <div
          className={`transition-all duration-300 overflow-x-auto ${
            mobileActiveMenu ? "translate-x-0 relative opacity-100" : "translate-x-full absolute w-full opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex items-center justify-between mb-6">
            <span className="text-white text-lg font-semibold capitalize">{mobileActiveMenu}</span>
            <button
              onClick={() => setMobileActiveMenu(null)}
              className="w-12 h-12 flex items-center justify-center text-lg text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>

          {activeDropdownData ? (
            <DropdownPanel
              isMobile={true}
              sectionTitle={activeDropdownData.sectionTitle}
              boxes={activeDropdownData.boxes}
              image={activeDropdownData.image}
              onLinkClick={() => {
                setMobileActiveMenu(null);
                setMobileOpen(false);
              }}
            />
          ) : mobileActiveMenu === "divisions" ? (
            <div className="lg:p-4">
              <ProductsDropdown
                isMobile={true}
                onClose={() => {
                  setMobileActiveMenu(null);
                  setMobileOpen(false);
                }}
              />
            </div>
          ) : (
            <div className="text-white p-4">{/* Placeholder */}</div>
          )}
        </div>
      </div>
    </div>
  );
}
