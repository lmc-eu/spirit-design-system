import React from 'react';
import DocsStack from '../../../../docs/DocsStack';
import { FillVariants } from '../../../constants';
import { Grid } from '../../Grid';
import SegmentedControlItemsFactory from './SegmentedControlItemsFactory';

const variants = Object.values(FillVariants).reverse();

const SegmentedControlDesignVariants = () => (
  <Grid alignmentX="stretch" alignmentY="stretch" cols={{ desktop: 3, mobile: 1 }} spacingY="space-1100">
    {variants.map((variant) => (
      <section key={`design-variant-${variant}`}>
        <h3 className="docs-Heading">{variant}</h3>
        <DocsStack stackAlignment="start">
          <SegmentedControlItemsFactory variant={variant} name={`segmented-${variant}-design`} />
        </DocsStack>
      </section>
    ))}
  </Grid>
);

export default SegmentedControlDesignVariants;
