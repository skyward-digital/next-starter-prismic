import { RichText as PrismicRichText, Elements } from "prismic-reactjs";
import { Link, Image } from ".";

/**
 * A wrapper for prismic rich text that provides more functionality
 * Wraps with div automatically for props passing, and removes component entirely if render fails without requiring checks in each component
 */
export const RichText = ({ render, asText, as, ...props }) => {
  /* Return a plain text version of our rich text field */
  if (asText) {
    return (
      <Wrapper as={as} {...props}>
        {PrismicRichText.asText(asText)}
      </Wrapper>
    );
  }

  /* Return our rich text as expected */
  if (Array.isArray(render) && render.length) {
    return (
      <Wrapper as={as} {...props}>
        <PrismicRichText render={render} htmlSerializer={htmlSerializer} />
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
const htmlSerializer = (type, element, children) => {
  // if (type === Elements.heading1) {
  //   return <h1 id='anchor'>{children}</h1>
  // }

  // Use our Image component to better optimize RichText images
  if (type === Elements.image) {
    return <Image src={element.url} alt={element.alt || ""} />;
  }

  // Use our link component to optimally link to internal and external documents
  if (type === Elements.hyperlink) {
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
