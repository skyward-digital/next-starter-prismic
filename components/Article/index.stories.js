import { Article as Component } from "./";
import mocks from "./mocks.json";
import { storiesOf } from "@storybook/react";

mocks.forEach((variation) => {
  storiesOf("Article", Component).add("Default", () => (
    <Component {...variation} />
  ));
});
