import React from "react";
import { RichText } from "prismic-reactjs";
import { Link } from "../../components/Link";

const Simple = ({
  title,
  description,
  primaryLink,
  primaryLinkLabel,
  secondaryLink,
  secondaryLinkLabel,
}) => (
  <section>
    <div className="container text-center">
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
  </section>
);

export default Simple;
