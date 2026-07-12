"use client";

import { useGetInTouch } from "@/hooks/contact/useGetInTouch";
import ContactSubmitButton from "@/components/ui/ContactSubmitButton";
import { RevealText } from "@/components/ui/ScrollReveal";

export default function GetInTouch() {
  const { register, handleSubmit, onSubmit } = useGetInTouch();

  return (
    <section className="py-[100px] bg-white">
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
                We'd love to hear from you. Fill out the form and we'll respond as soon as possible.
              </p>
            </RevealText>

            <RevealText delay={0.4}>
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-[1rem]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[1rem]">
                  <input
                    type="text"
                    placeholder="Name"
                    className="p-[16px] text-[#949494] text-[0.85rem] font-normal border border-[#E5E5E5] rounded-[4px] bg-transparent outline-none focus:border-[#D1A52A] w-full"
                    {...register("name", { required: true })}
                  />
                  <div className="relative w-full">
                    <select
                      className="p-[16px] text-[#949494] text-[0.85rem] font-normal border border-[#E5E5E5] rounded-[4px] bg-transparent outline-none focus:border-[#D1A52A] w-full appearance-none pr-[40px]"
                      {...register("division", { required: true })}
                    >
                      <option value="">Select Division</option>
                      <option value="automotive">Automotive & Machinery</option>
                      <option value="marine">Marine</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="absolute right-[16px] top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" width="9" height="5" viewBox="0 0 9 5" fill="none">
                        <path d="M4.33203 4.5L8.66216 0H0.00190401L4.33203 4.5Z" fill="#1E1E1E"/>
                      </svg>
                    </div>
                  </div>
                </div>
                
                <input
                  type="email"
                  placeholder="Email Address"
                  className="p-[16px] text-[#949494] text-[0.85rem] font-normal border border-[#E5E5E5] rounded-[4px] bg-transparent outline-none focus:border-[#D1A52A] w-full"
                  {...register("email", { required: true })}
                />
                
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="p-[16px] text-[#949494] text-[0.85rem] font-normal border border-[#E5E5E5] rounded-[4px] bg-transparent outline-none focus:border-[#D1A52A] w-full"
                  {...register("phone", { required: true })}
                />
                
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="p-[16px] text-[#949494] text-[0.85rem] font-normal border border-[#E5E5E5] rounded-[4px] bg-transparent outline-none focus:border-[#D1A52A] w-full resize-y"
                  {...register("message", { required: true })}
                ></textarea>
                
                <ContactSubmitButton />
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
                {/* Facebook */}
                <li className="flex items-center gap-[20px] p-[16px] border border-[#E5E7EB] rounded-[10px] bg-white w-full">
                  <a href="#" target="_blank" className="w-[48px] h-[48px] rounded-[24px] bg-[#1E1E1E] flex items-center justify-center shrink-0 hover:bg-[#D1A52A] transition-colors group">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path className="group-hover:stroke-black transition-colors" d="M14.9994 2H17.9992V6.00032H14.9994C14.7342 6.00032 14.4799 6.10569 14.2924 6.29324C14.1048 6.48079 13.9995 6.73516 13.9995 7.0004V10.0006H17.9992L16.9993 14.001H13.9995V22.0016H9.99978V14.001H7V10.0006H9.99978V7.0004C9.99978 5.67421 10.5265 4.40234 11.4641 3.46458C12.4018 2.52683 13.6734 2 14.9994 2Z" stroke="#D1A52A" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </a>
                  <div>
                    <h4 className="text-[#1E1E1E] text-[1.1rem] font-bold">Facebook</h4>
                    <span className="text-[#6B7280] text-[14px] font-normal">@AHCL_Official</span>
                  </div>
                </li>

                {/* Instagram */}
                <li className="flex items-center gap-[20px] p-[16px] border border-[#E5E7EB] rounded-[10px] bg-white w-full">
                  <a href="#" target="_blank" className="w-[48px] h-[48px] rounded-[24px] bg-[#1E1E1E] flex items-center justify-center shrink-0 hover:bg-[#D1A52A] transition-colors group">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path className="group-hover:stroke-black transition-colors" d="M17.5012 6.50036H17.5112M7.0004 2H17.0012C19.7628 2 22.0016 4.23876 22.0016 7.0004V17.0012C22.0016 19.7628 19.7628 22.0016 17.0012 22.0016H7.0004C4.23876 22.0016 2 19.7628 2 17.0012V7.0004C2 4.23876 4.23876 2 7.0004 2ZM16.0008 11.3711C16.1242 12.2034 15.9821 13.0534 15.5946 13.8003C15.207 14.5471 14.5939 15.1528 13.8423 15.5311C13.0907 15.9093 12.239 16.041 11.4082 15.9073C10.5775 15.7737 9.81009 15.3815 9.21512 14.7865C8.62015 14.1915 8.22794 13.4241 8.09426 12.5934C7.96059 11.7626 8.09226 10.9109 8.47055 10.1593C8.84884 9.40775 9.45449 8.79459 10.2013 8.40706C10.9482 8.01952 11.7982 7.87736 12.6306 8.00078C13.4795 8.12668 14.2655 8.52229 14.8724 9.12918C15.4793 9.73607 15.8749 10.5221 16.0008 11.3711Z" stroke="#D1A52A" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </a>
                  <div>
                    <h4 className="text-[#1E1E1E] text-[1.1rem] font-bold">Instagram</h4>
                    <span className="text-[#6B7280] text-[14px] font-normal">@AHCL_Life</span>
                  </div>
                </li>

                {/* LinkedIn */}
                <li className="flex items-center gap-[20px] p-[16px] border border-[#E5E7EB] rounded-[10px] bg-white w-full">
                  <a href="#" target="_blank" className="w-[48px] h-[48px] rounded-[24px] bg-[#1E1E1E] flex items-center justify-center shrink-0 hover:bg-[#D1A52A] transition-colors group">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path className="group-hover:stroke-black transition-colors" d="M20.2441 9.75769C19.1188 8.63242 17.5925 8.00025 16.0011 8.00025C14.4097 8.00025 12.8834 8.63242 11.7581 9.75769C10.6328 10.883 10.0006 12.4091 10.0006 14.0005V21.0008H14.001V14.0005C14.001 13.47 14.2117 12.9613 14.5868 12.5862C14.9619 12.2111 15.4706 12.0004 16.0011 12.0004C16.5316 12.0004 17.0403 12.2111 17.4154 12.5862C17.7905 12.9613 18.0013 13.47 18.0013 14.0005V21.0008H22.0016V14.0005C22.0016 12.4091 21.3694 10.883 20.2441 9.75769Z" stroke="#D1A52A" strokeWidth="2" strokeLinecap="round"/>
                      <path className="group-hover:stroke-black transition-colors" d="M6.00032 9.00029H2V21.0008H6.00032V9.00029Z" stroke="#D1A52A" strokeWidth="2" strokeLinecap="round"/>
                      <path className="group-hover:stroke-black transition-colors" d="M4.00016 6.00017C5.10482 6.00017 6.00032 5.1047 6.00032 4.00008C6.00032 2.89547 5.10482 2 4.00016 2C2.8955 2 2 2.89547 2 4.00008C2 5.1047 2.8955 6.00017 4.00016 6.00017Z" stroke="#D1A52A" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </a>
                  <div>
                    <h4 className="text-[#1E1E1E] text-[1.1rem] font-bold">LinkedIn</h4>
                    <span className="text-[#6B7280] text-[14px] font-normal">Abdullah Hashim Company</span>
                  </div>
                </li>
              </ul>
            </RevealText>

            {/* Customer Service */}
            <RevealText delay={0.6}>
              <div className="flex flex-col justify-center px-[24px] py-[32px] gap-[16px] rounded-[10px] bg-[#1E1E1E]">
                <h4 className="text-[#D1A52A] text-[1.1rem] font-bold">
                  Customer Service
                </h4>
                <div className="flex justify-start items-center gap-[12px] flex-wrap">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12" viewBox="0 0 15 12" fill="none" className="shrink-0">
                    <path d="M14.8004 5.46053L10.0276 0.210534C9.899 0.0739156 9.72677 -0.00168046 9.548 2.83518e-05C9.36923 0.00173717 9.19822 0.0806141 9.0718 0.21967C8.94539 0.358726 8.87368 0.546835 8.87213 0.743483C8.87057 0.940131 8.9393 1.12958 9.0635 1.27103L12.6724 5.24078H0.681825C0.500994 5.24078 0.327569 5.3198 0.199702 5.46045C0.0718349 5.60111 0 5.79187 0 5.99078C0 6.1897 0.0718349 6.38046 0.199702 6.52111C0.327569 6.66177 0.500994 6.74078 0.681825 6.74078H12.6724L9.0635 10.7105C8.99838 10.7797 8.94643 10.8625 8.9107 10.954C8.87496 11.0455 8.85616 11.1439 8.85537 11.2435C8.85458 11.3431 8.87183 11.4418 8.90612 11.534C8.9404 11.6262 8.99103 11.7099 9.05505 11.7803C9.11906 11.8507 9.19519 11.9064 9.27899 11.9442C9.36278 11.9819 9.45256 12.0008 9.54309 12C9.63363 11.9991 9.72309 11.9784 9.80628 11.9391C9.88947 11.8998 9.9647 11.8427 10.0276 11.771L14.8004 6.52103C14.9282 6.38039 15 6.18966 15 5.99078C15 5.79191 14.9282 5.60118 14.8004 5.46053Z" fill="#D1A52A"/>
                  </svg>
                  <a href="tel:920002208" className="text-[#FFF] text-[1rem] font-semibold hover:text-[#D1A52A] transition-colors">
                    920 002 208
                  </a>
                  
                  <a href="tel:8001199988" className="text-[#FFF] text-[1rem] font-semibold hover:text-[#D1A52A] transition-colors">
                    800 119 9988
                  </a>
                </div>
                <p className="text-white/60 text-[0.9rem] font-normal">
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
