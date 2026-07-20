"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { RevealText } from "@/components/ui/ScrollReveal";
import { FormInput } from "@/components/ui/FormInput";

interface FormData {
  name: string;
  phone: string;
  email: string;
}

interface RegisterInterestFormProps {
  eventId: string | number;
}

export default function RegisterInterestForm({ eventId }: RegisterInterestFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    setErrorMessage("");
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || "https://api.ahcl.com.sa"}/api/cms/events/${eventId}/requests`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: data.name,
            phone: data.phone,
            email: data.email,
          }),
        }
      );

      if (response.ok) {
        setStatus("success");
      } else {
        const errorData = await response.json().catch(() => null);
        setStatus("error");
        let msg = "Validation error occurred.";
        if (errorData?.errors) {
            msg = Object.values(errorData.errors).flat().join(" ");
        } else if (errorData?.message) {
            msg = errorData.message;
        } else if (errorData?.error) {
            msg = errorData.error;
        }
        setErrorMessage(msg);
      }
    } catch (err: unknown) {
      setStatus("error");
      const errorMessage = err instanceof Error ? err.message : "Please check your network and try again.";
      setErrorMessage(errorMessage);
    } finally {
      reset();
    }
  };

  return (
    <div className="lg:w-[50%] w-full mt-[48px]">
      <RevealText delay={0.2}>
        <h2 className="text-[#231F20] text-[1.5rem] font-bold mb-[1rem]">
          Register Interest
        </h2>
      </RevealText>
      
      <RevealText delay={0.3}>
        <p className="text-[#949494] text-[0.9rem] font-normal mb-[32px]">
          {`Fill out the form and we'll respond as soon as possible.`}
        </p>
      </RevealText>

      {status === "success" && (
        <div className="mb-[24px] p-[16px] rounded-[8px] bg-green-50 border border-green-200">
          <p className="text-green-800 font-bold text-[0.9rem]">
            Successfully registered!
          </p>
          <p className="text-green-700 text-[0.85rem]">
            We will get back to you soon.
          </p>
        </div>
      )}

      {status === "error" && (
        <div className="mb-[24px] p-[16px] rounded-[8px] bg-red-50 border border-red-200">
          <p className="text-red-800 font-bold text-[0.9rem]">
            Failed to register.
          </p>
          <p className="text-red-700 text-[0.85rem]">
            {errorMessage || "Please try again later."}
          </p>
        </div>
      )}

      <RevealText delay={0.4}>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-[1rem]" noValidate>
          <div className="flex flex-col gap-[4px]">
            <FormInput
              type="text"
              placeholder="Name"
              error={!!errors.name}
              {...register("name", { required: "Name is required." })}
            />
            {errors.name && <span className="text-red-500 text-[0.75rem]">{errors.name.message}</span>}
          </div>

          <div className="flex flex-col gap-[4px]">
            <FormInput
              type="tel"
              placeholder="Phone Number"
              error={!!errors.phone}
              {...register("phone", { required: "Phone number is required." })}
            />
            {errors.phone && <span className="text-red-500 text-[0.75rem]">{errors.phone.message}</span>}
          </div>

          <div className="flex flex-col gap-[4px]">
            <FormInput
              type="email"
              placeholder="Email address"
              error={!!errors.email}
              {...register("email", { required: "Email is required." })}
            />
            {errors.email && <span className="text-red-500 text-[0.75rem]">{errors.email.message}</span>}
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-[16px] letter-spacing-[1px] self-start flex items-center gap-[10px] px-[32px] py-[14px] bg-[#1E1E1E] text-[#D1A52A] text-[0.75rem] font-bold uppercase rounded-[4px]"
          >
            {status === "loading" ? "Sending..." : "send"}
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none">
              <path d="M12.6624 4.24708L8.57908 0.163749C8.46907 0.0574899 8.32171 -0.00130703 8.16877 2.20514e-05C8.01582 0.00135113 7.86951 0.0626998 7.76136 0.170855C7.6532 0.279009 7.59185 0.425316 7.59052 0.578265C7.5892 0.731213 7.64799 0.878564 7.75425 0.988582L10.8418 4.07617H0.583333C0.428624 4.07617 0.280251 4.13762 0.170854 4.24702C0.0614581 4.35642 0 4.50479 0 4.6595C0 4.81421 0.0614581 4.96258 0.170854 5.07198C0.280251 5.18137 0.428624 5.24283 0.583333 5.24283H10.8418L7.75425 8.33042C7.69854 8.38423 7.6541 8.44859 7.62352 8.51976C7.59295 8.59093 7.57686 8.66748 7.57619 8.74493C7.57551 8.82239 7.59027 8.8992 7.6196 8.97089C7.64894 9.04258 7.69225 9.10771 7.74702 9.16248C7.80179 9.21725 7.86692 9.26056 7.93861 9.2899C8.0103 9.31923 8.08711 9.33399 8.16457 9.33331C8.24202 9.33264 8.31857 9.31655 8.38974 9.28597C8.46091 9.2554 8.52527 9.21096 8.57908 9.15525L12.6624 5.07192C12.7718 4.96252 12.8332 4.81418 12.8332 4.6595C12.8332 4.50482 12.7718 4.35647 12.6624 4.24708Z" fill="#D1A52A" />
            </svg>
          </button>
        </form>
      </RevealText>
    </div>
  );
}
