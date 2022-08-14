import NextLink from "next/link";
import { asLink as prismicLink } from "@prismicio/helpers";
import { linkResolver } from "../prismic";

export const Link = ({ href, disabled, ...props }) => {
  // Set up our link
  // const link = href?.link_type === 'Document' ? linkResolver(href) : href?.url ? href.url : '/'

  /**
   * DISABLED LINKS
   */
  if (disabled) {
    return <span {...props} />;
  }

  /**
   * STRING LINKS
   */
  if (typeof href === "string") {
    /* String link is relative */
    if (href[0] === "/") {
      return <InternalLink href={href} {...props} />;
    }

    /* String link is anchor */
    if (href[0] === "#") {
      return href.url ? (
        <a href={href.url.split("://")[1]} {...props} />
      ) : (
        <a href={href} {...props} />
      );
    }

    /* String link is external */
    return <ExternalLink href={href} {...props} />;
  }

  /**
   * UNKNOWN LINKS
   */
  if (href.link_type === "Any") return null;

  /**
   * PRISMIC LINKS
   */

  /* Web links */
  if (href.link_type === "Web") {
    /* Empty web link */
    if (!href.url) return <>{props.children}</>;

    /* Same page anchors */
    if (href.url.includes("://#")) {
      return <a href={href.url.split("://")[1]} {...props} />;
    }

    /* External Links */
    return <ExternalLink href={prismicLink(href, linkResolver)} {...props} />;
  }

  /* Docs links */
  if (href.link_type === "Document") {
    return <InternalLink href={prismicLink(href, linkResolver)} {...props} />;
  }

  /* Media links */
  if (href.link_type === "Image") {
    return <ExternalLink href={prismicLink(href, linkResolver)} {...props} />;
  }

  /* Any other prismic link type */
  if (typeof href.type === "string") {
    return <InternalLink href={prismicLink(href, linkResolver)} {...props} />;
  }

  /**
   * Catch all
   */
  return <>{props.children}</>;
};

/**
 * Internal Link - uses Next/Link to quickly load other internal pages
 */
const InternalLink = ({ href, children, ...props }) => (
  <NextLink href={href}>
    <a {...props}>{children}</a>
  </NextLink>
);

/**
 * External Link - uses standard a tags and defaults to proper external link settings
 */
const ExternalLink = ({
  href,
  target = "_blank",
  rel = "noopener noreferrer",
  children,
  ...props
}) => (
  <a href={href} target={target} rel={rel} {...props}>
    {children}
  </a>
);
