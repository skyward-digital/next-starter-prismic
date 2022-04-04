import { Element, PrismicText, PrismicRichText } from "@prismicio/react";
import { Link, Image } from ".";

/**
 * A wrapper for prismic rich text that provides more functionality
 * Wraps with div automatically for props passing, and removes component entirely if render fails without requiring checks in each component
 */
export const RichText = ({ field, stripFormatting = false, as, ...props }) => {
  /* Return a plain text version of our rich text field */
  if (stripFormatting) {
    return (
      <Wrapper as={as} {...props}>
        <PrismicText field={field} />
      </Wrapper>
    );
  }

  /* Return our rich text as expected */
  if (Array.isArray(field) && field.length) {
    return (
      <Wrapper as={as} {...props}>
        <PrismicRichText field={field} components={components} />
      </Wrapper>
    );
  }

  /* or return nothing if both fail */
  return null;
};

/**
 * Adjusts our HTML with custom functions
 * See docs on Prismic: https://prismic.io/docs/technologies/advanced-rich-text-templating-nextjs
 */
const components = (type, element, children) => {
  // if (type === Element.heading1) {
  //   return <h1 id='anchor'>{children}</h1>
  // }

  // Use our Image component to better optimize RichText images
  if (type === Element.image) {
    return <Image src={element.url} alt={element.alt || ""} />;
  }

  // Use our link component to optimally link to internal and external documents
  if (type === Element.hyperlink) {
    return (
      <Link
        href={element.data.url || element.data}
        target={element.data.target ?? ""}
      >
        {children}
      </Link>
    );
  }

  // Return null to stick with the default behavior
  return null;
};

/**
 * Wrap our rich text element if the user defines it, or props exist
 */
const Wrapper = ({ children, as, ...props }) => {
  if (!as && (!props || !Object.keys(props).length)) {
    return <>{children}</>;
  }

  if (as) {
    const Component = as;
    return <Component {...props}>{children}</Component>;
  }

  return <div {...props}>{children}</div>;
};
