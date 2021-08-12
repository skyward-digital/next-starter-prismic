import { Client } from "../../../prismic-configuration";
import SliceZone from "next-slicezone";
import { useGetStaticProps, useGetStaticPaths } from "next-slicezone/hooks";
import resolver from "../../../sm-resolver.js";

import { Layout } from "../../../components/Layout";
import { Hero } from "../../../components/Hero";

const BlogPost = ({ slices, data, url, lang, layout }) => {
  const seo = {
    metaTitle: data.metaTitle || layout.metaTitle,
    metaDescription: data.metaDescription || layout.metaDescription,
    metaImage: data.metaImage?.url || layout.metaImage?.url,
    url: url,
    article: true,
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
  type: "blogPost",
  apiParams({ params }) {
    return {
      uid: params.uid,
      //fetchlinks gets nested
      fetchLinks: ["blog_category.title"],
    };
  },
});

export const getStaticPaths = useGetStaticPaths({
  client: Client(),
  type: "blogPost",
  formatPath: (prismicDocument) => {
    return {
      params: {
        category: prismicDocument.data.category.uid,
        uid: prismicDocument.uid,
      },
    };
  },
});

export default BlogPost;
