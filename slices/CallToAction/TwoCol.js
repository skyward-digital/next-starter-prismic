import React from "react";
import { RichText } from "prismic-reactjs";
import { Link } from "../../components/Link";

const TwoCol = ({
  title,
  description,
  primaryLink,
  primaryLinkLabel,
  secondaryLink,
  secondaryLinkLabel,
  items,
}) => (
  <section>
    <div className="container">
      <div className="grid md:grid-cols-2">
        <div>
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
        <div>
          {items.map((item) => (
            <div key={item.id}>
              <div className="text-2xl">
                {item.title && <RichText render={item.title} />}
              </div>

              {item.description && <RichText render={item.description} />}

              {item.link && item.linkLabel && (
                <Link href={item.link}>{item.linkLabel}</Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TwoCol;
