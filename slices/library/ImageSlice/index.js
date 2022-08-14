import dynamic from "next/dynamic";

const componentMap = {
  default: dynamic(() => import("./Cover")),
  twoColumn: dynamic(() => import("./TwoCol")),
};

const Image = ({ slice: { primary, items, variation }, index }) => {
  const VariableComponent = componentMap[variation];

  return <VariableComponent id={`${index}-Image`} {...primary} items={items} />;
};

export default Image;

// export const ImageFetchLinks = [
//   // Project Fetch Links
//   "project.title",
//   "project.showcaseImage",
//   "project.logo",
// ];
