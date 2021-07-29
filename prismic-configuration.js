import Prismic from "prismic-javascript";

import smConfig from "./sm.json";

export { linkResolver } from "./utils/linkResolver";
export { Link as customLink } from "./components/Link";

if (!smConfig.apiEndpoint) {
  console.warn(
    "Looks like Slice Machine hasn't been bootstraped already.\nCheck the `Getting Started` section of the README file :)"
  );
}

export const apiEndpoint = smConfig.apiEndpoint;

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken = "";

export const Router = {
  routes: [
    { type: "page", path: "/:uid" },
    // {
    //   type: "blog_category",
    //   path: "/blog/:uid",
    // },
    {
      type: "blog_post",
      path: "/blog/:category/:uid",
      resolvers: {
        category: "category", // id of the content relationship in the article mask
      },
    },
    {
      type: "help_article",
      path: "/help-center/:category/:uid",
      resolvers: {
        category: "category", // id of the content relationship in the article mask
      },
    },
  ],
  href: (type) => {
    const route = Router.routes.find((r) => r.type === type);
    return route && route.href;
  },
};

export const Client = (req = null, options = {}) =>
  Prismic.client(
    apiEndpoint,
    Object.assign({ routes: Router.routes }, options)
  );
