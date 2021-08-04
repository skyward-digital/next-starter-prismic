import { ArticleHero as Component } from "./";
import mocks from "./mocks.json";
import { storiesOf } from "@storybook/react";

mocks.forEach((variation) => {
  storiesOf("ArticleHero", Component).add("Default", () => (
    <Component {...variation} />
  ));
});
