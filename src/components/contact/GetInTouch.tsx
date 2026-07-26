import React from "react";
import ContactForm from "./ContactForm";
import ContactSocials from "./ContactSocials";

export default function GetInTouch() {
  return (
    <section id="get-in-touch" className="py-[100px] bg-white">
      <div className="container mx-auto">
        <div className="w-full flex flex-col lg:flex-row gap-[80px]">
          {/* Left Column - Form */}
          <ContactForm />

          {/* Right Column - Info */}
          <ContactSocials />
        </div>
      </div>
    </section>
  );
}
