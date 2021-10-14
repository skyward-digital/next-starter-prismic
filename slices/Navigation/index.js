import React from "react";

//Variations
import { NavItem, NavItemWithSubnav } from "../../components/Navigation";

const NavigationSlice = ({ slice: { primary, items, variation }, i }) => {
  const componentMap = {
    "default-slice": NavItem,
    withSubnav: NavItemWithSubnav,
  };

  const VariableComponent = componentMap[variation];

  return (
    <VariableComponent
      id={`${i}-navigation-slice`}
      {...primary}
      items={items}
    />
  );
};

export default NavigationSlice;
