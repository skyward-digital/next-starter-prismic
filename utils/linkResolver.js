export const linkResolver = (doc) => {
  if (!doc) return "/";
  if (doc.isBroken) return "/not-found";

  if (doc.type === "page") return `/${doc.uid}`;
  if (doc.type === "contact") return `/contact`;

  //Uses the route resolver instead
  if (doc.type === "blog_category") return `/blog/${doc.uid}`;
  if (doc.type === "help_category") return `/help-center/${doc.uid}`;

  if (doc.type === "blog_post") return null;
  if (doc.type === "help_article") return null;

  return "/";
};
