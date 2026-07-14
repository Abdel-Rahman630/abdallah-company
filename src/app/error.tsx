"use client";

import { useEffect } from "react";
import YellowButton from "@/components/ui/YellowButton";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Intentionally omitting console.log(error) as requested
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Something went wrong!</h2>
      <p className="text-gray-600 mb-8 max-w-md">
        We apologize for the inconvenience. An unexpected error has occurred.
      </p>
      <div onClick={() => reset()}>
        <YellowButton  href="#">Try again</YellowButton>
      </div>
    </div>
  );
}
