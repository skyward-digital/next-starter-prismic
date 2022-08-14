import * as prismic from "@prismicio/client";
import * as prismicH from "@prismicio/helpers";
import * as prismicNext from "@prismicio/next";
import sm from "./sm.json";

export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint);

/**
 * The project's Prismic Link Resolver. This function determines the URL for a given Prismic document.
 *
 * @type {prismicH.LinkResolverFunction}
 */
export const linkResolver = (doc) => {
  // Root
  if (!doc) return "/";

  // Error
  if (doc.isBroken) return "/not-found";

  // Pages
  if (doc.type === "page") return `/${doc.uid}`;
  if (doc.type === "contact") return `/contact`;

  // Blog
  if (doc.type === "blogRoot") return `/blog`;
  if (doc.type === "blogPost") return `/blog/${doc.uid}`;
  // if (doc.type === "blogCategory") return `/blog/category/${doc.uid}`;

  // Fallback
  return "/";
};

// This factory function allows smooth preview setup
export function createClient(
  config = {
    // If your repo is private, add an access token
    // accessToken: "",
    // This defines how you will structure URL paths in your project.
    // Update the types to match the Custom Types in your project, and edit
    // the paths to match the routing in your project.
    //
    // If you are not using a router in your project, you can change this
    // to an empty array or remove the option entirely.
    // routes: [
    //   { type: "page", path: "/:uid" },
    //   // {
    //   //   type: "blogCategory",
    //   //   path: "/blog/:uid",
    //   // },
    //   {
    //     type: "blogPost",
    //     path: "/blog/:category/:uid",
    //     resolvers: {
    //       category: "category", // id of the content relationship in the article mask
    //     },
    //   },
    // ],
  }
) {
  const client = prismic.createClient(sm.apiEndpoint, config);

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  });

  return client;
}
