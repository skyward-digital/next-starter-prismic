import * as prismic from "@prismicio/client";

import smConfig from "./sm.json";

export { linkResolver } from "./utils/linkResolver";

if (!smConfig.apiEndpoint) {
  console.warn(
    "Looks like Slice Machine hasn't been bootstraped already.\nCheck the `Getting Started` section of the README file :)"
  );
}

export const apiEndpoint = smConfig.apiEndpoint;

// export const createClient = (req = null, options = {}) => {
export const createClient = ({ req, previewData, options } = {}) => {
  const client = prismic.createClient(apiEndpoint, {
    // If your repo is private, add an access token
    accessToken: "",

    // This defines how you will structure URL paths in your project.
    // Update the types to match the Custom Types in your project, and edit
    // the paths to match the routing in your project.
    //
    // If you are not using a router in your project, you can change this
    // to an empty array or remove the option entirely.
    routes: [
      { type: "page", path: "/:uid" },
      // {
      //   type: "blogCategory",
      //   path: "/blog/:uid",
      // },
      {
        type: "blogPost",
        path: "/blog/:category/:uid",
        resolvers: {
          category: "category", // id of the content relationship in the article mask
        },
      },
    ],
    ...options,
  });

  if (req) {
    client.enableAutoPreviewsFromReq(req);
  } else if (previewData) {
    client.queryContentFromRef(previewData.ref);
  }

  return client;
};
