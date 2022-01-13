import React from "react";
import { PrismicRichText } from "@prismicio/react";

export const Banner = ({ text }) => (
  <div className="py-2 font-medium text-white bg-theme-heading bannerLink">
    <div className="container mx-auto text-center bannerLink">
      <PrismicRichText field={text} />
    </div>
  </div>
);
