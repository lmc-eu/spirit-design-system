// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSections';
import StackFormFields from './StackFormFields';
import StackBlocks from './StackBlocks';
import StackBlocksWithVerticalSpacing from './StackBlocksWithVerticalSpacing';
import StackBlocksWithInnerDividersAndVerticalSpacing from './StackBlocksWithInnerDividersAndVerticalSpacing';
import StackBlocksWithInnerAndOuterDividersAndVerticalSpacing from './StackBlocksWithInnerAndOuterDividersAndVerticalSpacing';
import StackBlocksWithInnerDividersWithoutVerticalSpacing from './StackBlocksWithInnerDividersWithoutVerticalSpacing';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DocsSection title="Stacked Form Fields" stackAlignment="stretch">
      <StackFormFields />
    </DocsSection>
    <DocsSection title="Stacked Blocks" stackAlignment="stretch">
      <StackBlocks />
    </DocsSection>
    <DocsSection title="Stacked Blocks with Vertical Spacing" stackAlignment="stretch">
      <StackBlocksWithVerticalSpacing />
    </DocsSection>
    <DocsSection title="Stacked Blocks with Inner Dividers and Vertical Spacing" stackAlignment="stretch">
      <StackBlocksWithInnerDividersAndVerticalSpacing />
    </DocsSection>
    <DocsSection title="Stacked Blocks with Inner and Outer Dividers and Vertical Spacing" stackAlignment="stretch">
      <StackBlocksWithInnerAndOuterDividersAndVerticalSpacing />
    </DocsSection>
    <DocsSection title="Stacked Blocks with Inner Dividers without Vertical Spacing" stackAlignment="stretch">
      <StackBlocksWithInnerDividersWithoutVerticalSpacing />
    </DocsSection>
  </React.StrictMode>,
);
