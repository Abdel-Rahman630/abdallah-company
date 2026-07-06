"use client";

import { ReactNode, useState } from "react";
import { useHeader, navItems } from "@/hooks/header";
import DropdownPanel from "@/components/ui/DropdownPanel";

interface HeaderClientProps {
  logo: ReactNode;
  actions: ReactNode;
}

export default function HeaderClient({ logo, actions }: HeaderClientProps) {
  const { scrolled, activeDropdown, headerRef, toggleDropdown } = useHeader();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileActiveMenu, setMobileActiveMenu] = useState<string | null>(null);

  const activeDropdownData = navItems.find((item) => item.label === mobileActiveMenu)?.dropdown;

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 w-full z-50 transition-all duration-300 py-[25px] ${
        scrolled || mobileOpen ? "bg-[#1E1E1E]" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between gap-6">
        {/* Column 1: Logo */}
        {logo}

        {/* Column 2: Navigation (desktop) */}
        <nav className="hidden min-[1200px]:flex items-center">
          <ul
            className={`flex items-center gap-[10px] p-[4px] rounded-[5px] transition-all duration-300 ${
              scrolled ? "bg-[#1E1E1E] border border-[#474747]" : "bg-white"
            }`}
          >
            {navItems.map((item) => (
              <li key={item.label} className="relative">
                <button
                  onClick={() => toggleDropdown(item.label)}
                  className={`flex items-center gap-1.5 px-[8px] py-[4px] rounded-[3px] text-sm font-medium transition-colors whitespace-nowrap ${
                    scrolled ? "text-white" : "text-[#1E1E1E]"
                  } ${activeDropdown === item.label ? (scrolled ? "bg-[#333]" : "bg-gray-100") : ""}`}
                >
                  {item.label}
                </button>

                {/* Dropdown Panel */}
                {activeDropdown === item.label && (
                  <div className="absolute top-full mt-3 z-50" style={{ left: "50%", transform: "translateX(-50%)" }}>
                    {item.dropdown ? (
                      <DropdownPanel
                        sectionTitle={item.dropdown.sectionTitle}
                        boxes={item.dropdown.boxes}
                        image={item.dropdown.image}
                      />
                    ) : (
                      <div
                        className="bg-[#1E1E1E] rounded-[5px] shadow-[0_0_40px_10px_rgba(0,0,0,0.19)] p-[38px]"
                        style={{ minWidth: "939px", minHeight: "418px" }}
                      >
                        {/* Our Products dropdown — content to be added later */}
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
          className="min-[1200px]:hidden flex flex-col justify-center items-center w-10 h-10 gap-[6px] rounded-lg transition-colors z-50 relative"
          onClick={() => {
            if (mobileOpen && mobileActiveMenu) {
              setMobileActiveMenu(null);
            } else {
              setMobileOpen((prev) => !prev);
            }
          }}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[2px] rounded-full transition-all duration-300 bg-white ${mobileOpen && !mobileActiveMenu ? "rotate-45 translate-y-[8px]" : ""}`} />
          <span className={`block w-6 h-[2px] rounded-full transition-all duration-300 bg-white ${mobileOpen && !mobileActiveMenu ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-[2px] rounded-full transition-all duration-300 bg-white ${mobileOpen && !mobileActiveMenu ? "-rotate-45 -translate-y-[8px]" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`min-[1200px]:hidden transition-all duration-500 overflow-hidden ${
          mobileOpen ? "max-h-[100dvh] opacity-100" : "max-h-0 opacity-0"
        } ${scrolled || mobileOpen ? "bg-[#1E1E1E]" : "bg-transparent"}`}
      >
        <div className="container mx-auto px-4 pb-6 pt-4 relative">
          
          {/* Main Links */}
          <div className={`transition-all duration-300 ${mobileActiveMenu ? "-translate-x-full absolute w-full opacity-0 pointer-events-none" : "translate-x-0 relative opacity-100"}`}>
            <ul className="flex flex-col gap-1 mb-6">
              {navItems.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => {
                      if (item.dropdown || item.label === "Our Products") {
                        setMobileActiveMenu(item.label);
                      }
                    }}
                    className="w-full flex items-center justify-between px-3 py-3 rounded-lg text-white text-[0.95rem] font-medium hover:bg-[#2D2D2D] transition-colors"
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
              <span className="text-white text-lg font-semibold">{mobileActiveMenu}</span>
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
              />
            ) : (
              <div className="text-white p-4">
                {/* Placeholder for Our Products on mobile */}
                Our Products content coming soon...
              </div>
            )}
          </div>
          
        </div>
      </div>
    </header>
  );
}
