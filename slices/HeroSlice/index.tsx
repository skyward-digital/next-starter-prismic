import React from "react";
import { Link, RichText, RichTextBlock } from "prismic-reactjs";

export const HeroSlice = ({ slice }: HeroSliceTypes) => (
  <section>
    {slice.primary.title ? (
      <RichText render={slice.primary.title} />
    ) : (
      <h2>Template slice, update me!</h2>
    )}
    {slice.primary.description ? (
      <RichText render={slice.primary.description} />
    ) : (
      <p>start by editing this slice from inside the SliceMachine builder!</p>
    )}

    {slice.primary.link ? (
      <a href={Link.url(slice.primary.link)} className="btn btn-primary">
        <span>{slice.primary.linkLabel}</span>
      </a>
    ) : null}
  </section>
);

export interface HeroSliceTypes {
  slice: {
    primary: {
      title: RichTextBlock[];
      description: RichTextBlock[];
      link: Link;
      linkLabel: RichTextBlock[];
    };
  };
}
