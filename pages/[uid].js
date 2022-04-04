import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";
import { createClient } from "../prismic";
import { getLayoutProps, getSeoProps } from "../utils/fetchData";
import { components } from "../slices/general";

import { Layout } from "../components";

/**
 * Our General page layout
 * With clever slice creation, this should cover most of the different page types
 * Routing could be handled either via document creation (repeated slices) or tagging, depending on use case
 */
const Page = ({ data, url, lang, layout }) => {
  const seo = getSeoProps({ ...data, url, lang });

  return (
    <Layout {...layout} seo={seo}>
      <SliceZone slices={data.slices} components={components} />
    </Layout>
  );
};

export const getStaticProps = async ({ ...context }) => {
  const client = createClient({ context });

  //Default Layout components reused across the site
  const layout = await getLayoutProps({ context });

  const page = await client.getByUID("page", params.uid, {
    // fetchLinks: [
    //   ...serviceFetchLinks,
    //   ...ctaPlatformFetchLinks,
    //   ...ctaTeamFetchLinks,
    //   ...featuresWithTestimonialFetchLinks,
    // ],
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
    predicates: [prismic.predicate.at("document.type", "page")],
  });

  const paths = await documents.results.map((document) => ({
    params: { uid: document.uid },
  }));

  return { paths, fallback: false };
};

export default Page;
