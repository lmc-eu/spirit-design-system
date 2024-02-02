// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment, import/extensions, import/no-unresolved
// @ts-ignore: No declaration file
import icons from '@lmc-eu/spirit-icons/dist/icons';
import DocsSection from '../../../../docs/DocsSections';
import { IconsProvider } from '../../../context';
import TooltipDefault from './TooltipDefault';
import TooltipDismissible from './TooltipDismissible';
import TooltipDismissibleViaJS from './TooltipDismissibleViaJS';
import TooltipOnHover from './TooltipOnHover';
import TooltipPlacements from './TooltipPlacements';
import TooltipWithFloatingUI from './TooltipWithFloatingUI';
import TooltipIcon from './TooltipIcon';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IconsProvider value={icons}>
      <DocsSection title="Placements" stackAlignment="stretch">
        <TooltipPlacements />
      </DocsSection>
      <DocsSection title="Static Tooltip (No Interaction)">
        <TooltipDefault />
      </DocsSection>
      <DocsSection title="Tooltip on Hover (Pure CSS)" stackAlignment="stretch">
        <TooltipOnHover />
      </DocsSection>
      <DocsSection title="Dismissible Tooltip">
        <TooltipDismissible />
      </DocsSection>
      <DocsSection title="Dismissible Tooltip via JS API and Floating UI">
        <TooltipDismissibleViaJS />
      </DocsSection>
      <DocsSection title="Tooltip on Icon Component">
        <TooltipIcon />
      </DocsSection>
      <DocsSection title="Advanced Floating Functionality" stackAlignment="stretch">
        <TooltipWithFloatingUI />
      </DocsSection>
    </IconsProvider>
  </React.StrictMode>,
);
