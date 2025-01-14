// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment, import/extensions, import/no-unresolved
// @ts-ignore: No declaration file -- @see https://jira.almacareer.tech/browse/DS-561
import icons from '@lmc-eu/spirit-icons/icons';
import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSections';
import { IconsProvider } from '../../../context';
import DropdownAlignment from './DropdownAlignment';
import DropdownDisabledAutoclose from './DropdownDisabledAutoclose';
import DropdownFullwidthAll from './DropdownFullwidthAll';
import DropdownFullwidthMobileOnly from './DropdownFullwidthMobileOnly';
import DropdownLongerContent from './DropdownLongerContent';
import DropdownPlacements from './DropdownPlacements';
import DropdownVariousItems from './DropdownVariousItems';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IconsProvider value={icons}>
      <DocsSection title="Placements" stackAlignment="stretch">
        <DropdownPlacements />
      </DocsSection>
      <DocsSection title="Alignment" stackAlignment="stretch">
        <DropdownAlignment />
      </DocsSection>
      <DocsSection title="Various items">
        <DropdownVariousItems />
      </DocsSection>
      <DocsSection title="Usage with disabled auto close">
        <DropdownDisabledAutoclose />
      </DocsSection>
      <DocsSection title="Longer content">
        <DropdownLongerContent />
      </DocsSection>
      <DocsSection title="Full-width mode 'all'">
        <DropdownFullwidthAll />
      </DocsSection>
      <DocsSection title="Full-width mode 'mobile-only'">
        <DropdownFullwidthMobileOnly />
      </DocsSection>
    </IconsProvider>
  </React.StrictMode>,
);
