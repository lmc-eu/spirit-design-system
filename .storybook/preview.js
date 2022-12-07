import SpiritTheme from './spirit.theme';
import '../.storybook/assets/stylesheets/index.scss';
import { IconGlobalDecorator } from './decorators/IconGlobalDecorator';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: SpiritTheme,
  },
  options: {
    storySort: {
      order: ['Introduction', ['Installation', 'Branding'], 'Colors', 'Typography', 'Layout', 'Components'],
    },
  },
  viewMode: 'docs',
};

export const decorators = [
  IconGlobalDecorator,
];
