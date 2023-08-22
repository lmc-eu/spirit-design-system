// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment, import/extensions, import/no-unresolved
// @ts-ignore: No declaration file
import icons from '@lmc-eu/spirit-icons/dist/icons';
import { IconsProvider } from '../../../context';
import DocsSection from '../../../../docs/DocsSections';
import Tooltip from './Tooltip';
import TooltipDismissible from './TooltipDismissible';
import TooltipClickable from './TooltipClickable';
import TooltipFloatingUi from './TooltipFloatingUi';
import TooltipDismissibleFloatingUi from './TooltipDismissibleFloatingUi';
import TooltipUncontrolled from './TooltipUncontrolled';
import TooltipDismissibleUncontrolled from './TooltipDismissibleUncontrolled';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IconsProvider value={icons}>
      <DocsSection title="Default">
        <Tooltip />
      </DocsSection>
      <DocsSection title="Dismissible">
        <TooltipDismissible />
      </DocsSection>
      <DocsSection title="Clickable">
        <TooltipClickable />
      </DocsSection>
      <DocsSection title="Floating UI">
        <TooltipFloatingUi />
      </DocsSection>
      <DocsSection title="Dismissible Floating UI">
        <TooltipDismissibleFloatingUi />
      </DocsSection>
      <DocsSection title="Uncontrolled">
        <TooltipUncontrolled />
      </DocsSection>
      <DocsSection title="Dismissible Uncontrolled">
        <TooltipDismissibleUncontrolled />
      </DocsSection>
    </IconsProvider>
  </React.StrictMode>,
);
