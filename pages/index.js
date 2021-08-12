import { Client } from "../prismic-configuration";
import SliceZone from "next-slicezone";
import { useGetStaticProps } from "next-slicezone/hooks";
import resolver from "../sm-resolver.js";

import { Layout } from "../components/Layout";
// import { testimonialFetchLinks } from "../slices/TestimonialSlice";

const Homepage = ({ slices, data, url, lang, layout }) => {
  const seo = {
    metaTitle: data.metaTitle || layout.metaTitle,
    metaDescription: data.metaDescription || layout.metaDescription,
    metaImage: data.metaImage?.url || layout.metaImage?.url,
    url: url,
    article: false,
    lang: lang,
  };

  return (
    <Layout seo={seo} {...layout}>
      <SliceZone slices={slices} resolver={resolver} />
    </Layout>
  );
};

// Fetch content from prismic - previews but doesn't hot reload
export const getStaticProps = useGetStaticProps({
  client: Client(),
  queryType: "single",
  type: "homepage",
});

export default Homepage;
