// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment, import/extensions, import/no-unresolved
// @ts-ignore: No declaration file -- @see https://jira.almacareer.tech/browse/DS-561
import icons from '@lmc-eu/spirit-icons/icons';
import DocsSection from '../../../../docs/DocsSections';
import { IconsProvider } from '../../../context';
import DropdownDisabledAutoclose from './DropdownDisabledAutoclose';
import DropdownEnhancedShadow from './DropdownEnhancedShadow';
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
      <DocsSection title="Various items" stackAlignment="stretch">
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
      <DocsSection title="Feature Flag: Enhanced Shadow">
        <DropdownEnhancedShadow />
      </DocsSection>
    </IconsProvider>
  </React.StrictMode>,
);
