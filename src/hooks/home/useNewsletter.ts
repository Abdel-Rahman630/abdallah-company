import { useState, useEffect } from "react";
import { SubscribeStatus } from "@/types/models";
import { useLanguage } from "@/providers/LanguageProvider";


const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "https://api.ahcl.com.sa";

export function useNewsletter() {
  const { locale } = useLanguage();
  const [email, setEmail] = useState("");
  const [divisionId, setDivisionId] = useState<number | string>("");
  const [divisions, setDivisions] = useState<{ id: number; title?: string; name?: string }[]>([]);
  const [subscribeStatus, setSubscribeStatus] = useState<SubscribeStatus>("idle");

  useEffect(() => {
    const fetchDivisions = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/cms/newsletter/divisions?lang=${locale}`);
        if (response.ok) {
          const resData = await response.json();
          setDivisions(Array.isArray(resData) ? resData : (resData?.data || []));
        }
      } catch (error) {
        console.error("Failed to fetch newsletter divisions:", error);
      }
    };
    fetchDivisions();
  }, [locale]);

  const handleSubscribe = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!email) return;
    setSubscribeStatus("loading");
    try {
      const body: { email: string; division_id?: number } = { email };
      if (divisionId) {
        body.division_id = Number(divisionId);
      }

      const response = await fetch(
        `${API_BASE_URL}/api/cms/newsletter/subscribe`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      if (response.status === 201) {
        setSubscribeStatus("success");
        setEmail("");
      } else if (response.status === 200) {
        setSubscribeStatus("already");
      } else if (response.status === 422) {
        setSubscribeStatus("validation");
      } else if (response.status === 429) {
        setSubscribeStatus("rate_limit");
      } else {
        setSubscribeStatus("error");
      }
    } catch {
      setSubscribeStatus("error");
    }

    setTimeout(() => setSubscribeStatus("idle"), 5000);
  };

  return { email, setEmail, divisionId, setDivisionId, divisions, subscribeStatus, handleSubscribe };
}
