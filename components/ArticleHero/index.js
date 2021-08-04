import React from "react";
import { RichText } from "prismic-reactjs";
import { Link } from "../../components/Link";

export const ArticleHero = ({
  title,
  grandparentLink,
  grandparentLinkLabel,
  parentLink,
  parentLinkLabel,
}) => (
  <section className="pt-64 mb-32 -mt-40 text-center">
    <div className="container mb-32">
      <div className="flex justify-center">
        <HeroLink link={grandparentLink} linkLabel={grandparentLinkLabel} />
        {grandparentLink && <span className="mx-1">/</span>}
        <HeroLink link={parentLink} linkLabel={parentLinkLabel} />
        {/* if neither links exist, still retain the space keeping all titles in line */}
        &nbsp;
      </div>
      <div className="mb-4 text-6xl font-bold">{RichText.render(title)}</div>
    </div>
  </section>
);

const HeroLink = ({ link, linkLabel }) => {
  if (link && linkLabel) {
    return (
      <Link href={link}>
        {typeof linkLabel === "string" ? (
          linkLabel
        ) : (
          <RichText render={linkLabel} />
        )}
      </Link>
    );
  }

  return null;
};
