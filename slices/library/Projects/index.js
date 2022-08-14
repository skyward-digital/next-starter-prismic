import dynamic from "next/dynamic";

const componentMap = {
  default: dynamic(() => import("./Default")),
  staggered: dynamic(() => import("./Staggered")),
};

const Projects = ({ slice: { primary, items, variation }, index }) => {
  const VariableComponent = componentMap[variation];

  return (
    <VariableComponent id={`${index}-projects`} {...primary} items={items} />
  );
};

export default Projects;

export const projectsFetchLinks = [
  // Project Fetch Links
  "project.showcaseImage",
];
