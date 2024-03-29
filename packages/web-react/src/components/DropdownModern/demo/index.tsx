// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment, import/extensions, import/no-unresolved
// @ts-ignore: No declaration file
import icons from '@lmc-eu/spirit-icons/dist/icons';
import DocsSection from '../../../../docs/DocsSections';
import { IconsProvider } from '../../../context';
import DropdownModernPlacements from './DropdownModernPlacements';
import DropdownModernVariousItems from './DropdownVariousItems';
import DropdownModernDisabledAutoclose from './DropdownModernDisabledAutoclose';
import DropdownModernLongerContent from './DropdownModernLongerContent';
import DropdownModernFullwidthAll from './DropdownModernFullwidthAll';
import DropdownModernFullwidthMobileOnly from './DropdownModernFullwidthMobileOnly';
import DropdownModernEnhancedShadow from './DropdownModernEnhancedShadow';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IconsProvider value={icons}>
      <DocsSection title="Placements" stackAlignment="stretch">
        <DropdownModernPlacements />
      </DocsSection>
      <DocsSection title="Various items">
        <DropdownModernVariousItems />
      </DocsSection>
      <DocsSection title="Usage with disabled auto close">
        <DropdownModernDisabledAutoclose />
      </DocsSection>
      <DocsSection title="Longer content">
        <DropdownModernLongerContent />
      </DocsSection>
      <DocsSection title="Full-width mode 'all'">
        <DropdownModernFullwidthAll />
      </DocsSection>
      <DocsSection title="Full-width mode 'mobile-only'">
        <DropdownModernFullwidthMobileOnly />
      </DocsSection>
      <DocsSection title="Feature Flag: Enhanced Shadow">
        <DropdownModernEnhancedShadow />
      </DocsSection>
    </IconsProvider>
  </React.StrictMode>,
);
