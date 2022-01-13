import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { Link } from "../Link";

export const SmallCTA = ({
  id,
  title,
  primaryLink,
  primaryLinkLabel,
  secondaryLink,
  secondaryLinkLabel,
}) => (
  <section id={id} className="py-8 bg-white md:py-16">
    <div className="container">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6 text-2xl font-extrabold leading-none tracking-tight">
          <PrismicRichText field={title} />
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href={primaryLink} className="btn btn-primary btn-xl">
            {primaryLinkLabel}
          </Link>
          <Link
            href={secondaryLink}
            className="btn btn-tertiary btn-xl"
            showArrow
          >
            {secondaryLinkLabel}
          </Link>
        </div>
      </div>
    </div>
  </section>
);
