import { Hero as Component } from "./";
import mocks from "./mocks.json";
import { storiesOf } from "@storybook/react";

mocks.forEach((variation) => {
  storiesOf("Hero", Component).add("Default", () => (
    <Component {...variation} />
  ));
});
