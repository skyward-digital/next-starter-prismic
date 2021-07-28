import { Client } from "../../../prismic-configuration";
import SliceZone from "next-slicezone";
import { useGetStaticProps, useGetStaticPaths } from "next-slicezone/hooks";
import resolver from "../../../sm-resolver.js";

import { Layout } from "../../../components/Layout";
import { Hero } from "../../../components/Hero";

const BlogCategory = ({ slices, data, url, lang, layout }) => {
  const seo = {
    meta_title: data.meta_title, // || prismicLayout.data.meta_title,
    meta_description: data.meta_description, // || prismicLayout.data.meta_description,
    meta_image: data.meta_image?.url, // || prismicLayout.data.meta_image?.url,
    url: url,
    article: false,
    lang: lang,
  };

  const hero = {
    title: data.title,
    // description: data.hero_description,
    // primaryLink: data.hero_link,
    // primaryLinkLabel: data.hero_link_label,
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
  type: "blog_category",
  apiParams({ params }) {
    return {
      uid: params.category,
    };
  },
});

export const getStaticPaths = useGetStaticPaths({
  client: Client(),
  type: "blog_category",
  formatPath: (prismicDocument) => {
    return {
      params: {
        category: prismicDocument.uid,
      },
    };
  },
});

export default BlogCategory;
