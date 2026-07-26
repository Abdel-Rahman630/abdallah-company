"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { useHeader, useNavItems } from "@/hooks/header";
import { HeaderClientProps } from "@/types/models";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

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
          : `top-[15px] left-[15px] w-[calc(100%-30px)] py-[15px] min-[1200px]:top-0 min-[1200px]:left-0 min-[1200px]:w-full min-[1200px]:rounded-none min-[1200px]:py-[25px] bg-[#1E1E1E] ${
              isHomepage
                ? "min-[1200px]:bg-transparent"
                : "min-[1200px]:bg-[rgba(30,30,30,0.20)] min-[1200px]:backdrop-blur-[0px]"
            }`
      }`}
    >
      <div className="container mx-auto flex items-center justify-between gap-6">
        {/* Column 1: Logo */}
        {logo}

        {/* Column 2: Navigation (desktop) */}
        <DesktopMenu
          navItems={navItems}
          activeDropdown={activeDropdown}
          toggleDropdown={toggleDropdown}
          setActiveDropdown={setActiveDropdown}
        />

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
          <span
            className={`block w-6 h-[2px] rounded-full transition-all duration-300 bg-white ${
              mobileOpen ? "rotate-45 translate-y-[8px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] rounded-full transition-all duration-300 bg-white ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] rounded-full transition-all duration-300 bg-white ${
              mobileOpen ? "-rotate-45 -translate-y-[8px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <MobileMenu
        mobileOpen={mobileOpen}
        mobileActiveMenu={mobileActiveMenu}
        setMobileActiveMenu={setMobileActiveMenu}
        setMobileOpen={setMobileOpen}
        navItems={navItems}
        actions={actions}
        activeDropdownData={activeDropdownData}
      />
    </header>
  );
}
