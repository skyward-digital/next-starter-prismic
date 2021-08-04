import { Client } from "../prismic-configuration";
import SliceZone from "next-slicezone";
import { useGetStaticProps, useGetStaticPaths } from "next-slicezone/hooks";
import resolver from "../sm-resolver.js";

import { Layout } from "../components/Layout";
import { Hero } from "../components/Hero";

const Page = ({ slices, data, url, lang, layout }) => {
  const seo = {
    metaTitle: data.metaTitle || layout.metaTitle,
    metaDescription: data.metaDescription || layout.metaDescription,
    metaImage: data.metaImage?.url || layout.metaImage?.url,
    url: url,
    article: false,
    lang: lang,
  };

  const hero = {
    title: data.hero_title,
    description: data.hero_description,
    primaryLink: data.hero_link,
    primaryLinkLabel: data.hero_link_label,
  };

  return (
    <Layout seo={seo} {...layout}>
      <Hero {...hero} />
      <SliceZone slices={slices} resolver={resolver} />;
    </Layout>
  );
};

// Fetch content from prismic - previews but doesn't hot reload
export const getStaticProps = useGetStaticProps({
  client: Client(),
  apiParams({ params }) {
    return {
      uid: params.uid,
    };
  },
});

export const getStaticPaths = useGetStaticPaths({
  client: Client(),
  formatPath: (prismicDocument) => {
    return {
      params: {
        uid: prismicDocument.uid,
      },
    };
  },
});

export default Page;
