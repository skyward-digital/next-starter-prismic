import React from "react";
import { RichText } from "prismic-reactjs";
import { Link } from "../../components/Link";

export const CardLinks = ({ author, category }) => (
  <div className="inline-flex text-left">
    {author?.data && (
      <img
        src={author.data.avatar.url}
        alt={author.data.avatar.alt}
        className="w-6 h-6 mr-2"
      />
    )}

    <span>
      {author?.data && RichText.asText(author.data.name)}
      {author?.data && category.data && " in "}
      {category?.data && (
        <Link href={category} className="inline">
          {RichText.asText(category.data.title)}
        </Link>
      )}
    </span>
  </div>
);
