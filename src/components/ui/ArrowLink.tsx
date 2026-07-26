import React from "react";
import Link from "next/link";
import { ArrowLinkProps } from "@/types/models";
import { ArrowIcon } from "@/components/icons/ArrowIcon";

export default function ArrowLink({ href = "#", children, color = "white", className = "", as = "link" }: ArrowLinkProps) {
  const classes = `group inline-flex items-center gap-2 text-[1rem] font-normal uppercase underline transition-opacity duration-500 hover:opacity-80 ${
    color === "black" ? "text-[#1E1E1E]" : "text-white"
  } ${className}`;

  if (as === "span") {
    return (
      <span className={classes}>
        {children}
        <ArrowIcon color={color} />
      </span>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      <ArrowIcon color={color} />
    </Link>
  );
}
