import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ContactFormData, SubmitStatus } from "@/types/models";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

export function useGetInTouch() {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [globalError, setGlobalError] = useState<string | null>(null);

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    setStatus("loading");
    setGlobalError(null);

    try {
      const res = await fetch(`${API_BASE_URL}/api/cms/contact-us`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      // 201 — success
      if (res.status === 201) {
        setStatus("success");
        reset();
        return;
      }

      const json = await res.json();

      // 422 — validation errors: map each field error back to react-hook-form
      if (res.status === 422) {
        const fieldErrors: Record<string, string[]> = json?.meta?.errors ?? {};
        let hasFieldError = false;

        (Object.keys(fieldErrors) as (keyof ContactFormData)[]).forEach((field) => {
          const messages = fieldErrors[field as string];
          if (messages?.length) {
            setError(field, { type: "server", message: messages[0] });
            hasFieldError = true;
          }
        });

        if (!hasFieldError) {
          setGlobalError(json.message ?? "Validation error. Please check your inputs.");
        }

        setStatus("error");
        return;
      }

      // 429 — rate limit
      if (res.status === 429) {
        setGlobalError(json.message ?? "Too many requests. Please try again later.");
        setStatus("error");
        return;
      }

      // Any other error
      setGlobalError(json.message ?? "Something went wrong. Please try again.");
      setStatus("error");
    } catch {
      setGlobalError("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  return { register, handleSubmit, onSubmit, errors, status, globalError };
}

