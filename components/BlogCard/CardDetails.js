import React from "react";
import { RichText } from "prismic-reactjs";
import { Link } from "../Link";
import { calculateReadTime } from "../../utils/calculateReadTime";

export const CardDetails = ({ publishDate, content, link, lang }) => (
  <p>
    {publishDate &&
      new Date(publishDate).toLocaleDateString(lang, {
        // year: "numeric",
        month: "short",
        day: "numeric",
      })}

    {publishDate && content && " • "}

    {content && `${calculateReadTime(RichText.asText(content))} min read`}

    {content && link && " • "}

    {link && (
      <Link href={link} className="inline">
        Read more
      </Link>
    )}
  </p>
);
