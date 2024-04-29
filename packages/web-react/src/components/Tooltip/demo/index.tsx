// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment, import/extensions, import/no-unresolved
// @ts-ignore: No declaration file -- @see https://jira.almacareer.tech/browse/DS-561
import icons from '@lmc-eu/spirit-icons/icons';
import DocsSection from '../../../../docs/DocsSections';
import { IconsProvider } from '../../../context';
import TooltipPlacements from './TooltipPlacements';
import TooltipDefault from './TooltipDefault';
import TooltipDismissible from './TooltipDismissible';
import TooltipDismissibleViaJS from './TooltipDismissibleViaJS';
import TooltipHover from './TooltipHover';
import TooltipIcon from './TooltipIcon';
import TooltipAdvancedFloating from './TooltipAdvancedFloating';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IconsProvider value={icons}>
      <DocsSection title="Placements" stackAlignment="stretch">
        <TooltipPlacements />
      </DocsSection>
      <DocsSection title="Default">
        <TooltipDefault />
      </DocsSection>
      <DocsSection title="Dismissible Tooltip">
        <TooltipDismissible />
      </DocsSection>
      <DocsSection title="Dismissible Tooltip via JS API">
        <TooltipDismissibleViaJS />
      </DocsSection>
      <DocsSection title="Tooltip Only on Hover">
        <TooltipHover />
      </DocsSection>
      <DocsSection title="Tooltip on Icon Component">
        <TooltipIcon />
      </DocsSection>
      <DocsSection title="Advanced Floating Functionality" stackAlignment="stretch">
        <TooltipAdvancedFloating />
      </DocsSection>
    </IconsProvider>
  </React.StrictMode>,
);
