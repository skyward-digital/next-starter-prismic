import Component from "./index.tsx";
import model from "./model";
import mocks from "./mocks.json";
import { storiesOf } from "@storybook/react";

mocks.forEach((variation) => {
  storiesOf(model.name, Component).add(variation.name, () => (
    <Component slice={variation} />
  ));
});
