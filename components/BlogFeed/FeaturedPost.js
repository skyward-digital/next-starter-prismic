import React from "react";
import { RichText } from "prismic-reactjs";
import { CardDetails } from "../BlogCard/CardDetails";
import { CardLinks } from "../BlogCard/CardLinks";

export const FeaturedPost = ({ data, lang, url }) => {
  const {
    title,
    author,
    category,
    description,
    featuredImage,
    publishDate,
    articleContent,
  } = data;

  return (
    <div className="relative bg-gray-200 rounded-lg">
      {featuredImage && <img src={featuredImage.url} alt={featuredImage.alt} />}
      <CardLinks author={author} category={category} />

      <p className="text-2xl">{title && RichText.asText(title)}</p>

      {description && (
        <p className="line-clamp-3">{RichText.asText(description)}</p>
      )}

      <CardDetails
        publishDate={publishDate}
        content={articleContent}
        lang={lang}
        link={url}
      />
    </div>
  );
};
