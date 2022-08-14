import dynamic from "next/dynamic";

const componentMap = {
  grid: dynamic(() => import("./Default")),
};

const Team = ({ slice: { primary, items, variation }, index }) => {
  const VariableComponent = componentMap[variation];

  return <VariableComponent id={`${index}-Team`} {...primary} items={items} />;
};

export default Team;

export const teamFetchLinks = [
  // Team Fetch Links
  "teamMember.name",
  "teamMember.avatar",
  "teamMember.title",
];
