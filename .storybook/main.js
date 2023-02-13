const { propNames } = require('@chakra-ui/styled-system');
const excludedPropNames = propNames.concat([
  'as',
  'apply',
  'sx',
  '__css',
  'icon',
  'iconSize',
  'iconColor',
  'inputProps',
]);

module.exports = {
  stories: [],
  addons: ['@storybook/addon-essentials', 'storybook-addon-designs'],

  // With this configuration storybook autogenerates the controls based on the types of the components
  // Found this solution here: https://github.com/storybookjs/storybook/issues/17388#issuecomment-1030925926
  // To hide some Chakra props, we are following this solution: https://github.com/chakra-ui/chakra-ui/issues/2009#issuecomment-852793946
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      tsconfigPath: './tsconfig.base.json',
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => {
        const isStyledSystemProp = excludedPropNames.includes(prop.name);
        const isHTMLElementProp =
          prop.parent?.fileName.includes('node_modules') ?? false;
        return !(isStyledSystemProp || isHTMLElementProp);
      },
    },
  },
  // uncomment the property below if you want to apply some webpack config globally
  // webpackFinal: async (config, { configType }) => {
  //   // Make whatever fine-grained changes you need that should apply to all storybook configs

  //   // Return the altered config
  //   return config;
  // },
};
