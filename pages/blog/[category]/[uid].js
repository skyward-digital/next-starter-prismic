import { createClient } from "../../../prismic";
import { SliceZone } from "@prismicio/react";
import resolver from "../../../sm-resolver.js";
import * as prismicH from "@prismicio/helpers";

import { linkResolver } from "../../../utils/linkResolver";
import { Layout } from "../../../components/Layout";
import { Hero } from "../../../components/Hero";

const BlogPost = ({ data, url, lang, layout }) => {
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
      <SliceZone slices={data.slices} resolver={resolver} />;
    </Layout>
  );
};

// Fetch content from prismic - previews but doesn't hot reload
export const getStaticProps = async ({ params, previewData }) => {
  const client = createClient({ previewData });

  const blogPost = await client.getByUID("blogPost", params.uid, {
    fetchLinks: ["blog_category.title"],
  });

  return {
    props: blogPost,
  };
};

export const getStaticPaths = async () => {
  const client = createClient();

  const blogPosts = await client.getAllByType("blogPost");

  return {
    paths: blogPosts.map((page) => prismicH.asLink(page, linkResolver)),
    fallback: false,
  };
};

export default BlogPost;
