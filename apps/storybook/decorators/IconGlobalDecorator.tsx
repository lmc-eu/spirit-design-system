// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: No declaration file
import type { Decorator } from '@storybook/react';
import { IconsProvider } from '@alma-oss/spirit-web-react';
// @ts-ignore: No declaration file
import icons from '@alma-oss/spirit-icons/icons';

export const IconGlobalDecorator: Decorator = (Story, context) => (
  <IconsProvider value={icons}>
    <Story {...context} />
  </IconsProvider>
);
