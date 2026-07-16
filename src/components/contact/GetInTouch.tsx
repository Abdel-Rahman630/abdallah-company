"use client";

import { useGetInTouch } from "@/hooks/contact/useGetInTouch";
import { RevealText } from "@/components/ui/ScrollReveal";
import { FormInput } from "@/components/ui/FormInput";
import { FormSelect } from "@/components/ui/FormSelect";

export default function GetInTouch() {
  const { register, handleSubmit, onSubmit, errors, status, globalError } =
    useGetInTouch();

  return (
    <section id="get-in-touch" className="py-[100px] bg-white">
      <div className="container mx-auto">
        <div className="w-full flex flex-col lg:flex-row gap-[80px]">
          {/* Left Column - Form */}
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
                We'd love to hear from you. Fill out the form and we'll respond
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
                    Thank you for contacting us. We'll get back to you as soon
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
                      <option value="other">Other</option>
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
                    className={`p-[16px] text-[#949494] text-[0.85rem] font-normal border rounded-[4px] bg-transparent outline-none focus:border-[#D1A52A] w-full resize-y ${errors.message ? "border-red-400" : "border-[#E5E5E5]"}`}
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
                  className="letter-spacing-[1.5px] self-start flex items-center gap-[10px] px-[32px] py-[14px] bg-[#1E1E1E] text-[#D1A52A] text-[0.875rem] uppercase rounded-[4px] "
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

          {/* Right Column - Info */}
          <div className="w-full lg:w-[400px] shrink-0">
            <RevealText delay={0.3}>
              <h3 className="text-[#1E1E1E] text-[1.5rem] font-bold mb-[1rem]">
                Follow Our Progress
              </h3>
            </RevealText>

            <RevealText delay={0.4}>
              <p className="text-[#6B7280] text-[0.8rem] font-normal mb-[32px]">
                Join our community and stay updated with AHCL news
              </p>
            </RevealText>

            <RevealText delay={0.5}>
              <ul className="flex flex-col gap-[8px] mb-[32px]">
                {/* LinkedIn */}
                <li className="p-[16px] border border-[#E5E7EB] rounded-[10px] bg-white w-full">
                  <a
                    href="https://www.linkedin.com/company/abdullah-hashim-co--ltd-/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-[20px] group w-full"
                  >
                    <div className="w-[48px] h-[48px] rounded-[24px] bg-[#F9F9F9] flex items-center justify-center shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M20.2441 9.75769C19.1188 8.63242 17.5925 8.00025 16.0011 8.00025C14.4097 8.00025 12.8834 8.63242 11.7581 9.75769C10.6328 10.883 10.0006 12.4091 10.0006 14.0005V21.0008H14.001V14.0005C14.001 13.47 14.2117 12.9613 14.5868 12.5862C14.9619 12.2111 15.4706 12.0004 16.0011 12.0004C16.5316 12.0004 17.0403 12.2111 17.4154 12.5862C17.7905 12.9613 18.0013 13.47 18.0013 14.0005V21.0008H22.0016V14.0005C22.0016 12.4091 21.3694 10.883 20.2441 9.75769Z"
                          stroke="#1E1E1E"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                        <path
                          d="M6.00032 9.00029H2V21.0008H6.00032V9.00029Z"
                          stroke="#1E1E1E"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                        <path
                          d="M4.00016 6.00017C5.10482 6.00017 6.00032 5.1047 6.00032 4.00008C6.00032 2.89547 5.10482 2 4.00016 2C2.8955 2 2 2.89547 2 4.00008C2 5.1047 2.8955 6.00017 4.00016 6.00017Z"
                          stroke="#1E1E1E"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-[#1E1E1E] text-[1.1rem] font-bold">
                        LinkedIn
                      </h4>
                      <span className="text-[#6B7280] text-[14px] font-normal">
                        Abdullah Hashim Company
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </RevealText>

            {/* Customer Service */}
            <RevealText delay={0.6}>
              <div className="flex flex-col justify-center px-[24px] py-[32px] gap-[16px] rounded-[10px] bg-[#F9F9F9]">
                <h4 className="text-[#1E1E1E] text-[1.1rem] font-bold">
                  Customer Service
                </h4>
                <div className="flex justify-start items-center gap-[12px] flex-wrap">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="12"
                    viewBox="0 0 15 12"
                    fill="none"
                  >
                    <path
                      d="M14.8004 5.46053L10.0276 0.210534C9.899 0.0739156 9.72677 -0.00168046 9.548 2.83518e-05C9.36923 0.00173717 9.19822 0.0806141 9.0718 0.21967C8.94539 0.358726 8.87368 0.546835 8.87213 0.743483C8.87057 0.940131 8.9393 1.12958 9.0635 1.27103L12.6724 5.24078H0.681825C0.500994 5.24078 0.327569 5.3198 0.199702 5.46045C0.0718349 5.60111 0 5.79187 0 5.99078C0 6.1897 0.0718349 6.38046 0.199702 6.52111C0.327569 6.66177 0.500994 6.74078 0.681825 6.74078H12.6724L9.0635 10.7105C8.99838 10.7797 8.94643 10.8625 8.9107 10.954C8.87496 11.0455 8.85616 11.1439 8.85537 11.2435C8.85458 11.3431 8.87183 11.4418 8.90612 11.534C8.9404 11.6262 8.99103 11.7099 9.05505 11.7803C9.11906 11.8507 9.19519 11.9064 9.27899 11.9442C9.36278 11.9819 9.45256 12.0008 9.54309 12C9.63363 11.9991 9.72309 11.9784 9.80628 11.9391C9.88947 11.8998 9.9647 11.8427 10.0276 11.771L14.8004 6.52103C14.9282 6.38039 15 6.18966 15 5.99078C15 5.79191 14.9282 5.60118 14.8004 5.46053Z"
                      fill="#1E1E1E"
                    />
                  </svg>
                  <a
                    href="tel:920002208"
                    className="text-[#666666] text-[1rem] font-semibold"
                  >
                    920 002 208
                  </a>

                  <a
                    href="tel:8001199988"
                    className="text-[#666666] text-[1rem] font-semibold"
                  >
                    800 119 9988
                  </a>
                </div>
                <p className="text-[#666666] text-[0.9rem] font-normal">
                  Available Sun - Thu | 8:00 AM - 5:00 PM
                </p>
              </div>
            </RevealText>
          </div>
        </div>
      </div>
    </section>
  );
}
