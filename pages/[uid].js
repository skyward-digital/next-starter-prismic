import { Client } from "../prismic-configuration";
import SliceZone from "next-slicezone";
import { useGetStaticProps, useGetStaticPaths } from "next-slicezone/hooks";
import resolver from "../sm-resolver.js";

import { Layout } from "../components";

/**
 * Our General page layout
 * With clever slice creation, this should cover most of the different page types
 * Routing could be handled either via document creation (repeated slices) or tagging, depending on use case
 */
const Page = ({ slices, data, url, lang, layout }) => {
  const seo = {
    metaTitle: data.metaTitle || layout.seo?.data?.metaTitle,
    metaDescription: data.metaDescription || layout.seo?.data?.metaDescription,
    metaImage: data.metaImage.url || layout.seo?.data?.metaImage.url,
    url: url,
    article: false,
    lang: lang,
  };

  return (
    <Layout {...layout} seo={seo}>
      <SliceZone slices={slices} resolver={resolver} />
    </Layout>
  );
};

export const getStaticProps = async ({ params }) => {
  //Default Layout components reused across the site
  const layout = {
    seo: (await Client().getSingle("defaultSeo")) || {},
    header: (await Client().getSingle("header")) || {},
    footer: (await Client().getSingle("footer")) || {},
    socials: (await Client().getSingle("socials")) || {},
  };

  const page = await useGetStaticProps({
    client: Client(),
    apiParams({ params }) {
      return {
        uid: params.uid,
        // fetchLinks: [],
      };
    },
  })({ params });

  return {
    props: {
      layout,
      ...page.props,
    },
  };
};

export const getStaticPaths = useGetStaticPaths({
  client: Client(),
  formatPath: (prismicDocument) => {
    return {
      params: {
        uid: prismicDocument.uid,
      },
    };
  },
});

export default Page;
