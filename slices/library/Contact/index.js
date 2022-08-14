import dynamic from "next/dynamic";

const componentMap = {
  default: dynamic(() => import("./Default")),
};

const Contact = ({ slice: { primary, items, variation }, index }) => {
  if (!variation) return null;

  const VariableComponent = componentMap[variation];

  return (
    <VariableComponent id={`${index}-Contact`} {...primary} items={items} />
  );
};

export default Contact;
