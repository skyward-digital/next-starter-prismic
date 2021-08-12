import { BlogCard as Component } from "./";
import mocks from "./mocks.json";
import { storiesOf } from "@storybook/react";

mocks.forEach((variation) => {
  storiesOf("BlogCard", Component).add("Default", () => (
    <Component {...variation} />
  ));
});
