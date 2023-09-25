// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment, import/extensions, import/no-unresolved
// @ts-ignore: No declaration file
import icons from '@lmc-eu/spirit-icons/dist/icons';
import DocsSection from '../../../../docs/DocsSections';
import { IconsProvider } from '../../../context';
import CollapseDefault from './CollapseDefault';
import CollapseOpenOnInit from './CollapseOpenOnInit';
import CollapseVisibilityBreakpointTablet from './CollapseVisibilityBreakpointTablet';
import CollapseVisibilityBreakpointDesktop from './CollapseVisibilityBreakpointDesktop';
import CollapseHideTrigger from './CollapseHideTrigger';
import CollapseHelperClass from './CollapseHelperClass';
import CollapseMultipleTriggers from './CollapseMultipleTriggers';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IconsProvider value={icons}>
      <DocsSection title="Default">
        <CollapseDefault />
      </DocsSection>
      <DocsSection title="Open on Load">
        <CollapseOpenOnInit />
      </DocsSection>
      <DocsSection title="Destroy Collapsing on Tablet" tag="Resize your viewport to test">
        <CollapseVisibilityBreakpointTablet />
      </DocsSection>
      <DocsSection title="Destroy Collapsing on Desktop" tag="Resize your viewport to test">
        <CollapseVisibilityBreakpointDesktop />
      </DocsSection>
      <DocsSection title="One-time Inline Expanding">
        <CollapseHideTrigger />
      </DocsSection>
      <DocsSection title="Toggle Trigger Text">
        <CollapseHelperClass />
      </DocsSection>
      <DocsSection title="Multiple Triggers">
        <CollapseMultipleTriggers />
      </DocsSection>
    </IconsProvider>
  </React.StrictMode>,
);
