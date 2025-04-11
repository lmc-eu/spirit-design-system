import React from 'react';
import DocsStack from '../../../../docs/DocsStack';
import { FillVariants } from '../../../constants';
import { Grid } from '../../Grid';
import SegmentedControl from '../SegmentedControl';
import SegmentedControlItem from '../SegmentedControlItem';

const variants = Object.values(FillVariants).reverse();

const SegmentedControlDesignVariants = () => {
  return (
    <Grid alignmentXStretch alignmentYStretch cols={{ desktop: 3, mobile: 1 }} spacingY="space-1100">
      {variants.map((variant) => (
        <section>
          <h3 className="docs-Heading">{variant}</h3>
          <DocsStack stackAlignment="start">
            <SegmentedControl label={`Label for ${variant}`} name={`segmented-${variant}-design`} variant={variant}>
              <SegmentedControlItem id={`segmentedControl-${variant}-1`} value="value-1">
                Label
              </SegmentedControlItem>
              <SegmentedControlItem id={`segmentedControl-${variant}-2`} value="value-2">
                Label
              </SegmentedControlItem>
              <SegmentedControlItem id={`segmentedControl-${variant}-3`} value="value-3">
                Label
              </SegmentedControlItem>
            </SegmentedControl>
          </DocsStack>
        </section>
      ))}
    </Grid>
  );
};

export default SegmentedControlDesignVariants;
