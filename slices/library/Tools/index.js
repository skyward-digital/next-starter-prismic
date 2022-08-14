import dynamic from "next/dynamic";

const componentMap = {
  default: dynamic(() => import("./Default")),
};

const Tools = ({ slice: { primary, items, variation }, index }) => {
  const VariableComponent = componentMap[variation];

  return <VariableComponent id={`${index}-tools`} {...primary} items={items} />;
};

export default Tools;
