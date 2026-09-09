import React from "react";
import ContactForm from "./ContactForm";
import ContactSocials from "./ContactSocials";
import type { ContactSectionFields } from "@/types/models";

interface GetInTouchProps {
  fields?: ContactSectionFields | null;
}

export default function GetInTouch({ fields }: GetInTouchProps) {
  return (
    <section id="get-in-touch" className="py-[100px] bg-white">
      <div className="container mx-auto">
        <div className="w-full flex flex-col lg:flex-row gap-[80px]">
          {/* Left Column - Form */}
          <ContactForm fields={fields} />

          {/* Right Column - Info */}
          <ContactSocials fields={fields} />
        </div>
      </div>
    </section>
  );
}
