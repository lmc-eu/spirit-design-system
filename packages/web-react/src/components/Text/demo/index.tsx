// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment, import/extensions, import/no-unresolved
// @ts-ignore: No declaration file
import icons from '@lmc-eu/spirit-icons/dist/icons';
import { IconsProvider } from '../../../context';
import DocsSection from '../../../../docs/DocsSections';
import Text from './Text';
import TextSizes from './TextSizes';
import TextEmphasis from './TextEmphasis';
import BodyTypography from './TextAllCombinations';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IconsProvider value={icons}>
      <DocsSection title="Default">
        <Text {...Text.args} />
      </DocsSection>
      <DocsSection title="Sizes">
        <TextSizes />
      </DocsSection>
      <DocsSection title="Emphasis">
        <TextEmphasis />
      </DocsSection>
      <DocsSection title="Body Typography">
        <BodyTypography />
      </DocsSection>
    </IconsProvider>
  </React.StrictMode>,
);
