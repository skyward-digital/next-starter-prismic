import { SliceZone } from "@prismicio/react";
import { createClient } from "../prismic";
import { getLayoutProps, getSeoProps } from "../utils/fetchData";

import { Layout, Contact } from "../components";
import { components } from "../slices";

import {
  serviceFetchLinks,
  ctaPlatformFetchLinks,
  ctaTeamFetchLinks,
  featuresWithTestimonialFetchLinks,
} from "../slices/fetchLinks";

const ContactPage = ({ data, url, lang, layout }) => {
  const seo = getSeoProps({ ...data, url, lang });

  return (
    <Layout {...layout} seo={seo}>
      <Contact
        id="hero"
        title={data.title}
        description={data.description}
        email={data.email}
      />
      <SliceZone slices={data.slices} components={components} />
    </Layout>
  );
};

export const getStaticProps = async ({ ...context }) => {
  const client = createClient({ context });
  const layout = await getLayoutProps({ context });

  const fetchLinks = [
    ...serviceFetchLinks,
    ...ctaPlatformFetchLinks,
    ...ctaTeamFetchLinks,
    ...featuresWithTestimonialFetchLinks,
  ];

  const page = await client.getSingle("contact", { fetchLinks });

  return {
    props: {
      layout,
      ...page,
    },
  };
};

export default ContactPage;
