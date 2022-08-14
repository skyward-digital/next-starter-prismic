import { Element, PrismicText, PrismicRichText } from "@prismicio/react";
import { Link, Image } from ".";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

/**
 * A wrapper for prismic rich text that provides more functionality
 * Wraps with div automatically for props passing, and removes component entirely if render fails without requiring checks in each component
 */
export const RichText = ({ field, plainText, as, showLinks, ...props }) => {
  if (!field?.length) return null;

  // If a string has been passed instead of an array
  if (typeof field === "string") {
    return (
      <Wrapper as={as} {...props}>
        {field}
      </Wrapper>
    );
  }

  /* Return a plain text version of our rich text field */
  if (plainText) {
    return (
      <Wrapper as={as} {...props}>
        <PrismicText field={field} />
      </Wrapper>
    );
  }

  /* Return our rich text as expected */
  if (Array.isArray(field)) {
    return (
      <Wrapper as={as} {...props}>
        <PrismicRichText
          field={field}
          components={(type, element, content, children) =>
            components({ type, element, content, children, showLinks })
          }
        />
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
const components = ({ type, element, content, children, showLinks }) => {
  const createId = (string) =>
    string
      .toLowerCase()
      .replace(/[^\w\s]/gi, "") //remove special chars
      .replace(/\s+/g, "-"); //replace spaces with hyphens

  const HeadingWithLink = ({ content, as }) => {
    const Component = as;
    const id = createId(content);
    return (
      <Component id={id} className="relative group">
        <Link
          href={`#${id}`}
          className="absolute -ml-2 transform -translate-x-full top-1/2 -translate-y-1/2"
        >
          <FontAwesomeIcon
            icon={faLink}
            className="w-8 h-8 text-transparent group-hover:text-gray-300 dark:group-hover:text-gray-500 transition duration-200"
          />
        </Link>

        {children}
      </Component>
    );
  };

  if (showLinks) {
    if (type === Element.heading1)
      return <HeadingWithLink as="h1" content={content} />;
    if (type === Element.heading2)
      return <HeadingWithLink as="h2" content={content} />;
    if (type === Element.heading3)
      return <HeadingWithLink as="h3" content={content} />;
    if (type === Element.heading4)
      return <HeadingWithLink as="h4" content={content} />;

    return null;
  }

  // // Use our Image component to better optimize RichText images
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
