import { useState, useEffect } from "react";
import { Division } from "@/types/models";
import { useLanguage } from "@/providers/LanguageProvider";

export function useOurProducts() {
  const { locale } = useLanguage();
  const [products, setProducts] = useState<Division[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL || ''}/api/cms/home/divisions?lang=${locale}`
        );
        if (!res.ok) {
          throw new Error(`Failed to fetch products: ${res.statusText}`);
        }
        const json = await res.json();
        if (json && json.data) {
          setProducts(Array.isArray(json.data) ? json.data : []);
        } else if (Array.isArray(json)) {
          setProducts(json);
        } else {
          setProducts([]);
        }
      } catch (err) {
        console.error("fetchProducts error:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [locale]);

  const active = products[activeIndex] || null;

  return {
    products,
    activeIndex,
    setActiveIndex,
    active,
    loading,
  };
}
