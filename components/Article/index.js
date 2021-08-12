import React from "react";
import { ArticleContent } from "./ArticleContent";
import { ArticleFeedback } from "./ArticleFeedback";

export const Article = ({ featuredImage, publishDate, article, feedback }) => (
  <article>
    <div className="mx-auto prose">
      {featuredImage && <img src={featuredImage.url} alt={featuredImage.alt} />}
      <p>{publishDate}</p>
    </div>
    <ArticleContent richText={article} />
    {feedback && <ArticleFeedback />}
  </article>
);

export { ArticleContent };
