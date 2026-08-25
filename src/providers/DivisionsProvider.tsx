"use client";

import { createContext, useContext } from "react";
import { Division } from "@/types/models";

interface DivisionsContextProps {
  divisions: Division[];
}

const DivisionsContext = createContext<DivisionsContextProps>({ divisions: [] });

export function DivisionsProvider({
  children,
  divisions,
}: {
  children: React.ReactNode;
  divisions: Division[];
}) {
  return (
    <DivisionsContext.Provider value={{ divisions }}>
      {children}
    </DivisionsContext.Provider>
  );
}

/**
 * Access server-fetched divisions from any client component.
 * Divisions are fetched once in the root layout — no client fetch needed.
 */
export function useDivisions(): Division[] {
  return useContext(DivisionsContext).divisions;
}
