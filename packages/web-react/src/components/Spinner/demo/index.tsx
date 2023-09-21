// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment, import/extensions, import/no-unresolved
// @ts-ignore: No declaration file
import icons from '@lmc-eu/spirit-icons/dist/icons';
import DocsSection from '../../../../docs/DocsSections';
import { IconsProvider } from '../../../context';
import SpinnerColors from './SpinnerColors';
import SpinnerDefault from './SpinnerDefault';
import SpinnerIconProps from './SpinnerIconProps';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IconsProvider value={icons}>
      <DocsSection title="Default">
        <SpinnerDefault />
      </DocsSection>
      <DocsSection title="Colors">
        <SpinnerColors />
      </DocsSection>
      <DocsSection title="Icon Props">
        <SpinnerIconProps />
      </DocsSection>
    </IconsProvider>
  </React.StrictMode>,
);
