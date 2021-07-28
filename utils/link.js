import Link from "next/link";

export const linkResolver = (doc) => {
  if (doc.type === "page") return `/${doc.uid}`;
  if (doc.type === "blog_category") return `/blog/category/${doc.uid}`;
  if (doc.type === "blog_list") return `/blog/`;
  if (doc.type === "blog_post") return `/blog/${doc.uid}`;
  if (doc.type === "contact") return `/contact/`;
  if (doc.type === "careers") return `/careers/`;
  if (doc.type === "pricing_page") return `/pricing/`;
  if (doc.type === "job_opening") return `/careers/${doc.uid}`;
  if (doc.type === "product") return `/products/${doc.uid}`;
  if (doc.type === "product_list") return `/products/`;
  if (doc.type === "solution") return `/solutions/${doc.uid}`;
  if (doc.type === "solution_list") return `/solutions/`;

  return "/";
};

export const customLink = (type, element, content, children, index) => (
  <Link
    key={index}
    href={linkResolver(element.data)}
    as={linkResolver(element.data)}
  >
    <a>{content}</a>
  </Link>
);

// export const Link = ({ to: link, children, ...rest }) => {
//   //Standard link
//   if (typeof link === "string") {
//     if (link[0] === "/") {
//       return (
//         <GatsbyLink to={link} {...rest}>
//           {children}
//         </GatsbyLink>
//       );
//     }

//     return (
//       <a href={link} {...rest}>
//         {children}
//       </a>
//     );
//   }

//   //Prismic Link
//   if (link.link_type === "Web") {
//     //Same page anchor links
//     if (link.url.includes("://#")) {
//       const anchor = link.url.split("://")[1];
//       return (
//         <a href={anchor} {...rest}>
//           {children}
//         </a>
//       );
//     }

//     return (
//       <a href={PrismicLink.url(link, linkResolver)} {...rest}>
//         {children}
//       </a>
//     );
//   }

//   if (link.link_type === "Document") {
//     return (
//       <GatsbyLink to={linkResolver(link)} {...rest}>
//         {children}
//       </GatsbyLink>
//     );
//   }

//   if (link.link_type === "Image") {
//     return (
//       <a href={PrismicLink.url(link, linkResolver)} {...rest}>
//         {children}
//       </a>
//     );
//   }

//   return null;
// };
