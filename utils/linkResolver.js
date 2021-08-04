export const linkResolver = (doc) => {
  if (!doc) return "/";
  if (doc.isBroken) return "/not-found";

  if (doc.type === "page") return `/${doc.uid}`;
  if (doc.type === "contact") return `/contact`;

  //Uses the route resolver instead
  if (doc.type === "blogCategory") return `/blog/${doc.uid}`;
  if (doc.type === "blogPost") return null;

  return "/";
};
