// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment, import/extensions, import/no-unresolved
// @ts-ignore: No declaration file
import icons from '@lmc-eu/spirit-icons/dist/icons';
import DocsSection from '../../../../docs/DocsSections';
import { IconsProvider } from '../../../context';
import DropdownModernDefault from './DropdownModernDefault';
import DropdownModernTopRight from './DropdownModernTopRight';
import DropdownModernDisabledAutoclose from './DropdownModernDisabledAutoclose';
import DropdownModernLongerContent from './DropdownModernLongerContent';
import DropdownModernFullwidthAll from './DropdownModernFullwidthAll';
import DropdownModernFullwidthMobileOnly from './DropdownModernFullwidthMobileOnly';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IconsProvider value={icons}>
      <DocsSection title="Basic usage with default align">
        <DropdownModernDefault />
      </DocsSection>
      <DocsSection title="Usage with align to top right">
        <DropdownModernTopRight />
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
    </IconsProvider>
  </React.StrictMode>,
);
