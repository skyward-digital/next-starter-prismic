import React from "react";
import { RichText } from "prismic-reactjs";
import { CardDetails } from "./CardDetails";
import { CardLinks } from "./CardLinks";

export const BlogCard = ({ data, lang }) => {
  const {
    title,
    articleContent,
    featuredImage,
    author,
    category,
    publishDate,
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
        />
      )}
      <CardLinks author={author} category={category} />

      <p className="text-2xl">{title && RichText.asText(title)}</p>

      <CardDetails
        publishDate={publishDate}
        content={articleContent}
        lang={lang}
      />
    </div>
  );
};
