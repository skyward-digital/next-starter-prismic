import { Client } from "../prismic-configuration";
import SliceZone from "next-slicezone";
import { useGetStaticProps } from "next-slicezone/hooks";
import resolver from "../sm-resolver.js";

import { Layout, Contact } from "../components";

const ContactPage = ({ slices, data, url, lang, layout }) => {
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
      <Contact
        id="hero"
        title={data.title}
        description={data.description}
        email={data.email}
      />
      <SliceZone slices={slices} resolver={resolver} />
    </Layout>
  );
};

export const getStaticProps = async ({ params }) => {
  //Default Layout components reused across the site
  const seo = (await Client().getSingle("defaultSeo")) || {};
  const header = (await Client().getSingle("header")) || {};
  const footer = (await Client().getSingle("footer")) || {};
  const socials = (await Client().getSingle("socials")) || {};

  const page = await useGetStaticProps({
    client: Client(),
    queryType: "single",
    type: "contact",
    // apiParams: {
    //   fetchLinks: [],
    // },
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

export default ContactPage;
