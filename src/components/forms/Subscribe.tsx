import React from "react";

export default function Subscribe() {
  return (
    <section className="container mx-auto">
      <div className="rounded-[12px] border border-white bg-[#DFDFDF] p-[32px] grid grid-cols-1 lg:grid-cols-5 gap-[1rem] lg:gap-[32px] items-center">
        {/* Col 1 */}
        <div className="md:col-span-1">
          <h2 className="text-[#1E1E1E] text-[1.5rem] font-medium">
            Stay Updated With <span className="font-bold">AHCL</span>
          </h2>
        </div>

        {/* Col 2 */}
        <div className="md:col-span-1">
          <p className="text-[#6B6B6B] text-[0.75rem] font-normal leading-relaxed">
            Join our newsletter for exclusive event invites and industry news.
          </p>
        </div>

        {/* Form (Cols 3, 4, 5) */}
        <form className="lg:col-span-3 grid grid-cols-1 lg:grid-cols-3 gap-[16px]">
          {/* Select Box */}
          <div className="relative h-full">
            <select className="w-full h-full rounded-[4px] border border-[#8D8D8D] p-[16px] pr-[40px] text-[#1E1E1E] text-[0.8rem] font-normal bg-transparent outline-none appearance-none">
              <option value="">Select Division</option>
              <option value="automotive">Automotive</option>
              <option value="marine">Marine</option>
              <option value="power">Power Solutions</option>
              <option value="agriculture">Agriculture</option>
              <option value="construction">Construction Equipment</option>
              <option value="water">Water Solutions</option>
              <option value="material">Material Handling</option>
            </select>
            {/* Custom dropdown arrow */}
            <div className="absolute right-[16px] top-1/2 -translate-y-1/2 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="5"
                viewBox="0 0 9 5"
                fill="none"
              >
                <path d="M4.33203 4.5L8.66216 0H0.00190401L4.33203 4.5Z" fill="#1E1E1E" />
              </svg>
            </div>
          </div>

          {/* Email Input */}
          <input
            type="email"
            placeholder="Email address"
            className="w-full h-full rounded-[3px] border-0 border-b border-[#C6C6C6] bg-[rgba(255,255,255,0.20)] text-[#1E1E1E] text-[0.8rem] font-normal py-[12px] px-[10px] outline-none placeholder:text-[#6B6B6B]"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full lg:w-[150px] h-full bg-[#D1A52A] text-[#1E1E1E] rounded-[4px] py-[16px] px-[16px] text-[0.8rem] uppercase flex justify-center items-center tracking-[1px]"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
