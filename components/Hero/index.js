import React from "react";
import { Link, RichText } from "prismic-reactjs";

export const Hero = ({ title, description, primaryLink, primaryLinkLabel }) => (
  <section className="-mt-40 mb-32 pt-64 pb-32 text-center">
    <div className="container mb-32">
      <div className="text-4xl prose">{RichText.render(title)}</div>
      {RichText.render(description)}
      {primaryLink && (
        <a href={Link.url(primaryLink)} className="btn btn-primary">
          {RichText.asText(primaryLinkLabel)}
        </a>
      )}
    </div>
  </section>
);
