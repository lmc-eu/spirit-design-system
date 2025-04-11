import React from 'react';
import DocsStack from '../../../../docs/DocsStack';
import { FillVariants } from '../../../constants';
import SegmentedControl from '../SegmentedControl';
import SegmentedControlItem from '../SegmentedControlItem';

const variants = Object.values(FillVariants).reverse();

const SegmentedControlMultipleSelection = () => {
  return Object.values(variants).map((variant) => (
    <section>
      <DocsStack stackAlignment="start">
        <SegmentedControl
          label={`Label for ${variant}`}
          name={`segmented-${variant}`}
          variant={variant}
          hasMultipleSelection
        >
          <SegmentedControlItem id={`segmentedControl-multiple-${variant}-1`} value="value-1">
            Label
          </SegmentedControlItem>
          <SegmentedControlItem id={`segmentedControl-multiple-${variant}-2`} value="value-2">
            Label
          </SegmentedControlItem>
          <SegmentedControlItem id={`segmentedControl-multiple-${variant}-3`} value="value-3">
            Label
          </SegmentedControlItem>
        </SegmentedControl>
      </DocsStack>
    </section>
  ));
};

export default SegmentedControlMultipleSelection;
