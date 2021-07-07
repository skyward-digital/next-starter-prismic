import { Client } from "../prismic-configuration";
import SliceZone from "next-slicezone";
import { useGetStaticProps, useGetStaticPaths } from "next-slicezone/hooks";
import resolver from "../sm-resolver.js";

import { Hero } from "../components/Hero";

const Page = ({ slices, data }) => {
  const hero = {
    title: data.hero_title,
    description: data.hero_description,
    primaryLink: data.hero_link,
    primaryLinkLabel: data.hero_link_label,
  };

  return (
    <div>
      <Hero {...hero} />
      <SliceZone slices={slices} resolver={resolver} />;
    </div>
  );
};

// Fetch content from prismic
export const getStaticProps = useGetStaticProps({
  client: Client(),
  apiParams({ params }) {
    return {
      uid: params.uid,
    };
  },
});

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
