import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { ContactForm } from "./ContactForm";
import { Socials } from "../Socials";

export const DefaultContact = ({ id, title, description, email }) => (
  <section id={id} className="py-16 overflow-hidden md:py-24">
    <div className="container">
      <div className="flex flex-col items-center justify-center lg:flex-row">
        <div className="max-w-xl mb-12 text-center lg:text-left">
          <div className="mb-6 text-5xl font-extrabold leading-none tracking-tight md:text-6xl">
            <PrismicRichText field={title} />
          </div>

          <div className="mb-6 text-lg">
            <PrismicRichText field={description} />
          </div>

          <div className="flex items-center justify-center mb-6 lg:justify-start">
            <a href={`mailto:${email}?subject=Enquiry - Skyward Digital`}>
              {email}
            </a>
          </div>

          <Socials className="flex justify-center text-gray-600 lg:justify-start" />
        </div>

        <div className="relative w-full md:px-8">
          <ContactForm />
        </div>
      </div>
    </div>
  </section>
);
