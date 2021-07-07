import { Client } from "../prismic-configuration";
import SliceZone from "next-slicezone";
import { useGetStaticProps } from "next-slicezone/hooks";
import resolver from "../sm-resolver.js";

import { Hero } from "../components/Hero";

const Homepage = ({ slices, data }) => {
  const hero = {
    title: data.hero_title,
    description: data.hero_description,
    primaryLink: data.hero_link,
    primaryLinkLabel: data.hero_link_label,
  };

  return (
    <div className="bg-blue-500">
      <Hero {...hero} />
      <SliceZone slices={slices} resolver={resolver} />
    </div>
  );
};

// Fetch content from prismic
export const getStaticProps = useGetStaticProps({
  client: Client(),
  queryType: "single",
  type: "homepage",
});

export default Homepage;
