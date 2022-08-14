import { Element, PrismicRichText } from "@prismicio/react";
import { Link } from "../../../components";

import styles from "./index.module.css";

export const BlogContents = ({ slices }) => {
  if (!slices) return null;

  /**
   * A wrapper for prismic rich text that provides more functionality
   * Wraps with div automatically for props passing, and removes component entirely if render fails without requiring checks in each component
   */
  const ContentLinks = ({ field }) => {
    return <PrismicRichText field={field} components={components} />;
  };

  /**
   * Adjusts our HTML with custom functions
   * See docs on Prismic: https://prismic.io/docs/technologies/advanced-rich-text-templating-nextjs
   */
  const components = (type, element, content) => {
    const createId = (string) =>
      string
        .toLowerCase()
        .replace(/[^\w\s]/gi, "") //remove special chars
        .replace(/\s+/g, "-"); //replace spaces with hyphens

    if (type === Element.heading1) {
      return (
        <Link href={`#${createId(content)}`} className={styles.link}>
          <p>{content}</p>
        </Link>
      );
    }

    if (type === Element.heading2) {
      return (
        <Link href={`#${createId(content)}`} className={styles.link}>
          <p>{content}</p>
        </Link>
      );
    }

    if (type === Element.heading3) {
      return (
        <Link
          href={`#${createId(content)}`}
          className={`ml-5 text-sm ${styles.link}`}
        >
          <p>{content}</p>
        </Link>
      );
    }

    if (type === Element.heading4) {
      return (
        <Link
          href={`#${createId(content)}`}
          className={`ml-10 text-sm ${styles.link}`}
        >
          <p>{content}</p>
        </Link>
      );
    }

    // Return empty string to ignore all remaining elements (null to stick with the default behavior)
    return "";
  };

  return slices.map((slice, index) => {
    if (slice.slice_type === "content") {
      return <ContentLinks key={index} field={slice.primary.content} />;
    }

    return null;
  });
};
