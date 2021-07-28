export const linkResolver = (doc) => {
  if (!doc) return "/";
  if (doc.isBroken) return "/not-found";

  if (doc.type === "page") return `/${doc.uid}`; // i18n example return `/${doc.lang}/${doc.uid}`;
  if (doc.type === "blog_category") return `/blog/${doc.uid}`;
  if (doc.type === "blog_post") return `/blog/${doc.uid}`;
  if (doc.type === "contact") return `/contact`;

  return "/";
};
