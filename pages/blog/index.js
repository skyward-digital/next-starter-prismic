import Prismic from "@prismicio/client";
import { Client } from "../../prismic-configuration";
import { useGetStaticProps } from "next-slicezone/hooks";

import { Layout } from "../../components/Layout";
import { ArticleHero } from "../../components/ArticleHero";
import { BlogFeed } from "../../components/BlogFeed";

const BlogRoot = ({ data, posts, url, lang, layout, blogCategories }) => {
  const seo = {
    metaTitle: data?.metaTitle || layout.metaTitle,
    metaDescription: data?.metaDescription || layout.metaDescription,
    metaImage: data?.metaImage?.url || layout.metaImage?.url,
    url: url,
    article: true,
    lang: lang,
  };

  const hero = {
    title: data?.title,
  };

  return (
    <Layout seo={seo} {...layout}>
      <ArticleHero {...hero} />
      <BlogFeed posts={posts} categories={blogCategories} />
    </Layout>
  );
};

export const getStaticProps = async ({ params }) => {
  //get our blog root page outside the normal approach - make sure to pass params down
  const blogRoot = await useGetStaticProps({
    client: Client(),
    queryType: "single",
    type: "blogRoot",
    slicesKey: null,
    // apiParams: {
    //   uid: params.uid,
    // },
  })({ params });

  //get all blog posts without prismic link
  const blogPosts = await Client().query(
    Prismic.Predicates.at("document.type", "blogPost")
  );

  //return props in a more standard nextjs approach
  return {
    props: {
      ...blogRoot.props,
      posts: blogPosts.results,
    },
  };
};

export default BlogRoot;
