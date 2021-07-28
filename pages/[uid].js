import { Client } from "../prismic-configuration";
import SliceZone from "next-slicezone";
import { useGetStaticProps, useGetStaticPaths } from "next-slicezone/hooks";
import resolver from "../sm-resolver.js";

import { Layout } from "../components/Layout";
import { Hero } from "../components/Hero";

const Page = ({ slices, data, url, lang, header }) => {
  const seo = {
    meta_title: data.meta_title, // || prismicLayout.data.meta_title,
    meta_description: data.meta_description, // || prismicLayout.data.meta_description,
    meta_image: data.meta_image?.url, // || prismicLayout.data.meta_image?.url,
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
    <Layout seo={seo} header={header}>
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
