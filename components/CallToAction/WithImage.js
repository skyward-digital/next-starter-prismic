import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { Link } from "../Link";
import { Image } from "../Image";

export const ImageCTA = ({
  id,
  title,
  description,
  primaryLink,
  primaryLinkLabel,
  secondaryLink,
  secondaryLinkLabel,
  image,
}) => (
  <section id={id} className="py-16 md:py-24">
    <div className="container">
      <div className="items-center text-center grid lg:grid-cols-2 lg:text-left gap-24">
        <div>
          <div className="mb-6 text-5xl font-extrabold leading-none tracking-tight md:text-6xl">
            <PrismicRichText field={title} />
          </div>

          <div className="mb-6 text-xl text-gray-800">
            <PrismicRichText field={description} />
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
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
        <div>
          <Image {...image} width={680} />
        </div>
      </div>
    </div>
  </section>
);
