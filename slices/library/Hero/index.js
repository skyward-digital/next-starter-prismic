import dynamic from "next/dynamic";

const componentMap = {
  simple: dynamic(() => import("./Simple")),
  simpleCenter: dynamic(() => import("./SimpleCenter")),
  projects: dynamic(() => import("./Projects")),
  featuredImage: dynamic(() => import("./FeaturedImage")),
  featuredImageCenter: dynamic(() => import("./FeaturedImageCenter")),
};

const Hero = ({ slice: { primary, items, variation }, index }) => {
  const VariableComponent = componentMap[variation];

  return <VariableComponent id={`${index}-hero`} {...primary} items={items} />;
};

export default Hero;

export const heroFetchLinks = [
  // Project Fetch Links
  "project.title",
  "project.showcaseImage",
  "project.logo",
  "project.logoDark",
];
