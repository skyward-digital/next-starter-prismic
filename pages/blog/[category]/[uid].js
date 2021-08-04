import { Client } from "../../../prismic-configuration";
import SliceZone from "next-slicezone";
import { useGetStaticProps, useGetStaticPaths } from "next-slicezone/hooks";
import resolver from "../../../sm-resolver.js";

import { Layout } from "../../../components/Layout";
import { Hero } from "../../../components/Hero";

const BlogPost = ({ slices, data, url, lang, layout }) => {
  const seo = {
    metaTitle: data.metaTitle, // || prismicLayout.data.metaTitle,
    metaDescription: data.metaDescription, // || prismicLayout.data.metaDescription,
    metaImage: data.metaImage?.url, // || prismicLayout.data.metaImage?.url,
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

  console.log(data);

  return (
    <Layout seo={seo} {...layout}>
      <Hero {...hero} />
      {/* How to link to category from here? - https://prismic.io/docs/technologies/links-content-relationships-nextjs */}
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
