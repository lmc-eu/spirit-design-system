import React from 'react';
import DocsSection from '../../../../docs/DocsSection';
import { FillVariants } from '../../../constants';
import { Grid } from '../../Grid';
import SegmentedControlItemsFactory from './SegmentedControlItemsFactory';

const SegmentedControlDesignVariants = () => (
  <Grid alignmentX="stretch" alignmentY="stretch" cols={{ desktop: 3, mobile: 1 }} spacingY="space-1100">
    {Object.values(FillVariants)
      .reverse()
      .map((variant) => (
        <DocsSection key={`design-variant-${variant}`} hasPadding={false} container="none" title={variant}>
          <SegmentedControlItemsFactory variant={variant} name={`segmented-${variant}-design`} />
        </DocsSection>
      ))}
  </Grid>
);

export default SegmentedControlDesignVariants;
