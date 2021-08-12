import NextLink from "next/link";
import { Link as PrismicLink } from "prismic-reactjs";
import { linkResolver } from "../../utils/linkResolver";

export const Link = ({ href: link, disabled, children, ...rest }) => {
  if (disabled) {
    return <div {...rest}>{children}</div>;
  }

  //Standard link
  if (typeof link === "string") {
    if (link[0] === "/") {
      return (
        <NextLink href={link}>
          <a {...rest}>{children}</a>
        </NextLink>
      );
    }

    return (
      <a href={link} {...rest}>
        {children}
      </a>
    );
  }

  //Unknown link
  if (link.link_type === "Any") return null;

  //Prismic Link
  if (link.link_type === "Web") {
    if (!link.url) return null;

    //Same page anchor links
    if (link.url.includes("://#")) {
      const anchor = link.url.split("://")[1];
      return (
        <a href={anchor} {...rest}>
          {children}
        </a>
      );
    }

    return (
      <a href={PrismicLink.url(link, linkResolver)} {...rest}>
        {children}
      </a>
    );
  }

  if (link.link_type === "Document") {
    return (
      <NextLink href={PrismicLink.url(link, linkResolver)}>
        <a {...rest}>{children}</a>
      </NextLink>
    );
  }

  if (link.link_type === "Image") {
    return (
      <a href={PrismicLink.url(link, linkResolver)} {...rest}>
        {children}
      </a>
    );
  }

  return null;
};
