import { Header as Component } from "./";
import mocks from "./mocks.json";
import { storiesOf } from "@storybook/react";

mocks.forEach((variation) => {
  storiesOf("Globals/Header", Component).add("Default", () => (
    <Component {...variation} />
  ));
});
