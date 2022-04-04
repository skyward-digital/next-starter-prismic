import { SliceZone } from "@prismicio/react";
import { createClient } from "../prismic";
import { getLayoutProps, getSeoProps } from "../utils/fetchData";
import { Layout } from "../components";
import { components } from "../slices/general";

const Homepage = ({ data, url, lang, layout }) => {
  const seo = getSeoProps({ ...data, url, lang });

  return (
    <Layout {...layout} seo={seo}>
      <SliceZone slices={data.slices} components={components} />
    </Layout>
  );
};

export const getStaticProps = async ({ ...context }) => {
  const client = createClient({ context });
  const layout = await getLayoutProps({ context });

  const page = await client.getSingle("homepage", {
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

export default Homepage;
