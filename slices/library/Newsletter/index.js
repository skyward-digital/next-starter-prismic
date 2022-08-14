import dynamic from "next/dynamic";

const componentMap = {
  default: dynamic(() => import("./Default")),
  withImage: dynamic(() => import("./WithImage")),
};

const Newsletter = ({ slice: { primary, items, variation }, index }) => {
  if (!variation) return null;

  const VariableComponent = componentMap[variation];

  return (
    <VariableComponent id={`${index}-Newsletter`} {...primary} items={items} />
  );
};

export default Newsletter;
