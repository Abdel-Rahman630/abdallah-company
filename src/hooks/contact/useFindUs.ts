import { useState } from "react";

export type Location = {
  id: number;
  title: string;
  span: string;
  paragraph: string;
  mapQuery: string;
};

export const locations: Location[] = [
  {
    id: 0,
    title: "Jeddah",
    span: "Head Office",
    paragraph: "44, Jeddah 21411, Madinah Road Al Bawadi Dist, Jeddah",
    mapQuery: "Abdullah Hashim Company Ltd, Jeddah",
  },
  {
    id: 1,
    title: "Jeddah",
    span: "Marine Service center",
    paragraph: "P4G4+776, Obhur Al-Shamaliyah, Jeddah 23813",
    mapQuery: "Obhur Al-Shamaliyah, Jeddah",
  },
  {
    id: 2,
    title: "Jeddah",
    span: "Marine Service center",
    paragraph: "P4G4+776, Obhur Al-Shamaliyah, Jeddah 23813",
    mapQuery: "Obhur Al-Shamaliyah, Jeddah",
  },
  {
    id: 3,
    title: "Jeddah",
    span: "Marine Service center",
    paragraph: "P4G4+776, Obhur Al-Shamaliyah, Jeddah 23813",
    mapQuery: "Obhur Al-Shamaliyah, Jeddah",
  },
  {
    id: 4,
    title: "Jeddah",
    span: "Marine Service center",
    paragraph: "P4G4+776, Obhur Al-Shamaliyah, Jeddah 23813",
    mapQuery: "Obhur Al-Shamaliyah, Jeddah",
  },
  {
    id: 5,
    title: "Jeddah",
    span: "Marine Service center",
    paragraph: "P4G4+776, Obhur Al-Shamaliyah, Jeddah 23813",
    mapQuery: "Obhur Al-Shamaliyah, Jeddah",
  },
  {
    id: 6,
    title: "Jeddah",
    span: "Marine Service center",
    paragraph: "P4G4+776, Obhur Al-Shamaliyah, Jeddah 23813",
    mapQuery: "Obhur Al-Shamaliyah, Jeddah",
  },
  {
    id: 7,
    title: "Jeddah",
    span: "Marine Service center",
    paragraph: "P4G4+776, Obhur Al-Shamaliyah, Jeddah 23813",
    mapQuery: "Obhur Al-Shamaliyah, Jeddah",
  },
  {
    id: 8,
    title: "Jeddah",
    span: "Marine Service center",
    paragraph: "P4G4+776, Obhur Al-Shamaliyah, Jeddah 23813",
    mapQuery: "Obhur Al-Shamaliyah, Jeddah",
  },
  {
    id: 9,
    title: "Jeddah",
    span: "Marine Service center",
    paragraph: "P4G4+776, Obhur Al-Shamaliyah, Jeddah 23813",
    mapQuery: "Obhur Al-Shamaliyah, Jeddah",
  },
];

export function useFindUs() {
  const [activeLocation, setActiveLocation] = useState<Location>(locations[0]);

  return { locations, activeLocation, setActiveLocation };
}
