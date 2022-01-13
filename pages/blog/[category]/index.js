import { createClient } from "../../../prismic";
import { useGetStaticProps, useGetStaticPaths } from "next-slicezone/hooks";

import { Layout } from "../../../components/Layout";
import { Article } from "../../../components/Article";
import { ArticleHero } from "../../../components/ArticleHero";

const BlogPost = ({ data, url, lang, layout }) => {
  const seo = {
    metaTitle: data.metaTitle || layout.metaTitle,
    metaDescription: data.metaDescription || layout.metaDescription,
    metaImage: data.metaImage?.url || layout.metaImage?.url,
    url: url,
    article: false,
    lang: lang,
  };

  const hero = {
    title: data.title,
    grandparentLink: "/blog",
    grandparentLinkLabel: "Blog",
    parentLink: data.category,
    parentLinkLabel: data.category.data.title,
  };

  const article = {
    featuredImage: data.featuredImage,
    publishDate: data.publishDate,
    article: data.articleContent,
  };

  return (
    <Layout seo={seo} {...layout}>
      <ArticleHero {...hero} />
      <Article {...article} />
    </Layout>
  );
};

// Fetch content from prismic - previews but doesn't hot reload
export const getStaticProps = useGetStaticProps({
  client: createClient(),
  type: "blogPost",
  apiParams({ params }) {
    return {
      uid: params.uid,
      //fetchLinks gets data related via fields - blogPost.data.category.data.title
      fetchLinks: ["blogCategory.title"],
    };
  },
});

export const getStaticPaths = useGetStaticPaths({
  client: createClient(),
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
