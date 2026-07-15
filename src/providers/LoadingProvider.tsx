"use client";

import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import { usePathname } from "next/navigation";

type LoadingContextType = {
  startLoading: (key: string) => void;
  stopLoading: (key: string) => void;
  isLoading: boolean;
};

const LoadingContext = createContext<LoadingContextType>({
  startLoading: () => {},
  stopLoading: () => {},
  isLoading: true,
});

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [loadingTasks, setLoadingTasks] = useState<Set<string>>(new Set());
  const pathname = usePathname();
  
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // When route changes, reset the minimum time elapsed to show loader again
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMinTimeElapsed(false);
    setIsInitialLoad(true);
    const timer = setTimeout(() => {
      setMinTimeElapsed(true);
    }, 600); // 600ms minimum display time
    return () => clearTimeout(timer);
  }, [pathname]);

  const startLoading = useCallback((key: string) => {
    setLoadingTasks((prev) => {
      const newTasks = new Set(prev);
      newTasks.add(key);
      return newTasks;
    });
  }, []);

  const stopLoading = useCallback((key: string) => {
    setLoadingTasks((prev) => {
      const newTasks = new Set(prev);
      newTasks.delete(key);
      return newTasks;
    });
  }, []);

  useEffect(() => {
    if (minTimeElapsed && loadingTasks.size === 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsInitialLoad(false);
    }
  }, [minTimeElapsed, loadingTasks.size]);

  const isLoading = isInitialLoad || loadingTasks.size > 0;

  return (
    <LoadingContext.Provider value={{ startLoading, stopLoading, isLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useGlobalLoading() {
  return useContext(LoadingContext);
}
