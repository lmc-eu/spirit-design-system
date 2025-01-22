// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment, import/extensions, import/no-unresolved
// @ts-ignore: No declaration file -- @see https://jira.almacareer.tech/browse/DS-561
import icons from '@lmc-eu/spirit-icons/icons';
import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSections';
import { IconsProvider } from '../../../context';
import NavigationHorizontal from './NavigationHorizontal';
import NavigationHorizontalWithAction from './NavigationHorizontalWithAction';
import NavigationHorizontalWithButtons from './NavigationHorizontalWithButtons';
import NavigationHorizontalWithDropdown from './NavigationHorizontalWithDropdown';
import NavigationVertical from './NavigationVertical';
import NavigationVerticalWithAction from './NavigationVerticalWithAction';
import NavigationVerticalWithButtons from './NavigationVerticalWithButtons';
import NavigationVerticalWithCollapse from './NavigationVerticalWithCollapse';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IconsProvider value={icons}>
      <DocsSection title="Horizontal Navigation" stackAlignment="stretch">
        <NavigationHorizontal />
      </DocsSection>
      <DocsSection title="Vertical Navigation" stackAlignment="stretch">
        <NavigationVertical />
      </DocsSection>
      <DocsSection title="Horizontal Navigation with NavigationAction" stackAlignment="stretch">
        <NavigationHorizontalWithAction />
      </DocsSection>
      <DocsSection title="Vertical Navigation with NavigationAction" stackAlignment="stretch">
        <NavigationVerticalWithAction />
      </DocsSection>
      <DocsSection title="Horizontal Navigation with Buttons" stackAlignment="stretch">
        <NavigationHorizontalWithButtons />
      </DocsSection>
      <DocsSection title="Vertical Navigation with Buttons" stackAlignment="stretch">
        <NavigationVerticalWithButtons />
      </DocsSection>
      <DocsSection title="Nested Horizontal Navigation with Dropdown" stackAlignment="stretch">
        <NavigationHorizontalWithDropdown />
      </DocsSection>
      <DocsSection title="Nested Vertical Navigation with Collapse" stackAlignment="stretch">
        <NavigationVerticalWithCollapse />
      </DocsSection>
    </IconsProvider>
  </React.StrictMode>,
);
