import React from 'react';
import DocsSection from '../../../../docs/DocsSection';
import { FillVariants } from '../../../constants';
import { Grid } from '../../Grid';
import SegmentedControlItemsFactory from './SegmentedControlItemsFactory';

const contentVariants = {
  LABEL_ONLY: 'label-only',
  LABEL_ICON: 'label-icon',
  ICON_ONLY: 'icon-only',
} as const;

const SegmentedControlContentVariants = () => (
  <Grid alignmentX="stretch" alignmentY="stretch" cols={{ desktop: 3, mobile: 1 }} spacingY="space-1100">
    {Object.values(contentVariants).map((contentVariant) => (
      <DocsSection key={`content-variant-${contentVariant}`} container="none" hasPadding={false} title={contentVariant}>
        <SegmentedControlItemsFactory
          variant={FillVariants.OUTLINE}
          name={`segmented-icon-${contentVariant}`}
          contentVariant={contentVariant}
        />
      </DocsSection>
    ))}
  </Grid>
);

export default SegmentedControlContentVariants;
