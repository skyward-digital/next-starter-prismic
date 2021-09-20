import { Footer as Component } from "./";
import mocks from "./mocks.json";
import { storiesOf } from "@storybook/react";

mocks.forEach((variation) => {
  storiesOf("Footer", Component).add("Default", () => (
    <Component {...variation} />
  ));
});
