// import { SliceZone } from "@prismicio/react";
import { createClient } from "../../prismic";
import {
  getLayoutProps,
  getSeoProps,
  getRecentPosts,
} from "../../utils/fetchData";
import { Layout } from "../../components";
import { BlogPage, blogPageFetchLinks } from "../../components/BlogPage";

const BlogPost = ({
  data,
  url,
  lang,
  first_publication_date,
  last_publication_date,
  layout,
  provider,
  // ...props
}) => {
  const seo = getSeoProps({
    page: { ...data, article: true },
    url,
    lang,
    // defaultSeo: layout.defaultSeo.data,
  });

  const blogData = {
    ...data,
    publishDate: first_publication_date,
    updatedDate: last_publication_date,
  };

  return (
    <Layout {...layout} seo={seo} provider={provider}>
      <BlogPage {...blogData} />
    </Layout>
  );
};

export const getStaticProps = async ({ params, previewData }) => {
  const client = createClient({ previewData });
  const layout = await getLayoutProps({ client });
  const recentPosts = await getRecentPosts({ client });

  const post = await client.getByUID("blogPost", params.uid, {
    // fetchLinks: [...fetchLinks, ...blogPageFetchLinks],
  });

  return {
    props: {
      layout,
      provider: { recentPosts },
      ...post,
    },
  };
};

export const getStaticPaths = async () => {
  const client = createClient();

  const documents = await client.getAllByType("blogPost");

  const paths = await documents.map((document) => ({
    params: { uid: document.uid },
  }));

  return { paths, fallback: false };
};

export default BlogPost;
