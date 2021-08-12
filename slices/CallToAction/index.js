import React from "react";

//Variations
import Simple from "./Simple";
import SimpleLarge from "./SimpleLarge";
import SimpleWithVideo from "./SimpleWithVideo";
import TwoCol from "./TwoCol";
import TwoColWithImage from "./TwoColWithImage";

const CallToAction = ({ slice: { primary, items, variation } }) => {
  const componentMap = {
    "default-slice": Simple,
    simpleLarge: SimpleLarge,
    simpleWithVideo: SimpleWithVideo,
    twoColumn: TwoCol,
    twoColumnWithImage: TwoColWithImage,
  };

  const VariableComponent = componentMap[variation];

  return (
    <section>
      <VariableComponent {...primary} items={items} />
    </section>
  );
};

export default CallToAction;
