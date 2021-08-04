import React from "react";
import { RichText } from "prismic-reactjs";

export const ArticleContent = ({ richText }) => (
  <section className="mx-auto prose">
    <RichText render={richText} />
  </section>
);
