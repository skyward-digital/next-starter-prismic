import dynamic from "next/dynamic";

const componentMap = {
  default: dynamic(() => import("./Default")),
  "3ColCenter": () => <div>3 Col Blog Slice</div>,
};

const BlogSection = ({ slice: { primary, items, variation }, index }) => {
  const VariableComponent = componentMap[variation];

  return (
    <VariableComponent id={`${index}-BlogSection`} {...primary} items={items} />
  );
};

export default BlogSection;
