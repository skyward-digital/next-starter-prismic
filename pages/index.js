import { SliceZone } from "@prismicio/react";
import { createClient } from "../prismic";
import resolver from "../sm-resolver.js";

import { Layout } from "../components";

const Homepage = ({ data, url, lang, layout }) => {
  const seo = {
    metaTitle: data.metaTitle || layout.seo?.data?.metaTitle,
    metaDescription: data.metaDescription || layout.seo?.data?.metaDescription,
    metaImage: data.metaImage.url || layout.seo?.data?.metaImage.url,
    url: url,
    article: false,
    lang: lang,
  };

  return (
    <Layout {...layout} seo={seo}>
      <SliceZone slices={data.slices} resolver={resolver} />
    </Layout>
  );
};

export const getStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });

  // Default Layout components reused across the site
  // If a singleton document is missing, `getStaticProps` will throw a PrismicError.
  const seo = await client.getSingle("defaultSeo");
  const header = await client.getSingle("header");
  const footer = await client.getSingle("footer");
  const socials = await client.getSingle("socials");
  const page = await client.getSingle("homepage");

  return {
    props: {
      layout: {
        seo,
        header,
        footer,
        socials,
      },
      ...page,
    },
  };
};

export default Homepage;
