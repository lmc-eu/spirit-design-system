// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: No declaration file -- @see https://jira.almacareer.tech/browse/DS-561
import icons from '@lmc-eu/spirit-icons/icons';
import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSection';
import { IconsProvider } from '../../../context';
import SegmentedControlContentVariants from './SegmentedControlContentVariants';
import SegmentedControlDesignVariants from './SegmentedControlDesignVariants';
import SegmentedControlMultipleSelection from './SegmentedControlMultipleSelection';
import SegmentedControlWithDisableItem from './SegmentedControlWithDisableItem';
import SegmentedControlFluid from './SegmentedControlFluid';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IconsProvider value={icons}>
      <DocsSection title="Design Variants">
        <SegmentedControlDesignVariants />
      </DocsSection>
      <DocsSection title="Content Variants">
        <SegmentedControlContentVariants />
      </DocsSection>
      <DocsSection title="Multiple Selection">
        <SegmentedControlMultipleSelection />
      </DocsSection>
      <DocsSection title="Variant with Disabled Item">
        <SegmentedControlWithDisableItem />
      </DocsSection>
      <DocsSection title="Fluid">
        <SegmentedControlFluid />
      </DocsSection>
    </IconsProvider>
  </React.StrictMode>,
);
