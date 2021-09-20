import React from "react";
import { RichText } from "prismic-reactjs";
import { Link } from "../../components/Link";

const HeroSlice = ({ slice: { primary } }) => {
  const {
    title,
    description,
    primaryLink,
    primaryLinkLabel,
    secondaryLink,
    secondaryLinkLabel,
    image,
  } = primary;

  return (
    <section>
      <div className="container">
        <div className="flex">
          <div className="max-w-3xl">
            <div className="text-6xl font-bold">
              {title && <RichText render={title} />}
            </div>

            <div className="text-lg text-bold">
              {description && <RichText render={description} />}
            </div>

            <div className="flex gap-4">
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
            <div className="max-w-xl">
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
};

export default HeroSlice;
