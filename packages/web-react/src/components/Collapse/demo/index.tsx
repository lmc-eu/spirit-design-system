// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment, import/extensions, import/no-unresolved
// @ts-ignore: No declaration file
import icons from '@lmc-eu/spirit-icons/dist/icons';
import { IconsProvider } from '../../../context';
import DocsSection from '../../../../docs/DocsSections';
import Collapse from './Collapse';
import CollapseHideOnClose from './CollapseHideOnClose';
import CollapseShowMore from './CollapseShowMore';
import CollapseBreakpoints from './CollapseBreakpoints';
import CollapseUncontrolled from './CollapseUncontrolled';
import CollapseUncontrolledHideOnClose from './CollapseUncontrolledHideOnClose';
import CollapseUncontrolledShowMore from './CollapseUncontrolledShowMore';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IconsProvider value={icons}>
      <DocsSection title="Default">
        <Collapse isOpen />
      </DocsSection>
      <DocsSection title="Hide On Close">
        <CollapseHideOnClose isOpen />
      </DocsSection>
      <DocsSection title="Show More">
        <CollapseShowMore isOpen />
      </DocsSection>
      <DocsSection title="Breakpoints">
        <CollapseBreakpoints isOpen />
      </DocsSection>
      <DocsSection title="Uncontrolled">
        <CollapseUncontrolled isOpen />
      </DocsSection>
      <DocsSection title="Uncontrolled Hide On Close">
        <CollapseUncontrolledHideOnClose isOpen />
      </DocsSection>
      <DocsSection title="Uncontrolled Show More">
        <CollapseUncontrolledShowMore isOpen />
      </DocsSection>
    </IconsProvider>
  </React.StrictMode>,
);
