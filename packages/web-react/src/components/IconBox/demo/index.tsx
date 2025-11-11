// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment, import/extensions, import/no-unresolved
// @ts-ignore: No declaration file -- @see https://jira.almacareer.tech/browse/DS-561
import icons from '@lmc-eu/spirit-icons/icons';
import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSection';
import { IconsProvider } from '../../../context';
import IconBoxColorVariants from './IconBoxColorVariants';
import IconBoxDefault from './IconBoxDefault';
import IconBoxResponsiveSize from './IconBoxResponsiveSize';
import IconBoxShapes from './IconBoxShapes';
import IconBoxSizes from './IconBoxSizes';
import IconBoxWithoutBorder from './IconBoxWithoutBorder';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IconsProvider value={icons}>
      <DocsSection title="Default">
        <IconBoxDefault />
      </DocsSection>
      <DocsSection title="Sizes">
        <IconBoxSizes />
      </DocsSection>
      <DocsSection title="Responsive Sizes">
        <IconBoxResponsiveSize />
      </DocsSection>
      <DocsSection title="Shapes">
        <IconBoxShapes />
      </DocsSection>
      <DocsSection title="Without Border">
        <IconBoxWithoutBorder />
      </DocsSection>
      <DocsSection title="Color Variants">
        <IconBoxColorVariants />
      </DocsSection>
    </IconsProvider>
  </React.StrictMode>,
);
