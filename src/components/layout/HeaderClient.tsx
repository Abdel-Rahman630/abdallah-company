"use client";

import { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";
import { useHeader, useNavItems } from "@/hooks/header";
import DropdownPanel from "@/components/ui/DropdownPanel";
import ProductsDropdown from "@/components/ui/ProductsDropdown";

interface HeaderClientProps {
  logo: ReactNode;
  actions: ReactNode;
}

export default function HeaderClient({ logo, actions }: HeaderClientProps) {
  const { scrolled, activeDropdown, headerRef, toggleDropdown, setActiveDropdown } = useHeader();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileActiveMenu, setMobileActiveMenu] = useState<string | null>(null);
  
  const pathname = usePathname();
  const isHomepage = pathname === "/";
  const navItems = useNavItems();

  const activeDropdownData = navItems.find((item) => item.key === mobileActiveMenu)?.dropdown;

  return (
    <header
      ref={headerRef}
      className={`fixed z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "top-0 left-0 w-full py-[15px] min-[1200px]:py-[25px] bg-[#1E1E1E]"
          : `top-[15px] left-[15px] w-[calc(100%-30px)] py-[15px] min-[1200px]:top-0 min-[1200px]:left-0 min-[1200px]:w-full min-[1200px]:rounded-none min-[1200px]:py-[25px] bg-[#1E1E1E] ${isHomepage ? "min-[1200px]:bg-transparent" : "min-[1200px]:bg-[rgba(30,30,30,0.20)] min-[1200px]:backdrop-blur-[0px]"}`
      }`}
    >
      <div className="container mx-auto flex items-center justify-between gap-6">
        {/* Column 1: Logo */}
        {logo}

        {/* Column 2: Navigation (desktop) */}
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

        {/* Column 3: Actions (desktop) */}
        <div className="hidden min-[1200px]:flex">{actions}</div>

        {/* Burger button (mobile/tablet) */}
        <button
          className="min-[1200px]:hidden flex flex-col justify-center items-center w-10 h-10 gap-[6px] transition-colors z-50 relative cursor-pointer"
          onClick={() => {
            if (mobileOpen) {
              setMobileOpen(false);
              setTimeout(() => setMobileActiveMenu(null), 500);
            } else {
              setMobileOpen(true);
            }
          }}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[2px] rounded-full transition-all duration-300 bg-white ${mobileOpen ? "rotate-45 translate-y-[8px]" : ""}`} />
          <span className={`block w-6 h-[2px] rounded-full transition-all duration-300 bg-white ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-[2px] rounded-full transition-all duration-300 bg-white ${mobileOpen ? "-rotate-45 -translate-y-[8px]" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`min-[1200px]:hidden transition-all duration-500 overflow-hidden ${
          mobileOpen ? "max-h-[100dvh] opacity-100" : "max-h-0 opacity-0"
        } bg-[#1E1E1E]`}
      >
        <div className="container mx-auto lg:pb-6 pt-4 relative">
          
          {/* Main Links */}
          <div className={`transition-all duration-300 ${mobileActiveMenu ? "-translate-x-full absolute w-full opacity-0 pointer-events-none" : "translate-x-0 relative opacity-100"}`}>
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
                    <svg
                      className="w-4 h-4 -rotate-90"
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 6" fill="none"
                    >
                      <path d="M1 1L5 5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </li>
              ))}
            </ul>

            <div className="border-t border-[#333] mb-6" />
            <div className="flex flex-col gap-3">{actions}</div>
          </div>

          {/* Submenu Panel */}
          <div className={`transition-all duration-300 overflow-x-auto ${mobileActiveMenu ? "translate-x-0 relative opacity-100" : "translate-x-full absolute w-full opacity-0 pointer-events-none"}`}>
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
                <ProductsDropdown isMobile={true} onClose={() => {
                  setMobileActiveMenu(null);
                  setMobileOpen(false);
                }} />
              </div>
            ) : (
              <div className="text-white p-4">
                {/* Placeholder */}
              </div>
            )}
          </div>
          
        </div>
      </div>
    </header>
  );
}
