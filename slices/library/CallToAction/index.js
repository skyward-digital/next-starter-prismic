import dynamic from "next/dynamic";

const componentMap = {
  default: dynamic(() => import("./Default")),
  splitWithImage: dynamic(() => import("./SplitWithImage")),
};

const CallToAction = ({ slice: { primary, items, variation }, index }) => {
  const VariableComponent = componentMap[variation];

  return (
    <VariableComponent
      id={`${index}-CallToAction`}
      {...primary}
      items={items}
    />
  );
};

export default CallToAction;
