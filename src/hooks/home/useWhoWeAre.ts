import { useState } from "react";

const countdownData = [
  { to: 80, suffix: "+", title: "Years of Experience" },
  { to: 33, suffix: "+", title: "BRANCHES" },
  { to: 25, suffix: "", title: "Brands" },
];

export function useWhoWeAre() {
  const [isClient, setIsClient] = useState(false);
  return { isClient, setIsClient, countdownData };
}
