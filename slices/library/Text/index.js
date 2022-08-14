import dynamic from "next/dynamic";

const componentMap = {
  simple: dynamic(() => import("./Simple")),
  withImage: dynamic(() => import("./WithImage")),
};

const Text = ({ slice: { primary, items, variation }, index }) => {
  const VariableComponent = componentMap[variation];

  return <VariableComponent id={`${index}-Text`} {...primary} items={items} />;
};

export default Text;

// export const TextFetchLinks = [
//   // Project Fetch Links
//   "project.title",
//   "project.showcaseImage",
//   "project.logo",
// ];
