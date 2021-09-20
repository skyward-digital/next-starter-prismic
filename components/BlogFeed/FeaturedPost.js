import React from "react";
import Image from "next/image";
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
      {featuredImage && (
        <Image
          src={featuredImage.url}
          alt={featuredImage.alt}
          title={featuredImage.alt}
          layout="fixed"
          width="480"
          height="200"
          className="rounded-full"
        />
      )}
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
