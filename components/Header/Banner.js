import React from "react";
import { RichText } from "prismic-reactjs";

export const Banner = ({ text }) => (
  <div className="py-2 font-medium text-white bg-theme-heading bannerLink">
    <div className="container mx-auto text-center bannerLink">
      <RichText render={text} />
    </div>
  </div>
);
