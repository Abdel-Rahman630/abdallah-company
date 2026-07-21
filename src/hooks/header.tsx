"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/providers/LanguageProvider";

export function useNavItems() {
  const { t } = useLanguage();
  return [
    {
      label: t("header.about"),
      key: "About Us",
      href: "/about-us",
      dropdown: {
        sectionTitle: t("header.about"),
        image: "/about.png",
        boxes: [
          {
            title: "Company Overview",
            text: "AHCL is a trusted leader in automotive and machinery distribution across Saudi Arabia.",
            link: "/about-us#company-overview",
          },
          {
            title: "History & Legacy",
            text: "Since 1945, AHCL has built a legacy of trust and excellence across Saudi Arabia.",
            link: "/about-us#history-legacy",
          },
          {
            title: "Vision, Mission & Values",
            text: "To deliver reliable mobility, machinery, and equipment solutions with exceptional service and customer focus.",
            link: "/about-us#vision-mission",
          },
        ],
      },
    },
    {
      label: t("header.divisions"),
      key: "divisions",
      href: "#divisions",
      dropdown: null,
    },
    {
      label: t("header.news"),
      key: "news & events",
      href: "/news",
      dropdown: {
        sectionTitle: t("header.news"),
        image: "/news.png",
        boxes: [
          {
            title: "News",
            text: "Stay updated with the latest news, announcements, and company highlights from AHCL.",
            link: "/news#news",
          },
          {
            title: "Events",
            text: "Discover the latest events, exhibitions, and activities featuring AHCL.",
            link: "/news#events",
          },
        ],
      },
    },
    {
      label: t("header.careers"),
      key: "careers",
      href: "/careers",
      dropdown: {
        sectionTitle: t("header.careers"),
        image: "/about.png",
        boxes: [
          {
            title: "Why AHCL",
            text: "Discover why AHCL is a trusted partner, delivering quality, reliability, and exceptional service across Saudi Arabia.",
            link: "/careers#why-join-us",
          },
        ],
      },
    },
    {
      label: t("header.contact"),
      key: "contact us",
      href: "/contact-us",
      dropdown: {
        sectionTitle: t("header.contact"),
        image: "/find.png",
        boxes: [
          {
            title: "Contact Us",
            text: "Get in touch with our team for inquiries, support, or assistance.",
            link: "/contact-us#get-in-touch",
          },
          {
            title: "Our Locations",
            text: "Find AHCL showrooms, service centers, and branches across Saudi Arabia.",
            link: "/contact-us#find-us",
          },
        ],
      },
    },
  ];
}

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

  return { scrolled, activeDropdown, headerRef, toggleDropdown, setActiveDropdown };
}
