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

const Homepage = ({ data, url, lang, layout, provider }) => {
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

export const getStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });
  const layout = await getLayoutProps({ client });
  const recentPosts = await getRecentPosts({ client });

  // If a singleton document is missing, `getStaticProps` will throw a PrismicError.
  const page = await client.getSingle("homepage", {
    fetchLinks,
  });

  return {
    props: {
      // Layout returns global values that are used on every page
      layout,
      // Provider returns values that are used in slices, but data isn't stored directly in the page
      provider: {
        recentPosts,
      },
      ...page,
    },
  };
};

export default Homepage;
