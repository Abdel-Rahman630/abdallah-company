"use client";

import { useState, useEffect } from "react";

export interface SocialLink {
  url: string;
  type: string;
}

export interface Brand {
  id: number | string;
  title: string;
  description: string;
  image: string;
  logo?: string;
  social_links?: SocialLink[];
}

export function useBrands() {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBrands() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/cms/brands?lang=en`
        );
        const json = await res.json();
        if (json.data) {
          setBrands(json.data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchBrands();
  }, []);

  return { brands, loading };
}
