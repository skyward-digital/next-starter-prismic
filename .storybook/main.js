const { getStoriesPaths } = require("slice-machine-ui/helpers/storybook");

module.exports = {
  stories: [
    ...getStoriesPaths(),
    "../.slicemachine/assets/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../customtypes/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../slices/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../components/**/*.stories.@(js|jsx|ts|tsx|mdx)",
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
