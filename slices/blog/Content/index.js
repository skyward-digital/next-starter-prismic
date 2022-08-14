import dynamic from "next/dynamic";

const Content = ({ slice: { primary, items, variation }, index }) => {
  const componentMap = {
    default: dynamic(() => import("./Default")),
    large: dynamic(() => import("./Large")),
  };

  const VariableComponent = componentMap[variation];

  return (
    <VariableComponent id={`${index}-Content`} {...primary} items={items} />
  );
};

export default Content;
