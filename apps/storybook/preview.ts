import './assets/stylesheets/index.scss';
import { IconGlobalDecorator } from './decorators/IconGlobalDecorator';
import SpiritTheme from './spirit.theme';

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
      order: [
        'Introduction',
        ['Installation', 'Branding'],
        'Colors',
        'Typography',
        'Layout',
        'Components',
        'Deprecated',
        'Experimental',
        'Examples',
      ],
    },
  },
};

export const decorators = [IconGlobalDecorator];
export const tags = ['autodocs'];
