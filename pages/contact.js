import { Client } from "../prismic-configuration";
import SliceZone from "next-slicezone";
import { useGetStaticProps } from "next-slicezone/hooks";
import resolver from "../sm-resolver.js";

import { Layout } from "../components/Layout";
import { Hero } from "../components/Hero";

const Contact = ({ slices, data, url, lang, layout }) => {
  const seo = {
    metaTitle: data.metaTitle || layout.metaTitle,
    metaDescription: data.metaDescription || layout.metaDescription,
    metaImage: data.metaImage?.url || layout.metaImage?.url,
    url: url,
    article: false,
    lang: lang,
  };

  const hero = {
    title: data.hero_title,
    // description: data.hero_description,
    // primaryLink: data.hero_link,
    // primaryLinkLabel: data.hero_link_label,
  };

  return (
    <Layout seo={seo} {...layout}>
      <Hero {...hero} />
      <SliceZone slices={slices} resolver={resolver} />
    </Layout>
  );
};

// Fetch content from prismic - previews but doesn't hot reload
export const getStaticProps = useGetStaticProps({
  client: Client(),
  queryType: "single",
  type: "contact",
});

export default Contact;
