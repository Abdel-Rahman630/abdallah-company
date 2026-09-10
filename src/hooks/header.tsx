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
            title: t("nav.about.overviewTitle"),
            text: t("nav.about.overviewText"),
            link: "/about-us#company-overview",
          },
          {
            title: t("nav.about.historyTitle"),
            text: t("nav.about.historyText"),
            link: "/about-us#history-legacy",
          },
          {
            title: t("nav.about.visionTitle"),
            text: t("nav.about.visionText"),
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
            title: t("nav.news.newsTitle"),
            text: t("nav.news.newsText"),
            link: "/news#news",
          },
          {
            title: t("nav.news.eventsTitle"),
            text: t("nav.news.eventsText"),
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
            title: t("nav.careers.whyTitle"),
            text: t("nav.careers.whyText"),
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
            title: t("nav.contact.contactTitle"),
            text: t("nav.contact.contactText"),
            link: "/contact-us#get-in-touch",
          },
          {
            title: t("nav.contact.locationsTitle"),
            text: t("nav.contact.locationsText"),
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
