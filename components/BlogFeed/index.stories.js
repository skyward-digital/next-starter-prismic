import { BlogFeed as Component } from "./";
import mocks from "./mocks.json";
import { storiesOf } from "@storybook/react";

mocks.forEach((variation) => {
  storiesOf("BlogFeed", Component).add("Default", () => (
    <Component {...variation} />
  ));
});
