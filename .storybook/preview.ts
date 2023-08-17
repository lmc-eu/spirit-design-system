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
    expanded: true,
    sort: 'alpha',
    hideNoControlsWarning: true,
  },
  docs: {
    theme: SpiritTheme,
  },
  options: {
    storySort: {
      order: ['Introduction', ['Installation', 'Branding'], 'Colors', 'Typography', 'Layout', 'Components'],
    },
  },
};

export const decorators = [IconGlobalDecorator];
