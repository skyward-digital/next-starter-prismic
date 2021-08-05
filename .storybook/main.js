const { getStoriesPaths } = require("slice-machine-ui/helpers/storybook");

module.exports = {
  stories: [
    ...getStoriesPaths(),
    "../slices/**/*.stories.[tj]s",
    "../components/**/*.stories.[tj]s",
  ].map((storyPath) => storyPath.replace(/\\/g, "/")),
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
};
