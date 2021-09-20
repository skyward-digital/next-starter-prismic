import React from "react";
import { RichText } from "prismic-reactjs";
import { Link } from "../../components/Link";

export const CardLinks = ({ author, category }) => (
  <div className="inline-flex text-left">
    {author?.data && (
      <Image
        src={author.data.avatar.url}
        alt={author.data.avatar.alt}
        title={author.data.avatar.alt}
        layout="fixed"
        width="24"
        height="24"
        className="rounded-full mr-2"
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
