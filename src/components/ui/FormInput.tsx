import React, { InputHTMLAttributes, forwardRef } from 'react';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ error, className = '', ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`p-[16px] text-[#949494] text-[0.85rem] font-normal border rounded-[4px] bg-transparent outline-none focus:border-[#D1A52A] w-full ${
          error ? "border-red-400" : "border-[#E5E5E5]"
        } ${className}`}
        {...props}
      />
    );
  }
);
FormInput.displayName = 'FormInput';
