// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment, import/extensions, import/no-unresolved
// @ts-ignore: No declaration file
import icons from '@lmc-eu/spirit-icons/dist/icons';
import DocsSection from '../../../../docs/DocsSections';
import { IconsProvider } from '../../../context';
import DropdownDefault from './DropdownDefault';
import DropdownTopRight from './DropdownTopRight';
import DropdownDisabledAutoclose from './DropdownDisabledAutoclose';
import DropdownLongerContent from './DropdownLongerContent';
import DropdownFullwidthAll from './DropdownFullwidthAll';
import DropdownFullwidthMobileOnly from './DropdownFullwidthMobileOnly';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IconsProvider value={icons}>
      <DocsSection title="Basic usage with default align">
        <DropdownDefault />
      </DocsSection>
      <DocsSection title="Usage with align to top right">
        <DropdownTopRight />
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
