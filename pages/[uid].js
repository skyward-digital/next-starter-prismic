import { Client } from "../prismic-configuration";
import SliceZone from "next-slicezone";
import { useGetStaticProps, useGetStaticPaths } from "next-slicezone/hooks";
import resolver from "../sm-resolver.js";

import { Layout } from "../components";

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

// Fetch content from prismic - previews but doesn't hot reload
export const getStaticProps = async ({ params }) => {
  //Default Layout components reused across the site
  const seo = (await Client().getSingle("defaultSeo")) || {};
  const header = (await Client().getSingle("header")) || {};
  const footer = (await Client().getSingle("footer")) || {};
  const socials = (await Client().getSingle("socials")) || {};

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
      layout: {
        seo,
        header,
        footer,
        socials,
      },
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
