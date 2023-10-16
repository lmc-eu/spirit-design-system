// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment, import/extensions, import/no-unresolved
// @ts-ignore: No declaration file
import icons from '@lmc-eu/spirit-icons/dist/icons';
import DocsSection from '../../../../docs/DocsSections';
import { IconsProvider } from '../../../context';
import TooltipPlacements from './TooltipPlacements';
import TooltipDefault from './TooltipDefault';
import TooltipOnHover from './TooltipOnHover';
import TooltipClickable from './TooltipClickable';
import TooltipDismissible from './TooltipDismissible';
import TooltipFloatingUI from './TooltipFloatingUi';
import TooltipDismissibleViaJS from './TooltipDismissibleViaJS';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IconsProvider value={icons}>
      <DocsSection title="Placements">
        <TooltipPlacements />
      </DocsSection>
      <DocsSection title="Static Tooltip (No Interaction)">
        <TooltipDefault />
      </DocsSection>
      <DocsSection title="Tooltip on Hover (Pure CSS)">
        <TooltipOnHover />
      </DocsSection>
      <DocsSection title="Tooltip on Click (JavaScript)">
        <TooltipClickable />
      </DocsSection>
      <DocsSection title="Dismissible Tooltip">
        <TooltipDismissible />
      </DocsSection>
      <DocsSection title="Dismissible Tooltip via JS API">
        <TooltipDismissibleViaJS />
      </DocsSection>
      <DocsSection title="Advanced Positioning">
        <TooltipFloatingUI />
      </DocsSection>
    </IconsProvider>
  </React.StrictMode>,
);
