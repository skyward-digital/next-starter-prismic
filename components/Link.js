import NextLink from "next/link";
import { asLink } from "@prismicio/helpers";
import { linkResolver } from "../utils/linkResolver";

export const Link = ({
  href: link,
  target,
  disabled,
  children,
  className,
  ...rest
}) => {
  if (disabled) {
    return <span {...rest}>{children}</span>;
  }

  //Standard link
  if (typeof link === "string") {
    if (link[0] === "/") {
      return (
        <NextLink href={link}>
          <a className={className} {...rest}>
            {children}
          </a>
        </NextLink>
      );
    }

    return (
      <a
        href={link}
        target={target ?? "_blank"}
        className={className}
        {...rest}
        rel="noopener noreferrer"
      >
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
        <a href={anchor} className={className} {...rest}>
          {children}
        </a>
      );
    }

    return (
      <a
        href={asLink(link, linkResolver)}
        target={target ?? "_blank"}
        className={className}
        {...rest}
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  if (link.link_type === "Document") {
    return (
      <NextLink href={asLink(link, linkResolver)}>
        <a className={className} {...rest}>
          {children}
        </a>
      </NextLink>
    );
  }

  if (link.link_type === "Image") {
    return (
      <a
        href={asLink(link, linkResolver)}
        className={className}
        {...rest}
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return null;
};
