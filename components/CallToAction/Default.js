import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { Link } from "../Link";

export const DefaultCTA = ({
  id,
  title,
  description,
  primaryLink,
  primaryLinkLabel,
  secondaryLink,
  secondaryLinkLabel,
}) => (
  <section id={id} className="py-16 md:py-24">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-6 text-5xl font-extrabold leading-none tracking-tight md:text-6xl">
          <PrismicRichText field={title} />
        </div>

        <div className="mb-6 text-xl text-gray-800">
          <PrismicRichText field={description} />
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {primaryLink && primaryLinkLabel && (
            <Link href={primaryLink} className="btn btn-primary btn-xl">
              {primaryLinkLabel}
            </Link>
          )}
          {secondaryLink && secondaryLinkLabel && (
            <Link
              href={secondaryLink}
              className="btn btn-tertiary btn-xl"
              showArrow
            >
              {secondaryLinkLabel}
            </Link>
          )}
        </div>
      </div>
    </div>
  </section>
);
