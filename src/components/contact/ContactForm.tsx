"use client";

import React from "react";
import { useGetInTouch } from "@/hooks/contact/useGetInTouch";
import { FormInput } from "@/components/ui/FormInput";
import { FormSelect } from "@/components/ui/FormSelect";
import { RevealText } from "@/components/ui/ScrollReveal";

export default function ContactForm() {
  const { register, handleSubmit, onSubmit, errors, status, globalError } =
    useGetInTouch();

  return (
    <div className="flex-1">
      <RevealText delay={0.1}>
        <span className="text-[#000] text-[1rem] font-bold uppercase block mb-[8px]">
          GET IN TOUCH
        </span>
      </RevealText>

      <RevealText delay={0.2}>
        <h2 className="text-[#231F20] text-[2.5rem] font-bold mb-[1rem]">
          Contact Us
        </h2>
      </RevealText>

      <RevealText delay={0.3}>
        <p className="text-[#949494] text-[0.9rem] font-normal mb-[32px]">
          We&apos;d love to hear from you. Fill out the form and we&apos;ll respond
          as soon as possible.
        </p>
      </RevealText>

      {/* Success Message */}
      {status === "success" && (
        <div className="mb-[24px] p-[16px] rounded-[8px] bg-green-50 border border-green-200 flex items-start gap-[12px]">
          <svg
            className="shrink-0 mt-[2px]"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M22 11.0857V12.0057C21.9988 14.1621 21.3005 16.2604 20.0093 17.9875C18.7182 19.7147 16.9033 20.9782 14.8354 21.5896C12.7674 22.201 10.5573 22.1276 8.53447 21.3803C6.51168 20.633 4.78465 19.2518 3.61096 17.4428C2.43727 15.6338 1.87979 13.4938 2.02168 11.342C2.16356 9.19029 2.99721 7.14205 4.39828 5.5028C5.79935 3.86354 7.69279 2.72111 9.79619 2.24587C11.8996 1.77063 14.1003 1.98806 16.07 2.86572"
              stroke="#16a34a"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 4L12 14.01L9 11.01"
              stroke="#16a34a"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div>
            <p className="text-green-800 font-bold text-[0.9rem]">
              Message sent successfully!
            </p>
            <p className="text-green-700 text-[0.85rem]">
              Thank you for contacting us. We&apos;ll get back to you as soon
              as possible.
            </p>
          </div>
        </div>
      )}

      {/* Global Error Banner */}
      {globalError && (
        <div className="mb-[24px] p-[16px] rounded-[8px] bg-red-50 border border-red-200 flex items-start gap-[12px]">
          <svg
            className="shrink-0 mt-[2px]"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 9V13M12 17H12.01M10.29 3.86L1.82 18C1.64537 18.3024 1.55297 18.6453 1.55199 18.9945C1.55101 19.3437 1.64148 19.6871 1.81442 19.9905C1.98736 20.2939 2.23672 20.5467 2.53773 20.7238C2.83873 20.9009 3.18074 20.9962 3.53 21H20.47C20.8193 20.9962 21.1613 20.9009 21.4623 20.7238C21.7633 20.5467 22.0126 20.2939 22.1856 19.9905C22.3585 19.6871 22.449 19.3437 22.448 18.9945C22.447 18.6453 22.3546 18.3024 22.18 18L13.71 3.86C13.5317 3.56611 13.2807 3.32312 12.9812 3.15448C12.6817 2.98585 12.3437 2.89725 12 2.89725C11.6563 2.89725 11.3183 2.98585 11.0188 3.15448C10.7193 3.32312 10.4683 3.56611 10.29 3.86Z"
              stroke="#dc2626"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-red-700 text-[0.85rem]">{globalError}</p>
        </div>
      )}

      <RevealText delay={0.4}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-[1rem]"
          noValidate
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1rem]">
            {/* Name */}
            <div className="flex flex-col gap-[4px]">
              <FormInput
                type="text"
                placeholder="Name"
                error={!!errors.name}
                {...register("name", { required: "Name is required." })}
              />
              {errors.name && (
                <span className="text-red-500 text-[0.75rem]">
                  {errors.name.message}
                </span>
              )}
            </div>

            {/* Division */}
            <div className="flex flex-col gap-[4px]">
              <FormSelect
                error={!!errors.division}
                {...register("division", {
                  required: "Please select a division.",
                })}
              >
                <option value="">Select Division</option>
                <option value="automotive">
                  Automotive &amp; Machinery
                </option>
                <option value="marine">Marine</option>
                <option value="power_solutions">Power Solutions</option>
                <option value="agriculture">Agriculture</option>
                <option value="construction_equipment">Construction Equipment</option>
                <option value="water_solutions">Water Solutions</option>
                <option value="material_handling">Material Handling</option>
              </FormSelect>
              {errors.division && (
                <span className="text-red-500 text-[0.75rem]">
                  {errors.division.message}
                </span>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-[4px]">
            <FormInput
              type="email"
              placeholder="Email Address"
              error={!!errors.email}
              {...register("email", { required: "Email is required." })}
            />
            {errors.email && (
              <span className="text-red-500 text-[0.75rem]">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-[4px]">
            <FormInput
              type="tel"
              placeholder="Phone Number"
              error={!!errors.phone}
              {...register("phone", {
                required: "Phone number is required.",
              })}
            />
            {errors.phone && (
              <span className="text-red-500 text-[0.75rem]">
                {errors.phone.message}
              </span>
            )}
          </div>

          {/* Message */}
          <div className="flex flex-col gap-[4px]">
            <textarea
              placeholder="Your Message"
              rows={4}
              className={`p-[16px] text-[#949494] text-[0.85rem] font-normal border rounded-[4px] bg-transparent outline-none focus:border-[#D1A52A] w-full resize-y ${
                errors.message ? "border-red-400" : "border-[#E5E5E5]"
              }`}
              {...register("message", {
                required: "Message is required.",
              })}
            />
            {errors.message && (
              <span className="text-red-500 text-[0.75rem]">
                {errors.message.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="letter-spacing-[1.5px] self-start flex items-center gap-[10px] px-[32px] py-[14px] bg-[#1E1E1E] text-[#D1A52A] text-[0.875rem] uppercase rounded-[4px]"
          >
            {status === "loading" ? (
              <>
                <svg
                  className="animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 2V6M12 18V22M6 12H2M22 12H18M19.07 4.93L16.24 7.76M7.76 16.24L4.93 19.07M19.07 19.07L16.24 16.24M7.76 7.76L4.93 4.93"
                    stroke="#1E1E1E"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="10"
                  viewBox="0 0 13 10"
                  fill="none"
                >
                  <path
                    d="M12.6624 4.24708L8.57908 0.163749C8.46907 0.0574899 8.32171 -0.00130703 8.16877 2.20514e-05C8.01582 0.00135113 7.86951 0.0626998 7.76136 0.170855C7.6532 0.279009 7.59185 0.425316 7.59052 0.578265C7.5892 0.731213 7.64799 0.878564 7.75425 0.988582L10.8418 4.07617H0.583333C0.428624 4.07617 0.280251 4.13762 0.170854 4.24702C0.0614581 4.35642 0 4.50479 0 4.6595C0 4.81421 0.0614581 4.96258 0.170854 5.07198C0.280251 5.18137 0.428624 5.24283 0.583333 5.24283H10.8418L7.75425 8.33042C7.69854 8.38423 7.6541 8.44859 7.62352 8.51976C7.59295 8.59093 7.57686 8.66748 7.57619 8.74493C7.57551 8.82239 7.59027 8.8992 7.6196 8.97089C7.64894 9.04258 7.69225 9.10771 7.74702 9.16248C7.80179 9.21725 7.86692 9.26056 7.93861 9.2899C8.0103 9.31923 8.08711 9.33399 8.16457 9.33331C8.24202 9.33264 8.31857 9.31655 8.38974 9.28597C8.46091 9.2554 8.52527 9.21096 8.57908 9.15525L12.6624 5.07192C12.7718 4.96252 12.8332 4.81418 12.8332 4.6595C12.8332 4.50482 12.7718 4.35647 12.6624 4.24708Z"
                    fill="#D1A52A"
                  />
                </svg>
              </>
            )}
          </button>
        </form>
      </RevealText>
    </div>
  );
}
