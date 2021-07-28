import { Client } from "../prismic-configuration";
import SliceZone from "next-slicezone";
import { useGetStaticProps } from "next-slicezone/hooks";
import resolver from "../sm-resolver.js";

import { Layout } from "../components/Layout";
import { Hero } from "../components/Hero";

const Contact = ({ slices, data, url, lang, ...rest }) => {
  const seo = {
    meta_title: data.meta_title, // || prismicLayout.data.meta_title,
    meta_description: data.meta_description, // || prismicLayout.data.meta_description,
    meta_image: data.meta_image?.url, // || prismicLayout.data.meta_image?.url,
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
    <Layout seo={seo}>
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
