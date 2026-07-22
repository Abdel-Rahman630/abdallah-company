import React, { forwardRef } from 'react';
import { FormSelectProps } from '@/types/models';

export const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
  ({ error, className = '', children, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <select
          ref={ref}
          className={`p-[16px] text-[#949494] text-[0.85rem] font-normal border rounded-[4px] bg-transparent outline-none focus:border-[#D1A52A] w-full appearance-none pr-[40px] ${
            error ? "border-red-400" : "border-[#E5E5E5]"
          } ${className}`}
          {...props}
        >
          {children}
        </select>
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
    );
  }
);
FormSelect.displayName = 'FormSelect';
