import dynamic from "next/dynamic";

const componentMap = {
  default: dynamic(() => import("./Default")),
};

const Blockquote = ({ slice: { primary, items, variation }, index }) => {
  const VariableComponent = componentMap[variation];

  return (
    <VariableComponent id={`${index}-Blockquote`} {...primary} items={items} />
  );
};

export default Blockquote;
