"use client";

import { useEffect, useRef, useState } from "react";

export const navItems = [
  {
    label: "About Us",
    href: "#about",
    dropdown: {
      sectionTitle: "About Us",
      image: "/about.png",
      boxes: [
        {
          title: "Company Overview",
          text: "AHCL is a trusted leader in automotive and machinery distribution across Saudi Arabia.",
        },
        {
          title: "History & Legacy",
          text: "Since 1945, AHCL has built a legacy of trust and excellence across Saudi Arabia.",
        },
        {
          title: "Vision, Mission & Values",
          text: "To deliver reliable mobility, machinery, and equipment solutions with exceptional service and customer focus.",
        },
      ],
    },
  },
  {
    label: "Our Products",
    href: "#products",
    dropdown: null, // handled separately
  },
  {
    label: "News & Events",
    href: "#news",
    dropdown: {
      sectionTitle: "News & Events",
      image: "/news.png",
      boxes: [
        {
          title: "News",
          text: "Stay updated with the latest news, announcements, and company highlights from AHCL.",
        },
        // {
        //   title: "Press Releases",
        //   text: "Explore the latest official announcements and corporate updates from AHCL.",
        // },
        {
          title: "Events",
          text: "Discover the latest events, exhibitions, and activities featuring AHCL.",
        },
      ],
    },
  },
  {
    label: "Careers",
    href: "#careers",
    dropdown: {
      sectionTitle: "Careers",
      image: "/about.png",
      boxes: [
        {
          title: "Why AHCL",
          text: "Discover why AHCL is a trusted partner, delivering quality, reliability, and exceptional service across Saudi Arabia.",
        },
      ],
    },
  },
  {
    label: "Contact Us",
    href: "#contact",
    dropdown: {
      sectionTitle: "Contact Us",
      image: "/find.png",
      boxes: [
        {
          title: "Contact Us",
          text: "Get in touch with our team for inquiries, support, or assistance.",
        },
        {
          title: "Our Locations",
          text: "Find AHCL showrooms, service centers, and branches across Saudi Arabia.",
        },
      ],
    },
  },
];

export function useHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (label: string) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  return { scrolled, activeDropdown, headerRef, toggleDropdown };
}
