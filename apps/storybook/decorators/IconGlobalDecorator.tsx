// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: No declaration file
import { IconsProvider } from '@lmc-eu/spirit-web-react/src/context';
import icons from '../../../packages/icons/dist/icons';

export const IconGlobalDecorator = (Story) => (
  <IconsProvider value={icons}>
    <Story />
  </IconsProvider>
);
