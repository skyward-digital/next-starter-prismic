import React from "react";
import Image from "next/image";
import { RichText } from "prismic-reactjs";
import { Link } from "../../components/Link";

const TwoColWithImage = ({
  title,
  description,
  primaryLink,
  primaryLinkLabel,
  secondaryLink,
  secondaryLinkLabel,
  image,
}) => (
  <section>
    <div className="container">
      <div className="flex">
        <div className="flex-1">
          <div className="text-5xl">{title && <RichText render={title} />}</div>

          <div className="text-xl">
            {description && <RichText render={description} />}
          </div>

          <div className="flex justify-center gap-4">
            {primaryLink && primaryLinkLabel && (
              <Link href={primaryLink} className="p-4 bg-blue-400">
                {primaryLinkLabel}
              </Link>
            )}
            {primaryLink && primaryLinkLabel && (
              <Link href={secondaryLink} className="p-4 bg-gray-200">
                {secondaryLinkLabel}
              </Link>
            )}
          </div>
        </div>
        {image && (
          <div className="flex-1">
            <Image
              src={image.url}
              alt={image.alt}
              title={image.alt}
              layout="fixed"
              width="480"
              height="200"
            />
          </div>
        )}
      </div>
    </div>
  </section>
);

export default TwoColWithImage;
