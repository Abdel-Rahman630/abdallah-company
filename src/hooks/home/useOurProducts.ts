import { useState } from "react";
import { Division } from "@/types/models";
import { useDivisions } from "@/providers/DivisionsProvider";

/**
 * Manages active product selection for the Our Products section.
 *
 * - Divisions data comes from DivisionsProvider (fetched once on the server in layout.tsx).
 * - initialProducts allows the home page to pre-select with server-fetched data.
 * - Zero client-side fetch — no redundant network requests.
 */
export function useOurProducts(initialProducts?: Division[]) {
  const contextDivisions = useDivisions();
  const products = (initialProducts && initialProducts.length > 0)
    ? initialProducts
    : contextDivisions;

  const [activeIndex, setActiveIndex] = useState(0);
  const active = products[activeIndex] || null;

  return {
    products,
    activeIndex,
    setActiveIndex,
    active,
    loading: false,
  };
}
