// import * as prismic from "@prismicio/client";
import { createClient } from "../prismic";

export const getLayoutProps = async ({ context }) => {
  const client = createClient({ context });

  return {
    header: await client.getSingle("header"),
    footer: await client.getSingle("footer"),
    socials: await client.getSingle("socials"),
  };
};

export const getSeoProps = async ({
  metaTitle,
  metaDescription,
  metaImage,
  url,
  article,
  lang,
}) => {
  const client = createClient();
  // const defaultSeo = (await client.getSingle("defaultSeo")) || {};

  return {
    metaTitle: metaTitle, // || defaultSeo?.metaTitle,
    metaDescription: metaDescription, // || defaultSeo?.metaDescription,
    metaImage: metaImage?.url, //|| defaultSeo?.metaImage?.url,
    url: url,
    article: article ?? false,
    lang: lang,
  };
};

// export const getSingle = async (filter) => {
//   const client = createClient();

//   const documents = await client.getSingle(filter);

//   return documents.results;
// };
