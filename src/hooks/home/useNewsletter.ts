import { useState } from "react";
import { SubscribeStatus } from "@/types/models";


const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "https://api.ahcl.com.sa";

export function useNewsletter() {
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] =
    useState<SubscribeStatus>("idle");

  const handleSubscribe = async () => {
    if (!email) return;
    setSubscribeStatus("loading");
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/cms/newsletter/subscribe`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
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

  return { email, setEmail, subscribeStatus, handleSubscribe };
}
