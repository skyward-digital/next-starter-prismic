import { createClient } from "../../prismic";
import {
  getLayoutProps,
  getSeoProps,
  getAllPosts,
  getAllCategories,
} from "../../utils/fetchData";
import { Layout, BlogList, RichText } from "../../components";
import { fetchLinks } from "../../slices/general/fetchLinks";

const Blog = ({ data, url, lang, layout, provider, posts, categories }) => {
  const seo = getSeoProps({
    page: data,
    url,
    lang,
    // defaultSeo: layout.defaultSeo.data,
  });

  return (
    <Layout {...layout} seo={seo} provider={provider}>
      <div className="container text-center">
        <RichText
          field={data.title}
          plainText
          as="h1"
          className="text-5xl mb-4"
        />
        <RichText
          field={data.description}
          plainText
          as="p"
          className="text-2xl mb-4"
        />
      </div>

      <BlogList posts={posts} categories={categories} />
    </Layout>
  );
};

export const getStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });
  const layout = await getLayoutProps({ client });
  const posts = await getAllPosts({ client });
  const categories = await getAllCategories({ client });

  const page = await client.getSingle("blogRoot", {
    fetchLinks,
  });

  return {
    props: {
      layout,
      provider: {},
      ...page,
      posts,
      categories,
    },
  };
};

export default Blog;
