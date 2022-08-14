import dynamic from "next/dynamic";

const componentMap = {
  staggered: dynamic(() => import("./OffsetStaggered")),
  showcase: () => <div>Showcase Slice</div>,
  // showcase: dynamic(() => import("./VerticalShowcase")),
  gridVertical: dynamic(() => import("./VerticalGrid")),
  grid: dynamic(() => import("./OffsetGrid")),
};

const Features = ({ slice: { primary, items, variation }, index }) => {
  const VariableComponent = componentMap[variation];

  return (
    <VariableComponent
      id={`${index}-features-slice`}
      {...primary}
      items={items}
    />
  );
};

export default Features;
