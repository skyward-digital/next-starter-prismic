import React from "react";
import Image from "next/image";
import { ArticleContent } from "./ArticleContent";
import { ArticleFeedback } from "./ArticleFeedback";

export const Article = ({ featuredImage, publishDate, article, feedback }) => (
  <article>
    <div className="mx-auto prose">
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
      <p>{publishDate}</p>
    </div>
    <ArticleContent richText={article} />
    {feedback && <ArticleFeedback />}
  </article>
);

export { ArticleContent };
