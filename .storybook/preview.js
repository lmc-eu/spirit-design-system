import SpiritTheme from './spirit.theme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: SpiritTheme
  },
  options: {
    storySort: {
      order: ['Introduction', 'Colors', 'Typography', 'Layout', 'Components'],
    },
  },
}