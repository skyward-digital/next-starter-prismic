import React from "react";

//Variations
import { DefaultCTA, SmallCTA, ImageCTA } from "../../components/CallToAction";

const CallToAction = ({ slice: { primary, items, variation }, i }) => {
  const componentMap = {
    "default-slice": DefaultCTA,
    withImage: ImageCTA,
    small: SmallCTA,
  };

  const VariableComponent = componentMap[variation];

  return <VariableComponent id={`${i}-cta-slice`} {...primary} items={items} />;
};

export default CallToAction;

// export const ctaTeamFetchLinks = [
//   "teamMember.name",
//   "teamMember.avatar",
//   "teamMember.position",
// ];
