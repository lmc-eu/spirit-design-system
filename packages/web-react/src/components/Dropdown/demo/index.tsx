// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment, import/extensions, import/no-unresolved
// @ts-ignore: No declaration file
import icons from '@lmc-eu/spirit-icons/dist/icons';
import { IconsProvider } from '../../../context';
import DocsSection from '../../../../docs/DocsSections';
import Dropdown from './Dropdown';
import DropdownDisableAutoClose from './DropdownDisableAutoClose';
import DropdownPlacements from './DropdownPlacements';
import DropdownFullWidthMode from './DropdownFullWidthMode';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IconsProvider value={icons}>
      <DocsSection title="Default">
        <Dropdown {...Dropdown.args} />
      </DocsSection>
      <DocsSection title="Disable Auto Close">
        <DropdownDisableAutoClose />
      </DocsSection>
      <DocsSection title="Placements">
        <DropdownPlacements />
      </DocsSection>
      <DocsSection title="Full Width Mode">
        <DropdownFullWidthMode />
      </DocsSection>
    </IconsProvider>
  </React.StrictMode>,
);
