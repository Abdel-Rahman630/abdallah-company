import { useState, useEffect } from "react";
import { Brand } from "@/types/models";
import { useLanguage } from "@/providers/LanguageProvider";

export function useBrands() {
  const { locale } = useLanguage();
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBrands() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/cms/brands?lang=${locale}`
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
  }, [locale]);

  return { brands, loading };
}
