import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";
import { createClient } from "../../prismic";
import { getLayoutProps, getSeoProps } from "../../utils/fetchData";
import { Layout } from "../../components";
import { components } from "../../slices/general";
// import { calculateReadTime } from "../../utils/calculateReadTime";

const BlogPost = ({ slices, data, url, lang, layout }) => {
  const seo = getSeoProps({ ...data, url, lang, article: true });

  return (
    <Layout seo={seo} {...layout}>
      <SliceZone slices={slices} components={components} />;
    </Layout>
  );
};

// Fetch content from prismic - previews but doesn't hot reload
export const getStaticProps = async ({ params, ...context }) => {
  const client = createClient({ context });
  const layout = await getLayoutProps({ context });

  const page = await client.getByUID("blogPost", params.uid, {
    fetchLinks: [
      "teamMember.name",
      "teamMember.position",
      "teamMember.avatar",
      // "teamMember.socials",
    ],
  });

  return {
    props: {
      layout,
      ...page,
    },
  };
};

export const getStaticPaths = async () => {
  const client = createClient();

  const documents = await client.get({
    predicates: [prismic.predicate.at("document.type", "blogPost")],
  });

  const paths = await documents.results.map((document) => ({
    params: { uid: document.uid },
  }));

  return { paths, fallback: false };
};

export default BlogPost;
