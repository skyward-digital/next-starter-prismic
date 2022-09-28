import dynamic from "next/dynamic";

const componentMap = {
  default: dynamic(() => import("./Default")),
};

const Image = ({ slice: { primary, items, variation }, index }) => {
  const VariableComponent = componentMap[variation];

  return <VariableComponent id={`${index}-Image`} {...primary} items={items} />;
};

export default Image;
