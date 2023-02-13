import '@canvass/foundations/fonts';
import theme from '../src/theme';

window.env = {};

export const parameters = {
  options: {
    // Sorting stories documentation
    // https://storybook.js.org/docs/react/writing-stories/naming-components-and-hierarchy
    storySort: {
      order: ['Foundations', 'Typography', 'Forms', 'Data display', 'Overlay'],
    },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  chakra: {
    theme,
  },
};
