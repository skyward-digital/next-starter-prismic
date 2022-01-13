import { createClient } from "../../prismic";

import { Layout } from "../../components/Layout";
// import { ArticleHero } from "../../components/ArticleHero";
// import { BlogFeed } from "../../components/BlogFeed";

const BlogRoot = ({
  data,
  // posts,
  url,
  lang,
  layout,
  // blogCategories
}) => {
  const seo = {
    metaTitle: data?.metaTitle || layout.metaTitle,
    metaDescription: data?.metaDescription || layout.metaDescription,
    metaImage: data?.metaImage?.url || layout.metaImage?.url,
    url: url,
    article: true,
    lang: lang,
  };

  // const hero = {
  //   title: data?.title,
  // };

  return (
    <Layout seo={seo} {...layout}>
      {/* <ArticleHero {...hero} /> */}
      {/* <BlogFeed posts={posts} categories={blogCategories} /> */}
    </Layout>
  );
};

export const getStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });

  const seo = await client.getSingle("defaultSeo");
  const header = await client.getSingle("header");
  const footer = await client.getSingle("footer");
  const socials = await client.getSingle("socials");

  const blogRoot = await client.getSingle("blogRoot");
  const blogPosts = await client.getAllByType("blog_post");

  //return props in a more standard nextjs approach
  return {
    props: {
      layout: {
        seo,
        header,
        footer,
        socials,
      },
      posts: blogPosts,
      ...blogRoot,
    },
  };
};

export default BlogRoot;
