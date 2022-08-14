import { SliceZone } from "@prismicio/react";
import { createClient } from "../prismic";
import {
  getLayoutProps,
  getSeoProps,
  getRecentPosts,
} from "../utils/fetchData";
import { Layout } from "../components";
import { components } from "../slices/general";
import { fetchLinks } from "../slices/general/fetchLinks";

const Page = ({ data, url, lang, layout, provider }) => {
  const seo = getSeoProps({
    page: data,
    url,
    lang,
    // fallback: layout.defaultSeo.data,
  });

  return (
    <Layout {...layout} seo={seo} provider={provider}>
      <SliceZone slices={data.slices} components={components} />
    </Layout>
  );
};

export const getStaticProps = async ({ params, previewData }) => {
  const client = createClient({ previewData });
  const layout = await getLayoutProps({ client });
  const recentPosts = await getRecentPosts({ client });

  const page = await client.getByUID("page", params.uid, {
    fetchLinks,
  });

  return {
    props: {
      layout,
      provider: {
        recentPosts,
        // activeTeamMembers,
      },
      ...page,
    },
  };
};

export const getStaticPaths = async () => {
  const client = createClient();

  const documents = await client.getAllByType("page");

  // const documents = await client.get({
  //   predicates: [prismic.predicate.at("document.type", "page")],
  // });

  const paths = await documents.map((document) => ({
    params: { uid: document.uid },
  }));

  return { paths, fallback: false };
};

export default Page;
